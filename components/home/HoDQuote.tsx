"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const HoDQuote: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Site A Style Pull Quote Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md relative"
        >
          {/* Large Background Quote Watermark */}
          <Quote className="absolute top-6 right-8 w-32 h-32 text-slate-200 rotate-180 pointer-events-none hidden sm:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* HoD Photo & Credentials Card (Left 4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-adamas-gold shadow-lg bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500"
                    alt="Dr. Arindam Banerjee - Head of Department"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-adamas-gold text-white p-2 rounded-xl shadow-lg border border-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Dr. Arindam Banerjee
                </h3>
                <p className="text-xs font-semibold text-adamas-gold-dark uppercase tracking-wider">
                  Professor & Head of Department
                </p>
                <p className="text-xs text-slate-600">
                  Ph.D. (IIT Kharagpur) | Biomedical Instrumentation
                </p>
                <p className="text-[11px] text-teal-700 font-semibold pt-1">
                  School of Engineering & Technology, Adamas University
                </p>
              </div>
            </div>

            {/* HoD Quote Body (Right 8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-adamas-gold" />
                <span>Leadership Message & Vision</span>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-adamas-gold pl-6">
                "Biomedical engineering is where the exactness of physical sciences meets the profound complexity of human medicine. At Adamas University, our mission is to empower young engineers to create tangible clinical solutions — from point-of-care biosensors for rural clinics to AI diagnostic assistants and 3D bioprinted tissue matrices."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Clinical Integration with Kolkata Regional Hospitals</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>DST-SERB & ICMR Sponsored Research Projects</span>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <Link
                  href="/faculty#fac-1"
                  className="inline-flex items-center text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <span>Read Dr. Banerjee's Research Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
