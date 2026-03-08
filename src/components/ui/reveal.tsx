'use client'

// src/components/ui/reveal.tsx
// Scroll-triggered clip mask reveal. Wraps any content.
// Usage: <Reveal><YourComponent /></Reveal>

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
    children: React.ReactNode
    delay?: number
    className?: string
    // 'up' = slides up into view (default), 'fade' = opacity only
    variant?: 'up' | 'fade' | 'left'
}

export function Reveal({ children, delay = 0, className, variant = 'up' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-8% 0px' })

    const variants = {
        up: {
            hidden: { y: 32, opacity: 0 },
            visible: { y: 0, opacity: 1 },
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        left: {
            hidden: { x: -20, opacity: 0 },
            visible: { x: 0, opacity: 1 },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants[variant]}
            transition={{
                duration: 0.75,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    )
}
