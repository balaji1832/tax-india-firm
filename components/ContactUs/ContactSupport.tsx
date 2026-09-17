"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactSupport() {
  return (
    <section className="bg-[#F6F9FD] py-10 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* SUPPORT */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#102F50]
              p-6
              shadow-[0_20px_55px_rgba(16,47,80,0.14)]
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[300px] w-[300px] rounded-full border border-white/[0.07]" />

            <div className="relative z-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#9CC7FF]">
                For Support
              </p>

              <h2 className="mt-3 !text-[28px] !font-semibold !tracking-[-0.035em] !text-white">
                Need professional help?
              </h2>

              <p className="mt-4 max-w-[520px] text-[13px] leading-7 !text-white/62 sm:text-[14px]">
                Our team, including Chartered Accountants, Company Secretaries
                and Corporate Lawyers, is available to assist with your
                business and professional requirements.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="tel:+919962574040"
                  className="block !text-[16px] !font-semibold !text-white"
                >
                  +91 99625 74040
                </a>

                <a
                  href="mailto:support@taxindiafirm.com"
                  className="block text-[14px] !text-[#A8CDFF]"
                >
                  support@taxindiafirm.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* CAREERS */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease,
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#D8E4F2]
              bg-white
              p-6
              shadow-[0_18px_50px_rgba(31,67,112,0.06)]
              sm:p-8
            "
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#246EF1]">
              For Careers
            </p>

            <h2 className="mt-3 !text-[28px] !font-semibold !tracking-[-0.035em] !text-[#17314E]">
              Interested in joining us?
            </h2>

            <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-[#687C92] sm:text-[14px]">
              We welcome enquiries regarding career opportunities at Tax India
              Firm.
            </p>

            <a
              href="mailto:hr@taxindiafirm.com"
              className="mt-6 block !text-[15px] !font-semibold !text-[#17314E]"
            >
              hr@taxindiafirm.com
            </a>

            <a
              href="mailto:hr@taxindiafirm.com?subject=Resume%20Submission%20-%20Tax%20India%20Firm"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#246EF1]
                px-5
                py-3
                text-[12px]
                font-semibold
                !text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#1C5ED4]
              "
            >
              Send Your Resume
              <span className="!text-white">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}