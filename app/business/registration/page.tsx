import type { Metadata } from "next";
import DynamicService, {
  type DynamicServiceData,
} from "../../../components/Dynamic-Hub-Page/dynamicservice";

export const metadata: Metadata = {
  title: {
    absolute: "Business Registration Services in Chennai | Pvt Ltd & LLP",
  },
  description:
    "Register your company in Chennai with expert help. Pvt Ltd, LLP, OPC, partnership and more, fast, affordable, 100% online across Tamil Nadu.",
  alternates: {
    canonical: "https://taxindiafirm.com/business/registration",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const registrationBase = "/business/registration";

const pageData: DynamicServiceData = {
  hero: {
    title:
      "Business Registration Services in Chennai, Pvt Ltd, LLP, OPC & More",
    tagline: "Register your business the right way.",
    subtitle:
      "Choose the right business structure and get registered in days, not weeks.",
    paragraphs: [
      "Starting a business begins with choosing the right legal structure. Whether you're launching a startup, professional practice or family-owned enterprise, Tax India Firm helps you register correctly, compliantly and efficiently across Tamil Nadu.",
      "Since 2013, our Chartered Accountants, Company Secretaries and Corporate Lawyers have supported entrepreneurs through every stage of business registration.",
    ],
    supportTitle: "Business Registration Services in Chennai:",
    support: [
      "Private Limited Company Registration",
      "LLP Registration",
      "One Person Company Registration",
      "Partnership Firm Registration",
    ],
  },

  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Business Services", href: "/business" },
    { label: "Business Registration" },
  ],

  cta: {
    label: "Register Your Business with a CA",
    href: "/contact-us",
  },

  images: {
    hero:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
    heroAlt: "Business registration services Chennai Tamil Nadu",
    office:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    officeAlt: "Business registration services Chennai Tamil Nadu",
  },

  logoSrc: "/icons/taxindia-logo.png",
  location: "Chennai • Tamil Nadu",

  sections: [
    {
      id: "before-registration",
      eyebrow: "Before you register",
      layout: "intro",
      title: "What You Need to Know Before Registering a Business in India",
      paragraphs: [
        "Choosing a business structure is one of the most important decisions an entrepreneur makes. The structure you select affects taxation, compliance requirements, ownership flexibility, fundraising opportunities and legal liability. A business that starts with the wrong structure often faces unnecessary costs and procedural complications later.",
        "India offers multiple registration options including Private Limited Companies, LLPs, OPCs, Partnership Firms, Sole Proprietorships, Trusts and Section 8 Companies. Each serves a different purpose and comes with its own legal and regulatory obligations.",
        "Tax India Firm has been helping startups, SMEs and business owners across Chennai and Tamil Nadu navigate the registration process since 2013. Our team works directly with MCA-recognised filing systems and government portals to ensure every registration is completed accurately and in compliance with applicable laws.",
      ],
    },

    {
      id: "registration-services",
      eyebrow: "Business registration services",
      layout: "catalog",
      title: "Choose the Right Business Structure for Your Goals",
      paragraphs: [],
      items: [
        {
          title: "Private Limited Company Registration",
          paragraphs: [
            "The preferred structure for startups, growing businesses and companies seeking investment. Offers limited liability, separate legal identity and strong credibility with banks and investors.",
          ],
          link: {
            label: "Private Limited Company Registration",
            href: `${registrationBase}/private-limited-company-registration`,
          },
        },
        {
          title: "LLP Registration",
          paragraphs: [
            "Ideal for consultants, professionals and service businesses that need flexibility with reduced compliance obligations compared to a company.",
          ],
          link: {
            label: "LLP Registration in Chennai",
            href: `${registrationBase}/llp-registration`,
          },
        },
        {
          title: "One Person Company (OPC) Registration",
          paragraphs: [
            "Designed for solo entrepreneurs who want the benefits of a corporate structure while retaining full ownership and control.",
          ],
          link: {
            label: "One Person Company Registration",
            href: `${registrationBase}/one-person-company-opc-registration`,
          },
        },
        {
          title: "Partnership Firm Registration",
          paragraphs: [
            "Suitable for businesses operated by two or more partners under a shared ownership arrangement.",
          ],
          link: {
            label: "Partnership Firm Registration",
            href: `${registrationBase}/partnership-firm-registration`,
          },
        },
        {
          title: "Sole Proprietorship Registration",
          paragraphs: [
            "A practical choice for freelancers, traders and small business owners seeking a simple business setup.",
          ],
          link: {
            label: "Sole Proprietorship Registration",
            href: `${registrationBase}/sole-proprietorship-registration`,
          },
        },
        {
          title: "Trust Registration",
          paragraphs: [
            "For charitable, educational, religious and private trusts that need a structured legal framework and professionally drafted trust deed.",
          ],
          link: {
            label: "Trust Registration",
            href: `${registrationBase}/trust-registration`,
          },
        },
        {
          title: "Society Registration",
          paragraphs: [
            "For NGOs, charitable organisations and member-based associations formed for social, educational, cultural or public-benefit objectives.",
          ],
          link: {
            label: "Society Registration",
            href: `${registrationBase}/society-registration`,
          },
        },
        {
          title: "Section 8 Company Registration",
          paragraphs: [
            "For organisations established to promote charitable, educational, social or environmental objectives without a profit motive.",
          ],
          link: {
            label: "Section 8 Company Registration",
            href: `${registrationBase}/section-8-company-registration`,
          },
        },
        {
          title: "Nidhi Company Registration",
          paragraphs: [
            "For member-based savings and lending organisations governed under the Companies Act.",
          ],
          link: {
            label: "Nidhi Company Registration",
            href: `${registrationBase}/nidhi-company-registration`,
          },
        },
        {
          title: "Changes in LLP Agreement",
          paragraphs: [
            "For LLPs updating partners, profit-sharing ratios, capital contributions, business activities or other agreement terms through compliant MCA filings.",
          ],
          link: {
            label: "Changes in LLP Agreement",
            href: `${registrationBase}/changes-in-llp-agreement`,
          },
        },
      ],
    },

    {
      id: "why-tax-india-firm",
      eyebrow: "Why Tax India Firm",
      layout: "benefits",
      title: "Why Businesses Trust Tax India Firm for Registration Services",
      paragraphs: [],
      items: [
        {
          title: "Registered Professionals",
          paragraphs: [
            "Every registration is handled by Chartered Accountants, Company Secretaries and Corporate Lawyers with experience in company law and regulatory compliance.",
          ],
        },
        {
          title: "Structure Selection Guidance",
          paragraphs: [
            "We help entrepreneurs choose the most suitable structure before registration begins, reducing future tax and compliance complications.",
          ],
        },
        {
          title: "Government-Compliant Filings",
          paragraphs: [
            "All applications are prepared and submitted through recognised government systems including MCA portals and statutory registration platforms.",
          ],
        },
        {
          title: "Ongoing Compliance Support",
          paragraphs: [
            "Our relationship does not end after registration. We continue supporting businesses with GST, ROC, tax filing and annual compliance requirements.",
          ],
        },
      ],
    },

    {
      id: "free-consultation",
      eyebrow: "Choose the right structure",
      layout: "cta",
      title: "Not Sure Which Structure Is Right for Your Business?",
      ctaLabel: "Get a Free Business Registration Consultation",
      paragraphs: [
        "Speak with our CA team before you register. We will explain the differences, compliance requirements and costs involved.",
      ],
    },

    {
      id: "faq",
      eyebrow: "Your questions answered",
      layout: "faq",
      title: "Frequently Asked Questions",
      paragraphs: [],
      items: [
        {
          title: "Which business structure is best for a startup?",
          paragraphs: [
            "Most startups choose a Private Limited Company because it offers limited liability, easier fundraising and greater credibility. The right choice depends on your goals, ownership structure and future plans.",
          ],
        },
        {
          title: "How long does business registration take in Chennai?",
          paragraphs: [
            "Depending on the structure selected, registration can take anywhere between a few days and a few weeks. Government processing timelines and document readiness also influence turnaround time.",
          ],
        },
        {
          title: "Can I register my business online?",
          paragraphs: [
            "Yes. Most registrations can be completed online. Documents can be shared digitally while our team manages the filing process on your behalf.",
          ],
        },
        {
          title: "Is GST registration included with company registration?",
          paragraphs: [
            "GST registration is a separate process. However, many businesses choose to complete both registrations together during setup.",
          ],
        },
        {
          title: "Do I need a CA to register a business?",
          paragraphs: [
            "While some registrations can technically be completed independently, professional guidance helps avoid errors, delays and future compliance issues.",
          ],
        },
      ],
    },

    {
      id: "start-registration",
      eyebrow: "Start with confidence",
      layout: "cta",
      title: "Start Your Business Registration with Confidence.",
      ctaLabel: "Talk to a CA About Business Registration",
      paragraphs: [
        "Speak to a Chartered Accountant today and get clear guidance on the right structure for your business before you begin.",
        "Monday to Saturday | 10:00 AM — 9:00 PM | Chennai, Tamil Nadu",
      ],
    },
  ],
};

export default function BusinessRegistrationPage() {
  return (
    <main className="w-full bg-white">
      <DynamicService data={pageData} headerOffset={88} />
    </main>
  );
}
