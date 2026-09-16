"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    number: "01",
    label: "Start",
    title: "Build the foundation",
    description:
      "Business setup, registrations, licensing and initial compliance requirements.",
  },
  {
    number: "02",
    label: "Operate",
    title: "Run with clarity",
    description:
      "Accounting, taxation, GST and professional support for ongoing operations.",
  },
  {
    number: "03",
    label: "Grow",
    title: "Scale with confidence",
    description:
      "Legal support, contracts, documentation and advisory as the business expands.",
  },
];

const capabilities = [
  "Business setup",
  "Accounting",
  "Taxation",
  "GST & compliance",
  "Legal support",
  "Business advisory",
];

export default function BusinessGrowth() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-6 sm:py-5 lg:py-5">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-160px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#6C8CFF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[60px] h-[460px] w-[460px] rounded-full bg-[#56D7D3]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                  ease,
                }}
                className="h-[2px] rounded-full bg-[#5B7CFA]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B7CFA]">
                From Startup to Business Growth
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-[700px]

                !text-[38px]
                !font-[700]
                !leading-[1.04]
                !tracking-[-0.05em]
                !text-[#0F2238]

                sm:!text-[48px]
                lg:!text-[56px]
              "
            >
              Support that grows
              <span className="block !text-[#5B7CFA]">
                with your business.
              </span>
            </h2>
          </motion.div>

          <motion.p
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease,
            }}
            className="
              max-w-[620px]

              text-[14px]
              leading-7
              text-[#63748A]

              sm:text-[15px]
              sm:leading-8

              lg:ml-auto
            "
          >
            Tax India Firm&apos;s original positioning was built around helping
            entrepreneurs with their startup journey. That remains an important
            part of what we do, but businesses need professional support well
            beyond their initial incorporation.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN WRAPPER
        ===================================================== */}

        <div
          className="
            relative
            mt-12

            overflow-hidden

            rounded-[30px]

            border
            border-[#DCE4EF]

            bg-white

            shadow-[0_35px_90px_rgba(31,53,84,0.09)]

            sm:mt-14
            sm:rounded-[36px]

            lg:mt-16
            lg:rounded-[40px]
          "
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* =================================================
                LEFT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -32,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="
                relative
                z-10

                p-6

                sm:p-8
                md:p-10

                lg:p-12
              "
            >
              {/* label */}

              <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#5B7CFA]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#5B7CFA]">
                  Business Lifecycle
                </span>
              </div>

              {/* heading */}

              <h3
                className="
                  mt-6
                  max-w-[560px]

                  !text-[30px]
                  !font-[700]
                  !leading-[1.08]
                  !tracking-[-0.04em]
                  !text-[#10233A]

                  sm:!text-[36px]
                  lg:!text-[40px]
                "
              >
                Professional support beyond the first registration.
              </h3>

              {/* content */}

              <div
                className="
                  mt-6
                  max-w-[620px]
                  space-y-4

                  text-[14px]
                  leading-7
                  text-[#66788E]

                  sm:text-[15px]
                  sm:leading-8
                "
              >
                <p>
                  That remains an important part of what we do, but businesses
                  need support well beyond their initial incorporation.
                </p>

                <p>
                  From the first decision to start a business through ongoing
                  operations and growth, professional requirements evolve.
                </p>

                <p>
                  Tax India Firm aims to be a{" "}
                  <strong className="font-semibold text-[#17314E]">
                    single professional services point of contact
                  </strong>{" "}
                  for businesses that need support across taxation, accounting,
                  compliance, legal and related business requirements.
                </p>
              </div>

              {/* =================================================
                  CAPABILITIES
              ================================================= */}

              <div className="mt-9">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#94A3B8]">
                  Support across
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.1 + index * 0.05,
                        ease,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        flex
                        items-center
                        gap-2

                        rounded-full

                        border
                        border-[#DCE5F0]

                        bg-[#FAFCFF]

                        px-4
                        py-2.5

                        transition-all
                        duration-300

                        hover:border-[#B9C8FF]
                        hover:bg-[#F5F7FF]
                        hover:shadow-[0_8px_22px_rgba(47,73,130,0.07)]
                      "
                    >
                      <span
                        className="
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center

                          rounded-full

                          bg-[#E8EDFF]

                          text-[7px]
                          font-bold

                          text-[#5B7CFA]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-semibold text-[#3D536B]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/business"
                  className="
                    group

                    inline-flex
                    min-h-[52px]

                    items-center
                    justify-center

                    gap-3

                    rounded-full

                    bg-[#102B47]

                    px-6

                    text-sm
                    font-semibold

                    !text-white

                    shadow-[0_12px_30px_rgba(16,43,71,0.16)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#5B7CFA]
                    hover:shadow-[0_16px_38px_rgba(91,124,250,0.24)]
                  "
                >
                  <span className="!text-white">
                    Explore business services
                  </span>

                  <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <span className="text-[11px] font-medium text-[#8C9CAD]">
                  Start → Operate → Grow
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                delay: 0.06,
                ease,
              }}
              className="
                relative

                overflow-hidden

                bg-gradient-to-br
                from-[#122A45]
                via-[#163556]
                to-[#1A4663]

                p-5

                sm:p-7

                lg:min-h-[680px]
                lg:p-10
              "
            >
              {/* glow */}

              <div className="pointer-events-none absolute right-[-100px] top-[-80px] h-[360px] w-[360px] rounded-full bg-[#6C8CFF]/25 blur-[90px]" />

              <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-[380px] w-[380px] rounded-full bg-[#54D8D1]/15 blur-[100px]" />

              {/* decorative circles */}

              <div className="pointer-events-none absolute right-[5%] top-[5%] h-[360px] w-[360px] rounded-full border border-white/[0.07]" />

              <div className="pointer-events-none absolute right-[14%] top-[15%] h-[250px] w-[250px] rounded-full border border-white/[0.055]" />

              <div className="relative z-10 flex h-full flex-col">
                {/* HEADER */}

                <div>
                  <span
                    className="
                      inline-flex

                      rounded-full

                      border
                      border-white/[0.12]

                      bg-white/[0.06]

                      px-4
                      py-2

                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]

                      !text-[#9FC9FF]

                      backdrop-blur-xl

                      sm:text-[9px]
                    "
                  >
                    Growth Path
                  </span>

                  <h3
                    className="
                      mt-5
                      max-w-[520px]

                      !text-[27px]
                      !font-[700]
                      !leading-[1.08]
                      !tracking-[-0.04em]

                      !text-white

                      sm:!text-[32px]
                      lg:!text-[36px]
                    "
                  >
                    One business.
                    <span className="block !text-[#A9C3FF]">
                      Different needs over time.
                    </span>
                  </h3>
                </div>

                {/* =================================================
                    ALIGNED GROWTH PATH
                ================================================= */}

                <div className="relative mt-10 flex-1 sm:mt-12">
                  {/* vertical line
                      centered exactly below the nodes */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      bottom-[32px]
                      left-[27px]
                      top-[32px]

                      w-px

                      bg-gradient-to-b
                      from-[#A9C3FF]/65
                      via-[#6C8CFF]/45
                      to-[#54D8D1]/25

                      sm:left-[31px]
                    "
                  />

                  <div className="space-y-5 sm:space-y-6">
                    {stages.map((stage, index) => (
                      <motion.div
                        key={stage.number}
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
                          amount: 0.25,
                        }}
                        transition={{
                          duration: 0.62,
                          delay: 0.12 + index * 0.1,
                          ease,
                        }}
                        className="
                          relative

                          grid
                          grid-cols-[56px_minmax(0,1fr)]

                          items-center

                          gap-4

                          sm:grid-cols-[64px_minmax(0,1fr)]
                          sm:gap-5
                        "
                      >
                        {/* NODE */}

                        <motion.div
                          whileHover={{
                            scale: 1.06,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            relative
                            z-10

                            flex
                            h-[56px]
                            w-[56px]

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/15

                            bg-[#254768]/90

                            text-[10px]
                            font-bold

                            !text-white

                            shadow-[0_10px_26px_rgba(0,0,0,0.18)]

                            backdrop-blur-xl

                            sm:h-[64px]
                            sm:w-[64px]
                          "
                        >
                          {stage.number}

                          <span className="pointer-events-none absolute inset-[6px] rounded-full border border-white/[0.08]" />
                        </motion.div>

                        {/* CARD */}

                        <motion.div
                          whileHover={{
                            x: 4,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            group
                            relative

                            min-w-0

                            overflow-hidden

                            rounded-[20px]

                            border
                            border-white/[0.11]

                            bg-white/[0.07]

                            p-4

                            backdrop-blur-xl

                            transition-all
                            duration-300

                            hover:border-white/[0.18]
                            hover:bg-white/[0.10]

                            sm:p-5
                          "
                        >
                          <span
                            className="
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.18em]

                              !text-[#91B6FF]
                            "
                          >
                            {stage.label}
                          </span>

                          <p
                            className="
                              mt-1.5

                              !text-[17px]
                              !font-semibold
                              !leading-6
                              !tracking-[-0.02em]

                              !text-white

                              sm:!text-[19px]
                            "
                          >
                            {stage.title}
                          </p>

                          <p
                            className="
                              mt-2

                              text-[11px]
                              leading-5

                              !text-white/58

                              sm:text-[12px]
                              sm:leading-6
                            "
                          >
                            {stage.description}
                          </p>

                          {/* hover line */}

                          <div
                            className="
                              absolute
                              bottom-0
                              left-0

                              h-[2px]
                              w-0

                              bg-gradient-to-r
                              from-[#6C8CFF]
                              to-[#54D8D1]

                              transition-all
                              duration-500

                              group-hover:w-full
                            "
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    OBJECTIVE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.35,
                    ease,
                  }}
                  className="
                    mt-8

                    rounded-[22px]

                    border
                    border-white/[0.10]

                    bg-gradient-to-br
                    from-white/[0.10]
                    to-white/[0.05]

                    p-5

                    backdrop-blur-xl

                    sm:p-6
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-[13px]

                        bg-gradient-to-br
                        from-[#6C8CFF]
                        to-[#54D8D1]

                        !text-white

                        shadow-[0_8px_24px_rgba(85,130,220,0.25)]
                      "
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        <path
                          d="M14 7L19 12L14 17"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.17em] !text-[#A6C5FF]">
                        Our objective
                      </p>

                      <p
                        className="
                          mt-2

                          !text-[15px]
                          !font-medium
                          !leading-7

                          !text-white

                          sm:!text-[16px]
                        "
                      >
                        Help businesses spend less time navigating professional
                        requirements and more time focusing on their business.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.15,
            ease,
          }}
          className="
            mx-auto
            mt-5

            flex
            max-w-[950px]

            flex-col
            gap-4

            rounded-[20px]

            border
            border-[#D9E3EF]

            bg-white

            px-5
            py-4

            shadow-[0_14px_40px_rgba(31,53,84,0.06)]

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-[#E8EDFF]
                to-[#E9FBFA]

                text-[#5B7CFA]
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 12L10 16L18 8"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-[12px] font-medium leading-5 text-[#445B73] sm:text-[13px]">
              Professional support designed to continue as your business grows.
            </p>
          </div>

          <span className="pl-11 text-[8px] font-bold uppercase tracking-[0.17em] text-[#93A4B7] sm:pl-0">
            Start → Operate → Grow
          </span>
        </motion.div>
      </div>
    </section>
  );
}