'use client';

import { Suspense, useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import SocialInfluence from '@/components/SocialInfluence';
import PersonalJourney from '@/components/PersonalJourney';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';

function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-cream-50 flex items-center justify-center z-[100]">
            <div className="relative">
                <div className="w-24 h-24 border-2 border-navy-100 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-serif font-bold text-navy-900 tracking-widest animate-pulse">
                        AM
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <LoadingScreen />;

    return (
        <>
            <Navbar />
            <main className="relative z-10 bg-cream-50 overflow-hidden">
                <Hero />
                <BookSection />
                <Philosophy />
                <SocialInfluence />
                <PersonalJourney />
                <Services />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
