"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Tell Us What Your Business Needs",
    description:
      "Pick a service or speak directly with a Chartered Accountant. We assess your requirement and explain the exact process, documents needed and timeline, clearly, with no jargon.",
  },
  {
    number: "02",
    title: "We Handle All Documents & Government Filings",
    description:
      "From MCA portals to GST dashboard to IP India, our team submits everything on your behalf. You share documents once; we do the rest, end to end.",
  },
  {
    number: "03",
    title: "Receive Your Certificate. Stay Compliant Forever.",
    description:
      "Get your incorporation certificate, GSTIN, FSSAI license or any other outcome directly. We also track your renewal and compliance deadlines so you never miss a date.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HowItWorks() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#05172c]
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* TOP GLOW */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[180px]
          -top-[160px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#078cf0]/15
          blur-[130px]
        "
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -right-[140px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#00a8ff]/10
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-[800px] text-center sm:mb-14 lg:mb-20"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#239ee9]" />

            <span
              className="
                !text-[#35adf5]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.24em]
                sm:text-xs
              "
            >
              Simple Process
            </span>

            <span className="h-px w-7 bg-[#239ee9]" />
          </div>

          <h2
            className="
              !text-white
              text-[30px]
              font-semibold
              leading-[1.15]
              tracking-[-0.035em]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[52px]
            "
          >
            Start Your Business or File Your Taxes in{" "}
            <span className="!text-[#2aaaf4]">3 Steps.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[720px]
              !text-[#b1c1d4]
              text-[14px]
              leading-7
              sm:text-[15px]
              md:text-[16px]
            "
          >
            No government portals, no paperwork confusion. Our CA team handles
            everything from document collection to final submission.
          </p>
        </motion.div>

        {/* CARDS WRAPPER */}
        <div className="relative">
          {/* DESKTOP CONNECTOR */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[15%]
              right-[15%]
              top-[63px]
              hidden
              h-px
              origin-left
              bg-gradient-to-r
              from-transparent
              via-[#1d9ce8]/50
              to-transparent
              md:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:gap-6
              md:grid-cols-3
              lg:gap-7
            "
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 22,
                }}
                className="group relative"
              >
                {/* CARD OUTER GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    rounded-[22px]
                    bg-gradient-to-br
                    from-[#1fa7f5]/0
                    via-transparent
                    to-[#1fa7f5]/0
                    opacity-0
                    blur-[2px]
                    transition-all
                    duration-500
                    group-hover:from-[#1fa7f5]/45
                    group-hover:to-[#1fa7f5]/10
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    flex
                    min-h-[330px]
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[21px]
                    border
                    border-white/[0.08]
                    bg-[#0a2039]/90
                    p-6
                    shadow-[0_18px_50px_rgba(0,0,0,0.16)]
                    backdrop-blur-md
                    transition-all
                    duration-500

                    group-hover:border-[#239ee9]/45
                    group-hover:bg-[#0b2644]
                    group-hover:shadow-[0_25px_70px_rgba(0,120,210,0.14)]

                    sm:p-6
                    lg:min-h-[390px]
                    lg:p-8
                  "
                >
                  {/* LIGHT SWEEP */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-[60%]
                      top-0
                      h-full
                      w-[45%]
                      rotate-[12deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.05]
                      to-transparent
                      transition-all
                      duration-700
                      ease-out
                      group-hover:left-[130%]
                    "
                  />

                  {/* INNER GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-[210px]
                      w-[210px]
                      rounded-full
                      bg-[#159cea]/0
                      blur-[80px]
                      transition-all
                      duration-500
                      group-hover:bg-[#159cea]/18
                    "
                  />

                  {/* LARGE GHOST NUMBER */}
                  <motion.span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1
                      select-none
                      !text-white/[0.035]
                      text-[96px]
                      font-bold
                      leading-none
                      tracking-[-0.09em]
                      transition-colors
                      duration-500
                      group-hover:!text-[#269fe5]/[0.09]

                      sm:text-[105px]
                      lg:right-4
                      lg:text-[130px]
                    "
                  >
                    {step.number}
                  </motion.span>

                  {/* TOP */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.08 }}
                      className="
                        flex
                        h-[48px]
                        w-[48px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[#259ee7]/30
                        bg-[#092b4b]
                        shadow-[0_10px_30px_rgba(0,125,210,0.12)]
                      "
                    >
                      <span className="!text-[#36b0f7] text-[14px] font-semibold">
                        {step.number}
                      </span>
                    </motion.div>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        transition-all
                        duration-500
                        group-hover:border-[#269fe5]/40
                        group-hover:bg-[#269fe5]/10
                      "
                    >
                      <Check
                        size={15}
                        strokeWidth={2}
                        className="text-[#7392aa] transition-colors duration-500 group-hover:text-[#33adf3]"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3
                      className="
                        !text-white
                        text-[19px]
                        font-semibold
                        leading-[1.4]
                        tracking-[-0.025em]

                        sm:text-[18px]
                        lg:text-[21px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        !text-[#a7b8ca]
                        text-[14px]
                        leading-[1.75]

                        lg:text-[15px]
                      "
                    >
                      {step.description}
                    </p>

                    {/* Bottom interactive line */}
                    <div className="mt-auto pt-7">
                      <div className="h-px w-full overflow-hidden bg-white/[0.06]">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.4 + index * 0.15,
                          }}
                          className="h-full bg-gradient-to-r from-[#199ee8] via-[#43b8f7] to-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM BLUE BORDER */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#2faaf1]
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:w-[85%]
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex justify-center sm:mt-12 lg:mt-16"
        >
          <Link
            href="/contact-us"
            className="
              group
              relative
              flex
              w-full
              max-w-[430px]
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-[12px]
              border
              border-[#259fe7]/70
              bg-[#071f38]
              px-5
              py-[15px]
              shadow-[0_12px_35px_rgba(0,120,210,0.08)]
              transition-all
              duration-300

              hover:border-[#38b5ff]
              hover:shadow-[0_18px_50px_rgba(0,140,230,0.18)]

              sm:w-auto
              sm:min-w-[390px]
            "
          >
            <span
              className="
                absolute
                inset-0
                origin-left
                scale-x-0
                bg-gradient-to-r
                from-[#158fd3]
                to-[#21a5ed]
                transition-transform
                duration-300
                ease-out
                group-hover:scale-x-100
              "
            />

            <span className="relative z-10 !text-[#46b9f7] text-[13px] font-medium transition-colors duration-300 group-hover:!text-white sm:text-[14px]">
              Speak to a Chartered Accountant for Free
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="
                relative
                z-10
                text-[#46b9f7]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-1
                group-hover:text-white
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}