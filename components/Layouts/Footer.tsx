import Image from "next/image";
import Link from "next/link";

/* =========================================================
   TYPES
========================================================= */

type FooterLink = {
  name: string;
  href: string;
};

type FooterSection = {
  title: string;
  href: string;
  links: FooterLink[];
};

/* =========================================================
   FOOTER SECTIONS
========================================================= */

const footerSections: FooterSection[] = [
  {
    title: "BUSINESS",
    href: "/business",
    links: [
      {
        name: "Pvt Ltd Registration",
        href: "/business/registration/private-limited-company-registration",
      },
      {
        name: "LLP Registration",
        href: "/business/registration/llp-registration",
      },
      {
        name: "OPC Registration",
        href: "/business/registration/one-person-company-opc-registration",
      },
      {
        name: "FSSAI Registration",
        href: "/business/license/fssai-registration",
      },
      {
        name: "MSME Registration",
        href: "/business/license/msme-udyam-registration",
      },
      {
        name: "ROC Filing Chennai",
        href: "/business/compliance/company-roc-filing",
      },
    ],
  },

  {
    title: "TAXATION",
    href: "/taxation",
    links: [
      {
        name: "GST Registration",
        href: "/taxation/gst/gst-registration",
      },
      {
        name: "GST Filing Chennai",
        href: "/taxation/gst/gst-filing-chennai",
      },
      {
        name: "GST Return Filing",
        href: "/taxation/gst/gst-return-filing",
      },
      {
        name: "Income Tax Return Filing",
        href: "/itr/income-tax-return-filing",
      },
      {
        name: "TDS Return Filing",
        href: "/taxation/tax-filing/tds-tcs-return-filing",
      },
      {
        name: "Accounting & Bookkeeping",
        href: "/taxation/tax-filing/accounting-bookkeeping-services",
      },
      {
        name: "Capital Gains Tax Advisory",
        href: "/taxation/tax-filing/capital-gains-tax-advisory",
      },
    ],
  },

  {
    title: "LEGAL",
    href: "/legal",
    links: [
      {
        name: "Trademark Registration",
        href: "/legal/ip/trademark-registration",
      },
      {
        name: "Copyright Registration",
        href: "/legal/ip/copyright-registration",
      },
      {
        name: "Patent Registration",
        href: "/legal/ip/patent-registration",
      },
      {
        name: "NDA Drafting",
        href: "/legal/contracts/non-disclosure-agreement-nda",
      },
      {
        name: "Franchise Agreement",
        href: "/legal/contracts/franchise-agreement",
      },
      {
        name: "Employment Agreement",
        href: "/legal/contracts/employment-agreement",
      },
    ],
  },

  {
    title: "COMPANY",
    href: "/about-us",
    links: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Blog & Guides",
        href: "/blogs",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
      },
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Sitemap",
        href: "/sitemap",
      },
    ],
  },
];

/* =========================================================
   BOTTOM LINKS
========================================================= */

const bottomLinks: FooterLink[] = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Sitemap",
    href: "/sitemap",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

/* =========================================================
   CONTACT LINKS
========================================================= */

const contactItems = [
  {
    name: "Email",
    href: "/contact-us",
    icon: "email",
  },
  {
    name: "Phone",
    href: "/contact-us",
    icon: "phone",
  },
  {
    name: "Location",
    href: "/contact-us",
    icon: "location",
  },
] as const;

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="w-full bg-[#071321] text-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1720px]

          px-5
          pb-6
          pt-10

          sm:px-7
          sm:pb-7
          sm:pt-12

          md:px-10
          md:pt-14

          lg:px-12

          xl:px-16
          xl:pb-8
          xl:pt-16

          2xl:px-[88px]
        "
      >
        {/* =================================================
            TOP FOOTER

            MOBILE / TABLET
            Brand = full width
            Links = 2 columns

            DESKTOP
            Brand + 4 columns
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-y-10

            xl:grid-cols-[1.05fr_4fr]
            xl:gap-x-16
            xl:gap-y-0

            2xl:gap-x-[90px]
          "
        >
          {/* =================================================
              BRAND AREA - FULL WIDTH MOBILE / TABLET
          ================================================= */}

          <div className="w-full">
            {/* LOGO */}

            <Link
              href="/"
              aria-label="Tax India Firm Home"
              className="inline-flex items-center"
            >
              <Image
                src="/icons/footer-logo.webp"
                alt="Tax India Firm"
                width={190}
                height={65}
                className="
                  h-auto
                  w-[145px]
                  object-contain

                  sm:w-[155px]

                  md:w-[160px]

                  xl:w-[175px]
                "
              />
            </Link>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-[300px]

                font-body
                text-[14px]
                font-normal
                leading-[1.8]

                text-[#91A0B4]

                sm:max-w-[330px]
                sm:text-[14px]

                md:max-w-[380px]

                xl:mt-7
                xl:max-w-[220px]
                xl:text-[15px]
                xl:leading-[1.85]
              "
            >
              Chennai&apos;s trusted CA firm for GST, ITR, company
              registration, legal agreements and business compliance across
              Tamil Nadu since 2013.
            </p>

            {/* CONTACT ICONS */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-[18px]

                xl:mt-7
              "
            >
              {contactItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center

                    text-[#91A0B4]

                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:text-white
                  "
                >
                  <ContactIcon type={item.icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              LINK COLUMNS

              MOBILE = 2
              TABLET = 2
              DESKTOP = 4
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2

              gap-x-6
              gap-y-10

              sm:gap-x-10
              sm:gap-y-12

              md:gap-x-16

              lg:gap-x-20

              xl:grid-cols-4
              xl:gap-x-10
              xl:gap-y-0

              2xl:gap-x-[70px]
            "
          >
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="min-w-0"
              >
                {/* =============================================
                    COLUMN HEADING
                ============================================= */}

                <Link
                  href={section.href}
                  className="
                    inline-block

                    font-heading
                    text-[12px]
                    font-bold

                    tracking-[0.04em]

                    text-white

                    transition-colors
                    duration-200

                    hover:text-[#246EF1]

                    sm:text-[13px]

                    md:text-[13px]

                    xl:text-[14px]

                    2xl:text-[15px]
                  "
                >
                  {section.title}
                </Link>

                {/* =============================================
                    COLUMN LINKS
                ============================================= */}

                <ul
                  className="
                    mt-5
                    space-y-[10px]

                    sm:mt-[22px]
                    sm:space-y-[11px]

                    md:space-y-[12px]

                    xl:mt-5
                    xl:space-y-[12px]
                  "
                >
                  {section.links.map((link) => (
                    <li
                      key={link.href}
                      className="min-w-0"
                    >
                      <Link
                        href={link.href}
                        className="
                          group

                          inline-flex

                          max-w-full

                          font-body
                          text-[12px]
                          font-normal
                          leading-[1.5]

                          text-[#91A0B4]

                          transition-colors
                          duration-200

                          hover:text-white

                          sm:text-[12.5px]

                          md:text-[13px]

                          lg:text-[13px]

                          xl:text-[14px]

                          2xl:text-[15px]
                        "
                      >
                        <span
                          className="
                            break-words

                            transition-transform
                            duration-200

                            group-hover:translate-x-[3px]
                          "
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            mt-11
            h-px
            w-full
            bg-[#1D2B3D]

            sm:mt-12

            md:mt-14

            xl:mt-[68px]
          "
        />

        {/* =================================================
            BOTTOM FOOTER
        ================================================= */}

        <div
          className="
            flex
            flex-col

            gap-4

            pb-1
            pt-6

            sm:gap-5

            md:pt-7

            lg:flex-row
            lg:items-center
            lg:justify-between

            xl:pt-8
          "
        >
          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <p
            className="
              max-w-[850px]

              font-body
              text-[11px]
              font-normal
              leading-[1.7]

              text-[#7790AD]

              sm:text-[12px]

              md:text-[13px]

              xl:text-[14px]

              2xl:text-[15px]
            "
          >
            © {new Date().getFullYear()} Tax India Firm. All rights reserved.
            ISO 9001:2015 Certified | Chennai, Tamil Nadu
          </p>

          {/* =================================================
              BOTTOM LINKS
          ================================================= */}

          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-5
              gap-y-2

              lg:shrink-0
              lg:justify-end

              xl:gap-x-8
            "
          >
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  font-body
                  text-[11px]
                  font-normal

                  text-[#7790AD]

                  transition-colors
                  duration-200

                  hover:text-white

                  sm:text-[12px]

                  md:text-[13px]

                  xl:text-[14px]

                  2xl:text-[15px]
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   CONTACT ICONS
========================================================= */

function ContactIcon({
  type,
}: {
  type: "email" | "phone" | "location";
}) {
  /* =======================================================
     EMAIL
  ======================================================= */

  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="
          h-[20px]
          w-[20px]

          sm:h-[21px]
          sm:w-[21px]

          xl:h-[22px]
          xl:w-[22px]
        "
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="1.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M4 7L12 13L20 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* =======================================================
     PHONE
  ======================================================= */

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="
          h-[20px]
          w-[20px]

          sm:h-[21px]
          sm:w-[21px]

          xl:h-[22px]
          xl:w-[22px]
        "
        aria-hidden="true"
      >
        <path
          d="M7.4 3H4.8C3.8 3 3 3.8 3 4.8C3 13.75 10.25 21 19.2 21C20.2 21 21 20.2 21 19.2V16.6L16.7 15.6L15.7 18C12.15 16.5 9.5 13.85 8 10.3L10.4 9.3L9.4 5L7.4 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* =======================================================
     LOCATION
  ======================================================= */

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="
        h-[21px]
        w-[21px]

        sm:h-[22px]
        sm:w-[22px]

        xl:h-[23px]
        xl:w-[23px]
      "
      aria-hidden="true"
    >
      <path
        d="M20 10C20 15.25 12 21 12 21C12 21 4 15.25 4 10C4 5.58 7.58 3 12 3C16.42 3 20 5.58 20 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}