import { ProjectCard } from './project-card'
import type { Project } from '@/lib/types'

interface ProjectListProps {
    projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="flex flex-col gap-3">
            {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    )
}