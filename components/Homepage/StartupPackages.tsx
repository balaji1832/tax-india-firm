"use client";

import Link from "next/link";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type PackageItem = {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

/* =========================================================
   CONTENT
   KEEPING YOUR CONTENT UNCHANGED
========================================================= */

const packages: PackageItem[] = [
  {
    title: "Sole Trader",
    subtitle:
      "For freelancers & sole proprietors",

    features: [
      "GST Registration in Chennai",
      "MSME Udyam Registration",
      "Shop & Establishment Registration",
      "PAN & TAN Application",
      "Current Account Opening Support",
    ],

    cta:
      "Start as a Sole Trader in Chennai",
  },

  {
    title: "Business Launch",
    subtitle:
      "For Pvt Ltd, LLP or OPC incorporations",

    features: [
      "Company Registration (Pvt Ltd / LLP / OPC)",
      "DSC — 2 Directors (2 year validity)",
      "DIN, MOA, AOA & Name Approval",
      "PAN & TAN for the Company",
      "GST & MSME Registration",
      "Current Account Opening Assistance",
    ],

    cta:
      "Register Your Company in Chennai",

    popular: true,
  },

  {
    title: "Full Compliance",
    subtitle:
      "For established businesses needing year-round support",

    features: [
      "Everything in Business Launch",
      "GST Return Filing — 12 Months",
      "TDS Filing — 12 Months",
      "Income Tax Return (ITR)",
      "Accounting & Books Maintenance",
      "ROC Annual Filing",
    ],

    cta:
      "Get Full Compliance Support",
  },
];

/* =========================================================
   MOTION
========================================================= */

const smoothEase = [
  0.16,
  1,
  0.3,
  1,
] as const;

const headerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.09,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.975,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.82,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function StartupPackages() {
  const [activeIndex, setActiveIndex] =
    useState(1);

  const [isPaused, setIsPaused] =
    useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const reduceMotion =
    useReducedMotion();

  const sectionInView =
    useInView(sectionRef, {
      amount: 0.12,
      margin:
        "0px 0px -8% 0px",
    });

  /* =======================================================
     MOBILE / TABLET AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      !sectionInView ||
      isPaused
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setActiveIndex(
          (current) =>
            (current + 1) %
            packages.length,
        );
      }, 5600);

    return () =>
      window.clearInterval(
        interval,
      );
  }, [
    reduceMotion,
    sectionInView,
    isPaused,
  ]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const previousSlide = () => {
    setActiveIndex(
      (current) =>
        (current -
          1 +
          packages.length) %
        packages.length,
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      (current) =>
        (current + 1) %
        packages.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate

        w-full

        overflow-hidden

        bg-white

        py-3
      "
    >
      {/* =====================================================
          BLUE HEADER AREA
      ===================================================== */}

      <div
        className="
          relative

          h-[330px]

          overflow-hidden

          sm:h-[345px]
          md:h-[355px]
          lg:h-[365px]
          xl:h-[375px]
        "
      >
        {/* =================================================
            BLUE BACKGROUND
            NO GRID / NO WHITE LINES
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            background: `
              linear-gradient(
                125deg,
                #3989F7 0%,
                #2B7CF1 28%,
                #1D6DE5 58%,
                #155FD2 78%,
                #1055BF 100%
              )
            `,
          }}
        />

        {/* =================================================
            VERY SOFT CENTER LIGHT
        ================================================= */}

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [
                    -25,
                    28,
                    -25,
                  ],

                  scale: [
                    1,
                    1.05,
                    1,
                  ],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none

            absolute
            left-1/2
            top-[-260px]

            h-[600px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-white/[0.10]

            blur-[130px]

            will-change-transform
          "
        />

        {/* =================================================
            SIDE GLASS BLOCKS
            REBUILT TO MATCH REFERENCE
        ================================================= */}

        <PricingGlassBlocks />

        {/* =================================================
            HEADER CONTENT
        ================================================= */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : headerContainer
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            reduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            relative
            z-20

            mx-auto

            flex
            max-w-[760px]

            flex-col
            items-center

            px-5
            pt-[44px]

            text-center

            sm:px-7
            sm:pt-[48px]

            md:pt-[52px]

            lg:pt-[54px]
          "
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/35

              bg-white/[0.15]

              px-3.5
              py-[6px]

              shadow-[inset_0_1px_0_rgba(255,255,255,.18)]

              backdrop-blur-md
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]

                rounded-full

                bg-white
              "
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase

                tracking-[0.17em]

                text-white

                sm:text-[8.5px]
              "
            >
              Startup Packages
            </span>
          </motion.div>

          {/* =================================================
              HEADING — FULL WHITE
          ================================================= */}

          <motion.h2
            variants={fadeUp}
            className="
              mx-auto

              mt-4

              max-w-[650px]

              text-[28px]
              font-semibold

              leading-[1.06]
              tracking-[-0.045em]

              !text-white pt-3

              sm:text-[34px]
              md:text-[38px]
              lg:text-[41px]
            "
          >
            Launch Your Business in
            Tamil Nadu. Pick Your Plan.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto

              mt-4

              max-w-[550px]

              text-[10px]
              leading-[1.65]

              text-white/75

              sm:text-[10.5px]
              md:text-[11px]
            "
          >
            Pre-built bundles for the most
            common business setups in
            Chennai. Affordable,
            expert-handled and delivered
            on time.
          </motion.p>
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP CARDS
          ALL EXACTLY SAME HEIGHT + ALIGNMENT
      ===================================================== */}

      <motion.div
        variants={
          reduceMotion
            ? undefined
            : cardContainer
        }
        initial={
          reduceMotion
            ? false
            : "hidden"
        }
        whileInView={
          reduceMotion
            ? undefined
            : "visible"
        }
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          relative
          z-30

          mx-auto

          -mt-[116px]

          hidden
          w-full
          max-w-[1050px]

          grid-cols-3
          items-stretch

          gap-[14px]

          px-6

          lg:grid

          lg:-mt-[92px]
          xl:max-w-[1090px]
          xl:gap-[17px]
        "
      >
        {packages.map(
          (
            item,
            index,
          ) => (
            <motion.div
              key={item.title}
              variants={
                reduceMotion
                  ? undefined
                  : cardReveal
              }
              className="
                h-full
              "
            >
              <PricingCard
                item={item}
                index={index}
                mobile={false}
              />
            </motion.div>
          ),
        )}
      </motion.div>

      {/* =====================================================
          MOBILE / TABLET
      ===================================================== */}

      <div
        className="
          relative
          z-30

          -mt-[116px]

          lg:hidden
        "
        onMouseEnter={() =>
          setIsPaused(true)
        }
        onMouseLeave={() =>
          setIsPaused(false)
        }
        onTouchStart={() =>
          setIsPaused(true)
        }
        onTouchEnd={() => {
          window.setTimeout(
            () =>
              setIsPaused(false),
            750,
          );
        }}
      >
        <div
          className="
            overflow-hidden

            pt-4
          "
        >
          <motion.div
            animate={{
              x: `-${activeIndex * 100}%`,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.68,

              ease:
                smoothEase,
            }}
            drag={
              reduceMotion
                ? false
                : "x"
            }
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.035}
            dragMomentum={false}
            style={{
              touchAction:
                "pan-y",

              willChange:
                reduceMotion
                  ? "auto"
                  : "transform",
            }}
            onDragEnd={(
              _,
              info,
            ) => {
              if (
                info.offset.x <
                -55
              ) {
                nextSlide();
              }

              if (
                info.offset.x >
                55
              ) {
                previousSlide();
              }
            }}
            className="
              flex
              transform-gpu
            "
          >
            {packages.map(
              (
                item,
                index,
              ) => (
                <div
                  key={
                    item.title
                  }
                  className="
                    min-w-full
                    shrink-0

                    px-4

                    sm:px-14

                    md:px-[100px]
                  "
                >
                  <div
                    className="
                      mx-auto
                      max-w-[430px]
                    "
                  >
                    <PricingCard
                      item={item}
                      index={index}
                      mobile
                    />
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        <div
          className="
            mx-auto
            mt-5

            flex
            max-w-[430px]

            items-center
            justify-between

            px-4

            sm:px-0
          "
        >
          <SliderButton
            label="Previous package"
            onClick={
              previousSlide
            }
          >
            <ArrowLeft
              size={15}
            />
          </SliderButton>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {packages.map(
              (
                item,
                index,
              ) => (
                <button
                  key={
                    item.title
                  }
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() =>
                    setActiveIndex(
                      index,
                    )
                  }
                  className="
                    flex
                    h-8

                    items-center
                    justify-center

                    px-1
                  "
                >
                  <motion.span
                    animate={{
                      width:
                        activeIndex ===
                        index
                          ? 24
                          : 6,
                    }}
                    transition={{
                      duration:
                        0.3,

                      ease:
                        smoothEase,
                    }}
                    className={`
                      h-[6px]

                      rounded-full

                      ${
                        activeIndex ===
                        index
                          ? "bg-[#1768E7]"
                          : "bg-[#C6D2E2]"
                      }
                    `}
                  />
                </button>
              ),
            )}
          </div>

          <SliderButton
            label="Next package"
            onClick={
              nextSlide
            }
          >
            <ArrowRight
              size={15}
            />
          </SliderButton>
        </div>
      </div>

      {/* bottom breathing space */}

      <div
        className="
          h-10

          sm:h-12
          lg:h-16
        "
      />
    </section>
  );
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({
  item,
  index,
  mobile,
}: {
  item: PackageItem;
  index: number;
  mobile: boolean;
}) {
  return (
    <motion.article
      whileHover={
        mobile
          ? undefined
          : {
              y: -4,
            }
      }
      transition={{
        duration: 0.28,
        ease: smoothEase,
      }}
      className="
        relative
        h-full
      "
    >
      {/* =====================================================
          POPULAR BADGE
          FLOATS ONLY — DOES NOT CHANGE CARD ALIGNMENT
      ===================================================== */}

      {item.popular && (
        <div
          className="
            absolute

            left-1/2
            top-0
            z-40

            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-1.5

              whitespace-nowrap

              rounded-full

              border
              border-[#C5D9F8]

              bg-white

              px-3
              py-[5px]

              shadow-[0_8px_22px_-14px_rgba(18,91,210,.45)]
            "
          >
            <Sparkles
              size={9}
              className="
                text-[#1768E7]
              "
            />

            <span
              className="
                text-[7px]
                font-bold
                uppercase

                tracking-[0.13em]

                text-[#1768E7]
              "
            >
              Most Popular
            </span>
          </div>
        </div>
      )}

      {/* =====================================================
          ALL DESKTOP CARDS:
          SAME HEIGHT EXACTLY
      ===================================================== */}

      <div
        className={`
          group/card
          relative

          flex
          h-full
          flex-col

          overflow-hidden

          rounded-[15px]

          border

          bg-white

          px-[18px]
          pb-[17px]
          pt-[19px]

          transition-all
          duration-300

          sm:px-5
          sm:pb-5
          sm:pt-5

          ${
            mobile
              ? `
                  min-h-[420px]

                  sm:min-h-[400px]
                `
              : `
                  lg:h-[360px]

                  xl:h-[372px]
                `
          }

          ${
            item.popular
              ? `
                  border-[#A7C8F8]

                  shadow-[0_22px_50px_-27px_rgba(20,96,220,.38)]
                `
              : `
                  border-[#D9E3EF]

                  shadow-[0_15px_42px_-29px_rgba(25,61,108,.30)]

                  hover:border-[#BED1E7]
                `
          }
        `}
      >
        {/* =================================================
            VERY SUBTLE CARD TOP LIGHT
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0

            h-[78px]
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(239,245,255,.82) 0%,
                rgba(255,255,255,0) 100%
              )
            `,
          }}
        />

        {/* popular top edge */}

        {item.popular && (
          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              top-0

              h-[2px]

              bg-[#2475ED]
            "
          />
        )}

        {/* =================================================
            CARD HEADER
        ================================================= */}

        <div
          className="
            relative
            z-10
          "
        >
          <div
            className="
              flex
              items-center

              gap-2.5
            "
          >
            <span
              className="
                flex
                h-[25px]
                w-[25px]

                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#1768E7]

                text-[9px]
                font-bold

                text-white
              "
            >
              {index + 1}
            </span>

            <div
              className="
                min-w-0
              "
            >
              <p
                className="
                  text-[6.5px]
                  font-semibold
                  uppercase

                  tracking-[0.14em]

                  text-[#9AA8B8]
                "
              >
                Package
              </p>

              <h3
                className="
                  mt-[1px]

                  text-[15px]
                  font-semibold

                  leading-[1.15]
                  tracking-[-0.025em]

                  text-[#172A43]

                  sm:text-[16px]
                "
              >
                {item.title}
              </h3>
            </div>
          </div>

          <p
            className="
              mt-3

              min-h-[29px]

              text-[8.5px]
              leading-[1.5]

              text-[#74859A]

              sm:text-[9px]
            "
          >
            {item.subtitle}
          </p>
        </div>

        {/* divider */}

        <div
          className="
            relative
            z-10

            my-3

            h-px

            bg-[#E6ECF4]
          "
        />

        {/* =================================================
            FEATURES
        ================================================= */}

        <ul
          className="
            relative
            z-10

            flex-1

            space-y-[8px]
          "
        >
          {item.features.map(
            (feature) => (
              <li
                key={feature}
                className="
                  flex
                  items-start

                  gap-2
                "
              >
                <span
                  className="
                    mt-[1px]

                    flex
                    h-[14px]
                    w-[14px]

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#EAF2FF]

                    text-[#1768E7]
                  "
                >
                  <Check
                    size={8}
                    strokeWidth={
                      2.8
                    }
                  />
                </span>

                <span
                  className="
                    text-[8.5px]
                    leading-[1.42]

                    text-[#56697E]

                    sm:text-[9px]

                    xl:text-[9.5px]
                  "
                >
                  {feature}
                </span>
              </li>
            ),
          )}
        </ul>

        {/* =================================================
            CTA
        ================================================= */}

        <div
          className="
            relative
            z-10

            mt-4
          "
        >
          <Link
            href="/contact-us"
            className={`
              group/button

              flex
              min-h-[35px]

              w-full

              items-center
              justify-center

              gap-1.5

              rounded-[8px]

              border

              px-2.5
              py-2

              text-center

              text-[8px]
              font-semibold

              transition-all
              duration-300

              sm:text-[8.5px]

              ${
                item.popular
                  ? `
                      border-[#1768E7]

                      bg-[#1768E7]

                      text-white

                      shadow-[0_8px_20px_-13px_rgba(23,104,231,.50)]

                      hover:border-[#0F58C7]
                      hover:bg-[#0F58C7]
                    `
                  : `
                      border-[#BAD0EC]

                      bg-white

                      text-[#1768E7]

                      hover:border-[#1768E7]
                      hover:bg-[#1768E7]
                      hover:text-white
                    `
              }
            `}
          >
            <span>
              {item.cta}
            </span>

            <ArrowRight
              size={11}
              className="
                shrink-0

                transition-transform
                duration-300

                group-hover/button:translate-x-[2px]
              "
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   GLASS BLOCK PATTERN
========================================================= */

function PricingGlassBlocks() {
  return (
    <>
      {/* =====================================================
          LEFT CLUSTER
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-0

          hidden

          h-[205px]
          w-[270px]

          md:block

          xl:w-[300px]
        "
      >
        {/* outer tallest */}

        <GlassBlock
          className="
            -left-[18px]
            bottom-0

            h-[176px]
            w-[108px]

            rounded-tr-[26px]
          "
        />

        {/* middle */}

        <GlassBlock
          className="
            left-[65px]
            bottom-0

            h-[145px]
            w-[110px]

            rounded-t-[25px]
          "
        />

        {/* inside smaller */}

        <GlassBlock
          className="
            left-[145px]
            bottom-0

            h-[112px]
            w-[110px]

            rounded-t-[24px]
          "
        />
      </div>

      {/* =====================================================
          RIGHT CLUSTER
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          right-0

          hidden

          h-[205px]
          w-[270px]

          md:block

          xl:w-[300px]
        "
      >
        {/* outer tallest */}

        <GlassBlock
          className="
            -right-[18px]
            bottom-0

            h-[176px]
            w-[108px]

            rounded-tl-[26px]
          "
        />

        {/* middle */}

        <GlassBlock
          className="
            right-[65px]
            bottom-0

            h-[145px]
            w-[110px]

            rounded-t-[25px]
          "
        />

        {/* inside */}

        <GlassBlock
          className="
            right-[145px]
            bottom-0

            h-[112px]
            w-[110px]

            rounded-t-[24px]
          "
        />
      </div>
    </>
  );
}

/* =========================================================
   SINGLE GLASS BLOCK
========================================================= */

function GlassBlock({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`
        absolute

        overflow-hidden

        border
        border-white/[0.08]

        shadow-[inset_0_1px_0_rgba(255,255,255,.14)]

        backdrop-blur-[4px]

        ${className}
      `}
      style={{
        background: `
          linear-gradient(
            180deg,
            rgba(255,255,255,0.17) 0%,
            rgba(188,218,255,0.12) 54%,
            rgba(124,179,247,0.08) 100%
          )
        `,
      }}
    >
      {/* top soft highlight */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-[42%]

          bg-gradient-to-b
          from-white/[0.07]
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   MOBILE SLIDER BUTTON
========================================================= */

function SliderButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileTap={{
        scale: 0.94,
      }}
      className="
        flex
        h-9
        w-9

        items-center
        justify-center

        rounded-full

        border
        border-[#D2DDEA]

        bg-white

        text-[#1768E7]

        shadow-[0_8px_20px_-16px_rgba(25,63,115,.45)]

        transition-all
        duration-300

        hover:border-[#1768E7]
        hover:bg-[#1768E7]
        hover:text-white
      "
    >
      {children}
    </motion.button>
  );
}