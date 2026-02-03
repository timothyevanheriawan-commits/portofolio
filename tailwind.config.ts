// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Custom spacing scale (based on 4px grid with key stops)
    spacing: {
      "0": "0",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },

    // Typography scale
    fontSize: {
      // Micro text (labels, captions)
      xs: ["11px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      // Small text (meta, timestamps)
      sm: ["13px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      // Base body text
      base: ["15px", { lineHeight: "1.65", letterSpacing: "-0.01em" }],
      // Slightly larger body
      lg: ["17px", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
      // Lead text
      xl: ["20px", { lineHeight: "1.5", letterSpacing: "-0.015em" }],
      // H4
      "2xl": ["24px", { lineHeight: "1.35", letterSpacing: "-0.02em" }],
      // H3
      "3xl": ["32px", { lineHeight: "1.25", letterSpacing: "-0.025em" }],
      // H2
      "4xl": ["40px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
      // H1
      "5xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      // Display
      "6xl": ["64px", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      // Hero
      "7xl": ["72px", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
    },

    // Font families
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      display: [
        "var(--font-space)",
        "var(--font-inter)",
        "system-ui",
        "sans-serif",
      ],
      mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
    },

    // Font weights
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    // Color palette - warm neutrals with oxidized red accent
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",

      // Background
      bg: {
        primary: "#F7F7F5",
        secondary: "#FFFFFF",
        tertiary: "#F0F0EE",
        elevated: "#FAFAF9",
      },

      // Text
      text: {
        primary: "#111111",
        secondary: "#4A4A4A",
        tertiary: "#6F6F6F",
        muted: "#9F9F9F",
        disabled: "#BFBFBF",
      },

      // Borders & Dividers
      border: {
        DEFAULT: "#E8E7E4",
        light: "#F0EFED",
        dark: "#D8D8D8",
      },

      // Accent - Oxidized Red (Tokyo Ghoul nod)
      accent: {
        DEFAULT: "#7A1E1E",
        hover: "#641616",
        light: "rgba(122, 30, 30, 0.08)",
        muted: "rgba(122, 30, 30, 0.15)",
      },

      // Divider (legacy support)
      divider: "#E8E7E4",
    },

    // Border radius
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "6px",
      lg: "8px",
      full: "9999px",
    },

    extend: {
      // Max widths
      maxWidth: {
        container: "1140px",
        content: "720px",
        narrow: "580px",
        prose: "65ch",
      },

      // Transitions
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
      },

      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // Animations
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "float-up": "float-up 6s ease-in-out infinite",
        "float-down": "float-down 6s ease-in-out infinite 3s",
        breathe: "breathe 4s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        scan: "scan 8s linear infinite",
      },

      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
        },
        "float-up": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1.5px)" },
        },
        "float-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(1.5px)" },
        },
        breathe: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(0.97)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { top: "-5%" },
          "100%": { top: "105%" },
        },
      },

      // Box shadows (subtle)
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.04)",
        elevated: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
