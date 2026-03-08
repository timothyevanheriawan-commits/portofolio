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
                    <div className="md:col-span-8 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-[#7A1E1E] font-mono text-[11px] tracking-[0.4em] font-medium">
                            <span>INDEX</span>
                            <span className="text-[#E8E7E4]">/</span>
                            <span>02</span>
                        </div>
                        <h2 className="text-[14px] md:text-[16px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] font-medium">
                            Capabilities
                        </h2>
                    </div>
                </div>
            </Fade>

            {/* Grid Container: Added mobile bottom border since right-border won't wrap correctly */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-r border-[#E8E7E4]">
                {skills.map((group) => (
                    <div key={group.category} className="contents">
                        {/* Category Header - Spans full width on mobile, 4 cols on desktop */}
                        <div className="col-span-1 md:col-span-4 pt-10 pb-6 border-l border-[#E8E7E4] px-6 md:px-12 bg-[#F7F7F5]/50 flex flex-col justify-between">
                            <div>
                                <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] mb-2 font-medium">
                                    {group.category}
                                </h3>
                                <p className="text-[12px] text-[#6F6F6F] leading-relaxed">
                                    {group.description}
                                </p>
                            </div>
                            <div className="hidden md:block h-px w-8 bg-[#E8E7E4] mt-8" />
                        </div>

                        {/* Mobile-Only Items */}
                        <div className="md:hidden col-span-1">
                            {group.items.map((item) => (
                                <div key={item} className="border-t border-l border-[#E8E7E4] py-4 px-6 flex items-center gap-3 active:bg-[#F9F9F8]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#7A1E1E]/20" />
                                    <span className="text-[13px] font-medium text-[#4A4A4A]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Desktop-Only Skills Rows */}
                <div className="hidden md:contents">
                    {[0, 1, 2, 3].map((skillIndex) => (
                        <div key={`row-${skillIndex}`} className="contents">
                            {skills.map((group) => (
                                <div key={`${group.category}-${skillIndex}`} className="md:col-span-4 border-t border-l border-[#E8E7E4]">
                                    <div className="flex items-center py-4 px-12 group/item h-full min-h-16 hover:bg-[#F9F9F8] transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full border-b border-transparent group-hover/item:border-[#E8E7E4]/50 pointer-events-none" />
                                        <div className="w-5 shrink-0 relative">
                                            <span className="block w-1.5 h-1.5 rounded-full bg-[#7A1E1E] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 shadow-[0_0_8px_rgba(122,30,30,0.4)]" />
                                        </div>
                                        <span className="text-[14px] md:text-[15px] text-[#4A4A4A] group-hover/item:text-[#1A1A1A] group-hover/item:translate-x-1 font-medium transition-all duration-500">
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