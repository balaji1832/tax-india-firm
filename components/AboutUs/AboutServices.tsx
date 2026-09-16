"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ServiceTheme = "light" | "blue" | "ice" | "navy" | "soft";

type Service = {
  no: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  theme: ServiceTheme;
};

type ThemeStyle = {
  wrapper: string;
  eyebrow: string;
  heading: string;
  body: string;
  meta: string;
  line: string;
  arrow: string;
  numberColor: string;
  circleBorder: string;
};

/* =========================================================
   SERVICES
========================================================= */

const services: Service[] = [
  {
    no: "01",
    eyebrow: "Business",
    title: "Business Setup & Registration",
    description:
      "Support for entrepreneurs looking to establish a business, choose an appropriate structure and complete the necessary registration and setup requirements.",
    href: "/business/registration",
    theme: "light",
  },
  {
    no: "02",
    eyebrow: "Taxation",
    title: "Taxation",
    description:
      "Tax-related services covering applicable filing, tax affairs and ongoing compliance obligations.",
    href: "/taxation/tax-filing",
    theme: "blue",
  },
  {
    no: "03",
    eyebrow: "Finance",
    title: "Accounting & Bookkeeping",
    description:
      "Accounting support to maintain proper financial records and manage ongoing accounting requirements.",
    href: "/taxation",
    theme: "ice",
  },
  {
    no: "04",
    eyebrow: "Compliance",
    title: "GST & Compliance",
    description:
      "Support with GST-related requirements and other recurring business compliance matters.",
    href: "/taxation/gst",
    theme: "light",
  },
  {
    no: "05",
    eyebrow: "Legal",
    title: "Legal & Corporate Services",
    description:
      "Business contracts, intellectual property, corporate documentation and related legal requirements.",
    href: "/legal",
    theme: "navy",
  },
  {
    no: "06",
    eyebrow: "Advisory",
    title: "Business Support & Advisory",
    description:
      "Professional assistance for businesses that need guidance as they start, operate and grow.",
    href: "/business",
    theme: "soft",
  },
];

/* =========================================================
   THEME STYLES
========================================================= */

const themeStyles: Record<ServiceTheme, ThemeStyle> = {
  light: {
    wrapper:
      "border-[#D9E4F0] bg-white shadow-[0_20px_55px_rgba(28,62,104,0.065)]",
    eyebrow: "!text-[#246EF1]",
    heading: "!text-[#102E4C]",
    body: "!text-[#64788F]",
    meta: "!text-[#95A7B9]",
    line: "bg-[#246EF1]",
    arrow:
      "border-[#C9DCF4] bg-white !text-[#246EF1] group-hover:border-[#246EF1] group-hover:bg-[#246EF1] group-hover:!text-white",
    numberColor: "rgba(36,110,241,0.01)",
    circleBorder: "border-[#246EF1]/[0.08]",
  },

  blue: {
    wrapper:
      "border-[#246EF1] bg-[#246EF1] shadow-[0_24px_65px_rgba(36,110,241,0.18)]",
    eyebrow: "!text-[#D7E8FF]",
    heading: "!text-white",
    body: "!text-white/70",
    meta: "!text-white/45",
    line: "bg-white/70",
    arrow:
      "border-white/30 bg-white/[0.08] !text-white group-hover:bg-white group-hover:!text-[#246EF1]",
    numberColor: "rgba(255,255,255,0.01)",
    circleBorder: "border-white/[0.12]",
  },

  ice: {
    wrapper:
      "border-[#D1E1F5] bg-[#EEF5FF] shadow-[0_20px_55px_rgba(30,70,120,0.065)]",
    eyebrow: "!text-[#246EF1]",
    heading: "!text-[#102E4C]",
    body: "!text-[#61758C]",
    meta: "!text-[#8FA2B7]",
    line: "bg-[#246EF1]",
    arrow:
      "border-[#BFD6F5] bg-white/80 !text-[#246EF1] group-hover:border-[#246EF1] group-hover:bg-[#246EF1] group-hover:!text-white",
    numberColor: "rgba(36,110,241,0.01)",
    circleBorder: "border-[#246EF1]/[0.08]",
  },

  navy: {
    wrapper:
      "border-[#102F50] bg-[#102F50] shadow-[0_24px_65px_rgba(16,47,80,0.18)]",
    eyebrow: "!text-[#9DC7FF]",
    heading: "!text-white",
    body: "!text-white/68",
    meta: "!text-white/40",
    line: "bg-[#73AAFF]",
    arrow:
      "border-white/20 bg-white/[0.07] !text-white group-hover:bg-white group-hover:!text-[#102F50]",
    numberColor: "rgba(255,255,255,0.01)",
    circleBorder: "border-white/[0.09]",
  },

  soft: {
    wrapper:
      "border-[#D8E5F4] bg-[#F8FBFF] shadow-[0_20px_55px_rgba(28,62,104,0.055)]",
    eyebrow: "!text-[#246EF1]",
    heading: "!text-[#102E4C]",
    body: "!text-[#64788F]",
    meta: "!text-[#95A7B9]",
    line: "bg-[#246EF1]",
    arrow:
      "border-[#C9DCF4] bg-white !text-[#246EF1] group-hover:border-[#246EF1] group-hover:bg-[#246EF1] group-hover:!text-white",
    numberColor: "rgba(36,110,241,0.01)",
    circleBorder: "border-[#246EF1]/[0.08]",
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AboutServices() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] py-6 sm:py-5 lg:py-5">
      {/* background glows */}

      <div className="pointer-events-none absolute -left-[180px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#246EF1]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[190px] bottom-[80px] h-[480px] w-[480px] rounded-full bg-[#8EBEFF]/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
  <motion.div
    initial={{
      opacity: 0,
      y: 28,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
    transition={{
      duration: 0.72,
      ease,
    }}
  >
    {/* Section Label */}
    <div className="flex items-center justify-center gap-3">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 36 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease,
        }}
        className="h-[2px] rounded-full bg-[#246EF1]"
      />

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246EF1]">
        What We Do
      </span>

      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 36 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease,
        }}
        className="h-[2px] rounded-full bg-[#246EF1]"
      />
    </div>

    {/* Heading */}
    <h2
      className="
        mx-auto
        mt-5
        max-w-[820px]

        !text-[38px]
        !font-[700]
        !leading-[1.04]
        !tracking-[-0.048em]
        !text-[#112842]

        sm:!text-[48px]
        lg:!text-[55px]
      "
    >
      Expertise shaped around
      <span className="block !text-[#246EF1]">
        your business journey.
      </span>
    </h2>
  </motion.div>

  {/* Paragraph */}
  <motion.p
    initial={{
      opacity: 0,
      y: 22,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
    transition={{
      duration: 0.7,
      delay: 0.1,
      ease,
    }}
    className="
      mx-auto
      mt-6
      max-w-[790px]

      text-[14px]
      leading-7
      text-[#64778E]

      sm:text-[15px]
      sm:leading-8 pt-3
    "
  >
    From the first registration to taxation, accounting, compliance,
    legal documentation and ongoing advisory, our services are designed
    around practical business requirements.
  </motion.p>
</div>

        {/* =====================================================
            SERVICE SHEETS
        ===================================================== */}

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {services.map((service, index) => (
            <ServiceSheet
              key={service.no}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.68,
            ease,
          }}
          className="
            relative
            z-30
            mx-auto
            mt-8
            flex
            max-w-[920px]
            flex-col
            gap-5
            rounded-[22px]
            border
            border-[#D9E4F0]
            bg-white
            px-5
            py-5
            shadow-[0_15px_40px_rgba(29,63,106,0.06)]

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-7
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#246EF1]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="18"
                  cy="6"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="6"
                  cy="18"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="2.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M7.7 7.7L10.3 10.3M16.3 7.7L13.7 10.3M7.7 16.3L10.3 13.7M16.3 16.3L13.7 13.7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#98A9BB]">
                Connected expertise
              </p>

              <p className="mt-1 !text-[15px] !font-semibold !text-[#203A55] sm:!text-[16px]">
                One firm for multiple professional requirements.
              </p>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="
              group
              ml-[56px]
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-semibold
              !text-[#246EF1]
              transition-all
              duration-300
              hover:translate-x-1

              sm:ml-0
            "
          >
            Discuss your requirement

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE SHEET
========================================================= */

function ServiceSheet({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const theme = themeStyles[service.theme];

  const isDark =
    service.theme === "blue" || service.theme === "navy";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 38,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.14,
      }}
      transition={{
        duration: 0.72,
        delay: Math.min(index * 0.04, 0.18),
        ease,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[25px]
        border

        transition-[transform,box-shadow,border-color]
        duration-500

        hover:-translate-y-[3px]

        sm:rounded-[29px]
        lg:rounded-[32px]

        ${index === 0
          ? ""
          : "mt-4 lg:-mt-3"
        }

        ${theme.wrapper}
      `}
      style={{
        zIndex: index + 1,
      }}
    >
      {/* =====================================================
          FULL CARD LINK
      ===================================================== */}

      <Link
        href={service.href}
        aria-label={`Explore ${service.title}`}
        className="
          relative
          block
          w-full
          cursor-pointer
          outline-none

          focus-visible:ring-2
          focus-visible:ring-[#246EF1]
          focus-visible:ring-offset-4
        "
      >
        {/* =================================================
            SMALLER BACKGROUND NUMBER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 22,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease,
          }}
          className="
            pointer-events-none
            absolute

            right-3
            top-[-14px]

            select-none

            !text-[76px]
            !font-[800]
            !leading-none
            !tracking-[-0.07em]

            sm:right-5
            sm:top-[-18px]
            sm:!text-[92px]

            lg:right-8
            lg:top-[-22px]
            lg:!text-[108px]

            xl:!text-[118px]
          "
          style={{
            color: theme.numberColor,
          }}
        >
          {service.no}
        </motion.div>

        {/* =================================================
            DECORATIVE CIRCLES
        ================================================= */}

        <div
          className={`
            pointer-events-none
            absolute

            -right-[75px]
            -top-[90px]

            h-[220px]
            w-[220px]

            rounded-full
            border

            transition-transform
            duration-700

            group-hover:scale-110

            ${theme.circleBorder}
          `}
        />

        <div
          className={`
            pointer-events-none
            absolute

            right-[50px]
            top-[38px]

            hidden

            h-[82px]
            w-[82px]

            rounded-full
            border

            transition-transform
            duration-700

            group-hover:scale-125

            sm:block

            ${theme.circleBorder}
          `}
        />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10

            grid
            gap-5

            px-5
            py-7

            sm:px-7
            sm:py-8

            md:grid-cols-[52px_1fr]
            md:gap-6

            lg:grid-cols-[56px_0.88fr_1.12fr_52px]
            lg:items-center
            lg:gap-8
            lg:px-9
            lg:py-9

            xl:grid-cols-[60px_0.82fr_1.18fr_54px]
            xl:gap-9
            xl:px-11
          "
        >
          {/* small index */}

          <div className="flex items-center md:block">
            <span
              className={`
                text-[9px]
                font-bold
                tracking-[0.17em]

                ${theme.meta}
              `}
            >
              {service.no}
            </span>
          </div>

          {/* title */}

          <div>
            <span
              className={`
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]

                ${theme.eyebrow}
              `}
            >
              {service.eyebrow}
            </span>

            <h3
              className={`
                mt-2.5
                max-w-[430px]

                !text-[20px]
                !font-semibold
                !leading-[1.16]
                !tracking-[-0.03em]

                sm:!text-[22px]
                lg:!text-[23px]

                ${theme.heading}
              `}
            >
              {service.title}
            </h3>
          </div>

          {/* description */}

          <div>
            <p
              className={`
                max-w-[670px]

                text-[13px]
                leading-6

                sm:text-[14px]
                sm:leading-7

                ${theme.body}
              `}
            >
              {service.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span
                className={`
                  h-[2px]
                  w-7
                  rounded-full

                  transition-all
                  duration-500

                  group-hover:w-14

                  ${theme.line}
                `}
              />

              <span
                className={`
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.15em]

                  ${theme.meta}
                `}
              >
                Professional Service
              </span>
            </div>
          </div>

          {/* arrow */}

          <div
            className="
              flex
              items-center

              md:col-start-2
              lg:col-start-auto
              lg:justify-end
            "
          >
            <div
              className={`
                flex
                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-full
                border

                text-[14px]

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1

                lg:h-11
                lg:w-11

                ${theme.arrow}
              `}
            >
              ↗
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM HOVER LINE
        ================================================= */}

        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
          <div
            className={`
              h-full
              w-0

              transition-all
              duration-700

              group-hover:w-full

              ${isDark
                ? "bg-white/65"
                : "bg-[#246EF1]"
              }
            `}
          />
        </div>
      </Link>
    </motion.article>
  );
}