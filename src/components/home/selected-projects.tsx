'use client'

import { useState } from 'react'
import { getFeaturedProjects } from '@/lib/projects'
import { Fade, Line } from '@/components/ui/motion'
import { HoverLink } from '@/components/ui/hover-link'

export function SelectedProjects() {
    const projects = getFeaturedProjects()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <section className="py-20">
            <Line />

            {/* Section Header */}
            <Fade delay={0}>
                <div className="flex items-end justify-between mt-12 mb-10">
                    <div className="flex items-baseline gap-6">
                        <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            01
                        </span>
                        <div>
                            <h2 className="text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">
                                Selected Work
                            </h2>
                            <p className="text-[13px] text-[#9F9F9F]">
                                Recent projects and case studies
                            </p>
                        </div>
                    </div>

                    <HoverLink
                        href="/projects"
                        showArrow
                        className="text-[12px] font-medium text-[#6F6F6F] hidden md:flex"
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
                                    className="w-full py-8 text-left group"
                                    aria-expanded={isExpanded}
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        {/* Left: Index + Content */}
                                        <div className="flex items-start gap-6 flex-1">
                                            {/* Index */}
                                            <span className="text-[11px] font-mono text-[#BFBFBF] pt-1.5 shrink-0 hidden sm:block w-6">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            {/* Content */}
                                            <div className="flex-1">
                                                {/* Meta */}
                                                <div className="flex items-center gap-2.5 mb-2">
                                                    <span className="text-[11px] font-mono text-[#9F9F9F]">
                                                        {project.year}
                                                    </span>
                                                    <span className="w-px h-3 bg-[#E8E7E4]" />
                                                    <span className="text-[11px] text-[#9F9F9F] uppercase tracking-wide">
                                                        {project.role}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1A1A1A] tracking-[-0.02em] group-hover:text-[#6F6F6F] transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Toggle */}
                                        <span className={`shrink-0 w-8 h-8 flex items-center justify-center text-[18px] text-[#9F9F9F] font-light transition-all duration-300 ease-out-expo group-hover:text-[#1A1A1A] ${isExpanded ? 'rotate-45' : ''}`}>
                                            +
                                        </span>
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-out-expo ${isExpanded ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-8 pl-0 sm:pl-12">
                                        {/* Description */}
                                        <p className="text-[14px] text-[#6F6F6F] leading-[1.7] mb-5 max-w-[52ch]">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-[11px] font-mono text-[#6F6F6F] bg-[#EEEEEC] rounded-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        <HoverLink
                                            href={`/projects/${project.slug}`}
                                            showArrow
                                            className="text-[13px] font-medium text-[#1A1A1A]"
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
                <div className="mt-8 md:hidden">
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