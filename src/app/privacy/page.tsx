import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Wyfflo",
  description:
    "Learn how Wyfflo collects, uses, and protects the personal information you share with us.",
};

const SECTIONS = [
  {
    heading: "1. Who We Are",
    body: `Wyfflo is a digital agency registered in the State of New Mexico, operating from 15442 Ventura Blvd., Ste 201-1759, Sherman Oaks, California 91403, United States. We provide software development, mobile app design, UI/UX, ERP solutions, AI/ML integration, and digital marketing services to businesses.

This website (wyfflo.com) serves as our agency portfolio and primary point of contact for prospective clients.

For privacy enquiries, contact us at: info@wyfflo.com`,
  },
  {
    heading: "2. What Information We Collect",
    body: `We collect only the information you voluntarily provide through our contact form:

• Full Name — to address you in correspondence
• Email Address — to respond to your enquiry
• Product Type — to route your enquiry to the right team

We do not collect payment or billing information, passwords or account credentials, sensitive personal data (health, financial, biometric), or automatically tracked behavioural data beyond standard server logs.`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `Information submitted via the contact form is used solely to:

• Respond to your project enquiry
• Assess whether a potential client engagement is a good fit
• Follow up on submitted requests

We do not use your data for marketing to unrelated third parties, automated profiling or decision-making, or sale or transfer to data brokers.`,
  },
  {
    heading: "4. Legal Basis for Processing (GDPR / UK GDPR)",
    body: `If you are located in the European Economic Area (EEA) or the United Kingdom, our legal basis for processing your personal data is legitimate interest — specifically, responding to your voluntary enquiry about our services. You may withdraw consent at any time by contacting us at info@wyfflo.com.`,
  },
  {
    heading: "5. Cookies",
    body: `Our website may use essential session cookies required for basic site functionality. We do not use advertising cookies, cross-site tracking cookies, or third-party analytics platforms that identify you personally.

If we integrate analytics tools in the future, this policy will be updated accordingly.`,
  },
  {
    heading: "6. Data Retention",
    body: `We retain enquiry data for as long as necessary to respond to your request and conduct reasonable business follow-up — typically no longer than 24 months from the date of submission unless a client engagement is initiated.`,
  },
  {
    heading: "7. Data Sharing",
    body: `We do not sell, rent, or share your personal information with third parties, except:

• Service providers (e.g., email hosting, cloud infrastructure) who process data on our behalf under data processing agreements
• Legal compliance where required by applicable law, court order, or governmental authority`,
  },
  {
    heading: "8. Your Rights",
    body: `Depending on your jurisdiction, you may have the right to access the personal data we hold about you, correct inaccurate data, delete your data ("right to be forgotten"), restrict or object to processing, and request data portability.

To exercise any of these rights, contact us at info@wyfflo.com. We will respond within 30 days.`,
  },
  {
    heading: "9. Children's Privacy",
    body: `Our website and services are directed at businesses and professionals. We do not knowingly collect personal data from individuals under the age of 16. If you believe a minor has submitted data through our site, please contact us immediately.`,
  },
  {
    heading: "10. International Transfers",
    body: `Wyfflo is based in the United States. If you contact us from outside the US (including the UK or EU), your data may be transferred to and processed in the United States. By submitting your enquiry, you acknowledge this transfer.`,
  },
  {
    heading: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Material changes will be indicated by updating the "Last Updated" date at the top. Continued use of the website after changes constitutes acceptance.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #EDE9FE 0%, transparent 55%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#6B7280] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Legal
          </span>
          <h1 className="font-monumental text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
            Privacy <span className="text-[#7C3AED]">Policy.</span>
          </h1>
          <p className="mt-5 text-[#6B7280] text-lg leading-relaxed max-w-xl">
            We believe privacy is a right, not an afterthought. Here&apos;s exactly
            what we collect, why we collect it, and how we protect it.
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
            Have a privacy question? Reach out to us directly.
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
