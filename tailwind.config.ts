import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space:   "#060B18",
        navy:    "#0D1B2A",
        "navy-2":"#0F2236",
        cyan:    "#00D4FF",
        "cyan-dim":"#00A8CC",
        amber:   "#F59E0B",
        slate:   "#94A3B8",
        "slate-2":"#64748B",
        muted:   "#1E293B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, #00D4FF15 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow":  "spin 8s linear infinite",
        "glow":       "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 5px #00D4FF40" },
          "100%": { boxShadow: "0 0 20px #00D4FF80, 0 0 40px #00D4FF40" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
