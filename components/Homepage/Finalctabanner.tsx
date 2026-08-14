"use client";
 
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
 
/**
 * FinalCtaBanner
 * ----------------------------------------------------------------------
 * Full-width, dark-navy closing CTA for taxindiafirm.com.
 * One button. No secondary link. No form.
 *
 * BACKGROUND — all tokens live in `THEME` below. Nothing else in the file
 * needs to change to retint or restyle it:
 *   - `THEME.bgFrom` / `THEME.bgTo`   diagonal base gradient (navy → deeper navy)
 *   - `THEME.glow`                    the large green "signal" glow behind the headline
 *   - `THEME.emberGlow`               small warm accent glow, bottom-right, for depth
 *   - `THEME.grid`                    faint line grid for texture (set opacity 0 to remove)
 *
 * ANIMATION — the whole block animates in together once, when the section
 * scrolls into view (`whileInView`, `once: true`), not on every scroll pass:
 *   1. glow fades/expands in first, so the section feels lit before content lands
 *   2. headline, sub-headline, button, fine print rise + un-blur in sequence
 *   3. the button gets one arrival pulse-ring; the ambient glow keeps a slow
 *      breathing loop afterward — everything else stays still
 *
 * Font-family / font-size / color on text elements use inline `style`
 * rather than bracketed Tailwind classes like `font-[family-name:var(--x)]`,
 * because nested parentheses inside brackets can silently fail to compile
 * under some Tailwind content-scanning configs — inline style can't fail
 * that way, so it's safe to drop this file into any project.
 */
 
const THEME = {
  bgFrom: "#0A1F3A",
  bgTo: "#071730",
  glow: "42,122,75", // green, as an r,g,b triplet for use in rgba()
  emberGlow: "245,166,35", // amber, r,g,b
  grid: "255,255,255",
  gridOpacity: 0.035,
};
 
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};
 
const rise: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
 
export default function FinalCtaBanner() {
  const prefersReducedMotion = useReducedMotion();
 
  return (
    <section
      className="relative isolate overflow-hidden px-6 py-24 text-center sm:py-28 md:py-32"
      style={{
        background: `linear-gradient(155deg, ${THEME.bgFrom} 0%, ${THEME.bgTo} 100%)`,
      }}
      aria-labelledby="final-cta-heading"
    >
      {/* Layer 1 — faint texture grid, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${THEME.grid},${THEME.gridOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${THEME.grid},${THEME.gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
        }}
      />
 
      {/* Layer 2 — small warm glow, bottom-right, adds depth off-axis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${THEME.emberGlow},0.16) 0%, rgba(${THEME.emberGlow},0) 70%)`,
        }}
      />
 
      {/* Layer 3 — the signature element: a slow-breathing green glow behind
          the headline, disabled entirely under reduced-motion */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(90vw, 900px)",
          height: "min(90vw, 900px)",
          background: `radial-gradient(circle, rgba(${THEME.glow},0.55) 0%, rgba(${THEME.glow},0.2) 32%, rgba(${THEME.glow},0) 68%)`,
          filter: "blur(2px)",
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={
          prefersReducedMotion
            ? { opacity: 0.55, scale: 1 }
            : { opacity: [0, 0.55, 0.4, 0.6, 0.4], scale: [0.85, 1.02, 1, 1.06, 1] }
        }
        viewport={{ once: true, amount: 0.6 }}
        transition={
          prefersReducedMotion
            ? { duration: 0.8 }
            : {
                duration: 8.5,
                times: [0, 0.12, 0.24, 0.62, 1],
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      />
 
      {/* Faint top hairline to separate from the section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
 
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center"
      >
        <motion.h2
          id="final-cta-heading"
          variants={rise}
          className="font-medium tracking-tight"
          style={{
            fontFamily: "var(--font-display, ui-serif, Georgia, serif)",
            fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          Ready to Register, File or{" "}
          <span className="italic" style={{ color: "#F5A623" }}>
            Stay Compliant?
          </span>
        </motion.h2>
 
        <motion.p
          variants={rise}
          className="mt-5 max-w-md leading-relaxed"
          style={{
            fontFamily:
              "var(--font-body, ui-sans-serif, system-ui, sans-serif)",
            fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Speak with a Chartered Accountant today, no cost, no commitment.
          Just clear answers about your business.
        </motion.p>
 
        <motion.div variants={rise} className="relative mt-9">
          {/* One-time arrival pulse ring behind the button */}
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: [0, 0.5, 0], scale: [1, 1.6, 1.6] }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.9 }}
            />
          )}
 
          <Link
            href="/contact-us"
            className="
              group relative inline-flex items-center gap-2.5
              rounded-full border-2 border-[#0A1F3A] bg-white
              px-7 py-3.5 sm:px-8 sm:py-4
              font-semibold text-[#0A1F3A]
              shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)]
              transition-all duration-200 ease-out
              hover:-translate-y-0.5 hover:bg-[#0875D1] hover:text-white
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-white
              active:translate-y-0
            "
            style={{
              fontFamily:
                "var(--font-body, ui-sans-serif, system-ui, sans-serif)",
              fontSize: "0.9375rem",
            }}
          >
            Talk to a CA About Your Business
            <svg
              aria-hidden
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
 
        <motion.p
          variants={rise}
          className="mt-6 text-xs sm:text-sm"
          style={{
            fontFamily:
              "var(--font-body, ui-sans-serif, system-ui, sans-serif)",
            color: "#93A3B8",
          }}
        >
          Monday to Saturday&nbsp;&nbsp;|&nbsp;&nbsp;10:00 AM – 9:00 PM&nbsp;&nbsp;|&nbsp;&nbsp;Chennai, Tamil Nadu
        </motion.p>
      </motion.div>
    </section>
  );
}