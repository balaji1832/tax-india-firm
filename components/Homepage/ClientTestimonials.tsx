"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ======================================================
   TYPES
====================================================== */

type Review = {
  id: number;
  name: string;
  source: string;
  rating: number;
  text: string;
};

/* ======================================================
   REVIEW DATA
====================================================== */

const reviews: Review[] = [
  {
    id: 1,
    name: "Anand Valli",
    source: "Google",
    rating: 5,
    text: "Timely, professional and thorough. Tax India Firm handled our Pvt Ltd registration and GST filing without a single follow-up needed from our side. Completely reliable.",
  },
  {
    id: 2,
    name: "Shaik Liswood",
    source: "Google",
    rating: 5,
    text: "Best consultants in Chennai. They completed the work on time. Good team work and excellent follow-through. Highly recommend for any company registration or GST work.",
  },
  {
    id: 3,
    name: "Mavika Tech Malu",
    source: "Google",
    rating: 5,
    text: "Excellent service from start to finish. Their team explained every step of our company compliance clearly. As a startup, having a CA firm that actually communicates makes all the difference.",
  },
];

/* ======================================================
   GOOGLE ICON
====================================================== */

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.19c0-.73-.07-1.43-.19-2.1H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.57h3.14c1.84-1.69 2.91-4.19 2.91-7.37Z"
      />

      <path
        fill="#34A853"
        d="M12 21.7c2.63 0 4.84-.87 6.45-2.36l-3.14-2.57c-.87.59-1.99.94-3.31.94-2.54 0-4.69-1.71-5.46-4.01H3.29v2.65A9.74 9.74 0 0 0 12 21.7Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 13.7a5.86 5.86 0 0 1 0-3.74V7.31H3.29a9.74 9.74 0 0 0 0 9.04l3.25-2.65Z"
      />

      <path
        fill="#EA4335"
        d="M12 5.95c1.43 0 2.71.49 3.72 1.45l2.79-2.79A9.34 9.34 0 0 0 12 2a9.74 9.74 0 0 0-8.71 5.31l3.25 2.65C7.31 7.66 9.46 5.95 12 5.95Z"
      />
    </svg>
  );
}

/* ======================================================
   STAR ICON
====================================================== */

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.463c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.036a1 1 0 0 0-1.175 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.973 8.72c-.783-.57-.38-1.81.588-1.81h3.463a1 1 0 0 0 .951-.69l1.074-3.292Z" />
    </svg>
  );
}

/* ======================================================
   QUOTE ICON
====================================================== */

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 42 32"
      fill="none"
      className="h-7 w-9 sm:h-8 sm:w-10"
      aria-hidden="true"
    >
      <path
        d="M0 32V20.6C0 13.5 1.8 8.3 5.4 5C8.1 2.5 11.6.9 15.9.2v6.1c-2.7.6-4.7 1.7-5.9 3.4-1.2 1.6-1.9 3.8-2 6.4h8V32H0Zm25.5 0V20.6c0-7.1 1.8-12.3 5.4-15.6 2.7-2.5 6.2-4.1 10.5-4.8v6.1c-2.7.6-4.7 1.7-5.9 3.4-1.2 1.6-1.9 3.8-2 6.4h8V32h-16Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ======================================================
   ARROW ICON
====================================================== */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ======================================================
   SLIDER ARROW
====================================================== */

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
          ? "Previous testimonial"
          : "Next testimonial"
      }
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#DDE3E8]
        bg-white
        text-[#2d8cff]
        shadow-[0_6px_18px_rgba(17,24,39,0.06)]
        transition-all
        duration-300
        hover:border-[#2d8cff]
        hover:bg-[#2d8cff]
        hover:text-white
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-4 w-4 ${
          direction === "left" ? "rotate-180" : ""
        }`}
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ======================================================
   REVIEW CARD

   The props are explicitly typed here.
   This fixes review.name / review.source / review.rating
   TypeScript errors.
====================================================== */

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-full
        min-h-[340px]
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#E1E5E9]
        bg-white
        p-6
        shadow-[0_14px_38px_rgba(17,24,39,0.06)]
        transition-shadow
        duration-500

        hover:shadow-[0_22px_50px_rgba(17,24,39,0.10)]

        sm:min-h-[355px]
        md:min-h-[375px]
        lg:min-h-[365px]
        sm:p-7

        xl:p-8
      "
    >
      {/* top hover line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-[#2d8cff]
          via-[#87BCFF]
          to-[#2d8cff]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* top */}

      <div className="mb-6 flex items-start justify-between">
        <div
          className="
            text-[#D4D9DE]
            transition-colors
            duration-300
            group-hover:text-[#2d8cff]
          "
        >
          <QuoteIcon />
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#E2E6EA]
            bg-[#F7F8F9]
            px-3
            py-1.5
          "
        >
          <GoogleIcon size={18} />

          <span className="text-[11px] font-medium text-[#626B74]">
            {review.source}
          </span>
        </div>
      </div>

      {/* review text */}

      <blockquote className="flex flex-1">
        <p
          className="
            text-[14px]
            italic
            leading-[1.85]
            text-[#555F69]

            sm:text-[14px]
            sm:leading-[1.9]

            xl:text-base
          "
        >
          “{review.text}”
        </p>
      </blockquote>

      {/* line */}

      <div className="my-6 h-px w-full bg-[#E5E8EB]" />

      {/* reviewer */}

      <div
        className="
          flex
          flex-col
          gap-3

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <h3
            className="
              text-[15px]
              font-semibold
              tracking-[-0.01em]
              text-[#1B2633]

              sm:text-base
            "
          >
            {review.name}
          </h3>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-xs text-[#8A939C]">
              {review.source}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C8CDD2]" />

            <span className="text-xs font-medium text-[#2d8cff]">
              {review.rating}/5
            </span>
          </div>
        </div>

        {/* stars */}

        <div
          className="flex items-center gap-[2px] text-[#F7B928]"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: review.rating }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ======================================================
   MAIN COMPONENT
====================================================== */

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionInView = useInView(sectionRef, {
    amount: 0.18,
    margin: "0px 0px -8% 0px",
  });

  const reduceMotion = useReducedMotion();

  /* ====================================================
     AUTO SLIDER

     Important:
     - does not run while this section is off-screen
     - does not run while user is interacting
     - avoids changing the active card before the user
       actually reaches this section
  ==================================================== */

  useEffect(() => {
    if (!isSectionInView || isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isSectionInView, isPaused]);

  /* ====================================================
     PREVIOUS
  ==================================================== */

  const previousSlide = () => {
    setActiveIndex((previous) =>
      previous === 0 ? reviews.length - 1 : previous - 1
    );
  };

  /* ====================================================
     NEXT
  ==================================================== */

  const nextSlide = () => {
    setActiveIndex((previous) => (previous + 1) % reviews.length);
  };

  /* ====================================================
     TABLET TWO CARDS

     Example:
     active 0 -> 0 + 1
     active 1 -> 1 + 2
     active 2 -> 2 + 0
  ==================================================== */

  const tabletReviews: Review[] = [
    reviews[activeIndex],
    reviews[(activeIndex + 1) % reviews.length],
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =================================================
          SUBTLE BLACK BOXED PATTERN — WHITE BASE
      ================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[8%] h-[150px] w-[34%] rounded-[28px] border border-black/[0.035] bg-black/[0.018]" />
        <div className="absolute right-[3%] top-[18%] h-[220px] w-[28%] rounded-[30px] border border-black/[0.04] bg-black/[0.022]" />
        <div className="absolute left-[10%] top-[47%] h-[180px] w-[26%] rounded-[28px] border border-black/[0.03] bg-black/[0.014]" />
        <div className="absolute right-[10%] bottom-[7%] h-[150px] w-[40%] rounded-[28px] border border-black/[0.035] bg-black/[0.018]" />
        <div className="absolute left-1/2 top-[38%] h-[420px] w-[72%] -translate-x-1/2 rounded-[44px] bg-black/[0.012] blur-[1px]" />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5

          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =================================================
            TITLE
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.42,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-[760px]
            text-center

            sm:mb-14
            lg:mb-16
          "
        >
          {/* label */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-7 bg-[#2d8cff]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#2d8cff]

                sm:text-xs
              "
            >
              Client Reviews
            </span>

            <span className="h-px w-7 bg-[#2d8cff]" />
          </motion.div>

          {/* heading */}

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: reduceMotion ? 0 : 1.15,
              delay: reduceMotion ? 0 : 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[25px]
              font-semibold
              leading-[1.18]
              tracking-[-0.03em]
              text-[#172536]

              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[40px]
            "
          >
            What Business Owners in{" "}
            <span className="relative inline-block text-[#2d8cff]">
              Chennai
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.0,
                  delay: reduceMotion ? 0 : 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: "left center" }}
                className="
                  absolute
                  -bottom-[2px]
                  left-0
                  -z-[1]
                  h-[7px]
                  w-full
                  rounded-full
                  bg-[#2d8cff]/15
                "
              />
            </span>{" "}
            Say About Us.
          </motion.h2>

          {/* sub heading */}

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: reduceMotion ? 0 : 1.05,
              delay: reduceMotion ? 0 : 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto
              mt-5
              max-w-[640px]
              text-[13px]
              leading-6
              text-[#727E8A]

              sm:text-[15px]
              sm:leading-7

              lg:text-[14px]
              lg:leading-8
            "
          >
            Real Google reviews from real clients, businesses we've helped
            register, file and stay compliant across Tamil Nadu.
          </motion.p>
        </motion.div>

        {/* =================================================
            MOBILE SLIDER
            less than 768px
        ================================================== */}

        <div
          className="md:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            window.setTimeout(() => setIsPaused(false), 900);
          }}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`mobile-${activeIndex}`}
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
                  duration: reduceMotion ? 0 : 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-h-[370px] sm:min-h-[390px]"
              >
                <ReviewCard review={reviews[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* mobile controls */}

          <SliderControls
            activeIndex={activeIndex}
            previousSlide={previousSlide}
            nextSlide={nextSlide}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* =================================================
            TABLET SLIDER
            768px -> 1023px
        ================================================== */}

        <div
          className="hidden md:block lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`tablet-${activeIndex}`}
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
                  duration: reduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid min-h-[375px] grid-cols-2 gap-7"
              >
                {tabletReviews.map((review, index) => (
                  <ReviewCard
                    key={`${review.id}-${activeIndex}-${index}`}
                    review={review}
                  />
                ))}
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

        {/* =================================================
            DESKTOP GRID
            1024px +
        ================================================== */}

        <div
          className="
            hidden
            grid-cols-3
            gap-7

            lg:grid

            xl:gap-8
            2xl:gap-9
          "
        >
          {reviews.map((review) => (
            <div key={review.id} className="h-full">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-6
            rounded-[22px]
            border
            border-black/[0.07]
            bg-[#F1F2F3]
            px-5
            py-6
            backdrop-blur-sm

            sm:px-7

            md:flex-row
            md:justify-between

            lg:mt-18
            lg:px-9
          "
        >
          {/* left */}

          <div
            className="
              flex
              items-center
              gap-4
              text-center

              md:text-left
            "
          >
            <div
              className="
                hidden
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-[0_6px_20px_rgba(17,24,39,0.08)]

                sm:flex
              "
            >
              <GoogleIcon size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#1D2732] sm:text-[15px]">
                Trusted by businesses across Chennai
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-[#6E7882]

                  sm:text-sm
                "
              >
                Discover more experiences directly on our Google Business
                Profile.
              </p>
            </div>
          </div>

          {/* only this CTA opens new tab */}

          <a
            href="https://g.page/taxindiafirm/review"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-2.5
              rounded-full
              bg-[#2d8cff]
              px-6
              py-3.5
              text-[13px]
              font-medium
              text-white
              shadow-[0_10px_28px_rgba(45,140,255,0.22)]
              transition-all
              duration-300

              hover:-translate-y-[2px]
              hover:bg-[#247FE8]
              hover:shadow-[0_14px_34px_rgba(45,140,255,0.28)]

              sm:w-auto
              sm:text-sm
            "
          >
            Read All Google Reviews
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   SLIDER CONTROLS
====================================================== */

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
        <SliderArrow direction="left" onClick={previousSlide} />

        <SliderArrow direction="right" onClick={nextSlide} />
      </div>

      {/* dots */}

      <div className="flex items-center gap-2">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className="
              relative
              flex
              h-4
              items-center
              justify-center
            "
          >
            <motion.span
              animate={{
                width: activeIndex === index ? 28 : 7,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
                block
                h-[7px]
                rounded-full
                ${
                  activeIndex === index
                    ? "bg-[#2d8cff]"
                    : "bg-[#D7E7FA]"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Google indicator */}

      <div
        className="
          flex
          h-10
          min-w-10
          items-center
          justify-center
          rounded-full
          border
          border-[#DFE4E9]
          bg-white
        "
      >
        <GoogleIcon size={18} />
      </div>
    </div>
  );
}