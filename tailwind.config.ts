// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0": "0",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "12px",
      "3": "16px",
      "3.5": "20px",
      "4": "24px",
      "5": "32px",
      "5.5": "40px",
      "6": "48px",
      "6.5": "56px",
      "7": "64px",
      "7.5": "80px",
      "8": "96px",
      "9": "128px",
      "10": "160px",
    },
    fontSize: {
      micro: ["11px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      meta: ["13px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      small: ["15px", { lineHeight: "1.55" }],
      body: ["17px", { lineHeight: "1.6" }],
      medium: ["19px", { lineHeight: "1.55" }],
      h3: ["22px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      h2: ["32px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      h1: ["48px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
      display: ["64px", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      mono: ["var(--font-jetbrains)", "monospace"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      bg: {
        primary: "#F7F7F5",
        secondary: "#FFFFFF",
      },
      text: {
        primary: "#111111",
        secondary: "#5F5F5F",
      },
      accent: {
        DEFAULT: "rgb(122 30 30)", // Changed to RGB format
        hover: "rgb(100 22 22)", // Changed to RGB format
        light: "rgb(122 30 30 / 0.1)", // Added light variant
        muted: "rgb(122 30 30 / 0.2)", // Added muted variant
      },
      divider: "#D8D8D8",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "2px",
      md: "4px", // Added
    },
    extend: {
      maxWidth: {
        container: "1140px",
        content: "680px",
        prose: "65ch",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms", // Added
      },
      transitionTimingFunction: {
        out: "ease-out",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // Added
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "float-up": "float-up 6s ease-in-out infinite",
        "float-down": "float-down 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
