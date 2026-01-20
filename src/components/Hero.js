"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="min-h-[90vh] flex items-center pt-32 px-6 py-12 relative overflow-hidden">
            {/* Subtle Background Motion */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-accent/5 rounded-full blur-3xl z-[-1]"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="order-2 md:order-1 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-3 py-1 border border-theme-accent/30 rounded-full text-xs tracking-widest text-theme-accent uppercase"
                    >
                        Psychological Treatment
                    </motion.span>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-serif leading-[1] text-theme-text"
                    >
                        Arsalan <br />
                        <motion.span
                            className="italic text-theme-accent inline-block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Moin
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-theme-text-muted max-w-md leading-relaxed"
                    >
                        Empowering over 1.6 million followers to understand the depths of human behavior and parenting.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4 pt-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#about" className="inline-block px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest rounded-sm shadow-lg hover:shadow-xl">
                                MEET ARSALAN
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#book" className="inline-block px-8 py-4 border border-theme-text/20 hover:border-theme-text transition-colors text-sm tracking-widest text-theme-text rounded-sm">
                                THE BOOK
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square bg-theme-surface rounded-sm overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                    <div className="absolute inset-0 bg-theme-accent/5"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                        alt="Arsalan Moin"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
