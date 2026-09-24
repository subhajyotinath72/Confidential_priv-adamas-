"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, Dna, Cpu, HeartPulse, Stethoscope } from "lucide-react";
import { useSiteSettings } from "@/components/providers/SiteSettingsContext";

const ICONS = [Sparkles, Cpu, Dna, Activity, Stethoscope, HeartPulse];

export const RollingTicker: React.FC = () => {
  const { settings } = useSiteSettings();
  const tickerItems = (settings?.ticker && settings.ticker.length > 0)
    ? settings.ticker
    : [
        "INNOVATION • RESEARCH • TRANSLATIONAL MEDICINE",
        "AI-POWERED DIAGNOSTICS & TELE-ICU",
        "CELLULAR 3D BIOPRINTING & TISSUE SCAFFOLDS",
        "MICROFLUIDIC LAB-ON-A-CHIP BIOSENSORS",
        "SUPER-SPECIALTY CLINICAL HOSPITAL ROTATIONS",
        "ROBOTIC PROSTHETICS & NEURO-ENGINEERING",
      ];

  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className="w-full text-[#F7D6C8] border-y border-white/10 py-3.5 overflow-hidden relative shadow-md transition-colors"
      style={{ backgroundColor: "var(--color-primary-dark, #0D3330)" }}
    >
      
      {/* Subtle Side Fade Overlays for Smooth Edge Transitions */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--color-primary-dark, #0D3330), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--color-primary-dark, #0D3330), transparent)",
        }}
      />

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
          {repeatedItems.map((text, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="flex items-center space-x-3 text-xs sm:text-xs font-bold tracking-widest uppercase text-[#F7D6C8]/90 hover:text-white transition-colors group"
              >
                <span
                  className="p-1 rounded-full border border-amber-400/30 text-amber-300 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "var(--color-primary, #103E3B)" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span>{text}</span>
                <span className="text-amber-400/50 font-bold ml-4">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
};
