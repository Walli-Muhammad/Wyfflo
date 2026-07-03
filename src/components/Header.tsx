"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "Apps", href: "#work" },
    { label: "Websites", href: "#websites" },
    { label: "Expertise", href: "#expertise" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center px-6 md:px-12 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto w-full flex justify-between items-center">
          
          {/* Logo */}
          <a href="/" className="text-3xl font-bold font-monumental tracking-tighter flex items-center">
            <span className="text-[#0A0A0A]">WYFF</span>
            <span className="text-[#7C3AED]">LO.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#6B7280]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#7C3AED] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D28D9] hover:shadow-lg"
          >
            Start a Project
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0A0A0A] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-4 h-0.5 bg-[#0A0A0A] ml-auto transition-all duration-300 ${isOpen ? "opacity-0 w-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0A0A0A] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
          
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/35 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl p-8 flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col gap-10 mt-16">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-lg font-bold uppercase tracking-widest text-[#0A0A0A] hover:text-[#7C3AED] transition-colors font-monumental"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA inside Drawer */}
              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full text-center rounded-full bg-[#7C3AED] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D28D9]"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
