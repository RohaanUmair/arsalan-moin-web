'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedSection - A client-side wrapper for scroll-based parallax effects
 * Keeps animation logic separate from server-rendered content
 */
export default function AnimatedSection({
    children,
    className = '',
    parallaxY = true,
    parallaxAmount = 100,
    fadeOnScroll = false,
}) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, parallaxAmount]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                y: parallaxY ? y : 0,
                opacity: fadeOnScroll ? opacity : 1,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
