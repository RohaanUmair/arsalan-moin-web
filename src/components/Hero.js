'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import FadeIn from './ui/FadeIn';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-navy-900">

      {/* FULL SCREEN BACKGROUND IMAGE */}
      <motion.div
        style={{ scale: 1.05, y: yBg, x: mousePosition.x }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-navy-900/10 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/40 to-transparent z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop"
          className="w-full h-full object-cover object-top opacity-60 filter grayscale-[0.6]"
          alt="Arsalan Moin"
        />
      </motion.div>

      {/* TEXT CONTENT */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-30 container-custom px-6 pb-12 lg:pb-20 w-full"
      >
        <div className="max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-navy-500/30"></div>
              <span className="text-navy-500 font-bold tracking-[0.3em] uppercase text-xs">Psychology & Design</span>
            </div>
          </FadeIn>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-[10vw] lg:text-[7vw] leading-[0.9] font-serif font-medium text-navy-100 tracking-tight mb-6"
            >
              ARSALAN MOIN
            </motion.h1>
          </div>

          <FadeIn delay={0.4} className="max-w-lg">
            <p className="text-lg md:text-xl text-navy-400 font-sans font-light leading-relaxed border-l-2 border-navy-500/20 pl-6">
              "Architecture for the invisible. Building the emotional structures of the future."
            </p>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
