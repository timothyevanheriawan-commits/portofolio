import { cn } from '@/lib/utils'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn('w-full max-w-[1000px] mx-auto px-6 md:px-8', className)}>
            {children}
        </div>
    )
}