"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   ONLINE PROFILE IMAGES
========================================================= */

const avatars = [
  {
    src: "https://images.latestaiprompts.com/blog/ai-image-prompts-for-profile-picture/professional-corporate-dp.webp",
    alt: "Indian professional consultant",
    position:
      "left-[4%] top-[15%] sm:left-[5%] sm:top-[16%] lg:left-[7%] lg:top-[17%]",
    size: "h-[52px] w-[52px] sm:h-[62px] sm:w-[62px]",
    duration: 7.2,
    delay: 0,
    x: 5,
    y: 10,
  },

  {
    src: "https://i.pinimg.com/736x/26/1d/09/261d09ebc9989a2dd442152d89c4d54f.jpg?nii=t",
    alt: "Indian female business professional",
    position:
      "left-[23%] top-[6%] hidden sm:block lg:left-[22%] lg:top-[7%]",
    size: "h-[58px] w-[58px] lg:h-[68px] lg:w-[68px]",
    duration: 8.4,
    delay: 0.5,
    x: -6,
    y: 9,
  },

  {
    src: "https://distil.webcraftstudio.site/indian-male-entrepreneur-ceo-professional-headshot.jpg",
    alt: "Indian business professional",
    position:
      "right-[21%] top-[8%] hidden sm:block lg:right-[22%] lg:top-[8%]",
    size: "h-[54px] w-[54px] lg:h-[64px] lg:w-[64px]",
    duration: 7.8,
    delay: 1,
    x: 6,
    y: -9,
  },

  {
    src: "https://images.squarespace-cdn.com/content/v1/560f4999e4b09e1a44e8acea/1449559953594-DAUKUIRGB2XB0YEC01MA/_RMK2882-Edit.jpg",
    alt: "Indian business consultant",
    position:
      "right-[4%] top-[18%] sm:right-[5%] lg:right-[7%] lg:top-[18%]",
    size: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]",
    duration: 9,
    delay: 0.2,
    x: -5,
    y: 10,
  },

  {
    src: "https://newhouse.syracuse.edu/wp-content/uploads/2025/05/Unknown.jpeg",
    alt: "Indian female tax professional",
    position:
      "left-[9%] top-[54%] hidden md:block lg:left-[11%] lg:top-[53%]",
    size: "h-[56px] w-[56px] lg:h-[66px] lg:w-[66px]",
    duration: 8.6,
    delay: 1.1,
    x: 8,
    y: -8,
  },

  {
    src: "https://irp.cdn-website.com/51b8b04e/dms3rep/multi/Dilip-Gupta.jpg",
    alt: "Indian chartered accountant",
    position:
      "right-[9%] top-[52%] hidden md:block lg:right-[11%] lg:top-[52%]",
    size: "h-[56px] w-[56px] lg:h-[66px] lg:w-[66px]",
    duration: 7.4,
    delay: 0.8,
    x: -7,
    y: -10,
  },

  {
    src: "https://static.toiimg.com/thumb/imgsize-23456%2Cmsid-65652539%2Cwidth-600%2Cresizemode-4/65652539.jpg",
    alt: "Indian female professional advisor",
    position:
      "left-[4%] bottom-[12%] sm:left-[6%] sm:bottom-[12%] lg:left-[7%]",
    size: "h-[46px] w-[46px] sm:h-[56px] sm:w-[56px]",
    duration: 8,
    delay: 0.3,
    x: 5,
    y: -8,
  },

  {
    src: "https://dvco.co.in/admin/img/associates/WhatsApp%20Image%202025-10-09%20at%2011.35.55%20AM_1759990161.jpeg",
    alt: "Indian business advisor",
    position:
      "left-[27%] bottom-[7%] hidden sm:block lg:left-[26%]",
    size: "h-[62px] w-[62px] lg:h-[72px] lg:w-[72px]",
    duration: 9.3,
    delay: 0.6,
    x: -7,
    y: 9,
  },

  {
    src: "https://i.pinimg.com/736x/26/1d/09/261d09ebc9989a2dd442152d89c4d54f.jpg?nii=t",
    alt: "Indian female tax consultant",
    position:
      "right-[28%] bottom-[8%] hidden sm:block lg:right-[27%]",
    size: "h-[54px] w-[54px] lg:h-[64px] lg:w-[64px]",
    duration: 7.7,
    delay: 1.4,
    x: 7,
    y: 8,
  },

  {
    src: "https://images.latestaiprompts.com/blog/ai-image-prompts-for-profile-picture/professional-corporate-dp.webp",
    alt: "Indian professional consultant",
    position:
      "right-[4%] bottom-[13%] sm:right-[6%] lg:right-[7%]",
    size: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]",
    duration: 8.8,
    delay: 0.9,
    x: -6,
    y: -10,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FinalCtaBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        px-4
        py-10

        sm:px-6
        sm:py-12

        lg:px-8
        lg:py-16
      "
    >
      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{
          once: true,
          amount: 0.14,
          margin: "0px 0px -7% 0px",
        }}
        className="
          relative
          mx-auto

          flex
          min-h-[500px]
          w-full
          max-w-[1420px]

          items-center
          justify-center

          overflow-hidden

          rounded-[28px]

          border
          border-[#E8ECF1]

          bg-[#F7F8F8]

          px-5
          py-[120px]

          shadow-[0_28px_80px_-58px_rgba(18,38,63,0.32)]

          sm:min-h-[540px]
          sm:rounded-[34px]
          sm:px-8
          sm:py-[130px]

          lg:min-h-[570px]
          lg:rounded-[40px]
          lg:px-10
          lg:py-[100px]
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
              radial-gradient(
                circle at 50% 46%,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0.80) 24%,
                rgba(247,248,248,0) 57%
              )
            `,
          }}
        />

        {/* blue subtle center glow */}

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.06, 0.11, 0.06],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            h-[320px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#2563EB]

            blur-[120px]
          "
        />

        {/* =====================================================
            DECORATIVE THIN CIRCLES
        ===================================================== */}

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            h-[410px]
            w-[760px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-[50%]

            border
            border-[#2563EB]/[0.055]

            sm:h-[450px]
            sm:w-[920px]

            lg:h-[470px]
            lg:w-[1100px]
          "
        />

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            h-[310px]
            w-[620px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-[50%]

            border
            border-[#0F172A]/[0.035]

            sm:h-[350px]
            sm:w-[760px]

            lg:h-[370px]
            lg:w-[900px]
          "
        />

        {/* =====================================================
            FLOATING ONLINE PROFILE IMAGES
        ===================================================== */}

        {avatars.map((avatar, index) => (
          <FloatingAvatar
            key={`${avatar.src}-${index}`}
            avatar={avatar}
            reduceMotion={!!reduceMotion}
          />
        ))}

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-30

            mx-auto
            w-full
            max-w-[670px]

            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-[#DCE5F3]

              bg-white/90

              px-3.5
              py-2

              shadow-[0_8px_25px_-18px_rgba(15,23,42,0.25)]

              backdrop-blur-md
            "
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [0.65, 1, 0.65],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-[7px]
                w-[7px]

                rounded-full

                bg-[#2563EB]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase

                tracking-[0.14em]

                text-[#54657A]

                sm:text-[10.5px]
              "
            >
              Tax India Firm
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h2
            id="final-cta-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5

              max-w-[650px]

              text-[34px]
              font-semibold

              leading-[1.03]
              tracking-[-0.052em]

              text-[#0B1727]

              sm:text-[43px]

              md:text-[48px]

              lg:text-[52px]
            "
            style={{
              fontFamily:
                "var(--font-heading, ui-sans-serif, system-ui, sans-serif)",
            }}
          >
            Ready to make business
            <br className="hidden sm:block" />

            <span className="text-[#2563EB]">
              {" "}simpler?
            </span>
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-5

              max-w-[540px]

              text-[13.5px]
              leading-[1.75]

              text-[#697789]

              sm:text-[14.5px]

              lg:text-[15px]
            "
            style={{
              fontFamily:
                "var(--font-body, ui-sans-serif, system-ui, sans-serif)",
            }}
          >
            Speak directly with a Chartered Accountant.
            From registration and GST to tax, licenses and
            compliance, our team handles everything end to end.
          </motion.p>

          {/* =================================================
              TRUST ITEMS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              mt-6

              flex
              flex-wrap
              items-center
              justify-center

              gap-x-5
              gap-y-2.5
            "
          >
            <TrustItem>
              Free consultation
            </TrustItem>

            <TrustItem>
              300+ services
            </TrustItem>

            <TrustItem>
              CA-led support
            </TrustItem>
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              mt-7

              flex
              flex-col
              items-center
              justify-center

              gap-3

              sm:flex-row
            "
          >
            <Link
              href="/contact-us"
              className="
                group

                inline-flex
                min-h-[50px]

                w-full
                items-center
                justify-center

                gap-2

                rounded-full

                bg-[#111827]

                px-6
                py-3

                text-[13px]
                font-semibold

                !text-white

                shadow-[0_15px_30px_-16px_rgba(15,23,42,0.50)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-[2px]
                hover:bg-[#2563EB]
                hover:shadow-[0_18px_36px_-16px_rgba(37,99,235,0.52)]

                active:translate-y-0

                sm:w-auto
                sm:px-7
                sm:text-[14px]
              "
            >
              Get Started

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </Link>

            <Link
              href="/contact-us"
              className="
                inline-flex
                min-h-[50px]

                w-full
                items-center
                justify-center

                rounded-full

                border
                border-[#DCE2EA]

                bg-white

                px-6
                py-3

                text-[13px]
                font-semibold

                text-[#263648]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#C8D4E4]

                sm:w-auto
                sm:px-7
                sm:text-[14px]
              "
            >
              Talk to a CA
            </Link>
          </motion.div>

          {/* bottom mini text */}

          <motion.p
            variants={fadeUp}
            className="
              mt-5

              text-[10.5px]
              font-medium

              text-[#9AA4B1]

              sm:text-[11px] pt-5
            "
          >
            Monday to Saturday · 10:00 AM – 9:00 PM · Chennai
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   FLOATING AVATAR
========================================================= */

function FloatingAvatar({
  avatar,
  reduceMotion,
}: {
  avatar: {
    src: string;
    alt: string;
    position: string;
    size: string;
    duration: number;
    delay: number;
    x: number;
    y: number;
  };
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              x: [
                0,
                avatar.x,
                0,
                -avatar.x * 0.55,
                0,
              ],

              y: [
                0,
                -avatar.y,
                avatar.y * 0.35,
                -avatar.y * 0.45,
                0,
              ],

              rotate: [
                0,
                1.5,
                0,
                -1.2,
                0,
              ],
            }
      }
      transition={{
        duration: avatar.duration,
        delay: avatar.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-20

        ${avatar.position}

        will-change-transform
      `}
    >
      {/* soft pulse ring */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.14, 1],
                opacity: [0.3, 0.08, 0.3],
              }
        }
        transition={{
          duration: avatar.duration * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -inset-[7px]

          rounded-full

          border
          border-[#2563EB]/20
        "
      />

      {/* avatar */}

      <div
        className={`
          relative

          ${avatar.size}

          overflow-hidden

          rounded-full

          border-[3px]
          border-white

          bg-[#E9EDF2]

          shadow-[0_12px_32px_-12px_rgba(15,23,42,0.32)]

          transition-transform
          duration-300

          hover:scale-105
        `}
      >
        <img
          src={avatar.src}
          alt={avatar.alt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full

            select-none

            object-cover
          "
        />
      </div>

      {/* blue mini status dot */}

      <span
        className="
          absolute
          bottom-[2px]
          right-[1px]

          h-[10px]
          w-[10px]

          rounded-full

          border-2
          border-white

          bg-[#2563EB]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-1.5

        text-[10.5px]
        font-medium

        text-[#657486]

        sm:text-[11.5px]
      "
    >
      <span
        className="
          flex
          h-[18px]
          w-[18px]

          items-center
          justify-center

          rounded-full

          bg-[#E8F0FF]

          text-[#2563EB]
        "
      >
        <Check
          size={10}
          strokeWidth={2.5}
        />
      </span>

      {children}
    </span>
  );
}