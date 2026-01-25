import { BookOpen, ShoppingCart } from "lucide-react";

export default function Book() {
    return (
        <section id="book" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content Left */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-sm">
                            <BookOpen size={20} />
                            <span>New Release</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-text mb-2">
                            The Invisible Work
                        </h2>
                        <h3 className="text-2xl text-accent font-medium mb-6">
                            A Parent’s Guide to Raise a Human, Not a Tourist
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-2xl">
                            Arsalan Moin’s book teaches parents how to understand the unseen emotional needs of their children.
                            It guides parents to raise emotionally intelligent, independent, and empathetic children,
                            focusing on the invisible work that shapes their character.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg"
                            >
                                <ShoppingCart size={20} />
                                Buy eBook
                            </a>
                        </div>
                    </div>

                    {/* Book Cover Right */}
                    <div className="lg:w-1/3">
                        <div className="relative w-full aspect-[2/3] max-w-[300px] mx-auto rounded-lg overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 text-center">
                                <div className="text-primary font-serif italic text-xl mb-2">The</div>
                                <div className="text-primary font-bold text-3xl mb-4 leading-none">Invisible Work</div>
                                <div className="w-12 h-0.5 bg-accent mb-4"></div>
                                <div className="text-text-muted text-xs uppercase tracking-tighter">Arsalan Moin</div>
                                <div className="mt-12 text-[10px] text-primary/30">Book Cover Placeholder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
