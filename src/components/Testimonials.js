'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const carouselRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="min-h-screen py-20 flex flex-col justify-center bg-[#F2F2F2] overflow-hidden relative border-t border-navy-900/5 cursor-grab active:cursor-grabbing">

            <div className="w-full scale-[0.80] origin-center">
                <div className="container-custom mb-10 px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-navy-500 block mb-2">Reviews</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-medium text-navy-900 tracking-tight">Voices of Change</h2>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-navy-400 uppercase text-xs tracking-widest font-bold">Drag to explore</p>
                        </div>
                    </div>
                </div>

                <div className="pl-6 md:pl-[max(2rem,calc((100vw-1280px)/2))] overflow-hidden">
                    <motion.div
                        ref={carouselRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8 md:gap-12"
                    >
                        {/* Card 1 - Editorial */}
                        <div className="min-w-[300px] md:min-w-[400px] bg-white p-10 md:p-14 shadow-xl shadow-navy-100/50">
                            <p className="text-2xl font-serif leading-relaxed text-navy-900 mb-10">
                                "This isn't just a book. It's a mirror that showed me the parent I wanted to be but didn't know how to become."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center font-serif text-xl italic">S</div>
                                <div>
                                    <div className="font-bold text-navy-900 uppercase tracking-wide text-sm">Sarah Jenkins</div>
                                    <div className="text-xs text-navy-400 uppercase tracking-wider">Mother of 3</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Dark */}
                        <div className="min-w-[280px] md:min-w-[350px] bg-navy-900 p-10 flex flex-col justify-between text-white">
                            <div>
                                <div className="text-6xl text-gold-500 font-serif mb-6 opacity-50">"</div>
                                <p className="text-white/80 leading-relaxed font-light">"Finally practical advice that doesn't feel like a lecture. Arsalan understands the real struggles of modern parenting."</p>
                            </div>
                            <div className="mt-8 border-t border-white/10 pt-6">
                                <span className="font-bold text-gold-400 block mb-1">Mark D.</span>
                                <span className="text-xs text-white/40 uppercase tracking-widest">Father</span>
                            </div>
                        </div>

                        {/* Card 3 - Image */}
                        <div className="min-w-[300px] md:min-w-[400px] relative group overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=400&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <p className="text-white text-xl font-serif font-medium mb-2">"Life changing content."</p>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-1 bg-gold-400"></div>)}
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Minimal */}
                        <div className="min-w-[250px] bg-gold-400 p-10 flex flex-col justify-center items-center text-center">
                            <span className="text-6xl font-bold text-navy-900 mb-2">4.9</span>
                            <div className="flex gap-1 mb-6 text-navy-900">
                                <Star className="fill-navy-900 w-4 h-4" />
                                <Star className="fill-navy-900 w-4 h-4" />
                                <Star className="fill-navy-900 w-4 h-4" />
                                <Star className="fill-navy-900 w-4 h-4" />
                                <Star className="fill-navy-900 w-4 h-4" />
                            </div>
                            <p className="text-navy-900 font-bold uppercase tracking-widest text-xs">Average Rating <br /> on Amazon</p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
