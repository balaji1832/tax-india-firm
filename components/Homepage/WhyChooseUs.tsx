"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* =========================================================
   FEATURE DATA

   PUT YOUR ICONS HERE:
   public/images/why-choose-us/

   Example:
   public/images/why-choose-us/services.png
========================================================= */

const leftFeatures = [
  {
    id: 1,
    icon: "/icons/services.png",
    title: "300+ Services",
    description:
      "Relax at home while our experts take care of your tax and compliance requirements.",
  },
  {
    id: 2,
    icon: "/icons/reasonable.png",
    title: "Reasonable",
    description:
      "Professional services with transparent and affordable pricing.",
  },
  {
    id: 3,
    icon: "/icons/satisfaction.png",
    title: "Customer Satisfaction",
    description:
      "We prioritize client satisfaction and clear communication at every step.",
  },
];

const rightFeatures = [
  {
    id: 4,
    icon: "/icons/google-reviews.png",
    title: "Google Reviews",
    description:
      "Trusted by customers with consistently strong Google reviews and ratings.",
  },
  {
    id: 5,
    icon: "/icons/turnaround.png",
    title: "Turn Around Time",
    description:
      "Our process is designed to complete services within the committed timeline.",
  },
  {
    id: 6,
    icon: "/icons/compliance.png",
    title: "Compliance",
    description:
      "We help manage recurring compliance requirements and important due dates.",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      // Slightly slower stagger so every item has time to settle naturally.
      staggerChildren: 0.18,
      delayChildren: 0.16,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -22,
    y: 16,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.05,
      ease: PREMIUM_EASE,
    },
  },
};

const rightItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 22,
    y: 16,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.05,
      ease: PREMIUM_EASE,
    },
  },
};

const centerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.18,
      ease: PREMIUM_EASE,
    },
  },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
};

/* =========================================================
   FEATURE ITEM
========================================================= */

type FeatureItemProps = {
  icon: string;
  title: string;
  description: string;
  side: "left" | "right";
};

function FeatureItem({
  icon,
  title,
  description,
  side,
}: FeatureItemProps) {
  const isLeft = side === "left";
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        reduceMotion
          ? reducedItemVariants
          : isLeft
            ? leftItemVariants
            : rightItemVariants
      }
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{
        y: { duration: 0.52, ease: PREMIUM_EASE },
      }}
      className={`
        group relative flex w-full items-center gap-4
        rounded-[24px]
        border border-white/70
        bg-white/45
        px-4 py-4
        backdrop-blur-md
        transform-gpu
        will-change-transform
        transition-[border-color,background-color,box-shadow]
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:border-blue-200/90
        hover:bg-white/75
        hover:shadow-[0_20px_60px_rgba(24,57,108,0.09)]

        sm:gap-5
        sm:px-5
        sm:py-5

        lg:max-w-[390px]

        ${
          isLeft
            ? "lg:flex-row lg:text-right"
            : "lg:flex-row lg:text-left"
        }
      `}
    >
      {/* ======================================
          ICON

          These are your custom icon images.
      ====================================== */}

      <div
        className={`
          relative flex h-[62px] w-[62px] shrink-0
          items-center justify-center
          rounded-[19px]
          border border-white
          bg-white
          shadow-[0_10px_35px_rgba(25,62,118,0.08)]
          transform-gpu
          transition-transform duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-[1.06]

          sm:h-[68px]
          sm:w-[68px]

          ${isLeft ? "lg:order-2" : ""}
        `}
      >
        <div className="absolute inset-2 rounded-[14px] bg-gradient-to-br from-blue-50 to-indigo-50" />

        <Image
          src={icon}
          alt={title}
          width={46}
          height={46}
          className="
            relative z-10
            h-[40px]
            w-[40px]
            object-contain
            sm:h-[44px]
            sm:w-[44px]
          "
        />
      </div>

      {/* TEXT */}

      <div
        className={`
          min-w-0 flex-1
          ${isLeft ? "lg:order-1" : ""}
        `}
      >
        <h3
          className="
            text-[18px]
            font-bold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#10233D]
            sm:text-[20px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[13px]
            font-normal
            leading-[1.7]
            text-[#66758A]
            sm:text-[14px]
          "
        >
          {description}
        </p>
      </div>

      {/* HOVER LIGHT */}

      <div
        className="
          pointer-events-none
          absolute inset-x-7 bottom-0
          h-px
          scale-x-0
          bg-gradient-to-r
          from-transparent
          via-[#2563EB]/55
          to-transparent
          transition-transform
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );
}

/* =========================================================
   CENTER PREMIUM ANIMATION
========================================================= */

function PremiumCenterVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={centerVariants}
      className="
        relative
        mx-auto
        flex
        h-[330px]
        w-full
        max-w-[380px]
        items-center
        justify-center

        sm:h-[390px]
        sm:max-w-[430px]

        lg:h-[460px]
        lg:max-w-[460px]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.06, 1],
                opacity: [0.55, 0.8, 0.55],
              }
        }
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#7FA9FF]/20
          blur-[65px]

          sm:h-[310px]
          sm:w-[310px]
        "
      />

      {/* LARGE OUTER CIRCLE */}

      <div
        className="
          absolute
          h-[290px]
          w-[290px]
          rounded-full
          border border-[#2563EB]/10

          sm:h-[350px]
          sm:w-[350px]

          lg:h-[400px]
          lg:w-[400px]
        "
      />

      {/* SECOND CIRCLE */}

      <div
        className="
          absolute
          h-[235px]
          w-[235px]
          rounded-full
          border border-dashed border-[#2563EB]/20

          sm:h-[280px]
          sm:w-[280px]

          lg:h-[320px]
          lg:w-[320px]
        "
      />

      {/* =====================================================
          ROTATING ORBIT 1
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[290px]
          w-[290px]
          rounded-full

          sm:h-[350px]
          sm:w-[350px]

          lg:h-[400px]
          lg:w-[400px]
        "
      >
        {/* orbit point */}

        <div
          className="
            absolute
            left-1/2
            top-[-6px]
            h-[12px]
            w-[12px]
            -translate-x-1/2
            rounded-full
            bg-[#2563EB]
            shadow-[0_0_20px_rgba(37,99,235,0.65)]
          "
        />

        <div
          className="
            absolute
            bottom-[13%]
            right-[5%]
            h-[8px]
            w-[8px]
            rounded-full
            bg-[#60A5FA]
            shadow-[0_0_16px_rgba(96,165,250,0.75)]
          "
        />
      </motion.div>

      {/* =====================================================
          ROTATING ORBIT 2 - REVERSE
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[235px]
          w-[235px]
          rounded-full

          sm:h-[280px]
          sm:w-[280px]

          lg:h-[320px]
          lg:w-[320px]
        "
      >
        <div
          className="
            absolute
            right-[4px]
            top-1/2
            h-[9px]
            w-[9px]
            -translate-y-1/2
            rounded-full
            bg-[#8B5CF6]
            shadow-[0_0_18px_rgba(139,92,246,0.6)]
          "
        />
      </motion.div>

      {/* =====================================================
          FLOATING GLASS BADGE - TOP LEFT
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }
        }
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[1%]
          top-[15%]
          z-20
          hidden
          rounded-2xl
          border border-white/80
          bg-white/75
          px-3.5 py-2.5
          shadow-[0_14px_35px_rgba(27,63,117,0.10)]
          backdrop-blur-xl
          sm:block
        "
      >
        <div className="flex items-center gap-2.5">
          <div
            className="
              flex h-8 w-8 items-center justify-center
              rounded-xl
              bg-[#ECF4FF]
            "
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12.5L9.2 16.5L19 7"
                stroke="#2563EB"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-[10px] font-medium text-[#8592A5]">
              Trusted Support
            </p>

            <p className="text-[12px] font-bold text-[#15263D]">
              CA Experts
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING GLASS BADGE - BOTTOM RIGHT
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 10, 0],
                rotate: [2, -2, 2],
              }
        }
        transition={{
          duration: 5.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="
          absolute
          bottom-[15%]
          right-[0%]
          z-20
          hidden
          rounded-2xl
          border border-white/80
          bg-white/75
          px-3.5 py-2.5
          shadow-[0_14px_35px_rgba(27,63,117,0.10)]
          backdrop-blur-xl
          sm:block
        "
      >
        <div className="flex items-center gap-2.5">
          <div
            className="
              flex h-8 w-8 items-center justify-center
              rounded-xl
              bg-[#EEF9F5]
            "
          >
            <span
              className="
                h-3
                w-3
                rounded-full
                bg-[#16A085]
                shadow-[0_0_0_5px_rgba(22,160,133,0.12)]
              "
            />
          </div>

          <div>
            <p className="text-[10px] font-medium text-[#8592A5]">
              Compliance
            </p>

            <p className="text-[12px] font-bold text-[#15263D]">
              On Track
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          CENTER GLASS CORE
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          flex
          h-[175px]
          w-[175px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-[48px]
          border border-white/90
          bg-white/70
          shadow-[0_30px_90px_rgba(28,68,128,0.14)]
          backdrop-blur-2xl

          sm:h-[205px]
          sm:w-[205px]
          sm:rounded-[58px]
        "
      >
        {/* blue top glow */}

        <div
          className="
            pointer-events-none
            absolute
            -top-16
            h-36
            w-36
            rounded-full
            bg-[#2563EB]/16
            blur-3xl
          "
        />

        {/* icon */}

        <div
          className="
            relative
            flex
            h-[62px]
            w-[62px]
            items-center
            justify-center
            rounded-[20px]
            bg-gradient-to-br
            from-[#2563EB]
            to-[#497CF4]
            shadow-[0_16px_35px_rgba(37,99,235,0.25)]

            sm:h-[70px]
            sm:w-[70px]
          "
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3L19 6V11C19 15.6 16.1 19.3 12 21C7.9 19.3 5 15.6 5 11V6L12 3Z"
              stroke="white"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />

            <path
              d="M8.6 12L10.8 14.2L15.7 9.3"
              stroke="white"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p
          className="
            mt-4
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#7D8CA1]
          "
        >
          Why Tax India Firm
        </p>

        <p
          className="
            mt-1.5
            text-center
            text-[17px]
            font-bold
            tracking-[-0.03em]
            text-[#10233D]
            sm:text-[19px]
          "
        >
          Trusted Expertise
        </p>

        <p
          className="
            mt-1
            text-center
            text-[11px]
            font-medium
            text-[#718197]
          "
        >
          Simple. Reliable. Professional.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F2F6FF]
        py-20

        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* top glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[420px]
            w-[750px]
            -translate-x-1/2
            rounded-full
            bg-[#C7D9FF]/35
            blur-[100px]
          "
        />

        {/* left glow */}

        <div
          className="
            absolute
            left-[-180px]
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#BBD2FF]/20
            blur-[120px]
          "
        />

        {/* right glow */}

        <div
          className="
            absolute
            right-[-170px]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#CBD8FF]/20
            blur-[120px]
          "
        />

        {/* tiny grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.22]
            [background-image:linear-gradient(rgba(58,91,145,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(58,91,145,0.06)_1px,transparent_1px)]
            [background-size:46px_46px]
          "
        />

        {/* fade */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/15
            via-transparent
            to-white/30
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5

          sm:px-8
          lg:px-10
          xl:px-16
        "
      >
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.05,
            ease: PREMIUM_EASE,
          }}
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          {/* small label */}

          <div className="flex items-center justify-center gap-4">
            <span
              className="
                hidden
                h-px
                w-[50px]
                bg-[#23446E]/30
                sm:block
              "
            />

            <span
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#2563EB]
              "
            >
              Why Choose Us
            </span>

            <span
              className="
                hidden
                h-px
                w-[50px]
                bg-[#23446E]/30
                sm:block
              "
            />
          </div>

          <h2
            className="
              mt-4
              text-[30px]
              font-extrabold
              leading-[1.1]
              tracking-[-0.045em]
              text-[#10233D]

              sm:text-[38px] pt-3
              lg:text-[44px]
            "
          >
            What Makes Us{" "}
            <span
              className="
                
                text-[#2D8CFF] 
              "
            >
              Different
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[590px]
              text-[14px]
              leading-[1.75] pt-3
              text-[#6B798D]

              sm:text-[15px]
            "
          >
            Expert support, transparent service and dependable compliance
            solutions designed around your business.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP / TABLET CONTENT
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-14

            grid
            grid-cols-1
            items-center
            gap-8

            lg:mt-16
            lg:grid-cols-[1fr_420px_1fr]
            lg:gap-7

            xl:grid-cols-[1fr_470px_1fr]
            xl:gap-10
          "
        >
          {/* ===================================================
              LEFT FEATURES
          =================================================== */}

          <div
            className="
              order-2
              flex
              flex-col
              gap-5

              sm:gap-6

              lg:order-1
              lg:items-end
              lg:gap-7
            "
          >
            {leftFeatures.map((feature) => (
              <FeatureItem
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                side="left"
              />
            ))}
          </div>

          {/* ===================================================
              CENTER PREMIUM ANIMATION
          =================================================== */}

          <div className="order-1 lg:order-2">
            <PremiumCenterVisual />
          </div>

          {/* ===================================================
              RIGHT FEATURES
          =================================================== */}

          <div
            className="
              order-3
              flex
              flex-col
              gap-5

              sm:gap-6

              lg:gap-7
            "
          >
            {rightFeatures.map((feature) => (
              <FeatureItem
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                side="right"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}