"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    question: "What is Tax India Firm?",
    answer:
      "Tax India Firm is a Chennai-based professional services firm providing taxation, accounting, business setup, compliance, legal and related professional services to entrepreneurs and businesses.",
  },
  {
    question: "Where is Tax India Firm based?",
    answer:
      "Tax India Firm is based in Royapettah, Chennai, Tamil Nadu.",
  },
  {
    question: "When was Tax India Firm established?",
    answer:
      "The existing website states that Tax India Firm has been operating since 2013.",
  },
  {
    question: "What services does Tax India Firm provide?",
    answer:
      "The firm provides business setup and registration, taxation, accounting, GST and compliance, legal and corporate services and other business support services.",
  },
  {
    question: "Does Tax India Firm support startups?",
    answer:
      "Yes. Supporting entrepreneurs with startup and business requirements is part of the firm's service offering, along with services for businesses beyond the initial startup stage.",
  },
  {
    question: "Does Tax India Firm provide legal services?",
    answer:
      "Yes. The firm's offering includes legal and corporate services, including business contracts, intellectual property and other business-related legal requirements.",
  },
  {
    question: "Does Tax India Firm provide accounting and taxation services?",
    answer:
      "Yes. Accounting, taxation and related compliance services form part of the firm's professional service offering.",
  },
];

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-[160px] top-[120px] h-[380px] w-[380px] rounded-full bg-[#246EF1]/[0.045] blur-[110px]" />

      <div className="pointer-events-none absolute -right-[170px] bottom-[80px] h-[420px] w-[420px] rounded-full bg-[#8EBEFF]/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 42,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#246EF1] sm:text-[10px]">
              Frequently Asked Questions
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 42,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />
          </motion.div>

          {/* Heading - One line desktop/tablet */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.05,
              ease,
            }}
            className="
              mx-auto
              mt-5

              !text-[34px]
              !font-[700]
              !leading-[1.08]
              !tracking-[-0.045em]
              !text-[#112842]

              sm:!text-[40px]
              md:!text-[46px]
              lg:!text-[50px]
              xl:!text-[54px]

              sm:whitespace-nowrap
            "
          >
            Your questions.{" "}
            <motion.span
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.22,
                ease,
              }}
              className="inline !text-[#246EF1]"
            >
              Answered clearly.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[760px]

              text-[13px]
              leading-6
              text-[#64778E]

              sm:text-[14px]
              sm:leading-7

              lg:text-[15px]
              lg:leading-8
            "
          >
            Find quick answers about Tax India Firm, our professional services
            and how we support businesses at different stages.
          </motion.p>
        </div>

        {/* =====================================================
            FAQ CONTAINER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[980px]

            rounded-[28px]

            border
            border-[#DCE6F1]

            bg-[#F9FBFE]

            p-3

            shadow-[0_24px_70px_rgba(31,67,112,0.07)]

            sm:mt-14
            sm:rounded-[32px]
            sm:p-4

            lg:mt-16
          "
        >
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  layout
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.04,
                    ease,
                  }}
                  className={`
                    group
                    relative

                    overflow-hidden

                    rounded-[20px]

                    border

                    transition-[border-color,background-color,box-shadow]
                    duration-300

                    sm:rounded-[22px]

                    ${
                      open
                        ? "border-[#B6D1F5] bg-[#EEF5FF] shadow-[0_12px_35px_rgba(36,110,241,0.07)]"
                        : "border-[#E1E8F1] bg-white hover:border-[#C7D9EF]"
                    }
                  `}
                >
                  {/* Active left line */}

                  <motion.div
                    animate={{
                      scaleY: open ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0

                      w-[3px]

                      origin-center

                      bg-[#246EF1]
                    "
                  />

                  {/* Question Button */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(open ? null : index)
                    }
                    aria-expanded={open}
                    className="
                      flex
                      w-full
                      items-center

                      gap-4

                      px-4
                      py-5

                      text-left

                      sm:gap-5
                      sm:px-6
                      sm:py-6

                      lg:px-7
                    "
                  >
                    {/* Icon */}

                    <motion.div
                      animate={{
                        backgroundColor: open ? "#246EF1" : "#EAF3FF",
                        color: open ? "#FFFFFF" : "#246EF1",
                        scale: open ? 1 : 0.96,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-[14px]

                        sm:h-12
                        sm:w-12
                      "
                    >
                      <FaqIcon />
                    </motion.div>

                    {/* Question */}

                    <span
                      className="
                        flex-1

                        !text-[15px]
                        !font-semibold
                        !leading-6
                        !tracking-[-0.018em]

                        !text-[#17314E]

                        sm:!text-[17px]

                        lg:!text-[18px]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Plus */}

                    <motion.div
                      animate={{
                        rotate: open ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease,
                      }}
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border

                        text-[18px]

                        transition-colors
                        duration-300

                        sm:h-10
                        sm:w-10

                        ${
                          open
                            ? "border-[#246EF1] bg-[#246EF1] !text-white"
                            : "border-[#D4E1F0] bg-white text-[#246EF1]"
                        }
                      `}
                    >
                      +
                    </motion.div>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.45,
                            ease,
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{
                            y: 10,
                          }}
                          animate={{
                            y: 0,
                          }}
                          exit={{
                            y: 6,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 0.05,
                            ease,
                          }}
                          className="
                            px-4
                            pb-5

                            sm:px-6
                            sm:pb-6

                            lg:px-7
                          "
                        >
                          <div
                            className="
                              ml-[60px]

                              border-t
                              border-[#CEDFF4]

                              pt-4

                              sm:ml-[68px]
                              sm:pt-5
                            "
                          >
                            <p
                              className="
                                max-w-[760px]

                                text-[13px]
                                leading-7

                                text-[#61758C]

                                sm:text-[14px]

                                lg:text-[15px]
                                lg:leading-8
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        {/* <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-6
            flex
            max-w-[900px]

            flex-col
            gap-5

            rounded-[22px]

            border
            border-[#DCE6F1]

            bg-white

            px-5
            py-5

            shadow-[0_12px_35px_rgba(31,67,112,0.05)]

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-[14px]

                bg-[#102F50]

                text-[#9BC5FF]
              "
            >
              <ChatIcon />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#97A8B9]">
                Still have a question?
              </p>

              <p className="mt-1 !text-[15px] !font-semibold !text-[#203A55] sm:!text-[16px]">
                Talk to our team about your requirement.
              </p>
            </div>
          </div>

          <a
            href="/contact-us"
            className="
              ml-[60px]

              inline-flex
              min-h-[46px]

              items-center
              justify-center

              gap-2

              rounded-full

              bg-[#246EF1]

              px-5

              text-[12px]
              font-semibold

              !text-white

              shadow-[0_10px_25px_rgba(36,110,241,0.18)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#1C5FDC]
              hover:shadow-[0_15px_35px_rgba(36,110,241,0.24)]

              sm:ml-0
            "
          >
            <span className="!text-white">
              Contact us
            </span>

            <span className="!text-white">
              ↗
            </span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

/* =========================================================
   FAQ ICON
========================================================= */

function FaqIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.9 9.1C9.1 7.25 10.45 6 12.4 6C14.45 6 16 7.25 16 9.1C16 10.55 15.15 11.45 13.7 12.25C12.4 13 11.9 13.75 11.9 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="11.9"
        cy="18.1"
        r="1"
        fill="currentColor"
      />

      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* =========================================================
   CHAT ICON
========================================================= */

function ChatIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5.8C4 4.8 4.8 4 5.8 4H18.2C19.2 4 20 4.8 20 5.8V14.2C20 15.2 19.2 16 18.2 16H10L6 20V16H5.8C4.8 16 4 15.2 4 14.2V5.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M8 9H16M8 12H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}