'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function CourseSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const shift = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section ref={containerRef} className="py-32 bg-[#EAE6DB] relative overflow-hidden">

            {/* Grain/Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

            <div className="container-custom relative z-10">

                {/* Header - Editorial Style */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-300 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-xs font-bold text-stone-500 uppercase tracking-[0.2em] mb-4">The Masterclass</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9]">
                            Conscious <br />
                            <span className="italic text-stone-400">Parenting.</span>
                        </h2>
                    </motion.div>

                    <div className="hidden md:block pb-2">
                        <span className="text-stone-500 font-mono text-xs">EST. 2024 — SERIES 01</span>
                    </div>
                </div>

                <div className="relative">
                    {/* Large "Hero" Image Area */}
                    <div className="grid lg:grid-cols-12 gap-0 lg:gap-8 items-center">

                        {/* Image Side */}
                        <div className="lg:col-span-7 relative group cursor-pointer">
                            <motion.div
                                style={{ scale }}
                                className="relative overflow-hidden aspect-[4/3] bg-stone-200"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544256248-39659b9a67e3?q=80&w=1500&auto=format&fit=crop"
                                    alt="Parenting Course"
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 grayscale-[0.2]"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                            </motion.div>

                            {/* Floating "Book" or "Course" Cover - Absolute Positioned */}
                            <motion.div
                                style={{ y: shift }}
                                className="absolute -bottom-10 -right-10 w-48 md:w-64 shadow-2xl shadow-black/30 hidden md:block"
                            >
                                <div className="w-full aspect-[2/3] bg-stone-100 rounded-sm border-l-2 border-white/10 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=60" // Valid Unsplash placeholder
                                        alt="Course Guide"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="font-serif text-white text-lg leading-tight">Mastering Connection</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-5 pt-12 lg:pt-0 lg:pl-12">
                            <div className="space-y-10">
                                <p className="text-xl md:text-2xl text-stone-800 font-serif leading-relaxed">
                                    "We cannot raise our children if we haven't raised ourselves first."
                                </p>

                                <div className="w-12 h-[1px] bg-stone-400"></div>

                                <p className="text-stone-600 leading-loose text-sm md:text-base max-w-sm">
                                    Join a global community of parents committed to breaking generational cycles. A 6-week guided journey into the heart of emotional intelligence.
                                </p>

                                <div className="flex flex-col gap-4">
                                    <a href="/course" className="group flex items-center justify-between border-b border-stone-300 py-4 hover:border-stone-900 transition-colors">
                                        <span className="text-stone-900 font-medium tracking-wide">Explore Curriculum</span>
                                        <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                    <a href="/course" className="group flex items-center justify-between border-b border-stone-300 py-4 hover:border-stone-900 transition-colors">
                                        <span className="text-stone-900 font-medium tracking-wide">Student Stories</span>
                                        <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </div>

                                <div className="pt-8">
                                    <Button href="/course" variant="primary" className="bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none w-full md:w-auto px-10">
                                        Begin The Journey
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
