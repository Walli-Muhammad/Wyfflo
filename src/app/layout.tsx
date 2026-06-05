import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";
import Image from "next/image";

// Configure ultra-modern, monumental sans-serif fonts
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: 'swap',
});

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wyfflo | Digital Agency",
  description: "We build apps people love — mobile apps, AI products, and enterprise platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans bg-white text-[#0A0A0A] min-h-screen flex flex-col relative selection:bg-[#EDE9FE] selection:text-[#7C3AED]">
        
        {/* Fixed, glassmorphism top navigation bar */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center px-6 md:px-12 transition-all duration-300">
          <div className="max-w-screen-2xl mx-auto w-full flex justify-between items-center">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#E5E7EB] shrink-0 bg-white">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Wyfflo Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-2xl font-bold font-monumental tracking-tighter flex items-center">
                <span className="text-[#0A0A0A]">WYFF</span>
                <span className="text-[#7C3AED]">LO.</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#6B7280]">
              <a href="#work" className="hover:text-[#7C3AED] transition-colors duration-300">Work</a>
              <a href="#expertise" className="hover:text-[#7C3AED] transition-colors duration-300">Expertise</a>
              <a href="#process" className="hover:text-[#7C3AED] transition-colors duration-300">Process</a>
              <a href="#contact" className="hover:text-[#7C3AED] transition-colors duration-300">Contact</a>
            </nav>

            {/* CTA Button */}
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D28D9] hover:shadow-lg">
              Start a Project
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="block w-6 h-0.5 bg-[#0A0A0A]"></span>
              <span className="block w-4 h-0.5 bg-[#0A0A0A] ml-auto"></span>
            </button>
            
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}
