"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] pb-14 pt-[110px] sm:pb-16 sm:pt-[120px] lg:pb-16 lg:pt-[130px]">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-[180px] top-[80px] h-[400px] w-[400px] rounded-full bg-[#246EF1]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[180px] top-[30px] h-[440px] w-[440px] rounded-full bg-[#8DBAFF]/[0.08] blur-[130px]" />

      {/* SUBTLE GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(36,70,105,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(36,70,105,0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 xl:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative z-10">
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 38 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12,
                  ease,
                }}
                className="h-[2px] rounded-full bg-[#246EF1]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#246EF1] sm:text-[10px]">
                Contact Tax India Firm
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease,
              }}
              className="
                mt-5
                max-w-[720px]

                !text-[38px]
                !font-[700]
                !leading-[1.02]
                !tracking-[-0.05em]
                !text-[#10263F]

                sm:!text-[46px]
                md:!text-[50px]
                lg:!text-[52px]
                xl:!text-[56px]
              "
            >
              Contact us for a
              <span className="block !text-[#246EF1]">
                free business consultation.
              </span>
            </motion.h1>

            {/* ONE-LINER */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease,
              }}
              className="mt-5 max-w-[620px] text-[15px] font-medium leading-7 text-[#455F77] sm:text-[16px]"
            >
              Talk to our experts, free consultation today.
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.18,
                ease,
              }}
              className="mt-3 max-w-[640px] text-[13px] leading-7 text-[#718398] sm:text-[14px] sm:leading-7"
            >
              Have a question about GST, income tax, company registration,
              accounting, compliance or another business requirement? Call,
              WhatsApp, email or visit our Chennai office.
            </motion.p>

            {/* CTA BUTTONS */}
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
                duration: 0.65,
                delay: 0.24,
                ease,
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href="tel:+919962574040"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#246EF1]
                  px-6
                  text-[13px]
                  font-semibold
                  !text-white
                  shadow-[0_12px_28px_rgba(36,110,241,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#1D5FD8]
                  hover:shadow-[0_16px_36px_rgba(36,110,241,0.27)]
                "
              >
                <PhoneIcon />

                <span className="!text-white">Call our team</span>

                <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://wa.me/919962115050"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#D3E0ED]
                  bg-white
                  px-6
                  text-[13px]
                  font-semibold
                  !text-[#17314E]
                  shadow-[0_8px_24px_rgba(30,61,96,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#AAC9F1]
                  hover:shadow-[0_14px_32px_rgba(30,61,96,0.09)]
                "
              >
                <WhatsappIcon />

                <span className="!text-[#17314E]">WhatsApp us</span>

                <span className="!text-[#246EF1] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* BOTTOM INFO */}
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
                duration: 0.65,
                delay: 0.3,
                ease,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-4
                border-t
                border-[#DCE5EF]
                pt-5
                sm:flex-row
                sm:items-center
                sm:gap-7
              "
            >
              {/* EMAIL */}
              <a
                href="mailto:info@taxindiafirm.com"
                className="group flex items-center gap-3"
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
                    bg-[#EAF3FF]
                    text-[#246EF1]
                    transition-all
                    duration-300
                    group-hover:bg-[#246EF1]
                    group-hover:text-white
                  "
                >
                  <MailIcon />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#96A7B8]">
                    Email Us
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#425B72]">
                    info@taxindiafirm.com
                  </p>
                </div>
              </a>

              <span className="hidden h-8 w-px bg-[#D7E2ED] sm:block" />

              {/* OFFICE */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF3FF] text-[#246EF1]">
                  <LocationIcon />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#96A7B8]">
                    Chennai Office
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#425B72]">
                    Royapettah, Chennai
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
            className="relative mx-auto w-full max-w-[700px] lg:max-w-none"
          >
            {/* DARK OFFSET BACKGROUND */}
            <motion.div
              initial={{
                opacity: 0,
                x: 18,
                y: 18,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-4
                hidden
                h-[88%]
                w-[88%]
                rounded-[30px]
                bg-[#102F50]
                lg:block
              "
            />

            {/* SMALL BLUE ACCENT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.38,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                -right-3
                -top-3
                z-20
                hidden
                h-[62px]
                w-[62px]
                rounded-[18px]
                bg-[#246EF1]
                shadow-[0_14px_34px_rgba(36,110,241,0.22)]
                lg:block
              "
            />

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative
                z-10
                h-[340px]
                overflow-hidden
                rounded-[24px]
                border-[5px]
                border-white
                bg-[#DCE7F2]
                shadow-[0_24px_65px_rgba(27,59,96,0.15)]

                sm:h-[420px]
                sm:rounded-[28px]

                md:h-[460px]

                lg:h-[500px]
                lg:rounded-[30px]

                xl:h-[520px]
              "
            >
              <Image
                src="/images/contact-hero.png"
                alt="Contact Tax India Firm Chennai office consultation"
                width={1000}
                height={1200}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                  object-center

                  transition-transform
                  duration-[1400ms]

                  hover:scale-[1.025]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102F50]/10 via-transparent to-transparent" />
            </div>

            {/* SMALL BOTTOM ACCENT */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 80,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease,
              }}
              className="absolute -bottom-6 left-8 hidden h-[3px] rounded-full bg-[#246EF1] lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ICONS
========================================================= */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 4H5.5C4.67 4 4 4.67 4 5.5C4 13.51 10.49 20 18.5 20C19.33 20 20 19.33 20 18.5V17L16 15L14.5 17C11.2 15.6 8.4 12.8 7 9.5L9 8L7 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 11.5A8 8 0 0 1 8.4 18.65L4 20L5.35 15.6A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 8.5C9.6 11.1 11.4 12.9 14 13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M5 7L12 12L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
        d="M19 10C19 15 12 21 12 21C12 21 5 15 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}