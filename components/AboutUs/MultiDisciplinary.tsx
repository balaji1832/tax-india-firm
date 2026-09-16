"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const expertise = [
  {
    no: "01",
    title: "Chartered Accountancy",
  },
  {
    no: "02",
    title: "Company Secretarial Services",
  },
  {
    no: "03",
    title: "Corporate Legal Services",
  },
  {
    no: "04",
    title: "Accounting",
  },
  {
    no: "05",
    title: "Taxation & Compliance",
  },
  {
    no: "06",
    title: "Business Support",
  },
];

export default function MultiDisciplinary() {
  return (
    <section className="bg-white px-5 py-6 sm:px-8 sm:py-6 lg:px-5 lg:py-5 xl:px-5">
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          overflow-hidden
          rounded-[28px]
          bg-[#102F50]
          px-5
          py-12
          shadow-[0_30px_90px_rgba(16,47,80,0.18)]

          sm:rounded-[34px]
          sm:px-8
          sm:py-14

          lg:px-12
          lg:py-18

          xl:px-14
          xl:py-20
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute -left-[180px] bottom-[-190px] h-[430px] w-[430px] rounded-full bg-[#246EF1]/15 blur-[110px]" />

        <div className="pointer-events-none absolute -right-[160px] top-[-170px] h-[450px] w-[450px] rounded-full bg-[#4D97FF]/15 blur-[120px]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* subtle dot texture */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* =====================================================
            CONTENT GRID
        ===================================================== */}

        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 xl:gap-20">
          {/* =================================================
              LEFT CONTENT
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            {/* label */}

            <div className="flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease,
                }}
                className="h-[2px] rounded-full bg-[#72A9FF]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.19em] !text-[#9FC8FF]">
                Multi-disciplinary approach
              </span>
            </div>

            {/* heading */}

            <h2
              className="
                mt-6
                max-w-[700px]

                !text-[34px]
                !font-[700]
                !leading-[1.05]
                !tracking-[-0.048em]
                !text-white

                sm:!text-[44px]
                lg:!text-[50px]
                xl:!text-[54px]
              "
            >
              Business needs are
              <span className="block !text-[#8AB8FF]">
                rarely one-dimensional.
              </span>
            </h2>

            {/* content */}

            <div className="mt-6 max-w-[680px] space-y-4 text-[13px] leading-7 sm:text-[14px] sm:leading-8">
              <p className="!text-white/65">
                A contract may have tax implications. A restructuring decision
                may involve accounting and compliance considerations. An
                expanding business may need support across taxation, corporate
                matters, employment documentation and legal requirements.
              </p>

              <p className="!text-white/65">
                Tax India Firm brings together professional expertise across
                these connected areas.
              </p>
            </div>

            {/* highlighted note */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.18,
                ease,
              }}
              className="
                mt-8
                flex
                items-start
                gap-4
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.055]
                p-5
                backdrop-blur-xl

                sm:p-6
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-[13px]
                  bg-[#246EF1]
                  text-white
                  shadow-[0_10px_28px_rgba(36,110,241,0.30)]
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="2.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="5"
                    cy="6"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="19"
                    cy="6"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="5"
                    cy="18"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="19"
                    cy="18"
                    r="1.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M6.4 7.2L10.2 10.6M17.6 7.2L13.8 10.6M6.4 16.8L10.2 13.4M17.6 16.8L13.8 13.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] !text-[#8FBDFF]">
                  Connected expertise
                </p>

                <p className="mt-2 max-w-[570px] text-[13px] leading-6 !text-white/70">
                  This multi-disciplinary approach allows businesses to seek
                  support for related professional requirements through one
                  firm.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT NETWORK
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="relative"
          >
            {/* =================================================
                DESKTOP NETWORK
            ================================================= */}

            <div className="relative mx-auto hidden aspect-square w-full max-w-[590px] md:block">
              {/* soft outer glow */}

              <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[#246EF1]/[0.05] blur-[40px]" />

              {/* connector svg */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 600 600"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M300 300 L150 130"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease,
                  }}
                />

                <motion.path
                  d="M300 300 L450 130"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.28,
                    ease,
                  }}
                />

                <motion.path
                  d="M300 300 L500 300"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.36,
                    ease,
                  }}
                />

                <motion.path
                  d="M300 300 L445 470"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.44,
                    ease,
                  }}
                />

                <motion.path
                  d="M300 300 L155 470"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.52,
                    ease,
                  }}
                />

                <motion.path
                  d="M300 300 L100 300"
                  stroke="rgba(142,190,255,0.25)"
                  strokeWidth="1.4"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease,
                  }}
                />
              </svg>

              {/* =================================================
                  CENTER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20

                  flex
                  h-[150px]
                  w-[150px]

                  -translate-x-1/2
                  -translate-y-1/2

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/15

                  bg-[#173D63]/85

                  text-center

                  shadow-[0_25px_70px_rgba(0,0,0,0.22)]

                  backdrop-blur-xl

                  lg:h-[170px]
                  lg:w-[170px]
                "
              >
                {/* pulse */}

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.18, 0.05, 0.18],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-[-18px] rounded-full border border-[#74ACFF]/25"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.1, 0.02, 0.1],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-[-34px] rounded-full border border-[#74ACFF]/15"
                />

                <div className="relative z-10 px-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] !text-[#85B5FF]">
                    One Firm
                  </p>

                  <p className="mt-2 !text-[18px] !font-semibold !leading-6 !text-white">
                    Connected
                    <br />
                    Expertise
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  NODES
              ================================================= */}

              {expertise.map((item, index) => {
                const positions = [
                  "left-[7%] top-[11%]",
                  "right-[5%] top-[11%]",
                  "right-[-1%] top-[43%]",
                  "right-[6%] bottom-[8%]",
                  "left-[7%] bottom-[8%]",
                  "left-[-1%] top-[43%]",
                ];

                return (
                  <motion.div
                    key={item.no}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.08,
                      ease,
                    }}
                    className={`
                      absolute
                      z-30
                      w-[165px]
                      ${positions[index]}
                    `}
                  >
                    <motion.div
                      animate={{
                        y:
                          index % 2 === 0
                            ? [0, -5, 0]
                            : [0, 5, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        rounded-[17px]
                        border
                        border-white/12
                        bg-white/[0.075]
                        p-3.5
                        shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-[#75ACFF]/40
                        hover:bg-white/[0.11]
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

                            rounded-[10px]

                            bg-[#246EF1]/20

                            text-[8px]
                            font-bold

                            !text-[#8DBDFF]
                          "
                        >
                          {item.no}
                        </div>

                        <p className="text-[10px] font-semibold leading-4 !text-white/88 lg:text-[11px]">
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                MOBILE / SMALL TABLET
            ================================================= */}

            <div className="md:hidden">
              {/* center heading */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease,
                }}
                className="
                  mx-auto
                  mb-5
                  max-w-[300px]
                  rounded-[20px]
                  border
                  border-white/12
                  bg-white/[0.07]
                  p-5
                  text-center
                  backdrop-blur-xl
                "
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] !text-[#82B3FF]">
                  One Firm
                </p>

                <p className="mt-2 !text-[19px] !font-semibold !text-white">
                  Connected Expertise
                </p>
              </motion.div>

              {/* mobile cards */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.no}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      duration: 0.55,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-[17px]

                      border
                      border-white/10

                      bg-white/[0.065]

                      p-4

                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-[11px]

                        bg-[#246EF1]/20

                        text-[9px]
                        font-bold

                        !text-[#8DBDFF]
                      "
                    >
                      {item.no}
                    </div>

                    <p className="text-[11px] font-semibold leading-5 !text-white/85">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}