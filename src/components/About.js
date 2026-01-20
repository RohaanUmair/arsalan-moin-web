"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-[90vh] flex items-center bg-theme-surface px-6">
            <div className="max-w-3xl mx-auto text-center space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-serif text-theme-text"
                >
                    The Voice Behind the Movement
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl leading-loose text-theme-text/80"
                >
                    Arsalan Moin has dedicated his work to understanding the complexities of the human mind. With over 1.6 million followers on his "Psychological treatment" page, he shares insights that challenge conventional wisdom and empower parents to raise resilient, authentic human beings.
                </motion.p>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-px w-24 bg-theme-accent/30 mx-auto"
                />
            </div>
        </section>
    );
}
