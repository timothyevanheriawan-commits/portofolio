'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

// Staggered fade
interface FadeProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function Fade({ children, delay = 0, className }: FadeProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    if (!mounted || prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: 0.5,
                delay: delay * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    )
}

// Line that draws from left
interface LineProps {
    className?: string
    delay?: number
}

export function Line({ className = '', delay = 0 }: LineProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    const baseClass = `h-px w-full bg-[#E8E7E4] ${className}`

    if (!mounted || prefersReducedMotion) {
        return <div className={baseClass} />
    }

    return (
        <motion.div
            className={baseClass}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: delay * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ transformOrigin: 'left' }}
        />
    )
}

// Expandable section
interface ExpandableProps {
    trigger: ReactNode
    children: ReactNode
    defaultOpen?: boolean
}

export function Expandable({ trigger, children, defaultOpen = false }: ExpandableProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left group"
                aria-expanded={isOpen}
            >
                {trigger}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={!mounted || prefersReducedMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// Status indicator
interface StatusProps {
    className?: string
}

export function Status({ className = '' }: StatusProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    const baseClass = `w-1.5 h-1.5 rounded-full bg-[#1A1A1A] ${className}`

    if (!mounted || prefersReducedMotion) {
        return <span className={baseClass} />
    }

    return (
        <motion.span
            className={baseClass}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
        />
    )
}