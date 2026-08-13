"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

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
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
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
            bg-[#18894f]/10
            blur-xl
          "
        />
      )}

      {/* MOST POPULAR BADGE */}
      {item.popular && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 18,
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
              bg-[#F4A62A]
              px-3.5
              py-[6px]
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
          rounded-[18px]
          border
          bg-white
          p-5
          shadow-[0_12px_35px_rgba(20,42,68,0.06)]
          transition-all
          duration-500

          sm:p-6
          lg:p-6
          xl:p-7

          ${
            item.popular
              ? `
                border-[#278650]
                shadow-[0_17px_45px_rgba(34,126,77,0.11)]
              `
              : `
                border-[#dce5ed]
                hover:border-[#b9ccd9]
                hover:shadow-[0_20px_50px_rgba(26,55,84,0.10)]
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
              text-[19px]
              font-semibold
              leading-tight
              tracking-[-0.02em]

              sm:text-[20px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              !text-[#77899c]
              text-[13px]
              leading-[1.55]

              sm:text-[14px]
            "
          >
            {item.subtitle}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="relative z-10 my-5 h-px bg-[#edf1f4]" />

        {/* FEATURES */}
        <ul className="relative z-10 flex-1 space-y-3.5">
          {item.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: 0.1 + featureIndex * 0.045,
              }}
              className="flex items-start gap-2.5"
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
                  !text-[#4e5f70]
                  text-[13px]
                  leading-[1.5]

                  sm:text-[13.5px]
                  xl:text-[14px]
                "
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative z-10 mt-6">
          <Link
            href="https://taxindiafirm.com/contact-us"
            className={`
              group/btn
              relative
              flex
              min-h-[46px]
              w-full
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-[9px]
              px-4
              py-3
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

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

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
      className="
        relative
        overflow-hidden
        bg-[#f4f7fa]
        py-14

        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================
          WHITE DOTTED BACKGROUND
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(202, 215, 223, 0.75) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* SECOND SOFT DOT LAYER */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,82,110,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          backgroundPosition: "11px 11px",
        }}
      />

      {/* BLUE GLOW */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[100px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#2f91cd]/10
          blur-[120px]
        "
      />

      {/* GREEN GLOW */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[20px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#278650]/8
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-4

          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-8
            max-w-[780px]
            text-center

            sm:mb-10
            lg:mb-11
          "
        >
          {/* LABEL */}
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-7 bg-[#318dc5]" />

            <span
              className="
                !text-[#3188be]
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]

                sm:text-[11px]
              "
            >
              Startup Packages
            </span>

            <span className="h-px w-7 bg-[#318dc5]" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !text-[#13253a]
              text-[28px]
              font-semibold
              leading-[1.18]
              tracking-[-0.035em]

              sm:text-[34px]
              md:text-[39px]
              lg:text-[44px]
            "
          >
            Launch Your Business in Tamil Nadu.{" "}
            <span className="!text-[#278650]">
              Pick Your Plan.
            </span>
          </h2>

          {/* SUB HEADING */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]
              !text-[#718496]
              text-[13px]
              leading-6

              sm:text-[14px]
              md:text-[15px]
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
            gap-5

            lg:grid
            xl:gap-6
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
          className="lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/*
            IMPORTANT:
            pt-5 prevents badge cutting.
            overflow-hidden starts below badge space.
          */}
          <div className="pt-2">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${activeIndex * 100}%`,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) {
                    nextSlide();
                  }

                  if (info.offset.x > 50) {
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

                      sm:px-3
                    "
                  >
                    <div
                      className="
                        mx-auto
                        max-w-[620px]
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
          <div className="mt-5 flex items-center justify-center gap-2">
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
                    duration: 0.3,
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
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-[970px]
            flex-col
            items-center
            justify-center
            gap-2
            rounded-[14px]
            border
            border-white/80
            bg-white/65
            px-4
            py-4
            text-center
            shadow-[0_8px_25px_rgba(20,45,70,0.04)]
            backdrop-blur-md

            sm:mt-9
            md:flex-row
            md:gap-2.5
            lg:mt-10
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