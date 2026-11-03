import type { Metadata } from "next";
import DynamicHub, {
  type DynamicHubData,
} from "../../components/Dynamic-Hub-Page/DynamicHub";

export const metadata: Metadata = {
  title: {
    absolute: "Legal Services in Chennai | IP & Business Contract Services",
  },
  description:
    "Trademark, copyright, patents, NDAs, franchise agreements and more, complete legal services for businesses in Chennai and Tamil Nadu.",
  alternates: {
    canonical: "https://taxindiafirm.com/legal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ip = "/legal/ip";
const contracts = "/legal/contracts";
const cta = "Discuss Legal Requirements for Your Business";
const banner = "Legal protection for your business, covered.";

const draftingNote =
  "The answers determine what provisions are appropriate and how the document should be structured.";

const legalHubData: DynamicHubData = {
  pageKey: "legal",
  chapterBrand: "LEGAL",
  logoSrc: "/icons/taxindia-logo.png",
  headerOffset: 78,

  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Legal" },
  ],

  contact: {
    whatsappNumber: "919962674040",
    fallbackHref: "/contact-us",
    primaryMessage:
      "Hello Tax India Firm, I would like to discuss the legal requirements for my business.",
    checklistMessagePrefix: "I would like legal assistance with:",
  },

  navigation: {
    overview: "Overview",
    services: "Services",
    lifecycle: "Business stages",
    requirements: "Before drafting",
    faq: "FAQs",
  },

  hero: {
    kicker: "Tax India Firm · Chennai · Tamil Nadu",
    edition: banner,
    titleLead: "Legal Services in Chennai,",
    titleHighlight: "IP & Business Contract Services",
    paragraphs: [
      "IP registration, contract drafting and business legal services for Chennai entrepreneurs.",
    ],
    primaryCta: cta,
    secondaryCta: "Explore legal services",
    keyServicesLabel: "Legal practices",
    serviceLinks: [
      {
        name: "Intellectual Property",
        shortLabel: "IP",
        href: ip,
        icon: "fingerprint",
      },
      {
        name: "Business Contract Services",
        shortLabel: "Contracts",
        href: contracts,
        icon: "file-check",
      },
    ],
    deskCaption: banner,
    documentLabel: "LEGAL SERVICES",
    documentFoot: "Chennai · Tamil Nadu",
    chooseLabel: "Choose a legal practice",
    locationNote: "Chennai · Tamil Nadu",
  },

  overview: {
    kicker: "Business legal support",
    title: "Legal Services in Chennai for Businesses Across Tamil Nadu",
    markerNumber: "01",
    markerText: "Intellectual Property & Business Contract Services",
    image: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      alt: "Legal services Chennai Tamil Nadu IP contracts",
    },
    imageChip: "Chennai · Tamil Nadu",
    imageStatement: banner,
    paragraphs: [
      "Running a business involves more than registrations and compliance. Your **brand, intellectual property, commercial relationships and contractual commitments** all need legal protection as the business grows.",
      "Tax India Firm provides business-focused legal services in Chennai and across Tamil Nadu, with the Legal practice organized around two core areas: **Intellectual Property** and **Business Contract Services**.",
      "Whether you are protecting a brand, documenting a commercial relationship, entering a franchise arrangement or formalising an agreement with a business partner, the right legal documentation can help reduce uncertainty before it becomes a dispute.",
      "Tax India Firm serves businesses and entrepreneurs looking for structured legal support in Chennai and across Tamil Nadu.",
      "For a business, legal protection is not limited to resolving disputes after something goes wrong. It also involves putting the right framework in place **before the business commits, shares, signs, licenses, partners or expands**.",
      "Whether the requirement concerns intellectual property or a commercial agreement, the starting point is understanding what the business is trying to achieve and what needs to be legally documented.",
    ],
    noteLabel: "OUR APPROACH",
    noteText:
      "Our approach is practical: understand the commercial requirement, identify the legal considerations and structure the documentation around the transaction or business need.",
  },

  services: {
    kicker: "Two specialist practices",
    title: "Business Legal Services Built Around Two Core Needs",
    intro: [
      "Legal requirements vary depending on what your business is trying to protect or formalise.",
      "Rather than treating every requirement as a separate legal exercise, our services are organized into two focused areas.",
    ],
    categories: [
      {
        title: "Intellectual Property",
        icon: "fingerprint",
        paragraphs: [
          "Intellectual property protects assets that may be central to the value of a business, including its **brand identity, original works and inventions**.",
        ],
        listLabel: "Our Intellectual Property services cover:",
        items: [
          {
            name: "Trademark registration",
            href: `${ip}/trademark-registration`,
          },
          {
            name: "Copyright registration",
            href: `${ip}/copyright-registration`,
          },
          {
            name: "Patent registration",
            href: `${ip}/patent-registration`,
          },
          {
            name: "IP-related legal documentation and support",
            href: ip,
          },
        ],
        hubLabel: "Intellectual Property Legal Services",
        hubHref: ip,
      },
      {
        title: "Business Contract Services",
        icon: "file-check",
        paragraphs: [
          "Contracts establish what each party is expected to do, what they receive in return and what happens when circumstances change.",
        ],
        listLabel:
          "Our Business Contract Services cover agreements commonly required by businesses, entrepreneurs and organisations, including:",
        items: [
          {
            name: "Franchise agreements",
            href: `${contracts}/franchise-agreement`,
          },
          {
            name: "Joint venture agreements",
            href: `${contracts}/joint-venture-agreement`,
          },
          {
            name: "Memorandum of Understanding (MOU)",
            href: `${contracts}/mou-agreement`,
          },
          {
            name: "Vendor agreements",
            href: `${contracts}/vendor-agreement`,
          },
          {
            name: "Master Service Agreements",
            href: `${contracts}/master-service-agreement`,
          },
          {
            name: "Service Level Agreements",
            href: `${contracts}/service-level-agreement`,
          },
          {
            name: "Non-Disclosure Agreements",
            href: `${contracts}/non-disclosure-agreement-nda`,
          },
          {
            name: "Business contracts",
            href: `${contracts}/business-contract`,
          },
          {
            name: "Employment agreements",
            href: `${contracts}/employment-agreement`,
          },
          {
            name: "Power of Attorney",
            href: `${contracts}/power-of-attorney`,
          },
          {
            name: "Shareholders agreements",
            href: `${contracts}/shareholders-agreement`,
          },
          {
            name: "Board resolutions and authorisation letters",
            href: `${contracts}/board-resolution-authorisation-letter`,
          },
          {
            name: "Legal Heir Certificates",
            href: `${contracts}/legal-heir-certificate`,
          },
        ],
        hubLabel: "Business Contract Legal Services",
        hubHref: contracts,
      },
    ],
    footerText:
      "For businesses developing a new brand, product, technology or creative asset, early attention to ownership and protection can prevent avoidable problems later.",
  },

  lifecycle: {
    kicker: "Legal support as your business develops",
    title: "Legal Services for Different Stages of Business",
    intro: ["The need for legal support changes as a business develops."],
    chapterLabel: "STAGE",
    stages: [
      {
        title: "Starting a Business",
        icon: "rocket",
        text: "New businesses may need to establish ownership of intellectual property, document relationships between founders and prepare agreements with employees, vendors, service providers or other parties.",
      },
      {
        title: "Entering Commercial Relationships",
        icon: "building",
        text: "When a business starts working with another company, distributor, vendor, franchisee, consultant or strategic partner, a properly drafted agreement can establish the commercial framework before work begins.",
      },
      {
        title: "Protecting Intellectual Property",
        icon: "fingerprint",
        text: "A brand, invention or original work can become a valuable business asset. Appropriate registration and documentation can help establish and protect those rights.",
      },
      {
        title: "Formalising Existing Arrangements",
        icon: "file",
        text: "Not every business relationship starts with a detailed contract. Where an arrangement has developed informally, formal documentation can help clarify the parties' current understanding and future obligations.",
      },
      {
        title: "Managing Changes and Authorisations",
        icon: "clipboard",
        text: "Businesses also require legal documents when ownership, authority, responsibilities or commercial arrangements change. Resolutions, authorisation letters and other formal documents can provide the necessary record of those decisions.",
      },
    ],
  },

  requirements: {
    kicker: "Before you draft or sign",
    title: "What to Consider Before Preparing a Legal Document",
    intro: [
      "The correct legal document depends on the actual relationship and transaction. A template chosen simply because it appears similar to the requirement may leave important commercial issues unaddressed.",
      "Before drafting or signing an agreement, businesses should consider:",
    ],
    hint: draftingNote,
    items: [
      "Who are the parties to the arrangement?",
      "What exactly is each party expected to provide?",
      "How and when will payments be made?",
      "Who owns intellectual property created during the relationship?",
      "What information must remain confidential?",
      "How long will the arrangement continue?",
      "Under what circumstances can it be terminated?",
      "What happens if one party does not perform?",
      "How will disagreements be handled?",
      "Are there industry-specific or transaction-specific legal considerations?",
    ].map((title) => ({
      title,
      icon: "clipboard" as const,
      blocks: [draftingNote],
    })),
  },

  connected: {
    kicker: "Legal protection and commercial clarity",
    title: "Why Legal Protection Matters to a Growing Business",
    intro: [
      "Legal documentation is often considered only when a transaction is already underway or a disagreement has started. By then, important terms may already have been discussed informally, commitments made and expectations created.",
      "A properly structured legal arrangement helps put those expectations into writing.",
    ],
    centerEyebrow: "BUSINESS LEGAL PROTECTION",
    centerTitle: "Intellectual property & contracts",
    nodes: [
      {
        label: "Protect What the Business Owns",
        icon: "fingerprint",
        description:
          "A business may invest substantial time and money into its name, creative work, technology or other intellectual assets. Appropriate IP protection helps establish the legal rights associated with those assets.",
      },
      {
        label: "Define Commercial Relationships Clearly",
        icon: "file",
        description:
          "A contract should do more than record a handshake understanding. It should establish responsibilities, deliverables, payment terms, confidentiality, ownership, termination and other provisions relevant to the relationship.",
      },
      {
        label: "Reduce Ambiguity Before It Becomes a Dispute",
        icon: "clipboard",
        description:
          "No contract can eliminate every commercial risk. Good legal drafting can, however, make the parties' rights and obligations clearer and provide a framework for dealing with foreseeable situations.",
      },
    ],
    bottomLead: "Support Business Decisions",
    bottomBlocks: [
      "Legal advice is most useful when it is connected to the underlying business decision. The appropriate agreement for a franchise, joint venture, employment relationship or service engagement will depend on the nature of the arrangement and the interests of the parties involved.",
    ],
  },

  growth: {
    kicker: "Early legal review",
    title: "When Should a Business Seek Legal Assistance?",
    introBlocks: [
      "It is generally easier to address legal risks before an agreement is signed, an asset is commercialised or a disagreement develops.",
    ],
    closingBlocks: [
      "Early legal review can help identify issues while there is still an opportunity to negotiate the terms.",
    ],
    checklistEyebrow: "WHEN TO SEEK SUPPORT",
    checklistTitle: "Businesses should consider legal assistance when:",
    checklistItems: [
      "Entering a significant commercial relationship",
      "Sharing confidential business information",
      "Licensing or using intellectual property",
      "Bringing in investors or business partners",
      "Starting a franchise arrangement",
      "Engaging important vendors or service providers",
      "Hiring employees for sensitive or senior roles",
      "Creating shareholder or management arrangements",
      "Giving another person authority to act on behalf of the business",
      "Formalising an arrangement that was previously based on informal discussions",
    ],
    emptyHint: "Start with the areas relevant to you.",
    selectedHint: "Select items to include in your WhatsApp enquiry.",
    ctaLabel: cta,
  },

  why: {
    kicker: "Business-focused legal services",
    title: "Why Choose Tax India Firm for Business Legal Services?",
    lede:
      "Businesses generally do not need legal documents in isolation. They need documents that make sense within the **commercial and operational context** of the business.",
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85",
      alt: "Professionals collaborating in an office",
    },
    badge: "Business legal support",
    proofs: [
      { label: "Business-Focused Approach" },
      { label: "Clear Documentation" },
      { label: "Practical Risk Identification" },
    ],
    principles: [
      {
        title: "Business-Focused Approach",
        text: "The objective is to understand the business requirement behind the document rather than simply provide a generic format.",
        icon: "fingerprint",
      },
      {
        title: "Clear Documentation",
        text: "Legal documents should communicate obligations clearly enough for the parties to understand what they have agreed to and what is expected from them.",
        icon: "file-check",
      },
      {
        title: "Practical Risk Identification",
        text: "The focus is on identifying material contractual and legal considerations relevant to the particular transaction or relationship.",
        icon: "clipboard",
      },
      {
        title: "Structured Legal Services",
        text: "The Legal Hub is organized into dedicated **IP** and **Business Contract** practices, allowing businesses to move from the broader legal requirement to the specific service they need without navigating an unrelated list of legal services.",
        icon: "layers",
      },
    ],
    detailBlocks: [
      "Tax India Firm approaches legal documentation with that broader perspective.",
    ],
    bottomLabel: "IP & Business Contract Services",
    ctaLabel: cta,
  },

  consult: {
    kicker: "Drafting Is About More Than Filling in a Template",
    title: "Start With the Right Legal Service",
    leftBlocks: [
      "A contract can look professionally prepared and still fail to address the commercial issue that matters most.",
      "Effective legal drafting starts with understanding the transaction.",
      "For example, a service agreement may need different provisions depending on whether the relationship involves recurring services, technology, intellectual property, sensitive information, measurable service standards or long-term commitments.",
      "Similarly, a shareholders agreement needs to reflect the actual ownership and governance arrangement rather than simply reproducing generic clauses.",
      "The purpose of legal drafting is therefore not just to produce a document. It is to **translate the intended business relationship into clear legal terms**.",
    ],
    rightBlocks: [
      "The right legal document or IP protection depends on the nature of the business requirement.",
      "**For intellectual property protection**, explore the dedicated IP services.",
      "**For agreements and commercial documentation**, explore the Business Contract Services practice.",
    ],
    lead:
      "Tax India Firm can help you identify the appropriate legal service based on your requirement.",
    ctaLabel: cta,
  },

  faq: {
    kicker: "Answers before you begin",
    title: "Frequently Asked Questions About Legal Services",
    helpText: "Need help identifying the right legal service?",
    helpCta: "Speak with our team",
    items: [
      {
        question: "What legal services does Tax India Firm provide?",
        answer: [
          "Tax India Firm's Legal practice focuses on two primary areas: Intellectual Property services and Business Contract Services. These include trademark, copyright and patent registration as well as a range of commercial, employment, confidentiality, shareholder and authorization agreements.",
        ],
      },
      {
        question: "Do you provide legal services in Chennai?",
        answer: [
          "Yes. The Legal Services practice is designed for businesses and entrepreneurs in Chennai and across Tamil Nadu.",
        ],
      },
      {
        question: "Do I need a lawyer to draft a business agreement?",
        answer: [
          "Not every agreement has the same level of complexity. For commercially important arrangements, professional legal drafting or review can help identify obligations, risks and provisions that may otherwise be overlooked.",
        ],
      },
      {
        question: "Can you review an agreement prepared by another party?",
        answer: [
          "Yes, legal review can be useful before signing an agreement prepared by a customer, vendor, partner, employer or other party. The review can focus on the obligations, risks and terms that affect your business interests.",
        ],
      },
      {
        question:
          "What is the difference between an MOU and a formal business agreement?",
        answer: [
          "An MOU generally records the understanding or proposed framework between parties, while a formal agreement is typically structured around specific rights, obligations and enforceable contractual terms. The appropriate document depends on the transaction and the parties' intentions.",
        ],
      },
      {
        question: "Why should a business register its intellectual property?",
        answer: [
          "Registration can provide important legal protection and help establish rights over qualifying intellectual property. The appropriate form of protection depends on whether the asset is a brand, creative work, invention or another type of intellectual property.",
        ],
      },
      {
        question: "Should I sign a business contract without legal review?",
        answer: [
          "For significant commercial arrangements, obtaining a legal review before signing can help identify obligations, liability provisions, termination conditions, ownership issues and other terms that may materially affect the business.",
        ],
      },
    ],
  },
};

export default function LegalHubPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <DynamicHub data={legalHubData} />
    </main>
  );
}