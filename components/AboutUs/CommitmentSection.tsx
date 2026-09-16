"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#246EF1]/5 blur-[80px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#246EF1]">
              Our commitment
            </span>

            <div className="mt-8 space-y-1">
              {["Accessible.", "Understandable.", "Practical."].map(
                (word, index) => (
                  <motion.p
                    key={word}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease,
                    }}
                    className={`!text-[46px] !font-[700] !leading-[0.98] !tracking-[-0.055em] sm:!text-[62px] lg:!text-[68px] ${
                      index === 2 ? "!text-[#246EF1]" : "!text-[#112842]"
                    }`}
                  >
                    {word}
                  </motion.p>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="border-t border-[#CFDEF0] pt-8 lg:mt-6"
          >
            <p className="!text-[21px] !font-medium !leading-9 !tracking-[-0.02em] !text-[#29435F]">
              We believe professional services should be accessible,
              understandable and practical.
            </p>

            <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#64778E] sm:text-[15px] sm:leading-8">
              <p>
                Business owners should be able to explain their requirement,
                understand what needs to be done and receive professional
                support appropriate to the matter.
              </p>
              <p>
                Our focus is not simply on completing a transaction, but on
                helping businesses address professional requirements with
                greater clarity.
              </p>
            </div>

            <div className="mt-8 rounded-[26px] border border-[#D7E5F6] bg-[#F5F9FF] p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#246EF1] text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-[14px] leading-7 text-[#5C7188]">
                  Whether you are starting a business, managing an established
                  company or dealing with a specific taxation, accounting,
                  compliance or legal requirement, Tax India Firm is here to
                  help identify the appropriate next step.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
