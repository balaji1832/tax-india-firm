"use client";

import { motion } from "framer-motion";
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function WhyTaxIndiaFirm() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* dotted white pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(215,226,236,0.75) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* subtle fade overlay so dots stay soft */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white" />

      {/* blue glow */}
      <motion.div
        animate={{
          x: [0, 28, 0],
          y: [0, 18, 0],
        }}
        transition={{
          duration: 10,
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
          bg-[#258dcc]/8
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -24, 0],
          y: [0, -16, 0],
        }}
        transition={{
          duration: 12,
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
          bg-[#2f9bd5]/7
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* section label */}
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#318cc3]" />

              <span className="!text-[#2f87bd] text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]">
                Why Tax India Firm
              </span>
            </div>

            {/* heading */}
            <h2
              className="
                max-w-[620px]
                !text-[#14263a]
                text-[28px]
                font-semibold
                leading-[1.18]
                tracking-[-0.035em]

                sm:text-[34px]
                md:text-[39px]
                lg:text-[44px]
              "
            >
              Chennai&apos;s Preferred CA Firm for{" "}
              <span className="!text-[#2d89be]">Startups & SMEs.</span>
            </h2>

            {/* paragraphs */}
            <div className="mt-6 max-w-[650px] space-y-4">
              <p className="!text-[#66788a] text-[13.5px] leading-[1.72] sm:text-[14px] md:text-[14.5px]">
                Since 2013, we have helped over 2,760 businesses in Chennai and
                across Tamil Nadu start right, file on time and stay compliant.
                But what makes us different from every other CA firm is not the
                number, it is how we work.
              </p>

              <p className="!text-[#66788a] text-[13.5px] leading-[1.72] sm:text-[14px] md:text-[14.5px]">
                We explain every step in plain language before we start. You
                know exactly what documents are needed, what the government
                process involves and how long it will take, before you commit
                to anything.
              </p>

              <p className="!text-[#66788a] text-[13.5px] leading-[1.72] sm:text-[14px] md:text-[14.5px]">
                You get a dedicated expert for your case, not a shared inbox,
                not a junior who escalates every query. One expert, one point
                of contact, from start to certificate.
              </p>

              <p className="!text-[#66788a] text-[13.5px] leading-[1.72] sm:text-[14px] md:text-[14.5px]">
                We track your compliance calendar. GST deadlines, ROC annual
                filings, director eKYC, licence renewals, we send you reminders
                and file on time. You never pay a late penalty because of us.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.25,
              }}
              className="mt-7"
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
                  border-[#2d8fc6]
                  bg-white
                  px-5
                  py-[13px]
                  text-[13px]
                  font-semibold
                  text-[#2c85bb]
                  transition-all
                  duration-300

                  hover:border-[#227cab]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(40,133,186,0.16)]

                  sm:w-auto
                "
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#2d8fc6] transition-transform duration-300 group-hover:scale-x-100" />

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
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
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
                from-[#acd3ea]
                via-[#d6e6f0]
                to-transparent

                sm:block
              "
            />

            <div className="space-y-4">
              {differentiators.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      x: 5,
                      y: -3,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#e1e8ee]
                      bg-white/90
                      p-5
                      shadow-[0_10px_30px_rgba(25,50,75,0.045)]
                      backdrop-blur-sm
                      transition-all
                      duration-400

                      hover:border-[#bfd9e8]
                      hover:shadow-[0_18px_42px_rgba(31,96,137,0.10)]

                      sm:p-6
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
                          "linear-gradient(115deg, rgba(233,246,253,0.8), transparent 55%)",
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
                        from-[#2f8fc4]
                        to-[#69b9e4]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      {/* icon */}
                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.08,
                        }}
                        className="
                          flex
                          h-[50px]
                          w-[50px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[13px]
                          border
                          border-[#d8e8f3]
                          bg-[#edf5ff]
                          shadow-[0_8px_20px_rgba(48,139,193,0.08)]
                          transition-colors
                          duration-300

                          group-hover:border-[#b9d9ec]
                          group-hover:bg-[#e4f2fb]
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.9}
                          className="text-[#2f8fc4]"
                        />
                      </motion.div>

                      <div>
                        <h3 className="!text-[#223347] text-[16px] font-semibold tracking-[-0.02em] sm:text-[17px]">
                          {item.title}
                        </h3>

                        <p className="mt-2 !text-[#75889a] text-[13px] leading-[1.65] sm:text-[13.5px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* soft background behind cards */}
            <div className="pointer-events-none absolute -right-12 top-1/2 -z-10 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#318dc5]/6 blur-[90px]" />
          </div>
        </div>
      </div>
    </section>
  );
}