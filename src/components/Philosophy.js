import Image from 'next/image';
import PhilosophyClient from './PhilosophyClient';

/**
 * Philosophy - Server Component
 * SEO-critical quote text renders on server
 * Animations handled by PhilosophyClient wrapper
 */
export default function Philosophy() {
    return (
        <PhilosophyClient
            backgroundImage={
                <Image
                    src="/images/am-with-book.png"
                    alt="Arsalan Moin with The Invisible Work - exploring the philosophy of emotional architecture"
                    fill
                    sizes="100vw"
                    className="object-cover object-center grayscale-[0.2]"
                />
            }
        >
            {/* SEO-critical quote content - server rendered */}
            <div className="relative z-10 max-w-xl backdrop-blur-md bg-navy-900/30 p-8 rounded-sm border-l-2 border-gold-500">
                <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm">
                    THE PHILOSOPHY
                </span>

                <h2 className="text-4xl md:text-6xl font-serif text-cream-50 leading-[0.9] mb-4 drop-shadow-2xl">
                    "Silence is the <br />
                    <span className="italic text-gold-200">loudest sound.</span>"
                </h2>

                <p className="text-cream-100/80 font-light leading-relaxed max-w-sm">
                    In the quiet spacing between thoughts, we find the architecture of who we truly are.
                </p>
            </div>
        </PhilosophyClient>
    );
}
