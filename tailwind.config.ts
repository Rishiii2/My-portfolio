import type { Config } from "tailwindcss";

/* The visual system lives in src/app/globals.css as plain CSS custom
   properties. Tailwind is kept for layout utilities only; these tokens
   mirror the CSS variables so utility classes stay on-palette. */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070A",
        panel: "#0A0E14",
        "panel-2": "#0D131B",
        line: "#18212C",
        "line-hot": "#22303F",
        ink: "#E8EFF6",
        "ink-dim": "#94A6B8",
        "ink-mute": "#5E6E7F",
        cyan: "#22D3EE",
        "cyan-dim": "#0E7490",
        amber: "#FFB020",
        green: "#3DDC97",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
