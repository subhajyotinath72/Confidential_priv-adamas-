"use client";

import React from "react";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { Bell } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Bell className="w-4 h-4 text-adamas-gold" />
            <span>Adamas BME Bulletin</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            News, Events & Seminars
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with department announcements, research grant awards, national seminars, and upcoming guest lectures.
          </p>
        </div>
      </section>

      {/* News & Events Component */}
      <NewsAndEvents showFullArchive={true} />

    </div>
  );
}
