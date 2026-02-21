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
        value: 'github.com/timothyevanheriawan-commits',
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
        <section className="py-16 md:py-24 lg:py-32">
            <Line />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mt-10 md:mt-16">

                {/* ━━ LEFT: HEADER + MESSAGE ━━ */}
                <div className="md:col-span-5 pr-6 md:pr-16 mb-12 md:mb-0">

                    {/* Eyebrow */}
                    <Fade delay={0}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mt-8 md:mt-12 mb-12 md:mb-16">
                            <div className="md:col-span-8 flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[10px] tracking-[0.3em]">
                                    <span>INDEX</span>
                                    <span className="text-[#E8E7E4]">/</span>
                                    <span>03</span>
                                </div>
                                <h2 className="text-[12px] font-mono text-[#1A1A1A] uppercase tracking-[0.15em] font-medium">
                                    Contact
                                </h2>
                            </div>
                        </div>
                    </Fade>


                    {/* Brief */}
                    <Fade delay={0.3}>
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start max-w-sm">
                            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F] pt-[4px]">
                                Re:
                            </span>
                            <p className="text-[15px] text-[#4A4A4A] leading-[1.65] tracking-[-0.01em]">
                                Open to internships and entry-level roles in frontend
                                development, data analysis, or UI/UX design.
                            </p>
                        </div>
                    </Fade>

                </div>

                {/* ━━ RIGHT: CONTACT LINKS ━━ */}
                <div className="md:col-span-7 md:border-l border-[#E8E7E4] pl-0 md:pl-16">

                    <Fade delay={0.4}>
                        <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F] mb-6">
                            Channels
                        </span>
                    </Fade>

                    <div className="flex flex-col">
                        {contactLinks.map((link, i) => (
                            <Fade key={link.label} delay={0.45 + i * 0.08}>
                                <a
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group grid grid-cols-[1fr_auto] items-center py-5 border-b border-[#E8E7E4] hover:border-[#1A1A1A] transition-colors duration-300"
                                >
                                    <div className="flex flex-col gap-1 min-w-0">
                                        <span className="text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.3em] group-hover:text-[#7A1E1E] transition-colors duration-300">
                                            {link.label}
                                        </span>
                                        <span className="text-[14px] md:text-[15px] text-[#4A4A4A] group-hover:text-[#1A1A1A] transition-colors duration-300 truncate">
                                            {link.value}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#C8C8C4] group-hover:text-[#7A1E1E] transition-colors duration-300 ml-6">
                                        ↗
                                    </span>
                                </a>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}