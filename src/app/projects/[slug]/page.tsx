// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { getProject, getAllProjects } from '@/lib/projects'
import { cn } from '@/lib/utils' // Import missing 'cn'

interface Project {
    slug: string;
    title: string;
    year: string;
    role: string;
    objective: string;
    stack: string[];
    liveUrl?: string;
    // Add other fields (context, architecture, etc.) if they are used here
}
// Define the Props interface that was missing
interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return getAllProjects().map(p => ({ slug: p.slug }))
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
        <Container className="py-8 md:py-16 lg:py-20 scroll-smooth">
            {/* Back Link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors duration-300 mb-8 md:mb-12 group"
            >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                <span className="uppercase tracking-widest">Index</span>
            </Link>

            {/* Header */}
            <header className="mb-10 md:mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-mono text-[#7A1E1E] uppercase tracking-[0.2em]">
                        Project {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[#E8E7E4]">/</span>
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                        {project.year}
                    </span>
                </div>

                <h1 className="text-[32px] md:text-[56px] font-bold tracking-[-0.04em] leading-[1.1] text-[#1A1A1A] mb-6">
                    {project.title}
                </h1>

                <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-relaxed max-w-[65ch]">
                    {project.objective}
                </p>
            </header>

            {/* Meta Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 border-y border-[#E8E7E4] mb-12 md:mb-20">
                <div className="space-y-3">
                    <span className="block text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.2em]">
                        Technical Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech: string) => (
                            <span key={tech} className="text-[10px] md:text-[11px] font-mono text-[#1A1A1A] border border-[#E8E7E4] px-2 py-1 uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 px-6 py-3 md:p-0 bg-[#1A1A1A] md:bg-transparent text-white md:text-[#1A1A1A] text-[11px] font-mono uppercase tracking-widest hover:opacity-70 transition-all group"
                    >
                        View Live Site
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-6">
                        <div className="h-px bg-[#1A1A1A] w-6" />
                        <nav className="flex flex-col gap-4">
                            {['Context', 'Architecture', 'Tradeoffs', 'Outcome', 'Reflection'].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    className="text-[11px] font-mono uppercase tracking-widest text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors"
                                >
                                    {section}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <div className="lg:col-span-9 max-w-[70ch] space-y-16 md:space-y-24">
                    <Section title="Context" content={project.context} index={1} />
                    <Section title="Architecture" content={project.architecture} index={2} highlight />
                    <Section title="Tradeoffs" content={project.tradeoffs} index={3} />
                    <Section title="Outcome" content={project.outcome} index={4} highlight />
                    <Section title="Reflection" content={project.reflection} index={5} />
                </div>
            </div>

            {/* Footer Navigation */}
            <nav className="grid grid-cols-2 border-t border-[#E8E7E4] mt-20 md:mt-32">
                <PaginationLink project={prev} direction="prev" />
                <PaginationLink project={next} direction="next" />
            </nav>
        </Container>
    )
}

// Fixed 'any' type error by defining a simple Project type
function PaginationLink({
    project,
    direction
}: {
    project: Project | null, // Project can be null if it's the first/last item
    direction: 'prev' | 'next'
}) {
    if (!project) return <div className="border-r border-[#E8E7E4]" />

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={cn(
                "group py-8 md:py-12 px-4 md:px-8 hover:bg-[#F9F9F8] transition-colors flex flex-col gap-2",
                direction === 'prev' ? "border-r border-[#E8E7E4]" : "items-end text-right"
            )}
        >
            <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-[0.2em]">
                {direction === 'prev' ? '← Previous' : 'Next →'}
            </span>
            <span className="text-[14px] md:text-[16px] font-medium text-[#1A1A1A] line-clamp-1">
                {project.title}
            </span>
        </Link>
    )
}

function Section({ title, content, index, highlight }: { title: string, content: string, index: number, highlight?: boolean }) {
    return (
        <section id={title.toLowerCase()} className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-[#7A1E1E] tabular-nums">
                    {String(index).padStart(2, '0')}
                </span>
                <h2 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] font-bold">
                    {title}
                </h2>
            </div>
            <div className={cn(
                "text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.8] space-y-6",
                highlight && "pl-6 border-l border-[#1A1A1A]"
            )}>
                {content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
        </section>
    )
}