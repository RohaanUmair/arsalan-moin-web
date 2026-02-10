import { Inter, Outfit, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// Enhanced metadata with OpenGraph and Twitter
export const metadata = {
  title: "Arsalan Moin | Author of The Invisible Work | Psychological Specialist",
  description: "Official website of Arsalan Moin - Author of 'The Invisible Work'. Exploring empathy, parenting, and practical psychology to transform lives.",
  keywords: ["Arsalan Moin", "The Invisible Work", "parenting", "psychology", "mental health", "Pakistan", "psychological treatment"],
  authors: [{ name: "Arsalan Moin" }],
  openGraph: {
    title: "Arsalan Moin | The Invisible Work",
    description: "Transform your parenting with insights from The Invisible Work - a guide to the invisible emotional architecture that shapes your child's future.",
    type: "website",
    locale: "en_US",
    siteName: "Arsalan Moin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsalan Moin | The Invisible Work",
    description: "Transform your parenting with insights from The Invisible Work",
  },
};

// JSON-LD Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arsalan Moin",
  "description": "Psychological Specialist, Author, and Speaker focused on parenting and mental health",
  "jobTitle": "Psychological Specialist",
  "knowsAbout": ["Psychology", "Parenting", "Mental Health", "Emotional Development"],
  "sameAs": ["https://www.facebook.com/psychologicaltreatment"]
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "The Invisible Work",
  "author": {
    "@type": "Person",
    "name": "Arsalan Moin"
  },
  "description": "A guide to the invisible emotional architecture that determines your child's future. Most parenting advice focuses on visible behaviors - this book reveals what truly matters.",
  "genre": ["Psychology", "Parenting", "Self-Help"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased text-slate-900 bg-white selection:bg-gold-400 selection:text-navy-900`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


