"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle, ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, CalendarCheck2,
  Check, ChevronRight, CircleCheck, FileCheck2, FileText, MapPin, Plus, RefreshCw,
  ShieldCheck, Store, UserCheck, Users, Factory, ShoppingBag, Building2, Globe2, ScanLine,
} from "lucide-react";

export type ServiceInnerItem = { title: string; paragraphs: string[] };
export type ServiceInnerSection = {
  id: string;
  eyebrow: string;
  title: string;
  layout: "overview" | "audience" | "eligibility" | "documents" | "checklist" |
    "process" | "tracking" | "mistakes" | "aftercare" | "locations" | "benefits" | "cta" | "faq";
  paragraphs: string[];
  items?: ServiceInnerItem[];
  checklist?: string[];
  footer?: string[];
  links?: { label: string; href: string }[];
};
export type ServiceInnerPageData = {
  slug: string;
  category: string;
  location: string;
  breadcrumbs: { label: string; href?: string }[];
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    subtitle: string;
    paragraphs: string[];
    benefits: string[];
    ctaLabel?: string;
    image: { src: string; alt: string };
  };
  cta: { label: string; href: string };
  nav: { id: string; label: string }[];
  sections: ServiceInnerSection[];
};
type Props = { data: ServiceInnerPageData; headerOffset?: number };

function Rich({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  )}</>;
}

function Copy({ texts, className = "" }: { texts: string[]; className?: string }) {
  return texts.length ? <div className={`sip-copy ${className}`}>
    {texts.map((text, i) => <p key={i}><Rich text={text} /></p>)}
  </div> : null;
}

function Action({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`sip-action ${light ? "is-light" : ""}`}>
    <span>{children}</span><span className="sip-action-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
  </Link>;
}

function Heading({ section, index }: { section: ServiceInnerSection; index: number }) {
  return <header className="sip-section-heading" data-sip-reveal>
    <p className="sip-eyebrow"><span>{String(index + 1).padStart(2, "0")}</span>{section.eyebrow}</p>
    <h2 id={`${section.id}-title`}>{section.title}</h2>
  </header>;
}

function RelatedLinks({ links }: { links?: ServiceInnerSection["links"] }) {
  if (!links?.length) return null;
  return <div className="sip-related-links">
    {links.map((link, i) => <Link href={link.href} key={`${link.href}-${i}`}>
      <span>{link.label}</span><ArrowUpRight size={17} aria-hidden="true" />
    </Link>)}
  </div>;
}

function Photo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);
  return failed || !src ? <div className="sip-photo-fallback" role="img" aria-label={alt}>
    <Building2 size={100} strokeWidth={0.7} aria-hidden="true" />
  </div> : <Image src={src} alt={alt} fill unoptimized priority sizes="(min-width: 1024px) 520px, 100vw"
    className="sip-photo" onError={() => setFailed(true)} />;
}

function HeroVisual({ data }: { data: ServiceInnerPageData }) {
  return <div className="sip-hero-visual">
    <div className="sip-visual-image">
      <Photo src={data.hero.image.src} alt={data.hero.image.alt} />
      <div className="sip-photo-shade" />
      <span className="sip-visual-label"><span />{data.category}</span>
      <p>{data.hero.tagline}</p>
      <span className="sip-image-location"><MapPin size={14} aria-hidden="true" />{data.location}</span>
    </div>
    <div className="sip-registration-note">
      <span className="sip-note-icon"><FileCheck2 size={28} strokeWidth={1.25} aria-hidden="true" /></span>
      <div><span className="sip-small-label">From preparation to follow-up</span><p>Clarity at every step.</p></div>
      <ShieldCheck size={24} strokeWidth={1.3} aria-hidden="true" />
    </div>
    <div className="sip-visual-footer" aria-hidden="true">
      <span>Review</span><ChevronRight size={12} /><span>Prepare</span><ChevronRight size={12} />
      <span>Submit</span><ChevronRight size={12} /><span>Track</span>
    </div>
  </div>;
}

function Accordion({ items, variant = "faq" }: { items: ServiceInnerItem[]; variant?: "faq" | "documents" }) {
  const id = useId();
  return <div className={`sip-accordion is-${variant}`}>
    {items.map((item, i) => <details key={item.title} className="sip-detail" data-sip-reveal>
      <summary aria-controls={`${id}-${i}`}>
        <span className="sip-detail-index">{variant === "documents" ? <FileText size={18} aria-hidden="true" /> : String(i + 1).padStart(2, "0")}</span>
        <h3>{item.title}</h3><span className="sip-detail-toggle"><Plus size={17} aria-hidden="true" /></span>
      </summary>
      <div className="sip-detail-answer" id={`${id}-${i}`}><Copy texts={item.paragraphs} /></div>
    </details>)}
  </div>;
}

const audienceIcons = [Store, BriefcaseBusiness, Factory, ShoppingBag, Globe2, Building2];

function EligibilityIcon({ section }: { section: ServiceInnerSection }) {
  const content = `${section.id} ${section.eyebrow} ${section.title}`.toLowerCase();

  if (/consequence|penalt|late fee|incorrect|missed|delay|risk/.test(content)) return <AlertTriangle size={58} strokeWidth={1} />;
  if (/reconcil|difference|mismatch/.test(content)) return <RefreshCw size={58} strokeWidth={1} />;
  if (/when|required|deadline|timeline|financial year|annual/.test(content)) return <CalendarCheck2 size={58} strokeWidth={1} />;
  if (/eligib|who can|qualif/.test(content)) return <UserCheck size={58} strokeWidth={1} />;
  return <ShieldCheck size={58} strokeWidth={1} />;
}

function Section({ section, index, data }: { section: ServiceInnerSection; index: number; data: ServiceInnerPageData }) {
  const items = section.items ?? [];
  const reduced = useReducedMotion();
  const heading = <Heading section={section} index={index} />;
  const footer = <><Copy texts={section.footer ?? []} className="sip-section-footnote" /><RelatedLinks links={section.links} /></>;
  const overviewSplitIndex = 1 + Math.ceil((section.paragraphs.length - 1) / 2);
  let content: ReactNode;

  switch (section.layout) {
    case "overview":
      content = <>
        {heading}
        <div className="sip-overview-lead" data-sip-reveal><span className="sip-overview-mark"><ScanLine size={33} strokeWidth={1.2} aria-hidden="true" /></span><Copy texts={section.paragraphs.slice(0, 1)} /></div>
        <div className="sip-overview-columns"><div data-sip-reveal><Copy texts={section.paragraphs.slice(1, overviewSplitIndex)} /></div><div data-sip-reveal><Copy texts={section.paragraphs.slice(overviewSplitIndex)} /></div></div>
        {footer}
      </>;
      break;
    case "audience":
      content = <>{heading}<Copy texts={section.paragraphs} />
        <div className="sip-audience-grid">{items.map((item, i) => {
          const Icon = audienceIcons[i % audienceIcons.length];
          return <div data-sip-reveal key={item.title}><motion.article className="sip-audience-card"
            whileHover={reduced ? undefined : { y: -4 }} transition={{ duration: 0.25 }}>
            <div className="sip-card-top"><Icon size={22} strokeWidth={1.3} aria-hidden="true" /><span>{String(i + 1).padStart(2, "0")}</span></div>
            <h3>{item.title}</h3><Copy texts={item.paragraphs} />
          </motion.article></div>;
        })}</div>{footer}</>;
      break;
    case "eligibility":
      content = <div className="sip-eligibility-panel">
        <div>{heading}<div className="sip-eligibility-symbol" aria-hidden="true"><EligibilityIcon section={section} /></div></div>
        <div className="sip-eligibility-points">{section.paragraphs.map((text, i) => <div key={i} data-sip-reveal><span>{String(i + 1).padStart(2, "0")}</span><p><Rich text={text} /></p></div>)}{footer}</div>
      </div>;
      break;
    case "documents":
      content = <><div className="sip-documents-heading">{heading}<span className="sip-document-emblem" aria-hidden="true"><FileCheck2 size={39} strokeWidth={1} /></span></div><Copy texts={section.paragraphs} /><Accordion items={items} variant="documents" />{footer}</>;
      break;
    case "checklist":
      content = <div className="sip-checklist-panel">{heading}<Copy texts={section.paragraphs} />
        <ul className="sip-checklist-items">{(section.checklist ?? []).map((text) => <li key={text} data-sip-reveal><span><Check size={15} strokeWidth={2} aria-hidden="true" /></span><p>{text}</p></li>)}</ul>{footer}
      </div>;
      break;
    case "process":
      content = <>{heading}<Copy texts={section.paragraphs} />
        <ol className="sip-process-list">{items.map((item, i) => <li className="sip-process-step" key={item.title}>
          <span className="sip-process-number">{String(i + 1).padStart(2, "0")}</span>
          <div data-sip-reveal><h3>{item.title}</h3><Copy texts={item.paragraphs} /></div>
        </li>)}</ol>{footer}</>;
      break;
    case "tracking":
      content = <>{heading}<div className="sip-tracking-layout"><div className="sip-arn-note" data-sip-reveal>
        <span className="sip-small-label">Application Reference Number</span><span className="sip-arn-type">ARN</span>
        <span className="sip-arn-line" aria-hidden="true"><i /><i /><i /></span><p>A reference for tracking your application.</p>
      </div><div data-sip-reveal><Copy texts={section.paragraphs} /></div></div>{footer}</>;
      break;
    case "mistakes":
      content = <>{heading}<Copy texts={section.paragraphs} /><div className="sip-mistakes-grid">{items.map((item, i) => <article key={item.title} data-sip-reveal>
        <span className="sip-mistake-index">{String(i + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><Copy texts={item.paragraphs} /></div>
      </article>)}</div>{footer}</>;
      break;
    case "aftercare":
      content = <div className="sip-aftercare-panel">{heading}<div className="sip-aftercare-copy">{section.paragraphs.map((text, i) => <div key={i} data-sip-reveal><span aria-hidden="true" /><p><Rich text={text} /></p></div>)}</div>{footer}</div>;
      break;
    case "locations":
      content = <>{heading}<div className="sip-location-layout"><div className="sip-location-mark" data-sip-reveal><div className="sip-city-line" aria-hidden="true"><Building2 size={53} strokeWidth={.8} /><Building2 size={81} strokeWidth={.8} /><Building2 size={61} strokeWidth={.8} /></div><span className="sip-city-label"><MapPin size={15} aria-hidden="true" />{data.location}</span></div><div data-sip-reveal><Copy texts={section.paragraphs} /></div></div>{footer}</>;
      break;
    case "benefits":
      content = <>{heading}<Copy texts={section.paragraphs} /><div className="sip-benefit-list">{items.map((item, i) => <article key={item.title} data-sip-reveal>
        <div className="sip-benefit-icon"><CircleCheck size={23} strokeWidth={1.4} aria-hidden="true" /><span>{String(i + 1).padStart(2, "0")}</span></div><div><h3>{item.title}</h3><Copy texts={item.paragraphs} /></div>
      </article>)}</div>{footer}</>;
      break;
    case "cta":
      content = <div className="sip-consult-panel"><div className="sip-consult-heading">{heading}<Action href={data.cta.href}>{data.cta.label}</Action></div>
        <div className={`sip-consult-copy ${section.paragraphs.length === 1 ? "is-single" : ""}`}><Copy texts={section.paragraphs} />{footer}</div></div>;
      break;
    case "faq":
      content = <>{heading}<Copy texts={section.paragraphs} /><Accordion items={items} />{footer}</>;
      break;
  }
  return <section id={section.id} aria-labelledby={`${section.id}-title`} className={`sip-section sip-${section.layout}`}>
    {content}
  </section>;
}

export default function DynamicServiceInnerPages({ data, headerOffset = 88 }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(data.nav[0]?.id ?? "");
  const processId = data.sections.find((section) => section.layout === "process")?.id;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(element.querySelectorAll(".sip-hero-copy > *"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .85, stagger: .09, ease: "power3.out", clearProps: "opacity,transform" });
      gsap.fromTo(element.querySelector(".sip-hero-visual"),
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 1.05, delay: .15, ease: "power3.out", clearProps: "opacity,transform" });
      const pending = Array.from(element.querySelectorAll<HTMLElement>("[data-sip-reveal]"))
        .filter((item) => item.getBoundingClientRect().top > window.innerHeight * 0.96);
      gsap.set(pending, { opacity: 0, y: 28 });
      ScrollTrigger.batch(pending, {
        start: "top 96%", once: true, batchMax: 3, interval: 0.06,
        onEnter: (batch) => { gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", clearProps: "opacity,transform" }); },
      });
      element.querySelectorAll<HTMLElement>(".sip-process-step").forEach((step) => {
        gsap.fromTo(step, { "--step-fill": 0 }, { "--step-fill": 1, ease: "none", scrollTrigger: { trigger: step, start: "top 80%", end: "bottom 55%", scrub: 0.5 } });
      });
    }, element);

    const navSections = data.nav.map((item) => element.querySelector<HTMLElement>(`[id="${item.id}"]`))
      .filter((section): section is HTMLElement => section !== null);
    let navFrame = 0;
    const updateActive = () => {
      let current = navSections[0]?.id ?? "";
      for (const section of navSections) {
        if (section.getBoundingClientRect().top <= headerOffset + 150) current = section.id;
      }
      setActiveId(current);
    };
    const onScroll = () => { cancelAnimationFrame(navFrame); navFrame = requestAnimationFrame(updateActive); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActive();

    // Opening documents or FAQ answers changes downstream scroll positions.
    let frame = 0;
    const refresh = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => ScrollTrigger.refresh()); };
    element.addEventListener("toggle", refresh, true);
    let disposed = false;
    void document.fonts.ready.then(() => { if (!disposed) refresh(); });
    return () => { disposed = true; cancelAnimationFrame(frame); cancelAnimationFrame(navFrame); element.removeEventListener("toggle", refresh, true); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); media.revert(); };
  }, [data, headerOffset]);

  return <MotionConfig reducedMotion="user"><div ref={root} className="sip-root" style={{ "--sip-header": `${headerOffset}px` } as CSSProperties}>
    <section className="sip-hero"><div className="sip-container">
      <nav className="sip-breadcrumb" aria-label="Breadcrumb">{data.breadcrumbs.map((crumb, i) => <span key={crumb.label}>
        {i > 0 && <ChevronRight size={12} aria-hidden="true" />}{crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
      </span>)}</nav>
      <div className="sip-hero-grid"><div className="sip-hero-copy">
        <p className="sip-eyebrow"><span className="sip-dot" />{data.hero.eyebrow}</p>
        <h1>{data.hero.title}</h1><p className="sip-hero-subtitle">{data.hero.subtitle}</p>
        <Copy texts={data.hero.paragraphs} />
        <div className="sip-hero-actions"><Action href={data.cta.href}>{data.hero.ctaLabel ?? data.cta.label}</Action>{processId && <a className="sip-text-link" href={`#${processId}`}>See the process<ArrowDown size={15} aria-hidden="true" /></a>}</div>
      </div><HeroVisual data={data} /></div>
      <ul className="sip-hero-benefits">{data.hero.benefits.map((benefit) => <li key={benefit}><span><Check size={15} aria-hidden="true" /></span>{benefit}</li>)}</ul>
    </div></section>

    <div className="sip-container sip-content-layout">
      <aside className="sip-sidebar"><div className="sip-sidebar-inner">
        <span className="sip-small-label">Your service guide</span>
        <nav aria-label="Service page sections">{data.nav.map((item, i) => <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? "is-active" : ""} aria-current={activeId === item.id ? "location" : undefined}>
          <span>{String(i + 1).padStart(2, "0")}</span>{item.label}<ArrowRight size={13} aria-hidden="true" />
        </a>)}</nav>
        <div className="sip-sidebar-help"><Users size={24} strokeWidth={1.25} aria-hidden="true" /><p>Start with your business.</p><Link href={data.cta.href}>Talk to an expert<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div></aside>
      <div className="sip-main-content">{data.sections.map((section, index) => <Section key={section.id} section={section} index={index} data={data} />)}</div>
    </div>
    <style>{STYLES}</style>
  </div></MotionConfig>;
}

const STYLES = `
.sip-root{--sip-blue:#235deb;--sip-ink:#132d50;--sip-muted:#61748e;--sip-line:#dce5f2;background:#fff;color:var(--sip-ink);font-family:var(--font-satoshi,"Satoshi"),Arial,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:clip}
.sip-root *{box-sizing:border-box}.sip-root h1,.sip-root h2,.sip-root h3,.sip-root p{margin:0}.sip-root a{text-decoration:none}.sip-root svg{flex-shrink:0}.sip-root :is(a,summary,button):focus-visible{outline:2px solid #477def;outline-offset:5px}.sip-root [hidden]{display:none!important}
.sip-container{width:min(100%,1360px);padding-inline:52px;margin-inline:auto}.sip-root h1,.sip-root h2,.sip-root h3{font-family:var(--font-cabinet,"Cabinet Grotesk"),Arial,sans-serif;color:var(--sip-ink);letter-spacing:-.045em;font-weight:600}.sip-root h1{font-size:clamp(36px,3.8vw,54px);line-height:1.09;text-wrap:balance}.sip-root h2{font-size:clamp(27px,2.45vw,34px);line-height:1.17;text-wrap:balance}.sip-root h3{font-size:20px;line-height:1.3}.sip-copy{font-size:14px;line-height:1.85;color:var(--sip-muted)}.sip-copy p+p{margin-top:16px}.sip-copy strong{color:inherit;font-weight:600}
.sip-eyebrow{display:flex;align-items:center;gap:11px;margin-bottom:16px!important;color:var(--sip-blue);font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;line-height:1.7}.sip-eyebrow>span:not(.sip-dot){display:grid;place-items:center;width:26px;height:26px;border:1px solid #d3e0f6;border-radius:50%;color:#6e91c8;font-size:9px;letter-spacing:0}.sip-dot{width:6px;height:6px;border-radius:50%;background:var(--sip-blue);box-shadow:0 0 0 5px #235deb0e}.sip-small-label{display:block;color:#879bb7;font-size:9px;line-height:1.7;letter-spacing:.12em;text-transform:uppercase}
.sip-action{display:inline-flex;align-items:center;justify-content:space-between;gap:18px;max-width:100%;padding:8px 8px 8px 20px;min-height:52px;background:var(--sip-blue);color:#fff;border-radius:10px;font-size:12px;font-weight:600;line-height:1.6;transition:transform .25s,box-shadow .25s;box-shadow:0 12px 25px -18px #235deb99}.sip-action:hover{transform:translateY(-2px);box-shadow:0 15px 28px -15px #235deb66}.sip-action-arrow{display:grid;place-items:center;width:34px;height:34px;border-radius:7px;background:#ffffff18;flex-shrink:0}.sip-action.is-light{background:#fff;color:#2057cc;box-shadow:none}.sip-action.is-light .sip-action-arrow{background:#edf3ff}.sip-text-link{display:inline-flex;align-items:center;gap:9px;font-size:12px;color:#627a9d;padding:12px 0}
/* Hero: a service brief with a photographic dossier */
.sip-hero{padding-top:calc(var(--sip-header) + 26px);background:linear-gradient(120deg,#fff 45%,#f0f5ff);border-bottom:1px solid var(--sip-line)}.sip-breadcrumb{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:32px;font-size:10px;color:#8aa0bc}.sip-breadcrumb>span{display:flex;align-items:center;gap:10px}.sip-breadcrumb a{color:#6480a6}.sip-hero-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:60px;align-items:center}.sip-hero-copy{padding-block:8px}.sip-hero-subtitle{max-width:540px;margin-top:20px!important;font-size:17px;line-height:1.65;letter-spacing:-.015em;color:#4772a7}.sip-hero-copy>.sip-copy{margin-top:20px;max-width:590px;font-size:13px;line-height:1.9}.sip-hero-actions{display:flex;align-items:center;flex-wrap:wrap;gap:21px;margin-top:25px}
.sip-hero-visual{border:1px solid #dce5f2;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 28px 50px -38px #20488666;transform:translateY(0)}.sip-visual-image{height:310px;position:relative;overflow:hidden;background:#1e416f}.sip-photo{object-fit:cover}.sip-photo-fallback{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(135deg,#214a7b,#759dcc);color:#a6c5ef}.sip-photo-shade{position:absolute;inset:0;background:linear-gradient(0deg,#0b254af5,#13335d30 95%)}.sip-visual-label{position:absolute;top:23px;left:24px;display:flex;align-items:center;gap:8px;background:#ffffffeb;color:#265489;padding:8px 11px;border-radius:5px;font-size:9px;letter-spacing:.04em}.sip-visual-label>span{height:5px;width:5px;background:#3a75d9;border-radius:50%}.sip-root .sip-visual-image>p{position:absolute;bottom:61px;left:27px;right:27px;color:#fff;font-size:32px;line-height:1.15;letter-spacing:-.045em;max-width:330px}.sip-image-location{position:absolute;bottom:27px;left:27px;display:flex;align-items:center;gap:7px;color:#bbd1ef;font-size:9px}.sip-registration-note{display:flex;align-items:center;gap:16px;padding:24px}.sip-note-icon{display:grid;place-items:center;width:49px;height:56px;background:#eef4ff;color:#5587d9;border-radius:9px;flex-shrink:0}.sip-registration-note>div{flex:1}.sip-registration-note p{font-size:21px;line-height:1.3;margin-top:6px;letter-spacing:-.03em;color:#203d65}.sip-registration-note>svg{color:#8baadc}.sip-visual-footer{display:flex;justify-content:space-between;align-items:center;gap:6px;padding:16px 25px;border-top:1px solid #e4ebf6;color:#86a0c2;font-size:10px}.sip-hero-benefits{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin:34px 0 0;padding:25px 0;list-style:none;border-top:1px solid #e0e8f3}.sip-hero-benefits li{display:flex;align-items:center;gap:10px;font-size:11px;line-height:1.65;color:#4c688f}.sip-hero-benefits li>span{display:grid;place-items:center;width:24px;height:24px;background:#e9f1ff;border-radius:50%;color:#437adb;flex-shrink:0}
/* Navigation and sections */
.sip-content-layout{display:grid;grid-template-columns:206px minmax(0,1fr);gap:58px;align-items:start;padding-top:58px;padding-bottom:40px}.sip-sidebar-inner{position:sticky;top:calc(var(--sip-header) + 26px)}.sip-sidebar{align-self:stretch}.sip-sidebar nav{margin-top:20px}.sip-sidebar nav>a{display:flex;align-items:center;gap:13px;padding:12px 11px;border-left:2px solid #e4ebf7;color:#7890af;font-size:11px;line-height:1.5;transition:background .25s,color .25s}.sip-sidebar nav>a>span{font-size:8px;color:#a1b3cb}.sip-sidebar nav>a>svg{margin-left:auto;opacity:0}.sip-sidebar nav>a.is-active{background:#eff5ff;border-color:var(--sip-blue);color:var(--sip-blue)}.sip-sidebar nav>a.is-active>svg{opacity:1}.sip-sidebar-help{margin-top:28px;padding:20px 17px;border:1px solid #e2eaf7;border-radius:12px;background:#f8fbff;color:#6d94ce}.sip-sidebar-help p{color:#52719b;font-size:14px;line-height:1.5;margin-top:13px;letter-spacing:-.01em}.sip-sidebar-help a{display:flex;align-items:center;justify-content:space-between;gap:9px;margin-top:16px;color:var(--sip-blue);font-size:10px;font-weight:600}.sip-main-content{min-width:0}.sip-section{padding-bottom:52px;margin-bottom:50px;border-bottom:1px solid #e2e9f3;scroll-margin-top:calc(var(--sip-header) + 24px)}.sip-section:last-child{border-bottom:0;margin-bottom:0}.sip-section-heading{margin-bottom:22px}.sip-section>.sip-copy{max-width:780px}.sip-section-footnote{margin-top:24px;padding-top:20px;border-top:1px solid #e0e8f4;font-size:13px}.sip-related-links{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}.sip-related-links a{display:inline-flex;gap:20px;align-items:center;padding:12px 15px;background:#edf4ff;border:1px solid #dce8fc;border-radius:8px;color:#2762cb;font-size:11px;line-height:1.6}.sip-related-links a:hover{background:#e3eeff}
/* Essentials */
.sip-overview-lead{display:flex;align-items:flex-start;gap:18px;padding:24px;background:#edf4ff;border:1px solid #dae7fc;border-radius:12px;margin-bottom:25px}.sip-overview-mark{color:#4f7fd0;margin-top:2px}.sip-overview-lead .sip-copy{font-size:17px;line-height:1.7;color:#355c92;letter-spacing:-.02em}.sip-overview-columns{display:grid;grid-template-columns:1fr 1fr;gap:30px}.sip-overview-columns .sip-copy{font-size:13px}
/* Audience tiles */
.sip-audience-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin-top:26px}.sip-audience-card{height:100%;border:1px solid #dfe8f5;border-radius:13px;padding:22px;background:#fff;transition:border-color .25s,box-shadow .25s}.sip-audience-card:hover{border-color:#b8cef0;box-shadow:0 15px 30px -27px #1e50a066}.sip-audience-grid>div:nth-child(3n+2) .sip-audience-card{background:#f1f6ff}.sip-card-top{display:flex;align-items:center;justify-content:space-between;color:#6c96d5;margin-bottom:21px}.sip-card-top>span{font-size:9px;color:#99b1d1}.sip-audience-card h3{font-size:21px;margin-bottom:13px}.sip-audience-card .sip-copy{font-size:12px;line-height:1.85}
/* Eligibility */
.sip-eligibility-panel{display:grid;grid-template-columns:.8fr 1.2fr;gap:32px;padding:31px;border-radius:16px;background:#123663;color:#fff}.sip-root .sip-eligibility h2{color:#fff!important;font-size:30px}.sip-eligibility .sip-eyebrow{color:#b2cff7}.sip-eligibility .sip-eyebrow>span{border-color:#82a6d74a;color:#9cc1f1}.sip-eligibility .sip-copy{color:#c0d2ec;font-size:13px}.sip-eligibility-symbol{width:104px;height:104px;display:grid;place-items:center;border:1px solid #87abe933;border-radius:50%;color:#89b4ef;margin-top:27px;background:#ffffff03}
/* Document and FAQ disclosures */
.sip-accordion{margin-top:25px;border-top:1px solid #dce6f4}.sip-detail{border-bottom:1px solid #dce6f4}.sip-detail summary{display:flex;align-items:center;gap:15px;padding:20px 0;list-style:none;cursor:pointer}.sip-detail summary::-webkit-details-marker{display:none}.sip-detail-index{display:grid;place-items:center;width:32px;height:32px;background:#f0f5ff;border-radius:8px;color:#6e96d1;font-size:9px;flex-shrink:0}.sip-detail h3{flex:1;font-size:17px;line-height:1.5;letter-spacing:-.02em}.sip-detail-toggle{display:grid;place-items:center;width:26px;height:26px;color:#7497cc;flex-shrink:0}.sip-detail-toggle svg{transition:transform .25s}.sip-detail[open] .sip-detail-toggle svg{transform:rotate(45deg)}.sip-detail[open] h3{color:#275db4}.sip-detail-answer{padding:0 34px 22px 47px}.sip-detail-answer .sip-copy{font-size:13px}.sip-detail[open] .sip-detail-answer{animation:sip-answer .28s ease-out}.sip-accordion.is-faq .sip-detail-index{background:none;width:22px}.sip-accordion.is-faq .sip-detail-answer{padding-left:37px}
/* Preparation checklist */
.sip-checklist-panel{border:1px solid #d6e5f6;background:#f5f9ff;border-radius:16px;padding:30px}.sip-checklist-items{display:grid;grid-template-columns:1fr 1fr;gap:0 27px;list-style:none;padding:0;margin:25px 0 0}.sip-checklist-items li{display:flex;gap:11px;align-items:flex-start;padding:15px 0;border-top:1px solid #dfE8f4}.sip-checklist-items li>span{display:grid;place-items:center;flex-shrink:0;width:21px;height:21px;background:#e2edff;color:#3e76cc;border-radius:50%;margin-top:1px}.sip-checklist-items li>p{font-size:12px;line-height:1.8;color:#536e92}.sip-checklist-panel>.sip-copy{font-size:13px}
/* Process: eight readable steps */
.sip-process-list{list-style:none;padding:0;margin:28px 0 0}.sip-process-step{--step-fill:0;position:relative;display:grid;grid-template-columns:44px 1fr;gap:22px;padding-bottom:27px}.sip-process-step::before,.sip-process-step::after{content:"";position:absolute;left:20px;top:34px;width:2px;height:calc(100% - 21px);background:#e0e9f7;pointer-events:none}.sip-process-step::after{background:#4f8aed;transform:scaleY(var(--step-fill));transform-origin:top}.sip-process-step:last-child::before,.sip-process-step:last-child::after{display:none}.sip-process-number{position:relative;z-index:1;display:grid;place-items:center;width:42px;height:42px;background:#edf4ff;border:1px solid #d7e5fa;border-radius:50%;color:#5482c8;font-size:11px}.sip-process-step h3{font-size:21px;margin:8px 0 12px}.sip-process-step .sip-copy{font-size:13px}.sip-process-step:last-child{padding-bottom:0}
/* Application tracking */
.sip-tracking-layout{display:grid;grid-template-columns:210px 1fr;gap:28px;align-items:start}.sip-arn-note{padding:25px 23px;border:1px solid #d8e5f9;border-radius:13px;background:linear-gradient(135deg,#edf5ff,#f8fbff);color:#5e82b5}.sip-arn-type{display:block;font-size:57px;line-height:1;font-weight:600;letter-spacing:-.07em;color:#315e9b;margin-top:24px}.sip-arn-note>p{font-size:11px;line-height:1.7;margin-top:17px}.sip-arn-line{display:flex;gap:6px;margin-top:23px}.sip-arn-line i{flex:1;height:3px;border-radius:5px;background:#b5cced}.sip-arn-line i:first-child{background:#3f7cdb}.sip-tracking-layout>.sip-copy{font-size:13px}
/* Common mistakes */
.sip-mistakes-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-top:26px}.sip-mistakes-grid article{display:grid;grid-template-columns:25px 1fr;gap:15px;padding:24px 0;border-top:1px solid #e0e8f4}.sip-mistake-index{color:#8fa6c6;font-size:10px;padding-top:5px}.sip-mistakes-grid h3{font-size:21px;margin-bottom:13px}.sip-mistakes-grid .sip-copy{font-size:13px}
/* Aftercare */
.sip-aftercare-panel{padding:30px;background:#edf5ff;border-radius:15px;border-left:3px solid #5c8fe1}.sip-aftercare-copy .sip-copy{columns:2;column-gap:30px;font-size:13px}.sip-aftercare-copy p{break-inside:avoid}.sip-aftercare-panel .sip-related-links a{background:#fff}
/* Local support */
.sip-location-layout{display:grid;grid-template-columns:180px 1fr;gap:28px;align-items:start}.sip-location-mark{min-height:175px;background:#f5f9ff;border:1px solid #e0eafa;border-radius:13px;padding:22px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;color:#77a0d9}.sip-location-mark>span{font-size:9px;line-height:1.7;text-align:center;color:#6b89b1}.sip-location-layout>.sip-copy{font-size:13px}
/* Why choose us */
.sip-benefit-list{margin-top:25px;border-top:1px solid #dce6f4}.sip-benefit-list article{display:flex;gap:18px;padding:23px 0;border-bottom:1px solid #dce6f4}.sip-benefit-list article>svg{margin-top:3px;color:#6193db}.sip-benefit-list h3{font-size:21px;margin-bottom:12px}.sip-benefit-list .sip-copy{font-size:13px}
/* Compact consultation */
.sip-consult-panel{padding:31px;background:#11325b;border-radius:16px;display:grid;grid-template-columns:.95fr 1.05fr;gap:32px}.sip-root .sip-consult-panel h2{font-size:32px;color:#fff!important}.sip-consult-panel .sip-eyebrow{color:#a9c9f5}.sip-consult-panel .sip-eyebrow>span{border-color:#729cd044;color:#a0bfe9}.sip-consult-heading>.sip-action{margin-top:4px;font-size:11px;gap:10px;padding-left:15px}.sip-consult-heading .sip-action-arrow{width:30px;height:32px}.sip-consult-copy .sip-copy{font-size:13px;color:#b9cde8}.sip-consult-copy .sip-copy p:last-child{color:#edf5ff}.sip-consult-copy .sip-section-footnote{border-color:#729bd644}
@keyframes sip-answer{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
@media(min-width:1400px){.sip-hero-copy>.sip-copy{font-size:14px}.sip-audience-card .sip-copy{font-size:13px}}
@media(max-width:1199px){.sip-container{padding-inline:32px}.sip-content-layout{grid-template-columns:175px minmax(0,1fr);gap:34px}.sip-hero-grid{gap:35px}.sip-root h1{font-size:45px}.sip-audience-grid{grid-template-columns:1fr 1fr}.sip-eligibility-panel{gap:25px;padding:26px}.sip-tracking-layout{grid-template-columns:175px 1fr;gap:24px}.sip-consult-panel{grid-template-columns:1fr}.sip-consult-heading{display:grid;grid-template-columns:1fr auto;gap:22px;align-items:center}.sip-consult-heading .sip-section-heading{margin-bottom:0}.sip-consult-copy .sip-copy{columns:2;column-gap:26px}.sip-consult-copy p{break-inside:avoid}}
@media(max-width:1023px){.sip-hero-grid{grid-template-columns:1fr 1fr;gap:27px}.sip-root h1{font-size:40px}.sip-hero-subtitle{font-size:15px}.sip-hero-copy>.sip-copy{font-size:12px}.sip-hero-visual{align-self:start;margin-top:15px}.sip-visual-image{height:295px}.sip-root .sip-visual-image>p{font-size:28px}.sip-registration-note{padding:20px;gap:12px}.sip-registration-note p{font-size:19px}.sip-registration-note>svg{display:none}.sip-hero-benefits{grid-template-columns:1fr 1fr;gap:15px 25px}.sip-content-layout{grid-template-columns:1fr;padding-top:34px;gap:32px}.sip-sidebar-inner{position:static}.sip-sidebar nav{display:flex;overflow-x:auto;margin-top:12px;gap:6px;padding-bottom:5px}.sip-sidebar nav>a{white-space:nowrap;border-left:0;border-bottom:2px solid #e3ebf7;padding:11px 13px}.sip-sidebar nav>a>svg,.sip-sidebar-help{display:none}.sip-audience-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.sip-sidebar{min-width:0}.sip-consult-panel{grid-template-columns:.95fr 1.05fr}.sip-consult-heading{display:block}.sip-consult-heading .sip-section-heading{margin-bottom:22px}.sip-consult-copy .sip-copy{columns:auto}}
@media(max-width:767px){.sip-container{padding-inline:22px}.sip-hero{padding-top:calc(var(--sip-header) + 20px)}.sip-breadcrumb{margin-bottom:25px;font-size:9px;gap:7px}.sip-breadcrumb>span{gap:7px}.sip-hero-grid{grid-template-columns:1fr;gap:26px}.sip-hero-copy{padding:0}.sip-root h1{font-size:38px}.sip-hero-subtitle{font-size:16px;margin-top:17px!important}.sip-hero-copy>.sip-copy{font-size:13px;margin-top:18px}.sip-hero-actions{gap:15px;margin-top:22px}.sip-hero-visual{margin-top:0}.sip-visual-image{height:265px}.sip-root .sip-visual-image>p{font-size:30px;bottom:57px;left:24px;right:24px}.sip-visual-label{top:20px;left:23px}.sip-image-location{left:24px;bottom:24px}.sip-registration-note{padding:21px}.sip-registration-note p{font-size:21px}.sip-registration-note>svg{display:block}.sip-visual-footer{padding:15px 22px}.sip-hero-benefits{margin-top:25px;padding:21px 0;gap:14px 15px}.sip-hero-benefits li{font-size:10px;align-items:flex-start;gap:8px}.sip-hero-benefits li>span{width:20px;height:20px}.sip-content-layout{padding-top:27px;gap:30px;padding-bottom:15px}.sip-sidebar nav{margin-top:10px}.sip-section{padding-bottom:36px;margin-bottom:35px}.sip-section-heading{margin-bottom:20px}.sip-root h2{font-size:28px}.sip-eyebrow{margin-bottom:13px!important}.sip-overview-lead{padding:21px;gap:14px}.sip-overview-lead .sip-copy{font-size:16px}.sip-overview-columns{grid-template-columns:1fr;gap:16px}.sip-overview-columns .sip-copy{font-size:14px}.sip-audience-grid{grid-template-columns:1fr;gap:13px;margin-top:22px}.sip-audience-card{padding:23px}.sip-card-top{margin-bottom:16px}.sip-audience-card h3{font-size:22px}.sip-audience-card .sip-copy{font-size:14px}.sip-eligibility-panel{grid-template-columns:1fr;gap:0;padding:25px}.sip-eligibility-symbol{display:none}.sip-root .sip-eligibility h2{font-size:28px}.sip-eligibility .sip-copy{font-size:14px}.sip-detail summary{gap:12px;padding-block:18px}.sip-detail h3{font-size:16px}.sip-detail-answer{padding:0 10px 21px 44px}.sip-detail-answer .sip-copy{font-size:14px}.sip-checklist-panel{padding:24px 22px}.sip-checklist-items{grid-template-columns:1fr;gap:0;margin-top:21px}.sip-checklist-items li{padding:13px 0}.sip-checklist-items li>p{font-size:13px}.sip-checklist-panel>.sip-copy{font-size:14px}.sip-process-step{grid-template-columns:36px 1fr;gap:17px;padding-bottom:24px}.sip-process-number{width:35px;height:35px;font-size:10px}.sip-process-step::before,.sip-process-step::after{left:16px;top:29px}.sip-process-step h3{font-size:21px;margin-top:4px}.sip-process-step .sip-copy{font-size:14px}.sip-tracking-layout{grid-template-columns:1fr;gap:21px}.sip-arn-note{display:grid;grid-template-columns:1fr auto;gap:10px 20px;padding:22px}.sip-arn-type{grid-column:2;grid-row:1/3;margin:0;align-self:center;font-size:50px}.sip-arn-line{margin:0;max-width:150px}.sip-arn-note>p{grid-column:1/-1;margin-top:0}.sip-tracking-layout>.sip-copy{font-size:14px}.sip-mistakes-grid{grid-template-columns:1fr;gap:0;margin-top:22px}.sip-mistakes-grid article{padding:22px 0;gap:12px}.sip-mistakes-grid .sip-copy{font-size:14px}.sip-aftercare-panel{padding:24px 22px}.sip-aftercare-copy .sip-copy{columns:auto;font-size:14px}.sip-location-layout{grid-template-columns:1fr;gap:20px}.sip-location-mark{min-height:105px;flex-direction:row;padding:20px;gap:25px}.sip-location-mark svg{width:40px;height:40px}.sip-location-mark>span{font-size:11px}.sip-location-layout>.sip-copy{font-size:14px}.sip-benefit-list article{gap:14px;padding:22px 0}.sip-benefit-list .sip-copy{font-size:14px}.sip-consult-panel{grid-template-columns:1fr;padding:25px;gap:25px}.sip-root .sip-consult-panel h2{font-size:30px}.sip-consult-copy{padding-top:22px;border-top:1px solid #a0bdd82b}.sip-consult-copy .sip-copy{font-size:14px}.sip-consult-heading>.sip-action{font-size:12px}.sip-related-links{gap:10px}.sip-related-links a{width:100%;justify-content:space-between}.sip-section-footnote{font-size:13px;margin-top:21px;padding-top:18px}}
@media(max-width:359px){.sip-container{padding-inline:18px}.sip-root h1{font-size:34px}.sip-root h2{font-size:26px}.sip-action{font-size:11px;gap:12px;padding-left:16px}.sip-hero-benefits{grid-template-columns:1fr}.sip-root .sip-visual-image>p{font-size:27px}.sip-registration-note{gap:11px;padding:20px 18px}.sip-registration-note p{font-size:19px}.sip-registration-note>svg{display:none}.sip-consult-panel{padding:22px}.sip-consult-heading>.sip-action{font-size:11px}.sip-overview-lead{padding:20px 18px;gap:11px}.sip-checklist-panel{padding:22px 19px}}
@media(prefers-reduced-motion:reduce){.sip-root *,.sip-root *::before,.sip-root *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.sip-process-step{--step-fill:1!important}}
/* Refined inner-service edition. The service guide retains its original layout. */
.sip-root{--sip-blue:#2866ec;--sip-ink:#122d50;--sip-muted:#5e7390}
.sip-section{position:relative;padding-bottom:56px;margin-bottom:52px;border-color:#e6edf6}
.sip-section-heading h2{max-width:700px}
.sip-copy{line-height:1.9}
.sip-eyebrow{font-size:9px;letter-spacing:.15em}
.sip-action{border-radius:9px;transition:transform .25s,box-shadow .25s,background .25s}
.sip-action:hover{background:#1a53d5}
.sip-action-arrow svg{transition:transform .25s}
.sip-action:hover .sip-action-arrow svg{transform:translate(2px,-2px)}
.sip-action.is-light:hover{background:#ecf3ff}

/* A cinematic hero with a floating document caption. */
.sip-hero{position:relative;isolation:isolate;background:#0a2345;border-color:#1b375c;padding-bottom:0}
.sip-hero::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at 95% 0%,#205cb466,transparent 57%),linear-gradient(110deg,#091d3800,#0c294d88)}
.sip-hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(#94b9f108 1px,transparent 1px),linear-gradient(90deg,#94b9f108 1px,transparent 1px);background-size:85px 85px;mask-image:linear-gradient(90deg,transparent,#000)}
.sip-hero .sip-breadcrumb{color:#81a0c9;margin-bottom:32px}
.sip-hero .sip-breadcrumb a{color:#a9c0de}
.sip-hero .sip-eyebrow{color:#9dc6ff}
.sip-hero .sip-dot{background:#78aeff;box-shadow:0 0 0 5px #3b83f31a}
.sip-root .sip-hero h1{color:#fff!important;font-size:clamp(37px,3.8vw,53px);line-height:1.07;letter-spacing:-.047em}
.sip-hero-grid{grid-template-columns:1.1fr .9fr;gap:55px;align-items:center}
.sip-hero-subtitle{color:#a4c9ff;font-size:17px;line-height:1.65}
.sip-hero-copy>.sip-copy{color:#aec1dc;font-size:13px;line-height:1.9}
.sip-hero .sip-text-link{color:#bad1f2}
.sip-hero-actions{margin-top:27px}
.sip-hero-visual{position:relative;overflow:visible;border:0;border-radius:0;background:none;box-shadow:none;padding:0 0 17px 16px}
.sip-visual-image{height:430px;border-radius:11px 72px 11px 11px;border:1px solid #6d91bf45;overflow:hidden}
.sip-visual-image .sip-photo{filter:saturate(.6);transition:transform 1.1s cubic-bezier(.2,.75,.25,1)}
.sip-hero-visual:hover .sip-photo{transform:scale(1.035)}
.sip-photo-shade{background:linear-gradient(0deg,#061c3df0,transparent 95%),linear-gradient(90deg,#0a274633,transparent)}
.sip-root .sip-visual-image>p{font-size:35px;bottom:103px;left:29px;right:29px;max-width:340px;line-height:1.14}
.sip-image-location{bottom:76px;left:29px;color:#c1d5f0}
.sip-visual-label{border-radius:5px;background:#f4f8ffed;left:28px;top:27px;color:#305886}
.sip-registration-note{position:relative;z-index:1;margin:-49px 22px 0 -16px;padding:22px 24px;background:#fff;border:1px solid #e4ebf5;border-radius:12px;box-shadow:0 23px 40px -28px #000b}
.sip-registration-note p{font-size:23px;letter-spacing:-.035em}
.sip-registration-note .sip-small-label{font-size:8px;letter-spacing:.13em}
.sip-note-icon{height:50px;width:44px;border-radius:8px}
.sip-visual-footer{border:0;padding:21px 27px 0 7px;color:#92afd5;font-size:10px}
.sip-hero-benefits{border-color:#7d9dbf29;margin-top:32px;padding-block:24px;gap:16px}
.sip-hero-benefits li{color:#bfd2eb;font-size:11px}
.sip-hero-benefits li>span{color:#90bdff;background:#27558c55}
.sip-content-layout{padding-top:55px;gap:48px}

/* A blue definition panel, followed by two balanced text columns. */
.sip-overview-lead{position:relative;isolation:isolate;padding:29px 31px;border:0;background:#eaf2ff;border-radius:0 18px 18px 18px;gap:23px;margin-top:29px;margin-bottom:28px}
.sip-overview-lead::before{content:"";position:absolute;top:-6px;left:0;width:88px;height:6px;border-radius:5px 5px 0 0;background:#6198eb}
.sip-overview-lead .sip-copy{font-size:20px;line-height:1.6;color:#284f83;letter-spacing:-.025em}
.sip-overview-mark{color:#598dde;margin-top:2px}
.sip-overview-columns{gap:31px}
.sip-overview-columns>div+div{border-left:1px solid #e2eaf7;padding-left:27px}
.sip-overview-columns .sip-copy{font-size:14px}

/* Audience cards: prominent icon blocks and a small editorial index. */
.sip-audience-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:27px}
.sip-audience-card{position:relative;padding:26px;border-radius:15px;background:#f8fbff;border:1px solid #e1eaf8;overflow:hidden}
.sip-audience-grid>div:nth-child(3n+2) .sip-audience-card{background:#f8fbff}
.sip-audience-grid>div:nth-child(4n+2) .sip-audience-card,.sip-audience-grid>div:nth-child(4n+3) .sip-audience-card{background:#edf4ff}
.sip-audience-card::after{content:"";position:absolute;right:0;top:0;height:3px;width:0;background:#6297ed;transition:width .35s}
.sip-audience-card:hover::after{width:100%}
.sip-card-top{margin-bottom:21px}
.sip-card-top>svg{box-sizing:content-box;padding:12px;background:#fff;border:1px solid #dce7f8;border-radius:12px;color:#487ece}
.sip-card-top>span{font-size:30px;font-weight:500;letter-spacing:-.07em;color:#c5d7f0}
.sip-audience-card h3{font-size:23px;max-width:300px;margin-bottom:14px}
.sip-audience-card .sip-copy{font-size:13px;line-height:1.85}

/* Eligibility: a light panel with numbered review points. */
.sip-eligibility-panel{background:#f3f7ff;border:1px solid #dae6f8;border-radius:18px;grid-template-columns:.8fr 1.2fr;gap:30px;padding:31px;color:var(--sip-ink)}
.sip-root .sip-eligibility h2{color:var(--sip-ink)!important;font-size:30px}
.sip-eligibility .sip-eyebrow{color:var(--sip-blue)}
.sip-eligibility .sip-eyebrow>span{border-color:#ccdff6;color:#6e94ca}
.sip-eligibility-symbol{height:120px;width:120px;border-color:#d6e4f8;background:radial-gradient(#e1ecfe,transparent 72%);color:#6b98dc;margin-top:30px;position:relative}
.sip-eligibility-symbol::after{content:"";position:absolute;inset:12px;border:1px solid #d8e5f7;border-radius:50%}
.sip-eligibility-points>div:not(.sip-copy):not(.sip-related-links){display:grid;grid-template-columns:21px 1fr;gap:13px;padding:17px 0;border-top:1px solid #dce7f7}
.sip-eligibility-points>div:first-child{border-top:0!important;padding-top:0!important}
.sip-eligibility-points>div>span{font-size:9px;color:#759bce;padding-top:5px}
.sip-eligibility-points p{font-size:13px;line-height:1.85;color:#59718f}

/* Documents: six expandable folders. */
.sip-documents-heading{display:flex;justify-content:space-between;gap:24px;align-items:start}
.sip-document-emblem{display:grid;place-items:center;width:70px;height:70px;border-radius:15px;background:#f2f7ff;border:1px solid #e2ebfa;color:#6b96d4;flex-shrink:0;margin-top:5px}
.sip-accordion.is-documents{display:grid;grid-template-columns:1fr 1fr;gap:25px 18px;margin-top:37px;border:0;align-items:start}
.sip-accordion.is-documents .sip-detail{position:relative;border:1px solid #dce7f8;border-radius:0 12px 12px 12px;background:#fff;box-shadow:0 16px 30px -27px #22549566}
.sip-accordion.is-documents .sip-detail::before{content:"";position:absolute;left:-1px;top:-9px;height:9px;width:74px;border:1px solid #dce7f8;border-bottom:0;border-radius:7px 7px 0 0;background:#eef4ff}
.sip-accordion.is-documents .sip-detail summary{padding:21px 19px;min-height:100px;gap:13px}
.sip-accordion.is-documents .sip-detail h3{font-size:18px}
.sip-accordion.is-documents .sip-detail-index{background:#edf4ff;color:#588bd7;width:36px;height:42px;border-radius:8px}
.sip-accordion.is-documents .sip-detail-toggle{width:20px}
.sip-accordion.is-documents .sip-detail[open]{background:#f6faff;border-color:#b5ceef}
.sip-accordion.is-documents .sip-detail-answer{padding:0 23px 23px;border-top:0}
.sip-accordion.is-documents .sip-detail-answer .sip-copy{font-size:13px}

/* A quiet paper checklist, with ticks already visible. */
.sip-checklist-panel{position:relative;background:#fff;border:1px solid #dce6f4;border-radius:17px;padding:30px;box-shadow:0 18px 42px -36px #3568b177;overflow:hidden}
.sip-checklist-panel::before{content:"";position:absolute;top:0;left:0;bottom:0;width:4px;background:linear-gradient(#81b6ff,#2869d9)}
.sip-checklist-items{gap:0 27px;margin-top:24px}
.sip-checklist-items li{padding:17px 0;border-top:1px dashed #d9e5f6;align-items:flex-start}
.sip-checklist-items li>span{background:#eaf4ff;color:#2874c9;width:23px;height:23px;border-radius:7px}
.sip-checklist-items li>p{font-size:13px;color:#536c8f}
.sip-checklist-panel .sip-section-footnote{background:#f2f7ff;padding:18px 20px;border:0;border-radius:9px;margin-top:18px;color:#5e7ca3}

/* Process cards: a numbered, connected two-column sequence. */
.sip-process-list{display:grid;grid-template-columns:1fr 1fr;gap:22px 20px;margin-top:29px;align-items:stretch}
.sip-process-step{display:block;padding:25px;border:1px solid #dfE8f6;border-radius:14px;background:#fff;box-shadow:0 15px 30px -27px #1c4d9833;isolation:isolate;overflow:hidden}
.sip-process-step:nth-child(4n+2),.sip-process-step:nth-child(4n+3){background:#f4f8ff}
.sip-process-step::before,.sip-process-step::after{display:block!important;top:0;left:0;width:100%;height:3px;bottom:auto;border-radius:0;background:#dce8fa;z-index:1}
.sip-process-step::after{background:linear-gradient(90deg,#286ae1,#9bc5ff);transform:scaleX(var(--step-fill));transform-origin:left}
.sip-process-number{height:39px;width:39px;border-radius:11px;background:#eaf2ff;border:0;color:#3e75cb;margin-bottom:19px}
.sip-process-step h3{font-size:21px;margin:0 0 13px}
.sip-process-step .sip-copy{font-size:13px}
.sip-process-step:last-child{padding-bottom:25px}

/* Tracking: a dark reference card, not a live status widget. */
.sip-tracking-layout{grid-template-columns:235px minmax(0,1fr);gap:30px}
.sip-arn-note{position:relative;isolation:isolate;overflow:hidden;border:0;background:#14365e;border-radius:15px;padding:28px;min-height:270px;color:#a9c4e7}
.sip-arn-note::before{content:"";position:absolute;inset:30px -105px auto auto;width:240px;height:240px;border:1px solid #92b8ed25;border-radius:50%;z-index:-1}
.sip-arn-note::after{content:"";position:absolute;inset:65px -70px auto auto;width:170px;height:170px;border:1px solid #92b8ed20;border-radius:50%;z-index:-1}
.sip-arn-note .sip-small-label{color:#9abae3;font-size:8px;max-width:135px}
.sip-arn-type{font-size:72px;font-weight:500;color:#e8f2ff;margin-top:27px;letter-spacing:-.07em}
.sip-arn-line{margin-top:28px}
.sip-arn-line i{background:#446a9d}.sip-arn-line i:first-child{background:#86b9ff}
.sip-arn-note>p{color:#b1c9e8;font-size:12px;line-height:1.7;margin-top:20px}
.sip-tracking-layout>.sip-copy,.sip-tracking-layout>div>.sip-copy{font-size:14px}

/* Mistakes: editorial rows with a subtle warm accent. */
.sip-mistakes-grid{gap:0 26px;margin-top:27px}
.sip-mistakes-grid article{padding:25px 0;grid-template-columns:32px 1fr;gap:15px}
.sip-mistake-index{display:grid;place-items:center;width:30px;height:30px;background:#fff3e8;border:1px solid #f0decb;border-radius:9px;color:#b18c66;padding:0;font-size:9px}
.sip-mistakes-grid h3{font-size:22px;margin-top:3px}
.sip-mistakes-grid .sip-copy{font-size:13px}

/* Aftercare: a blue guide with a visible continuation line. */
.sip-aftercare-panel{background:linear-gradient(135deg,#eaf3ff,#f5f9ff);border:1px solid #d9e7fa;border-radius:17px;padding:31px}
.sip-aftercare-copy{display:grid;grid-template-columns:1fr 1fr;gap:21px 28px;margin-top:24px}
.sip-aftercare-copy>div{display:flex;gap:13px;align-items:flex-start}
.sip-aftercare-copy>div>span{width:7px;height:7px;border-radius:50%;background:#92b6e8;flex-shrink:0;margin-top:9px;box-shadow:0 0 0 4px #e3edfb}
.sip-aftercare-copy p{font-size:13px;line-height:1.9;color:#536f94}
.sip-aftercare-panel .sip-related-links{padding-top:22px;margin-top:26px;border-top:1px solid #d8e5f7}

/* Local support with an architectural illustration. */
.sip-location-layout{grid-template-columns:.8fr 1.2fr;gap:30px;align-items:center}
.sip-location-mark{padding:24px;min-height:245px;position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(140deg,#f7faff,#e7f0ff);border:1px solid #d8e5f7;border-radius:16px;gap:23px}
.sip-location-mark::before{content:"";position:absolute;inset:0;background-image:linear-gradient(#a2bee71c 1px,transparent 1px),linear-gradient(90deg,#a2bee71c 1px,transparent 1px);background-size:24px 24px;z-index:-1}
.sip-city-line{display:flex;align-items:flex-end;justify-content:center;gap:1px;color:#8babd9;position:relative;padding-bottom:14px;border-bottom:1px solid #b6cbe9}
.sip-city-line>svg:nth-child(2){color:#5484c8}
.sip-city-label{display:flex;align-items:center;justify-content:center;gap:8px;color:#5b7cab;font-size:10px;line-height:1.6}
.sip-location-layout>div>.sip-copy{font-size:14px}

/* Benefits: asymmetric blue and white cards. */
.sip-benefit-list{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:26px;border:0}
.sip-benefit-list article{display:block;border:1px solid #dfE8f6;padding:25px;border-radius:14px;background:#fff}
.sip-benefit-list article:first-child{grid-column:1/-1;background:#14365f;border-color:#14365f}
.sip-benefit-list article:first-child>div:last-child{display:grid;grid-template-columns:.85fr 1.15fr;gap:30px;align-items:start}
.sip-root .sip-benefit-list article:first-child h3{color:#fff;font-size:27px}
.sip-benefit-list article:first-child .sip-copy{color:#bad0ed;font-size:14px}
.sip-benefit-icon{display:flex;justify-content:space-between;align-items:center;color:#6b97d7;margin-bottom:20px}
.sip-benefit-icon>span{font-size:10px;color:#9ab2d2}
.sip-benefit-list article:first-child .sip-benefit-icon{color:#9fc6ff}
.sip-benefit-list h3{font-size:22px;margin-bottom:13px}
.sip-benefit-list .sip-copy{font-size:13px}

/* Consultation: an open white composition with a blue border. */
.sip-consult-panel{display:block;padding:31px;background:#f7faff;border:1px solid #d4e3f8;border-radius:17px;position:relative;overflow:hidden}
.sip-consult-panel::before{content:"";position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,#225dd7,#98c1fc)}
.sip-consult-heading{display:grid;grid-template-columns:1fr auto;align-items:center;gap:25px}
.sip-consult-heading .sip-section-heading{margin:0}
.sip-root .sip-consult-panel h2{color:#16395f!important;font-size:31px;line-height:1.18}
.sip-consult-panel .sip-eyebrow{color:#457bc8}
.sip-consult-panel .sip-eyebrow>span{border-color:#c8daf3;color:#6892ca}
.sip-consult-heading>.sip-action{font-size:11px;max-width:225px;line-height:1.65;margin:0;padding-left:16px}
.sip-consult-copy{padding-top:25px;margin-top:25px;border-top:1px solid #dae6f6}
.sip-consult-copy .sip-copy{columns:2;column-gap:28px;color:#627b9c;font-size:13px}
.sip-consult-copy.is-single .sip-copy{columns:1}
.sip-consult-copy .sip-copy p{break-inside:avoid}
.sip-consult-copy .sip-copy p:last-child{color:#264f86;font-weight:500}

/* FAQs: discreet, spacious accordion cards. */
.sip-accordion.is-faq{border:0;display:grid;gap:12px}
.sip-accordion.is-faq .sip-detail{border:1px solid #e0e8f5;border-radius:11px;background:#fff;transition:border-color .25s,background .25s}
.sip-accordion.is-faq .sip-detail summary{padding:19px 21px;gap:14px}
.sip-accordion.is-faq .sip-detail h3{font-size:17px}
.sip-accordion.is-faq .sip-detail-toggle{background:#eff5ff;border-radius:50%;width:27px;height:27px}
.sip-accordion.is-faq .sip-detail[open]{background:#f5f9ff;border-color:#bbd0ee}
.sip-accordion.is-faq .sip-detail-answer{padding:0 28px 24px 57px}
.sip-accordion.is-faq .sip-detail-answer .sip-copy{font-size:14px}

@media(max-width:1199px){
  .sip-hero-grid{gap:35px}.sip-root .sip-hero h1{font-size:46px}.sip-hero-visual{padding-left:8px}.sip-visual-image{height:455px}.sip-registration-note{margin-left:-8px;margin-right:12px;padding:20px}.sip-root .sip-visual-image>p{font-size:31px;left:25px;right:25px}.sip-registration-note p{font-size:21px}.sip-registration-note>svg{display:none}
  .sip-eligibility-panel{grid-template-columns:1fr;gap:3px;padding:27px}.sip-eligibility-symbol{display:none}.sip-eligibility-points{margin-top:4px}.sip-eligibility-points>div:first-child{padding-top:17px!important;border-top:1px solid #dce7f7!important}
  .sip-tracking-layout{grid-template-columns:200px 1fr;gap:25px}.sip-arn-note{padding:25px}.sip-consult-heading{grid-template-columns:1fr;gap:22px}.sip-consult-heading>.sip-action{max-width:100%;justify-self:start}.sip-location-layout{grid-template-columns:.9fr 1.1fr}
}
@media(max-width:1023px){
  .sip-content-layout{gap:32px;padding-top:35px}.sip-hero-grid{grid-template-columns:1fr 1fr;gap:28px}.sip-root .sip-hero h1{font-size:40px}.sip-hero-copy>.sip-copy{font-size:12px}.sip-hero-subtitle{font-size:15px}.sip-visual-image{height:445px}.sip-root .sip-visual-image>p{font-size:29px}.sip-registration-note{padding:18px 17px;gap:12px}.sip-registration-note p{font-size:19px}.sip-note-icon{width:37px;height:46px}.sip-visual-footer{padding-inline:0;font-size:9px}
  .sip-eligibility-panel{grid-template-columns:.8fr 1.2fr;gap:26px}.sip-eligibility-symbol{display:grid}.sip-eligibility-points{margin:0}.sip-eligibility-points>div:first-child{padding-top:0!important;border-top:0!important}
  .sip-consult-heading{grid-template-columns:1fr auto;gap:25px}.sip-consult-heading>.sip-action{max-width:225px}
}
@media(max-width:767px){
  .sip-section{padding-bottom:37px;margin-bottom:37px}.sip-root h2{font-size:29px}.sip-hero-grid{grid-template-columns:1fr;gap:31px}.sip-root .sip-hero h1{font-size:39px}.sip-hero-copy>.sip-copy{font-size:13px}.sip-hero-subtitle{font-size:16px}.sip-hero-visual{padding:0 0 0 9px;margin:0}.sip-visual-image{height:367px;border-top-right-radius:57px}.sip-root .sip-visual-image>p{font-size:31px;bottom:105px;left:25px;right:25px}.sip-image-location{left:25px;bottom:76px}.sip-visual-label{left:24px;top:24px}.sip-registration-note{margin-left:-9px;margin-right:14px;padding:21px 18px;gap:13px}.sip-registration-note p{font-size:21px}.sip-note-icon{width:43px;height:49px}.sip-registration-note>svg{display:block}.sip-visual-footer{font-size:10px;padding:20px 20px 0 0}.sip-hero-benefits{padding-block:23px;margin-top:26px;gap:15px}.sip-hero-benefits li{font-size:10px}
  .sip-content-layout{padding-top:29px;gap:31px}.sip-overview-lead{padding:24px 22px;gap:17px;margin-top:26px;margin-bottom:24px}.sip-overview-lead .sip-copy{font-size:18px}.sip-overview-mark svg{width:25px;height:25px}.sip-overview-columns{gap:18px}.sip-overview-columns>div+div{border:0;padding:0}.sip-audience-grid{grid-template-columns:1fr;gap:15px}.sip-audience-card{padding:25px}.sip-card-top{margin-bottom:18px}.sip-audience-card h3{font-size:24px}.sip-audience-card .sip-copy{font-size:14px}
  .sip-eligibility-panel{grid-template-columns:1fr;gap:0;padding:25px 23px}.sip-root .sip-eligibility h2{font-size:28px}.sip-eligibility-symbol{display:none}.sip-eligibility-points>div:first-child{border-top:1px solid #dce7f7!important;padding-top:17px!important}.sip-eligibility-points p{font-size:14px}.sip-eligibility-points>div:not(.sip-copy):not(.sip-related-links){gap:12px;grid-template-columns:18px 1fr;padding:17px 0}
  .sip-document-emblem{display:none}.sip-accordion.is-documents{grid-template-columns:1fr;gap:24px;margin-top:33px}.sip-accordion.is-documents .sip-detail summary{min-height:88px;padding:20px}.sip-accordion.is-documents .sip-detail h3{font-size:18px}.sip-accordion.is-documents .sip-detail-answer{padding:0 23px 23px}.sip-accordion.is-documents .sip-detail-answer .sip-copy{font-size:14px}
  .sip-checklist-panel{padding:25px 23px}.sip-checklist-items{gap:0;margin-top:23px}.sip-checklist-items li{padding:15px 0}.sip-checklist-items li>p{font-size:13px}.sip-checklist-panel .sip-section-footnote{padding:18px;font-size:13px}
  .sip-process-list{grid-template-columns:1fr;gap:17px}.sip-process-step{padding:25px}.sip-process-number{width:37px;height:37px;margin-bottom:17px}.sip-process-step h3{font-size:22px}.sip-process-step .sip-copy{font-size:14px}.sip-process-step:last-child{padding-bottom:25px}
  .sip-tracking-layout{grid-template-columns:1fr;gap:24px}.sip-arn-note{min-height:0;padding:26px;display:grid;grid-template-columns:1fr auto;gap:16px 20px}.sip-arn-type{grid-column:2;grid-row:1/3;margin:0;font-size:61px}.sip-arn-note .sip-small-label{max-width:140px;font-size:9px}.sip-arn-line{margin:0;max-width:160px}.sip-arn-note>p{grid-column:1/-1;margin:0;font-size:13px}.sip-mistakes-grid{grid-template-columns:1fr;gap:0}.sip-mistakes-grid article{padding:23px 0;gap:15px;grid-template-columns:30px 1fr}.sip-mistakes-grid .sip-copy{font-size:14px}
  .sip-aftercare-panel{padding:25px 23px}.sip-aftercare-copy{grid-template-columns:1fr;gap:18px}.sip-aftercare-copy p{font-size:14px}.sip-aftercare-panel .sip-related-links{padding-top:19px;margin-top:23px}.sip-location-layout{grid-template-columns:1fr;gap:24px}.sip-location-mark{min-height:210px;flex-direction:column;padding:26px;gap:23px}.sip-city-line{gap:6px}.sip-city-line>svg{width:auto;height:auto}.sip-city-label{font-size:11px}
  .sip-benefit-list{grid-template-columns:1fr;gap:15px}.sip-benefit-list article{padding:25px}.sip-benefit-list article:first-child{grid-column:auto}.sip-benefit-list article:first-child>div:last-child{display:block}.sip-root .sip-benefit-list article:first-child h3{font-size:25px}.sip-benefit-list .sip-copy{font-size:14px}.sip-benefit-icon{margin-bottom:18px}
  .sip-consult-panel{padding:27px 23px}.sip-consult-heading{display:block}.sip-root .sip-consult-panel h2{font-size:30px}.sip-consult-heading>.sip-action{margin-top:23px;max-width:100%;font-size:12px}.sip-consult-copy{margin-top:24px;padding-top:22px}.sip-consult-copy .sip-copy{columns:auto;font-size:14px}
  .sip-accordion.is-faq .sip-detail summary{padding:19px 17px;gap:10px;align-items:flex-start}.sip-accordion.is-faq .sip-detail h3{font-size:16px}.sip-accordion.is-faq .sip-detail-index{margin-top:0;width:20px;height:27px}.sip-accordion.is-faq .sip-detail-toggle{width:25px;height:25px}.sip-accordion.is-faq .sip-detail-answer{padding:0 22px 23px}
}
@media(max-width:359px){
  .sip-root .sip-hero h1{font-size:35px}.sip-root .sip-visual-image>p{font-size:28px}.sip-registration-note{padding:20px 16px}.sip-registration-note>svg{display:none}.sip-registration-note p{font-size:20px}.sip-overview-lead{padding:23px 18px;gap:13px}.sip-overview-lead .sip-copy{font-size:17px}.sip-audience-card,.sip-process-step,.sip-benefit-list article{padding:23px}.sip-eligibility-panel,.sip-checklist-panel,.sip-aftercare-panel,.sip-consult-panel{padding:24px 20px}.sip-root .sip-consult-panel h2{font-size:28px}.sip-consult-heading>.sip-action{font-size:11px}
}
`;
