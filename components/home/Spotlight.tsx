"use client";

import React from "react";
import { motion } from "framer-motion";
import { SPOTLIGHT_ITEMS } from "@/data/testimonials";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Spotlight: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
              Department Highlights
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              In The Spotlight
            </h2>
          </div>
          <Link
            href="/contact"
            className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center hidden sm:flex"
          >
            <span>Explore All Facilities</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {/* 4 Spotlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPOTLIGHT_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-teal-500 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-teal-800 text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-200 shadow-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href="/programs"
                  className="inline-flex items-center text-xs font-bold text-adamas-gold-dark hover:text-slate-900 transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
