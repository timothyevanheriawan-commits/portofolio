import { Container } from './container'

export function Footer() {
    return (
        <footer className="py-8 border-t border-[#E8E7E4]">
            <Container>
                <div className="flex justify-between items-center font-mono text-[9px] text-[#9F9F9F] uppercase tracking-[0.2em]">
                    <span>© {new Date().getFullYear()} / Timothy Evan</span>
                    <span>Built with Precison / Next.js</span>
                </div>
            </Container>
        </footer>
    )
}