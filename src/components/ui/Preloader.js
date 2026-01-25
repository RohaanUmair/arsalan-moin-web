'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5s intro
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] bg-navy-950 flex items-center justify-center overflow-hidden"
                >
                    {/* Animated Text Reveal */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden mb-2">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                                className="block text-white font-serif text-5xl md:text-7xl font-bold tracking-tighter"
                            >
                                ARSALAN
                            </motion.span>
                        </div>

                        <div className="flex gap-4 overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                                className="block text-gold-500 font-sans text-xs md:text-sm tracking-[0.5em] uppercase"
                            >
                                Psychology
                            </motion.span>
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                                className="block text-white/50 font-sans text-xs md:text-sm tracking-[0.5em] uppercase"
                            >
                                Design
                            </motion.span>
                        </div>
                    </div>

                    {/* Loading Progress Bar */}
                    <div className="absolute bottom-10 left-10 md:left-20 right-10 md:right-20">
                        <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                transition={{ duration: 2.3, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-full bg-gold-400"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-between mt-2 text-white/30 text-[10px] uppercase tracking-widest font-bold"
                        >
                            <span>Loading Experience</span>
                            <span>Wait...</span>
                        </motion.div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
