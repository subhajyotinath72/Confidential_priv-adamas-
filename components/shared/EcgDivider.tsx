"use client";

import React, { useId, useMemo } from "react";

interface EcgDividerProps {
  className?: string;
  color?: string;
}

export const EcgDivider: React.FC<EcgDividerProps> = ({
  className = "",
  color = "#4A1525",
}) => {
  const rawId = useId();
  // Sanitize id for SVG url references
  const uniqueId = rawId.replace(/[^a-zA-Z0-9-_]/g, "");

  // Generate seamless sinusoidal wave path
  // Start at -50 and end at 1250 with wavelength 50 (exactly 26 periods)
  const sinePath = useMemo(() => {
    const wavelength = 50;
    const amplitude = 7;
    const midY = 16;
    const startX = -50;
    const endX = 1250;

    let d = `M ${startX} ${midY}`;
    for (let x = startX + 2; x <= endX; x += 2) {
      const y = midY - amplitude * Math.sin(((x - startX) / wavelength) * 2 * Math.PI);
      d += ` L ${x.toFixed(1)} ${y.toFixed(2)}`;
    }
    return d;
  }, []);

  return (
    <div className={`w-full flex items-center justify-center overflow-hidden py-4 ${className}`}>
      <div className="relative w-full max-w-6xl px-4 sm:px-6 flex items-center justify-center">
        <svg
          className="w-full h-8 sm:h-9 overflow-hidden"
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Fade at leftmost and rightmost borders */}
            <linearGradient id={`maskGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="4%" stopColor="white" stopOpacity="0.4" />
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="90%" stopColor="white" stopOpacity="1" />
              <stop offset="96%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id={`sineMask-${uniqueId}`}>
              <rect x="0" y="0" width="1200" height="32" fill={`url(#maskGrad-${uniqueId})`} />
            </mask>

            {/* Glowing gradient for the traveling highlight wave */}
            <linearGradient id={`glowGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="100%" stopColor={color} stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Masked container so wave fades smoothly at extreme ends */}
          <g mask={`url(#sineMask-${uniqueId})`}>
            {/* Ambient static baseline track */}
            <path
              d={sinePath}
              stroke={color}
              strokeOpacity="0.18"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Continuous running sinusoidal wave translating from left to right */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-50 0"
                to="0 0"
                dur="2.4s"
                repeatCount="indefinite"
              />

              {/* Main vibrant sinusoidal wave */}
              <path
                d={sinePath}
                stroke={color}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Luminous flowing pulse sweep */}
              <path
                d={sinePath}
                stroke={`url(#glowGrad-${uniqueId})`}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="180 1020"
                style={{
                  filter: `drop-shadow(0 0 4px ${color})`,
                }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1200"
                  to="-1200"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EcgDivider;
