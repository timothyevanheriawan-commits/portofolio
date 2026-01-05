'use client'

import { motion, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { ReactNode, useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

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
    showArrow = false
}: HoverLinkProps) {
    const mounted = useMounted()
    const [isHovered, setIsHovered] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    const linkProps = external
        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
        : {}

    const content = (
        <>
            <span className="relative">
                {children}
                {mounted && !prefersReducedMotion ? (
                    <motion.span
                        className="absolute left-0 -bottom-px h-px bg-[#8B1E1E] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                ) : (
                    <span
                        className={`absolute left-0 -bottom-px h-px bg-[#8B1E1E] origin-left transition-transform duration-200 ${isHovered ? 'scale-x-100' : 'scale-x-0'
                            }`}
                    />
                )}
            </span>

            {showArrow && (
                <motion.span
                    className="text-[#6F6F6F] group-hover:text-[#8B1E1E] transition-colors duration-200"
                    animate={mounted && !prefersReducedMotion ? { x: isHovered ? 4 : 0 } : {}}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    →
                </motion.span>
            )}
        </>
    )

    if (external) {
        return (
            <a
                href={href}
                {...linkProps}
                className={`group relative inline-flex items-center gap-1.5 ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {content}
            </a>
        )
    }

    return (
        <NextLink
            href={href}
            className={`group relative inline-flex items-center gap-1.5 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {content}
        </NextLink>
    )
}