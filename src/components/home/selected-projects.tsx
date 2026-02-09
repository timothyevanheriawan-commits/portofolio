'use client'

import { useState } from 'react'
import { getFeaturedProjects } from '@/lib/projects'
import { Fade, Line, Expand } from '@/components/ui/motion'
import { HoverLink } from '@/components/ui/hover-link'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function SelectedProjects() {
    const projects = getFeaturedProjects()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <section className="py-12 md:py-20">
            <Line />

            {/* Section Header */}
            <Fade delay={0}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8 md:mt-12 mb-12">
                    <div className="md:col-span-8 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[10px] tracking-[0.3em]">
                            <span>INDEX</span>
                            <span className="text-[#E8E7E4]">/</span>
                            <span>01</span>
                        </div>
                        <h2 className="text-[12px] font-mono text-[#1A1A1A] uppercase tracking-[0.15em] font-medium">
                            Selected Work
                        </h2>
                    </div>

                    {/* Archive Link - Visible on Desktop, stacks on mobile if needed but hidden here for clean header */}
                    <div className="hidden md:flex md:col-span-4 justify-end items-end pb-1">
                        <HoverLink
                            href="/projects"
                            className="text-[10px] font-mono uppercase tracking-widest text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors"
                        >
                            View Archive index —&gt;
                        </HoverLink>
                    </div>
                </div>
            </Fade>

            {/* Projects List */}
            <div className="border-t border-[#E8E7E4]">
                {projects.map((project, index) => {
                    const isExpanded = expandedIndex === index

                    return (
                        <Fade key={project.slug} delay={index * 0.1}>
                            <article className="border-b border-[#E8E7E4] group">
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                    aria-expanded={isExpanded}
                                    aria-controls={`project-details-${project.slug}`}
                                    className="w-full py-6 md:py-10 text-left active:bg-[#F9F9F8] transition-colors"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                                        {/* Left: Metadata & Title */}
                                        <div className="md:col-span-8 flex items-baseline gap-4 md:gap-6 min-w-0">
                                            <span className={cn(
                                                "hidden sm:block text-[10px] font-mono tabular-nums transition-colors duration-500",
                                                isExpanded ? "text-[#7A1E1E]" : "text-[#BFBFBF]"
                                            )}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase">{project.year}</span>
                                                    <span className="w-1 h-px bg-[#E8E7E4]" />
                                                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-wider truncate">{project.role}</span>
                                                </div>
                                                <h3 className="text-[20px] md:text-[32px] font-bold tracking-[-0.03em] text-[#1A1A1A] group-hover:translate-x-1 transition-transform duration-500 leading-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Right: Interaction State (Desktop Only) */}
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

                                {/* Expanded Content */}
                                <Expand isOpen={isExpanded} id={`project-details-${project.slug}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 pb-10">
                                        <div className="md:col-span-8 sm:pl-10 md:pl-12">
                                            <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-[1.6] max-w-[48ch] mb-8">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 md:mb-0">
                                                {project.stack.map((tech) => (
                                                    <div key={tech} className="flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-[#7A1E1E]" />
                                                        <span className="text-[10px] font-mono text-[#1A1A1A] uppercase tracking-wider">{tech}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Mobile CTA: Visible only on small screens */}
                                            <div className="md:hidden pt-8 border-t border-[#E8E7E4] mt-4">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7A1E1E] flex justify-between items-center"
                                                >
                                                    Full Case Study <span>→</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Desktop CTA: Visible only on large screens */}
                                        <div className="hidden md:flex md:flex-col md:justify-between md:col-span-4 border-l border-[#E8E7E4] pl-12 py-1">
                                            <div className="flex flex-col gap-6">
                                                {/* Internal Case Study Link */}
                                                <HoverLink
                                                    href={`/projects/${project.slug}`}
                                                    showArrow
                                                    className="text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A]"
                                                >
                                                    Full Case Study
                                                </HoverLink>

                                                {/* Live Site External Link */}
                                                {project.liveUrl && project.liveUrl.startsWith('http') && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#7A1E1E] transition-colors hover:text-[#1A1A1A]"
                                                    >
                                                        <span>Live Site</span>
                                                        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
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

            {/* Mobile Bottom Link */}
            <div className="mt-12 md:hidden">
                <Link
                    href="/projects"
                    className="text-[10px] font-mono uppercase tracking-widest text-[#9F9F9F] flex items-center justify-center gap-2"
                >
                    View Archive index <span>→</span>
                </Link>
            </div>
        </section>
    )
}