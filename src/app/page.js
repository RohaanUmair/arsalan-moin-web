import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Book from "@/components/Book";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-theme-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
