"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESEARCH_TRACKS } from "@/data/research";
import { FACULTY_MEMBERS } from "@/data/faculty";
import { ChevronDown, Activity, Dna, Brain, Tag, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ResearchAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>("01");

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity": return Activity;
      case "Dna": return Dna;
      case "Brain": return Brain;
      default: return Activity;
    }
  };

  return (
    <section id="research" className="py-20 bg-slate-50 relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
              Core R&D Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Department Research Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
              Pioneering interdisciplinary R&D at the intersection of electronics, polymer synthesis, and clinical intelligence.
            </p>
          </div>

          <div className="text-xs text-slate-500 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping" />
            <span>Click any track panel (01 / 02 / 03) to expand details</span>
          </div>
        </div>

        {/* 01 / 02 / 03 Expandable Panel Accordion (Site A Layout Pattern) */}
        <div className="space-y-6">
          {RESEARCH_TRACKS.map((track) => {
            const isExpanded = expandedId === track.id;
            const Icon = getTrackIcon(track.iconName);

            // Filter faculty in this track
            const trackFaculty = FACULTY_MEMBERS.filter((f) =>
              track.leadFacultyIds.includes(f.id)
            );

            return (
              <motion.div
                key={track.id}
                id={`research-${track.id}`}
                layout
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white border-teal-500/50 shadow-lg"
                    : "bg-white border-slate-200 hover:border-teal-300 hover:shadow-md"
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  onClick={() => setExpandedId(isExpanded ? "" : track.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center space-x-6">
                    {/* Number Badge (01 / 02 / 03) */}
                    <div
                      className={`text-3xl sm:text-4xl font-black font-mono px-4 py-2 rounded-xl border transition-colors ${
                        isExpanded
                          ? "bg-teal-600 text-white border-teal-700 shadow-md"
                          : "bg-slate-100 text-adamas-gold-dark border-slate-200 group-hover:bg-teal-50"
                      }`}
                    >
                      {track.number}
                    </div>

                    {/* Track Title & Subtitle */}
                    <div>
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${isExpanded ? "text-teal-600" : "text-slate-500"}`} />
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                          {track.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-adamas-gold-dark mt-1 font-semibold">
                        {track.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow Icon */}
                  <div
                    className={`p-3 rounded-full border transition-transform duration-300 ${
                      isExpanded
                        ? "bg-teal-50 text-teal-700 border-teal-200 rotate-180"
                        : "bg-slate-100 text-slate-500 border-slate-200 group-hover:text-slate-800"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Panel Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-8 sm:px-8 border-t border-slate-100 pt-6 space-y-6"
                    >
                      {/* Paragraph Description */}
                      <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
                        {track.description}
                      </p>

                      {/* Sub-Topic Tag Clusters (Site A Pattern) */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                          <Tag className="w-3.5 h-3.5 text-teal-600" />
                          <span>Specialization Tags & Focus Sub-Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {track.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-xs font-medium hover:bg-teal-100 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Track Metrics Highlights Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        {track.highlights.map((h, i) => (
                          <div key={i} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{h.label}</div>
                            <div className="text-sm font-bold text-slate-900 mt-0.5">{h.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Horizontal Scrolling Faculty Avatar Strip (Site A Pattern) */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            Track Research Leads & Faculty
                          </span>
                          <Link href="/faculty" className="text-xs text-teal-700 hover:underline flex items-center">
                            View All Faculty <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>

                        <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-teal-500">
                          {trackFaculty.map((fac) => (
                            <Link
                              key={fac.id}
                              href={`/faculty#${fac.id}`}
                              className="flex items-center space-x-3 bg-slate-50 hover:bg-slate-100 p-2.5 rounded-xl border border-slate-200 transition-colors flex-shrink-0 group"
                            >
                              <img
                                src={fac.avatar}
                                alt={fac.name}
                                className="w-10 h-10 rounded-lg object-cover border border-teal-500 group-hover:scale-105 transition-transform"
                              />
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                                  {fac.name}
                                </div>
                                <div className="text-[10px] text-slate-500">
                                  {fac.designation}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
