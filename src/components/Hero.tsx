"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Text entrance animation variants ───────────────────────────── */
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

/* ── App icon data ───────────────────────────────────────────────── */
type AppIcon = {
  src: string;
  alt: string;
  size: number;       // px – dimension of the icon square
  floatY: number;     // px – how far it drifts up on each float cycle
  duration: number;   // seconds – one float cycle length
  delay: number;      // seconds – float start delay (spreads movement)
};

const appIcons: AppIcon[] = [
  {
    src: "/projects/PRO/icon.png",
    alt: "PR.O — Workout Tracker",
    size: 82,
    floatY: -14,
    duration: 4.2,
    delay: 0.0,
  },
  {
    src: "/projects/healthblocks/icon.png",
    alt: "HealthBlocks",
    size: 68,
    floatY: -10,
    duration: 3.7,
    delay: 0.5,
  },
  {
    src: "/projects/Beyond body/icon.png",
    alt: "Beyond Body",
    size: 76,
    floatY: -16,
    duration: 5.1,
    delay: 1.1,
  },
  {
    src: "/projects/hoyzee/icon.png",
    alt: "Hoyzee",
    size: 90,
    floatY: -12,
    duration: 4.6,
    delay: 0.3,
  },
  {
    src: "/projects/near circle/icon.png",
    alt: "NearCircle",
    size: 74,
    floatY: -18,
    duration: 3.9,
    delay: 0.8,
  },
  {
    src: "/projects/Interval weight loss/icon.png",
    alt: "Interval Weight Loss",
    size: 70,
    floatY: -11,
    duration: 4.8,
    delay: 0.2,
  },
  {
    src: "/projects/Jacobs Dry Cleaner/icon.png",
    alt: "Jacobs Dry Cleaners",
    size: 78,
    floatY: -13,
    duration: 4.3,
    delay: 0.6,
  },
  {
    src: "/projects/Rural Response/icon.png",
    alt: "Rural Response",
    size: 68,
    floatY: -15,
    duration: 3.5,
    delay: 1.3,
  },
];

/* ── FloatingIcon sub-component ─────────────────────────────────── *
 *  Two nested motion.divs keeps concerns cleanly separated:
 *   outer  → one-time entrance (opacity + scale pop-in, staggered)
 *   inner  → continuous float loop (y oscillation)
 *   whole  → hover scale-up via whileHover on the outer
 * ─────────────────────────────────────────────────────────────── */
function FloatingIcon({ icon, index }: { icon: AppIcon; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.14,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {/* Continuous float wrapper */}
      <motion.div
        animate={{ y: [0, icon.floatY, 0] }}
        transition={{
          duration: icon.duration,
          delay: icon.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Icon card */}
        <div
          className="relative overflow-hidden rounded-[22px] bg-white"
          style={{
            width: icon.size,
            height: icon.size,
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #EDE9FE 0%, transparent 60%)",
        }}
      />

      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* ── Left column — text ─────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label pill */}
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

          {/* Sub-line */}
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

        {/* ── Right column — floating app icon grid ──────────────── */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[460px]">

            {/* Soft purple glow blob behind icons */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #EDE9FE 0%, transparent 70%)",
                transform: "scale(1.15)",
              }}
            />

            {/* 3-column icon grid */}
            <div className="relative grid grid-cols-3 gap-6 px-6 py-10">
              {appIcons.map((icon, i) => (
                <FloatingIcon key={icon.src} icon={icon} index={i} />
              ))}

              {/* 9th cell: subtle decorative "+" count badge */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.55,
                  delay: appIcons.length * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-[22px] bg-[#7C3AED]/8 border border-[#7C3AED]/20"
                  style={{ width: 68, height: 68 }}
                >
                  <span className="font-monumental text-lg font-black text-[#7C3AED] leading-none">
                    8+
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#7C3AED]/70 mt-0.5">
                    Apps
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
