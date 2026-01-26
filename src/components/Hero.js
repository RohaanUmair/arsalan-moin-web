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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-50">

      {/* Dynamic Noise Grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-multiply z-50"></div>

      {/* Floating Premium Background Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-navy-100/30 rounded-full blur-[100px] animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-gold-100/20 rounded-full blur-[100px] animate-float-slow [animation-delay:2s] pointer-events-none"></div>

      {/* Massive Abstract Background Typography - Stroke Version */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          style={{ y: y1, x: mousePosition.x * -1.5 }}
          className="text-[25vw] font-serif font-black text-stroke opacity-20 leading-none tracking-tighter"
        >
          INVISIBLE
        </motion.h1>
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Typography & Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Super Premium Badge */}
            <FadeIn>
              <div className="mb-8 flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-[1px] w-12 bg-navy-400"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-navy-500">Psychology & Design</span>
              </div>
            </FadeIn>

            {/* Main Title - Split Effect */}
            <div className="relative mb-8">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] lg:text-[8vw] leading-[0.85] font-serif font-medium text-navy-900 tracking-tight text-shine relative z-10"
              >
                ARSALAN
              </motion.h1>
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] lg:text-[8vw] leading-[0.85] font-serif italic text-navy-700 tracking-tight"
              >
                MOIN
              </motion.h1>
            </div>

            <FadeIn delay={0.4} className="max-w-xl mx-auto lg:mx-0 p-6 lg:p-0 border-l-2 lg:border-l-4 border-gold-500/50">
              <p className="text-lg md:text-xl text-navy-800 font-sans font-medium leading-relaxed text-left lg:max-w-md">
                "Architecture for the invisible. I help parents build the emotional structures that hold their children's future together."
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Imagery */}
          <div className="relative order-1 lg:order-2 flex justify-center perspective-1000 group">

            {/* Ambient Aura behind image */}
            <motion.div
              style={{
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-400/10 blur-[80px] rounded-full pointer-events-none"
            ></motion.div>

            <motion.div
              style={{ y: y2, x: mousePosition.x * 0.5 }}
              className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 bg-navy-900 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face"
                className="w-full h-full object-cover grayscale contrast-110 border border-white/20 transition-all duration-700 group-hover:grayscale-0"
                alt="Arsalan Moin"
              />

              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-gold-500 opacity-40 group-hover:opacity-100 group-hover:-top-8 group-hover:-right-8 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-gold-500 opacity-40 group-hover:opacity-100 group-hover:-bottom-8 group-hover:-left-8 transition-all duration-500"></div>
            </motion.div>
          </div>

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
