"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera, ArrowUpRight } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/components/gallery/GalleryGrid";

const SLIDE_DURATION = 4200; // 4.2 seconds per slide

export const HeroGallerySlideshow: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch updated gallery photos from content API if available
  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.gallery && Array.isArray(data.gallery) && data.gallery.length > 0) {
          setPhotos(data.gallery);
        }
      })
      .catch(() => {});
  }, []);

  const total = photos.length;

  // Next Slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (total || 1));
  }, [total]);

  // Previous Slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + (total || 1)) % (total || 1));
  }, [total]);

  // Jump to specific slide
  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Continuous auto-cycling loop (always runs without stopping)
  useEffect(() => {
    if (total <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, total, currentIndex]);

  // Preload adjacent images for butter-smooth transitions
  useEffect(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex + 1) % total;
    const prevIdx = (currentIndex - 1 + total) % total;
    [photos[nextIdx]?.image, photos[prevIdx]?.image].forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [currentIndex, photos, total]);

  const currentPhoto = photos[currentIndex] || photos[0];

  if (!currentPhoto) return null;

  return (
    <div
      className="relative w-full h-full overflow-hidden group select-none"
      style={{ backgroundColor: "var(--color-primary-dark, #0D3330)" }}
      aria-label="Department Gallery Slideshow"
    >
      {/* Cycling Images with Smooth Ken Burns Fade Transition */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentPhoto.id || currentIndex}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Tint & Gradient Overlay for Contrast and Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(var(--color-primary-dark-rgb, 13, 51, 48), 0.95), rgba(var(--color-primary-dark-rgb, 13, 51, 48), 0.35), rgba(0, 0, 0, 0.3))",
        }}
      />

      {/* Top Banner: Badge, Live Indicator, Slide Counter */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
        <div className="inline-flex items-center space-x-2 bg-black/45 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-lg">
          <Camera className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-amber-200">
            CAMPUS & LAB GALLERY
          </span>
          <span className="relative flex h-2 w-2 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
        </div>

        {/* Counter Badge */}
        <div className="bg-black/45 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-white shadow-lg">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Left/Right Cycle Navigation Arrows */}
      <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between z-20 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Photo"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Photo"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Content: Category, Title, Caption & Gallery Link */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 z-20 flex flex-col justify-end space-y-1.5">
        
        {/* Animated Slide Meta */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id || currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="space-y-1"
          >
            <div className="flex items-center space-x-2">
              <span className="inline-block px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#F7D6C8] bg-white/15 backdrop-blur-md border border-white/15 shadow-xs">
                {currentPhoto.category}
              </span>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-white tracking-wide leading-snug drop-shadow-md truncate">
                  {currentPhoto.title}
                </h4>
                {currentPhoto.caption && (
                  <p className="text-[11px] sm:text-xs text-slate-200/90 font-sans line-clamp-1 drop-shadow-sm mt-0.5">
                    {currentPhoto.caption}
                  </p>
                )}
              </div>

              {/* Quick Link to Gallery */}
              <Link
                href="/gallery"
                className="pointer-events-auto inline-flex items-center space-x-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 bg-black/40 hover:bg-black/60 px-2.5 py-1.5 rounded-lg border border-amber-300/30 backdrop-blur-md transition-all whitespace-nowrap shadow-sm hover:scale-105 active:scale-95"
              >
                <span>Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Progress Bar & Dot Indicators */}
        <div className="pt-2 flex items-center justify-between gap-2">
          {/* Dot / Pill Track */}
          <div className="flex items-center space-x-1.5 flex-wrap overflow-hidden max-w-[90%] py-1">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-6 sm:w-8 h-1.5 bg-amber-400 shadow-md"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Auto-Slide Continuous Loading Line along the very bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/10 z-30">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          className="h-full bg-gradient-to-r from-teal-400 via-amber-300 to-amber-400"
        />
      </div>
    </div>
  );
};
