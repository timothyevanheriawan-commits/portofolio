'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/lib/projects'
import { Fade, Expand } from '@/components/ui/motion'
import Link from 'next/link'

export default function ProjectsPage() {
    const allProjects = getAllProjects()
    const [expandedId, setExpandedId] = useState<string | null>(null)

    return (
        <Container className="py-20 md:py-24">
            {/* 1. Page Header */}
            <Fade>
                <header className="mb-14">
                    <h1 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em] text-[#1A1A1A] mb-4">
                        Projects
                    </h1>
                    <p className="text-[15px] text-[#6F6F6F] max-w-[48ch] leading-[1.65]">
                        Implementation-focused work. Each project includes context,
                        technical decisions, and outcomes.
                    </p>
                </header>
            </Fade>

            {/* 2. Clinical Technical Line */}
            <div className="relative w-full h-px bg-[#E8E7E4] mb-10 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[15%] bg-[#7A1E1E] opacity-70 animate-pulse" />
            </div>

            {/* 3. Projects List */}
            <div className="border-t border-[#E8E7E4]">
                {allProjects.map((project, index) => {
                    const isExpanded = expandedId === project.slug

                    return (
                        <Fade key={project.slug} delay={index * 0.1}>
                            <article className="border-b border-[#E8E7E4] group relative">
                                {/* Interaction Trigger */}
                                <button
                                    onClick={() => setExpandedId(isExpanded ? null : project.slug)}
                                    aria-expanded={isExpanded ? "true" : "false"}
                                    aria-controls={`project-details-${project.slug}`}
                                    className="w-full py-6 md:py-10 text-left active:bg-[#F9F9F8] transition-colors duration-300"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

                                        {/* Left: Metadata & Title (Span 8) */}
                                        <div className="md:col-span-8 flex items-baseline gap-4 md:gap-6 min-w-0">
                                            {/* Index - Hidden on small mobile to prioritize title space */}
                                            <span className={cn(
                                                "hidden sm:block text-[10px] font-mono tabular-nums transition-colors duration-500",
                                                isExpanded ? "text-[#7A1E1E]" : "text-[#BFBFBF]"
                                            )}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase">
                                                        {project.year}
                                                    </span>
                                                    <span className="w-1 h-px bg-[#E8E7E4]" />
                                                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-wider truncate">
                                                        {project.role}
                                                    </span>
                                                </div>
                                                <h3 className="text-[20px] md:text-[32px] font-bold tracking-[-0.03em] text-[#1A1A1A] group-hover:translate-x-1 transition-transform duration-500 leading-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Right: Interaction State (Span 4) - Hidden on Mobile */}
                                        <div className="hidden md:flex md:col-span-4 h-full items-center justify-end pr-4">
                                            <div className="flex items-center gap-8">
                                                <span className={cn(
                                                    "text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-500",
                                                    isExpanded ? "text-[#7A1E1E] translate-x-0" : "text-[#BFBFBF] group-hover:text-[#6F6F6F] group-hover:-translate-x-1"
                                                )}>
                                                    {isExpanded ? "Close" : "Details"}
                                                </span>

                                                <div className={cn(
                                                    "h-px transition-all duration-500 ease-out-expo",
                                                    isExpanded ? "w-8 bg-[#7A1E1E]" : "w-4 bg-[#E8E7E4] group-hover:w-6 group-hover:bg-[#BFBFBF]"
                                                )} />
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* 4. Expanded Content - Swiss Grid Aligned */}
                                <Expand isOpen={isExpanded} id={`project-details-${project.slug}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 pb-10">

                                        {/* Left Column (Span 8) */}
                                        <div className="md:col-span-8 sm:pl-10 md:pl-12">
                                            <p className="text-[15px] text-[#4A4A4A] leading-[1.6] max-w-[48ch] mb-8">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack List */}
                                            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 md:mb-0">
                                                {project.stack.map((tech: string) => (
                                                    <div key={tech} className="flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-[#7A1E1E]" />
                                                        <span className="text-[10px] font-mono text-[#1A1A1A] uppercase tracking-wider">
                                                            {tech}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Mobile Only Links (Shown below content on small screens) */}
                                            <div className="flex flex-col gap-4 md:hidden border-t border-[#E8E7E4] pt-8 mt-4">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7A1E1E] flex justify-between items-center"
                                                >
                                                    Full Case Study <span>→</span>
                                                </Link>
                                                {project.liveUrl && project.liveUrl.startsWith('http') && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] flex justify-between items-center"
                                                    >
                                                        Live Site <span>↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Column (Span 4) - Desktop Link Rail */}
                                        <div className="hidden md:block md:col-span-4 border-l border-[#E8E7E4] pl-12">
                                            <div className="flex flex-col gap-6">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="group/link inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#7A1E1E] transition-colors"
                                                >
                                                    <span>Full Case Study</span>
                                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                                        →
                                                    </span>
                                                </Link>

                                                {project.liveUrl && project.liveUrl.startsWith('http') && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/link inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors"
                                                    >
                                                        <span>Live Site</span>
                                                        <span className="text-[10px] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                                                            ↗
                                                        </span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </Expand>
                            </article>
                        </Fade>
                    )
                })}
            </div>
        </Container>
    )
}