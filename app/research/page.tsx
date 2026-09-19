"use client";

import React from "react";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { ResearchCenters } from "@/components/home/ResearchCenters";
import { Activity, BookOpen, Award } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Activity className="w-4 h-4 text-adamas-gold" />
            <span>Pioneering Healthcare Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research Tracks & Centers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Interdisciplinary R&D spanning Biomedical Instrumentation, 3D Bioprinting, Regenerative Scaffolds, and Healthcare Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* Research Areas Accordion */}
      <ResearchAreas />

      {/* Research Centers Grid */}
      <ResearchCenters />

    </div>
  );
}
