'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * HeroClient - Client wrapper for Hero section animations
 * Handles parallax, mouse tracking, and scroll opacity effects
 */
export default function HeroClient({ children, backgroundImage }) {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 10,
                y: (e.clientY / window.innerHeight - 0.5) * 10,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-navy-900">
            {/* Background with parallax and mouse tracking */}
            <motion.div
                style={{ scale: 1.05, y: yBg, x: mousePosition.x }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent z-10" />
                {backgroundImage}
            </motion.div>

            {/* Text content with opacity fade on scroll */}
            <motion.div
                style={{ opacity: opacityText }}
                className="w-full"
            >
                {children}
            </motion.div>
        </section>
    );
}
