import Image from "next/image";
import HeroSection from "../components/Homepage/HeroSection";
import ServicesSection from "../components/Homepage/ServicesSection";
import HowItWorks from "../components/Homepage/HowItWorks";
import StartupPackages from "../components/Homepage/StartupPackages";
import WhyTaxIndiaFirm from "../components/Homepage/WhyTaxIndiaFirm";
import ClientTestimonials from "../components/Homepage/ClientTestimonials";
import ExpertGuides from "../components/Homepage/ExpertGuides";
import FinalCtaBanner from "../components/Homepage/Finalctabanner";

export default function Home() {
  return (
    <>
    <HeroSection />

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
