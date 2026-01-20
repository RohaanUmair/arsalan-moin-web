"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <nav className="fixed top-0 w-full bg-theme-bg/80 backdrop-blur-md z-50 border-b border-theme-accent/10">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-theme-text">
                        AM
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-theme-text-muted">
                        {["ABOUT", "THE BOOK", "CONTACT"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace("the ", "")}`}
                                className="relative group hover:text-theme-accent transition-colors"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            className="px-5 py-2 bg-theme-text text-white text-xs tracking-widest hover:bg-theme-accent transition-colors rounded-full shadow-[0_0_15px_rgba(140,107,93,0.3)] hover:shadow-[0_0_20px_rgba(140,107,93,0.5)]"
                        >
                            FOLLOW
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-theme-accent origin-left"
                    style={{ scaleX }}
                />
            </nav>
        </>
    );
}
