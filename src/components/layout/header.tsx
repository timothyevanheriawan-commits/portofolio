'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion' // Added missing imports
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


    // Prevent scroll when menu is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="sticky top-0 z-60 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-[#E8E7E4]">
                <Container>
                    <nav className="relative flex items-center justify-between h-14 md:h-16">

                        {/* Logo */}
                        <div className="shrink-0 relative z-70">
                            <NextLink href="/" aria-label="Home" className="flex items-center">
                                <MarkLogo size={22} className="text-[#1A1A1A]" />
                            </NextLink>
                        </div>

                        {/* Desktop Navigation - Swiss Grid Style */}
                        <div className="hidden md:flex items-center h-full">
                            <div className="flex items-center border-l border-[#E8E7E4] h-full">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <NextLink
                                            key={item.href}
                                            href={item.href}
                                            className="relative px-8 h-14 md:h-16 flex items-center border-r border-[#E8E7E4] group overflow-hidden"
                                        >
                                            <span className={cn(
                                                "text-[10px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 relative z-10",
                                                isActive ? 'text-[#1A1A1A]' : 'text-[#9F9F9F] group-hover:text-[#1A1A1A]'
                                            )}>
                                                {item.label}
                                            </span>

                                            {/* Swiss Rationalist Active State: Subtle Background Shift */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeNav"
                                                    className="absolute inset-0 bg-[#F0F0EE] z-0"
                                                    transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                                                />
                                            )}
                                        </NextLink>
                                    )
                                })}

                                <a
                                    href="mailto:timothy.evan.heriawan@gmail.com"
                                    className="px-8 h-14 md:h-16 flex items-center text-[10px] font-mono uppercase tracking-[0.25em] text-[#9F9F9F] hover:text-[#7A1E1E] border-r border-[#E8E7E4] transition-colors"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-70 w-10 h-10 -mr-2 flex items-center justify-center focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-5 h-2.5 flex flex-col justify-between items-end">
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500",
                                    mobileMenuOpen ? "w-5 rotate-45 translate-y-[4.5px]" : "w-5"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500",
                                    mobileMenuOpen ? "opacity-0 w-0" : "w-3"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500",
                                    mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[4.5px]" : "w-4"
                                )} />
                            </div>
                        </button>
                    </nav>
                </Container>
            </header>

            {/* Mobile Menu Overlay - Swiss Table Style */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-50 md:hidden bg-[#F7F7F5]"
                    >
                        <div className="relative h-full pt-24 pb-12 px-6 flex flex-col justify-between w-full max-w-lg mx-auto">
                            <nav className="w-full">
                                <ul className="divide-y divide-[#E8E7E4] border-y border-[#E8E7E4]">
                                    {navItems.map((item, i) => (
                                        <li key={item.href} className="overflow-hidden">
                                            <NextLink
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center justify-between py-8 group"
                                            >
                                                <div className="flex items-baseline gap-6">
                                                    <span className="text-[12px] font-mono text-[#7A1E1E]">0{i + 1}</span>
                                                    <span className={cn(
                                                        "text-[32px] font-bold uppercase tracking-tighter transition-colors",
                                                        pathname === item.href ? "text-[#1A1A1A]" : "text-[#9F9F9F] group-hover:text-[#1A1A1A]"
                                                    )}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <span className="text-[20px] text-[#E8E7E4] group-hover:text-[#7A1E1E] transition-all group-hover:translate-x-1">→</span>
                                            </NextLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Bottom Meta-Data Grid */}
                            <div className="grid grid-cols-2 gap-px bg-[#E8E7E4] mt-auto border border-[#E8E7E4]">
                                <div className="bg-[#F7F7F5] p-5">
                                    <p className="text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-2">Location</p>
                                    <p className="text-[11px] font-mono uppercase text-[#1A1A1A]">Indonesia</p>
                                </div>
                                <div className="bg-[#F7F7F5] p-5">
                                    <p className="text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-2">Availability</p>
                                    <p className="text-[11px] font-mono uppercase text-[#7A1E1E]">Open for Hire</p>
                                </div>
                            </div>

                            <p className="text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.3em] mt-8 text-center">
                                © {mounted ? new Date().getFullYear() : '2026'} Timothy Evan
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}