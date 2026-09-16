"use client";

import React, { useState, useEffect } from "react";
import {
  Newspaper,
  Plus,
  Trash2,
  Edit,
  Upload,
  X,
  Search,
  Calendar,
  Tag,
  ArrowUpRight,
} from "lucide-react";

export default function AdminNewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "Research",
    summary: "",
    image: "",
    author: "Department R&D Cell",
    readTime: "3 min read",
  });

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        setNews(data.news || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      title: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      category: "Research",
      summary: "",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      author: "Department R&D Cell",
      readTime: "3 min read",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingId(item.id);
    setFormData({
      title: item.title || "",
      date: item.date || "",
      category: item.category || "Research",
      summary: item.summary || "",
      image: item.image || "",
      author: item.author || "Department R&D Cell",
      readTime: item.readTime || "3 min read",
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (res.ok && json.url) {
        setFormData((prev) => ({ ...prev, image: json.url }));
      } else {
        alert(json.error || "Image upload failed");
      }
    } catch {
      alert("Error uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const action = editingId ? "update" : "create";
    const payloadItem = editingId
      ? { ...formData, id: editingId }
      : { ...formData, id: `news-${Date.now()}` };

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "news",
          action,
          item: payloadItem,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchNews();
      } else {
        alert("Failed to save news record.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete announcement: "${title}"?`)) return;

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "news",
          action: "delete",
          item: { id },
        }),
      });

      if (res.ok) {
        fetchNews();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredNews = news.filter(
    (n) =>
      n.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.summary?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold font-serif text-slate-900 flex items-center">
            <Newspaper className="w-5 h-5 mr-2 text-[#1B365D]" />
            News, Events & MoUs Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Post new research achievements, webinars, hospital MoUs, and conferences.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] transition-all shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5 text-[#C59B27]" />
          <span>Post New Announcement</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search news by keyword or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D] shadow-sm"
        />
      </div>

      {/* News List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-500">
            Loading announcements...
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500">
            No news items found.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-[10px]">
                      <span className="font-bold text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <span className="text-slate-400">• {item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-2 rounded-lg text-slate-600 hover:text-[#1B365D] hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Edit Announcement"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete Announcement"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-xl w-full rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#1B365D] text-white p-5 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider">
                {editingId ? "Edit Announcement" : "Post New Announcement"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              {/* Thumbnail Image Upload */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">Thumbnail Image</label>
                <div className="flex items-center space-x-4 p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                  <img
                    src={formData.image || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"}
                    alt="Preview"
                    className="w-20 h-14 rounded-xl object-cover border border-slate-300"
                  />
                  <div>
                    <label className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] cursor-pointer transition-colors">
                      <Upload className="w-3.5 h-3.5 mr-1.5 text-[#C59B27]" />
                      <span>{uploadingImage ? "Uploading..." : "Upload Cover Photo"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={uploadingImage}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  >
                    <option value="Research">Research & Grants</option>
                    <option value="Achievement">Achievement</option>
                    <option value="Event">Event / Seminar</option>
                    <option value="MoU">Hospital MoU</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date String</label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Summary / Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] shadow-md"
                >
                  Publish Announcement
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
