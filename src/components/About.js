"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-[90vh] flex items-center bg-cream-50 px-6 relative overflow-hidden"
        >
            {/* Floating Shape */}
            <motion.div
                className="absolute right-10 top-1/4 w-32 h-32 border border-gold-500/20 rounded-full"
                style={{ y }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute left-10 bottom-1/4 w-20 h-20 bg-gold-500/5 rounded-lg"
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mx-auto w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-4"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="text-gold-500" size={24} />
                    </motion.div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    className="text-3xl md:text-5xl font-serif text-navy-900"
                >
                    The Voice Behind the Movement
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                    className="text-lg md:text-xl leading-loose text-navy-700/80"
                >
                    Arsalan Moin has dedicated his work to understanding the complexities of the human mind. With over 1.6 million followers on his "Psychological treatment" page, he shares insights that challenge conventional wisdom and empower parents to raise resilient, authentic human beings.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="h-px w-24 bg-gold-500/30 mx-auto origin-center"
                />
            </div>
        </section>
    );
}
