'use client'

import { useState } from 'react'
import { getFeaturedProjects } from '@/lib/projects'
import { Fade, Line } from '@/components/ui/motion'
import { HoverLink } from '@/components/ui/hover-link'

export function SelectedProjects() {
    const projects = getFeaturedProjects()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <section className="py-12 md:py-20">
            <Line />

            {/* Section Header */}
            <Fade delay={0}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-8 md:mt-12 mb-8 md:mb-10">
                    <div className="flex items-baseline gap-4 md:gap-6">
                        <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            01
                        </span>
                        <div>
                            <h2 className="text-[13px] md:text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide mb-0.5 md:mb-1">
                                Selected Work
                            </h2>
                            <p className="text-[12px] md:text-[13px] text-[#9F9F9F]">
                                Recent projects and case studies
                            </p>
                        </div>
                    </div>

                    <HoverLink
                        href="/projects"
                        showArrow
                        className="text-[12px] font-medium text-[#6F6F6F] hidden sm:flex"
                    >
                        All Projects
                    </HoverLink>
                </div>
            </Fade>

            {/* Projects List */}
            <div className="border-t border-[#E8E7E4]">
                {projects.map((project, index) => {
                    const isExpanded = expandedIndex === index

                    return (
                        <Fade key={project.slug} delay={(index + 1) * 0.5}>
                            <article className="border-b border-[#E8E7E4]">
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                    className="w-full py-5 md:py-8 text-left group"
                                    aria-expanded={isExpanded}
                                >
                                    <div className="flex items-start justify-between gap-4 md:gap-6">
                                        {/* Left: Content */}
                                        <div className="flex items-start gap-3 md:gap-6 flex-1 min-w-0">
                                            {/* Index - hidden on smallest screens */}
                                            <span className={`hidden sm:block text-[11px] font-mono pt-1 md:pt-1.5 shrink-0 w-5 md:w-6 transition-colors duration-300 
    ${isExpanded ? 'text-[#7A1E1E]' : 'text-[#BFBFBF]'}`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                {/* Meta */}
                                                <div className="flex items-center gap-2 md:gap-2.5 mb-1.5 md:mb-2">
                                                    <span className="text-[10px] md:text-[11px] font-mono text-[#9F9F9F]">
                                                        {project.year}
                                                    </span>
                                                    <span className="w-px h-2.5 md:h-3 bg-[#E8E7E4]" />
                                                    <span className="text-[10px] md:text-[11px] text-[#9F9F9F] uppercase tracking-wide truncate">
                                                        {project.role}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-[17px] sm:text-[20px] md:text-[24px] font-semibold text-[#1A1A1A] tracking-[-0.01em] md:tracking-[-0.02em] group-hover:text-[#6F6F6F] transition-colors duration-300 line-clamp-2 sm:line-clamp-none">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Toggle */}
                                        <span className={`shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[16px] md:text-[18px] text-[#9F9F9F] font-light transition-all duration-300 ease-out-expo group-hover:text-[#1A1A1A] ${isExpanded ? 'rotate-45' : ''}`}>
                                            +
                                        </span>
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-out-expo ${isExpanded ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-6 md:pb-8 pl-0 sm:pl-8 md:pl-12">
                                        {/* Description */}
                                        <p className="text-[13px] md:text-[14px] text-[#6F6F6F] leading-[1.6] md:leading-[1.7] mb-4 md:mb-5 max-w-[52ch]">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack - scrollable on mobile */}
                                        <div className="flex flex-wrap gap-1.5 mb-5 md:mb-6">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-[10px] md:text-[11px] font-mono text-[#6F6F6F] bg-[#EEEEEC] rounded-sm whitespace-nowrap"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        <HoverLink
                                            href={`/projects/${project.slug}`}
                                            showArrow
                                            className="text-[12px] md:text-[13px] font-medium text-[#1A1A1A]"
                                        >
                                            View Details
                                        </HoverLink>
                                    </div>
                                </div>
                            </article>
                        </Fade>
                    )
                })}
            </div>

            {/* Mobile Link */}
            <Fade delay={projects.length + 1}>
                <div className="mt-6 sm:hidden">
                    <HoverLink
                        href="/projects"
                        showArrow
                        className="text-[13px] font-medium text-[#6F6F6F]"
                    >
                        View All Projects
                    </HoverLink>
                </div>
            </Fade>
        </section>
    )
}