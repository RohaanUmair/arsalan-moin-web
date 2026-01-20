"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const navItems = [
        { label: "ABOUT", href: "#about" },
        { label: "THE BOOK", href: "#book" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="fixed top-0 w-full bg-theme-bg/80 backdrop-blur-md z-50 border-b border-theme-accent/10"
            >
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-theme-text">
                            AM
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-theme-text-muted">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative group hover:text-theme-accent transition-colors py-2"
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-0.5 bg-theme-accent origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: "100%" }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(140, 107, 93, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            className="px-5 py-2 bg-theme-text text-white text-xs tracking-widest hover:bg-theme-accent transition-colors rounded-full"
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
            </motion.nav>
        </>
    );
}
