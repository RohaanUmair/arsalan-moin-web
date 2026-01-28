'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-navy-900 group">

            {/* Full Screen Background Image - Male Speaking/Professional */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Minimal darken */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                <img
                    // Male professional model, energetic/speaking stance, full body
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=1887&auto=format&fit=crop"
                    alt="Start the Invisible Work"
                    className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
                />
            </div>

            {/* Content Overlay - Floating Layout */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col md:flex-row items-end justify-between gap-8">

                <div className="max-w-2xl">
                    <FadeIn>
                        <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Work with Arsalan</p>
                    </FadeIn>
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-white font-medium tracking-tight mb-2"
                    >
                        Speaking & <br /> Consulting
                    </motion.h2>
                </div>

                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white text-navy-900 font-bold rounded-full hover:bg-gold-400 transition-colors flex items-center gap-2">
                        Book for Event <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </section>
    );
}
