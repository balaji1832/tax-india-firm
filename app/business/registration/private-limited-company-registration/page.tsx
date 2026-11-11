import type { Metadata } from "next";
import DynamicServiceInnerPages, {
  type ServiceInnerPageData,
} from "../../../../components/Dynamic-Hub-Page/DynamicServiceInnerPages";

export const metadata: Metadata = {
  title: { absolute: "Private Limited Company Registration in Chennai" },
  description:
    "Register your Pvt Ltd company in Chennai with expert MCA filing, DSC, DIN, MOA & AOA handled end-to-end across Tamil Nadu.",
  alternates: {
    canonical:
      "https://taxindiafirm.com/business/registration/private-limited-company-registration",
  },
  robots: { index: true, follow: true },
};

const pageData: ServiceInnerPageData = {
  slug: "private-limited-company-registration",
  category: "Business Registration Services",
  location: "Chennai, Tamil Nadu",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Business Services", href: "/business" },
    { label: "Business Registration", href: "/business/registration" },
    { label: "Private Limited Company Registration" },
  ],
  hero: {
    eyebrow: "Company Registration Services in Chennai",
    title: "Private Limited Company Registration in Chennai",
    tagline: "Start your Pvt Ltd company in Chennai today.",
    subtitle:
      "Expert-assisted company registration with end-to-end MCA filing across Tamil Nadu.",
    paragraphs: [
      "A Private Limited Company is the preferred business structure for startups, growing businesses and entrepreneurs seeking credibility, limited liability and long-term scalability. Tax India Firm handles the complete incorporation process, from name approval and DSC to Certificate of Incorporation, across Chennai and Tamil Nadu.",
      "Serving businesses since 2013 through Chartered Accountants, Company Secretaries and Corporate Lawyers.",
    ],
    benefits: [
      "Limited Liability Protection",
      "Separate Legal Identity",
      "Higher Business Credibility",
      "Investment Readiness",
    ],
    ctaLabel: "Start Your Pvt Ltd Registration on WhatsApp",
    image: {
      src: "/images/company-registration.png",
      alt: "Private limited company registration Chennai Tamil Nadu",
    },
  },
  cta: {
    label: "Register Your Pvt Ltd Company Today",
    href: "https://wa.me/919882574040",
  },
  nav: [
    { id: "why-choose-private-limited", label: "Why Entrepreneurs Choose a Private Limited Company" },
    { id: "key-advantages", label: "Key Advantages of Registering a Private Limited Company" },
    { id: "incorporation-documents", label: "Documents Required for Company Incorporation" },
    { id: "registration-process", label: "Our 5-Step Registration Process" },
    { id: "registration-support", label: "Complete End-to-End Company Registration Support" },
    { id: "why-tax-india-firm", label: "Why Businesses Choose Tax India Firm for Company Registration" },
    { id: "company-registration-faq", label: "Frequently Asked Questions About Private Limited Company Registration" },
  ],
  sections: [
    {
      id: "why-choose-private-limited",
      eyebrow: "What is a private limited company?",
      title: "Why Entrepreneurs Choose a Private Limited Company",
      layout: "overview",
      paragraphs: [
        "A Private Limited Company is a legally recognised business structure registered under the Companies Act, 2013. It exists as a separate legal entity from its owners, which means the company can own assets, enter contracts, open bank accounts and conduct business in its own name.",
        "This structure is widely preferred by startups, technology companies, service businesses, manufacturers and businesses planning future expansion because it provides limited liability protection to shareholders and a higher level of credibility with customers, investors and financial institutions.",
        "Unlike sole proprietorships or partnerships, ownership and management can be structured separately, making it easier to raise investment, add shareholders and build a scalable organisation.",
        "If your long-term goal is growth, brand credibility and business continuity, a Private Limited Company is often the most suitable option.",
      ],
    },
    {
      id: "key-advantages",
      eyebrow: "Benefits of private limited company registration",
      title: "Key Advantages of Registering a Private Limited Company",
      layout: "benefits",
      paragraphs: [],
      items: [
        {
          title: "Limited Liability Protection",
          paragraphs: ["The personal assets of shareholders remain protected from the company's business liabilities and obligations."],
        },
        {
          title: "Separate Legal Identity",
          paragraphs: ["The company exists independently from its directors and shareholders, allowing it to own assets and enter contracts."],
        },
        {
          title: "Higher Business Credibility",
          paragraphs: ["Private Limited Companies are generally viewed as more trustworthy by banks, corporate clients, vendors and investors."],
        },
        {
          title: "Investment Readiness",
          paragraphs: ["Most angel investors, venture capital firms and institutional investors prefer investing in Private Limited Companies."],
        },
        {
          title: "Perpetual Succession",
          paragraphs: ["The company continues to exist regardless of changes in ownership or management."],
        },
        {
          title: "Easy Ownership Transfer",
          paragraphs: ["Shares can be transferred according to applicable regulations, making ownership restructuring more straightforward."],
        },
      ],
    },
    {
      id: "incorporation-documents",
      eyebrow: "Documents required for private limited company registration",
      title: "Documents Required for Company Incorporation",
      layout: "documents",
      paragraphs: [],
      items: [
        {
          title: "For Directors & Shareholders",
          paragraphs: [
            "PAN Card",
            "Aadhaar Card",
            "Passport-size Photograph",
            "Mobile Number",
            "Email Address",
            "Address Proof (Bank Statement, Electricity Bill or Telephone Bill)",
          ],
        },
        {
          title: "For Registered Office Address",
          paragraphs: [
            "Rental Agreement (if rented)",
            "No Objection Certificate (NOC) from Property Owner",
            "Latest Utility Bill",
            "OR",
            "Property Tax Receipt / Ownership Document",
          ],
        },
      ],
      footer: ["Our team verifies all documents before submission to minimise delays and MCA resubmissions."],
    },
    {
      id: "registration-process",
      eyebrow: "How private limited company registration works",
      title: "Our 5-Step Registration Process",
      layout: "process",
      paragraphs: [],
      items: [
        {
          title: "Business Consultation & Structure Review",
          paragraphs: ["We understand your business model, ownership requirements and future plans before initiating registration."],
        },
        {
          title: "Document Collection & DSC Application",
          paragraphs: ["Digital Signature Certificates (DSC) are obtained for the proposed directors and incorporation documents are prepared."],
        },
        {
          title: "Company Name Reservation",
          paragraphs: ["Name availability is checked and submitted through MCA guidelines for approval."],
        },
        {
          title: "Incorporation Filing with MCA",
          paragraphs: ["MOA, AOA and incorporation forms are prepared and filed through the Ministry of Corporate Affairs portal."],
        },
        {
          title: "Certificate of Incorporation Issued",
          paragraphs: ["Once approved, the company receives its Certificate of Incorporation along with CIN, PAN and TAN."],
        },
      ],
    },
    {
      id: "registration-support",
      eyebrow: "What's included in our service",
      title: "Complete End-to-End Company Registration Support",
      layout: "checklist",
      paragraphs: ["Our Private Limited Company Registration service includes:"],
      checklist: [
        "Company Name Availability Check",
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)",
        "Drafting of MOA & AOA",
        "SPICe+ Incorporation Filing",
        "PAN & TAN Application",
        "Certificate of Incorporation",
        "MCA Compliance Guidance",
        "GST Registration Advisory",
        "Post-Incorporation Support",
      ],
      footer: ["No third-party filing agents. All registrations are handled through authorised professionals and government-approved filing channels."],
    },
    {
      id: "why-tax-india-firm",
      eyebrow: "Why Tax India Firm",
      title: "Why Businesses Choose Tax India Firm for Company Registration",
      layout: "benefits",
      paragraphs: [],
      items: [
        {
          title: "CA, CS & Legal Expertise",
          paragraphs: ["Every incorporation is handled by qualified professionals experienced in company law, taxation and regulatory compliance."],
        },
        {
          title: "Transparent Process",
          paragraphs: ["We explain timelines, documentation requirements and government procedures before filing begins."],
        },
        {
          title: "MCA-Compliant Filing",
          paragraphs: ["All filings are prepared and submitted through official MCA systems in accordance with applicable regulations."],
        },
        {
          title: "Post-Incorporation Support",
          paragraphs: ["Registration is only the beginning. We continue supporting businesses with GST, ROC, taxation and annual compliance requirements."],
        },
        {
          title: "Tamil Nadu Business Expertise",
          paragraphs: ["Since 2013, we have worked with startups, SMEs and established businesses across Chennai and Tamil Nadu."],
        },
      ],
    },
    {
      id: "registration-consultation",
      eyebrow: "Mid-page CTA",
      title: "Ready to launch your company?",
      layout: "cta",
      ctaLabel: "Chat With a Company Registration Expert",
      paragraphs: ["Speak directly with our registration team and understand the complete process, documentation and timeline before you begin."],
    },
    {
      id: "company-registration-faq",
      eyebrow: "Your questions answered",
      title: "Frequently Asked Questions About Private Limited Company Registration",
      layout: "faq",
      paragraphs: [],
      items: [
        {
          title: "How many directors are required for a Private Limited Company?",
          paragraphs: ["A minimum of two directors is required. At least one director must be an Indian resident."],
        },
        {
          title: "How many shareholders can a Private Limited Company have?",
          paragraphs: ["A Private Limited Company can have up to 200 shareholders under the Companies Act, 2013."],
        },
        {
          title: "How long does Private Limited Company Registration take in Chennai?",
          paragraphs: ["Registration generally takes between 10 and 15 working days, depending on document readiness and MCA processing timelines."],
        },
        {
          title: "Is physical presence required for company registration?",
          paragraphs: ["No. The entire registration process can be completed online by sharing documents digitally."],
        },
        {
          title: "What is the minimum capital required to start a Private Limited Company?",
          paragraphs: ["There is currently no mandatory minimum paid-up capital requirement for incorporation."],
        },
        {
          title: "Can foreigners become shareholders in a Private Limited Company?",
          paragraphs: ["Yes. Subject to applicable FEMA and FDI regulations, foreign nationals and foreign entities may invest in Indian Private Limited Companies."],
        },
        {
          title: "Is GST registration compulsory after incorporation?",
          paragraphs: ["GST registration depends on turnover, business activity and statutory requirements. Many businesses complete GST registration immediately after incorporation."],
        },
        {
          title: "What happens after incorporation?",
          paragraphs: ["After incorporation, businesses may need GST registration, accounting setup, annual ROC filing, income tax compliance and other regulatory registrations depending on operations."],
        },
      ],
    },
    {
      id: "register-your-company",
      eyebrow: "Final CTA",
      title: "Build Your Business on the Right Foundation.",
      layout: "cta",
      paragraphs: [
        "Get your Private Limited Company registered with professional guidance, MCA-compliant filing and dedicated support from start to incorporation.",
        "Monday to Saturday | 10:00 AM – 9:00 PM | Chennai, Tamil Nadu",
      ],
      links: [
        { label: "Explore Business Registration Services", href: "/business/registration" },
        { label: "Explore LLP Registration", href: "/business/registration/llp-registration" },
        { label: "Explore One Person Company Registration", href: "/business/registration/one-person-company-opc-registration" },
        { label: "Explore GST Registration", href: "/taxation/gst/gst-registration" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ],
};

export default function PrivateLimitedCompanyRegistrationPage() {
  return (
    <main className="w-full bg-white">
      <DynamicServiceInnerPages data={pageData} headerOffset={88} />
    </main>
  );
}
