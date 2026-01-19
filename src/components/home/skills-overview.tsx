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
        <section className="py-20">
            <Line />

            <Fade delay={0}>
                <div className="flex items-baseline gap-6 mt-14 mb-12">
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                        02
                    </span>
                    <div>
                        <h2 className="text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">
                            Capabilities
                        </h2>
                        <p className="text-[13px] text-[#9F9F9F]">
                            Technical skills and tools
                        </p>
                    </div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E7E4]">
                {skills.map((group, groupIndex) => (
                    <Fade key={group.category} delay={groupIndex + 1}>
                        <div className="bg-[#F7F7F5] p-8 group hover:bg-[#FAFAF9] transition-colors duration-500">
                            {/* Category Header */}
                            <div className="mb-6">
                                <h3 className="text-[11px] font-mono text-[#6F6F6F] uppercase tracking-widest mb-2 group-hover:text-[#1A1A1A] transition-colors duration-300">
                                    {group.category}
                                </h3>
                                <p className="text-[12px] text-[#9F9F9F]">
                                    {group.description}
                                </p>
                            </div>

                            {/* Skills List */}
                            <ul className="space-y-3">
                                {group.items.map((item, itemIndex) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 group/item"
                                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#D8D8D8] group-hover/item:bg-[#1A1A1A] transition-colors duration-300" />
                                        <span className="text-[14px] text-[#4A4A4A] group-hover/item:text-[#1A1A1A] transition-colors duration-300">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}