'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function IntroLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Moves the update to the next frame, satisfying the linter
        const frame = requestAnimationFrame(() => {
            setMounted(true);
        });

        document.body.classList.add('loading');

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove('loading');
        }, 2600);

        return () => {
            cancelAnimationFrame(frame); // Cleanup the frame request
            clearTimeout(timer);
            document.body.classList.remove('loading');
        };
    }, []);

    // Prevent hydration mismatch by returning null until mounted on client
    if (!mounted) return null

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="intro-loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, delay: 0.2 }
                    }}
                    /* 2. FIX: Added brackets to z-[9999] */
                    className="fixed inset-0 z-9999 flex flex-col bg-[#1A1A1A] text-[#F7F7F5]"
                >
                    <motion.div
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
                        className="flex-1 bg-[#1A1A1A] flex items-end justify-center pb-4 px-6"
                    >
                        <div className="w-full max-w-7xl flex justify-between items-end border-b border-[#F7F7F5]/10 pb-4">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[11px] font-mono uppercase tracking-[0.4em]"
                            >
                                Timothy Evan
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-[11px] font-mono text-[#6F6F6F]"
                            >
                                V.2026
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="flex justify-center bg-[#1A1A1A] py-8">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="h-px w-24 bg-[#F7F7F5] origin-center"
                        />
                    </div>

                    <motion.div
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
                        className="flex-1 bg-[#1A1A1A] flex items-start justify-center pt-4 px-6"
                    >
                        <div className="w-full max-w-7xl flex justify-between items-start pt-4">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-[10px] font-mono uppercase tracking-widest text-[#6F6F6F]"
                            >
                                Portfolio / Index
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-[10px] font-mono text-[#6F6F6F] uppercase"
                            >
                                Initializing...
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}