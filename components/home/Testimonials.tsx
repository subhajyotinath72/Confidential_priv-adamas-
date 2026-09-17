"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { GALLERY_PHOTOS } from "@/components/gallery/GalleryGrid";

export const Testimonials: React.FC = () => {
  // Showcase first 4 photos on home page
  const previewPhotos = GALLERY_PHOTOS.slice(0, 4);

  return (
    <section id="gallery" className="bg-white py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              VISUAL SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
              Our Memories
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center text-xs font-bold text-[#103E3B] uppercase tracking-wider hover:text-[#B58A28] transition-colors group"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Preview Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewPhotos.map((photo, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="relative group overflow-hidden rounded-2xl h-52 sm:h-60 bg-slate-100 border border-[#E2DDD3] shadow-xs block"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  {photo.category}
                </span>
                <span className="text-xs font-serif font-bold text-white leading-tight">
                  {photo.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
