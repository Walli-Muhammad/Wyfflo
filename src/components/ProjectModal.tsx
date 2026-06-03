"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  type Project,
  CATEGORY_COLORS,
  cdnUrl,
} from "@/data/projects";

// SVGs and Icons
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
    <path d="M3.18 23.76c.3.17.65.2.97.08l12.57-7.27-2.76-2.76L3.18 23.76zM.5 1.52A1.5 1.5 0 000 2.67v18.66c0 .45.18.87.5 1.15l.06.06 10.46-10.46v-.25L.56 1.46.5 1.52zm19.4 9.15-2.63-1.52-3.05 3.05 3.05 3.06 2.65-1.53c.76-.44.76-1.62-.02-2.06zm-16.54 12.1 2.76-2.77 10.27-10.28-2.76-2.76L3.36 22.77z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
  </svg>
);

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [project]);

  // Extract screenshots (everything after the icon)
  const screenshots = project ? project.images.slice(1) : [];
  const screenshotCount = screenshots.length;

  const nextSlide = useCallback(() => {
    if (screenshotCount <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshotCount);
  }, [screenshotCount]);

  const prevSlide = useCallback(() => {
    if (screenshotCount <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshotCount) % screenshotCount);
  }, [screenshotCount]);

  // Auto advance carousel
  useEffect(() => {
    if (!isOpen || isHovered || screenshotCount <= 1) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isOpen, isHovered, nextSlide, screenshotCount]);

  // Accessibility focus trap & escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const previousActiveElement = document.activeElement as HTMLElement;

    // Set initial focus on Close button or the panel
    setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector('button[aria-label="Close modal"]') as HTMLElement;
        if (closeBtn) {
          closeBtn.focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 100);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const accent = CATEGORY_COLORS[project.category];
  const hasLinks =
    project.links.playstore || project.links.appstore || project.links.website;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-obsidian-850 p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} Details`}
        style={{
          boxShadow: `0 0 50px ${accent}12, inset 0 0 0 1px ${accent}25`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 z-50"
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Left Column: Carousel (5 cols span on desktop) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center gap-4">
            <div
              className="relative w-full flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Navigation Arrow */}
              {screenshotCount > 1 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/30"
                  aria-label="Previous screenshot"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Phone Mockup Frame */}
              <div className="relative rounded-[32px] bg-obsidian-900 border-[3px] border-white/10 overflow-hidden shadow-2xl aspect-[9/19.5] w-[180px] sm:w-[210px] shrink-0 select-none">
                {/* Dynamic notch bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[11px] bg-obsidian-950 rounded-b-xl z-20" />
                
                {/* Screenshots Animation Holder */}
                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait" custom={direction}>
                    {screenshots[currentIndex] && (
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 80 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                          const swipeThreshold = 50;
                          if (info.offset.x < -swipeThreshold) {
                            nextSlide();
                          } else if (info.offset.x > swipeThreshold) {
                            prevSlide();
                          }
                        }}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                      >
                        <Image
                          src={cdnUrl(screenshots[currentIndex])}
                          alt={`${project.name} screenshot ${currentIndex + 1}`}
                          fill
                          className="object-cover pointer-events-none"
                          sizes="(max-width: 640px) 180px, 210px"
                          priority
                          unoptimized={false}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.opacity = "0";
                          }}
                        />
                        <div className="absolute inset-0 bg-obsidian-800 -z-10" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Navigation Arrow */}
              {screenshotCount > 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/30"
                  aria-label="Next screenshot"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dot Indicators */}
            {screenshotCount > 1 && (
              <div className="flex gap-1.5 justify-center mt-1">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "w-6" : "w-1.5"
                    }`}
                    style={{
                      backgroundColor: i === currentIndex ? accent : "rgba(255, 255, 255, 0.2)",
                    }}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Text Content & Actions (7 cols span on desktop) */}
          <div className="md:col-span-7 flex flex-col gap-6 justify-center">
            
            {/* Header Block */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-obsidian-850">
                <Image
                  src={cdnUrl(project.images[0])}
                  alt={`${project.name} icon`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0";
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-monumental text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                    {project.name}
                  </h3>
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                    style={{
                      borderColor: `${accent}40`,
                      color: accent,
                      background: `${accent}12`,
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>
                <p className="text-sm font-medium leading-none" style={{ color: accent }}>
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Description Block */}
            <div className="text-gray-300 text-sm leading-relaxed font-normal">
              {project.description}
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Store Buttons Row */}
            <div className="flex flex-wrap gap-3 pt-5 border-t border-white/5">
              {hasLinks ? (
                <>
                  {project.links.playstore && (
                    <a
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold text-obsidian-950 bg-emerald-500 hover:bg-emerald-400 transition-colors duration-300 shadow-md shadow-emerald-500/10"
                    >
                      <PlayStoreIcon />
                      Play Store
                    </a>
                  )}
                  {project.links.appstore && (
                    <a
                      href={project.links.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold text-obsidian-950 bg-white hover:bg-gray-200 transition-colors duration-300 shadow-md shadow-white/10"
                    >
                      <AppleIcon />
                      App Store
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold text-obsidian-950 bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 shadow-md shadow-cyan-500/10"
                    >
                      <WebIcon />
                      Website
                    </a>
                  )}
                </>
              ) : (
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-gray-500 cursor-not-allowed">
                  Store Links Coming Soon
                </span>
              )}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
