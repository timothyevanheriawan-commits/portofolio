'use client'

import { Fade, Line } from '@/components/ui/motion'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section
            style={{ gridColumn: 'content-start / span 12' }} // Expanded to full 12 for better grid control
            className="py-12 md:py-20 lg:py-32 relative border-r border-[#E8E7E4]"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                
                {/* Left Side: Headline & Brand */}
                <div className="md:col-span-8 pr-6 md:pr-12">


                    <Fade delay={0.4}>
                        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-bold leading-[0.85] tracking-[-0.05em] text-[#1A1A1A]">
                            Building <br />
                            <span className="relative inline-block group">
                                <span className="relative z-10">interfaces</span>
                                {/* Tokyo Ghoul: Red 'eye' flicker on hover */}
                                <span className="absolute inset-0 bg-[#7A1E1E]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </span>
                            <br />
                            <motion.span 
                                whileHover={{ skewX: -5 }}
                                className="text-[#9F9F9F] hover:text-[#7A1E1E] transition-all duration-700 cursor-crosshair inline-block"
                            >
                                with clarity.
                            </motion.span>
                        </h1>
                    </Fade>

                    <Fade delay={0.6} className="mt-12 md:mt-20">
                        <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-[1.6] max-w-xl tracking-tight">
                            I focus on frontend development and data visualization,
                            creating tools that <span className="text-[#1A1A1A] font-medium underline decoration-[#7A1E1E]/40 decoration-2 underline-offset-4">reduce friction</span> and communicate clearly.
                        </p>
                    </Fade>
                </div>

                {/* Right Side: Links & Meta-Data */}
                <div className="md:col-span-4 md:border-l border-[#E8E7E4] pl-0 md:pl-12 flex flex-col justify-between pt-12 md:pt-0">
                    <Fade delay={0.8} className="space-y-8">
                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-4">
                            {['Work', 'Info', 'Email'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Email' ? `mailto:tim@evan.com` : `/${item.toLowerCase()}`}
                                    className="group flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors"
                                >
                                    <span>{item}</span>
                                    <span className="h-px w-0 bg-[#7A1E1E] group-hover:w-8 transition-all duration-500" />
                                </Link>
                            ))}
                        </nav>
                    </Fade>

                    {/* Status Box - Optimized for Mobile Padding */}
                    <Fade delay={1} className="mt-16 md:mt-20 border-t border-[#E8E7E4] pt-8 pb-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-20"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7A1E1E]"></span>
                                </span>
                                <span className="text-[9px] font-mono text-[#1A1A1A] uppercase tracking-[0.3em]">
                                    Live Status: OPEN TO OPPORTUNITIES.
                                </span>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full">
                <Line delay={1.2} />
            </div>
        </section>
    )
}