"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & CTA */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="text-3xl font-bold font-monumental tracking-tighter flex items-center mb-6">
              <span className="text-white">WYFF</span>
              <span className="text-[#7C3AED]">LO.</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Ready to transform your brand's digital presence? Our expert team is here to help you achieve monumental results.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold tracking-wide rounded-full px-8 py-3.5 transition-colors duration-300"
            >
              Book a Free Call
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">App Cost Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#expertise" className="hover:text-white transition-colors duration-200">Software Development</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors duration-200">ERP Solutions</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors duration-200">AI/ML Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Kick-Off Marketing</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors duration-200">App Designing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-white font-semibold mb-1">Our Email</p>
                  <a href="mailto:sales@wyfflo.com" className="hover:text-[#7C3AED] underline underline-offset-4 decoration-white/20 transition-colors duration-200">
                    sales@wyfflo.com
                  </a>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Our Phone</p>
                  <a href="tel:+16562700320" className="block hover:text-white transition-colors duration-200">+1 656 270 0320</a>
                  <a href="tel:+447897021964" className="block hover:text-white transition-colors duration-200">+44 789 702 1964</a>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Our Address</p>
                  <p className="leading-relaxed text-gray-400">
                    131 Continental Dr, Suite 305,<br />
                    Newark, Delaware, 19713
                  </p>
                </div>
              </div>
            </div>
            
            {/* Added social under contact to match original columns slightly differently or just keep it simple */}
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Wyfflo Agency. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="text-white font-semibold hover:text-[#7C3AED] transition-colors duration-200 flex items-center gap-2"
          >
            Back to the top <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
