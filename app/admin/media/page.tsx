"use client";

import React, { useState, useEffect } from "react";
import {
  Image as ImageIcon,
  Upload,
  Trash2,
  Copy,
  Check,
  Search,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function AdminMediaPage() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      if (res.ok) {
        const data = await res.json();
        setFiles(data.files || []);
      }
    } catch (err) {
      console.error("Failed to load media files:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (!uploadedFiles || uploadedFiles.length === 0) return;

    setUploading(true);
    try {
      for (let i = 0; i < uploadedFiles.length; i++) {
        const formData = new FormData();
        formData.append("file", uploadedFiles[i]);

        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const json = await res.json();
          alert(json.error || "Failed to upload image.");
        }
      }
      fetchMedia();
    } catch (err) {
      console.error(err);
      alert("An error occurred while uploading.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm(`Are you sure you want to delete ${filename}?`)) return;

    try {
      const res = await fetch("/api/admin/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename }),
      });

      if (res.ok) {
        fetchMedia();
      } else {
        alert("Failed to delete file.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = (url: string) => {
    const fullUrl = `${window.location.origin}${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header & Upload Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold font-serif text-slate-900 flex items-center">
            <ImageIcon className="w-5 h-5 mr-2 text-[#1B365D]" />
            Image & Media Gallery Hub
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Upload custom photos for faculty profiles, research lab equipment, and news updates.
          </p>
        </div>

        <label className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] transition-all shadow-md cursor-pointer">
          <Upload className="w-4 h-4 mr-1.5 text-[#C59B27]" />
          <span>{uploading ? "Uploading..." : "Upload New Images"}</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            disabled={uploading}
          />
        </label>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Filter images by filename..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D] shadow-sm"
        />
      </div>

      {/* Media Grid */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-500">
            Loading media files...
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-500 space-y-3">
            <ImageIcon className="w-10 h-10 text-slate-300 mx-auto" />
            <div>No uploaded images found. Click "Upload New Images" above to add photos.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFiles.map((file) => {
              const isCopied = copiedUrl === file.url;
              return (
                <div
                  key={file.name}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden group hover:border-[#1B365D] transition-all shadow-sm"
                >
                  <div className="h-40 relative bg-slate-900 overflow-hidden flex items-center justify-center">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="text-[11px] font-bold text-slate-800 truncate" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>{file.sizeKb} KB</span>
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-[#1B365D]"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="flex items-center space-x-1 pt-1 border-t border-slate-200">
                      <button
                        onClick={() => copyToClipboard(file.url)}
                        className={`flex-1 inline-flex items-center justify-center py-1.5 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                          isCopied
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 mr-1" />
                            <span>URL Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            <span>Copy Image URL</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleDelete(file.name)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-100 transition-colors cursor-pointer"
                        title="Delete Image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
