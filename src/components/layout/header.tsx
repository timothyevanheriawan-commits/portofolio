'use client'

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

    return (
        <header className="sticky top-0 z-50 bg-[#F7F7F5]/85 backdrop-blur-xl border-b border-[#E8E7E4]/60">
            <Container>
                <nav className="flex items-center justify-between h-14 md:h-16">
                    {/* Logo */}
                    <NextLink href="/" aria-label="Home" className="group relative py-2">
                        <MarkLogo className="text-[#1A1A1A] transition-all duration-500 group-hover:opacity-60" />
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1A1A1A] transition-all duration-500 ease-out group-hover:w-full" />
                    </NextLink>

                    {/* Navigation */}
                    <div className="flex items-center">
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
                                        <span className={`absolute bottom-1 left-4 right-4 h-px transition-all duration-300 ease-out ${isActive ? 'bg-[#1A1A1A] opacity-100' : 'bg-[#1A1A1A] opacity-0 group-hover:opacity-30'}`} />
                                    </NextLink>
                                )
                            })}
                        </div>

                        {/* Separator */}
                        <span className="w-px h-4 bg-[#E8E7E4] mx-4" aria-hidden="true" />

                        {/* Contact CTA */}
                        <a
                            href="mailto:timothy.evan.heriawan@gmail.com"
                            className="group flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-300"
                        >
                            <span>Contact</span>
                            <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                ↗
                            </span>
                        </a>
                    </div>
                </nav>
            </Container>
        </header>
    )
}