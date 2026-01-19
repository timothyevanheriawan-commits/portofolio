// src/components/layout/container.tsx
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: 'default' | 'narrow' | 'wide'
}

export function Container({
    children,
    className,
    size = 'default'
}: ContainerProps) {
    return (
        <div className={cn(
            'mx-auto w-full px-5 md:px-8 lg:px-12',
            size === 'narrow' && 'max-w-180',
            size === 'default' && 'max-w-270',
            size === 'wide' && 'max-w-7xl',
            className
        )}>
            {children}
        </div>
    )
}