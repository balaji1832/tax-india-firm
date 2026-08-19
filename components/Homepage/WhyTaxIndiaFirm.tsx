"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck2,
  Languages,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    icon: Languages,
    title: "Plain Language, Always",
    description:
      "We explain government processes, forms and jargon in clear Tamil Nadu business context — no CA speak.",
  },
  {
    icon: UserRoundCheck,
    title: "One Expert, Not a Queue",
    description:
      "Every client gets a dedicated CA or CS. One number to call, one person accountable from start to finish.",
  },
  {
    icon: CalendarCheck2,
    title: "We Track Your Deadlines",
    description:
      "GST, ROC, TDS, ITR — we maintain your compliance calendar and file before due dates, every time.",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.10 + index * 0.12,
      duration: 0.9,
      ease: smoothEase,
    },
  }),
};

export default function WhyTaxIndiaFirm() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
      {/* subtle clean background — no dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 48%, #F7FAFF 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-230px]
          h-[430px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#2d8cff]/[0.055]
          blur-[120px]
        "
      />

      {/* blue glow */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 16, 0],
                y: [0, 10, 0],
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
          -left-[170px]
          top-[120px]
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#2d8cff]/[0.045]
          blur-[120px]
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -14, 0],
                y: [0, -9, 0],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[160px]
          bottom-[20px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#2d8cff]/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <div className="grid items-start gap-14 md:gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-24 2xl:gap-28">
          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -14,
                    y: 18,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }
            }
            viewport={{
              once: false,
              amount: 0.22,
              margin: "0px 0px -8% 0px",
            }}
            transition={{
              duration: 1.05,
              ease: smoothEase,
            }}
            style={{
              willChange: reduceMotion ? "auto" : "transform, opacity",
            }}
          >
            {/* section label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#2d8cff]" />

              <span className="!text-[#2d8cff] text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]">
                Why Tax India Firm
              </span>
            </div>

            {/* heading */}
            <h2
              className="
                max-w-[600px]
                !text-[#17283A]
                text-[25px]
                font-semibold
                leading-[1.2]
                tracking-[-0.03em]

                sm:text-[30px]
                md:text-[34px]
                lg:text-[38px]
                xl:text-[40px]
              "
            >
              Chennai&apos;s Preferred CA Firm for{" "}
              <span className="!text-[#2d8cff]">Startups & SMEs.</span>
            </h2>

            {/* paragraphs */}
            <div className="mt-8 max-w-[650px] space-y-5">
              <p className="!text-[#68798A] text-[13px] leading-[1.8] sm:text-[13.5px] md:text-[14px]">
                Since 2013, we have helped over 2,760 businesses in Chennai and
                across Tamil Nadu start right, file on time and stay compliant.
                But what makes us different from every other CA firm is not the
                number, it is how we work.
              </p>

              <p className="!text-[#68798A] text-[13px] leading-[1.8] sm:text-[13.5px] md:text-[14px]">
                We explain every step in plain language before we start. You
                know exactly what documents are needed, what the government
                process involves and how long it will take, before you commit
                to anything.
              </p>

              <p className="!text-[#68798A] text-[13px] leading-[1.8] sm:text-[13.5px] md:text-[14px]">
                You get a dedicated expert for your case, not a shared inbox,
                not a junior who escalates every query. One expert, one point
                of contact, from start to certificate.
              </p>

              <p className="!text-[#68798A] text-[13px] leading-[1.8] sm:text-[13.5px] md:text-[14px]">
                We track your compliance calendar. GST deadlines, ROC annual
                filings, director eKYC, licence renewals, we send you reminders
                and file on time. You never pay a late penalty because of us.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: false, amount: 0.35, margin: "0px 0px -8% 0px" }}
              transition={{
                duration: 0.9,
                delay: 0.28,
                ease: smoothEase,
              }}
              style={{
                willChange: reduceMotion ? "auto" : "transform, opacity",
              }}
              className="mt-9"
            >
              <Link
                href="/about-us"
                className="
                  group
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#2d8cff]/60
                  bg-white
                  px-5
                  py-[13px]
                  text-[13px]
                  font-semibold
                  text-[#2d8cff]
                  transition-all
                  duration-300

                  hover:border-[#2d8cff]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(45,140,255,0.16)]

                  sm:w-auto
                "
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#2d8cff] transition-transform duration-300 group-hover:scale-x-100" />

                <span className="relative z-10">
                  Learn About Our Team & Approach
                </span>

                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT DIFFERENTIATORS */}
          <div className="relative">
            {/* vertical connector desktop */}
            <motion.div
              initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      scaleY: 1,
                      opacity: 1,
                    }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: smoothEase,
              }}
              className="
                absolute
                bottom-[46px]
                left-[27px]
                top-[46px]
                hidden
                w-px
                origin-top
                bg-gradient-to-b
                from-[#2d8cff]/35
                via-[#2d8cff]/15
                to-transparent

                sm:block
              "
            />

            <div className="space-y-5 md:space-y-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={reduceMotion ? undefined : itemVariants}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{
                      once: false,
                      amount: 0.22,
                      margin: "0px 0px -7% 0px",
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 2,
                            y: -2,
                          }
                    }
                    style={{
                      willChange: reduceMotion ? "auto" : "transform, opacity",
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-[#E2E8EF]
                      bg-white/95
                      p-6
                      shadow-[0_14px_38px_rgba(25,50,75,0.055)]
                      backdrop-blur-sm
                      transition-all
                      duration-400

                      hover:border-[#2d8cff]/28
                      hover:shadow-[0_20px_46px_rgba(45,140,255,0.10)]

                      sm:p-7
                    "
                  >
                    {/* hover wash */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "linear-gradient(115deg, rgba(45,140,255,0.07), transparent 58%)",
                      }}
                    />

                    {/* sliding accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-gradient-to-r
                        from-[#2d8cff]
                        to-[#79B7FF]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* icon */}
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: 3,
                                scale: 1.04,
                              }
                        }
                        className="
                          flex
                          h-[52px]
                          w-[52px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[14px]
                          border
                          border-[#2d8cff]/18
                          bg-[#2d8cff]/[0.075]
                          shadow-[0_8px_22px_rgba(45,140,255,0.08)]
                          transition-colors
                          duration-300

                          group-hover:border-[#2d8cff]/30
                          group-hover:bg-[#2d8cff]/[0.10]
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.9}
                          className="text-[#2d8cff]"
                        />
                      </motion.div>

                      <div>
                        <h3 className="!text-[#223347] text-[15.5px] font-semibold tracking-[-0.018em] sm:text-[16.5px]">
                          {item.title}
                        </h3>

                        <p className="mt-2.5 !text-[#768798] text-[12.5px] leading-[1.72] sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* soft background behind cards */}
            <div className="pointer-events-none absolute -right-12 top-1/2 -z-10 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#2d8cff]/[0.045] blur-[90px]" />
          </div>
        </div>
      </div>
    </section>
  );
}