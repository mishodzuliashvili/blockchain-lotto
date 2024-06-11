import CTA from "@/components/sections/cta";
import FeaturesSection from "@/components/sections/features-section";
import Hero from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import React from "react";

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
