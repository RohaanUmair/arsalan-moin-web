"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Book() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 200, damping: 20 });

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
        },
    };

    return (
        <section id="book" className="min-h-[90vh] flex items-center px-6 py-12 relative overflow-hidden">
            {/* Background accents */}
            <motion.div
                className="absolute top-20 left-10 w-40 h-40 bg-theme-accent/5 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="max-w-5xl mx-auto bg-[#eaddcf] rounded-2xl p-8 md:p-16 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                    {/* 3D Tilt Book Cover */}
                    <motion.div
                        className="relative aspect-[3/4] shadow-2xl cursor-pointer"
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        initial={{ opacity: 0, x: -50, rotate: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop"
                            alt="The Invisible Work Book Cover"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <BookOpen className="text-theme-accent" size={20} />
                            </motion.div>
                            <h3 className="text-sm font-bold tracking-widest text-theme-text/60 uppercase">
                                The Best Seller
                            </h3>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-theme-text">
                            The Invisible Work
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl italic text-theme-accent">
                            "A parent's guide to raise a human, not tourist."
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-theme-text/80 leading-relaxed">
                            This book is not just a guide; it's a mirror for every parent. Discover the unseen efforts that shape a child's character and future.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(140, 107, 93, 0.5)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest w-full md:w-auto rounded-sm"
                            >
                                ORDER YOUR COPY
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
