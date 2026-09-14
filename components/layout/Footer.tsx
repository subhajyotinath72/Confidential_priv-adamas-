"use client";

import React from "react";
import Link from "next/link";
import { Activity, MapPin, Phone, Mail, Award, ShieldCheck, ExternalLink, Globe, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-adamas-navy-dark text-slate-300 border-t border-adamas-teal/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Badges Banner */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 text-adamas-gold" />
              <div>
                <h4 className="text-sm font-semibold text-white">Adamas University Institutional Approvals & Accreditations</h4>
                <p className="text-xs text-slate-400">School of Engineering & Technology — Recognized Excellence in Higher Education</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-adamas-teal/20 text-adamas-teal-light border border-adamas-teal/40">
                NAAC Accredited A+
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-adamas-gold/20 text-adamas-gold border border-adamas-gold/40">
                AICTE Approved
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/40">
                UGC Recognized
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40">
                NIRF Top Institutions Ranking
              </span>
            </div>
          </div>
        </div>

        {/* Main 5 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Address & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-adamas-teal/20 flex items-center justify-center border border-adamas-teal/40">
                <Activity className="w-5 h-5 text-adamas-teal-light" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Adamas University</h3>
                <p className="text-xs text-adamas-gold font-medium">Department of Biomedical Engineering</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Housed under the School of Engineering & Technology (SET), pioneering clinical-oriented engineering, biosensor development, 3D bioprinting, and medical artificial intelligence in Kolkata, West Bengal.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-adamas-teal-accent flex-shrink-0 mt-0.5" />
                <span>
                  Barasat–Barrackpore Road, Barbaria, P.O Jagannathpur, District 24 Parganas (North), Kolkata – 700126, West Bengal, India
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-adamas-gold flex-shrink-0" />
                <span>Toll-Free Admission Helpline: 1800-419-7423</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-adamas-teal-accent flex-shrink-0" />
                <span>biomedical@adamasuniversity.ac.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Research Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-adamas-gold">
              Research Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/research#01" className="hover:text-adamas-teal-light transition-colors">
                  01 Instrumentation & Biosensors
                </Link>
              </li>
              <li>
                <Link href="/research#02" className="hover:text-adamas-teal-light transition-colors">
                  02 Biomaterials & Tissue Eng.
                </Link>
              </li>
              <li>
                <Link href="/research#03" className="hover:text-adamas-teal-light transition-colors">
                  03 Health Informatics & AI
                </Link>
              </li>
              <li>
                <Link href="/research#centers" className="hover:text-adamas-teal-light transition-colors">
                  Interdisciplinary Labs & Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Academics */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-adamas-gold">
              Academics & Admissions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/admission#btech-bme" className="hover:text-adamas-teal-light transition-colors">
                  B.Tech Biomedical Engineering
                </Link>
              </li>
              <li>
                <Link href="/admission#mtech-bme" className="hover:text-adamas-teal-light transition-colors">
                  M.Tech Biomedical Engineering
                </Link>
              </li>
              <li>
                <Link href="/admission#phd-bme" className="hover:text-adamas-teal-light transition-colors">
                  Ph.D. Doctoral Fellowships
                </Link>
              </li>
              <li>
                <a href="https://adamasuniversity.ac.in/adamas-university/#" target="_blank" rel="noopener noreferrer" className="hover:text-adamas-teal-light transition-colors flex items-center text-adamas-gold font-bold">
                  AUAT Admission Process 2026 <Sparkles className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Portals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-adamas-gold">
              Quick Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://adamasuniversity.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-adamas-teal-light transition-colors flex items-center">
                  Adamas Main Portal <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <Link href="/people" className="hover:text-adamas-teal-light transition-colors">
                  Faculty & Staff Directory
                </Link>
              </li>
              <li>
                <Link href="/grievances" className="hover:text-adamas-teal-light transition-colors">
                  Grievance Redressal Cell
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-adamas-teal-light transition-colors">
                  Campus Location & Route
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>
            © 2026 Department of Biomedical Engineering, School of Engineering & Technology, Adamas University, Kolkata. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
