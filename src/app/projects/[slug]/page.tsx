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
        <Container className="py-16 md:py-20">
            {/* Back Link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[#9F9F9F] 
                         hover:text-[#6F6F6F] transition-colors duration-300 mb-12 group"
            >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                <span>Projects</span>
            </Link>

            {/* Header */}
            <header className="mb-14">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-mono text-[#9F9F9F]">
                        {project.year}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#D8D8D8]" />
                    <span className="text-[11px] text-[#9F9F9F] uppercase tracking-wide">
                        {project.role}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold 
                             tracking-[-0.03em] leading-[1.05] text-[#111] mb-6">
                    {project.title}
                </h1>

                {/* Objective */}
                <p className="text-[16px] md:text-[18px] text-[#6F6F6F] leading-[1.6] max-w-150">
                    {project.objective}
                </p>
            </header>

            {/* Meta Bar */}
            <div className="flex flex-wrap items-start gap-x-12 gap-y-6 py-6 
                          border-y border-[#E8E7E4] mb-14">
                <div>
                    <span className="block text-[10px] font-mono text-[#9F9F9F] 
                                   uppercase tracking-widest mb-2">
                        Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech: string) => (
                            <span key={tech} className="text-[12px] font-mono text-[#4A4A4A]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.liveUrl && (
                    <div>
                        <span className="block text-[10px] font-mono text-[#9F9F9F] 
                                       uppercase tracking-widest mb-2">
                            Live
                        </span>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium 
                                     text-[#1A1A1A] hover:text-[#6F6F6F] 
                                     transition-colors duration-300 group"
                        >
                            <span>View Project</span>
                            <span className="transition-transform duration-300 
                                          group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="grid grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                    <div className="space-y-16">
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

                {/* Sidebar - Section Navigation (Desktop) */}
                <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                    <div className="sticky top-24">
                        <h3 className="text-[10px] font-mono text-[#9F9F9F] 
                                     uppercase tracking-widest mb-4">
                            Sections
                        </h3>
                        <nav className="space-y-2">
                            {['Context', 'Architecture', 'Tradeoffs', 'Outcome', 'Reflection'].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    className="block text-[13px] text-[#9F9F9F] 
                                             hover:text-[#1A1A1A] hover:translate-x-1 
                                             transition-all duration-300"
                                >
                                    {section}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>

            {/* Navigation */}
            <nav className="flex justify-between items-start pt-16 mt-16 border-t border-[#E8E7E4]">
                {prev ? (
                    <Link
                        href={`/projects/${prev.slug}`}
                        className="group max-w-[45%]"
                    >
                        <span className="block text-[10px] font-mono text-[#9F9F9F] 
                                       uppercase tracking-widest mb-2">
                            <span className="inline-block transition-transform duration-300 
                                          group-hover:-translate-x-1">←</span>
                            {' '}Previous
                        </span>
                        <span className="text-[14px] text-[#6F6F6F] 
                                       group-hover:text-[#1A1A1A] transition-colors duration-300">
                            {prev.title}
                        </span>
                    </Link>
                ) : <div />}

                {next ? (
                    <Link
                        href={`/projects/${next.slug}`}
                        className="group text-right max-w-[45%]"
                    >
                        <span className="block text-[10px] font-mono text-[#9F9F9F] 
                                       uppercase tracking-widest mb-2">
                            Next{' '}
                            <span className="inline-block transition-transform duration-300 
                                          group-hover:translate-x-1">→</span>
                        </span>
                        <span className="text-[14px] text-[#6F6F6F] 
                                       group-hover:text-[#1A1A1A] transition-colors duration-300">
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
        <section id={title.toLowerCase()} className="scroll-mt-24">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-5">
                <span className="text-[10px] font-mono text-[#BFBFBF]">
                    {String(index).padStart(2, '0')}
                </span>
                <h2 className="text-[11px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className={highlight ? 'pl-5 border-l-2 border-[#E8E7E4]' : ''}>
                {paragraphs.map((p, i) => (
                    <p
                        key={i}
                        className="text-[15px] text-[#4A4A4A] leading-[1.8] mb-4 last:mb-0 max-w-[65ch]"
                    >
                        {p}
                    </p>
                ))}
            </div>
        </section>
    )
}