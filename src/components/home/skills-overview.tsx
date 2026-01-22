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

            {/* Grid Container: Added mobile bottom border since right-border won't wrap correctly */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-r border-[#E8E7E4]">
                {skills.map((group, groupIndex) => (
                    <div key={group.category} className="contents">
                        {/* Category Header - Spans full width on mobile, 4 cols on desktop */}
                        <div className="col-span-1 md:col-span-4 pt-10 pb-6 border-l border-[#E8E7E4] px-6 md:px-12 bg-[#F7F7F5]/50">
                            <h3 className="text-[10px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] mb-2">
                                {group.category}
                            </h3>
                            <p className="text-[12px] text-[#9F9F9F] leading-relaxed">
                                {group.description}
                            </p>
                        </div>

                        {/* Mobile-Only Items: Stacks items immediately under their category */}
                        <div className="md:hidden col-span-1">
                            {group.items.map((item) => (
                                <div key={item} className="border-t border-l border-[#E8E7E4] py-4 px-6 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#7A1E1E]/20" />
                                    <span className="text-[13px] font-medium text-[#4A4A4A]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Desktop-Only Skills Rows: Forces perfect horizontal alignment across columns */}
                <div className="hidden md:contents">
                    {[0, 1, 2, 3].map((skillIndex) => (
                        <div key={`row-${skillIndex}`} className="contents">
                            {skills.map((group) => (
                                <div key={`${group.category}-${skillIndex}`} className="md:col-span-4 border-t border-l border-[#E8E7E4]">
                                    <div className="flex items-center py-4 px-12 group/item h-full min-h-16">
                                        <div className="w-5 shrink-0">
                                            <span className="block w-1.5 h-1.5 rounded-full bg-[#7A1E1E] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500" />
                                        </div>
                                        <span className="text-[15px] text-[#4A4A4A] group-hover/item:text-[#1A1A1A] font-medium transition-colors">
                                            {group.items[skillIndex]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Line />
        </section>
    )
}