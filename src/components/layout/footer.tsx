'use client'

import { Container } from './container'
import { useMounted } from '@/hooks/use-mounted'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
    const mounted = useMounted()

    return (
      <footer className="relative py-10 md:py-16 border-t border-[#E8E7E4] group/footer">
        <span
          aria-hidden
          className="absolute top-[-1px] left-0 w-10 h-px bg-[#7A1E1E]"
        />
        <Container>
          {/* Changed to flex-col on mobile, flex-row on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9F9F9F]">
            {/* Top/Left Block: Legal & Identity */}
            <div className="flex items-center gap-3 group/name">
              <span className="text-[#1A1A1A] font-medium tabular-nums">
                © {mounted ? new Date().getFullYear() : "2026"}
              </span>

              <span className="text-[#E8E7E4]" aria-hidden="true">
                |
              </span>

              {/* Link removed, but keeping the color transition on footer hover */}
              <span className="transition-colors duration-300 group-hover/footer:text-[#1A1A1A] text-[#9F9F9F]">
                {siteConfig.name}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex gap-8">
              {[
                { label: "Work", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Source", href: siteConfig.source },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative hover:text-[#1A1A1A] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-[#7A1E1E] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Bottom/Right Block: System Info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A1E1E] opacity-40"
                    style={{ animationDuration: "1.8s" }}
                  />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7A1E1E]" />
                </span>
                <span className="text-[#1A1A1A]">Open to Opportunities</span>
              </div>

              <span className="text-[#E8E7E4]">/</span>

              <span className="inline-block border border-[#E8E7E4] px-1.5 py-0.5 -rotate-2 text-[#1A1A1A]">
                V.2026
              </span>
              
              <span className="text-[#E8E7E4]">/</span>

              <span className="whitespace-nowrap">Next.js - Tailwind v4</span>
            </div>
          </div>
        </Container>
      </footer>
    );
}