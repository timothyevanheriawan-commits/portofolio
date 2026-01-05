'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Container } from './container'
import { useMounted } from '@/hooks/use-mounted'
import { MarkLogo } from '../ui/logo'
import Link from 'next/link'

const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
]

export function Header() {
    const pathname = usePathname()
    const mounted = useMounted()

    return (
        <header className="sticky top-0 z-50 bg-[#F6F5F3]/95 backdrop-blur-sm">
            <Container>
                <nav className="flex items-center justify-between h-14 border-b border-[#E8E7E4]">
                    <div className="flex items-center gap-3">
                        <Link href="/" aria-label="Go to homepage">
                            <MarkLogo />
                        </Link>
                    </div>



                    <ul className="flex items-center gap-8 list-none">
                        {navItems.map((item) => {
                            const isActive = mounted && pathname === item.href

                            return (
                                <li key={item.href}>
                                    <NextLink
                                        href={item.href}
                                        className="relative text-[13px] font-medium tracking-wide transition-colors duration-200"
                                        style={{ color: isActive ? '#1A1A1A' : '#6F6F6F' }}
                                    >
                                        <span className="hover:text-[#1A1A1A] transition-colors duration-200">
                                            {item.label}
                                        </span>

                                        {isActive && mounted && (
                                            <motion.span
                                                className="absolute -bottom-4 left-0 right-0 h-px bg-[#1A1A1A]"
                                                layoutId="nav-active"
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 500,
                                                    damping: 35
                                                }}
                                            />
                                        )}
                                    </NextLink>
                                </li>
                            )
                        })}

                        <li>
                            <a
                                href="mailto:timothy.evan.heriawan@gmail.com"
                                className="text-[13px] font-medium text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}