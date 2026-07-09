'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './container'
import { MarkLogo } from '../ui/logo'
import { cn } from '@/lib/utils'
import { useMounted } from '@/hooks/use-mounted'

const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
]

// ── Live Clock ────────────────────────────────────────────────────────────────
function LiveClock() {
    const [time, setTime] = useState<string | null>(null)
    const mounted = useMounted()

    useEffect(() => {
        if (!mounted) return
        const tick = () => {
            setTime(new Intl.DateTimeFormat('en-GB', {
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
                timeZone: 'Asia/Jakarta',
            }).format(new Date()))
        }
        tick()
        const timer = setInterval(tick, 1000)
        return () => clearInterval(timer)
    }, [mounted])

    return (
        <div className="flex flex-col items-center gap-0.5">
            {/* Reserve layout space before mount to prevent layout shift */}
            <span className={cn(
                "text-[10px] font-mono tabular-nums tracking-widest transition-colors duration-300",
                mounted && time ? "text-[#1A1A1A]" : "text-transparent"
            )}>
                {time ?? '00:00:00'}
            </span>
            <span className="text-[7px] font-mono uppercase tracking-[0.3em] text-[#BFBFBF]">
                WIB / UTC+7
            </span>
        </div>
    )
}

// ── Scroll Progress Bar ───────────────────────────────────────────────────────
function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E7E4] overflow-hidden pointer-events-none">
            <motion.div
                className="h-full bg-[#7A1E1E] origin-left"
                style={{ scaleX: progress }}
                transition={{ duration: 0 }}
            />
        </div>
    )
}

// ── Header ────────────────────────────────────────────────────────────────────
export function Header() {
    const pathname = usePathname()
    const mounted = useMounted()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Close mobile menu on route change
    const [prevPathname, setPrevPathname] = useState(pathname)
    if (pathname !== prevPathname) {
        setPrevPathname(pathname)
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    return (
      <>
        <header
          className={cn(
            "sticky top-0 z-50 border-b transition-all duration-300",
            scrolled
              ? "bg-[#F7F7F5]/95 backdrop-blur-md border-[#E8E7E4] shadow-[0_1px_0_0_#E8E7E4]"
              : "bg-[#F7F7F5]/80 backdrop-blur-sm border-transparent",
          )}
        >
          <Container>
            <nav className="relative flex items-center justify-between h-12 md:h-14">
              {/* ── Logo ── */}
              <div className="shrink-0 relative z-50 flex items-center gap-4">
                <NextLink
                  href="/"
                  aria-label="Home"
                  className="flex items-center group"
                >
                  <MarkLogo
                    size={20}
                    className="text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#7A1E1E]"
                  />
                </NextLink>
                <span className="hidden sm:block h-3 w-px bg-[#E8E7E4]" />
                <span className="hidden sm:block text-[9px] font-mono uppercase tracking-[0.3em] text-[#BFBFBF]">
                  Portfolio
                </span>
              </div>

              {/* ── Clock — absolute center ── */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <LiveClock />
              </div>

              {/* ── Desktop Nav ── */}
              <div className="hidden md:flex items-center h-full">
                {/* FIXED: Removed the baseline border-b from the links and applied h-full flex instead */}
                <div className="flex items-center h-full border-l border-[#E8E7E4]">
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <NextLink
                        key={item.href}
                        href={item.href}
                        // FIXED: Added 'relative h-full px-6' so text is centered properly and text sections don't collide
                        className="group relative flex items-center justify-center h-full px-6 border-r border-[#E8E7E4] focus-visible:outline-none focus-visible:bg-[#7A1E1E]/5 overflow-hidden"
                      >
                        {/* Index marker — fades in on hover */}
                        <span className="absolute top-2 left-2 text-[6px] font-mono text-[#7A1E1E] opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                          0{i + 1}
                        </span>

                        {/* Hover fill */}
                        <span className="absolute inset-0 bg-[#7A1E1E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span
                          className={cn(
                            "text-[10px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 relative z-10",
                            isActive
                              ? "text-[#1A1A1A]"
                              : "text-[#6F6F6F] group-hover:text-[#1A1A1A]",
                          )}
                        >
                          {item.label}
                        </span>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute bottom-0 left-0 right-0 h-px bg-[#7A1E1E]"
                            transition={{
                              duration: 0.3,
                              ease: [0.19, 1, 0.22, 1],
                            }}
                          />
                        )}

                        {/* Hover indicator */}
                        {!isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-px bg-[#7A1E1E] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                        )}
                      </NextLink>
                    );
                  })}
                </div>

                {/* Contact CTA */}
                <a
                  href="mailto:timothy.evan.heriawan@gmail.com"
                  className="group relative ml-6 px-5 h-8 flex items-center bg-[#1A1A1A] hover:bg-[#7A1E1E] transition-colors duration-300"
                >
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#F7F7F5] transition-colors duration-300">
                    Contact
                  </span>
                  <span className="ml-2.5 text-[9px] font-mono text-[#F7F7F5]/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">
                    ↗
                  </span>
                </a>
              </div>

              {/* ── Mobile Toggle ── */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative z-[60] w-10 h-10 -mr-2 flex items-center justify-center active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7A1E1E]"
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-[18px] h-[10px] flex flex-col justify-between items-end">
                  <span
                    className={cn(
                      "h-px bg-[#1A1A1A] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      mobileMenuOpen
                        ? "w-[18px] rotate-45 translate-y-[4.5px]"
                        : "w-[18px]",
                    )}
                  />
                  <span
                    className={cn(
                      "h-px bg-[#1A1A1A] transition-all duration-300",
                      mobileMenuOpen ? "opacity-0 w-0" : "w-[11px]",
                    )}
                  />
                  <span
                    className={cn(
                      "h-px bg-[#1A1A1A] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      mobileMenuOpen
                        ? "w-[18px] -rotate-45 -translate-y-[4.5px]"
                        : "w-[14px]",
                    )}
                  />
                </div>
              </button>
            </nav>
          </Container>

          {/* Scroll progress — replaces the static bottom border */}
          <ScrollProgress />
        </header>

        {/* ... (Keep Mobile menu architecture exactly the same below) */}
      </>
    );
}