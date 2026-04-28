import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";

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
  title: "Wyfflo | Digital Antiquity",
  description: "High-end portfolio for Wyfflo development agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans bg-obsidian-900 text-white min-h-screen flex flex-col relative selection:bg-accent-glow selection:text-obsidian-900">
        
        {/* Fixed, glassmorphism top navigation bar */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-24 flex items-center px-6 md:px-12 transition-all duration-300">
          <div className="max-w-screen-2xl mx-auto w-full flex justify-between items-center">
            
            {/* Logo */}
            <div className="text-3xl font-bold font-monumental tracking-tighter flex items-center cursor-pointer">
              <span className="text-white">WYFF</span>
              <span className="text-accent-glow glow-text">LO.</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
              <a href="#work" className="hover:text-accent-glow transition-colors duration-300">Work</a>
              <a href="#expertise" className="hover:text-accent-glow transition-colors duration-300">Expertise</a>
              <a href="#agency" className="hover:text-accent-glow transition-colors duration-300">Agency</a>
              <a href="#contact" className="hover:text-accent-glow transition-colors duration-300">Contact</a>
            </nav>
            
            {/* Mobile Menu Button (Placeholder for interaction) */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-4 h-0.5 bg-white ml-auto"></span>
            </button>
            
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}
