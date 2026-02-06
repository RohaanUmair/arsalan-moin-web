import { Inter, Outfit, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
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

export const metadata = {
  title: "Arsalan Moin | The Invisible Work | Psychological Specialist",
  description: "Official website of Arsalan Moin - Author of 'The Invisible Work'. Exploring empathy, parenting, and practical psychology to transform lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased text-slate-900 bg-white selection:bg-gold-400 selection:text-navy-900`}
      >
        {children}
      </body>
    </html>
  );
}
