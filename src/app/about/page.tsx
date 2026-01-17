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

                    <section>
                        <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-5">
                            Education
                        </h2>
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="text-[14px] font-medium text-[#1A1A1A]">Petra Christian University</span>
                            <span className="text-[11px] font-mono text-[#9F9F9F]">2022–2026</span>
                        </div>
                        <p className="text-[13px] text-[#6F6F6F]">BSc Information Systems</p>
                    </section>

                    <hr className="border-[#E8E7E4]" />

                    <section>
                        <h2 className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest mb-5">
                            Approach
                        </h2>
                        <p className="text-[14px] text-[#4A4A4A] leading-[1.8]">
                            Clarity over cleverness. Structure before style.
                            Documentation as part of the work.
                        </p>
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