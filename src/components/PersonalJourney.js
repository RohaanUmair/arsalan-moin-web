'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './ui/FadeIn';

export default function PersonalJourney() {
    const steps = [
        { year: "Phase I", title: "Observation", desc: "Learning from silence in a noisy world." },
        { year: "Phase II", title: "Empathy", desc: "Understanding pain through shared struggle." },
        { year: "Phase III", title: "Action", desc: "Healing others by healing the self." },
    ];

    return (
        <section className="min-h-screen py-20 flex items-center bg-navy-950 text-white relative">
            <div className="container-custom relative z-10 scale-[0.80] origin-center">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Title Block */}
                    <div className="lg:w-1/3 sticky top-24">
                        <FadeIn>
                            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[0.9] mb-6 tracking-tighter">
                                The <br /> Path.
                            </h2>
                            <p className="text-xl text-navy-200 leading-relaxed font-light max-w-sm">
                                A timeline defined not by years, but by the depth of understanding acquired through silence.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Vertical Timeline - Minimalist */}
                    <div className="lg:w-2/3 pl-0 lg:pl-20 border-l border-white/10 relative">
                        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-gold-500 to-transparent origin-top scale-y-0 animate-[scaleY_2s_ease-out_forwards]"></div>

                        <div className="flex flex-col gap-32">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    className="relative group"
                                >
                                    {/* Circle Node */}
                                    <div className="absolute top-2 -left-[85px] lg:-left-[85px] w-3 h-3 bg-navy-950 border border-white/30 rounded-full group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-500"></div>
                                    <div className="absolute top-3 -left-[80px] lg:-left-[80px] w-20 h-[1px] bg-white/10 group-hover:bg-gold-500/50 transition-colors duration-500"></div>

                                    <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.3em] block mb-4">{step.year}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 group-hover:translate-x-4 transition-transform duration-500">{step.title}</h3>
                                    <p className="text-lg text-white/60 font-light max-w-md group-hover:text-white transition-colors duration-500">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
