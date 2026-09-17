import React from "react";
import { FrontVideo } from "@/components/home/FrontVideo";
import { RollingTicker } from "@/components/home/RollingTicker";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { USPTiles } from "@/components/home/USPTiles";
import { HoDQuote } from "@/components/home/HoDQuote";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { Spotlight } from "@/components/home/Spotlight";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-black text-[#eaf6f6] space-y-0">
      {/* 0. Front Page Auto-Playing Video Section */}
      <FrontVideo />

      {/* 0.5 Linear Infinite Text Motion Ticker */}
      <RollingTicker />

      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. HoD Leadership & Vision Section */}
      <HoDQuote />

      {/* 3. Academic Programs & Admissions Section */}
      <AcademicPrograms />

      {/* 4. USP Tiles / Hospital & Industry Partners */}
      <USPTiles />

      {/* 5. News & Events Section */}
      <NewsAndEvents />

      {/* 6. Faculty Spotlight */}
      <Spotlight />

      {/* 7. Connect with Department & Inquiry */}
      <ContactSection />
    </div>
  );
}

