'use client';

import FadeIn from './ui/FadeIn';

/**
 * CTAClient - Client wrapper for CTA section animations
 */
export default function CTAClient({ children }) {
    return (
        <section className="min-h-screen py-20 flex items-center justify-center bg-cream-50 overflow-hidden relative border-t border-navy-100">
            <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    {children}
                </FadeIn>
            </div>
        </section>
    );
}
