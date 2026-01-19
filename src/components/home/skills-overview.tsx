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
                <div className="flex items-baseline gap-4 md:gap-6 mt-8 md:mt-14 mb-8 md:mb-12">
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                        02
                    </span>
                    <div>
                        <h2 className="text-[13px] md:text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide mb-0.5 md:mb-1">
                            Capabilities
                        </h2>
                        <p className="text-[12px] md:text-[13px] text-[#9F9F9F]">
                            Technical skills and tools
                        </p>
                    </div>
                </div>
            </Fade>

            {/* Skills Grid - 1 col mobile, 3 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px md:bg-[#E8E7E4]">
                {skills.map((group, groupIndex) => (
                    <Fade key={group.category} delay={groupIndex + 1}>
                        <div className="bg-[#F7F7F5] p-5 md:p-8 border border-[#E8E7E4] md:border-0 group hover:bg-[#FAFAF9] transition-colors duration-500">
                            {/* Category Header */}
                            <div className="mb-4 md:mb-6">
                                <h3 className="text-[10px] md:text-[11px] font-mono text-[#6F6F6F] uppercase tracking-[0.08em] md:tracking-widest mb-1 md:mb-2 group-hover:text-[#1A1A1A] transition-colors duration-300">
                                    {group.category}
                                </h3>
                                <p className="text-[11px] md:text-[12px] text-[#9F9F9F]">
                                    {group.description}
                                </p>
                            </div>

                            {/* Skills List - horizontal on mobile */}
                            <div className="flex flex-wrap gap-2 md:block md:space-y-3">
                                {group.items.map((item, itemIndex) => (
                                    <span
                                        key={item}
                                        className="inline-flex md:flex items-center gap-2 md:gap-3 group/item px-2 py-1 md:p-0 bg-[#EEEEEC] md:bg-transparent rounded-sm md:rounded-none"
                                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                                    >
                                        <span className="hidden md:block w-1 h-1 rounded-full bg-[#D8D8D8] group-hover/item:bg-[#1A1A1A] transition-colors duration-300" />
                                        <span className="text-[12px] md:text-[14px] text-[#4A4A4A] group-hover/item:text-[#1A1A1A] transition-colors duration-300">
                                            {item}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}