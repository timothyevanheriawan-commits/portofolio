'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    // Using useMotionValue for raw coordinates
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Spring physics for that "smooth" Swiss feel
    const springConfig = { damping: 25, stiffness: 250 }
    const edgeX = useSpring(cursorX, springConfig)
    const edgeY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseDown = () => setIsClicked(true)
        const handleMouseUp = () => setIsClicked(false)

        // Check if hovering over links/buttons
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            style={{
                translateX: edgeX,
                translateY: edgeY,
                x: "-50%",
                y: "-50%",
            }}
            animate={{
                width: isHovered ? 40 : 12,
                height: isHovered ? 40 : 12,
                backgroundColor: isClicked ? '#7A1E1E' : isHovered ? 'transparent' : '#1A1A1A',
                border: isHovered ? '1px solid #1A1A1A' : 'none',
            }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
                mass: 0.5
            }}
            className="fixed top-0 left-0 z-10000 pointer-events-none mix-blend-difference rounded-full hidden md:block"
        />
    )
}