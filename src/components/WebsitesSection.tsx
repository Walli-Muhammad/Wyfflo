"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  websites,
  websiteCategories,
  type Website,
  type WebsiteCategory,
} from "@/data/websites";

export default function WebsitesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const router = useRouter();

  const filtered =
    activeFilter === "all"
      ? websites
      : websites.filter((w) => w.category === activeFilter);

  // Helper to render mock browser top bar
  const BrowserHeader = () => (
    <div className="bg-[#E5E7EB] h-6 border-b border-[#D1D5DB] flex items-center px-3 gap-1.5 shrink-0 select-none">
      <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
      <div className="mx-auto w-1/3 h-3 bg-white/70 rounded-sm border border-[#E5E7EB]" />
    </div>
  );

  return (
    <section id="websites" className="py-28 md:py-40 px-6 md:px-12 bg-[#F5F5F7]">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
            OUR WEBSITES
          </span>
          <h2 className="mt-4 font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
            Digital{" "}
            <span className="text-[#7C3AED]">Portals.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm text-[#6B7280] leading-relaxed">
            Beautiful design meets robust web architecture. From high-performance streaming platforms to developer-first APIs and real estate marketplaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {websiteCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat.id
                  ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                  : "bg-white text-[#6B7280] border-[#E5E7EB] hover:text-[#0A0A0A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Website Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((site, idx) => {
              // Pattern: first item in every group of 5 is featured (span-2)
              const isFeatured = idx % 5 === 0;
              const firstLetter = site.name.charAt(0);

              return (
                <motion.div
                  key={site.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (idx % 3) * 0.05,
                  }}
                  onClick={() => router.push("/work/" + site.id)}
                  className={`group cursor-pointer relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white h-[340px] md:h-[400px] transition-all duration-500 hover:shadow-2xl hover:border-[#7C3AED]/40 ${
                    isFeatured ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  {/* Background Mockup Layer */}
                  {isFeatured ? (
                    // Featured Showcase: Two overlapping, floating browser mockups
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#EDE9FE]/20">
                      {/* Left rotated browser mockup */}
                      <div className="absolute left-[8%] top-[10%] w-[48%] aspect-video rounded-xl shadow-xl border border-[#D1D5DB] rotate-[-6deg] group-hover:rotate-[-3deg] group-hover:scale-[1.03] transition-all duration-700 bg-white flex flex-col overflow-hidden">
                        <BrowserHeader />
                        <div className="relative w-full flex-grow bg-slate-50">
                          <Image
                            src={site.image}
                            alt=""
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </div>

                      {/* Right rotated browser mockup */}
                      <div className="absolute right-[8%] top-[18%] w-[48%] aspect-video rounded-xl shadow-xl border border-[#D1D5DB] rotate-[6deg] group-hover:rotate-[3deg] group-hover:scale-[1.03] transition-all duration-700 bg-white flex flex-col overflow-hidden">
                        <BrowserHeader />
                        <div className="relative w-full flex-grow bg-slate-50">
                          <Image
                            src={site.image}
                            alt=""
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </div>

                      {/* Shadow Overlay */}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                    </div>
                  ) : (
                    // Standard Showcase: Single browser mockup filling background
                    <div className="absolute inset-0 bg-[#F5F5F7] p-4 flex items-start justify-center overflow-hidden">
                      <div className="w-full h-full rounded-2xl shadow-md border border-[#D1D5DB] bg-white flex flex-col overflow-hidden">
                        <BrowserHeader />
                        <div className="relative w-full flex-grow bg-slate-50">
                          <Image
                            src={site.image}
                            alt={site.name}
                            fill
                            className="object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 rounded-3xl" />
                    </div>
                  )}



                  {/* Bottom Text Information Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white z-10 flex flex-col justify-end">
                    <h3 
                      className="font-monumental text-lg md:text-xl font-bold tracking-tight text-white leading-tight"
                      style={{ 
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.8)" 
                      }}
                    >
                      {site.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-xs text-white/80">
                      <span className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white border border-white/10">
                        {site.categoryLabel}
                      </span>
                      <span className="italic truncate ml-4 max-w-[60%]">
                        {site.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Top Right "Explore" Hint */}
                  <div className="absolute top-4 right-4 bg-white/90 text-black text-[10px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Explore Site →
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
