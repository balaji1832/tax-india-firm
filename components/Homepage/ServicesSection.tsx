"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ComponentType, SVGProps } from "react";

/* =========================================================
   TYPES
========================================================= */

type GlyphProps = SVGProps<SVGSVGElement>;

type ServiceItem = {
  title: string;
  description: string;
  cta: string;
  href: string;
  glyph: ComponentType<GlyphProps>;
};

/* =========================================================
   SERVICES
========================================================= */

const services: ServiceItem[] = [
  {
    title: "Company Registration in Chennai",
    description:
      "Pvt Ltd, LLP, OPC and business registrations handled end-to-end.",
    cta: "Register Company",
    href: "/business/registration",
    glyph: CompanyGlyph,
  },
  {
    title: "Business License Registration",
    description:
      "FSSAI, MSME, IEC, DSC and essential licences for your business.",
    cta: "Get Licensed",
    href: "/business/license",
    glyph: LicenseGlyph,
  },
  {
    title: "Company Compliance & ROC Filing",
    description:
      "ROC, MCA, eKYC and ongoing compliance managed on time.",
    cta: "Stay Compliant",
    href: "/business/compliance",
    glyph: ComplianceGlyph,
  },
  {
    title: "GST Registration & Filing in Chennai",
    description:
      "GST registration, returns, LUT, notices and advisory support.",
    cta: "Manage GST",
    href: "/taxation/gst",
    glyph: GstGlyph,
  },
  {
    title: "Income Tax Return Filing in Chennai",
    description:
      "Accurate ITR filing for individuals, professionals and businesses.",
    cta: "File ITR",
    href: "/itr/income-tax-return-filing",
    glyph: IncomeTaxGlyph,
  },
  {
    title: "TDS, Bookkeeping & Tax Advisory",
    description:
      "TDS, bookkeeping, PAN/TAN and year-round tax planning support.",
    cta: "Explore Tax Services",
    href: "/taxation/tax-filing",
    glyph: AccountingGlyph,
  },
  {
    title: "Trademark, Copyright & Patent in India",
    description:
      "Protect your brand, creative work and inventions across India.",
    cta: "Protect Your Brand",
    href: "/legal/ip",
    glyph: IpGlyph,
  },
  {
    title: "Business Contract Drafting in India",
    description:
      "NDA, MOU, employment and commercial agreements drafted clearly.",
    cta: "Draft Contracts",
    href: "/legal/contracts",
    glyph: ContractGlyph,
  },
];

/* =========================================================
   MOTION
========================================================= */

const EASE = [0.16, 1, 0.3, 1] as const;

const headingReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: EASE,
    },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.065,
    },
  },
};

const rowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.99,
    filter: "blur(4px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.68,
      ease: EASE,
      delayChildren: 0.08,
      staggerChildren: 0.065,
    },
  },
};

const rowPartReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.52,
      ease: EASE,
    },
  },
};

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#0753B0]
        py-7
        sm:py-8
        lg:py-10
        xl:py-12
      "
    >
      <SectionBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1460px]
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            TOP HEADING
        ===================================================== */}

        <motion.div
          variants={headingReveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
            margin: "0px 0px -8% 0px",
          }}
          className="mx-auto max-w-[760px] text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.18]
              bg-white/[0.10]
              px-3
              py-1.5
              shadow-[0_10px_30px_rgba(2,32,76,0.12)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white/[0.14]
                text-white
              "
            >
              <SparkGlyph />
            </span>

            <span
              className="
                font-body
                text-[10px]
                font-semibold
                !text-white
                sm:text-[11px]
              "
            >
              300+ Services
            </span>
          </div>

          <h2
            className="
              mt-3
              font-heading
              text-[30px]
              font-bold
              leading-[1.04]
              tracking-[-0.045em]
              !text-white
              sm:text-[34px]
              md:text-[38px]
              lg:text-[42px]
              xl:text-[44px]
            "
            style={{ color: "#FFFFFF" }}
          >
            Our Expertise
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[560px]
              font-body
              text-[12px]
              leading-5
              !text-white/75
              sm:text-[13px]
              sm:leading-6
            "
          >
            We Provide Best Quality Services.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <motion.div
          variants={gridReveal}
          className="
            mt-6

            grid
            grid-cols-1

            gap-x-6
            gap-y-3

            sm:mt-7
            sm:gap-y-[14px]

            lg:mt-8
            lg:grid-cols-2
            lg:gap-x-8
            lg:gap-y-4

            xl:gap-x-10
            xl:gap-y-5
          "
        >
          {services.map((service, index) => (
            <ServiceRow
              key={service.href}
              service={service}
              index={index}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
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
  reduceMotion,
}: {
  service: ServiceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Glyph = service.glyph;

  return (
    <motion.div
      variants={rowReveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.38,
        margin: "0px 0px -10% 0px",
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,

              transition: {
                duration: 0.28,
                ease: EASE,
              },
            }
      }
      className="
        relative
        min-w-0
      "
    >
      <Link
        href={service.href}
        aria-label={`${service.title} – ${service.cta}`}
        className="
          group
          relative
          isolate
          grid
          min-h-[126px]
          w-full
          min-w-0
          grid-cols-[54px_minmax(0,1fr)_38px]
          items-start
          gap-3
          overflow-hidden
          rounded-[18px]
          bg-white/[0.045]
          px-3
          py-[14px]
          outline-none
          transition-[box-shadow,transform]
          duration-500
          focus-visible:ring-2
          focus-visible:ring-white/50
          focus-visible:ring-offset-2
          sm:grid-cols-[58px_minmax(0,1fr)_40px]
          sm:gap-[14px]
          sm:px-[14px]
          sm:py-4
          md:min-h-[132px]
          lg:px-[18px]
          xl:gap-4
          xl:px-4
          hover:shadow-[0_24px_65px_rgba(1,31,76,0.30)]
        "
      >
        {/* =====================================================
            FULL HOVER BACKGROUND
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-20
            bg-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            group-focus-visible:opacity-100
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(4,42,99,0.97) 0%, rgba(7,84,180,0.97) 54%, rgba(17,124,226,0.98) 100%)",
          }}
        />

        {/* soft blue light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[70px]
            -top-[90px]
            -z-10
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#93D4FF]/0
            blur-[70px]
            transition-colors
            duration-500
            group-hover:bg-[#93D4FF]/30
            group-focus-visible:bg-[#93D4FF]/30
          "
        />

        {/* diagonal highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            left-[30%]
            -z-10
            h-[190px]
            w-[320px]
            rotate-[-18deg]
            rounded-[50%]
            bg-white/0
            blur-[48px]
            transition-colors
            duration-500
            group-hover:bg-white/[0.06]
          "
        />

        {/* =====================================================
            GLYPH
        ===================================================== */}

        <motion.div
          variants={rowPartReveal}
          className="
            relative
            mt-0.5
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            text-[#DDF3FF]
            transition-colors
            duration-300
            group-hover:!text-white
            group-focus-visible:!text-white
            sm:h-[54px]
            sm:w-[54px]
          "
        >
          <Glyph
            className="
              h-full
              w-full
              overflow-visible
              transition-transform
              duration-500
              group-hover:-translate-y-1
              group-hover:scale-[1.03]
              group-focus-visible:-translate-y-1
            "
          />
        </motion.div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <motion.div variants={rowPartReveal} className="min-w-0">
          <div
            className="
              mb-1.5
              font-body
              text-[9px]
              font-semibold
              tracking-[0.12em]
              text-white/45
              transition-colors
              duration-300
              group-hover:!text-white
              group-focus-visible:!text-white
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3
            className="
              max-w-[450px]
              font-heading
              text-[16px]
              font-bold
              leading-[1.16]
              tracking-[-0.032em]
              !text-white
              transition-colors
              duration-300
              group-hover:!text-white
              group-focus-visible:!text-white
              sm:text-[17px]
              xl:text-[18px]
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-1
              max-w-[470px]
              font-body
              text-[10.5px]
              leading-[1.5]
              !text-white/75
              transition-colors
              duration-300
              group-hover:!text-white
              group-focus-visible:!text-white
              sm:text-[10.5px]
            "
          >
            {service.description}
          </p>

          <span
            className="
              mt-2
              inline-flex
              items-center
              gap-2
              font-body
              text-[11.5px]
              font-semibold
              !text-[#DDF3FF]
              transition-colors
              duration-300
              group-hover:!text-white
              group-focus-visible:!text-white
              sm:text-[11px]
            "
          >
            {service.cta}

            <span
              className="
                h-px
                w-5
                bg-white/35
                transition-[width,background-color]
                duration-300
                group-hover:w-8
                group-hover:!bg-white/60
                group-focus-visible:w-8
                group-focus-visible:!bg-white/60
              "
            />
          </span>
        </motion.div>

        {/* =====================================================
            ARROW
        ===================================================== */}

        <motion.div
          variants={rowPartReveal}
          className="
            mt-1
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.20]
            bg-white/[0.12]
            text-white
            shadow-[0_8px_24px_rgba(2,31,76,0.16)]
            transition-all
            duration-350
            group-hover:translate-x-1
            group-hover:border-white/25
            group-hover:bg-white
            group-hover:text-[#0753B0]
            group-focus-visible:translate-x-1
            sm:h-9
            sm:w-9
          "
        >
          <ArrowGlyph />
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
      style={{
        background:
          "radial-gradient(circle at 7% 0%, rgba(85,184,255,0.72) 0%, rgba(56,156,245,0.26) 24%, transparent 50%), radial-gradient(circle at 91% 8%, rgba(32,134,238,0.22) 0%, transparent 42%), radial-gradient(circle at 50% 116%, rgba(5,35,89,0.62) 0%, transparent 48%), linear-gradient(112deg, #1687EE 0%, #0B6AD3 34%, #0753B0 65%, #043B82 100%)",
      }}
    >
      {/* =====================================================
          SOFT DEPTH LIGHTS
      ===================================================== */}

      <div
        className="
          absolute
          -left-[240px]
          -top-[230px]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#9ADFFF]/[0.13]
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-[250px]
          top-[180px]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#3EA6FF]/[0.10]
          blur-[135px]
        "
      />

      <div
        className="
          absolute
          bottom-[-280px]
          left-1/2
          h-[520px]
          w-[980px]
          -translate-x-1/2
          rounded-[50%]
          bg-[#021F54]/35
          blur-[110px]
        "
      />

      {/* =====================================================
          PREMIUM CURVED LINES
      ===================================================== */}

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        fill="none"
        className="
          absolute
          inset-0
          hidden
          h-full
          w-full
          lg:block
        "
      >
        <defs>
          <linearGradient
            id="service-blue-line-left"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#E6F8FF" stopOpacity=".24" />
            <stop offset=".56" stopColor="#BEEBFF" stopOpacity=".055" />
            <stop offset="1" stopColor="#BEEBFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="service-blue-line-right"
            x1="1"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stopColor="#DDF6FF" stopOpacity=".20" />
            <stop offset=".60" stopColor="#B9E8FF" stopOpacity=".045" />
            <stop offset="1" stopColor="#B9E8FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M-100 735C92 674 181 560 266 410C350 262 458 184 620 130"
          stroke="url(#service-blue-line-left)"
          strokeWidth="1.15"
        />

        <path
          d="M-84 795C122 723 216 607 305 455C393 304 491 230 650 174"
          stroke="url(#service-blue-line-left)"
          strokeWidth=".7"
          opacity=".7"
        />

        <path
          d="M1710 142C1512 211 1423 326 1338 475C1263 610 1156 713 986 783"
          stroke="url(#service-blue-line-right)"
          strokeWidth="1.1"
        />

        <path
          d="M1726 98C1518 168 1425 281 1335 432C1252 575 1139 678 963 747"
          stroke="url(#service-blue-line-right)"
          strokeWidth=".7"
          opacity=".66"
        />
      </svg>

      {/* =====================================================
          MICRO DOT TEXTURE
      ===================================================== */}

      <div
        className="
          absolute
          left-[3%]
          top-[38%]
          hidden
          h-[190px]
          w-[230px]
          opacity-[0.11]
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(225,248,255,.92) 1px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,.66) 40%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,.66) 40%, transparent 78%)",
        }}
      />

      <div
        className="
          absolute
          bottom-[12%]
          right-[3%]
          hidden
          h-[190px]
          w-[230px]
          opacity-[0.09]
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(207,242,255,.92) 1px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,.66) 40%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,.66) 40%, transparent 78%)",
        }}
      />

      {/* =====================================================
          VERY SUBTLE GRID
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.075]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 84%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 84%, transparent 100%)",
        }}
      />

      {/* BOTTOM DEPTH */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[260px]
          bg-gradient-to-t
          from-[#032B67]/30
          via-[#064A97]/[0.06]
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   SMALL SVGs
========================================================= */

function SparkGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[12px] w-[12px]"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 13.5 9l5.5 1.5-5.5 1.5L12 17.5 10.5 12 5 10.5 10.5 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   SERVICE GLYPHS
========================================================= */

function CompanyGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M24 58V34l18-9 18 9v24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 59h44M31 39h3M50 39h3M31 47h3M50 47h3M38 59v-8h8v8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="23"
        r="8"
        fill="currentColor"
        fillOpacity=".12"
      />
      <path
        d="m56.5 23 2.2 2.2 4.5-4.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LicenseGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <rect
        x="22"
        y="26"
        width="36"
        height="27"
        rx="7"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <path
        d="M29 35h18M29 41h23M29 47h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".72"
      />
      <path
        d="M58 48c5 3 9 3.3 14 0v8c0 7-4.3 11.2-7 12.5-2.7-1.3-7-5.5-7-12.5v-8Z"
        fill="currentColor"
        fillOpacity=".09"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ComplianceGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M25 21h23l11 11v30H25V21Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M48 21v12h11M32 40h18M32 47h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".72"
      />
      <circle
        cx="59"
        cy="57"
        r="10"
        fill="currentColor"
        fillOpacity=".09"
      />
      <path
        d="m54.5 57 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GstGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M26 22h31v40l-4-3-4 3-4-3-4 3-4-3-4 3-3-3-4 3V22Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M33 33h17M33 40h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
      <circle cx="58" cy="51" r="10" fill="currentColor" fillOpacity=".08" />
      <path
        d="m54 55 8-8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IncomeTaxGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M24 61V28h33v33"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M31 37h18M31 44h14M31 51h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
      <circle cx="59" cy="56" r="10" fill="currentColor" fillOpacity=".09" />
      <path
        d="M55 51h8M55 54h8M56 51c4 0 5.5.8 5.5 2.4 0 1.6-1.5 2.6-5 2.6H55l6 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccountingGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <rect
        x="23"
        y="22"
        width="29"
        height="39"
        rx="7"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <rect
        x="29"
        y="28"
        width="17"
        height="7"
        rx="2"
        fill="currentColor"
        fillOpacity=".09"
      />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle
            key={`${r}-${c}`}
            cx={31 + c * 7}
            cy={43 + r * 7}
            r="1.7"
            fill="currentColor"
            fillOpacity=".65"
          />
        )),
      )}
      <path
        d="M57 55V45m6 10V39m6 16V34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IpGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M32 23c7 4 12 4.5 19 0v11c0 10-6.1 16-9.5 17.5C38.1 50 32 44 32 34V23Z"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <path
        d="m36.5 35 3.2 3.2 6.2-6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="57" r="10" fill="currentColor" fillOpacity=".09" />
      <path
        d="M54 53.5h8M58 53.5v8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContractGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 84 84" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="68"
        height="68"
        rx="22"
        fill="currentColor"
        fillOpacity=".055"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <path
        d="M24 21h25l10 10v31H24V21Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M49 21v11h10M31 39h18M31 46h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="m50 57 2-6 8-8a2.7 2.7 0 0 1 3.8 3.8l-8 8-5.8 2.2Z"
        fill="currentColor"
        fillOpacity=".07"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}
