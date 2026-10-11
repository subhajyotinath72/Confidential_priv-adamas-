"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";
import { ALUMNI_BATCHES, ALL_BATCH_STUDENTS, BatchStudent } from "@/data/alumniBatches";
import {
  Sparkles,
  Search,
  Building2,
  GraduationCap,
  Briefcase,
  MapPin,
  ArrowRight,
  Award,
  Users,
  Quote,
  LayoutGrid,
  Table as TableIcon,
  CheckCircle2,
  BookOpen,
  Calendar,
  Layers,
  Filter,
} from "lucide-react";

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatchTab, setSelectedBatchTab] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [activeSection, setActiveSection] = useState<"batches" | "distinguished">("batches");

  // Extended Distinguished Alumni list
  const extendedAlumni = useMemo(() => [
    ...TESTIMONIALS,
    {
      id: "alumni-4",
      name: "Ananya Mukherjee",
      degree: "B.Tech in Biomedical Engineering",
      batch: "Class of 2023",
      currentRole: "Lead Bio-Equipment Engineer",
      companyOrUniversity: "Siemens Healthineers",
      quote:
        "From MRI calibration in our medical instrumentation labs to handling clinical protocols at Siemens, Adamas provided the exact real-world training needed for high-stakes healthcare engineering.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: "alumni-5",
      name: "Pritam Ghosh",
      degree: "B.Tech in Biomedical Engineering",
      batch: "Class of 2024",
      currentRole: "Clinical Research Associate",
      companyOrUniversity: "Apollo Multispecialty Hospitals",
      quote:
        "Our hospital clinical rotations during third year opened direct career doors into super-specialty hospital management and clinical trial documentation.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: "alumni-6",
      name: "Sneha Sengupta",
      degree: "B.Tech in Biomedical Engineering",
      batch: "Class of 2023",
      currentRole: "Medical Device Regulatory Specialist",
      companyOrUniversity: "Medtronic India",
      quote:
        "The curriculum's rigorous coverage of ISO 13485, FDA 510(k), and CDSCO medical device clearance gave me an invaluable head start in healthcare compliance.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    },
  ], []);

  // Filtered batch groups and students
  const filteredBatches = useMemo(() => {
    return ALUMNI_BATCHES.map((group) => {
      // If a specific batch tab is selected and doesn't match this group, skip students
      if (selectedBatchTab !== "all" && group.batch !== selectedBatchTab) {
        return { ...group, students: [] };
      }

      const matchingStudents = group.students.filter((student) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          student.name.toLowerCase().includes(q) ||
          student.batch.toLowerCase().includes(q) ||
          student.degree.toLowerCase().includes(q) ||
          student.statusLabel.toLowerCase().includes(q)
        );
      });

      return {
        ...group,
        students: matchingStudents,
      };
    }).filter((group) => group.students.length > 0);
  }, [searchQuery, selectedBatchTab]);

  const totalFilteredBatchStudents = useMemo(() => {
    return filteredBatches.reduce((acc, curr) => acc + curr.students.length, 0);
  }, [filteredBatches]);

  // Filtered distinguished alumni
  const filteredDistinguished = useMemo(() => {
    return extendedAlumni.filter((alumnus) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        alumnus.name.toLowerCase().includes(q) ||
        alumnus.companyOrUniversity.toLowerCase().includes(q) ||
        alumnus.currentRole.toLowerCase().includes(q) ||
        alumnus.batch.toLowerCase().includes(q)
      );
    });
  }, [extendedAlumni, searchQuery]);

  // Helper to extract initials for avatar badge
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-[#4A1525] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#F7D6C8] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SRITI • Biomedical Engineering Alumni Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Alumni & Graduating Batches
          </h1>
          <p className="text-sm sm:text-base text-[#F7D6C8]/90 max-w-3xl mx-auto leading-relaxed font-sans">
            Graduates and scholars of the Department of Biomedical Engineering driving innovation across global MedTech multinationals, clinical healthcare systems, and premier research fellowships.
          </p>

          {/* Quick Stats Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-serif">25+</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wider">Registered Scholars</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-serif">3</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wider">Academic Batches</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-serif">100%</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wider">Clinical & Core R&D</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-serif">SRITI</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wider">Verified Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* People Section Tab Switcher & Unified Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 z-20 relative">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sub-section Navigation Tabs */}
          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <Link
              href="/people"
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-1.5 whitespace-nowrap"
            >
              <Users className="w-3.5 h-3.5 text-slate-500" />
              <span>Faculty Directory</span>
            </Link>
            <button
              onClick={() => setActiveSection("batches")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 whitespace-nowrap ${
                activeSection === "batches"
                  ? "text-white bg-[#4A1525] shadow-xs"
                  : "text-slate-700 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Batch Directory</span>
            </button>
            <button
              onClick={() => setActiveSection("distinguished")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 whitespace-nowrap ${
                activeSection === "distinguished"
                  ? "text-white bg-[#4A1525] shadow-xs"
                  : "text-slate-700 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Distinguished Spotlights</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name or batch..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#4A1525] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeSection === "batches" ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
          {/* Controls Bar: Batch Tabs & View Switcher */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Batch Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-thin">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden lg:inline">
                Batch:
              </span>
              {[
                { label: `All Batches (${ALL_BATCH_STUDENTS.length})`, value: "all" },
                { label: "Batch 2020-2024 (9)", value: "2020-2024" },
                { label: "Batch 2021-2025 (5)", value: "2021-2025" },
                { label: "Batch 2022-2026 (11)", value: "2022-2026" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedBatchTab(tab.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedBatchTab === tab.value
                      ? "bg-[#4A1525] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1.5 self-end sm:self-auto bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode("cards")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "cards"
                    ? "bg-white text-[#4A1525] shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "table"
                    ? "bg-white text-[#4A1525] shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Roll Table</span>
              </button>
            </div>
          </div>

          {/* If No Results Found */}
          {totalFilteredBatchStudents === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
              <p className="text-slate-500 text-sm">No students or alumni found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBatchTab("all");
                }}
                className="mt-3 text-xs font-bold text-[#4A1525] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            /* Render Each Batch Group */
            <div className="space-y-10">
              {filteredBatches.map((batchGroup) => (
                <div
                  key={batchGroup.batch}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
                >
                  {/* Batch Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                        <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#4A1525]">
                          {batchGroup.label}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-md bg-[#4A1525]/10 text-[#4A1525] text-xs font-bold">
                          {batchGroup.students.length} Candidates
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {batchGroup.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
                      <GraduationCap className="w-4 h-4 text-[#4A1525]" />
                      <span>{batchGroup.degree}</span>
                    </div>
                  </div>

                  {/* Content View: Cards vs Table */}
                  {viewMode === "cards" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                      {batchGroup.students.map((student) => (
                        <div
                          key={student.id}
                          className="bg-[#FCFCFC] border border-slate-200 hover:border-[#D4AF37] rounded-2xl p-5 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
                        >
                          <div className="space-y-3.5">
                            {/* Card Top: Initials avatar & details */}
                            <div className="flex items-start space-x-3.5">
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#4A1525] to-[#7A283C] text-amber-300 font-serif font-bold text-sm flex items-center justify-center border border-[#D4AF37]/40 flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                {getInitials(student.name)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                                  Roll No. #{String(student.slNo).padStart(2, "0")}
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#4A1525] transition-colors truncate">
                                  {student.name}
                                </h3>
                                <p className="text-[11px] text-slate-600 font-medium truncate mt-0.5">
                                  {student.degree}
                                </p>
                              </div>
                            </div>

                            {/* Tag row */}
                            <div className="flex items-center justify-between text-[11px] bg-white px-3 py-1.5 rounded-lg border border-slate-200/80">
                              <span className="font-semibold text-slate-600 flex items-center truncate mr-2">
                                <Calendar className="w-3 h-3 mr-1 text-[#4A1525]" />
                                <span>{student.batchYears}</span>
                              </span>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 flex-shrink-0">
                                {student.statusLabel}
                              </span>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                            <span className="flex items-center text-teal-700">
                              <CheckCircle2 className="w-3 h-3 mr-1 text-teal-600" />
                              Adamas BME
                            </span>
                            <span className="text-slate-400">Kolkata, WB</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* High-end Academic Roll / Table View */
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#5B79A6] text-white font-semibold uppercase tracking-wider text-[11px]">
                            <th className="py-3 px-4 w-16 text-center border-r border-white/20">#</th>
                            <th className="py-3 px-4 border-r border-white/20">Candidate Name</th>
                            <th className="py-3 px-4 border-r border-white/20">Academic Program</th>
                            <th className="py-3 px-4 border-r border-white/20">Tenure Batch</th>
                            <th className="py-3 px-4 text-center">Department Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {batchGroup.students.map((student, idx) => (
                            <tr
                              key={student.id}
                              className={`hover:bg-amber-50/40 transition-colors ${
                                idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                              }`}
                            >
                              <td className="py-3 px-4 text-center font-bold text-slate-400 border-r border-slate-100">
                                {String(student.slNo).padStart(2, "0")}
                              </td>
                              <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-100">
                                <div className="flex items-center space-x-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-[#4A1525]/10 text-[#4A1525] font-bold text-[10px] flex items-center justify-center">
                                    {getInitials(student.name)}
                                  </div>
                                  <span>{student.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-slate-600 font-medium border-r border-slate-100">
                                {student.degree}
                              </td>
                              <td className="py-3 px-4 text-slate-700 font-semibold border-r border-slate-100 whitespace-nowrap">
                                {student.batchYears}
                              </td>
                              <td className="py-3 px-4 text-center whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#4A1525]/10 text-[#4A1525]">
                                  <CheckCircle2 className="w-3 h-3 mr-1 text-teal-600" />
                                  {student.statusLabel}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Distinguished Alumni Spotlights Section */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#4A1525]">
                Distinguished Alumni Spotlights
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Biomedical alumni in top healthcare multinationals, global clinical labs, and research programs.
              </p>
            </div>
            <button
              onClick={() => setActiveSection("batches")}
              className="text-xs font-bold text-[#4A1525] hover:text-[#D4AF37] flex items-center space-x-1"
            >
              <span>View Batch Roster</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {filteredDistinguished.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
              <p className="text-slate-500 text-sm">No distinguished alumni found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-[#4A1525] hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDistinguished.map((alumnus) => (
                <div
                  key={alumnus.id}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Top: Avatar & Basic Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={alumnus.avatar}
                          alt={alumnus.name}
                          className="w-16 h-16 rounded-2xl object-cover object-center border-2 border-[#D4AF37] group-hover:scale-105 transition-transform"
                        />
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center text-[10px] font-bold">
                          ★
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4A1525] transition-colors truncate">
                          {alumnus.name}
                        </h3>
                        <p className="text-xs font-bold text-[#4A1525] flex items-center mt-0.5 truncate">
                          <Briefcase className="w-3 h-3 mr-1 flex-shrink-0 text-[#D4AF37]" />
                          <span>{alumnus.currentRole}</span>
                        </p>
                        <p className="text-[11px] font-semibold text-teal-800 flex items-center mt-0.5 truncate">
                          <Building2 className="w-3 h-3 mr-1 flex-shrink-0 text-teal-600" />
                          <span>{alumnus.companyOrUniversity}</span>
                        </p>
                      </div>
                    </div>

                    {/* Badge Row */}
                    <div className="flex items-center justify-between text-[11px] font-semibold bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80">
                      <span className="flex items-center text-slate-700 truncate mr-2">
                        <GraduationCap className="w-3.5 h-3.5 mr-1 text-[#4A1525]" />
                        <span className="truncate">{alumnus.degree}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#4A1525]/10 text-[#4A1525] font-bold flex-shrink-0">
                        {alumnus.batch}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative pl-3 border-l-2 border-[#D4AF37]/50 pt-1">
                      <Quote className="w-4 h-4 text-[#D4AF37]/60 mb-1" />
                      <p className="text-xs text-slate-600 italic leading-relaxed line-clamp-4">
                        &ldquo;{alumnus.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="text-teal-700 font-semibold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      SRITI Verified Alumnus
                    </span>
                    <span className="text-[#4A1525] font-bold">Kolkata, WB</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Alumni Engagement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#4A1525] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F7D6C8] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>STAY CONNECTED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Are you an Adamas BME Alumnus?
            </h2>
            <p className="text-xs sm:text-sm text-[#F7D6C8]/90 leading-relaxed font-sans">
              Connect with fellow graduates, mentor current students, offer internships, and participate in our annual SRITI reunion at Adamas University.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold bg-[#D4AF37] text-[#330E1A] hover:bg-[#E8C860] transition-colors shadow-md"
            >
              <span>Submit Alumni Update</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
