"use client";

import React from "react";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { EventCalendar } from "@/components/news/EventCalendar";
import { Bell } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="bg-transparent min-h-screen pb-20 space-y-12">
      
      {/* Header Banner */}
      <section className="bg-[#103E3B] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#F7D6C8] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Adamas BME Bulletin</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            News, Events & Seminars
          </h1>
          <p className="text-sm sm:text-base text-[#F7D6C8]/90 max-w-3xl mx-auto leading-relaxed font-sans">
            Stay informed with department announcements, research grant awards, national seminars, and upcoming guest lectures.
          </p>
        </div>
      </section>

      {/* Dynamic Interactive Event Calendar Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventCalendar />
      </div>

      {/* Full Archive News & Events List */}
      <NewsAndEvents showFullArchive={true} />

    </div>
  );
}
