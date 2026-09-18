"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const HoDQuote: React.FC = () => {
  return (
    <section className="bg-white py-12 lg:py-20 border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Photo & Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-md relative group hover:border-[#B58A28]/50 transition-colors">
              
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#B58A28] to-transparent" />

              <div className="relative overflow-hidden rounded-xl h-80 sm:h-96 bg-slate-200 border border-slate-300">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Semanti Chakraborty - Head of Department"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-[#103E3B]/95 text-[9px] font-bold text-white uppercase tracking-widest rounded border border-white/20 backdrop-blur-sm shadow-xs">
                    OFFICE OF THE HOD
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-serif font-bold text-[#103E3B]">
                  Dr. Semanti Chakraborty
                </h3>
                <p className="text-xs font-bold text-[#B58A28] uppercase tracking-wider">
                  Head, Department of Biomedical Engineering
                </p>
                <p className="text-xs text-[#103E3B]/80 font-sans">
                  Ph.D., IIT Kharagpur | Senior Member, IEEE EMBS
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Copy & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 relative"
          >
            {/* Watermark Quote Icon */}
            <div className="absolute -top-6 -left-4 pointer-events-none select-none">
              <Quote className="w-24 h-24 text-amber-500/10 rotate-180" />
            </div>

            {/* Gold Eyebrow */}
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase">
              LEADERSHIP & VISION
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight leading-[1.15]">
              Welcome to Biomedical Engineering at Adamas University
            </h2>

            {/* Body Text */}
            <p className="text-sm sm:text-base text-[#103E3B]/90 leading-relaxed font-sans">
              At the nexus of engineering innovation, computing, and life sciences, Biomedical Engineering stands as one of the most consequential disciplines of modern society. Here at Adamas University, our curriculum and research suites are purposely built to turn inquisitive students into visionary problem-solvers.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              Through immersive hands-on training across advanced cleanrooms, bio-MEMS sensors, medical robotics, and direct clinical internships in top-tier hospital wards, our scholars bridge theory with bedside clinical impact. We invite you to explore our vibrant labs, collaborate on translational discoveries, and shape the next horizon of healthcare engineering.
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-[#E2DDD3]">
              <div>
                <div className="font-serif font-bold italic text-[#103E3B] text-lg">
                  Dr. Semanti Chakraborty
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                  Biomedical Innovation Complex, Adamas University
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
