"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const videoReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

const points = [
  "Clear guidance from experienced professionals",
  "End-to-end support for registrations and filings",
  "Simple process with transparent communication",
];

type VideoSectionProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export default function VideoSection({
  videoSrc = "/videos/taxindia-intro.mp4",
  posterSrc = "/images/video-poster.jpg",
}: VideoSectionProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setStarted(true);
      setIsPlaying(true);
    } catch {
      // Browser blocked autoplay/play; native controls remain available.
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void handlePlay();
    } else {
      handlePause();
    }
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[360px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-[#EAF6FF]
          opacity-45
          blur-3xl
        "
      />

      <motion.div
        variants={sectionContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
          margin: "0px 0px -8% 0px",
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1320px]
          grid-cols-1
          items-center
          gap-10

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-14

          xl:gap-20
        "
      >
        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="min-w-0">
          <motion.div
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#DCEBF7]
              bg-[#F3F9FE]
              px-3.5
              py-2
              font-body
              text-[11px]
              font-semibold
               text-[#2563EB]

              sm:text-[12px]
            "
          >
            <PlayMiniIcon className="h-[14px] w-[14px]" />
            See How We Work
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              mt-5
              max-w-[620px]
              font-heading
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#173A56]

              min-[420px]:text-[33px]

              sm:text-[38px]

              md:text-[42px]

              lg:text-[46px]
            "
          >
            Business, tax and compliance support made{" "}
            <span className="text-[#2D8CFF]">simple.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              max-w-[590px]
              font-body
              text-[14px]
              leading-7
              text-[#61788A]

              sm:text-[15px]
              sm:leading-7
            "
          >
            See how Tax India Firm helps businesses move from documentation to
            registration, filing and ongoing compliance with a clear,
            professional process.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 space-y-3.5">
            {points.map((point) => (
              <div
                key={point}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-[2px]
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF6FF]
                    text-[#0B72C5]
                  "
                >
                  <CheckIcon className="h-[13px] w-[13px]" />
                </span>

                <p
                  className="
                    font-body
                    text-[13px]
                    leading-6
                    text-[#496579]

                    sm:text-[14px]
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </motion.div>

          
        </div>

        {/* =====================================================
            VIDEO CARD
        ===================================================== */}

        <motion.div
          variants={videoReveal}
          className="
            relative
            min-w-0
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#DDE7EF]
              bg-white
              shadow-[0_24px_60px_rgba(22,70,106,0.12)]

              sm:rounded-[28px]
            "
          >
            {/* top bar */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#E6EDF3]
                bg-[#F8FAFC]
                px-4
                py-3

                sm:px-5
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#B8C4CE]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#C7D1D9]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DFE5]" />
              </div>

              <span
                className="
                  font-body
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  text-[#7B8B99]

                  sm:text-[11px]
                "
              >
                Tax India Firm
              </span>
            </div>

            {/* actual video */}

            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                bg-[#081723]
              "
            >
              <video
                ref={videoRef}
                poster={posterSrc}
                preload="metadata"
                playsInline
                controls={started}
                onPlay={() => {
                  setStarted(true);
                  setIsPlaying(true);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={started ? handleVideoClick : undefined}
                className="
                  h-full
                  w-full
                  object-cover
                "
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!started && (
                <>
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#071827]/15
                    "
                  />

                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play introduction video"
                    className="
                      group
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-[66px]
                      w-[66px]
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/55
                      bg-white
                      text-[#0B72C5]
                      shadow-[0_14px_38px_rgba(0,0,0,0.24)]
                      transition-all
                      duration-500
                      ease-out

                      hover:scale-105
                      hover:bg-[#0B72C5]
                      hover:text-white

                      sm:h-[74px]
                      sm:w-[74px]
                    "
                  >
                    <PlayIcon
                      className="
                        ml-[3px]
                        h-[22px]
                        w-[22px]

                        sm:h-[25px]
                        sm:w-[25px]
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[-10px]
                        rounded-full
                        border
                        border-white/25
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </button>
                </>
              )}

              {started && !isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Resume video"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-14
                    w-14
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    text-[#0B72C5]
                    shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                >
                  <PlayIcon className="ml-[2px] h-5 w-5" />
                </button>
              )}
            </div>

            {/* lower caption */}

            <div
              className="
                flex
                flex-col
                gap-3
                border-t
                border-[#E6EDF3]
                bg-white
                px-4
                py-4

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-5
              "
            >
              <div>
                <p className="font-heading text-[13px] font-semibold text-[#173A56] sm:text-[14px]">
                  Your business journey, simplified
                </p>

                <p className="mt-1 font-body text-[10.5px] text-[#748898] sm:text-[11px]">
                  Registration • Taxation • Compliance • Legal
                </p>
              </div>

              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border border-[#DDEAF4] bg-[#F2F8FC]
                  px-3
                  py-2
                  font-body
                  text-[10.5px]
                  font-medium
                  text-[#47677F]
                "
              >
                <ShieldIcon className="h-[13px] w-[13px] text-[#0B72C5]" />
                Professional support
              </div>
            </div>
          </div>

          {/* floating accent card */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-5
              -left-4
              hidden
              rounded-[16px]
              border
              border-[#DDE9F2]
              bg-white
              px-4
              py-3
              shadow-[0_16px_40px_rgba(24,71,105,0.13)]

              xl:block
            "
          >
            
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p
        className="
          font-heading
          text-[18px]
          font-bold
          leading-none
          text-[#173A56]

          sm:text-[20px]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          font-body
          text-[10.5px]
          text-[#7A8C9A]

          sm:text-[11px]
        "
      >
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 5.5L18 12L8 18.5V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayMiniIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 8.8L15.2 12L10 15.2V8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 12.5L10 16.5L18 8.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.4 16.3 19.1 12 21C7.7 19.1 5 15.4 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12L10.8 14.3L15.6 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M3 19C3.4 15.8 5.5 14 9 14C12.5 14 14.6 15.8 15 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M15 5.5C17 5.6 18.4 7 18.4 8.8C18.4 10.5 17.2 11.8 15.4 12.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M17 14.5C19.4 15.1 20.7 16.6 21 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}