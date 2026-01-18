// src/components/ui/hover-link.tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { ReactNode, useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'
import { motion as config } from '@/lib/motion'

interface HoverLinkProps {
    href: string
    children: ReactNode
    className?: string
    external?: boolean
    showArrow?: boolean
}

export function HoverLink({
    href,
    children,
    className = '',
    external = false,
    showArrow = false,
}: HoverLinkProps) {
    const mounted = useMounted()
    const [isHovered, setIsHovered] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    const shouldAnimate = mounted && !prefersReducedMotion

    const Wrapper = external ? 'a' : NextLink
    const linkProps = external
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { href }

    return (
        <Wrapper
            {...linkProps}
            className={`group relative inline-flex items-center gap-1.5 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative">
                {children}

                {/* Underline — slides in on hover */}
                <motion.span
                    className="absolute left-0 -bottom-px h-px bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: shouldAnimate && isHovered ? 1 : 0 }}
                    transition={{
                        duration: config.duration.fast,
                        ease: config.ease
                    }}
                />
            </span>

            {showArrow && (
                <motion.span
                    className="text-text-tertiary group-hover:text-accent transition-colors"
                    animate={shouldAnimate ? { x: isHovered ? config.translate.sm : 0 } : {}}
                    transition={{
                        duration: config.duration.fast,
                        ease: config.ease
                    }}
                >
                    →
                </motion.span>
            )}
        </Wrapper>
    )
}