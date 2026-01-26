"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Book", href: "#book" },
        { label: "Socials", href: "#social" },
        { label: "Journey", href: "#journey" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 glass-card border-b border-navy-100/50" : "py-8 bg-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">

                    {/* Logo/Name */}
                    <Link href="/" className="group flex flex-col">
                        <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? "text-navy-900" : "text-navy-800"}`}>
                            ARSALAN<span className="italic font-light text-navy-400 group-hover:text-gold-500 transition-colors">MOIN</span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-600 opacity-70 group-hover:opacity-100 transition-all">
                            Psychology & Healing
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="nav-link text-xs font-bold uppercase tracking-[0.2em] text-navy-600 hover:text-navy-900 transition-all relative overflow-hidden group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            className="flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-navy-700 transition-all shadow-xl shadow-navy-100 group"
                        >
                            Connect
                            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy-900 focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-card border-b border-navy-100"
                    >
                        <div className="container-custom py-10 flex flex-col space-y-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-serif font-medium text-navy-900 hover:text-gold-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="https://www.facebook.com/psychologicaltreatment"
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                className="bg-navy-900 text-white px-8 py-4 text-center font-bold tracking-widest uppercase text-sm"
                            >
                                Follow on Facebook
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
