"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Plus,
  Trash2,
  Edit,
  Upload,
  X,
  Check,
  Search,
  Mail,
  Award,
  AlertCircle,
} from "lucide-react";

export default function AdminFacultyPage() {
  const [faculty, setFaculty] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    degrees: "",
    specialization: "",
    email: "",
    phone: "",
    room: "",
    bio: "",
    avatar: "",
    publicationsCount: 0,
    patentsCount: 0,
  });

  const fetchFaculty = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        setFaculty(data.faculty || []);
      }
    } catch (err) {
      console.error("Failed to load faculty:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      designation: "Assistant Professor",
      degrees: "Ph.D. in Biomedical Engineering",
      specialization: "",
      email: "",
      phone: "+91 (033) 2587-900",
      room: "SET Building, Room 301",
      bio: "",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      publicationsCount: 10,
      patentsCount: 1,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingId(item.id);
    setFormData({
      name: item.name || "",
      designation: item.designation || "",
      degrees: item.degrees || "",
      specialization: item.specialization || "",
      email: item.email || "",
      phone: item.phone || "",
      room: item.room || "",
      bio: item.bio || "",
      avatar: item.avatar || "",
      publicationsCount: item.publicationsCount || 0,
      patentsCount: item.patentsCount || 0,
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
        setFormData((prev) => ({ ...prev, avatar: json.url }));
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
      : { ...formData, id: `fac-${Date.now()}` };

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "faculty",
          action,
          item: payloadItem,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchFaculty();
      } else {
        alert("Failed to save faculty record.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "faculty",
          action: "delete",
          item: { id },
        }),
      });

      if (res.ok) {
        fetchFaculty();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredFaculty = faculty.filter(
    (f) =>
      f.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.specialization?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold font-serif text-slate-900 flex items-center">
            <Users className="w-5 h-5 mr-2 text-[#1B365D]" />
            Faculty & Staff Directory Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Add, edit, or remove faculty members and upload profile photos.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] transition-all shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5 text-[#C59B27]" />
          <span>Add New Faculty</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search by name, designation, or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D] shadow-sm"
        />
      </div>

      {/* Faculty List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-500">
            Loading faculty directory...
          </div>
        ) : filteredFaculty.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500">
            No faculty members found matching your search.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredFaculty.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif">
                      {item.name}
                    </h3>
                    <div className="text-xs text-[#C59B27] font-semibold">
                      {item.designation}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {item.specialization}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center space-x-3">
                      <span>✉ {item.email}</span>
                      <span>• {item.publicationsCount || 0} Publications</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-2 rounded-lg text-slate-600 hover:text-[#1B365D] hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Edit Record"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete Record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-xl w-full rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#1B365D] text-white p-5 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider">
                {editingId ? "Edit Faculty Member" : "Add New Faculty Member"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              {/* Profile Image Preview & Upload */}
              <div className="flex items-center space-x-4 p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                <img
                  src={formData.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"}
                  alt="Preview"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#1B365D]"
                />
                <div className="space-y-1">
                  <label className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5 mr-1.5 text-[#C59B27]" />
                    <span>{uploadingImage ? "Uploading..." : "Upload Profile Photo"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                  </label>
                  <p className="text-[10px] text-slate-400">JPG, PNG or WebP</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Designation</label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Degrees & Alma Mater</label>
                <input
                  type="text"
                  value={formData.degrees}
                  onChange={(e) => setFormData({ ...formData, degrees: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specialization</label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Biography</label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
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
                  Save Record
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
