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
        <section ref={containerRef} className="min-h-screen py-20 flex items-center bg-navy-900 text-white relative overflow-hidden">

            {/* Marquee Background */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
                <motion.div style={{ x }} className="whitespace-nowrap text-[12vw] font-serif font-bold leading-none">
                    INVISIBLE WORK INVISIBLE WORK INVISIBLE WORK
                </motion.div>
            </div>

            <div className="container-custom relative z-10 scale-[0.80] origin-center">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* 3D Book Presentation */}
                    <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
                        <motion.div
                            style={{ rotateY: rotate, scale }}
                            className="relative z-10 w-[300px] md:w-[450px] aspect-[2/3] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-navy-800"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=450&h=675&fit=crop"
                                alt="The Invisible Work"
                                className="w-full h-full object-cover"
                            />

                            {/* Gloss / Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none"></div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-10 bg-white text-navy-900 p-6 max-w-[200px] shadow-2xl z-20 hidden md:block"
                        >
                            <Book className="w-8 h-8 mb-4 text-gold-500" />
                            <p className="font-serif italic text-lg leading-tight">"A masterpiece of emotional intelligence."</p>
                        </motion.div>
                    </div>

                    {/* Minimalist Editorial Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-[1px] bg-gold-500"></div>
                                <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Best Seller</span>
                            </div>

                            <h2 className="text-6xl md:text-7xl font-serif font-medium leading-[0.9]">
                                Raise a Human, <br />
                                <span className="italic text-white/50">Not a Tourist.</span>
                            </h2>

                            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">300+</h4>
                                    <p className="text-white/50 text-sm uppercase tracking-wider">Pages of insight</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">4.9/5</h4>
                                    <p className="text-white/50 text-sm uppercase tracking-wider">Reader Rating</p>
                                </div>
                            </div>

                            <p className="text-xl text-white/80 font-light leading-relaxed max-w-md">
                                Most parenting advice focuses on the visible behaviors. This book reveals the <span className="text-white font-medium border-b border-gold-500">invisible emotional architecture</span> that determines your child's future.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-8">
                                <Button variant="white" href="#buy">
                                    Purchase Copy
                                </Button>
                                <button className="text-white hover:text-gold-500 transition-colors flex items-center gap-3 group uppercase tracking-widest text-xs font-bold">
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
