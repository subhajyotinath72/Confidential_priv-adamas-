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
          DEFAULT: "var(--color-primary, #4A1525)",
          dark: "var(--color-primary-dark, #330E1A)",
          light: "var(--color-primary, #631D32)",
        },
        darkTeal: "var(--color-primary-dark, #330E1A)",
        adamas: {
          navy: {
            DEFAULT: "var(--color-primary, #4A1525)",
            dark: "var(--color-primary-dark, #330E1A)",
            light: "var(--color-primary, #631D32)",
            hover: "var(--color-primary-dark, #330E1A)",
          },
          gold: {
            DEFAULT: "var(--color-accent, #D4AF37)",
            dark: "#B89728",
            light: "var(--color-accent-light, #E8C860)",
            accent: "var(--color-accent, #D4AF37)",
          },
          slate: {
            DEFAULT: "var(--color-bg-page, #FCFBF7)",
            card: "#F8F5EE",
            muted: "var(--color-text-main, #330E1A)",
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
        glass: "0 8px 32px 0 rgba(74, 21, 37, 0.08)",
        glow: "0 0 25px -5px rgba(74, 21, 37, 0.3)",
        card: "0 4px 20px -2px rgba(74, 21, 37, 0.06)",
        "card-hover": "0 12px 30px -4px rgba(74, 21, 37, 0.12)",
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
