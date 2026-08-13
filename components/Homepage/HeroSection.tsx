"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

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

const dashboardStats = [
  {
    value: "Rs.0",
    label: "Hidden Fees",
  },
  {
    value: "48h",
    label: "Average Turnaround",
  },
  {
    value: "99%",
    label: "On-Time Delivery",
  },
];

const services = [
  "GST Registration",
  "Pvt Ltd Formation",
  "ITR Filing",
  "Trademark Registration",
  "TDS Returns",
  "FSSAI License",
];

const chartBars = [36, 54, 47, 72, 58, 83, 72, 94, 80, 100];

/* =========================================================
   HERO
========================================================= */

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  /* =======================================================
     3D POINTER VALUES
  ======================================================= */

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rawRotateX = useTransform(
    pointerY,
    [-0.5, 0.5],
    [5, -5]
  );

  const rawRotateY = useTransform(
    pointerX,
    [-0.5, 0.5],
    [-6, 6]
  );

  const rotateX = useSpring(rawRotateX, {
    stiffness: 150,
    damping: 22,
    mass: 0.7,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 150,
    damping: 22,
    mass: 0.7,
  });

  /* =======================================================
     3D MOUSE INTERACTION
  ======================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#061321]
        text-white
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* LEFT BLUE GLOW */}

        <div
          className="
            absolute
            -left-[220px]
            top-[100px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#246EF1]/15

            blur-[150px]
          "
        />

        {/* RIGHT BLUE GLOW */}

        <div
          className="
            absolute
            -right-[200px]
            top-0

            h-[570px]
            w-[570px]

            rounded-full

            bg-[#246EF1]/10

            blur-[160px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            -bottom-[230px]
            right-[15%]

            h-[460px]
            w-[460px]

            rounded-full

            bg-[#4DD7B8]/[0.07]

            blur-[150px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.1]

            [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]

            [background-size:72px_72px]

            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />
      </div>

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative

          mx-auto

          grid
          w-full
          max-w-[1440px]

          grid-cols-1
          items-center

          gap-14

          px-5
          pb-16
          pt-12

          sm:px-7
          sm:pb-20
          sm:pt-14

          md:px-10
          md:pt-16

          lg:px-12

          xl:min-h-[720px]
          xl:grid-cols-[1fr_0.92fr]
          xl:gap-14
          xl:px-16
          xl:pb-20
          xl:pt-16

          2xl:min-h-[760px]
          2xl:grid-cols-[1.02fr_0.98fr]
          2xl:gap-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-10 min-w-0">
          {/* =================================================
              TAG
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 22,
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
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              inline-flex
              max-w-full
              items-center
              gap-2.5

              rounded-full

              border
              border-[#246EF1]/35

              bg-[#102A4B]/60

              px-3
              py-2

              shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]

              backdrop-blur-xl

              sm:px-4
            "
          >
            <span className="relative flex h-[8px] w-[8px] shrink-0">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full

                  animate-ping

                  rounded-full

                  bg-[#4DD7B8]

                  opacity-50
                "
              />

              <span
                className="
                  relative

                  h-[8px]
                  w-[8px]

                  rounded-full

                  bg-[#4DD7B8]

                  shadow-[0_0_12px_rgba(77,215,184,0.8)]
                "
              />
            </span>

            <span
              className="
                truncate

                font-body

                text-[10px]
                font-semibold

                text-[#C4D6F2]

                min-[380px]:text-[11px]

                sm:text-[12px]

                md:text-[13px]
              "
            >
              Chennai&apos;s Most Trusted CA Firm Since 2013
            </span>
          </motion.div>

          {/* =================================================
              H1
          ================================================= */}

          <h1
            className="
              mt-6
              max-w-[800px]

              font-heading

              text-[36px]
              font-bold

              leading-[1.08]

              tracking-[-0.045em]

              sm:text-[44px]

              md:text-[52px]

              lg:text-[58px]

              xl:text-[52px]

              2xl:text-[60px]
            "
          >
            {/* WHITE PART */}

            <motion.span
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 38,
                filter: reduceMotion
                  ? "blur(0px)"
                  : "blur(7px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 1.05,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                block

                text-[#F8FBFF]

                drop-shadow-[0_6px_24px_rgba(255,255,255,0.05)]
              "
              style={{
                color: "#F8FBFF",
              }}
            >
              Tax &amp; Business Services
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              in Chennai,
            </motion.span>

            {/* GRADIENT PART */}

            <motion.span
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 38,
                filter: reduceMotion
                  ? "blur(0px)"
                  : "blur(7px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 1.1,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-[5px]
                block

                bg-gradient-to-r
                from-[#6A9BFF]
                via-[#4B8CF9]
                to-[#69DFC5]

                bg-clip-text

                text-transparent

                drop-shadow-[0_8px_25px_rgba(36,110,241,0.15)]
              "
            >
              GST, ITR &amp; Registration
            </motion.span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 30,
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
              duration: 0.9,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6

              max-w-[700px]

              font-body

              text-[14px]

              leading-[1.8]

              text-[#AAB8CA]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[17px]

              xl:max-w-[650px]
              xl:text-[16px]

              2xl:text-[17px]
            "
          >
            From company registration to GST filing to legal contracts,
            300+ services handled by Chartered Accountants, Company
            Secretaries and Corporate Lawyers across Tamil Nadu.
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
              scale: reduceMotion ? 1 : 0.97,
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
              duration: 0.85,
              delay: 0.68,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8"
          >
            <Link
              href="/contact-us"
              className="
                group

                inline-flex

                min-h-[50px]

                max-w-full

                items-center
                justify-center

                gap-3

                rounded-[13px]

                bg-[#246EF1]

                px-5
                py-3

                font-body

                text-[12px]
                font-semibold

                text-white

                shadow-[0_15px_40px_rgba(36,110,241,0.3)]

                transition-all
                duration-300

                hover:-translate-y-[3px]

                hover:bg-[#1E64DF]

                hover:shadow-[0_20px_45px_rgba(36,110,241,0.42)]

                sm:min-h-[54px]
                sm:px-6
                sm:text-[13px]

                md:px-7
                md:text-[14px]
              "
            >
              <span>
                Get a Free Consultation with a CA
              </span>

              <span
                className="
                  shrink-0

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowIcon />
              </span>
            </Link>
          </motion.div>

          {/* =================================================
              TRUST STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 30,
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
              duration: 0.9,
              delay: 0.85,
            }}
            className="
              mt-10

              grid

              max-w-[800px]

              grid-cols-2

              border-t
              border-white/10

              pt-6

              sm:mt-11
              sm:grid-cols-4
              sm:pt-7

              xl:mt-12
            "
          >
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                  scale: reduceMotion ? 1 : 0.95,
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
                  duration: 0.72,
                  delay: 0.9 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  min-w-0

                  px-3
                  py-3

                  first:pl-0

                  ${
                    index % 2 !== 0
                      ? "border-l border-white/10"
                      : ""
                  }

                  ${
                    index > 1
                      ? "border-t border-white/10 sm:border-t-0"
                      : ""
                  }

                  sm:border-l
                  sm:border-white/10
                  sm:px-5
                  sm:py-0

                  sm:first:border-l-0
                  sm:first:pl-0
                `}
              >
                <div
                  className="
                    font-heading

                    text-[19px]
                    font-bold

                    leading-[1.25]

                    tracking-[-0.02em]

                    text-white

                    sm:text-[18px]

                    md:text-[20px]

                    2xl:text-[21px]
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    mt-1.5

                    font-body

                    text-[9px]
                    font-medium

                    leading-[1.4]

                    text-[#7F91A6]

                    md:text-[10px]

                    2xl:text-[11px]
                  "
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =================================================
            RIGHT DASHBOARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 65,
            y: reduceMotion ? 0 : 30,
            scale: reduceMotion ? 1 : 0.92,
            rotateY: reduceMotion ? 0 : -8,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            type: "spring",
            stiffness: 65,
            damping: 17,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            relative

            mx-auto

            w-full
            max-w-[650px]

            [perspective:1500px]

            xl:max-w-none
          "
        >
          {/* =================================================
              FLOATING DOT
          ================================================= */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [-7, 7, -7],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none

              absolute
              -left-6
              top-[15%]

              z-20

              hidden

              h-[21px]
              w-[21px]

              rounded-full

              border
              border-[#4DD7B8]/40

              bg-[#4DD7B8]/15

              shadow-[0_0_30px_rgba(77,215,184,0.25)]

              md:block
            "
          />

          {/* =================================================
              MAIN 3D CARD
          ================================================= */}

          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="
              relative

              rounded-[24px]

              border
              border-white/10

              bg-[#142335]/80

              p-3

              shadow-[0_35px_90px_rgba(0,0,0,0.38)]

              backdrop-blur-[30px]

              sm:rounded-[28px]
              sm:p-4

              md:p-5
            "
          >
            {/* TOP LIGHT */}

            <div
              className="
                pointer-events-none

                absolute
                left-[20%]
                top-0

                h-px
                w-[60%]

                bg-gradient-to-r
                from-transparent
                via-[#4F87F5]/60
                to-transparent
              "
            />

            {/* =================================================
                INNER DASHBOARD
            ================================================= */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[20px]

                border
                border-white/[0.08]

                bg-[#091827]/95

                p-4

                sm:rounded-[24px]
                sm:p-5

                md:p-6
              "
            >
              {/* BROWSER DOTS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                }}
                className="flex items-center justify-between"
              >
                <div className="flex gap-[6px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#F06464]" />

                  <span className="h-[7px] w-[7px] rounded-full bg-[#E4BB55]" />

                  <span className="h-[7px] w-[7px] rounded-full bg-[#48CDB0]" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[28px] rounded-full bg-white/10" />

                  <span
                    className="
                      h-[22px]
                      w-[22px]

                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]
                    "
                  />
                </div>
              </motion.div>

              {/* =================================================
                  DASHBOARD STATS
              ================================================= */}

              <div
                className="
                  mt-6

                  grid
                  grid-cols-3

                  gap-2

                  sm:gap-3
                "
              >
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 25,
                      scale: reduceMotion ? 1 : 0.92,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 75,
                      damping: 16,
                      mass: 0.85,
                      delay: 0.7 + index * 0.14,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.025,
                          }
                    }
                    className="
                      min-w-0

                      rounded-[13px]

                      border
                      border-white/[0.08]

                      bg-white/[0.05]

                      px-1.5
                      py-3

                      text-center

                      sm:rounded-[16px]
                      sm:px-3
                      sm:py-4

                      md:py-5
                    "
                  >
                    <div
                      className="
                        font-heading

                        text-[15px]
                        font-bold

                        leading-none

                        text-white

                        sm:text-[19px]

                        md:text-[22px]
                      "
                    >
                      {stat.value}
                    </div>

                    <div
                      className="
                        mt-2

                        font-body

                        text-[7px]
                        font-medium

                        leading-[1.35]

                        text-[#8494A7]

                        min-[380px]:text-[8px]

                        sm:text-[9px]
                      "
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  SERVICE DASHBOARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 32,
                  scale: reduceMotion ? 1 : 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  delay: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-5

                  rounded-[17px]

                  border
                  border-white/[0.07]

                  bg-[#06121E]/80

                  p-3

                  sm:mt-6
                  sm:rounded-[20px]
                  sm:p-4

                  md:p-5
                "
              >
                {/* =================================================
                    PROGRESS BARS
                ================================================= */}

                <div className="space-y-[7px]">
                  <div className="flex gap-3">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "22%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.05,
                        delay: 1.18,
                      }}
                      className="
                        h-[6px]
                        rounded-full
                        bg-[#286CE6]
                      "
                    />

                    <div className="h-[6px] flex-1 rounded-full bg-white/[0.05]" />
                  </div>

                  <div className="flex gap-3">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "36%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.1,
                        delay: 1.28,
                      }}
                      className="
                        h-[6px]
                        rounded-full
                        bg-[#3EAD98]
                      "
                    />

                    <div className="h-[6px] flex-1 rounded-full bg-white/[0.05]" />
                  </div>
                </div>

                {/* =================================================
                    SERVICE PILLS
                ================================================= */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <motion.span
                      key={service}
                      initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 15,
                        scale: reduceMotion ? 1 : 0.85,
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
                        type: "spring",
                        stiffness: 85,
                        damping: 15,
                        mass: 0.8,
                        delay: 1.2 + index * 0.1,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -3,
                              scale: 1.04,
                            }
                      }
                      className="
                        inline-flex

                        items-center

                        gap-1.5

                        rounded-full

                        border
                        border-[#48D4B0]/20

                        bg-[#48D4B0]/10

                        px-2
                        py-[6px]

                        font-body

                        text-[8px]
                        font-medium

                        text-[#69DABD]

                        min-[380px]:text-[9px]

                        sm:px-2.5
                        sm:text-[10px]
                      "
                    >
                      <span
                        className="
                          h-[5px]
                          w-[5px]

                          shrink-0

                          rounded-full

                          bg-[#57DFBE]

                          shadow-[0_0_9px_rgba(87,223,190,0.7)]
                        "
                      />

                      {service}
                    </motion.span>
                  ))}
                </div>

                {/* =================================================
                    CHART
                ================================================= */}

                <div
                  className="
                    mt-6

                    flex

                    h-[70px]

                    items-end

                    gap-[4px]

                    border-b
                    border-white/[0.07]

                    px-1

                    sm:h-[90px]
                    sm:gap-[6px]

                    md:h-[110px]
                  "
                >
                  {chartBars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        height: `${height}%`,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 55,
                        damping: 14,
                        mass: 0.9,
                        delay: 1.35 + index * 0.08,
                      }}
                      className="
                        min-w-0
                        flex-1

                        rounded-t-[4px]

                        bg-gradient-to-t
                        from-[#0A2248]
                        to-[#2869DB]
                      "
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FLOATING SINCE 2013 CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -30,
                scale: reduceMotion ? 1 : 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.9,
                delay: 1.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative

                z-20

                mt-3

                flex

                items-center

                gap-3

                rounded-[15px]

                border
                border-[#46D7B5]/20

                bg-[#103045]/95

                px-3
                py-3

                shadow-[0_15px_40px_rgba(0,0,0,0.28)]

                backdrop-blur-xl

                sm:absolute
                sm:-bottom-[24px]
                sm:-left-[30px]
                sm:mt-0
                sm:min-w-[235px]

                md:-left-[40px]
              "
            >
              <span
                className="
                  flex

                  h-[38px]
                  w-[38px]

                  shrink-0

                  items-center
                  justify-center

                  rounded-[11px]

                  border
                  border-[#4AD6B6]/20

                  bg-[#4AD6B6]/10

                  text-[#5EDCC0]
                "
              >
                <CalendarIcon />
              </span>

              <div className="min-w-0 flex-1">
                <div
                  className="
                    font-heading

                    text-[13px]
                    font-bold

                    text-white

                    sm:text-[14px]
                  "
                >
                  Since 2013
                </div>

                <div
                  className="
                    mt-1

                    font-body

                    text-[8px]
                    font-medium

                    text-[#8495A8]

                    sm:text-[9px]
                  "
                >
                  Serving Chennai &amp; Tamil Nadu
                </div>
              </div>

              <span
                className="
                  h-[8px]
                  w-[8px]

                  shrink-0

                  rounded-full

                  bg-[#49DDBB]

                  shadow-[0_0_15px_rgba(73,221,187,0.7)]
                "
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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

/* =========================================================
   CALENDAR ICON
========================================================= */

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M7 3V7M17 3V7M3 10H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8 14H10M14 14H16M8 17H10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}