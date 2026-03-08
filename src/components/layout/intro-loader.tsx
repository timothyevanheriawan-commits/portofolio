'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useMounted } from '@/hooks/use-mounted'

const DURATION = 3200
const ease = [0.87, 0, 0.13, 1] as const

// Status labels that cycle as the counter climbs
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
        if (hasSeenIntro) {
            setIsLoading(false)
            return
        }
        sessionStorage.setItem('intro-seen', 'true')
        document.body.classList.add('loading')

        // Drive the counter with rAF + a cubic ease-out curve
        // so it matches the progress bar easing visually
        const startTime = performance.now()
        const totalMs = DURATION - 700 // leave room for exit animation

        const tick = (now: number) => {
            const elapsed = now - startTime
            const t = Math.min(elapsed / totalMs, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3)
            const next = Math.floor(eased * 100)
            setCount(next)
            setStatus(getStatus(next))
            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick)
            }
        }

        // Small delay before starting so the panel reveal reads first
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
                    className="fixed inset-0 z-[10000] flex flex-col bg-[#1A1A1A] text-[#F7F7F5] overflow-hidden"
                    // No opacity fade on wrapper - let the panels do all the work
                    exit={{ opacity: 1 }}
                >
                    {/* ── Top panel ── slides up */}
                    <motion.div
                        className="flex-1 flex items-end pb-0 px-6"
                        exit={{ y: '-102%' }}
                        transition={{ duration: 0.85, ease }}
                    >
                        <div className="w-full max-w-7xl mx-auto">
                            <motion.div
                                className="w-full h-px bg-[#F7F7F5]/10 mb-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
                                style={{ originX: 0 }}
                            />
                            <div className="flex justify-between items-end pb-5">
                                <div className="overflow-hidden">
                                    <motion.p
                                        className="text-[11px] font-mono uppercase tracking-[0.5em] text-[#F7F7F5]"
                                        initial={{ y: '110%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.2, ease }}
                                    >
                                        Timothy Evan
                                    </motion.p>
                                </div>
                                <motion.p
                                    className="text-[11px] font-mono text-[#4A4A4A]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    V.2026
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Center divider ── stays fixed, masked by panels on exit */}
                    <div className="relative flex items-center justify-center bg-[#1A1A1A] py-7 shrink-0">
                        <motion.div
                            className="h-px bg-[#F7F7F5]/10 absolute inset-x-0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="relative z-10 bg-[#1A1A1A] px-6 flex items-baseline gap-1.5 tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.3 }}
                        >
                            <span className="text-[48px] font-mono font-light tracking-tight text-[#F7F7F5] leading-none min-w-[3ch] text-right">
                                {String(count).padStart(2, '0')}
                            </span>
                            <span className="text-[13px] font-mono text-[#4A4A4A]">%</span>
                        </motion.div>
                    </div>

                    {/* ── Bottom panel ── slides down */}
                    <motion.div
                        className="flex-1 flex items-start pt-0 px-6"
                        exit={{ y: '102%' }}
                        transition={{ duration: 0.85, ease }}
                    >
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="flex justify-between items-start pt-5">
                                <div className="overflow-hidden">
                                    <motion.p
                                        className="text-[10px] font-mono uppercase tracking-widest text-[#4A4A4A]"
                                        initial={{ y: '-110%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.3, ease }}
                                    >
                                        Portfolio&nbsp;/&nbsp;Index
                                    </motion.p>
                                </div>

                                {/* Status - cycles with the counter */}
                                <motion.div
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                >
                                    {/* Dot - pulses until 97, solid after */}
                                    <motion.span
                                        className="block w-1.5 h-1.5 rounded-full bg-[#7A1E1E]"
                                        animate={count < 97
                                            ? { opacity: [1, 0.2, 1] }
                                            : { opacity: 1 }
                                        }
                                        transition={{ repeat: count < 97 ? Infinity : 0, duration: 0.9, ease: 'easeInOut' }}
                                    />
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={status}
                                            className="text-[10px] font-mono text-[#4A4A4A] uppercase tracking-widest"
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

                            {/* Progress bar - same ease-out cubic as counter */}
                            <div className="mt-4 w-full h-px bg-[#F7F7F5]/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#7A1E1E]"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                        duration: (DURATION - 700) / 1000,
                                        delay: 0.35,
                                        ease: [0.33, 0, 0.67, 1], // cubic ease-out, matches rAF curve
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}