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
    return { title: `${project.title} — Timothy Evan` }
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
        <Container className="py-16">
            {/* Back */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors duration-150 mb-10"
            >
                ← Back
            </Link>

            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-mono text-[#9F9F9F]">{project.year}</span>
                    <span className="text-[10px] text-[#9F9F9F] uppercase tracking-[0.05em]">{project.role}</span>
                </div>

                <h1 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-[#1A1A1A] font-(family-name:--font-space) mb-5">
                    {project.title}
                </h1>

                <p className="text-[15px] text-[#6F6F6F] leading-relaxed max-w-120 mb-8">
                    {project.objective}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-8 pt-6 border-t border-[#E8E7E4]">
                    <div>
                        <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1.5">
                            Stack
                        </span>
                        <span className="text-[12px] font-mono text-[#6F6F6F]">
                            {project.stack.join(' / ')}
                        </span>
                    </div>

                    {project.liveUrl && (
                        <div>
                            <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1.5">
                                Live
                            </span>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] font-mono text-[#6F6F6F] hover:text-[#8B1E1E] transition-colors duration-150"
                            >
                                View ↗
                            </a>
                        </div>
                    )}
                </div>
            </header>

            <hr className="border-[#E8E7E4] mb-12" />

            {/* Content */}
            <div className="max-w-140 space-y-14">
                <Section title="Context" content={project.context} />
                <Section title="Architecture" content={project.architecture} />
                <Section title="Tradeoffs" content={project.tradeoffs} />
                <Section title="Outcome" content={project.outcome} />
                <Section title="Reflection" content={project.reflection} />
            </div>

            <hr className="border-[#E8E7E4] my-12" />

            {/* Navigation */}
            <nav className="flex justify-between">
                {prev ? (
                    <Link href={`/projects/${prev.slug}`} className="group">
                        <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1">
                            ← Prev
                        </span>
                        <span className="text-[13px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-150">
                            {prev.title}
                        </span>
                    </Link>
                ) : <div />}

                {next ? (
                    <Link href={`/projects/${next.slug}`} className="group text-right">
                        <span className="block text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-1">
                            Next →
                        </span>
                        <span className="text-[13px] text-[#6F6F6F] group-hover:text-[#1A1A1A] transition-colors duration-150">
                            {next.title}
                        </span>
                    </Link>
                ) : <div />}
            </nav>
        </Container>
    )
}

function Section({ title, content }: { title: string; content: string }) {
    return (
        <section>
            <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-4">
                {title}
            </h2>
            {content.split('\n\n').map((p, i) => (
                <p key={i} className="text-[14px] text-[#4A4A4A] leading-[1.8] mb-4 last:mb-0">
                    {p}
                </p>
            ))}
        </section>
    )
}