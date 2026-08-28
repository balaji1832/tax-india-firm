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
  useInView,
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
    title: "Company Registration in Chennai",
    description:
      "Pvt Ltd, LLP, OPC, Partnership, Sole Proprietorship, Section 8 and more — registered in days.",
    cta: "Register your company",
    href: "/business/registration",
    image: "/images/company-registration.png",
  },
  {
    category: "LICENSES",
    title: "Business License Registration",
    description:
      "FSSAI, MSME Udyam, ISO, DSC, IEC, ESI, PF, Professional Tax and Shop Act in Tamil Nadu.",
    cta: "Get your business licensed",
    href: "/business/license",
    image: "/images/business-license.png",
  },
  {
    category: "COMPLIANCE",
    title: "Company Compliance & ROC Filing",
    description:
      "ROC filings, director changes, MOA amendments, eKYC and all MCA compliance handled.",
    cta: "Stay MCA compliant",
    href: "/business/compliance",
    image: "/images/company-compliance.png",
  },
  {
    category: "GST",
    title: "GST Registration & Filing in Chennai",
    description:
      "New GSTIN, GSTR-1, GSTR-3B, GSTR-9, LUT filing, GST notice reply and advisory services.",
    cta: "Sort your GST today",
    href: "/taxation/gst",
    image: "/images/gst-registration.png",
  },
  {
    category: "INCOME TAX",
    title: "Income Tax Return Filing in Chennai",
    description:
      "ITR for salaried, freelancers, business owners, HUFs and NRIs — filed accurately and on time.",
    cta: "File your ITR now",
    href: "/itr/income-tax-return-filing",
    image: "/images/income-tax.png",
  },
  {
    category: "TAX & ACCOUNTING",
    title: "TDS, Bookkeeping & Tax Advisory",
    description:
      "TDS returns, PAN, TAN, bookkeeping, capital gains advisory and year-round tax planning.",
    cta: "Explore tax filing services",
    href: "/taxation/tax-filing",
    image: "/images/tax-accounting.png",
  },
  {
    category: "IP REGISTRATION",
    title: "Trademark, Copyright & Patent in India",
    description:
      "Protect your brand name, logo, creative work and invention with IP India registration.",
    cta: "Protect your brand",
    href: "/legal/ip",
    image: "/images/ip-registration.png",
  },
  {
    category: "LEGAL CONTRACTS",
    title: "Business Contract Drafting in India",
    description:
      "NDA, MOU, franchise, employment, shareholders, vendor and master service agreements.",
    cta: "Draft your contracts",
    href: "/legal/contracts",
    image: "/images/legal-contracts.png",
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

function wrapIndex(index: number) {
  return (
    (index + services.length) %
    services.length
  );
}

function shortestOffset(
  index: number,
  activeIndex: number,
) {
  let diff = index - activeIndex;

  if (
    diff >
    services.length / 2
  ) {
    diff -= services.length;
  }

  if (
    diff <
    -services.length / 2
  ) {
    diff += services.length;
  }

  return diff;
}

function getLayoutMode(
  width: number,
): LayoutMode {
  if (width < 640) {
    return "mobile";
  }

  if (width < 1100) {
    return "tablet";
  }

  return "desktop";
}

const smoothEase = [
  0.16,
  1,
  0.3,
  1,
] as const;

/* =========================================================
   SECTION
========================================================= */

export default function ServicesSection() {
  const reduceMotion =
    useReducedMotion();

  const sectionRef =
    useRef<HTMLElement | null>(
      null,
    );

  const isSectionInView =
    useInView(sectionRef, {
      amount: 0.12,
      margin:
        "0px 0px -8% 0px",
    });

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    hoveredIndex,
    setHoveredIndex,
  ] = useState<
    number | null
  >(null);

  const [
    layoutMode,
    setLayoutMode,
  ] =
    useState<LayoutMode>(
      "desktop",
    );

  const [
    paused,
    setPaused,
  ] = useState(false);

  const touchStartX =
    useRef<
      number | null
    >(null);

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  useEffect(() => {
    const update = () => {
      setLayoutMode(
        getLayoutMode(
          window.innerWidth,
        ),
      );
    };

    update();

    window.addEventListener(
      "resize",
      update,
    );

    return () => {
      window.removeEventListener(
        "resize",
        update,
      );
    };
  }, []);

  /* =======================================================
     AUTO SLIDE
     3.5 SECONDS
  ======================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      !isSectionInView ||
      paused ||
      hoveredIndex !== null
    ) {
      return;
    }

    const timer =
      window.setInterval(
        () => {
          setActiveIndex(
            (current) =>
              wrapIndex(
                current + 1,
              ),
          );
        },

        /* 3.5 SECOND AUTO SLIDE */
        2500,
      );

    return () => {
      window.clearInterval(
        timer,
      );
    };
  }, [
    reduceMotion,
    isSectionInView,
    paused,
    hoveredIndex,
  ]);

  const goNext = () => {
    setActiveIndex(
      (current) =>
        wrapIndex(
          current + 1,
        ),
    );
  };

  const goPrev = () => {
    setActiveIndex(
      (current) =>
        wrapIndex(
          current - 1,
        ),
    );
  };

  /* =======================================================
     SWIPE
  ======================================================= */

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchStartX.current =
      event.touches[0]
        ?.clientX ?? null;

    setPaused(true);
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    const start =
      touchStartX.current;

    const end =
      event.changedTouches[0]
        ?.clientX;

    touchStartX.current =
      null;

    window.setTimeout(
      () =>
        setPaused(false),
      700,
    );

    if (
      start == null ||
      end == null
    ) {
      return;
    }

    const distance =
      start - end;

    if (
      Math.abs(distance) <
      45
    ) {
      return;
    }

    if (distance > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const visibleRange =
    layoutMode === "mobile"
      ? 1
      : 2;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden

        pt-10
        pb-20
      "
      style={{
        background: "#FFFFFF",
      }}
    >
      <TopRightCurveDecoration
        reduceMotion={Boolean(
          reduceMotion,
        )}
      />

      <BottomLeftCurveDecoration
        reduceMotion={Boolean(
          reduceMotion,
        )}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1536px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
        "
      >
        {/* INTRO */}

        <div
          className="
            mx-auto
            max-w-[820px]
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion
                ? 0
                : 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.45,
              margin:
                "0px 0px -8% 0px",
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.85,
              ease: smoothEase,
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
              y: reduceMotion
                ? 0
                : 18,
              scale:
                reduceMotion
                  ? 1
                  : 0.985,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
              margin:
                "0px 0px -8% 0px",
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 1.05,
              delay:
                reduceMotion
                  ? 0
                  : 0.08,
              ease: smoothEase,
            }}
            className="
              mt-5
              pt-3

              font-heading

              text-[28px]
              font-bold

              leading-[1.16]

              tracking-[-0.035em]

              text-[#0D1F45]

              sm:text-[34px]
              md:text-[40px]
              lg:text-[46px]
              xl:text-[50px]
            "
          >
            Our Expertise

            <br className="hidden sm:block" />

            <span className="sm:hidden">
              {" "}
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion
                ? 0
                : 20,
              scale:
                reduceMotion
                  ? 1
                  : 0.99,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
              margin:
                "0px 0px -8% 0px",
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 1,
              delay:
                reduceMotion
                  ? 0
                  : 0.16,
              ease: smoothEase,
            }}
            className="
              mx-auto

              mt-6
              pt-3

              max-w-[650px]

              font-body

              text-[13px]

              leading-[1.75]

              text-[#5C6F84]

              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            We Provide Best Quality
            Services.
          </motion.p>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="
            relative

            mt-12

            sm:mt-14
            md:mt-16
            lg:mt-18
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

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion
                ? 0
                : 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
              margin:
                "0px 0px -6% 0px",
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 1.05,
              ease: smoothEase,
            }}
            className="
              relative

              mx-auto

              h-[430px]

              w-full

              max-w-[1480px]

              overflow-hidden

              sm:h-[470px]
              md:h-[500px]
              lg:h-[545px]
              xl:h-[565px]
            "
          >
            {services.map(
              (
                service,
                index,
              ) => {
                const offset =
                  shortestOffset(
                    index,
                    activeIndex,
                  );

                if (
                  Math.abs(
                    offset,
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
                    index={index}
                    offset={offset}
                    active={
                      offset === 0
                    }
                    hovered={
                      hoveredIndex ===
                      index
                    }
                    layoutMode={
                      layoutMode
                    }
                    reduceMotion={Boolean(
                      reduceMotion,
                    )}
                    onHover={() =>
                      setHoveredIndex(
                        index,
                      )
                    }
                    onLeave={() =>
                      setHoveredIndex(
                        null,
                      )
                    }
                    onSelect={() =>
                      setActiveIndex(
                        index,
                      )
                    }
                  />
                );
              },
            )}
          </motion.div>

          {/* CONTROLS */}

          <div
            className="
              mx-auto

              mt-5

              flex

              w-full

              max-w-[1240px]

              items-center
              justify-end

              gap-6

              px-1
            "
          >
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
    active || hovered;

  const xByMode: Record<
    LayoutMode,
    Record<number, number>
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
    Record<number, number>
  > = {
    mobile: {
      [-1]: 0.8,
      [0]: 1.035,
      [1]: 0.8,
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
      [-1]: 1,
      [0]: 1.055,
      [1]: 1,
      [2]: 0.76,
    },
  };

  const opacityByMode: Record<
    LayoutMode,
    Record<number, number>
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
            ? -2
            : 10,
      }}
      transition={
        reduceMotion
          ? {
              duration: 0,
            }
          : {
              duration: 0.82,
              ease: smoothEase,
            }
      }
      style={{
        left: "50%",

        zIndex:
          zByOffset[
            offset
          ] ?? 0,

        willChange:
          reduceMotion
            ? "auto"
            : "transform, opacity",

        backfaceVisibility:
          "hidden",

        WebkitBackfaceVisibility:
          "hidden",
      }}
      className={`
        group
        transform-gpu

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
      {/* IMAGE BACKGROUND */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat
        "
        initial={false}
        animate={{
          scale:
            highlighted &&
            !reduceMotion
              ? 1.035
              : 1,
        }}
        transition={{
          duration:
            reduceMotion
              ? 0
              : 0.75,
          ease: smoothEase,
        }}
        style={{
          backgroundImage:
            `url("${service.image}")`,

          willChange:
            reduceMotion
              ? "auto"
              : "transform",
        }}
      />

      {/* OVERLAY */}

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
              : 0.65,
          ease: smoothEase,
        }}
      />

      {/* READABILITY FADE */}

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

      {/* ACTIVE EDGE */}

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
              : 0.55,
          ease: smoothEase,
        }}
      />

      {/* CONTENT */}

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
        {/* TOP */}

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
              opacity:
                active
                  ? 1
                  : 0.92,

              scale:
                active &&
                !reduceMotion
                  ? 1.03
                  : 1,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.4,

              ease: smoothEase,
            }}
            className="
              flex

              h-10
              w-10

              items-center
              justify-center

              text-white

              [filter:drop-shadow(0_2px_6px_rgba(0,0,0,.28))]
            "
          >
            <Icon
              size={21}
              strokeWidth={2.2}
            />
          </motion.div>

          <span
            className="
              font-body

              text-[11px]
              font-extrabold

              tracking-[0.08em]

              text-white

              [text-shadow:0_2px_8px_rgba(0,0,0,.38)]
            "
          >
            {String(
              index + 1,
            ).padStart(
              2,
              "0",
            )}
          </span>
        </div>

        {/* CONTENT BLOCK */}

        <div className="mt-auto">
          {/* CATEGORY */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              px-3
              py-1.5
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
              style={{
                color:
                  "#FFFFFF",
              }}
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
            style={{
              color: "#FFFFFF",
            }}
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
            style={{
              color: "#FFFFFF",
            }}
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

          <div className="mt-6">
            <Link
              href={
                service.href
              }
              onClick={(event) =>
                event.stopPropagation()
              }
              style={{
                color: "#FFFFFF",
              }}
              className="
                group/link

                inline-flex

                items-center

                gap-2.5

                font-body

                text-[11px]

                font-bold

                text-white

                transition-all
                duration-300

                hover:opacity-90

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

                  h-7
                  w-7

                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  text-[#173B61]

                  shadow-[0_3px_10px_rgba(10,35,65,.08)]

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
   TOP-RIGHT CURVE DECORATION
========================================================= */

function TopRightCurveDecoration({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, -5, 0],
              y: [0, 3, 0],
            }
      }
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        pointer-events-none

        absolute
        right-0
        top-0
        z-0

        h-[72px]
        w-[210px]

        overflow-hidden

        sm:h-[92px]
        sm:w-[285px]

        md:h-[112px]
        md:w-[360px]

        lg:h-[138px]
        lg:w-[450px]

        xl:h-[154px]
        xl:w-[520px]

        2xl:h-[168px]
        2xl:w-[590px]

        will-change-transform
      "
      style={{
        backfaceVisibility:
          "hidden",

        WebkitBackfaceVisibility:
          "hidden",
      }}
    >
      <svg
        viewBox="0 0 680 190"
        preserveAspectRatio="none"
        className="
          h-full
          w-full
        "
      >
        <defs>
          <linearGradient
            id="services-curve-light"
            x1="0"
            y1="0"
            x2="1"
            y2="0.9"
          >
            <stop
              offset="0%"
              stopColor="#2AA7F4"
            />

            <stop
              offset="55%"
              stopColor="#1888E9"
            />

            <stop
              offset="100%"
              stopColor="#0C69D8"
            />
          </linearGradient>

          <linearGradient
            id="services-curve-mid"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#0E91EA"
            />

            <stop
              offset="52%"
              stopColor="#0877DD"
            />

            <stop
              offset="100%"
              stopColor="#075CC6"
            />
          </linearGradient>

          <linearGradient
            id="services-curve-main"
            x1="0"
            y1="0"
            x2="1"
            y2="0.85"
          >
            <stop
              offset="0%"
              stopColor="#0879DE"
            />

            <stop
              offset="52%"
              stopColor="#075FCB"
            />

            <stop
              offset="100%"
              stopColor="#084AAE"
            />
          </linearGradient>

          <linearGradient
            id="services-curve-highlight"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#68C3FF"
              stopOpacity="0.85"
            />

            <stop
              offset="100%"
              stopColor="#2C92F1"
              stopOpacity="0.15"
            />
          </linearGradient>

          <pattern
            id="services-curve-dots"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.45"
              fill="white"
              opacity="0.72"
            />
          </pattern>

          <clipPath id="services-main-curve-clip">
            <path d="M74 0H680V159C610 121 541 101 458 90C362 78 277 81 202 67C143 56 99 35 74 0Z" />
          </clipPath>
        </defs>

        <path
          d="M0 0H680V190C614 150 543 129 456 117C356 104 263 108 174 89C99 73 39 43 0 0Z"
          fill="url(#services-curve-light)"
        />

        <path
          d="M36 0H680V177C613 138 544 117 459 106C361 93 272 97 191 80C126 67 77 40 36 0Z"
          fill="url(#services-curve-mid)"
        />

        <path
          d="M74 0H680V159C610 121 541 101 458 90C362 78 277 81 202 67C143 56 99 35 74 0Z"
          fill="url(#services-curve-main)"
        />

        <path
          d="M22 3C75 47 129 70 195 83C278 100 369 96 463 109C548 120 617 142 680 179"
          fill="none"
          stroke="url(#services-curve-highlight)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.82"
        />

        <rect
          x="420"
          y="7"
          width="190"
          height="64"
          fill="url(#services-curve-dots)"
          clipPath="url(#services-main-curve-clip)"
          opacity="0.56"
        />

        <path
          d="M460 18C518 25 578 42 633 69"
          fill="none"
          stroke="rgba(255,255,255,.22)"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/* =========================================================
   BOTTOM-LEFT CURVE DECORATION
========================================================= */

function BottomLeftCurveDecoration({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, 5, 0],
              y: [0, -3, 0],
            }
      }
      transition={{
        duration: 13.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        pointer-events-none

        absolute
        bottom-0
        left-0
        z-0

        h-[72px]
        w-[210px]

        overflow-hidden

        sm:h-[92px]
        sm:w-[285px]

        md:h-[112px]
        md:w-[360px]

        lg:h-[138px]
        lg:w-[450px]

        xl:h-[154px]
        xl:w-[520px]

        2xl:h-[168px]
        2xl:w-[590px]

        will-change-transform
      "
      style={{
        backfaceVisibility:
          "hidden",

        WebkitBackfaceVisibility:
          "hidden",
      }}
    >
      <svg
        viewBox="0 0 680 190"
        preserveAspectRatio="none"
        className="
          h-full
          w-full
        "
        style={{
          transform:
            "rotate(180deg)",

          transformOrigin:
            "50% 50%",
        }}
      >
        <defs>
          <linearGradient
            id="services-bottom-curve-light"
            x1="0"
            y1="0"
            x2="1"
            y2="0.9"
          >
            <stop
              offset="0%"
              stopColor="#2AA7F4"
            />

            <stop
              offset="55%"
              stopColor="#1888E9"
            />

            <stop
              offset="100%"
              stopColor="#0C69D8"
            />
          </linearGradient>

          <linearGradient
            id="services-bottom-curve-mid"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#0E91EA"
            />

            <stop
              offset="52%"
              stopColor="#0877DD"
            />

            <stop
              offset="100%"
              stopColor="#075CC6"
            />
          </linearGradient>

          <linearGradient
            id="services-bottom-curve-main"
            x1="0"
            y1="0"
            x2="1"
            y2="0.85"
          >
            <stop
              offset="0%"
              stopColor="#0879DE"
            />

            <stop
              offset="52%"
              stopColor="#075FCB"
            />

            <stop
              offset="100%"
              stopColor="#084AAE"
            />
          </linearGradient>

          <linearGradient
            id="services-bottom-curve-highlight"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#68C3FF"
              stopOpacity="0.85"
            />

            <stop
              offset="100%"
              stopColor="#2C92F1"
              stopOpacity="0.15"
            />
          </linearGradient>

          <pattern
            id="services-bottom-curve-dots"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.45"
              fill="white"
              opacity="0.72"
            />
          </pattern>

          <clipPath id="services-bottom-main-curve-clip">
            <path d="M74 0H680V159C610 121 541 101 458 90C362 78 277 81 202 67C143 56 99 35 74 0Z" />
          </clipPath>
        </defs>

        <path
          d="M0 0H680V190C614 150 543 129 456 117C356 104 263 108 174 89C99 73 39 43 0 0Z"
          fill="url(#services-bottom-curve-light)"
        />

        <path
          d="M36 0H680V177C613 138 544 117 459 106C361 93 272 97 191 80C126 67 77 40 36 0Z"
          fill="url(#services-bottom-curve-mid)"
        />

        <path
          d="M74 0H680V159C610 121 541 101 458 90C362 78 277 81 202 67C143 56 99 35 74 0Z"
          fill="url(#services-bottom-curve-main)"
        />

        <path
          d="M22 3C75 47 129 70 195 83C278 100 369 96 463 109C548 120 617 142 680 179"
          fill="none"
          stroke="url(#services-bottom-curve-highlight)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.82"
        />

        <rect
          x="420"
          y="7"
          width="190"
          height="64"
          fill="url(#services-bottom-curve-dots)"
          clipPath="url(#services-bottom-main-curve-clip)"
          opacity="0.56"
        />

        <path
          d="M460 18C518 25 578 42 633 69"
          fill="none"
          stroke="rgba(255,255,255,.22)"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
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
    direction === "left"
      ? ArrowLeft
      : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
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