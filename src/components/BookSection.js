"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Headphones, BookOpen } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function BookSection() {
    return (
        <section id="book" className="py-24 bg-navy-900 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
                            {/* Main Book Image */}
                            <div className="absolute top-0 left-0 w-[70%] z-20 transform -rotate-6 transition-transform hover:rotate-0 duration-500 shadow-2xl shadow-black/50 overflow-hidden rounded-sm bg-navy-800">
                                <Image
                                    src="/images/book.jpeg"
                                    alt="The Invisible Work Book Cover"
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Audiobook Image */}
                            <div className="absolute bottom-10 -right-30 w-[70%] z-10 transform rotate-6 transition-transform hover:rotate-0 duration-500 shadow-2xl shadow-black/50 overflow-hidden rounded-lg bg-navy-800">
                                <Image
                                    src="/images/audio-book.png"
                                    alt="The Invisible Work Audiobook"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>


                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="left">
                            <h2 className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-4">
                                Now Available
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-serif font-medium leading-[0.9] text-white mb-8">
                                The Invisible <br />
                                <span className="italic text-gold-200">Work</span>
                            </h3>

                            <p className="text-xl text-navy-100 font-light leading-relaxed mb-8 max-w-lg">
                                Stop raising a tourist. Start raising a citizen. Get the complete guide to conscious parenting.
                            </p>

                            <div className="flex flex-col gap-4 mb-10 text-navy-200">
                                <div className="flex items-center gap-3 text-left">
                                    <BookOpen className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                    <span className="text-lg leading-tight">Full Ebook (PDF)</span>
                                </div>
                                <div className="flex items-center gap-3 text-left">
                                    <Headphones className="text-gold-500 w-5 h-5 flex-shrink-0" />
                                    <span className="text-lg leading-tight">Audiobook (Narrated solely by Arsalan)</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/book"
                                    className="bg-gold-500 text-navy-950 px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                                >
                                    Get the Bundle
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/book#read-chapter"
                                    className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    Read Preview
                                </Link>
                            </div>

                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
