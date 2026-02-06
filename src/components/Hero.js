import Image from 'next/image';
import HeroClient from './HeroClient';

/**
 * Hero - Server Component
 * SEO-critical content (h1, text) renders on server
 * Animations handled by HeroClient wrapper
 */
export default function Hero() {
  return (
    <HeroClient
      backgroundImage={
        <Image
          src="/images/abcd.png"
          alt="Arsalan Moin - Psychological Specialist and Author of The Invisible Work"
          fill
          priority
          unoptimized
          className="object-cover object-top filter grayscale-[0.2]"
        />
      }
    >
      {/* SEO-critical text content - server rendered */}
      <div className="relative z-30 container-custom px-6 pb-12 lg:pb-20 w-full pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold-500/50" />
            <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs text-shadow-sm">
              Psychology & Design
            </span>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-[10vw] lg:text-[6vw] leading-[0.9] font-serif font-medium text-white tracking-tight mb-6 drop-shadow-lg">
              ARSALAN MOIN
            </h1>
          </div>

          <div className="max-w-lg">
            <p className="text-lg md:text-xl text-cream-100 font-sans font-light leading-relaxed border-l-2 border-gold-500/50 pl-6 drop-shadow-md">
              "Architecture for the invisible. Building the emotional structures of the future."
            </p>
          </div>
        </div>
      </div>
    </HeroClient>
  );
}
