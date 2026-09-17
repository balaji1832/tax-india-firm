"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactCTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease }}
        className="
          relative
          mx-auto
          max-w-[1320px]
          overflow-hidden
          rounded-[30px]
          bg-[#246EF1]
          px-6
          py-12
          text-center
          shadow-[0_25px_70px_rgba(36,110,241,0.22)]
          sm:px-10
          sm:py-14
          lg:rounded-[36px]
          lg:px-14
          lg:py-16
        "
      >
        <div className="pointer-events-none absolute -left-[120px] -top-[150px] h-[350px] w-[350px] rounded-full border border-white/[0.10]" />

        <div className="pointer-events-none absolute -right-[100px] bottom-[-160px] h-[360px] w-[360px] rounded-full border border-white/[0.10]" />

        <div className="relative z-10 mx-auto max-w-[850px]">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] !text-white/65">
            Let&apos;s Talk About Your Requirement
          </p>

          <h2
            className="
              mt-5
              !text-[34px]
              !font-[700]
              !leading-[1.05]
              !tracking-[-0.045em]
              !text-white
              sm:!text-[44px]
              lg:!text-[50px]
            "
          >
            Starting, operating or growing a business?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 !text-white/75 sm:text-[15px] sm:leading-8">
            Whether you need support with taxation, accounting, compliance,
            registration or a specific legal requirement, our team is here to
            help.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919962574040"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                text-[13px]
                font-semibold
                !text-[#17314E]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Talk to Tax India Firm Today
              <span className="text-[#246EF1]">→</span>
            </a>

            <a
              href="https://wa.me/919962115050"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/[0.08]
                px-6
                text-[13px]
                font-semibold
                !text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.14]
              "
            >
              WhatsApp Us
              <span className="!text-white">↗</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}