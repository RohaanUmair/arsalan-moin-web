import Link from 'next/link';
import CTAClient from './CTAClient';

/**
 * CTA - Server Component
 * SEO-critical heading and CTA text renders on server
 * Animations handled by CTAClient wrapper
 */
export default function CTA() {
    return (
        <CTAClient>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 mb-6 tracking-tight leading-none">
                Start the <span className="italic text-navy-500/60">Invisible Work</span>
            </h2>
            <p className="text-lg md:text-xl text-navy-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join Arsalan's community and start learning the psychology of parenting today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="#buy"
                    className="px-8 py-4 bg-navy-800 text-cream-50 font-bold rounded-full text-base hover:bg-navy-900 transition-all hover:scale-105 active:scale-95"
                >
                    Buy the Book
                </Link>
                <Link
                    href="#social"
                    className="px-8 py-4 bg-transparent border border-navy-200 text-navy-600 rounded-full text-base hover:border-navy-400 hover:text-navy-900 transition-colors"
                >
                    Follow Online
                </Link>
            </div>
        </CTAClient>
    );
}
