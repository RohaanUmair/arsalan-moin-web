'use client';

import { Suspense, useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import SocialInfluence from '@/components/SocialInfluence';
import PersonalJourney from '@/components/PersonalJourney';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-blue-50 flex items-center justify-center z-50">
            <div className="bg-gradient-blue p-1 rounded-full animate-pulse-glow">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl">
                    AM
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
            <main className="relative z-10 bg-white mb-[80vh] shadow-2xl">
                <Hero />
                <BookSection />
                <SocialInfluence />
                <PersonalJourney />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
