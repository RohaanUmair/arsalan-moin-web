'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        /* 
          Sticky Reveal Logic:
          - The container provides the scroll space
          - The inner div is fixed at the bottom to create the reveal effect
        */
        <footer
            className="relative h-[70vh] md:h-[80vh] bg-navy-950"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 left-0 w-full h-[70vh] md:h-[80vh] flex flex-col justify-between py-12 md:py-20 px-6 lg:px-20 text-white bg-navy-950">

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
                    <span className="text-[25vw] md:text-[20vw] font-serif font-bold text-white whitespace-nowrap">MOIN</span>
                </div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-navy-200">Let's Talk.</h2>
                        <div className="flex flex-col gap-2 text-navy-400 text-lg">
                            <a href="mailto:hello@arsalanmoin.com" className="hover:text-navy-200 transition-colors">hello@arsalanmoin.com</a>
                            <a href="#" className="hover:text-navy-200 transition-colors">+1 (555) 000-0000</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 text-left md:text-right w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-navy-500 mb-2">Socials</span>
                            <a href="#" className="hover:text-navy-200 transition-colors text-sm md:text-base">Instagram</a>
                            <a href="#" className="hover:text-navy-200 transition-colors text-sm md:text-base">Twitter</a>
                            <a href="#" className="hover:text-navy-200 transition-colors text-sm md:text-base">YouTube</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-navy-500 mb-2">Menu</span>
                            <a href="#" className="hover:text-navy-200 transition-colors text-sm md:text-base">Home</a>
                            <a href="#book" className="hover:text-navy-200 transition-colors text-sm md:text-base">The Book</a>
                            <a href="#about" className="hover:text-navy-200 transition-colors text-sm md:text-base">About</a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
                    <div>
                        <span className="block text-[15vw] md:text-[10vw] leading-[0.8] font-serif font-bold tracking-tighter mix-blend-overlay opacity-20">ARSALAN</span>
                    </div>
                    <div className="md:mb-4 text-center md:text-right">
                        <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">
                            © {currentYear} Arsalan Moin. <br className="hidden md:block" /> All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
