'use client'

import { Fade, Line } from '@/components/ui/motion'

const skills = [
    {
        category: 'Development',
        items: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
    },
    {
        category: 'Data',
        items: ['Python', 'SQL', 'Pandas', 'Streamlit'],
    },
    {
        category: 'Tools',
        items: ['Git', 'Figma', 'Vercel'],
    },
]

export function SkillsOverview() {
    return (
        <section className="py-16">
            <Line />

            <Fade delay={0}>
                <div className="flex items-baseline gap-6 mt-12 mb-10">
                    <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                        02
                    </span>
                    <h2 className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        Capabilities
                    </h2>
                </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {skills.map((group, groupIndex) => (
                    <Fade key={group.category} delay={groupIndex * 0.08}>
                        <div>
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-5">
                                {group.category}
                            </h3>
                            <ul className="space-y-2.5">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="text-[14px] text-[#2A2A2A] transition-colors duration-150 hover:text-[#000000]"
                                    >
                                        {item}
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