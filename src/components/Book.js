"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Book() {
    return (
        <section id="book" className="min-h-[90vh] flex items-center px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto bg-[#eaddcf] rounded-2xl p-8 md:p-16 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                        whileHover={{ rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] shadow-2xl transition-transform duration-500"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop"
                            alt="The Invisible Work Book Cover"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                        >
                            <motion.h3 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-sm font-bold tracking-widest text-theme-text/60 uppercase">
                                The Best Seller
                            </motion.h3>
                            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl md:text-6xl font-serif text-theme-text mt-2">
                                The Invisible Work
                            </motion.h2>
                            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-xl italic text-theme-accent mt-4">
                                "A parent's guide to raise a human, not tourist."
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-theme-text/80 leading-relaxed mt-6">
                                This book is not just a guide; it's a mirror for every parent. Discover the unseen efforts that shape a child's character and future.
                            </motion.p>
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest w-full md:w-auto shadow-lg"
                                >
                                    ORDER YOUR COPY
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
