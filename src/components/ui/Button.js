'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Button({
    children,
    variant = 'primary',
    href = '#',
    className = '',
    onClick
}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic pull strength
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseClasses = "relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block overflow-hidden group";

    const variants = {
        primary: "bg-navy-800 text-cream-50 hover:bg-navy-900",
        secondary: "bg-transparent text-navy-800 border border-navy-200 hover:border-navy-400",
        white: "bg-cream-100 text-navy-800 hover:bg-cream-200"
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            <span className="relative z-10">{children}</span>

            {/* Fill Effect */}
            <div className="absolute inset-0 bg-navy-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
        </Component>
    );
}
