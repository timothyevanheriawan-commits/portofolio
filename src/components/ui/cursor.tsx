'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Tight spring — responsive, not floaty
    const springConfig = { damping: 40, stiffness: 600, mass: 0.4 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const move = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }
        const down = () => setIsClicked(true)
        const up = () => setIsClicked(false)
        const over = (e: MouseEvent) => {
            const t = e.target as HTMLElement
            setIsHovered(
                t.tagName === 'A' ||
                t.tagName === 'BUTTON' ||
                !!t.closest('a') ||
                !!t.closest('button') ||
                window.getComputedStyle(t).cursor === 'pointer'
            )
        }

        window.addEventListener('mousemove', move)
        window.addEventListener('mousedown', down)
        window.addEventListener('mouseup', up)
        window.addEventListener('mouseover', over)
        return () => {
            window.removeEventListener('mousemove', move)
            window.removeEventListener('mousedown', down)
            window.removeEventListener('mouseup', up)
            window.removeEventListener('mouseover', over)
        }
    }, [cursorX, cursorY])

    // Crosshair arm length — grows on hover, shrinks on click
    const armLen = isClicked ? 4 : isHovered ? 10 : 0
    // Center dot size
    const dotSize = isClicked ? 3 : isHovered ? 2 : 4

    return (
        <motion.div
            className="fixed top-0 left-0 z-[--z-cursor] pointer-events-none hidden md:block"
            style={{
                translateX: x,
                translateY: y,
                x: '-50%',
                y: '-50%',
            }}
        >
            {/* Center dot */}
            <motion.div
                className="absolute rounded-full bg-text-primary"
                style={{ top: '50%', left: '50%' }}
                animate={{
                    width: dotSize,
                    height: dotSize,
                    x: '-50%',
                    y: '-50%',
                    backgroundColor: isHovered ? 'var(--color-accent)' : isClicked ? 'var(--color-accent)' : 'var(--color-text-primary)',
                    opacity: isClicked ? 0.5 : 1,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.3 }}
            />

            {/* Crosshair arms — only appear on hover */}
            {/* Top */}
            <motion.div
                className="absolute bg-accent"
                style={{ left: '50%', bottom: '50%', width: '1px', x: '-50%' }}
                animate={{ height: armLen, opacity: isHovered ? 0.7 : 0, y: isHovered ? -2 : 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            />
            {/* Bottom */}
            <motion.div
                className="absolute bg-accent"
                style={{ left: '50%', top: '50%', width: '1px', x: '-50%' }}
                animate={{ height: armLen, opacity: isHovered ? 0.7 : 0, y: isHovered ? 2 : 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            />
            {/* Left */}
            <motion.div
                className="absolute bg-accent"
                style={{ right: '50%', top: '50%', height: '1px', y: '-50%' }}
                animate={{ width: armLen, opacity: isHovered ? 0.7 : 0, x: isHovered ? -2 : 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            />
            {/* Right */}
            <motion.div
                className="absolute bg-accent"
                style={{ left: '50%', top: '50%', height: '1px', y: '-50%' }}
                animate={{ width: armLen, opacity: isHovered ? 0.7 : 0, x: isHovered ? 2 : 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            />
        </motion.div>
    )
}