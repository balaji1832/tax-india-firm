"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type RailCard = {
  type:
    | "image"
    | "chart"
    | "client"
    | "turnaround"
    | "rating"
    | "location"
    | "service";

  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
};

/* =========================================================
   DATA
========================================================= */

const trustStats = [
  {
    value: "2,760+",
    label: "Clients Served",
  },
  {
    value: "4.9 / 5",
    label: "Google Rating",
  },
  {
    value: "300+",
    label: "Services Offered",
  },
  {
    value: "ISO 9001:2015",
    label: "Certified Organisation",
  },
];

const leftRailCards: RailCard[] = [
  {
    type: "service",
    title: "GST Registration",
    subtitle: "CA Assisted",
  },
  {
    type: "image",
    image: "/images/ca-person-1.png",
    alt: "Tax consultant",
  },
  {
    type: "chart",
  },
  {
    type: "image",
    image: "/images/ca-person-2.png",
    alt: "Professional consultant",
  },
  {
    type: "client",
  },
];

const rightRailCards: RailCard[] = [
  {
    type: "location",
  },
  {
    type: "rating",
  },
  {
    type: "service",
    title: "ITR Filing",
    subtitle: "Expert Support",
  },
  {
    type: "image",
    image: "/images/ca-person-3.png",
    alt: "Business consultant",
  },
  {
    type: "turnaround",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const premiumEase = [0.16, 1, 0.3, 1] as const;

/* Left content enters once as a slow, deliberate sequence. */
const leftSequence: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.14,
    },
  },
};

const leftReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};

const tagReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

const trustStripReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: premiumEase,
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#70B8F5]
        text-[#09284A]
      "
    >
      {/* =====================================================
          SKY / CLOUD BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* BASE SKY GRADIENT */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(115deg,#BDE5FF_0%,#8DCCFA_35%,#5DAEF2_68%,#3D9AE8_100%)]
          "
        />

        {/* LARGE SOFT LIGHT — TOP LEFT */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, 18, 0],
                  scale: [1, 1.07, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[12%]
            -top-[32%]

            h-[700px]
            w-[700px]

            rounded-full

            bg-white/55

            blur-[100px]
          "
        />

        {/* CLOUD MASS LEFT */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 24, -8, 0],
                  y: [0, -10, 6, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[7%]
            top-[17%]

            h-[280px]
            w-[520px]

            rounded-[50%]

            bg-white/25

            blur-[65px]
          "
        />

        {/* CLOUD HIGHLIGHT CENTER */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -25, 10, 0],
                  y: [0, 8, -8, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[27%]
            top-[4%]

            h-[230px]
            w-[460px]

            rounded-[50%]

            bg-white/20

            blur-[60px]
          "
        />

        {/* CLOUD RIGHT */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -30, 0],
                  y: [0, 12, 0],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-10%]
            top-[3%]

            h-[330px]
            w-[580px]

            rounded-[50%]

            bg-[#D9F1FF]/25

            blur-[70px]
          "
        />

        {/* BLUE DEPTH */}

        <div
          className="
            absolute
            -right-[20%]
            top-[25%]

            h-[780px]
            w-[780px]

            rounded-full

            bg-[#158CF1]/25

            blur-[140px]
          "
        />

        {/* LOWER CLOUD */}

        <div
          className="
            absolute
            -bottom-[170px]
            -left-[10%]

            h-[400px]
            w-[800px]

            rounded-[50%]

            bg-white/20

            blur-[80px]
          "
        />

        {/* GLASS LIGHT WAVE */}

        <div
          className="
            absolute
            -bottom-[220px]
            left-[-5%]

            h-[380px]
            w-[115%]

            rotate-[-5deg]

            rounded-[50%]

            border-t
            border-white/35

            bg-white/[0.06]

            shadow-[0_-8px_60px_rgba(255,255,255,0.14)]
          "
        />

        {/* VERY SOFT LIGHT OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,0.20),transparent_42%)]
          "
        />
      </div>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          grid

          w-full
          max-w-[1580px]

          grid-cols-1
          gap-8

          lg:min-h-[760px]
          lg:grid-cols-[1.2fr_0.8fr]
          lg:gap-10

          xl:min-h-[800px]
          xl:grid-cols-[1.22fr_0.78fr]
          xl:gap-14

          2xl:min-h-[840px]
          2xl:gap-16
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          variants={reduceMotion ? undefined : leftSequence}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.22, margin: "-40px 0px" }}
          className="
            relative

            flex
            flex-col

            will-change-transform
            justify-center

            px-6
            py-16

            sm:px-10
            sm:py-20

            md:px-14
            md:py-24

            lg:px-16
            lg:py-24

            xl:px-20
            xl:py-28

            2xl:pl-24
            2xl:pr-10
          "
        >
          {/* =================================================
              HERO TAG
          ================================================= */}

          <motion.div
            variants={reduceMotion ? undefined : tagReveal}
            className="
              inline-flex
              w-fit
              max-w-full

              items-center

              gap-2

              rounded-full

              border
              border-white/70

              bg-white/65

              px-4
              py-2.5 mt-8 md:mt-2

              text-[9px]
              font-semibold

              text-[#153B61]

              shadow-[0_10px_35px_rgba(20,81,135,0.12)]

              backdrop-blur-xl

              sm:text-[10px]

              md:text-[11px]
            "
          >
            <span
              className="
                flex
                h-[18px]
                w-[18px]

                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#D9EDFF]

                text-[#2976B9]
              "
            >
              <StarIcon />
            </span>

            <span>Chennai&apos;s Most Trusted CA Firm Since 2013</span>
          </motion.div>

          {/* =================================================
              H1
          ================================================= */}

          <motion.h1
            variants={reduceMotion ? undefined : leftReveal}
            className="
              mt-8 pt-5

              max-w-[760px]

              text-[34px]
              font-semibold

              leading-[1.06]

              tracking-[-0.045em]

              text-[#09284A]

              sm:text-[40px]

              md:text-[46px]

              lg:text-[48px]

              xl:text-[54px]

              2xl:text-[58px]
            "
          >
            Tax &amp; Business
            <br className="hidden sm:block" />

            <span className="sm:hidden"> </span>

            Services in Chennai,
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#166AB0]
                via-[#1678CB]
                to-[#0A60A7]

                bg-clip-text

                text-transparent
              "
            >
              GST, ITR &amp; Registration
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={reduceMotion ? undefined : leftReveal}
            className="
              mt-7

              max-w-[690px]

              text-[13px]

              font-medium

              leading-[1.9]

              text-[#315B7C]

              sm:text-[14px]

              md:text-[15px]

              lg:pr-4
            "
          >
            From company registration to GST filing to legal contracts, 300+
            services handled by Chartered Accountants, Company Secretaries and
            Corporate Lawyers across Tamil Nadu.
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            variants={reduceMotion ? undefined : leftReveal}
            className="
              mt-9

              flex
              flex-wrap

              items-center

              gap-6
            "
          >
            <Link
              href="https://taxindiafirm.com/contact-us"
              className="
                group

                inline-flex

                min-h-[50px]

                items-center
                justify-center

                gap-3

                rounded-[9px]

                bg-[#082E52]

                px-6
                py-3

                text-[11px]
                font-semibold

                text-white

                shadow-[0_16px_36px_rgba(7,50,86,0.24)]

                transition-all
                duration-300

                hover:-translate-y-[3px]

                hover:bg-[#0A3A66]

                hover:shadow-[0_20px_46px_rgba(7,50,86,0.32)]

                sm:text-[12px]

                md:px-7
              "
            >
              <span>Get a Free Consultation with a CA</span>

              <span
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowIcon />
              </span>
            </Link>

            <div
              className="
                hidden

                items-center

                gap-2.5

                text-[10px]
                font-semibold

                text-[#356081]

                sm:flex
              "
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.08, 1],
                        boxShadow: [
                          "0 6px 18px rgba(43,108,164,0.12)",
                          "0 8px 26px rgba(43,108,164,0.22)",
                          "0 6px 18px rgba(43,108,164,0.12)",
                        ],
                      }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/60

                  bg-white/35

                  text-[#1B6BAA]

                  shadow-[0_6px_18px_rgba(43,108,164,0.12)]

                  backdrop-blur-lg
                "
              >
                <CheckIcon />
              </motion.span>

              Expert assisted
            </div>
          </motion.div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <motion.div
            variants={reduceMotion ? undefined : trustStripReveal}
            className="
              mt-14

              grid

              max-w-[820px]

              grid-cols-2

              border-t
              border-[#175B92]/20

              pt-7

              sm:grid-cols-4
              sm:pt-8
            "
          >
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={reduceMotion ? undefined : statItem}
                className={`
                  min-w-0

                  py-3

                  ${
                    index % 2 !== 0
                      ? "border-l border-[#175B92]/18 pl-4"
                      : "pr-4"
                  }

                  ${
                    index > 1
                      ? "border-t border-[#175B92]/18 pt-5 sm:border-t-0 sm:pt-0"
                      : ""
                  }

                  sm:border-l
                  sm:border-[#175B92]/18
                  sm:px-5
                  sm:py-0

                  ${index === 0 ? "sm:border-l-0 sm:pl-0" : ""}
                `}
              >
                <div
                  className="
                    text-[18px]
                    font-bold

                    leading-none

                    tracking-[-0.035em]

                    text-[#09284A]

                    xl:text-[21px]
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    mt-2

                    text-[8px]
                    font-medium

                    leading-[1.4]

                    text-[#426B89]

                    sm:text-[9px]
                  "
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT SLIDER AREA

            NO CENTER LINE
            NO BLUR OVERLAY
        =================================================== */}

        <motion.div
          initial={false}
          className="
            relative

            h-[500px]

            overflow-hidden

            sm:h-[560px]

            md:h-[620px]

            lg:h-[760px]

            xl:h-[800px]

            2xl:h-[840px]
          "
        >
          {/* =================================================
              DECORATIVE GLOW BEHIND CARDS
              Does NOT blur the actual cards
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              h-[550px]
              w-[430px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-[50%]

              bg-[#087FE8]/15

              blur-[90px]
            "
          />

          {/* =================================================
              CARD RAILS
          ================================================= */}

          <div
            className="
              absolute

              left-1/2
              top-1/2

              flex

              h-[720px]

              w-[330px]

              -translate-x-1/2
              -translate-y-1/2

              gap-3

              sm:w-[390px]
              sm:gap-4

              md:w-[420px]

              lg:h-[1020px]
              lg:w-[390px]
              lg:gap-5

              xl:w-[430px]
            "
          >
            {/* =================================================
                COLUMN 1 — UP
            ================================================= */}

            <div
              className="
                relative
                h-full
                w-1/2

                overflow-hidden
              "
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: ["0%", "-50%"],
                      }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  flex
                  flex-col

                  will-change-transform

                  gap-3

                  sm:gap-4
                "
              >
                <RailSet cards={leftRailCards} />

                <RailSet cards={leftRailCards} />
              </motion.div>
            </div>

            {/* =================================================
                COLUMN 2 — DOWN
            ================================================= */}

            <div
              className="
                relative
                h-full
                w-1/2

                overflow-hidden
              "
            >
              <motion.div
                initial={{
                  y: "-50%",
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: ["-50%", "0%"],
                      }
                }
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  flex
                  flex-col

                  will-change-transform

                  gap-3

                  sm:gap-4
                "
              >
                <RailSet cards={rightRailCards} />

                <RailSet cards={rightRailCards} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   RAIL SET
========================================================= */

function RailSet({ cards }: { cards: RailCard[] }) {
  return (
    <>
      {cards.map((card, index) => (
        <RailCardComponent
          key={`${card.type}-${card.title ?? ""}-${index}`}
          card={card}
        />
      ))}
    </>
  );
}

/* =========================================================
   RAIL CARD
========================================================= */

function RailCardComponent({ card }: { card: RailCard }) {
  /* =======================================================
     IMAGE CARD
  ======================================================= */

  if (card.type === "image") {
    return (
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 22,
        }}
        className="
          relative

          h-[200px]

          shrink-0

          overflow-hidden

          rounded-[14px]

          border
          border-white/80

          bg-[#D8ECFB]

          shadow-[0_18px_40px_rgba(19,95,158,0.18)]

          sm:h-[225px]
        "
      >
        <motion.img
          src={card.image}
          alt={card.alt ?? ""}
          whileHover={{ scale: 1.045 }}
          transition={{ duration: 0.55, ease: premiumEase }}
          className="
            h-full
            w-full

            object-cover

            object-center
          "
        />

        {/* ONLY SMALL CONTRAST GRADIENT.
            NOT A BLUR. */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            h-[30%]

            bg-gradient-to-t
            from-[#0B5C9C]/15
            to-transparent
          "
        />
      </motion.div>
    );
  }

  /* =======================================================
     BUSINESS GROWTH
  ======================================================= */

  if (card.type === "chart") {
    return (
      <GlassCard className="h-[142px] p-4 sm:h-[150px]">
        <div className="flex items-center justify-between">
          <span
            className="
              text-[7px]
              font-bold

              uppercase

              tracking-[0.1em]

              text-[#335F83]
            "
          >
            Business Growth
          </span>

          <span
            className="
              rounded-full

              bg-[#D5ECFF]

              px-2
              py-1

              text-[6px]
              font-bold

              text-[#1374C2]
            "
          >
            +18.4%
          </span>
        </div>

        <div className="mt-4">
          <GrowthChart />
        </div>
      </GlassCard>
    );
  }

  /* =======================================================
     CLIENTS
  ======================================================= */

  if (card.type === "client") {
    return (
      <GlassCard className="h-[155px] p-4">
        <p
          className="
            text-[7px]
            font-bold

            uppercase

            tracking-[0.11em]

            text-[#47708E]
          "
        >
          Clients Served
        </p>

        <div
          className="
            mt-3

            text-[27px]
            font-bold

            tracking-[-0.05em]

            text-[#082D50]
          "
        >
          2,760+
        </div>

        <div
          className="
            mt-5

            flex

            h-[44px]

            items-end

            gap-[4px]
          "
        >
          {[35, 53, 42, 65, 56, 72, 61, 83, 72, 96].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: `${height}%`,
                }}
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  delay: index * 0.04,
                }}
                className="
                  flex-1

                  rounded-t-[2px]

                  bg-gradient-to-t
                  from-[#176BB0]
                  to-[#54B2F5]
                "
              />
            )
          )}
        </div>
      </GlassCard>
    );
  }

  /* =======================================================
     TURNAROUND
  ======================================================= */

  if (card.type === "turnaround") {
    return (
      <GlassCard className="h-[160px] p-4">
        <p
          className="
            text-[7px]
            font-bold

            uppercase

            tracking-[0.1em]

            text-[#47708E]
          "
        >
          Average Turnaround
        </p>

        <div className="mt-3 flex items-end gap-1">
          <span
            className="
              text-[32px]
              font-bold

              leading-none

              tracking-[-0.055em]

              text-[#082D50]
            "
          >
            48
          </span>

          <span
            className="
              pb-1

              text-[10px]
              font-semibold

              text-[#365F7D]
            "
          >
            hours
          </span>
        </div>

        <div className="mt-6 flex gap-[3px]">
          {Array.from({ length: 14 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: premiumEase,
              }}
              style={{ transformOrigin: "bottom" }}
              className={`
                h-[28px]
                flex-1

                rounded-[1px]

                ${
                  index % 3 === 0
                    ? "bg-[#126EB7]"
                    : "bg-[#80C5F5]"
                }
              `}
            />
          ))}
        </div>
      </GlassCard>
    );
  }

  /* =======================================================
     RATING
  ======================================================= */

  if (card.type === "rating") {
    return (
      <GlassCard className="h-[132px] p-4">
        <div className="flex items-center justify-between">
          <p
            className="
              text-[7px]
              font-bold

              uppercase

              tracking-[0.1em]

              text-[#376383]
            "
          >
            Google Rating
          </p>

          <GoogleIcon />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className="
              text-[29px]
              font-bold

              tracking-[-0.05em]

              text-[#082D50]
            "
          >
            4.9
          </span>

          <span
            className="
              text-[10px]

              text-[#4C708B]
            "
          >
            / 5
          </span>
        </div>

        <div className="mt-2 flex gap-[2px] text-[10px] text-[#1681D5]">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.4, rotate: -18 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
                delay: index * 0.07,
              }}
            >
              ★
            </motion.span>
          ))}
        </div>
      </GlassCard>
    );
  }

  /* =======================================================
     LOCATION
  ======================================================= */

  if (card.type === "location") {
    return (
      <GlassCard className="h-[130px] p-4">
        <div className="flex items-start gap-3">
          <motion.div
            whileInView={{ scale: [0.85, 1.08, 1], rotate: [0, -5, 0] }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.65, ease: premiumEase }}
            className="
              flex
              h-9
              w-9

              shrink-0

              items-center
              justify-center

              rounded-full

              bg-[#D4EBFF]

              text-[#1979C4]
            "
          >
            <LocationIcon />
          </motion.div>

          <div className="min-w-0">
            <p
              className="
                text-[9px]
                font-bold

                leading-[1.4]

                text-[#0B365A]
              "
            >
              Professional CA Services
            </p>

            <p
              className="
                mt-1

                text-[7px]

                leading-[1.6]

                text-[#547793]
              "
            >
              Serving Chennai &amp;
              <br />
              Tamil Nadu.
            </p>
          </div>
        </div>
      </GlassCard>
    );
  }

  /* =======================================================
     SERVICE
  ======================================================= */

  if (card.type === "service") {
    return (
      <GlassCard className="h-[132px] p-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileInView={{ scale: [0.85, 1.08, 1], rotate: [0, 5, 0] }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.65, ease: premiumEase }}
            className="
              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-full

              bg-[#D5ECFF]

              text-[#1777C1]
            "
          >
            <DocumentIcon />
          </motion.div>

          <span
            className="
              h-2
              w-2

              rounded-full

              bg-[#1687DF]

              shadow-[0_0_12px_rgba(22,135,223,0.55)]
            "
          />
        </div>

        <p
          className="
            mt-4

            text-[9px]
            font-bold

            text-[#0A3458]
          "
        >
          {card.title}
        </p>

        <p
          className="
            mt-1

            text-[7px]
            font-medium

            text-[#567895]
          "
        >
          {card.subtitle}
        </p>
      </GlassCard>
    );
  }

  return null;
}

/* =========================================================
   GLASS CARD
========================================================= */

function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 22,
      }}
      className={`
        relative

        shrink-0

        overflow-hidden

        rounded-[14px]

        border
        border-white/80

        bg-white/72

        text-[#082D50]

        shadow-[0_18px_40px_rgba(19,95,158,0.15)]

        backdrop-blur-xl

        ${className}
      `}
    >
      {/* GLASS TOP LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* GLASS HIGHLIGHT */}

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -18, 0],
          y: [0, 12, 0],
          opacity: [0.28, 0.5, 0.28],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -right-10
          -top-12

          h-28
          w-28

          rounded-full

          bg-white/35

          blur-2xl
        "
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

/* =========================================================
   GROWTH CHART
========================================================= */

function GrowthChart() {
  return (
    <svg
      viewBox="0 0 160 55"
      className="h-[60px] w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="chartArea"
          x1="80"
          y1="0"
          x2="80"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor="#1889DF"
            stopOpacity="0.32"
          />

          <stop
            offset="100%"
            stopColor="#1889DF"
            stopOpacity="0"
          />
        </linearGradient>

        <linearGradient
          id="chartLine"
          x1="0"
          y1="0"
          x2="160"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#1775BE"
          />

          <stop
            offset="1"
            stopColor="#085D9F"
          />
        </linearGradient>
      </defs>

      <path
        d="
          M2 48
          C18 44,24 44,34 34
          C44 22,50 37,63 29
          C78 18,84 28,95 18
          C107 8,115 22,128 10
          C139 2,148 7,158 1
          L158 55
          L2 55
          Z
        "
        fill="url(#chartArea)"
      />

      <motion.path
        d="
          M2 48
          C18 44,24 44,34 34
          C44 22,50 37,63 29
          C78 18,84 28,95 18
          C107 8,115 22,128 10
          C139 2,148 7,158 1
        "
        stroke="url(#chartLine)"
        strokeWidth="1.9"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.25, ease: premiumEase }}
      />

      <circle
        cx="158"
        cy="1"
        r="3"
        fill="#075C9F"
      />
    </svg>
  );
}

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L14.7 8.3L20.5 9.2L16.3 13.3L17.3 19.1L12 16.4L6.7 19.1L7.7 13.3L3.5 9.2L9.3 8.3L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <div
      className="
        flex
        h-6
        w-6

        items-center
        justify-center

        rounded-full

        border
        border-[#B7D9F1]

        bg-[#E2F2FF]

        text-[9px]
        font-bold

        text-[#146FB5]
      "
    >
      G
    </div>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="
          M20 10
          C20 15 12 21 12 21
          C12 21 4 15 4 10
          C4 5.6 7.6 2 12 2
          C16.4 2 20 5.6 20 10Z
        "
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3H14L19 8V21H7V3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M14 3V8H19M10 12H16M10 16H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}