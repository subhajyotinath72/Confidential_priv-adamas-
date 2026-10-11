"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";
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
  ExternalLink,
} from "lucide-react";

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const extendedAlumni = [
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
  ];

  const filteredAlumni = extendedAlumni.filter((alumnus) => {
    const matchesSearch =
      alumnus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumnus.companyOrUniversity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumnus.currentRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumnus.batch.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "all" ||
      alumnus.companyOrUniversity.toLowerCase().includes(selectedIndustry.toLowerCase());

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="bg-transparent min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-[#4A1525] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#F7D6C8] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>SRITI • Biomedical Engineering Alumni Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Distinguished Alumni
          </h1>
          <p className="text-sm sm:text-base text-[#F7D6C8]/90 max-w-3xl mx-auto leading-relaxed font-sans">
            Graduates of the Department of Biomedical Engineering driving innovation across global MedTech multinationals, international research fellowships, and clinical healthcare systems.
          </p>
        </div>
      </section>

      {/* People Section Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 z-20 relative">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sub-section Navigation Tabs */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Link
              href="/people"
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <Users className="w-3.5 h-3.5 text-slate-500" />
              <span>Faculty Directory</span>
            </Link>
            <Link
              href="/people/alumni"
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4A1525] shadow-xs flex items-center space-x-1.5"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Distinguished Alumni</span>
            </Link>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search alumni by name, role or company..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#4A1525] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Company Quick Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
            Enterprise:
          </span>
          {[
            { label: "All Organizations", value: "all" },
            { label: "GE HealthCare", value: "GE" },
            { label: "Philips", value: "Philips" },
            { label: "Siemens", value: "Siemens" },
            { label: "NUS", value: "Singapore" },
            { label: "Medtronic", value: "Medtronic" },
            { label: "Apollo", value: "Apollo" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedIndustry(item.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedIndustry === item.value
                  ? "bg-[#4A1525] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {filteredAlumni.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8">
            <p className="text-slate-500 text-sm">No alumni found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedIndustry("all");
              }}
              className="mt-3 text-xs font-bold text-[#4A1525] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumnus) => (
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

      {/* Alumni Engagement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#4A1525] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
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

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
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
