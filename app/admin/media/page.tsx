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
  Camera,
  X,
  Plus,
} from "lucide-react";

export default function AdminMediaPage() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Quick Add to Gallery Modal State
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryFormData, setGalleryFormData] = useState({
    title: "",
    category: "Research Labs",
    image: "",
    caption: "",
  });
  const [savingGallery, setSavingGallery] = useState(false);

  const categories = [
    "Research Labs",
    "Clinical Rotations",
    "Events & Seminars",
    "Student Life",
  ];

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

  const openAddToGalleryModal = (fileUrl: string, fileName: string) => {
    // Generate human readable title from filename
    const cleanTitle = fileName
      .replace(/\.[^/.]+$/, "")
      .replace(/_[0-9]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    setGalleryFormData({
      title: cleanTitle,
      category: "Research Labs",
      image: fileUrl,
      caption: "",
    });
    setIsGalleryModalOpen(true);
  };

  const handleSaveToGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryFormData.title || !galleryFormData.image) {
      alert("Please provide a title and image URL.");
      return;
    }

    setSavingGallery(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "gallery",
          action: "create",
          item: {
            ...galleryFormData,
            id: `g-${Date.now()}`,
          },
        }),
      });

      if (res.ok) {
        setIsGalleryModalOpen(false);
        alert("Image successfully added to the live website Gallery!");
      } else {
        alert("Failed to add image to gallery.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingGallery(false);
    }
  };

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Upload Box */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-1">
            <ImageIcon className="w-4 h-4" />
            <span>Digital Asset Manager</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#1B365D]">
            Image & Media Gallery Hub
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Upload custom photos for faculty profiles, research lab equipment, news updates, or publish directly into the photo gallery.
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden group hover:border-[#1B365D] transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 relative bg-slate-900 overflow-hidden flex items-center justify-center">
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
                          title="Open full size"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0 space-y-2">
                    {/* Add to Gallery quick button */}
                    <button
                      onClick={() => openAddToGalleryModal(file.url, file.name)}
                      className="w-full inline-flex items-center justify-center py-1.5 rounded-lg text-[10px] font-bold bg-[#4A1525]/10 text-[#4A1525] hover:bg-[#4A1525] hover:text-white transition-all cursor-pointer"
                    >
                      <Camera className="w-3 h-3 mr-1" />
                      <span>Publish to Gallery</span>
                    </button>

                    <div className="flex items-center space-x-1 border-t border-slate-200 pt-2">
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
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            <span>Copy URL</span>
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

      {/* Quick Add To Gallery Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <h2 className="text-lg font-serif font-bold text-[#1B365D] flex items-center">
                <Camera className="w-4 h-4 mr-2 text-[#C59B27]" />
                Publish Image to Gallery
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Add this uploaded image to the website's visual showcase.
              </p>
            </div>

            <form onSubmit={handleSaveToGallery} className="space-y-3">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={galleryFormData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Photo Title *
                </label>
                <input
                  type="text"
                  required
                  value={galleryFormData.title}
                  onChange={(e) =>
                    setGalleryFormData({ ...galleryFormData, title: e.target.value })
                  }
                  placeholder="e.g. Cleanroom Micro-Fabrication"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#4A1525]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Gallery Category *
                </label>
                <select
                  value={galleryFormData.category}
                  onChange={(e) =>
                    setGalleryFormData({ ...galleryFormData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:border-[#4A1525]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Caption / Description
                </label>
                <textarea
                  rows={2}
                  value={galleryFormData.caption}
                  onChange={(e) =>
                    setGalleryFormData({ ...galleryFormData, caption: e.target.value })
                  }
                  placeholder="Short description of this moment or equipment..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#4A1525]"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingGallery}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#4A1525] hover:bg-[#4A1525]/90 shadow-sm cursor-pointer"
                >
                  {savingGallery ? "Publishing..." : "Add to Gallery"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
