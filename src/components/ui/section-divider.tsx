'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionDividerProps {
    index: string       // e.g. "01"
    current: string     // e.g. "Hero"
    next: string        // e.g. "Selected Work"
}

export function SectionDivider({ index, current, next }: SectionDividerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-20% 0px' })

    return (
        <div ref={ref} className="relative py-6 md:py-8 overflow-hidden">

            {/* Expanding rule */}
            <div className="relative h-px w-full bg-[#F0F0EE]">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-[#E8E7E4]"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? '100%' : 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Maroon lead dot that travels along */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#7A1E1E]"
                    initial={{ left: 0, opacity: 0 }}
                    animate={{ left: inView ? '100%' : 0, opacity: inView ? [0, 1, 1, 0] : 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>

            {/* Labels */}
            <div className="flex items-center justify-between mt-4">
                {/* Left: current section fading out */}
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -6 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-[#BFBFBF]">
                        {index}
                    </span>
                    <span className="text-[#E8E7E4]">/</span>
                    <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-[#BFBFBF]">
                        {current}
                    </span>
                </motion.div>

                {/* Right: next section coming in */}
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 6 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F]">
                        Next
                    </span>
                    <span className="text-[#E8E7E4]">/</span>
                    <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-[#7A1E1E]">
                        {next}
                    </span>
                </motion.div>
            </div>
        </div>
    )
}
