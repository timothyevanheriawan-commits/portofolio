import { cn } from '@/lib/utils'

interface CardProps {
    children: React.ReactNode
    className?: string
    as?: 'div' | 'article'
}

export function Card({ children, className, as: Component = 'div' }: CardProps) {
    return (
        <Component className={cn(
            'border border-divider p-4 bg-bg-secondary',
            'transition-[border-color] duration-fast',
            'hover:border-text-secondary',
            className
        )}>
            {children}
        </Component>
    )
}