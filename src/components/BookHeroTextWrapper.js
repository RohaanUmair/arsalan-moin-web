'use client';

import { motion } from 'framer-motion';

export default function BookHeroTextWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
        >
            {children}
        </motion.div>
    );
}
