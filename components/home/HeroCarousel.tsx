"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Activity, Sparkles, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    title: "Engineering the Future of Healthcare",
    subtitle: "Where Biomedical Innovation Meets Human Impact",
    description: "Pioneering non-invasive medical diagnostic devices, smart biosensors, 3D bioprinting scaffolds, and healthcare artificial intelligence at Adamas University, Kolkata.",
    bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
    tag: "School of Engineering & Technology",
    primaryCtaText: "Explore Research Tracks",
    primaryCtaLink: "/research",
    secondaryCtaText: "View Academic Programs",
    secondaryCtaLink: "/admission",
  },
  {
    id: 2,
    title: "Advanced 3D Bioprinting & Tissue Engineering",
    subtitle: "Cellular Scaffolds & Regenerative Medicine",
    description: "Developing biomimetic polymer matrices, bio-inks, and customized orthopedic implants in collaboration with Kolkata's leading clinical research networks.",
    bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1920",
    tag: "02 Biomaterials & Scaffolds",
    primaryCtaText: "Biomaterials Lab",
    primaryCtaLink: "/research#02",
    secondaryCtaText: "Faculty Profiles",
    secondaryCtaLink: "/people",
  },
  {
    id: 3,
    title: "AI-Powered Diagnostics & Medical Imaging",
    subtitle: "Deep Learning for Radiological Excellence",
    description: "Training neural vision models for automated MRI segmentation, tele-ICU patient monitoring, and low-cost rural screening tools.",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
    tag: "03 Health Informatics & AI",
    primaryCtaText: "Explore Bio-AI Track",
    primaryCtaLink: "/research#03",
    secondaryCtaText: "Apply Now 2026",
    secondaryCtaLink: "https://adamasuniversity.ac.in/adamas-university/#",
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-adamas-navy-dark overflow-hidden">
      
      {/* Background Image Carousel with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Multi-layer gradient overlays for high contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-adamas-navy-dark via-adamas-navy/95 to-adamas-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-adamas-navy-dark via-transparent to-adamas-navy-dark/60" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-adamas-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-adamas-crimson/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Breadcrumb Tag / Badge */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-adamas-navy-dark/90 border border-adamas-gold/50 text-adamas-gold text-xs font-extrabold backdrop-blur-md shadow-md"
          >
            <Activity className="w-3.5 h-3.5 text-adamas-gold" />
            <span>{slide.tag}</span>
          </motion.div>

          {/* Main Title & Subtitle */}
          <motion.div
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-adamas-gold">
              {slide.subtitle}
            </p>
          </motion.div>

          {/* Paragraph Description */}
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl"
          >
            {slide.description}
          </motion.p>

          {/* Dual Action Buttons - Adamas Crimson & Gold */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="https://adamasuniversity.ac.in/adamas-university/#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-adamas-crimson hover:bg-adamas-crimson-dark shadow-lg hover:shadow-crimson transition-all transform hover:-translate-y-0.5"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <Link
              href={slide.primaryCtaLink}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-adamas-navy-dark bg-adamas-gold hover:bg-amber-400 shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              <span>{slide.primaryCtaText}</span>
            </Link>
          </motion.div>

          {/* Key Accreditation Badges Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-200"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-adamas-gold" />
              <span className="font-bold">NAAC A+ Accredited • AICTE Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-adamas-gold" />
              <span>State-of-the-Art Bio-Labs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-3">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-adamas-navy-dark/80 text-white hover:bg-adamas-gold/30 border border-white/20 transition-colors backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2 px-2">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-adamas-gold" : "w-2 bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-adamas-navy-dark/80 text-white hover:bg-adamas-gold/30 border border-white/20 transition-colors backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
