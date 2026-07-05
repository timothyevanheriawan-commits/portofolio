'use client'

import { useCallback, useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/lib/projects'
import { Fade, Expand } from '@/components/ui/motion'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

function ProjectsContent() {
    const allProjects = getAllProjects()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    // Sync expandedId with ?open= query param — Back nav restores state
    const expandedId = searchParams.get('open')

    const setExpandedId = useCallback((slug: string | null) => {
        const params = new URLSearchParams(searchParams.toString())
        if (slug) params.set('open', slug)
        else params.delete('open')
        router.replace(`?${params.toString()}`, { scroll: false })
    }, [router, searchParams])

    return (
        <Container className="py-20 md:py-24">

            {/* Header */}
            <Fade>
                <header className="mb-14">
                    <h1 className="text-[32px] md:text-[44px] font-semibold tracking-[-0.03em] text-[#1A1A1A] mb-4"
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
                    
                    return (
                      <Fade key={project.slug} delay={index * 0.06}>
                        <article
                          className="border-b border-[#E8E7E4] group relative"
                          onMouseEnter={() => setHoveredId(project.slug)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 right-0 h-px bg-[#7A1E1E] transition-opacity duration-300",
                              isExpanded ? "opacity-100" : "opacity-0",
                            )}
                          />

                          <div className="relative z-10">
                            <button
                              onClick={() =>
                                setExpandedId(isExpanded ? null : project.slug)
                              }
                              aria-expanded={isExpanded}
                              aria-controls={`project-details-${project.slug}`}
                              className="w-full py-6 md:py-9 text-left"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                                <div className="md:col-span-8 flex items-baseline gap-4 md:gap-8">
                                  <span
                                    className={cn(
                                      "hidden sm:block text-[11px] font-mono tabular-nums transition-colors duration-300",
                                      isExpanded
                                        ? "text-[#7A1E1E]"
                                        : "text-[#BFBFBF] group-hover:text-[#6F6F6F]",
                                    )}
                                  >
                                    {String(index + 1).padStart(2, "0")}
                                  </span>

                                  {/* ... inside the map function ... */}
                                  <div className="flex-1 min-w-0">
                                    {" "}
                                    {/* min-w-0 is crucial for flex children to allow shrinking */}
                                    {/* Metadata Row: Added wrap and overflow hidden */}
                                    <div className="flex flex-wrap items-center gap-x-2 md:gap-x-3 mb-3 md:mb-2 overflow-hidden">
                                      <span className="shrink-0 text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest tabular-nums">
                                        {project.year}
                                      </span>

                                      <span className="shrink-0 text-[#7A1E1E] text-[9px] font-mono leading-none">
                                        —
                                      </span>

                                      {/* Role: Allow truncation if it's too long on mobile */}
                                      <span className="truncate text-[9px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                                        {project.role
                                          .replace(/\s*\(.*?\)/, "")
                                          .replace("&", "+")}
                                      </span>

                                      <span className="shrink-0 text-[#E8E7E4] text-[9px] font-mono leading-none">
                                        ·
                                      </span>

                                      {/* Stack: Limit to first 2 items and prevent overflow */}
                                      <span className="truncate text-[9px] font-mono text-[#BFBFBF] uppercase tracking-wider">
                                        {project.stack.slice(0, 2).join(" · ")}
                                      </span>
                                    </div>
                                    {/* Title: Ensure break-words for long titles on small screens */}
                                    <h2
                                      className={cn(
                                        "text-[24px] md:text-[36px] font-semibold tracking-[-0.03em] text-[#1A1A1A] transition-all duration-500 leading-tight wrap-break-word",
                                        !isExpanded &&
                                          "group-hover:translate-x-2",
                                      )}
                                    >
                                      {project.title}
                                    </h2>
                                  </div>
                                </div>

                                {/* Toggle — visible on ALL breakpoints */}
                                <div className="md:col-span-4 h-full flex items-center justify-end pr-2 mt-3 md:mt-0">
                                  <div className="flex items-center gap-3">
                                    <span
                                      className={cn(
                                        "text-[9px] font-mono uppercase tracking-widest transition-all duration-300",
                                        isExpanded
                                          ? "text-[#7A1E1E]"
                                          : "text-[#BFBFBF] group-hover:text-[#6F6F6F]",
                                      )}
                                    >
                                      {isExpanded ? "Close" : "Details"}
                                    </span>
                                    <div className="relative w-4 h-4 flex items-center justify-center">
                                      <span
                                        className={cn(
                                          "absolute block h-px w-4 bg-current transition-all duration-300",
                                          isExpanded
                                            ? "text-[#7A1E1E] rotate-45"
                                            : "text-[#BFBFBF] group-hover:text-[#6F6F6F]",
                                        )}
                                      />
                                      <span
                                        className={cn(
                                          "absolute block h-px bg-current transition-all duration-300",
                                          isExpanded
                                            ? "text-[#7A1E1E] w-4 -rotate-45"
                                            : "text-[#BFBFBF] group-hover:text-[#6F6F6F] w-4 rotate-90",
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>

                            <Expand
                              isOpen={isExpanded}
                              id={`project-details-${project.slug}`}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 pb-10">
                                <div className="md:col-span-8 md:pl-12">
                                  <p className="text-[15px] text-[#4A4A4A] leading-[1.65] max-w-[48ch] mb-8">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                                    {project.stack.map((tech: string) => (
                                      <span
                                        key={tech}
                                        className="text-[9px] font-mono uppercase tracking-wider text-[#4A4A4A] border border-[#E8E7E4] px-2.5 py-1"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="flex gap-4 border-t border-[#E8E7E4] pt-6 mt-6 md:hidden">
                                    <Link
                                      href={`/projects/${project.slug}`}
                                      className="text-[11px] font-mono uppercase tracking-widest text-[#7A1E1E] flex items-center gap-2"
                                    >
                                      Case Study <span>→</span>
                                    </Link>
                                  </div>
                                </div>

                                <div className="hidden md:flex flex-col gap-5 md:col-span-4 border-l border-[#E8E7E4] pl-10">
                                  <Link
                                    href={`/projects/${project.slug}`}
                                    className="group/cta inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A] hover:text-[#7A1E1E] transition-colors"
                                  >
                                    Full Case Study
                                    <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                                      →
                                    </span>
                                  </Link>
                                  {project.liveUrl?.startsWith("http") && (
                                    <a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group/cta inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors"
                                    >
                                      Live Site
                                      <span className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5">
                                        ↗
                                      </span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </Expand>
                          </div>
                        </article>
                      </Fade>
                    );
                })}
            </div>
        </Container>
    )
}

export default function ProjectsPage() {
    return (
      <Suspense
        fallback={
          <Container className="py-20 md:py-24">
            <div className="animate-pulse">
              <div className="h-12 w-32 bg-[#E8E7E4] mb-4" />
              <div className="h-4 w-64 bg-[#E8E7E4] mb-14" />
              <div className="border-t border-[#E8E7E4]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 border-b border-[#E8E7E4] py-6">
                    <div className="h-6 w-2/3 bg-[#F0F0EE]" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        }
      >
        <ProjectsContent />
      </Suspense>
    );
}
