"use client";

import React from "react";
import { ProgramDetailView } from "@/components/programs/ProgramDetailView";
import { GraduationCap } from "lucide-react";

export default function DynamicProgramPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#103E3B] py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#F7D6C8] text-xs font-bold uppercase tracking-wider border border-white/20">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>School of Engineering & Technology • Adamas University</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            B.Tech in Biomedical Engineering
          </h1>
          <p className="text-xs sm:text-sm text-[#F7D6C8]/90 max-w-3xl mx-auto leading-relaxed">
            4-Year AICTE Approved Undergraduate Honors Degree • Department of Biomedical Engineering
          </p>
        </div>
      </section>

      {/* Program Detail View with Quick Links Sidebar */}
      <ProgramDetailView />

    </div>
  );
}
