'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BookPageHero() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center relative perspective-1000"
        >
            <div className="relative group">
                {/* Animated Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-400/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Book 3D Container */}
                <motion.div
                    whileHover={{
                        rotateY: -5,
                        rotateX: 2,
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-[300px] md:w-[400px] aspect-[2/3] shadow-2xl shadow-navy-950/50 bg-navy-900 rounded-sm overflow-hidden transform-style-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <Image
                        src="/images/book.jpeg"
                        alt="The Invisible Work Book Cover"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 300px, 400px"
                    />
                    {/* Lighting/Sheen Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 mix-blend-overlay pointer-events-none" />

                    {/* Spine Hint (Left Shadow) */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2%] bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </motion.div>
    );
}
