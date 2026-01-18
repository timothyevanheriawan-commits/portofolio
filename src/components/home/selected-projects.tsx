'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { getFeaturedProjects } from '@/lib/projects'
import { Fade } from '@/components/ui/motion'
import { HoverLink } from '@/components/ui/hover-link'
import { useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

export function SelectedProjects() {
    const projects = getFeaturedProjects()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-16">
            {/* Section header */}
            <Fade delay={0}>
                <div className="flex items-baseline justify-between mb-8">
                    <div className="flex items-baseline gap-6">
                        <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            01
                        </span>
                        <h2 className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                            Selected Work
                        </h2>
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

            {/* Projects list */}
            <div className="border-t border-[#E8E7E4]">
                {projects.map((project, index) => {
                    const isExpanded = expandedIndex === index

                    return (
                        <Fade key={project.slug} delay={index + 1}>
                            <article className="border-b border-[#E8E7E4]">
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                    className="w-full py-6 text-left group"
                                    aria-expanded={isExpanded ? 'true' : 'false'}
                                >
                                    <div className="flex items-start justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-[10px] font-mono text-[#9F9F9F]">
                                                    0{index + 1}
                                                </span>
                                                <span className="text-[10px] font-mono text-[#9F9F9F]">
                                                    {project.year}
                                                </span>
                                            </div>

                                            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1A1A1A] tracking-tight font-(family-name:--font-space) group-hover:text-[#6F6F6F] transition-colors duration-200">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <motion.span
                                            className="text-[14px] text-[#9F9F9F] group-hover:text-[#8B1E1E] transition-colors duration-200 mt-2"
                                            animate={mounted && !prefersReducedMotion ? { rotate: isExpanded ? 45 : 0 } : {}}
                                            transition={{ duration: 0.2 }}
                                        >
                                            +
                                        </motion.span>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 space-y-4">
                                                <p className="text-[14px] text-[#6F6F6F] leading-relaxed max-w-130">
                                                    {project.description}
                                                </p>

                                                <div className="flex items-center gap-2 pt-2">
                                                    {project.stack.map((tech, i) => (
                                                        <span key={tech} className="flex items-center gap-2">
                                                            <span className="text-[11px] font-mono text-[#9F9F9F]">
                                                                {tech}
                                                            </span>
                                                            {i < project.stack.length - 1 && (
                                                                <span className="text-[#D8D7D4]">/</span>
                                                            )}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="pt-2">
                                                    <HoverLink
                                                        href={`/projects/${project.slug}`}
                                                        showArrow
                                                        className="text-[13px] font-medium text-[#1A1A1A]"
                                                    >
                                                        View Details
                                                    </HoverLink>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        </Fade>
                    )
                })}
            </div>

            {/* Mobile link */}
            <Fade delay={projects.length + 1}>
                <div className="mt-6 md:hidden">
                    <HoverLink href="/projects" showArrow className="text-[13px] font-medium text-[#6F6F6F]">
                        All Projects
                    </HoverLink>
                </div>
            </Fade>
        </section>
    )
}