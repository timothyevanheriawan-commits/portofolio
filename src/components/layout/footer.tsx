import { Container } from './container'

export function Footer() {
    return (
        <footer className="py-8 border-t border-[#E8E7E4] group/footer">
            <Container>
                <div className="flex justify-between items-center font-mono text-[9px] text-[#9F9F9F] uppercase tracking-[0.2em]">
                    <span className="transition-colors duration-500 group-hover/footer:text-[#1A1A1A]">
                        © {new Date().getFullYear()} <span className="text-[#D8D8D8] mx-1">/</span>
                        <span className="hover:text-[#7A1E1E] transition-colors cursor-crosshair">Timothy Evan</span>
                    </span>

                    <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#7A1E1E] opacity-0 group-hover/footer:opacity-100 transition-opacity duration-700" />
                        <span>Built with Precision <span className="text-[#D8D8D8] mx-1">/</span> Next.js</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}