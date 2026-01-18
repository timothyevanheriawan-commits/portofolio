import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card as="article" className="p-0">
            <Link
                href={`/projects/${project.slug}`}
                className="group block no-underline text-inherit p-4 focus:outline-none"
            >
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-h3 font-semibold mb-0">
                        {project.title}
                    </h3>
                    <span className="font-mono text-meta text-text-secondary">
                        {project.year}
                    </span>
                </div>

                <p className="text-text-secondary mb-3 max-w-none">
                    {project.description}
                </p>

                <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-2 flex-wrap">
                        {project.stack.slice(0, 4).map((tech: string, index: number) => (
                            <span key={tech} className="font-mono text-meta text-text-secondary">
                                {tech}
                                {index < Math.min(project.stack.length, 4) - 1 && (
                                    <span className="ml-2 text-text-secondary">·</span>
                                )}
                            </span>
                        ))}
                    </div>

                    <span
                        className={cn(
                            "font-mono text-meta text-text-secondary",
                            "transition-transform duration-base ease-out",
                            "group-hover:translate-x-0.5"
                        )}
                        aria-hidden="true"
                    >
                        →
                    </span>
                </div>
            </Link>
        </Card>
    );
}