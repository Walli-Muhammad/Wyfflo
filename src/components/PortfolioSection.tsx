"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  projects,
  categories,
  CATEGORY_COLORS,
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
            11 real products. Real users. Real impact. From gamified wellness
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
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (idx % 4) * 0.07,
                }}
                whileHover={{ y: -2 }}
                onClick={() => router.push("/work/" + project.id)}
                className="group cursor-pointer rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#7C3AED] hover:-translate-y-0.5"
              >
                {/* Top Image Area */}
                <div className="relative aspect-video bg-[#F5F5F7]">
                  <Image
                    src={project.images[1]}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Bottom Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Icon */}
                    <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-[#E5E7EB] flex-shrink-0">
                      <Image
                        src={project.images[0]}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Name */}
                    <span className="font-monumental text-base font-semibold text-[#0A0A0A]">
                      {project.name}
                    </span>
                    {/* Badge */}
                    <span className="ml-auto rounded-full bg-[#EDE9FE] text-[#7C3AED] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {/* Tagline */}
                  <p className="text-sm text-[#6B7280] line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
