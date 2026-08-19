"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  ArrowRight,
  Clock3,
  MapPin,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.09,
    },
  },
};

const contentItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const visualItem: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      delay: 0.08,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function FinalCtaBanner() {
  const prefersReducedMotion =
    useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        px-4
        py-8

        sm:px-5
        sm:py-10

        md:px-6
        md:py-11

        lg:px-7
        lg:py-12
      "
    >
      <motion.div
        variants={
          prefersReducedMotion
            ? undefined
            : containerVariants
        }
        initial={
          prefersReducedMotion
            ? false
            : "hidden"
        }
        whileInView={
          prefersReducedMotion
            ? undefined
            : "show"
        }
        viewport={{
          once: true,
          amount: 0.18,
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-[1420px]
          overflow-hidden

          rounded-[24px]

          sm:rounded-[28px]
          lg:rounded-[34px]

          shadow-[0_24px_65px_-42px_rgba(38,110,241,0.50)]
        "
      >
        {/* =====================================================
            BRAND BACKGROUND

            Main Tax India blue:
            #266EF1
        ===================================================== */}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#266EF1]"
        />

        {/* =====================================================
            SUBTLE BRAND GRADIENT

            IMPORTANT:
            No pale baby blue.
            Keeps #266EF1 dominant.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                118deg,
                #347AF3 0%,
                #2C73F2 28%,
                #266EF1 55%,
                #2268E9 78%,
                #1F61DB 100%
              )
            `,
          }}
        />

        {/* =====================================================
            VERY SUBTLE LEFT LIGHT

            This adds depth without making the left side pale.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            background: `
              radial-gradient(
                circle at 7% 10%,
                rgba(255,255,255,0.10) 0%,
                rgba(255,255,255,0.045) 25%,
                transparent 48%
              )
            `,
          }}
        />

        {/* =====================================================
            RIGHT SIDE DEPTH
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            background: `
              radial-gradient(
                circle at 92% 72%,
                rgba(10,47,132,0.17) 0%,
                rgba(10,47,132,0.06) 28%,
                transparent 52%
              )
            `,
          }}
        />

        {/* =====================================================
            TOP SOFT LIGHT
        ===================================================== */}

        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 14, 0],
                  y: [0, -6, 0],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none

            absolute
            -right-[100px]
            -top-[150px]

            h-[380px]
            w-[380px]

            rounded-full

            bg-white/[0.07]
            blur-[90px]

            lg:h-[480px]
            lg:w-[480px]
          "
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10

            grid
            grid-cols-1

            lg:min-h-[455px]
            lg:grid-cols-[0.96fr_1.04fr]
          "
        >
          {/* ===================================================
              LEFT
          =================================================== */}

          <div
            className="
              flex
              items-center

              px-6
              pb-2
              pt-9

              sm:px-9
              sm:pb-4
              sm:pt-11

              md:px-11

              lg:px-14
              lg:py-12

              xl:px-16
            "
          >
            <div className="w-full max-w-[590px]">

              {/* LABEL */}

              <motion.div
                variants={contentItem}
                className="
                  mb-3

                  text-[11px]
                  font-semibold
                  uppercase

                  tracking-[0.16em]

                  text-white/70

                  sm:mb-4
                  sm:text-[12px]
                "
              >
                Business & Tax Support
              </motion.div>

              {/* =================================================
                  HEADING
              ================================================= */}

              <motion.h2
                id="final-cta-heading"
                variants={contentItem}
                className="
                  max-w-[590px]

                  text-[31px]
                  font-semibold

                  leading-[1.07]
                  tracking-[-0.04em]

                  text-white

                  sm:text-[38px]

                  md:text-[41px]

                  lg:text-[42px]

                  xl:text-[46px]
                "
                style={{
                  fontFamily:
                    "var(--font-display, ui-sans-serif, system-ui, sans-serif)",
                }}
              >
                Ready to Register,
                <br className="hidden sm:block" />

                File or{" "}

                <span className="text-white">
                  Stay Compliant?
                </span>
              </motion.h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                variants={contentItem}
                className="
                  mt-4
                  max-w-[510px]

                  text-[14px]
                  leading-[1.65]

                  text-white/75

                  sm:mt-5
                  sm:text-[15px]
                "
                style={{
                  fontFamily:
                    "var(--font-body, ui-sans-serif, system-ui, sans-serif)",
                }}
              >
                Speak with a Chartered Accountant today.
                No cost, no commitment — just clear answers
                about your business.
              </motion.p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <motion.div
                variants={contentItem}
                className="
                  mt-6

                  flex
                  flex-col
                  gap-2.5

                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center

                  lg:mt-7
                "
              >
                {/* PRIMARY */}

                <Link
                  href="/contact-us"
                  className="
                    group

                    inline-flex
                    min-h-[47px]

                    items-center
                    justify-center

                    gap-2.5

                    rounded-full

                    bg-[#09274A]

                    px-5
                    py-2.5

                    text-[13px]
                    font-semibold
                    text-white

                    shadow-[0_14px_30px_-18px_rgba(4,25,60,0.60)]

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-[2px]
                    hover:bg-[#071E3A]

                    active:translate-y-0

                    sm:px-6
                    sm:text-[14px]
                  "
                >
                  Talk to a CA

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="
                      shrink-0

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* SECONDARY */}

                <Link
                  href="/contact-us"
                  className="
                    inline-flex
                    min-h-[47px]

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/35

                    bg-white

                    px-5
                    py-2.5

                    text-[13px]
                    font-semibold

                    text-[#205ECF]

                    shadow-[0_12px_25px_-18px_rgba(4,40,110,0.35)]

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-[2px]
                    hover:bg-[#F6F9FF]

                    active:translate-y-0

                    sm:px-6
                    sm:text-[14px]
                  "
                >
                  Explore the Process
                </Link>
              </motion.div>

              {/* =================================================
                  INFO
              ================================================= */}

              <motion.div
                variants={contentItem}
                className="
                  mt-5

                  flex
                  flex-wrap
                  items-center

                  gap-x-5
                  gap-y-2

                  text-[11px]
                  font-medium

                  text-white/65

                  sm:mt-6
                  sm:text-[12px]
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                  "
                >
                  <Clock3
                    size={13}
                    strokeWidth={1.8}
                  />

                  Mon–Sat, 10 AM – 9 PM
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                  "
                >
                  <MapPin
                    size={13}
                    strokeWidth={1.8}
                  />

                  Chennai, Tamil Nadu
                </span>
              </motion.div>
            </div>
          </div>

          {/* ===================================================
              RIGHT IMAGE
          =================================================== */}

          <motion.div
            variants={visualItem}
            className="
              relative

              flex
              min-h-[270px]

              items-end
              justify-center

              overflow-hidden

              px-3

              sm:min-h-[320px]
              sm:px-6

              md:min-h-[345px]

              lg:min-h-full
              lg:px-0
            "
          >
            {/* IMAGE GLOW */}

            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
                      opacity: [0.1, 0.16, 0.1],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none

                absolute
                bottom-[-10%]
                left-1/2

                h-[78%]
                w-[72%]

                -translate-x-1/2

                rounded-full

                bg-white/20
                blur-[65px]
              "
            />

            {/* =================================================
                PERSON IMAGE
            ================================================= */}

            <motion.img
              src="/images/cta-team-1.png"
              alt="Chartered accountant helping a business owner"
              draggable={false}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10

                h-auto
                w-full

                max-w-[400px]

                select-none

                object-contain
                object-bottom

                sm:max-w-[465px]

                md:max-w-[510px]

                lg:absolute
                lg:bottom-0
                lg:right-[2%]
                lg:max-w-[550px]

                xl:right-[4%]
                xl:max-w-[600px]

                2xl:right-[6%]
                2xl:max-w-[625px]
              "
              style={{
                willChange:
                  prefersReducedMotion
                    ? "auto"
                    : "transform",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}