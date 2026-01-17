// components/ui/logo.tsx
'use client'
import { useState, useEffect } from 'react'

type MarkLogoProps = {
    size?: number
    className?: string
    animated?: boolean
}

export function MarkLogo({ size = 28, className, animated = true }: MarkLogoProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Personal Logo"
            role="img"
            className={className}
        >
            {/* Left pillar - stable */}
            <rect
                x="7"
                y="4"
                width="4"
                height="20"
                rx="1"
                fill="currentColor"
                className={animated && mounted ? 'animate-pulse-subtle' : ''}
            />

            {/* Right fractured pillar - breathing */}
            <rect
                x="15"
                y="4"
                width="3"
                height="9"
                rx="1"
                fill="currentColor"
                opacity="0.85"
                className={animated && mounted ? 'animate-float-up' : ''}
            />
            <rect
                x="15"
                y="15"
                width="3"
                height="9"
                rx="1"
                fill="currentColor"
                opacity="0.55"
                className={animated && mounted ? 'animate-float-down' : ''}
            />
        </svg>
    )
}