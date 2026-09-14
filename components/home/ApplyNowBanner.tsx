"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, PhoneCall } from "lucide-react";

export const ApplyNowBanner: React.FC = () => {
  return (
    <section id="apply" className="py-16 bg-gradient-to-r from-adamas-navy-dark via-adamas-navy to-adamas-navy-dark relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-adamas-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-adamas-crimson/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-adamas-navy via-adamas-navy-light to-adamas-navy border border-adamas-gold/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-adamas-gold text-adamas-navy-dark text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open for Academic Year 2026-27</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Shape the Next Era of Healthcare Innovation
              </h2>

              <p className="text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                Join the Department of Biomedical Engineering at Adamas University, Kolkata. Gain hands-on exposure in state-of-the-art bio-electronics labs, hospital clinical rotations, and 3D tissue bioprinting.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-200 pt-2">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-adamas-gold" />
                  <span>B.Tech | M.Tech | Ph.D. Seats Available</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-adamas-gold" />
                  <span>AUAT / WBJEE / JEE Main Accepted</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-adamas-gold" />
                  <span>Merit Scholarships Available</span>
                </div>
              </div>
            </div>

            {/* Right CTA Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="https://adamasuniversity.ac.in/adamas-university/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-extrabold text-sm text-white bg-adamas-crimson hover:bg-adamas-crimson-dark shadow-lg hover:shadow-crimson transition-all transform hover:-translate-y-0.5"
              >
                <span>Submit Online Application</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="tel:18004197423"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-xs text-adamas-gold bg-white/10 hover:bg-white/20 border border-adamas-gold/30 backdrop-blur-md transition-all text-center"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-adamas-gold" />
                <span>Call Admissions: 1800-419-7423</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
