import { Container } from './container'
import { MarkLogo } from '@/components/ui/logo'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="py-10 mt-8">
            <Container>
                <div className="border-t border-[#E8E7E4] pt-8">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
                            © {year}
                        </span>
                        <MarkLogo className="text-neutral-900" />
                        <span className="text-[10px] font-mono text-[#9F9F9F]">
                            Built with Next.js
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}