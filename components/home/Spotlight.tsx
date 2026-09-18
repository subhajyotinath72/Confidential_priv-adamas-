"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Spotlight: React.FC = () => {
  const facultyMentors = [
    {
      initials: "AB",
      name: "Prof. (Dr.) Semanti Chakraborty",
      designation: "Head of Dept",
      specialization: "Microfluidics & Point-of-Care Biosensors",
      href: "/people#fac-1",
    },
    {
      initials: "SM",
      name: "Prof. (Dr.) Howa Begum",
      designation: "Assoc. Prof",
      specialization: "Orthopedic Biomechanics & Gait Analysis",
      href: "/people#fac-2",
    },
    {
      initials: "PB",
      name: "Prof. (Dr.) Sayanti Chowdhury",
      designation: "Asst. Prof",
      specialization: "Medical Image AI & Brain MRI Reconstruction",
      href: "/people#fac-3",
    },
    {
      initials: "RG",
      name: "Prof. (Dr.) Animesh Halder",
      designation: "Senior Fellow",
      specialization: "Biomaterials & Injectable Tissue Scaffolds",
      href: "/people#fac-4",
    },
  ];

  return (
    <section id="faculty" className="bg-white py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              DEPARTMENT ARCHIVE & FACILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
              Faculty & Research Mentors
            </h2>
          </div>
          <Link
            href="/people"
            className="text-xs font-bold text-[#103E3B] uppercase tracking-wider hover:underline"
          >
            Core Faculty Profiles
          </Link>
        </div>

        {/* 4 Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMentors.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-xs flex flex-col justify-between group hover:border-[#103E3B] transition-colors"
            >
              {/* Top Navy Blue Box with Avatar Initials */}
              <div className="bg-[#103E3B] p-6 text-center space-y-3 relative">
                <div className="w-16 h-16 rounded-full bg-[#F8F5EE] text-[#103E3B] font-serif font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                  {f.initials}
                </div>
                <div className="text-sm font-serif font-bold text-white line-clamp-1">
                  {f.name}
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="px-2 py-0.5 bg-white/10 text-[9px] font-bold text-[#C59B27] rounded border border-white/10 uppercase">
                    {f.designation}
                  </span>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="p-4 space-y-2 text-center flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-serif font-bold text-[#103E3B]">
                    {f.name}
                  </div>
                  <div className="text-[11px] text-slate-600 font-sans mt-1">
                    {f.specialization}
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href={f.href}
                    className="text-[11px] font-bold text-[#103E3B] uppercase tracking-wider hover:text-[#B58A28]"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
