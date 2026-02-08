import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, BookOpen, User } from 'lucide-react';
import BookPageHero from '@/components/BookPageHero';

import FadeIn from '@/components/ui/FadeIn';

export const metadata = {
    title: "The Invisible Work | A Book by Arsalan Moin",
    description: "Discover the invisible emotional architecture that shapes your child's future. The Invisible Work by Arsalan Moin is the essential guide to conscious parenting.",
    openGraph: {
        title: "The Invisible Work | Transfrom Your Parenting",
        description: "Most parenting advice focuses on visible behaviors. This book reveals the invisible emotional architecture that determines your child's future.",
        images: ['/images/book.jpeg'],
    }
};

export default function BookPage() {
    return (
        <main className="bg-cream-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-navy-950 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/images/noise.png')]"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* 3D Book Visual (Client Component) */}
                        <BookPageHero />

                        {/* Text Content - Server Rendered for SEO */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                <span className="h-[1px] w-12 bg-gold-500"></span>
                                <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs">
                                    Now Available
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[0.9] text-white mb-8">
                                The Invisible <br />
                                <span className="italic text-gold-200">Work</span>
                            </h1>

                            <p className="text-lg md:text-xl text-navy-100 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                A revolutionary guide to the <span className="text-white font-medium border-b border-gold-500/50">emotional architecture</span> of parenting.
                                Discover why traditional advice fails and how to build a lasting connection with your child.
                            </p>

                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd7M-tM4_4yQ4yQ4yQ4/viewform"
                                    target="_blank"
                                    className="bg-gold-500 text-navy-950 px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                                >
                                    Purchase Copy
                                </Link>
                                <Link
                                    href="#read-chapter"
                                    className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 flex items-center gap-3 group"
                                >
                                    Read Chapter One
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 justify-center lg:justify-start">
                                <div>
                                    <div className="flex text-gold-400 mb-1">
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                    </div>
                                    <p className="text-white/60 text-xs uppercase tracking-wider">4.9/5 Rating</p>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div>
                                    <p className="text-white font-bold text-xl">300+</p>
                                    <p className="text-white/60 text-xs uppercase tracking-wider">Pages of Insight</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Book Details / What You Will Learn */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6 text-center">
                                Beyond Behavior Modification
                            </h2>
                            <p className="text-navy-600 text-center mx-auto max-w-2xl mb-16 leading-relaxed">
                                Most parenting books teach you how to control your child's behavior.
                                <span className="italic font-serif text-navy-800"> The Invisible Work</span> teaches you how to understand their emotional world and your own.
                            </p>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-12">
                            <FadeIn delay={0.1}>
                                <div className="bg-cream-50 p-8 border border-cream-200 h-full">
                                    <BookOpen className="text-gold-600 w-8 h-8 mb-6" />
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">The Emotional Blueprint</h3>
                                    <p className="text-navy-600 leading-relaxed text-sm">
                                        Understand the hidden emotional structures that govern family dynamics. Learn how your own unhealed patterns silently shape your parenting style.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="bg-cream-50 p-8 border border-cream-200 h-full">
                                    <User className="text-gold-600 w-8 h-8 mb-6" />
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">Conscious Connection</h3>
                                    <p className="text-navy-600 leading-relaxed text-sm">
                                        Move from reactive correction to conscious connection. Discover practical tools to de-escalate conflicts and build deep, lasting trust.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="bg-cream-50 p-8 border border-cream-200 h-full">
                                    <CheckCircle2 className="text-gold-600 w-8 h-8 mb-6" />
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">Practical Scripts</h3>
                                    <p className="text-navy-600 leading-relaxed text-sm">
                                        Get actual scripts and conversation guides for difficult moments. Know exactly what to say to validate feelings while maintaining boundaries.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="bg-cream-50 p-8 border border-cream-200 h-full">
                                    <Star className="text-gold-600 w-8 h-8 mb-6" />
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">The Parents' Growth</h3>
                                    <p className="text-navy-600 leading-relaxed text-sm">
                                        Parenting is as much about growing yourself up as it is about raising a child. This book guides your personal evolution alongside your child's.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <span className="absolute -top-20 -left-20 text-[30vw] font-serif leading-none text-white blur-sm">A</span>
                </div>
                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mr-auto overflow-hidden rounded-sm bg-navy-800">
                                <Image
                                    src="/images/arsalan_moin-with-book.jpeg"
                                    alt="Arsalan Moin"
                                    fill
                                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 border border-white/10"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <FadeIn direction="right">
                                <h2 className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-4">About the Author</h2>
                                <h3 className="text-4xl md:text-5xl font-serif mb-8 text-cream-50">Arsalan Moin</h3>
                                <p className="text-lg text-navy-100 mb-6 leading-relaxed max-w-2xl">
                                    Arsalan Moin is a psychological specialist and renowned speaker on parenting and mental health.
                                    With over a decade of experience working with families, he has helped thousands of parents
                                    bridge the gap between their intentions and their impact.
                                </p>
                                <p className="text-lg text-navy-100 mb-8 leading-relaxed max-w-2xl">
                                    "The Invisible Work" is the culmination of his research and practice, offering a roadmap
                                    for parents who wish to break generational cycles and raise emotionally resilient children.
                                </p>
                                <img src="/images/signature.svg" alt="" className="h-12 opacity-80" />
                                {/* Placeholder for signature if available, otherwise omitted or handled gracefully by alt */}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-cream-100 text-center">
                <div className="container-custom">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-6xl font-serif text-navy-900 mb-8">
                            Start Your Journey <br /> <span className="italic text-navy-600">Today.</span>
                        </h2>
                        <div className="flex justify-center">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd7M-tM4_4yQ4yQ4yQ4/viewform"
                                target="_blank"
                                className="bg-navy-900 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-navy-800 transition-all hover:scale-105 shadow-xl shadow-navy-900/10"
                            >
                                Get Your Copy Now
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
