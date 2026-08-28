"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type IconType =
  | "registration"
  | "license"
  | "compliance"
  | "gst"
  | "tax"
  | "itr"
  | "location"
  | "ip"
  | "contracts";

type SubMenuItem = {
  name: string;
  href: string;
  icon: IconType;
};

type NavigationItem = {
  name: string;
  href: string;
  matchPath: string;
  submenu?: SubMenuItem[];
};

/* =========================================================
   NAVIGATION
========================================================= */

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    matchPath: "/",
  },

  {
    name: "Business",
    href: "/business",
    matchPath: "/business",
    submenu: [
      {
        name: "Registration",
        href: "/business/registration",
        icon: "registration",
      },
      {
        name: "License",
        href: "/business/license",
        icon: "license",
      },
      {
        name: "Compliance",
        href: "/business/compliance",
        icon: "compliance",
      },
    ],
  },

  {
    name: "Taxation",
    href: "/taxation",
    matchPath: "/taxation",
    submenu: [
      {
        name: "GST",
        href: "/taxation/gst",
        icon: "gst",
      },
      {
        name: "Tax Filing",
        href: "/taxation/tax-filing",
        icon: "tax",
      },
    ],
  },

  {
    name: "Income Tax",
    href: "/itr/income-tax-return-filing",
    matchPath: "/itr",
    submenu: [
      {
        name: "Income Tax Return Filing",
        href: "/itr/income-tax-return-filing",
        icon: "itr",
      },
      {
        name: "Income Tax Filing in Chennai",
        href: "/itr/income-tax-filing-in-chennai",
        icon: "location",
      },
    ],
  },

  {
    name: "Legal Services",
    href: "/legal",
    matchPath: "/legal",
    submenu: [
      {
        name: "Intellectual Property",
        href: "/legal/ip",
        icon: "ip",
      },
      {
        name: "Contracts",
        href: "/legal/contracts",
        icon: "contracts",
      },
    ],
  },

  {
    name: "About Us",
    href: "/about-us",
    matchPath: "/about-us",
  },

  {
    name: "Blogs",
    href: "/blogs",
    matchPath: "/blogs",
  },
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [desktopDropdown, setDesktopDropdown] =
    useState<string | null>(null);

  const [mobileDropdown, setMobileDropdown] =
    useState<string | null>(null);

  /* =========================================================
     ACTIVE MAIN MENU
  ========================================================= */

  const isActive = (item: NavigationItem) => {
    if (item.matchPath === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(item.matchPath);
  };

  /* =========================================================
     ACTIVE SUBMENU
  ========================================================= */

  const isSubMenuActive = (href: string) => {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /* =========================================================
     CLOSE MENU AFTER ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  /* =========================================================
     MOBILE BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* =====================================================
          HEADER OUTER
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          w-full
          bg-white
          border-b
          border-[#E9EDF3]
        "
      >
        {/* ===================================================
            HEADER SURFACE
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-none
            overflow-visible
            bg-white
          "
        >
          {/* =================================================
              HEADER INNER
          ================================================= */}

          <div
            className="
              relative
              mx-auto

              flex
              h-[70px]
              w-full

              max-w-[1440px]

              items-center
              justify-between

              px-4

              sm:h-[74px]
              sm:px-6

              md:px-8

              lg:h-[78px]
              lg:px-7

              xl:px-10

              2xl:px-12
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="Tax India Firm Home"
              className="
                group
                relative
                z-10

                flex
                shrink-0
                items-center
              "
            >
              <Image
                src="/icons/taxindia-logo.png"
                alt="Tax India Firm"
                width={190}
                height={60}
                priority
                className="
                  h-auto
                  w-[130px]

                  object-contain

                  transition-transform
                  duration-300

                  group-hover:scale-[1.025]

                  sm:w-[145px]

                  xl:w-[160px]
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden h-full lg:flex">
              <ul
                className="
                  flex
                  h-full
                  items-center

                  gap-[2px]

                  xl:gap-[5px]

                  2xl:gap-[8px]
                "
              >
                {navigation.map((item) => {
                  const active =
                    isActive(item);

                  const hasDropdown =
                    item.submenu &&
                    item.submenu.length > 0;

                  const dropdownOpen =
                    desktopDropdown ===
                    item.name;

                  return (
                    <li
                      key={item.name}
                      className="
                        relative
                        flex
                        h-full
                        items-center
                      "
                      onMouseEnter={() => {
                        if (hasDropdown) {
                          setDesktopDropdown(
                            item.name,
                          );
                        }
                      }}
                      onMouseLeave={() => {
                        setDesktopDropdown(null);
                      }}
                    >
                      {/* =========================================
                          MAIN NAV LINK
                      ========================================= */}

                      <Link
                        href={item.href}
                        className={`
                          group

                          relative

                          flex
                          h-[42px]

                          items-center

                          gap-[5px]

                          rounded-full

                          px-[10px]

                          font-body

                          text-[12px]
                          font-semibold

                          whitespace-nowrap

                          transition-all
                          duration-300

                          xl:px-[13px]
                          xl:text-[13px]

                          2xl:px-[15px]
                          2xl:text-[14px]

                          ${
                            active
                              ? `
                                bg-white/82

                                text-[#246EF1]

                                shadow-[0_6px_20px_rgba(36,110,241,0.12)]
                              `
                              : `
                                text-[#234968]

                                hover:bg-white/45

                                hover:text-[#176FC1]
                              `
                          }
                        `}
                      >
                        <span>
                          {item.name}
                        </span>

                        {hasDropdown && (
                          <ChevronIcon
                            open={
                              dropdownOpen
                            }
                          />
                        )}
                      </Link>

                      {/* =========================================
                          DESKTOP DROPDOWN
                      ========================================= */}

                      {hasDropdown && (
                        <div
                          className={`
                            absolute

                            left-1/2

                            top-[calc(100%-7px)]

                            w-[310px]

                            -translate-x-1/2

                            pt-[15px]

                            transition-all
                            duration-300

                            ${
                              dropdownOpen
                                ? `
                                  visible

                                  translate-y-0

                                  scale-100

                                  opacity-100
                                `
                                : `
                                  invisible

                                  pointer-events-none

                                  -translate-y-2

                                  scale-[0.97]

                                  opacity-0
                                `
                            }
                          `}
                        >
                          {/* POINTER */}

                          <div
                            className="
                              absolute

                              left-1/2
                              top-[10px]

                              h-[12px]
                              w-[12px]

                              -translate-x-1/2
                              rotate-45

                              border-l
                              border-t
                              border-[#E5EAF2]

                              bg-white
                            "
                          />

                          {/* =====================================
                              DROPDOWN CARD
                          ===================================== */}

                          <div
                            className="
                              relative

                              overflow-hidden

                              rounded-[22px]

                              border
                              border-[#E5EAF2]

                              bg-white/95

                              p-[9px]

                              shadow-[0_22px_60px_rgba(18,35,60,0.17)]

                              backdrop-blur-xl
                            "
                          >
                            {/* DECORATIVE CURVE */}

                            <div
                              className="
                                pointer-events-none

                                absolute

                                -right-[40px]
                                -top-[55px]

                                h-[120px]
                                w-[120px]

                                rounded-full

                                bg-[#126FC5]/10
                              "
                            />

                            <div className="relative space-y-[6px]">
                              {item.submenu?.map(
                                (
                                  subItem,
                                ) => {
                                  const subActive =
                                    isSubMenuActive(
                                      subItem.href,
                                    );

                                  return (
                                    <Link
                                      key={
                                        subItem.href
                                      }
                                      href={
                                        subItem.href
                                      }
                                      className={`
                                        group/sub

                                        relative

                                        flex
                                        min-h-[58px]

                                        items-center

                                        gap-3

                                        overflow-hidden

                                        rounded-[15px]

                                        px-3
                                        py-[9px]

                                        transition-all
                                        duration-300

                                        ${
                                          subActive
                                            ? `
                                              bg-[#246EF1]

                                              text-white

                                              shadow-[0_7px_20px_rgba(36,110,241,0.22)]
                                            `
                                            : `
                                              bg-[#F7F9FC]

                                              text-[#263446]

                                              hover:-translate-y-[1px]

                                              hover:bg-[#EEF4FF]

                                              hover:shadow-[0_7px_20px_rgba(20,45,80,0.08)]
                                            `
                                        }
                                      `}
                                    >
                                      {/* LEFT HOVER ACCENT */}

                                      {!subActive && (
                                        <span
                                          className="
                                            absolute

                                            inset-y-0
                                            left-0

                                            w-0

                                            bg-[#246EF1]

                                            opacity-0

                                            transition-all
                                            duration-300

                                            group-hover/sub:w-[4px]

                                            group-hover/sub:opacity-100
                                          "
                                        />
                                      )}

                                      {/* ICON */}

                                      <span
                                        className={`
                                          relative

                                          flex

                                          h-[40px]
                                          w-[40px]

                                          shrink-0

                                          items-center
                                          justify-center

                                          rounded-[12px]

                                          transition-all
                                          duration-300

                                          ${
                                            subActive
                                              ? `
                                                bg-white/15

                                                text-white
                                              `
                                              : `
                                                bg-white

                                                text-[#246EF1]

                                                shadow-[0_4px_12px_rgba(20,40,70,0.08)]

                                                group-hover/sub:rotate-[-3deg]

                                                group-hover/sub:scale-105

                                                group-hover/sub:bg-[#246EF1]

                                                group-hover/sub:text-white
                                              `
                                          }
                                        `}
                                      >
                                        <SubMenuIcon
                                          type={
                                            subItem.icon
                                          }
                                        />
                                      </span>

                                      {/* NAME */}

                                      <span
                                        className="
                                          relative

                                          flex-1

                                          font-heading

                                          text-[13px]

                                          font-semibold

                                          leading-[1.3]

                                          xl:text-[13.5px]
                                        "
                                      >
                                        {
                                          subItem.name
                                        }
                                      </span>

                                      {/* ARROW */}

                                      <span
                                        className={`
                                          relative

                                          flex

                                          h-[28px]
                                          w-[28px]

                                          shrink-0

                                          items-center
                                          justify-center

                                          rounded-full

                                          transition-all
                                          duration-300

                                          ${
                                            subActive
                                              ? `
                                                bg-white/15

                                                text-white
                                              `
                                              : `
                                                bg-white

                                                text-[#A2ACBA]

                                                group-hover/sub:translate-x-[3px]

                                                group-hover/sub:text-[#246EF1]
                                              `
                                          }
                                        `}
                                      >
                                        <ArrowRightIcon />
                                      </span>
                                    </Link>
                                  );
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* =================================================
                DESKTOP CONTACT
            ================================================= */}

            <div className="hidden shrink-0 lg:flex">
              <Link
                href="/contact-us"
                className="
                  group
                  relative

                  flex

                  h-[44px]

                  items-center
                  justify-center

                  gap-[8px]

                  rounded-full

                  bg-[#246EF1]

                  px-[18px]

                  font-body

                  text-[13px]
                  font-semibold

                  !text-white

                  shadow-[0_8px_24px_rgba(18,111,197,0.28)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]

                  hover:bg-[#0B5DA9]

                  hover:shadow-[0_12px_30px_rgba(18,111,197,0.36)]

                  xl:px-[21px]

                  xl:text-[14px]
                "
              >
                <MessageIcon />

                <span className="!text-white">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={
                mobileMenuOpen
              }
              onClick={() => {
                setMobileMenuOpen(
                  (previous) =>
                    !previous,
                );
              }}
              className="
                flex

                h-[42px]
                w-[42px]

                items-center
                justify-center

                rounded-full

                border
                border-white/55

                bg-white/60

                text-[#173E60]

                shadow-[0_4px_15px_rgba(20,40,70,0.08)]

                transition-all
                duration-300

                hover:border-[#246EF1]/30

                hover:text-[#246EF1]

                lg:hidden
              "
            >
              {mobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <div
            className={`
              absolute

              left-0
              top-full

              w-full

              transition-all
              duration-300

              lg:hidden
              mt-0
              rounded-b-[20px]

              ${
                mobileMenuOpen
                  ? `
                    visible

                    max-h-[calc(100vh-90px)]

                    opacity-100
                  `
                  : `
                    invisible

                    max-h-0

                    overflow-hidden

                    opacity-0
                  `
              }
            `}
          >
            <nav
              className="
                max-h-[calc(100vh-95px)]

                overflow-y-auto

                border
                border-[#E6EBF2]

                bg-white/97

                px-3

                pb-5
                pt-3

                shadow-[0_22px_50px_rgba(15,31,55,0.15)]

                backdrop-blur-xl

                sm:px-5
              "
            >
              <ul className="space-y-[5px]">
                {navigation.map(
                  (item) => {
                    const active =
                      isActive(item);

                    const hasDropdown =
                      item.submenu &&
                      item.submenu
                        .length > 0;

                    const submenuOpen =
                      mobileDropdown ===
                      item.name;

                    return (
                      <li
                        key={
                          item.name
                        }
                      >
                        {hasDropdown ? (
                          <>
                            {/* MOBILE MAIN ITEM */}

                            <div
                              className={`
                                flex

                                min-h-[50px]

                                items-center

                                rounded-[14px]

                                px-1

                                transition-all
                                duration-300

                                ${
                                  active
                                    ? "bg-[#EEF4FF]"
                                    : "hover:bg-[#F7F9FC]"
                                }
                              `}
                            >
                              <Link
                                href={
                                  item.href
                                }
                                className={`
                                  flex

                                  min-h-[50px]

                                  flex-1

                                  items-center

                                  px-3

                                  font-body

                                  text-[14px]

                                  font-semibold

                                  ${
                                    active
                                      ? "text-[#246EF1]"
                                      : "text-[#3E4A5A]"
                                  }
                                `}
                              >
                                {
                                  item.name
                                }
                              </Link>

                              <button
                                type="button"
                                aria-label={`Toggle ${item.name} submenu`}
                                aria-expanded={
                                  submenuOpen
                                }
                                onClick={() => {
                                  setMobileDropdown(
                                    submenuOpen
                                      ? null
                                      : item.name,
                                  );
                                }}
                                className={`
                                  mr-1

                                  flex

                                  h-[38px]
                                  w-[38px]

                                  items-center
                                  justify-center

                                  rounded-full

                                  transition-all
                                  duration-300

                                  ${
                                    submenuOpen
                                      ? `
                                        bg-[#246EF1]

                                        text-white
                                      `
                                      : `
                                        bg-white

                                        text-[#687486]

                                        shadow-[0_3px_10px_rgba(20,40,70,0.07)]
                                      `
                                  }
                                `}
                              >
                                <ChevronIcon
                                  open={
                                    submenuOpen
                                  }
                                />
                              </button>
                            </div>

                            {/* MOBILE SUBMENU */}

                            <div
                              className={`
                                overflow-hidden

                                transition-all
                                duration-300

                                ${
                                  submenuOpen
                                    ? `
                                      max-h-[430px]

                                      pb-2
                                      pt-2

                                      opacity-100
                                    `
                                    : `
                                      max-h-0

                                      opacity-0
                                    `
                                }
                              `}
                            >
                              <div
                                className="
                                  ml-2

                                  grid

                                  gap-[6px]

                                  rounded-[16px]

                                  bg-[#F5F8FC]

                                  p-[7px]
                                "
                              >
                                {item.submenu?.map(
                                  (
                                    subItem,
                                  ) => {
                                    const subActive =
                                      isSubMenuActive(
                                        subItem.href,
                                      );

                                    return (
                                      <Link
                                        key={
                                          subItem.href
                                        }
                                        href={
                                          subItem.href
                                        }
                                        className={`
                                          flex

                                          min-h-[54px]

                                          items-center

                                          gap-3

                                          rounded-[13px]

                                          px-3
                                          py-2

                                          transition-all
                                          duration-300

                                          ${
                                            subActive
                                              ? `
                                                bg-[#246EF1]

                                                text-white
                                              `
                                              : `
                                                bg-white

                                                text-[#2C3949]

                                                shadow-[0_3px_12px_rgba(20,40,70,0.05)]

                                                active:scale-[0.98]
                                              `
                                          }
                                        `}
                                      >
                                        {/* MOBILE ICON */}

                                        <span
                                          className={`
                                            flex

                                            h-[38px]
                                            w-[38px]

                                            shrink-0

                                            items-center
                                            justify-center

                                            rounded-[11px]

                                            ${
                                              subActive
                                                ? `
                                                  bg-white/15

                                                  text-white
                                                `
                                                : `
                                                  bg-[#EEF4FF]

                                                  text-[#246EF1]
                                                `
                                            }
                                          `}
                                        >
                                          <SubMenuIcon
                                            type={
                                              subItem.icon
                                            }
                                          />
                                        </span>

                                        {/* MOBILE NAME */}

                                        <span
                                          className="
                                            flex-1

                                            font-heading

                                            text-[13px]

                                            font-semibold
                                          "
                                        >
                                          {
                                            subItem.name
                                          }
                                        </span>

                                        <span
                                          className={`
                                            flex

                                            h-[27px]
                                            w-[27px]

                                            items-center
                                            justify-center

                                            rounded-full

                                            ${
                                              subActive
                                                ? `
                                                  bg-white/15

                                                  text-white
                                                `
                                                : `
                                                  bg-[#F6F8FB]

                                                  text-[#8994A3]
                                                `
                                            }
                                          `}
                                        >
                                          <ArrowRightIcon />
                                        </span>
                                      </Link>
                                    );
                                  },
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          /* NORMAL MOBILE ITEM */

                          <Link
                            href={
                              item.href
                            }
                            className={`
                              flex

                              min-h-[50px]

                              items-center

                              rounded-[14px]

                              px-4

                              font-body

                              text-[14px]

                              font-semibold

                              transition-all
                              duration-200

                              ${
                                active
                                  ? `
                                    bg-[#EEF4FF]

                                    text-[#246EF1]
                                  `
                                  : `
                                    text-[#3E4A5A]

                                    hover:bg-[#F7F9FC]
                                  `
                              }
                            `}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    );
                  },
                )}
              </ul>

              {/* MOBILE CONTACT */}

              <Link
                href="/contact-us"
                className="
                  mt-4

                  flex

                  h-[50px]

                  w-full

                  items-center
                  justify-center

                  gap-2

                  rounded-full

                  bg-[#246EF1]

                  font-body

                  text-[14px]

                  font-semibold

                  !text-white

                  shadow-[0_8px_22px_rgba(36,110,241,0.25)]

                  transition-all
                  duration-300

                  active:scale-[0.98]
                "
              >
                <MessageIcon />

                <span className="!text-white">
                  Contact Us
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <button
        type="button"
        aria-label="Close mobile navigation"
        onClick={() => {
          setMobileMenuOpen(false);
        }}
        className={`
          fixed

          inset-0

          z-[90]

          bg-[#0B1628]/30

          backdrop-blur-[3px]

          transition-all
          duration-300

          lg:hidden

          ${
            mobileMenuOpen
              ? `
                pointer-events-auto

                opacity-100
              `
              : `
                pointer-events-none

                opacity-0
              `
          }
        `}
      />
    </>
  );
}

/* =========================================================
   SUBMENU ICONS
========================================================= */

function SubMenuIcon({
  type,
}: {
  type: IconType;
}) {
  const iconClass =
    "h-[20px] w-[20px]";

  /* REGISTRATION */

  if (type === "registration") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M4 21V7.5L12 3L20 7.5V21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M8 10H10M14 10H16M8 14H10M14 14H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M9 21V17H15V21"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* LICENSE */

  if (type === "license") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M6 3H18C19.1 3 20 3.9 20 5V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V5C4 3.9 4.9 3 6 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8 8H16M8 12H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <circle
          cx="15.5"
          cy="16"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M14.4 17.7L14 20L15.5 19.2L17 20L16.6 17.7"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* COMPLIANCE */

  if (type === "compliance") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M8.7 12L11 14.3L15.7 9.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* GST */

  if (type === "gst") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M4 6H20V18H4V6Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M7 10H10M7 14H9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M14 9L17 15M17 9L14 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* TAX */

  if (type === "tax") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M7 3H17L20 6V21H4V3H7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M17 3V7H20"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8 11H16M8 15H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ITR */

  if (type === "itr") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8 8H16M8 12H11M14 12H16M8 16H11M14 16H16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* LOCATION */

  if (type === "location") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <path
          d="M20 10C20 15.5 12 21 12 21C12 21 4 15.5 4 10C4 5.58 7.58 3 12 3C16.42 3 20 5.58 20 10Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  /* IP */

  if (type === "ip") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
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
          d="M9 16V8H12.5C14.43 8 16 9.57 16 11.5C16 13.43 14.43 15 12.5 15H9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* CONTRACT */

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      aria-hidden="true"
    >
      <path
        d="M6 3H15L19 7V21H6V3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M15 3V7H19"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 11H16M9 15H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M13 19L17.5 14.5L19.5 16.5L15 21H13V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   CHEVRON
========================================================= */

function ChevronIcon({
  open = false,
}: {
  open?: boolean;
}) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`
        transition-transform
        duration-300

        ${open ? "rotate-180" : ""}
      `}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   ARROW RIGHT
========================================================= */

function ArrowRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MESSAGE
========================================================= */

function MessageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 11.5C21 16.2 16.75 20 11.5 20C10.37 20 9.29 19.82 8.29 19.5L3 21L4.55 16.58C3.57 15.14 3 13.4 3 11.5C3 6.81 7.25 3 12.5 3C17.75 3 21 6.81 21 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 9H16M8 13H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   MENU
========================================================= */

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7H19M5 12H19M5 17H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   CLOSE
========================================================= */

function CloseIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}