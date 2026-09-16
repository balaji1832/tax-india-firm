"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type IconType =
  | "services"
  | "location"
  | "business"
  | "expertise"
  | "growth";

type Reason = {
  eyebrow: string;
  title: string;
  text: string;
  icon: IconType;
};

const reasons: Reason[] = [
  {
    eyebrow: "Connected Services",
    title: "Multiple Professional Services",
    text:
      "Taxation, accounting, compliance, legal and business services through one professional services firm.",
    icon: "services",
  },
  {
    eyebrow: "Local Understanding",
    title: "Chennai-Based Support",
    text:
      "Based in Chennai and supporting businesses and entrepreneurs in Chennai and beyond.",
    icon: "location",
  },
  {
    eyebrow: "Practical Approach",
    title: "Business-Focused Services",
    text:
      "Services built around practical requirements businesses face while starting, operating and growing.",
    icon: "business",
  },
  {
    eyebrow: "Combined Expertise",
    title: "Multi-Disciplinary Expertise",
    text:
      "Professional support across Chartered Accountancy, Company Secretarial services, corporate legal services and accounting.",
    icon: "expertise",
  },
  {
    eyebrow: "Long-Term Support",
    title: "Support Beyond Business Formation",
    text:
      "Professional support across the business lifecycle, from initial setup to contracts, taxation, compliance and ongoing requirements.",
    icon: "growth",
  },
];

export default function WhyChooseAbout() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-[180px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#246EF1]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[170px] bottom-[70px] h-[420px] w-[420px] rounded-full bg-[#9BC5FF]/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 34 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.15,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246EF1]">
              Why Businesses Choose Us
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 34 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.15,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.72,
              delay: 0.05,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[850px]

              !text-[38px]
              !font-[700]
              !leading-[1.04]
              !tracking-[-0.048em]
              !text-[#112842]

              sm:!text-[48px]
              lg:!text-[54px]
            "
          >
            Professional support built to
            <span className="block !text-[#246EF1]">
              simplify business.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[710px]

              text-[14px]
              leading-7
              text-[#64778E]

              sm:text-[15px]
              sm:leading-8
            "
          >
            Professional expertise, practical support and connected services
            designed around the real requirements of businesses.
          </motion.p>
        </div>

        {/* =====================================================
            DESKTOP ACCORDION
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 34,
            scale: 0.99,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          onMouseLeave={() => setActiveIndex(0)}
          className="
            mt-14
            hidden
            h-[560px]

            overflow-hidden

            rounded-[34px]

            border
            border-[#D5E2F1]

            bg-white

            shadow-[0_30px_90px_rgba(24,57,93,0.10)]

            lg:flex
          "
        >
          {reasons.map((reason, index) => {
            const active = activeIndex === index;

            return (
              <motion.button
                key={reason.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                animate={{
                  flexGrow: active ? 4.6 : 1,
                }}
                transition={{
                  flexGrow: {
                    duration: 0.68,
                    ease,
                  },
                }}
                style={{
                  flexBasis: 0,
                }}
                className={`
                  group
                  relative

                  min-w-0

                  overflow-hidden

                  border-r
                  border-[#DCE5EF]

                  text-left

                  outline-none

                  last:border-r-0

                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-[#246EF1]

                  ${
                    active
                      ? "bg-[#123555]"
                      : "bg-white hover:bg-[#F8FBFF]"
                  }
                `}
              >
                {/* ACTIVE BLUE EDGE */}

                <motion.div
                  animate={{
                    scaleY: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0

                    h-full
                    w-[3px]

                    origin-center

                    bg-[#246EF1]
                  "
                />

                {/* BACKGROUND GRAPHIC */}

                <motion.div
                  animate={{
                    opacity: active ? 0.055 : 0.035,
                    scale: active ? 1 : 0.92,
                    x: active ? 0 : 12,
                  }}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-[80px]
                    -top-[90px]

                    h-[290px]
                    w-[290px]

                    rounded-full

                    border
                    border-current
                  "
                  style={{
                    color: active
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(36,110,241,0.20)",
                  }}
                />

                {/* =================================================
                    INACTIVE PANEL
                ================================================= */}

                <motion.div
                  animate={{
                    opacity: active ? 0 : 1,
                  }}
                  transition={{
                    duration: active ? 0.22 : 0.45,
                    delay: active ? 0 : 0.18,
                  }}
                  className={`
                    absolute
                    inset-0

                    flex
                    flex-col
                    items-center

                    px-4
                    py-8

                    ${
                      active
                        ? "pointer-events-none"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0

                      items-center
                      justify-center

                      rounded-[17px]

                      bg-[#EAF3FF]

                      text-[#246EF1]

                      shadow-[0_8px_20px_rgba(36,110,241,0.06)]
                    "
                  >
                    <ReasonIcon
                      type={reason.icon}
                      size={21}
                    />
                  </motion.div>

                  {/* VERTICAL TITLE */}

                  <div className="flex flex-1 items-center justify-center">
                    <h3
                      className="
                        rotate-180
                        [writing-mode:vertical-rl]

                        whitespace-nowrap

                        !text-[15px]
                        !font-semibold
                        !tracking-[-0.01em]
                        !text-[#29455F]

                        xl:!text-[17px]
                      "
                    >
                      {reason.title}
                    </h3>
                  </div>

                  {/* SMALL DOT */}

                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#D5E2F2]

                      bg-white

                      text-[#246EF1]

                      transition-all
                      duration-300

                      group-hover:border-[#246EF1]
                      group-hover:bg-[#246EF1]
                      group-hover:text-white
                    "
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M12 8L16 12L12 16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* =================================================
                    ACTIVE CONTENT
                ================================================= */}

                <motion.div
                  animate={{
                    opacity: active ? 1 : 0,
                    x: active ? 0 : 28,
                    scale: active ? 1 : 0.98,
                  }}
                  transition={{
                    duration: 0.48,
                    delay: active ? 0.2 : 0,
                    ease,
                  }}
                  className={`
                    relative
                    z-10

                    flex
                    h-full
                    min-w-[500px]

                    flex-col

                    p-8

                    xl:p-10

                    ${
                      active
                        ? ""
                        : "pointer-events-none"
                    }
                  `}
                >
                  {/* TOP */}

                  <div className="flex items-center justify-between gap-5">
                    <motion.div
                      animate={{
                        scale: active ? 1 : 0.8,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: active ? 0.2 : 0,
                        ease,
                      }}
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0

                        items-center
                        justify-center

                        rounded-[17px]

                        border
                        border-white/10

                        bg-white/[0.08]

                        text-[#90BDFF]

                        backdrop-blur-xl
                      "
                    >
                      <ReasonIcon
                        type={reason.icon}
                        size={22}
                      />
                    </motion.div>

                    <motion.span
                      animate={{
                        opacity: active ? 1 : 0,
                        y: active ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.42,
                        delay: active ? 0.28 : 0,
                        ease,
                      }}
                      className="
                        rounded-full

                        border
                        border-white/10

                        bg-white/[0.055]

                        px-4
                        py-2

                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.18em]

                        !text-[#9CC7FF]

                        backdrop-blur-xl
                      "
                    >
                      {reason.eyebrow}
                    </motion.span>
                  </div>

                  {/* CENTER */}

                  <div className="my-auto max-w-[650px]">
                    <motion.p
                      animate={{
                        opacity: active ? 1 : 0,
                        y: active ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: active ? 0.22 : 0,
                        ease,
                      }}
                      className="text-[8px] font-bold uppercase tracking-[0.19em] !text-[#76ADFF]"
                    >
                      Why Tax India Firm
                    </motion.p>

                    <motion.h3
                      animate={{
                        opacity: active ? 1 : 0,
                        y: active ? 0 : 18,
                      }}
                      transition={{
                        duration: 0.48,
                        delay: active ? 0.27 : 0,
                        ease,
                      }}
                      className="
                        mt-3
                        max-w-[620px]

                        !text-[32px]
                        !font-[700]
                        !leading-[1.08]
                        !tracking-[-0.04em]
                        !text-white

                        xl:!text-[40px]
                      "
                    >
                      {reason.title}
                    </motion.h3>

                    <motion.p
                      animate={{
                        opacity: active ? 1 : 0,
                        y: active ? 0 : 16,
                      }}
                      transition={{
                        duration: 0.48,
                        delay: active ? 0.34 : 0,
                        ease,
                      }}
                      className="
                        mt-5
                        max-w-[610px]

                        text-[14px]
                        leading-7

                        !text-white/66

                        xl:text-[15px]
                        xl:leading-8
                      "
                    >
                      {reason.text}
                    </motion.p>
                  </div>

                  {/* BOTTOM */}

                  <motion.div
                    animate={{
                      opacity: active ? 1 : 0,
                      y: active ? 0 : 10,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: active ? 0.38 : 0,
                      ease,
                    }}
                    className="
                      border-t
                      border-white/10

                      pt-6
                    "
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{
                          width: active ? 48 : 0,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: active ? 0.4 : 0,
                          ease,
                        }}
                        className="h-[2px] rounded-full bg-[#6EA8FF]"
                      />

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] !text-white/45">
                        Connected professional support
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div className="mt-12 grid gap-4 lg:hidden sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{
                opacity: 0,
                y: 26,
                scale: 0.985,
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
                duration: 0.62,
                delay: index * 0.06,
                ease,
              }}
              className={`
                group
                relative

                overflow-hidden

                rounded-[24px]

                border

                p-5

                shadow-[0_15px_42px_rgba(31,67,112,0.055)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_22px_52px_rgba(31,67,112,0.09)]

                sm:p-6

                ${
                  index === 0
                    ? "border-[#123555] bg-[#123555] sm:col-span-2"
                    : "border-[#D8E4F2] bg-white hover:border-[#A9CAF4]"
                }
              `}
            >
              {/* decorative circle */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-[70px]
                  -top-[75px]

                  h-[180px]
                  w-[180px]

                  rounded-full
                  border

                  ${
                    index === 0
                      ? "border-white/[0.06]"
                      : "border-[#246EF1]/[0.05]"
                  }
                `}
              />

              <div className="relative z-10">
                {/* TOP */}

                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-[15px]

                      ${
                        index === 0
                          ? "bg-white/[0.09] text-[#9CC7FF]"
                          : "bg-[#EAF3FF] text-[#246EF1]"
                      }
                    `}
                  >
                    <ReasonIcon
                      type={reason.icon}
                      size={20}
                    />
                  </div>

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1.5

                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      ${
                        index === 0
                          ? "bg-white/[0.08] !text-[#B9D6FF]"
                          : "bg-[#EEF5FF] text-[#246EF1]"
                      }
                    `}
                  >
                    {reason.eyebrow}
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className={`
                    mt-6

                    !text-[20px]
                    !font-semibold
                    !leading-[1.2]
                    !tracking-[-0.026em]

                    sm:!text-[22px]

                    ${
                      index === 0
                        ? "!text-white"
                        : "!text-[#17314E]"
                    }
                  `}
                >
                  {reason.title}
                </h3>

                {/* TEXT */}

                <p
                  className={`
                    mt-3

                    text-[13px]
                    leading-6

                    sm:text-[14px]
                    sm:leading-7

                    ${
                      index === 0
                        ? "!text-white/68"
                        : "text-[#687C92]"
                    }
                  `}
                >
                  {reason.text}
                </p>

                {/* BOTTOM */}

                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={`
                      h-[2px]
                      w-8
                      rounded-full

                      transition-all
                      duration-500

                      group-hover:w-14

                      ${
                        index === 0
                          ? "bg-[#78AEFF]"
                          : "bg-[#BCD5F5] group-hover:bg-[#246EF1]"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.15em]

                      ${
                        index === 0
                          ? "!text-white/40"
                          : "text-[#99AABC]"
                      }
                    `}
                  >
                    Why choose us
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SVG ICONS
========================================================= */

function ReasonIcon({
  type,
  size = 20,
}: {
  type: IconType;
  size?: number;
}) {
  if (type === "services") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="2.3"
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
          d="M6.4 7.3L10.3 10.6M17.6 7.3L13.7 10.6M6.4 16.7L10.3 13.4M17.6 16.7L13.7 13.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19 10C19 15 12 21 12 21C12 21 5 15 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <circle
          cx="12"
          cy="10"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "business") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="7"
          width="16"
          height="12"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <path
          d="M9 7V5.8C9 4.8 9.8 4 10.8 4H13.2C14.2 4 15 4.8 15 5.8V7"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <path
          d="M4 11.5C8.8 14 15.2 14 20 11.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <path
          d="M12 11.8V14.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "expertise") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L20 7L12 11L4 7L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <path
          d="M5 11L12 15L19 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <path
          d="M5 15L12 19L19 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 18L9 14L12 16L19 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 8H19V12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 5V19H19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}