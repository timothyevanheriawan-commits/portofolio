'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
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

    // Inside your Header component, before the return:
    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setMobileMenuOpen(false);
    }

    // Prevent scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="sticky top-0 z-60 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-[#E8E7E4]">
                <Container>
                    <nav className="relative flex items-center justify-between h-14 md:h-16">

                        {/* Logo - Fixed Position Anchor */}
                        <div className="shrink-0 relative z-70">
                            <NextLink href="/" aria-label="Home" className="flex items-center">
                                <MarkLogo size={22} className="text-[#1A1A1A]" />
                            </NextLink>
                        </div>

                        {/* Desktop Navigation - Right Aligned */}
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="flex items-center">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <NextLink key={item.href} href={item.href} className="relative px-4 py-2 group">
                                            <span className={cn(
                                                "text-[11px] font-mono uppercase tracking-widest transition-colors duration-300",
                                                isActive ? 'text-[#1A1A1A]' : 'text-[#6F6F6F] group-hover:text-[#1A1A1A]'
                                            )}>
                                                {item.label}
                                            </span>
                                            <span className={cn(
                                                "absolute bottom-2 left-4 right-4 h-px transition-transform duration-500 ease-out-expo origin-left",
                                                isActive ? 'bg-[#7A1E1E] scale-x-100' : 'bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100'
                                            )} />
                                        </NextLink>
                                    )
                                })}
                            </div>

                            {/* Divider */}
                            <span className="w-px h-3 bg-[#E8E7E4] mx-2" aria-hidden="true" />

                            <a
                                href="mailto:timothy.evan.heriawan@gmail.com"
                                className="px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-70 w-10 h-10 -mr-2 flex items-center justify-center focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-5 h-2.5 flex flex-col justify-between items-end">
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500 ease-out-expo",
                                    mobileMenuOpen ? "w-5 rotate-45 translate-y-[4.5px]" : "w-5"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500 ease-out-expo",
                                    mobileMenuOpen ? "opacity-0 w-0" : "w-3"
                                )} />
                                <span className={cn(
                                    "h-px bg-[#1A1A1A] transition-all duration-500 ease-out-expo",
                                    mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[4.5px]" : "w-4"
                                )} />
                            </div>
                        </button>
                    </nav>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-50 md:hidden bg-[#F7F7F5] transition-all duration-700 ease-out-expo",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            )}>
                <div className="relative h-full pt-32 pb-12 px-8 flex flex-col justify-between max-w-lg mx-auto w-full">
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map((item, i) => (
                                <li key={item.href} className="overflow-hidden">
                                    <NextLink
                                        href={item.href}
                                        className={cn(
                                            "block text-[42px] font-bold tracking-tight transition-all duration-500",
                                            mobileMenuOpen ? "translate-y-0" : "translate-y-full",
                                            pathname === item.href ? "text-[#7A1E1E]" : "text-[#1A1A1A]"
                                        )}
                                        style={{ transitionDelay: `${i * 0.1}s` }}
                                    >
                                        {item.label}
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={cn(
                        "space-y-8 transition-all duration-700 delay-300",
                        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                        <div className="h-px bg-[#E8E7E4] w-full" />

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-2">Connect</p>
                                <a href="mailto:timothy.evan.heriawan@gmail.com" className="block text-[14px] font-mono text-[#1A1A1A] hover:text-[#7A1E1E] transition-colors">
                                    Email
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-2">Social</p>
                                <a href="#" target="_blank" className="block text-[14px] font-mono text-[#1A1A1A]">
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <p className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-[0.2em]">
                            © {mounted ? new Date().getFullYear() : '2026'} Timothy Evan
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}