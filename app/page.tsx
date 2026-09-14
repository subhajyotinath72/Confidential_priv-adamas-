import React from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { USPTiles } from "@/components/home/USPTiles";
import { HoDQuote } from "@/components/home/HoDQuote";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { ResearchCenters } from "@/components/home/ResearchCenters";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { Testimonials } from "@/components/home/Testimonials";
import { Spotlight } from "@/components/home/Spotlight";
import { ApplyNowBanner } from "@/components/home/ApplyNowBanner";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. 4 Stat/USP Tiles */}
      <USPTiles />

      {/* 3. HoD Pull-Quote Block (Site A Layout Style) */}
      <HoDQuote />

      {/* 4. Research Areas (01 / 02 / 03 Numbered Expandable Panels) */}
      <ResearchAreas />

      {/* 5. Academic Programs (Large Cards + Specialization Chips) */}
      <AcademicPrograms />

      {/* 6. Interdisciplinary Platforms & Centers Grid */}
      <ResearchCenters />

      {/* 7. News & Events (3 Cards + Coming Up Sidebar) */}
      <NewsAndEvents />

      {/* 8. Student & Alumni Testimonials */}
      <Testimonials />

      {/* 9. Department Spotlight Grid */}
      <Spotlight />

      {/* 10. Apply Now Banner */}
      <ApplyNowBanner />
    </div>
  );
}
