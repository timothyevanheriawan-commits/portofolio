import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'primary' | 'secondary' | 'accent'
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit'
}

export function Button({
    children,
    href,
    variant = 'primary',
    className,
    onClick,
    type = 'button',
}: ButtonProps) {
    const baseStyles = cn(
        'inline-block font-sans text-[15px] font-medium leading-none',
        'px-[20px] py-[12px] rounded-sm no-underline cursor-pointer',
        'transition-opacity duration-fast',
        'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'
    )

    const variants = {
        primary: 'bg-text-primary text-bg-primary border border-text-primary hover:opacity-85',
        secondary: 'bg-transparent text-text-primary border border-text-primary hover:bg-text-primary hover:text-bg-primary',
        accent: 'bg-accent text-bg-primary border border-accent hover:opacity-90',
    }

    const styles = cn(baseStyles, variants[variant], className)

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    )
}