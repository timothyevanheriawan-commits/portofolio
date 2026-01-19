'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { getAllProjects } from '@/lib/projects'
import { Fade, Line } from '@/components/ui/motion'
import Link from 'next/link'

export default function ProjectsPage() {
    const allProjects = getAllProjects()
    const [expandedId, setExpandedId] = useState<string | null>(null)

    return (
        <Container className="py-20 md:py-24">
            {/* Header */}
            <Fade>
                <header className="mb-14">
                    <h1 className="text-[32px] md:text-[44px] font-semibold tracking-[-0.03em]text-[#111] mb-4">
                        Projects
                    </h1>
                    <p className="text-[15px] text-[#6F6F6F] max-w-[48ch] leading-[1.65]">
                        Implementation-focused work. Each project includes context,
                        technical decisions, and outcomes.
                    </p>
                </header>
            </Fade>

            <div className="relative w-full h-[1px] bg-[#E8E7E4] mb-10">
                <div className="absolute left-0 top-0 h-full w-[15%] bg-[#7A1E1E] opacity-70" />
            </div>

            {/* Projects List */}
            <div className="mt-10">
                <div className="border-t border-[#E8E7E4]">
                    {allProjects.map((project, index) => {
                        const isExpanded = expandedId === project.slug

                        return (
                            <Fade key={project.slug} delay={index * 0.5}>
                                <article className="border-b border-[#E8E7E4]">
                                    {/* Project Header - Clickable */}
                                    <button
                                        onClick={() => setExpandedId(isExpanded ? null : project.slug)}
                                        className="w-full py-7 text-left group"
                                        aria-expanded={isExpanded}
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            {/* Left: Index + Content */}
                                            <div className="flex items-start gap-6 flex-1 min-w-0">
                                                {/* Index */}
                                                <span className="text-[11px] font-mono text-[#BFBFBF] pt-1 shrink-0 hidden sm:block">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    {/* Title */}
                                                    <h3 className="text-[18px] md:text-[22px] font-semibold 
                                                                 text-[#1A1A1A] tracking-[-0.02em]
                                                                 group-hover:text-[#6F6F6F] 
                                                                 transition-colors duration-300 mb-1">
                                                        {project.title}
                                                    </h3>

                                                    {/* Meta */}
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <span className="text-[11px] font-mono text-[#9F9F9F] hover:bg-[#1A1A1A] hover:text-[#1A1A1A] transition-colors cursor-help">
                                                            {project.year}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-[#D8D8D8]" />
                                                        <span className="text-[11px] text-[#9F9F9F] uppercase tracking-widest hover:text-[#7A1E1E] transition-colors">
                                                            {project.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right: Toggle */}
                                            <span className={`
    shrink-0 w-8 h-8 flex items-center justify-center
    text-[20px] transition-all duration-500 ease-out-expo
    ${isExpanded ? 'text-[#7A1E1E] rotate-45 scale-125' : 'text-[#9F9F9F]'}
    group-hover:text-[#1A1A1A]
`}>
                                                {isExpanded ? '×' : '+'}
                                            </span>
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    <div className={`
                                        overflow-hidden transition-all duration-500 
                                        ease-out-expo
                                        ${isExpanded ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        <div className="pb-8 pl-0 sm:pl-15.5">
                                            {/* Description */}
                                            <p className="text-[14px] text-[#6F6F6F] leading-[1.7] mb-5 max-w-[55ch]">
                                                {project.description}
                                            </p>

                                            {/* Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.stack.map((tech: string) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 text-[11px] font-mono 
                                                                 text-[#6F6F6F] bg-[#F0F0EE]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-5">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="inline-flex items-center gap-1.5 
                                                             text-[13px] font-medium text-[#1A1A1A] 
                                                             hover:text-[#6F6F6F] 
                                                             transition-colors duration-300 group/link"
                                                >
                                                    <span>View Details</span>
                                                    <span className="transition-transform duration-300 
                                                                  group-hover/link:translate-x-0.5">
                                                        →
                                                    </span>
                                                </Link>

                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 
                                                                 text-[13px] text-[#6F6F6F] 
                                                                 hover:text-[#1A1A1A] 
                                                                 transition-colors duration-300"
                                                    >
                                                        <span>Live</span>
                                                        <span>↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Fade>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}