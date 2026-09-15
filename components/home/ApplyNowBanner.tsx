"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, PhoneCall } from "lucide-react";

export const ApplyNowBanner: React.FC = () => {
  return (
    <section id="grievances" className="bg-[#F8F5EE] py-12 lg:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#EFECE6] p-6 sm:p-10 rounded-2xl border border-[#E2DDD3] shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-3 max-w-3xl">
              <div>
                <span className="px-2.5 py-1 bg-[#1B365D] text-[9px] font-bold text-white uppercase tracking-wider rounded">
                  STUDENT WELFARE
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-semibold text-[#1B365D] tracking-tight">
                Student Grievance Redressal Portal
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Transparent, confidential platform for submitting academic, laboratory, or personal grievances directly to the department committee.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/grievances"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1B365D] hover:bg-[#162E50] shadow-sm transition-all"
              >
                LODGE A GRIEVANCE <span className="ml-2">→</span>
              </Link>

              <Link
                href="/grievances#policy"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider text-[#1B365D] bg-[#F8F5EE] border border-[#D5D0C5] hover:bg-[#E5E0D5] transition-all"
              >
                VIEW POLICY
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
