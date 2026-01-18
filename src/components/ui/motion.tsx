// src/components/ui/motion.tsx
'use client'

import { motion as framerMotion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMounted } from '@/hooks/use-mounted'
import { motion as config } from '@/lib/motion'

// ============================================
// FADE — Section entrance (use once per section)
// ============================================
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
        <framerMotion.div
            className={className}
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

export function Line({ className = '', delay = 0 }: LineProps) {
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    const baseClass = `h-px w-full bg-divider ${className}`

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
// STATUS — Static dot (no idle animation)
// ============================================
interface StatusProps {
    className?: string
}

export function Status({ className = '' }: StatusProps) {
    return (
        <span className={`w-1.5 h-1.5 rounded-full bg-accent ${className}`} />
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

export function Expand({ children, isOpen, className = '' }: ExpandProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return isOpen ? <div className={className}>{children}</div> : null
    }

    return (
        <framerMotion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{
                duration: config.duration.base,
                ease: config.ease,
            }}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </framerMotion.div>
    )
}