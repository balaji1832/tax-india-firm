"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ArrowRight } from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type ServiceItem = {
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  background: string;
  categoryColor: string;
  buttonBackground: string;
};

/* =========================================================
   SERVICE DATA
========================================================= */

const services: ServiceItem[] = [
  {
    category: "BUSINESS",
    title: "Company Registration in Chennai",
    description:
      "Pvt Ltd, LLP, OPC, Partnership, Sole Proprietorship, Section 8 and more — registered in days.",
    cta: "Register your company",
    href: "/business/registration",
    image: "/images/company-registration.png",
    background: "#e1e7ed",
    categoryColor: "#246EF1",
    buttonBackground: "#1757A7",
  },

  {
    category: "LICENSES",
    title: "Business License Registration",
    description:
      "FSSAI, MSME Udyam, ISO, DSC, IEC, ESI, PF, Professional Tax and Shop Act in Tamil Nadu.",
    cta: "Get your business licensed",
    href: "/business/license",
    image: "/images/business-license.png",
    background: "#d0dced",
    categoryColor: "#A16632",
    buttonBackground: "#C19159",
  },

  {
    category: "COMPLIANCE",
    title: "Company Compliance & ROC Filing",
    description:
      "ROC filings, director changes, MOA amendments, eKYC and all MCA compliance handled.",
    cta: "Stay MCA compliant",
    href: "/business/compliance",
    image: "/images/company-compliance.png",
    background: "#e5e8f0",
    categoryColor: "#246EF1",
    buttonBackground: "#1757A7",
  },

  {
    category: "GST",
    title: "GST Registration & Filing in Chennai",
    description:
      "New GSTIN, GSTR-1, GSTR-3B, GSTR-9, LUT filing, GST notice reply and advisory services.",
    cta: "Sort your GST today",
    href: "/taxation/gst",
    image: "/images/gst-registration.png",
    background: "#dce1d5",
    categoryColor: "#16879B",
    buttonBackground: "#198CA0",
  },

  {
    category: "INCOME TAX",
    title: "Income Tax Return Filing in Chennai",
    description:
      "ITR for salaried, freelancers, business owners, HUFs and NRIs — filed accurately and on time.",
    cta: "File your ITR now",
    href: "/itr/income-tax-return-filing",
    image: "/images/income-tax.png",
    background: "#e4e4f9",
    categoryColor: "#4156B5",
    buttonBackground: "#2259B7",
  },

  {
    category: "TAX & ACCOUNTING",
    title: "TDS, Bookkeeping & Tax Advisory",
    description:
      "TDS returns, PAN, TAN, bookkeeping, capital gains advisory and year-round tax planning.",
    cta: "Explore tax filing services",
    href: "/taxation/tax-filing",
    image: "/images/tax-accounting.png",
    background: "#FBF4EC",
    categoryColor: "#966A3B",
    buttonBackground: "#C18D52",
  },

  {
    category: "IP REGISTRATION",
    title: "Trademark, Copyright & Patent in India",
    description:
      "Protect your brand name, logo, creative work and invention with IP India registration.",
    cta: "Protect your brand",
    href: "/legal/ip",
    image: "/images/ip-registration.png",
    background: "#EDF5FF",
    categoryColor: "#246EF1",
    buttonBackground: "#1757A7",
  },

  {
    category: "LEGAL CONTRACTS",
    title: "Business Contract Drafting in India",
    description:
      "NDA, MOU, franchise, employment, shareholders, vendor and master service agreements.",
    cta: "Draft your contracts",
    href: "/legal/contracts",
    image: "/images/legal-contracts.png",
    background: "#F8F1EB",
    categoryColor: "#9A6738",
    buttonBackground: "#BC8650",
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]

        py-14

        sm:py-18

        md:py-20

        lg:py-24

        xl:py-[105px]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-[220px]
            top-[120px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#246EF1]/[0.045]

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            bottom-[80px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#2DB6AE]/[0.035]

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.14]

            [background-image:linear-gradient(rgba(16,35,61,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,35,61,0.035)_1px,transparent_1px)]

            [background-size:70px_70px]

            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative

          mx-auto

          w-full

          max-w-[1480px]

          px-4

          sm:px-6

          md:px-8

          lg:px-10

          xl:px-14

          2xl:px-16
        "
      >
        {/* ===================================================
            SECTION LABEL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
            scale: reduceMotion ? 1 : 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex

            items-center

            gap-2

            rounded-full

            border
            border-[#246EF1]/15

            bg-[#EBF3FF]

            px-3
            py-[7px]

            shadow-[0_5px_18px_rgba(36,110,241,0.07)]
          "
        >
          <span
            className="
              flex

              h-[18px]
              w-[18px]

              items-center
              justify-center

              rounded-full

              bg-[#246EF1]

              text-white
            "
          >
            <ServiceBadgeIcon />
          </span>

          <span
            className="
              font-body

              text-[11px]
              font-bold

              text-[#246EF1]

              sm:text-[12px]
            "
          >
            300+ Services
          </span>
        </motion.div>

        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5

            max-w-[900px]

            font-heading

            text-[30px]
            font-bold

            leading-[1.13]

            tracking-[-0.04em]

            text-[#0D1F45]

            sm:text-[38px]

            md:text-[44px]

            lg:text-[49px]

            xl:text-[53px]
          "
        >
          Everything Your Business Needs.
          <br className="hidden sm:block" />

          <span className="sm:hidden"> </span>

          One Firm in Chennai.
        </motion.h2>

        {/* ===================================================
            SUB TEXT
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.13,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-4

            max-w-[670px]

            font-body

            text-[13px]

            leading-[1.75]

            text-[#667487]

            sm:mt-5
            sm:text-[14px]

            md:text-[15px]

            lg:text-[16px]
          "
        >
          Whether you&apos;re starting up, scaling or staying compliant,
          we have the right service for every stage of your business journey.
        </motion.p>

        {/* ===================================================
            GRID
        =================================================== */}

        <div
          className="
            mt-9

            grid

            grid-cols-1

            gap-4

            sm:mt-11

            sm:grid-cols-2

            sm:gap-5

            lg:grid-cols-4

            lg:gap-5

            xl:gap-6
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={index}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CARD
========================================================= */

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: ServiceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const delay = (index % 4) * 0.08;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 45,
        scale: reduceMotion ? 1 : 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.16,
        margin: "0px 0px -50px 0px",
      }}
      transition={{
        duration: 0.68,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              scale: 1.012,
            }
      }
      className="
        group

        relative

        flex

        min-h-[430px]

        flex-col

        overflow-hidden

        rounded-[18px]

        border
        border-white/60

        shadow-[0_8px_25px_rgba(18,40,70,0.07)]

        transition-[box-shadow,border-color]
        duration-500

        hover:border-white/90

        hover:shadow-[0_24px_50px_rgba(18,40,70,0.16)]

        min-[430px]:min-h-[460px]

        sm:min-h-[470px]

        md:min-h-[480px]

        lg:min-h-[440px]

        xl:min-h-[480px]
      "
      style={{
        backgroundColor: service.background,
      }}
    >
      {/* =====================================================
          HOVER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-[80px]
          -top-[80px]

          z-0

          h-[220px]
          w-[220px]

          rounded-full

          bg-white/35

          opacity-0

          blur-[25px]

          transition-all
          duration-700

          group-hover:scale-125

          group-hover:opacity-100
        "
      />

      {/* =====================================================
          TEXT WRAPPER
      ===================================================== */}

      <div
        className="
          relative

          z-20

          p-5

          sm:p-[22px]

          md:p-6

          lg:p-5

          xl:p-6
        "
      >
        {/* CATEGORY */}

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -14,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: delay + 0.14,
          }}
          className="flex items-center gap-2"
        >
          <span
            className="
              h-[5px]
              w-[5px]

              rounded-full
            "
            style={{
              backgroundColor: service.categoryColor,
            }}
          />

          <span
            className="
              font-body

              text-[9px]
              font-bold

              uppercase

              tracking-[0.12em]

              sm:text-[10px]
            "
            style={{
              color: service.categoryColor,
            }}
          >
            {service.category}
          </span>
        </motion.div>

        {/* TITLE */}

        <motion.h3
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.55,
            delay: delay + 0.18,
          }}
          className="
            mt-3

            max-w-[270px]

            font-heading

            text-[18px]

            font-bold

            leading-[1.18]

            tracking-[-0.025em]

            text-[#0E2044]

            sm:text-[19px]

            md:text-[20px]

            lg:text-[18px]

            xl:text-[21px]
          "
        >
          {service.title}
        </motion.h3>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
            delay: delay + 0.25,
          }}
          className="
            mt-3

            max-w-[290px]

            font-body

            text-[11.5px]

            leading-[1.65]

            text-[#536174]

            sm:text-[12px]

            md:text-[12.5px]

            xl:text-[13px]
          "
        >
          {service.description}
        </motion.p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 35,
          scale: reduceMotion ? 1 : 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: delay + 0.22,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute

          inset-x-0

          bottom-0

          h-[59%]

          overflow-hidden
        "
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            25vw
          "
          className="
            object-cover

            object-center

            transition-transform

            duration-[900ms]

            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:scale-[1.055]
          "
        />

        {/* TOP BLEND */}

        <div
          className="
            absolute
            inset-x-0
            top-0

            h-[42%]

            bg-gradient-to-b

            from-[var(--service-bg)]

            via-[var(--service-bg)]

            to-transparent
          "
          style={
            {
              "--service-bg": service.background,
            } as CSSProperties
          }
        />

        {/* BOTTOM DEPTH */}

        <div
          className="
            absolute

            inset-x-0
            bottom-0

            h-[28%]

            bg-gradient-to-t

            from-black/[0.06]

            to-transparent
          "
        />
      </motion.div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: reduceMotion ? 0 : -18,
          y: reduceMotion ? 0 : 10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.55,
          delay: delay + 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative

          z-30

          mt-auto

          p-4

          pt-10

          sm:p-5

          sm:pt-12
        "
      >
        <Link
          href={service.href}
          className="
            group/link

            inline-flex

            min-h-[38px]

            max-w-full

            items-center

            gap-2

            rounded-[9px]

            px-3.5
            py-2

            font-body

            text-[10.5px]

            font-semibold

            text-white

            shadow-[0_8px_18px_rgba(20,50,90,0.17)]

            backdrop-blur-md

            transition-all

            duration-300

            hover:-translate-y-[2px]

            hover:shadow-[0_14px_26px_rgba(20,50,90,0.25)]

            sm:text-[11px]

            md:text-[12px]
          "
          style={{
            backgroundColor: service.buttonBackground,
          }}
        >
          <span className="truncate">
            {service.cta}
          </span>

          <ArrowRight
            size={14}
            strokeWidth={2}
            className="
              shrink-0

              transition-transform

              duration-300

              group-hover/link:translate-x-[4px]
            "
          />
        </Link>
      </motion.div>

      {/* =====================================================
          BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          rounded-[inherit]

          ring-1
          ring-inset

          ring-white/35

          transition-all

          duration-500

          group-hover:ring-white/60
        "
      />
    </motion.article>
  );
}

/* =========================================================
   SECTION BADGE ICON
========================================================= */

function ServiceBadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[11px] w-[11px]"
      aria-hidden="true"
    >
      <path
        d="M12 3L14.3 7.66L19.45 8.41L15.72 12.04L16.6 17.17L12 14.75L7.4 17.17L8.28 12.04L4.55 8.41L9.7 7.66L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}