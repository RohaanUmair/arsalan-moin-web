import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arsalan Moin | Psychological Treatment",
  description: "Official website of Arsalan Moin - Psychological Treatment & Author of 'The Invisible Work'.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-theme-bg text-theme-text`}
      >
        {children}
      </body>
    </html>
  );
}
