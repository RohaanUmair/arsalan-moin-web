'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * BookSectionClient - Client wrapper for BookSection animations
 * Handles marquee parallax effect and section container
 */
export default function BookSectionClient({ children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="min-h-[80vh] py-12 flex items-center bg-navy-900 text-cream-100 relative overflow-hidden">
            {/* Marquee Background - Reduced Opacity */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none">
                <motion.div style={{ x }} className="whitespace-nowrap text-[12vw] font-serif font-bold leading-none">
                    INVISIBLE WORK INVISIBLE WORK INVISIBLE WORK
                </motion.div>
            </div>

            {children}
        </section>
    );
}
