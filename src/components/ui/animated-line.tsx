'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface AnimatedLineProps {
    className?: string
    delay?: number
    direction?: 'horizontal' | 'vertical'
}

export function AnimatedLine({
    className = '',
    delay = 0,
    direction = 'horizontal'
}: AnimatedLineProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return (
            <div
                className={`bg-[#E5E5E5] ${direction === 'horizontal' ? 'h-px w-full' : 'w-px h-full'} ${className}`}
            />
        )
    }

    return (
        <motion.div
            className={`bg-[#E5E5E5] ${direction === 'horizontal' ? 'h-px' : 'w-px'} ${className}`}
            initial={{
                scaleX: direction === 'horizontal' ? 0 : 1,
                scaleY: direction === 'vertical' ? 0 : 1,
            }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{
                originX: 0,
                originY: 0,
            }}
        />
    )
}