import Image from "next/image";
import HeroSection from "../components/Homepage/HeroSection";
import ServicesSection from "../components/Homepage/ServicesSection";
import HowItWorks from "../components/Homepage/HowItWorks";
import StartupPackages from "../components/Homepage/StartupPackages";
import WhyTaxIndiaFirm from "../components/Homepage/WhyTaxIndiaFirm";

export default function Home() {
  return (
    <>
    <HeroSection />

    <ServicesSection />

    <HowItWorks />

    <StartupPackages />

    <WhyTaxIndiaFirm />
    </>
  );
}
