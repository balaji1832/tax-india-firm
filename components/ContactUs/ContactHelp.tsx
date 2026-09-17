"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  "GST and taxation",
  "Income tax and ITR",
  "Company registration",
  "Accounting and bookkeeping",
  "Business compliance",
  "Legal and corporate services",
  "Business setup and related professional services",
];

export default function ContactHelp() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* soft background */}
      <div className="pointer-events-none absolute -left-[160px] top-[40px] h-[360px] w-[360px] rounded-full bg-[#246EF1]/[0.04] blur-[110px]" />

      <div className="pointer-events-none absolute -right-[170px] bottom-[20px] h-[380px] w-[380px] rounded-full bg-[#8EBEFF]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid
            gap-9

            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-center
            lg:gap-14

            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
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
              duration: 0.7,
              ease,
            }}
          >
            {/* label */}

            <div className="flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.12,
                  ease,
                }}
                className="h-[2px] rounded-full bg-[#246EF1]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#246EF1]

                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                What Can We Help You With?
              </span>
            </div>

            {/* heading */}

            <motion.h2
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
                duration: 0.7,
                delay: 0.05,
                ease,
              }}
              className="
                mt-4
                max-w-[520px]

                !text-[30px]
                !font-[700]
                !leading-[1.07]
                !tracking-[-0.04em]
                !text-[#112842]

                sm:!text-[38px]
                sm:!leading-[1.06]

                md:!text-[42px]

                lg:!text-[44px] py-3
              "
            >
              Professional support for{" "}
              <span className="!text-[#246EF1]">
                different business needs.
              </span>
            </motion.h2>

            {/* description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
              className="
                mt-4
                max-w-[520px]

                text-[13px]
                leading-6
                text-[#65798F]

                sm:mt-5
                sm:text-[14px]
                sm:leading-7

                lg:text-[15px]
                lg:leading-8
              "
            >
              Not sure which service you need? Tell us about your requirement
              and we&apos;ll help you identify the appropriate next step.
            </motion.p>
          </motion.div>

          {/* =====================================================
              RIGHT SERVICES
          ===================================================== */}

          <div
            className="
              grid
              gap-3

              sm:grid-cols-2
              sm:gap-4
            "
          >
            {services.map((service, index) => (
              <motion.div
                key={service}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative

                  flex
                  min-h-[74px]
                  items-center

                  gap-3.5

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#DCE6F1]

                  bg-[#FAFCFF]

                  p-4

                  transition-all
                  duration-300

                  hover:border-[#B6CFF0]
                  hover:bg-white
                  hover:shadow-[0_12px_32px_rgba(31,67,112,0.07)]

                  sm:min-h-[82px]
                  sm:rounded-[18px]
                  sm:p-4.5

                  lg:min-h-[88px]
                  lg:gap-4
                  lg:p-5
                "
              >
                {/* hover accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0

                    w-[3px]

                    origin-center
                    scale-y-0

                    bg-[#246EF1]

                    transition-transform
                    duration-300

                    group-hover:scale-y-100
                  "
                />

                {/* icon */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0

                    items-center
                    justify-center

                    rounded-[11px]

                    bg-[#EAF3FF]

                    text-[#246EF1]

                    transition-all
                    duration-300

                    group-hover:bg-[#246EF1]
                    group-hover:text-white

                    sm:h-10
                    sm:w-10

                    lg:h-11
                    lg:w-11
                  "
                >
                  <CheckIcon />
                </div>

                {/* service */}

                <p
                  className="
                    min-w-0

                    text-[12px]
                    font-semibold
                    leading-5

                    text-[#405A73]

                    sm:text-[13px]
                    sm:leading-6

                    lg:text-[14px]
                  "
                >
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CHECK ICON
========================================================= */

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 12L10 16L18 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}