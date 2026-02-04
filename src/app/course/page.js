'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import { Check, Star, Play, Lock, ChevronDown, Monitor, Book } from 'lucide-react';

// Reusable FAQ/Accordion Component
function AccordionItem({ number, title, subtitle, isOpen, onClick }) {
    return (
        <div className="border-b border-stone-200">
            <button
                onClick={onClick}
                className="w-full text-left py-8 flex items-start gap-6 group"
            >
                <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${isOpen ? 'text-brown-600' : 'text-stone-400'}`}>
                    {number}
                </span>
                <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-serif transition-colors ${isOpen ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'}`}>
                        {title}
                    </h3>
                    <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-stone-600 leading-relaxed max-w-2xl">{subtitle}</p>
                    </motion.div>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-stone-400" />
                </div>
            </button>
        </div>
    );
}

export default function CoursePage() {
    const courseModules = [
        { title: "The Foundation", desc: "Understanding attachment styles and emotional regulation. We begin by looking inward, exploring how your own childhood shapes your parenting style." },
        { title: "Communication", desc: "How to talk so kids will listen, and listen so kids will talk. Master the art of 'active listening' and validation." },
        { title: "Discipline vs Punishment", desc: "Setting boundaries without breaking connection. Learn the difference between controlling behavior and teaching skills." },
        { title: "Emotional Intelligence", desc: "Teaching children to identify and manage their feelings. Tools to help your child navigate big emotions." },
        { title: "The Teenage Brain", desc: "Navigating the turbulent years with empathy. Understanding the neuroscience behind risk-taking and independence." },
        { title: "Parent Self-Care", desc: "You cannot pour from an empty cup. Practical strategies for maintaining your own mental health while raising humans." },
    ];

    const [openModule, setOpenModule] = React.useState(0);

    // Hero Parallax
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div className="bg-[#FDFCF8] min-h-screen">
            <Navbar />

            {/* HER0 - Minimalist & Bold */}
            <section ref={heroRef} className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brown-600 font-bold tracking-widest text-xs uppercase mb-6 block">Online Masterclass</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-stone-900 leading-[0.85] tracking-tight mb-8">
                            Parenting <br />
                            <span className="italic text-stone-400 ml-12 md:ml-24">Guide.</span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-12 items-end mt-16 md:mt-24">
                        <div className="w-full md:w-1/3">
                            <p className="text-stone-600 text-lg leading-relaxed">
                                A 6-week journey into the emotional architecture of raising resilient, connected, and emotionally intelligent children.
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-gold-600">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-stone-400 text-xs ml-2 font-mono uppercase tracking-widest">(1,240 Reviews)</span>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 relative h-[400px] md:h-[500px]">
                            <motion.div style={{ y: yHero }} className="absolute right-0 top-0 w-full h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=60"
                                    alt="Course Cover"
                                    className="absolute right-0 top-0 w-auto h-full max-w-none shadow-[0_50px_100px_-20px_rgba(40,30,20,0.3)] rotate-3 object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction / Problem Statement */}
            <section className="py-24 bg-white border-t border-stone-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-brown-100 rounded-full transform -translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1606107384249-144d6db38563?q=80&w=1000&auto=format&fit=crop" /* Father and child moment */
                                alt="Father and child connection"
                                className="relative rounded-2xl shadow-xl w-full h-auto aspect-[4/5] object-cover grayscale-[0.2]"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-serif text-stone-900 leading-tight mb-6">
                                "The way we talk to our children becomes their inner voice."
                            </h3>
                            <p className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-8">— Peggy O'Mara</p>

                            <div className="space-y-6 text-stone-600 leading-relaxed">
                                <p>
                                    Most parenting advice focuses on behavior modification: how to stop a tantrum, how to get them to sleep, how to make them listen.
                                </p>
                                <p>
                                    <strong className="text-stone-900">But behaviors are just symptoms.</strong>
                                </p>
                                <p>
                                    This course goes deeper. It explores the invisible dynamics that drive behavior—both yours and your child's. It's not a set of scripts; it's a framework for connection that lasts a lifetime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Syllabus - Editorial Accordion */}
            <section className="py-24 bg-[#F5F2EA] overflow-hidden">
                <div className="container-custom">
                    <span className="block text-center text-xs font-bold text-stone-400 uppercase tracking-widest mb-16">The Curriculum</span>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7">
                            {courseModules.map((module, i) => (
                                <AccordionItem
                                    key={i}
                                    number={`0${i + 1}`}
                                    title={module.title}
                                    subtitle={module.desc}
                                    isOpen={openModule === i}
                                    onClick={() => setOpenModule(i)}
                                />
                            ))}
                        </div>
                        <div className="lg:col-span-5 hidden lg:block sticky top-32">
                            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-stone-200">
                                <img
                                    src="https://images.unsplash.com/photo-1502086223501-8351e33e83c4?q=80&w=1000&auto=format&fit=crop" /* Child playing/happy */
                                    alt="Childhood Joy"
                                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 bg-stone-900/10"></div>
                            </div>
                            <div className="mt-4 flex justify-between items-end">
                                <span className="font-serif italic text-stone-500">"Connection before correction."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing CTA - Minimalist */}
            <section className="py-32 bg-navy-900 text-cream-50 relative overflow-hidden" id="buy">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl font-serif mb-8">Invest in their future.</h2>
                    <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
                        Lifetime access to all 6 modules, workbook materials, and our private community.
                    </p>

                    <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-sm max-w-lg w-full">
                        <div className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-4">Complete Access</div>
                        <div className="text-6xl font-serif mb-2">$197</div>
                        <div className="text-stone-400 text-sm mb-8">One-time payment</div>

                        <Button href="#" className="w-full justify-center bg-gold-600 text-navy-950 hover:bg-gold-500 py-4 font-bold tracking-widest uppercas text-sm">
                            Enroll Now
                        </Button>

                        <div className="mt-6 flex flex-col gap-2 text-xs text-stone-500 font-mono">
                            <span className="flex items-center justify-center gap-2"><Monitor className="w-3 h-3" /> Compatible with all devices</span>
                            <span className="flex items-center justify-center gap-2"><Book className="w-3 h-3" /> Includes 40-page digital workbook</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
