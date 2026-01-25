'use client';

import { motion } from 'framer-motion';

export default function Card({
    children,
    className = '',
    delay = 0,
    hover = true
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={hover ? {
                y: -8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
            } : {}}
            className={`bg-white rounded-2xl p-6 shadow-lg border border-blue-100 transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
}
