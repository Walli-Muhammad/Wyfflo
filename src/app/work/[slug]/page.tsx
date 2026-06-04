import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

/* ---------- Static Params & Metadata ---------- */

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);
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
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  /* Derive platform string */
  const platform =
    project.links.playstore && project.links.appstore
      ? "Android & iOS"
      : project.links.playstore
        ? "Android"
        : project.links.appstore
          ? "iOS"
          : "Web";

  /* Similar projects */
  const sameCategory = projects.filter(
    (p) => p.id !== project.id && p.category === project.category
  );
  let similar = sameCategory.slice(0, 3);
  if (similar.length < 3) {
    const others = projects.filter(
      (p) => p.id !== project.id && !similar.some((s) => s.id === p.id)
    );
    similar = [...similar, ...others].slice(0, 3);
  }

  return (
    <>
      {/* ===== 1. Header ===== */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-16">
          <Link href="/#work" className="text-sm text-[#6B7280] hover:text-[#7C3AED] transition-colors">
            ← Back to Work
          </Link>

          <div className="flex flex-row gap-6 items-start mt-8">
            {/* App Icon */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E5E7EB] shrink-0 relative">
              <Image src={project.images[0]} alt={`${project.name} icon`} fill className="object-cover" sizes="64px" />
            </div>

            {/* Name / Tagline / Badge */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-monumental text-[40px] leading-tight font-bold text-[#0A0A0A]">
                {project.name}
              </h1>
              <p className="text-[#7C3AED] text-lg italic">{project.tagline}</p>
              <span className="bg-[#EDE9FE] text-[#7C3AED] rounded-full px-3 py-1 text-xs font-semibold uppercase w-fit">
                {project.categoryLabel}
              </span>
            </div>
          </div>

          {/* Store Buttons */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {project.links.playstore && (
              <a
                href={project.links.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
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
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors"
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
                className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#0A0A0A] rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#F5F5F7] transition-colors"
              >
                <GlobeIcon />
                Website
              </a>
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
              { label: "Category", value: project.categoryLabel },
              { label: "Timeline", value: project.timeline },
              { label: "Region", value: project.region },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 border border-[#E5E7EB]">
                <p className="text-xs uppercase tracking-wider text-[#6B7280] mb-1">{stat.label}</p>
                <p className="font-monumental text-lg font-bold text-[#0A0A0A]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. About ===== */}
      <section className="bg-white">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Text */}
            <div>
              <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-6">About the App</h2>
              <p className="text-[#6B7280] leading-relaxed text-base">{project.description}</p>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center">
              <div className="bg-[#0A0A0A] rounded-[2.5rem] p-2 max-w-[220px] mx-auto">
                <div className="rounded-[2rem] overflow-hidden aspect-[9/19.5] relative bg-black">
                  <Image src={project.images[2]} alt="" fill className="object-cover" sizes="220px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Key Features ===== */}
      <section className="bg-[#F5F5F7]">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature) => (
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
            {project.techStack.map((tech) => (
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

      {/* ===== 6. Visual Highlights ===== */}
      <section className="bg-white">
        <div className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
          <h2 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-8">Visual Highlights</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {project.images.slice(1, 5).map((img, i) => (
              <div key={i} className="flex-shrink-0 bg-[#0A0A0A] rounded-[2.5rem] p-2 w-[180px]">
                <div className="rounded-[2rem] overflow-hidden aspect-[9/19.5] relative bg-black">
                  <Image src={img} alt="" fill className="object-cover" sizes="180px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {similar.map((p) => (
              <Link key={p.id} href={`/work/${p.id}`} className="group">
                <div className="rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  {/* Image */}
                  <div className="aspect-video relative bg-[#F5F5F7]">
                    <Image src={p.images[1]} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>

                  {/* Info */}
                  <div className="p-5 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E5E7EB] shrink-0 relative">
                      <Image src={p.images[0]} alt="" fill className="object-cover" sizes="40px" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-monumental text-sm font-semibold text-[#0A0A0A] truncate">{p.name}</h3>
                      <span className="bg-[#EDE9FE] text-[#7C3AED] rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase w-fit">
                        {p.categoryLabel}
                      </span>
                      <p className="text-xs text-[#6B7280] truncate">{p.tagline}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
