"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, Dna, Cpu, HeartPulse, Stethoscope } from "lucide-react";

const TICKER_ITEMS = [
  { text: "INNOVATION • RESEARCH • TRANSLATIONAL MEDICINE", icon: Sparkles },
  { text: "AI-POWERED DIAGNOSTICS & TELE-ICU", icon: Cpu },
  { text: "CELLULAR 3D BIOPRINTING & TISSUE SCAFFOLDS", icon: Dna },
  { text: "MICROFLUIDIC LAB-ON-A-CHIP BIOSENSORS", icon: Activity },
  { text: "SUPER-SPECIALTY CLINICAL HOSPITAL ROTATIONS", icon: Stethoscope },
  { text: "ROBOTIC PROSTHETICS & NEURO-ENGINEERING", icon: HeartPulse },
];

export const RollingTicker: React.FC = () => {
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#0D3330] text-[#F7D6C8] border-y border-white/10 py-3.5 overflow-hidden relative shadow-md">
      
      {/* Subtle Side Fade Overlays for Smooth Edge Transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D3330] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D3330] to-transparent z-10 pointer-events-none" />

      {/* Infinite Linear Ticker Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            duration: 32,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
          className="flex whitespace-nowrap items-center gap-10 cursor-default"
        >
          {repeatedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 text-xs sm:text-xs font-bold tracking-widest uppercase text-[#F7D6C8]/90 hover:text-white transition-colors group"
              >
                <span className="p-1 rounded-full bg-[#103E3B] border border-amber-400/30 text-amber-300 group-hover:scale-110 transition-transform">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span>{item.text}</span>
                <span className="text-amber-400/50 font-bold ml-4">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
};
