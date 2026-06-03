"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We embed with your team to map every constraint, edge case, and opportunity before a single line of code is written.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "System design, tech stack selection, and API contracts — every decision documented before the build begins.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Full-stack development with weekly deployments. Transparent progress, zero surprises.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "Production launch, performance monitoring, and iterative improvements. We don't disappear after go-live.",
  },
];

/* ─── Step Visuals ─── */

function DiscoverVisual() {
  return (
    <div className="relative w-full h-full">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#00f5ff]/40"
          style={{
            top: `${20 + Math.sin(i * 0.8) * 30}%`,
            left: `${15 + Math.cos(i * 0.6) * 35}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <line
          x1="20%"
          y1="30%"
          x2="50%"
          y2="25%"
          className="stroke-[#00f5ff]/20"
          strokeWidth="1"
        />
        <line
          x1="50%"
          y1="25%"
          x2="70%"
          y2="45%"
          className="stroke-[#00f5ff]/20"
          strokeWidth="1"
        />
        <line
          x1="30%"
          y1="55%"
          x2="60%"
          y2="60%"
          className="stroke-[#00f5ff]/20"
          strokeWidth="1"
        />
        <line
          x1="60%"
          y1="60%"
          x2="75%"
          y2="40%"
          className="stroke-[#00f5ff]/20"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function ArchitectVisual() {
  return (
    <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center">
      {[...Array(4)].map((_, row) => (
        <motion.div
          key={row}
          className="flex gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: row * 0.15, duration: 0.5 }}
        >
          {[...Array(3)].map((_, col) => (
            <div
              key={col}
              className="w-20 h-14 md:w-24 md:h-16 rounded-lg border border-[#00f5ff]/20 bg-[#00f5ff]/5"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function EngineerVisual() {
  return (
    <div className="w-full max-w-[360px] mx-auto rounded-xl bg-[#0a0a0a] border border-white/10 p-5 font-mono text-sm">
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>
      {[
        "const app = createApp();",
        "app.configure(stack);",
        "await app.deploy();",
        "// ✓ Build passed",
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.4, duration: 0.3 }}
          className="text-[#00f5ff]/70 mb-1"
        >
          <span className="text-white/30">{">"} </span>
          {line}
        </motion.div>
      ))}
    </div>
  );
}

function DeployVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#00f5ff]/30"
          style={{
            width: `${(i + 1) * 100}px`,
            height: `${(i + 1) * 100}px`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="w-4 h-4 rounded-full bg-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.5)]" />
    </div>
  );
}

const STEP_VISUALS = [DiscoverVisual, ArchitectVisual, EngineerVisual, DeployVisual];

/* ─── Main Component ─── */

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    let ctx: any;
    let isCancelled = false;

    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        if (isCancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const container = containerRef.current;
          if (!container) return;

          const totalSteps = STEPS.length;

          ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: `+=${totalSteps * 100}%`,
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              const newStep = Math.min(
                Math.floor(self.progress * totalSteps),
                totalSteps - 1
              );
              setActiveStep(newStep);
              setProgress(self.progress);
            },
          });
        }, sectionRef);
      } catch (error) {
        console.error("GSAP ScrollTrigger initialization failed:", error);
      }
    };

    initGSAP();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, [isMobile]);

  const ActiveVisual = STEP_VISUALS[activeStep];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-obsidian-900 overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-glow/20 to-transparent" />

      {/* ── Heading (scrolls normally) ── */}
      <div className="py-20 md:py-28 px-6 md:px-12 max-w-screen-xl mx-auto">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-glow">
          OUR PROCESS
        </span>
        <h2 className="font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-white mt-3">
          How We <span className="text-accent-glow glow-text">Build.</span>
        </h2>
      </div>

      {/* ── Desktop: pinned container ── */}
      {!isMobile && (
        <div
          ref={containerRef}
          className="relative w-full h-screen flex items-center overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
            {/* Left column — text */}
            <div className="relative flex flex-col justify-center">
              {/* Watermark number */}
              <span className="absolute top-0 left-0 font-monumental text-[120px] md:text-[160px] font-bold text-white/[0.04] select-none leading-none">
                {STEPS[activeStep].number}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="font-monumental text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[480px] mt-4 font-sans">
                    {STEPS[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column — visual */}
            <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="w-full h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ActiveVisual />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Progress dots ── */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === activeStep ? "bg-[#00f5ff]" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* ── Progress bar ── */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <div
              className="h-full bg-[#00f5ff] transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Mobile: stacked fallback ── */}
      {isMobile && (
        <div className="flex flex-col">
          {STEPS.map((step, i) => {
            const Visual = STEP_VISUALS[i];
            return (
              <motion.div
                key={i}
                className="py-20 px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Text */}
                <span className="font-monumental text-[80px] font-bold text-white/[0.04] select-none leading-none block">
                  {step.number}
                </span>
                <h3 className="font-monumental text-3xl font-bold text-white tracking-tight mt-2">
                  {step.title}
                </h3>
                <p className="text-base text-white/60 leading-relaxed max-w-[480px] mt-4 font-sans">
                  {step.description}
                </p>

                {/* Visual */}
                <div className="relative w-full aspect-square max-w-[300px] mt-10">
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
