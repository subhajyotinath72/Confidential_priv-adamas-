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
            DEFAULT: "#1B365D",
            dark: "#0F2137",
            light: "#25467A",
            hover: "#172E4E",
          },
          gold: {
            DEFAULT: "#B58A28",
            dark: "#96701B",
            light: "#C59B27",
            accent: "#D4AF37",
          },
          slate: {
            DEFAULT: "#F8F5EE",
            card: "#EFECE6",
            muted: "#5A6578",
            border: "#E2DDD3",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
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
