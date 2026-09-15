"use client";

import React from "react";
import Link from "next/link";
import { Activity, MapPin, Phone, Mail, Award, ShieldCheck, ExternalLink, Globe, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B365D] text-slate-300 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-8 border-b border-white/10">
          
          {/* Brand Info (Left 6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-md bg-[#C59B27]/20 p-1 border border-[#C59B27]/50 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#C59B27]" />
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-widest text-[#C59B27] uppercase block">
                  ADAMAS UNIVERSITY
                </span>
                <span className="text-base font-serif font-semibold text-white">
                  Department of Biomedical Engineering
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md font-sans">
              Advancing clinical diagnostics, medical robotics, 3D bioprinting, and biosensors through integrated engineering education.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/admission" className="hover:text-[#C59B27] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-[#C59B27] transition-colors">
                  Hospital Partners
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="hover:text-[#C59B27] transition-colors">
                  Internships & Placement
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[#C59B27] transition-colors">
                  Visual Showcase & Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Welfare (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              SUPPORT & WELFARE
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/grievances" className="hover:text-[#C59B27] transition-colors">
                  Student Grievances
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#C59B27] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C59B27] transition-colors">
                  Contact Department
                </Link>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#C59B27] transition-colors text-left flex items-center"
                >
                  Back to Top ↑
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>
            © 2025 Department of Biomedical Engineering, Adamas University. All rights reserved.
          </p>
          <p>
            Barasat–Barrackpore Road, Kolkata 700126
          </p>
        </div>

      </div>
    </footer>
  );
};
