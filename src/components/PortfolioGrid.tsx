"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function PortfolioGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Mouse position for the floating badge
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to the viewport
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={sectionRef} 
      id="work" 
      className="relative py-28 md:py-40 px-6 md:px-12 bg-obsidian-900 cursor-default"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-glow">
            Featured Work
          </span>
          <h2 className="mt-4 font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-white">
            Monuments of<br />
            <span className="text-accent-glow glow-text">Code.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: isOtherHovered ? 0.4 : 1,
                  scale: isOtherHovered ? 0.96 : (isHovered ? 1.02 : 1),
                  zIndex: isHovered ? 10 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`group relative h-[320px] md:h-[400px] w-full overflow-hidden rounded-3xl bg-obsidian-800 border border-white/5 transition-shadow duration-500 ${isHovered ? 'shadow-2xl shadow-obsidian-900/50' : ''}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                </div>

                {/* Vibrant Color Overlay on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-40`}
                  style={{ mixBlendMode: 'color-dodge' }} 
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Noise overlay to keep the antiquiy texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-t from-obsidian-900/95 via-obsidian-900/40 to-obsidian-900/10 transition-all duration-500 group-hover:from-obsidian-900/90 group-hover:via-transparent">
                  <div className="flex flex-wrap gap-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur-md transition-colors duration-300 group-hover:border-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-white/60 group-hover:text-white transition-colors duration-300 text-xs font-semibold tracking-widest uppercase mb-2">
                      {project.client}
                    </p>
                    <h3 className="font-monumental text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    {/* The description slides up and fades in on hover */}
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm max-w-sm transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 h-0 group-hover:h-auto mt-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Badge attached to cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 flex h-24 w-24 items-center justify-center rounded-full bg-white text-obsidian-900 shadow-[0_0_40px_rgba(255,255,255,0.3)] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoveredIndex !== null ? 1 : 0,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className="text-center text-[10px] font-bold uppercase tracking-widest leading-tight">
          View<br/>Project
        </span>
      </motion.div>
    </section>
  );
}
