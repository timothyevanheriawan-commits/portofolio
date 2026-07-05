'use client'

import { Line } from '@/components/ui/motion'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/site-config'

function RevealWord({
    children,
    delay,
    className,
}: {
    children: React.ReactNode
    delay: number
    className?: string
}) {
    return (
        <span className="block overflow-hidden">
            <motion.span
                className={`block ${className ?? ''}`}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.span>
        </span>
    )
}

function ShapeField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        const c = ctx

        let w = 0, h = 0, raf: number

        // Configuration for the Swiss modular grid
        const COLS = 12
        const MAROON = '#7A1E1E'
        const DARK = '#1A1A1A'

        function resize() {
            const dpr = Math.min(devicePixelRatio, 2)
            w = canvas!.offsetWidth
            h = canvas!.offsetHeight
            canvas!.width = w * dpr
            canvas!.height = h * dpr
            c.scale(dpr, dpr)
        }

        function draw(ts: number) {
            raf = requestAnimationFrame(draw)
            c.clearRect(0, 0, w, h)

            const colWidth = w / COLS
            const rows = Math.ceil(h / colWidth)
            const time = ts * 0.0005

            // 1. Draw the Base Grid
            c.lineWidth = 0.5

            for (let i = 0; i <= COLS; i++) {
                const x = i * colWidth
                // Varying opacity for vertical lines
                const pulse = 0.03 + Math.sin(time + i * 0.5) * 0.015
                c.strokeStyle = DARK
                c.globalAlpha = pulse
                c.beginPath()
                c.moveTo(x, 0)
                c.lineTo(x, h)
                c.stroke()
            }

            for (let j = 0; j <= rows; j++) {
                const y = j * colWidth
                const pulse = 0.03 + Math.cos(time + j * 0.5) * 0.015
                c.strokeStyle = DARK
                c.globalAlpha = pulse
                c.beginPath()
                c.moveTo(0, y)
                c.lineTo(w, y)
                c.stroke()
            }

            // 2. Draw Technical Markers (Crosshairs and Coordinates)
            // We only draw a few to keep it clean
            const markers = [
                { col: 2, row: 3, type: 'cross' },
                { col: 8, row: 7, type: 'maroon-box' },
                { col: 5, row: 12, type: 'cross' },
                { col: 10, row: 2, type: 'coord' }
            ]

            markers.forEach(m => {
                const x = m.col * colWidth
                const y = m.row * colWidth
                const breath = 0.3 + Math.sin(time * 2 + m.col) * 0.2

                c.globalAlpha = breath

                if (m.type === 'cross') {
                    c.strokeStyle = DARK
                    c.beginPath()
                    c.moveTo(x - 5, y); c.lineTo(x + 5, y)
                    c.moveTo(x, y - 5); c.lineTo(x, y + 5)
                    c.stroke()
                } else if (m.type === 'maroon-box') {
                    c.fillStyle = MAROON
                    c.globalAlpha = breath * 0.6
                    c.fillRect(x - 2, y - 2, 4, 4)
                } else if (m.type === 'coord') {
                    c.fillStyle = DARK
                    c.font = '7px JetBrains Mono, monospace'
                    c.fillText(`${m.col.toString().padStart(2, '0')}.${m.row.toString().padStart(2, '0')}`, x + 8, y + 3)
                }
            })
        }

        resize()
        raf = requestAnimationFrame(draw)
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)

        return () => { cancelAnimationFrame(raf); ro.disconnect() }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    )
}
const LINKS = [
    { label: 'Work', href: '/projects' },
    { label: 'Info', href: '/about' },
    { label: 'Email', href: `mailto:${siteConfig.email}` },
]

export function Hero() {
    return (
      <section
        style={{ gridColumn: "content-start / span 12" }}
        className="relative pt-16 pb-0 md:pt-24 border-r border-[#E8E7E4]"
      >
        {/* Background — geometric shapes, right half only */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 right-0 w-[45%] pointer-events-none z-0 overflow-hidden select-none hidden md:block"
        >
          <ShapeField />
        </div>

        <div className="relative z-10 flex flex-col">
          {/* ── Overline ── */}
          <motion.div
            className="flex items-center gap-3 mb-10 md:mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="h-px w-5 bg-[#7A1E1E]" />
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#6F6F6F]">
              Frontend / Data Systems
            </span>
          </motion.div>

          {/* ── Full-width headline block ── */}
          <h1
            className="tracking-[-0.04em] text-[#1A1A1A] w-full"
            style={{ fontSize: "clamp(38px, 11vw, 172px)", lineHeight: 0.88 }}
          >
            <RevealWord delay={0.2}>
              <span className="block font-light">Building</span>
            </RevealWord>

            <RevealWord delay={0.36}>
              <span className="relative inline-block group cursor-default">
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-[8px] bg-[#7A1E1E]/20"
                />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F7F7F5]">
                  interfaces
                </span>
                <span className="absolute inset-0 bg-[#7A1E1E] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-0" />
              </span>
            </RevealWord>

            <RevealWord delay={0.52}>
              <span className="block font-bold">
                <span className="inline-block text-[#C8C8C8]">
                  with clarity.
                </span>
              </span>
            </RevealWord>
          </h1>

          {/* ── Divider rule ── */}
          <motion.div
            className="relative w-full h-px bg-[#E8E7E4] mt-12 md:mt-16 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#7A1E1E]"
              initial={{ width: 0 }}
              animate={{ width: "12%" }}
              transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* ── Footnote row - body left, nav right ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-0 py-8 md:py-10"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left - body copy + status + CTA */}
            <div className="md:col-span-7 flex flex-col justify-between gap-6 pr-0 md:pr-16 mb-8 md:mb-0">
              <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-[1.75] max-w-[44ch] tracking-tight">
                I focus on frontend development and data visualization, creating
                tools that{" "}
                <span className="text-[#1A1A1A] font-medium underline decoration-[#7A1E1E]/40 decoration-2 underline-offset-4">
                  reduce friction
                </span>{" "}
                and communicate clearly.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Primary CTA */}
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#F7F7F5] bg-[#1A1A1A] px-5 py-2.5 hover:bg-[#7A1E1E] transition-colors duration-300 focus-visible:outline-none focus-visible:bg-[#7A1E1E]"
                >
                  View My Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Status dot */}
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-20" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7A1E1E]" />
                  </span>
                  <span className="text-[9px] font-mono text-[#1A1A1A] uppercase tracking-[0.3em]">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Right - nav links */}
            <nav className="md:col-span-5 md:border-l border-[#E8E7E4] md:pl-10 flex flex-col justify-center">
              {LINKS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 1.1 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    {...(item.label === "Email"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group relative flex items-center justify-between py-3.5 border-b border-[#E8E7E4] first:border-t overflow-hidden focus-visible:outline-none focus-visible:bg-[#7A1E1E]/5"
                  >
                    {/* Full-width underline - draws left→right on hover, retracts right→left on leave */}
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-px w-full bg-[#7A1E1E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo"
                    />

                    <div className="flex items-center gap-3">
                      <span className="text-[8px] font-mono text-[#888888] tabular-nums group-hover:text-[#7A1E1E] transition-colors duration-300">
                        0{i + 1}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-200">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <Line />
        </div>
      </section>
    );
}