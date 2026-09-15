"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESEARCH_TRACKS } from "@/data/research";
import { FACULTY_MEMBERS } from "@/data/faculty";
import { ChevronDown, Activity, Dna, Brain, Tag, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ResearchAreas: React.FC = () => {
  const studentProjects = [
    {
      id: "Project 1",
      badge: "BIO-DESIGN CHALLENGE",
      subBadge: "GOLD MEDAL",
      title: "Low-Cost Telemetry Innovators",
      desc: "Designed contactless vital monitoring for rural pediatric clinics.",
      href: "/research#project-1",
    },
    {
      id: "Project 2",
      badge: "HOSPITAL ROTATION",
      subBadge: "DIAGNOSTICS",
      title: "Biomedical Engineering Interns",
      desc: "Assisting hospital biophysicists in cath-lab instrumentation calibration.",
      href: "/research#project-2",
    },
    {
      id: "Project 3",
      badge: "IEEE EMBS CHAPTER",
      subBadge: "RESEARCH",
      title: "EMG Hand Orthosis Developers",
      desc: "Presented findings at national IEEE engineering in medicine symposium.",
      href: "/research#project-3",
    },
  ];

  return (
    <section id="bioalgorithm" className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              STUDENT RESEARCH & INNOVATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
              BIOALGORITHM <span className="text-sm font-sans font-normal text-slate-600 italic block sm:inline">Research & Projects by students</span>
            </h2>
          </div>
          <Link
            href="/research"
            className="text-xs font-bold text-[#1B365D] uppercase tracking-wider hover:underline"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentProjects.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] p-4 rounded-2xl border border-[#E2DDD3] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1B365D] transition-colors"
            >
              {/* Blue Header Box */}
              <div className="bg-[#1B365D] h-40 rounded-xl p-4 flex flex-col justify-between text-white relative">
                <div className="flex justify-between items-center text-[9px] font-bold text-[#C59B27] uppercase tracking-widest">
                  <span>{p.badge}</span>
                  <span>{p.subBadge}</span>
                </div>
                <div className="text-center font-serif font-bold text-xl text-white">
                  {p.id}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="text-base font-serif font-bold text-[#1B365D]">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
