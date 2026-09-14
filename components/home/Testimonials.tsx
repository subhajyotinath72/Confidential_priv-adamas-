"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight, GraduationCap, Building2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
            Alumni & Student Voices
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Graduate Success Stories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Hear from our alumni thriving in global MedTech leaders and top research universities worldwide.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg relative"
            >
              <Quote className="w-16 h-16 text-slate-200 absolute top-6 right-8 rotate-180 pointer-events-none" />

              <blockquote className="text-lg sm:text-xl text-slate-800 leading-relaxed italic mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-adamas-gold"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <div className="text-xs text-adamas-gold-dark flex items-center space-x-1 font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{testimonial.degree} ({testimonial.batch})</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 flex items-center space-x-2 text-xs text-slate-700">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.currentRole}</div>
                    <div className="text-[10px] text-slate-500">{testimonial.companyOrUniversity}</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-700 border border-slate-200 transition-colors shadow-xs"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-500 font-mono">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-700 border border-slate-200 transition-colors shadow-xs"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
