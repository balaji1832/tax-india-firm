"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================================
   SETTINGS

   1.15 sec loader
   + 0.35 sec fade
   = around 1.5 seconds total
========================================================= */

const DISPLAY_TIME = 1150;
const EXIT_DURATION = 0.35;

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  /* =======================================================
     REMOVE LOADER

     IMPORTANT:
     No mountedRef here.

     This works correctly with React Strict Mode / Next.js dev.
  ======================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, reduceMotion ? 300 : DISPLAY_TIME);

    return () => {
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  /* =======================================================
     PREVENT SCROLL ONLY WHILE LOADER IS SHOWING
  ======================================================= */

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      return;
    }

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="tax-india-loader"
          role="status"
          aria-label="Loading Tax India Firm"

          /* ENTRY */
          initial={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
          }}

          /* EXIT */
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: reduceMotion
              ? 0.1
              : EXIT_DURATION,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            fixed
            inset-0
            z-[999999]

            flex
            items-center
            justify-center

            overflow-hidden

            bg-[#F8FBFF]
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
              overflow-hidden
            "
          >
            {/* CENTER GLOW */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.12, 1],
                      opacity: [0.25, 0.48, 0.25],
                    }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2

                h-[320px]
                w-[320px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#2563EB]/12

                blur-[85px]

                sm:h-[400px]
                sm:w-[400px]
              "
            />

            {/* TOP LIGHT */}

            <div
              className="
                absolute

                left-1/2
                top-[-210px]

                h-[420px]
                w-[720px]

                -translate-x-1/2

                rounded-full

                bg-[#60A5FA]/10

                blur-[120px]
              "
            />

            {/* LEFT LIGHT */}

            <div
              className="
                absolute

                -left-[170px]
                top-[30%]

                h-[360px]
                w-[360px]

                rounded-full

                bg-[#93C5FD]/10

                blur-[120px]
              "
            />

            {/* RIGHT LIGHT */}

            <div
              className="
                absolute

                -right-[180px]
                bottom-[5%]

                h-[380px]
                w-[380px]

                rounded-full

                bg-[#2563EB]/8

                blur-[120px]
              "
            />

            {/* GRID */}

            <div
              className="
                absolute
                inset-0

                opacity-[0.14]

                [background-image:linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)]

                [background-size:44px_44px]
              "
            />
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 8,
                    scale: 0.96,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10

              flex
              flex-col
              items-center
            "
          >
            {/* =================================================
                LOGO ANIMATION
            ================================================= */}

            <div
              className="
                relative

                flex

                h-[190px]
                w-[190px]

                items-center
                justify-center

                sm:h-[210px]
                sm:w-[210px]
              "
            >
              {/* STATIC OUTER BORDER */}

              <div
                className="
                  absolute
                  inset-0

                  rounded-full

                  border
                  border-[#2563EB]/10
                "
              />

              {/* =================================================
                  ROTATING OUTER RING
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[9px]

                  rounded-full

                  border-[1.5px]
                  border-transparent

                  border-t-[#2563EB]
                  border-r-[#60A5FA]/35
                  border-b-[#2563EB]/10
                  border-l-[#93C5FD]/45

                  will-change-transform
                "
              />

              {/* =================================================
                  INNER REVERSE RING
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[25px]

                  rounded-full

                  border
                  border-dashed
                  border-[#2563EB]/20

                  will-change-transform
                "
              />

              {/* =================================================
                  ORBIT DOT
              ================================================= */}

              {!reduceMotion && (
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[9px]

                    rounded-full

                    will-change-transform
                  "
                >
                  <span
                    className="
                      absolute

                      left-1/2
                      top-[-4px]

                      h-[8px]
                      w-[8px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#2563EB]

                      shadow-[0_0_18px_rgba(37,99,235,.7)]
                    "
                  />
                </motion.div>
              )}

              {/* SECOND ORBIT DOT */}

              {!reduceMotion && (
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 4.7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[25px]

                    rounded-full

                    will-change-transform
                  "
                >
                  <span
                    className="
                      absolute

                      right-[-3px]
                      top-1/2

                      h-[6px]
                      w-[6px]

                      -translate-y-1/2

                      rounded-full

                      bg-[#60A5FA]

                      shadow-[0_0_14px_rgba(96,165,250,.7)]
                    "
                  />
                </motion.div>
              )}

              {/* =================================================
                  PULSING INNER GLOW
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [
                          0.92,
                          1.08,
                          0.92,
                        ],
                        opacity: [
                          0.18,
                          0.36,
                          0.18,
                        ],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute

                  h-[125px]
                  w-[125px]

                  rounded-full

                  bg-[#3B82F6]/20

                  blur-[34px]
                "
              />

              {/* =================================================
                  LOGO BOX
              ================================================= */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.78,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  z-20

                  flex

                  h-[112px]
                  w-[112px]

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white

                  bg-white/95

                  shadow-[0_20px_60px_rgba(30,79,145,.15)]

                  backdrop-blur-xl

                  sm:h-[122px]
                  sm:w-[122px]
                  sm:rounded-[34px]
                "
              >
                {/* INNER GLOW */}

                <div
                  className="
                    absolute

                    -top-[45px]
                    left-1/2

                    h-[95px]
                    w-[95px]

                    -translate-x-1/2

                    rounded-full

                    bg-[#2563EB]/12

                    blur-2xl
                  "
                />

                {/* =================================================
                    ACTUAL LOGO
                ================================================= */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -2, 0],
                          scale: [
                            1,
                            1.025,
                            1,
                          ],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Image
                    src="/icons/taxindia-logo.png"
                    alt="Tax India Firm"
                    width={95}
                    height={95}
                    priority
                    className="
                      h-auto
                      w-[82px]

                      object-contain

                      sm:w-[90px]
                    "
                  />
                </motion.div>

                {/* =================================================
                    LOGO LIGHT SHINE
                ================================================= */}

                {!reduceMotion && (
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      x: "-180%",
                    }}
                    animate={{
                      x: "280%",
                    }}
                    transition={{
                      duration: 1.05,
                      repeat: Infinity,
                      repeatDelay: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      pointer-events-none

                      absolute

                      -left-[40%]
                      top-[-20%]

                      h-[150%]
                      w-[32%]

                      rotate-[18deg]

                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                    "
                  />
                )}
              </motion.div>
            </div>

            {/* =================================================
                TEXT
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 7,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-2
                text-center
              "
            >
              <p
                className="
                  text-[18px]
                  font-bold

                  tracking-[-0.03em]

                  text-[#10233D]

                  sm:text-[19px]
                "
              >
                Tax India Firm
              </p>

              <p
                className="
                  mt-1.5

                  text-[9px]
                  font-semibold
                  uppercase

                  tracking-[0.19em]

                  text-[#8393A7]
                "
              >
                Business • Tax • Compliance
              </p>
            </motion.div>

            {/* =================================================
                LOADING BAR
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 6,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.12,
              }}
              className="
                mt-7

                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  relative

                  h-[3px]
                  w-[145px]

                  overflow-hidden

                  rounded-full

                  bg-[#DFE9F6]
                "
              >
                {reduceMotion ? (
                  <div
                    className="
                      h-full
                      w-[75%]

                      rounded-full

                      bg-[#2563EB]
                    "
                  />
                ) : (
                  <motion.div
                    initial={{
                      x: "-110%",
                    }}
                    animate={{
                      x: "300%",
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-y-0

                      w-[42%]

                      rounded-full

                      bg-gradient-to-r
                      from-[#93C5FD]
                      via-[#2563EB]
                      to-[#60A5FA]

                      will-change-transform
                    "
                  />
                )}
              </div>

              <motion.p
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.5,
                          1,
                          0.5,
                        ],
                      }
                }
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mt-3

                  text-[10px]
                  font-medium

                  tracking-[0.03em]

                  text-[#8494A8]
                "
              >
                Loading your experience...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}