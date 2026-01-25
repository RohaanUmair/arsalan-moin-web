'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        /* 
          Sticky Reveal Logic:
          1. Footer is fixed at bottom with z-0
          2. The preceding content needs margin-bottom equal to footer height
          3. OR easier: use the 'sticky bottom-0' pattern but we need to ensure content z-index is higher
        */
        <div
            className="relative h-[80vh] bg-navy-950"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 left-0 w-full h-[80vh] flex flex-col justify-between py-20 px-6 lg:px-20 text-white">

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
                    <span className="text-[20vw] font-serif font-bold text-white">MOIN</span>
                </div>

                <div className="relative z-10 w-full flex justify-between items-start">
                    <div>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold mb-6">Let's Talk.</h3>
                        <div className="flex flex-col gap-2 text-white/60 text-lg">
                            <a href="mailto:hello@arsalanmoin.com" className="hover:text-gold-400 transition-colors">hello@arsalanmoin.com</a>
                            <a href="#" className="hover:text-gold-400 transition-colors">+1 (555) 000-0000</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 text-right">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2">Socials</span>
                            <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
                            <a href="#" className="hover:text-gold-400 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-gold-400 transition-colors">YouTube</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2">Menu</span>
                            <a href="#" className="hover:text-gold-400 transition-colors">Home</a>
                            <a href="#book" className="hover:text-gold-400 transition-colors">The Book</a>
                            <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full border-t border-white/10 pt-8 flex justify-between items-end">
                    <div>
                        <span className="block text-[10vw] leading-[0.8] font-serif font-bold tracking-tighter mix-blend-overlay opacity-50">ARSALAN</span>
                    </div>
                    <p className="text-xs text-white/40 mb-4 hidden md:block">
                        © {currentYear} Arsalan Moin. <br /> All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}
