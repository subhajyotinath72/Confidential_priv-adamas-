"use client";

import React from "react";

interface EcgDividerProps {
  className?: string;
  color?: string;
}

export const EcgDivider: React.FC<EcgDividerProps> = ({
  className = "",
  color = "#B58A28",
}) => {
  return (
    <div className={`w-full flex items-center justify-center overflow-hidden py-3 ${className}`}>
      <div className="relative w-full max-w-4xl flex items-center">
        {/* Left Fading Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#103E3B]/20 to-[#103E3B]/40" />

        {/* Center ECG Waveform */}
        <div className="relative px-3 flex-shrink-0 flex items-center justify-center">
          <svg
            className="w-48 sm:w-64 h-7 overflow-visible"
            viewBox="0 0 240 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background static faint track */}
            <path
              d="M0 15 L50 15 L60 15 L70 5 L80 25 L90 2 L100 28 L110 12 L120 15 L240 15"
              stroke="#103E3B"
              strokeOpacity="0.15"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Animated glowing pulse sweep */}
            <path
              d="M0 15 L50 15 L60 15 L70 5 L80 25 L90 2 L100 28 L110 12 L120 15 L240 15"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ecg"
              style={{
                filter: "drop-shadow(0 0 4px rgba(181, 138, 40, 0.7))",
              }}
            />
          </svg>
        </div>

        {/* Right Fading Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#103E3B]/20 to-[#103E3B]/40" />
      </div>
    </div>
  );
};
