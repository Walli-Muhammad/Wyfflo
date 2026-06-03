"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const subheadlines = [
  "Wyfflo is a full-spectrum development agency. We build the software, AI systems, and digital products that power the next generation of category-defining companies.",
  "We engineer high-performance platforms, combining striking aesthetics with bulletproof architecture to elevate your brand above the noise.",
  "From immersive 3D web experiences to enterprise-grade AI infrastructures, we turn visionary concepts into digital reality."
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % subheadlines.length);
    }, 1500); // Change every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Resize handler
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking (on the section, not the canvas since it's pointer-events-none)
    // We need to add the listener to the section/window
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseX: number;
      baseY: number;
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 60;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isCyan = Math.random() > 0.6;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1 + Math.random() * 1.5,
        color: isCyan
          ? `rgba(0, 245, 255, ${0.08 + Math.random() * 0.12})`
          : `rgba(255, 255, 255, ${0.12 + Math.random() * 0.13})`,
        baseX: 0,
        baseY: 0,
      });
      particles[i].baseX = particles[i].x;
      particles[i].baseY = particles[i].y;
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const REPEL_RADIUS = 120;
      const REPEL_FORCE = 2;

      for (const p of particles) {
        // Calculate distance to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Gentle repulsion from cursor
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Normal drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 bg-obsidian-900">
      
      {/* Video Background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="min-w-full min-h-full object-cover opacity-60"
        >
          <source src="/videos/blackhole.mp4" type="video/mp4" />
        </video>
        {/* Subtle grid overlay to keep the texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Subtle radial gradient to darken edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.8)_100%)]" />
      </div>

      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      <motion.div
        className="max-w-screen-xl mx-auto w-full flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow label */}
        <motion.div variants={fadeInVariant} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-glow/20 bg-accent-glow/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-accent-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse" />
            Digital Antiquity Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUpVariant}
          className="font-monumental text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.0] tracking-tighter text-white"
        >
          We Engineer
          <br />
          <span className="text-accent-glow glow-text">Digital Empires.</span>
        </motion.h1>

        {/* Subheadline with AnimatePresence for flickering swap */}
        <motion.div variants={fadeUpVariant} className="mt-8 h-24 md:h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                y: -15, 
                transition: { duration: 0.3, ease: "easeIn" } 
              }}
              className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            >
              {subheadlines[textIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-glow px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-obsidian-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <span className="relative z-10">View Our Work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-glow/40 hover:text-accent-glow"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-10 w-full max-w-xl"
        >
          {[
            { value: "120+", label: "Projects Shipped" },
            { value: "98%", label: "Client Retention" },
            { value: "8yr", label: "In the Craft" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-monumental text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-gray-500 tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
