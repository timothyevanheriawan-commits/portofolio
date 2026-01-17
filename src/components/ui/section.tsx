// components/ui/section.tsx
import { cn } from '@/lib/utils'

interface SectionProps {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'offset' | 'compressed'
}

export function Section({ children, className, variant = 'default' }: SectionProps) {
    return (
        <section className={cn(
            'relative',
            variant === 'default' && 'py-8 md:py-9',
            variant === 'offset' && 'pt-7 pb-8 md:pt-8 md:pb-10', // Asymmetric
            variant === 'compressed' && 'py-5 md:py-6',
            className
        )}>
            {children}
        </section>
    )
}