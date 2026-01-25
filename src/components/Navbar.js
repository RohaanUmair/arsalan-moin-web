"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Facebook } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Book", href: "#book" },
        { label: "Social Media", href: "#social" },
        { label: "Journey", href: "#journey" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary">
                            Arsalan Moin
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-text-muted hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
                        >
                            <Facebook size={18} />
                            Follow
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-muted hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-blue-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-text-muted hover:text-primary hover:bg-surface rounded-md transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="https://www.facebook.com/psychologicaltreatment"
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-primary font-bold flex items-center gap-2"
                        >
                            <Facebook size={18} />
                            Follow on Facebook
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
