"use client";

import React from "react";

export const USPTiles: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Internships & Placements */}
      <section className="bg-white/40 backdrop-blur-[1px] py-12 lg:py-16 border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Ambient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8">
            <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
              CAREER PATHWAYS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
              Internships & Hospital Rotations
            </h2>
            <p className="text-sm sm:text-base text-[#103E3B]/80 mt-1 max-w-3xl font-sans">
              Students complete compulsory clinical rotations in super-specialty hospitals and secure roles in biomedical instrumentation, clinical trials, and diagnostics.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-thin">
            <div className="flex w-max space-x-6 animate-horizontal-ticker py-2">
              {[1, 2].flatMap((iteration) => [
                {
                  id: "01",
                  title: "Hospital Clinical Rotations",
                  desc: "Third-year students rotate across radiology, dialysis centers, catheterization labs, and ICU maintenance divisions.",
                },
                {
                  id: "02",
                  title: "Industry Internships",
                  desc: "Paid summer internships in biomedical hardware assembly, signal processing pipelines, and healthcare software solutions.",
                },
                {
                  id: "03",
                  title: "Key Recruiting Sectors",
                  recruiters: ["GE Healthcare", "Siemens Healthineers", "Apollo Hospitals", "Philips BioMed", "Medtronic"],
                },
              ]).map((card, index) => (
                <div
                  key={index}
                  className="w-[300px] sm:w-[360px] flex-shrink-0 glass-card p-6 rounded-2xl space-y-4 hover:shadow-md transition-all border border-slate-200 bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#103E3B] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    {card.id}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#103E3B]">
                    {card.title}
                  </h3>
                  {card.desc && (
                    <p className="text-xs text-[#103E3B]/80 leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  )}
                  {card.recruiters && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {card.recruiters.map((r, i) => (
                        <span key={i} className="px-2.5 py-1 bg-amber-50 text-[10px] font-bold text-[#B58A28] border border-amber-200/80 rounded shadow-xs">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
