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
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-navy-100/50 shadow-lg shadow-black/5" : "py-8 bg-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">

                    {/* Logo/Name */}
                    <Link href="/" className="group flex flex-col">
                        <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? "text-navy-900" : "text-cream-50"}`}>
                            ARSALAN<span className={`italic font-light transition-colors ${scrolled ? "text-navy-600 group-hover:text-navy-900" : "text-cream-200 group-hover:text-white"}`}>MOIN</span>
                        </span>
                        <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-all ${scrolled ? "text-navy-800 pb-1 opacity-60 group-hover:opacity-100" : "text-cream-100 opacity-80 group-hover:opacity-100"}`}>
                            Psychology & Healing
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`nav-link text-xs font-bold uppercase tracking-[0.2em] transition-all relative overflow-hidden group ${scrolled ? "text-navy-800 hover:text-navy-950" : "text-cream-100 hover:text-white"}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${scrolled ? "bg-navy-800" : "bg-white"}`}></span>
                            </Link>
                        ))}

                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            className={`flex items-center gap-2 px-6 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all group ${scrolled ? "bg-navy-800 text-cream-50 hover:bg-navy-900" : "bg-cream-50 text-navy-900 hover:bg-white"}`}
                        >
                            Connect
                            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-60" />
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none p-2 transition-colors ${scrolled || isOpen ? "text-navy-900" : "text-cream-50"}`}
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
                                    className="text-2xl font-serif font-medium text-navy-800 hover:text-navy-400 transition-colors"
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
