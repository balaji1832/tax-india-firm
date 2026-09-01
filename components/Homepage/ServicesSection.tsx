"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

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
  tone: string;
  tabSide: "left" | "right";
};

/* =========================================================
   DATA
========================================================= */

const services: ServiceItem[] = [
  {
    title: "Company Registration",
    category: "Business Setup",
    description:
      "Start your company with complete support for Private Limited, LLP, OPC and other business registrations. Our team handles documentation, filing and registration from start to finish.",
    cta: "Register Company",
    href: "/business/registration",
    image: "/images/company-registration.png",
    tone: "#F5FAFF",
    tabSide: "left",
  },
  {
    title: "Business License",
    category: "Licensing",
    description:
      "Get essential registrations and licences including FSSAI, MSME, IEC and DSC with complete documentation and filing support.",
    cta: "Get Licensed",
    href: "/business/license",
    image: "/images/business-license.png",
    tone: "#EAF4FF",
    tabSide: "left",
  },
  {
    title: "Company Compliance",
    category: "ROC & MCA",
    description:
      "Stay compliant with ROC filings, MCA requirements, annual compliance, eKYC and other statutory obligations handled by professionals.",
    cta: "Stay Compliant",
    href: "/business/compliance",
    image: "/images/company-compliance.png",
    tone: "#DCEEFF",
    tabSide: "right",
  },
  {
    title: "GST Registration",
    category: "GST Services",
    description:
      "From GST registration to return filing, LUT, notices and ongoing GST advisory, our team manages your complete GST requirements.",
    cta: "Manage GST",
    href: "/taxation/gst",
    image: "/images/gst-registration.png",
    tone: "#CFE6FF",
    tabSide: "right",
  },
  {
    title: "Income Tax Filing",
    category: "Income Tax",
    description:
      "Accurate income tax return filing for individuals, professionals and businesses with expert review before submission.",
    cta: "File ITR",
    href: "/itr/income-tax-return-filing",
    image: "/images/income-tax.png",
    tone: "#F1F7FF",
    tabSide: "right",
  },
  {
    title: "Tax & Accounting",
    category: "Finance Support",
    description:
      "TDS, bookkeeping, PAN, TAN and year-round accounting and tax advisory services designed to keep your business organised.",
    cta: "Explore Tax Services",
    href: "/taxation/tax-filing",
    image: "/images/tax-accounting.png",
    tone: "#E4F1FF",
    tabSide: "left",
  },
  {
    title: "IP Registration",
    category: "Brand Protection",
    description:
      "Protect your business identity and intellectual property through trademark, copyright and patent registration support across India.",
    cta: "Protect Your Brand",
    href: "/legal/ip",
    image: "/images/ip-registration.png",
    tone: "#D6EBFF",
    tabSide: "left",
  },
  {
    title: "Legal Contracts",
    category: "Legal Services",
    description:
      "Professional drafting of NDAs, MOUs, employment contracts, commercial agreements and other business legal documents.",
    cta: "Draft Contracts",
    href: "/legal/contracts",
    image: "/images/legal-contracts.png",
    tone: "#EAF3FF",
    tabSide: "right",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#F7FBFF] py-10">
      
      
      {/* ===================================================== 
          HEADING
      ===================================================== */}

      <div className="relative z-10 mx-auto mb-12 max-w-[1460px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="max-w-[720px]"
        >
          <span
            className="
              inline-flex
              rounded-full
              border border-[#D4E7FF]
              bg-white/90
              px-3.5 py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#1766D6]
            "
          >
            300+ Professional Services
          </span>

          <h2
            className="
              mt-5
              text-[34px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-[#0A2F5E]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[56px] pt-3
            "
          >
            Our Expertise
          </h2>

          <p
            className="
              mt-4
              max-w-[600px]
              text-[14px]
              leading-6
              text-[#607491]
              sm:text-[15px] pt-3
            "
          >
            Business, taxation, compliance and legal services handled by
            experienced professionals from documentation to final filing.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          STACKED CASE FILES
      ===================================================== */}

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.06,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
        className="relative z-10 mx-auto w-full"
      >
        {services.map((service, index) => {
          const active = activeIndex === index;

          return (
            <ServiceCase
              key={service.href}
              service={service}
              index={index}
              active={active}
              reduceMotion={Boolean(reduceMotion)}
              onOpen={() => setActiveIndex(index)}
              onClose={() => setActiveIndex(null)}
              onToggle={() => handleToggle(index)}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

/* =========================================================
   SERVICE CASE ROW
========================================================= */

function ServiceCase({
  service,
  index,
  active,
  reduceMotion,
  onOpen,
  onClose,
  onToggle,
}: {
  service: ServiceItem;
  index: number;
  active: boolean;
  reduceMotion: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout={!reduceMotion}
      variants={{
        hidden: {
          opacity: 0,
          y: 22,
        },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      className="
        group
        relative
        -mt-[3px]
        w-full
        overflow-visible
      "
    >
      {/* =====================================================
          TAB / FOLDER SHAPE
      ===================================================== */}

      <FolderTab
        side={service.tabSide}
        background={service.tone}
        active={active}
      />

      {/* =====================================================
          MAIN CASE
      ===================================================== */}

      <motion.div
        layout={!reduceMotion}
        style={{
          backgroundColor: service.tone,
        }}
        className={`
          relative
          overflow-hidden
          rounded-[16px]
          border-[3px]
          border-white
          transition-[box-shadow,filter]
          duration-500
          ${active ? "shadow-[0_22px_55px_rgba(23,102,214,0.16)]" : ""}
        `}
      >
        {/* CLICK LAYER FOR MOBILE */}

        <button
          type="button"
          aria-expanded={active}
          onClick={onToggle}
          className="
            absolute
            inset-0
            z-[5]
            cursor-pointer
            lg:hidden
          "
        >
          <span className="sr-only">
            Toggle details for {service.title}
          </span>
        </button>

        {/* subtle texture */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.12]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(23,102,214,.16) 0.65px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* =====================================================
            COLLAPSED TOP ROW
        ===================================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[104px]
            grid-cols-[minmax(0,1fr)_auto]
            items-center
            gap-4
            px-5
            py-6

            sm:min-h-[110px]
            sm:px-8

            md:grid-cols-[1fr_0.65fr_auto]
            md:px-10

            lg:min-h-[112px]
            lg:grid-cols-[1fr_0.85fr_1fr]
            lg:px-[5%]
          "
        >
          {/* TITLE */}

          <div className="min-w-0">
            <div
              className="
                mb-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#1766D6]/55
                sm:text-[10px]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3
              className="
                text-[20px]
                font-medium
                leading-[1.15]
                tracking-[-0.035em]
                text-[#0A2F5E]

                sm:text-[23px]
                lg:text-[25px]
              "
            >
              {service.title}
            </h3>
          </div>

          {/* CATEGORY */}

          <div
            className="
              hidden
              text-[16px]
              font-normal
              tracking-[-0.025em]
              text-[#285F9F]

              md:block
              lg:text-[19px]
            "
          >
            {service.category}
          </div>

          {/* CTA / RESULT */}

          <div
            className="
              flex
              items-center
              justify-end
              gap-3
              text-right
            "
          >
            <span
              className="
                hidden
                text-[14px]
                font-semibold
                tracking-[-0.025em]
                text-[#0A2F5E]

                sm:block
                text-[#1766D6]
                lg:text-[18px]
              "
            >
              {service.cta}
            </span>

            <span
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#1766D6]/20
                bg-white/30
                text-[#0A2F5E]
                backdrop-blur-sm
                transition-all
                duration-500

                ${
                  active
                    ? "rotate-45 bg-white/75"
                    : "rotate-0"
                }
              `}
            >
              <PlusIcon />
            </span>
          </div>
        </div>

        {/* =====================================================
            EXPANDED CONTENT
        ===================================================== */}

        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              key="details"
              initial={
                reduceMotion
                  ? false
                  : {
                      height: 0,
                      opacity: 0,
                    }
              }
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                height: {
                  duration: 0.58,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.32,
                },
              }}
              className="relative z-20 overflow-hidden"
            >
              <div
                className="
                  grid
                  gap-7
                  px-5
                  pb-8
                  pt-1

                  sm:px-8
                  sm:pb-10

                  md:grid-cols-[minmax(0,1fr)_300px]
                  md:items-end
                  md:px-10

                  lg:min-h-[230px]
                  lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)]
                  lg:px-[5%]
                  lg:pb-10
                "
              >
                {/* DESCRIPTION */}

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
                      }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    max-w-[620px]
                    self-center
                  "
                >
                  <p
                    className="
                      text-[13px]
                      leading-[1.65]
                      text-[#405977]

                      sm:text-[14px]
                      md:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    onClick={(event) => event.stopPropagation()}
                    className="
                      relative
                      z-30
                      mt-6
                      inline-flex
                      items-center
                      gap-3
                      text-[12px]
                      font-semibold
                      text-[#0A2F5E]

                      sm:text-[13px]
                    "
                  >
                    {service.cta}

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1766D6]
                        text-white
                        transition-transform
                        duration-300
                        hover:translate-x-1
                      "
                    >
                      <ArrowIcon />
                    </span>
                  </Link>
                </motion.div>

                {/* IMAGE */}

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 28,
                          rotate: 2,
                          scale: 0.96,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: -1.5,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.06,
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    ml-auto
                    w-full
                    max-w-[360px]
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[16/9]
                      overflow-hidden
                      bg-[#DCEBFF]
                      shadow-[0_18px_40px_rgba(0,0,0,0.16)]
                    "
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      draggable={false}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/15
                        via-transparent
                        to-transparent
                      "
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

/* =========================================================
   FOLDER TAB
========================================================= */

function FolderTab({
  side,
  background,
  active,
}: {
  side: "left" | "right";
  background: string;
  active: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: background,
      }}
      className={`
        pointer-events-none
        absolute
        top-[-27px]
        z-20
        h-[32px]
        w-[150px]
        border-[3px]
        border-white
        transition-all
        duration-500

        sm:w-[160px]
        lg:w-[170px]

        ${
          side === "left"
            ? `
                left-[11%]
                rounded-tl-[14px]
                rounded-tr-[14px]
              `
            : `
                right-[16%]
                rounded-tl-[14px]
                rounded-tr-[14px]
              `
        }

        ${active ? "top-[-31px]" : ""}
      `}
    >
      {/* LEFT CONNECTOR */}

      <span
        style={{
          backgroundColor: background,
        }}
        className="
          absolute
          -left-[22px]
          bottom-[-3px]
          h-[18px]
          w-[28px]
          rotate-[-48deg]
          border-l-[3px]
          border-white
        "
      />

      {/* RIGHT CONNECTOR */}

      <span
        style={{
          backgroundColor: background,
        }}
        className="
          absolute
          -right-[22px]
          bottom-[-3px]
          h-[18px]
          w-[28px]
          rotate-[48deg]
          border-r-[3px]
          border-white
        "
      />
    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[14px] w-[14px]"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}