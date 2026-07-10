'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useMounted } from '@/hooks/use-mounted'

const DURATION = 1800

const ease = [0.87, 0, 0.13, 1] as const

const STATUS_STEPS = [
    { at: 0, label: 'Loading assets' },
    { at: 30, label: 'Parsing systems' },
    { at: 58, label: 'Rendering grid' },
    { at: 82, label: 'Almost there' },
    { at: 97, label: 'Done' },
]

function getStatus(count: number) {
    let label = STATUS_STEPS[0].label
    for (const step of STATUS_STEPS) {
        if (count >= step.at) label = step.label
    }
    return label
}

export function IntroLoader() {
    const mounted = useMounted()
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(STATUS_STEPS[0].label)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        if (!mounted) return

        const hasSeenIntro = sessionStorage.getItem('intro-seen')
        if (hasSeenIntro) { setIsLoading(false); return }
        sessionStorage.setItem('intro-seen', 'true')
        document.body.classList.add('loading')

        const startTime = performance.now()
        const totalMs = DURATION - 700

        const tick = (now: number) => {
            const t = Math.min((now - startTime) / totalMs, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            const next = Math.floor(eased * 100)
            setCount(next)
            setStatus(getStatus(next))
            if (t < 1) rafRef.current = requestAnimationFrame(tick)
        }

        const startDelay = setTimeout(() => {
            rafRef.current = requestAnimationFrame(tick)
        }, 350)

        const exitTimer = setTimeout(() => {
            setIsLoading(false)
            document.body.classList.remove('loading')
        }, DURATION)

        return () => {
            clearTimeout(startDelay)
            clearTimeout(exitTimer)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            document.body.classList.remove('loading')
        }
    }, [mounted])

    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="intro-loader"
            className="fixed inset-0 z-10000 flex flex-col bg-[var(--color-text-primary)] overflow-hidden select-none"
            exit={{ opacity: 1 }}
          >
            {/* ── Top panel — slides up on exit ── */}
            <motion.div
              className="flex-1 flex flex-col justify-end px-8 md:px-16 pb-8"
              exit={{ y: "-102%" }}
              transition={{ duration: 0.9, ease }}
            >
              {/* Name — weight contrast, staggered reveal */}
              <div className="flex flex-col leading-none mb-6">
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-[13px] md:text-[15px] font-mono font-light tracking-[0.5em] uppercase text-[var(--color-bg-header)]"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease }}
                  >
                    Timothy
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-[13px] md:text-[15px] font-mono font-light tracking-[0.5em] uppercase text-[var(--color-bg-header)]"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.28, ease }}
                  >
                    Evan
                  </motion.span>
                </div>

                {/* Maroon accent line — draws in under the name */}
                <motion.div
                  className="h-px bg-[var(--color-accent)] mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ originX: 0, width: "4rem" }}
                />
              </div>

              {/* Version tag */}
              <motion.p
                className="text-[10px] font-mono text-[var(--color-bg-header)] uppercase tracking-[0.4em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Portfolio — V.2026
              </motion.p>
            </motion.div>

            {/* ── Counter — centered, full visual weight ── */}
            <motion.div
              className="shrink-0 flex items-center justify-center py-4"
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <motion.div
                className="flex items-start gap-2 tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <span
                  className="font-black text-[var(--color-bg-header)] leading-none tracking-[-0.04em]"
                  style={{ fontSize: "clamp(100px, 20vw, 220px)" }}
                >
                  {String(count).padStart(2, "0")}
                </span>
                <span className="text-[16px] md:text-[20px] font-mono text-[var(--color-bg-header)] leading-none pb-[0.12em]">
                  %
                </span>
              </motion.div>
            </motion.div>

            {/* ── Bottom panel — slides down on exit ── */}
            <motion.div
              className="flex-1 flex flex-col justify-start px-8 md:px-16 pt-8"
              exit={{ y: "102%" }}
              transition={{ duration: 0.9, ease }}
            >
              {/* Progress bar */}
              <div className="w-full h-px bg-[var(--color-bg-header)]/10 overflow-hidden mb-5">
                <motion.div
                  className="h-full bg-[var(--color-accent)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: (DURATION - 700) / 1000,
                    delay: 0.35,
                    ease: [0.33, 0, 0.67, 1],
                  }}
                />
              </div>

              {/* Status row */}
              <div className="flex items-center justify-between">
                <motion.p
                  className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bg-header)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  System / Boot
                </motion.p>

                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.span
                    className="block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                    animate={
                      count < 97 ? { opacity: [1, 0.2, 1] } : { opacity: 1 }
                    }
                    transition={{
                      repeat: count < 97 ? Infinity : 0,
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={status}
                      className="text-[10px] font-mono text-[var(--color-bg-header)] uppercase tracking-widest"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {status}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
}