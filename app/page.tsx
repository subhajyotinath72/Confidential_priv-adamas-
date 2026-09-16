import React from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { USPTiles } from "@/components/home/USPTiles";
import { HoDQuote } from "@/components/home/HoDQuote";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { Testimonials } from "@/components/home/Testimonials";
import { Spotlight } from "@/components/home/Spotlight";
import { ApplyNowBanner } from "@/components/home/ApplyNowBanner";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-white text-[#103E3B] space-y-0">
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. HoD Leadership & Vision Section */}
      <HoDQuote />

      {/* 3. Academic Programs & Admissions Section */}
      <AcademicPrograms />

      {/* 4. USP Tiles / Hospital & Industry Partners */}
      <USPTiles />

      {/* 5. Apply Now / Student Welfare Banner */}
      <ApplyNowBanner />

      {/* 6. News & Events Section */}
      <NewsAndEvents />

      {/* 7. Faculty Spotlight */}
      <Spotlight />

      {/* 8. Our Memories / Testimonials Gallery */}
      <Testimonials />

      {/* 9. Connect with Department & Inquiry */}
      <ContactSection />
    </div>
  );
}

