"use client";

import React from "react";
import { Sparkles, GraduationCap, Briefcase, Award, Hospital, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function OpportunitiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Sparkles className="w-4 h-4 text-adamas-gold" />
            <span>Student & Career Growth</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Opportunities & Careers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover funded research fellowships, hospital clinical rotations, undergraduate seed grants, and academic career openings at Adamas Biomedical Engineering.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Fellowships & Grants */}
        <div id="fellowships" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-200">
              <Award className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Research Fellowships & Seed Grants</h2>
              <p className="text-xs text-slate-500">Government Sponsored (DST-SERB, ICMR) & University Fellowships</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-teal-800 uppercase px-2 py-0.5 rounded bg-teal-100">
                Doctoral
              </span>
              <h3 className="text-sm font-bold text-slate-900">JRF / SRF Research Fellowships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stipend-supported Junior Research Fellow (JRF) positions under DST-SERB 3D bioprinting and ICMR point-of-care projects.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-amber-800 uppercase px-2 py-0.5 rounded bg-amber-100">
                Postgraduate
              </span>
              <h3 className="text-sm font-bold text-slate-900">GATE Teaching Assistantships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monthly stipend for eligible GATE-qualified M.Tech candidates assisting in bio-electronics laboratory courses.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-purple-800 uppercase px-2 py-0.5 rounded bg-purple-100">
                Undergraduate
              </span>
              <h3 className="text-sm font-bold text-slate-900">Student Innovation Seed Fund</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Up to ₹50,000 seed grants for B.Tech capstone teams prototyping patent-worthy medical devices.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Clinical Internships */}
        <div id="internships" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
              <Hospital className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Clinical Hospital Immersion Program</h2>
              <p className="text-xs text-slate-500">6-Month Mandatory Hands-on Rotations across Partner Super-Specialty Hospitals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="space-y-3">
              <div className="font-bold text-slate-900 text-sm">Key Rotations & Exposure Areas:</div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Radiology & Diagnostic Imaging Systems Calibration (MRI, CT, Ultrasound)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Critical Care ICU Equipment Maintenance & Electrical Safety Inspections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Catheterization Lab & Surgical Instrumentation Setup Protocol</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm">Hospital Placement Partners:</div>
              <p className="text-slate-600 leading-relaxed">
                Students complete structured internships at premier Kolkata healthcare networks mentored by clinical engineering leads and senior medical officers.
              </p>
              <Link
                href="/partnerships"
                className="inline-flex items-center font-bold text-teal-700 hover:underline pt-1"
              >
                <span>View All Hospital MoUs</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Career Openings */}
        <div id="careers" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-200">
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Career & Academic Openings</h2>
              <p className="text-xs text-slate-500">Current Job Opportunities at Adamas Biomedical Engineering</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-slate-900">Junior Research Fellow (JRF) — 3D Bioprinting</div>
                <div className="text-xs text-slate-500">Department R&D Cell | Project: DST-SERB Vascularized Scaffolds</div>
              </div>
              <Link href="/contact" className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 self-start sm:self-auto">
                Apply Position
              </Link>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-slate-900">Assistant Professor — Healthcare AI & Medical Signal Processing</div>
                <div className="text-xs text-slate-500">School of Engineering & Technology | Ph.D. Required</div>
              </div>
              <Link href="/contact" className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 self-start sm:self-auto">
                Apply Position
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
