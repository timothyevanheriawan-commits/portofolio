'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Fade } from '@/components/ui/motion'
import { Container } from '@/components/layout/container'

const links = [
    { label: 'Email', value: 'timothy.evan.heriawan@gmail.com', href: 'mailto:timothy.evan.heriawan@gmail.com' },
    { label: 'GitHub', value: 'github.com/timothyevanheriawan-commits', href: 'https://github.com/timothyevanheriawan-commitsheriawan-commits' },
    { label: 'LinkedIn', value: 'linkedin.com/in/timothy-evan-heriawan', href: 'https://linkedin.com/in/timothy-evan-heriawan/' },
]

export function Contact() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-24">
            <Container>
                {/* Section label */}
                <Fade>
                    <div className="flex items-baseline gap-6 mb-12">
                        <span className="text-[11px] font-mono text-[#4A4A4A]">03</span>
                        <h2 className="text-[12px] font-medium text-[#6A6A6A] uppercase tracking-[0.08em]">
                            Contact
                        </h2>
                    </div>
                </Fade>

                {/* Two column — asymmetric */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
                    {/* Left — statement */}
                    <Fade delay={0.1}>
                        <p className="text-[14px] text-[#6A6A6A] leading-relaxed max-w-[280px]">
                            Seeking roles in frontend development, data analysis, or design systems.
                            Based in Indonesia.
                        </p>
                    </Fade>

                    {/* Right — links */}
                    <Fade delay={0.2}>
                        <div className="space-y-0">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-baseline justify-between py-4 border-b border-[#1A1A1A] group"
                                    whileHover={prefersReducedMotion ? {} : { x: 4 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    <span className="text-[11px] font-mono text-[#4A4A4A] uppercase tracking-[0.05em]">
                                        {link.label}
                                    </span>
                                    <span className="text-[14px] text-[#8C8C8C] group-hover:text-[#E8E8E8] transition-colors duration-300">
                                        {link.value}
                                        <span className="ml-2 text-[#4A4A4A] opacity-0 group-hover:opacity-100 group-hover:text-[#8B1E1E] transition-all duration-300">
                                            ↗
                                        </span>
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </Fade>
                </div>
            </Container>
        </section>
    )
}