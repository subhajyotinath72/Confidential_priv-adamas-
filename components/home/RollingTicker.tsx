"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

const TICKER_ITEMS = [
  "INNOVATION • RESEARCH • DEVELOPMENT",
  "Biomedical Engineering Solutions",
  "Transforming Healthcare Through Technology",
  "AI • Medical Devices • Diagnostics",
  "Engineering the Future of Healthcare",
];

export const RollingTicker: React.FC = () => {
  // Duplicate array 3 times to ensure smooth infinite loop on wide screens
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#103E3B] text-[#F7D6C8] border-y border-[#F7D6C8]/20 py-3.5 overflow-hidden relative shadow-md">
      
      {/* Subtle Side Fade Overlays for Smooth Edge Transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#103E3B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#103E3B] to-transparent z-10 pointer-events-none" />

      {/* Infinite Linear Ticker Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center gap-8 group"
        >
          {repeatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-6 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F7D6C8] hover:text-white transition-colors"
            >
              <span>{item}</span>
              <span className="text-[#F7D6C8]/40 font-normal">•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
