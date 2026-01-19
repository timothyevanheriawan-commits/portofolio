import { Container } from '@/components/layout/container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
}

export default function AboutPage() {
    return (
        <Container className="py-16">
            <header className="mb-10">
                <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#1A1A1A] font-(family-name:--font-space)">
                    About
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
                {/* Main */}
                <div className="max-w-120 space-y-10">
                    <section>
                        <p className="text-[14px] text-[#4A4A4A] leading-[1.8] mb-4">
                            4th-year Information Systems student at Petra Christian University.
                            Building interfaces that communicate clearly and tools
                            that reduce friction.
                        </p>
                        <p className="text-[14px] text-[#4A4A4A] leading-[1.8]">
                            I learned by building, not tutorials. Implementation first,
                            abstraction second.
                        </p>
                    </section>

                    <hr className="border-[#E8E7E4]" />

                    <section className="py-6 border-t border-[#E8E7E4] grid grid-cols-4 gap-4">
                        <h2 className="col-span-1 text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            Education
                        </h2>
                        <div className="col-span-3">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[14px] font-bold text-[#1A1A1A]">Petra Christian University</span>
                                <span className="text-[11px] font-mono text-[#7A1E1E]">2022—2026</span>
                            </div>
                            <p className="text-[13px] text-[#6F6F6F]">Bachelor of Science in Information Systems</p>
                        </div>
                    </section>


                    <section className="py-8 border-t border-[#E8E7E4] grid grid-cols-1 md:grid-cols-4 gap-6">
                        <h2 className="md:col-span-1 text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            Philosophy
                        </h2>
                        <div className="md:col-span-3">
                            <ul className="space-y-3">
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#7A1E1E] font-mono text-[12px] mt-0.5">01</span>
                                    <p className="text-[14px] text-[#4A4A4A]">Clarity over cleverness. No decorative elements without functional purpose.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#7A1E1E] font-mono text-[12px] mt-0.5">02</span>
                                    <p className="text-[14px] text-[#4A4A4A]">Structure before style. Grid systems define the rhythm of the content.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#7A1E1E] font-mono text-[12px] mt-0.5">03</span>
                                    <p className="text-[14px] text-[#4A4A4A]">Documentation as a deliverable. Code clarity is as important as performance.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="lg:pt-1">
                    <div className="lg:sticky lg:top-20 space-y-6">
                        <div className="p-5 border border-[#E8E7E4]">
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-4">
                                Contact
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="mailto:timothy.evan.heriawan@gmail.com"
                                    className="block text-[13px] text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-150"
                                >
                                    timothy.evan.heriawan@gmail.com
                                </a>
                                <a
                                    href="https://github.com/timothyevanheriawan-commitsheriawan-commits"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[13px] text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-150"
                                >
                                    github.com/timothyevanheriawan-commits
                                </a>
                                <a
                                    href="https://linkedin.com/in/timothy-evan-heriawan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[13px] text-[#6F6F6F] hover:text-[#1A1A1A] transition-colors duration-150"
                                >
                                    linkedin.com/in/timothy-evan-heriawan
                                </a>
                            </div>
                        </div>

                        <div className="p-5 bg-[#F0EFED] border border-[#E8E7E4]">
                            <h3 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-3">
                                Status
                            </h3>
                            <p className="text-[12px] text-[#6F6F6F] leading-relaxed">
                                Open to internships and entry-level positions.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </Container>
    )
}