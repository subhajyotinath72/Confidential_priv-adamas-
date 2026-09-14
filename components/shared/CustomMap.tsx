"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Compass, ExternalLink, Building2, Hospital, Layers } from "lucide-react";

export const CustomMap: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<string>("set");

  const campusPoints = [
    {
      id: "set",
      name: "School of Engineering & Technology (SET Building)",
      type: "Academic Hub",
      desc: "Houses the Department of Biomedical Engineering, Bio-Electronics Labs, Cleanrooms, and Faculty Offices.",
      coords: { x: "48%", y: "42%" },
      icon: Building2,
    },
    {
      id: "hospital",
      name: "Clinical Immersion Partner Hospital",
      type: "Clinical Partner",
      desc: "Primary location for B.Tech & M.Tech hospital rotations, radiology equipment practice, and ICU monitoring studies.",
      coords: { x: "72%", y: "30%" },
      icon: Hospital,
    },
    {
      id: "bioprint",
      name: "3D Bioprinting & Tissue Culture Center",
      type: "Advanced R&D Lab",
      desc: "Class-1000 cleanroom suite for polymer scaffold formulation and cell incubator facilities.",
      coords: { x: "32%", y: "65%" },
      icon: Layers,
    },
  ];

  const active = campusPoints.find((p) => p.id === selectedPoint) || campusPoints[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md p-6 relative text-slate-900">
      
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
        <div>
          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">
            Interactive Campus Map
          </span>
          <h3 className="text-lg font-bold text-slate-900 flex items-center">
            <Compass className="w-5 h-5 mr-2 text-teal-600" />
            Adamas University Campus • Kolkata (24 Parganas North)
          </h3>
        </div>
        <a
          href="https://maps.google.com/?q=Adamas+University+Barasat+Barrackpore+Road+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-teal-700 hover:underline"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      {/* SVG Canvas Map Representation */}
      <div className="relative w-full h-80 sm:h-96 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
        
        {/* Styled Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948820_1px,transparent_1px),linear-gradient(to_bottom,#0d948820_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Campus Road Paths SVG */}
        <svg className="absolute inset-0 w-full h-full stroke-teal-500/30 fill-none" strokeWidth="3">
          <path d="M 50 300 Q 200 150 400 200 T 800 100" strokeDasharray="6 6" />
          <path d="M 200 50 Q 250 200 500 350" />
        </svg>

        {/* Interactive Pin Markers */}
        {campusPoints.map((pt) => {
          const isSelected = pt.id === selectedPoint;
          const Icon = pt.icon;
          return (
            <button
              key={pt.id}
              onClick={() => setSelectedPoint(pt.id)}
              style={{ left: pt.coords.x, top: pt.coords.y }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
            >
              <div
                className={`p-3 rounded-full border-2 transition-all ${
                  isSelected
                    ? "bg-amber-500 border-white text-slate-900 shadow-lg scale-125"
                    : "bg-slate-900 border-teal-400 text-teal-300 hover:scale-110"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-slate-900/95 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap shadow-md">
                {pt.name.split(" ")[0]}
              </span>
            </button>
          );
        })}

        {/* Selected Marker Detail Card Box overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-teal-500/40 shadow-2xl z-30 space-y-2 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-adamas-gold uppercase px-2 py-0.5 rounded bg-adamas-gold/20">
              {active.type}
            </span>
            <span className="text-[10px] text-slate-400">Click pins to view</span>
          </div>
          <h4 className="text-sm font-bold text-white">{active.name}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{active.desc}</p>
        </div>

      </div>

      {/* Address Text Summary below map */}
      <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>Barasat–Barrackpore Road, Barbaria, P.O Jagannathpur, Kolkata – 700126, West Bengal</span>
        </div>
        <div className="flex items-center space-x-1 text-teal-700 font-semibold">
          <Navigation className="w-3.5 h-3.5" />
          <span>15km from Netaji Subhash Chandra Bose Int'l Airport</span>
        </div>
      </div>

    </div>
  );
};
