// src/app/not-found.tsx
import Link from 'next/link'
import { Container } from '@/components/layout/container'

export default function NotFound() {
    return (
        <Container className="py-24 md:py-36">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-8">

                    {/* Overline */}
                    <div className="flex items-center gap-3 mb-12">
                        <span className="h-px w-5 bg-[#7A1E1E]" />
                        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#6F6F6F]">
                            404 / Not Found
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-black tracking-[-0.04em] text-[#1A1A1A] mb-8"
                        style={{ fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 0.88 }}
                    >
                        Wrong
                        <br />
                        <span className="text-[#BFBFBF]">turn.</span>
                    </h1>

                    <p className="text-[15px] text-[#4A4A4A] leading-[1.75] max-w-[38ch] mb-12">
                        This page doesn't exist. It may have been moved,
                        deleted, or you might have mistyped the URL.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#F7F7F5] bg-[#1A1A1A] px-6 py-3 hover:bg-[#7A1E1E] transition-colors duration-300"
                        >
                            Back to Home
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A] border border-[#E8E7E4] px-6 py-3 hover:border-[#1A1A1A] transition-colors duration-300"
                        >
                            View Projects
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>

                {/* Watermark */}
                <div className="hidden md:flex md:col-span-4 items-center justify-end">
                    <span
                        className="font-black tabular-nums select-none"
                        style={{
                            fontSize: 'clamp(80px, 12vw, 160px)',
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(0,0,0,0.06)',
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                        }}
                    >
                        404
                    </span>
                </div>
            </div>
        </Container>
    )
}
