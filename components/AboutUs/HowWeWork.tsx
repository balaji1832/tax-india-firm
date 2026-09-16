"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    no: "01",
    label: "Discover",
    title: "Understand the Requirement",
    text:
      "We begin by understanding what the business or individual actually needs rather than assuming that a standard solution will apply.",
  },
  {
    no: "02",
    label: "Clarify",
    title: "Explain the Step-by-Step Process",
    text:
      "Where appropriate, we clarify the documents, information, process and professional support required.",
  },
  {
    no: "03",
    label: "Support",
    title: "Provide Practical Support",
    text:
      "Our services are designed around actual business requirements, from setup and accounting to compliance and legal documentation.",
  },
  {
    no: "04",
    label: "Evolve",
    title: "Support as Requirements Change",
    text:
      "As a business grows, its needs change. Our broader professional service range supports those evolving requirements over time.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-[170px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#246EF1]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[170px] bottom-[30px] h-[440px] w-[440px] rounded-full bg-[#8DBAFF]/[0.08] blur-[125px]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[860px] text-center">
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
              amount: 0.3,
            }}
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
              How We Work
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.72,
              delay: 0.05,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[820px]

              !text-[38px]
              !font-[700]
              !leading-[1.04]
              !tracking-[-0.048em]
              !text-[#112842]

              sm:!text-[48px]
              lg:!text-[54px]
            "
          >
            Clear steps.
            <span className="block !text-[#246EF1]">
              Connected from start to support.
            </span>
          </motion.h2>

          <motion.p
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
            Our process begins by understanding the requirement, clarifying the
            next steps and providing practical professional support as business
            needs evolve.
          </motion.p>
        </div>

        {/* =====================================================
            DESKTOP ZIG-ZAG FLOW
        ===================================================== */}

        <div className="relative mt-16 hidden xl:block xl:mt-20">
          <div
            className="
              grid
              min-h-[500px]

              grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)_90px_minmax(0,1fr)_90px_minmax(0,1fr)]

              items-start
            "
          >
            {/* STEP 01 */}

            <div className="pt-0">
              <DesktopCard
                step={steps[0]}
                index={0}
              />
            </div>

            {/* CONNECTOR 01 */}

            <CurveConnector
              direction="down"
              index={0}
            />

            {/* STEP 02 */}

            <div className="pt-[82px]">
              <DesktopCard
                step={steps[1]}
                index={1}
              />
            </div>

            {/* CONNECTOR 02 */}

            <CurveConnector
              direction="up"
              index={1}
            />

            {/* STEP 03 */}

            <div className="pt-0">
              <DesktopCard
                step={steps[2]}
                index={2}
              />
            </div>

            {/* CONNECTOR 03 */}

            <CurveConnector
              direction="down"
              index={2}
            />

            {/* STEP 04 */}

            <div className="pt-[82px]">
              <DesktopCard
                step={steps[3]}
                index={3}
              />
            </div>
          </div>

          {/* =================================================
              SMALL FLOW SUMMARY
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.5,
              ease,
            }}
            className="
              mx-auto
              mt-6

              flex
              w-fit
              items-center
              gap-4

              rounded-full

              border
              border-[#D7E4F3]

              bg-white

              px-6
              py-3.5

              shadow-[0_12px_32px_rgba(31,67,112,0.05)]
            "
          >
            <FlowItem active>
              Understand
            </FlowItem>

            <span className="h-1 w-1 rounded-full bg-[#B6CAE3]" />

            <FlowItem>
              Clarify
            </FlowItem>

            <span className="h-1 w-1 rounded-full bg-[#B6CAE3]" />

            <FlowItem>
              Support
            </FlowItem>

            <span className="h-1 w-1 rounded-full bg-[#B6CAE3]" />

            <FlowItem>
              Evolve
            </FlowItem>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE + TABLET + LAPTOP
        ===================================================== */}

        <div className="mt-12 xl:hidden">
          <div className="mx-auto max-w-[920px]">
            {steps.map((step, index) => (
              <div
                key={step.no}
                className="relative"
              >
                <ResponsiveCard
                  step={step}
                  index={index}
                />

                {index < steps.length - 1 && (
                  <MobileConnector
                    index={index}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP CARD
========================================================= */

function DesktopCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 34,
        scale: 0.975,
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
        duration: 0.7,
        delay: index * 0.1,
        ease,
      }}
      className="
        group
        relative

        min-h-[365px]

        overflow-hidden

        rounded-[28px]

        border
        border-[#D3E2F3]

        bg-white

        p-7

        shadow-[0_20px_55px_rgba(31,67,112,0.07)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#A8C9F4]
        hover:shadow-[0_30px_75px_rgba(31,67,112,0.12)]
      "
    >
      {/* BIG NUMBER */}

      <div
        className="
          pointer-events-none
          absolute

          -right-2
          -top-5

          select-none

          !text-[80px]
          !font-[800]
          !leading-none
          !tracking-[-0.08em]

          !text-[#246EF1]/[0.045]
        "
      >
        {step.no}
      </div>

      {/* CORNER CIRCLE */}

      <div className="pointer-events-none absolute -right-[80px] -top-[85px] h-[190px] w-[190px] rounded-full border border-[#246EF1]/[0.05]" />

      {/* CONTENT */}

      <div className="relative z-10 flex min-h-[309px] flex-col">
        <div className="flex items-center justify-between gap-4">
          {/* NUMBER */}

          <div
            className="
              flex
              h-12
              w-12
              shrink-0

              items-center
              justify-center

              rounded-[14px]

              bg-[#EAF3FF]

              text-[10px]
              font-bold

              text-[#246EF1]
            "
          >
            {step.no}
          </div>

          {/* LABEL */}

          <span
            className="
              rounded-full

              bg-[#EEF5FF]

              px-3.5
              py-1.5

              text-[8px]
              font-bold
              uppercase
              tracking-[0.17em]

              text-[#246EF1]
            "
          >
            {step.label}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-7

            !text-[22px]
            !font-semibold
            !leading-[1.18]
            !tracking-[-0.03em]

            !text-[#17314E]

            2xl:!text-[24px]
          "
        >
          {step.title}
        </h3>

        {/* CONTENT */}

        <p
          className="
            mt-4

            text-[13px]
            leading-7

            text-[#687C92]

            2xl:text-[14px]
          "
        >
          {step.text}
        </p>

        {/* BOTTOM */}

        <div className="mt-auto pt-7">
          <div className="flex items-center gap-3">
            <span
              className="
                h-[2px]
                w-8

                rounded-full

                bg-[#BCD5F6]

                transition-all
                duration-500

                group-hover:w-16
                group-hover:bg-[#246EF1]
              "
            />

            <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#98A9BB]">
              Step {step.no}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   DESKTOP CURVE CONNECTOR
========================================================= */

function CurveConnector({
  direction,
  index,
}: {
  direction: "down" | "up";
  index: number;
}) {
  const isDown = direction === "down";

  const path = isDown
    ? "M0 183 C28 183 32 263 90 263"
    : "M0 263 C28 263 34 183 90 183";

  return (
    <div className="relative h-[500px] w-[90px]">
      <svg
        viewBox="0 0 90 500"
        fill="none"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {/* SOFT BACK LINE */}

        <motion.path
          d={path}
          stroke="#DCE9F8"
          strokeWidth="5"
          strokeLinecap="round"
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
            duration: 0.85,
            delay: 0.18 + index * 0.1,
            ease,
          }}
        />

        {/* PRIMARY LINE */}

        <motion.path
          d={path}
          stroke="#9FC7FA"
          strokeWidth="2"
          strokeLinecap="round"
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
            duration: 0.85,
            delay: 0.22 + index * 0.1,
            ease,
          }}
        />

        {/* START DOT */}

        <motion.circle
          cx="3"
          cy={isDown ? 183 : 263}
          r="4"
          fill="#246EF1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: 0.28 + index * 0.1,
          }}
        />

        {/* END DOT */}

        <motion.circle
          cx="87"
          cy={isDown ? 263 : 183}
          r="4"
          fill="#246EF1"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: 0.72 + index * 0.1,
          }}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   RESPONSIVE CARD
========================================================= */

function ResponsiveCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
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
      className="
        group
        relative

        overflow-hidden

        rounded-[24px]

        border
        border-[#D6E4F3]

        bg-white

        p-5

        shadow-[0_15px_42px_rgba(31,67,112,0.06)]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#ABCBF3]
        hover:shadow-[0_22px_52px_rgba(31,67,112,0.10)]

        sm:p-7
      "
    >
      {/* BACKGROUND NUMBER */}

      <div
        className="
          pointer-events-none
          absolute

          -right-2
          -top-5

          !text-[76px]
          !font-[800]
          !leading-none
          !tracking-[-0.08em]

          !text-[#246EF1]/[0.045]

          sm:!text-[90px]
        "
      >
        {step.no}
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          grid
          gap-5

          md:grid-cols-[62px_0.9fr_1.1fr]
          md:items-center
          md:gap-7
        "
      >
        {/* NUMBER */}

        <div
          className="
            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-[13px]

            bg-[#EAF3FF]

            text-[10px]
            font-bold

            text-[#246EF1]
          "
        >
          {step.no}
        </div>

        {/* TITLE */}

        <div>
          <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#246EF1]">
            {step.label}
          </span>

          <h3
            className="
              mt-2

              !text-[20px]
              !font-semibold
              !leading-[1.2]
              !tracking-[-0.027em]

              !text-[#17314E]

              sm:!text-[22px]
            "
          >
            {step.title}
          </h3>
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            text-[13px]
            leading-6
            text-[#687C92]

            sm:text-[14px]
            sm:leading-7
          "
        >
          {step.text}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE / TABLET CONNECTOR
========================================================= */

function MobileConnector({
  index,
}: {
  index: number;
}) {
  return (
    <div
      className="
        relative
        mx-auto

        flex
        h-[68px]
        w-[30px]

        justify-center
      "
    >
      {/* LINE */}

      <motion.div
        initial={{
          height: 0,
        }}
        whileInView={{
          height: 68,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1 + index * 0.04,
          ease,
        }}
        className="
          absolute
          top-0

          w-[2px]

          rounded-full

          bg-gradient-to-b
          from-[#B9D4F5]
          via-[#8AB8F2]
          to-[#B9D4F5]
        "
      />

      {/* CENTER DOT */}

      <motion.span
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.35,
          delay: 0.4 + index * 0.04,
        }}
        className="
          absolute
          top-1/2

          h-2
          w-2

          -translate-y-1/2

          rounded-full

          bg-[#246EF1]

          shadow-[0_0_0_6px_rgba(36,110,241,0.08)]
        "
      />
    </div>
  );
}

/* =========================================================
   FLOW ITEM
========================================================= */

function FlowItem({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full

          ${
            active
              ? "bg-[#246EF1]"
              : "bg-[#B6CAE3]"
          }
        `}
      />

      <span
        className={`
          text-[8px]
          font-bold
          uppercase
          tracking-[0.16em]

          ${
            active
              ? "text-[#246EF1]"
              : "text-[#72869C]"
          }
        `}
      >
        {children}
      </span>
    </div>
  );
}