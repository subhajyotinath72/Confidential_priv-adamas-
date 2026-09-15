"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight, GraduationCap, Building2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const memoryPhotos = [
    {
      title: "Neural Imaging & Bio-AI Analytics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Microfluidic Biosensor Fabrication",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "3D Cellular Tissue Bioprinting",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Neuro-Prosthetics & Rehabilitation",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Confocal Fluorescence Microscopy",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "EEG Signal Processing Workshop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Neonatal Incubator Prototyping",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Bio-MEMS Cleanroom Testing",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Biomaterials Polymer Synthesis",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Prosthetic Arm EMG Calibration",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Patient Telemetry Monitor Lab",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Laser Spectroscopy Bench",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="gallery" className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
            Our Memories
          </h2>
        </div>

        {/* 12 Photo Grid (3 rows x 4 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {memoryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl h-44 sm:h-52 bg-slate-200 border border-[#D5D0C5] shadow-xs"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider block drop-shadow-sm">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
