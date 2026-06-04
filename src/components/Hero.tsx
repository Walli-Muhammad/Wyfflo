"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const mockups = [
  {
    src: "/projects/Beyond body/5f2a22ff-dec6-4597-8ed8-fe4764c4f4f2.jpg",
    alt: "Beyond Body app screenshot",
    className: "absolute top-[5%] left-[5%] w-[45%] animate-float rotate-[-3deg]",
    delay: 0.3,
  },
  {
    src: "/projects/HealthBlocks/IMG_4814.jpg",
    alt: "HealthBlocks app screenshot",
    className: "absolute top-[0%] right-[5%] w-[42%] animate-float-delay-1 rotate-[2deg]",
    delay: 0.45,
  },
  {
    src: "/projects/near circle/IMG_4841.JPG",
    alt: "Near Circle app screenshot",
    className: "absolute bottom-[10%] left-[8%] w-[40%] animate-float-delay-2 rotate-[3deg]",
    delay: 0.6,
  },
  {
    src: "/projects/hoyzee/IMG_4822.jpg",
    alt: "Hoyzee app screenshot",
    className: "absolute bottom-[5%] right-[10%] w-[43%] animate-float-delay-3 rotate-[-2deg]",
    delay: 0.75,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #EDE9FE 0%, transparent 60%)",
        }}
      />

      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left column — text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small label */}
          <motion.span
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#6B7280] mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Digital Agency
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-monumental text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]"
          >
            We Build Apps
            <br />
            <span className="text-[#7C3AED]">People Love.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUpVariant}
            className="mt-6 max-w-md text-lg text-[#6B7280] leading-relaxed"
          >
            From concept to launch — mobile apps, AI products, and enterprise
            platforms that drive real growth.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUpVariant}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6D28D9] hover:shadow-lg"
            >
              View Our Work <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F5F7]"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — floating mockups */}
        <div className="hidden lg:block">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {mockups.map((mockup) => (
              <motion.div
                key={mockup.src}
                className={mockup.className}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: mockup.delay,
                }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E5E7EB]">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
