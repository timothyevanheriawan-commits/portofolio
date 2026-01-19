'use client'

import { HoverLink } from '@/components/ui/hover-link'
import { Fade, Line, Status } from '@/components/ui/motion'

export function Hero() {
    return (
        <section className="pt-24 pb-20 md:pt-32 md:pb-24">
            <div className="max-w-145">
                {/* Status */}
                <Fade delay={0}>
                    <div className="flex items-center gap-3 mb-10">
                        <Status />
                        <span className="w-1 h-1 rounded-full bg-black" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A4A4A]">
                            Open to opportunities
                        </span>
                    </div>
                </Fade>

                {/* Name */}
                <Fade delay={1}>
                    <h1 className="text-[44px] md:text-[56px] font-semibold tracking-tight leading-[1.08] text-[#1A1A1A] font-(family-name:--font-space) mb-5">
                        Timothy Evan
                    </h1>
                </Fade>

                {/* Role */}
                <Fade delay={2}>
                    <p className="text-[17px] text-[#6F6F6F] mb-10 leading-relaxed">
                        Frontend development & data analysis.
                        <br />
                        Information Systems, Petra Christian University.
                    </p>
                </Fade>

                {/* Links */}
                <Fade delay={3}>
                    <div className="flex items-center gap-8">
                        <HoverLink href="/projects" showArrow className="text-[14px] font-medium text-[#1A1A1A]">
                            View Projects
                        </HoverLink>

                        <HoverLink href="/about" className="text-[14px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A]">
                            About
                        </HoverLink>
                    </div>
                </Fade>
            </div>

            {/* Divider */}
            <div className="mt-20">
                <Line delay={4} />
            </div>

            {/* Stats */}
            <Fade delay={5}>
                <div className="flex items-baseline gap-12 mt-10">
                    {[
                        { label: 'Stack', value: 'Next.js / React / Python' },
                        { label: 'Focus', value: 'UI Systems / Data Visualisation' },
                    ].map((item) => (
                        <div key={item.label}>
                            <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest block mb-1">
                                {item.label}
                            </span>
                            <span className="text-[13px] font-mono text-[#6F6F6F]">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    )
}