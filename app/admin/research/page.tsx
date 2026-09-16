"use client";

import React, { useState, useEffect } from "react";
import { FlaskConical, Plus, Trash2, Edit, X, Search } from "lucide-react";

export default function AdminResearchPage() {
  const [centers, setCenters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    code: "01",
    focus: "",
    lead: "",
    funding: "",
    icon: "Activity",
    specs: "",
  });

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        setCenters(data.centers || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      code: "01",
      focus: "",
      lead: "Dr. Arindam Banerjee",
      funding: "DST-SERB, Govt. of India",
      icon: "Activity",
      specs: "High-speed bioprinters, biosensor testing suites",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingId(item.id);
    setFormData({
      name: item.name || "",
      code: item.code || "01",
      focus: item.focus || "",
      lead: item.lead || "",
      funding: item.funding || "",
      icon: item.icon || "Activity",
      specs: Array.isArray(item.specs) ? item.specs.join(", ") : item.specs || "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const action = editingId ? "update" : "create";
    const payloadItem = {
      ...formData,
      id: editingId || `center-${Date.now()}`,
      specs: typeof formData.specs === "string" ? formData.specs.split(",").map((s) => s.trim()) : formData.specs,
    };

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "centers",
          action,
          item: payloadItem,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchContent();
      } else {
        alert("Failed to save research center record.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete research facility: "${name}"?`)) return;

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection: "centers",
          action: "delete",
          item: { id },
        }),
      });

      if (res.ok) {
        fetchContent();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = centers.filter((c) =>
    c.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold font-serif text-slate-900 flex items-center">
            <FlaskConical className="w-5 h-5 mr-2 text-[#1B365D]" />
            Research Centers & Facilities Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage interdisciplinary research centers, grants, and specialized lab equipment specs.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#142845] transition-all shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5 text-[#C59B27]" />
          <span>Add Research Center</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Filter centers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D] shadow-sm"
        />
      </div>

      {/* List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-500">Loading centers...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500">No centers found.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 flex flex-col sm:flex-row items-start justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded-md">
                    Center #{item.code}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 font-serif">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {item.focus}
                  </p>
                  <div className="text-[10px] text-slate-400 flex items-center space-x-3 pt-1">
                    <span>Lead: {item.lead}</span>
                    <span>• Funding: {item.funding}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-2 rounded-lg text-slate-600 hover:text-[#1B365D] hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#1B365D] text-white p-5 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider">
                {editingId ? "Edit Center" : "Add Research Center"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-lg text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Center Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Research Focus</label>
                <textarea
                  rows={2}
                  required
                  value={formData.focus}
                  onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B365D] mb-1">Lead Scientist</label>
                  <input
                    type="text"
                    value={formData.lead}
                    onChange={(e) => setFormData({ ...formData, lead: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B365D] mb-1">Funding Agency</label>
                  <input
                    type="text"
                    value={formData.funding}
                    onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>
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
                  Save Center
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
