'use client'

import { motion, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface LinkProps {
    href: string
    children: ReactNode
    external?: boolean
    className?: string
    showArrow?: boolean
}

export function Link({ href, children, external, className = '', showArrow = false }: LinkProps) {
    const prefersReducedMotion = useReducedMotion()
    const Component = external ? 'a' : NextLink

    return (
        <Component
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={`group relative inline-flex items-center gap-1 ${className}`}
        >
            <span className="relative">
                {children}
                <motion.span
                    className="absolute left-0 -bottom-px h-px bg-[#8B1E1E] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={prefersReducedMotion ? {} : { scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
            </span>
            {showArrow && (
                <motion.span
                    className="text-[#8C8C8C] group-hover:text-[#8B1E1E] transition-colors duration-300"
                    whileHover={prefersReducedMotion ? {} : { x: 2 }}
                    transition={{ duration: 0.3 }}
                >
                    ↗
                </motion.span>
            )}
        </Component>
    )
}