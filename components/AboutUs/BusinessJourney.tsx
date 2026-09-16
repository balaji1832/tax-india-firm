"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    step: "01",
    label: "Start",
    title: "Starting a Business",
    text:
      "Business structure, registration, licensing and initial compliance are often the immediate priorities.",
  },
  {
    step: "02",
    label: "Grow",
    title: "Growing a Business",
    text:
      "Accounting, taxation, GST, contracts, employees, intellectual property and ongoing compliance become increasingly important.",
  },
  {
    step: "03",
    label: "Scale",
    title: "Established Businesses",
    text:
      "Corporate documentation, agreements, tax planning, legal requirements and recurring compliance may need deeper support.",
  },
];

export default function BusinessJourney() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246EF1]">
              Supporting every stage
            </span>

            <h2 className="mt-5 max-w-[560px] !text-[39px] !font-[700] !leading-[1.05] !tracking-[-0.048em] !text-[#112842] sm:!text-[50px]">
              Different stage.
              <span className="block !text-[#246EF1]">
                Different requirements.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-[#64778E] sm:text-[15px] sm:leading-8">
              Our services are structured around where a business is in its
              journey rather than treating every business as though it has the
              same needs.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-6 left-[25px] top-6 w-px bg-[#C8DCF5] sm:left-[33px]" />

            <div className="space-y-5">
              {stages.map((stage, index) => (
                <motion.article
                  key={stage.step}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.62, delay: index * 0.08, ease }}
                  className="relative grid grid-cols-[52px_1fr] gap-4 sm:grid-cols-[66px_1fr] sm:gap-6"
                >
                  <div className="relative z-10 mt-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[6px] border-white bg-[#246EF1] text-[11px] font-bold text-white shadow-[0_8px_22px_rgba(36,110,241,0.22)] sm:h-[66px] sm:w-[66px] sm:text-[12px]">
                    {stage.step}
                  </div>

                  <div className="group rounded-[28px] border border-[#D5E3F4] bg-[#FBFDFF] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#A9CDF8] hover:bg-white hover:shadow-[0_20px_55px_rgba(35,75,130,0.08)] sm:p-7">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#246EF1]">
                      {stage.label}
                    </span>

                    <h3 className="mt-3 !text-[22px] !font-semibold !tracking-[-0.025em] !text-[#17314E] sm:!text-[24px]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#687C92]">
                      {stage.text}
                    </p>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-[#C9DCF4] to-transparent" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
