"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, FileText, Layers3, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type SearchItem = {
  title: string;
  href: string;
  category: string;
  keywords?: string[];
};

/* =========================================================
   MOTION
   - small transforms only
   - no blur animation
   - once: true
   - separate sections animate when they enter the viewport
========================================================= */

const EASE = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   SEARCH TYPING PLACEHOLDERS
   - continuously types and deletes
   - pauses while the search area is hovered
   - pauses as soon as the user starts typing
========================================================= */

const searchPlaceholderPhrases = [
  "Search GST Registration...",
  "Search Private Limited Company...",
  "Search Trademark Registration...",
  "Search ITR Filing...",
] as const;

const introContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.16,
    },
  },
};

const badgeReveal: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const headlineReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: EASE },
  },
};

const copyReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

const searchReveal: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.05, ease: EASE },
  },
};

const chipsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1,
    },
  },
};

const chipReveal: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.78, ease: EASE },
  },
};

const supportReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const statsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.14,
    },
  },
};

const statReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.92, ease: EASE },
  },
};

const sectionIntro: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.14,
    },
  },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
};

const benefitContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.16,
    },
  },
};

const benefitRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.02, ease: EASE },
  },
};

const benefitSoftScale: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.06, ease: EASE },
  },
};

/* =========================================================
   BENEFIT HOVER IMAGES
   Desktop only. Hidden completely on mobile/tablet.
========================================================= */

const benefitHoverImages = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
];

const searchItems: SearchItem[] = [
  /* =======================================================
     BUSINESS
  ======================================================= */

  {
    title: "Business Services",
    href: "/business",
    category: "Business",
    keywords: ["business"],
  },

  {
    title: "Business Registration",
    href: "/business/registration",
    category: "Business Registration",
    keywords: ["company registration", "register company"],
  },

  {
    title: "Private Limited Company Registration",
    href: "/business/registration/private-limited-company-registration",
    category: "Business Registration",
    keywords: [
      "private limited",
      "pvt ltd",
      "company",
      "company registration",
    ],
  },

  {
    title: "LLP Registration",
    href: "/business/registration/llp-registration",
    category: "Business Registration",
    keywords: ["llp", "limited liability partnership"],
  },

  {
    title: "One Person Company OPC Registration",
    href: "/business/registration/one-person-company-opc-registration",
    category: "Business Registration",
    keywords: ["opc", "one person company"],
  },

  {
    title: "Partnership Firm Registration",
    href: "/business/registration/partnership-firm-registration",
    category: "Business Registration",
    keywords: ["partnership", "firm"],
  },

  {
    title: "Sole Proprietorship Registration",
    href: "/business/registration/sole-proprietorship-registration",
    category: "Business Registration",
    keywords: ["sole proprietorship", "proprietorship"],
  },

  {
    title: "Trust Registration",
    href: "/business/registration/trust-registration",
    category: "Business Registration",
    keywords: ["trust"],
  },

  {
    title: "Society Registration",
    href: "/business/registration/society-registration",
    category: "Business Registration",
    keywords: ["society"],
  },

  {
    title: "Section 8 Company Registration",
    href: "/business/registration/section-8-company-registration",
    category: "Business Registration",
    keywords: ["section 8", "ngo", "non profit"],
  },

  {
    title: "Nidhi Company Registration",
    href: "/business/registration/nidhi-company-registration",
    category: "Business Registration",
    keywords: ["nidhi company"],
  },

  {
    title: "Changes in LLP Agreement",
    href: "/business/registration/changes-in-llp-agreement",
    category: "Business Registration",
    keywords: ["llp agreement", "change llp agreement"],
  },

  /* =======================================================
     BUSINESS LICENSE
  ======================================================= */

  {
    title: "Business License",
    href: "/business/license",
    category: "Business License",
    keywords: ["license", "business license"],
  },

  {
    title: "Digital Signature Certificate DSC",
    href: "/business/license/digital-signature-certificate-dsc",
    category: "Business License",
    keywords: ["dsc", "digital signature"],
  },

  {
    title: "MSME Udyam Registration",
    href: "/business/license/msme-udyam-registration",
    category: "Business License",
    keywords: ["msme", "udyam", "udyog"],
  },

  {
    title: "FSSAI Registration",
    href: "/business/license/fssai-registration",
    category: "Business License",
    keywords: ["fssai", "food license", "food registration"],
  },

  {
    title: "Import Export Code Registration",
    href: "/business/license/import-export-code-registration",
    category: "Business License",
    keywords: ["iec", "import export", "import export code"],
  },

  {
    title: "ESI PF Registration",
    href: "/business/license/esi-pf-registration",
    category: "Business License",
    keywords: ["esi", "pf", "epf"],
  },

 

  {
    title: "ISO Certification",
    href: "/business/license/iso-certification",
    category: "Business License",
    keywords: ["iso", "certification"],
  },

  {
    title: "APEDA Registration",
    href: "/business/license/apeda-registration",
    category: "Business License",
    keywords: ["apeda"],
  },

  {
    title: "Labour License Registration",
    href: "/business/license/labour-license-registration",
    category: "Business License",
    keywords: ["labour", "labor license"],
  },

  {
    title: "Shop Establishment Registration",
    href: "/business/license/shop-establishment-registration",
    category: "Business License",
    keywords: ["shop establishment", "shop license"],
  },

  {
    title: "Professional Tax Registration",
    href: "/business/license/professional-tax-registration",
    category: "Business License",
    keywords: ["professional tax", "pt registration"],
  },

  /* =======================================================
     COMPLIANCE
  ======================================================= */

  {
    title: "Business Compliance",
    href: "/business/compliance",
    category: "Compliance",
    keywords: ["compliance", "business compliance"],
  },

  

  {
    title: "Appointment of Director",
    href: "/business/compliance/appointment-of-director",
    category: "Compliance",
    keywords: ["director appointment", "appoint director"],
  },

  {
    title: "Annual eKYC for Directors",
    href: "/business/compliance/annual-ekyc-for-directors",
    category: "Compliance",
    keywords: ["ekyc", "director kyc", "dir 3 kyc"],
  },

  {
    title: "Auditor Appointment",
    href: "/business/compliance/auditor-appointment",
    category: "Compliance",
    keywords: ["auditor"],
  },

  {
    title: "Board Resolution",
    href: "/business/compliance/board-resolution",
    category: "Compliance",
    keywords: ["board resolution"],
  },

  {
    title: "Change in Authorized Capital",
    href: "/business/compliance/change-in-authorized-capital",
    category: "Compliance",
    keywords: ["authorized capital", "capital change"],
  },

  {
    title: "Change in Business Objective",
    href: "/business/compliance/change-in-business-objective",
    category: "Compliance",
    keywords: ["business objective", "object change"],
  },

  {
    title: "Change in Registered Office Address",
    href: "/business/compliance/change-in-registered-office-address",
    category: "Compliance",
    keywords: ["registered office", "office address"],
  },

  {
    title: "Closure of LLP",
    href: "/business/compliance/closure-of-llp",
    category: "Compliance",
    keywords: ["close llp", "llp closure"],
  },

  {
    title: "Removal of Directors",
    href: "/business/compliance/removal-of-directors",
    category: "Compliance",
    keywords: ["remove director", "director removal"],
  },

  {
    title: "Company ROC Filing",
    href: "/business/compliance/company-roc-filing",
    category: "Compliance",
    keywords: ["roc", "roc filing", "company filing"],
  },

  /* =======================================================
     INCOME TAX
  ======================================================= */

  {
    title: "Income Tax Return Filing",
    href: "/itr/income-tax-return-filing",
    category: "Income Tax",
    keywords: ["itr", "income tax", "income tax return"],
  },

  {
    title: "Income Tax Filing in Chennai",
    href: "/itr/income-tax-filing-in-chennai",
    category: "Income Tax",
    keywords: ["itr chennai", "tax filing chennai"],
  },

  /* =======================================================
     TAXATION / GST
  ======================================================= */

  {
    title: "Taxation Services",
    href: "/taxation",
    category: "Taxation",
    keywords: ["tax", "taxation"],
  },

  {
    title: "GST Services",
    href: "/taxation/gst",
    category: "GST",
    keywords: ["gst"],
  },

  {
    title: "GST Registration",
    href: "/taxation/gst/gst-registration",
    category: "GST",
    keywords: ["gst registration", "new gst"],
  },

  {
    title: "GST Return Filing",
    href: "/taxation/gst/gst-return-filing",
    category: "GST",
    keywords: ["gst filing", "gst return"],
  },

  {
    title: "GST LUT Filing",
    href: "/taxation/gst/gst-lut-filing",
    category: "GST",
    keywords: ["lut", "gst lut"],
  },

  {
    title: "GST Annual Return Filing",
    href: "/taxation/gst/gst-annual-return-filing",
    category: "GST",
    keywords: ["gst annual return", "gstr 9"],
  },

  {
    title: "GST Notice Reply",
    href: "/taxation/gst/gst-notice-reply",
    category: "GST",
    keywords: ["gst notice", "notice reply"],
  },

  {
    title: "GST Advisory Services",
    href: "/taxation/gst/gst-advisory-services",
    category: "GST",
    keywords: ["gst advisory", "gst consultant"],
  },

  {
    title: "GST Registration Cancellation",
    href: "/taxation/gst/gst-registration-cancellation",
    category: "GST",
    keywords: ["gst cancellation", "cancel gst"],
  },

  {
    title: "GST Appeals",
    href: "/taxation/gst/gst-appeals",
    category: "GST",
    keywords: ["gst appeal", "appeal"],
  },

  {
    title: "GST Amendments",
    href: "/taxation/gst/gst-amendments",
    category: "GST",
    keywords: ["gst amendment", "gst change"],
  },

  {
    title: "GST Filing Chennai",
    href: "/taxation/gst/gst-filing-chennai",
    category: "GST",
    keywords: ["gst chennai", "gst filing chennai"],
  },

  /* =======================================================
     TAX FILING
  ======================================================= */

  {
    title: "Tax Filing Services",
    href: "/taxation/tax-filing",
    category: "Tax Filing",
    keywords: ["tax filing"],
  },

  {
    title: "PAN Services",
    href: "/taxation/tax-filing/pan-services",
    category: "Tax Filing",
    keywords: ["pan", "pan card"],
  },

  {
    title: "TAN Services",
    href: "/taxation/tax-filing/tan-services",
    category: "Tax Filing",
    keywords: ["tan"],
  },

  {
    title: "Accounting & Bookkeeping Services",
    href: "/taxation/tax-filing/accounting-bookkeeping-services",
    category: "Tax Filing",
    keywords: ["accounting", "bookkeeping", "books"],
  },

  {
    title: "TDS TCS Return Filing",
    href: "/taxation/tax-filing/tds-tcs-return-filing",
    category: "Tax Filing",
    keywords: ["tds", "tcs", "tds return"],
  },

  {
    title: "Capital Gains Tax Advisory",
    href: "/taxation/tax-filing/capital-gains-tax-advisory",
    category: "Tax Filing",
    keywords: ["capital gains", "capital gain tax"],
  },

  {
    title: "Tax Planning Advisory",
    href: "/taxation/tax-filing/tax-planning-advisory",
    category: "Tax Filing",
    keywords: ["tax planning", "tax advisory"],
  },

  {
    title: "ROC Filing Online",
    href: "/taxation/tax-filing/roc-filing-online",
    category: "Tax Filing",
    keywords: ["roc", "roc online"],
  },

  /* =======================================================
     LEGAL
  ======================================================= */

  {
    title: "Legal Services",
    href: "/legal",
    category: "Legal",
    keywords: ["legal"],
  },

  {
    title: "Intellectual Property",
    href: "/legal/ip",
    category: "Intellectual Property",
    keywords: ["ip", "intellectual property"],
  },

  {
    title: "Trademark Registration",
    href: "/legal/ip/trademark-registration",
    category: "Intellectual Property",
    keywords: ["trademark", "brand registration"],
  },

  {
    title: "Copyright Registration",
    href: "/legal/ip/copyright-registration",
    category: "Intellectual Property",
    keywords: ["copyright"],
  },

  {
    title: "Patent Registration",
    href: "/legal/ip/patent-registration",
    category: "Intellectual Property",
    keywords: ["patent"],
  },

  /* =======================================================
     CONTRACTS
  ======================================================= */

  {
    title: "Business Contracts",
    href: "/legal/contracts",
    category: "Legal Contracts",
    keywords: ["contract", "agreement"],
  },

  {
    title: "Franchise Agreement",
    href: "/legal/contracts/franchise-agreement",
    category: "Legal Contracts",
    keywords: ["franchise"],
  },

  {
    title: "Joint Venture Agreement",
    href: "/legal/contracts/joint-venture-agreement",
    category: "Legal Contracts",
    keywords: ["joint venture", "jv"],
  },

  {
    title: "MOU Agreement",
    href: "/legal/contracts/mou-agreement",
    category: "Legal Contracts",
    keywords: ["mou", "memorandum of understanding"],
  },

  {
    title: "Vendor Agreement",
    href: "/legal/contracts/vendor-agreement",
    category: "Legal Contracts",
    keywords: ["vendor agreement"],
  },

  {
    title: "Master Service Agreement",
    href: "/legal/contracts/master-service-agreement",
    category: "Legal Contracts",
    keywords: ["msa", "master service agreement"],
  },

  {
    title: "Service Level Agreement",
    href: "/legal/contracts/service-level-agreement",
    category: "Legal Contracts",
    keywords: ["sla", "service level agreement"],
  },

  {
    title: "Non Disclosure Agreement NDA",
    href: "/legal/contracts/non-disclosure-agreement-nda",
    category: "Legal Contracts",
    keywords: ["nda", "non disclosure"],
  },

  {
    title: "Business Contract",
    href: "/legal/contracts/business-contract",
    category: "Legal Contracts",
    keywords: ["business contract"],
  },

  {
    title: "Employment Agreement",
    href: "/legal/contracts/employment-agreement",
    category: "Legal Contracts",
    keywords: ["employment", "employee agreement"],
  },

  {
    title: "Power of Attorney",
    href: "/legal/contracts/power-of-attorney",
    category: "Legal Contracts",
    keywords: ["power of attorney", "poa"],
  },

  {
    title: "Shareholders Agreement",
    href: "/legal/contracts/shareholders-agreement",
    category: "Legal Contracts",
    keywords: ["shareholders", "shareholder agreement"],
  },

  {
    title: "Board Resolution Authorisation Letter",
    href: "/legal/contracts/board-resolution-authorisation-letter",
    category: "Legal Contracts",
    keywords: ["authorisation letter", "authorization letter"],
  },

  {
    title: "Legal Heir Certificate",
    href: "/legal/contracts/legal-heir-certificate",
    category: "Legal Contracts",
    keywords: ["legal heir"],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BusinessHero() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [typedPlaceholder, setTypedPlaceholder] = useState("Search");
  const [placeholderPhraseIndex, setPlaceholderPhraseIndex] = useState(0);
  const [placeholderDeleting, setPlaceholderDeleting] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  /* =======================================================
     CONTINUOUS SEARCH PLACEHOLDER TYPING
     - type phrase
     - short pause
     - delete phrase
     - move to next phrase
     - pauses on hover or while user has typed text
     - resumes after hover leaves if the input is empty
  ======================================================= */

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    if (searchHovered || query.length > 0) {
      return;
    }

    const currentPhrase =
      searchPlaceholderPhrases[placeholderPhraseIndex];

    const phraseComplete =
      !placeholderDeleting &&
      typedPlaceholder.length === currentPhrase.length;

    const phraseDeleted =
      placeholderDeleting && typedPlaceholder.length === 0;

    let delay = placeholderDeleting ? 36 : 72;

    if (phraseComplete) {
      delay = 1200;
    }

    if (phraseDeleted) {
      delay = 280;
    }

    const timeoutId = window.setTimeout(() => {
      if (phraseComplete) {
        setPlaceholderDeleting(true);
        return;
      }

      if (phraseDeleted) {
        setPlaceholderDeleting(false);
        setPlaceholderPhraseIndex(
          (current) =>
            (current + 1) % searchPlaceholderPhrases.length,
        );
        return;
      }

      if (placeholderDeleting) {
        setTypedPlaceholder((current) => current.slice(0, -1));
        return;
      }

      setTypedPlaceholder(
        currentPhrase.slice(0, typedPlaceholder.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [
    placeholderDeleting,
    placeholderPhraseIndex,
    query.length,
    reduceMotion,
    searchHovered,
    typedPlaceholder,
  ]);

  /* =======================================================
     FILTERING
  ======================================================= */

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    const normalizedValue = value.replace(/\s+/g, " ");

    return searchItems
      .map((item) => {
        const title = item.title.toLowerCase();
        const category = item.category.toLowerCase();
        const keywords = (item.keywords ?? []).join(" ").toLowerCase();
        const href = item.href.toLowerCase();

        let score = 0;

        if (title === normalizedValue) score += 120;
        if (title.startsWith(normalizedValue)) score += 75;
        if (title.includes(normalizedValue)) score += 55;
        if (keywords.includes(normalizedValue)) score += 45;
        if (category.includes(normalizedValue)) score += 30;
        if (href.includes(normalizedValue.replace(/\s+/g, "-"))) score += 15;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [query]);

  /* =======================================================
     CLICK OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigateToItem = (href: string) => {
    setSearchOpen(false);
    setActiveIndex(-1);
    router.push(href);
  };

  const submitSearch = () => {
    if (!query.trim()) {
      setSearchOpen(false);
      return;
    }

    if (activeIndex >= 0 && filteredItems[activeIndex]) {
      navigateToItem(filteredItems[activeIndex].href);
      return;
    }

    if (filteredItems[0]) {
      navigateToItem(filteredItems[0].href);
    }
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  const handleKeyboard = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSearchOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!filteredItems.length) {
      if (event.key === "Enter") {
        event.preventDefault();
        setSearchOpen(true);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSearchOpen(true);
      setActiveIndex((current) =>
        current >= filteredItems.length - 1 ? 0 : current + 1,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSearchOpen(true);
      setActiveIndex((current) =>
        current <= 0 ? filteredItems.length - 1 : current - 1,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };

  return (
    <section className="relative w-full bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="relative isolate mt-[78px] bg-white">
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1480px]
            flex-col
            items-center
            px-4
            pb-12
            pt-5
            text-center

            min-[420px]:px-5

            sm:px-6

            md:px-8

            lg:px-10

            xl:px-12
          "
        >
          {/* HERO CARD */}
          <motion.div
            variants={introContainer}
            initial={false}
            animate="visible"
            className="relative w-full overflow-hidden rounded-[26px] border border-[#E9E4DE] bg-[#F7E6D1] text-left shadow-[0_24px_70px_rgba(28,55,83,0.11)] sm:rounded-[30px] sm:bg-[#F5ECE4]"
          >
            <PremiumHeroBackdrop />

            <div className="relative z-10 flex flex-col items-start justify-center px-6 pb-8 pt-10 min-[420px]:px-8 sm:min-h-[420px] sm:w-[62%] sm:px-9 sm:py-11 lg:w-[59%] lg:px-14 xl:px-16">
              <motion.p
                variants={badgeReveal}
                className="font-body text-[10px] font-bold uppercase tracking-[0.18em] !text-[#142B4B] sm:text-[11px]"
              >
                Business &amp; Tax Services in Chennai
              </motion.p>

              <motion.h1
                variants={headlineReveal}
                className="mt-5 max-w-[690px] font-heading text-[33px] font-bold leading-[1.09] tracking-[-0.055em] !text-[#10233D] min-[420px]:text-[37px] sm:text-[40px] lg:text-[clamp(40px,3.3vw,48px)]"
              >
                Helping people to <span className="text-[#1766D6]">Start, Manage &amp; Grow</span> Their business successfully!
              </motion.h1>

              <motion.p
                variants={copyReveal}
                className="mt-5 max-w-[530px] font-body text-[15px] leading-7 !text-[#4D5B6C] sm:text-[16px] lg:text-[18px] lg:leading-8"
              >
                Expert help with company registration, GST, income tax and trademark registration.
              </motion.p>

              <motion.div variants={copyReveal} className="mt-7">
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-lg bg-[#1265DA] px-6 py-3 font-body text-[14px] font-semibold !text-white shadow-[0_10px_24px_rgba(18,101,218,0.22)] transition-colors hover:bg-[#0D54B9] sm:px-7"
                >
                  Talk to an Expert
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                variants={statsContainer}
                initial={false}
                animate="visible"
                className="mt-6 grid w-full max-w-[565px] grid-cols-3 border-t border-[#D8CFC4] pt-4 sm:mt-7"
                aria-label="Tax India Firm at a glance"
              >
                <StatItem value="5,760+" title="Clients Served" subtitle="Businesses & individuals" />
                <StatItem value="4.9 / 5" title="Google Rating" subtitle="Trusted client reviews" />
                <StatItem value="300+" title="Professional Services" subtitle="Tax, business & legal" />
              </motion.div>
            </div>

            <div className="relative h-[min(95vw,440px)] overflow-hidden bg-[#F7E6D1] sm:hidden">
              <Image
                src="/images/home-hero-blue-ribbon-mobile.webp"
                alt="Blue folded ribbon with a subtle Chennai architectural illustration"
                fill
                sizes="100vw"
                className="object-contain object-center [mask-image:linear-gradient(to_bottom,transparent,black_18%)]"
              />
            </div>

          </motion.div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <motion.div
            ref={searchContainerRef}
            variants={searchReveal}
            initial={false}
            animate="visible"
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
            className="relative z-50 mt-7 w-full max-w-[820px] md:mt-8 lg:mt-8"
          >
            <div
              className="
                flex
                min-h-[60px]
                w-full
                items-center
                overflow-hidden
                rounded-[20px]
                border
                border-[#D7DEE8]
                bg-white/[0.97]
                p-[5px]
                shadow-[0_12px_35px_rgba(18,49,81,0.09)]

                sm:min-h-[68px]
                sm:rounded-full
                sm:p-[6px]

                lg:min-h-[64px]
              "
            >
              <div
                className="
                  ml-0.5
                  flex
                  h-[44px]
                  w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E2F0FB]
                  bg-[#F1F8FE]
                  text-[#096DC1]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

                  sm:ml-1
                  sm:h-[48px]
                  sm:w-[48px]
                "
              >
                <SearchIcon className="h-5 w-5" />
              </div>

              <input
                type="text"
                value={query}
                placeholder={reduceMotion ? "Search any service..." : typedPlaceholder}
                autoComplete="off"
                spellCheck={false}
                aria-label="Search services"
                onChange={(event) => {
                  const value = event.target.value;
                  setQuery(value);
                  setActiveIndex(-1);
                  setSearchOpen(Boolean(value.trim()));
                }}
                onFocus={() => {
                  if (query.trim()) setSearchOpen(true);
                }}
                onKeyDown={handleKeyboard}
                className="
                  h-[50px]
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  font-body
                  text-[14px]
                  font-medium
                  text-[#173C5A]
                  outline-none
                  placeholder:font-normal
                  placeholder:text-[#8A9AAA]

                  sm:h-[52px]
                  sm:px-4
                  sm:text-[15px]
                "
              />

              {query.length > 0 && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    setSearchOpen(false);
                    setActiveIndex(-1);
                  }}
                  className="
                    mr-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[#7890A4]
                    transition-colors
                    duration-200
                    hover:bg-[#F0F5F9]
                    hover:text-[#164F7E]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#1681D8]/30
                  "
                >
                  <CloseIcon className="h-[17px] w-[17px]" />
                </button>
              )}

              <button
                type="button"
                onClick={submitSearch}
                aria-label="Search services"
                className="
                  hidden
                  h-[50px]
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[linear-gradient(135deg,#0B7BDD_0%,#0864C2_100%)]
                  px-7
                  font-body
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-[0_12px_28px_rgba(5,91,176,0.26)]
                  transition-[background-color,transform]
                  duration-300
                  hover:-translate-y-[1px]
                  hover:bg-[#0865B0]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#1681D8]/30
                  focus-visible:ring-offset-2

                  sm:flex
                "
              >
                Search Services
                <ArrowRightIcon className="h-[16px] w-[16px]" />
              </button>

              <button
                type="button"
                onClick={submitSearch}
                aria-label="Search services"
                className="
                  mr-0.5
                  flex
                  h-[44px]
                  w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0A74C9]
                  text-white
                  transition-colors
                  duration-200
                  active:bg-[#0865B0]

                  sm:hidden
                "
              >
                <ArrowRightIcon className="h-[18px] w-[18px]" />
              </button>
            </div>

            {/* SEARCH RESULT DROPDOWN */}

            <AnimatePresence>
              {searchOpen && query.trim().length > 0 && (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: -6, scale: 0.995 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -5, scale: 0.997 }
                  }
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.28,
                    ease: EASE,
                  }}
                  className="
                    absolute
                    left-0
                    right-0
                    top-[calc(100%+10px)]
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#DFE8F0]
                    bg-white
                    text-left
                    shadow-[0_24px_60px_rgba(15,45,72,0.18)]

                    sm:rounded-[20px]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#EDF1F5]
                      px-4
                      py-3

                      sm:px-5
                    "
                  >
                    <span
                      className="
                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#8191A1]

                        sm:text-[11px]
                      "
                    >
                      Suggested Services
                    </span>

                    <span className="font-body text-[10px] text-[#9AA8B5] sm:text-[11px]">
                      {filteredItems.length}{" "}
                      {filteredItems.length === 1 ? "result" : "results"}
                    </span>
                  </div>

                  <div
                    className="
                      max-h-[min(360px,82vh)]
                      overflow-y-auto
                      overscroll-contain
                      p-2
                      [-webkit-overflow-scrolling:touch]

                      sm:p-2.5

                      [&::-webkit-scrollbar]:w-[6px]
                      [&::-webkit-scrollbar-track]:bg-transparent
                      [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-[#D4DEE7]
                    "
                  >
                    {filteredItems.length > 0 ? (
                      <div className="space-y-1">
                        {filteredItems.map((item, index) => {
                          const active = activeIndex === index;

                          return (
                            <Link
                              href={item.href}
                              key={item.href}
                              onMouseEnter={() => setActiveIndex(index)}
                              onClick={() => setSearchOpen(false)}
                              className={`
                                group
                                flex
                                min-h-[60px]
                                items-center
                                gap-3
                                rounded-[13px]
                                px-3
                                py-2.5
                                transition-colors
                                duration-200

                                ${
                                  active
                                    ? "bg-[#F0F7FD]"
                                    : "hover:bg-[#F7FAFC]"
                                }
                              `}
                            >
                              <span
                                className="
                                  flex
                                  h-[40px]
                                  w-[40px]
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-[12px]
                                  bg-[#EDF7FF]
                                  text-[#0972C8]
                                "
                              >
                                <DocumentSearchIcon className="h-[18px] w-[18px]" />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span
                                  className="
                                    block
                                    truncate
                                    font-heading
                                    text-[13px]
                                    font-semibold
                                    text-[#173B59]

                                    sm:text-[14px]
                                  "
                                >
                                  {item.title}
                                </span>

                                <span className="mt-1 block truncate font-body text-[10px] text-[#8798A8] sm:hidden">
                                  {item.category}
                                </span>

                                <span
                                  className="
                                    mt-1
                                    hidden
                                    truncate
                                    font-body
                                    text-[11px]
                                    text-[#8798A8]

                                    sm:block
                                  "
                                >
                                  {item.category}
                                </span>
                              </span>

                              <span
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  text-[#99A8B6]
                                  transition-all
                                  duration-200
                                  group-hover:translate-x-[2px]
                                  group-hover:bg-white
                                  group-hover:text-[#0870C4]
                                "
                              >
                                <ArrowRightIcon className="h-[15px] w-[15px]" />
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="px-4 py-8 text-center sm:px-5">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F7FB] text-[#6C879D]">
                          <SearchIcon className="h-5 w-5" />
                        </div>

                        <p className="mt-3 font-heading text-[14px] font-semibold text-[#234761]">
                          No matching service
                        </p>

                        <p className="mx-auto mt-1 max-w-[280px] font-body text-[11px] leading-5 text-[#8494A2]">
                          Try GST, LLP, trademark, ITR, FSSAI or company registration.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            variants={chipsContainer}
            initial={false}
            animate="visible"
            className="
              mt-5
              grid
              w-full
              max-w-[1160px]
              grid-cols-2
              gap-2.5

              sm:grid-cols-4
              sm:gap-3
            "
          >
            <QuickLink
              href="/business/registration"
              label="Start a business"
              icon={<Building2 size={20} strokeWidth={1.8} />}
            />

            <QuickLink
              href="/taxation/gst"
              label="Get GST support"
              icon={<Layers3 size={20} strokeWidth={1.8} />}
            />

            <QuickLink
              href="/itr/income-tax-return-filing"
              label="File your income tax"
              icon={<FileText size={20} strokeWidth={1.8} />}
            />

            <QuickLink
              href="/legal/ip"
              label="Protect your brand"
              icon={<ShieldCheck size={20} strokeWidth={1.8} />}
            />
          </motion.div>

          {/* ===============================================
              SUPPORT LINE
          =============================================== */}

          <motion.div
            variants={supportReveal}
            initial={false}
            animate="visible"
            className="
              mt-4
              flex
              w-auto
              max-w-[680px]
              items-start
              justify-center
              gap-2
              rounded-full
              border
              border-[#DCE6F2]
              bg-[#F4F8FD]
              px-3.5
              py-1.5
              text-center
              backdrop-blur-[6px]
              font-body
              text-[11px]
              font-medium
              leading-5
              !text-[#476582]

              sm:items-center
              sm:text-[12px]
            "
          >
            <SparkIcon className="mt-[3px] h-[13px] w-[13px] shrink-0 !text-[#1766D6] sm:mt-0" />
            <span>
              Registration, Taxation, Compliance & Legal Support . All in One Place .
            </span>
          </motion.div>

        </div>
      </div>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <div
        className="
          bg-[#F7FAFC]
          px-4
          py-14

          sm:px-6
          sm:py-18

          md:px-8
          md:py-20

          lg:px-10
          lg:py-14
        "
      >
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            variants={sectionIntro}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
            className="mx-auto max-w-[760px] text-center"
          >
            <motion.div
              variants={sectionReveal}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#DCEBF7]
                bg-white
                px-3.5
                py-2
                font-body
                text-[11px]
                font-semibold
                 text-[#2563EB]
                shadow-[0_5px_16px_rgba(21,86,133,0.04)]

                sm:text-[12px]
              "
            >
              <ShieldCheckIcon className="h-[15px] w-[15px]" />
              Why Businesses Choose Us
            </motion.div>

            <motion.h2
              variants={sectionReveal}
              className="
                mt-5
                font-heading
                text-[28px]
                font-bold
                leading-[1.18]
                tracking-[-0.03em]
                text-[#173A56]

                min-[420px]:text-[31px]

                sm:text-[36px]

                md:text-[40px]

                lg:text-[44px]
              "
            >
              Simple, dependable support for your business
            </motion.h2>

          </motion.div>

          <motion.div
            variants={benefitContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
            className="
              mt-9
              grid
              grid-cols-1
              overflow-hidden
              rounded-[24px]
              border
              border-[#D6E5F0]
              bg-white
              shadow-[0_14px_38px_rgba(20,65,98,0.07)]
              transition-[border-color,box-shadow]
              duration-500
              ease-out
              hover:border-[#A9D2ED]
              hover:shadow-[0_18px_48px_rgba(20,65,98,0.10)]

              min-[520px]:grid-cols-2

              lg:mt-10

              xl:grid-cols-4
            "
          >
            <BenefitItem
              index={0}
              icon={<CompassIcon className="h-[21px] w-[21px]" />}
              title="Expertise"
              description="Strategically navigate business regulations."
              variant="rise"
              reduceMotion={reduceMotion}
            />

            <BenefitItem
              index={1}
              icon={<HeadsetIcon className="h-[21px] w-[21px]" />}
              title="Dedicated Support"
              description="Personalized client support at every stage of Business."
              variant="scale"
              reduceMotion={reduceMotion}
            />

            <BenefitItem
              index={2}
              icon={<WalletIcon className="h-[21px] w-[21px]" />}
              title="Affordable Fee"
              description="High-Quality Professional Services at affordable fee."
              variant="rise"
              reduceMotion={reduceMotion}
            />

            <BenefitItem
              index={3}
              icon={<ClockIcon className="h-[21px] w-[21px]" />}
              title="On-Time Response"
              description="Timely and Efficient Solutions for Business needs."
              variant="scale"
              reduceMotion={reduceMotion}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESPONSIVE HERO ARTWORK
========================================================= */

function PremiumHeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
      <Image
        src="/images/home-hero-blue-ribbon-desktop.webp"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 1400px"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE4]/65 via-[#F5ECE4]/25 to-transparent lg:from-[#F5ECE4]/10 lg:via-transparent" />
    </div>
  );
}

/* =========================================================
   QUICK LINK
========================================================= */

function QuickLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <motion.div variants={chipReveal} className="min-w-0">
      <Link
        href={href}
        className="
          group
          flex
          min-h-[68px]
          w-full
          items-center
          gap-3
          rounded-2xl
          border
          border-[#E1E8F1]
          bg-[#F8FAFD]
          px-3.5
          py-3
          text-left
          font-body
          text-[11px]
          font-semibold
          leading-4
          !text-[#10233D]
          transition-[border-color,background-color,box-shadow,transform]
          duration-300
          hover:-translate-y-1
          hover:border-[#BBD3F4]
          hover:bg-white
          hover:shadow-[0_12px_25px_rgba(18,49,81,0.09)]

          min-[420px]:text-[12px]
          lg:min-h-[74px]
        "
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1766D6]">
          {icon}
        </span>
        <span className="min-w-0 flex-1">{label}</span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-[#1766D6] transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({
  value,
  title,
  subtitle,
}: {
  value: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={statReveal}
      className="flex min-w-0 flex-col justify-start border-r border-[#D8CFC4] px-2 text-left first:pl-0 last:border-r-0 last:pr-0 sm:px-4"
    >
      <strong className="font-heading text-[18px] leading-tight !text-[#10233D] min-[420px]:text-[20px] sm:text-[24px]">{value}</strong>
      <span className="mt-1 font-body text-[10px] font-semibold leading-tight !text-[#10233D] min-[420px]:text-[11px] sm:text-[12px]">{title}</span>
      <span className="mt-1 font-body text-[9px] leading-tight !text-[#53657B] sm:text-[10px]">{subtitle}</span>
    </motion.div>
  );
}

/* =========================================================
   BENEFIT ITEM
========================================================= */

function BenefitItem({
  index,
  icon,
  title,
  description,
  variant,
  reduceMotion,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  variant: "rise" | "scale";
  reduceMotion: boolean | null;
}) {
  const variants = variant === "scale" ? benefitSoftScale : benefitRise;

  const dividerClass =
    index === 0
      ? "border-b border-[#E2EAF1] min-[520px]:border-r xl:border-b-0"
      : index === 1
        ? "border-b border-[#E2EAF1] xl:border-r xl:border-b-0"
        : index === 2
          ? "border-b border-[#E2EAF1] min-[520px]:border-r min-[520px]:border-b-0 xl:border-r"
          : "";

  return (
    <motion.article
      variants={variants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -1,
              transition: { duration: 0.34, ease: EASE },
            }
      }
      className={`
        group
        relative
        isolate
        flex
        min-h-[112px]
        w-full
        items-center
        gap-4
        overflow-hidden
        bg-white
        px-5
        py-5
        transition-[background-color]
        duration-500
        ease-out
        hover:bg-[#F8FCFF]

        after:pointer-events-none
        after:absolute
        after:inset-[6px]
        after:rounded-[17px]
        after:border
        after:border-transparent
        after:transition-[border-color,box-shadow]
        after:duration-500
        after:ease-out
        hover:after:border-[#8FC8EE]
        hover:after:shadow-[0_7px_22px_rgba(11,114,197,0.08)]

        sm:min-h-[126px]
        sm:px-6
        sm:py-6

        lg:px-7

        xl:min-h-[124px]
        xl:px-6

        ${dividerClass}
      `}
    >
      {/* Desktop hover image only.
          Hidden below lg so touch/mobile UI remains simple and predictable. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          hidden
          bg-cover
          bg-center
          opacity-0
          scale-[1.06]
          transition-[opacity,transform]
          duration-700
          ease-out

          lg:block
          lg:group-hover:scale-100
          lg:group-hover:opacity-100
        "
        style={{
          backgroundImage: `url("${benefitHoverImages[index]}")`,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          bg-[linear-gradient(90deg,rgba(5,38,68,0.84)_0%,rgba(8,77,127,0.52)_58%,rgba(10,114,197,0.48)_100%)]
          opacity-0
          transition-opacity
          duration-700
          ease-out

          lg:block
          lg:group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          z-10
          flex
          h-[48px]
          w-[48px]
          shrink-0
          items-center
          justify-center
          rounded-[14px]
          border
          border-[#DCEBF6]
          bg-[#EEF7FD]
          text-[#0B72C5]
          transition-[background-color,border-color,color,transform,box-shadow]
          duration-500
          ease-out

          group-hover:-translate-y-[2px]
          group-hover:border-[#B8DDF4]
          group-hover:bg-[#E5F4FE]
          group-hover:text-[#0866B2]
          group-hover:shadow-[0_7px_18px_rgba(11,114,197,0.10)]

          lg:group-hover:border-white/30
          lg:group-hover:bg-white/15
          lg:group-hover:text-white
          lg:group-hover:shadow-none
        "
      >
        {icon}
      </div>

      <div className="relative z-10 min-w-0 flex-1">
        <h3
          className="
            font-heading
            text-[15px]
            font-bold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#173A56]
            transition-colors
            duration-500
            group-hover:text-[#0A68B5]

            sm:text-[16px]

            lg:group-hover:!text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            max-w-[245px]
            font-body
            text-[12px]
            leading-[1.65]
            text-[#687F90]
            transition-colors
            duration-500
            group-hover:text-[#526F84]

            sm:text-[13px]

            lg:group-hover:text-white/80
          "
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SVG ICONS
========================================================= */

function SearchIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.4 16.3 19.1 12 21C7.7 19.1 5 15.4 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12L10.8 14.3L15.6 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3L13.6 8.4L19 10L13.6 11.6L12 17L10.4 11.6L5 10L10.4 8.4L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DocumentSearchIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 3H15L19 7V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M15 3V7H19"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 21H6V3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="16"
        cy="16"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M18.2 18.2L21 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompassIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M15.4 8.6L13.3 13.3L8.6 15.4L10.7 10.7L15.4 8.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadsetIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M4 12V16C4 17.1 4.9 18 6 18H7V12H4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M20 12V16C20 17.1 19.1 18 18 18H17V12H20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M17 18C16.5 19.5 15.2 20 13.5 20H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WalletIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7H18C19.1 7 20 7.9 20 9V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M4 8L16 4V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M16 12H21V16H16C14.9 16 14 15.1 14 14C14 12.9 14.9 12 16 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
