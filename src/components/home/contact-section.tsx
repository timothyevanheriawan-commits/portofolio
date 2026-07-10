"use client";

import { useState } from "react";
import { Fade, Line } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    copyable: true,
  },
  {
    label: "GitHub",
    value: `github.com/${siteConfig.githubHandle}`,
    href: siteConfig.github,
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: `linkedin.com/in/${siteConfig.linkedinHandle}`,
    href: siteConfig.linkedin,
    copyable: false,
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setFormState("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  async function handleCopy(e: React.MouseEvent, value: string) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }

  const inputBase =
    "w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-ghost)] outline-none transition-colors duration-300 font-[var(--font-inter)] resize-none";

  const labelBase =
    "block text-[9px] font-mono uppercase tracking-[0.3em] mb-2 transition-colors duration-300";

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Line />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mt-10 md:mt-16">
        {/* LEFT: HEADER + CHANNELS */}
        <div className="md:col-span-5 pr-6 md:pr-16 mb-12 md:mb-0">
          <Fade delay={0}>
            <div className="mt-8 md:mt-12 mb-12 md:mb-16">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-[11px] tracking-[0.4em] font-medium">
                  <span>INDEX</span>
                  <span className="text-[var(--color-border)]">/</span>
                  <span>03</span>
                </div>
                <h2 className="text-[14px] md:text-[16px] font-mono text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-medium">
                  Contact
                </h2>
              </div>
            </div>
          </Fade>

          <Fade delay={0.2}>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start max-w-sm mb-12">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-faint)] pt-[4px]">
                Re:
              </span>
              <p className="text-[15px] text-[var(--color-text-body)] leading-[1.65] tracking-[-0.01em]">
                Open to internships and entry-level roles in frontend
                development, data analysis, or UI/UX design.
              </p>
            </div>
          </Fade>

          {/* Channel links */}
          <Fade delay={0.3}>
            <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-faint)] mb-4">
              Channels
            </span>
            <div className="flex flex-col">
              {contactLinks.map((link, i) =>
                link.copyable ? (
                  <button
                    key={link.label}
                    onClick={(e) => handleCopy(e, link.value)}
                    className="group grid grid-cols-[1fr_auto] items-center py-4 border-b border-[var(--color-border)] hover:border-[var(--color-text-primary)] transition-colors duration-300 text-left w-full"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-[9px] font-mono text-[var(--color-text-faint)] uppercase tracking-[0.3em] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-[13px] md:text-[14px] text-[var(--color-text-body)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 break-all">
                        {link.value}
                      </span>
                    </div>
                    <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-[var(--color-text-ghost)] group-hover:text-[var(--color-accent)] transition-colors duration-300 ml-4 min-w-[48px] text-right">
                      {copied ? "Copied ✓" : "Copy"}
                    </span>
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[1fr_auto] items-center py-4 border-b border-[var(--color-border)] hover:border-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-[9px] font-mono text-[var(--color-text-faint)] uppercase tracking-[0.3em] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-[13px] md:text-[14px] text-[var(--color-text-body)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 break-all">
                        {link.value}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-text-ghost)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-4">
                      ↗
                    </span>
                  </a>
                ),
              )}
            </div>
          </Fade>
        </div>

        {/* RIGHT: FORM */}
        <div className="md:col-span-7 md:border-l border-[var(--color-border)] pl-0 md:pl-16">
          <Fade delay={0.35}>
            <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-faint)] mb-8">
              Send a Message
            </span>

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-5 bg-[var(--color-accent)]" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      Transmitted
                    </span>
                  </div>
                  <p className="text-[15px] text-[var(--color-text-body)] leading-[1.65] max-w-[36ch]">
                    Message received. I'll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-4 self-start text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-faint)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`${labelBase} ${focused === "name" ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]"}`}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={values.name}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, name: e.target.value }))
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "name" ? "border-[var(--color-text-primary)]" : ""}`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`${labelBase} ${focused === "email" ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]"}`}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={values.email}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, email: e.target.value }))
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "email" ? "border-[var(--color-text-primary)]" : ""}`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`${labelBase} ${focused === "message" ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]"}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      value={values.message}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, message: e.target.value }))
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "message" ? "border-[var(--color-text-primary)]" : ""}`}
                    />
                  </div>

                  <AnimatePresence>
                    {formState === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[11px] font-mono text-[var(--color-accent)] uppercase tracking-widest -mt-4"
                      >
                        Something went wrong. Try emailing directly.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center gap-6">
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="group relative inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--color-bg-header)] bg-[var(--color-text-primary)] px-6 py-3 hover:bg-[var(--color-accent)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === "loading" ? (
                        <>
                          <span className="inline-flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.span
                                key={i}
                                className="block w-1 h-1 rounded-full bg-[var(--color-bg-header)]"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                  duration: 0.9,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </span>
                          Sending
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </>
                      )}
                    </button>

                    <span className="text-[9px] font-mono text-[var(--color-text-ghost)] uppercase tracking-widest">
                      or email directly ↑
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Fade>
        </div>
      </div>
    </section>
  );
}
