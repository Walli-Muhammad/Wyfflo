import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import WebsitesSection from "@/components/WebsitesSection";
import ConnectionTab from "@/components/ConnectionTab";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProcessSection />
      <PortfolioSection />
      <WebsitesSection />
      <ConnectionTab />
    </>
  );
}

