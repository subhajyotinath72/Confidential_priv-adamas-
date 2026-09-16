"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACADEMIC_PROGRAMS, SPECIALIZATION_CHIPS } from "@/data/programs";
import { GraduationCap, Clock, Award, ArrowRight, CheckCircle, Sparkles, BookOpen } from "lucide-react";

export const AcademicPrograms: React.FC = () => {
  const currentProgram = ACADEMIC_PROGRAMS[0];

  return (
    <section id="programs" className="bg-white py-12 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gold Eyebrow */}
        <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
          APPLICATION CYCLE 2025–26
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight leading-[1.15]">
          Admissions & Eligibility
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#103E3B]/80 mt-1 mb-8 font-sans">
          Direct admission pathways for B.Tech in Biomedical Engineering.
        </p>

        {/* 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Card: Program Details */}
          <div className="lg:col-span-7">
            <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#E2DDD3] shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-[#B58A28] uppercase tracking-wider">
                  {currentProgram.level.toUpperCase()}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#103E3B]">
                  {currentProgram.title}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
                  <li>
                    <strong className="text-[#103E3B]">• Duration:</strong> {currentProgram.duration}
                  </li>
                  <li>
                    <strong className="text-[#103E3B]">• Eligibility:</strong> {currentProgram.eligibility}
                  </li>
                  <li>
                    <strong className="text-[#103E3B]">• Entrance:</strong> Adamas AUAT / WBJEE / JEE Main
                  </li>
                </ul>
              </div>

              <div className="pt-6">
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
            <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#E2DDD3] shadow-sm flex flex-col justify-between h-full space-y-6">
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
