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

export function Header() {
    const pathname = usePathname()
    const mounted = useMounted()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [prevPathname, setPrevPathname] = useState(pathname)

    // Close menu on route change — set state during render to avoid useEffect lint error
    if (pathname !== prevPathname) {
        setPrevPathname(pathname)
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#F7F7F5]/90 backdrop-blur-sm border-b border-[#E8E7E4]">
                <Container>
                    <nav className="relative flex items-center justify-between h-12 md:h-14">

                        {/* Logo + Site Mark */}
                        <div className="shrink-0 relative z-60 flex items-center gap-4">
                            <NextLink href="/" aria-label="Home" className="flex items-center">
                                <MarkLogo size={20} className="text-[#1A1A1A]" />
                            </NextLink>
                            <span className="hidden sm:block h-3 w-px bg-[#E8E7E4]" />
                            <span className="hidden sm:block text-[9px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F]">
                                Portfolio
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center h-full gap-0">

                            {/* Nav Links */}
                            <div className="flex items-center h-full border-l border-[#E8E7E4]">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <NextLink
                                            key={item.href}
                                            href={item.href}
                                            className="relative px-7 h-full flex items-center border-r border-[#E8E7E4] group"
                                        >
                                            <span className={cn(
                                                "text-[10px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 relative z-10",
                                                isActive ? 'text-[#1A1A1A]' : 'text-[#9F9F9F] group-hover:text-[#1A1A1A]'
                                            )}>
                                                {item.label}
                                            </span>

                                            {/* Active indicator — bottom line, not background fill */}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-active"
                                                    className="absolute bottom-0 left-0 right-0 h-px bg-[#1A1A1A]"
                                                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                                                />
                                            )}

                                            {/* Hover indicator */}
                                            {!isActive && (
                                                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#7A1E1E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                            )}
                                        </NextLink>
                                    )
                                })}
                            </div>

                            {/* Contact — separated with a gap to distinguish from nav */}
                            <a
                                href="mailto:timothy.evan.heriawan@gmail.com"
                                className="group relative ml-6 px-5 h-8 flex items-center border border-[#E8E7E4] hover:border-[#1A1A1A] transition-colors duration-300"
                            >
                                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#9F9F9F] group-hover:text-[#1A1A1A] transition-colors duration-300">
                                    Contact
                                </span>
                                <span className="ml-3 text-[9px] font-mono text-[#C8C8C4] group-hover:text-[#7A1E1E] transition-colors duration-300">
                                    ↗
                                </span>
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-60 w-10 h-10 -mr-2 flex items-center justify-center focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-[18px] h-[10px] flex flex-col justify-between items-end">
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                    mobileMenuOpen ? "w-[18px] rotate-45 translate-y-[4.5px]" : "w-[18px]"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-300",
                                    mobileMenuOpen ? "opacity-0 w-0" : "w-[11px]"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                    mobileMenuOpen ? "w-[18px] -rotate-45 -translate-y-[4.5px]" : "w-[14px]"
                                )} />
                            </div>
                        </button>
                    </nav>
                </Container>
            </header>

            {/* ━━ MOBILE MENU ━━ */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 md:hidden bg-[#F7F7F5]"
                    >
                        <div className="h-full pt-20 pb-8 px-6 flex flex-col justify-between w-full max-w-md mx-auto">

                            {/* Nav Items */}
                            <nav className="mt-8">
                                <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-[#9F9F9F] mb-4">
                                    Navigate
                                </span>
                                <ul className="border-t border-[#E8E7E4]">
                                    {navItems.map((item, i) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <NextLink
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="group flex items-center justify-between py-6 border-b border-[#E8E7E4] hover:border-[#1A1A1A] transition-colors"
                                            >
                                                <div className="flex items-baseline gap-5">
                                                    <span className="text-[10px] font-mono tabular-nums text-[#C8C8C4] group-hover:text-[#7A1E1E] transition-colors">
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className={cn(
                                                        "text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] transition-colors duration-300",
                                                        pathname === item.href
                                                            ? "text-[#1A1A1A]"
                                                            : "text-[#9F9F9F] group-hover:text-[#1A1A1A]"
                                                    )}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <span className="h-px w-0 bg-[#7A1E1E] group-hover:w-6 transition-all duration-300" />
                                            </NextLink>
                                        </motion.li>
                                    ))}

                                    {/* Contact in mobile nav */}
                                    <motion.li
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.22, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <a
                                            href="mailto:timothy.evan.heriawan@gmail.com"
                                            className="group flex items-center justify-between py-6 border-b border-[#E8E7E4] hover:border-[#1A1A1A] transition-colors"
                                        >
                                            <div className="flex items-baseline gap-5">
                                                <span className="text-[10px] font-mono tabular-nums text-[#C8C8C4] group-hover:text-[#7A1E1E] transition-colors">
                                                    03
                                                </span>
                                                <span className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#9F9F9F] group-hover:text-[#1A1A1A] transition-colors duration-300">
                                                    Contact
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-[#C8C8C4] group-hover:text-[#7A1E1E] transition-colors">
                                                ↗
                                            </span>
                                        </a>
                                    </motion.li>
                                </ul>
                            </nav>

                            {/* Bottom Meta */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                className="mt-auto"
                            >
                                {/* Status + Location */}
                                <div className="grid grid-cols-2 gap-0 border border-[#E8E7E4]">
                                    <div className="p-4 border-r border-[#E8E7E4]">
                                        <span className="block text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.25em] mb-2">
                                            Location
                                        </span>
                                        <span className="block text-[11px] font-mono uppercase text-[#1A1A1A] tracking-[0.1em]">
                                            Indonesia
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <span className="block text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.25em] mb-2">
                                            Status
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-[5px] w-[5px] shrink-0">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-25" />
                                                <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-[#7A1E1E]" />
                                            </span>
                                            <span className="text-[11px] font-mono uppercase text-[#1A1A1A] tracking-[0.1em]">
                                                Available
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Copyright */}
                                <p className="text-[9px] font-mono text-[#C8C8C4] uppercase tracking-[0.25em] mt-6 text-center">
                                    © {mounted ? new Date().getFullYear() : '2025'} Timothy Evan
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}