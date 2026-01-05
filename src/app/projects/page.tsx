'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/container'
import { getAllProjects } from '@/lib/projects'
import { Fade, Line } from '@/components/ui/motion'
import { HoverLink } from '@/components/ui/hover-link'
import { useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

export default function ProjectsPage() {
    const projects = getAllProjects()
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const mounted = useMounted()
    const prefersReducedMotion = useReducedMotion()

    return (
        <Container className="py-16">
            <Fade delay={0}>
                <header className="mb-10">
                    <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#1A1A1A] font-(family-name:--font-space) mb-3">
                        Projects
                    </h1>
                    <p className="text-[14px] text-[#6F6F6F] max-w-[400px]">
                        Work with context, constraints, and outcomes.
                    </p>
                </header>
            </Fade>

            <Line delay={1} />

            <div className="mt-8">
                {projects.map((project, index) => {
                    const isExpanded = expandedIndex === index

                    return (
                        <Fade key={project.slug} delay={index + 2}>
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
                                                <span className="text-[10px] text-[#9F9F9F] uppercase tracking-wide">
                                                    {project.role}
                                                </span>
                                            </div>

                                            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1A1A1A] tracking-tight font-(family-name:--font-space) group-hover:text-[#6F6F6F] transition-colors duration-150">
                                                {project.title}
                                            </h2>
                                        </div>

                                        <motion.span
                                            className="text-[14px] text-[#9F9F9F] group-hover:text-[#8B1E1E] transition-colors duration-150 mt-2"
                                            animate={mounted && !prefersReducedMotion ? { rotate: isExpanded ? 45 : 0 } : {}}
                                            transition={{ duration: 0.15 }}
                                        >
                                            +
                                        </motion.span>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 space-y-4">
                                                <p className="text-[14px] text-[#6F6F6F] leading-relaxed max-w-[520px]">
                                                    {project.description}
                                                </p>

                                                <div className="flex items-center gap-2 pt-1">
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
        </Container>
    )
}