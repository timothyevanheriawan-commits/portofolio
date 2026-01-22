// src/components/ui/motion.tsx
'use client'

import { motion as framerMotion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMounted } from '@/hooks/use-mounted'
import { motion as config } from '@/lib/motion'
import { cn } from '@/lib/utils' // Assuming this is where your cn helper lives

// ============================================
// FADE — Section entrance
// ============================================
interface FadeProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function Fade({ children, delay = 0, className }: FadeProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    // Normalize class names to prevent hydration mismatch
    const combinedClass = cn(className)

    if (!mounted || prefersReducedMotion) {
        return <div className={combinedClass}>{children}</div>
    }

    return (
        <framerMotion.div
            className={combinedClass}
            initial={{ opacity: 0, y: config.translate.md }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration: config.duration.base,
                delay: delay * config.stagger,
                ease: config.ease,
            }}
        >
            {children}
        </framerMotion.div>
    )
}

// ============================================
// LINE — Draws once on view
// ============================================
interface LineProps {
    className?: string
    delay?: number
}

export function Line({ className, delay = 0 }: LineProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    // Using cn ensures the string "h-px w-full bg-divider" 
    // is cleanly merged with any incoming custom classes.
    const baseClass = cn("h-px w-full bg-divider", className)

    if (!mounted || prefersReducedMotion) {
        return <div className={baseClass} />
    }

    return (
        <framerMotion.div
            className={baseClass}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: config.duration.slow,
                delay: delay * config.stagger,
                ease: config.ease,
            }}
            style={{ transformOrigin: 'left' }}
        />
    )
}

// ============================================
// STATUS — Static dot
// ============================================
interface StatusProps {
    className?: string
}

export function Status({ className }: StatusProps) {
    return (
        <span className={cn("w-1.5 h-1.5 rounded-full bg-accent", className)} />
    )
}

// ============================================
// EXPAND — For collapsible content
// ============================================
interface ExpandProps {
    children: ReactNode
    isOpen: boolean
    className?: string
}

export function Expand({ children, isOpen, className }: ExpandProps) {
    const prefersReducedMotion = useReducedMotion()
    const combinedClass = cn("overflow-hidden", className)

    if (prefersReducedMotion) {
        return isOpen ? <div className={combinedClass}>{children}</div> : null
    }

    return (
        <framerMotion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{
                duration: config.duration.base,
                ease: config.ease,
            }}
            className={combinedClass}
        >
            {children}
        </framerMotion.div>
    )
}