type MarkLogoProps = {
    size?: number;
    className?: string;
};

export function MarkLogo({ size = 28, className }: MarkLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Personal Logo"
            role="img"
            className={className}
        >
            {/* Left pillar */}
            <rect
                x="7"
                y="4"
                width="4"
                height="20"
                rx="1"
                fill="currentColor"
            />

            {/* Right fractured pillar */}
            <rect
                x="15"
                y="4"
                width="3"
                height="9"
                rx="1"
                fill="currentColor"
                opacity="0.85"
            />
            <rect
                x="15"
                y="15"
                width="3"
                height="9"
                rx="1"
                fill="currentColor"
                opacity="0.55"
            />
        </svg>
    );
}
