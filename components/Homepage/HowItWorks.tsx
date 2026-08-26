"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  MessageSquareText,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "1",
    eyebrow: "Step 01",
    title: "Tell Us What Your Business Needs",
    copy:
      "Pick a service or speak directly with a Chartered Accountant. We assess your requirement and explain the exact process, documents needed and timeline, clearly, with no jargon.",
    icon: MessageSquareText,
    gradient: "from-[#1478FF] via-[#38A4FF] to-[#71D3FF]",
  },
  {
    number: "2",
    eyebrow: "Step 02",
    title: "We Handle All Documents & Government Filings",
    copy:
      "From MCA portals to GST dashboard to IP India, our team submits everything on your behalf. You share documents once; we do the rest, end to end.",
    icon: FileCheck2,
    gradient: "from-[#585CFF] via-[#318DFF] to-[#5FD1FF]",
  },
  {
    number: "3",
    eyebrow: "Step 03",
    title: "Receive Your Certificate. Stay Compliant Forever.",
    copy:
      "Get your incorporation certificate, GSTIN, FSSAI license or any other outcome directly. We also track your renewal and compliance deadlines so you never miss a date.",
    icon: BadgeCheck,
    gradient: "from-[#00AFC6] via-[#218CFF] to-[#695CFF]",
  },
] as const;

const PATH =
  "M 0 265 C 145 320, 260 318, 350 235 C 455 138, 505 78, 600 84 C 715 92, 745 245, 855 262 C 970 280, 1020 160, 1200 190";

// These are the path-length points where the blue stroke reaches each node.
const NODE_FRACTIONS = [0.19, 0.5, 0.775] as const;

type StepState = "idle" | "active" | "complete";
type IconType = typeof MessageSquareText;

export default function HowItWorksCollisionFixedFinal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 29,
    mass: 0.32,
  });

  // Small calm zone before the line starts and after it completes.
  const pathProgress = useTransform(smooth, [0.08, 0.9], [0, 1], {
    clamp: true,
  });

  const ctaOpacity = useTransform(smooth, [0.72, 0.84], [0, 1], {
    clamp: true,
  });
  const ctaY = useTransform(smooth, [0.72, 0.84], [10, 0], {
    clamp: true,
  });

  useMotionValueEvent(pathProgress, "change", (progress) => {
    if (progress < NODE_FRACTIONS[0]) setActiveStep(null);
    else if (progress < NODE_FRACTIONS[1]) setActiveStep(0);
    else if (progress < NODE_FRACTIONS[2]) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section ref={sectionRef} className="relative mt-10 bg-[#FBFCFE] xl:h-[350vh]">
      {/* =========================================================
          DESKTOP PINNED TIMELINE

          Important layout change:
          Header, wave, content and CTA are separate FLOW rows.
          They cannot overlap each other anymore.
      ========================================================== */}
      <div className="hidden xl:sticky xl:top-[64px] xl:block xl:h-[calc(100svh-64px)] xl:min-h-[650px] xl:overflow-hidden 2xl:top-[72px] 2xl:h-[calc(100svh-72px)]">
        <TimelineBackground />

        <div className="relative mx-auto flex h-full w-full max-w-[1920px] flex-col px-[clamp(56px,4.6vw,96px)]">
          {/* ---------------- HEADER — own reserved row ---------------- */}
          <header className="relative z-30 mx-auto w-full max-w-[900px] shrink-0 pt-[clamp(14px,2.2vh,26px)] text-center">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#2D8CFF]/15 bg-white/88 px-3.5 py-1.5 shadow-[0_8px_24px_rgba(45,140,255,0.07)] backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-[#2D8CFF] shadow-[0_0_12px_rgba(45,140,255,0.6)]" />
              <span className="font-body text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#2D8CFF] xl:text-[10.5px]">
                Simple Process
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-2.5 pt-5 max-w-[880px] font-heading text-[clamp(32px,2.55vw,48px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#101B34]"
            >
              Start Your Business or File Your Taxes in{" "}
              <span className="bg-gradient-to-r from-[#0A72FF] via-[#2D8CFF] to-[#62C5FF] bg-clip-text text-transparent">
                3 Steps.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.52, delay: 0.1 }}
              className="mx-auto mt-2.5 pt-3 max-w-[690px] font-body text-[clamp(12px,0.78vw,14.5px)] leading-[1.55] text-[#65758A]"
            >
              No government portals, no paperwork confusion. Our CA team handles
              everything from document collection to final submission.
            </motion.p>
          </header>

          {/* ---------------- WAVE — separate row below paragraph ---------------- */}
          <div className="relative z-10 mt-[clamp(14px,2vh,22px)] h-[clamp(230px,31vh,310px)] shrink-0">
            <svg
              aria-hidden="true"
              viewBox="0 0 1200 480"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="crystalBlueFinal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0B76FF" />
                  <stop offset="38%" stopColor="#52C4FF" />
                  <stop offset="70%" stopColor="#2D8CFF" />
                  <stop offset="100%" stopColor="#5E69FF" />
                </linearGradient>
              </defs>

              {/* untouched/base path */}
              <path
                d={PATH}
                fill="none"
                stroke="rgba(45,140,255,0.14)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* crystal aura */}
              <motion.path
                d={PATH}
                fill="none"
                stroke="rgba(75,178,255,0.30)"
                strokeWidth="18"
                strokeLinecap="round"
                style={{
                  pathLength: reduceMotion ? 1 : pathProgress,
                  filter: "blur(9px)",
                }}
              />

              {/* blue crystal core */}
              <motion.path
                d={PATH}
                fill="none"
                stroke="url(#crystalBlueFinal)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength: reduceMotion ? 1 : pathProgress }}
              />

              {/* glass reflection */}
              <motion.path
                d={PATH}
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.05"
                strokeLinecap="round"
                style={{ pathLength: reduceMotion ? 1 : pathProgress }}
              />
            </svg>

            {/* Nodes are positioned INSIDE the wave row, never in the header row. */}
            <TimelineNode
              icon={MessageSquareText}
              state={getStepState(activeStep, 0)}
              className="left-[19.2%] top-[65.5%]"
              reduceMotion={!!reduceMotion}
            />
            <TimelineNode
              icon={FileCheck2}
              state={getStepState(activeStep, 1)}
              className="left-[49.1%] top-[22%]"
              reduceMotion={!!reduceMotion}
            />
            <TimelineNode
              icon={BadgeCheck}
              state={getStepState(activeStep, 2)}
              className="left-[75.7%] top-[59%]"
              reduceMotion={!!reduceMotion}
            />
          </div>

          {/* ---------------- STEPS — own row below wave ---------------- */}
          <div className="relative z-20 mx-auto -mt-[clamp(8px,1vh,14px)] grid w-full max-w-[1760px] shrink-0 grid-cols-3 gap-[clamp(42px,4.4vw,84px)]">
            {steps.map((step, index) => (
              <DesktopStep
                key={step.number}
                step={step}
                state={getStepState(activeStep, index)}
              />
            ))}
          </div>

          {/* ---------------- CTA — own bottom row ---------------- */}
          <motion.div
            style={{
              opacity: reduceMotion ? 1 : ctaOpacity,
              y: reduceMotion ? 0 : ctaY,
            }}
            className="relative z-40 mt-auto flex shrink-0 justify-center pb-[clamp(14px,2vh,24px)] pt-[clamp(14px,1.8vh,22px)]"
          >
            <Link
              href="/contact-us"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#102C49] px-7 py-3 text-center font-body text-[12.5px] font-bold text-white shadow-[0_14px_34px_rgba(16,44,73,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D8CFF] hover:shadow-[0_18px_40px_rgba(45,140,255,0.24)]"
            >
              Speak to a Chartered Accountant for Free
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          MOBILE + TABLET + SMALLER DESKTOP
          Natural vertical flow = no collisions on compact screens.
      ========================================================== */}
      <div className="relative mx-auto w-full max-w-[920px] px-4 py-16 sm:px-6 sm:py-20 xl:hidden">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-[720px] text-center sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D8CFF]/15 bg-white px-3 py-2 shadow-[0_8px_22px_rgba(45,140,255,0.07)]">
            <span className="h-2 w-2 rounded-full bg-[#2D8CFF]" />
            <span className="font-body text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#2D8CFF]">
              Simple Process
            </span>
          </div>

          <h2 className="mt-4 font-heading text-[30px] font-bold leading-[1.07] tracking-[-0.04em] text-[#101B34] sm:text-[40px] md:text-[46px]">
            Start Your Business or File Your Taxes in{" "}
            <span className="bg-gradient-to-r from-[#0A72FF] to-[#55B9FF] bg-clip-text text-transparent">
              3 Steps.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] font-body text-[13px] leading-[1.75] text-[#69778A] sm:text-[14px]">
            No government portals, no paperwork confusion. Our CA team handles
            everything from document collection to final submission.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-12 left-[27px] top-8 w-px bg-[#D9E9FA] sm:left-[31px]" />

          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, index) => (
              <MobileStep
                key={step.number}
                step={step}
                index={index}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="https://taxindiafirm.com/contact-us"
            className="group inline-flex min-h-[52px] w-full max-w-[390px] items-center justify-center gap-3 rounded-full bg-[#102C49] px-5 py-3.5 text-center font-body text-[12.5px] font-bold text-white shadow-[0_12px_28px_rgba(16,44,73,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D8CFF] sm:w-auto sm:px-7 sm:text-[13px]"
          >
            <span>Speak to a Chartered Accountant for Free</span>
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineBackground() {
  return (
    <div className="pointer-events-none absolute  inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(32,92,160,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(32,92,160,0.026) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute left-1/2 top-[45%] h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D8CFF]/[0.036] blur-[155px]" />
      <div className="absolute -left-[10%] top-[35%] h-[360px] w-[360px] rounded-full bg-[#4AB8FF]/[0.035] blur-[110px]" />
      <div className="absolute -right-[8%] top-[38%] h-[360px] w-[360px] rounded-full bg-[#6B70FF]/[0.028] blur-[120px]" />
    </div>
  );
}

function getStepState(activeStep: number | null, index: number): StepState {
  if (activeStep === null) return "idle";
  if (index === activeStep) return "active";
  if (index < activeStep) return "complete";
  return "idle";
}

function TimelineNode({
  icon: Icon,
  state,
  className,
  reduceMotion,
}: {
  icon: IconType;
  state: StepState;
  className: string;
  reduceMotion: boolean;
}) {
  const active = state === "active";
  const reached = state === "active" || state === "complete";

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : active
            ? { scale: 1.055, y: -2 }
            : { scale: 1, y: 0 }
      }
      transition={{ type: "spring", stiffness: 285, damping: 21 }}
      className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {active && !reduceMotion && (
        <>
          <motion.span
            className="absolute inset-[-12px] rounded-[31px] border border-[#62B9FF]/35 bg-[#2D8CFF]/[0.035]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: [0.65, 0, 0.65], scale: [0.92, 1.23, 0.92] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute inset-[-7px] rounded-[29px] bg-[#56B4FF]/20 blur-[11px]"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.div
        animate={{
          backgroundColor: reached ? "#2D8CFF" : "#FFFFFF",
          borderColor: reached ? "#2D8CFF" : "rgba(45,140,255,0.18)",
          color: reached ? "#FFFFFF" : "#2D8CFF",
          boxShadow: active
            ? "0 20px 50px rgba(45,140,255,0.28)"
            : reached
              ? "0 14px 32px rgba(45,140,255,0.18)"
              : "0 14px 32px rgba(30,70,120,0.09)",
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-[64px] w-[64px] items-center justify-center rounded-[21px] border xl:h-[70px] xl:w-[70px] xl:rounded-[23px] 2xl:h-[76px] 2xl:w-[76px]"
      >
        <motion.div
          animate={active && !reduceMotion ? { rotate: [0, -4, 4, 0] } : { rotate: 0 }}
          transition={{ duration: 0.48, ease: "easeOut" }}
        >
          <Icon size={24} strokeWidth={2.1} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function DesktopStep({
  step,
  state,
}: {
  step: (typeof steps)[number];
  state: StepState;
}) {
  const active = state === "active";
  const complete = state === "complete";

  return (
    <motion.article
      animate={{
        opacity: active ? 1 : complete ? 0.78 : 0.45,
        y: active ? -4 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-0"
    >
      <motion.div
        animate={{
          opacity: active ? 1 : complete ? 0.88 : 0.55,
          scale: active ? 1.035 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`mb-1 inline-block bg-gradient-to-br ${step.gradient} bg-clip-text font-heading text-[clamp(34px,2.5vw,46px)] font-bold leading-[0.86] tracking-[-0.055em] text-transparent drop-shadow-[0_7px_16px_rgba(45,140,255,0.12)]`}
      >
        {step.number}
      </motion.div>

      <span
        className={`block font-body text-[9.5px] font-extrabold uppercase tracking-[0.16em] xl:text-[10px] ${
          active ? "text-[#2D8CFF]" : complete ? "text-[#529CF4]" : "text-[#78ADEF]"
        }`}
      >
        {step.eyebrow}
      </span>

      <h3 className="mt-1.5 font-heading text-[clamp(19px,1.25vw,25px)] font-bold leading-[1.1] tracking-[-0.035em] text-[#101B34]">
        {step.title}
      </h3>

      <p className="mt-2 max-w-[470px] font-body text-[clamp(11.5px,0.68vw,13px)] leading-[1.58] text-[#6D7B8D]">
        {step.copy}
      </p>
    </motion.article>
  );
}

function MobileStep({
  step,
  index,
  reduceMotion,
}: {
  step: (typeof steps)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "center 48%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-[56px_1fr] gap-4 sm:grid-cols-[64px_1fr] sm:gap-5"
    >
      <div className="relative z-10">
        <motion.div
          whileInView={{
            backgroundColor: "#2D8CFF",
            color: "#FFFFFF",
            borderColor: "#2D8CFF",
            boxShadow: "0 16px 34px rgba(45,140,255,0.20)",
          }}
          viewport={{ amount: 0.7, margin: "-15% 0px -25% 0px" }}
          transition={{ duration: 0.32 }}
          className="flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-[#D5E7F8] bg-white text-[#2D8CFF] shadow-[0_12px_28px_rgba(45,140,255,0.12)] sm:h-[64px] sm:w-[64px] sm:rounded-[20px]"
        >
          <step.icon size={22} strokeWidth={2.1} />
        </motion.div>

        {index < steps.length - 1 && (
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : lineScale }}
            className="absolute left-1/2 top-[58px] h-[calc(100%+42px)] w-px origin-top -translate-x-1/2 bg-[#2D8CFF] sm:top-[66px]"
          />
        )}
      </div>

      <div className="min-w-0 pb-2 pt-0.5 sm:pt-1">
        <div
          className={`mb-1.5 inline-block bg-gradient-to-br ${step.gradient} bg-clip-text font-heading text-[38px] font-bold leading-[0.82] tracking-[-0.06em] text-transparent sm:text-[44px]`}
        >
          {step.number}
        </div>

        <span className="block font-body text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#2D8CFF]">
          {step.eyebrow}
        </span>

        <h3 className="mt-2 font-heading text-[21px] font-bold leading-[1.15] tracking-[-0.03em] text-[#101B34] sm:text-[24px]">
          {step.title}
        </h3>

        <p className="mt-3 font-body text-[12.5px] leading-[1.75] text-[#6F7D8F] sm:text-[13.5px]">
          {step.copy}
        </p>
      </div>
    </motion.article>
  );
}