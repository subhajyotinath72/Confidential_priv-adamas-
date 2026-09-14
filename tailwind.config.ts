import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        adamas: {
          navy: {
            DEFAULT: "#0F2137",
            dark: "#081427",
            light: "#1C365D",
            hover: "#172E4E",
          },
          teal: {
            DEFAULT: "#0D9488",
            dark: "#0F766E",
            light: "#2DD4BF",
            accent: "#14B8A6",
            glow: "rgba(13, 148, 136, 0.15)",
          },
          gold: {
            DEFAULT: "#D97706",
            dark: "#B45309",
            light: "#F59E0B",
            accent: "#FBBF24",
          },
          slate: {
            DEFAULT: "#F8FAFC",
            card: "#FFFFFF",
            muted: "#64748B",
            border: "#E2E8F0",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 33, 55, 0.08)",
        glow: "0 0 25px -5px rgba(13, 148, 136, 0.3)",
        card: "0 4px 20px -2px rgba(15, 33, 55, 0.06)",
        "card-hover": "0 12px 30px -4px rgba(15, 33, 55, 0.12)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
