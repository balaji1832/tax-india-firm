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
========================================================= */

const packages: PackageItem[] = [
  {
    title: "Proprietorship Launch",
    subtitle: "For freelancers & proprietorship launch",

    features: [
      "GST Registration in Chennai",
      "MSME Udyam Registration",
      "Shop & Establishment Registration",
      "PAN & TAN Application",
      "Current Account Opening Support",
    ],

    cta: "Start as a Proprietorship Launch in Chennai",
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

    cta: "Get Full Compliance Support",
  },
];

/* =========================================================
   MOTION
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1] as const;

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
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  const sectionInView = useInView(sectionRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
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

    const interval = window.setInterval(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % packages.length,
      );
    }, 5600);

    return () => {
      window.clearInterval(interval);
    };
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
        (current - 1 + packages.length) %
        packages.length,
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % packages.length,
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
        {/* BLUE BACKGROUND */}

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
            SOFT CENTER LIGHT
        ================================================= */}

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [-25, 28, -25],

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

        {/* SIDE GLASS BLOCKS */}

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

                !text-white

                sm:text-[8.5px]
              "
            >
              Startup Packages
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h2
            variants={fadeUp}
            className="
              mx-auto

              mt-4
              pt-3

              max-w-[650px]

              text-[28px]
              font-semibold

              leading-[1.06]
              tracking-[-0.045em]

              !text-white

              sm:text-[34px]
              md:text-[38px]
              lg:text-[41px]
            "
          >
            Launch Your Business with us 
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

              !text-white/75

              sm:text-[10.5px]
              md:text-[11px] pt-3
            "
          >
           Choose your perfect plan. Pre built bundles for business peoples
          </motion.p>
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP CARDS
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
          max-w-[1160px]

          grid-cols-3
          items-stretch

          gap-[18px]

          px-6

          lg:grid
          lg:-mt-[92px]

          xl:max-w-[1210px]
          xl:gap-[20px]
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
              className="h-full"
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

              ease: smoothEase,
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
              touchAction: "pan-y",

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
                info.offset.x < -55
              ) {
                nextSlide();
              }

              if (
                info.offset.x > 55
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
                  key={item.title}
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
            onClick={previousSlide}
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
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() =>
                    setActiveIndex(index)
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
                      duration: 0.3,
                      ease: smoothEase,
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
            onClick={nextSlide}
          >
            <ArrowRight
              size={15}
            />
          </SliderButton>
        </div>
      </div>

      {/* BOTTOM SPACE */}

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

const pricingCardThemes = [
  {
    accent: "#0F766E",
    accentDark: "#0B5F59",
    accentSoft: "#EAFBF7",
    accentSoftStrong: "#D8F5EE",
    border: "#B8E6DB",
    divider: "#D9EEE9",
    title: "#123C39",
    body: "#4F6E6B",
    label: "#6B8C88",
    glow: "rgba(15,118,110,.16)",
    top:
      "linear-gradient(180deg, rgba(228,250,245,.95) 0%, rgba(255,255,255,0) 100%)",
    surface:
      "linear-gradient(145deg, #FFFFFF 0%, #FBFFFE 54%, #F0FBF8 100%)",
  },
  {
    accent: "#2563EB",
    accentDark: "#174FC7",
    accentSoft: "#EEF4FF",
    accentSoftStrong: "#DCE9FF",
    border: "#B9CEF8",
    divider: "#DAE5F7",
    title: "#173A72",
    body: "#526A8A",
    label: "#7890B0",
    glow: "rgba(37,99,235,.18)",
    top:
      "linear-gradient(180deg, rgba(235,243,255,.98) 0%, rgba(255,255,255,0) 100%)",
    surface:
      "linear-gradient(145deg, #FFFFFF 0%, #FCFDFF 52%, #F0F5FF 100%)",
  },
  {
    accent: "#6D5BD0",
    accentDark: "#5847B5",
    accentSoft: "#F3F0FF",
    accentSoftStrong: "#E7E1FF",
    border: "#CFC7F4",
    divider: "#E5E0F5",
    title: "#40336E",
    body: "#665E80",
    label: "#8A80A8",
    glow: "rgba(109,91,208,.17)",
    top:
      "linear-gradient(180deg, rgba(244,241,255,.98) 0%, rgba(255,255,255,0) 100%)",
    surface:
      "linear-gradient(145deg, #FFFFFF 0%, #FEFDFF 52%, #F7F4FF 100%)",
  },
] as const;

function PricingCard({
  item,
  index,
  mobile,
}: {
  item: PackageItem;
  index: number;
  mobile: boolean;
}) {
  const theme =
    pricingCardThemes[index] ??
    pricingCardThemes[1];

  return (
    <motion.article
      whileHover={
        mobile
          ? undefined
          : {
              y: -6,
            }
      }
      transition={{
        duration: 0.34,
        ease: smoothEase,
      }}
      className="
        relative
        h-full
      "
    >
      {/* =====================================================
          POPULAR BADGE
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
              bg-white
              px-3.5
              py-[6px]
              shadow-[0_10px_26px_-15px_rgba(18,91,210,.52)]
            "
            style={{
              borderColor: theme.border,
            }}
          >
            <Sparkles
              size={11}
              style={{ color: theme.accent }}
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.14em]
                sm:text-[8.5px]
              "
              style={{ color: theme.accent }}
            >
              Most Popular
            </span>
          </div>
        </div>
      )}

      {/* =====================================================
          CARD
      ===================================================== */}

      <div
        className={`
          group/card
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          px-5
          pb-5
          pt-6
          transition-[transform,border-color,box-shadow]
          duration-300
          ease-out

          sm:px-6
          sm:pb-6
          sm:pt-6

          ${
            mobile
              ? `
                  min-h-[465px]
                  sm:min-h-[450px]
                  md:min-h-[455px]
                `
              : `
                  lg:h-[430px]
                  xl:h-[444px]
                `
          }
        `}
        style={{
          borderColor: theme.border,
          background: theme.surface,
          boxShadow: item.popular
            ? `0 26px 58px -30px ${theme.glow}`
            : `0 18px 44px -30px ${theme.glow}`,
        }}
      >
        {/* =================================================
            SOFT CARD ATMOSPHERE
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[118px]
          "
          style={{
            background: theme.top,
          }}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[52px]
            -top-[56px]
            h-[150px]
            w-[150px]
            rounded-full
            blur-[4px]
          "
          style={{
            background: theme.accentSoft,
            opacity: 0.76,
          }}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[3px]
          "
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${theme.accent} 18%, ${theme.accent} 82%, transparent 100%)`,
            opacity: item.popular ? 1 : 0.72,
          }}
        />

        {/* =================================================
            CARD HEADER
        ================================================= */}

        <div className="relative z-10">
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            <span
              className="
                flex
                h-[34px]
                w-[34px]
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[11px]
                font-bold
                text-white
                shadow-[0_8px_20px_-12px_rgba(0,0,0,.30)]
                sm:h-[36px]
                sm:w-[36px]
                sm:text-[12px]
              "
              style={{
                background: theme.accent,
              }}
            >
              {index + 1}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    sm:text-[8.5px]
                  "
                  style={{
                    color: theme.label,
                  }}
                >
                  Package
                </p>

                <span
                  className="
                    hidden
                    rounded-full
                    border
                    px-2.5
                    py-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.10em]
                    sm:inline-flex
                  "
                  style={{
                    color: theme.accent,
                    borderColor: theme.border,
                    background: theme.accentSoft,
                  }}
                >
                  {index === 0
                    ? "Starter"
                    : index === 1
                      ? "Company"
                      : "Annual"}
                </span>
              </div>

              <h3
                className="
                  mt-1
                  text-[19px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.03em]

                  sm:text-[20px]

                  lg:text-[20px]
                  xl:text-[21px]
                "
                style={{
                  color: theme.title,
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>

          <p
            className="
              mt-4
              min-h-[38px]
              max-w-[95%]
              text-[11px]
              leading-[1.6]

              sm:text-[11.5px]

              lg:text-[11px]
              xl:text-[11.5px]
            "
            style={{
              color: theme.body,
            }}
          >
            {item.subtitle}
          </p>
        </div>

        {/* DIVIDER */}

        <div
          className="
            relative
            z-10
            my-4
            h-px
          "
          style={{
            background: theme.divider,
          }}
        />

        {/* =================================================
            FEATURES
        ================================================= */}

        <ul
          className="
            relative
            z-10
            flex-1
            space-y-[10px]

            sm:space-y-[11px]

            lg:space-y-[9px]
            xl:space-y-[10px]
          "
        >
          {item.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-start
                gap-2.5
              "
            >
              <span
                className="
                  mt-[1px]
                  flex
                  h-[18px]
                  w-[18px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full

                  sm:h-[19px]
                  sm:w-[19px]
                "
                style={{
                  background: theme.accentSoftStrong,
                  color: theme.accent,
                }}
              >
                <Check
                  size={10}
                  strokeWidth={2.9}
                />
              </span>

              <span
                className="
                  pt-[1px]
                  text-[11px]
                  font-medium
                  leading-[1.52]

                  sm:text-[11.5px]

                  lg:text-[10.5px]
                  xl:text-[11px]
                "
                style={{
                  color: theme.body,
                }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* =================================================
            CTA BUTTON
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-5
          "
        >
          <Link
            href="/contact-us"
            className="
              group/button
              flex
              min-h-[44px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-[11px]
              border
              px-3
              py-2.5
              text-center
              text-[10px]
              font-semibold
              transition-[transform,box-shadow,filter]
              duration-300
              ease-out
              hover:-translate-y-[1px]
              hover:brightness-[0.97]
              sm:min-h-[46px]
              sm:text-[10.5px]
              xl:text-[11px]
            "
            style={{
              borderColor: item.popular
                ? theme.accent
                : theme.border,
              background: item.popular
                ? theme.accent
                : theme.accentSoft,
              color: item.popular
                ? "#FFFFFF"
                : theme.accentDark,
              boxShadow: item.popular
                ? `0 12px 24px -16px ${theme.glow}`
                : "none",
            }}
          >
            <span>{item.cta}</span>

            <ArrowRight
              size={14}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover/button:translate-x-[3px]
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
        {/* OUTER */}

        <GlassBlock
          className="
            -left-[18px]
            bottom-0

            h-[176px]
            w-[108px]

            rounded-tr-[26px]
          "
        />

        {/* MIDDLE */}

        <GlassBlock
          className="
            left-[65px]
            bottom-0

            h-[145px]
            w-[110px]

            rounded-t-[25px]
          "
        />

        {/* INNER */}

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
        {/* OUTER */}

        <GlassBlock
          className="
            -right-[18px]
            bottom-0

            h-[176px]
            w-[108px]

            rounded-tl-[26px]
          "
        />

        {/* MIDDLE */}

        <GlassBlock
          className="
            right-[65px]
            bottom-0

            h-[145px]
            w-[110px]

            rounded-t-[25px]
          "
        />

        {/* INNER */}

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
      <div
        aria-hidden="true"
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

        !text-[#1768E7]

        shadow-[0_8px_20px_-16px_rgba(25,63,115,.45)]

        transition-all
        duration-300

        hover:border-[#1768E7]
        hover:bg-[#1768E7]
        hover:!text-white
      "
    >
      {children}
    </motion.button>
  );
}