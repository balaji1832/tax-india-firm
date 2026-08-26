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

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

type Direction = 1 | -1;

/* =========================================================
   DATA
========================================================= */

const guides: Guide[] = [
  {
    id: 1,
    category: "GST & Taxation",
    title:
      "Top 10 Things to Know About GST Filing in India",
    excerpt:
      "Due dates, late fees, ITC claims and GSTR forms — what every business owner in Tamil Nadu must know before filing.",
    linkText:
      "Read the GST filing guide",
    href:
      "/blogs/taxation/top-10-things-to-know-about-gst-filing",
    image: "/images/b1.png",
  },

  {
    id: 2,
    category: "Company Registration",
    title:
      "How to Register Your Company in India — Step-by-Step",
    excerpt:
      "DSC, DIN, name reservation, MOA, AOA and certificate of incorporation — simplified for first-time founders.",
    linkText:
      "Read the company registration guide",
    href:
      "/blogs/business/how-to-register-your-company-in-india",
    image: "/images/b2.png",
  },

  {
    id: 3,
    category: "Income Tax",
    title:
      "Things to Consider Before Filing Your Income Tax Return",
    excerpt:
      "Form 26AS, AIS, deductions, old vs new regime — your complete pre-ITR checklist before you file in Tamil Nadu.",
    linkText:
      "Read the ITR filing checklist",
    href:
      "/blogs/taxation/things-to-consider-before-filing-income-tax-return",
    image: "/images/b3.png",
  },
];

/* =========================================================
   MOTION
========================================================= */

const smoothEase = [
  0.16,
  1,
  0.3,
  1,
] as const;

const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const headerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.1,
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
      duration: 0.8,
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
      duration: 0.85,
      delay: 0.08,
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
      aria-hidden="true"
      className="h-[16px] w-[16px]"
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
      aria-hidden="true"
      className="h-[17px] w-[17px]"
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
      aria-hidden="true"
      className="h-[15px] w-[15px]"
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
========================================================= */

function BlogCard({
  guide,
}: {
  guide: Guide;
}) {
  return (
    <article
      className="
        group
        h-full
      "
    >
      <div
        className="
          relative

          flex
          h-full
          flex-col

          overflow-hidden

          rounded-[22px]

          border
          border-[#DDE7F1]

          bg-white

          shadow-[0_14px_44px_-30px_rgba(22,64,105,0.28)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          lg:hover:-translate-y-[5px]
          lg:hover:border-[#BFD6EA]
          lg:hover:shadow-[0_25px_55px_-30px_rgba(25,82,137,0.32)]
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <Link
          href={guide.href}
          aria-label={guide.title}
          className="
            relative
            block

            overflow-hidden
          "
        >
          <div
            className="
              relative

              aspect-[1.45/1]

              w-full
              overflow-hidden

              bg-[#EAF2F9]

              sm:aspect-[1.48/1]

              lg:aspect-[1.5/1]
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
                duration-[1000ms]

                ease-[cubic-bezier(0.16,1,0.3,1)]

                lg:group-hover:scale-[1.045]
              "
            />

            {/* overlay */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-gradient-to-t
                from-[#071D30]/30
                via-[#071D30]/[0.03]
                to-transparent
              "
            />

            {/* CATEGORY */}

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
                  border-white/70

                  bg-white/90

                  px-3
                  py-1.5

                  shadow-[0_6px_18px_rgba(0,0,0,0.06)]

                  backdrop-blur-lg
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]

                    rounded-full

                    bg-[#1579E6]
                  "
                />

                <span
                  className="
                    text-[8.5px]
                    font-bold
                    uppercase

                    tracking-[0.14em]

                    text-[#135A9B]

                    sm:text-[9px]
                  "
                >
                  {guide.category}
                </span>
              </div>
            </div>

            {/* IMAGE ARROW */}

            <div
              className="
                absolute
                bottom-4
                right-4

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-white/50

                bg-[#0B3151]/20

                text-white

                backdrop-blur-lg

                transition-all
                duration-500

                sm:h-10
                sm:w-10

                lg:group-hover:rotate-45
                lg:group-hover:border-white
                lg:group-hover:bg-white
                lg:group-hover:text-[#1579E6]
              "
            >
              <ArrowUpRight />
            </div>
          </div>
        </Link>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-1
            flex-col

            p-5

            sm:p-6

            xl:p-6
          "
        >
          {/* small label */}

          <div
            className="
              mb-3

              flex
              items-center
              gap-2

              text-[#1579E6]
            "
          >
            <ArticleIcon />

            <span
              className="
                text-[8.5px]
                font-bold
                uppercase

                tracking-[0.16em]

                sm:text-[9px]
              "
            >
              Expert Guide
            </span>
          </div>

          {/* TITLE */}

          <Link
            href={guide.href}
            className="block"
          >
            <h3
              className="
                text-[18px]
                font-semibold

                leading-[1.35]
                tracking-[-0.03em]

                text-[#102A43]

                transition-colors
                duration-300

                sm:text-[19px]

                lg:group-hover:text-[#1579E6]

                xl:text-[20px]
              "
            >
              {guide.title}
            </h3>
          </Link>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3

              line-clamp-3

              text-[12px]
              leading-[1.75]

              text-[#708294]

              sm:text-[13px]
            "
          >
            {guide.excerpt}
          </p>

          <div className="flex-1" />

          {/* =================================================
              BUTTON
          ================================================= */}

          <div
            className="
              mt-5

              border-t
              border-[#E7EEF5]

              pt-4
            "
          >
            <Link
              href={guide.href}
              className="
                group/button
                relative

                inline-flex
                max-w-full

                items-center
                gap-2

                overflow-hidden

                rounded-full

                border
                border-[#BDD5EB]

                bg-white

                px-4
                py-2.5

                text-[10.5px]
                font-semibold

                text-[#175A91]

                transition-all
                duration-400

                hover:border-[#1579E6]
                hover:text-white
                hover:shadow-[0_10px_24px_-12px_rgba(21,121,230,0.42)]

                sm:text-[11px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  -translate-x-[102%]

                  bg-[#1579E6]

                  transition-transform
                  duration-400

                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover/button:translate-x-0
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
                  duration-300

                  group-hover/button:translate-x-1
                "
              >
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* subtle hover line */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0

            h-[2px]
            w-0

            bg-[#1579E6]

            transition-all
            duration-500

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
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "left"
          ? "Previous guide"
          : "Next guide"
      }
      whileTap={{
        scale: 0.94,
      }}
      className="
        group

        flex
        h-10
        w-10

        items-center
        justify-center

        rounded-full

        border
        border-[#CDDCE9]

        bg-white

        text-[#1567A9]

        shadow-[0_7px_20px_-14px_rgba(20,67,107,0.32)]

        transition-all
        duration-300

        hover:border-[#1579E6]
        hover:bg-[#1579E6]
        hover:text-white
      "
    >
      <span
        className={`
          transition-transform
          duration-300

          ${
            direction === "left"
              ? "rotate-180 group-hover:-translate-x-[2px]"
              : "group-hover:translate-x-[2px]"
          }
        `}
      >
        <ArrowRight />
      </span>
    </motion.button>
  );
}

/* =========================================================
   CONTROLS
========================================================= */

function SliderControls({
  activeIndex,
  previousSlide,
  nextSlide,
  setActiveIndex,
}: {
  activeIndex: number;
  previousSlide: () => void;
  nextSlide: () => void;
  setActiveIndex: (
    index: number,
  ) => void;
}) {
  return (
    <div
      className="
        mt-5

        flex
        items-center
        justify-between

        gap-4
      "
    >
      {/* arrows */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <SliderArrow
          direction="left"
          onClick={previousSlide}
        />

        <SliderArrow
          direction="right"
          onClick={nextSlide}
        />
      </div>

      {/* indicators */}

      <div
        className="
          flex
          items-center
          gap-1
        "
      >
        {guides.map(
          (guide, index) => (
            <button
              key={guide.id}
              type="button"
              onClick={() =>
                setActiveIndex(
                  index,
                )
              }
              aria-label={`Go to guide ${
                index + 1
              }`}
              className="
                flex
                h-8

                items-center
                justify-center

                px-1
              "
            >
              <motion.span
                animate={{
                  width:
                    activeIndex ===
                    index
                      ? 28
                      : 7,
                }}
                transition={{
                  duration: 0.3,
                  ease: smoothEase,
                }}
                className={`
                  block

                  h-[6px]

                  rounded-full

                  ${
                    activeIndex ===
                    index
                      ? "bg-[#1579E6]"
                      : "bg-[#CAD8E5]"
                  }
                `}
              />
            </button>
          ),
        )}
      </div>

      {/* decorative icon */}

      <div
        className="
          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          border
          border-[#D7E3ED]

          bg-white

          text-[#1579E6]
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
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    direction,
    setDirection,
  ] =
    useState<Direction>(1);

  const [
    isPaused,
    setIsPaused,
  ] = useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(
      null,
    );

  const reduceMotion =
    useReducedMotion();

  const isSectionInView =
    useInView(sectionRef, {
      amount: 0.12,
      margin:
        "0px 0px -8% 0px",
    });

  /* =====================================================
     AUTO SLIDER
  ====================================================== */

  useEffect(() => {
    if (
      !isSectionInView ||
      isPaused ||
      reduceMotion
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setDirection(1);

        setActiveIndex(
          (previous) =>
            (previous + 1) %
            guides.length,
        );
      }, 5600);

    return () =>
      window.clearInterval(
        interval,
      );
  }, [
    isSectionInView,
    isPaused,
    reduceMotion,
  ]);

  /* =====================================================
     NAVIGATION
  ====================================================== */

  const previousSlide = () => {
    setDirection(-1);

    setActiveIndex(
      (previous) =>
        previous === 0
          ? guides.length - 1
          : previous - 1,
    );
  };

  const nextSlide = () => {
    setDirection(1);

    setActiveIndex(
      (previous) =>
        (previous + 1) %
        guides.length,
    );
  };

  const goToSlide = (
    index: number,
  ) => {
    setDirection(
      index >= activeIndex
        ? 1
        : -1,
    );

    setActiveIndex(index);
  };

  /* =====================================================
     TABLET CARDS
  ====================================================== */

  const tabletGuides =
    useMemo(
      () => [
        guides[activeIndex],

        guides[
          (activeIndex + 1) %
            guides.length
        ],
      ],
      [activeIndex],
    );

  /* =====================================================
     SLIDE VARIANT
  ====================================================== */

  const slideVariants: Variants = {
    enter: (
      slideDirection: Direction,
    ) => ({
      opacity: 0,

      x:
        slideDirection > 0
          ? 34
          : -34,
    }),

    center: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.58,
        ease: smoothEase,
      },
    },

    exit: (
      slideDirection: Direction,
    ) => ({
      opacity: 0,

      x:
        slideDirection > 0
          ? -30
          : 30,

      transition: {
        duration: 0.42,
        ease: smoothEase,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden

        bg-[#F5F9FD]

        py-14

        sm:py-16
        md:py-20
        lg:py-24
        xl:py-[100px]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              145deg,
              #F8FBFF 0%,
              #F1F7FD 45%,
              #F7FBFF 100%
            )
          `,
        }}
      />

      {/* top divider */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-[#D7E5F1]
          to-transparent
        "
      />

      {/* left glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -left-[220px]
          top-[120px]

          h-[450px]
          w-[450px]

          rounded-full

          bg-[#D9ECFF]/65

          blur-[130px]
        "
      />

      {/* right glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-[240px]
          bottom-[-40px]

          h-[480px]
          w-[480px]

          rounded-full

          bg-[#E1F0FF]/70

          blur-[140px]
        "
      />

      {/* subtle technical grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.28]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(31,103,161,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(31,103,161,.035) 1px,
              transparent 1px
            )
          `,

          backgroundSize:
            "54px 54px",

          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 2%, black 18%, black 82%, transparent 100%)",

          maskImage:
            "linear-gradient(to bottom, transparent 2%, black 18%, black 82%, transparent 100%)",
        }}
      />

      {/* =====================================================
          WHOLE SECTION ENTRANCE
      ===================================================== */}

      <motion.div
        variants={
          reduceMotion
            ? undefined
            : sectionReveal
        }
        initial={
          reduceMotion
            ? false
            : "hidden"
        }
        whileInView={
          reduceMotion
            ? undefined
            : "visible"
        }
        viewport={{
          once: true,
          amount: 0.12,
        }}
        style={{
          willChange:
            reduceMotion
              ? "auto"
              : "transform, opacity",
        }}
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

          px-5

          sm:px-7

          lg:px-8

          xl:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : headerContainer
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            reduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mb-9

            md:mb-11

            lg:mb-12
          "
        >
          {/* eyebrow */}

          <motion.div
            variants={
              reduceMotion
                ? undefined
                : headerItem
            }
            className="
              mb-4

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8

                bg-[#1579E6]
              "
            />

            <span
              className="
                text-[9.5px]
                font-bold
                uppercase

                tracking-[0.22em]

                text-[#1579E6]

                sm:text-[10px]
              "
            >
              Expert Guides
            </span>
          </motion.div>

          <div
            className="
              grid
              grid-cols-1

              gap-4

              md:grid-cols-[1fr_0.75fr]
              md:items-end
              md:gap-8

              lg:gap-12
            "
          >
            <motion.h2
              variants={
                reduceMotion
                  ? undefined
                  : headerItem
              }
              className="
                max-w-[670px]

                text-[30px]
                font-semibold

                leading-[1.08]
                tracking-[-0.045em]

                text-[#102A43]

                sm:text-[38px]

                lg:text-[45px]

                xl:text-[50px]
              "
            >
              Stay Informed.{" "}

              <span
                className="
                  text-[#1579E6]
                "
              >
                Stay Compliant.
              </span>
            </motion.h2>

            <motion.div
              variants={
                reduceMotion
                  ? undefined
                  : headerItem
              }
              className="
                md:ml-auto
                md:max-w-[430px]
              "
            >
              <p
                className="
                  text-[12.5px]
                  leading-[1.75]

                  text-[#6B7D8C]

                  sm:text-[14px]

                  lg:text-[15px]
                "
              >
                Practical guides on GST,
                company registration,
                income tax and business
                compliance, written by
                our CA team for Indian
                entrepreneurs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            CARD AREA
        ================================================= */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : cardAreaReveal
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            reduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.14,
          }}
        >
          {/* =================================================
              MOBILE
              ONE CARD
          ================================================= */}

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
                () =>
                  setIsPaused(
                    false,
                  ),
                800,
              );
            }}
          >
            <div
              className="
                overflow-hidden
              "
            >
              <AnimatePresence
                mode="wait"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={`mobile-${activeIndex}`}
                  custom={direction}
                  variants={
                    slideVariants
                  }
                  initial={
                    reduceMotion
                      ? false
                      : "enter"
                  }
                  animate="center"
                  exit={
                    reduceMotion
                      ? undefined
                      : "exit"
                  }
                  style={{
                    willChange:
                      reduceMotion
                        ? "auto"
                        : "transform, opacity",
                  }}
                  className="
                    transform-gpu
                  "
                >
                  <BlogCard
                    guide={
                      guides[
                        activeIndex
                      ]
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <SliderControls
              activeIndex={
                activeIndex
              }
              previousSlide={
                previousSlide
              }
              nextSlide={
                nextSlide
              }
              setActiveIndex={
                goToSlide
              }
            />
          </div>

          {/* =================================================
              TABLET
              TWO CARDS
          ================================================= */}

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
            <div
              className="
                overflow-hidden
              "
            >
              <AnimatePresence
                mode="wait"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={`tablet-${activeIndex}`}
                  custom={direction}
                  variants={
                    slideVariants
                  }
                  initial={
                    reduceMotion
                      ? false
                      : "enter"
                  }
                  animate="center"
                  exit={
                    reduceMotion
                      ? undefined
                      : "exit"
                  }
                  style={{
                    willChange:
                      reduceMotion
                        ? "auto"
                        : "transform, opacity",
                  }}
                  className="
                    transform-gpu

                    grid
                    grid-cols-2

                    items-stretch

                    gap-5

                    lg:gap-6
                  "
                >
                  {tabletGuides.map(
                    (
                      guide,
                      index,
                    ) => (
                      <div
                        key={`${activeIndex}-${guide.id}-${index}`}
                        className="
                          h-full
                        "
                      >
                        <BlogCard
                          guide={
                            guide
                          }
                        />
                      </div>
                    ),
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <SliderControls
              activeIndex={
                activeIndex
              }
              previousSlide={
                previousSlide
              }
              nextSlide={
                nextSlide
              }
              setActiveIndex={
                goToSlide
              }
            />
          </div>

          {/* =================================================
              DESKTOP
              THREE CARDS
          ================================================= */}

          <div
            className="
              hidden

              xl:grid
              xl:grid-cols-3

              xl:items-stretch

              xl:gap-6
            "
          >
            {guides.map(
              (
                guide,
                index,
              ) => (
                <motion.div
                  key={guide.id}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration:
                      reduceMotion
                        ? 0
                        : 0.7,

                    delay:
                      index *
                      0.08,

                    ease:
                      smoothEase,
                  }}
                  className="
                    h-full
                  "
                >
                  <BlogCard
                    guide={guide}
                  />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration:
              reduceMotion
                ? 0
                : 0.75,

            ease: smoothEase,
          }}
          className="
            mt-9

            flex
            flex-col

            gap-5

            border-t
            border-[#DCE7F0]

            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-11
            lg:pt-7
          "
        >
          <div>
            <p
              className="
                text-[12.5px]
                font-semibold

                text-[#173750]

                sm:text-[13px]
              "
            >
              Practical knowledge for
              smarter business decisions.
            </p>

            <p
              className="
                mt-1

                text-[10.5px]
                leading-5

                text-[#84939D]

                sm:text-[11px]
              "
            >
              Explore our complete
              collection of tax and
              compliance resources.
            </p>
          </div>

          <Link
            href="/blogs"
            className="
              group/all
              relative

              inline-flex

              w-full
              items-center
              justify-center

              gap-2.5

              overflow-hidden

              rounded-full

              border
              border-[#1579E6]

              bg-transparent

              px-5
              py-3

              text-[11px]
              font-semibold

              text-[#1579E6]

              transition-all
              duration-400

              hover:text-white
              hover:shadow-[0_12px_28px_-14px_rgba(21,121,230,0.44)]

              sm:w-auto
              sm:px-6
              sm:text-[12px]
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute
                inset-0

                -translate-x-[102%]

                bg-[#1579E6]

                transition-transform
                duration-400

                ease-[cubic-bezier(0.16,1,0.3,1)]

                group-hover/all:translate-x-0
              "
            />

            <span
              className="
                relative
                z-10
              "
            >
              Browse All Tax & Business
              Guides
            </span>

            <span
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover/all:translate-x-1
              "
            >
              <ArrowRight />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}