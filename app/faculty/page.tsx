"use client";

import React, { useState, useEffect } from "react";
import { FACULTY_MEMBERS, Faculty } from "@/data/faculty";
import { Users, Search, Mail, Phone, MapPin, Award, BookOpen, ExternalLink, Filter, Sparkles } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState<Faculty[]>(FACULTY_MEMBERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.faculty && Array.isArray(data.faculty)) {
          setFacultyList(data.faculty);
        }
      })
      .catch((err) => console.error("Could not fetch live faculty data:", err));
  }, []);

  const filteredFaculty = facultyList.filter((fac) => {
    const matchesSearch =
      fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.designation.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTrack = selectedTrack === "all" || fac.trackId === selectedTrack;

    return matchesSearch && matchesTrack;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Users className="w-4 h-4 text-adamas-gold" />
            <span>Academic Leadership & Scholars</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Faculty Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meet the researchers, clinicians, and educators driving biomedical innovation at the Department of Biomedical Engineering, Adamas University, Kolkata.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 z-20 relative">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty by name or keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-slate-700 uppercase mr-2 flex items-center hidden lg:flex">
              <Filter className="w-3.5 h-3.5 mr-1 text-teal-600" /> Track:
            </span>
            <button
              onClick={() => setSelectedTrack("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedTrack === "all"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setSelectedTrack("01")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedTrack === "01"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              01 Instrumentation
            </button>
            <button
              onClick={() => setSelectedTrack("02")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedTrack === "02"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              02 Biomaterials
            </button>
            <button
              onClick={() => setSelectedTrack("03")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedTrack === "03"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              03 Health AI
            </button>
          </div>

        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            No faculty members found matching your search query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((fac) => (
              <div
                key={fac.id}
                id={fac.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-teal-500 hover:shadow-lg transition-all flex flex-col justify-between group scroll-mt-36 text-slate-900"
              >
                <div>
                  {/* Photo & Track Badge */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={fac.avatar}
                      alt={fac.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                      Track {fac.trackId}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs font-semibold text-adamas-gold-dark">
                      {fac.designation}
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {fac.degrees}
                    </p>

                    <div className="pt-2">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Specialization:</div>
                      <p className="text-xs text-slate-700 line-clamp-2 mt-0.5">
                        {fac.specialization}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1 text-teal-600" />
                        {fac.publicationsCount} Papers
                      </span>
                      <span className="flex items-center">
                        <Award className="w-3 h-3 mr-1 text-amber-600" />
                        {fac.patentsCount} Patents
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedFaculty(fac)}
                    className="w-full py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    View Full Profile & Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Faculty Profile Modal */}
      {selectedFaculty && (
        <Modal
          isOpen={!!selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
          title={`Faculty Profile - ${selectedFaculty.name}`}
        >
          <div className="space-y-6 text-slate-900">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-slate-200">
              <img
                src={selectedFaculty.avatar}
                alt={selectedFaculty.name}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-adamas-gold"
              />
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900">{selectedFaculty.name}</h3>
                <p className="text-xs font-semibold text-adamas-gold-dark">{selectedFaculty.designation}</p>
                <p className="text-xs text-slate-500">{selectedFaculty.degrees}</p>
                <p className="text-xs text-teal-700 font-semibold">{selectedFaculty.almaMater}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Biography & R&D Overview</h4>
              <p className="text-xs text-slate-700 leading-relaxed">{selectedFaculty.bio}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Core Research Focus</h4>
              <div className="flex flex-wrap gap-2">
                {selectedFaculty.researchFocus.map((rf, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-900 font-medium">
                    {rf}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Selected Featured Publications</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedFaculty.featuredPublications.map((pub, i) => (
                  <li key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed">
                    • {pub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span className="truncate">{selectedFaculty.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>{selectedFaculty.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>{selectedFaculty.room}</span>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
