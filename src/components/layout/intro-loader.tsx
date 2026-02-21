'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const DURATION = 3000

export function IntroLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.body.classList.add('loading')

        // Animate counter 0 → 100
        let start = 0
        const step = () => {
            start += 1
            setCount(start)
            if (start < 100) {
                // Ease-out timing: slower at the end
                const delay = 10 + (start / 100) * 20
                setTimeout(step, delay)
            }
        }
        setTimeout(step, 200)

        const timer = setTimeout(() => {
            setIsLoading(false)
            document.body.classList.remove('loading')
        }, DURATION)

        return () => {
            clearTimeout(timer)
            document.body.classList.remove('loading')
        }
    }, [])

    const ease = [0.87, 0, 0.13, 1] as const

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="intro-loader"
                    className="fixed inset-0 z-9999 flex flex-col bg-[#1A1A1A] text-[#F7F7F5] overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
                >
                    {/* Top panel — slides up on exit */}
                    <motion.div
                        className="flex-1 flex items-end pb-0 px-6"
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.9, ease }}
                    >
                        <div className="w-full max-w-7xl mx-auto">
                            {/* Thin rule above header */}
                            <motion.div
                                className="w-full h-px bg-[#F7F7F5]/10 mb-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                                style={{ originX: 0 }}
                            />

                            <div className="flex justify-between items-end pb-5">
                                {/* Name */}
                                <div className="overflow-hidden">
                                    <motion.p
                                        className="text-[11px] font-mono uppercase tracking-[0.5em] text-[#F7F7F5]"
                                        initial={{ y: '110%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.25, ease }}
                                    >
                                        Timothy Evan
                                    </motion.p>
                                </div>

                                {/* Version */}
                                <motion.p
                                    className="text-[11px] font-mono text-[#6F6F6F]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    V.2026
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center divider */}
                    <div className="relative flex items-center justify-center bg-[#1A1A1A] py-7">
                        {/* Expanding horizontal line */}
                        <motion.div
                            className="h-px bg-[#F7F7F5]/20 absolute inset-x-0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
                        />

                        {/* Counter */}
                        <motion.div
                            className="relative z-10 bg-[#1A1A1A] px-6 tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <span className="text-[42px] font-mono font-light tracking-tight text-[#F7F7F5] leading-none">
                                {String(count).padStart(2, '0')}
                            </span>
                            <span className="text-[14px] font-mono text-[#6F6F6F] ml-0.5">%</span>
                        </motion.div>
                    </div>

                    {/* Bottom panel — slides down on exit */}
                    <motion.div
                        className="flex-1 flex items-start pt-0 px-6"
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.9, ease }}
                    >
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="flex justify-between items-start pt-5">
                                {/* Label */}
                                <div className="overflow-hidden">
                                    <motion.p
                                        className="text-[10px] font-mono uppercase tracking-widest text-[#6F6F6F]"
                                        initial={{ y: '-110%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.35, ease }}
                                    >
                                        Portfolio&nbsp;/&nbsp;Index
                                    </motion.p>
                                </div>

                                {/* Status — blinks until done */}
                                <motion.div
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.4 }}
                                >
                                    <motion.span
                                        className="block w-1.5 h-1.5 rounded-full bg-[#F7F7F5]"
                                        animate={{ opacity: [1, 0.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                                    />
                                    <span className="text-[10px] font-mono text-[#6F6F6F] uppercase tracking-widest">
                                        Initializing
                                    </span>
                                </motion.div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-4 w-full h-px bg-[#F7F7F5]/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#F7F7F5]"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: (DURATION - 600) / 1000, delay: 0.3, ease: 'easeInOut' }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}