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
  return (
    <section className="py-16 bg-slate-50 relative z-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-adamas-teal-dark uppercase tracking-widest">
            Why Choose Adamas Biomedical Engineering
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Department Excellence & Key Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Combining rigorous engineering discipline with clinical immersion and global research standards.
          </p>
        </div>

        {/* 4 Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {USP_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl bg-white ${item.color} p-6 border ${item.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group`}
              >
                {/* Icon & Stat Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-inner group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {item.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-adamas-teal-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-adamas-gold-dark mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-slate-900 transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-adamas-teal-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
