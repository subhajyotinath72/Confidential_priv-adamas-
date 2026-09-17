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
        iceMint: {
          DEFAULT: "#eaf6f6",
          light: "#f4fafb",
          dark: "#d1eded",
        },
        deepTeal: {
          DEFAULT: "#103E3B",
          dark: "#0D3330",
          light: "#175753",
        },
        darkTeal: "#0D3330",
        adamas: {
          navy: {
            DEFAULT: "#103E3B",
            dark: "#0D3330",
            light: "#175753",
            hover: "#0D3330",
          },
          gold: {
            DEFAULT: "#B58A28",
            dark: "#96701B",
            light: "#C59B27",
            accent: "#D4AF37",
          },
          slate: {
            DEFAULT: "#FFFFFF",
            card: "#F8FAF9",
            muted: "#103E3B",
            border: "#E2E8F0",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(16, 62, 59, 0.08)",
        glow: "0 0 25px -5px rgba(16, 62, 59, 0.3)",
        card: "0 4px 20px -2px rgba(16, 62, 59, 0.06)",
        "card-hover": "0 12px 30px -4px rgba(16, 62, 59, 0.12)",
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
