// src/components/ui/currently.tsx
// A small "currently" block for the about sidebar.
// Purely static - just personal context. No API needed.

const items = [
    { label: 'Building', value: 'This portfolio' },
    { label: 'Learning', value: 'D3.js & WebGL' },
    { label: 'Reading', value: 'The Design of Everyday Things' },
    { label: 'Listening', value: 'whatever fits the mood' },
]

export function Currently() {
    return (
        <div className="pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest mb-5">
                Currently
            </h3>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item.label} className="flex items-baseline justify-between gap-4">
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-ghost)] shrink-0">
                            {item.label}
                        </span>
                        <span className="text-[12px] text-[var(--color-text-body)] text-right leading-snug">
                            {item.value}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Honest note */}
            <p className="mt-5 text-[11px] text-[var(--color-text-ghost)] italic leading-relaxed">
                Last updated when I remembered to.
            </p>
        </div>
    )
}
