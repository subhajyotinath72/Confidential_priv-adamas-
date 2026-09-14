"use client";

import React from "react";
import { Handshake, Hospital, Building2, Rocket, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PartnershipsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <Handshake className="w-4 h-4 text-adamas-gold" />
            <span>Clinical & Industry Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Partnerships & Collaborations
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connecting academic engineering with clinical practice, global MedTech enterprises, and healthcare startup incubation in Kolkata, West Bengal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Hospital Clinical MoUs */}
        <div id="hospitals" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
              <Hospital className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Clinical Hospital MoUs</h2>
              <p className="text-xs text-slate-500">Kolkata Super-Specialty Medical Partners</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Apollo Multispecialty Hospitals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Joint clinical research on wearable cardiac signal monitoring and ICU medical equipment calibration protocols.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Fortis Healthcare Kolkata</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical trial validation of 3D printed bioceramic scaffolds and orthopedic joint biomechanics modeling.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">AMRI Hospitals Kolkata</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Radiology AI dataset sharing agreement for training transformer-based MRI & CT tumor segmentation models.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Industry MedTech Leaders */}
        <div id="industry" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-200">
              <Building2 className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">MedTech Industry Partners</h2>
              <p className="text-xs text-slate-500">Corporate R&D & Placement Alliances</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-bold text-slate-900 text-sm">
              Siemens Healthineers
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-bold text-slate-900 text-sm">
              GE HealthCare
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-bold text-slate-900 text-sm">
              Philips Healthcare
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-bold text-slate-900 text-sm">
              Medtronic India
            </div>
          </div>
        </div>

        {/* Section 3: MedTech Startup Incubator */}
        <div id="incubator" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 scroll-mt-28 text-slate-900">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-200">
              <Rocket className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">MedTech Startup Incubator Cell</h2>
              <p className="text-xs text-slate-500">Converting Research into Commercial Enterprises</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            Adamas University's MedTech Incubator provides student entrepreneurs with lab space, seed funding up to ₹5 Lakhs, ISO 13485 regulatory advice, and direct connections to angel investors in healthcare.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm"
          >
            <span>Propose a Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
