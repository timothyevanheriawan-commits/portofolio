import { cn } from '@/lib/utils'

interface DividerProps {
    className?: string
}

export function Divider({ className }: DividerProps) {
    return (
        <hr className={cn(
            'h-px bg-divider border-none my-6',
            className
        )} />
    )
}