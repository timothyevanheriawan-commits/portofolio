// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { getProject, getAllProjects } from '@/lib/projects'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return getAllProjects().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) return { title: 'Not Found' }
    return { title: project.title }
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) notFound()

    const all = getAllProjects()
    const idx = all.findIndex(p => p.slug === slug)
    const prev = idx > 0 ? all[idx - 1] : null
    const next = idx < all.length - 1 ? all[idx + 1] : null

    return (
        <Container className="py-8 md:py-16 lg:py-20">
            {/* Back Link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-mono text-[#9F9F9F] hover:text-[#6F6F6F] transition-colors duration-300 mb-8 md:mb-12 group"
            >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                <span>Projects</span>
            </Link>

            {/* Header */}
            <header className="mb-8 md:mb-14">
                {/* Meta */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                    <span className="text-[10px] md:text-[11px] font-mono text-[#9F9F9F]">
                        {project.year}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#D8D8D8]" />
                    <span className="text-[10px] md:text-[11px] text-[#9F9F9F] uppercase tracking-wide">
                        {project.role}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] leading-[1.1] md:leading-[1.05] text-[#111] mb-4 md:mb-6">
                    {project.title}
                </h1>

                {/* Objective */}
                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#6F6F6F] leading-[1.55] md:leading-[1.6] max-w-[600px] lg:max-w-[700px]">
                    {project.objective}
                </p>
            </header>

            {/* Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start gap-4 sm:gap-x-10 sm:gap-y-4 py-5 md:py-6 border-y border-[#E8E7E4] mb-8 md:mb-14">
                <div>
                    <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1.5 md:mb-2">
                        Stack
                    </span>
                    {/* Horizontal scroll on mobile */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.stack.map((tech: string) => (
                            <span key={tech} className="text-[11px] md:text-[12px] font-mono text-[#4A4A4A] bg-[#F0F0EE] px-2 py-0.5 rounded-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.liveUrl && (
                    <div className="sm:ml-auto">
                        <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1.5 md:mb-2">
                            Live
                        </span>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[#1A1A1A] hover:text-[#6F6F6F] transition-colors duration-300 group"
                        >
                            <span>View Project</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Mobile Section Navigation */}
            <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-3 min-w-max pb-2">
                    {['Context', 'Architecture', 'Tradeoffs', 'Outcome', 'Reflection'].map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            className="text-[11px] font-mono text-[#9F9F9F] hover:text-[#1A1A1A] px-3 py-1.5 bg-[#F0F0EE] rounded-sm transition-colors duration-300 whitespace-nowrap"
                        >
                            {section}
                        </a>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 xl:col-span-9">
                    <div className="space-y-10 md:space-y-16">
                        <Section
                            title="Context"
                            content={project.context}
                            index={1}
                        />
                        <Section
                            title="Architecture"
                            content={project.architecture}
                            index={2}
                            highlight
                        />
                        <Section
                            title="Tradeoffs"
                            content={project.tradeoffs}
                            index={3}
                        />
                        <Section
                            title="Outcome"
                            content={project.outcome}
                            index={4}
                            highlight
                        />
                        <Section
                            title="Reflection"
                            content={project.reflection}
                            index={5}
                        />
                    </div>
                </div>

                {/* Sidebar - Desktop Only */}
                <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                    <div className="sticky top-24">
                        <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-4">
                            Sections
                        </h3>
                        <nav className="space-y-2">
                            {['Context', 'Architecture', 'Tradeoffs', 'Outcome', 'Reflection'].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    className="block text-[13px] text-[#9F9F9F] hover:text-[#1A1A1A] hover:translate-x-1 transition-all duration-300"
                                >
                                    {section}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-2 gap-4 pt-10 md:pt-16 mt-10 md:mt-16 border-t border-[#E8E7E4]">
                {prev ? (
                    <Link
                        href={`/projects/${prev.slug}`}
                        className="group"
                    >
                        <span className="block text-[9px] md:text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1 md:mb-2">
                            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
                            {' '}Prev
                        </span>
                        <span className="block text-[13px] md:text-[14px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-300 line-clamp-2">
                            {prev.title}
                        </span>
                    </Link>
                ) : <div />}

                {next ? (
                    <Link
                        href={`/projects/${next.slug}`}
                        className="group text-right"
                    >
                        <span className="block text-[9px] md:text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1 md:mb-2">
                            Next{' '}
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                        <span className="block text-[13px] md:text-[14px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-300 line-clamp-2">
                            {next.title}
                        </span>
                    </Link>
                ) : <div />}
            </nav>
        </Container>
    )
}

function Section({
    title,
    content,
    index,
    highlight = false
}: {
    title: string
    content: string
    index: number
    highlight?: boolean
}) {
    const paragraphs = content.split('\n\n')

    return (
        <section id={title.toLowerCase()} className="scroll-mt-20 md:scroll-mt-24">
            {/* Section Header */}
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                <span className="text-[9px] md:text-[10px] font-mono text-[#BFBFBF]">
                    {String(index).padStart(2, '0')}
                </span>
                <h2 className="text-[10px] md:text-[11px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className={highlight ? 'pl-4 md:pl-5 border-l-2 border-[#E8E7E4]' : ''}>
                {paragraphs.map((p, i) => (
                    <p
                        key={i}
                        className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-[1.7] md:leading-[1.8] mb-3 md:mb-4 last:mb-0"
                    >
                        {p}
                    </p>
                ))}
            </div>
        </section>
    )
}