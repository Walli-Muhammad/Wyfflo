import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Full Portfolio — Mobile Apps & Digital Web Platforms | Wyfflo",
  description:
    "Explore Wyfflo's complete portfolio of mobile apps, web applications, enterprise software, and SaaS platforms.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
