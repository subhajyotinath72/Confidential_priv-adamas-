"use client";

import React from "react";
import { FrontVideo } from "@/components/home/FrontVideo";
import { RollingTicker } from "@/components/home/RollingTicker";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { USPTiles } from "@/components/home/USPTiles";
import { HoDQuote } from "@/components/home/HoDQuote";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-transparent text-[#103E3B] space-y-0">
      {/* 0. Front Page Auto-Playing Video Section */}
      <FrontVideo />

      {/* 0.5 Linear Infinite Text Motion Ticker */}
      <RollingTicker />

      {/* MAIN BODY: All Sections */}
      <HeroCarousel />
      <HoDQuote />
      <AcademicPrograms />
      <USPTiles />
      <NewsAndEvents />

      {/* 6. Connect with Department & Inquiry (Contact Details Section - Untouched & Solid) */}
      <ContactSection />
    </div>
  );
}

