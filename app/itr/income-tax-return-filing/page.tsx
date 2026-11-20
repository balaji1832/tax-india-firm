import type { Metadata } from "next";
import DynamicServiceInnerPages, {
  type ServiceInnerPageData,
} from "../../../components/Dynamic-Hub-Page/DynamicServiceInnerPages";

export const metadata: Metadata = {
  title: { absolute: "Income Tax Return Filing Online in India | ITR Filing Help" },
  description:
    "Get professional help preparing and filing your income tax return online. Review income, AIS, deductions, the applicable ITR form and e-verification steps.",
  alternates: {
    canonical: "https://taxindiafirm.com/itr/income-tax-return-filing",
  },
  robots: { index: true, follow: true },
};

const whatsappHref =
  "https://wa.me/919962115050?text=Hello%20Tax%20India%20Firm%2C%20I%20need%20help%20with%20income%20tax%20return%20filing.";

const sections: ServiceInnerPageData["sections"] = [
  {
    id: "understanding-itr-filing",
    eyebrow: "Understanding ITR filing",
    title: "What Does Income Tax Return Filing Involve?",
    layout: "overview",
    paragraphs: [
      "An income tax return reports your income and applicable tax details for the relevant financial year to the Income Tax Department. The information you need to report depends on your income sources, residential status and other circumstances.",
      "A sound filing process starts with your own records. Salary, professional income, business income, interest, rent, capital gains and other relevant transactions should be reviewed as applicable. Pre-filled details and the Annual Information Statement (AIS) are useful checks, but they may not show every transaction that belongs in your return.",
      "The applicable ITR form and tax regime should be considered before submission. After the return is filed, it must also be verified through an available method and the acknowledgement should be kept for your records.",
    ],
    links: [
      {
        label: "See Income Tax Department form guidance",
        href: "https://www.incometax.gov.in/iec/foportal/help/identification-and-generation-of-applicable-itr-individual",
      },
    ],
  },
  {
    id: "who-we-help",
    eyebrow: "Who we help",
    title: "ITR Filing Support for Different Income Profiles",
    layout: "audience",
    paragraphs: [
      "Your filing requirements depend on how you earn and invest. We review your situation before preparing the return.",
    ],
    items: [
      {
        title: "Salaried Individuals",
        paragraphs: [
          "Support with salary details, Form 16, interest income, eligible deductions and tax deducted at source.",
        ],
      },
      {
        title: "Freelancers & Consultants",
        paragraphs: [
          "Assistance with professional receipts, relevant expenses, multiple income sources and the return form applicable to your facts.",
        ],
      },
      {
        title: "Business Owners",
        paragraphs: [
          "Review of business income information, financial records, tax payments and supporting details needed for filing.",
        ],
      },
      {
        title: "Investors & Property Owners",
        paragraphs: [
          "Help organising capital gains, interest, dividends, rental income and other reportable information where applicable.",
        ],
      },
    ],
    links: [
      {
        label: "Looking for Chennai-based filing help?",
        href: "/itr/income-tax-filing-in-chennai",
      },
    ],
  },
  {
    id: "what-our-service-covers",
    eyebrow: "Our filing support",
    title: "What Our Income Tax Return Filing Service Covers",
    layout: "benefits",
    paragraphs: [
      "We work through the return with you so that the information submitted reflects the records and circumstances you provide.",
    ],
    items: [
      {
        title: "Income and Document Review",
        paragraphs: [
          "We identify the income sources and supporting records relevant to your return before preparing it.",
        ],
      },
      {
        title: "AIS and Form 26AS Checks",
        paragraphs: [
          "We compare available tax and transaction information with your records and discuss differences that may need attention.",
        ],
      },
      {
        title: "ITR Form Selection",
        paragraphs: [
          "We help identify the form applicable to your income profile and other relevant filing conditions.",
        ],
      },
      {
        title: "Tax Regime and Deduction Review",
        paragraphs: [
          "We review the available regime choices and deductions that may apply to the information you provide.",
        ],
      },
      {
        title: "Return Preparation and Filing",
        paragraphs: [
          "We prepare the return, share the details for your review and proceed with filing after your approval.",
        ],
      },
      {
        title: "Verification Guidance",
        paragraphs: [
          "We explain the available verification steps and help you keep the filing acknowledgement for your records.",
        ],
      },
    ],
    links: [{ label: "Discuss My ITR on WhatsApp", href: whatsappHref }],
  },
  {
    id: "documents-to-prepare",
    eyebrow: "Documents to prepare",
    title: "What Do You Need Before Filing an ITR?",
    layout: "checklist",
    paragraphs: [
      "The exact documents depend on your income and transactions. These are common starting points:",
    ],
    checklist: [
      "PAN and Aadhaar details",
      "Current contact and bank account details",
      "Form 16 or salary statements, if salaried",
      "AIS and Form 26AS",
      "Bank statements and interest certificates",
      "Professional or business income and expense records, where applicable",
      "Investment, capital gains and dividend statements, where applicable",
      "Rental income and housing loan interest details, where applicable",
      "Proof of eligible deductions or exemptions you wish to claim",
      "Details of advance tax or self-assessment tax paid, where applicable",
    ],
    footer: [
      "Your AIS can be a helpful reference, but you should also check your own records for income or transactions that may not appear there.",
    ],
    links: [
      {
        label: "Income Tax Department AIS guidance",
        href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/ais%20-%20annual%20information%20statement-faqs",
      },
      { label: "Ask Which Documents You Need", href: whatsappHref },
    ],
  },
  {
    id: "filing-process",
    eyebrow: "How it works",
    title: "Our Income Tax Return Filing Process",
    layout: "process",
    paragraphs: [
      "The steps are adjusted to your income profile and the information available for the relevant year.",
    ],
    items: [
      {
        title: "Share Your Income Profile",
        paragraphs: [
          "Tell us about your salary, work, business, investments, property and any other relevant income sources.",
        ],
      },
      {
        title: "Gather and Review Records",
        paragraphs: [
          "We review the documents you provide and compare relevant details with AIS, Form 26AS and other available tax records.",
        ],
      },
      {
        title: "Choose the Applicable Return",
        paragraphs: [
          "We assess the ITR form, tax regime and reporting details that fit your circumstances.",
        ],
      },
      {
        title: "Prepare and Approve",
        paragraphs: [
          "We prepare the return for your review, discuss any outstanding questions and seek your approval before submission.",
        ],
      },
      {
        title: "File and Verify",
        paragraphs: [
          "After filing, we share the acknowledgement and guide you through the applicable verification method.",
        ],
      },
    ],
    links: [{ label: "Start My ITR Filing", href: whatsappHref }],
  },
  {
    id: "after-filing",
    eyebrow: "After submission",
    title: "What Happens After Your Return Is Filed?",
    layout: "aftercare",
    paragraphs: [
      "Submitting the return is followed by verification. The Income Tax Department provides electronic verification methods and an ITR-V route, subject to its current requirements and time limits.",
      "Keep a copy of the filed return and acknowledgement. You can check the return status through the Income Tax Department's e-Filing portal.",
      "If you notice an error after filing or receive a query, contact us with the acknowledgement and relevant records so the next step can be assessed for your case.",
    ],
    links: [
      {
        label: "Official e-Verification guide",
        href: "https://www.incometax.gov.in/iec/foportal/help/how-to-e-verify-your-e-filing-return",
      },
    ],
  },
  {
    id: "frequently-asked-questions",
    eyebrow: "Frequently asked questions",
    title: "Income Tax Return Filing FAQs",
    layout: "faq",
    paragraphs: [],
    items: [
      {
        title: "Which ITR form should I use?",
        paragraphs: [
          "The form depends on your income sources, residential status and other filing conditions. We review these details before recommending a form.",
        ],
      },
      {
        title: "Is the information in AIS enough to file my return?",
        paragraphs: [
          "No. AIS shows information available with the Income Tax Department, but it may not include every relevant transaction. Compare it with your own records and report complete information.",
        ],
      },
      {
        title: "Can you help if I have both salary and freelance income?",
        paragraphs: [
          "Yes. Share details of both income sources and the related records so the return can be prepared for your full income profile.",
        ],
      },
      {
        title: "Can you help compare the old and new tax regimes?",
        paragraphs: [
          "Yes. We can review the information and deductions you provide and explain how the available choices apply to your circumstances.",
        ],
      },
      {
        title: "Do I need to verify my return after filing?",
        paragraphs: [
          "Yes. A filed return must be verified using an available method within the applicable time limit. We can guide you through the next step after submission.",
        ],
      },
      {
        title: "What if I find a mistake after filing?",
        paragraphs: [
          "Share the filed return and the correct information with our team. We can review the available correction route for your circumstances and the applicable rules.",
        ],
      },
      {
        title: "Can I get help from your Chennai team?",
        paragraphs: [
          "Yes. Visit our Income Tax Filing in Chennai page or contact us directly to discuss your requirements with the team.",
        ],
      },
    ],
  },
  {
    id: "start-filing",
    eyebrow: "Get started",
    title: "Prepare and File Your Income Tax Return With Support",
    layout: "cta",
    paragraphs: [
      "Tell us about your income sources and the records you already have. We will help you understand what is needed to prepare, review and file your return.",
    ],
    ctaLabel: "Discuss My ITR on WhatsApp",
  },
];

const pageData: ServiceInnerPageData = {
  slug: "income-tax-return-filing",
  category: "Income Tax Return Filing",
  location: "Chennai, India",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Income Tax Returns", href: "/itr" },
    { label: "Income Tax Return Filing" },
  ],
  hero: {
    eyebrow: "Professional ITR Filing Help",
    title: "Income Tax Return Filing Online in India",
    tagline: "Your income. Your records. A carefully prepared return.",
    subtitle:
      "Get help reviewing your income, choosing the applicable ITR form and completing your online tax return.",
    paragraphs: [
      "Filing an income tax return involves more than entering figures online. Your income sources, tax credits, deductions and supporting records need to be considered together.",
      "Tax India Firm helps salaried individuals, freelancers, consultants and business owners prepare and file their ITR with professional guidance from document review through verification.",
    ],
    benefits: [
      "Income and document review",
      "AIS and Form 26AS checks",
      "Applicable ITR form guidance",
      "Filing and verification support",
    ],
    ctaLabel: "Get Help Filing My ITR",
    image: {
      src: "/images/services/itr/income-tax-return-filing.webp",
      alt: "Completed personal income folder with a compact calculator and blank return sheet illustration",
    },
  },
  cta: { label: "Get Help Filing My ITR", href: whatsappHref },
  nav: sections.map(({ id, title }) => ({ id, label: title })),
  sections,
};

export default function IncomeTaxReturnFilingPage() {
  return (
    <main className="w-full bg-white">
      <DynamicServiceInnerPages data={pageData} headerOffset={88} />
    </main>
  );
}
