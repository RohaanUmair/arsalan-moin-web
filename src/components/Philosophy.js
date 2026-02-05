'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-end justify-start pb-20 lg:pb-32 px-6 lg:px-20">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="/images/am-with-book.png"
                    alt="Philosophy"
                    className="w-full h-full object-cover object-center grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-xl backdrop-blur-md bg-navy-900/30 p-8 rounded-sm border-l-2 border-gold-500"
            >
                <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm">
                    THE PHILOSOPHY
                </span>

                <h2 className="text-4xl md:text-6xl font-serif text-cream-50 leading-[0.9] mb-4 drop-shadow-2xl">
                    "Silence is the <br />
                    <span className="italic text-gold-200">loudest sound.</span>"
                </h2>

                <p className="text-cream-100/80 font-light leading-relaxed max-w-sm">
                    In the quiet spacing between thoughts, we find the architecture of who we truly are.
                </p>
            </motion.div>
        </section>
    )
}
