"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
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

type ServiceItem = {
  title: string;
  category: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const services: ServiceItem[] = [
  {
    title: "Company Registration",
    category: "Business Setup",
    description: "Private Limited, LLP, OPC and other business registrations handled from documentation to final approval.",
    cta: "Register Company",
    href: "/business/registration",
    icon: Building2,
    accent: "#1766D6",
    soft: "#EDF5FF",
  },
  {
    title: "Business License",
    category: "Licensing",
    description: "FSSAI, MSME, IEC, DSC and other essential licences with complete documentation and filing support.",
    cta: "Get Licensed",
    href: "/business/license",
    icon: FileCheck2,
    accent: "#0A7C88",
    soft: "#ECF9FA",
  },
  {
    title: "Company Compliance",
    category: "ROC & MCA",
    description: "ROC filings, MCA requirements, annual compliance, eKYC and statutory obligations managed by professionals.",
    cta: "Stay Compliant",
    href: "/business/compliance",
    icon: ShieldCheck,
    accent: "#5A63D8",
    soft: "#F0F1FF",
  },
  {
    title: "GST Registration",
    category: "GST Services",
    description: "GST registration, returns, LUT, notices and ongoing advisory for smooth and compliant operations.",
    cta: "Manage GST",
    href: "/taxation/gst",
    icon: ReceiptText,
    accent: "#2369D8",
    soft: "#EEF5FF",
  },
  {
    title: "Income Tax Filing",
    category: "Income Tax",
    description: "Accurate ITR filing for individuals, professionals and businesses with expert review before submission.",
    cta: "File ITR",
    href: "/itr/income-tax-return-filing",
    icon: Calculator,
    accent: "#8059CF",
    soft: "#F5F0FF",
  },
  {
    title: "Tax & Accounting",
    category: "Finance Support",
    description: "TDS, bookkeeping, PAN, TAN and year-round accounting and tax advisory for organised business finances.",
    cta: "Explore Tax Services",
    href: "/taxation/tax-filing",
    icon: WalletCards,
    accent: "#14755F",
    soft: "#EEF9F5",
  },
  {
    title: "IP Registration",
    category: "Brand Protection",
    description: "Trademark, copyright and patent registration support to protect your business identity and intellectual property.",
    cta: "Protect Your Brand",
    href: "/legal/ip",
    icon: Landmark,
    accent: "#C66D1A",
    soft: "#FFF5E9",
  },
  {
    title: "Legal Contracts",
    category: "Legal Services",
    description: "Professional drafting of NDAs, MOUs, employment contracts and commercial agreements for your business.",
    cta: "Draft Contracts",
    href: "/legal/contracts",
    icon: Scale,
    accent: "#A14E77",
    soft: "#FFF1F7",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ServiceDetails({ service, index, compact = false }: {
  service: ServiceItem;
  index: number;
  compact?: boolean;
}) {
  const Icon = service.icon;

  return (
    <div className={`relative flex h-full flex-col justify-between overflow-hidden bg-[#123453] text-white ${compact ? "min-h-[370px] p-6 sm:p-7" : "p-8 xl:p-10"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/[0.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-4 h-48 w-48 rounded-full bg-[#2C6FB0]/15 blur-3xl" />

      <div className="relative flex items-start justify-between gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#9DCDFF]">
          <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B9D8F7]">
          {service.category}
        </span>
      </div>

      <div className="relative mt-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#91C4FF]">
          {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </p>
        <h3 className={`mt-3 max-w-[550px] font-heading font-semibold tracking-[-0.045em] !text-white ${compact ? "text-[28px] leading-[1.08] sm:text-[30px]" : "text-[36px] leading-[1.05] xl:text-[42px]"}`}>
          {service.title}
        </h3>
        <p className="mt-4 max-w-[570px] text-[14px] leading-7 text-[#C9DDF0] sm:text-[15px]">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="group mt-7 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 py-2 text-[13px] font-semibold !text-[#123453] transition-colors hover:bg-[#DFEDFF]"
        >
          {service.cta}
          <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveSlides = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const visible = window.matchMedia("(min-width: 640px)").matches ? 2 : 1;
    const lastStart = services.length - visible;
    const currentPage = Math.floor(slideIndex / visible);
    const nextPage = (currentPage + direction + Math.ceil(services.length / visible)) % Math.ceil(services.length / visible);
    const next = Math.min(nextPage * visible, lastStart);
    const target = track.children[next] as HTMLElement | undefined;
    if (!target) return;
    setSlideIndex(next);
    track.scrollTo({ left: target.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const updateSlideIndex = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    setSlideIndex(Math.round(track.scrollLeft / (first.offsetWidth + gap)));
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-[900px] text-center"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#1766D6] sm:text-[11px]">
            <span className="h-px w-7 bg-[#1766D6]" />
            300+ Professional Services
            <span className="h-px w-7 bg-[#1766D6]" />
          </div>
          <h2 className="mt-5 font-heading text-[38px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#0B2A4C] sm:text-[45px] md:text-[49px] lg:text-[50px]">
            Our <span className="text-[#1766D6]">Services</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 text-[#647991] sm:text-[16px]">
            One place for every business essential.
          </p>
          <Link href="/contact-us" className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B2A4C] hover:text-[#1766D6]">
            Need help choosing?
            <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 hidden h-[420px] overflow-hidden rounded-[30px] border border-[#D9E4F0] shadow-[0_30px_80px_-50px_rgba(17,58,105,.32)] lg:flex">
          {services.map((service, index) => {
            const Icon = service.icon;
            const active = index === activeIndex;
            return (
              <article
                key={service.href}
                className={`relative min-w-0 overflow-hidden border-r border-[#DCE6F0] transition-[flex-grow] duration-500 ease-out last:border-r-0 ${active ? "bg-[#123453]" : "bg-white hover:bg-[#F7FAFF]"}`}
                style={{ flexGrow: active ? 5 : 1, flexBasis: 0 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {active ? (
                  <ServiceDetails service={service} index={index} />
                ) : (
                  <button
                    type="button"
                    aria-label={`Show ${service.title}`}
                    onClick={() => setActiveIndex(index)}
                    className="flex h-full w-full flex-col items-center justify-between gap-5 px-2 py-7 text-[#173C60] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1766D6]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ color: service.accent, backgroundColor: service.soft }}>
                      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[14px] font-semibold leading-5" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                      {service.title}
                    </span>
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D9E4F0] text-[#1766D6]">
                      <ArrowUpRight size={15} />
                    </span>
                  </button>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 lg:hidden">
          <div
            ref={trackRef}
            onScroll={updateSlideIndex}
            className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-[26px] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Professional services"
          >
            {services.map((service, index) => (
              <article
                key={service.href}
                className="w-full shrink-0 snap-start overflow-hidden rounded-[24px] border border-[#D9E4F0] shadow-[0_18px_48px_-35px_rgba(17,58,105,.38)] sm:w-[calc(50%_-_0.5rem)]"
              >
                <ServiceDetails service={service} index={index} compact />
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-[#6D8095]">
              <span className="sm:hidden">{String(slideIndex + 1).padStart(2, "0")}</span>
              <span className="hidden sm:inline">{String(Math.floor(slideIndex / 2) * 2 + 1).padStart(2, "0")}–{String(Math.min(Math.floor(slideIndex / 2) * 2 + 2, services.length)).padStart(2, "0")}</span>
              <span className="mx-2 text-[#B8C8D8]">/</span>
              {String(services.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => moveSlides(-1)} aria-label="Previous services" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E4F0] bg-white text-[#1766D6] transition-colors hover:bg-[#EDF5FF]">
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => moveSlides(1)} aria-label="Next services" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1766D6] text-white transition-colors hover:bg-[#1055B6]">
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 rounded-[22px] border border-[#DCE6F2] bg-[#F7FAFF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-[#74869A] sm:text-[12px]">
            <span>✓ Clear documentation</span>
            <span>✓ Professional filing</span>
            <span>✓ End-to-end support</span>
          </div>
          <Link href="/contact-us" className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#1766D6] sm:text-[13px]">
            View all services <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
