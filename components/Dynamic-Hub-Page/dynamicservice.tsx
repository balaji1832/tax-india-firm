"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  Layers3,
  Plus,
  ShieldCheck,
} from "lucide-react";

/* TYPES */

export type ServiceItem = {
  title: string;
  paragraphs: string[];
  link?: {
    label: string;
    href: string;
  };
};

export type ServiceSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items?: ServiceItem[];
  layout:
    | "intro"
    | "catalog"
    | "selector"
    | "industries"
    | "editorial"
    | "timeline"
    | "benefits"
    | "cta"
    | "faq";
};

export type DynamicServiceData = {
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    paragraphs: string[];
    supportTitle: string;
    support: string[];
  };
  breadcrumb: {
    label: string;
    href?: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
  images: {
    hero: string;
    heroAlt: string;
    office: string;
    officeAlt: string;
  };
  logoSrc?: string;
  location: string;
  sections: ServiceSection[];
};

type Props = {
  data: DynamicServiceData;
  headerOffset?: number;
};

/* SHARED ELEMENTS */

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
        part.startsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Copy({ texts }: { texts: string[] }) {
  if (!texts.length) return null;

  return (
    <div className="gst-copy">
      {texts.map((text, index) => (
        <p key={index}>
          <Rich text={text} />
        </p>
      ))}
    </div>
  );
}

function Button({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="gst-button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      <span className="gst-button-icon">
        <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </motion.a>
  );
}

function Photo({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className="gst-image-fallback"
        role="img"
        aria-label={alt}
      >
        <Layers3 size={54} strokeWidth={1} aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      sizes="(min-width: 1024px) 650px, 100vw"
      className="gst-image"
      onError={() => setFailed(true)}
    />
  );
}

function Logo({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <span className="gst-logo-text">
        Tax India <small>Firm</small>
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="Tax India Firm"
      width={140}
      height={42}
      unoptimized
      className="gst-logo"
      onError={() => setFailed(true)}
    />
  );
}

function Heading({
  section,
  number,
}: {
  section: ServiceSection;
  number: number;
}) {
  return (
    <div className="gst-heading" data-gst-reveal>
      <p className="gst-eyebrow">
        <span>{String(number).padStart(2, "0")}</span>
        {section.eyebrow}
      </p>
      <h2>{section.title}</h2>
    </div>
  );
}

function ItemLink({ item }: { item: ServiceItem }) {
  if (!item.link) return null;

  return (
    <Link href={item.link.href} className="gst-item-link">
      <span>{item.link.label}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

function SectionTop({
  section,
  number,
}: {
  section: ServiceSection;
  number: number;
}) {
  return (
    <div className="gst-section-top">
      <Heading section={section} number={number} />
      <div data-gst-reveal>
        <Copy texts={section.paragraphs} />
      </div>
    </div>
  );
}

/* RESTORED COMPLIANCE ILLUSTRATION */

function ComplianceIllustration() {
  return (
    <div
      className="gst-compliance-art"
      data-gst-reveal
      aria-hidden="true"
    >
      <div className="gst-art-halo" />

      <div className="gst-art-sheet gst-art-sheet-back">
        <span />
        <span />
        <span />
      </div>

      <div className="gst-art-sheet gst-art-sheet-middle">
        <span />
        <span />
        <span />
      </div>

      <div className="gst-art-sheet gst-art-sheet-front">
        <ShieldCheck size={64} strokeWidth={1.25} />
        <div className="gst-art-document-lines">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="gst-art-check">
        <Check size={19} strokeWidth={2} />
      </div>
    </div>
  );
}

/* FAQ WITHOUT SEARCH */

function FAQSection({
  section,
  number,
  data,
}: {
  section: ServiceSection;
  number: number;
  data: DynamicServiceData;
}) {
  return (
    <section id={section.id} className="gst-section gst-faq">
      <div className="gst-container gst-faq-layout">
        <div className="gst-faq-intro">
          <Heading section={section} number={number} />

          <div className="gst-faq-description" data-gst-reveal>
            <Copy texts={section.paragraphs} />
          </div>

          <Link
            href={data.cta.href}
            className="gst-faq-contact"
            data-gst-reveal
          >
            {data.cta.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="gst-faq-list">
          {(section.items ?? []).map((item, index) => (
            <details
              key={item.title}
              className="gst-question"
              data-gst-reveal
            >
              <summary>
                <span className="gst-question-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <span className="gst-question-toggle">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </summary>

              <div className="gst-answer">
                <Copy texts={item.paragraphs} />
                <ItemLink item={item} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTIONS */

function SectionView({
  section,
  number,
  data,
}: {
  section: ServiceSection;
  number: number;
  data: DynamicServiceData;
}) {
  const items = section.items ?? [];
  const reducedMotion = useReducedMotion();

  if (section.layout === "intro") {
    return (
      <section id={section.id} className="gst-section gst-overview">
        <div className="gst-container">
          <div className="gst-section-top">
            <Heading section={section} number={number} />
            <div data-gst-reveal>
              <Copy texts={section.paragraphs.slice(0, 1)} />
            </div>
          </div>

          <div className="gst-overview-grid">
            {section.paragraphs.slice(1).map((text, index) => (
              <article
                key={index}
                className={`gst-overview-card ${
                  index === 2 ? "gst-overview-featured" : ""
                }`}
                data-gst-reveal
              >
                <span className="gst-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p><Rich text={text} /></p>
              </article>
            ))}
          </div>

          <div className="gst-overview-banner" data-gst-reveal>
            <Photo
              src={data.images.office}
              alt={data.images.officeAlt}
            />
            <div className="gst-overview-overlay" />
            <div className="gst-overview-caption">
              <ShieldCheck size={25} aria-hidden="true" />
              <p>{data.hero.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "catalog") {
    const hasTenServices = items.length === 10;

    return (
      <section id={section.id} className="gst-section gst-services">
        <div className="gst-container">
          <SectionTop section={section} number={number} />

          <div
            className={`gst-service-grid ${
              hasTenServices ? "gst-service-grid-ten" : ""
            }`}
          >
            {items.map((item, index) => {
              const featured =
                hasTenServices &&
                (index === 0 || index === items.length - 1);

              /*
               * Ten services:
               * First and last are wide matching blue cards.
               *
               * All other counts:
               * Every card occupies one column.
               */
              const tone = featured
                ? "gst-service-featured"
                : `tone-${hasTenServices ? (index - 1) % 3 : index % 3}`;

              return (
                <div
                  key={item.title}
                  className={`gst-service-wrap ${
                    featured ? "gst-service-wide" : ""
                  }`}
                  data-gst-reveal
                >
                  <motion.article
                    className={`gst-service-card ${tone}`}
                    whileHover={
                      reducedMotion ? undefined : { y: -5 }
                    }
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <div className="gst-service-meta">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <FileText
                        size={24}
                        strokeWidth={1.3}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{item.title}</h3>
                    <Copy texts={item.paragraphs} />
                    <ItemLink item={item} />
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "selector") {
    return (
      <section id={section.id} className="gst-section gst-requirements">
        <div className="gst-container">
          <SectionTop section={section} number={number} />
          <div className="gst-requirement-grid">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="gst-requirement-card"
                data-gst-reveal
              >
                <span className="gst-requirement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <Copy texts={item.paragraphs} />
                  <ItemLink item={item} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "industries") {
    return (
      <section id={section.id} className="gst-section gst-industries">
        <div className="gst-container">
          <SectionTop section={section} number={number} />
          <div className="gst-industry-list">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="gst-industry-row"
                data-gst-reveal
              >
                <span className="gst-industry-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <Copy texts={item.paragraphs} />
                <Layers3
                  size={23}
                  strokeWidth={1.2}
                  className="gst-industry-icon"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "editorial") {
    return (
      <section id={section.id} className="gst-section gst-editorial">
        <div className="gst-container gst-editorial-layout">
          <div className="gst-editorial-intro">
            <Heading section={section} number={number} />
            <ComplianceIllustration />
          </div>

          <div className="gst-editorial-content">
            {section.paragraphs[0] && (
              <p className="gst-lead" data-gst-reveal>
                <Rich text={section.paragraphs[0]} />
              </p>
            )}

            <div data-gst-reveal>
              <Copy texts={section.paragraphs.slice(1)} />
            </div>

            {items.map((item) => (
              <article
                key={item.title}
                className="gst-editorial-item"
                data-gst-reveal
              >
                <h3>{item.title}</h3>
                <Copy texts={item.paragraphs} />
                <ItemLink item={item} />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "timeline") {
    return (
      <section id={section.id} className="gst-section gst-support">
        <div className="gst-container">
          <SectionTop section={section} number={number} />
          <div className="gst-support-grid">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="gst-support-step"
                data-gst-reveal
              >
                <span className="gst-step-dot" aria-hidden="true" />
                <p className="gst-step-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{item.title}</h3>
                <Copy texts={item.paragraphs} />
                <ItemLink item={item} />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "benefits") {
    return (
      <section id={section.id} className="gst-section gst-benefits">
        <div className="gst-container gst-benefits-layout">
          <div className="gst-benefits-intro">
            <Heading section={section} number={number} />
            <div data-gst-reveal>
              <Copy texts={section.paragraphs} />
            </div>
          </div>

          <div className="gst-benefit-list">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="gst-benefit-card"
                data-gst-reveal
              >
                <span className="gst-benefit-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <Copy texts={item.paragraphs} />
                  <ItemLink item={item} />
                </div>
                <Check
                  size={17}
                  className="gst-benefit-check"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.layout === "cta") {
    return (
      <section id={section.id} className="gst-section gst-consultation">
        <div className="gst-container">
          <div className="gst-consultation-top">
            <Heading section={section} number={number} />
            <div className="gst-consultation-action" data-gst-reveal>
              <p>{data.hero.tagline}</p>
              <Button href={data.cta.href}>{data.cta.label}</Button>
              <span>{data.location}</span>
            </div>
          </div>

          <div className="gst-consultation-copy">
            <div data-gst-reveal>
              <Copy texts={section.paragraphs.slice(0, 2)} />
            </div>
            <div data-gst-reveal>
              <Copy texts={section.paragraphs.slice(2)} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <FAQSection section={section} number={number} data={data} />
  );
}

/* MAIN COMPONENT */

export default function DynamicService({
  data,
  headerOffset = 88,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  const firstService =
    data.sections.find((section) => section.layout === "catalog")?.id ??
    data.sections[0]?.id;

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        if (progress.current) {
          gsap.fromTo(
            progress.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            },
          );
        }

        const pending = Array.from(
          element.querySelectorAll<HTMLElement>("[data-gst-reveal]"),
        ).filter(
          (target) =>
            target.getBoundingClientRect().top >
            window.innerHeight * 0.94,
        );

        gsap.set(pending, { autoAlpha: 0, y: 24 });

        ScrollTrigger.batch(pending, {
          start: "top 94%",
          once: true,
          interval: 0.08,
          batchMax: 3,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.09,
              ease: "power3.out",
              overwrite: "auto",
              clearProps: "opacity,visibility,transform",
            });
          },
        });

        element
          .querySelectorAll<HTMLElement>(".gst-support-step")
          .forEach((step) => {
            gsap.fromTo(
              step,
              { "--line-fill": 0 },
              {
                "--line-fill": 1,
                ease: "none",
                scrollTrigger: {
                  trigger: step,
                  start: "top 86%",
                  end: "bottom 58%",
                  scrub: 0.6,
                },
              },
            );
          });
      },
      element,
    );

    return () => media.revert();
  }, [data]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={root}
        className="gst-root"
        style={
          { "--gst-header": `${headerOffset}px` } as CSSProperties
        }
      >
        <div
          ref={progress}
          className="gst-reading-progress"
          aria-hidden="true"
        />

        <section className="gst-hero">
          <div className="gst-container">
            <nav className="gst-breadcrumb" aria-label="Breadcrumb">
              {data.breadcrumb.map((item, index) => (
                <span key={`${item.label}-${index}`}>
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span aria-current="page">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <div className="gst-hero-grid">
              <div className="gst-hero-content">
                <p className="gst-eyebrow">
                  <span className="gst-location-dot" />
                  {data.location}
                </p>

                <h1>{data.hero.title}</h1>
                <p className="gst-hero-subtitle">{data.hero.subtitle}</p>

                <div className="gst-hero-actions">
                  <Button href={data.cta.href}>{data.cta.label}</Button>
                  {firstService && (
                    <a
                      href={`#${firstService}`}
                      className="gst-explore-link"
                    >
                      Explore our services
                      <ArrowDown size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <div className="gst-hero-photo">
                <Photo
                  src={data.images.hero}
                  alt={data.images.heroAlt}
                  priority
                />
                <div className="gst-hero-photo-overlay" />
                <div className="gst-brand">
                  <Logo src={data.logoSrc} />
                </div>
                <div className="gst-hero-photo-caption">
                  <p>{data.hero.tagline}</p>
                  <span>
                    <ShieldCheck size={17} aria-hidden="true" />
                    {data.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="gst-hero-bottom">
              <div>
                <p className="gst-small-label">
                  {data.hero.supportTitle}
                </p>
                <ul>
                  {data.hero.support.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Copy texts={data.hero.paragraphs} />
            </div>
          </div>
        </section>

        {data.sections.map((section, index) => (
          <SectionView
            key={section.id}
            section={section}
            number={index + 1}
            data={data}
          />
        ))}

        <style>{STYLES}</style>
      </div>
    </MotionConfig>
  );
}

/* SCOPED STYLES */

const STYLES = `
.gst-root{
  --gst-blue:#215bf1;
  --gst-ink:#142d50;
  --gst-muted:#657a96;
  --gst-line:#dce6f4;
  background:#fff;
  color:var(--gst-ink);
  font-family:var(--font-satoshi,"Satoshi"),Arial,sans-serif;
  overflow-x:clip;
  -webkit-font-smoothing:antialiased;
}
.gst-root *{box-sizing:border-box}
.gst-root h1,.gst-root h2,.gst-root h3,.gst-root p{margin:0}
.gst-root a{text-decoration:none}
.gst-root svg{flex-shrink:0}
.gst-root [hidden]{display:none!important}
.gst-root :is(a,button,summary):focus-visible{outline:2px solid #80aaff;outline-offset:5px}
.gst-container{width:min(100%,1320px);padding-inline:48px;margin-inline:auto}
.gst-section{padding-block:72px;scroll-margin-top:calc(var(--gst-header) + 20px)}
.gst-root h1,.gst-root h2,.gst-root h3{
  font-family:var(--font-cabinet,"Cabinet Grotesk"),Arial,sans-serif;
  font-weight:600;color:var(--gst-ink);letter-spacing:-.045em;
}
.gst-root h1{font-size:clamp(36px,4vw,54px);line-height:1.08;text-wrap:balance}
.gst-root h2{font-size:clamp(28px,2.65vw,38px);line-height:1.18;text-wrap:balance}
.gst-root h3{font-size:22px;line-height:1.3}
.gst-copy{color:var(--gst-muted);font-size:14px;line-height:1.85}
.gst-copy p+p{margin-top:15px}
.gst-copy strong{font-weight:600;color:inherit}
.gst-eyebrow{
  display:flex;align-items:center;gap:11px;margin-bottom:16px!important;
  font-size:10px;line-height:1.6;font-weight:600;letter-spacing:.13em;
  text-transform:uppercase;color:var(--gst-blue);
}
.gst-eyebrow>span:not(.gst-location-dot){
  display:grid;place-items:center;width:27px;height:27px;border:1px solid #cdddf5;
  border-radius:50%;font-size:9px;letter-spacing:0;color:#7294c5;
}
.gst-small-label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#7a93b5}
.gst-button{
  display:inline-flex;align-items:center;justify-content:space-between;gap:20px;
  min-height:52px;max-width:100%;padding:8px 8px 8px 20px;border-radius:11px;
  background:var(--gst-blue);color:#fff;font-size:13px;line-height:1.5;font-weight:600;
  box-shadow:0 12px 25px -17px #215bf188;
}
.gst-button-icon{
  display:grid;place-items:center;width:35px;height:35px;border-radius:8px;
  background:#ffffff18;flex-shrink:0;
}
.gst-reading-progress{
  position:fixed;top:var(--gst-header);left:0;width:100%;height:2px;z-index:50;
  background:var(--gst-blue);transform:scaleX(0);transform-origin:left;pointer-events:none;
}
.gst-section-top{
  display:grid;grid-template-columns:1fr .95fr;align-items:start;gap:50px;margin-bottom:30px;
}

/* HERO */
.gst-hero{
  padding-top:calc(var(--gst-header) + 24px);padding-bottom:34px;
  background:radial-gradient(ellipse at 90% 10%,#e1ecff90,transparent 55%),linear-gradient(#f8fbff,#fff);
}
.gst-breadcrumb{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px;font-size:11px;color:#9bafcc}
.gst-breadcrumb>span{display:flex;gap:12px}
.gst-breadcrumb a{color:#6e88ae}
.gst-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.gst-hero-content{padding-block:12px}
.gst-location-dot{width:6px;height:6px;border-radius:50%;background:var(--gst-blue);box-shadow:0 0 0 5px #215bf110}
.gst-hero-subtitle{margin-top:20px!important;max-width:510px;color:#7187a5;font-size:15px;line-height:1.85}
.gst-hero-actions{display:flex;align-items:center;flex-wrap:wrap;gap:20px;margin-top:24px}
.gst-explore-link{display:inline-flex;align-items:center;gap:9px;padding-block:12px;color:#5f789d;font-size:12px}
.gst-hero-photo{
  position:relative;height:470px;overflow:hidden;border-radius:65px 20px 20px 20px;
  background:#dae7f9;box-shadow:0 28px 55px -40px #234f9680;transform:none;
}
.gst-image{object-fit:cover}
.gst-image-fallback{
  position:absolute;inset:0;display:grid;place-items:center;color:#5c8fd6;
  background:linear-gradient(135deg,#e4efff,#a4c2ed);
}
.gst-hero-photo-overlay{position:absolute;inset:0;background:linear-gradient(0deg,#082954ef,transparent 75%)}
.gst-brand{position:absolute;top:22px;right:22px;padding:12px 15px;border-radius:11px;background:#fff}
.gst-logo{width:80px;height:auto;max-height:39px;object-fit:contain}
.gst-logo-text{color:var(--gst-blue);font-size:20px;font-weight:600}
.gst-logo-text small{font-size:11px;color:var(--gst-ink)}
.gst-hero-photo-caption{position:absolute;bottom:29px;left:29px;right:29px}
.gst-root .gst-hero-photo-caption>p{max-width:360px;color:#fff;font-size:30px;line-height:1.2;letter-spacing:-.035em}
.gst-hero-photo-caption>span{display:flex;align-items:center;gap:8px;margin-top:16px;color:#b8d0f4;font-size:10px}
.gst-hero-bottom{display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;margin-top:30px;padding-top:25px;border-top:1px solid var(--gst-line)}
.gst-hero-bottom ul{display:grid;grid-template-columns:1fr 1fr;gap:12px 18px;margin:16px 0 0;padding:0;list-style:none}
.gst-hero-bottom li{display:flex;align-items:flex-start;gap:8px;font-size:11px;line-height:1.7;color:#5b769d}
.gst-hero-bottom li svg{margin-top:2px;color:var(--gst-blue)}
.gst-hero-bottom .gst-copy{font-size:13px}

/* OVERVIEW */
.gst-overview-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.gst-overview-card{display:flex;align-items:flex-start;gap:18px;padding:24px;border:1px solid #e0e9f7;border-radius:15px;background:#f8fbff}
.gst-overview-card:nth-child(2){background:#eef5ff}
.gst-card-number{color:#86a6d1;font-size:10px;margin-top:5px;flex-shrink:0}
.gst-overview-card>p{color:#627997;font-size:14px;line-height:1.85}
.gst-overview-featured{grid-column:1/-1;background:#183f75;border-color:#183f75}
.gst-overview-featured>p{color:#e0edff;font-size:17px;line-height:1.75}
.gst-overview-featured .gst-card-number{color:#94b9ec}
.gst-overview-banner{position:relative;height:190px;margin-top:18px;overflow:hidden;border-radius:16px;background:#dbe7f8}
.gst-overview-overlay{position:absolute;inset:0;background:linear-gradient(90deg,#0d3067de,#0d306730)}
.gst-overview-caption{position:absolute;inset:0;display:flex;align-items:center;gap:19px;padding:30px;color:#fff}
.gst-root .gst-overview-caption>p{max-width:570px;color:#fff;font-size:27px;line-height:1.3;letter-spacing:-.035em}

/* SERVICES: NORMAL THREE-COLUMN GRID */
.gst-services{background:#f0f5fd}
.gst-service-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;align-items:stretch}
.gst-service-wrap{min-width:0}
.gst-service-card{
  display:flex;flex-direction:column;height:100%;padding:27px;border:1px solid #dce7f8;
  border-radius:17px;background:#fff;box-shadow:0 17px 35px -32px #214d9580;
}
.gst-service-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;color:#769acd}
.gst-service-meta>span{font-size:10px}
.gst-service-card h3{margin-bottom:15px;font-size:25px}
.gst-service-card>.gst-copy{flex:1;font-size:13px}
.gst-service-card.tone-0{background:#fff}
.gst-service-card.tone-1{background:#e1edff;border-color:#d5e3f9}
.gst-service-card.tone-2{background:#f9fbff}

/* EXACTLY TEN: MATCHING FIRST AND LAST */
.gst-service-grid-ten .gst-service-wide{grid-column:span 2}
.gst-service-featured{background:#143968;border-color:#143968}
.gst-root .gst-service-featured h3{color:#fff!important;font-size:30px;max-width:470px}
.gst-service-featured>.gst-copy{color:#b6cceb;font-size:14px;max-width:650px}
.gst-service-featured .gst-service-meta{color:#8db3ef}
.gst-service-featured .gst-item-link{color:#c3daff;border-color:#8cadd333}

.gst-item-link{
  display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px;
  padding-top:15px;border-top:1px solid #dce7f8;color:var(--gst-blue);
  font-size:12px;line-height:1.6;font-weight:600;
}

/* REQUIREMENTS */
.gst-requirement-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.gst-requirement-card{display:grid;grid-template-columns:40px 1fr;gap:20px;padding:25px;border:1px solid var(--gst-line);border-radius:16px;background:linear-gradient(135deg,#fff,#f7faff)}
.gst-requirement-card:nth-child(even){background:#f2f7ff}
.gst-requirement-number{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#e6efff;color:var(--gst-blue);font-size:11px}
.gst-requirement-card h3{margin:7px 0 14px;font-size:22px}
.gst-requirement-card .gst-copy{font-size:13px}

/* BUSINESS TYPES */
.gst-industries{background:#eff5fd}
.gst-industry-list{border-top:1px solid #d4e0f0}
.gst-industry-row{display:grid;grid-template-columns:35px .85fr 1.15fr 25px;gap:24px;align-items:start;padding:25px 8px;border-bottom:1px solid #d4e0f0;transition:background .25s}
.gst-industry-row:hover{background:#e6effd}
.gst-industry-number{color:#8ba6c9;font-size:10px;margin-top:5px}
.gst-industry-row h3{font-size:22px}
.gst-industry-row .gst-copy{font-size:13px}
.gst-industry-icon{color:#85a9db}

/* EDITORIAL */
.gst-editorial{background:#f9fbff}
.gst-editorial-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;align-items:start}
.gst-editorial-content{padding-left:28px;border-left:2px solid #dce8fb}
.gst-lead{margin-bottom:20px!important;color:#345f95;font-size:22px;line-height:1.55;letter-spacing:-.025em}
.gst-editorial-item{margin-top:24px;padding-top:22px;border-top:1px solid var(--gst-line)}
.gst-editorial-item h3{margin-bottom:13px}

/* RESTORED SHIELD ILLUSTRATION */
.gst-compliance-art{
  position:relative;width:min(100%,350px);height:265px;margin-top:30px;
  isolation:isolate;
}
.gst-art-halo{
  position:absolute;inset:8px 0 0;border-radius:50%;
  background:radial-gradient(ellipse,#dceaff99,transparent 70%);z-index:-1;
}
.gst-art-sheet{
  position:absolute;width:150px;height:190px;border:1px solid #cddff8;
  border-radius:17px;top:30px;
}
.gst-art-sheet-back{left:25px;transform:rotate(-17deg);background:#f0f5ff;padding:30px 22px}
.gst-art-sheet-middle{left:90px;transform:rotate(-3deg);background:#e9f1ff;padding:30px 22px}
.gst-art-sheet-back>span,.gst-art-sheet-middle>span{
  display:block;height:4px;background:#d5e3f8;border-radius:4px;margin-bottom:12px;
}
.gst-art-sheet-back>span:last-child,.gst-art-sheet-middle>span:last-child{width:65%}
.gst-art-sheet-front{
  left:145px;transform:rotate(13deg);background:linear-gradient(145deg,#e4efff,#d7e7ff);
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:21px;
  color:#487ed2;box-shadow:0 23px 38px -25px #386cc65c;
}
.gst-art-document-lines{width:65%}
.gst-art-document-lines>span{
  display:block;height:3px;background:#aec9ee;border-radius:4px;margin-bottom:8px;
}
.gst-art-document-lines>span:last-child{width:65%;margin-inline:auto}
.gst-art-check{
  position:absolute;right:34px;bottom:24px;display:grid;place-items:center;
  width:38px;height:38px;border:5px solid #f9fbff;border-radius:50%;
  color:#fff;background:#4c83dc;box-shadow:0 8px 20px -10px #376dd477;
}

/* SUPPORT TIMELINE */
.gst-support-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}
.gst-support-step{--line-fill:0;--step-color:#2463ef;position:relative;padding-top:28px}
.gst-support-step:nth-child(2){--step-color:#397be9}
.gst-support-step:nth-child(3){--step-color:#1b93d9}
.gst-support-step:nth-child(4){--step-color:#5371eb}
.gst-support-step::before,.gst-support-step::after{content:"";position:absolute;top:0;left:0;width:100%;height:3px;border-radius:5px;pointer-events:none}
.gst-support-step::before{background:#dce8f9}
.gst-support-step::after{background:linear-gradient(90deg,var(--step-color),#9bc5ff);transform:scaleX(var(--line-fill));transform-origin:left}
.gst-step-dot{position:absolute;top:-4px;left:0;z-index:1;width:10px;height:10px;border-radius:50%;background:var(--step-color);box-shadow:0 0 0 5px #edf4ff}
.gst-step-number{margin-bottom:18px!important;font-size:10px;color:var(--step-color)}
.gst-support-step h3{margin-bottom:14px;font-size:21px}
.gst-support-step .gst-copy{font-size:13px}

/* BENEFITS */
.gst-benefits{background:#f3f7ff}
.gst-benefits-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:start}
.gst-benefits-intro .gst-copy{margin-top:20px}
.gst-benefit-list{padding-inline:25px;border:1px solid #dce7f8;border-radius:19px;background:#fff}
.gst-benefit-card{display:grid;grid-template-columns:36px 1fr 17px;gap:18px;padding-block:24px}
.gst-benefit-card+.gst-benefit-card{border-top:1px solid #e2eaf7}
.gst-benefit-number{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:#eef4ff;color:#5488dd;font-size:10px}
.gst-benefit-card h3{margin:4px 0 12px;font-size:22px}
.gst-benefit-card .gst-copy{font-size:13px}
.gst-benefit-check{margin-top:9px;color:#94b4e4}

/* CONSULTATION */
.gst-consultation{background:radial-gradient(ellipse at 0% 0%,#194a8c88,transparent 65%),#0e294f;padding-block:56px}
.gst-consultation-top{display:grid;grid-template-columns:1.15fr .85fr;gap:50px;align-items:center}
.gst-root .gst-consultation h2{max-width:590px;color:#fff!important;font-size:clamp(29px,2.9vw,40px);line-height:1.2}
.gst-consultation .gst-eyebrow{color:#9ac2ff}
.gst-consultation .gst-eyebrow>span{border-color:#6f97d24a;color:#a0c4fc}
.gst-consultation-action{padding:24px;border:1px solid #8cb3e333;border-radius:17px;background:#ffffff05}
.gst-root .gst-consultation-action>p{margin-bottom:18px;color:#eef5ff;font-size:20px;line-height:1.4;letter-spacing:-.02em}
.gst-consultation-action .gst-button{width:100%;color:#215bd4;background:#fff;box-shadow:none}
.gst-consultation-action .gst-button-icon{background:#edf3ff}
.gst-consultation-action>span{display:block;margin-top:13px;color:#9cb5d7;font-size:10px}
.gst-consultation-copy{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:28px;padding-top:24px;border-top:1px solid #8faed32b}
.gst-consultation-copy .gst-copy{color:#b4cae8;font-size:14px}
.gst-consultation-copy strong{color:#f0f6ff}

/* FAQ */
.gst-faq-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:start}
.gst-faq-description{margin-top:18px}
.gst-faq-contact{display:inline-flex;align-items:center;gap:10px;margin-top:22px;color:var(--gst-blue);font-size:12px;font-weight:600}
.gst-question{border-top:1px solid #dce6f4;background:#fff}
.gst-question:last-child{border-bottom:1px solid #dce6f4}
.gst-question summary{display:flex;align-items:flex-start;gap:15px;padding:21px 0;cursor:pointer;list-style:none}
.gst-question summary::-webkit-details-marker{display:none}
.gst-question-number{margin-top:5px;font-size:9px;color:#91a9c8;flex-shrink:0}
.gst-question summary h3{flex:1;font-size:17px;line-height:1.5;letter-spacing:-.02em}
.gst-question-toggle{display:grid;place-items:center;width:28px;height:28px;margin-top:1px;border-radius:8px;color:#6c94d0;background:#f1f6ff;flex-shrink:0;transition:background .25s,color .25s}
.gst-question-toggle svg{transition:transform .3s ease}
.gst-question[open] .gst-question-toggle{color:var(--gst-blue);background:#e8f0ff}
.gst-question[open] .gst-question-toggle svg{transform:rotate(45deg)}
.gst-answer{padding:0 38px 23px 26px}
.gst-answer .gst-copy{font-size:13px}
.gst-question[open] .gst-answer{animation:gst-answer-in .32s ease-out both}
@keyframes gst-answer-in{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}

/* TABLET */
@media(max-width:1100px){
  .gst-container{padding-inline:32px}
  .gst-hero-grid{gap:32px}
  .gst-hero-photo{height:430px}
  .gst-root h1{font-size:45px}
  .gst-section-top,.gst-editorial-layout,.gst-benefits-layout,.gst-faq-layout,.gst-consultation-top{gap:32px}
  .gst-service-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .gst-service-grid-ten .gst-service-wide{grid-column:1/-1}
  .gst-service-card{padding:24px}
  .gst-support-grid{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:30px}
  .gst-industry-row{gap:18px}
  .gst-benefit-card{grid-template-columns:36px 1fr}
  .gst-benefit-check{display:none}
  .gst-compliance-art{transform:scale(.9);transform-origin:left top;margin-bottom:-20px}
}

/* MOBILE */
@media(max-width:767px){
  .gst-container{padding-inline:22px}
  .gst-section{padding-block:48px}
  .gst-root h1{font-size:38px}
  .gst-root h2{font-size:29px}
  .gst-hero{padding-top:calc(var(--gst-header) + 20px);padding-bottom:25px}
  .gst-breadcrumb{margin-bottom:19px}
  .gst-hero-grid{grid-template-columns:1fr;gap:25px}
  .gst-hero-content{padding:0}
  .gst-hero-subtitle{font-size:14px;margin-top:17px!important}
  .gst-hero-actions{gap:16px;margin-top:20px}
  .gst-hero-photo{height:360px;border-radius:45px 17px 17px 17px}
  .gst-brand{top:18px;right:18px;padding:11px 13px}
  .gst-logo{width:115px}
  .gst-hero-photo-caption{left:24px;right:24px;bottom:25px}
  .gst-root .gst-hero-photo-caption>p{font-size:27px}
  .gst-hero-bottom{grid-template-columns:1fr;gap:22px;margin-top:24px;padding-top:22px}
  .gst-hero-bottom ul{gap:12px}
  .gst-section-top,.gst-editorial-layout,.gst-benefits-layout,.gst-faq-layout,.gst-consultation-top,.gst-consultation-copy{grid-template-columns:1fr;gap:22px}
  .gst-section-top{margin-bottom:24px}
  .gst-eyebrow{margin-bottom:13px!important}
  .gst-copy{font-size:14px}
  .gst-overview-grid{grid-template-columns:1fr;gap:14px}
  .gst-overview-card{padding:21px;gap:15px}
  .gst-overview-featured{grid-column:auto}
  .gst-overview-featured>p{font-size:16px}
  .gst-overview-banner{height:180px;margin-top:16px}
  .gst-overview-caption{padding:24px;gap:15px}
  .gst-root .gst-overview-caption>p{font-size:24px}
  .gst-service-grid{grid-template-columns:1fr;gap:15px}
  .gst-service-grid-ten .gst-service-wide{grid-column:auto}
  .gst-service-card{padding:25px}
  .gst-service-card h3,.gst-root .gst-service-featured h3{font-size:25px}
  .gst-service-card>.gst-copy{font-size:14px}
  .gst-service-meta{margin-bottom:19px}
  .gst-requirement-grid{grid-template-columns:1fr;gap:15px}
  .gst-requirement-card{padding:22px;grid-template-columns:34px 1fr;gap:16px}
  .gst-requirement-number{width:34px;height:34px;border-radius:10px;font-size:10px}
  .gst-requirement-card h3{font-size:22px;margin-top:4px}
  .gst-industry-row{grid-template-columns:27px 1fr;gap:10px 15px;padding:23px 0}
  .gst-industry-row h3{font-size:22px}
  .gst-industry-row .gst-copy{grid-column:2}
  .gst-industry-icon{display:none}
  .gst-editorial-content{padding-left:22px}
  .gst-lead{font-size:21px}
  .gst-compliance-art{height:230px;margin:20px auto 0;transform:scale(.85);transform-origin:center top;margin-bottom:-25px}
  .gst-support-grid{grid-template-columns:1fr;gap:0}
  .gst-support-step{padding:22px 0 24px 26px}
  .gst-support-step::before,.gst-support-step::after{top:0;left:0;width:3px;height:100%}
  .gst-support-step::after{transform:scaleY(var(--line-fill));transform-origin:top;background:linear-gradient(180deg,var(--step-color),#9bc5ff)}
  .gst-step-dot{top:26px;left:-4px}
  .gst-step-number{margin-bottom:12px!important}
  .gst-support-step h3{font-size:22px}
  .gst-support-step .gst-copy{font-size:14px}
  .gst-benefits-intro .gst-copy{margin-top:18px}
  .gst-benefit-list{padding-inline:21px}
  .gst-benefit-card{grid-template-columns:32px 1fr;gap:15px;padding-block:22px}
  .gst-benefit-number{width:32px;height:32px;border-radius:10px}
  .gst-benefit-card h3{font-size:21px;margin-top:3px}
  .gst-consultation{padding-block:42px}
  .gst-root .gst-consultation h2{font-size:30px}
  .gst-consultation-action{padding:22px}
  .gst-root .gst-consultation-action>p{font-size:19px}
  .gst-consultation-copy{margin-top:24px;padding-top:22px;gap:17px}
  .gst-faq-layout{gap:26px}
  .gst-faq-contact{margin-top:17px}
  .gst-question summary{gap:12px;padding-block:19px}
  .gst-question summary h3{font-size:16px}
  .gst-question-toggle{width:26px;height:26px}
  .gst-answer{padding:0 18px 22px 23px}
}

@media(max-width:359px){
  .gst-container{padding-inline:18px}
  .gst-root h1{font-size:34px}
  .gst-root h2{font-size:27px}
  .gst-hero-photo{height:330px}
  .gst-hero-bottom ul{grid-template-columns:1fr}
  .gst-button{padding-left:16px;gap:13px;font-size:12px}
  .gst-service-card{padding:22px}
  .gst-requirement-card{padding:20px 18px;gap:13px}
  .gst-root .gst-consultation h2{font-size:28px}
  .gst-compliance-art{transform:scale(.75);margin-bottom:-45px}
}

/* REDUCED MOTION */
@media(prefers-reduced-motion:reduce){
  .gst-root *,.gst-root *::before,.gst-root *::after{
    animation:none!important;transition:none!important;scroll-behavior:auto!important;
  }
  .gst-support-step{--line-fill:1!important}
}
`;