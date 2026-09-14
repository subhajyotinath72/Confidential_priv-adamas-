"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACADEMIC_PROGRAMS, SPECIALIZATION_CHIPS } from "@/data/programs";
import { GraduationCap, Clock, Award, ArrowRight, CheckCircle, Sparkles, BookOpen } from "lucide-react";

export const AcademicPrograms: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-white relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
            Degree Offerings & Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Academic Programs in Biomedical Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            AICTE-approved undergraduate, postgraduate, and doctoral curricula housed under the School of Engineering & Technology (SET), Adamas University.
          </p>
        </div>

        {/* 3 Large Featured Program Image Cards (Site A Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {ACADEMIC_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-teal-500 hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Program Card Header Strip */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {program.degree} • {program.level}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-700 bg-slate-200/70 px-2.5 py-1 rounded-md">
                  {program.duration}
                </span>
              </div>

              {/* Program Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {program.intake} | {program.affiliation}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-adamas-gold-dark uppercase tracking-wider">
                    Program Highlights:
                  </div>
                  {program.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    href={`/programs#${program.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-adamas-navy hover:bg-slate-800 transition-colors shadow-md group-hover:shadow-lg"
                  >
                    <span>View Curriculum & Admission</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Compact Program Specialization Chips Row (Site A Pattern) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Elective Specialization Modules Offered
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Integrated across B.Tech & M.Tech tracks
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SPECIALIZATION_CHIPS.map((chip, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 transition-colors shadow-xs"
              >
                <div className="text-xs font-bold text-slate-900">{chip.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{chip.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
