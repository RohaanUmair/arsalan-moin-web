'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
    const containerRef = useRef(null);

    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Staggered animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(212, 175, 55, 0.3)",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.98 }
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-navy-900 group">

            {/* Full Screen Background Image with Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-navy-900/20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/30 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent z-10"></div>

                <motion.img
                    src="/images/stage.jpeg"
                    alt="Start the Invisible Work"
                    className="w-full h-full object-cover object-center grayscale-[0.4]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                />
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 border border-gold-500/20 rounded-full z-10"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-40 right-40 w-16 h-16 bg-gold-500/10 rounded-full blur-xl z-10"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Content Overlay - Floating Layout */}
            <motion.div
                className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col md:flex-row items-end justify-between gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >

                <motion.div
                    className="max-w-2xl relative z-10 backdrop-blur-md bg-navy-900/30 p-8 pr-10 rounded-sm border-l-2 border-gold-500"
                    variants={itemVariants}
                    whileHover={{
                        x: 5,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm"
                        variants={itemVariants}
                    >
                        WORK WITH ARSALAN
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-serif text-cream-50 font-medium tracking-tight mb-4 drop-shadow-2xl leading-[0.9]"
                    >
                        Speaking & <br />
                        <motion.span
                            className="inline-block"
                            whileHover={{
                                color: "rgb(212, 175, 55)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Consulting
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-cream-100/70 font-light leading-relaxed max-w-md text-sm md:text-base"
                    >
                        Transform your organization with insights from The Invisible Work.
                        Available for keynotes, workshops, and private consultations.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex gap-4"
                    variants={itemVariants}
                >
                    <motion.button
                        className="px-8 py-4 bg-cream-50 text-navy-900 font-bold rounded-full flex items-center gap-2 relative overflow-hidden group/btn"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <span className="relative z-10">Book for Event</span>
                        <motion.span
                            className="relative z-10"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </motion.span>
                        <motion.div
                            className="absolute inset-0 bg-gold-400"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

        </section>
    );
}
