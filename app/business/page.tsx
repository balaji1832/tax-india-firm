import type { Metadata } from "next";
import DynamicHub, {
  type DynamicHubData,
} from "../../components/Dynamic-Hub-Page/DynamicHub";

export const metadata: Metadata = {
  title: {
    absolute: "Business Registration, License & Compliance in Chennai",
  },
  description:
    "Company registration, licenses and compliance services for startups and SMEs in Chennai. Fast, affordable and 100% online across Tamil Nadu.",
  alternates: {
    canonical: "https://taxindiafirm.com/business",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const registration = "/business/registration";
const license = "/business/license";
const compliance = "/business/compliance";

const faqs = [
  {
    question: "Which business structure is best for a startup in Chennai?",
    answer: [
      "It depends on your goals. A Private Limited Company offers limited liability, credibility with investors and easier fundraising, best for tech startups and businesses planning to scale. An LLP is ideal for professional services firms (consultants, lawyers, architects) where flexibility matters. A Sole Proprietorship or OPC suits solo entrepreneurs starting small. Our CA team assesses your specific situation and recommends the right structure before you commit.",
    ],
  },
  {
    question: "How long does company registration take in Tamil Nadu?",
    answer: [
      "A Private Limited Company typically takes 10 to 15 working days from document submission to receiving the Certificate of Incorporation, subject to MCA processing times. An LLP takes 7 to 12 working days. MSME Udyam registration is issued immediately online. GST registration takes 3 to 7 working days. Timelines vary based on document readiness and government portal load.",
    ],
  },
  {
    question:
      "What documents are required to register a Private Limited Company in Chennai?",
    answer: [
      "You will need: PAN and Aadhaar of all directors, passport-size photographs, proof of address (bank statement or utility bill not older than 2 months), proof of registered office address (rent agreement + NOC from landlord or property ownership document) and a digital signature certificate (DSC) for each director. Our team prepares and verifies all documents before submission to MCA.",
    ],
  },
  {
    question: "Is GST registration mandatory for a new business in Tamil Nadu?",
    answer: [
      "GST registration is mandatory if your annual turnover exceeds Rs.40 lakh (goods) or Rs.20 lakh (services). It is also mandatory if you sell on e-commerce platforms (regardless of turnover), supply goods interstate, or are required to deduct TDS. Even below the threshold, voluntary GST registration can be beneficial, it makes your business credible to corporate buyers and allows you to claim input tax credit.",
    ],
  },
  {
    question: "Can Tax India Firm handle registration for businesses outside Chennai?",
    answer: [
      "Yes. We handle company registration and compliance for businesses across Tamil Nadu, including Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Erode and all other districts. All our services are 100% online. You share documents digitally and we handle all government portal filings remotely.",
    ],
  },
] satisfies DynamicHubData["faq"]["items"];

const businessHubData: DynamicHubData = {
  pageKey: "business",
  chapterBrand: "BUSINESS",
  logoSrc: "/icons/taxindia-logo.png",
  headerOffset: 78,

  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Business Services" },
  ],

  contact: {
    fallbackHref: "/contact-us",
    primaryMessage:
      "Hello Tax India Firm, I would like to discuss my business registration requirement.",
    checklistMessagePrefix: "I need help with these business services:",
  },

  navigation: {
    overview: "Overview",
    services: "Services",
    lifecycle: "Business journey",
    requirements: "What you need",
    faq: "FAQs",
  },

  hero: {
    kicker: "Business Services in Chennai & Tamil Nadu",
    edition: "Your Business. Set Up Right. From Day One.",
    titleLead: "Business Registration, License &",
    titleHighlight: "Compliance Services in Chennai",
    paragraphs: [
      "From choosing the right business structure to staying compliant every year — Tax India Firm handles every stage of your business journey across Tamil Nadu.",
      "Serving startups, SMEs and established businesses in Chennai since 2013.",
    ],
    primaryCta: "Talk to a CA About Your Business Registration",
    secondaryCta: "Explore business services",
    keyServicesLabel: "Business services",
    serviceLinks: [
      {
        name: "Business Registration",
        shortLabel: "Registration",
        href: registration,
        icon: "building",
      },
      {
        name: "Business Licenses",
        shortLabel: "Licenses",
        href: license,
        icon: "file-check",
      },
      {
        name: "Company Compliance",
        shortLabel: "Compliance",
        href: compliance,
        icon: "shield",
      },
    ],
    deskCaption:
      "Company registration, licenses and compliance services for startups and SMEs in Chennai.",
    documentLabel: "BUSINESS SERVICES",
    documentFoot: "Chennai • Tamil Nadu",
    chooseLabel: "Choose a business service",
    locationNote: "Chennai • Tamil Nadu",
  },

  overview: {
    kicker: "What you need to know",
    title: "What You Need to Know on Business Registration",
    markerNumber: "01",
    markerText: "Registration\nLicenses\nCompliance",
    image: {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
      alt: "Business registration and compliance professionals in Chennai",
    },
    imageChip: "Serving Tamil Nadu since 2013",
    imageStatement: "Your Business.\nSet Up Right.",
    paragraphs: [
      "Setting up and running a business in India involves a series of legal steps, choosing the right structure, obtaining the correct registrations, staying compliant with MCA, GST and labour regulations, and making amendments as your business grows. Each decision has tax and legal consequences that stay with your company for years.",
      "Tax India Firm's team of Chartered Accountants, Company Secretaries and Corporate Lawyers has been handling business registration and compliance for startups and SMEs in Chennai and across Tamil Nadu since 2013. We are ISO 9001:2015 certified, handle 300+ compliance services and work exclusively through government-recognised filing channels, MCA, GST portal, EPFO, IP India and more.",
    ],
    noteLabel: "EXPERT GUIDANCE",
    noteText:
      "Each business decision has tax and legal consequences that stay with your company for years.",
  },

  services: {
    kicker: "Three categories",
    title: "Three Categories. Every Business Need Covered.",
    intro: [
      "Company registration, licenses and compliance services for startups and SMEs in Chennai and across Tamil Nadu.",
    ],
    categories: [
      {
        title: "Register Your Company in Chennai",
        icon: "building",
        paragraphs: [
          "Choose the right legal structure and get your business registered correctly, Private Limited, LLP, OPC, Partnership, Trust, Society and more. All MCA filings handled end to end.",
        ],
        listLabel: "Services included:",
        items: [
          {
            name: "Private Limited Company Registration",
            href: `${registration}/private-limited-company-registration`,
          },
          { name: "LLP Registration", href: `${registration}/llp-registration` },
          {
            name: "One Person Company (OPC) Registration",
            href: `${registration}/one-person-company-opc-registration`,
          },
          {
            name: "Partnership Firm Registration",
            href: `${registration}/partnership-firm-registration`,
          },
          {
            name: "Sole Proprietorship Registration",
            href: `${registration}/sole-proprietorship-registration`,
          },
          {
            name: "Trust & Society Registration",
            href: `${registration}/trust-registration`,
          },
          {
            name: "Section 8 (Non-Profit) Company Registration",
            href: `${registration}/section-8-company-registration`,
          },
          {
            name: "Nidhi Company Registration",
            href: `${registration}/nidhi-company-registration`,
          },
          {
            name: "Change of Constitution & LLP Agreement Changes",
            href: `${registration}/changes-in-llp-agreement`,
          },
        ],
        hubLabel: "Business Registration",
        hubHref: registration,
      },
      {
        title: "Get the Licenses Your Business Needs in Tamil Nadu",
        icon: "file-check",
        paragraphs: [
          "Operating without the right licenses is a compliance risk. We handle every license your business needs, from FSSAI for food businesses to DSC for digital filings.",
        ],
        listLabel: "Services included:",
        items: [
          {
            name: "Digital Signature Certificate (DSC)",
            href: `${license}/digital-signature-certificate-dsc`,
          },
          {
            name: "MSME Udyam Registration",
            href: `${license}/msme-udyam-registration`,
          },
          {
            name: "FSSAI Food License Registration",
            href: `${license}/fssai-registration`,
          },
          {
            name: "Import Export Code (IEC) Registration",
            href: `${license}/import-export-code-registration`,
          },
          {
            name: "ESI & PF Registration",
            href: `${license}/esi-pf-registration`,
          },
          { name: "ISO Certification", href: `${license}/iso-certification` },
          { name: "APEDA Registration", href: `${license}/apeda-registration` },
          {
            name: "Labour License Registration",
            href: `${license}/labour-license-registration`,
          },
          {
            name: "Shop & Establishment Registration",
            href: `${license}/shop-establishment-registration`,
          },
          {
            name: "Professional Tax Registration",
            href: `${license}/professional-tax-registration`,
          },
        ],
        hubLabel: "Business Licenses",
        hubHref: license,
      },
      {
        title: "Keep Your Company Compliant With MCA",
        icon: "shield",
        paragraphs: [
          "Post-incorporation compliance is not optional. ROC filings, director changes, capital amendments and more, we track every deadline and file before it.",
        ],
        listLabel: "Services included:",
        items: [
          {
            name: "Annual ROC Filing (AOC-4, MGT-7)",
            href: `${compliance}/company-roc-filing`,
          },
          {
            name: "Director eKYC (DIR-3 KYC)",
            href: `${compliance}/annual-ekyc-for-directors`,
          },
          {
            name: "Add or Remove Designated Partners in LLP",
            href: `${compliance}/add-remove-designated-partners-llp`,
          },
          {
            name: "Change in Authorised Capital",
            href: `${compliance}/change-in-authorized-capital`,
          },
          {
            name: "Change in Registered Office Address",
            href: `${compliance}/change-in-registered-office-address`,
          },
          {
            name: "Change in Business Objective (MOA Amendment)",
            href: `${compliance}/change-in-business-objective`,
          },
          {
            name: "Removal of Directors",
            href: `${compliance}/removal-of-directors`,
          },
          {
            name: "Auditor Appointment (ADT-1)",
            href: `${compliance}/auditor-appointment`,
          },
          {
            name: "Closure / Winding Up of LLP",
            href: `${compliance}/closure-of-llp`,
          },
        ],
        hubLabel: "Company Compliance",
        hubHref: compliance,
      },
    ],
    footerText: "Choose the category that matches your current business need.",
  },

  lifecycle: {
    kicker: "Every stage covered",
    title: "Every Stage of Your Business Journey",
    intro: [
      "From choosing the right business structure to staying compliant every year — Tax India Firm handles every stage of your business journey across Tamil Nadu.",
    ],
    chapterLabel: "STAGE",
    stages: [
      {
        title: "Choose the Right Business Structure",
        text: "A Private Limited Company offers limited liability, credibility with investors and easier fundraising. An LLP is ideal for professional services firms where flexibility matters. A Sole Proprietorship or OPC suits solo entrepreneurs starting small.",
        icon: "layers",
      },
      {
        title: "Complete Your Business Registration",
        text: "Choose the right legal structure and get your business registered correctly. All MCA filings are handled end to end.",
        icon: "building",
      },
      {
        title: "Obtain the Correct Business Licenses",
        text: "Operating without the right licenses is a compliance risk. We handle every license your business needs, from FSSAI for food businesses to DSC for digital filings.",
        icon: "file-check",
      },
      {
        title: "Stay Compliant Every Year",
        text: "Registration is the beginning, not the end. We track your annual compliance calendar — ROC filings, GST deadlines, director KYC, and file on time, every time.",
        icon: "shield",
      },
    ],
  },

  requirements: {
    kicker: "Business requirements",
    title: "Popular Business Services in Chennai",
    intro: [
      "Select the registration, license or compliance service your business needs.",
    ],
    hint: "Select a service to learn more",
    items: [
      {
        title: "Private Limited Company Registration",
        icon: "building",
        blocks: [
          "A Private Limited Company offers limited liability, credibility with investors and easier fundraising, best for tech startups and businesses planning to scale.",
        ],
      },
      {
        title: "LLP Registration in Chennai",
        icon: "layers",
        blocks: [
          "An LLP is ideal for professional services firms (consultants, lawyers, architects) where flexibility matters.",
        ],
      },
      {
        title: "FSSAI Food License Registration",
        icon: "file-check",
        blocks: [
          "We handle every license your business needs, from FSSAI for food businesses to DSC for digital filings.",
        ],
      },
      {
        title: "MSME Udyam Registration",
        icon: "rocket",
        blocks: ["MSME Udyam registration is issued immediately online."],
      },
      {
        title: "GST Registration in Chennai",
        icon: "receipt",
        blocks: [
          "GST registration takes 3 to 7 working days. Timelines vary based on document readiness and government portal load.",
        ],
      },
      {
        title: "ROC Filing Services Chennai",
        icon: "clipboard",
        blocks: [
          "ROC filings, director changes, capital amendments and more, we track every deadline and file before it.",
        ],
      },
      {
        title: "Trademark Registration in Chennai",
        icon: "fingerprint",
        blocks: [
          "Tax India Firm works through government-recognised filing channels, including IP India.",
        ],
      },
      {
        title: "Income Tax Return Filing Chennai",
        icon: "wallet",
        blocks: [
          "Tax India Firm handles business registration and compliance for startups and SMEs in Chennai and across Tamil Nadu.",
        ],
      },
    ],
  },

  connected: {
    kicker: "One business framework",
    title: "Registration, Licenses and Compliance Work Together",
    intro: [
      "Setting up and running a business in India involves a series of legal steps.",
    ],
    centerEyebrow: "BUSINESS JOURNEY",
    centerTitle: "Your business, set up right",
    nodes: [
      {
        label: "Registration",
        description:
          "Choose the right legal structure and get your business registered correctly.",
        icon: "building",
      },
      {
        label: "Licenses",
        description:
          "Obtain the correct registrations and licenses your business needs.",
        icon: "file-check",
      },
      {
        label: "Compliance",
        description:
          "Stay compliant with MCA, GST and labour regulations as your business grows.",
        icon: "shield",
      },
    ],
    bottomLead: "Your Business. Set Up Right. From Day One.",
    bottomBlocks: [
      "Each decision has tax and legal consequences that stay with your company for years.",
      "Tax India Firm handles every stage of your business journey across Tamil Nadu.",
    ],
  },

  growth: {
    kicker: "Free consultation",
    title: "Not Sure Which Registration or License Your Business Needs?",
    introBlocks: [
      "Our CA team will assess your requirement and recommend the right structure free of charge.",
    ],
    closingBlocks: [
      "Serving startups, SMEs and established businesses in Chennai since 2013.",
    ],
    checklistEyebrow: "POPULAR BUSINESS SERVICES",
    checklistTitle: "Explore key business services in Chennai",
    checklistItems: [
      "Private Limited Company Registration",
      "LLP Registration in Chennai",
      "FSSAI Food License Registration",
      "MSME Udyam Registration",
      "GST Registration in Chennai",
      "ROC Filing Services Chennai",
      "Trademark Registration in Chennai",
      "Income Tax Return Filing Chennai",
    ],
    emptyHint: "",
    selectedHint: "",
    ctaLabel: "Get a Free Business Registration Consultation",
  },

  why: {
    kicker: "Why Tax India Firm",
    title: "Business Registration Is a Legal Decision. It Deserves a Legal Expert.",
    lede:
      "Many businesses in Chennai choose a filing agent over a CA firm to save money on registration, and spend far more fixing errors later. The difference is expertise and accountability.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
      alt: "Tax India Firm professionals discussing business registration",
    },
    badge: "Professional business support since 2013",
    proofs: [
      { label: "CA & CS professionals" },
      { label: "Official filing channels" },
      { label: "ISO 9001:2015 certified" },
    ],
    principles: [
      {
        title: "Registered Professionals, Not Agents",
        text: "Every business registration is handled by a licensed Chartered Accountant or Company Secretary, not a filing agent or junior executive.",
        icon: "fingerprint",
      },
      {
        title: "MCA-Compliant Filing Only",
        text: "We file exclusively through official government channels, MCA21, GSTN, EPFO, IP India. No shortcuts, no third-party workarounds.",
        icon: "shield",
      },
      {
        title: "ISO 9001:2015 Certified Process",
        text: "Our documentation, filing and client communication processes are certified to international quality standards.",
        icon: "file-check",
      },
      {
        title: "Post-Registration Compliance Support",
        text: "Registration is the beginning, not the end. We track your annual compliance calendar — ROC filings, GST deadlines, director KYC, and file on time, every time.",
        icon: "clipboard",
      },
    ],
    detailBlocks: [
      "Tax India Firm's team of Chartered Accountants, Company Secretaries and Corporate Lawyers has been handling business registration and compliance for startups and SMEs in Chennai and across Tamil Nadu since 2013.",
      "We are ISO 9001:2015 certified, handle 300+ compliance services and work exclusively through government-recognised filing channels, MCA, GST portal, EPFO, IP India and more.",
    ],
    bottomLabel: "Expertise and accountability",
    ctaLabel: "Talk to a CA About Your Business Registration",
  },

  consult: {
    kicker: "Start today",
    title: "Start Your Business Registration in Chennai Today.",
    leftBlocks: [
      "Speak to a Chartered Accountant, free, no commitment. We'll tell you exactly what you need before you spend a rupee.",
    ],
    rightBlocks: [
      "Monday to Saturday | 10:00 AM — 9:00 PM | Chennai, Tamil Nadu",
    ],
    lead: "**Your Business. Set Up Right. From Day One.**",
    ctaLabel: "Register Your Business With a CA",
  },

  faq: {
    kicker: "Frequently Asked Questions",
    title: "Business Registration Questions Answered by Our CA Team.",
    helpText: "Need help choosing the right business structure?",
    helpCta: "Talk to our CA team",
    items: faqs,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://taxindiafirm.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Business Services",
      item: "https://taxindiafirm.com/business",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.join(" "),
    },
  })),
};

export default function BusinessHubPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <DynamicHub data={businessHubData} />
    </main>
  );
}
