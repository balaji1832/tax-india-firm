import type { Metadata } from "next";

import ServicesSection from "../components/Homepage/ServicesSection";
import StartupPackages from "../components/Homepage/StartupPackages";
import WhyTaxIndiaFirm from "../components/Homepage/WhyTaxIndiaFirm";
import ClientTestimonials from "../components/Homepage/ClientTestimonials";
import ExpertGuides from "../components/Homepage/ExpertGuides";
import FinalCtaBanner from "../components/Homepage/Finalctabanner";
import AdvancedBusinessHero from "../components/Homepage/AdvancedBusinessHero";
import VideoSection from "../components/Homepage/VideoSection";
import WhyChooseUs from "../components/Homepage/WhyChooseUs";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://taxindiafirm.com/",
  },
};

export default function Home() {
  return (
    <>
      <AdvancedBusinessHero />

      <VideoSection />

      <WhyChooseUs />

      <WhyTaxIndiaFirm />

      <ServicesSection />

      <StartupPackages />

      <ClientTestimonials />

      <ExpertGuides />

      <FinalCtaBanner />
    </>
  );
}