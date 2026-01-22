// src/components/home/skills-overview.tsx
'use client'

import { Fade, Line } from '@/components/ui/motion'

const skills = [
    {
        category: 'Development',
        description: 'Building production interfaces',
        items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        category: 'Data',
        description: 'Analysis and visualization',
        items: ['Python', 'SQL', 'Pandas', 'Streamlit'],
    },
    {
        category: 'Tools',
        description: 'Workflow and collaboration',
        items: ['Git', 'Figma', 'Vercel', 'VS Code'],
    },
]

export function SkillsOverview() {
    return (
        <section className="py-12 md:py-20">
            <Line />

            <Fade delay={0}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mt-8 md:mt-12 mb-12 md:mb-16">
                    <div className="md:col-span-8 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[10px] tracking-[0.3em]">
                            <span>INDEX</span>
                            <span className="text-[#E8E7E4]">/</span>
                            <span>02</span>
                        </div>
                        <h2 className="text-[12px] font-mono text-[#1A1A1A] uppercase tracking-[0.15em] font-medium">
                            Capabilities
                        </h2>
                    </div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-r border-[#E8E7E4]">
                {/* Category Headers Row */}
                {skills.map((group) => (
                    <div
                        key={`${group.category}-header`}
                        className="md:col-span-4 pt-10 md:pt-12 pb-6 md:pb-10 border-l border-[#E8E7E4] px-6 md:px-12"
                    >
                        <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] mb-3">
                            {group.category}
                        </h3>
                        <p className="text-[13px] text-[#9F9F9F] leading-relaxed max-w-[20ch]">
                            {group.description}
                        </p>
                    </div>
                ))}

                {/* Skills Rows - Fully Boxed */}
                {[0, 1, 2, 3].map((skillIndex) => (
                    <div key={`row-${skillIndex}`} className="contents">
                        {skills.map((group) => (
                            <div
                                key={`${group.category}-${skillIndex}`}
                                className="md:col-span-4 border-t border-l border-[#E8E7E4]"
                            >
                                <div className="flex items-center py-4 px-6 md:px-12 group/item h-full min-h-16">
                                    {/* Fixed-width bullet slot */}
                                    <div className="w-5 shrink-0">
                                        <span className="block w-1.5 h-1.5 rounded-full bg-[#7A1E1E] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 ease-out-expo" />
                                    </div>
                                    <span className="text-[14px] md:text-[15px] text-[#4A4A4A] group-hover/item:text-[#1A1A1A] font-medium transition-colors duration-300">
                                        {group.items[skillIndex]}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Line />
        </section>
    )
}