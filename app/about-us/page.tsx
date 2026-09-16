import type { Metadata } from "next";

/* =========================================================
   ABOUT US COMPONENTS
========================================================= */

import AboutHero from "../../components/AboutUs/AboutHero";
import AboutStory from "../../components/AboutUs/AboutStory";
import AboutServices from "../../components/AboutUs/AboutServices";
import BusinessJourney from "../../components/AboutUs/BusinessJourney";
import MultiDisciplinary from "../../components/AboutUs/MultiDisciplinary";
import HowWeWork from "../../components/AboutUs/HowWeWork";
import WhyChooseAbout from "../../components/AboutUs/WhyChooseAbout";
import CommitmentSection from "../../components/AboutUs/CommitmentSection";
import BusinessGrowth from "../../components/AboutUs/BusinessGrowth";
import AboutFaq from "../../components/AboutUs/AboutFaq";
import AboutCTA from "../../components/AboutUs/AboutCTA";

/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute: "About Tax India Firm | Business & Professional Services",
  },

  description:
    "Learn about Tax India Firm, a Chennai-based professional services firm supporting businesses with taxation, accounting, compliance, legal and business services.",

  alternates: {
    canonical: "/about-us",
  },
};

/* =========================================================
   ABOUT US PAGE
========================================================= */

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* HERO */}
      <AboutHero />

      {/* WHO WE ARE */}
      <AboutStory />

      {/* SERVICES */}
      <AboutServices />

      {/* BUSINESS JOURNEY */}
      <BusinessJourney />

      {/* MULTI-DISCIPLINARY */}
      <MultiDisciplinary />

      {/* HOW WE WORK */}
      <HowWeWork />

      {/* WHY CHOOSE US */}
      <WhyChooseAbout />

      {/* COMMITMENT */}
      <CommitmentSection />

      {/* BUSINESS GROWTH */}
      <BusinessGrowth />

      {/* FAQ */}
      <AboutFaq />

      {/* CTA */}
      <AboutCTA /> 
    </main>
  );
}