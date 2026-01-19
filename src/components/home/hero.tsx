// src/components/home/hero.tsx
'use client'

import { Fade, Line } from '@/components/ui/motion'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            {/* Main Headline */}
            <div className="mb-10 md:mb-14">
                <Fade delay={0}>
                    <p className="text-[11px] md:text-[12px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-4 md:mb-6">
                        Timothy Evan — Frontend & Data
                    </p>
                </Fade>

                <Fade delay={1}>
                    <h1 className="text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#111]">
                        Building interfaces
                        <br />
                        <span className="text-[#6F6F6F] hover:text-[#7A1E1E] transition-colors duration-700 cursor-default">
                            with clarity.
                        </span>
                    </h1>
                </Fade>
            </div>

            <Line delay={2} />

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-8 md:mt-10 border-t border-[#E8E7E4]">
                {/* Description - Left Panel */}
                <Fade delay={3}>
                    <div className="md:col-span-2 py-8 md:pr-10">
                        <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-[1.7] max-w-[480px]">
                            Information Systems student at Petra Christian University.
                            I focus on frontend development and data visualization,
                            creating tools that <span className="text-[#1A1A1A] font-medium">reduce friction</span> and communicate clearly.
                        </p>
                    </div>
                </Fade>

                {/* Links - Right Panel with a 'Swiss' vertical line */}
                <Fade delay={4}>
                    <div className="flex flex-row md:flex-col gap-4 md:gap-3 md:items-end py-8 md:border-l border-[#E8E7E4] md:pl-10">
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#1A1A1A]"
                        >
                            <span>Projects</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                        >
                            <span>About</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <a
                            href="mailto:timothy.evan.heriawan@gmail.com"
                            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                        >
                            <span>Contact</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    </div>
                </Fade>
            </div>

            {/* Status Badge */}
            <Fade delay={5}>
                <div className="inline-flex items-center gap-2 mt-10 md:mt-12 px-3 py-1.5 border border-[#E8E7E4] hover:border-[#7A1E1E]/30 transition-colors duration-500 group">
                    {/* The 'Eye' dot */}
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1A1A1A] group-hover:bg-[#7A1E1E] transition-colors"></span>
                    </span>
                    <span className="text-[11px] font-mono text-[#6F6F6F] group-hover:text-[#1A1A1A] uppercase tracking-wide transition-colors">
                        Open to opportunities
                    </span>
                </div>
            </Fade>
        </section>
    )
}