'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Fade, Line } from '@/components/ui/motion'
import { useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

const links = [
    { label: 'Email', value: 'timothy.evan.heriawan@gmail.com', href: 'mailto:timothy.evan.heriawan@gmail.com' },
    { label: 'GitHub', value: 'github.com/timothyevanheriawan-commits', href: 'https://github.com/timothyevanheriawan-commitsheriawan-commits' },
    { label: 'LinkedIn', value: 'linkedin.com/in/timothy-evan-heriawan', href: 'https://linkedin.com/in/timothy-evan-heriawan/' },
]

export function ContactSection() {
    const mounted = useMounted()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-16">
            <Line />

            <Fade delay={0}>
                <div className="flex items-baseline gap-6 mt-12 mb-10">
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                        03
                    </span>
                    <h2 className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        Contact
                    </h2>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
                <Fade delay={1}>
                    <p className="text-[14px] text-[#6F6F6F] leading-[1.7] max-w-70">
                        Open to internships and entry-level roles.
                        Based in Indonesia, available remotely.
                    </p>
                </Fade>

                <Fade delay={2}>
                    <div>
                        {links.map((link, index) => {
                            const isHovered = hoveredIndex === index

                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-baseline justify-between py-3.5 border-b border-[#E8E7E4] group"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    whileHover={mounted && !prefersReducedMotion ? { x: 4 } : {}}
                                    transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-wide">
                                        {link.label}
                                    </span>
                                    <span className="text-[13px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-150">
                                        {link.value}
                                        <motion.span
                                            className="inline-block ml-1.5 text-[#9F9F9F] group-hover:text-[#8B1E1E] transition-colors duration-150"
                                            animate={mounted && !prefersReducedMotion ? {
                                                x: isHovered ? 3 : 0,
                                                opacity: isHovered ? 1 : 0
                                            } : {}}
                                            transition={{ duration: 0.15 }}
                                        >
                                            ↗
                                        </motion.span>
                                    </span>
                                </motion.a>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </section>
    )
}