"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Frontend Development",
  "Data Visualization",
  "React & Next.js",
  "Open to Work",
  "Based in Indonesia",
  "UI/UX Systems",
];

export function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const shouldReduceMotion = useReducedMotion();
  return (
    <div
      className="relative w-full overflow-hidden border-y border-[#E8E7E4] py-3 my-0"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--color-bg), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--color-bg), transparent)",
        }}
      />

      <motion.div
        className="flex items-center gap-0 whitespace-nowrap w-max"
        animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? {}
            : { duration: 22, ease: "linear", repeat: Infinity }
        }
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F] px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#7A1E1E] opacity-40 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
