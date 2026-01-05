interface SectionMarkerProps {
    number: string
    title: string
}

export function SectionMarker({ number, title }: SectionMarkerProps) {
    return (
        <div className="flex items-baseline gap-3 mb-5">
            <span className="font-mono text-meta text-accent font-medium">
                {number}
            </span>
            <h2 className="mb-0">{title}</h2>
        </div>
    )
}