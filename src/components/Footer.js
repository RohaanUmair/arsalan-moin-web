"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/psychologicaltreatment", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    return (
        <footer id="contact" className="bg-theme-text text-theme-surface py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-serif">Arsalan Moin</h4>
                    <p className="text-sm opacity-60 mt-2">Psychological Treatment</p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <motion.div
                            key={label}
                            whileHover={{ y: -5, rotate: 5, color: "#ffffff" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                className="block p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                aria-label={label}
                            >
                                <Icon size={20} className="opacity-80 hover:opacity-100" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <p className="text-xs opacity-40">
                    &copy; {new Date().getFullYear()} Arsalan Moin. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
