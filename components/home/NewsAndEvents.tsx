"use client";

import React from "react";
import { motion } from "framer-motion";
import { RECENT_NEWS, UPCOMING_EVENTS } from "@/data/newsEvents";
import { Calendar, Clock, MapPin, ArrowRight, Bell, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

export const NewsAndEvents: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
              Department Bulletin & Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              News, Achievements & Upcoming Events
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
              Stay updated with recent R&D breakthroughs, student awards, industry MoUs, and academic seminars at Adamas Biomedical Engineering.
            </p>
          </div>
        </div>

        {/* 2 Column Main Grid (3 News Cards Left + Coming Up Events Sidebar Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: 3 Date-Tagged Recent News Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-adamas-gold-dark uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Recent Updates & Announcements</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RECENT_NEWS.map((news, idx) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-teal-500 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* News Image with Category Pill */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                        {news.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                        <Calendar className="w-3 h-3 text-teal-600" />
                        <span>{news.date}</span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-teal-700 transition-colors leading-snug">
                        {news.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{news.author}</span>
                    <span className="text-teal-700 font-semibold group-hover:underline">Read post →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: "Coming Up" Upcoming Events Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Coming Up
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md">
                Calendar
              </span>
            </div>

            {/* Upcoming Event Items */}
            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-white hover:bg-teal-50/50 p-3.5 rounded-xl border border-slate-200 transition-colors flex items-start space-x-3 group shadow-xs"
                >
                  {/* Date Badge (Day / Month) */}
                  <div className="bg-slate-900 text-white rounded-lg p-2 text-center w-12 flex-shrink-0 border border-slate-800">
                    <div className="text-base font-black leading-none font-mono text-adamas-gold">{event.day}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-300 mt-0.5">{event.month}</div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 space-y-1">
                    <span className="text-[9px] font-bold text-amber-800 uppercase px-1.5 py-0.5 rounded bg-amber-100">
                      {event.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">
                      {event.title}
                    </h4>
                    <div className="text-[11px] text-slate-500 flex items-center space-x-1 pt-0.5">
                      <Clock className="w-3 h-3 text-teal-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      📍 {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-adamas-navy hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
              >
                <span>Register for Upcoming Events</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
