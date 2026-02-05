'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Play, BookOpen, Users } from 'lucide-react';

export default function CourseSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax and smooth transitions
    const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section ref={containerRef} className="py-32 bg-navy-950 relative overflow-hidden">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-[0.02] select-none">
                <span className="text-[15vw] font-serif font-bold text-white leading-none">MASTERCLASS</span>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <motion.span
                            variants={itemVariants}
                            className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-gold-500/10 text-gold-400 text-[10px] font-bold tracking-[0.3em] mb-6"
                        >
                            ENROLL NOW
                        </motion.span>
                        <motion.h2
                            variants={itemVariants}
                            className="text-5xl md:text-8xl font-serif text-cream-50 leading-[0.85] tracking-tighter"
                        >
                            Conscious <br />
                            <span className="italic text-gold-500 font-light">Parenting.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="hidden md:block pb-2 text-right"
                    >
                        <p className="text-navy-300 font-mono text-[10px] tracking-[0.2em] uppercase">Series 01 // 2024</p>
                        <p className="text-gold-500/50 font-serif italic text-lg mt-2">The Architecture of Connection</p>
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Visual Area */}
                    <div className="lg:col-span-7 relative group">
                        <motion.div
                            style={{ scale: imageScale }}
                            className="relative overflow-hidden aspect-[16/10] rounded-sm bg-navy-900 border border-white/5 shadow-2xl"
                        >
                            <img
                                src="/images/stage.jpeg"
                                alt="Conscious Parenting Course"
                                className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                            {/* Play Button Overlay */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 shadow-2xl backdrop-blur-sm"
                            >
                                <Play className="w-8 h-8 fill-current translate-x-1" />
                            </motion.button>
                        </motion.div>

                        {/* Floating Stats/Feature Card */}
                        <motion.div
                            style={{ y: smoothY }}
                            className="absolute -bottom-12 -right-6 md:-right-12 p-8 bg-navy-900 border border-gold-500/20 rounded-sm shadow-2xl backdrop-blur-xl z-20 hidden md:block max-w-[280px]"
                        >
                            <BookOpen className="w-6 h-6 text-gold-500 mb-4" />
                            <h4 className="text-cream-50 font-serif text-xl mb-2">Mastering Connection</h4>
                            <p className="text-navy-300 text-xs leading-relaxed">A 6-week guided journey into the heart of emotional intelligence and generational healing.</p>
                            <div className="mt-6 flex items-center gap-3">
                                <Users className="w-4 h-4 text-gold-500/50" />
                                <span className="text-[10px] font-bold text-navy-400 tracking-widest uppercase">1,200+ Students</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Area */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-12">
                            <motion.p
                                variants={itemVariants}
                                className="text-2xl md:text-3xl text-cream-100 font-serif leading-relaxed italic"
                            >
                                "We cannot raise our children if we haven't raised ourselves first."
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Duration</span>
                                    <p className="text-cream-50/80 font-light">6 Intensive Weeks</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Access</span>
                                    <p className="text-cream-50/80 font-light">Lifetime Content</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col gap-2"
                            >
                                {[
                                    { label: "Deep Dive Curriculum", href: "#" },
                                    { label: "Student Testimonials", href: "#" },
                                    { label: "Join the Community", href: "#" }
                                ].map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        className="group flex items-center justify-between border-b border-white/5 py-5 hover:border-gold-500/50 transition-all"
                                    >
                                        <span className="text-cream-50/70 group-hover:text-gold-400 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold">
                                            {link.label}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-navy-400 group-hover:text-gold-400 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-6">
                                <button className="w-full md:w-auto px-12 py-5 bg-gold-500 text-navy-950 font-bold uppercase tracking-[0.2em] text-xs rounded-none hover:bg-gold-400 transition-all shadow-xl hover:shadow-gold-500/20">
                                    Enroll in Masterclass
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
