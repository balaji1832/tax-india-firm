import type { Metadata } from "next";

import ContactHero from "../../components/ContactUs/ContactHero";
import ContactOffice from "../../components/ContactUs/ContactOffice";
import ContactEnquiries from "../../components/ContactUs/ContactEnquiries";
import ContactHelp from "../../components/ContactUs/ContactHelp";
import ContactSupport from "../../components/ContactUs/ContactSupport";
import ContactCTA from "../../components/ContactUs/ContactCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Free Consultation | Chennai",
  },
  description:
    "Reach out for a free consultation on GST, company registration or income tax. Call, WhatsApp or visit our Chennai office.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <ContactHero />
      <ContactOffice />
      <ContactEnquiries />
      <ContactHelp />
      <ContactSupport />
      <ContactCTA />
    </main>
  );
}