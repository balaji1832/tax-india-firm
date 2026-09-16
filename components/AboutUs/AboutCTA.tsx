"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutCTA() {
  return (
    <section className="bg-[#F7F9FC] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28 xl:px-12">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease }}
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] bg-[#246EF1] px-6 py-14 text-white shadow-[0_30px_80px_rgba(36,110,241,0.18)] sm:px-10 lg:px-14 lg:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute -right-[150px] -top-[180px] h-[540px] w-[540px] rounded-full border border-white/20" />
        <div className="absolute -right-[10px] -top-[25px] h-[320px] w-[320px] rounded-full border border-dashed border-white/20" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] !text-white/70">
              Need professional support?
            </span>

            <h2 className="mt-5 max-w-[900px] !text-[39px] !font-[700] !leading-[1.04] !tracking-[-0.048em] !text-white sm:!text-[50px] lg:!text-[58px]">
              Need Professional Support for Your Business?
            </h2>

            <p className="mt-6 max-w-[850px] text-[14px] leading-7 !text-white/75 sm:text-[15px] sm:leading-8">
              Whether you are starting a new business, managing ongoing
              compliance or dealing with a specific tax, accounting or legal
              requirement, the first step is understanding exactly what you
              need.
            </p>

            <p className="mt-4 !text-[15px] !font-semibold !text-white">
              Talk to Tax India Firm about your requirement.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold !text-[#246EF1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
          >
            Contact our team
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
