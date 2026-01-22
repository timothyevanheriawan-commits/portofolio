'use client'

import { cn } from '@/lib/utils'

type MarkLogoProps = {
    size?: number
    className?: string
    hover?: boolean
}

export function MarkLogo({
    size = 28,
    className,
    hover = true
}: MarkLogoProps) {
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
                'transition-transform duration-500 ease-out-expo',
                hover && 'hover:scale-105 active:scale-95',
                className
            )}
        >
            {/* Left pillar - solid anchor */}
            <rect
                x="6"
                y="4"
                width="5"
                height="20"
                rx="1"
                fill="currentColor"
            />

            {/* Right fractured pillar - top segment */}
            <rect
                x="14"
                y="4"
                width="4"
                height="8"
                rx="1"
                fill="currentColor"
                className="opacity-90"
            />

            {/* Right fractured pillar - bottom segment */}
            <rect
                x="14"
                y="16"
                width="4"
                height="8"
                rx="1"
                fill="currentColor"
                className="opacity-50"
            />
        </svg>
    )
}

export function WordmarkLogo({ className }: { className?: string }) {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <MarkLogo size={22} hover={false} />
            <span className="text-[13px] font-bold tracking-[-0.02em] uppercase text-[#1A1A1A]">
                Timothy Evan
            </span>
        </div>
    )
}