'use client'

import { cn } from '@/lib/utils'

type MarkLogoProps = {
    size?: number
    className?: string
    hover?: boolean
}

export function MarkLogo({ size = 28, className, hover = true }: MarkLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Timothy Evan - TE"
            role="img"
            className={cn(
                'transition-transform duration-500 ease-out-expo',
                hover && 'hover:scale-105 active:scale-95',
                className
            )}
        >
            {/*
                TE monogram - constructed from rectangles, Swiss grid logic.
                T: top horizontal bar + vertical stem
                E: vertical bar + three horizontal strokes
                Separated by a 2px gap, both sitting on the same baseline.
            */}

            {/* ── T ── */}
            {/* Top crossbar */}
            <rect x="2" y="4" width="9" height="2.5" rx="0.5" fill="currentColor" />
            {/* Vertical stem - centered under crossbar */}
            <rect x="5" y="4" width="3" height="20" rx="0.5" fill="currentColor" />

            {/* ── E ── */}
            {/* Vertical spine */}
            <rect x="15" y="4" width="3" height="20" rx="0.5" fill="currentColor" />
            {/* Top stroke */}
            <rect x="15" y="4" width="8" height="2.5" rx="0.5" fill="currentColor" />
            {/* Mid stroke - maroon accent, sits at exact midpoint */}
            <rect x="15" y="12.75" width="6" height="2.5" rx="0.5" fill="var(--color-accent)" />
            {/* Bottom stroke */}
            <rect x="15" y="21.5" width="8" height="2.5" rx="0.5" fill="currentColor" />
        </svg>
    )
}

export function WordmarkLogo({ className }: { className?: string }) {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <MarkLogo size={22} hover={false} />
            <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[var(--color-text-primary)]">
                Timothy Evan
            </span>
        </div>
    )
}