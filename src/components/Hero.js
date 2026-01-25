'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F2F2F2]">

      {/* Dynamic Noise Grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-multiply z-50"></div>

      {/* Massive Abstract Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          style={{ y: y1, x: mousePosition.x * -2 }}
          className="text-[20vw] font-serif font-bold text-white leading-none tracking-tighter mix-blend-difference opacity-50 blur-sm"
        >
          INVISIBLE
        </motion.h1>
      </div>

      <div className="container-custom relative z-10 px-6 scale-[0.80] origin-center">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Super Premium Badge */}
          <FadeIn>
            <div className="mb-8 flex items-center gap-4 justify-center">
              <div className="h-[1px] w-12 bg-navy-900"></div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-navy-900">Psychology & Design</span>
              <div className="h-[1px] w-12 bg-navy-900"></div>
            </div>
          </FadeIn>

          {/* Main Title - Split Effect */}
          <div className="relative mb-10 mix-blend-multiply">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif font-medium text-navy-900 tracking-tight"
              >
                ARSALAN
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif italic font-light text-navy-500 tracking-tight"
              >
                MOIN
              </motion.h1>
            </div>
          </div>

          {/* Floating Imagery */}
          <motion.div
            style={{ y: y2, x: mousePosition.x * 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[400px] md:h-[500px] -z-10 opacity-20 blur-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
              className="w-full h-full object-cover grayscale contrast-125"
              alt="Arsalan Moin"
            />
            <div className="absolute inset-0 bg-gold-400 mix-blend-multiply opacity-20"></div>
          </motion.div>

          <FadeIn delay={0.4} className="max-w-xl mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-none border-l-2 border-navy-900">
            <p className="text-lg md:text-xl text-navy-900 font-sans font-medium leading-relaxed text-justify">
              "Architecture for the invisible. I help parents build the emotional structures that hold their children's future together."
            </p>
          </FadeIn>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ height: [0, 100, 0], top: [0, 100, 200] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-10 w-[1px] bg-navy-900 h-24 overflow-hidden hidden md:block"
      />
      <div className="absolute bottom-10 right-16 -rotate-90 hidden md:block">
        <span className="text-xs font-bold tracking-widest uppercase text-navy-900">Scroll</span>
      </div>

    </section>
  );
}
