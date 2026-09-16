"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const timeline = [
  {
    number: "01",
    mark: "2013",
    label: "THE BEGINNING",
    title: "Established with a clear focus",
    text:
      "Tax India Firm was established with a focus on supporting entrepreneurs and businesses with professional services required to start, manage and grow their businesses.",
  },
  {
    number: "02",
    mark: "CHENNAI",
    label: "OUR BASE",
    title: "Local understanding, broader support",
    text:
      "Based in Chennai, the firm provides support across business setup, licensing, accounting, taxation, legal compliance and other professional services.",
  },
  {
    number: "03",
    mark: "TODAY",
    label: "CONNECTED SUPPORT",
    title: "Professional support that works together",
    text:
      "Business decisions often involve tax, accounting, regulatory compliance and legal documentation at the same time. Our aim is to address those requirements in a coordinated way.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] py-6 sm:py-4 lg:py-4">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -left-[180px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#246EF1]/[0.05] blur-[110px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[80px] h-[420px] w-[420px] rounded-full bg-[#9BC5FF]/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#246EF1]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246EF1]">
                Who We Are
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-[680px]

                !text-[38px]
                !font-[700]
                !leading-[1.05]
                !tracking-[-0.048em]
                !text-[#112842]

                sm:!text-[48px]
                lg:!text-[56px]
              "
            >
              Built around the
              <span className="block !text-[#246EF1]">
                realities of business.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease,
            }}
            className="lg:ml-auto"
          >
            <p className="max-w-[620px] text-[14px] leading-7 text-[#64778E] sm:text-[15px] sm:leading-8">
              Our aim is to give businesses access to relevant professional
              support across connected areas, making requirements easier to
              understand and manage.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            STORY BOARD
        ===================================================== */}

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* desktop connector */}
          <div className="absolute left-[8%] right-[8%] top-[38px] hidden h-px bg-[#C9DCF4] lg:block" />

          <div className="grid gap-5 lg:grid-cols-3">
            {timeline.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 34,
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
                  duration: 0.65,
                  delay: index * 0.09,
                  ease,
                }}
                className="relative"
              >
                {/* top node */}

                <div className="relative z-10 mb-6 flex items-center gap-4 lg:flex-col lg:gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-[7px]
                      border-[#F8FAFD]
                      bg-[#246EF1]
                      text-[11px]
                      font-bold
                      text-white
                      shadow-[0_10px_28px_rgba(36,110,241,0.24)]

                      lg:h-[76px]
                      lg:w-[76px]
                    "
                  >
                    {item.number}
                  </motion.div>

                  <div className="lg:text-center">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#93A5B8]">
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1
                        !text-[17px]
                        !font-bold
                        !tracking-[-0.025em]
                        !text-[#246EF1]

                        sm:!text-[18px]
                      "
                    >
                      {item.mark}
                    </p>
                  </div>
                </div>

                {/* card */}

                <div
                  className="
                    group
                    relative
                    min-h-[280px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#D8E5F4]
                    bg-white
                    p-6
                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-[#9FC6F7]
                    hover:shadow-[0_24px_65px_rgba(34,71,120,0.10)]

                    sm:p-7
                    lg:min-h-[315px]
                  "
                >
                  {/* subtle large index */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-2
                      -top-6

                      !text-[110px]
                      !font-[800]
                      !leading-none
                      !tracking-[-0.07em]
                      !text-[#246EF1]/[0.035]
                    "
                  >
                    {item.number}
                  </div>

                  {/* blue accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[3px]
                      w-0
                      bg-[#246EF1]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="relative z-10">
                    <span className="inline-flex rounded-full bg-[#EEF5FF] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#246EF1]">
                      {item.mark}
                    </span>

                    <h3
                      className="
                        mt-6
                        max-w-[360px]

                        !text-[22px]
                        !font-semibold
                        !leading-[1.2]
                        !tracking-[-0.03em]
                        !text-[#17314E]

                        sm:!text-[24px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-7 text-[#667A91] sm:text-[14px]">
                      {item.text}
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-[#B8D3F6] transition-all duration-500 group-hover:w-14 group-hover:bg-[#246EF1]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#9AAABD]">
                        Tax India Firm
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            ISO / QUALITY SECTION
        ===================================================== */}

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
            duration: 0.7,
            delay: 0.1,
            ease,
          }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[28px]
            bg-[#102F50]
            px-6
            py-7
            text-white
            shadow-[0_24px_60px_rgba(16,47,80,0.14)]

            sm:px-8
            sm:py-8

            lg:mt-12
            lg:px-10
          "
        >
          {/* soft circles */}

          <div className="pointer-events-none absolute -right-[110px] -top-[130px] h-[340px] w-[340px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute right-[50px] top-[20px] h-[180px] w-[180px] rounded-full border border-dashed border-white/10" />

          <div className="pointer-events-none absolute -left-[80px] bottom-[-100px] h-[260px] w-[260px] rounded-full bg-[#246EF1]/20 blur-[70px]" />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="flex items-start gap-5">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-white
                  text-[#246EF1]
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L19 6V11C19 15.6 16.3 18.9 12 21C7.7 18.9 5 15.6 5 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M9 12L11.2 14.2L15.6 9.7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#9CC7FF]">
                  Quality Framework
                </p>

                <p
                  className="
                    mt-2
                    !text-[25px]
                    !font-[700]
                    !tracking-[-0.035em]
                    !text-white

                    sm:!text-[30px]
                  "
                >
                  ISO 9001:2015 Certified
                </p>

                <p className="mt-3 max-w-[680px] text-[13px] leading-6 !text-white/60 sm:text-[14px] sm:leading-7">
                  Certified organisation with a structured approach to
                  professional support.
                </p>
              </div>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2.5

                lg:max-w-[390px]
                lg:justify-end
              "
            >
              {[
                "Structured Process",
                "Professional Support",
                "Business Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.06]
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    !text-white/75
                    backdrop-blur-xl
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}