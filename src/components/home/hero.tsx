// src/components/home/hero.tsx
'use client'

import { Fade, Line } from '@/components/ui/motion'
import Link from 'next/link'

export function Hero() {
    return (
        <section
            style={{ gridColumn: 'content-start / span 8' }}
            className="py-12 md:py-16 lg:py-24 relative"
        >
            {/* Main Headline */}
            <div className="mb-10 md:mb-14">
                <Fade delay={0}>
                    <p className="text-[11px] font-mono text-[#9F9F9F] uppercase tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#E8E7E4]" />
                        Timothy Evan — Frontend & Data
                    </p>
                </Fade>

                <Fade delay={1}>
                    <h1 className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[84px] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]">
                        Building interfaces
                        <br />
                        <span className="text-[#6F6F6F] hover:text-[#7A1E1E] transition-colors duration-1000 cursor-crosshair">
                            with clarity.
                        </span>
                    </h1>
                </Fade>
            </div>

            {/* The single dividing line */}
            <Line delay={2} />

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Description - Left Panel */}
                <Fade delay={3} className="md:col-span-8">
                    <div className="py-10 md:pr-16">
                        <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-[1.6] max-w-125 tracking-tight">
                            I focus on frontend development and data visualization,
                            creating tools that <span className="text-[#1A1A1A] font-medium underline decoration-[#7A1E1E]/40 decoration-2 underline-offset-4">reduce friction</span> and communicate clearly.
                        </p>
                    </div>
                </Fade>

                {/* Links - Right Panel with 'Swiss' vertical alignment */}
                <Fade delay={4} className="md:col-span-4">
                    <div className="flex flex-row md:flex-col gap-6 md:gap-4 md:items-end py-10 md:border-l border-[#E8E7E4] md:pl-12 h-full">
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A]"
                        >
                            <span>Work</span>
                            <span className="text-[#D8D8D8] group-hover:text-[#7A1E1E] transition-colors">→</span>
                        </Link>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors"
                        >
                            <span>Info</span>
                            <span className="text-[#D8D8D8] group-hover:text-[#1A1A1A] transition-colors">→</span>
                        </Link>
                        <a
                            href="mailto:timothy.evan.heriawan@gmail.com"
                            className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors"
                        >
                            <span>Email</span>
                            <span className="text-[#D8D8D8] group-hover:text-[#1A1A1E] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                        </a>
                    </div>
                </Fade>
            </div>

            {/* Status Badge */}
            <Fade delay={5}>
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#E8E7E4] hover:border-[#1A1A1A] transition-all duration-500 group">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-20"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7A1E1E]"></span>
                    </span>
                    <span className="text-[9px] font-mono text-[#9F9F9F] group-hover:text-[#1A1A1A] uppercase tracking-[0.25em] transition-colors">
                        Status: Open to opportunities
                    </span>
                </div>
            </Fade>
        </section>
    )
}