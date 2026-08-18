"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Guide = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  linkText: string;
  href: string;
  image: string;
};

/* =========================================================
   BLOG DATA
========================================================= */

const guides: Guide[] = [
  {
    id: 1,
    category: "GST & Taxation",
    title: "Top 10 Things to Know About GST Filing in India",
    excerpt:
      "Due dates, late fees, ITC claims and GSTR forms — what every business owner in Tamil Nadu must know before filing.",
    linkText: "Read the GST filing guide",
    href: "/blogs/taxation/top-10-things-to-know-about-gst-filing",
    image: "/images/b1.png",
  },
  {
    id: 2,
    category: "Company Registration",
    title: "How to Register Your Company in India — Step-by-Step",
    excerpt:
      "DSC, DIN, name reservation, MOA, AOA and certificate of incorporation — simplified for first-time founders.",
    linkText: "Read the company registration guide",
    href: "/blogs/business/how-to-register-your-company-in-india",
    image: "/images/b2.png",
  },
  {
    id: 3,
    category: "Income Tax",
    title: "Things to Consider Before Filing Your Income Tax Return",
    excerpt:
      "Form 26AS, AIS, deductions, old vs new regime — your complete pre-ITR checklist before you file in Tamil Nadu.",
    linkText: "Read the ITR filing checklist",
    href: "/blogs/taxation/things-to-consider-before-filing-income-tax-return",
    image: "/images/b3.png",
  },
];

/* =========================================================
   SECTION ANIMATION
========================================================= */

const smoothEase = [0.22, 1, 0.36, 1] as const;

/*
 * iPhone-friendly entrance animation:
 * opacity + transform only.
 * No blur/filter because those can be expensive in mobile Safari.
 */
const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      ease: smoothEase,
    },
  },
};

const headerSequence: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.16,
    },
  },
};

const headerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

const cardAreaReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      delay: 0.16,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   ICONS
========================================================= */

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
    >
      <path
        d="M7 3.75H14.8L19 7.95V20.25H7V3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M14.5 4V8.3H18.7M10 12H16M10 15.5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   BLOG CARD

   IMPORTANT:
   No Framer Motion entrance variant here.

   Mobile / tablet animation is controlled by the entire
   slider wrapper, not individual cards.
========================================================= */

function BlogCard({ guide }: { guide: Guide }) {
  return (
    <article className="group h-full">
      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[22px]

          border
          border-[#E2EAF0]

          bg-white

          shadow-[0_12px_40px_rgba(15,55,85,0.055)]

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          lg:hover:-translate-y-[6px]
          lg:hover:border-[#CADCE9]
          lg:hover:shadow-[0_26px_65px_rgba(15,55,85,0.11)]
        "
      >
        {/* =================================================
            IMAGE
        ================================================== */}

        <Link
          href={guide.href}
          aria-label={guide.title}
          className="relative block overflow-hidden"
        >
          <div
            className="
              relative

              aspect-[1.5/1]

              w-full
              overflow-hidden

              bg-[#EDF4F8]

              sm:aspect-[1.42/1]

              lg:aspect-[1.45/1]
            "
          >
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              sizes="
                (max-width: 767px) 100vw,
                (max-width: 1279px) 50vw,
                33vw
              "
              className="
                transform-gpu
                object-cover

                transition-transform
                duration-[1400ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                lg:group-hover:scale-[1.055]
              "
            />

            {/* subtle overlay */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#071D30]/30
                via-transparent
                to-transparent
              "
            />

            {/* category */}

            <div
              className="
                absolute
                left-4
                top-4

                sm:left-5
                sm:top-5
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/60

                  bg-white/90

                  px-3.5
                  py-2

                  shadow-[0_6px_20px_rgba(0,0,0,0.06)]

                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#0875D1]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#0B4E87]

                    sm:text-[10px]
                  "
                >
                  {guide.category}
                </span>
              </div>
            </div>

            {/* image arrow */}

            <div
              className="
                absolute
                bottom-4
                right-4

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-white/50

                bg-white/20
                text-white

                backdrop-blur-xl

                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                sm:bottom-5
                sm:right-5
                sm:h-11
                sm:w-11

                lg:group-hover:rotate-45
                lg:group-hover:border-white
                lg:group-hover:bg-white
                lg:group-hover:text-[#0875D1]
              "
            >
              <ArrowUpRight />
            </div>
          </div>
        </Link>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            flex
            flex-1
            flex-col

            p-5

            sm:p-6

            xl:p-7
          "
        >
          {/* small label */}

          <div
            className="
              mb-4

              flex
              items-center
              gap-2

              text-[#0875D1]
            "
          >
            <ArticleIcon />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.17em]

                sm:text-[10px]
              "
            >
              Expert Guide
            </span>
          </div>

          {/* title */}

          <Link
            href={guide.href}
            className="block"
          >
            <h3
              className="
                text-[19px]
                font-semibold
                leading-[1.32]
                tracking-[-0.03em]
                text-[#102A43]

                transition-colors
                duration-500

                sm:text-[21px]

                lg:group-hover:text-[#0875D1]

                xl:text-[22px]
              "
            >
              {guide.title}
            </h3>
          </Link>

          {/* description */}

          <p
            className="
              mt-4

              line-clamp-2

              text-[13px]
              leading-6
              text-[#70808B]

              sm:text-[14px]
              sm:leading-7
            "
          >
            {guide.excerpt}
          </p>

          <div className="flex-1" />

          {/* =================================================
              GUIDE BUTTON
          ================================================== */}

          <div
            className="
              mt-6

              border-t
              border-[#E8EEF2]

              pt-5
            "
          >
            <Link
              href={guide.href}
              className="
                group/guide
                relative

                inline-flex
                max-w-full
                items-center
                gap-2.5

                overflow-hidden

                rounded-full

                border
                border-[#BFD5E6]

                bg-white

                px-4
                py-2.5

                text-[11px]
                font-semibold
                text-[#105184]

                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:border-[#0875D1]
                hover:text-white
                hover:shadow-[0_10px_25px_rgba(8,117,209,0.18)]

                sm:px-5
                sm:text-[12px]
              "
            >
              {/* smooth blue fill */}

              <span
                className="
                  absolute
                  inset-0

                  -translate-x-[101%]

                  bg-[#0875D1]

                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover/guide:translate-x-0
                "
              />

              <span
                className="
                  relative
                  z-10

                  truncate
                "
              >
                {guide.linkText}
              </span>

              <span
                className="
                  relative
                  z-10

                  shrink-0

                  transition-transform
                  duration-500

                  group-hover/guide:translate-x-1
                "
              >
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* hover bottom line */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-[2px]
            w-0

            bg-[#0875D1]

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            lg:group-hover:w-full
          "
        />
      </div>
    </article>
  );
}

/* =========================================================
   SLIDER ARROW
========================================================= */

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "left"
          ? "Previous guide"
          : "Next guide"
      }
      className="
        group

        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full

        border
        border-[#D4E2EC]

        bg-white
        text-[#13537E]

        shadow-[0_5px_18px_rgba(15,55,85,0.05)]

        transition-all
        duration-500

        hover:border-[#0875D1]
        hover:bg-[#0875D1]
        hover:text-white
        hover:shadow-[0_9px_25px_rgba(8,117,209,0.18)]
      "
    >
      <span
        className={`
          transition-transform
          duration-500

          ${
            direction === "left"
              ? "rotate-180 group-hover:-translate-x-[2px]"
              : "group-hover:translate-x-[2px]"
          }
        `}
      >
        <ArrowRight />
      </span>
    </button>
  );
}

/* =========================================================
   CONTROLS
========================================================= */

type SliderControlsProps = {
  activeIndex: number;
  previousSlide: () => void;
  nextSlide: () => void;
  setActiveIndex: (index: number) => void;
};

function SliderControls({
  activeIndex,
  previousSlide,
  nextSlide,
  setActiveIndex,
}: SliderControlsProps) {
  return (
    <div
      className="
        mt-6

        flex
        items-center
        justify-between
      "
    >
      {/* arrows */}

      <div className="flex items-center gap-2">
        <SliderArrow
          direction="left"
          onClick={previousSlide}
        />

        <SliderArrow
          direction="right"
          onClick={nextSlide}
        />
      </div>

      {/* pagination */}

      <div className="flex items-center gap-2">
        {guides.map((guide, index) => (
          <button
            key={guide.id}
            type="button"
            onClick={() =>
              setActiveIndex(index)
            }
            aria-label={`Go to guide ${index + 1}`}
            className="
              flex
              h-5
              items-center
              justify-center
            "
          >
            <motion.span
              animate={{
                width:
                  activeIndex === index
                    ? 27
                    : 7,
              }}
              transition={{
                duration: 0.35,
                ease: smoothEase,
              }}
              className={`
                block

                h-[7px]

                rounded-full

                ${
                  activeIndex === index
                    ? "bg-[#0875D1]"
                    : "bg-[#CBD8E2]"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* icon only */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          border
          border-[#DCE6ED]

          bg-white

          text-[#0875D1]
        "
      >
        <ArticleIcon />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ExpertGuides() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const isSectionInView = useInView(sectionRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
  });

  /* =====================================================
     AUTO SLIDER

     Runs only while the section is visible.
     This reduces unnecessary work on real phones.
  ====================================================== */

  useEffect(() => {
    if (!isSectionInView || isPaused || reduceMotion) return;

    const interval =
      window.setInterval(() => {
        setActiveIndex(
          (previous) =>
            (previous + 1) %
            guides.length,
        );
      }, 5600);

    return () =>
      window.clearInterval(interval);
  }, [isSectionInView, isPaused, reduceMotion]);

  /* =====================================================
     PREVIOUS
  ====================================================== */

  const previousSlide = () => {
    setActiveIndex((previous) =>
      previous === 0
        ? guides.length - 1
        : previous - 1,
    );
  };

  /* =====================================================
     NEXT
  ====================================================== */

  const nextSlide = () => {
    setActiveIndex(
      (previous) =>
        (previous + 1) %
        guides.length,
    );
  };

  /* =====================================================
     TABLET TWO CARDS
  ====================================================== */

  const tabletGuides: Guide[] = [
    guides[activeIndex],

    guides[
      (activeIndex + 1) %
        guides.length
    ],
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        bg-[#F8FBFD]

        py-14

        sm:py-16
        md:py-20
        lg:py-24
        xl:py-[105px]
      "
    >
      {/* ==================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-[#DCE7EF]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -left-[260px]
          top-[150px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#E9F5FF]

          blur-[155px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -right-[280px]
          bottom-[0]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#EDF7FF]

          blur-[160px]
        "
      />

      {/* grid */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.15]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(18, 83, 134, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(18, 83, 134, 0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "58px 58px",

          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 80%, transparent)",

          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 80%, transparent)",
        }}
      />

      {/* ==================================================
          ONE WHOLE SECTION ANIMATION
      =================================================== */}

      <motion.div
        variants={reduceMotion ? undefined : sectionReveal}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        style={{
          willChange: reduceMotion ? "auto" : "transform, opacity",
        }}
        className="
          relative
          z-10

          mx-auto
          max-w-[1320px]

          px-5

          sm:px-7
          lg:px-8
          xl:px-10
        "
      >
        {/* ==================================================
            HEADER
        =================================================== */}

        <motion.div
          variants={reduceMotion ? undefined : headerSequence}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.35 }}
          className="
            mb-10

            md:mb-12
            lg:mb-14
          "
        >
          <motion.div
            variants={reduceMotion ? undefined : headerItem}
            className="
              mb-5

              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#0875D1]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.23em]
                text-[#0875D1]

                sm:text-[11px]
              "
            >
              Expert Guides
            </span>
          </motion.div>

          <div
            className="
              grid
              grid-cols-1
              gap-5

              md:grid-cols-[1fr_0.78fr]
              md:items-end
              md:gap-8

              lg:gap-14
            "
          >
            <motion.h2
              variants={reduceMotion ? undefined : headerItem}
              className="
                max-w-[680px]

                text-[32px]
                font-semibold
                leading-[1.08]
                tracking-[-0.05em]
                text-[#102A43]

                sm:text-[40px]
                lg:text-[48px]
                xl:text-[54px]
              "
            >
              Stay Informed.{" "}

              <span className="text-[#0875D1]">
                Stay Compliant.
              </span>
            </motion.h2>

            <motion.div
              variants={reduceMotion ? undefined : headerItem}
              className="
                md:ml-auto
                md:max-w-[450px]
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#6B7C88]

                  sm:text-[15px]
                  sm:leading-7

                  lg:text-base
                  lg:leading-8
                "
              >
                Practical guides on GST,
                company registration, income tax
                and business compliance, written
                by our CA team for Indian
                entrepreneurs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : cardAreaReveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.16 }}
          style={{
            willChange: reduceMotion ? "auto" : "transform, opacity",
          }}
        >
        {/* ==================================================
            MOBILE
            1 COMPLETE CARD
        =================================================== */}

        <div
          className="md:hidden"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onTouchStart={() =>
            setIsPaused(true)
          }
          onTouchEnd={() => {
            window.setTimeout(
              () => setIsPaused(false),
              700,
            );
          }}
        >
          <div className="overflow-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={`mobile-slide-${activeIndex}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 28,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: -28,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.58,
                  ease: smoothEase,
                }}
                style={{
                  willChange: reduceMotion
                    ? "auto"
                    : "transform, opacity",
                }}
                className="transform-gpu"
              >
                <BlogCard
                  guide={
                    guides[activeIndex]
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <SliderControls
            activeIndex={activeIndex}
            previousSlide={previousSlide}
            nextSlide={nextSlide}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* ==================================================
            TABLET
            2 COMPLETE CARDS
        =================================================== */}

        <div
          className="
            hidden
            md:block
            xl:hidden
          "
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >
          <div className="overflow-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={`tablet-slide-${activeIndex}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 32,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: -32,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.62,
                  ease: smoothEase,
                }}
                style={{
                  willChange: reduceMotion
                    ? "auto"
                    : "transform, opacity",
                }}
                className="
                  transform-gpu
                  grid
                  grid-cols-2

                  gap-5

                  lg:gap-6
                "
              >
                {tabletGuides.map(
                  (guide, index) => (
                    <div
                      key={`${activeIndex}-${guide.id}-${index}`}
                      className="h-full"
                    >
                      <BlogCard
                        guide={guide}
                      />
                    </div>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <SliderControls
            activeIndex={activeIndex}
            previousSlide={previousSlide}
            nextSlide={nextSlide}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* ==================================================
            DESKTOP
            3 STATIC CARDS
        =================================================== */}

        <div
          className="
            hidden

            xl:grid
            xl:grid-cols-3
            xl:gap-6
          "
        >
          {guides.map((guide) => (
            <BlogCard
              key={guide.id}
              guide={guide}
            />
          ))}
        </div>

        </motion.div>

        {/* ==================================================
            BOTTOM CTA
        =================================================== */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-5

            border-t
            border-[#DDE7EE]

            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-12
          "
        >
          <div>
            <p
              className="
                text-[13px]
                font-semibold
                text-[#173750]

                sm:text-[14px]
              "
            >
              Practical knowledge for smarter
              business decisions.
            </p>

            <p
              className="
                mt-1

                text-[11px]
                leading-5
                text-[#84939D]

                sm:text-[12px]
              "
            >
              Explore our complete collection
              of tax and compliance resources.
            </p>
          </div>

          {/* =================================================
              MAIN FILL CTA
          ================================================== */}

          <Link
            href="/blogs"
            className="
              group/all
              relative

              inline-flex
              w-full
              items-center
              justify-center
              gap-3

              overflow-hidden

              rounded-full

              border
              border-[#0875D1]

              bg-transparent

              px-6
              py-3.5

              text-[12px]
              font-semibold
              text-[#0875D1]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:text-white
              hover:shadow-[0_12px_30px_rgba(8,117,209,0.22)]

              sm:w-auto
              sm:text-[13px]
            "
          >
            {/* blue fill */}

            <span
              className="
                absolute
                inset-0

                -translate-x-[101%]

                bg-[#0875D1]

                transition-transform
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover/all:translate-x-0
              "
            />

            <span
              className="
                relative
                z-10
              "
            >
              Browse All Tax & Business Guides
            </span>

            <span
              className="
                relative
                z-10

                transition-transform
                duration-500

                group-hover/all:translate-x-1.5
              "
            >
              <ArrowRight />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
