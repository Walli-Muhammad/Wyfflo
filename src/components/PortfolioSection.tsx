"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  categories,
  CATEGORY_COLORS,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

/* ─── project card ─── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const accent = CATEGORY_COLORS[project.category];
  const isFeatured = index % 5 === 0;
  const colSpan = isFeatured ? "md:col-span-2" : "md:col-span-1";
  const minHeight = isFeatured ? "min-h-[420px]" : "min-h-[380px]";
  const phoneWidth = isFeatured ? "w-[160px]" : "w-[130px]";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 4) * 0.07,
      }}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] border cursor-pointer ${colSpan} ${minHeight}`}
      style={{ borderColor: `${accent}33` }}
    >
      {/* hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
        style={{
          boxShadow: `inset 0 0 0 1px ${accent}, 0 0 30px ${accent}40`,
        }}
      />

      {/* header row */}
      <div className="flex items-center gap-3 p-5 pb-2">
        {/* app icon */}
        <div className="relative w-[40px] h-[40px] rounded-xl overflow-hidden shrink-0 bg-[#0e0e10]">
          <Image
            src={project.images[0]}
            alt={`${project.name} icon`}
            fill
            className="object-cover"
            sizes="40px"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        </div>

        {/* app name */}
        <span className="font-monumental text-base font-bold text-white truncate">
          {project.name}
        </span>

        {/* category badge — pushed right */}
        <span
          className="ml-auto shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            borderColor: `${accent}50`,
            color: accent,
            background: `${accent}12`,
          }}
        >
          {project.categoryLabel}
        </span>
      </div>

      {/* tagline */}
      <p
        className="px-5 text-sm italic font-medium"
        style={{ color: accent }}
      >
        {project.tagline}
      </p>

      {/* phone mockup */}
      <div className="flex-1 flex items-center justify-center px-5 py-4">
        <div className={`relative ${phoneWidth} shrink-0 select-none`}>
          {/* phone shell */}
          <div className="relative rounded-[28px] bg-[#111111] border-2 border-white/10 overflow-hidden shadow-xl aspect-[9/19.5]">
            {/* dynamic island / notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[10px] bg-[#0a0a0a] rounded-b-xl z-10" />

            {/* fallback bg */}
            <div className="absolute inset-0 bg-[#0e0e10] -z-10" />

            {/* screen-1 (default, fades out on hover) */}
            {project.images[1] && (
              <Image
                src={project.images[1]}
                alt={`${project.name} screen 1`}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                sizes="160px"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0";
                }}
              />
            )}

            {/* screen-2 (hidden, fades in on hover) */}
            {project.images[2] && (
              <Image
                src={project.images[2]}
                alt={`${project.name} screen 2`}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                sizes="160px"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0";
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
}

/* ─── filter tab ─── */
function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
        active
          ? "text-black font-semibold"
          : "bg-white/5 text-white/40 border border-white/10 hover:text-white/60 hover:bg-white/[0.08]"
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeFilterPill"
          className="absolute inset-0 rounded-full bg-[#00f5ff] z-0"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/* ─── main section ─── */
export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 md:py-40 px-6 md:px-12 bg-obsidian-900">
      {/* top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-glow/20 to-transparent" />

      <div className="max-w-screen-xl mx-auto">
        {/* heading */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-glow">
            Featured Work
          </span>
          <h2 className="mt-4 font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-white">
            Monuments of
            <br />
            <span className="text-accent-glow glow-text">Code.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm text-gray-400 leading-relaxed">
            11 real products. Real users. Real impact. From gamified wellness
            companions to community-safety networks — here is what we have shipped.
          </p>
        </div>

        {/* filter tabs — pill style */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <FilterTab
              key={cat.id}
              label={cat.label}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        {/* grid with AnimatePresence for filter transitions */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {filtered.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Render project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
