"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type PackageType = {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const packages: PackageType[] = [
  {
    title: "Sole Trader",
    subtitle: "For freelancers & sole proprietors",
    features: [
      "GST Registration in Chennai",
      "MSME Udyam Registration",
      "Shop & Establishment Registration",
      "PAN & TAN Application",
      "Current Account Opening Support",
    ],
    cta: "Start as a Sole Trader in Chennai",
  },
  {
    title: "Business Launch",
    subtitle: "For Pvt Ltd, LLP or OPC incorporations",
    features: [
      "Company Registration (Pvt Ltd / LLP / OPC)",
      "DSC — 2 Directors (2 year validity)",
      "DIN, MOA, AOA & Name Approval",
      "PAN & TAN for the Company",
      "GST & MSME Registration",
      "Current Account Opening Assistance",
    ],
    cta: "Register Your Company in Chennai",
    popular: true,
  },
  {
    title: "Full Compliance",
    subtitle: "For established businesses needing year-round support",
    features: [
      "Everything in Business Launch",
      "GST Return Filing — 12 Months",
      "TDS Filing — 12 Months",
      "Income Tax Return (ITR)",
      "Accounting & Books Maintenance",
      "ROC Annual Filing",
    ],
    cta: "Get Full Compliance Support",
  },
];

function PackageCard({
  item,
  index,
}: {
  item: PackageType;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: false,
        amount: 0.2,
        margin: "0px 0px -6% 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 1.05,
        delay: reduceMotion ? 0 : index * 0.10,
        ease: smoothEase,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
            }
      }
      style={{
        willChange: reduceMotion ? "auto" : "transform, opacity",
      }}
      className="group relative h-full pt-4"
    >
      {/* POPULAR OUTER GLOW */}
      {item.popular && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-3
            bottom-[-10px]
            top-5
            rounded-[24px]
            bg-[#278650]/6
            blur-2xl
          "
        />
      )}

      {/* MOST POPULAR BADGE */}
      {item.popular && (
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.92,
                  y: 4,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
          }
          viewport={{ once: false, amount: 0.55 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 0.28,
            ease: smoothEase,
          }}
          className="
            absolute
            left-1/2
            top-0
            z-30
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              bg-[#D99A32]
              px-3
              py-[5px]
              shadow-[0_8px_22px_rgba(244,166,42,0.28)]
            "
          >
            <Sparkles size={11} className="text-white" />

            <span
              className="
                !text-white
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
              "
            >
              Most Popular
            </span>
          </div>
        </motion.div>
      )}

      {/* CARD */}
      <div
        className={`
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[22px]
          border
          bg-white
          p-6
          shadow-[0_14px_38px_rgba(20,42,68,0.055)]
          transition-all
          duration-500

          sm:p-7
          lg:p-7
          xl:p-8

          ${
            item.popular
              ? `
                border-[#8AB99C]
                shadow-[0_18px_46px_rgba(34,126,77,0.09)]
              `
              : `
                border-[#E2E7EB]
                hover:border-[#C7D0D7]
                hover:shadow-[0_22px_52px_rgba(26,55,84,0.09)]
              `
          }
        `}
      >
        {/* HOVER GRADIENT */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100

            ${
              item.popular
                ? "bg-gradient-to-br from-[#eef9f2]/70 via-transparent to-transparent"
                : "bg-gradient-to-br from-[#eef7fc]/80 via-transparent to-transparent"
            }
          `}
        />

        {/* TOP GLOW */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[180px]
            w-[180px]
            rounded-full
            blur-[75px]
            transition-all
            duration-500

            ${
              item.popular
                ? "bg-[#278650]/0 group-hover:bg-[#278650]/10"
                : "bg-[#2e8fc9]/0 group-hover:bg-[#2e8fc9]/8"
            }
          `}
        />

        {/* TOP ACCENT LINE */}
        <div
          className={`
            absolute
            left-0
            top-0
            h-[3px]
            w-0
            transition-all
            duration-500
            group-hover:w-full

            ${
              item.popular
                ? "bg-gradient-to-r from-[#278650] to-[#54b780]"
                : "bg-gradient-to-r from-[#338fc6] to-[#7dc7ed]"
            }
          `}
        />

        {/* TITLE */}
        <div className="relative z-10">
          <h3
            className="
              !text-[#17293d]
              text-[18px]
              font-semibold
              leading-[1.25]
              tracking-[-0.018em]

              sm:text-[19px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2.5
              !text-[#7A8794]
              text-[11.5px]
              leading-[1.55]

              sm:text-[12.5px]
            "
          >
            {item.subtitle}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="relative z-10 my-6 h-px bg-[#edf1f4]" />

        {/* FEATURES */}
        <ul className="relative z-10 flex-1 space-y-4">
          {item.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -7,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              viewport={{ once: false, amount: 0.55 }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                delay:
                  reduceMotion
                    ? 0
                    : 0.08 + featureIndex * 0.055,
                ease: smoothEase,
              }}
              className="flex items-start gap-3"
            >
              <div
                className={`
                  mt-[2px]
                  flex
                  h-[17px]
                  w-[17px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border

                  ${
                    item.popular
                      ? "border-[#70ad8a] bg-[#f0f9f4]"
                      : "border-[#80b9dd] bg-[#f2f8fc]"
                  }
                `}
              >
                <Check
                  size={9}
                  strokeWidth={3}
                  className={
                    item.popular
                      ? "text-[#278650]"
                      : "text-[#2e8dc7]"
                  }
                />
              </div>

              <span
                className="
                  !text-[#526170]
                  text-[13px]
                  leading-[1.5]

                  sm:text-[12px]
                  xl:text-[13.5px]
                "
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative z-10 mt-12">
          <Link
            href="https://taxindiafirm.com/contact-us"
            className={`
              group/btn
              relative
              flex
              min-h-[44px]
              w-full
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-[10px]
              px-6.5
              py-2.5
              text-center
              text-[12px]
              font-semibold
              transition-all
              duration-300

              sm:text-[13px]

              ${
                item.popular
                  ? `
                    bg-[#278650]
                    text-white
                    shadow-[0_9px_25px_rgba(39,134,80,0.20)]
                    hover:bg-[#207244]
                    hover:shadow-[0_13px_30px_rgba(39,134,80,0.28)]
                  `
                  : `
                    bg-[#eaf3ff]
                    text-[#2a88c3]
                    hover:bg-[#dcecff]
                    hover:text-[#176fa8]
                  `
              }
            `}
          >
            <span className="relative z-10">
              {item.cta}
            </span>

            <ArrowRight
              size={15}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover/btn:translate-x-1
              "
            />

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                group-hover/btn:translate-x-full
              "
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function StartupPackages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const isSectionInView = useInView(sectionRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
  });

  useEffect(() => {
    if (
      reduceMotion ||
      !isSectionInView ||
      isPaused
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [reduceMotion, isSectionInView, isPaused]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % packages.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + packages.length) % packages.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1360px]
          px-5

          sm:px-8
          md:px-20
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: false,
            amount: 0.35,
            margin: "0px 0px -8% 0px",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.05,
            ease: smoothEase,
          }}
          style={{
            willChange: reduceMotion ? "auto" : "transform, opacity",
          }}
          className="
            mx-auto
            mb-12
            max-w-[720px]
            text-center

            sm:mb-14
            lg:mb-16
          "
        >
          {/* LABEL */}
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#BFC8D1]" />

            <span
              className="
                !text-[#6F7C88]
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]

                sm:text-[11px]
              "
            >
              Startup Packages
            </span>

            <span className="h-px w-8 bg-[#BFC8D1]" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !text-[#17283A]
              text-[25px]
              font-semibold
              leading-[1.18]
              tracking-[-0.03em]

              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[40px]
            "
          >
            Launch Your Business in Tamil Nadu.{" "}
            <span className="!text-[#2C7F53]">
              Pick Your Plan.
            </span>
          </h2>

          {/* SUB HEADING */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[600px]
              !text-[#7B8793]
              text-[13px]
              leading-6

              sm:text-[13px]
              md:text-[14px]
            "
          >
            Pre-built bundles for the most common business setups in Chennai.
            Affordable, expert-handled and delivered on time.
          </p>
        </motion.div>

        {/* =====================================
            DESKTOP CARDS
        ====================================== */}

        <div
          className="
            hidden
            grid-cols-3
            items-stretch
            gap-7

            lg:grid
            xl:gap-8
            2xl:gap-9
          "
        >
          {packages.map((item, index) => (
            <PackageCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =====================================
            MOBILE + TABLET SLIDER
        ====================================== */}

        <div
          className="lg:hidden mt-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            window.setTimeout(
              () => setIsPaused(false),
              700
            );
          }}
        >
          {/*
            IMPORTANT:
            pt-5 prevents badge cutting.
            overflow-hidden starts below badge space.
          */}
          <div className="pt-3">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${activeIndex * 100}%`,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.95,
                  ease: smoothEase,
                }}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.04}
                dragMomentum={false}
                style={{
                  willChange: reduceMotion ? "auto" : "transform",
                }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    nextSlide();
                  }

                  if (info.offset.x > 60) {
                    previousSlide();
                  }
                }}
              >
                {packages.map((item, index) => (
                  <div
                    key={item.title}
                    className="
                      w-full
                      min-w-full
                      shrink-0
                      px-1

                      sm:px-5
                    "
                  >
                    <div
                      className="
                        mx-auto
                        max-w-[600px]
                      "
                    >
                      <PackageCard
                        item={item}
                        index={index}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-7 flex items-center justify-center gap-2.5">
            {packages.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveIndex(index)}
                className="
                  flex
                  h-5
                  items-center
                  justify-center
                "
              >
                <motion.span
                  animate={{
                    width: activeIndex === index ? 26 : 7,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.42,
                    ease: smoothEase,
                  }}
                  className={`
                    block
                    h-[7px]
                    rounded-full

                    ${
                      activeIndex === index
                        ? "bg-[#278650]"
                        : "bg-[#bbc8d3]"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          <p
            className="
              mt-1
              text-center
              !text-[#95a2ae]
              text-[10px]
              sm:text-[11px]
            "
          >
            Swipe to explore packages
          </p>
        </div>

        {/* =====================================
            BOTTOM INFO
        ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: false, amount: 0.35, margin: "0px 0px -6% 0px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: smoothEase,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-[980px]
            flex-col
            items-center
            justify-center
            gap-2
            rounded-[16px]
            border
            border-[#E5E9ED]
            bg-[#FAFBFC]
            px-4
            py-5
            text-center
            shadow-[0_10px_30px_rgba(20,45,70,0.045)]
            backdrop-blur-sm

            sm:mt-14
            md:flex-row
            md:gap-2.5
            lg:mt-16
          "
        >
          <span
            className="
              !text-[#687a8b]
              text-[12px]
              leading-5

              sm:text-[13px]
            "
          >
            All packages include a dedicated expert, document support and
            on-time delivery.
          </span>

          <span
            className="
              hidden
              h-1
              w-1
              rounded-full
              bg-[#a4b1bd]

              md:block
            "
          />

          <Link
            href="/contact-us"
            className="
              group/footer
              inline-flex
              items-center
              gap-1.5
              !text-[#2780b8]
              text-[12px]
              font-semibold
              transition-colors
              duration-300

              hover:!text-[#1d6b9c]

              sm:text-[13px]
            "
          >
            Custom plans available, talk to us directly

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover/footer:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}