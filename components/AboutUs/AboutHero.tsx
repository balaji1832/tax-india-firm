"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  "Business Setup",
  "Taxation",
  "Accounting",
  "Compliance",
  "Legal",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFE] pb-16 pt-[112px] sm:pb-20 sm:pt-[125px] lg:pb-24 lg:pt-[142px]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[70px] h-[420px] w-[420px] rounded-full bg-[#2E73F3]/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[20px] h-[440px] w-[440px] rounded-full bg-[#B8D3FF]/[0.13] blur-[120px]" />

      {/* thin top line */}
      <div className="pointer-events-none absolute inset-x-0 top-[78px] h-px bg-[#EDF1F6]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative z-20"
          >
            {/* label */}

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#2E73F3]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E73F3]">
                About Tax India Firm
              </span>
            </div>

            {/* title */}

            <h1
              className="
                mt-6
                max-w-[650px]
                !text-[42px]
                !font-[700]
                !leading-[1]
                !tracking-[-0.052em]
                !text-[#10263F]

                sm:!text-[52px]
                md:!text-[57px]
                lg:!text-[60px]
                xl:!text-[64px]
              "
            >
              Making business
              <span className="relative block w-fit !text-[#2E73F3]">
                simpler to manage.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.45,
                    ease,
                  }}
                  className="absolute -bottom-2 left-0 h-[4px] w-[42%] origin-left rounded-full bg-[#2E73F3]/20"
                />
              </span>
            </h1>

            {/* primary copy */}

            <p className="mt-8 max-w-[590px] text-[16px] leading-8 text-[#5F7288] sm:text-[17px]">
              Professional support for taxation, accounting, compliance,
              legal and business requirements.
            </p>

            {/* description */}

            <p className="mt-5 max-w-[610px] text-[14px] leading-7 text-[#748499] sm:text-[15px] sm:leading-8">
              Tax India Firm helps entrepreneurs and businesses access the
              professional support they need to start, operate and grow with
              greater clarity.
            </p>

            {/* buttons */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#2E73F3]
                  px-7
                  text-sm
                  font-semibold
                  !text-white
                  shadow-[0_14px_32px_rgba(46,115,243,0.20)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#1E62D8]
                  hover:shadow-[0_18px_42px_rgba(46,115,243,0.27)]
                "
              >
                <span className="!text-white">
                  Talk to our team
                </span>

                <span className="!text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>

              <Link
                href="/business/registration"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D1DCE8]
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  !text-[#28435E]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#A1C4FA]
                  hover:!text-[#2E73F3]
                "
              >
                Start a business
              </Link>
            </div>

            {/* mini note */}

            <div className="mt-9 flex max-w-[550px] items-start gap-3 border-t border-[#E1E7EE] pt-6">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[10px] font-bold text-[#2E73F3]">
                ✓
              </span>

              <p className="text-[12px] leading-6 text-[#77889B] sm:text-[13px]">
                One professional services point of contact for connected
                business requirements.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 42,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease,
            }}
            className="relative mx-auto w-full max-w-[660px] lg:ml-auto"
          >
            {/* =================================================
                OFFSET FRAME
            ================================================= */}

            <div
              className="
                absolute
                -right-3
                bottom-[-14px]
                hidden
                h-[88%]
                w-[84%]
                rounded-[34px]
                border-[2px]
                border-[#2E73F3]/20

                sm:block
              "
            />

            {/* blue vertical accent */}

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease,
              }}
              className="
                absolute
                -right-3
                top-[22%]
                hidden
                h-[34%]
                w-[5px]
                origin-top
                rounded-full
                bg-[#2E73F3]

                md:block
              "
            />

            {/* =================================================
                MAIN IMAGE
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[26px]
                bg-[#E5EDF8]
                shadow-[0_30px_75px_rgba(25,57,95,0.13)]

                sm:rounded-[32px]
              "
            >
              <Image
                src="/images/about-hero.png"
                alt="Tax India Firm professional business support"
                width={1000}
                height={1100}
                priority
                className="
                  h-[260px]
                  w-full
                  object-contain
                  object-contain

                  sm:h-[440px]
                  lg:h-[440px]
                "
              />

              {/* subtle gradients */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F263F]/60 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F263F]/10 to-transparent" />

              {/* =================================================
                  IMAGE CONTENT
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease,
                }}
                className="absolute bottom-0 left-0 right-0 p-5 sm:p-7"
              >
                <div className="max-w-[470px]">
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#A6CAFF]">
                    Professional Support
                  </span>

                  <p
                    className="
                      mt-2
                      !text-[20px]
                      !font-semibold
                      !leading-7
                      !tracking-[-0.02em]
                      !text-white

                      sm:!text-[23px]
                    "
                  >
                    Helping businesses make the next move with clarity.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                LEFT FLOATING EXPERIENCE CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
                y: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease,
              }}
              className="
                absolute
                -left-3
                top-[38px]
                rounded-[17px]
                border
                border-[#DAE5F2]
                bg-white/95
                px-4
                py-4
                shadow-[0_15px_38px_rgba(25,57,95,0.11)]
                backdrop-blur-xl

                sm:-left-8
                sm:top-[58px]
                sm:px-5
              "
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#9AAABA]">
                Since
              </p>

              <div className="mt-1 flex items-end gap-2">
                <p className="!text-[25px] !font-[700] !leading-none !tracking-[-0.04em] !text-[#2E73F3]">
                  2013
                </p>

                <span className="pb-[2px] text-[9px] font-semibold text-[#7B8DA1]">
                  Established
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT FLOATING CERTIFIED CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
                y: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.62,
                ease,
              }}
              className="
                absolute
                -right-2
                -top-[20px]
                hidden
                rounded-[17px]
                border
                border-[#DAE5F2]
                bg-white/95
                p-4
                shadow-[0_15px_38px_rgba(25,57,95,0.11)]
                backdrop-blur-xl

                sm:block
                sm:-right-7
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2E73F3]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3L19 6V11C19 15.5 16.4 18.8 12 21C7.6 18.8 5 15.5 5 11V6L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M9 12L11.1 14.1L15.5 9.7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#99A9BA]">
                    Certified
                  </p>

                  <p className="mt-1 !text-[13px] !font-semibold !text-[#17314E]">
                    ISO 9001:2015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LOCATION TAG
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease,
              }}
              className="
                absolute
                bottom-[13px]
                right-[20px]
                rounded-full
                border
                border-white/20
                bg-[#0F263F]/55
                px-4
                py-2
                backdrop-blur-xl

                sm:right-[28px]
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#82B6FF]" />

                <span className="text-[9px] font-semibold !text-white/90">
                  Chennai, Tamil Nadu
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM SERVICE RIBBON
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease,
          }}
          className="
            mt-12
            overflow-hidden
            rounded-[20px]
            border
            border-[#DDE6EF]
            bg-white
            shadow-[0_12px_35px_rgba(23,53,88,0.05)]

            sm:mt-14
            sm:rounded-[24px]
          "
        >
          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
            "
          >
            {/* intro */}

            <div
              className="
                border-b
                border-[#E5EBF2]
                px-5
                py-4

                sm:px-6

                lg:w-[260px]
                lg:border-b-0
                lg:border-r
              "
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#98A8B9]">
                Supporting businesses across
              </p>

              <p className="mt-1 !text-[14px] !font-semibold !text-[#233E59]">
                Connected professional services
              </p>
            </div>

            {/* services */}

            <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.55 + index * 0.05,
                  }}
                  className={`
                    group
                    flex
                    min-h-[68px]
                    items-center
                    justify-center
                    gap-2
                    px-3
                    text-center

                    transition-colors
                    duration-300

                    hover:bg-[#F6F9FF]

                    ${
                      index !== services.length - 1
                        ? "border-r border-[#E8EDF3]"
                        : ""
                    }
                  `}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E73F3] transition-transform duration-300 group-hover:scale-150" />

                  <span className="text-[11px] font-semibold text-[#50667D] transition-colors group-hover:text-[#2E73F3] sm:text-[12px]">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}