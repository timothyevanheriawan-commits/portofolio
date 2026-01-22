import { Container } from '@/components/layout/container'
import { Fade, Line } from '@/components/ui/motion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
}

export default function AboutPage() {
    return (
        <Container className="py-16 md:py-24">
            <header className="mb-12 md:mb-16">
                <Fade delay={0}>
                    <h1 className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] text-[#1A1A1A]">
                        About
                    </h1>
                </Fade>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Main Content Area */}
                <div className="lg:col-span-8 lg:pr-16 space-y-12 md:space-y-16">
                    <Fade delay={0.1}>
                        <section className="max-w-[52ch]">
                            <p className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.7] mb-6">
                                4th-year Information Systems student at Petra Christian University.
                                Building interfaces that communicate clearly and tools
                                that reduce friction.
                            </p>
                            <p className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.7]">
                                I learned by building, not tutorials. Implementation first,
                                abstraction second.
                            </p>
                        </section>
                    </Fade>

                    <Line />

                    <Fade delay={0.2}>
                        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest pt-1">
                                Education
                            </h2>
                            <div className="md:col-span-3">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-[15px] font-bold text-[#1A1A1A]">Petra Christian University</span>
                                    <span className="text-[11px] font-mono text-[#7A1E1E]">2022—2026</span>
                                </div>
                                <p className="text-[13px] text-[#6F6F6F]">Bachelor of Science in Information Systems</p>
                            </div>
                        </section>
                    </Fade>

                    <Line />

                    <Fade delay={0.3}>
                        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest pt-1">
                                Philosophy
                            </h2>
                            <div className="md:col-span-3">
                                <ul className="space-y-6">
                                    {[
                                        { id: '01', text: 'Clarity over cleverness. No decorative elements without functional purpose.' },
                                        { id: '02', text: 'Structure before style. Grid systems define the rhythm of the content.' },
                                        { id: '03', text: 'Documentation as a deliverable. Code clarity is as important as performance.' }
                                    ].map((item) => (
                                        <li key={item.id} className="flex gap-4 items-start group">
                                            <span className="text-[#7A1E1E] font-mono text-[11px] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                                {item.id}
                                            </span>
                                            <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-relaxed">
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </Fade>
                    <Line />

                    <Fade delay={0.4}>
                        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest pt-1">
                                Focus
                            </h2>
                            <div className="md:col-span-3">
                                <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-relaxed">
                                    My primary interest lies in the visual layer of the web. I&apos;m driven by
                                    the challenge of turning complex logic into interfaces that feel
                                    effortless and aesthetically &quot;right.&quot;
                                </p>
                            </div>
                        </section>
                    </Fade>

                    <Line />

                    <Fade delay={0.25}>
                        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                            <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest pt-1">
                                Experience
                            </h2>
                            <div className="md:col-span-3 space-y-8">

                                {/* Role 01 */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-[14px] font-bold text-[#1A1A1A]">Coordinator of Logistics</span>
                                        <span className="text-[11px] font-mono text-[#7A1E1E]">2023—2024</span>
                                    </div>
                                    <p className="text-[13px] text-[#6F6F6F] mb-2">UKM Ilustrasi Petra</p>
                                    <p className="text-[13px] text-[#9F9F9F] leading-relaxed max-w-[50ch]">
                                        Led the logistics division in managing equipment procurement and operational
                                        setup for student organization activities.
                                    </p>
                                </div>

                                {/* Role 02 (Grouped smaller roles for clean UI) */}
                                <div className="pt-4 border-t border-[#F0F0EE]">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-[14px] font-bold text-[#1A1A1A]">Technical Logistics Staff</span>
                                        <span className="text-[11px] font-mono text-[#9F9F9F]">2023—2024</span>
                                    </div>
                                    <p className="text-[13px] text-[#6F6F6F] mb-3">Various Committees (WGG, SAN X LKTI, Tutorial UAS)</p>
                                    <ul className="space-y-2">
                                        {[
                                            'Coordinated large-scale asset distribution and venue management.',
                                            'Managed technical equipment including AV systems and lighting setups.',
                                            'Maintained Standard Operating Procedures (SOP) for cross-departmental equipment lending.'
                                        ].map((item, i) => (
                                            <li key={i} className="text-[12px] text-[#9F9F9F] flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#E8E7E4]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </section>
                    </Fade>
                </div>

                {/* Sidebar - Now following the site's vertical 'spine' */}
                <aside className="lg:col-span-4 mt-16 lg:mt-0 lg:border-l border-[#E8E7E4] lg:pl-12">
                    <Fade delay={0.4} className="lg:sticky lg:top-24 space-y-10">
                        <div>
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-6">
                                Contact
                            </h3>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: 'Email', value: 'timothy.evan.heriawan@gmail.com', href: 'mailto:timothy.evan.heriawan@gmail.com' },
                                    { label: 'GitHub', value: 'timothyevanheriawan-commits', href: 'https://github.com/timothyevanheriawan-commits' },
                                    { label: 'LinkedIn', value: 'timothy-evan-heriawan', href: 'https://linkedin.com/in/timothy-evan-heriawan/' }
                                ].map((link) => (
                                    <div key={link.label} className="flex flex-col">
                                        <span className="text-[9px] font-mono text-[#BFBFBF] uppercase mb-1">{link.label}</span>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[13px] text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors truncate"
                                        >
                                            {link.value}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#E8E7E4]">
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-3">
                                Status
                            </h3>
                            <p className="text-[13px] text-[#6F6F6F] leading-relaxed">
                                Open to internships and entry-level positions for 2026.
                            </p>
                        </div>
                        <div className="pt-8 border-t border-[#E8E7E4]">
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-4">
                                Environment
                            </h3>
                            <ul className="space-y-2">
                                {['Next.js / React', 'Tailwind CSS', 'Framer Motion', 'Figma'].map((tool) => (
                                    <li key={tool} className="text-[12px] text-[#6F6F6F] font-mono flex items-center gap-2">
                                        <span className="w-1 h-px bg-[#D8D8D8]" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Fade>
                    
                </aside>
            </div>
        </Container>
    )
}