import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import SocialInfluence from '@/components/SocialInfluence';
import PersonalJourney from '@/components/PersonalJourney';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Philosophy from '@/components/Philosophy';
import CourseSection from '@/components/CourseSection';
import Services from '@/components/Services';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 bg-cream-50 overflow-hidden">
                <Hero />
                <BookSection />
                <Philosophy />
                <CourseSection />
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

