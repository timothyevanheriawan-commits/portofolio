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
        href: 'https://github.com/timothyevanheriawan-commits',
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

            {/* Section Header */}
            <Fade delay={0}>
                <div className="flex items-baseline gap-4 md:gap-6 mt-8 md:mt-12 mb-6 md:mb-10">
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-[0.1em]">
                        03
                    </span>
                    <h2 className="text-[13px] md:text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide">
                        Contact
                    </h2>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Message */}
                <Fade delay={1}>
                    <div>
                        <p className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.7] mb-4">
                            I'm currently open to internships and entry-level positions
                            in frontend development, data analysis, or UI/UX design.
                        </p>
                        <p className="text-[14px] text-[#6F6F6F]">
                            Based in Indonesia. Available for remote work.
                        </p>
                    </div>
                </Fade>

                {/* Links */}
                <Fade delay={2}>
                    <div className="space-y-0">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center justify-between py-4 border-b border-[#E8E7E4] first:border-t transition-colors duration-300 hover:bg-[#FAFAF9] -mx-3 px-3 md:mx-0 md:px-0"
                            >
                                <span className="absolute left-0 top-0 h-full w-[2px] bg-[#7A1E1E] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out-expo origin-bottom" />

                                <span className="text-[10px] md:text-[11px] font-mono text-[#9F9F9F] uppercase tracking-wide group-hover:text-[#7A1E1E] transition-colors">
                                    {link.label}
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="text-[12px] md:text-[13px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-300">
                                        {link.value}
                                    </span>
                                    <span className="text-[11px] text-[#9F9F9F] group-hover:text-[#7A1E1E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                                        ↗
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    )
}