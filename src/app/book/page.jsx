import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { ArrowRight, CheckCircle2, Star, BookOpen, User, Headphones } from 'lucide-react';
import BookActions from '@/components/payments/BookActions';
import FadeIn from '@/components/ui/FadeIn';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const metadata = {
    title: "The Invisible Work | The Complete Digital Bundle",
    description: "Discover the invisible emotional architecture that shapes your child's future. The Invisible Work by Arsalan Moin is the essential guide to conscious parenting. Now available as a Complete Digital Bundle (Ebook + Audiobook).",
    openGraph: {
        title: "The Invisible Work | The Complete Digital Bundle",
        description: "Stop raising a tourist. Start raising a citizen. Get the Ebook + Audiobook bundle today.",
        images: ['/images/book.jpeg'],
    }
};

async function getUserData() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        if (!token) return null;
        const res = await fetch(`${API_URL}/api/auth/me`, {
            headers: { Cookie: `token=${token}` },
            cache: 'no-store',
        });
        const data = await res.json();
        if (data.success) return data.user;
        return null;
    } catch {
        return null;
    }
}

export default async function BookPage() {
    const user = await getUserData();
    const isLoggedIn = !!user;
    const hasPurchased = user?.purchases?.includes("book") || false;
    const userEmail = user?.email || "";

    return (
        <main className="bg-cream-50 overflow-hidden">
            {/* Hero Section - MODELED AFTER HOMEPAGE BOOK SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-navy-900 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Visual Side (Left on Desktop to match flow, or Right? Home page has it Left: Visual, Right: Content. Let's match Home Page Layout) */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-1">
                            <div className="relative w-full max-w-[450px] aspect-square">
                                {/* Main Book Image */}
                                <div className="absolute top-0 left-0 w-[70%] z-20 transform -rotate-6 transition-transform hover:rotate-0 duration-500 shadow-2xl shadow-black/50">
                                    <div className="relative aspect-[2/3] w-full">
                                        <Image
                                            src="/images/book.jpeg"
                                            alt="The Invisible Work Book Cover"
                                            fill
                                            className="object-cover rounded-sm"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Audiobook Image */}
                                <div className="absolute bottom-10 right-0 w-[60%] z-10 transform rotate-6 transition-transform hover:rotate-0 duration-500 shadow-2xl shadow-black/50">
                                    <div className="relative aspect-square w-full">
                                        <Image
                                            src="/images/audio-book.png"
                                            alt="The Invisible Work Audiobook"
                                            fill
                                            className="object-cover rounded-lg"
                                            priority
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Content Side (Right) */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-2 text-center lg:text-left">
                            <FadeIn direction="left">
                                <h2 className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-4">
                                    Complete Digital Bundle
                                </h2>
                                <h1 className="text-5xl md:text-6xl font-serif font-medium leading-[0.9] text-white mb-8">
                                    The Invisible <br />
                                    <span className="italic text-gold-200">Work</span>
                                </h1>

                                {/* Hook Text */}
                                <div className="text-lg text-navy-100 font-light leading-relaxed mb-8 border-l-2 border-gold-500/50 pl-6 italic text-left">
                                    "It happens every night after dinner. They push back their chair. They walk away. And the dirty plate just sits there..."
                                </div>

                                {/* Main Copy */}
                                <div className="space-y-4 text-base text-navy-200 leading-relaxed mb-10 text-left">
                                    <p>
                                        Suddenly, you realize: <strong className="text-white font-medium">You aren&apos;t running a home. You are running a restaurant. And your children are the customers.</strong>
                                    </p>
                                    <p>
                                        This book is not about chore charts. It is about shifting your child&apos;s mindset from <span className="text-white border-b border-gold-500/30 pb-0.5">Consumer to Contributor</span>.
                                    </p>
                                </div>

                                {/* What's Included - Simplified Like Home Page */}
                                <div className="flex flex-col gap-4 mb-10 text-navy-200 text-left">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="text-gold-500 w-5 h-5" />
                                        <span className="text-lg">Full Ebook (PDF)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Headphones className="text-gold-500 w-5 h-5" />
                                        <span className="text-lg">Audiobook (Narrated solely by Arsalan)</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <BookActions
                                        hasPurchased={hasPurchased}
                                        isLoggedIn={isLoggedIn}
                                        userEmail={userEmail}
                                        purchaseClassName="bg-gold-500 text-navy-950 px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-gold-900/10 rounded-sm w-full sm:w-auto"
                                        downloadClassName="bg-green-500 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-green-600 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-green-900/10 rounded-sm w-full sm:w-auto"
                                        purchaseLabel="Get the Bundle Now"
                                        downloadLabel="Download Bundle"
                                    />
                                    <Link
                                        href="#read-chapter"
                                        className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group rounded-sm w-full sm:w-auto"
                                    >
                                        Read Preview
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* Book Details / What You Will Learn (Kept original sections below) */}
            <section className="py-24 bg-white relative" id="read-chapter">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6 text-center">
                                Beyond Behavior Modification
                            </h2>
                            <p className="text-navy-600 text-center mx-auto max-w-2xl mb-16 leading-relaxed">
                                Most parenting books teach you how to control your child&apos;s behavior.
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
                                    <h3 className="text-xl font-bold text-navy-900 mb-4">The Parents&apos; Growth</h3>
                                    <p className="text-navy-600 leading-relaxed text-sm">
                                        Parenting is as much about growing yourself up as it is about raising a child. This book guides your personal evolution alongside your child&apos;s.
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
                                    &quot;The Invisible Work&quot; is the culmination of his research and practice, offering a roadmap
                                    for parents who wish to break generational cycles and raise emotionally resilient children.
                                </p>
                                <img src="/images/signature.svg" alt="" className="h-12 opacity-80" />
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
                            <BookActions
                                hasPurchased={hasPurchased}
                                isLoggedIn={isLoggedIn}
                                userEmail={userEmail}
                                purchaseClassName="bg-navy-900 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-navy-800 transition-all hover:scale-105 shadow-xl shadow-navy-900/10 cursor-pointer flex items-center justify-center"
                                downloadClassName="bg-green-500 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-green-900/10 cursor-pointer flex items-center justify-center"
                                purchaseLabel="Get the Bundle Now"
                                downloadLabel="Download Bundle"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
