import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Wyfflo",
  description:
    "Read Wyfflo's Terms and Conditions governing the use of our website and services.",
};

const SECTIONS = [
  {
    heading: "1. Agreement to Terms",
    body: `By accessing or using wyfflo.com (the "Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use the Site.

These Terms govern your use of the Site as a visitor or prospective client. They do not govern individual client engagements — those are governed by separate signed contracts between Wyfflo and each client.`,
  },
  {
    heading: "2. About the Site",
    body: `This Site is a portfolio and enquiry website for Wyfflo, a digital agency. It displays our past work, describes our services, and provides a contact form for prospective clients to reach us. No products are sold, subscribed to, or delivered through this website.`,
  },
  {
    heading: "3. Intellectual Property",
    body: `Our Content: All content on this Site — including the Wyfflo name, logo, written copy, design, graphics, animations, and service descriptions — is owned by or licensed to Wyfflo and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.

Portfolio Work: Case studies, app screenshots, and website previews displayed in our portfolio represent work delivered to clients. All underlying intellectual property in those products belongs to the respective clients under the terms of their individual service agreements with Wyfflo.`,
  },
  {
    heading: "4. Use of the Site",
    body: `You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Use the Site in any way that is fraudulent or harmful
• Submit false or misleading information via the contact form
• Attempt to gain unauthorised access to any part of the Site
• Use automated tools to scrape, crawl, or extract content
• Transmit spam, viruses, or any code intended to disrupt the Site`,
  },
  {
    heading: "5. Contact Form Submissions",
    body: `Submitting an enquiry through our contact form does not constitute a binding contract, proposal, or service agreement. It is an expression of interest only. Any engagement between you and Wyfflo will be formalised through a separate written agreement signed by both parties.

We reserve the right to decline any enquiry at our sole discretion.`,
  },
  {
    heading: "6. No Warranties",
    body: `The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to:

• Accuracy or completeness of information
• Uninterrupted or error-free access
• Fitness for any particular purpose

Wyfflo makes no warranty that the Site will meet your requirements or that any information presented is free of inaccuracies.`,
  },
  {
    heading: "7. Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, Wyfflo and its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or use of (or inability to use) the Site, any content on the Site, or any errors or omissions in content.

Our total liability for any direct damages arising from your use of the Site shall not exceed USD $100.`,
  },
  {
    heading: "8. Third-Party Links",
    body: `Our portfolio case studies may include links to live client websites and third-party app stores (Google Play, Apple App Store). These sites are governed by their own terms and privacy policies. Wyfflo is not responsible for the content, practices, or availability of third-party sites.`,
  },
  {
    heading: "9. Governing Law & Dispute Resolution",
    body: `These Terms are governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

Any dispute arising from these Terms or your use of the Site shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Los Angeles County, California, under the rules of the American Arbitration Association, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction.`,
  },
  {
    heading: "10. Changes to These Terms",
    body: `We may revise these Terms at any time by updating this page. Continued use of the Site after changes constitutes acceptance of the updated Terms.`,
  },
  {
    heading: "11. Severability",
    body: `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #EDE9FE 0%, transparent 55%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#6B7280] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Legal
          </span>
          <h1 className="font-monumental text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
            Terms &amp; <span className="text-[#7C3AED]">Conditions.</span>
          </h1>
          <p className="mt-5 text-[#6B7280] text-lg leading-relaxed max-w-xl">
            These Terms govern your use of the Wyfflo website. Please read them
            carefully before engaging with us.
          </p>
          <p className="mt-6 text-xs text-[#9CA3AF] uppercase tracking-widest font-medium">
            Effective Date: July 2025 &nbsp;·&nbsp; Last Updated: July 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pb-32">
        {/* Divider */}
        <div className="w-full h-px bg-[#E5E7EB] mb-16" />

        <div className="flex flex-col gap-14">
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="font-monumental text-xl font-bold text-[#0A0A0A] tracking-tight mb-4">
                {section.heading}
              </h2>
              <div className="text-[#4B5563] leading-relaxed text-[15px] whitespace-pre-line">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E7EB] my-16" />

        {/* Contact block */}
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F5F7] p-8">
          <h2 className="font-monumental text-xl font-bold text-[#0A0A0A] tracking-tight mb-2">
            12. Contact
          </h2>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Questions about these Terms? We&apos;re happy to clarify anything.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[#4B5563]">
            <p className="font-bold text-[#0A0A0A]">Wyfflo</p>
            <p>15442 Ventura Blvd., Ste 201-1759</p>
            <p>Sherman Oaks, California 91403, United States</p>
            <a
              href="mailto:info@wyfflo.com"
              className="text-[#7C3AED] hover:underline mt-2 font-medium"
            >
              info@wyfflo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
