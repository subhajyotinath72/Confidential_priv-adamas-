"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const HoDQuote: React.FC = () => {
  return (
    <section className="bg-[#F8F5EE] py-12 lg:py-20 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Photo & Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#EFECE6] p-4 sm:p-5 rounded-2xl border border-[#E2DDD3] shadow-sm">
              <div className="relative overflow-hidden rounded-xl h-80 sm:h-96 bg-slate-200 border border-[#D5D0C5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Semanti Chakraborty - Head of Department"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-[#1B365D] text-[9px] font-bold text-white uppercase tracking-widest rounded border border-white/20">
                    OFFICE OF THE HOD
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-serif font-bold text-[#1B365D]">
                  Dr. Semanti Chakraborty
                </h3>
                <p className="text-xs font-bold text-[#B58A28] uppercase tracking-wider">
                  Head, Department of Biomedical Engineering
                </p>
                <p className="text-xs text-slate-600 font-sans">
                  Ph.D., IIT Kharagpur | Senior Member, IEEE EMBS
                </p>
              </div>
            </div>
          </div>

          {/* Right Copy & Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gold Eyebrow */}
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase">
              LEADERSHIP & VISION
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight leading-[1.15]">
              Welcome to Biomedical Engineering at Adamas University
            </h2>

            {/* Body Text */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              At the nexus of engineering innovation, computing, and life sciences, Biomedical Engineering stands as one of the most consequential disciplines of modern society. Here at Adamas University, our curriculum and research suites are purposely built to turn inquisitive students into visionary problem-solvers.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              Through immersive hands-on training across advanced cleanrooms, bio-MEMS sensors, medical robotics, and direct clinical internships in top-tier hospital wards, our scholars bridge theory with bedside clinical impact. We invite you to explore our vibrant labs, collaborate on translational discoveries, and shape the next horizon of healthcare engineering.
            </p>

            {/* Signature & Button */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2DDD3]">
              <div>
                <div className="font-serif font-bold italic text-[#1B365D] text-lg">
                  Dr. Semanti Chakraborty
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                  Biomedical Innovation Complex, Adamas University
                </div>
              </div>

              <Link
                href="/people#fac-1"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1B365D] hover:bg-[#162E50] transition-all"
              >
                READ RESEARCH VISION →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
