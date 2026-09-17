"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACADEMIC_PROGRAMS, SPECIALIZATION_CHIPS } from "@/data/programs";
import { GraduationCap, Clock, Award, ArrowRight, CheckCircle, Sparkles, BookOpen } from "lucide-react";

export const AcademicPrograms: React.FC = () => {
  const currentProgram = ACADEMIC_PROGRAMS[0];

  return (
    <section id="programs" className="bg-gradient-to-br from-white via-slate-50 to-teal-50/20 py-12 lg:py-20 border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-8">
          <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
            ACADEMIC EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
            Programs & Curriculum
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl font-sans">
            Rigorous undergraduate and doctoral training engineered for clinical diagnostics, medical hardware, and healthcare computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Main Card: B.Tech Program Details */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
                  <span className="px-3 py-1 rounded bg-[#103E3B] text-white text-[10px] font-bold uppercase tracking-wider">
                    {currentProgram.duration}
                  </span>
                  <span className="text-xs font-bold text-[#B58A28]">
                    {currentProgram.eligibility}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#103E3B]">
                  {currentProgram.degree}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  {currentProgram.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-[#103E3B] uppercase tracking-wider">
                    Key Specialization Tracks:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProgram.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/80 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#103E3B]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <a
                  href="https://adamasuniversity.ac.in/adamas-university/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#103E3B] hover:bg-[#0D3330] shadow-sm transition-all"
                >
                  APPLY FOR {currentProgram.degree} <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Important Schedule & Deadlines */}
          <div className="lg:col-span-5">
            <div className="glass-beige p-6 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-[#B58A28] uppercase tracking-wider">
                  IMPORTANT SCHEDULE
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#103E3B]">
                  Intake Deadlines
                </h3>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-[#103E3B]">Phase 1 Counseling:</div>
                    <div className="text-xs text-slate-600">June 15, 2025</div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-[#103E3B]">Phase 2 Applications:</div>
                    <div className="text-xs text-slate-600">July 20, 2025 (Rolling review)</div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/admission#syllabus"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#103E3B] bg-white border border-slate-300 hover:bg-slate-100 transition-all"
                >
                  DOWNLOAD SYLLABUS & PROSPECTUS
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
