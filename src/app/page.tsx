import CompanyLogosSection from "@/components/sections/company-logos-section";
import CTA from "@/components/sections/cta";
import FeaturesSection from "@/components/sections/features-section";
import Hero from "@/components/sections/hero";
import Hero1 from "@/components/sections/hero1";
import HowItWorksSection from "@/components/sections/how-it-works";
import StatsSection from "@/components/sections/stats-section";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      {/* <Hero1 /> */}
      {/* <CompanyLogosSection /> */}
      {/* <StatsSection /> */}
      <FeaturesSection />
      <HowItWorksSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
