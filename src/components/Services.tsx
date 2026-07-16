"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SERVICES, type Service } from "@/lib/data";

// Service icon map using SVG paths
const ICON_SVG: Record<string, React.ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
  ),
  "pen-tool": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25-4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
};

function ServiceCard({ service, index, contactHref }: { service: Service; index: number; contactHref: string }) {
  return (
    <div
      className={`service-card group relative flex flex-col gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 transition-all duration-300 hover:shadow-md hover:border-[#7C3AED] service-card-${index}`}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#7C3AED]">
        {ICON_SVG[service.icon]}
      </div>

      {/* Index number */}
      <span className="absolute right-8 top-8 font-monumental text-5xl font-bold text-[#0A0A0A]/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-3 mt-2">
        <h3 className="font-monumental text-xl font-bold tracking-tight text-[#0A0A0A]">
          {service.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Learn More → scrolls to contact and pre-fills the service type */}
      <a
        href={contactHref}
        className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B7280] transition-colors duration-300 group-hover:text-[#7C3AED]"
      >
        <span>Learn More</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Build the href for each service's Learn More link.
  // On the homepage ("/") we use a bare hash+query so the browser scrolls
  // without a full navigation. On any other page we use an absolute path
  // so the browser navigates to the homepage first then scrolls.
  const buildHref = (contactType: string) =>
    pathname === "/"
      ? `#contact?service=${contactType}`
      : `/?service=${contactType}#contact`;

  useEffect(() => {
    let ctx: any;
    let isCancelled = false;

    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        if (isCancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Cards: animate each from bottom sequentially as user scrolls
          const cards = gsap.utils.toArray<HTMLElement>(".service-card");
          gsap.set(cards, { opacity: 0, y: 60 });

          cards.forEach((card, i) => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.08, // slightly staggered
            });
          });

          // Headline fade-up
          if (headlineRef.current) {
            gsap.fromTo(
              headlineRef.current,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: headlineRef.current,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="py-28 md:py-40 px-6 md:px-12 bg-[#F5F5F7] overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section headline */}
        <div ref={headlineRef} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
              Our Expertise
            </span>
            <h2 className="font-monumental text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
              What We<br />
              <span className="text-[#7C3AED]">Master.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm text-[#6B7280] leading-relaxed md:text-right">
            Four pillars of technical excellence — each a focused discipline,
            together forming a complete digital capability.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsWrapperRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              contactHref={buildHref(service.contactType)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
