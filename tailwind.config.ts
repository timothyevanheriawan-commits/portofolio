import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0": "0",
      "1": "4px",
      "2": "8px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
      "7": "64px",
      "8": "96px",
    },
    fontSize: {
      meta: ["13px", { lineHeight: "1.5" }],
      body: ["17px", { lineHeight: "1.6" }],
      h3: ["22px", { lineHeight: "1.3" }],
      h2: ["32px", { lineHeight: "1.25" }],
      h1: ["48px", { lineHeight: "1.15" }],
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      mono: ["var(--font-ibm-plex-mono)", "monospace"],
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
        DEFAULT: "#7A1E1E",
        hover: "#641616",
      },
      divider: "#D8D8D8",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "2px",
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
      },
      transitionTimingFunction: {
        out: "ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
