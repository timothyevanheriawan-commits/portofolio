// components/ui/card.tsx
import { cn } from '@/lib/utils'

interface CardProps {
    children: React.ReactNode
    className?: string
    as?: 'div' | 'article'
    variant?: 'default' | 'ghost' | 'outlined'
    tension?: boolean  // Asymmetric padding for visual tension
}

export function Card({
    children,
    className,
    as: Component = 'div',
    variant = 'default',
    tension = false
}: CardProps) {
    return (
        <Component className={cn(
            'relative group',
            'transition-all duration-base ease-out',

            // Base styles by variant
            variant === 'default' && [
                'border border-divider',
                'bg-bg-secondary/80 backdrop-blur-sm',
                'hover:border-text-secondary/40',
                'hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                'hover:translate-y-[-1px]',
            ],

            variant === 'ghost' && [
                'border border-transparent',
                'hover:border-divider/50',
                'hover:bg-bg-secondary/40',
            ],

            variant === 'outlined' && [
                'border-2 border-text-primary/10',
                'hover:border-text-primary/20',
            ],

            // Tension padding (asymmetric)
            tension ? 'pt-5 pr-4 pb-3.5 pl-4' : 'p-4',

            className
        )}>
            {/* Subtle corner accent on hover */}
            <div className="absolute top-0 left-0 w-0.5 h-6 bg-accent/0 
                          group-hover:bg-accent/60 transition-all duration-base" />

            {children}
        </Component>
    )
}