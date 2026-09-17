"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type EnquiryType = "phone" | "whatsapp" | "mail";

const enquiries: {
  label: string;
  value: string;
  description: string;
  href: string;
  type: EnquiryType;
}[] = [
  {
    label: "Call Us",
    value: "+91 99625 74040",
    description: "Speak directly with our team.",
    href: "tel:+919962574040",
    type: "phone",
  },
  {
    label: "WhatsApp Us",
    value: "+91 99621 15050",
    description: "Send us your requirement quickly.",
    href: "https://wa.me/919962115050",
    type: "whatsapp",
  },
  {
    label: "Email Us",
    value: "info@taxindiafirm.com",
    description: "Share your enquiry with our team.",
    href: "mailto:info@taxindiafirm.com",
    type: "mail",
  },
];

export default function ContactEnquiries() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-12 sm:py-10 lg:py-10">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-[180px] top-[20px] h-[380px] w-[380px] rounded-full bg-[#246EF1]/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[-80px] h-[400px] w-[400px] rounded-full bg-[#8EBEFF]/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[1180px] text-center">
          <motion.div
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
              duration: 0.55,
              ease,
            }}
            className="flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#246EF1] sm:text-[10px]">
              For Enquiries
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />
          </motion.div>

          {/* TIGHTER HEADING */}

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
            }}
            transition={{
              duration: 0.68,
              delay: 0.05,
              ease,
            }}
            className="
              mx-auto
              mt-3

              !text-[30px]
              !font-[700]
              !leading-[1.08]
              !tracking-[-0.04em]
              !text-[#112842]

              sm:!text-[38px]
              md:!text-[42px]
              lg:!text-[46px]

              lg:whitespace-nowrap py-3
            "
          >
            Need professional assistance?{" "}
            <span className="!text-[#246EF1]">
              Reach out to our team.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
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
              mx-auto
              mt-4
              max-w-[680px]

              text-[13px]
              leading-6
              text-[#6B7E92]

              sm:text-[14px]
              sm:leading-7
            "
          >
            Choose the easiest way to connect with Tax India Firm and our team
            will assist you with your business requirement.
          </motion.p>
        </div>

        {/* =====================================================
            CONTACT OPTIONS
        ===================================================== */}

        <div className="mt-9 grid gap-4 sm:mt-10 md:grid-cols-3">
          {enquiries.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.58,
                delay: 0.08 + index * 0.07,
                ease,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative

                overflow-hidden

                rounded-[22px]

                border
                border-[#D9E4F0]

                bg-white

                px-5
                py-5

                shadow-[0_14px_40px_rgba(31,67,112,0.05)]

                transition-all
                duration-300

                hover:border-[#B2CDEE]
                hover:shadow-[0_20px_50px_rgba(31,67,112,0.10)]

                sm:px-6
                sm:py-6

                lg:rounded-[24px]
              "
            >
              {/* TOP BLUE LINE */}

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

              {/* DECORATION */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-[75px]
                  -top-[80px]

                  h-[180px]
                  w-[180px]

                  rounded-full

                  border
                  border-[#246EF1]/[0.06]

                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
              />

              <div className="relative z-10">
                {/* TOP */}

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-[13px]

                      bg-[#EAF3FF]

                      text-[#246EF1]

                      transition-all
                      duration-300

                      group-hover:bg-[#246EF1]
                      group-hover:text-white

                      sm:h-12
                      sm:w-12
                    "
                  >
                    <EnquiryIcon type={item.type} />
                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#D9E4F0]

                      bg-[#FAFCFF]

                      text-[#246EF1]

                      transition-all
                      duration-300

                      group-hover:border-[#246EF1]
                      group-hover:bg-[#246EF1]
                      group-hover:text-white
                    "
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-[2px]"
                    >
                      <path
                        d="M5 12H19M14 7L19 12L14 17"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* CONTENT */}

                <p
                  className="
                    mt-5

                    text-[8px] pt-3
                    font-bold
                    uppercase
                    tracking-[0.17em]

                    text-[#91A4B7]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1.5

                    break-words

                    !text-[17px]
                    !font-[650]
                    !leading-6
                    !tracking-[-0.02em]

                    !text-[#17314E]

                    sm:!text-[18px]
                    lg:!text-[19px]
                  "
                >
                  {item.value}
                </p>

                <p className="mt-2 text-[11px] leading-5 text-[#8294A7] sm:text-[12px]">
                  {item.description}
                </p>

                {/* BOTTOM */}

                <div
                  className="
                    mt-5

                    flex
                    items-center
                    gap-2

                    border-t
                    border-[#E5EBF2]

                    pt-4
                  "
                >
                  <span className="text-[10px] font-semibold text-[#246EF1]">
                    Connect now
                  </span>

                  <span
                    className="
                      text-[#246EF1]

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
            delay: 0.18,
            ease,
          }}
          className="
            mx-auto
            mt-6

            flex
            max-w-[760px]

            flex-col
            items-center
            justify-center

            gap-2

            text-center

            sm:flex-row
            sm:gap-3
          "
        >
          <div
            className="
              flex
              h-6
              w-6
              shrink-0

              items-center
              justify-center

              rounded-full

              bg-[#EAF3FF]

              text-[#246EF1]
            "
          >
            <CheckIcon />
          </div>

          <p className="text-[11px] leading-5 text-[#74879A] sm:text-[12px]">
            We&apos;ll get back to you regarding your enquiry. Have a
            requirement? WhatsApp us today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   ICON
========================================================= */

function EnquiryIcon({
  type,
}: {
  type: EnquiryType;
}) {
  if (type === "phone") {
    return (
      <svg
        width="19"
        height="19"
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

  if (type === "whatsapp") {
    return (
      <svg
        width="19"
        height="19"
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

  return (
    <svg
      width="19"
      height="19"
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

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 12L10 16L18 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}