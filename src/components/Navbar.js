"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, User, LogOut, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, loading, logout } = useAuth();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close user menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Book", href: "/book" },
        { label: "Course", href: "/course" },
        { label: "Socials", href: "/#social" },
    ];

    const handleLogout = async () => {
        await logout();
        setShowUserMenu(false);
    };

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
                            Psychology &amp; Healing
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

                        {/* Auth Button */}
                        {!loading && (
                            user ? (
                                <div className="relative" ref={menuRef}>
                                    <button
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${scrolled
                                            ? "bg-navy-100 text-navy-800 hover:bg-navy-200"
                                            : "bg-white/10 text-cream-50 hover:bg-white/20"
                                            }`}
                                    >
                                        <User size={14} />
                                        {user.name.split(" ")[0]}
                                    </button>

                                    <AnimatePresence>
                                        {showUserMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-navy-100 overflow-hidden"
                                            >
                                                <div className="px-4 py-3 border-b border-navy-50">
                                                    <p className="text-sm font-semibold text-navy-900">{user.name}</p>
                                                    <p className="text-xs text-navy-400 truncate">{user.email}</p>
                                                </div>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                                >
                                                    <LogOut size={14} />
                                                    Sign Out
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className={`flex items-center gap-2 px-6 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all group ${scrolled ? "bg-navy-800 text-cream-50 hover:bg-navy-900" : "bg-cream-50 text-navy-900 hover:bg-white"}`}
                                >
                                    <LogIn size={14} />
                                    Sign In
                                </Link>
                            )
                        )}
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

                            {/* Mobile Auth */}
                            {!loading && (
                                user ? (
                                    <div className="border-t border-navy-100 pt-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                                                <User size={18} className="text-navy-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-navy-900">{user.name}</p>
                                                <p className="text-xs text-navy-400">{user.email}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => { handleLogout(); setIsOpen(false); }}
                                            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors hover:bg-red-100"
                                        >
                                            <LogOut size={16} />
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="bg-navy-900 text-white px-8 py-4 text-center font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2"
                                    >
                                        <LogIn size={16} />
                                        Sign In
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
