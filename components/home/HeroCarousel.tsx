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
  const labGridItems = [
    {
      title: "NEURAL IMAGING & AI",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "NEURO-PROSTHETICS LAB",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "3D CELLULAR BIOPRINTING",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "MICROFLUIDIC BIOSENSORS",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="bg-white/40 backdrop-blur-[1px] text-[#103E3B] py-12 lg:py-20 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Gold Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-widest text-[#B58A28] uppercase bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58A28] animate-pulse" />
              <span>SCHOOL OF ENGINEERING AND TECHNOLOGY</span>
            </div>

            {/* Serif Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-[#103E3B] tracking-tight leading-[1.1]">
              Biomedical <br />
              <span className="bg-gradient-to-r from-[#103E3B] via-teal-700 to-[#B58A28] bg-clip-text text-transparent">
                Engineering
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-serif italic text-[#103E3B]/80">
              Bridging Engineering, Biology & Healthcare.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#103E3B]/90 font-medium">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-teal-50/80 border border-teal-200/80 text-[#103E3B]">
                ✓ AICTE & UGC Recognized
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-teal-50/80 border border-teal-200/80 text-[#103E3B]">
                ✓ 100% Hospital Clinical Rotations
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-teal-50/80 border border-teal-200/80 text-[#103E3B]">
                ✓ Class-1000 Cleanrooms
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://adamasuniversity.ac.in/adamas-university/#"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#103E3B] hover:bg-[#0D3330] shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                APPLY FOR ADMISSIONS <span className="ml-2">→</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#103E3B] bg-[#EFECE6] border border-[#D5D0C5] hover:bg-[#E5E0D5] transition-all hover:scale-[1.02]"
              >
                VIEW DEPARTMENT GALLERY
              </Link>
            </div>
          </motion.div>

          {/* Right 2x2 Lab Grid Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-[#EFECE6]/85 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[#E2DDD3]/90 shadow-md">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {labGridItems.map((lab, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-xl h-36 sm:h-44 bg-slate-200/90 border border-[#D5D0C5] shadow-xs scanner-card cursor-pointer"
                  >
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/90 via-black/20 to-transparent" />
                    
                    {/* Top Status Dot */}
                    <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#103E3B]/80 text-[8px] font-bold text-emerald-300 border border-white/20 uppercase backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                        ACTIVE
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block px-2 py-1 bg-[#103E3B]/90 text-[9px] font-bold text-white uppercase tracking-wider rounded backdrop-blur-sm border border-white/10 group-hover:border-amber-400/50 transition-colors">
                        {lab.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
