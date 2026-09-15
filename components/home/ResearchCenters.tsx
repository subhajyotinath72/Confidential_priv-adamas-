"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESEARCH_CENTERS } from "@/data/research";
import { Scan, Layers, Cpu, HeartPulse, Microscope, Footprints, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ResearchCenters: React.FC = () => {
  const labs = [
    {
      id: "LAB 01",
      title: "Bio-Electronics & Sensors Lab",
      desc: "ECG, EEG, and wearable biosensor testing suites.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "LAB 02",
      title: "3D Bioprinting & Biomaterials Suite",
      desc: "Hydrogel bio-ink extruders and tissue scaffolding printers.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "LAB 03",
      title: "Medical Image AI & Telemedicine Hub",
      desc: "High-performance GPU clusters for radiology vision transformers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "LAB 04",
      title: "Prosthetics & Gait Analysis Lab",
      desc: "Motion capture cameras, force plates, and EMG analyzers.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="centers" className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              ADVANCED INFRASTRUCTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
              BIOMEDICAL RESEARCH LABORATORIES <span className="text-sm font-sans font-normal text-slate-600 italic block sm:inline">Cleanrooms & Core Suites</span>
            </h2>
          </div>
          <Link
            href="/research#centers"
            className="text-xs font-bold text-[#1B365D] uppercase tracking-wider hover:underline"
          >
            VIEW ALL LABS →
          </Link>
        </div>

        {/* 4 Lab Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] p-4 rounded-2xl border border-[#E2DDD3] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1B365D] transition-colors group"
            >
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-200 border border-[#D5D0C5]">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2.5 py-1 bg-[#1B365D] text-[9px] font-bold text-white uppercase tracking-wider rounded border border-white/10">
                    {lab.id}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif font-bold text-[#1B365D]">
                  {lab.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {lab.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
