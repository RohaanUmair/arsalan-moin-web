'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * PhilosophyClient - Client wrapper for Philosophy section animations
 * Handles parallax background and fade-in content effects
 */
export default function PhilosophyClient({ children, backgroundImage }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-end justify-start pb-20 lg:pb-32 px-6 lg:px-20">
            {/* Background with parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                {backgroundImage}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
            </motion.div>

            {/* Content with fade-in animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </section>
    );
}
