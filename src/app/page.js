import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-theme-bg/80 backdrop-blur-md z-50 border-b border-theme-accent/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-theme-text">
            AM
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-theme-text-muted">
            <Link href="#about" className="hover:text-theme-accent transition-colors">ABOUT</Link>
            <Link href="#book" className="hover:text-theme-accent transition-colors">THE BOOK</Link>
            <Link href="#contact" className="hover:text-theme-accent transition-colors">CONTACT</Link>
          </div>
          <Link href="https://www.facebook.com/psychologicaltreatment" target="_blank" className="px-5 py-2 bg-theme-text text-white text-xs tracking-widest hover:bg-theme-accent transition-colors rounded-full">
            FOLLOW
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center pt-32 px-6 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <span className="inline-block px-3 py-1 border border-theme-accent/30 rounded-full text-xs tracking-widest text-theme-accent uppercase">
                Psychological Treatment
              </span>
              <h1 className="text-5xl md:text-8xl font-serif leading-[1] text-theme-text">
                Arsalan <br />
                <span className="italic text-theme-accent">Moin</span>
              </h1>
              <p className="text-lg md:text-xl text-theme-text-muted max-w-md leading-relaxed">
                Empowering over 1.6 million followers to understand the depths of human behavior and parenting.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="#about" className="px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest rounded-sm">
                  MEET ARSALAN
                </Link>
                <Link href="#book" className="px-8 py-4 border border-theme-text/20 hover:border-theme-text transition-colors text-sm tracking-widest text-theme-text rounded-sm">
                  THE BOOK
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square bg-theme-surface rounded-sm overflow-hidden group">
              <div className="absolute inset-0 bg-theme-accent/5"></div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                alt="Arsalan Moin"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-[90vh] flex items-center bg-theme-surface px-6">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-serif text-theme-text">The Voice Behind the Movement</h2>
            <p className="text-lg md:text-xl leading-loose text-theme-text/80">
              Arsalan Moin has dedicated his work to understanding the complexities of the human mind. With over 1.6 million followers on his "Psychological treatment" page, he shares insights that challenge conventional wisdom and empower parents to raise resilient, authentic human beings.
            </p>
            <div className="h-px w-24 bg-theme-accent/30 mx-auto"></div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="min-h-[90vh] flex items-center px-6 py-12">
          <div className="max-w-5xl mx-auto bg-[#eaddcf] rounded-2xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="relative aspect-[3/4] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop"
                  alt="The Invisible Work Book Cover"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest text-theme-text/60 uppercase">The Best Seller</h3>
                <h2 className="text-4xl md:text-6xl font-serif text-theme-text">The Invisible Work</h2>
                <p className="text-xl italic text-theme-accent">"A parent's guide to raise a human, not tourist."</p>
                <p className="text-theme-text/80 leading-relaxed">
                  This book is not just a guide; it's a mirror for every parent. Discover the unseen efforts that shape a child's character and future.
                </p>
                <button className="px-8 py-4 bg-theme-text text-white hover:bg-theme-accent transition-colors text-sm tracking-widest w-full md:w-auto">
                  ORDER YOUR COPY
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-theme-text text-theme-surface py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-serif">Arsalan Moin</h4>
            <p className="text-sm opacity-60 mt-2">Psychological Treatment</p>
          </div>
          <div className="flex gap-6">
            <Link href="https://www.facebook.com/psychologicaltreatment" target="_blank" className="hover:text-white/80 transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Twitter
            </Link>
          </div>
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} Arsalan Moin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
