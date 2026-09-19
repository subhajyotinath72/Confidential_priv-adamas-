"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Sparkles, Bell, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EcgDivider } from "@/components/shared/EcgDivider";

interface NewsAndEventsProps {
  showFullArchive?: boolean;
}

export const NewsAndEvents: React.FC<NewsAndEventsProps> = ({ showFullArchive = false }) => {
  const [items, setItems] = useState<any[]>([
    {
      day: "05",
      month: "AUG",
      tag: "RESEARCH & INNOVATION",
      title: "Cardiovascular AI Telemetry Grant Secured",
      desc: "National funding awarded for wearable photoplethysmography sensor systems engineered by the department faculty.",
      href: "/news#grant",
    },
    {
      day: "12",
      month: "SEP",
      tag: "SYMPOSIUM",
      title: "Annual MedTech Bio-Design Challenge",
      desc: "Undergraduate teams will present low-cost neonatal incubator sensors and smart prosthetic limb prototypes.",
      href: "/news#biodesign",
    },
    {
      day: "18",
      month: "OCT",
      tag: "GUEST LECTURE",
      title: "Robotic Surgery & Haptics Colloquium",
      desc: "Distinguished guest lecture on low-latency micro-laparoscopy control by leading surgical specialists.",
      href: "/news#robotics",
    },
  ]);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          const mapped = data.news.map((n: any) => {
            const dateParts = n.date ? n.date.split(" ") : ["AUG", "15"];
            return {
              day: dateParts[1]?.replace(",", "") || "15",
              month: (dateParts[0] || "AUG").substring(0, 3).toUpperCase(),
              tag: (n.category || "NEWS").toUpperCase(),
              title: n.title,
              desc: n.summary,
              href: `/news#${n.id}`,
            };
          });
          setItems(mapped);
        }
      })
      .catch((err) => console.error("Could not fetch live news data:", err));
  }, []);

  const getCategoryIcon = (tag: string) => {
    const upper = (tag || "").toUpperCase();
    if (upper.includes("RESEARCH") || upper.includes("INNOVATION")) return Sparkles;
    if (upper.includes("SYMPOSIUM") || upper.includes("CONFERENCE")) return Calendar;
    if (upper.includes("GUEST") || upper.includes("LECTURE")) return Bell;
    return Award;
  };

  if (showFullArchive) {
    return (
      <section id="news" className="bg-white/40 backdrop-blur-[1px] py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
                UPDATES & COLLOQUIA
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
                News & Events
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => {
              const Icon = getCategoryIcon(item.tag);
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#103E3B] transition-colors"
                >
                  <div className="flex items-start sm:items-center space-x-4">
                    <div className="bg-white border border-slate-200 rounded-lg p-2 text-center w-14 flex-shrink-0">
                      <div className="text-xs text-[#103E3B]/70 font-bold uppercase">{item.month}</div>
                      <div className="text-lg font-serif font-bold text-[#103E3B] leading-none">{item.day}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-3.5 h-3.5 text-[#B58A28]" />
                        <span className="text-[9px] font-bold text-[#B58A28] uppercase tracking-widest">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-serif font-bold text-[#103E3B]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-sans max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Duplicate items array for seamless marquee loop
  const marqueeItems = [...items, ...items];

  return (
    <section id="news" className="bg-white/40 backdrop-blur-[1px] py-12 lg:py-16 border-b border-slate-200/80 overflow-hidden relative">
      {/* Background Glass Ambient Blobs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              UPDATES & COLLOQUIA
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
              News & Events Overview
            </h2>
            <p className="text-xs sm:text-sm text-[#103E3B]/70 mt-1">
              Click on any event card to open the complete News & Events section.
            </p>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#103E3B] uppercase tracking-wider hover:text-[#B58A28] transition-colors flex items-center space-x-1 self-start sm:self-auto"
          >
            <span>VIEW ALL UPDATES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Animated Horizontal Ticker */}
        <div className="overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex w-max space-x-6 animate-horizontal-ticker py-2">
            {marqueeItems.map((item, idx) => {
              const Icon = getCategoryIcon(item.tag);
              return (
                <Link
                  key={idx}
                  href="/news"
                  className="w-[300px] sm:w-[360px] flex-shrink-0 glass-card p-5 rounded-2xl cursor-pointer group space-y-3 bg-white border border-slate-200 shadow-xs hover:border-[#103E3B] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-1 flex items-center space-x-2">
                      <span className="text-xs font-bold text-[#103E3B]/70 uppercase">{item.month}</span>
                      <span className="text-sm font-serif font-bold text-[#103E3B]">{item.day}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-[#103E3B] group-hover:bg-[#103E3B] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B58A28]" />
                      <span className="text-[10px] font-bold text-[#B58A28] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#103E3B] line-clamp-1 group-hover:text-[#B58A28] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-1 flex items-center text-xs font-bold text-[#103E3B] group-hover:text-[#B58A28] transition-colors">
                    <span>Read Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* Subtle ECG Pulse Divider */}
      <EcgDivider className="mt-8" color="#103E3B" />
    </section>
  );
};
