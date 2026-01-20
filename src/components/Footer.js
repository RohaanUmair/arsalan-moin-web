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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.footer
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-theme-text text-theme-surface py-16 px-6 relative overflow-hidden"
        >
            {/* Background accent */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center md:text-left">
                    <h4 className="text-2xl font-serif">Arsalan Moin</h4>
                    <p className="text-sm opacity-60 mt-2">Psychological Treatment</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4">
                    {socialLinks.map(({ icon: Icon, href, label }, index) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                            whileHover={{
                                y: -5,
                                rotate: 10,
                                scale: 1.1,
                                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                className="block p-3 bg-white/5 rounded-full hover:bg-white/15 transition-colors"
                                aria-label={label}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    <Icon size={20} className="opacity-80" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} className="text-xs opacity-40">
                    &copy; {new Date().getFullYear()} Arsalan Moin. All rights reserved.
                </motion.p>
            </motion.div>
        </motion.footer>
    );
}
