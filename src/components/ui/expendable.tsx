'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState, ReactNode } from 'react'

interface ExpandableProps {
    title: string
    children: ReactNode
    defaultOpen?: boolean
    mono?: boolean
}

export function Expandable({ title, children, defaultOpen = false, mono = false }: ExpandableProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const prefersReducedMotion = useReducedMotion()

    return (
        <div className="border-b border-[#1A1A1A]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left group"
            >
                <span className={`text-[13px] ${mono ? 'font-mono' : 'font-medium'} text-[#8C8C8C] uppercase tracking-[0.08em] group-hover:text-[#E8E8E8] transition-colors duration-300`}>
                    {title}
                </span>
                <motion.span
                    className="text-[#8C8C8C] text-[12px] group-hover:text-[#8B1E1E] transition-colors duration-300"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    +
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}