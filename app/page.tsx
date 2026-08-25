import Image from "next/image";
import ServicesSection from "../components/Homepage/ServicesSection";
import HowItWorks from "../components/Homepage/HowItWorks";
import StartupPackages from "../components/Homepage/StartupPackages";
import WhyTaxIndiaFirm from "../components/Homepage/WhyTaxIndiaFirm";
import ClientTestimonials from "../components/Homepage/ClientTestimonials";
import ExpertGuides from "../components/Homepage/ExpertGuides";
import FinalCtaBanner from "../components/Homepage/Finalctabanner";
import AdvancedBusinessHero from "../components/Homepage/AdvancedBusinessHero";
import VideoSection from "../components/Homepage/VideoSection";

export default function Home() {
  return (
    <>
    <AdvancedBusinessHero />

    <VideoSection />
    <ServicesSection />

    <HowItWorks />

    <StartupPackages />

    <WhyTaxIndiaFirm />

   <ClientTestimonials />

   <ExpertGuides />

   <FinalCtaBanner /> 
    </>
  );
}
