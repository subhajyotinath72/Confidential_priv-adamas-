"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ACADEMIC_PROGRAMS, SPECIALIZATION_CHIPS } from "@/data/programs";
import { GraduationCap, Clock, Award, ArrowRight, CheckCircle, Sparkles, BookOpen, Layers, Microscope, Activity, BrainCircuit, Stethoscope } from "lucide-react";
import { EcgDivider } from "@/components/shared/EcgDivider";

const ICON_MAP: Record<string, any> = {
  Stethoscope,
  BrainCircuit,
  Layers,
  Activity,
  Microscope,
};

export const AcademicPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"btech" | "phd" | "mtech">("btech");

  const programData = {
    btech: {
      degree: "B.Tech in Biomedical Engineering",
      duration: "4 Years (8 Semesters)",
      eligibility: "10+2 with PCM/B (Min 50%) + WBJEE / JEE / AUAT",
      shortDesc: "A flagship 4-year undergraduate honors degree combining core electrical, computing, and mechanical engineering with clinical biology, bio-MEMS sensors, 3D bioprinting, and medical artificial intelligence.",
      tracks: [
        "Medical Hardware & Diagnostic Instrumentation",
        "Healthcare AI, Deep Learning & Telemetry",
        "Tissue Scaffolds & 3D Cellular Bioprinting",
        "Clinical Engineering & Hospital ICU Management",
      ],
      ctaText: "APPLY FOR B.TECH ADMISSIONS",
      ctaHref: "https://adamasuniversity.ac.in/adamas-university/#",
      isExternal: true,
    },
    phd: {
      degree: "Ph.D. in Biomedical Engineering",
      duration: "3 - 5 Years (Full / Part-Time)",
      eligibility: "Master's Degree (M.Tech/ME/M.Sc) with min 55% marks + RET / UGC-NET / GATE",
      shortDesc: "Advanced doctoral research program dedicated to translational breakthroughs in biosensors, nano-biomaterials, neuro-prosthetics, and algorithmic radiology with funded fellowship opportunities.",
      tracks: [
        "DST-SERB & ICMR Funded Doctoral Fellowships",
        "Translational Clinical Trials with Super-Specialty Hospitals",
        "Patent Commercialization & Seed Incubation Support",
        "Scopus & SCI Indexed High-Impact Journal Publishing",
      ],
      ctaText: "EXPLORE PH.D. RESEARCH PORTAL",
      ctaHref: "/research",
      isExternal: false,
    },
    mtech: {
      degree: "M.Tech in Biomedical Instrumentation",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Tech/BE in BME, ECE, EE, or CSE with valid GATE / AUAT Score",
      shortDesc: "Postgraduate specialization focusing on embedded medical devices, advanced digital signal processing, regulatory compliance (ISO 13485/FDA), and clinical robotics.",
      tracks: [
        "Wearable Photoplethysmography & Sensor Systems",
        "Robotic Micro-Laparoscopy Control Systems",
        "Deep Learning for MRI/CT Segmentation",
        "Industrial Co-op Placement at GE & Siemens",
      ],
      ctaText: "APPLY FOR M.TECH PROGRAM",
      ctaHref: "/admission#mtech",
      isExternal: false,
    },
  };

  const active = programData[activeTab];

  return (
    <section id="programs" className="bg-gradient-to-br from-white via-slate-50 to-teal-50/20 text-[#103E3B] py-12 lg:py-20 border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
            ACADEMIC EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
            Programs & Curriculum
          </h2>
          <p className="text-sm sm:text-base text-[#103E3B]/80 mt-1 max-w-3xl font-sans">
            Rigorous undergraduate, postgraduate, and doctoral training engineered for clinical diagnostics, medical hardware, and healthcare computing.
          </p>

          {/* Interactive Degree Switcher Tabs */}
          <div className="flex flex-wrap gap-2 pt-6">
            {(["btech", "phd", "mtech"] as const).map((tabKey) => {
              const labels = {
                btech: "B.Tech (Honors)",
                phd: "Ph.D. Doctoral Research",
                mtech: "M.Tech (Advanced)",
              };
              const isSelected = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "text-white bg-[#103E3B] shadow-md border border-[#103E3B]"
                      : "text-[#103E3B]/80 bg-white hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {labels[tabKey]}
                  {isSelected && (
                    <motion.div
                      layoutId="programTabIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Program Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Main Card: Program Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full space-y-6 flex flex-col justify-between border border-slate-200 shadow-sm bg-white">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
                  <span className="px-3 py-1 rounded bg-[#103E3B] text-white text-[10px] font-bold uppercase tracking-wider">
                    {active.duration}
                  </span>
                  <span className="text-xs font-bold text-[#B58A28]">
                    {active.eligibility}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#103E3B]">
                  {active.degree}
                </h3>

                <p className="text-sm text-[#103E3B]/80 leading-relaxed font-sans">
                  {active.shortDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-[#103E3B] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Curriculum Focus & Research Tracks:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {active.tracks.map((track, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-[#103E3B]/90 bg-slate-50 p-2.5 rounded-lg border border-slate-200 hover:border-[#B58A28]/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#103E3B] flex-shrink-0" />
                        <span>{track}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                {active.isExternal ? (
                  <a
                    href={active.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-sweep w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#103E3B] hover:bg-[#0D3330] shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    {active.ctaText} <span className="ml-2">→</span>
                  </a>
                ) : (
                  <Link
                    href={active.ctaHref}
                    className="shine-sweep w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#103E3B] hover:bg-[#0D3330] shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    {active.ctaText} <span className="ml-2">→</span>
                  </Link>
                )}

                <Link
                  href="/programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#103E3B] bg-slate-100 border border-slate-300 hover:bg-slate-200 transition-all"
                >
                  FULL SYLLABUS & MODULES
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Important Schedule & Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-beige p-6 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-6 border border-[#E2DDD3]/90 bg-[#EFECE6]/85">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#B58A28] uppercase tracking-wider">
                    IMPORTANT SCHEDULE
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-800 uppercase border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1 animate-pulse" />
                    ADMISSIONS OPEN
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#103E3B]">
                  Intake Deadlines 2026
                </h3>

                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-amber-400/40 transition-colors shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#103E3B]">Phase 1 Counseling:</span>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">Active</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">June 15, 2026 • Early Merit Allocation</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-teal-400/40 transition-colors shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#103E3B]">Phase 2 Applications:</span>
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-300">Rolling</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">July 20, 2026 • Lateral Entry & Regular</div>
                  </div>
                </div>

                {/* Interactive Specialization Chips Preview */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-[#103E3B] uppercase tracking-wider mb-2">
                    5 Cutting-Edge Specializations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SPECIALIZATION_CHIPS.map((chip, idx) => {
                      const Icon = ICON_MAP[chip.icon] || Sparkles;
                      return (
                        <span
                          key={idx}
                          title={chip.desc}
                          className="inline-flex items-center px-2 py-1 bg-white text-[10px] font-semibold text-[#103E3B] border border-slate-200 rounded-md shadow-xs hover:border-[#B58A28]/50 hover:text-[#B58A28] transition-colors cursor-help"
                        >
                          <Icon className="w-2.5 h-2.5 mr-1 text-[#B58A28]" />
                          {chip.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/admission#syllabus"
                  className="shine-sweep w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#103E3B] bg-white border border-slate-300 hover:bg-slate-100 transition-all shadow-xs"
                >
                  DOWNLOAD SYLLABUS & PROSPECTUS
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Signature Animated MedTech ECG Wave Divider */}
      <EcgDivider className="mt-12" color="#103E3B" />
    </section>
  );
};
