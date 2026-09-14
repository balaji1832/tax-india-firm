"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Calculator,
  FileCheck2,
  Landmark,
  ReceiptText,
  Scale,
  ShieldCheck,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ServiceItem = {
  title: string;
  category: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

/* =========================================================
   DATA
========================================================= */

const services: ServiceItem[] = [
  {
    title: "Company Registration",
    category: "Business Setup",
    description:
      "Private Limited, LLP, OPC and other business registrations handled from documentation to final approval.",
    cta: "Register Company",
    href: "/business/registration",
    image: "/images/company-registration.png",
    icon: Building2,
    accent: "#1766D6",
    soft: "#EDF5FF",
  },
  {
    title: "Business License",
    category: "Licensing",
    description:
      "FSSAI, MSME, IEC, DSC and other essential licences with complete documentation and filing support.",
    cta: "Get Licensed",
    href: "/business/license",
    image: "/images/business-license.png",
    icon: FileCheck2,
    accent: "#0A7C88",
    soft: "#ECF9FA",
  },
  {
    title: "Company Compliance",
    category: "ROC & MCA",
    description:
      "ROC filings, MCA requirements, annual compliance, eKYC and statutory obligations managed by professionals.",
    cta: "Stay Compliant",
    href: "/business/compliance",
    image: "/images/company-compliance.png",
    icon: ShieldCheck,
    accent: "#5A63D8",
    soft: "#F0F1FF",
  },
  {
    title: "GST Registration",
    category: "GST Services",
    description:
      "GST registration, returns, LUT, notices and ongoing advisory for smooth and compliant operations.",
    cta: "Manage GST",
    href: "/taxation/gst",
    image: "/images/gst-registration.png",
    icon: ReceiptText,
    accent: "#2369D8",
    soft: "#EEF5FF",
  },
  {
    title: "Income Tax Filing",
    category: "Income Tax",
    description:
      "Accurate ITR filing for individuals, professionals and businesses with expert review before submission.",
    cta: "File ITR",
    href: "/itr/income-tax-return-filing",
    image: "/images/income-tax.png",
    icon: Calculator,
    accent: "#8059CF",
    soft: "#F5F0FF",
  },
  {
    title: "Tax & Accounting",
    category: "Finance Support",
    description:
      "TDS, bookkeeping, PAN, TAN and year-round accounting and tax advisory for organised business finances.",
    cta: "Explore Tax Services",
    href: "/taxation/tax-filing",
    image: "/images/tax-accounting.png",
    icon: WalletCards,
    accent: "#14755F",
    soft: "#EEF9F5",
  },
  {
    title: "IP Registration",
    category: "Brand Protection",
    description:
      "Trademark, copyright and patent registration support to protect your business identity and intellectual property.",
    cta: "Protect Your Brand",
    href: "/legal/ip",
    image: "/images/ip-registration.png",
    icon: Landmark,
    accent: "#C66D1A",
    soft: "#FFF5E9",
  },
  {
    title: "Legal Contracts",
    category: "Legal Services",
    description:
      "Professional drafting of NDAs, MOUs, employment contracts and commercial agreements for your business.",
    cta: "Draft Contracts",
    href: "/legal/contracts",
    image: "/images/legal-contracts.png",
    icon: Scale,
    accent: "#A14E77",
    soft: "#FFF1F7",
  },
];

/* =========================================================
   MOTION
========================================================= */

const ease = [0.16, 1, 0.3, 1] as const;

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEBFF]/55 blur-[120px]" />
        <div className="absolute -left-[180px] top-[36%] h-[380px] w-[380px] rounded-full bg-[#E9F2FF]/70 blur-[115px]" />
        <div className="absolute -right-[180px] bottom-[8%] h-[380px] w-[380px] rounded-full bg-[#EEF0FF]/70 blur-[115px]" />

        <div
          className="
            absolute inset-0 opacity-[0.24]
            [background-image:linear-gradient(rgba(36,84,140,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(36,84,140,0.05)_1px,transparent_1px)]
            [background-size:54px_54px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D3E3F5] bg-white/90 px-4 py-2 shadow-[0_10px_30px_-22px_rgba(23,102,214,.38)] backdrop-blur-xl">
              <span className="h-[7px] w-[7px] rounded-full bg-[#1766D6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#1766D6] sm:text-[11px]">
                300+ Professional Services
              </span>
            </div>

            <h2 className="mt-5 max-w-[800px] pt-2 text-[38px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0B2A4C] sm:text-[46px] md:text-[54px] lg:text-[60px]">
              One place for every{" "}
              <span className="text-[#1766D6]">business essential.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:justify-self-end"
          >
            <p className="max-w-[560px] text-[14px] leading-7 text-[#647991] sm:text-[15px] lg:text-[16px]">
              Setup, licensing, tax, compliance and legal work — managed by
              experienced professionals with clear timelines and end-to-end support.
            </p>

            <Link
              href="/contact-us"
              className="
                group mt-5 inline-flex items-center gap-2.5
                text-[13px] font-semibold text-[#0B2A4C]
                sm:text-[14px]
              "
            >
              Need help choosing?
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#CBDCEB] bg-white text-[#1766D6] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#1766D6] group-hover:bg-[#1766D6] group-hover:text-white">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            PREMIUM SERVICE INDEX
        ===================================================== */}

        <motion.div
          variants={reduceMotion ? undefined : listVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.06 }}
          className="
            mt-12
            overflow-hidden
            rounded-[30px]
            border border-[#D9E4F0]
            bg-white/82
            shadow-[0_30px_90px_-58px_rgba(17,58,105,.34)]
            backdrop-blur-xl
            sm:mt-14
          "
        >
          {services.map((service, index) => (
            <ServiceRow
              key={service.href}
              service={service}
              index={index}
              last={index === services.length - 1}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM INFO BAR
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            mt-7
            flex
            flex-col
            gap-4
            rounded-[22px]
            border border-[#DCE6F2]
            bg-white/70
            px-5 py-4
            shadow-[0_18px_50px_-40px_rgba(20,63,110,.28)]
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-[#74869A] sm:text-[12px]">
            <span>✓ Clear documentation</span>
            <span>✓ Professional filing</span>
            <span>✓ End-to-end support</span>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#1766D6] sm:text-[13px]"
          >
            View all services
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE ROW
========================================================= */

function ServiceRow({
  service,
  index,
  last,
  reduceMotion,
}: {
  service: ServiceItem;
  index: number;
  last: boolean;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={reduceMotion ? undefined : rowVariants}
      className={`
        group
        relative
        overflow-hidden
        transition-colors
        duration-500

        hover:bg-[#FBFDFF]

        ${last ? "" : "border-b border-[#E4EAF1]"}
      `}
    >
      {/* HOVER ACCENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          w-[3px]
          scale-y-0
          origin-center
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
        style={{ backgroundColor: service.accent }}
      />

      {/* HOVER GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-[180px]
          w-[180px]
          -translate-y-1/2
          rounded-full
          opacity-0
          blur-[65px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{ backgroundColor: service.soft }}
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-[auto_minmax(0,1fr)_auto]
          items-center
          gap-4
          px-5
          py-5

          sm:gap-5
          sm:px-6
          sm:py-6

          md:grid-cols-[58px_1fr_1.2fr_auto]

          lg:grid-cols-[70px_1.05fr_1.35fr_210px_48px]
          lg:gap-7
          lg:px-8
          lg:py-5
        "
      >
        {/* NUMBER */}
        <div className="hidden text-[11px] font-semibold tracking-[0.15em] text-[#A1ADBA] md:block">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* TITLE BLOCK */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-[14px] border
              shadow-[0_10px_24px_-18px_rgba(20,50,90,.30)]
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              backgroundColor: service.soft,
              borderColor: `${service.accent}22`,
              color: service.accent,
            }}
          >
            <Icon size={19} strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <p
              className="text-[9px] font-bold uppercase tracking-[0.15em] sm:text-[9.5px]"
              style={{ color: service.accent }}
            >
              {service.category}
            </p>

            <h3 className="mt-1 truncate text-[18px] font-semibold tracking-[-0.03em] text-[#102A45] sm:text-[20px] lg:text-[21px]">
              {service.title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="hidden text-[12px] leading-[1.65] text-[#6D8095] md:block lg:text-[13px]">
          {service.description}
        </p>

        {/* IMAGE */}
        <div className="hidden lg:block">
          <div className="relative h-[86px] w-[190px] overflow-hidden rounded-[16px] bg-[#EDF3F9]">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              draggable={false}
              className="
                h-full w-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-[1.07]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* ARROW */}
        <Link
          href={service.href}
          aria-label={service.cta}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border border-[#D1DDE9]
            bg-white
            text-[#1766D6]
            shadow-[0_8px_20px_-16px_rgba(17,58,105,.28)]
            transition-all duration-300

            group-hover:translate-x-1
            group-hover:border-[#1766D6]
            group-hover:bg-[#1766D6]
            group-hover:text-white
          "
        >
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {/* MOBILE DESCRIPTION + CTA */}
      <div className="relative z-10 px-5 pb-5 md:hidden">
        <p className="text-[12.5px] leading-[1.65] text-[#6D8095]">
          {service.description}
        </p>

        <Link
          href={service.href}
          className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold"
          style={{ color: service.accent }}
        >
          {service.cta}
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.article>
  );
}
