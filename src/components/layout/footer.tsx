'use client'

import { Container } from './container'
import { useMounted } from '@/hooks/use-mounted'

export function Footer() {
    const mounted = useMounted()

    return (
        <footer className="py-10 md:py-16 border-t border-[#E8E7E4] group/footer">
            <Container>
                {/* Changed to flex-col on mobile, flex-row on desktop */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9F9F9F]">

                    {/* Top/Left Block: Legal & Identity */}
                    <div className="flex items-center gap-3 group/name">
                        <span className="text-[#1A1A1A] font-medium tabular-nums">
                            © {mounted ? new Date().getFullYear() : '2026'}
                        </span>

                        <span className="text-[#E8E7E4]" aria-hidden="true">|</span>

                        {/* Link removed, but keeping the color transition on footer hover */}
                        <span className="transition-colors duration-300 group-hover/footer:text-[#1A1A1A] text-[#9F9F9F]">
                            Timothy Evan
                        </span>
                    </div>

                    {/* Bottom/Right Block: System Info */}
                    {/* We use flex-wrap here so if the screen is VERY narrow, it still looks intentional */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#E8E7E4] group-hover/footer:bg-[#7A1E1E] transition-colors duration-500" />
                            <span>Indonesia</span>
                        </div>

                        <span className="text-[#E8E7E4]">/</span>

                        <span>V.01</span>

                        <span className="text-[#E8E7E4]">/</span>

                        {/* Whitespace nowrap keeps the tech stack together on one line if possible */}
                        <span className="whitespace-nowrap">Next.js — Tailwind</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}