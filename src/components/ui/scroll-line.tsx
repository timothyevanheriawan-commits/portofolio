'use client'

// src/components/ui/scroll-line.tsx
// A 1px maroon line on the left edge of the viewport that tracks scroll progress.
// Drop this once in layout.tsx alongside NoiseTexture.

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollLine() {
    const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const unsub = scrollYProgress.on('change', (v) => setVisible(v > 0.01))
        return unsub
    }, [scrollYProgress])

    return (
        <motion.div
            aria-hidden
            className="fixed left-0 top-0 w-px bg-[var(--color-accent)] origin-top z-[9997]"
            style={{
                height: '100vh',
                scaleY,
                opacity: visible ? 0.5 : 0,
                transition: 'opacity 0.4s ease',
            }}
        />
    )
}
