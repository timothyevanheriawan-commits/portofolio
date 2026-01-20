// src/components/home/hero.tsx
'use client'

import { Fade, Line } from '@/components/ui/motion'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="py-12 md:py-16 lg:py-24 relative">
            {/* Main Headline */}
            <div className="mb-10 md:mb-14">
                <Fade delay={0}>
                    <p className="text-[11px] font-mono text-[#9F9F9F] uppercase tracking-[0.2em] mb-4 md:mb-6">
                        Timothy Evan — Frontend & Data
                    </p>
                </Fade>

                <Fade delay={1}>
                    {/* Tweak: Tightened letter-spacing and weight for Swiss impact */}
                    <h1 className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[84px] font-bold leading-[0.9] text-[#111]">
                        Building interfaces
                        <br />
                        <span className="text-[#6F6F6F] hover:text-[#7A1E1E] transition-colors duration-1000 cursor-crosshair">
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
                    <div className="md:col-span-2 py-10 md:pr-16">
                        <p className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.6] max-w-[500px]">
                            I focus on frontend development and data visualization,
                            creating tools that <span className="text-[#1A1A1A] font-semibold underline decoration-[#7A1E1E]/40 decoration-2 underline-offset-4">reduce friction</span> and communicate clearly.
                        </p>
                    </div>
                </Fade>

                {/* Links - Right Panel with a 'Swiss' vertical line */}
                <Fade delay={4}>
                    <div className="flex flex-row md:flex-col gap-5 md:gap-4 md:items-end py-10 md:border-l border-[#E8E7E4] md:pl-12">
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#1A1A1A]"
                        >
                            <span>Projects</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                        >
                            <span>About</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <a
                            href="mailto:timothy.evan.heriawan@gmail.com"
                            className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                        >
                            <span>Contact</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    </div>
                </Fade>
            </div>

            {/* Status Badge */}
            <Fade delay={5}>
                <div className="inline-flex items-center gap-3 mt-10 md:mt-12 px-4 py-2 border border-[#E8E7E4] hover:border-[#7A1E1E] transition-all duration-700 group cursor-none">
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A1A1A] group-hover:bg-[#1A1A1A] transition-colors"></span>
                    </span>
                    <span className="text-[10px] font-mono text-[#6F6F6F] group-hover:text-[#1A1A1A] uppercase tracking-[0.2em] transition-colors">
                        Status: Open to opportunities
                    </span>
                </div>
            </Fade>
        </section>
    )
}