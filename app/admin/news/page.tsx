"use client";

import React, { useState, useEffect } from "react";
import {
  Newspaper,
  Calendar,
  Plus,
  Trash2,
  Edit,
  Upload,
  X,
  Search,
  Tag,
  Clock,
  MapPin,
  User,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function AdminNewsAndEventsPage() {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  const [news, setNews] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form State for News
  const [newsForm, setNewsForm] = useState({
    title: "",
    date: "",
    category: "Research",
    summary: "",
    image: "",
    author: "Department R&D Cell",
    readTime: "3 min read",
  });

  // Form State for Events
  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    time: "10:00 AM - 12:30 PM",
    location: "SET Bio-Computing Lab 401",
    speaker: "Dr. Sayanti Chowdhury & Department Faculty",
    category: "Research",
    desc: "",
  });

  const eventCategories = [
    "Research",
    "Symposium",
    "Webinar",
    "Workshop",
    "Guest Lecture",
    "Conference",
    "Seminar",
  ];

  const newsCategories = [
    "Research",
    "Grant",
    "Achievement",
    "Colloquium",
    "Partnership",
    "General",
  ];

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        setNews(data.news || []);
        setEvents(data.events || []);
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
    if (activeTab === "news") {
      setNewsForm({
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
    } else {
      setEventForm({
        title: "",
        date: "September 28, 2026",
        time: "10:00 AM - 12:30 PM",
        location: "SET Bio-Computing Lab 401",
        speaker: "Department Faculty",
        category: "Research",
        desc: "",
      });
    }
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingId(item.id);
    if (activeTab === "news") {
      setNewsForm({
        title: item.title || "",
        date: item.date || "",
        category: item.category || "Research",
        summary: item.summary || "",
        image: item.image || "",
        author: item.author || "Department R&D Cell",
        readTime: item.readTime || "3 min read",
      });
    } else {
      setEventForm({
        title: item.title || "",
        date: item.date || "",
        time: item.time || "10:00 AM - 12:30 PM",
        location: item.location || "SET Bio-Computing Lab 401",
        speaker: item.speaker || "Department Faculty",
        category: item.category || "Research",
        desc: item.desc || item.summary || "",
      });
    }
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
        setNewsForm((prev) => ({ ...prev, image: json.url }));
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
    const collection = activeTab === "news" ? "news" : "events";
    const action = editingId ? "update" : "create";
    const currentForm = activeTab === "news" ? newsForm : eventForm;

    const payloadItem = editingId
      ? { ...currentForm, id: editingId }
      : { ...currentForm, id: `${collection}-${Date.now()}` };

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection,
          action,
          item: payloadItem,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchContent();
      } else {
        alert(`Failed to save ${activeTab} record.`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    const collection = activeTab === "news" ? "news" : "events";
    if (!confirm(`Delete ${activeTab} item: "${title}"?`)) return;

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection,
          action: "delete",
          item: { id },
        }),
      });

      if (res.ok) {
        fetchContent();
      } else {
        alert("Failed to delete record.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const currentList = activeTab === "news" ? news : events;
  const filteredList = currentList.filter((item) =>
    (item.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.summary || item.desc || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-1">
            <Newspaper className="w-4 h-4" />
            <span>Communications Hub</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#1B365D]">
            News, Events & MoUs Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish department announcements, grants, and live calendar events that immediately reflect on the website.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#1B365D] text-white text-xs font-bold hover:bg-[#1B365D]/90 transition-all shadow-sm cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          <span>{activeTab === "news" ? "Post News Article" : "Schedule New Event"}</span>
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveTab("news");
              setSearchTerm("");
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "news"
                ? "bg-white text-[#1B365D] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>News & Grants ({news.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("events");
              setSearchTerm("");
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "events"
                ? "bg-white text-[#1B365D] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Calendar Events ({events.length})</span>
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
          />
        </div>
      </div>

      {/* List Display */}
      {loading ? (
        <div className="text-center py-20 text-xs font-semibold text-slate-400">
          Loading {activeTab}...
        </div>
      ) : filteredList.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
          {activeTab === "news" ? (
            <Newspaper className="w-10 h-10 mx-auto text-slate-300 mb-2" />
          ) : (
            <Calendar className="w-10 h-10 mx-auto text-slate-300 mb-2" />
          )}
          <p className="text-sm font-semibold">No {activeTab} found.</p>
          <p className="text-xs text-slate-400 mt-1">
            Click the button above to add a new {activeTab === "news" ? "article" : "event"}.
          </p>
        </div>
      ) : activeTab === "news" ? (
        /* News Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-[#1B365D] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1B365D]/10 text-[#1B365D]">
                    {item.category || "Research"}
                  </span>
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                </div>

                <div className="flex gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200"
                    />
                  )}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">By {item.author || "Department"}</span>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#1B365D] hover:bg-slate-100 cursor-pointer"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Event Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-600 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.category || "Event"}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.desc || item.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.time || "TBA"}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.location || "SET Building"}</span>
                  </div>
                  <div className="col-span-2 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.speaker || "Faculty"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">{item.id}</span>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-slate-100 cursor-pointer"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-serif font-bold text-[#1B365D]">
                {editingId
                  ? `Edit ${activeTab === "news" ? "News Article" : "Event"}`
                  : `Add New ${activeTab === "news" ? "News Article" : "Event"}`}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Saved changes immediately update the live website and event calendar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={activeTab === "news" ? newsForm.title : eventForm.title}
                  onChange={(e) =>
                    activeTab === "news"
                      ? setNewsForm({ ...newsForm, title: e.target.value })
                      : setEventForm({ ...eventForm, title: e.target.value })
                  }
                  placeholder={
                    activeTab === "news"
                      ? "e.g. DST-SERB Research Grant Secured"
                      : "e.g. Annual MedTech Bio-Design Challenge"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === "news" ? newsForm.date : eventForm.date}
                    onChange={(e) =>
                      activeTab === "news"
                        ? setNewsForm({ ...newsForm, date: e.target.value })
                        : setEventForm({ ...eventForm, date: e.target.value })
                    }
                    placeholder="e.g. September 28, 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={activeTab === "news" ? newsForm.category : eventForm.category}
                    onChange={(e) =>
                      activeTab === "news"
                        ? setNewsForm({ ...newsForm, category: e.target.value })
                        : setEventForm({ ...eventForm, category: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:border-[#1B365D]"
                  >
                    {(activeTab === "news" ? newsCategories : eventCategories).map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {activeTab === "events" ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Time
                      </label>
                      <input
                        type="text"
                        value={eventForm.time}
                        onChange={(e) =>
                          setEventForm({ ...eventForm, time: e.target.value })
                        }
                        placeholder="e.g. 10:00 AM - 12:30 PM"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Location / Venue
                      </label>
                      <input
                        type="text"
                        value={eventForm.location}
                        onChange={(e) =>
                          setEventForm({ ...eventForm, location: e.target.value })
                        }
                        placeholder="e.g. Auditorium Hall A"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Speaker / Lead
                    </label>
                    <input
                      type="text"
                      value={eventForm.speaker}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, speaker: e.target.value })
                      }
                      placeholder="e.g. Dr. Sayanti Chowdhury & Industry Mentors"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={eventForm.desc}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, desc: e.target.value })
                      }
                      placeholder="Summary of topics, clinical objectives, and key takeaways..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Article Summary / Body *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newsForm.summary}
                      onChange={(e) =>
                        setNewsForm({ ...newsForm, summary: e.target.value })
                      }
                      placeholder="Full announcement text, grant specifications, or partnership highlights..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Image URL or Upload
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={newsForm.image}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, image: e.target.value })
                        }
                        placeholder="/uploads/... or https://..."
                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                      />
                      <label className="px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 cursor-pointer flex items-center shrink-0">
                        <Upload className="w-3.5 h-3.5 mr-1" />
                        <span>{uploadingImage ? "..." : "Upload"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Author / Department
                      </label>
                      <input
                        type="text"
                        value={newsForm.author}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, author: e.target.value })
                        }
                        placeholder="e.g. Department R&D Cell"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Read Time
                      </label>
                      <input
                        type="text"
                        value={newsForm.readTime}
                        onChange={(e) =>
                          setNewsForm({ ...newsForm, readTime: e.target.value })
                        }
                        placeholder="e.g. 3 min read"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1B365D]"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#1B365D] hover:bg-[#1B365D]/90 shadow-sm cursor-pointer"
                >
                  {editingId ? "Save Changes" : `Publish ${activeTab === "news" ? "Article" : "Event"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
