'use client';

import { motion } from 'framer-motion';
import FadeIn from './ui/FadeIn';

export default function CTA() {
    return (
        <section className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-navy-50 to-white overflow-hidden relative border-t border-navy-100">
            <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 mb-6 tracking-tight leading-none">
                        Start the <span className="italic text-navy-500">Invisible Work</span>
                    </h2>
                    <p className="text-lg md:text-xl text-navy-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Join Arsalan's community and start learning the psychology of parenting today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#buy" className="px-8 py-4 bg-navy-600 text-white font-bold rounded-full text-base hover:bg-navy-700 transition-all shadow-lg shadow-navy-200 hover:scale-105 active:scale-95">
                            Buy the Book
                        </a>
                        <a href="#social" className="px-8 py-4 bg-white border border-navy-200 text-navy-600 rounded-full text-base hover:border-navy-400 hover:text-navy-900 transition-colors hover:bg-navy-50">
                            Follow Online
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-navy-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        </section>
    );
}
