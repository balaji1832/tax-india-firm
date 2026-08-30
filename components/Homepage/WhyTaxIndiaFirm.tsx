"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileCheck2,
  Languages,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

/* =========================================================
   MOTION
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1] as const;

const sectionVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1,
    },
  },
};

const headingVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.58,
      delay: 0.02,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyTaxIndiaFirm() {
  const reduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMobileState);

      return () => {
        mediaQuery.removeEventListener(
          "change",
          updateMobileState,
        );
      };
    }

    mediaQuery.addListener(updateMobileState);

    return () => {
      mediaQuery.removeListener(updateMobileState);
    };
  }, []);

  /*
   * Continuous decorative animation is disabled on mobile.
   * Entry animations still run card-by-card.
   */
  const pauseDecorativeMotion =
    Boolean(reduceMotion) || isMobile;

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden

        pt-13 pb-25
      "
    >
      {/* =====================================================
          NEW LIGHT BRAND BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white"
      />

      {/* =====================================================
          SOFT TOP LIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[-240px]

          h-[520px]
          w-[1000px]

          -translate-x-1/2

          rounded-full

          bg-white/70

          blur-[120px]
        "
      />

      {/* =====================================================
          LEFT AURORA
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          pauseDecorativeMotion
            ? undefined
            : {
                x: [0, 35, -12, 0],
                y: [0, 18, 30, 0],
                scale: [1, 1.08, 1.04, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -left-[170px]
          top-[120px]

          h-[460px]
          w-[460px]

          rounded-full

          bg-[#4A9CFF]/[0.13]

          blur-[135px]

          md:will-change-transform
        "
      />

      {/* =====================================================
          RIGHT AURORA
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          pauseDecorativeMotion
            ? undefined
            : {
                x: [0, -40, 15, 0],
                y: [0, -20, 24, 0],
                scale: [1, 1.06, 1.1, 1],
              }
        }
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -right-[170px]
          top-[34%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#74A8FF]/[0.12]

          blur-[145px]

          md:will-change-transform
        "
      />

      {/* =====================================================
          CENTER BLUE AURA
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          pauseDecorativeMotion
            ? undefined
            : {
                x: [-18, 20, -18],
                y: [-8, 12, -8],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          left-[52%]
          top-[45%]

          h-[420px]
          w-[620px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#A9CFFF]/[0.22]

          blur-[130px]

          md:will-change-transform
        "
      />

      {/* =====================================================
          BOTTOM LIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-[-260px]
          left-1/2

          h-[450px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-white/70

          blur-[120px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.7]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(74, 132, 210, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(74, 132, 210, 0.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "54px 54px",

          WebkitMaskImage:
            "radial-gradient(circle at 50% 48%, black 0%, rgba(0,0,0,.7) 46%, transparent 82%)",

          maskImage:
            "radial-gradient(circle at 50% 48%, black 0%, rgba(0,0,0,.7) 46%, transparent 82%)",
        }}
      />

      {/* =====================================================
          VERY SUBTLE DIAGONAL LIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[-15%]
          top-[31%]

          h-[250px]
          w-[130%]

          -rotate-[5deg]

          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent

          blur-[60px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{
          once: true,
          amount: 0.12,
          margin: "0px 0px -8% 0px",
        }}
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1400px]

          px-5

          sm:px-8

          md:px-10

          lg:px-14

          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            max-w-[800px]

            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            variants={headingVariant}
            className="
              inline-flex
              items-center
              gap-2.5

              rounded-full

              border
              border-[#2D8CFF]/20

              bg-white/75

              px-3.5
              py-2

              shadow-[0_12px_34px_-22px_rgba(36,102,190,0.38)]

              sm:backdrop-blur-xl
            "
          >
            <motion.span
              animate={
                    pauseDecorativeMotion
                      ? undefined
                      : {
                      scale: [1, 1.28, 1],
                      opacity: [0.65, 1, 0.65],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-[7px]
                w-[7px]

                rounded-full

                bg-[#2D8CFF]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase

                tracking-[0.18em]

                text-[#2D8CFF]

                sm:text-[10.5px]
              "
            >
              Why Tax India Firm
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={headingVariant}
            className="
              mx-auto
              mt-5

              max-w-[790px]

              text-[32px]
              font-semibold

              leading-[1.07]
              tracking-[-0.045em]

              text-[#10233F]

              sm:text-[40px]

              md:text-[46px]

              lg:text-[50px]
            "
          >
            Built Around How Modern
            <br className="hidden sm:block" />

            Businesses{" "}

            <span className="text-[#2D8CFF]">
              Actually Work.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={headingVariant}
            className="
              mx-auto
              mt-5

              max-w-[640px]

              text-[13px]
              leading-[1.75]

              text-[#667B93]

              sm:text-[14px]

              md:text-[14.5px]
            "
          >
            Clear communication, accountable professionals
            and proactive compliance support — brought
            together in one seamless experience.
          </motion.p>
        </div>

        {/* =====================================================
            BENTO GRID
        ===================================================== */}

        <div
          className="
            mt-10

            grid
            grid-cols-1
            justify-items-stretch

            gap-5

            sm:mt-12

            lg:grid-cols-12
            lg:gap-6
          "
        >
          {/* ===================================================
              CARD 01
          =================================================== */}

          <BentoCard
            index={0}
            reduceMotion={!!reduceMotion}
            isMobile={isMobile}
            className="
              min-h-[520px]

              lg:col-span-7
            "
          >
            <CardAmbient />

            <div
              className="
                relative
                z-10

                flex
                h-full
                flex-col
              "
            >
              <CardHeader
                icon={
                  <Languages
                    size={18}
                    strokeWidth={1.9}
                  />
                }
                eyebrow="Clear Communication"
                title="Plain Language, Always"
                description="We explain every process, document and timeline clearly before work begins."
              />

              <div
                className="
                  relative

                  mt-7

                  min-h-[315px]

                  flex-1

                  overflow-hidden

                  w-full

                  rounded-[20px]

                  border
                  border-[#CFE0F4]

                  sm:rounded-[24px]

                  bg-[#EAF3FF]
                "
              >
                <VisualGrid />

                {/* decorative rings */}

                <motion.div
                  aria-hidden="true"
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          rotate: 360,
                        }
                  }
                  transition={{
                    duration: 38,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none

                    absolute
                    -right-[80px]
                    -top-[130px]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    border
                    border-[#2D8CFF]/10

                    md:will-change-transform
                  "
                />

                <motion.div
                  aria-hidden="true"
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          rotate: -360,
                        }
                  }
                  transition={{
                    duration: 48,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none

                    absolute
                    -right-[10px]
                    -top-[60px]

                    h-[230px]
                    w-[230px]

                    rounded-full

                    border
                    border-dashed
                    border-[#2D8CFF]/10

                    md:will-change-transform
                  "
                />

                {/* workflow window */}

                <motion.div
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute

                    bottom-[-12px]
                    left-1/2

                    w-[calc(100%-24px)]
                    max-w-[540px]

                    -translate-x-1/2

                    sm:bottom-[-22px]
                    sm:w-[88%]

                    rounded-[25px]

                    border
                    border-white

                    bg-white/90

                    p-3.5

                    shadow-[0_30px_70px_-35px_rgba(50,100,170,0.35)]

                    sm:backdrop-blur-xl

                    md:will-change-transform

                    sm:p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FFB8B8]" />
                      <span className="h-2 w-2 rounded-full bg-[#FFD990]" />
                      <span className="h-2 w-2 rounded-full bg-[#A7E3C4]" />
                    </div>

                    <div
                      className="
                        rounded-full

                        bg-[#F1F5FA]

                        px-3
                        py-1.5

                        text-[9px]
                        font-semibold

                        text-[#8A98A9]
                      "
                    >
                      Process overview
                    </div>
                  </div>

                  <div
                    className="
                      mt-5

                      grid
                      gap-4

                      sm:grid-cols-[1.1fr_0.9fr]
                    "
                  >
                    <div
                      className="
                        rounded-[18px]

                        bg-[#F7FAFE]

                        p-4
                      "
                    >
                      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                        <div
                          className="
                            flex
                            h-10
                            w-10

                            items-center
                            justify-center

                            rounded-[12px]

                            bg-[#E4F0FF]

                            text-[#2D8CFF]
                          "
                        >
                          <MessageSquareText
                            size={18}
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-[10.5px]
                              font-semibold

                              text-[#31465D]
                            "
                          >
                            GST Registration
                          </p>

                          <p
                            className="
                              mt-1

                              text-[9px]

                              text-[#8997A7]
                            "
                          >
                            Explained step by step
                          </p>
                        </div>
                      </div>

                      <div
                        className="
                          mt-4

                          rounded-[13px]

                          bg-white

                          px-3.5
                          py-3
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            leading-[1.65]

                            text-[#697A8D]
                          "
                        >
                          Share PAN, Aadhaar and
                          business address proof.
                          We handle the government
                          submission for you.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <ProcessRow
                        number="01"
                        title="Documents"
                        active
                      />

                      <ProcessRow
                        number="02"
                        title="Verification"
                      />

                      <ProcessRow
                        number="03"
                        title="Submission"
                      />
                    </div>
                  </div>
                </motion.div>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={6.2}
                  delay={0}
                  className="
                    left-[7%]
                    top-[12%]
                  "
                >
                  <Check size={14} />
                </FloatingBubble>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={7}
                  delay={0.8}
                  className="
                    right-[8%]
                    top-[24%]
                  "
                >
                  <Languages size={14} />
                </FloatingBubble>
              </div>
            </div>
          </BentoCard>

          {/* ===================================================
              CARD 02
          =================================================== */}

          <BentoCard
            index={1}
            reduceMotion={!!reduceMotion}
            isMobile={isMobile}
            className="
              min-h-[520px]

              lg:col-span-5
            "
          >
            <CardAmbient />

            <div
              className="
                relative
                z-10

                flex
                h-full
                flex-col
              "
            >
              <CardHeader
                icon={
                  <UserRoundCheck
                    size={18}
                    strokeWidth={1.9}
                  />
                }
                eyebrow="Accountability"
                title="One Expert, Not a Queue"
                description="A dedicated professional owns your case from start to finish."
              />

              <div
                className="
                  relative

                  mt-7

                  min-h-[315px]

                  flex-1

                  overflow-hidden

                  w-full

                  rounded-[20px]

                  border
                  border-[#CFE0F4]

                  sm:rounded-[24px]

                  bg-[#EAF2FF]
                "
              >
                <VisualGrid />

                <motion.div
                  aria-hidden="true"
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          x: [-20, 25, -20],
                          y: [-10, 22, -10],
                        }
                  }
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none

                    absolute
                    right-[-70px]
                    top-[-80px]

                    h-[230px]
                    w-[230px]

                    rounded-full

                    bg-[#2D8CFF]/15

                    blur-[70px]

                    md:will-change-transform
                  "
                />

                <motion.div
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: 7.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    w-[calc(100%-24px)]
                    max-w-[390px]

                    -translate-x-1/2
                    -translate-y-1/2

                    sm:w-[84%]

                    rounded-[24px]

                    border
                    border-white

                    bg-white/90

                    p-5

                    shadow-[0_30px_65px_-34px_rgba(52,98,162,0.36)]

                    sm:backdrop-blur-xl

                    md:will-change-transform
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between

                      gap-2.5

                      sm:gap-4
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          relative

                          flex
                          h-12
                          w-12

                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          bg-[#E5F0FF]

                          text-[#2D8CFF]
                        "
                      >
                        <UserRoundCheck
                          size={20}
                        />

                        <motion.span
                          animate={
          pauseDecorativeMotion
            ? undefined
                              : {
                                  scale: [1, 1.28, 1],
                                  opacity: [0.7, 1, 0.7],
                                }
                          }
                          transition={{
                            duration: 2.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            bottom-0
                            right-0

                            h-[10px]
                            w-[10px]

                            rounded-full

                            border-2
                            border-white

                            bg-[#38B777]
                          "
                        />
                      </div>

                      <div>
                        <p
                          className="
                            text-[11.5px]
                            font-semibold

                            text-[#2E4257]
                          "
                        >
                          Your dedicated expert
                        </p>

                        <p
                          className="
                            mt-1

                            text-[9.5px]

                            text-[#8795A5]
                          "
                        >
                          Direct professional support
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        rounded-full

                        bg-[#EDF4FF]

                        shrink-0

                        px-2
                        py-1.5

                        text-[8px]

                        sm:px-2.5
                        sm:text-[8.5px]
                        font-semibold

                        text-[#2D8CFF]
                      "
                    >
                      ACTIVE
                    </span>
                  </div>

                  <div
                    className="
                      mt-5

                      grid
                      grid-cols-2

                      gap-2.5
                    "
                  >
                    <MiniMetric
                      label="Response"
                      value="< 2 hrs"
                    />

                    <MiniMetric
                      label="Ownership"
                      value="100%"
                    />
                  </div>

                  <div
                    className="
                      mt-3

                      rounded-[15px]

                      bg-[#F6F9FD]

                      p-3.5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]

                            text-[#8B99A9]
                          "
                        >
                          Current case
                        </p>

                        <p
                          className="
                            mt-1

                            text-[10.5px]
                            font-semibold

                            text-[#405367]
                          "
                        >
                          Company Incorporation
                        </p>
                      </div>

                      <CircleCheck
                        size={18}
                        className="text-[#2D8CFF]"
                      />
                    </div>
                  </div>
                </motion.div>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={6.7}
                  delay={0.3}
                  className="
                    left-[8%]
                    top-[14%]
                  "
                >
                  <ShieldCheck size={14} />
                </FloatingBubble>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={7.3}
                  delay={1}
                  className="
                    bottom-[13%]
                    right-[9%]
                  "
                >
                  <BadgeCheck size={14} />
                </FloatingBubble>
              </div>
            </div>
          </BentoCard>

          {/* ===================================================
              CARD 03
          =================================================== */}

          <BentoCard
            index={2}
            reduceMotion={!!reduceMotion}
            isMobile={isMobile}
            className="
              min-h-[515px]

              lg:col-span-5
            "
          >
            <CardAmbient />

            <div
              className="
                relative
                z-10

                flex
                h-full
                flex-col
              "
            >
              <CardHeader
                icon={
                  <CalendarCheck2
                    size={18}
                    strokeWidth={1.9}
                  />
                }
                eyebrow="Proactive Compliance"
                title="Deadlines Stay On Our Radar"
                description="We keep track of recurring filings, renewals and compliance dates."
              />

              <div
                className="
                  relative

                  mt-7

                  min-h-[305px]

                  flex-1

                  overflow-hidden

                  w-full

                  rounded-[20px]

                  border
                  border-[#CFE0F4]

                  sm:rounded-[24px]

                  bg-[#EAF3FF]
                "
              >
                <VisualGrid />

                <motion.div
                  animate={
          pauseDecorativeMotion
            ? undefined
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute

                    bottom-[-20px]
                    left-1/2

                    w-[calc(100%-24px)]
                    max-w-[400px]

                    -translate-x-1/2

                    sm:w-[86%]

                    rounded-[24px]

                    border
                    border-white

                    bg-white/90

                    p-5

                    shadow-[0_30px_65px_-34px_rgba(52,98,162,0.38)]

                    sm:backdrop-blur-xl

                    md:will-change-transform
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10

                          items-center
                          justify-center

                          rounded-[12px]

                          bg-[#E6F0FF]

                          text-[#2D8CFF]
                        "
                      >
                        <CalendarCheck2
                          size={17}
                        />
                      </div>

                      <div>
                        <p
                          className="
                            text-[10.5px]
                            font-semibold

                            text-[#30455B]
                          "
                        >
                          Compliance Calendar
                        </p>

                        <p
                          className="
                            mt-1

                            text-[8.5px]

                            text-[#8C99A8]
                          "
                        >
                          Upcoming obligations
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold

                        text-[#2D8CFF]
                      "
                    >
                      AUG
                    </span>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <DeadlineItem
                      label="GST Return"
                      date="18 Aug"
                      progress="85%"
                    />

                    <DeadlineItem
                      label="TDS Return"
                      date="22 Aug"
                      progress="65%"
                    />

                    <DeadlineItem
                      label="ROC Filing"
                      date="28 Aug"
                      progress="42%"
                    />
                  </div>
                </motion.div>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={6.4}
                  delay={0}
                  className="
                    right-[9%]
                    top-[15%]
                  "
                >
                  <Clock3 size={14} />
                </FloatingBubble>

                <FloatingBubble
                  reduceMotion={pauseDecorativeMotion}
                  duration={7}
                  delay={0.8}
                  className="
                    left-[8%]
                    top-[28%]
                  "
                >
                  <FileCheck2 size={14} />
                </FloatingBubble>
              </div>
            </div>
          </BentoCard>

          {/* ===================================================
              CARD 04
          =================================================== */}

          <motion.article
            custom={3}
            variants={reduceMotion ? undefined : cardVariant}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{
              once: true,
              amount: 0.12,
              margin: "0px 0px -4% 0px",
            }}
            whileHover={
              reduceMotion || isMobile
                ? undefined
                : {
                    y: -5,
                  }
            }
            transition={{
              duration: 0.35,
              ease: smoothEase,
            }}
            className="
              group
              relative

              mx-auto
              w-full
              max-w-full

              min-h-[515px]

              overflow-hidden

              rounded-[30px]

              border
              border-[#1C65D3]/20

              bg-[#286EE7]

              p-6

              shadow-[0_32px_70px_-44px_rgba(35,105,220,0.52)]

              transform-gpu

              sm:p-7

              lg:col-span-7

              xl:p-8
            "
          >
            {/* brighter brand gradient */}

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    #3F85F5 0%,
                    #2D75EC 38%,
                    #2467DB 68%,
                    #1F57BD 100%
                  )
                `,
              }}
            />

            {/* moving blue-white light */}

            <motion.div
              aria-hidden="true"
              animate={
                    pauseDecorativeMotion
                      ? undefined
                      : {
                      x: [-50, 85, -50],
                      y: [-25, 45, -25],
                      scale: [1, 1.12, 1],
                    }
              }
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none

                absolute
                -right-[100px]
                -top-[130px]

                h-[420px]
                w-[420px]

                rounded-full

                bg-white/18

                blur-[100px]

                md:will-change-transform
              "
            />

            {/* rings */}

            <motion.div
              aria-hidden="true"
              animate={
                    pauseDecorativeMotion
                      ? undefined
                      : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none

                absolute
                -right-[130px]
                -top-[95px]

                h-[390px]
                w-[390px]

                rounded-full

                border
                border-white/[0.17]

                md:will-change-transform
              "
            >
              <span
                className="
                  absolute
                  left-[62px]
                  top-[18px]

                  h-[8px]
                  w-[8px]

                  rounded-full

                  bg-white/80
                "
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={
                    pauseDecorativeMotion
                      ? undefined
                      : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none

                absolute
                -right-[40px]
                -top-[10px]

                h-[230px]
                w-[230px]

                rounded-full

                border
                border-dashed
                border-white/[0.18]

                md:will-change-transform
              "
            />

            {/* subtle grid */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                opacity-[0.10]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,.4) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,.4) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "52px 52px",
              }}
            />

            <div
              className="
                relative
                z-10

                flex
                h-full

                flex-col
                justify-between
              "
            >
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/20

                    bg-white/[0.11]

                    px-3
                    py-2

                    sm:backdrop-blur-xl
                  "
                >
                  <Sparkles
                    size={12}
                    className="text-white/85"
                  />

                  <span
                    className="
                      text-[9.5px]
                      font-semibold
                      uppercase

                      tracking-[0.14em]

                      text-white/85
                    "
                  >
                    Since 2013
                  </span>
                </div>

                <h3
                  className="
                    mt-7

                    max-w-[520px]

                    text-[30px]
                    font-semibold

                    leading-[1.07]
                    tracking-[-0.045em]

                    !text-white

                    sm:text-[36px]

                    lg:text-[40px]
                  "
                >
                  One professional team.
                  <br />

                  Every business need.
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[480px]

                    text-[12.5px]
                    leading-[1.75]

                    text-white/72

                    sm:text-[13.5px]
                  "
                >
                  From registration and taxation to
                  ongoing compliance, work with one
                  team that understands your business.
                </p>
              </div>

              <div className="mt-9">
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-3

                    sm:grid-cols-3
                  "
                >
                  <StatBlock
                    value="2,760+"
                    label="Businesses served"
                  />

                  <StatBlock
                    value="300+"
                    label="Professional services"
                  />

                  <StatBlock
                    value="2013"
                    label="Serving since"
                    className="
                      col-span-2

                      sm:col-span-1
                    "
                  />
                </div>

                <div
                  className="
                    mt-6

                    flex
                    flex-col

                    gap-4

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <Link
                    href="/about-us"
                    className="
                      group/button

                      inline-flex
                      min-h-[50px]

                      items-center
                      justify-center

                      gap-2.5

                      rounded-full

                      bg-white

                      px-5
                      py-3

                      text-[12.5px]
                      font-semibold

                      text-[#2467D8]

                      shadow-[0_15px_35px_-18px_rgba(0,0,0,0.35)]

                      transition-all
                      duration-300

                      hover:-translate-y-[2px]

                      sm:px-6
                    "
                  >
                    Discover our approach

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300

                        group-hover/button:translate-x-1
                      "
                    />
                  </Link>

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      text-[10px]
                      font-medium

                      text-white/60
                    "
                  >
                    <ShieldCheck
                      size={14}
                    />

                    Professional support across Tamil Nadu
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   BENTO CARD
========================================================= */

function BentoCard({
  children,
  index,
  reduceMotion,
  isMobile,
  className = "",
}: {
  children: ReactNode;
  index: number;
  reduceMotion: boolean;
  isMobile: boolean;
  className?: string;
}) {
  return (
    <motion.article
      custom={index}
      variants={reduceMotion ? undefined : cardVariant}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -4% 0px",
      }}
      whileHover={
        reduceMotion || isMobile
          ? undefined
          : {
              y: -5,
            }
      }
      transition={{
        duration: 0.35,
        ease: smoothEase,
      }}
      className={`
        group
        relative

        mx-auto
        w-full
        max-w-full

        overflow-hidden

        rounded-[30px]

        border
        border-[#CFE0F2]

        bg-white/[0.82]

        p-5

        shadow-[0_26px_70px_-48px_rgba(33,91,162,0.42)]

        sm:backdrop-blur-xl

        transform-gpu

        transition-[border-color,box-shadow,background-color]
        duration-300

        hover:border-[#2D8CFF]/30
        hover:bg-white/[0.90]
        hover:shadow-[0_32px_80px_-46px_rgba(45,140,255,0.40)]

        sm:p-6

        ${className}
      `}
    >
      {children}
    </motion.article>
  );
}

/* =========================================================
   CARD HEADER
========================================================= */

function CardHeader({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        w-full
        items-start
        gap-3

        sm:gap-4
      "
    >
      <div
        className="
          flex
          h-11
          w-11

          shrink-0

          items-center
          justify-center

          rounded-[14px]

          border
          border-[#2D8CFF]/16

          bg-[#EAF3FF]

          text-[#2D8CFF]

          shadow-[0_10px_24px_-18px_rgba(45,140,255,0.45)]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[9.5px]
            font-bold
            uppercase

            tracking-[0.15em]

            text-[#2D8CFF]
          "
        >
          {eyebrow}
        </p>

        <h3
          className="
            mt-1.5

            text-[18px]
            font-semibold

            tracking-[-0.025em]

            text-[#22364D]

            sm:text-[19px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            max-w-[500px]

            text-[12px]
            leading-[1.7]

            text-[#72859A]

            sm:text-[12.5px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   AMBIENT
========================================================= */

function CardAmbient() {
  return (
    <>
      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-[130px]
          -top-[150px]

          h-[300px]
          w-[300px]

          rounded-full

          bg-[#2D8CFF]/[0.06]

          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-[-150px]
          left-[-130px]

          h-[280px]
          w-[280px]

          rounded-full

          bg-[#A8C9FF]/[0.085]

          blur-[100px]
        "
      />
    </>
  );
}

/* =========================================================
   VISUAL GRID
========================================================= */

function VisualGrid() {
  return (
    <>
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.60]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(68,117,181,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(68,117,181,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[230px]
          w-[330px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/65

          blur-[70px]
        "
      />
    </>
  );
}

/* =========================================================
   PROCESS ROW
========================================================= */

function ProcessRow({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between

        rounded-[12px]

        border

        px-3
        py-2.5

        ${
          active
            ? "border-[#2D8CFF]/15 bg-[#EAF3FF]"
            : "border-[#EEF2F6] bg-white"
        }
      `}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`
            text-[8.5px]
            font-semibold

            ${
              active
                ? "text-[#2D8CFF]"
                : "text-[#A0AAB7]"
            }
          `}
        >
          {number}
        </span>

        <span
          className="
            text-[9.5px]
            font-medium

            text-[#647486]
          "
        >
          {title}
        </span>
      </div>

      <ChevronRight
        size={12}
        className={
          active
            ? "text-[#2D8CFF]"
            : "text-[#C1C9D2]"
        }
      />
    </div>
  );
}

/* =========================================================
   FLOATING BUBBLE
========================================================= */

function FloatingBubble({
  children,
  className,
  reduceMotion,
  duration,
  delay,
}: {
  children: ReactNode;
  className: string;
  reduceMotion: boolean;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, 4, -2, 0],
              y: [0, -7, 3, 0],
              rotate: [0, 2, -1, 0],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-30

        flex
        h-10
        w-10

        items-center
        justify-center

        rounded-full

        border
        border-white

        bg-white/95

        text-[#2D8CFF]

        shadow-[0_14px_35px_-17px_rgba(49,94,153,0.35)]

        sm:backdrop-blur-md

        md:will-change-transform

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   MINI METRIC
========================================================= */

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-[14px]

        bg-[#F5F9FE]

        px-3.5
        py-3
      "
    >
      <p
        className="
          text-[8.5px]

          text-[#93A0AE]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1

          text-[11px]
          font-semibold

          text-[#41566B]
        "
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   DEADLINE ITEM
========================================================= */

function DeadlineItem({
  label,
  date,
  progress,
}: {
  label: string;
  date: string;
  progress: string;
}) {
  return (
    <div
      className="
        rounded-[13px]

        bg-[#F6F9FD]

        px-3.5
        py-3
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          gap-3
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              flex
              h-5
              w-5

              items-center
              justify-center

              rounded-full

              bg-[#E7F1FF]

              text-[#2D8CFF]
            "
          >
            <Check
              size={10}
              strokeWidth={2.4}
            />
          </span>

          <span
            className="
              text-[9.5px]
              font-medium

              text-[#5B6C7F]
            "
          >
            {label}
          </span>
        </div>

        <span
          className="
            text-[8.5px]
            font-semibold

            text-[#2D8CFF]
          "
        >
          {date}
        </span>
      </div>

      <div
        className="
          mt-2.5

          h-[3px]
          overflow-hidden

          rounded-full

          bg-[#E4EAF2]
        "
      >
        <div
          className="
            h-full

            rounded-full

            bg-[#2D8CFF]
          "
          style={{
            width: progress,
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   STAT BLOCK
========================================================= */

function StatBlock({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-[18px]

        border
        border-white/[0.18]

        bg-white/[0.11]

        px-4
        py-4

        backdrop-blur-xl

        ${className}
      `}
    >
      <p
        className="
          text-[22px]
          font-semibold

          tracking-[-0.035em]

          text-white

          sm:text-[24px]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1

          text-[9px]
          leading-[1.5]

          text-white/58

          sm:text-[9.5px]
        "
      >
        {label}
      </p>
    </div>
  );
}
