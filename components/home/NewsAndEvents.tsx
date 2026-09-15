"use client";

import React from "react";
import { motion } from "framer-motion";
import { RECENT_NEWS, UPCOMING_EVENTS } from "@/data/newsEvents";
import { Calendar, Clock, MapPin, ArrowRight, Bell, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

export const NewsAndEvents: React.FC = () => {
  const newsList = [
    {
      day: "05",
      month: "AUG",
      tag: "RESEARCH & INNOVATION",
      title: "Cardiovascular AI Telemetry Grant Secured",
      desc: "National funding awarded for wearable photoplethysmography sensor systems engineered by the department faculty.",
      linkText: "Read Report →",
      href: "/news#grant",
    },
    {
      day: "12",
      month: "SEP",
      tag: "SYMPOSIUM",
      title: "Annual MedTech Bio-Design Challenge",
      desc: "Undergraduate teams will present low-cost neonatal incubator sensors and smart prosthetic limb prototypes.",
      linkText: "Register to Attend →",
      href: "/news#biodesign",
    },
    {
      day: "18",
      month: "OCT",
      tag: "GUEST LECTURE",
      title: "Robotic Surgery & Haptics Colloquium",
      desc: "Distinguished guest lecture on low-latency micro-laparoscopy control by leading surgical specialists.",
      linkText: "View Schedule →",
      href: "/news#robotics",
    },
  ];

  return (
    <section id="news" className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              UPDATES & COLLOQUIA
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1B365D] tracking-tight">
              News & Events
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#1B365D] uppercase tracking-wider hover:underline"
          >
            VIEW ARCHIVE →
          </Link>
        </div>

        {/* Stacked Cards */}
        <div className="space-y-4">
          {newsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] p-5 rounded-xl border border-[#E2DDD3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#1B365D] transition-colors"
            >
              <div className="flex items-start sm:items-center space-x-4">
                {/* Date Block */}
                <div className="bg-[#F8F5EE] border border-[#D5D0C5] rounded-lg p-2 text-center w-14 flex-shrink-0">
                  <div className="text-xs text-slate-500 font-bold uppercase">{item.month}</div>
                  <div className="text-lg font-serif font-bold text-[#1B365D] leading-none">{item.day}</div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B58A28]" />
                    <span className="text-[9px] font-bold text-[#B58A28] uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1B365D]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans line-clamp-1 max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="flex-shrink-0 pt-2 sm:pt-0">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-[#1B365D] hover:text-[#B58A28] transition-colors"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
