'use client'

import { Fade } from '@/components/ui/motion'
import { Container } from '@/components/layout/container'

const capabilities = [
    {
        category: 'Development',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        category: 'Data',
        items: ['Python', 'SQL', 'Pandas', 'Visualization'],
    },
    {
        category: 'Design',
        items: ['Systems', 'Typography', 'Layout', 'Interaction'],
    },
]

export function Capabilities() {
    return (
        <section className="py-24 bg-[#0A0A0C]">
            <Container>

                {/* Section label */}
                <Fade>
                    <div className="flex items-baseline gap-6 mb-16">
                        <span className="text-[11px] font-mono text-[#4A4A4A]">02</span>
                        <h2 className="text-[12px] font-medium text-[#6A6A6A] uppercase tracking-[0.08em]">
                            Capabilities
                        </h2>
                    </div>
                </Fade>

                {/* Grid — asymmetric spacing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {capabilities.map((group, groupIndex) => (
                        <Fade key={group.category} delay={groupIndex * 0.15}>
                            <div>
                                {/* Category label */}
                                <h3 className="text-[11px] font-mono text-[#4A4A4A] uppercase tracking-widest mb-6">
                                    {group.category}
                                </h3>

                                {/* Items */}
                                <ul className="space-y-3">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-[15px] text-[#8C8C8C] hover:text-[#E8E8E8] transition-colors duration-300 cursor-default"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    ))}
                </div>

            </Container>
        </section>
    )
}