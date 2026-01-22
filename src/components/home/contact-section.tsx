// src/components/home/contact-section.tsx
'use client'

import { Fade, Line } from '@/components/ui/motion'

const contactLinks = [
    {
        label: 'Email',
        value: 'timothy.evan.heriawan@gmail.com',
        href: 'mailto:timothy.evan.heriawan@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/timothyevanheriawan',
        href: 'https://github.com/timothyevanheriawan',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/timothy-evan-heriawan',
        href: 'https://linkedin.com/in/timothy-evan-heriawan/',
    },
]

export function ContactSection() {
    return (
        <section className="py-12 md:py-20">
            <Line />

            {/* Section Header - Matching the Index Style */}
            <Fade delay={0}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mt-8 md:mt-12 mb-12 md:mb-16">
                    <div className="md:col-span-8 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[10px] tracking-[0.3em]">
                            <span>INDEX</span>
                            <span className="text-[#E8E7E4]">/</span>
                            <span>03</span>
                        </div>
                        <h2 className="text-[12px] font-mono text-[#1A1A1A] uppercase tracking-[0.15em] font-medium">
                            Connection
                        </h2>
                    </div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Left Side: Direct Message */}
                <Fade delay={0.1} className="md:col-span-7 mb-12 md:mb-0">
                    <div className="max-w-[42ch]">
                        <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-[1.6] mb-6">
                            I&apos;m currently open to internships and entry-level positions
                            in frontend development, data analysis, or UI/UX design.
                        </p>
                        <p className="text-[13px] text-[#9F9F9F]">
                            Based in Indonesia. Available for remote work worldwide.
                        </p>
                    </div>
                </Fade>

                {/* Right Side: Clean List Links */}
                <Fade delay={0.2} className="md:col-span-5 md:border-l border-[#E8E7E4] md:pl-12">
                    <div className="flex flex-col -mt-4">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center justify-between py-4 border-b border-[#E8E7E4] transition-colors duration-300"
                            >
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-[#BFBFBF] uppercase tracking-wider mb-0.5 group-hover:text-[#7A1E1E] transition-colors">
                                        {link.label}
                                    </span>
                                    <span className="text-[13px] md:text-[14px] text-[#4A4A4A] group-hover:text-[#1A1A1A] transition-colors">
                                        {link.value}
                                    </span>
                                </div>
                                <span className="text-[14px] text-[#BFBFBF] group-hover:text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    )
}