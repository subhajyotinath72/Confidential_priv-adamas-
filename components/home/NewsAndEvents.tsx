"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RECENT_NEWS, UPCOMING_EVENTS } from "@/data/newsEvents";
import { Calendar, Clock, MapPin, ArrowRight, Bell, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

export const NewsAndEvents: React.FC = () => {
  const [items, setItems] = useState<any[]>([
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
  ]);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          const mapped = data.news.slice(0, 5).map((n: any) => {
            const dateParts = n.date ? n.date.split(" ") : ["AUG", "15"];
            return {
              day: dateParts[1]?.replace(",", "") || "15",
              month: (dateParts[0] || "AUG").substring(0, 3).toUpperCase(),
              tag: (n.category || "NEWS").toUpperCase(),
              title: n.title,
              desc: n.summary,
              linkText: "Read Report →",
              href: `/news#${n.id}`,
            };
          });
          setItems(mapped);
        }
      })
      .catch((err) => console.error("Could not fetch live news data:", err));
  }, []);

  return (
    <section id="news" className="bg-white py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              UPDATES & COLLOQUIA
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
              News & Events
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#103E3B] uppercase tracking-wider hover:underline"
          >
            VIEW ARCHIVE →
          </Link>
        </div>

        {/* Stacked Cards */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#103E3B] transition-colors"
            >
              <div className="flex items-start sm:items-center space-x-4">
                {/* Date Block */}
                <div className="bg-white border border-slate-200 rounded-lg p-2 text-center w-14 flex-shrink-0">
                  <div className="text-xs text-[#103E3B]/70 font-bold uppercase">{item.month}</div>
                  <div className="text-lg font-serif font-bold text-[#103E3B] leading-none">{item.day}</div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B58A28]" />
                    <span className="text-[9px] font-bold text-[#B58A28] uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#103E3B]">
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
                  className="text-xs font-bold text-[#103E3B] hover:text-[#B58A28] transition-colors"
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
