import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { websites } from "@/data/websites";

/* ---------- Static Params & Metadata ---------- */

export async function generateStaticParams() {
  const appSlugs = projects.map((p) => ({ slug: p.id }));
  const webSlugs = websites.map((w) => ({ slug: w.id }));
  return [...appSlugs, ...webSlugs];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug) || websites.find((w) => w.id === params.slug);
  return { title: project ? `${project.name} — Wyfflo` : "Project — Wyfflo" };
}

/* ---------- Inline SVG Icons ---------- */

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3.18 23.76c.3.17.65.2.97.08l12.57-7.27-2.76-2.76L3.18 23.76zM.5 1.52A1.5 1.5 0 000 2.67v18.66c0 .45.18.87.5 1.15l.06.06 10.46-10.46v-.25L.56 1.46.5 1.52zm19.4 9.15-2.63-1.52-3.05 3.05 3.05 3.06 2.65-1.53c.76-.44.76-1.62-.02-2.06zm-16.54 12.1 2.76-2.77 10.27-10.28-2.76-2.76L3.36 22.77z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth={2} className="w-5 h-5">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ---------- Page Component ---------- */

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const appProject = projects.find((p) => p.id === params.slug);
  const webProject = websites.find((w) => w.id === params.slug);

  if (!appProject && !webProject) notFound();

  const isWebsite = !!webProject;

  // Normalized fields depending on project type
  const name = isWebsite ? webProject.name : appProject!.name;
  const tagline = isWebsite ? webProject.tagline : appProject!.tagline;
  const categoryLabel = isWebsite ? webProject.categoryLabel : appProject!.categoryLabel;
  const description = isWebsite ? webProject.description : appProject!.description;
  const techStack = isWebsite ? webProject.techStack : appProject!.techStack;
  const tags = isWebsite ? webProject.tags : appProject!.tags;
  const timeline = isWebsite ? "4–6 months" : appProject!.timeline;
  const region = isWebsite ? "Global" : appProject!.region;
  const platform = isWebsite
    ? "Web"
    : appProject!.links.playstore && appProject!.links.appstore
    ? "Android & iOS"
    : appProject!.links.playstore
    ? "Android"
    : "iOS";

  // Website features generator
  const features = isWebsite
    ? [
        { title: "Responsive Layout", description: "Seamless navigation across all viewport sizes, from mobile screen to ultra-wide desktop." },
        { title: "High Performance", description: "Engineered for speed, optimized assets, and rapid time-to-interactive." },
        { title: "Modern Web Architecture", description: "Implements clean typography, smooth transitions, and premium user experience." }
      ]
    : appProject!.features;

  // Similar projects retrieval
  let similar: any[] = [];
  if (isWebsite) {
    const sameCategory = websites.filter(
      (w) => w.id !== webProject.id && w.category === webProject.category
    );
    similar = sameCategory.slice(0, 3);
    if (similar.length < 3) {
      const others = websites.filter(
        (w) => w.id !== webProject.id && !similar.some((s) => s.id === w.id)
      );
      similar = [...similar, ...others].slice(0, 3);
    }
  } else {
    const sameCategory = projects.filter(
      (p) => p.id !== appProject!.id && p.category === appProject!.category
    );
    similar = sameCategory.slice(0, 3);
    if (similar.length < 3) {
      const others = projects.filter(
        (p) => p.id !== appProject!.id && !similar.some((s) => s.id === p.id)
      );
      similar = [...similar, ...others].slice(0, 3);
    }
  }

  return (
    <>
      {/* ===== 1. Header ===== */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-16">
          <Link href={isWebsite ? "/#websites" : "/#work"} className="text-sm text-[#6B7280] hover:text-[#7C3AED] transition-colors">
            ← Back to Work
          </Link>

          <div className="flex flex-row gap-6 items-start mt-8">
            {/* Project Icon */}
            {isWebsite ? (
              <div className="w-16 h-16 rounded-2xl bg-[#EDE9FE] border border-[#E5E7EB] shrink-0 flex items-center justify-center font-monumental text-3xl font-black text-[#7C3AED] select-none">
                {webProject.name.charAt(0)}
              </div>
            ) : (
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E5E7EB] shrink-0 relative bg-white">
                <Image src={appProject!.images[0]} alt={`${appProject!.name} icon`} fill className="object-cover" sizes="64px" />
              </div>
            )}

            {/* Name / Tagline / Badge */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-monumental text-[32px] md:text-[40px] leading-tight font-bold text-[#0A0A0A]">
                {name}
              </h1>
              <p className="text-[#7C3AED] text-base md:text-lg italic">{tagline}</p>
              <span className="bg-[#EDE9FE] text-[#7C3AED] rounded-full px-3 py-1 text-xs font-semibold uppercase w-fit">
                {categoryLabel}
              </span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {!isWebsite && appProject!.links.playstore && (
              <a
                href={appProject!.links.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
              >
                <PlayStoreIcon />
                Play Store
              </a>
            )}
            {!isWebsite && appProject!.links.appstore && (
              <a
                href={appProject!.links.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors"
              >
                <AppleIcon />
                App Store
              </a>
            )}
            {isWebsite ? (
              <a
                href={webProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#6D28D9] transition-colors shadow-lg shadow-[#7C3AED]/20"
              >
                <GlobeIcon />
                Visit Website
              </a>
            ) : (
              appProject!.links.website && (
                <a
                  href={appProject!.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#0A0A0A] rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#F5F5F7] transition-colors"
                >
                  <GlobeIcon />
                  Website
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== 2. Overview Strip ===== */}
      <section className="bg-[#F5F5F7]">
        <div className="max-w-screen-xl mx-auto py-12 px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Platform", value: platform },
              { label: "Category", value: categoryLabel },
              { label: "Timeline", value: timeline },
              { label: "Region", value: region },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 border border-[#E5E7EB]">
                <p className="text-xs uppercase tracking-wider text-[#6B7280] mb-1">{stat.label}</p>
                <p className="font-monumental text-base md:text-lg font-bold text-[#0A0A0A]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. About ===== */}
      <section className="bg-white">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-6">About the Project</h2>
              <p className="text-[#6B7280] leading-relaxed text-base">{description}</p>
            </div>

            {/* Right: Large Mockup Container */}
            <div className="flex justify-center items-center">
              {isWebsite ? (
                /* Website Mockup Browser Window */
                <div className="w-full max-w-[540px] aspect-video rounded-2xl border border-[#D1D5DB] bg-white shadow-2xl relative overflow-hidden flex flex-col animate-float">
                  <div className="bg-[#E5E7EB] h-6 border-b border-[#D1D5DB] flex items-center px-3 gap-1.5 shrink-0 select-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <div className="mx-auto w-1/3 h-3 bg-white/70 rounded-sm border border-[#E5E7EB]" />
                  </div>
                  <div className="relative w-full flex-grow">
                    <Image src={webProject.image} alt={webProject.name} fill className="object-cover object-top" sizes="540px" />
                  </div>
                </div>
              ) : (
                /* Mobile Mockup Phone Frame */
                <div className="w-full max-w-[300px] aspect-[9/16] rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl relative overflow-hidden animate-float">
                  <Image src={appProject!.images[2]} alt={`${appProject!.name} feature screenshot`} fill className="object-cover" sizes="300px" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Key Features ===== */}
      <section className="bg-[#F5F5F7]">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED] mb-4">
                  <CheckIcon />
                </div>
                <h3 className="font-monumental text-base font-semibold text-[#0A0A0A] mb-1">{feature.title}</h3>
                <p className="text-sm text-[#6B7280]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. Tech Stack ===== */}
      <section className="bg-white">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#F5F5F7] border border-[#E5E7EB] text-[#0A0A0A] rounded-full px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Visual Highlights (Only for Apps) ===== */}
      {!isWebsite && (
        <section className="bg-white">
          <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
            <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Visual Highlights</h2>
            <div className="flex gap-6 overflow-x-auto pb-8 pt-4">
              {appProject!.images.slice(1, 5).map((img, i) => {
                const anims = [
                  "animate-float",
                  "animate-float-delay-1",
                  "animate-float-delay-2",
                  "animate-float-delay-3"
                ];
                const animClass = anims[i % anims.length];

                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-3xl border border-[#E5E7EB] bg-white shadow-lg relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#7C3AED]/40 hover:-translate-y-2 group ${animClass}`}
                  >
                    <Image
                      src={img}
                      alt={`${appProject!.name} screen ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 240px, 280px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== 7. CTA Section ===== */}
      <section className="bg-[#7C3AED]">
        <div className="py-20 px-6 md:px-12 text-center">
          <h2 className="font-monumental text-3xl md:text-4xl font-bold text-white mb-4">
            Want to build something like this?
          </h2>
          <p className="text-white/80 text-lg mb-8">Let&apos;s talk about your project.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#7C3AED] px-8 py-3.5 text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* ===== 8. Similar Projects ===== */}
      <section className="bg-white">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similar.map((p) => {
              const isSimWebsite = !('images' in p);
              const simLink = `/work/${p.id}`;
              const simImg = isSimWebsite ? (p as any).image : (p as any).images[1];
              const simCategoryLabel = p.categoryLabel;
              
              return (
                <Link key={p.id} href={simLink} className="group">
                  <div className="rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden transition-shadow hover:shadow-md h-full flex flex-col bg-white">
                    {/* Image / Browser Mockup */}
                    <div className="aspect-video relative bg-[#F5F5F7] overflow-hidden border-b border-[#E5E7EB]">
                      {isSimWebsite ? (
                        <div className="w-full h-full flex flex-col">
                          <div className="bg-[#E5E7EB] h-4 border-b border-[#D1D5DB] flex items-center px-2 gap-1 shrink-0 select-none">
                            <div className="w-1 h-1 rounded-full bg-[#EF4444]" />
                            <div className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                            <div className="w-1 h-1 rounded-full bg-[#10B981]" />
                          </div>
                          <div className="relative w-full flex-grow">
                            <Image src={simImg} alt={p.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                          </div>
                        </div>
                      ) : (
                        <Image src={simImg} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5 flex items-start gap-3 flex-grow">
                      {isSimWebsite ? (
                        <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] border border-[#E5E7EB] shrink-0 flex items-center justify-center font-monumental text-base font-black text-[#7C3AED] select-none">
                          {p.name.charAt(0)}
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E5E7EB] shrink-0 relative">
                          <Image src={(p as any).images[0]} alt="" fill className="object-cover" sizes="40px" />
                        </div>
                      )}
                      <div className="flex flex-col gap-1 min-w-0">
                        <h3 className="font-monumental text-sm font-semibold text-[#0A0A0A] truncate">{p.name}</h3>
                        <span className="bg-[#EDE9FE] text-[#7C3AED] rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase w-fit">
                          {simCategoryLabel}
                        </span>
                        <p className="text-xs text-[#6B7280] truncate">{p.tagline}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
