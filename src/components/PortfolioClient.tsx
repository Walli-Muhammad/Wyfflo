"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { websites, type Website } from "@/data/websites";

type PortfolioItemType = "all" | "apps" | "websites";

// Combined project type wrapper for unified grid handling
type CombinedItem =
  | { type: "app"; data: Project }
  | { type: "website"; data: Website };

export default function PortfolioClient() {
  const [mainTab, setMainTab] = useState<PortfolioItemType>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Prepare combined items array
  const allItems: CombinedItem[] = [
    ...projects.map((p) => ({ type: "app" as const, data: p })),
    ...websites.map((w) => ({ type: "website" as const, data: w })),
  ];

  // Unique categories list
  const categoryOptions = [
    { id: "all", label: "All Categories" },
    { id: "fitness", label: "Fitness & Wellness" },
    { id: "social", label: "Social & Community" },
    { id: "food", label: "Food & Services" },
    { id: "emergency", label: "Emergency & Safety" },
    { id: "realestate", label: "Real Estate & Booking" },
    { id: "sports", label: "Sports & Entertainment" },
    { id: "saas", label: "SaaS & Enterprise" },
    { id: "fintech", label: "FinTech & Infrastructure" },
  ];

  // Filter items by main tab and category
  const filteredItems = allItems.filter((item) => {
    // Main tab filter
    if (mainTab === "apps" && item.type !== "app") return false;
    if (mainTab === "websites" && item.type !== "website") return false;

    // Category filter
    if (selectedCategory !== "all") {
      if (item.data.category !== selectedCategory) return false;
    }

    return true;
  });

  // Browser Mockup Top Bar Component
  const BrowserHeader = () => (
    <div className="bg-[#E5E7EB] h-6 border-b border-[#D1D5DB] flex items-center px-3 gap-1.5 shrink-0 select-none">
      <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
      <div className="mx-auto w-1/3 h-3 bg-white/70 rounded-sm border border-[#E5E7EB]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #EDE9FE 0%, transparent 60%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Label pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#6B7280] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Full Showcase
          </span>

          {/* Headline */}
          <h1 className="font-monumental text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
            All Our <span className="text-[#7C3AED]">Creations.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#6B7280] leading-relaxed">
            Explore our complete portfolio of mobile applications, enterprise platforms,
            and digital web portals shipped for visionary teams worldwide.
          </p>
        </div>
      </section>

      {/* ── Portfolio Section Body ──────────────────────────────────────── */}
      <section className="py-12 pb-32 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">

          {/* Main Tabs (All / Mobile Apps / Websites) */}
          <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-6 mb-8 overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                setMainTab("all");
                setSelectedCategory("all");
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                mainTab === "all"
                  ? "bg-[#0A0A0A] text-white shadow-md"
                  : "bg-[#F5F5F7] text-[#6B7280] hover:text-[#0A0A0A]"
              }`}
            >
              All Work ({allItems.length})
            </button>

            <button
              onClick={() => {
                setMainTab("apps");
                setSelectedCategory("all");
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                mainTab === "apps"
                  ? "bg-[#7C3AED] text-white shadow-md"
                  : "bg-[#F5F5F7] text-[#6B7280] hover:text-[#0A0A0A]"
              }`}
            >
              Mobile Apps ({projects.length})
            </button>

            <button
              onClick={() => {
                setMainTab("websites");
                setSelectedCategory("all");
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                mainTab === "websites"
                  ? "bg-[#7C3AED] text-white shadow-md"
                  : "bg-[#F5F5F7] text-[#6B7280] hover:text-[#0A0A0A]"
              }`}
            >
              Websites ({websites.length})
            </button>
          </div>

          {/* Sub Category Pills */}
          <div className="flex gap-2 flex-wrap mb-12">
            {categoryOptions.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat.id
                    ? "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]"
                    : "bg-white text-[#6B7280] border-[#E5E7EB] hover:text-[#0A0A0A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${mainTab}-${selectedCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => {
                if (item.type === "app") {
                  const app = item.data;
                  return (
                    <Link
                      key={app.id}
                      href={`/work/${app.id}`}
                      className="group flex flex-col rounded-3xl border border-[#E5E7EB] bg-[#F5F5F7] overflow-hidden hover:border-[#7C3AED] transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Image Frame */}
                      <div className="relative w-full aspect-[4/3] bg-white overflow-hidden p-6 flex items-center justify-center">
                        <Image
                          src={app.images[1] || app.images[0]}
                          alt={app.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* App Icon badge */}
                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white">
                          <Image
                            src={app.images[0]}
                            alt={`${app.name} icon`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] bg-[#EDE9FE] px-2.5 py-1 rounded-full">
                            Mobile App
                          </span>
                          <span className="text-xs text-[#6B7280]">
                            {app.categoryLabel}
                          </span>
                        </div>

                        <h3 className="font-monumental text-xl font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#7C3AED] transition-colors mt-1">
                          {app.name}
                        </h3>

                        <p className="text-xs text-[#6B7280] leading-relaxed mt-2 line-clamp-2">
                          {app.tagline}
                        </p>

                        {/* Tech tags */}
                        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                          {app.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] bg-white border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                } else {
                  const web = item.data;
                  return (
                    <Link
                      key={web.id}
                      href={`/work/${web.id}`}
                      className="group flex flex-col rounded-3xl border border-[#E5E7EB] bg-white overflow-hidden hover:border-[#7C3AED] transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Browser Frame */}
                      <div className="relative w-full aspect-[4/3] bg-[#F5F5F7] overflow-hidden flex flex-col border-b border-[#E5E7EB]">
                        <BrowserHeader />
                        <div className="relative flex-grow w-full overflow-hidden">
                          <Image
                            src={web.image}
                            alt={web.name}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow bg-[#F5F5F7]">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] bg-[#E5E7EB] px-2.5 py-1 rounded-full">
                            Website
                          </span>
                          <span className="text-xs text-[#6B7280]">
                            {web.categoryLabel}
                          </span>
                        </div>

                        <h3 className="font-monumental text-xl font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#7C3AED] transition-colors mt-1">
                          {web.name}
                        </h3>

                        <p className="text-xs text-[#6B7280] leading-relaxed mt-2 line-clamp-2">
                          {web.tagline}
                        </p>

                        {/* Tech tags */}
                        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                          {web.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] bg-white border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center text-[#6B7280]">
              <p className="text-lg font-medium">No projects found in this category.</p>
              <button
                onClick={() => {
                  setMainTab("all");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-xs uppercase font-bold text-[#7C3AED] tracking-widest hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
