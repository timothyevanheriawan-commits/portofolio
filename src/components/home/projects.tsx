'use client'

import { motion, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { Fade } from '@/components/ui/motion'
import { Container } from '@/components/layout/container'
import { getFeaturedProjects } from '@/lib/projects'

export function Projects() {
    const projects = getFeaturedProjects()
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-24">
            <Container>
                {/* Section label */}
                <Fade>
                    <div className="flex items-baseline gap-6 mb-12">
                        <span className="text-[11px] font-mono text-[#4A4A4A]">01</span>
                        <h2 className="text-[12px] font-medium text-[#6A6A6A] uppercase tracking-[0.08em]">
                            Selected Work
                        </h2>
                    </div>
                </Fade>

                {/* Projects list */}
                <div>
                    {projects.map((project, index) => (
                        <Fade key={project.slug} delay={index * 0.1}>
                            <NextLink
                                href={`/projects/${project.slug}`}
                                className="block group"
                            >
                                <motion.article
                                    className="py-8 border-b border-[#1A1A1A]"
                                    whileHover={prefersReducedMotion ? {} : { x: 4 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    {/* Top row — meta */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-[11px] font-mono text-[#4A4A4A]">
                                            0{index + 1}
                                        </span>
                                        <span className="text-[11px] font-mono text-[#4A4A4A]">
                                            {project.year}
                                        </span>
                                        <span className="text-[11px] text-[#4A4A4A] uppercase tracking-[0.05em]">
                                            {project.role}
                                        </span>
                                    </div>

                                    {/* Title row */}
                                    <div className="flex items-baseline justify-between gap-8">
                                        <h3 className="text-[24px] md:text-[28px] font-medium text-[#E8E8E8] tracking-tight group-hover:text-[#8C8C8C] transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Arrow — appears on hover */}
                                        <motion.span
                                            className="text-[14px] text-[#4A4A4A] opacity-0 group-hover:opacity-100 group-hover:text-[#8B1E1E] transition-all duration-300"
                                            initial={{ x: -4 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            →
                                        </motion.span>
                                    </div>

                                    {/* Stack — mono, system voice */}
                                    <div className="mt-4 flex items-center gap-2">
                                        {project.stack.slice(0, 4).map((tech, i) => (
                                            <span key={tech} className="flex items-center gap-2">
                                                <span className="text-[11px] font-mono text-[#4A4A4A]">
                                                    {tech}
                                                </span>
                                                {i < Math.min(project.stack.length, 4) - 1 && (
                                                    <span className="text-[#2A2A2A]">/</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </motion.article>
                            </NextLink>
                        </Fade>
                    ))}
                </div>

                {/* View all link */}
                <Fade delay={0.4}>
                    <div className="mt-8">
                        <NextLink
                            href="/projects"
                            className="inline-flex items-center gap-2 text-[12px] font-medium text-[#6A6A6A] uppercase tracking-[0.08em] hover:text-[#E8E8E8] transition-colors duration-300 group"
                        >
                            <span>All Projects</span>
                            <motion.span
                                className="group-hover:text-[#8B1E1E] transition-colors duration-300"
                                whileHover={{ x: 2 }}
                            >
                                →
                            </motion.span>
                        </NextLink>
                    </div>
                </Fade>
            </Container>
        </section>
    )
}