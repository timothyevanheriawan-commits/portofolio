'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/lib/projects'
import { Fade, Expand } from '@/components/ui/motion'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function ProjectsPage() {
    const allProjects = getAllProjects()
    const [expandedId, setExpandedId] = useState<string | null>(null)
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <Container className="py-20 md:py-24">

            {/* Header */}
            <Fade>
                <header className="mb-14">
                    <h1 className="text-[32px] md:text-[48px] font-black tracking-[-0.04em] text-[#1A1A1A] mb-4"
                        style={{ lineHeight: 0.92 }}>
                        INDEX
                    </h1>
                    <p className="text-[14px] text-[#6F6F6F] max-w-[44ch] leading-[1.65] mt-4">
                        Implementation-focused. Each project includes context,
                        technical decisions, and outcomes.
                    </p>
                </header>
            </Fade>

            {/* Accent rule */}
            <div className="relative w-full h-px bg-[#E8E7E4] mb-12 overflow-hidden">
                <motion.div
                    className="absolute left-0 top-0 h-full bg-[#7A1E1E]"
                    initial={{ width: 0 }}
                    animate={{ width: '18%' }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>

            {/* Projects list */}
            <div className="border-t border-[#E8E7E4]">
                {allProjects.map((project, index) => {
                    const isExpanded = expandedId === project.slug
                    const isHovered = hoveredId === project.slug

                    return (
                        <Fade key={project.slug} delay={index * 0.06}>
                            <article
                                className="border-b border-[#E8E7E4] group relative"
                                onMouseEnter={() => setHoveredId(project.slug)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Row hover bg */}
                                <div className={cn(
                                    "absolute top-0 bottom-px -left-[50vw] -right-[50vw] transition-opacity duration-400 pointer-events-none z-0",
                                    "bg-[linear-gradient(to_right,transparent_0%,#F5F4F2_8%,#F5F4F2_92%,transparent_100%)]",
                                    isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                )} />

                                {/* Ghost index number — appears on hover behind the row */}
                                <AnimatePresence>
                                    {(isHovered || isExpanded) && (
                                        <motion.span
                                            aria-hidden
                                            className="absolute right-16 top-1/2 -translate-y-1/2 font-black tabular-nums leading-none pointer-events-none select-none z-0"
                                            style={{
                                                fontSize: 'clamp(60px, 8vw, 100px)',
                                                color: 'transparent',
                                                WebkitTextStroke: '1px rgba(0,0,0,0.06)',
                                                letterSpacing: '-0.05em',
                                            }}
                                            initial={{ opacity: 0, x: 12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 12 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                {/* Bottom maroon accent when expanded — doesn't clash with index number */}
                                <div className={cn(
                                    'absolute bottom-0 left-0 right-0 h-px bg-[#7A1E1E] transition-opacity duration-300',
                                    isExpanded ? 'opacity-100' : 'opacity-0'
                                )} />

                                <div className="relative z-10">
                                    <button
                                        onClick={() => setExpandedId(isExpanded ? null : project.slug)}
                                        aria-expanded={isExpanded}
                                        className="w-full py-6 md:py-9 text-left"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

                                            <div className="md:col-span-8 flex items-baseline gap-4 md:gap-8">
                                                <span className={cn(
                                                    "hidden sm:block text-[11px] font-mono tabular-nums transition-colors duration-300",
                                                    isExpanded ? "text-[#7A1E1E]" : "text-[#BFBFBF] group-hover:text-[#6F6F6F]"
                                                )}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>

                                                <div className="flex-1 min-w-0">
                                                    {/* Always-visible meta — year + role + stack peek */}
                                                    <div className="flex items-center gap-2 mb-3 md:mb-2">
                                                        <span className="shrink-0 text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest tabular-nums">
                                                            {project.year}
                                                        </span>
                                                        <span className="shrink-0 text-[#7A1E1E] text-[9px] font-mono leading-none">—</span>
                                                        <span className="shrink-0 text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                                                            {project.role.replace(/\s*\(.*?\)/, '').replace('&', '+')}
                                                        </span>
                                                        <span className="shrink-0 text-[#E8E7E4] text-[9px] font-mono leading-none">·</span>
                                                        <span className="shrink-0 text-[9px] font-mono text-[#BFBFBF] uppercase tracking-wider">
                                                            {project.stack.slice(0, 2).join(' · ')}
                                                        </span>
                                                    </div>

                                                    <h2 className={cn(
                                                        "text-[24px] md:text-[36px] font-bold tracking-[-0.04em] text-[#1A1A1A] transition-all duration-500 leading-tight",
                                                        !isExpanded && "group-hover:translate-x-2"
                                                    )}>
                                                        {project.title}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="hidden md:flex md:col-span-4 h-full items-center justify-end pr-2">
                                                <div className="flex items-center gap-6">
                                                    <span className={cn(
                                                        "text-[9px] font-mono uppercase tracking-widest transition-all duration-300",
                                                        isExpanded ? "text-[#7A1E1E]" : "text-[#BFBFBF] group-hover:text-[#6F6F6F]"
                                                    )}>
                                                        {isExpanded ? 'Close' : 'Details'}
                                                    </span>
                                                    {/* Animated +/× toggle */}
                                                    <div className="relative w-4 h-4 flex items-center justify-center">
                                                        <span className={cn(
                                                            "absolute block h-px w-4 bg-current transition-all duration-300",
                                                            isExpanded ? "text-[#7A1E1E] rotate-45" : "text-[#BFBFBF] group-hover:text-[#6F6F6F]"
                                                        )} />
                                                        <span className={cn(
                                                            "absolute block h-px bg-current transition-all duration-300",
                                                            isExpanded ? "text-[#7A1E1E] w-4 -rotate-45" : "text-[#BFBFBF] group-hover:text-[#6F6F6F] w-4 rotate-90"
                                                        )} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <Expand isOpen={isExpanded} id={`project-details-${project.slug}`}>
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 pb-10">
                                            <div className="md:col-span-8 md:pl-12">
                                                <p className="text-[15px] text-[#4A4A4A] leading-[1.65] max-w-[48ch] mb-8">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                                                    {project.stack.map((tech: string) => (
                                                        <span key={tech}
                                                            className="text-[9px] font-mono uppercase tracking-wider text-[#4A4A4A] border border-[#E8E7E4] px-2.5 py-1">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex gap-4 md:hidden border-t border-[#E8E7E4] pt-6 mt-6">
                                                    <Link href={`/projects/${project.slug}`}
                                                        className="text-[11px] font-mono uppercase tracking-widest text-[#7A1E1E] flex items-center gap-2">
                                                        Case Study <span>→</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="hidden md:flex flex-col gap-5 md:col-span-4 border-l border-[#E8E7E4] pl-10">
                                                <Link href={`/projects/${project.slug}`}
                                                    className="group/cta inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A] hover:text-[#7A1E1E] transition-colors">
                                                    Full Case Study
                                                    <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                                                </Link>
                                                {project.liveUrl?.startsWith('http') && (
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                                        className="group/cta inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors">
                                                        Live Site
                                                        <span className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5">↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Expand>
                                </div>
                            </article>
                        </Fade>
                    )
                })}
            </div>
        </Container>
    )
}