'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';
import { ArrowRight, Star, Book } from 'lucide-react';

export default function BookSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section ref={containerRef} className="min-h-[80vh] py-12 flex items-center bg-navy-900 text-cream-100 relative overflow-hidden">

            {/* Marquee Background - Reduced Opacity */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none">
                <motion.div style={{ x }} className="whitespace-nowrap text-[12vw] font-serif font-bold leading-none">
                    INVISIBLE WORK INVISIBLE WORK INVISIBLE WORK
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* 3D Book Presentation - Simplified */}
                    <div className="w-full lg:w-1/2 flex justify-center perspective-1000 relative">
                        {/* Static Subtle Shadow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-black/5 blur-[60px] rounded-full pointer-events-none"></div>

                        <motion.div
                            style={{ rotateY: rotate, scale }}
                            className="relative z-10 w-[280px] md:w-[400px] aspect-[2/3] shadow-2xl bg-navy-800 rounded-sm overflow-hidden border-r-2 border-white/5"
                        >
                            <img
                                src="/images/book.jpeg"
                                alt="The Invisible Work"
                                className="w-full h-full object-cover"
                            />

                            {/* Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-20 pointer-events-none mix-blend-overlay"></div>
                        </motion.div>
                    </div>

                    {/* Minimalist Editorial Content - Compact Spacing */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-gold-500"></div>
                                <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Best Seller</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[0.95] text-cream-50">
                                Raise a Human, <br />
                                <span className="italic text-cream-200/50">Not a Tourist.</span>
                            </h2>

                            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">39+</h4>
                                    <p className="text-white/50 text-xs uppercase tracking-wider">Pages of insight</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">4.9/5</h4>
                                    <p className="text-white/50 text-xs uppercase tracking-wider">Reader Rating</p>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-light leading-relaxed max-w-md">
                                Most parenting advice focuses on the visible behaviors. This book reveals the <span className="text-white font-medium border-b border-gold-500">invisible emotional architecture</span> that determines your child's future.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button variant="outline" href="#buy" className="text-cream-50 border-cream-200/20 hover:bg-cream-200/5 hover:text-black">
                                    Purchase Copy
                                </Button>
                                <button className="text-cream-200/60 hover:text-cream-50 transition-colors flex items-center gap-3 group uppercase tracking-widest text-xs font-bold">
                                    Read Chapter One
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
