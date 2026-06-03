"use client";

import { useState, useCallback } from "react";
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

/* ─── helpers ─── */
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.18 23.76c.3.17.65.2.97.08l12.57-7.27-2.76-2.76L3.18 23.76zM.5 1.52A1.5 1.5 0 000 2.67v18.66c0 .45.18.87.5 1.15l.06.06 10.46-10.46v-.25L.56 1.46.5 1.52zm19.4 9.15-2.63-1.52-3.05 3.05 3.05 3.06 2.65-1.53c.76-.44.76-1.62-.02-2.06zm-16.54 12.1 2.76-2.77 10.27-10.28-2.76-2.76L3.36 22.77z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.37 4.5h-.74l-1.5 2.6h3.74L12.37 4.5zM6.5 8.5l-2 3.5h3l-.25.43 2.5 4.33.87-1.5-1.5-2.6H10l-1.75-3.06L6.5 8.5zm11 0l-1.75 3.06L14 11.56h-.87l-1.5 2.6.87 1.5 2.5-4.33-.25-.43h3l-2-3.4zm-6 3.06-2.5 4.33h5l-2.5-4.33z" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
  </svg>
);

/* ─── phone mockup wrapper ─── */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[120px] shrink-0 select-none">
      {/* phone shell */}
      <div className="relative rounded-[22px] bg-obsidian-700 border-2 border-white/10 overflow-hidden shadow-xl aspect-[9/19.5]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[10px] bg-obsidian-900 rounded-b-xl z-10" />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="120px"
          unoptimized={false}
          onError={(e) => {
            // graceful fallback: hide the img, show the placeholder bg
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
        {/* placeholder bg when image not yet loaded */}
        <div className="absolute inset-0 bg-obsidian-800 -z-10" />
      </div>
    </div>
  );
}

/* ─── project card ─── */
function ProjectCard({
  project,
  featured = false,
  index,
  onClick,
}: {
  project: Project;
  featured?: boolean;
  index: number;
  onClick: () => void;
}) {
  const accent = CATEGORY_COLORS[project.category];
  const hasLinks =
    project.links.playstore || project.links.appstore || project.links.website;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.07 }}
      whileHover={{ scale: 1.015 }}
      onClick={onClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-obsidian-800 transition-shadow duration-500 cursor-pointer ${
        featured ? "md:col-span-2 min-h-[380px]" : "min-h-[340px]"
      }`}
      style={{
        // category glow on hover via CSS custom prop + box-shadow
        ["--accent" as string]: accent,
      }}
    >
      {/* hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}40, 0 0 40px ${accent}18` }}
      />

      {/* top bar: icon + category badge */}
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-obsidian-700">
          <Image
            src={project.images[0]}
            alt={`${project.name} icon`}
            fill
            className="object-cover"
            sizes="56px"
            unoptimized={false}
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
        </div>

        <span
          className="mt-1 shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{ borderColor: `${accent}50`, color: accent, background: `${accent}12` }}
        >
          {project.categoryLabel}
        </span>
      </div>

      {/* text content */}
      <div className="flex flex-col gap-1.5 px-5">
        <h3 className="font-monumental text-lg font-bold tracking-tight text-white leading-tight group-hover:text-white transition-colors">
          {project.name}
        </h3>
        <p className="text-sm font-medium" style={{ color: accent }}>
          {project.tagline}
        </p>
      </div>

      {/* screenshots row */}
      <div className="flex gap-3 px-5 pt-4 pb-4 overflow-hidden">
        {project.images.slice(1, featured ? 4 : 3).map((img, i) => (
          <motion.div
            key={i}
            className="transition-transform duration-500 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <PhoneMockup src={img} alt={`${project.name} screenshot ${i + 1}`} />
          </motion.div>
        ))}
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-1.5 px-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* hover overlay: description + store buttons */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-2xl"
        style={{
          background: `linear-gradient(to top, ${accent}22 0%, transparent 60%)`,
        }}
      >
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
          <p className="text-xs text-gray-200 leading-relaxed mb-4 line-clamp-3 drop-shadow-lg">
            {project.description}
          </p>

          {/* store links */}
          <div className="flex gap-2 flex-wrap">
            {[
              { url: project.links.playstore, icon: <PlayStoreIcon />, label: "Google Play" },
              { url: project.links.appstore, icon: <AppStoreIcon />, label: "App Store" },
              { url: project.links.website, icon: <WebIcon />, label: "Website" },
            ].map(({ url, icon, label }) =>
              url ? (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-obsidian-900 transition-opacity hover:opacity-90"
                  style={{ background: accent }}
                >
                  {icon}
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-gray-500 cursor-not-allowed"
                >
                  {icon}
                  {label}
                  <span className="text-[9px] opacity-60">soon</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── filter tab ─── */
function FilterTab({
  label,
  active,
  accent,
  onClick,
}: {
  label: string;
  active: boolean;
  accent?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative shrink-0 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
        active ? "text-white" : "text-gray-500 hover:text-gray-300"
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="filter-underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
          style={{ background: accent ?? "#00f5ff" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
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

  const activeAccent =
    activeCategory === "all"
      ? "#00f5ff"
      : CATEGORY_COLORS[activeCategory as ProjectCategory] ?? "#00f5ff";

  // every 5th card (0-indexed: 4, 9, …) is a featured hero spanning 2 cols
  const isFeatured = useCallback((idx: number) => idx % 5 === 4, []);

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

        {/* filter tabs */}
        <div className="relative mb-10 flex gap-1 overflow-x-auto scrollbar-none border-b border-white/5 pb-px">
          {categories.map((cat) => (
            <FilterTab
              key={cat.id}
              label={cat.label}
              active={activeCategory === cat.id}
              accent={
                cat.id === "all"
                  ? "#00f5ff"
                  : CATEGORY_COLORS[cat.id as ProjectCategory]
              }
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {filtered.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={isFeatured(idx)}
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
