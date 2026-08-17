"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  FileCheck2,
  FileSignature,
  Landmark,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type ServiceItem = {
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
};

type LayoutMode =
  | "mobile"
  | "tablet"
  | "desktop";

/* =========================================================
   DATA
========================================================= */

const services: ServiceItem[] = [
  {
    category: "BUSINESS",
    title:
      "Company Registration in Chennai",
    description:
      "Pvt Ltd, LLP, OPC, Partnership, Sole Proprietorship, Section 8 and more — registered in days.",
    cta:
      "Register your company",
    href:
      "/business/registration",
    image:
      "/images/company-registration.png",
  },
  {
    category: "LICENSES",
    title:
      "Business License Registration",
    description:
      "FSSAI, MSME Udyam, ISO, DSC, IEC, ESI, PF, Professional Tax and Shop Act in Tamil Nadu.",
    cta:
      "Get your business licensed",
    href:
      "/business/license",
    image:
      "/images/business-license.png",
  },
  {
    category: "COMPLIANCE",
    title:
      "Company Compliance & ROC Filing",
    description:
      "ROC filings, director changes, MOA amendments, eKYC and all MCA compliance handled.",
    cta:
      "Stay MCA compliant",
    href:
      "/business/compliance",
    image:
      "/images/company-compliance.png",
  },
  {
    category: "GST",
    title:
      "GST Registration & Filing in Chennai",
    description:
      "New GSTIN, GSTR-1, GSTR-3B, GSTR-9, LUT filing, GST notice reply and advisory services.",
    cta:
      "Sort your GST today",
    href:
      "/taxation/gst",
    image:
      "/images/gst-registration.png",
  },
  {
    category: "INCOME TAX",
    title:
      "Income Tax Return Filing in Chennai",
    description:
      "ITR for salaried, freelancers, business owners, HUFs and NRIs — filed accurately and on time.",
    cta:
      "File your ITR now",
    href:
      "/itr/income-tax-return-filing",
    image:
      "/images/income-tax.png",
  },
  {
    category:
      "TAX & ACCOUNTING",
    title:
      "TDS, Bookkeeping & Tax Advisory",
    description:
      "TDS returns, PAN, TAN, bookkeeping, capital gains advisory and year-round tax planning.",
    cta:
      "Explore tax filing services",
    href:
      "/taxation/tax-filing",
    image:
      "/images/tax-accounting.png",
  },
  {
    category:
      "IP REGISTRATION",
    title:
      "Trademark, Copyright & Patent in India",
    description:
      "Protect your brand name, logo, creative work and invention with IP India registration.",
    cta:
      "Protect your brand",
    href:
      "/legal/ip",
    image:
      "/images/ip-registration.png",
  },
  {
    category:
      "LEGAL CONTRACTS",
    title:
      "Business Contract Drafting in India",
    description:
      "NDA, MOU, franchise, employment, shareholders, vendor and master service agreements.",
    cta:
      "Draft your contracts",
    href:
      "/legal/contracts",
    image:
      "/images/legal-contracts.png",
  },
];

const icons = [
  BriefcaseBusiness,
  BadgeCheck,
  FileCheck2,
  ReceiptText,
  Landmark,
  Calculator,
  ShieldCheck,
  FileSignature,
];

/* =========================================================
   HELPERS
========================================================= */

function wrapIndex(
  index: number
) {
  return (
    (index +
      services.length) %
    services.length
  );
}

function shortestOffset(
  index: number,
  activeIndex: number
) {
  let diff =
    index - activeIndex;

  if (
    diff >
    services.length / 2
  ) {
    diff -=
      services.length;
  }

  if (
    diff <
    -services.length / 2
  ) {
    diff +=
      services.length;
  }

  return diff;
}

function getLayoutMode(
  width: number
): LayoutMode {
  if (width < 640) {
    return "mobile";
  }

  if (width < 1100) {
    return "tablet";
  }

  return "desktop";
}

/* =========================================================
   SECTION
========================================================= */

export default function ServicesSection() {
  const reduceMotion =
    useReducedMotion();

  const [
    activeIndex,
    setActiveIndex,
  ] =
    useState(0);

  const [
    hoveredIndex,
    setHoveredIndex,
  ] =
    useState<
      number | null
    >(null);

  const [
    layoutMode,
    setLayoutMode,
  ] =
    useState<LayoutMode>(
      "desktop"
    );

  const [
    paused,
    setPaused,
  ] =
    useState(false);

  const touchStartX =
    useRef<
      number | null
    >(null);

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  useEffect(() => {
    const update =
      () => {
        setLayoutMode(
          getLayoutMode(
            window.innerWidth
          )
        );
      };

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      paused ||
      hoveredIndex !==
        null
    ) {
      return;
    }

    const timer =
      window.setInterval(
        () => {
          setActiveIndex(
            (
              current
            ) =>
              wrapIndex(
                current + 1
              )
          );
        },
        4800
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [
    reduceMotion,
    paused,
    hoveredIndex,
  ]);

  const goNext =
    () => {
      setActiveIndex(
        (
          current
        ) =>
          wrapIndex(
            current + 1
          )
      );
    };

  const goPrev =
    () => {
      setActiveIndex(
        (
          current
        ) =>
          wrapIndex(
            current - 1
          )
      );
    };

  /* =======================================================
     SWIPE
  ======================================================= */

  const handleTouchStart =
    (
      event: React.TouchEvent<HTMLDivElement>
    ) => {
      touchStartX.current =
        event.touches[0]
          ?.clientX ??
        null;

      setPaused(true);
    };

  const handleTouchEnd =
    (
      event: React.TouchEvent<HTMLDivElement>
    ) => {
      const start =
        touchStartX.current;

      const end =
        event
          .changedTouches[0]
          ?.clientX;

      touchStartX.current =
        null;

      setPaused(false);

      if (
        start == null ||
        end == null
      ) {
        return;
      }

      const distance =
        start - end;

      if (
        Math.abs(
          distance
        ) < 45
      ) {
        return;
      }

      if (
        distance > 0
      ) {
        goNext();
      } else {
        goPrev();
      }
    };

  const visibleRange =
    layoutMode ===
    "mobile"
      ? 1
      : 2;

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden

        py-14
        sm:py-16
        md:py-20
        lg:py-22
        xl:py-24
      "
      style={{
        background:
          "#F7FAFE",
      }}
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* visible soft checker */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            backgroundImage: `
              linear-gradient(
                45deg,
                rgba(36,110,241,.060) 25%,
                transparent 25%
              ),
              linear-gradient(
                -45deg,
                rgba(36,110,241,.060) 25%,
                transparent 25%
              ),
              linear-gradient(
                45deg,
                transparent 75%,
                rgba(36,110,241,.060) 75%
              ),
              linear-gradient(
                -45deg,
                transparent 75%,
                rgba(36,110,241,.060) 75%
              )
            `,
            backgroundSize:
              "72px 72px",
            backgroundPosition:
              "0 0, 0 36px, 36px -36px, -36px 0",
          }}
        />

        {/* softer center lighting */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(255,255,255,.58) 0%, rgba(255,255,255,.30) 32%, rgba(247,250,254,.10) 65%, rgba(247,250,254,.03) 100%)",
          }}
        />

        {/* top continuity */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[220px]
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(103,177,233,.10) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1536px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* =================================================
            INTRO
        ================================================= */}

        <div
          className="
            mx-auto
            max-w-[920px]
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y:
                reduceMotion
                  ? 0
                  : 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-[#246EF1]/20

              bg-white/90

              px-3
              py-[7px]

              shadow-[0_5px_18px_rgba(36,110,241,.07)]

              backdrop-blur-md
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
                bg-[#246EF1]
                text-white
              "
            >
              <ServiceBadgeIcon />
            </span>

            <span
              className="
                font-body
                text-[11px]
                font-bold
                text-[#246EF1]
                sm:text-[12px]
              "
            >
              300+ Services
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y:
                reduceMotion
                  ? 0
                  : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mt-5

              font-heading

              text-[31px]
              font-bold

              leading-[1.08]

              tracking-[-0.04em]

              text-[#0D1F45]

              sm:text-[40px]
              md:text-[47px]
              lg:text-[54px]
            "
          >
            Everything Your
            Business Needs.
            <br className="hidden sm:block" />
            <span className="sm:hidden">
              {" "}
            </span>
            One Firm in Chennai.
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y:
                reduceMotion
                  ? 0
                  : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="
              mx-auto

              mt-5

              max-w-[680px]

              font-body

              text-[13px]

              leading-[1.75]

              text-[#5C6F84]

              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            Whether you&apos;re
            starting up, scaling
            or staying compliant,
            we have the right
            service for every
            stage of your business
            journey.
          </motion.p>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="
            relative
            mt-8
            sm:mt-10
            md:mt-12
          "
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
          onFocusCapture={() =>
            setPaused(true)
          }
          onBlurCapture={() =>
            setPaused(false)
          }
          onTouchStart={
            handleTouchStart
          }
          onTouchEnd={
            handleTouchEnd
          }
        >
          {/* CARD STAGE */}

          <div
            className="
              relative

              mx-auto

              h-[420px]

              w-full

              max-w-[1480px]

              overflow-hidden

              sm:h-[455px]
              md:h-[485px]
              lg:h-[535px]
              xl:h-[555px]
            "
          >
            {services.map(
              (
                service,
                index
              ) => {
                const offset =
                  shortestOffset(
                    index,
                    activeIndex
                  );

                if (
                  Math.abs(
                    offset
                  ) >
                  visibleRange
                ) {
                  return null;
                }

                return (
                  <CarouselCard
                    key={
                      service.href
                    }
                    service={
                      service
                    }
                    index={
                      index
                    }
                    offset={
                      offset
                    }
                    active={
                      offset ===
                      0
                    }
                    hovered={
                      hoveredIndex ===
                      index
                    }
                    layoutMode={
                      layoutMode
                    }
                    reduceMotion={Boolean(
                      reduceMotion
                    )}
                    onHover={() =>
                      setHoveredIndex(
                        index
                      )
                    }
                    onLeave={() =>
                      setHoveredIndex(
                        null
                      )
                    }
                    onSelect={() =>
                      setActiveIndex(
                        index
                      )
                    }
                  />
                );
              }
            )}
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

          <div
            className="
              mx-auto

              mt-1

              flex

              w-full

              max-w-[1240px]

              items-center
              justify-between

              gap-6

              px-1
            "
          >
            {/* INDICATORS */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              {services.map(
                (
                  service,
                  index
                ) => (
                  <button
                    key={
                      service.href
                    }
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    aria-label={`Show ${service.title}`}
                    className="
                      group
                      flex
                      h-9
                      items-center
                      justify-center
                    "
                  >
                    <motion.span
                      animate={{
                        width:
                          index ===
                          activeIndex
                            ? 28
                            : 7,
                        opacity:
                          index ===
                          activeIndex
                            ? 1
                            : 0.5,
                      }}
                      transition={{
                        duration:
                          reduceMotion
                            ? 0
                            : 0.3,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className={`
                        block

                        h-[7px]

                        rounded-full

                        transition-colors
                        duration-300

                        ${
                          index ===
                          activeIndex
                            ? "bg-[#246EF1]"
                            : "bg-[#94AAC1] group-hover:bg-[#55799F]"
                        }
                      `}
                    />
                  </button>
                )
              )}
            </div>

            {/* ARROWS */}

            <div
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <ControlButton
                label="Previous service"
                direction="left"
                onClick={
                  goPrev
                }
              />

              <ControlButton
                label="Next service"
                direction="right"
                onClick={
                  goNext
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAROUSEL CARD
========================================================= */

function CarouselCard({
  service,
  index,
  offset,
  active,
  hovered,
  layoutMode,
  reduceMotion,
  onHover,
  onLeave,
  onSelect,
}: {
  service: ServiceItem;
  index: number;
  offset: number;
  active: boolean;
  hovered: boolean;
  layoutMode: LayoutMode;
  reduceMotion: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}) {
  const Icon =
    icons[index] ??
    BriefcaseBusiness;

  const highlighted =
    active ||
    hovered;

  const xByMode: Record<
    LayoutMode,
    Record<
      number,
      number
    >
  > = {
    mobile: {
      [-1]: -235,
      [0]: 0,
      [1]: 235,
    },

    tablet: {
      [-2]: -650,
      [-1]: -330,
      [0]: 0,
      [1]: 330,
      [2]: 650,
    },

    desktop: {
      [-2]: -830,
      [-1]: -410,
      [0]: 0,
      [1]: 410,
      [2]: 830,
    },
  };

  const scaleByMode: Record<
    LayoutMode,
    Record<
      number,
      number
    >
  > = {
    mobile: {
      [-1]: 0.80,
      [0]: 1.035,
      [1]: 0.80,
    },

    tablet: {
      [-2]: 0.76,
      [-1]: 0.89,
      [0]: 1.045,
      [1]: 0.89,
      [2]: 0.76,
    },

    desktop: {
      [-2]: 0.76,
      [-1]: 0.9,
      [0]: 1.055,
      [1]: 0.9,
      [2]: 0.76,
    },
  };

  const opacityByMode: Record<
    LayoutMode,
    Record<
      number,
      number
    >
  > = {
    mobile: {
      [-1]: 0.72,
      [0]: 1,
      [1]: 0.72,
    },

    tablet: {
      [-2]: 0.48,
      [-1]: 0.86,
      [0]: 1,
      [1]: 0.86,
      [2]: 0.48,
    },

    desktop: {
      [-2]: 0.5,
      [-1]: 0.88,
      [0]: 1,
      [1]: 0.88,
      [2]: 0.5,
    },
  };

  const zByOffset: Record<
    number,
    number
  > = {
    [-2]: 1,
    [-1]: 3,
    [0]: 10,
    [1]: 3,
    [2]: 1,
  };

  return (
    <motion.article
      onMouseEnter={
        onHover
      }
      onMouseLeave={
        onLeave
      }
      onClick={
        onSelect
      }
      initial={false}
      animate={{
        x:
          xByMode[
            layoutMode
          ][offset] ?? 0,

        scale:
          scaleByMode[
            layoutMode
          ][offset] ??
          0.76,

        opacity:
          opacityByMode[
            layoutMode
          ][offset] ?? 0,

        y:
          active
            ? -4
            : 15,
      }}
      transition={
        reduceMotion
          ? {
              duration: 0,
            }
          : {
              type:
                "spring",
              stiffness: 145,
              damping: 24,
              mass: 0.92,
            }
      }
      style={{
        left: "50%",
        zIndex:
          zByOffset[
            offset
          ] ?? 0,
      }}
      className={`
        group

        absolute

        top-[48%]

        h-[350px]
        w-[245px]

        -translate-x-1/2
        -translate-y-1/2

        cursor-pointer

        overflow-hidden

        rounded-[24px]

        border

        bg-[#12304F]

        sm:h-[380px]
        sm:w-[280px]

        md:h-[405px]
        md:w-[300px]

        lg:h-[455px]
        lg:w-[345px]

        xl:h-[470px]
        xl:w-[360px]

        ${
          active
            ? "border-[#75B4F2]/90"
            : "border-white/35"
        }
      `}
    >
      {/* =====================================================
          IMAGE AS TRUE BACKGROUND
          Using CSS background avoids Next/Image preload issue.
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            `url("${service.image}")`,
        }}
        initial={false}
        animate={{
          scale:
            highlighted &&
            !reduceMotion
              ? 1.045
              : 1,

          filter:
            active
              ? "saturate(1.16) contrast(1.08) brightness(1.08)"
              : hovered
                ? "saturate(1.08) contrast(1.05) brightness(1.00)"
                : "saturate(.92) contrast(1.02) brightness(.86)",
        }}
        transition={{
          duration:
            reduceMotion
              ? 0
              : 0.55,

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      />

      {/* =====================================================
          OVERLAY
          Clear image on top, stronger contrast near content.
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        initial={false}
        animate={{
          background:
            active
              ? "linear-gradient(180deg, rgba(4,20,38,.02) 0%, rgba(4,20,38,.06) 28%, rgba(4,20,38,.26) 58%, rgba(4,20,38,.84) 100%)"
              : hovered
                ? "linear-gradient(180deg, rgba(4,20,38,.10) 0%, rgba(4,20,38,.18) 28%, rgba(4,20,38,.44) 60%, rgba(4,20,38,.91) 100%)"
                : "linear-gradient(180deg, rgba(4,20,38,.18) 0%, rgba(4,20,38,.26) 32%, rgba(4,20,38,.56) 65%, rgba(4,20,38,.94) 100%)",
        }}
        transition={{
          duration:
            reduceMotion
              ? 0
              : 0.42,
        }}
      />

      {/* LEFT/TOP READABILITY FADE */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "linear-gradient(110deg, rgba(4,20,38,.26) 0%, rgba(4,20,38,.08) 44%, transparent 72%)",
        }}
      />

      {/* ACTIVE EDGE ONLY — NO DROP SHADOW */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
        "
        initial={false}
        animate={{
          boxShadow:
            active
              ? "inset 0 0 0 1px rgba(178,218,255,.55)"
              : "inset 0 0 0 1px rgba(255,255,255,.10)",
        }}
        transition={{
          duration:
            reduceMotion
              ? 0
              : 0.35,
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          flex
          h-full
          flex-col

          p-5
          sm:p-6
          lg:p-7
        "
      >
        {/* TOP ROW */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <motion.div
            initial={false}
            animate={{
              backgroundColor:
                active
                  ? "rgba(8,38,72,.80)"
                  : "rgba(8,38,72,.68)",

              borderColor:
                active
                  ? "rgba(255,255,255,.48)"
                  : "rgba(255,255,255,.28)",
            }}
            className="
              flex

              h-11
              w-11

              items-center
              justify-center

              rounded-[14px]

              border

              text-white

              backdrop-blur-md
            "
          >
            <Icon
              size={21}
              strokeWidth={2.2}
            />
          </motion.div>

          <span
            className="
              rounded-full

              bg-[#082948]/80

              px-2.5
              py-1.5

              font-body

              text-[11px]
              font-extrabold

              tracking-[0.08em]

              text-white

              backdrop-blur-md
            "
          >
            {String(
              index + 1
            ).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        {/* CONTENT BLOCK */}

        <div
          className="
            mt-auto
          "
        >
          {/* CATEGORY */}

          <div
            className="
              inline-flex

              items-center

              gap-2

              rounded-full

              border
              border-white/40

              bg-white/20

              px-3
              py-1.5

              shadow-[inset_0_1px_0_rgba(255,255,255,.22)]

              backdrop-blur-md
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]

                rounded-full

                bg-[#D9EEFF]
              "
            />

            <span
              style={{ color: "#FFFFFF" }}
              className="
                font-body

                text-[9px]

                font-extrabold

                uppercase

                tracking-[0.13em]

                text-white

                sm:text-[9.5px]
                lg:text-[10px]
              "
            >
              {service.category}
            </span>
          </div>

          {/* TITLE */}

          <motion.h3
            style={{ color: "#FFFFFF" }}
            initial={false}
            animate={{
              y:
                highlighted &&
                !reduceMotion
                  ? -2
                  : 0,
            }}
            className="
              mt-3

              max-w-[315px]

              font-heading

              text-[20px]

              font-bold

              leading-[1.11]

              tracking-[-0.03em]

              text-white

              [text-shadow:0_2px_12px_rgba(0,0,0,.60)]

              sm:text-[21px]
              md:text-[22px]
              lg:text-[25px]
              xl:text-[26px]
            "
          >
            {service.title}
          </motion.h3>

          {/* DESCRIPTION */}

          <p
            style={{ color: "#FFFFFF" }}
            className="
              mt-3

              max-w-[320px]

              font-body

              text-[11px]

              font-semibold

              leading-[1.65]

              text-white/95

              [text-shadow:0_2px_8px_rgba(0,0,0,.58)]

              sm:text-[11.5px]
              md:text-[12px]
              lg:text-[12.5px]
            "
          >
            {service.description}
          </p>

          {/* CTA */}

          <div
            className="
              mt-6
            "
          >
            <Link
              href={
                service.href
              }
              onClick={(
                event
              ) =>
                event.stopPropagation()
              }
              style={{ color: "#FFFFFF" }}
              className="
                group/link

                inline-flex

                items-center

                gap-2.5

                rounded-full

                border
                border-white/35

                bg-white/18

                px-3.5
                py-2.5

                font-body

                text-[11px]

                font-bold

                text-white

                shadow-[inset_0_1px_0_rgba(255,255,255,.20)]

                backdrop-blur-lg

                transition-all
                duration-300

                hover:border-white/55
                hover:bg-white/28

                sm:text-[11.5px]
                lg:text-[12px]
              "
            >
              <span>
                {service.cta}
              </span>

              <span
                className="
                  flex

                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  bg-white/90

                  text-[#173B61]

                  shadow-[0_3px_10px_rgba(10,35,65,.10)]

                  transition-transform
                  duration-300

                  group-hover/link:translate-x-1
                "
              >
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CONTROL BUTTON
========================================================= */

function ControlButton({
  label,
  direction,
  onClick,
}: {
  label: string;
  direction:
    | "left"
    | "right";
  onClick: () => void;
}) {
  const Icon =
    direction ===
    "left"
      ? ArrowLeft
      : ArrowRight;

  return (
    <button
      type="button"
      onClick={
        onClick
      }
      aria-label={
        label
      }
      className="
        group

        flex

        h-12
        w-12

        items-center
        justify-center

        rounded-full

        border
        border-[#C5D7E9]

        bg-white/95

        text-[#102A43]

        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-0.5

        hover:border-[#246EF1]/40

        hover:bg-[#246EF1]

        hover:text-white
      "
    >
      <Icon
        size={18}
        className={`
          transition-transform
          duration-300

          ${
            direction ===
            "left"
              ? "group-hover:-translate-x-0.5"
              : "group-hover:translate-x-0.5"
          }
        `}
      />
    </button>
  );
}

/* =========================================================
   BADGE ICON
========================================================= */

function ServiceBadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="
        h-[11px]
        w-[11px]
      "
      aria-hidden="true"
    >
      <path
        d="M12 3L14.3 7.66L19.45 8.41L15.72 12.04L16.6 17.17L12 14.75L7.4 17.17L8.28 12.04L4.55 8.41L9.7 7.66L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}