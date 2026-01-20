"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

// Floating Particle Component
function FloatingParticle({ delay, duration, x, y, size }) {
    return (
        <motion.div
            className="absolute rounded-full bg-theme-accent/20"
            style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

// Animated Word Component
function AnimatedWord({ word, index }) {
    return (
        <motion.span
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
            }}
        >
            {word}
        </motion.span>
    );
}

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
    }

    const particles = [
        { delay: 0, duration: 8, x: 10, y: 20, size: 8 },
        { delay: 1, duration: 10, x: 80, y: 30, size: 12 },
        { delay: 2, duration: 7, x: 60, y: 70, size: 6 },
        { delay: 0.5, duration: 9, x: 25, y: 80, size: 10 },
        { delay: 1.5, duration: 11, x: 90, y: 60, size: 8 },
    ];

    return (
        <section className="min-h-[90vh] flex items-center pt-32 px-6 py-12 relative overflow-hidden">
            {/* Floating Particles */}
            {particles.map((p, i) => (
                <FloatingParticle key={i} {...p} />
            ))}

            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 z-[-2]"
                style={{
                    background: "radial-gradient(ellipse at 70% 30%, rgba(140, 107, 93, 0.1), transparent 60%)",
                }}
                animate={{
                    background: [
                        "radial-gradient(ellipse at 70% 30%, rgba(140, 107, 93, 0.1), transparent 60%)",
                        "radial-gradient(ellipse at 30% 70%, rgba(140, 107, 93, 0.15), transparent 60%)",
                        "radial-gradient(ellipse at 70% 30%, rgba(140, 107, 93, 0.1), transparent 60%)",
                    ],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 border border-theme-accent/30 rounded-full text-xs tracking-widest text-theme-accent uppercase"
                    >
                        <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <Sparkles size={14} />
                        </motion.span>
                        Psychological Treatment
                    </motion.span>

                    <h1 className="text-5xl md:text-8xl font-serif leading-[1] text-theme-text">
                        {["Arsalan"].map((word, i) => (
                            <AnimatedWord key={i} word={word} index={i} />
                        ))}
                        <br />
                        <motion.span
                            className="italic text-theme-accent inline-block"
                            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                        >
                            Moin
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="text-lg md:text-xl text-theme-text-muted max-w-md leading-relaxed"
                    >
                        Empowering over 1.6 million followers to understand the depths of human behavior and parenting.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="flex gap-4 pt-4"
                    >
                        <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(140, 107, 93, 0.4)" }} whileTap={{ scale: 0.95 }}>
                            <Link href="#about" className="inline-block px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest rounded-sm">
                                MEET ARSALAN
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, borderColor: "rgba(74, 59, 50, 1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-sm"
                        >
                            <Link href="#book" className="inline-block px-8 py-4 border border-theme-text/20 hover:border-theme-text transition-colors text-sm tracking-widest text-theme-text rounded-sm">
                                THE BOOK
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 3D Parallax Hero Image */}
                <motion.div
                    className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square bg-theme-surface rounded-sm overflow-hidden group perspective-1000"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
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
