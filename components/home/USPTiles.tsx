"use client";

import React from "react";
import { motion } from "framer-motion";
import { Microscope, Hospital, Award, Globe, ArrowUpRight } from "lucide-react";

const USP_ITEMS = [
  {
    id: 1,
    title: "State-of-the-Art Bio Labs",
    subtitle: "Cleanrooms & 3D Printers",
    stat: "12+",
    statLabel: "Specialized Research Facilities",
    description: "Equipped with class-1000 cleanrooms, 3D bioprinters, microfluidic printers, high-speed ultrasound digitizers, and GPU bio-computing clusters.",
    icon: Microscope,
    color: "bg-teal-50/50 hover:bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-600",
  },
  {
    id: 2,
    title: "Hospital & Clinical Exposure",
    subtitle: "Hands-on ICU & Radiology Training",
    stat: "8+",
    statLabel: "Partner Medical Networks",
    description: "Formal MoUs with Kolkata's premier super-specialty hospital networks for clinical rotations, equipment diagnostics, and doctor-mentored research.",
    icon: Hospital,
    color: "bg-amber-50/50 hover:bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    id: 3,
    title: "Research & Patent Output",
    subtitle: "High-Impact Publications",
    stat: "60+",
    statLabel: "Peer-Reviewed Journals & Patents",
    description: "Active research grants funded by DST-SERB, ICMR, and CSIR. Faculty and students frequently publish in top IEEE & Elsevier journals.",
    icon: Award,
    color: "bg-blue-50/50 hover:bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    title: "Global Exchanges & Placements",
    subtitle: "Overseas Fellowships & MedTech R&D",
    stat: "95%+",
    statLabel: "Placement & Higher Ed Rate",
    description: "Graduates recruited by Siemens Healthineers, GE Healthcare, Philips, or pursuing fully-funded MS/PhD degrees at NUS, Johns Hopkins, & Europe.",
    icon: Globe,
    color: "bg-purple-50/50 hover:bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
  },
];

export const USPTiles: React.FC = () => {
  const partners = [
    { name: "APEX MULTI-SPECIALITY", desc: "Clinical Ward Rotations" },
    { name: "BIOMETRICS INDIA", desc: "Medical Sensors & IoT" },
    { name: "NATIONAL NEURO CENTRE", desc: "BCI & EEG Analysis" },
    { name: "EASTERN MEDTECH HUB", desc: "Prototyping & Testing" },
  ];

  const recruiters = ["GE Healthcare", "Siemens Healthineers", "Apollo Hospitals", "Philips BioMed", "Medtronic"];

  return (
    <div className="space-y-0">
      
      {/* 1. Hospital & Industry Partners */}
      <section className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
                CLINICAL & INDUSTRIAL COLLABORATION
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
                Hospital & Industry Partners
              </h2>
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Active MoUs & Joint Laboratories
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#EFECE6] p-5 rounded-xl border border-[#E2DDD3] shadow-xs text-center space-y-2 hover:border-[#1B365D] transition-colors"
              >
                <div className="text-sm font-serif font-bold text-[#1B365D]">
                  {p.name}
                </div>
                <div className="text-xs text-slate-600 font-sans">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Internships & Placements */}
      <section className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              CAREER PATHWAYS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
              Internships & Placements
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl font-sans">
              Students complete compulsory clinical rotations in super-specialty hospitals and secure roles in biomedical instrumentation, clinical trials, and diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 01 */}
            <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#E2DDD3] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#F8F5EE] border border-[#D5D0C5] flex items-center justify-center text-xs font-bold text-[#1B365D]">
                01
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1B365D]">
                Hospital Clinical Rotations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Third-year students rotate across radiology, dialysis centers, catheterization labs, and ICU maintenance divisions.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#E2DDD3] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#F8F5EE] border border-[#D5D0C5] flex items-center justify-center text-xs font-bold text-[#1B365D]">
                02
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1B365D]">
                Industry Internships
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Paid summer internships in biomedical hardware assembly, signal processing pipelines, and healthcare software solutions.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#E2DDD3] shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#F8F5EE] border border-[#D5D0C5] flex items-center justify-center text-xs font-bold text-[#1B365D]">
                03
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1B365D]">
                Key Recruiting Sectors
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {recruiters.map((r, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#F8F5EE] text-[10px] font-bold text-[#1B365D] border border-[#D5D0C5] rounded">
                    {r}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
