import Link from 'next/link'
import { Card } from '@/components/ui/card'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card as="article">
            <Link
                href={`/projects/${project.slug}`}
                className="block no-underline text-inherit"
            >
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-h3 font-semibold mb-0">{project.title}</h3>
                    <span className="font-mono text-meta text-text-secondary">
                        {project.year}
                    </span>
                </div>

                <p className="text-text-secondary mb-3 max-w-none">
                    {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                    {project.stack.slice(0, 4).map((tech: string, index: number) => (
                        <span key={tech}>
                            <span className="font-mono text-meta text-text-secondary">
                                {tech}
                            </span>
                            {index < Math.min(project.stack.length, 4) - 1 && (
                                <span className="font-mono text-meta text-text-secondary ml-2">
                                    ·
                                </span>
                            )}
                        </span>
                    ))}
                </div>
            </Link>
        </Card>
    )
}