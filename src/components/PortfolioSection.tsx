"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  projects,
  categories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const router = useRouter();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-28 md:py-40 px-6 md:px-12 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
            OUR WORK
          </span>
          <h2 className="mt-4 font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
            Monuments of{" "}
            <span className="text-[#7C3AED]">Code.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm text-[#6B7280] leading-relaxed">
            Real products. Real users. Real impact. From gamified wellness
            companions to community-safety networks — here is what we have shipped.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat.id
                  ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                  : "bg-[#F5F5F7] text-[#6B7280] border-[#E5E7EB] hover:text-[#0A0A0A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => {
              // Pattern: first item in every group of 5 is featured (span-2)
              const isFeatured = idx % 5 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (idx % 3) * 0.05,
                  }}
                  onClick={() => router.push("/work/" + project.id)}
                  className={`group cursor-pointer relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F5F5F7] h-[340px] md:h-[400px] transition-all duration-500 hover:shadow-2xl hover:border-[#7C3AED]/40 ${
                    isFeatured ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  {/* Background Mockup Layer */}
                  {isFeatured ? (
                    // Featured Showcase: Two overlapping, floating screens
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#EDE9FE]/20">
                      {/* Left rotated screen */}
                      <div className="absolute left-[12%] top-[10%] w-[34%] aspect-[9/19.5] rounded-2xl shadow-xl border border-[#E5E7EB] rotate-[-8deg] group-hover:rotate-[-4deg] group-hover:scale-[1.03] transition-all duration-700 bg-white overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.images[1]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </div>

                      {/* Right rotated screen */}
                      <div className="absolute right-[12%] top-[18%] w-[34%] aspect-[9/19.5] rounded-2xl shadow-xl border border-[#E5E7EB] rotate-[8deg] group-hover:rotate-[4deg] group-hover:scale-[1.03] transition-all duration-700 bg-white overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.images[2] || project.images[1]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </div>

                      {/* Shadow Overlay */}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                    </div>
                  ) : (
                    // Standard Showcase: Single large screen filling background
                    <div className="absolute inset-0 bg-[#F5F5F7] overflow-hidden">
                      <Image
                        src={project.images[1]}
                        alt={project.name}
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                  )}

                  {/* Centered Clickable App Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)]">
                      <Image
                        src={project.images[0]}
                        alt={`${project.name} icon`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </div>

                  {/* Bottom Text Information Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-10 flex flex-col justify-end">
                    <h3 className="font-monumental text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-xs text-white/80">
                      <span className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white border border-white/10">
                        {project.categoryLabel}
                      </span>
                      <span className="italic truncate ml-4 max-w-[60%]">
                        {project.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Top Right "Explore" Hint */}
                  <div className="absolute top-4 right-4 bg-white/90 text-black text-[10px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Explore App →
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
