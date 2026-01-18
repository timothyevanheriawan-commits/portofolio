// src/lib/motion.ts

export const motion = {
  // Timing
  duration: {
    fast: 0.18,
    base: 0.22,
    slow: 0.28,
  },

  // Single easing curve — use everywhere
  ease: [0.22, 1, 0.36, 1] as const,

  // Stagger delay between children
  stagger: 0.05,

  // Translate limits
  translate: {
    sm: 2,
    md: 4,
  },
} as const;

// Reusable variants
export const variants = {
  // Page/section entrance — use once per page
  fadeIn: {
    initial: { opacity: 0, y: motion.translate.md },
    animate: { opacity: 1, y: 0 },
    transition: { duration: motion.duration.base, ease: motion.ease },
  },

  // Stagger container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: motion.stagger,
      },
    },
  },

  // Stagger child
  staggerItem: {
    initial: { opacity: 0, y: motion.translate.sm },
    animate: { opacity: 1, y: 0 },
    transition: { duration: motion.duration.fast, ease: motion.ease },
  },

  // Expand/collapse
  expand: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: motion.duration.base, ease: motion.ease },
  },

  // Hover — cards/rows
  hoverLift: {
    y: -motion.translate.sm,
    transition: { duration: motion.duration.fast, ease: motion.ease },
  },

  // Hover — links (underline)
  hoverUnderline: {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
    transition: { duration: motion.duration.fast, ease: motion.ease },
  },
} as const;
