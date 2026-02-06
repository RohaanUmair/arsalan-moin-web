'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

/**
 * PersonalJourney - Client Component (complex timeline animations)
 * SEO text is still rendered but wrapped in client for animations
 */
export default function PersonalJourney() {
    const containerRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 50, 150, 250]);
    const smoothTitleY = useSpring(titleY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const steps = [
        { year: "Phase I", title: "Observation", desc: "Learning from silence in a noisy world." },
        { year: "Phase II", title: "Empathy", desc: "Understanding pain through shared struggle." },
        { year: "Phase III", title: "Action", desc: "Healing others by healing the self." },
    ];

    return (
        <section ref={containerRef} className="py-20 lg:py-32 bg-navy-900 text-cream-50 relative overflow-visible px-4 md:px-0">
            <div className="container-custom relative z-10">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Title Block */}
                    <motion.div
                        className="lg:w-1/3 mb-10 lg:mb-0"
                        style={{ y: isLargeScreen ? smoothTitleY : 0 }}
                    >
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream-50 leading-[1.1] lg:leading-[0.9] mb-6 tracking-tighter">
                                The Path.
                            </h2>
                            <p className="text-xl text-navy-200 leading-relaxed font-light max-w-sm">
                                A timeline defined not by years, but by the depth of understanding acquired through silence.
                            </p>
                        </FadeIn>
                    </motion.div>

                    {/* Vertical Timeline */}
                    <div className="lg:w-2/3 pl-8 lg:pl-20 border-l border-white/5 relative">
                        {/* Animated Timeline Line */}
                        <motion.div
                            style={{ scaleY }}
                            className="absolute top-0 left-[-1px] w-[2px] h-full bg-navy-300 origin-top z-10"
                        />

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
                                    <motion.div
                                        initial={{ backgroundColor: "#102a43", borderColor: "#243b53" }}
                                        whileInView={{ backgroundColor: "#d4a84b", borderColor: "#d4a84b" }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: i * 0.3 }}
                                        className="absolute top-2 -left-[36px] lg:-left-[85px] w-3 h-3 border rounded-none z-20"
                                    />

                                    <div className="absolute top-3 -left-[32px] lg:-left-[80px] w-8 lg:w-20 h-[1px] bg-white/10 group-hover:bg-gold-500/50 transition-colors duration-500" />

                                    <span className="text-xs font-bold text-navy-400 uppercase tracking-[0.3em] block mb-4">{step.year}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-cream-100 mb-6 group-hover:translate-x-4 transition-transform duration-500">{step.title}</h3>
                                    <p className="text-lg text-navy-400 font-light max-w-md group-hover:text-cream-200 transition-colors duration-500">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
