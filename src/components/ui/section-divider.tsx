'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionDividerProps {
    index: string
    current: string
    next: string
}

export function SectionDivider({ index, current, next }: SectionDividerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-10% 0px' })

    return (
        <div ref={ref} className="relative py-10 md:py-14 overflow-hidden">
            <div className="relative flex items-center gap-5">

                {/* Maroon lead tick */}
                <motion.div
                    className="shrink-0 w-5 h-px bg-[var(--color-accent)]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: inView ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Index */}
                <motion.span
                    className="shrink-0 text-[9px] font-mono tabular-nums text-[var(--color-accent)] tracking-[0.3em]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                >
                    {index}
                </motion.span>

                {/* Rule — grows to fill */}
                <div className="relative flex-1 h-px bg-[var(--color-border)]">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-[#a6a6a6]"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? '100%' : 0 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>

                {/* Next label */}
                <motion.span
                    className="shrink-0 text-[8px] font-mono uppercase tracking-[0.25em] text-[var(--color-text-ghost)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    {next}
                </motion.span>

            </div>
        </div>
    )
}