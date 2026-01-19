// components/ui/logo.tsx
'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type MarkLogoProps = {
    size?: number
    className?: string
    animated?: boolean
    hover?: boolean
}

export function MarkLogo({
    size = 28,
    className,
    animated = true,
    hover = true
}: MarkLogoProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setMounted(true)
        })
        return () => cancelAnimationFrame(id)
    }, [])

    // Calculate proportional values based on size
    const scale = size / 28

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Timothy Evan Logo"
            role="img"
            className={cn(
                'transition-transform duration-300 ease-out',
                hover && 'hover:scale-105',
                className
            )}
        >
            {/* Left pillar - solid, stable anchor */}
            <rect
                x="6"
                y="4"
                width="5"
                height="20"
                rx="1"
                fill="currentColor"
                className={cn(
                    'origin-center',
                    animated && mounted && 'animate-pulse-subtle'
                )}
            />

            {/* Right fractured pillar - top segment */}
            <rect
                x="14"
                y="4"
                width="4"
                height="8"
                rx="1"
                fill="currentColor"
                style={{ opacity: 0.9 }}
                className={cn(
                    'origin-center',
                    animated && mounted && 'animate-float-up'
                )}
            />

            {/* Right fractured pillar - bottom segment */}
            <rect
                x="14"
                y="16"
                width="4"
                height="8"
                rx="1"
                fill="currentColor"
                style={{ opacity: 0.5 }}
                className={cn(
                    'origin-center',
                    animated && mounted && 'animate-float-down'
                )}
            />
        </svg>
    )
}

// Wordmark version for special uses (footer, etc.)
export function WordmarkLogo({ className }: { className?: string }) {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <MarkLogo size={24} animated={false} hover={false} />
            <span className="text-[14px] font-semibold tracking-[-0.02em] text-current">
                Timothy Evan
            </span>
        </div>
    )
}

// Minimal version (no animation, for static contexts)
export function LogoMark({
    size = 28,
    className
}: {
    size?: number
    className?: string
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="TE"
            role="img"
            className={className}
        >
            <rect x="6" y="4" width="5" height="20" rx="1" fill="currentColor" />
            <rect x="14" y="4" width="4" height="8" rx="1" fill="currentColor" opacity="0.9" />
            <rect x="14" y="16" width="4" height="8" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
    )
}
