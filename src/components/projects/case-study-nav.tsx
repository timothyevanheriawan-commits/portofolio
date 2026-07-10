'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SECTIONS = ['Context', 'Architecture', 'Tradeoffs', 'Outcome', 'Reflection']

export function CaseStudyNav() {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        SECTIONS.forEach(s => {
            const el = document.getElementById(s.toLowerCase())
            if (!el) return

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(s.toLowerCase())
                },
                { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
                <div className="h-px bg-[var(--color-accent)] w-5" />
                <nav className="flex flex-col gap-3">
                    {SECTIONS.map((s) => {
                        const isActive = activeId === s.toLowerCase()
                        return (
                            <a
                                key={s}
                                href={`#${s.toLowerCase()}`}
                                className={cn(
                                    "group flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest transition-colors duration-200",
                                    isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-faint)] hover:text-[var(--color-text-primary)]"
                                )}
                            >
                                <span className={cn(
                                    "h-px bg-[var(--color-accent)] transition-all duration-300",
                                    isActive ? "w-4" : "w-0 group-hover:w-4"
                                )} />
                                {s}
                            </a>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}
