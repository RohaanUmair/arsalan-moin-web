'use client';

import { motion } from 'framer-motion';
import FadeIn from './ui/FadeIn';

export default function CTA() {
    return (
        <section className="min-h-screen py-20 flex items-center justify-center bg-cream-50 overflow-hidden relative border-t border-navy-100">
            <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 mb-6 tracking-tight leading-none">
                        Start the <span className="italic text-navy-500/60">Invisible Work</span>
                    </h2>
                    <p className="text-lg md:text-xl text-navy-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Join Arsalan's community and start learning the psychology of parenting today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#buy" className="px-8 py-4 bg-navy-800 text-cream-50 font-bold rounded-full text-base hover:bg-navy-900 transition-all hover:scale-105 active:scale-95">
                            Buy the Book
                        </a>
                        <a href="#social" className="px-8 py-4 bg-transparent border border-navy-200 text-navy-600 rounded-full text-base hover:border-navy-400 hover:text-navy-900 transition-colors">
                            Follow Online
                        </a>
                    </div>
                </FadeIn>
            </div>

        </section>
    );
}
