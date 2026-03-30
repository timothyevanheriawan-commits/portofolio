// src/components/home/skills-overview.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Fade, Line } from '@/components/ui/motion'

const disciplines = [
    {
        index: '01',
        category: 'Development',
        statement: 'Building production interfaces from concept to deployment.',
        items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        index: '02',
        category: 'Data',
        statement: 'Turning raw datasets into readable, actionable visuals.',
        items: ['Python', 'SQL', 'Pandas', 'Streamlit'],
    },
    {
        index: '03',
        category: 'Tools',
        statement: 'Shipping with precision using the right workflow.',
        items: ['Git', 'Figma', 'Vercel', 'VS Code'],
    },
]

// Each discipline row — staggered in on scroll
function DisciplineRow({
    discipline,
    delay,
    isLast,
}: {
    discipline: typeof disciplines[0]
    delay: number
    isLast: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-12 border-t border-[#E8E7E4] ${!isLast ? '' : 'md:border-b'}`}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* ── Left: index + category name ── */}
            <div className="md:col-span-3 py-8 md:py-10 pr-6 flex flex-col gap-3 md:border-r border-[#E8E7E4]">
                <span className="text-[9px] font-mono text-[#7A1E1E] tracking-[0.35em] uppercase">
                    {discipline.index}
                </span>
                {/* Large display category name — the key typographic move */}
                <h3
                    className="font-display font-medium text-[#1A1A1A] leading-none tracking-[-0.03em] uppercase"
                    style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
                >
                    {discipline.category}
                </h3>
            </div>

            {/* ── Center: discipline statement ── */}
            <div className="md:col-span-5 py-0 pb-6 md:py-10 md:px-10 flex items-end md:items-center md:border-r border-[#E8E7E4]">
                <p className="text-[13px] md:text-[14px] text-[#9F9F9F] leading-[1.6] max-w-[38ch] tracking-[-0.01em]">
                    {discipline.statement}
                </p>
            </div>

            {/* ── Right: skill tags ── */}
            <div className="md:col-span-4 py-0 pb-8 md:py-10 md:pl-10 flex items-end md:items-center">
                <div className="flex flex-wrap gap-2">
                    {discipline.items.map((item, i) => (
                        <motion.span
                            key={item}
                            className="group relative inline-flex items-center text-[10px] font-mono uppercase tracking-wider text-[#4A4A4A] border border-[#E8E7E4] px-3 py-1.5 overflow-hidden cursor-default select-none"
                            initial={{ opacity: 0, y: 6 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.45,
                                delay: delay + 0.15 + i * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ borderColor: '#7A1E1E' }}
                        >
                            {/* Fill on hover */}
                            <motion.span
                                aria-hidden
                                className="absolute inset-0 bg-[#7A1E1E]"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                style={{ originX: 0 }}
                            />
                            <span className="relative z-10 group-hover:text-[#F7F7F5] transition-colors duration-200">
                                {item}
                            </span>
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export function SkillsOverview() {
    return (
        <section className="py-12 md:py-20">
            <Line />

            {/* Section header */}
            <Fade delay={0}>
                <div className="flex items-end justify-between mt-8 md:mt-12 mb-12 md:mb-16">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[11px] tracking-[0.4em] font-medium">
                            <span>INDEX</span>
                            <span className="text-[#E8E7E4]">/</span>
                            <span>02</span>
                        </div>
                        <h2 className="text-[14px] md:text-[16px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] font-medium">
                            Capabilities
                        </h2>
                    </div>
                </div>
            </Fade>

            {/* Discipline rows */}
            <div>
                {disciplines.map((discipline, i) => (
                    <DisciplineRow
                        key={discipline.category}
                        discipline={discipline}
                        delay={i * 0.08}
                        isLast={i === disciplines.length - 1}
                    />
                ))}
            </div>

            <div className="mt-10 md:mt-14">
                <Line />
            </div>
        </section>
    )
}