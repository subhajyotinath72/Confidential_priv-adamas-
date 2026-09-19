"use client";

import React from "react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Camera, Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="bg-transparent min-h-screen pb-20 space-y-12">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Adamas BME Visual Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Our Memories & Life at Adamas
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Explore state-of-the-art bio-laboratories, super-specialty hospital clinical rotations, national symposiums, and student life in the Department of Biomedical Engineering.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </div>

    </div>
  );
}
