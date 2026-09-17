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
    <section className="bg-white text-[#103E3B] py-12 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Gold Eyebrow */}
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase">
              SCHOOL OF ENGINEERING AND TECHNOLOGY
            </div>

            {/* Serif Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-[#103E3B] tracking-tight leading-[1.1]">
              Biomedical <br />
              Engineering
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-serif italic text-[#103E3B]/80">
              Bridging Engineering, Biology & Healthcare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://adamasuniversity.ac.in/adamas-university/#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#103E3B] hover:bg-[#0D3330] shadow-sm transition-all"
              >
                APPLY FOR ADMISSIONS <span className="ml-2">→</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#103E3B] bg-[#EFECE6] border border-[#D5D0C5] hover:bg-[#E5E0D5] transition-all"
              >
                VIEW DEPARTMENT GALLERY
              </Link>
            </div>
          </div>

          {/* Right 2x2 Lab Grid Card Container */}
          <div className="lg:col-span-6">
            <div className="bg-[#EFECE6]/85 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[#E2DDD3]/90 shadow-md">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {labGridItems.map((lab, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-xl h-36 sm:h-44 bg-slate-200/90 border border-[#D5D0C5] shadow-xs"
                  >
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block px-2 py-1 bg-[#103E3B]/90 text-[9px] font-bold text-white uppercase tracking-wider rounded backdrop-blur-sm border border-white/10">
                        {lab.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
