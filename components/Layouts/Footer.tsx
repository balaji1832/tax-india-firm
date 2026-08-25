import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
   SERVICE COLUMNS
   - Reorganised to match the reference footer structure
   - Existing site routes are preserved
========================================================= */

const footerSections: FooterSection[] = [
  {
    title: "Business Registration",
    href: "/business/registration",
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
        name: "Partnership Registration",
        href: "/business/registration/partnership-firm-registration",
      },
      {
        name: "Sole Proprietorship",
        href: "/business/registration/sole-proprietorship-registration",
      },
      {
        name: "Trust Registration",
        href: "/business/registration/trust-registration",
      },
      {
        name: "Society Registration",
        href: "/business/registration/society-registration",
      },
    ],
  },
  {
    title: "License Registration",
    href: "/business/license",
    links: [
      {
        name: "MSME Registration",
        href: "/business/license/msme-udyam-registration",
      },
      {
        name: "FSSAI Registration",
        href: "/business/license/fssai-registration",
      },
      {
        name: "IE Code Registration",
        href: "/business/license/import-export-code-registration",
      },
      {
        name: "ESI & PF Registration",
        href: "/business/license/esi-pf-registration",
      },
      {
        name: "ISO Certification",
        href: "/business/license/iso-certification",
      },
      {
        name: "APEDA Registration",
        href: "/business/license/apeda-registration",
      },
      {
        name: "Labour License",
        href: "/business/license/labour-license-registration",
      },
    ],
  },
  {
    title: "Taxation",
    href: "/taxation",
    links: [
      {
        name: "GST Registration",
        href: "/taxation/gst/gst-registration",
      },
      {
        name: "GST Return Filing",
        href: "/taxation/gst/gst-return-filing",
      },
      {
        name: "GST Compliance",
        href: "/taxation/gst",
      },
      {
        name: "TDS / TCS Return Filing",
        href: "/taxation/tax-filing/tds-tcs-return-filing",
      },
      {
        name: "Income Tax Filing",
        href: "/itr/income-tax-return-filing",
      },
      {
        name: "Company ROC Filing",
        href: "/business/compliance/company-roc-filing",
      },
      {
        name: "Tax Planning Advisory",
        href: "/taxation/tax-filing/tax-planning-advisory",
      },
    ],
  },
  {
    title: "Legal Services",
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
        name: "Joint Venture Agreement",
        href: "/legal/contracts/joint-venture-agreement",
      },
      {
        name: "Franchise Agreement",
        href: "/legal/contracts/franchise-agreement",
      },
      {
        name: "MOU Agreement",
        href: "/legal/contracts/mou-agreement",
      },
      {
        name: "Employment Agreement",
        href: "/legal/contracts/employment-agreement",
      },
    ],
  },
];

const bottomLinks: FooterLink[] = [
  { name: "About Us", href: "/about-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Contact Us", href: "/contact-us" },
];

/* =========================================================
   COMPANY DETAILS
   These values are taken from the reference supplied.
========================================================= */

const company = {
  phone1: "+91 9962674040",
  phone2: "+91 9962115050",
  phone1Href: "tel:+919962674040",
  phone2Href: "tel:+919962115050",
  email1: "info@taxindiafirm.com",
  email2: "admin@taxindiafirm.com",
  email1Href: "mailto:info@taxindiafirm.com",
  email2Href: "mailto:admin@taxindiafirm.com",
  address:
    "#10/32, 3rd Floor, Balaji Towers, Thiruvika Rd, opp. Sathyam Theatre, Royapettah, Chennai, Tamil Nadu 600014",
  whatsapp: "https://wa.me/919962674040",
};

/* =========================================================
   FOOTER
========================================================= */

export default function Footer({
  isoSrc = "/icons/iso-certified.png",
}: {
  isoSrc?: string;
}) {
  return (
    <footer className="relative w-full overflow-hidden bg-[#07111F] !text-white">
      {/* soft background depth - no loud pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-40 h-[360px] w-[360px] rounded-full bg-[#0B72C5]/[0.08] blur-3xl" />
        <div className="absolute -right-36 top-20 h-[420px] w-[420px] rounded-full bg-[#1578C7]/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* =====================================================
            TOP SERVICES
        ===================================================== */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4 lg:gap-x-10 lg:py-16">
          {footerSections.map((section) => (
            <section key={section.title} className="min-w-0">
              <Link
                href={section.href}
                className="group inline-flex items-center gap-2 font-heading text-[15px] font-bold tracking-[-0.015em] !text-white transition-colors duration-300 hover:!text-[#AEE1FF] sm:text-[16px]"
              >
                {section.title}
                <span className="h-[5px] w-[5px] rounded-full bg-[#2D93E5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex max-w-full items-start gap-2.5 font-body text-[12.5px] leading-[1.55] !text-white/80 transition-colors duration-300 hover:!text-white sm:text-[13px]"
                    >
                      <ChevronIcon className="mt-[3px] h-[13px] w-[13px] shrink-0 text-[#2995EA] transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="break-words transition-transform duration-300 group-hover:translate-x-[2px]">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="h-px w-full bg-white/[0.10]" />

        {/* =====================================================
            COMPANY / CONTACT ROW
        ===================================================== */}
        <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 sm:gap-7 sm:py-12 xl:grid-cols-[0.9fr_1fr_1.15fr_1.35fr] xl:gap-8">
          {/* ISO */}
          <InfoPanel className="items-center text-center sm:items-start sm:text-left xl:items-center xl:text-center">
            <div className="flex h-[118px] w-[118px] items-center justify-center rounded-[24px] border border-white/[0.08] bg-white/[0.045] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:h-[126px] sm:w-[126px]">
              <Image
                src={isoSrc}
                alt="ISO 9001:2015 Certified Company"
                width={150}
                height={150}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-5">
              <h3 className="font-heading text-[16px] font-bold !text-white">
                ISO Certified Company
              </h3>
              <p className="mt-2 max-w-[240px] font-body text-[12px] leading-5 !text-white/70">
                Quality-driven professional services backed by structured processes.
              </p>
            </div>
          </InfoPanel>

          {/* Contact */}
          <InfoPanel>
            <PanelTitle icon={<PhoneIcon className="h-[18px] w-[18px]" />}>
              Contact Us
            </PanelTitle>

            <div className="mt-5 space-y-5">
              <div>
                <InfoLabel>Phone</InfoLabel>
                <div className="mt-2 space-y-2">
                  <ContactLink href={company.phone1Href}>{company.phone1}</ContactLink>
                  <ContactLink href={company.phone2Href}>{company.phone2}</ContactLink>
                </div>
              </div>

              <div>
                <InfoLabel>E-Mail</InfoLabel>
                <div className="mt-2 space-y-2">
                  <ContactLink href={company.email1Href}>{company.email1}</ContactLink>
                  <ContactLink href={company.email2Href}>{company.email2}</ContactLink>
                </div>
              </div>
            </div>
          </InfoPanel>

          {/* Office */}
          <InfoPanel>
            <PanelTitle icon={<BuildingIcon className="h-[18px] w-[18px]" />}>
              Tax India Firm
            </PanelTitle>

            <p className="mt-5 max-w-[310px] font-body text-[12.5px] leading-[1.8] !text-white/80 sm:text-[13px]">
              {company.address}
            </p>

            <div className="mt-6">
              <InfoLabel>Office Hours</InfoLabel>
              <div className="mt-2 space-y-1.5 font-body text-[12.5px] leading-5 !text-white/80">
                <p>Monday to Saturday: 10:00 AM – 9:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </InfoPanel>

          {/* Map */}
          <InfoPanel>
            <PanelTitle icon={<LocationIcon className="h-[18px] w-[18px]" />}>
              Head Office Location
            </PanelTitle>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#0B1826] shadow-[0_18px_45px_rgba(0,0,0,0.20)]">
              <iframe
                title="Tax India Firm Head Office"
                src="https://www.google.com/maps?q=Tax%20India%20Firm%20Royapettah%20Chennai&output=embed"
                width="100%"
                height="190"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0 grayscale-[0.08]"
              />
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 flex w-full items-center justify-between gap-3 rounded-[14px] border border-[#24B35A]/30 bg-[#24B35A]/[0.08] px-4 py-3 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#24B35A]/55 hover:bg-[#24B35A]/[0.13]"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#24B35A]/15 text-[#43D879]">
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block font-body text-[11px] !text-white/65">
                    Need help with a service?
                  </span>
                  <span className="mt-[2px] block truncate font-heading text-[13px] font-semibold !text-white">
                    Chat with our team
                  </span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-[17px] w-[17px] shrink-0 text-[#43D879] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </InfoPanel>
        </div>

        <div className="h-px w-full bg-white/[0.10]" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[11.5px] !text-white/70 transition-colors duration-300 hover:!text-white sm:text-[12px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="max-w-[780px] font-body text-[11px] leading-5 !text-white/55 lg:text-right sm:text-[11.5px]">
            © {new Date().getFullYear()} Tax India Firm. All rights reserved | Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function InfoPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        flex
        min-w-0
        flex-col
        rounded-[22px]
        border
        border-white/[0.08]
        bg-white/[0.035]
        p-5
        transition-[border-color,background-color,transform,box-shadow]
        duration-300
        ease-out
        hover:-translate-y-[2px]
        hover:border-[#2D93E5]/35
        hover:bg-white/[0.05]
        hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)]
        sm:p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function PanelTitle({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#0B72C5]/15 text-[#56B3F5]">
        {icon}
      </span>
      <h3 className="font-heading text-[16px] font-bold !text-white">
        {children}
      </h3>
    </div>
  );
}

function InfoLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.08em] !text-white/70">
      {children}
    </p>
  );
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 font-body text-[12.5px] !text-white/80 transition-colors duration-300 hover:!text-white sm:text-[13px]"
    >
      <ChevronIcon className="h-[12px] w-[12px] shrink-0 text-[#2995EA] transition-transform duration-300 group-hover:translate-x-1" />
      <span className="break-all">{children}</span>
    </a>
  );
}

/* =========================================================
   ICONS
========================================================= */

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.62"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.3 3H4.8C3.8 3 3 3.8 3 4.8C3 13.75 10.25 21 19.2 21C20.2 21 21 20.2 21 19.2V16.7L16.8 15.6L15.7 18C12.15 16.55 9.45 13.85 8 10.3L10.4 9.2L9.3 5L7.3 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 21V4H15V21" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 9H20V21" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 8H11M8 12H11M8 16H11M17 13H18M17 17H18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 10C20 15.25 12 21 12 21C12 21 4 15.25 4 10C4 5.58 7.58 3 12 3C16.42 3 20 5.58 20 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.4 11.8C20.4 16.4 16.65 20.1 12 20.1C10.55 20.1 9.2 19.75 8 19.1L3.8 20.2L4.9 16.15C4.15 14.9 3.7 13.4 3.7 11.8C3.7 7.2 7.45 3.5 12 3.5C16.65 3.5 20.4 7.2 20.4 11.8Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path
        d="M9.05 7.8C9.25 7.55 9.55 7.55 9.75 7.55H10.05C10.2 7.55 10.35 7.6 10.45 7.85L11.2 9.6C11.3 9.85 11.25 10.05 11.1 10.25L10.55 10.95C11.15 12.25 12.15 13.25 13.5 13.85L14.2 13.25C14.4 13.1 14.6 13.05 14.85 13.15L16.55 13.95C16.8 14.05 16.85 14.2 16.85 14.35V14.65C16.85 14.9 16.8 15.15 16.55 15.35C16.2 15.65 15.6 16 14.65 16C13.65 16 12.4 15.65 11.05 14.45C9.5 13.1 8.55 11.45 8.25 10.2C8 9.25 8.4 8.2 9.05 7.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}