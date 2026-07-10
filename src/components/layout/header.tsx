"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./container";
import { MarkLogo } from "../ui/logo";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// ── Live Clock ────────────────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState<string | null>(null);
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Jakarta",
        }).format(new Date()),
      );
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <div className="flex flex-col items-center gap-0.5">
      {/* Reserve layout space before mount to prevent layout shift */}
      <span
        className={cn(
          "text-[10px] font-mono tabular-nums tracking-widest transition-colors duration-300",
          mounted && time
            ? "text-[var(--color-text-primary)]"
            : "text-transparent",
        )}
      >
        {time ?? "00:00:00"}
      </span>
      <span className="text-[7px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-ghost)]">
        WIB / UTC+7
      </span>
    </div>
  );
}

// ── Scroll Progress Bar ───────────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-border)] overflow-hidden pointer-events-none">
      <motion.div
        className="h-full bg-[var(--color-accent)] origin-left"
        style={{ scaleX: progress }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-text-primary)]/20 backdrop-blur-[2px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_EXPO }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-x-0 top-0 z-50 pt-12 md:hidden bg-[var(--color-bg-header)] border-b border-[var(--color-border)]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
          >
            <Container>
              <nav className="flex flex-col py-6">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + i * 0.06,
                        ease: EASE_EXPO,
                      }}
                    >
                      <NextLink
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-4 border-b border-[var(--color-border)] first:border-t focus-visible:outline-none focus-visible:bg-[var(--color-accent)]/5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[9px] font-mono text-[var(--color-accent)] tabular-nums">
                            0{i + 1}
                          </span>
                          <span
                            className={cn(
                              "text-[15px] font-mono uppercase tracking-[0.1em]",
                              isActive
                                ? "text-[var(--color-text-primary)]"
                                : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300",
                            )}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[var(--color-text-ghost)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      </NextLink>
                    </motion.div>
                  );
                })}

                {/* Contact */}
                <motion.a
                  href="mailto:timothy.evan.heriawan@gmail.com"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + navItems.length * 0.06,
                    ease: EASE_EXPO,
                  }}
                  className="group flex items-center justify-between py-4 mt-2 focus-visible:outline-none"
                >
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[var(--color-text-primary)] bg-transparent">
                    Get in touch
                  </span>
                  <span className="text-[var(--color-text-ghost)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                    ↗
                  </span>
                </motion.a>

                {/* Footer meta */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
                  <LiveClock />
                  <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-[var(--color-text-ghost)]">
                    Surabaya, ID
                  </span>
                </div>
              </nav>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "bg-[var(--color-bg-header)]/95 backdrop-blur-md border-[var(--color-border)]"
            : "bg-[var(--color-bg-header)]/80 backdrop-blur-sm border-transparent",
        )}
      >
        <Container>
          <nav className="relative flex items-center justify-between h-12 md:h-14">
            {/* ── Logo ── */}
            <div className="shrink-0 relative z-50 flex items-center gap-4">
              <NextLink
                href="/"
                aria-label="Home"
                className="flex items-center group"
              >
                <MarkLogo
                  size={20}
                  className="text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                />
              </NextLink>
              <span className="hidden sm:block h-3 w-px bg-[var(--color-border)]" />
              <span className="hidden sm:block text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-ghost)]">
                Portfolio
              </span>
            </div>

            {/* ── Clock — absolute center ── */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <LiveClock />
            </div>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center h-full">
              <div className="flex items-center h-full border-l border-[var(--color-border)]">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <NextLink
                      key={item.href}
                      href={item.href}
                      className="group relative flex items-center justify-center h-full px-6 border-r border-[var(--color-border)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)] overflow-hidden"
                    >
                      {/* Index marker — fades in on hover */}
                      <span className="absolute top-2 left-2 text-[6px] font-mono text-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                        0{i + 1}
                      </span>

                      {/* Hover fill */}
                      <span className="absolute inset-0 bg-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span
                        className={cn(
                          "text-[10px] font-mono uppercase tracking-[0.25em] transition-colors duration-300 relative z-10",
                          isActive
                            ? "text-[var(--color-text-primary)]"
                            : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]",
                        )}
                      >
                        {item.label}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-accent)]"
                          transition={{ duration: 0.3, ease: EASE_EXPO }}
                        />
                      )}

                      {/* Hover indicator */}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                      )}
                    </NextLink>
                  );
                })}
              </div>

              {/* Contact CTA — external action, uses ↗ */}
              <a
                href="mailto:timothy.evan.heriawan@gmail.com"
                className="group relative ml-6 px-5 h-8 flex items-center bg-[var(--color-text-primary)] hover:bg-[var(--color-accent)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-header)]"
              >
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[var(--color-bg-header)] transition-colors duration-300">
                  Contact
                </span>
                <span className="ml-2.5 text-[9px] font-mono text-[var(--color-bg-header)]/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">
                  ↗
                </span>
              </a>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-[60] w-10 h-10 -mr-2 flex items-center justify-center active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-[18px] h-[10px] flex flex-col justify-between items-end">
                <span
                  className={cn(
                    "h-px bg-[var(--color-text-primary)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    mobileMenuOpen
                      ? "w-[18px] rotate-45 translate-y-[4.5px]"
                      : "w-[18px]",
                  )}
                />
                <span
                  className={cn(
                    "h-px bg-[var(--color-text-primary)] transition-all duration-300",
                    mobileMenuOpen ? "opacity-0 w-0" : "w-[11px]",
                  )}
                />
                <span
                  className={cn(
                    "h-px bg-[var(--color-text-primary)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    mobileMenuOpen
                      ? "w-[18px] -rotate-45 -translate-y-[4.5px]"
                      : "w-[14px]",
                  )}
                />
              </div>
            </button>
          </nav>
        </Container>

        {/* Scroll progress — the only bottom-edge indicator now; the old shadow was redundant with this */}
        <ScrollProgress />
      </header>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}