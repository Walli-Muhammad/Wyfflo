import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";
import Header from "@/components/Header";

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
        <Header />

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
