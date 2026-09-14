"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESEARCH_CENTERS } from "@/data/research";
import { Scan, Layers, Cpu, HeartPulse, Microscope, Footprints, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ResearchCenters: React.FC = () => {
  const getCenterIcon = (iconName: string) => {
    switch (iconName) {
      case "Scan": return Scan;
      case "Layers": return Layers;
      case "Cpu": return Cpu;
      case "HeartPulse": return HeartPulse;
      case "Microscope": return Microscope;
      case "Footprints": return Footprints;
      default: return Microscope;
    }
  };

  return (
    <section id="centers" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
            Specialized Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Interdisciplinary R&D Platforms & Centers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            State-of-the-art laboratory infrastructure supporting undergraduate capstone projects, master's theses, doctoral research, and clinical field trials.
          </p>
        </div>

        {/* 6 Card Grid (Site A Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_CENTERS.map((center, index) => {
            const Icon = getCenterIcon(center.icon);
            return (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                      Est. {center.established}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {center.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {center.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Lead: <span className="text-slate-900 font-semibold">{center.headName}</span>
                  </span>
                  <Link
                    href={`/faculty`}
                    className="text-teal-700 hover:text-teal-900 flex items-center font-semibold"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
