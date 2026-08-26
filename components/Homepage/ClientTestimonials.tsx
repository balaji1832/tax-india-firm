"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type Review = {
  id: number;
  name: string;
  source: string;
  rating: number;
  text: string;
  image: string;
};

/* =========================================================
   REVIEWS
========================================================= */

const reviews: Review[] = [
  {
    id: 1,
    name: "Anand Valli",
    source: "Google",
    rating: 5,
    text:
      "Timely, professional and thorough. Tax India Firm handled our Pvt Ltd registration and GST filing without a single follow-up needed from our side. Completely reliable.",
    image:
      "https://images.latestaiprompts.com/blog/ai-image-prompts-for-profile-picture/professional-corporate-dp.webp",
  },

  {
    id: 2,
    name: "Shaik Liswood",
    source: "Google",
    rating: 5,
    text:
      "Best consultants in Chennai. They completed the work on time. Good team work and excellent follow-through. Highly recommend for any company registration or GST work.",
    image:
      "https://distil.webcraftstudio.site/indian-male-entrepreneur-ceo-professional-headshot.jpg",
  },

  {
    id: 3,
    name: "Mavika Tech Malu",
    source: "Google",
    rating: 5,
    text:
      "Excellent service from start to finish. Their team explained every step of our company compliance clearly. As a startup, having a CA firm that actually communicates makes all the difference.",
    image:
      "https://images.squarespace-cdn.com/content/v1/6932f22638bc0d25b7bee5ae/93f4d48a-62c3-4efa-a514-e8bfd49f35e0/SOC_1005.jpg?format=1000w",
  },
];

/* =========================================================
   MOTION
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.82,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   GOOGLE ICON
========================================================= */

function GoogleIcon({
  size = 18,
}: {
  size?: number;
}) {
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

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    amount: 0.14,
    margin: "0px 0px -7% 0px",
  });

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      !isInView ||
      isPaused
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % reviews.length,
      );
    }, 5400);

    return () =>
      window.clearInterval(timer);
  }, [
    reduceMotion,
    isInView,
    isPaused,
  ]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const previous = () => {
    setActiveIndex((current) =>
      current === 0
        ? reviews.length - 1
        : current - 1,
    );
  };

  const next = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % reviews.length,
    );
  };

  const selectReview = (
    id: number,
  ) => {
    const index = reviews.findIndex(
      (review) =>
        review.id === id,
    );

    if (index >= 0) {
      setActiveIndex(index);
    }
  };

  /* =======================================================
     PORTRAIT ORDER
  ======================================================= */

  const portraitOrder = useMemo(() => {
    const previousIndex =
      activeIndex === 0
        ? reviews.length - 1
        : activeIndex - 1;

    const nextIndex =
      (activeIndex + 1) %
      reviews.length;

    return [
      reviews[previousIndex],
      reviews[activeIndex],
      reviews[nextIndex],
    ];
  }, [activeIndex]);

  const activeReview =
    reviews[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        w-full
        overflow-hidden

        bg-[#FBFCFF]

        py-8

        
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

          bg-gradient-to-b
          from-white
          via-[#FBFCFF]
          to-[#F5F8FF]
        "
      />

      {/* soft center glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[35%]

          h-[300px]
          w-[760px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#4B86F7]/[0.045]

          blur-[105px]
        "
      />

      {/* =====================================================
          WAVE BACKGROUND
      ===================================================== */}

      <WaveBackground
        reduceMotion={
          !!reduceMotion
        }
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        variants={
          reduceMotion
            ? undefined
            : containerVariants
        }
        initial={
          reduceMotion
            ? false
            : "hidden"
        }
        whileInView={
          reduceMotion
            ? undefined
            : "show"
        }
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

          px-4

          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            max-w-[720px]

            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-[#3478F6]/15

              bg-[#F5F8FF]

              px-3
              py-1.5
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]

                rounded-full

                bg-[#3478F6]
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase

                tracking-[0.17em]

                text-[#3478F6]

                sm:text-[10px]
              "
            >
              Client Reviews
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              mt-4

              text-[28px]
              font-semibold

              leading-[1.08]
              tracking-[-0.045em]

              text-[#14243C]

              sm:text-[34px]
              md:text-[39px]
              lg:text-[42px]
            "
          >
            Honest Feedback From{" "}

            <span className="text-[#3478F6]">
              Valued Clients.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-3

              max-w-[570px]

              text-[12px]
              leading-[1.6]

              text-[#6A7890]

              sm:text-[13px]
            "
          >
            Real Google reviews from
            businesses we&apos;ve helped
            register, file and stay
            compliant across Tamil Nadu.
          </motion.p>
        </div>

        {/* =====================================================
            TESTIMONIAL
        ===================================================== */}

        <motion.div
          variants={fadeUp}
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
                setIsPaused(false),
              800,
            );
          }}
          className="
            mx-auto
            mt-8

            w-full
            max-w-[1120px]

            sm:mt-9
            lg:mt-10
          "
        >
          {/* =================================================
              MOBILE PORTRAITS
          ================================================= */}

          <div
            className="
              mb-4

              flex
              justify-center

              md:hidden
            "
          >
            <div
              className="
                flex
                h-[102px]

                w-full
                max-w-[320px]

                items-center
                justify-center

                gap-3.5
              "
            >
              {portraitOrder.map(
                (
                  review,
                  position,
                ) => (
                  <Portrait
                    key={
                      review.id
                    }
                    review={
                      review
                    }
                    active={
                      position === 1
                    }
                    mobile
                    reduceMotion={
                      !!reduceMotion
                    }
                    onClick={() =>
                      selectReview(
                        review.id,
                      )
                    }
                  />
                ),
              )}
            </div>
          </div>

          {/* =================================================
              MAIN CARD
          ================================================= */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[24px]

              border
              border-[#D6E1F3]

              bg-white

              shadow-[0_26px_62px_-42px_rgba(32,61,111,.30)]

              sm:rounded-[28px]

              lg:rounded-[30px]
            "
          >
            {/* soft card background */}

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
                    125deg,
                    #FFFFFF 0%,
                    #FCFDFF 52%,
                    #F3F7FF 100%
                  )
                `,
              }}
            />

            {/* soft glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -right-[100px]
                -top-[100px]

                h-[250px]
                w-[250px]

                rounded-full

                bg-[#3478F6]/[0.05]

                blur-[70px]
              "
            />

            {/* quote watermark */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                right-5
                top-[-28px]

                font-serif
                text-[120px]

                leading-none

                text-[#3478F6]/[0.03]

                sm:text-[145px]
              "
            >
              ”
            </div>

            {/* =================================================
                MOBILE
            ================================================= */}

            <div
              className="
                relative
                z-10

                block

                px-5
                py-5

                sm:px-6
                sm:py-6

                md:hidden
              "
            >
              <ReviewContent
                review={
                  activeReview
                }
                activeIndex={
                  activeIndex
                }
                reduceMotion={
                  !!reduceMotion
                }
              />
            </div>

            {/* =================================================
                DESKTOP
            ================================================= */}

            <div
              className="
                relative
                z-10

                hidden

                grid-cols-[125px_minmax(0,1fr)]

                items-center

                gap-7

                px-7
                py-6

                md:grid

                lg:grid-cols-[145px_minmax(0,1fr)]
                lg:gap-9
                lg:px-9
                lg:py-7

                xl:grid-cols-[155px_minmax(0,1fr)]
                xl:px-10
              "
            >
              {/* ===========================================
                  PORTRAITS
              =========================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    items-center
                    justify-center

                    gap-3
                  "
                >
                  {portraitOrder.map(
                    (
                      review,
                      position,
                    ) => (
                      <Portrait
                        key={
                          review.id
                        }
                        review={
                          review
                        }
                        active={
                          position === 1
                        }
                        reduceMotion={
                          !!reduceMotion
                        }
                        onClick={() =>
                          selectReview(
                            review.id,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              </div>

              {/* review */}

              <div className="min-w-0">
                <ReviewContent
                  review={
                    activeReview
                  }
                  activeIndex={
                    activeIndex
                  }
                  reduceMotion={
                    !!reduceMotion
                  }
                />
              </div>
            </div>

            {/* =================================================
                PROGRESS
            ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0

                h-[3px]

                bg-[#E4EAF4]
              "
            >
              {!reduceMotion &&
                !isPaused &&
                isInView && (
                  <motion.div
                    key={`progress-${activeIndex}`}
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 5.4,
                      ease: "linear",
                    }}
                    className="
                      h-full

                      bg-gradient-to-r
                      from-[#9BB8F6]
                      via-[#6694F4]
                      to-[#3478F6]
                    "
                  />
                )}
            </div>
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

          <div
            className="
              mt-4

              flex
              flex-col

              gap-3

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex
                justify-center

                gap-2

                sm:justify-start
              "
            >
              <ControlButton
                label="Previous review"
                onClick={previous}
              >
                <ArrowLeft
                  size={15}
                />
              </ControlButton>

              <ControlButton
                label="Next review"
                onClick={next}
              >
                <ArrowRight
                  size={15}
                />
              </ControlButton>
            </div>

            <a
              href="https://g.page/taxindiafirm/review"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                inline-flex
                min-h-[40px]

                w-full

                items-center
                justify-center

                gap-2

                rounded-full

                border
                border-[#D6DFED]

                bg-white

                px-4
                py-2

                text-[10.5px]
                font-semibold

                text-[#465875]

                shadow-[0_8px_20px_-18px_rgba(40,71,124,.3)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#3478F6]/40
                hover:text-[#3478F6]

                sm:w-auto
              "
            >
              <GoogleIcon
                size={15}
              />

              Read Google Reviews

              <ExternalLink
                size={11}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-[1px]
                  group-hover:-translate-y-[1px]
                "
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   REVIEW CONTENT
========================================================= */

function ReviewContent({
  review,
  activeIndex,
  reduceMotion,
}: {
  review: Review;
  activeIndex: number;
  reduceMotion: boolean;
}) {
  return (
    <div
      className="
        w-full
        min-w-0
      "
    >
      {/* =====================================================
          META
      ===================================================== */}

      <div
        className="
          flex
          flex-wrap

          items-center
          justify-between

          gap-3
        "
      >
        <div
          className="
            inline-flex
            items-center

            gap-2

            rounded-full

            border
            border-[#D7DFED]

            bg-white

            px-2.5
            py-1.5
          "
        >
          <GoogleIcon
            size={15}
          />

          <span
            className="
              text-[9px]
              font-semibold

              text-[#596980]

              sm:text-[9.5px]
            "
          >
            Google Review
          </span>
        </div>

        <span
          className="
            text-[8.5px]
            font-semibold

            tracking-[0.1em]

            text-[#8A97AA]
          "
        >
          {String(
            activeIndex + 1,
          ).padStart(2, "0")}

          <span
            className="
              mx-1.5
              text-[#B5BECF]
            "
          >
            /
          </span>

          {String(
            reviews.length,
          ).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          ONE RATING ONLY
      ===================================================== */}

      <div
        className="
          mt-3

          flex
          items-center

          gap-2
        "
      >
        <div
          className="
            inline-flex
            items-center

            gap-[2px]

            rounded-full

            border
            border-[#F0DDA8]

            bg-[#FFF9EB]

            px-2.5
            py-1.5
          "
        >
          {Array.from({
            length:
              review.rating,
          }).map(
            (_, index) => (
              <Star
                key={index}
                size={14}
                strokeWidth={1.35}
                fill="#F2CB72"
                className="
                  text-[#D9A83F]
                "
              />
            ),
          )}
        </div>

        <span
          className="
            text-[10px]
            font-semibold

            text-[#53627B]
          "
        >
          {review.rating}.0 / 5
        </span>
      </div>

      {/* =====================================================
          CHANGING CONTENT
      ===================================================== */}

      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={review.id}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={
            reduceMotion
              ? undefined
              : {
                  opacity: 0,
                  y: -10,
                }
          }
          transition={{
            duration:
              reduceMotion
                ? 0
                : 0.62,

            ease: smoothEase,
          }}
        >
          {/* =================================================
              QUOTE
          ================================================= */}

          <blockquote
            className="
              mt-4

              max-w-[800px]
            "
          >
            <p
              className="
                break-words

                text-[15px]
                font-medium

                leading-[1.48]
                tracking-[-0.022em]

                text-[#29384F]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[19px]
                lg:leading-[1.46]

                xl:text-[20px]
              "
            >
              “{review.text}”
            </p>
          </blockquote>

          {/* =================================================
              REVIEWER
          ================================================= */}

          <div
            className="
              mt-4

              border-t
              border-[#E0E6EF]

              pt-3.5
            "
          >
            <p
              className="
                text-[11.5px]
                font-semibold

                text-[#263850]

                sm:text-[12px]
              "
            >
              {review.name}
            </p>

            <div
              className="
                mt-1

                flex
                flex-wrap
                items-center

                gap-2

                text-[8.5px]

                text-[#7A8799]
              "
            >
              <span>
                {review.source}
              </span>

              <span
                className="
                  h-1
                  w-1

                  rounded-full

                  bg-[#A4AFBF]
                "
              />

              <span
                className="
                  font-semibold

                  text-[#3478F6]
                "
              >
                Verified feedback
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   PORTRAIT
========================================================= */

function Portrait({
  review,
  active,
  mobile = false,
  reduceMotion,
  onClick,
}: {
  review: Review;
  active: boolean;
  mobile?: boolean;
  reduceMotion: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      type="button"
      onClick={onClick}
      aria-label={`Show review from ${review.name}`}
      animate={{
        opacity:
          active
            ? 1
            : 0.56,

        scale:
          active
            ? 1
            : 0.91,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale:
                active
                  ? 1.035
                  : 0.95,
            }
      }
      transition={{
        layout: {
          duration:
            reduceMotion
              ? 0
              : 0.62,

          ease: smoothEase,
        },

        duration:
          reduceMotion
            ? 0
            : 0.3,
      }}
      className="
        relative
        shrink-0

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#3478F6]
        focus-visible:ring-offset-2
      "
    >
      {active && (
        <motion.span
          layoutId={
            mobile
              ? "active-mobile-review"
              : "active-desktop-review"
          }
          transition={{
            duration: 0.5,
            ease: smoothEase,
          }}
          className="
            absolute
            -inset-[4px]

            rounded-[19px]

            border-[2px]
            border-[#3478F6]

            shadow-[0_11px_28px_-14px_rgba(52,120,246,.48)]

            sm:rounded-[21px]
          "
        />
      )}

      <div
        className={`
          relative

          overflow-hidden

          bg-[#DEE4ED]

          transition-all
          duration-500

          ${
            mobile
              ? active
                ? `
                    h-[86px]
                    w-[70px]

                    rounded-[17px]

                    sm:h-[94px]
                    sm:w-[76px]
                  `
                : `
                    h-[58px]
                    w-[49px]

                    rounded-[14px]

                    sm:h-[64px]
                    sm:w-[54px]
                  `
              : active
                ? `
                    h-[108px]
                    w-[88px]

                    rounded-[20px]

                    lg:h-[114px]
                    lg:w-[94px]
                  `
                : `
                    h-[66px]
                    w-[56px]

                    rounded-[15px]

                    lg:h-[70px]
                    lg:w-[60px]
                  `
          }
        `}
      >
        <img
          src={review.image}
          alt="Professional client portrait"
          loading="lazy"
          decoding="async"
          draggable={false}
          referrerPolicy="no-referrer"
          className={`
            h-full
            w-full

            select-none
            object-cover

            transition-all
            duration-700

            ${
              active
                ? `
                    scale-[1.04]
                    grayscale-0
                  `
                : `
                    scale-100
                    grayscale
                  `
            }
          `}
        />
      </div>

      {active && (
        <motion.span
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          className="
            absolute
            -bottom-[4px]
            -right-[4px]

            h-[12px]
            w-[12px]

            rounded-full

            border-[3px]
            border-white

            bg-[#3478F6]
          "
        />
      )}
    </motion.button>
  );
}

/* =========================================================
   CONTROL BUTTON
========================================================= */

function ControlButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        h-9
        w-9

        items-center
        justify-center

        rounded-full

        border
        border-[#D4DEED]

        bg-white

        text-[#3478F6]

        transition-all
        duration-300

        hover:border-[#3478F6]
        hover:bg-[#3478F6]
        hover:text-white
      "
    >
      {children}
    </motion.button>
  );
}

/* =========================================================
   WAVE BACKGROUND
========================================================= */

function WaveBackground({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        absolute
        bottom-0
        left-0

        h-[22%]
        w-full

        sm:h-[24%]
        md:h-[27%]
        lg:h-[30%]
      "
    >
      {/* =====================================================
          LIGHT WAVE
      ===================================================== */}

      <motion.svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  -6,
                  8,
                  -6,
                ],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0

          h-full
          w-[102%]

          will-change-transform
        "
      >
        <path
          d="
            M0 210
            C320 300 610 325 865 275
            C1120 225 1310 140 1600 90
            L1600 400
            L0 400
            Z
          "
          fill="#DCE8FF"
        />
      </motion.svg>

      {/* =====================================================
          MID WAVE
      ===================================================== */}

      <motion.svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  6,
                  -7,
                  6,
                ],
              }
        }
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0

          h-full
          w-[102%]

          will-change-transform
        "
      >
        <path
          d="
            M0 240
            C325 320 615 342 875 288
            C1135 235 1320 160 1600 112
            L1600 400
            L0 400
            Z
          "
          fill="#A2C0FA"
        />
      </motion.svg>

      {/* =====================================================
          MAIN BLUE WAVE
      ===================================================== */}

      <motion.svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [
                  0,
                  3,
                  0,
                ],
              }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0

          h-full
          w-full

          will-change-transform
        "
      >
        <defs>
          <linearGradient
            id="testimonial-main-wave"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#5688EA"
            />

            <stop
              offset="52%"
              stopColor="#477BE3"
            />

            <stop
              offset="100%"
              stopColor="#386DD8"
            />
          </linearGradient>
        </defs>

        <path
          d="
            M0 266
            C330 337 620 357 890 301
            C1145 249 1330 182 1600 132
            L1600 400
            L0 400
            Z
          "
          fill="url(#testimonial-main-wave)"
        />
      </motion.svg>
    </div>
  );
}