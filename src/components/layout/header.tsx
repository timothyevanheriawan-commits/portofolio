// src/components/layout/header.tsx
'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from './container'
import { MarkLogo } from '../ui/logo'

const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
]

export function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Close menu on route change
    useEffect(() => {
        const id = setTimeout(() => {
            setMobileMenuOpen(false)
        }, 0)
        return () => clearTimeout(id)
    }, [pathname])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#F7F7F5] border-b border-[#E8E7E4]">
                <Container>
                    <nav className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo - fixed alignment */}
                        <NextLink
                            href="/"
                            aria-label="Home"
                            className="relative z-50 flex items-center"
                        >
                            <MarkLogo
                                size={24}
                                animated={false}
                                hover={false}
                                className="text-[#1A1A1A]"
                            />
                        </NextLink>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <NextLink
                                            key={item.href}
                                            href={item.href}
                                            className="relative px-4 py-2 group"
                                        >
                                            <span className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-[#1A1A1A]' : 'text-[#6F6F6F] group-hover:text-[#1A1A1A]'}`}>
                                                {item.label}
                                            </span>
                                            <span className={`absolute bottom-1 left-4 right-4 h-px transition-all duration-300 ease-out ${isActive ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A] opacity-0 group-hover:opacity-30'}`} />
                                        </NextLink>
                                    )
                                })}
                            </div>

                            <span className="w-px h-4 bg-[#E8E7E4] mx-4" aria-hidden="true" />

                            <a
                                href="mailto:timothy.evan.heriawan@gmail.com"
                                className="text-[13px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Mobile Menu Button - fixed alignment */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="w-5 h-3.5 flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                                <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                            </div>
                        </button>
                    </nav>
                </Container>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="absolute inset-0 bg-[#F7F7F5]" />

                <div className="relative h-full pt-20 pb-8 px-6 flex flex-col">
                    <nav className="flex-1">
                        <ul className="space-y-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.href}>
                                        <NextLink
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block py-4 text-[32px] font-semibold tracking-[-0.02em] transition-colors duration-200 ${isActive ? 'text-[#1A1A1A]' : 'text-[#6F6F6F] active:text-[#1A1A1A]'}`}
                                        >
                                            {item.label}
                                        </NextLink>
                                    </li>
                                )
                            })}
                            <li>
                                <a
                                    href="mailto:timothy.evan.heriawan@gmail.com"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-4 text-[32px] font-semibold tracking-[-0.02em] text-[#6F6F6F] active:text-[#1A1A1A]"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="pt-6 border-t border-[#E8E7E4]">
                        <p className="text-[11px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            © {new Date().getFullYear()} Timothy Evan
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}