'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './ui/FadeIn';

export default function SocialInfluence() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="min-h-screen py-20 flex items-center bg-cream-50 relative overflow-hidden">
            <div className="container-custom relative z-10">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sticky Content Side */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32">
                            <FadeIn>
                                <div className="inline-block px-4 py-2 bg-navy-50 border border-navy-100 rounded-full text-xs font-bold text-navy-600 uppercase tracking-widest mb-8">
                                    Digital Impact
                                </div>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy-900 mb-8 leading-[0.9] tracking-tight">
                                    1.6M+ <br />
                                    <span className="text-4xl md:text-5xl lg:text-5xl italic font-light text-navy-500/40 block mt-2">Lives <br /> Impacted</span>
                                </h2>
                                <p className="text-lg text-navy-700 mb-12 leading-relaxed max-w-sm">
                                    Arsalan's digital presence creates a safe space for millions to discuss mental health, parenting, and emotional well-being.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {['Instagram', 'Facebook', 'YouTube'].map((platform, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05, backgroundColor: "#102a43", color: "#fffbf5" }}
                                            className="px-6 py-3 bg-cream-100 border border-navy-200 text-navy-800 text-sm font-bold rounded-none shadow-sm cursor-pointer transition-colors"
                                        >
                                            {platform}
                                        </motion.div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Masonry / Scattered Layout Side */}
                    <div className="lg:col-span-7 pt-20 lg:pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

                            {/* Column 1 */}
                            <motion.div style={{ y }} className="flex flex-col gap-8 pt-0 md:pt-24">
                                <div className="bg-navy-900 p-8 shadow-xl shadow-black/10 rounded-sm text-cream-50 relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-navy-100 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                    <div className="text-5xl font-serif text-gold-500 mb-6 opacity-50">"</div>
                                    <p className="text-xl font-medium mb-6 relative z-10">Your video on "Shadow Work" saved my marriage.</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                                        <span className="text-xs text-white/60 font-bold uppercase tracking-widest">@TopFan123</span>
                                    </div>
                                </div>

                                <div className="bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] relative group">
                                    <img
                                        src="/images/stage.jpeg"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                        <span className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">Viral</span>
                                        <h4 className="font-serif text-2xl text-white">The Art of Listening</h4>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Column 2 */}
                            <motion.div className="flex flex-col gap-8">
                                <div className="bg-white rounded-sm p-10 border border-navy-100 flex flex-col items-center justify-center text-center aspect-square shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-500">
                                    <span className="block text-6xl md:text-7xl font-bold text-navy-900 mb-2">500k</span>
                                    <span className="text-sm text-navy-400 uppercase tracking-widest font-bold">Total Shares</span>
                                </div>

                                <div className="bg-navy-100 p-8 rounded-sm shadow-sm relative overflow-hidden group border border-navy-200">
                                    <p className="text-navy-800 font-serif italic text-lg mb-6 relative z-10">"Finally someone explained anxiety in a way my parents understand."</p>
                                    <span className="text-xs font-bold text-navy-500 uppercase tracking-widest">- Sarah K.</span>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
