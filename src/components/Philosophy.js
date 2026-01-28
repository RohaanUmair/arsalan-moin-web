'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './ui/FadeIn';

export default function Philosophy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-end justify-center overflow-hidden bg-navy-900">

            {/* Full Screen Background Image - Male Model atmospheric */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 h-[120%]"
            >
                {/* Very minimal overlay, just enough for the bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-90"></div>

                <img
                    // Male figure in vast nature, contemplative, full body
                    src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1927&auto=format&fit=crop"
                    alt="Philosophy"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Minimalist Centered Content at Bottom */}
            <div className="relative z-20 text-center px-6 pb-20 w-full max-w-4xl">
                <FadeIn>
                    {/* Small Pill Label */}
                    <div className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8">
                        <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">The Philosophy</span>
                    </div>
                </FadeIn>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-serif text-white leading-tight font-medium drop-shadow-xl"
                >
                    "Silence is the loudest sound."
                </motion.h3>
            </div>
        </section>
    );
}
