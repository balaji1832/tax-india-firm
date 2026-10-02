import type { Metadata } from "next";
import DynamicHub, {
  type DynamicHubData,
} from "../../components/Dynamic-Hub-Page/DynamicHub";

export const metadata: Metadata = {
  title: {
    absolute: "Taxation Services in Chennai | GST, ITR, TDS & More",
  },
  description:
    "GST registration, return filing, income tax, TDS, capital gains and tax planning for individuals and businesses across Tamil Nadu.",
  alternates: {
    canonical: "https://taxindiafirm.com/taxation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const taxationHubData: DynamicHubData = {
  pageKey: "taxation",
  chapterBrand: "TAXATION",
  logoSrc: "/icons/taxindia-logo.png",
  headerOffset: 78,

  breadcrumb: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Taxation",
    },
  ],

  contact: {
    whatsappNumber: "919962674040",
    fallbackHref: "/contact-us",
    primaryMessage:
      "Hello Tax India Firm, I would like help with taxation services.",
    checklistMessagePrefix:
      "Hello Tax India Firm, I would like to discuss these taxation requirements:",
  },

  navigation: {
    overview: "Overview",
    services: "Services",
    lifecycle: "Lifecycle",
    requirements: "Your requirement",
    faq: "FAQs",
  },

  hero: {
    kicker: "Tax India Firm · Chennai · Tamil Nadu",
    edition: "Professional taxation support",

    titleLead: "Taxation Services in Chennai:",
    titleHighlight: "GST, Income Tax, TDS & Compliance",

    paragraphs: [
      "Managing tax obligations is more than filing a return once a year. Businesses may need GST registration, periodic returns, TDS or TCS compliance, accounting support, tax planning and advisory, while individuals may need income tax, capital gains or other tax-related assistance.",
      "Tax India Firm provides taxation services in Chennai and across Tamil Nadu, helping individuals and businesses understand their obligations, organise documentation and manage applicable tax and compliance requirements through one professional support framework.",
    ],

    primaryCta: "Talk to a Tax Expert",
    secondaryCta: "Explore services",
    keyServicesLabel: "Key Service Areas:",

    serviceLinks: [
      {
        name: "GST Registration & Compliance",
        shortLabel: "GST",
        href: "/taxation/gst",
        icon: "receipt",
      },
      {
        name: "Income Tax & Tax Filing",
        shortLabel: "Income tax",
        href: "/itr/income-tax-return-filing",
        icon: "wallet",
      },
      {
        name: "TDS & TCS Compliance",
        shortLabel: "TDS / TCS",
        href: "/taxation/tax-filing/tds-tcs-return-filing",
        icon: "clipboard",
      },
      {
        name: "Tax Planning & Advisory",
        shortLabel: "Advisory",
        href: "/taxation/tax-filing/tax-planning-advisory",
        icon: "trending",
      },
    ],

    deskCaption: "One professional support framework",
    documentLabel: "TAXATION SERVICES",
    documentFoot: "Chennai · Tamil Nadu",
    chooseLabel: "Choose a service area",
    locationNote:
      "Supporting individuals and businesses across Tamil Nadu",
  },

  overview: {
    kicker: "A broader perspective",
    title: "Taxation Services for Individuals and Businesses",
    markerNumber: "01",
    markerText:
      "Understand the requirement.\nBuild the right framework.",

    image: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      alt: "A contemporary office workspace used to represent professional taxation and compliance support",
    },

    imageChip: "Chennai · Tamil Nadu",
    imageStatement: "One professional\nsupport framework.",

    paragraphs: [
      "Tax requirements depend on what you earn, what you sell, how your business operates and the transactions you undertake. A business registered under GST may have recurring return filing obligations, while an employer may also have TDS responsibilities. An individual receiving income from investments or selling an asset may need capital gains advice in addition to income tax filing.",
      "This is why taxation should be approached as an ongoing compliance function rather than as a single filing exercise.",
      "Tax India Firm supports clients across different stages of the taxation lifecycle. This includes GST registration and compliance, tax filing, TDS and TCS return filing, accounting and bookkeeping, capital gains advisory and tax planning.",
      "For businesses in Chennai, Guindy, Ambattur and other commercial centres across Tamil Nadu, professional tax support can help keep statutory obligations organised as the business grows.",
    ],

    noteLabel: "OUR APPROACH",
    noteText:
      "Our approach is to first understand the client's situation and then identify the applicable service rather than recommending unnecessary compliance work.",
  },

  services: {
    kicker: "Two specialist practices",
    title: "Our Taxation Services",

    intro: [
      "Tax India Firm's taxation practice is organised into two broad service areas. This structure makes it easier to identify the right type of support without treating every tax requirement as the same.",
    ],

    categories: [
      {
        title: "GST Services",
        icon: "receipt",

        paragraphs: [
          "GST can affect a business from the point of registration through its ongoing filing and compliance lifecycle.",
          "Depending on the business and its circumstances, support may be required for GST registration, periodic return filing, annual returns, LUT filing, amendments, cancellation, notices or appeals.",
          "Our GST service portfolio covers these different requirements through dedicated specialist pages.",
        ],

        listLabel: "GST Services Include:",

        items: [
          {
            name: "GST Registration",
            href: "/taxation/gst/gst-registration",
          },
          {
            name: "GST Return Filing",
            href: "/taxation/gst/gst-return-filing",
          },
          {
            name: "GST LUT Filing",
            href: "/taxation/gst/gst-lut-filing",
          },
          {
            name: "GST Annual Return Filing",
            href: "/taxation/gst/gst-annual-return-filing",
          },
          {
            name: "GST Notice Reply",
            href: "/taxation/gst/gst-notice-reply",
          },
          {
            name: "GST Advisory Services",
            href: "/taxation/gst/gst-advisory-services",
          },
          {
            name: "GST Registration Cancellation",
            href: "/taxation/gst/gst-registration-cancellation",
          },
          {
            name: "GST Appeals",
            href: "/taxation/gst/gst-appeals",
          },
          {
            name: "GST Amendments",
            href: "/taxation/gst/gst-amendments",
          },
          {
            name: "GST Filing in Chennai",
            href: "/taxation/gst/gst-filing-chennai",
          },
        ],

        hubLabel: "GST Services in India",
        hubHref: "/taxation/gst",
      },

      {
        title: "Tax Filing & Tax Compliance Services",
        icon: "file-check",

        paragraphs: [
          "Tax filing extends beyond income tax returns. Depending on the individual or business, tax administration may involve PAN and TAN requirements, TDS or TCS filings, accounting records, capital gains and tax planning.",
          "These services often work together. Accurate accounting can support better tax reporting, while appropriate tax planning can help a taxpayer understand the implications of future transactions.",
        ],

        listLabel: "Tax Filing Services Include:",

        items: [
          {
            name: "PAN Services",
            href: "/taxation/tax-filing/pan-services",
          },
          {
            name: "TAN Services",
            href: "/taxation/tax-filing/tan-services",
          },
          {
            name: "Accounting & Bookkeeping Services",
            href: "/taxation/tax-filing/accounting-bookkeeping-services",
          },
          {
            name: "TDS & TCS Return Filing",
            href: "/taxation/tax-filing/tds-tcs-return-filing",
          },
          {
            name: "Capital Gains Tax Advisory",
            href: "/taxation/tax-filing/capital-gains-tax-advisory",
          },
          {
            name: "Tax Planning Advisory",
            href: "/taxation/tax-filing/tax-planning-advisory",
          },
          {
            name: "ROC Filing Online",
            href: "/taxation/tax-filing/roc-filing-online",
          },
        ],

        hubLabel: "Tax Filing & Compliance Services",
        hubHref: "/taxation/tax-filing",
      },
    ],

    footerText:
      "Identify the requirement. Choose the relevant service.",
  },

  lifecycle: {
    kicker: "From the first registration onward",
    title: "Understanding the Tax Compliance Lifecycle",

    intro: [
      "Tax compliance is not one activity performed at one point in the year. For many businesses, it is an ongoing process involving registration, record keeping, reporting, payment, reconciliation and responding to regulatory requirements.",
    ],

    chapterLabel: "CHAPTER",

    stages: [
      {
        title: "Registration & recurring compliance",
        icon: "fingerprint",
        text:
          "A business may begin with **registration**, followed by regular **GST or TDS/TCS compliance**. Accurate accounting and documentation then become important for preparing returns and supporting financial reporting.",
      },
      {
        title: "Changes in business activity",
        icon: "building",
        text:
          "Changes in business activity may create additional requirements. A business may need to amend its GST registration, obtain a LUT for eligible exports, respond to a GST notice or seek professional advice on a tax transaction.",
      },
      {
        title: "Individual income & transactions",
        icon: "landmark",
        text:
          "Individuals can also face different requirements depending on their income and transactions. For example, the sale of an asset may create a capital gains question that requires consideration alongside the individual's income tax position.",
      },
      {
        title: "Planning the next step",
        icon: "trending",
        text:
          "The right taxation service therefore depends on **what has happened, what is happening and what the taxpayer plans to do next**.",
      },
    ],
  },

  requirements: {
    kicker: "Every requirement has a starting point",
    title: "Tax Services Based on Your Requirement",

    intro: [
      "Different taxpayers approach taxation with different problems. Identifying the requirement first can make it easier to determine which service is appropriate.",
    ],

    hint: "Select your situation to explore",

    items: [
      {
        title: "Starting a New Business",
        icon: "rocket",
        blocks: [
          "A new business may need to consider GST registration, PAN, TAN, accounting systems and other applicable registrations before beginning regular operations.",
        ],
      },
      {
        title: "Managing an Existing Business",
        icon: "building",
        blocks: [
          "Established businesses may need recurring GST returns, TDS or TCS filings, accounting and bookkeeping, annual compliance and tax planning support.",
        ],
      },
      {
        title: "Exporting Goods or Services",
        icon: "plane",
        blocks: [
          "Businesses involved in exports may require GST-related support such as LUT filing and advice concerning their applicable compliance requirements.",
        ],
      },
      {
        title: "Facing a Tax or GST Notice",
        icon: "file",
        blocks: [
          "A notice should not be ignored. The appropriate response depends on the authority involved, the issue raised and the documents supporting the taxpayer's position.",
          "Tax India Firm provides dedicated GST notice and advisory support where applicable.",
        ],
      },
      {
        title: "Selling an Asset or Making a Major Transaction",
        icon: "landmark",
        blocks: [
          "Property, investments and other capital assets can create tax implications. Capital gains advisory can help taxpayers understand the applicable tax treatment before completing or reporting the transaction.",
        ],
      },
      {
        title: "Planning Future Tax Obligations",
        icon: "trending",
        blocks: [
          "Tax planning is about understanding the tax consequences of legitimate financial and business decisions before they are implemented. It should be based on the taxpayer's actual circumstances and applicable law.",
        ],
      },
    ],
  },

  connected: {
    kicker: "Three systems. Connected records.",
    title: "GST, Income Tax and TDS: How They Fit Together",

    intro: [
      "Businesses often deal with multiple taxation systems at the same time. GST, income tax and TDS are different areas of taxation, but their compliance records can intersect.",
    ],

    centerEyebrow: "CONNECTED RESPONSIBILITIES",
    centerTitle: "Accounting & compliance records",

    nodes: [
      {
        label: "GST",
        icon: "receipt",
        description:
          "**GST** primarily concerns the applicable indirect tax obligations arising from the supply of goods or services.",
      },
      {
        label: "Income tax",
        icon: "wallet",
        description:
          "**Income tax** concerns taxable income and the applicable tax liability of individuals, companies and other taxpayers.",
      },
      {
        label: "TDS and TCS",
        icon: "clipboard",
        description:
          "**TDS and TCS** involve tax collection or deduction mechanisms that apply to specified transactions and payments under the applicable provisions.",
      },
    ],

    bottomLead:
      "A business may therefore need to manage all three areas simultaneously.",

    bottomBlocks: [
      "This is where organised accounting and professional compliance support become valuable. Information from invoices, payroll, payments, expenses, financial statements and other records may need to be considered across different compliance requirements.",
      "Tax India Firm helps businesses approach these requirements as connected compliance responsibilities rather than isolated filings.",
    ],
  },

  growth: {
    kicker: "Clarity as your business evolves",
    title: "Why Businesses Need Ongoing Tax Compliance Support",

    introBlocks: [
      "Tax compliance becomes more complex as a business grows.",
      "A business may begin with a straightforward registration and gradually add employees, vendors, customers, interstate transactions, exports, investments or new business activities. Each change can affect its tax and reporting responsibilities.",
    ],

    closingBlocks: [
      "For businesses in Chennai and across Tamil Nadu, this can provide a more structured approach to managing taxation rather than addressing each requirement only when a deadline arrives.",
    ],

    checklistEyebrow: "COMPLIANCE CHECKLIST",
    checklistTitle: "Professional support can help businesses:",

    checklistItems: [
      "Identify applicable registrations and filings",
      "Maintain organised financial and tax records",
      "Track recurring compliance requirements",
      "Review documentation before filing",
      "Understand the implications of business transactions",
      "Address notices and compliance issues",
      "Plan tax-related decisions more effectively",
    ],

    emptyHint:
      "Start with the areas relevant to you.",
    selectedHint:
      "Select items to include in your WhatsApp enquiry.",
    ctaLabel: "Talk to a Tax Expert",
  },

  why: {
    kicker: "Expertise with context",
    title: "Why Choose Tax India Firm for Taxation Services?",

    lede:
      "Taxation requires accuracy, but it also requires context. The correct approach for one business or individual may not be appropriate for another.",

    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85",
      alt: "Professionals collaborating in an office environment",
    },

    badge: "Requirement-led tax support",

    proofs: [
      {
        label: "Practical compliance",
      },
      {
        label: "Accurate documentation",
      },
      {
        label: "Timely action",
      },
    ],

    principles: [
      {
        title: "Start with the requirement",
        text:
          "We first understand the taxpayer, business activity or transaction before identifying the relevant service.",
        icon: "fingerprint",
      },
      {
        title: "Keep related work connected",
        text:
          "GST, tax filing, TDS/TCS, accounting, capital gains and planning can be coordinated within one framework.",
        icon: "layers",
      },
      {
        title: "Built for Chennai & Tamil Nadu",
        text:
          "The focus stays on practical compliance, organised documentation and timely action for local businesses and individuals.",
        icon: "map",
      },
    ],

    detailBlocks: [
      "Tax India Firm takes a requirement-led approach. We first understand the taxpayer's circumstances, business activity or transaction before determining which taxation service is relevant.",
      "Our support spans GST, tax filing, TDS/TCS, accounting, capital gains and tax planning. This allows clients to access related services within a single professional framework when their requirements overlap.",
      "For businesses in Chennai and Tamil Nadu, the focus is on practical compliance, accurate documentation and timely action.",
      "We do not treat taxation as a collection of forms to be submitted. The objective is to help clients understand what needs to be done, why it matters and how the requirement should be managed.",
    ],

    bottomLabel: "One professional framework",
    ctaLabel: "Speak With Our Tax Experts",
  },

  consult: {
    kicker: "Your next step, made clear",
    title: "Ready to Get Your Tax Compliance in Order?",

    leftBlocks: [
      "Tax requirements can become difficult to manage when registrations, returns, accounting records, TDS, GST and tax planning are handled separately or only when a deadline approaches.",
      "The first step is to identify what your business or personal situation actually requires.",
    ],

    rightBlocks: [
      "Whether you are starting a business, managing recurring GST compliance, filing tax returns, dealing with TDS, planning a transaction or responding to a tax-related issue, Tax India Firm can help identify the appropriate taxation service.",
      "Our team supports individuals and businesses in Chennai and across Tamil Nadu with practical taxation and compliance assistance.",
    ],

    lead:
      "**Tell us what you need help with, and we can direct you to the appropriate taxation service.**",

    ctaLabel: "Talk to Tax India Firm",
  },

  faq: {
    kicker: "Answers before you begin",
    title: "Frequently Asked Questions About Taxation Services",

    helpText:
      "Need help identifying the right service?",
    helpCta: "Speak with our team",

    items: [
      {
        question:
          "What taxation services does Tax India Firm provide?",
        answer: [
          "Tax India Firm provides a range of taxation and compliance services covering GST, tax filing and related advisory requirements. The GST practice includes registration, return filing, LUT filing, annual return filing, notice replies, advisory, cancellation, appeals and amendments. The tax filing practice includes PAN, TAN, accounting and bookkeeping, TDS/TCS filing, capital gains advisory, tax planning and ROC filing. The appropriate service depends on whether you are an individual, business owner, employer, taxpayer or organisation and what specific tax or compliance requirement you are dealing with.",
        ],
      },
      {
        question:
          "Does a business need both GST and income tax compliance?",
        answer: [
          "Potentially, yes. GST and income tax are separate taxation frameworks with different applicability and filing requirements. A business may have GST registration and return filing obligations while also having income tax reporting responsibilities. An employer may additionally have TDS obligations. The exact requirements depend on the business structure, nature of activities, turnover, transactions and other applicable factors. Businesses should therefore assess their tax obligations as a complete compliance picture rather than assuming that registration under one tax system covers all other taxation responsibilities.",
        ],
      },
      {
        question:
          "When should a business seek professional tax support?",
        answer: [
          "Professional support can be useful when starting a business, registering for GST, managing recurring returns, employing staff, making significant transactions, dealing with tax notices or planning future business decisions. It can also help when the business has multiple compliance requirements that need to be coordinated. Seeking advice before a transaction or filing deadline can often be more useful than trying to correct an issue afterward. The appropriate level of support depends on the complexity of the business and its taxation requirements.",
        ],
      },
      {
        question:
          "Can one firm handle GST, TDS and other tax compliance?",
        answer: [
          "Yes. A business can work with a professional firm that provides multiple taxation and compliance services, provided the firm has the appropriate expertise for the requirements involved. GST, TDS/TCS, accounting and income tax have different rules and filing requirements, so each area still needs to be handled according to its applicable framework. Having related services coordinated through one professional team can make documentation and compliance management easier, particularly for businesses that have several recurring taxation responsibilities.",
        ],
      },
      {
        question:
          "What is the difference between tax filing and tax advisory?",
        answer: [
          "Tax filing primarily involves preparing and submitting the required return or statutory form based on the taxpayer's records and applicable requirements. Tax advisory is broader and can involve understanding the tax implications of a transaction, business decision or financial situation before action is taken. For example, filing a return reports the relevant taxable information, while tax planning or capital gains advisory may help a taxpayer understand the potential tax consequences of a proposed transaction. Both can be important depending on the taxpayer's circumstances.",
        ],
      },
      {
        question:
          "Does Tax India Firm provide taxation services in Chennai?",
        answer: [
          "Yes. Tax India Firm provides taxation and compliance support for businesses and individuals in Chennai and across Tamil Nadu. The available services cover GST, tax filing, TDS/TCS, accounting and bookkeeping, capital gains and tax planning, along with related compliance requirements. The exact service required depends on the taxpayer's circumstances. Businesses located in commercial areas such as Guindy and Ambattur, as well as clients in other parts of Chennai and Tamil Nadu, can access the relevant taxation support.",
        ],
      },
      {
        question:
          "Can taxation requirements change as a business grows?",
        answer: [
          "Yes. A business's tax obligations can change as its activities, transactions, employees, turnover and operating model change. For example, a business may begin with basic registration and later require additional GST compliance, TDS/TCS filing, accounting support, export-related documentation or tax planning. Changes in business activity can also create a need to amend existing registrations. Periodically reviewing the business's taxation position can therefore help identify new requirements before they become compliance problems.",
        ],
      },
      {
        question:
          "How do I know which Tax India Firm service I need?",
        answer: [
          "Start by identifying the immediate requirement. If you are starting GST compliance, the GST service category is the appropriate starting point. If you need tax returns, PAN, TAN, TDS/TCS, accounting, capital gains or tax planning support, the Tax Filing category is more relevant. If you are unsure, you can contact Tax India Firm with details of your business or situation. The team can review the requirement and direct you to the appropriate service rather than asking you to select a technical service without understanding the underlying issue.",
        ],
      },
    ],
  },
};

export default function TaxationHubPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <DynamicHub data={taxationHubData} />
    </main>
  );
}
