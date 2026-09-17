"use client";

import type { FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   CONTACT OFFICE
========================================================= */

export default function ContactOffice() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your FastAPI/contact API here.
    console.log("Contact form submitted");
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-[180px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#246EF1]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[50px] h-[460px] w-[460px] rounded-full bg-[#8DBAFF]/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
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
                width: 36,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#246EF1] sm:text-[10px]">
              Visit & Connect
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 36,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease,
              }}
              className="h-[2px] rounded-full bg-[#246EF1]"
            />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 24,
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
              duration: 0.72,
              delay: 0.05,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[850px]

              !text-[34px]
              !font-[700]
              !leading-[1.05]
              !tracking-[-0.045em]
              !text-[#112842]

              sm:!text-[42px]
              md:!text-[46px]
              lg:!text-[52px]
            "
          >
            Tell us about your requirement.
            <span className="block !text-[#246EF1]">
              Or visit our Chennai office.
            </span>
          </motion.h2>

          <motion.p
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
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[690px]

              text-[14px]
              leading-7
              text-[#64778E]

              sm:text-[15px]
              sm:leading-8
            "
          >
            Share your details with our team for a professional consultation,
            or visit Tax India Firm in Royapettah, Chennai.
          </motion.p>
        </div>

        {/* =====================================================
            FORM + MAP CONTAINER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 36,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mt-12

            overflow-hidden

            rounded-[28px]

            border
            border-[#D7E3F0]

            bg-white

            shadow-[0_30px_90px_rgba(31,67,112,0.10)]

            sm:mt-14
            sm:rounded-[34px]

            lg:mt-16
            lg:rounded-[38px]
          "
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* =================================================
                LEFT - FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease,
              }}
              className="
                relative
                overflow-hidden

                bg-[#FAFCFF]

                p-5

                sm:p-7
                md:p-8

                lg:p-9
                xl:p-11
              "
            >
              {/* FORM DECORATION */}

              <div className="pointer-events-none absolute -left-[150px] -top-[160px] h-[350px] w-[350px] rounded-full bg-[#246EF1]/[0.055] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-[170px] right-[-160px] h-[350px] w-[350px] rounded-full bg-[#8EBEFF]/[0.06] blur-[110px]" />

              <div className="relative z-10">
                {/* FORM HEADER */}

                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-[15px]

                      bg-[#EAF3FF]

                      text-[#246EF1]

                      shadow-[0_8px_22px_rgba(36,110,241,0.08)]
                    "
                  >
                    <MessageIcon />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#246EF1]">
                      Send An Enquiry
                    </p>

                    <h3
                      className="
                        mt-1.5

                        !text-[23px]
                        !font-[700]
                        !leading-[1.15]
                        !tracking-[-0.03em]
                        !text-[#17314E]

                        sm:!text-[27px]
                      "
                    >
                      How can we help you?
                    </h3>

                    <p className="mt-2 max-w-[470px] text-[13px] leading-6 text-[#718397]">
                      Fill in your details and briefly tell us about your
                      business or professional requirement.
                    </p>
                  </div>
                </div>

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* NAME */}

                    <FormField
                      id="name"
                      label="Your Name"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      icon={<UserIcon />}
                    />

                    {/* PHONE */}

                    <FormField
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                      icon={<PhoneIcon />}
                    />

                    {/* EMAIL */}

                    <div className="sm:col-span-2">
                      <FormField
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        icon={<MailIcon />}
                      />
                    </div>

                    {/* MESSAGE */}

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="
                          mb-2
                          block

                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.14em]

                          text-[#71859A]
                        "
                      >
                        Your Message
                      </label>

                      <div className="group relative">
                        <div
                          className="
                            pointer-events-none

                            absolute
                            left-4
                            top-[18px]

                            text-[#9AADC0]

                            transition-colors
                            duration-300

                            group-focus-within:text-[#246EF1]
                          "
                        >
                          <SmallMessageIcon />
                        </div>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us briefly about your requirement..."
                          className="
                            min-h-[140px]
                            w-full
                            resize-none

                            rounded-[16px]

                            border
                            border-[#D7E2EE]

                            bg-white

                            py-4
                            pl-12
                            pr-4

                            text-[13px]
                            leading-6
                            text-[#17314E]

                            outline-none

                            transition-all
                            duration-300

                            placeholder:text-[#A3B1C0]

                            hover:border-[#BAD0EB]

                            focus:border-[#8CB6EE]
                            focus:shadow-[0_0_0_4px_rgba(36,110,241,0.07)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* FORM BOTTOM */}

                  <div
                    className="
                      mt-6

                      flex
                      flex-col
                      gap-5

                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div className="flex max-w-[320px] items-start gap-2.5">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#246EF1]">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 12L10 16L18 8"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <p className="text-[10px] leading-5 text-[#8A9BAE]">
                        Our team will review your enquiry and get back to you
                        regarding the appropriate next step.
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        group

                        inline-flex
                        min-h-[50px]

                        shrink-0

                        items-center
                        justify-center

                        gap-3

                        rounded-full

                        bg-[#246EF1]

                        px-6

                        text-[13px]
                        font-semibold

                        !text-white

                        shadow-[0_12px_30px_rgba(36,110,241,0.20)]

                        transition-all
                        duration-300

                        hover:bg-[#1D5FD8]
                        hover:shadow-[0_16px_38px_rgba(36,110,241,0.26)]
                      "
                    >
                      <span className="!text-white">
                        Send Enquiry
                      </span>

                      <span
                        className="
                          flex
                          h-6
                          w-6

                          items-center
                          justify-center

                          rounded-full

                          bg-white/[0.14]

                          !text-white

                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT - MAP
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.82,
                delay: 0.1,
                ease,
              }}
              className="
                relative

                min-h-[450px]

                overflow-hidden

                bg-[#EAF0F7]

                sm:min-h-[520px]

                lg:min-h-[650px]
              "
            >
              {/* =================================================
                  EXACT GOOGLE MAP
              ================================================= */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.384803242119!2d80.25284907794853!3d13.055060254439475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80f9254126c553d9%3A0x3704d142cc994ec6!2sTax%20India%20Firm!5e1!3m2!1sen!2sin!4v1789658630897!5m2!1sen!2sin"
                title="Contact Tax India Firm Chennai office consultation"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  border-0
                "
              />

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE FORM FIELD
========================================================= */

function FormField({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  icon,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  icon: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block

          text-[9px]
          font-bold
          uppercase
          tracking-[0.14em]

          text-[#71859A]
        "
      >
        {label}
      </label>

      <div className="group relative">
        {/* ICON */}

        <div
          className="
            pointer-events-none

            absolute
            left-4
            top-1/2

            -translate-y-1/2

            text-[#9AADC0]

            transition-colors
            duration-300

            group-focus-within:text-[#246EF1]
          "
        >
          {icon}
        </div>

        {/* INPUT */}

        <input
          id={id}
          name={id}
          type={type}
          required
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="
            h-[54px]
            w-full

            rounded-[15px]

            border
            border-[#D7E2EE]

            bg-white

            pl-12
            pr-4

            text-[13px]
            text-[#17314E]

            outline-none

            transition-all
            duration-300

            placeholder:text-[#A3B1C0]

            hover:border-[#BAD0EB]

            focus:border-[#8CB6EE]
            focus:shadow-[0_0_0_4px_rgba(36,110,241,0.07)]
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   USER ICON
========================================================= */

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M5.5 20C5.8 16.3 8.3 14.2 12 14.2C15.7 14.2 18.2 16.3 18.5 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 4H5.5C4.67 4 4 4.67 4 5.5C4 13.51 10.49 20 18.5 20C19.33 20 20 19.33 20 18.5V17L16 15L14.5 17C11.2 15.6 8.4 12.8 7 9.5L9 8L7 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   EMAIL ICON
========================================================= */

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M5 7L12 12L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   LARGE MESSAGE ICON
========================================================= */

function MessageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 4H19C20.1 4 21 4.9 21 6V15C21 16.1 20.1 17 19 17H10L5 21V17C3.9 17 3 16.1 3 15V6C3 4.9 3.9 4 5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M7.5 9H16.5M7.5 12H13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   SMALL MESSAGE ICON
========================================================= */

function SmallMessageIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5H19C20.1 5 21 5.9 21 7V15C21 16.1 20.1 17 19 17H10L5 20V17C3.9 17 3 16.1 3 15V7C3 5.9 3.9 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M7.5 9.5H16.5M7.5 12.5H14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   LOCATION ICON
========================================================= */

function LocationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 10C19 15 12 21 12 21C12 21 5 15 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}