import type { Metadata } from "next";
import DynamicServiceInnerPages, {
  type ServiceInnerPageData,
} from "../../../components/Dynamic-Hub-Page/DynamicServiceInnerPages";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Filing in Chennai | CA-Assisted ITR Filing" },
  description:
    "File your income tax return in Chennai with CA-assisted support. WhatsApp your documents for accurate ITR preparation and filing.",
  alternates: {
    canonical: "https://taxindiafirm.com/itr/income-tax-filing-in-chennai",
  },
  robots: { index: true, follow: true },
};

const whatsappHref =
  "https://wa.me/919962115050?text=Hello%20Tax%20India%20Firm%2C%20I%20need%20CA-assisted%20ITR%20filing%20in%20Chennai.";

const sections: ServiceInnerPageData["sections"] = [
  {
    id: "who-we-file-for",
    eyebrow: "Who we file for",
    title: "Income Tax Filing Support for Different Income Profiles",
    layout: "audience",
    paragraphs: [
      "Whether you earn a monthly salary, work independently or run a business, your income tax return should reflect your actual income and financial transactions.",
    ],
    items: [
      {
        title: "Salaried Employees",
        paragraphs: [
          "Assistance with Form 16, salary income, HRA, eligible deductions, TDS and other income details.",
        ],
      },
      {
        title: "Freelancers & Consultants",
        paragraphs: [
          "ITR support for professional income, multiple income sources, expenses and applicable tax provisions.",
        ],
      },
      {
        title: "Business Owners",
        paragraphs: [
          "Assistance with business income, financial information, tax calculations and applicable ITR requirements.",
        ],
      },
      {
        title: "Investors & Individuals with Multiple Income Sources",
        paragraphs: [
          "Support for income from investments, capital gains, rental property and other applicable income sources.",
        ],
      },
    ],
  },
  {
    id: "why-tax-india-firm",
    eyebrow: "Why Tax India Firm",
    title: "Your ITR Deserves Professional Attention",
    layout: "benefits",
    paragraphs: [
      "Filing a return is not just about entering figures into a form. Your income, deductions, tax credits and supporting information need to be reviewed carefully.",
    ],
    items: [
      {
        title: "Human CA-Assisted Support",
        paragraphs: [
          "Get professional assistance rather than relying entirely on automated filing software.",
        ],
      },
      {
        title: "Review of Income and Tax Documents",
        paragraphs: [
          "We review relevant documents, including Form 16, AIS and Form 26AS, to identify discrepancies that may need attention.",
        ],
      },
      {
        title: "Eligible Deductions and Tax Benefits",
        paragraphs: [
          "We examine applicable deductions and exemptions based on your income profile and the provisions relevant to your return.",
        ],
      },
      {
        title: "Old vs New Tax Regime",
        paragraphs: [
          "We help assess the applicable tax regimes based on your circumstances so you can make an informed choice.",
        ],
      },
      {
        title: "Appropriate ITR Form",
        paragraphs: [
          "Your income sources and financial activities determine which ITR form is applicable. We help identify the appropriate form.",
        ],
      },
      {
        title: "Support Beyond Filing",
        paragraphs: [
          "Get assistance with filing-related queries and guidance on the next steps after submission.",
        ],
      },
    ],
    links: [{ label: "Discuss My ITR on WhatsApp", href: whatsappHref }],
  },
  {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "File Your Income Tax Return in 3 Simple Steps",
    layout: "process",
    paragraphs: [],
    items: [
      {
        title: "Share Your Documents",
        paragraphs: [
          "Contact us on WhatsApp and share the relevant information and documents for your income profile.",
        ],
      },
      {
        title: "Review and Preparation",
        paragraphs: [
          "Our team reviews your details, checks the applicable tax information and prepares your income tax return for your approval.",
        ],
      },
      {
        title: "Filing and Acknowledgement",
        paragraphs: [
          "Once you approve the return and complete the required authorisation, we proceed with filing. You receive the filing acknowledgement for your records.",
        ],
      },
    ],
    links: [{ label: "WhatsApp My ITR Documents", href: whatsappHref }],
  },
  {
    id: "documents-required",
    eyebrow: "Documents required",
    title: "What Documents Do You Need for ITR Filing?",
    layout: "checklist",
    paragraphs: [
      "The documents required depend on your income sources and financial activities. Common documents include:",
    ],
    checklist: [
      "PAN and Aadhaar details",
      "Form 16, if salaried",
      "Form 26AS and AIS",
      "Bank account details and relevant statements",
      "Salary or professional income details",
      "Investment and eligible deduction proofs",
      "Housing loan interest certificate, where applicable",
      "Capital gains statements, if applicable",
      "Rental income details, where relevant",
    ],
    footer: [
      "Not sure which documents apply to you? Speak to our team before getting started.",
    ],
    links: [
      { label: "Check My ITR Documents on WhatsApp", href: whatsappHref },
    ],
  },
  {
    id: "itr-filing-support-in-chennai",
    eyebrow: "ITR filing support in Chennai",
    title: "Looking for an ITR Filing Service in Chennai?",
    layout: "locations",
    paragraphs: [
      "Tax India Firm is based in Chennai and assists individuals and businesses with income tax filing requirements.",
      "Whether you are a salaried employee working in Chennai, a self-employed professional or a business owner, you can reach out to discuss your ITR requirements.",
      "Get assistance with your income details, applicable deductions, tax calculations and return filing without having to navigate the process alone.",
    ],
  },
  {
    id: "frequently-asked-questions",
    eyebrow: "Frequently asked questions",
    title: "Questions About Income Tax Filing in Chennai",
    layout: "faq",
    paragraphs: [],
    items: [
      {
        title: "Which ITR form should I file?",
        paragraphs: [
          "The appropriate ITR form depends on your income sources, residential status, financial activities and other applicable conditions. Our team can review your details and help identify the relevant form.",
        ],
      },
      {
        title: "Can a salaried employee get professional help with ITR filing?",
        paragraphs: [
          "Yes. Salaried employees can get assistance with Form 16, tax calculations, eligible deductions, TDS details and return filing.",
        ],
      },
      {
        title: "What documents are required for income tax filing?",
        paragraphs: [
          "Common documents include PAN, Aadhaar, Form 16 where applicable, AIS, Form 26AS, bank details and relevant investment or income proofs. Requirements vary by taxpayer.",
        ],
      },
      {
        title: "Can you help with ITR filing for freelancers and consultants?",
        paragraphs: [
          "Yes. We assist freelancers and consultants with income tax return preparation based on their professional income, expenses and applicable tax requirements.",
        ],
      },
      {
        title: "Can I get help choosing between the old and new tax regimes?",
        paragraphs: [
          "Yes. We can help compare the applicable tax calculations based on the information you provide and explain the relevant considerations.",
        ],
      },
      {
        title: "How do I get started with Tax India Firm?",
        paragraphs: [
          "Simply contact us on WhatsApp, explain your income profile and share the relevant documents after receiving guidance from our team.",
        ],
      },
    ],
  },
  {
    id: "start-my-itr-filing",
    eyebrow: "Final CTA",
    title: "Get Your Income Tax Return Filed With Professional Support",
    layout: "cta",
    paragraphs: [
      "Don't leave your tax filing to guesswork. Speak to Tax India Firm and get assistance with preparing and filing your income tax return.",
      "Share your details. Our team will guide you through the next steps.",
    ],
    ctaLabel: "WhatsApp a CA Start My ITR Filing",
  },
];

const pageData: ServiceInnerPageData = {
  slug: "income-tax-filing-in-chennai",
  category: "Income Tax Filing",
  location: "Chennai",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Income Tax Returns", href: "/itr" },
    { label: "Income Tax Filing in Chennai" },
  ],
  hero: {
    eyebrow: "CA-Assisted ITR Filing",
    title: "Income Tax Filing in Chennai, Get Your ITR Filed by a CA",
    tagline: "File Your ITR in Chennai. Get It Right the First Time.",
    subtitle:
      "CA-assisted income tax return filing for salaried employees, freelancers and business owners in Chennai.",
    paragraphs: [
      "Your income tax return deserves more than a quick online submission.",
      "Get professional assistance with your ITR, from reviewing your income details and tax documents to identifying eligible deductions and completing your filing.",
      "Tax India Firm helps salaried employees, freelancers, consultants and business owners in Chennai file their income tax returns with professional support.",
      "Share your requirement and get guidance on the documents needed.",
    ],
    benefits: [
      "Since 2013",
      "Chennai-Based",
      "CA-Assisted Filing",
      "Appropriate ITR Form",
    ],
    ctaLabel: "WhatsApp a CA: File My ITR",
    image: {
      src: "/images/services/itr/income-tax-filing-in-chennai.webp",
      alt: "Blue Chennai tax filing desk with a personal income binder and calendar illustration",
    },
  },
  cta: {
    label: "WhatsApp a CA: File My ITR",
    href: whatsappHref,
  },
  nav: sections.map(({ id, title }) => ({ id, label: title })),
  sections,
};

export default function IncomeTaxFilingInChennaiPage() {
  return (
    <main className="w-full bg-white">
      <DynamicServiceInnerPages data={pageData} headerOffset={88} />
    </main>
  );
}
