"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  CheckCheck,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Fingerprint,
  Landmark,
  Layers3,
  MapPin,
  MessageCircle,
  Minus,
  Plane,
  Plus,
  ReceiptText,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   PUBLIC TYPES
========================================================= */

export type HubIconKey =
  | "receipt"
  | "wallet"
  | "clipboard"
  | "trending"
  | "fingerprint"
  | "building"
  | "landmark"
  | "rocket"
  | "plane"
  | "file"
  | "file-check"
  | "layers"
  | "shield"
  | "map";

export type HubLink = {
  name: string;
  href: string;
  icon: HubIconKey;
  shortLabel?: string;
};

export type HubServiceCategory = {
  title: string;
  icon: HubIconKey;
  paragraphs: string[];
  listLabel: string;
  items: Array<{
    name: string;
    href: string;
  }>;
  hubLabel: string;
  hubHref: string;
};

export type HubLifecycleStage = {
  title: string;
  text: string;
  icon: HubIconKey;
};

export type HubRequirement = {
  title: string;
  blocks: string[];
  icon: HubIconKey;
};

export type HubFaq = {
  question: string;
  answer: string[];
};

export type DynamicHubData = {
  pageKey: string;
  chapterBrand: string;
  logoSrc: string;
  headerOffset?: number;

  breadcrumb: Array<{
    label: string;
    href?: string;
  }>;

  contact: {
    whatsappNumber?: string;
    fallbackHref: string;
    primaryMessage: string;
    checklistMessagePrefix: string;
  };

  navigation: {
    overview: string;
    services: string;
    lifecycle: string;
    requirements: string;
    faq: string;
  };

  hero: {
    kicker: string;
    edition: string;
    titleLead: string;
    titleHighlight: string;
    paragraphs: string[];
    primaryCta: string;
    secondaryCta: string;
    keyServicesLabel: string;
    serviceLinks: HubLink[];
    deskCaption: string;
    documentLabel: string;
    documentFoot: string;
    chooseLabel: string;
    locationNote: string;
  };

  overview: {
    kicker: string;
    title: string;
    markerNumber: string;
    markerText: string;
    image: {
      src: string;
      alt: string;
    };
    imageChip: string;
    imageStatement: string;
    paragraphs: string[];
    noteLabel: string;
    noteText: string;
  };

  services: {
    kicker: string;
    title: string;
    intro: string[];
    categories: HubServiceCategory[];
    footerText: string;
  };

  lifecycle: {
    kicker: string;
    title: string;
    intro: string[];
    chapterLabel: string;
    stages: HubLifecycleStage[];
  };

  requirements: {
    kicker: string;
    title: string;
    intro: string[];
    hint: string;
    items: HubRequirement[];
  };

  connected: {
    kicker: string;
    title: string;
    intro: string[];
    centerEyebrow: string;
    centerTitle: string;
    nodes: Array<{
      label: string;
      description: string;
      icon: HubIconKey;
    }>;
    bottomLead: string;
    bottomBlocks: string[];
  };

  growth: {
    kicker: string;
    title: string;
    introBlocks: string[];
    closingBlocks: string[];
    checklistEyebrow: string;
    checklistTitle: string;
    checklistItems: string[];
    emptyHint: string;
    selectedHint: string;
    ctaLabel: string;
  };

  why: {
    kicker: string;
    title: string;
    lede: string;
    image: {
      src: string;
      alt: string;
    };
    badge: string;
    proofs: Array<{
      label: string;
    }>;
    principles: Array<{
      title: string;
      text: string;
      icon: HubIconKey;
    }>;
    detailBlocks: string[];
    bottomLabel: string;
    ctaLabel: string;
  };

  consult: {
    kicker: string;
    title: string;
    leftBlocks: string[];
    rightBlocks: string[];
    lead: string;
    ctaLabel: string;
  };

  faq: {
    kicker: string;
    title: string;
    helpText: string;
    helpCta: string;
    items: HubFaq[];
  };
};

type DynamicHubProps = {
  data: DynamicHubData;
};

/* =========================================================
   ICON RESOLVER
========================================================= */

const ICONS: Record<HubIconKey, LucideIcon> = {
  receipt: ReceiptText,
  wallet: Wallet,
  clipboard: ClipboardCheck,
  trending: TrendingUp,
  fingerprint: Fingerprint,
  building: Building2,
  landmark: Landmark,
  rocket: Rocket,
  plane: Plane,
  file: FileText,
  "file-check": FileCheck2,
  layers: Layers3,
  shield: ShieldCheck,
  map: MapPin,
};

function iconFor(key: HubIconKey) {
  return ICONS[key] ?? Layers3;
}

/* =========================================================
   SMALL UI HELPERS
========================================================= */

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Copy({
  blocks,
  className = "",
}: {
  blocks: readonly string[];
  className?: string;
}) {
  return (
    <div className={`tp-copy ${className}`}>
      {blocks.map((text, index) => (
        <p key={`${text}-${index}`}>
          <Rich text={text} />
        </p>
      ))}
    </div>
  );
}

function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`tp-kicker ${light ? "is-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

function Title({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={`tp-title ${className}`}>
      {children}
    </h2>
  );
}

function Action({
  href,
  children,
  light = false,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  secondary?: boolean;
}) {
  const external = /^(https?:\/\/|mailto:|tel:)/.test(href);
  const className = `tp-action ${light ? "is-light" : ""} ${
    secondary ? "is-secondary" : ""
  }`;

  const content = (
    <>
      <span>{children}</span>
      <span className="tp-action-icon">
        <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

function Photo({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <div className="tp-photo-fill">
      {failed ? (
        <div className="tp-photo-fallback" role="img" aria-label={alt}>
          <Building2 size={90} strokeWidth={0.7} aria-hidden="true" />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          onError={() => setFailed(true)}
          className="object-cover"
        />
      )}
    </div>
  );
}

function jumpTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
}

/* =========================================================
   HERO DESK
========================================================= */

function HeroDesk({
  logoSrc,
  hero,
}: {
  logoSrc: string;
  hero: DynamicHubData["hero"];
}) {
  const deskItems = hero.serviceLinks.slice(0, 4);
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const deskRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setLogoFailed(false);
  }, [logoSrc]);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (deskRef.current) observer.observe(deskRef.current);
    return () => {
      document.removeEventListener("visibilitychange", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced || paused || !visible || !pageVisible || deskItems.length < 2) return;
    const timer = window.setInterval(() => {
      setSelected((current) => (current + 1) % deskItems.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [reduced, paused, visible, pageVisible, deskItems.length, selected]);

  useEffect(() => {
    setSelected((current) => current < deskItems.length ? current : 0);
  }, [deskItems.length]);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 100, damping: 24 });
  const rotateY = useSpring(rawY, { stiffness: 100, damping: 24 });

  const activeItem = deskItems[selected] ?? deskItems[0];
  const ActiveIcon = activeItem ? iconFor(activeItem.icon) : Layers3;

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    rawY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    rawX.set(
      -((event.clientY - bounds.top) / bounds.height - 0.5) * 8,
    );
  }

  return (
    <div
      ref={deskRef}
      className="tp-desk"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setPaused(true);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onPointerMove={move}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
        setPaused(false);
      }}
    >
      <div className="tp-desk-caption">
        <span className="tp-live-dot" aria-hidden="true" />
        <span>{hero.deskCaption}</span>
      </div>

      <motion.div
        className="tp-desk-stage"
        style={reduced ? undefined : { rotateX, rotateY }}
      >
        <div className="tp-orbit tp-orbit-one" aria-hidden="true" />
        <div className="tp-orbit tp-orbit-two" aria-hidden="true" />
        <div className="tp-orbit tp-orbit-three" aria-hidden="true" />

        <svg
          className="tp-orbit-svg"
          viewBox="0 0 500 480"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M88 145C165 70 375 55 424 165C466 261 361 391 190 374C82 364 47 238 88 145Z"
            stroke="url(#tp-desk-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 9"
          />
          <defs>
            <linearGradient
              id="tp-desk-gradient"
              x1="48"
              y1="90"
              x2="450"
              y2="390"
            >
              <stop stopColor="#5a9bff" stopOpacity="0.2" />
              <stop offset=".5" stopColor="#92c8ff" />
              <stop offset="1" stopColor="#5a9bff" stopOpacity=".15" />
            </linearGradient>
          </defs>
        </svg>

        <div className="tp-document-shadow" aria-hidden="true" />

        <div
          className="tp-document tp-document-back"
          aria-hidden="true"
        >
          <div className="tp-document-line" />
          <div className="tp-document-line" />
          <div className="tp-document-line" />
        </div>

        <div className="tp-document tp-document-front">
          <div className="tp-document-top">
            {logoSrc && !logoFailed ? (
              <Image
                src={logoSrc}
                width={141}
                height={38}
                unoptimized
                alt="Tax India Firm"
                className="h-auto w-[120px]"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className="tp-document-brand">Tax India <small>Firm</small></span>
            )}
            <ShieldCheck size={20} aria-hidden="true" />
          </div>

          <div className="tp-document-rule" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected}
              className="tp-document-content"
              initial={reduced ? false : { opacity: 0, y: mobile ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: mobile ? 0 : -8 }}
              transition={{ duration: reduced ? 0 : 0.32, ease: "easeInOut" }}
            >
              <span className="tp-document-symbol">
                <ActiveIcon
                  size={30}
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
              </span>
              <p className="tp-document-label">{hero.documentLabel}</p>
              <p className="tp-document-heading">
                {activeItem?.name ?? ""}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="tp-document-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <div className="tp-document-foot">
            <span>{hero.documentFoot}</span>
            <CheckCheck size={18} aria-hidden="true" />
          </div>
        </div>

        {deskItems.map((item, index) => {
          const ItemIcon = iconFor(item.icon);

          return (
            <button
              key={`${item.href}-${item.name}`}
              className={`tp-orbit-node tp-node-${index} ${
                selected === index ? "is-active" : ""
              }`}
              aria-label={item.name}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <ItemIcon
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>{item.shortLabel ?? item.name}</span>
            </button>
          );
        })}
      </motion.div>

      <div className="tp-desk-progress" aria-hidden="true">
        <motion.span
          key={`${selected}-${paused}-${visible}-${pageVisible}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: paused || !visible || !pageVisible || reduced ? 0 : 1 }}
          transition={{ duration: paused || !visible || !pageVisible || reduced ? 0 : 4, ease: "linear" }}
        />
      </div>

      <div className="tp-desk-bottom">
        <span>{hero.chooseLabel}</span>
        <span className="tp-desk-counter">
          {String(selected + 1).padStart(2, "0")}
          <span>
            {" "}
            / {String(Math.max(deskItems.length, 1)).padStart(2, "0")}
          </span>
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SERVICE EXPLORER
========================================================= */

function ServiceExplorer({
  section,
}: {
  section: DynamicHubData["services"];
}) {
  const [active, setActive] = useState(0);
  const identifier = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  return (
    <div className="tp-explorer" data-lift>
      <div
        className="tp-service-tabs"
        role="tablist"
        aria-label={`${section.title} categories`}
      >
        {section.categories.map((service, index) => {
          const Icon = iconFor(service.icon);

          return (
            <button
              key={service.title}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`${identifier}-tab-${index}`}
              aria-controls={`${identifier}-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next: number | undefined;
                const last = section.categories.length - 1;

                if (event.key === "ArrowRight") {
                  next = index === last ? 0 : index + 1;
                }

                if (event.key === "ArrowLeft") {
                  next = index === 0 ? last : index - 1;
                }

                if (event.key === "Home") next = 0;
                if (event.key === "End") next = last;

                if (next !== undefined) {
                  event.preventDefault();
                  setActive(next);
                  tabRefs.current[next]?.focus();
                }
              }}
              className={`tp-service-tab ${
                active === index ? "is-active" : ""
              }`}
            >
              {active === index && (
                <motion.span
                  layoutId={`${identifier}-service-tab`}
                  className="tp-tab-bg"
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 34,
                  }}
                />
              )}

              <span className="tp-tab-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                className="relative shrink-0"
                size={20}
                aria-hidden="true"
              />
              <span className="relative flex-1">{service.title}</span>
              <ArrowUpRight
                className="relative shrink-0"
                size={20}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {section.categories.map((service, index) => {
        const Icon = iconFor(service.icon);

        return (
          <div
            key={service.title}
            role="tabpanel"
            id={`${identifier}-panel-${index}`}
            aria-labelledby={`${identifier}-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
            className="tp-service-panel"
          >
            <div className="tp-service-editorial">
              <span className="tp-outline-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="tp-icon-inline">
                  <Icon
                    size={27}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="tp-panel-heading">{service.title}</h3>
                <Copy blocks={service.paragraphs} />
              </div>

              <div className="tp-service-link">
                <p>Explore this service area:</p>
                <Link href={service.hubHref}>
                  {service.hubLabel}
                  <ArrowUpRight
                    size={19}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="tp-service-ledger">
              <div className="tp-ledger-label">
                <span>{service.listLabel}</span>
                <Layers3 size={18} aria-hidden="true" />
              </div>

              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-label={`Open ${item.name}`}
                    >
                      <span className="tp-ledger-index">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="tp-ledger-name">{item.name}</span>
                      <ArrowUpRight
                        size={15}
                        className="tp-ledger-arrow"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      <div className="tp-explorer-footer">
        <ShieldCheck size={16} aria-hidden="true" />
        <span>{section.footerText}</span>
      </div>
    </div>
  );
}

/* =========================================================
   REQUIREMENTS
========================================================= */

function RequirementNavigator({
  items,
}: {
  items: DynamicHubData["requirements"]["items"];
}) {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="tp-requirement-list">
      {items.map((item, index) => {
        const Icon = iconFor(item.icon);
        const open = active === index;

        return (
          <article
            key={item.title}
            className={`tp-requirement ${open ? "is-active" : ""}`}
          >
            <h3>
              <button
                id={`${id}-trigger-${index}`}
                aria-expanded={open}
                aria-controls={`${id}-answer-${index}`}
                onClick={() => setActive(open ? null : index)}
              >
                <span className="tp-requirement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon
                  className="tp-requirement-icon"
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span className="flex-1">{item.title}</span>

                <span className="tp-toggle-icon">
                  {open ? (
                    <Minus size={18} aria-hidden="true" />
                  ) : (
                    <Plus size={18} aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>

            <motion.div
              id={`${id}-answer-${index}`}
              role="region"
              aria-labelledby={`${id}-trigger-${index}`}
              aria-hidden={!open}
              inert={!open}
              initial={false}
              animate={{
                height: open ? "auto" : 0,
                opacity: open ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="tp-requirement-answer"
            >
              <Copy blocks={item.blocks} />
            </motion.div>
          </article>
        );
      })}
    </div>
  );
}

/* =========================================================
   CONNECTED NETWORK
========================================================= */

function ConnectedNetwork({
  section,
}: {
  section: DynamicHubData["connected"];
}) {
  const nodes = section.nodes.slice(0, 3);
  const [active, setActive] = useState(0);
  const points = [175, 500, 825];

  return (
    <div className="tp-tax-network">
      <div
        className="tp-network-visual"
        aria-label={section.title}
      >
        <div className="tp-network-dots" aria-hidden="true" />

        <svg
          className="tp-network-links"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((_, index) => {
            const x = points[index] ?? 500;

            return (
              <path
                key={`${x}-${index}`}
                d={`M${x} 65 C${x} 210 500 115 500 245`}
                stroke={active === index ? "#3276ff" : "#c8d7ee"}
                strokeWidth={active === index ? 2.5 : 1.5}
                fill="none"
                strokeDasharray={active === index ? "6 9" : undefined}
                className={active === index ? "tp-flow-line" : ""}
              />
            );
          })}
        </svg>

        <div className="tp-network-node-row">
          {nodes.map((node, index) => {
            const Icon = iconFor(node.icon);

            return (
              <button
                key={node.label}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className={`tp-network-node ${
                  active === index ? "is-active" : ""
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>{node.label}</span>
              </button>
            );
          })}
        </div>

        <div className="tp-network-center">
          <Layers3 size={25} strokeWidth={1.4} aria-hidden="true" />
          <div>
            <span>{section.centerEyebrow}</span>
            <p>{section.centerTitle}</p>
          </div>
        </div>
      </div>

      <div className="tp-network-explanations">
        {nodes.map((node, index) => (
          <div
            key={`${node.label}-${index}`}
            className={active === index ? "is-active" : ""}
          >
            <span className="tp-network-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{node.label}</h3>
            <p>
              <Rich text={node.description} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FAQ
========================================================= */

function FAQ({ items }: { items: HubFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="tp-faq-area">
      <div className="tp-faq-list">
        {items.map((faq, index) => {
          const expanded = open === index;

          return (
            <article
              key={faq.question}
              className={`tp-faq-item ${
                expanded ? "is-active" : ""
              }`}
            >
              <h3>
                <button
                  id={`${id}-question-${index}`}
                  aria-expanded={expanded}
                  aria-controls={`${id}-response-${index}`}
                  onClick={() =>
                    setOpen(expanded ? null : index)
                  }
                >
                  <span className="tp-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className="tp-faq-chevron"
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <motion.div
                id={`${id}-response-${index}`}
                role="region"
                aria-labelledby={`${id}-question-${index}`}
                aria-hidden={!expanded}
                inert={!expanded}
                initial={false}
                animate={{
                  height: expanded ? "auto" : 0,
                  opacity: expanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="tp-faq-answer"
              >
                <Copy blocks={faq.answer} />
              </motion.div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN DYNAMIC HUB
========================================================= */

export default function DynamicHub({ data }: DynamicHubProps) {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const lifecycle = useRef<HTMLDivElement>(null);

  const sectionIds = {
    overview: `${data.pageKey}-overview`,
    services: `${data.pageKey}-services`,
    lifecycle: `${data.pageKey}-lifecycle`,
    requirements: `${data.pageKey}-requirements`,
    faq: `${data.pageKey}-faq`,
  };

  const nav = [
    {
      id: sectionIds.overview,
      label: data.navigation.overview,
    },
    {
      id: sectionIds.services,
      label: data.navigation.services,
    },
    {
      id: sectionIds.lifecycle,
      label: data.navigation.lifecycle,
    },
    {
      id: sectionIds.requirements,
      label: data.navigation.requirements,
    },
    {
      id: sectionIds.faq,
      label: data.navigation.faq,
    },
  ];

  const [chapter, setChapter] = useState(sectionIds.overview);
  const [step, setStep] = useState(0);
  const contactUrl = "/contact-us";

  const currentStage =
    data.lifecycle.stages[step] ?? data.lifecycle.stages[0];
  const CurrentStageIcon = currentStage
    ? iconFor(currentStage.icon)
    : Fingerprint;

  useEffect(() => {
    const elements =
      root.current?.querySelectorAll<HTMLElement>("[data-chapter]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setChapter(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      },
    );

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (progress.current) {
        gsap.fromTo(
          progress.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      }

      const chapters =
        lifecycle.current?.querySelectorAll<HTMLElement>(
          "[data-stage]",
        );

      chapters?.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setStep(index),
          onEnterBack: () => setStep(index),
        });
      });
    }, root);

    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.utils
          .toArray<HTMLElement>("[data-lift]", root.current)
          .forEach((element) => {
            gsap.from(element, {
              y: 30,
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 95%",
                once: true,
              },
            });
          });

        gsap.utils
          .toArray<HTMLElement>("[data-parallax]", root.current)
          .forEach((element) => {
            gsap.fromTo(
              element,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: element.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });
      },
      root,
    );

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={root}
        className="dynamic-hub"
        style={
          {
            "--tp-header-offset": `${
              data.headerOffset ?? 78
            }px`,
          } as CSSProperties
        }
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="tp-hero"
          aria-labelledby={`${data.pageKey}-hero-title`}
        >
          <div className="tp-hero-atmosphere" aria-hidden="true">
            <div className="tp-hero-aura" />
            <div className="tp-hero-grid" />
          </div>

          <div className="tp-container">
            <nav className="tp-breadcrumb" aria-label="Breadcrumb">
              {data.breadcrumb.map((item, index) => (
                <span
                  key={`${item.label}-${index}`}
                  className="contents"
                >
                  {index > 0 && <span aria-hidden="true">/</span>}

                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span aria-current="page">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <div className="tp-hero-heading-row">
              <Kicker light>{data.hero.kicker}</Kicker>

              <span className="tp-edition">
                <ShieldCheck size={15} aria-hidden="true" />
                {data.hero.edition}
              </span>
            </div>

            <div className="tp-hero-grid-layout">
              <div className="relative min-w-0" data-lift>
                <h1
                  id={`${data.pageKey}-hero-title`}
                  className="tp-hero-title"
                >
                  {data.hero.titleLead}{" "}
                  <span>{data.hero.titleHighlight}</span>
                </h1>

                <Copy
                  blocks={data.hero.paragraphs}
                  className="tp-hero-copy"
                />

                <div className="tp-hero-actions">
                  <Action href={contactUrl}>
                    {data.hero.primaryCta}
                  </Action>

                  <button
                    className="tp-text-action"
                    onClick={() => jumpTo(sectionIds.services)}
                  >
                    {data.hero.secondaryCta}
                    <ArrowDown size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="tp-hero-desk-wrap" data-lift>
                <HeroDesk
                  logoSrc={data.logoSrc}
                  hero={data.hero}
                />

                <div className="tp-hero-location">
                  <MapPin size={15} aria-hidden="true" />
                  <span>{data.hero.locationNote}</span>
                </div>
              </div>
            </div>

            <div className="tp-hero-service-strip">
              <span className="tp-strip-label">
                {data.hero.keyServicesLabel}
              </span>

              <ul>
                {data.hero.serviceLinks.map((item) => {
                  const Icon = iconFor(item.icon);

                  return (
                    <li key={`${item.href}-${item.name}`}>
                      <Link href={item.href}>
                        <Icon
                          size={18}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                        <ArrowUpRight
                          size={14}
                          className="tp-strip-arrow"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            STICKY CHAPTER NAV
        ===================================================== */}

        <nav
          className="tp-chapter-nav"
          aria-label={`On this ${data.chapterBrand} page`}
        >
          <div className="tp-container">
            <span className="tp-chapter-brand">
              <span aria-hidden="true" />
              {data.chapterBrand}
            </span>

            <div className="tp-chapter-links">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    jumpTo(item.id);
                  }}
                  aria-current={
                    chapter === item.id ? "location" : undefined
                  }
                  className={
                    chapter === item.id ? "is-active" : ""
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={contactUrl}
              className="tp-nav-contact"
              aria-label={data.hero.primaryCta}
            >
              <MessageCircle size={19} aria-hidden="true" />
            </a>
          </div>

          <div
            ref={progress}
            className="tp-reading-progress"
            aria-hidden="true"
          />
        </nav>

        {/* =====================================================
            OVERVIEW
        ===================================================== */}

        <section
          id={sectionIds.overview}
          data-chapter
          className="tp-section tp-overview"
          aria-labelledby={`${data.pageKey}-overview-title`}
        >
          <div className="tp-container">
            <div className="tp-overview-heading" data-lift>
              <div>
                <Kicker>{data.overview.kicker}</Kicker>
                <Title id={`${data.pageKey}-overview-title`}>
                  {data.overview.title}
                </Title>
              </div>

              <div className="tp-overview-marker">
                <span>{data.overview.markerNumber}</span>
                <p>
                  {data.overview.markerText
                    .split("\n")
                    .map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index <
                          data.overview.markerText.split("\n")
                            .length -
                            1 && <br />}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            <div className="tp-overview-body">
              <div className="tp-overview-photo" data-lift>
                <div
                  data-parallax
                  className="tp-parallax-fill"
                >
                  <Photo
                    src={data.overview.image.src}
                    alt={data.overview.image.alt}
                    priority
                  />
                </div>

                <span className="tp-photo-chip">
                  <MapPin size={14} aria-hidden="true" />
                  {data.overview.imageChip}
                </span>

                <div className="tp-photo-bottom">
                  <Layers3
                    size={25}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                  <span>
                    {data.overview.imageStatement
                      .split("\n")
                      .map((line, index) => (
                        <span key={`${line}-${index}`}>
                          {line}
                          {index <
                            data.overview.imageStatement.split("\n")
                              .length -
                              1 && <br />}
                        </span>
                      ))}
                  </span>
                </div>
              </div>

              <div data-lift>
                <Copy blocks={data.overview.paragraphs} />
              </div>
            </div>

            <div className="tp-editorial-note" data-lift>
              <span className="tp-note-label">
                <ShieldCheck size={19} aria-hidden="true" />
                {data.overview.noteLabel}
              </span>

              <p>{data.overview.noteText}</p>
              <ArrowUpRight size={25} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id={sectionIds.services}
          data-chapter
          className="tp-section tp-services"
          aria-labelledby={`${data.pageKey}-services-title`}
        >
          <div className="tp-container">
            <div className="tp-section-top" data-lift>
              <div>
                <Kicker>{data.services.kicker}</Kicker>
                <Title id={`${data.pageKey}-services-title`}>
                  {data.services.title}
                </Title>
              </div>

              <Copy blocks={data.services.intro} />
            </div>

            <ServiceExplorer section={data.services} />
          </div>
        </section>

        {/* =====================================================
            LIFECYCLE
        ===================================================== */}

        <section
          id={sectionIds.lifecycle}
          data-chapter
          ref={lifecycle}
          className="tp-section tp-lifecycle"
          aria-labelledby={`${data.pageKey}-lifecycle-title`}
        >
          <div className="tp-container tp-lifecycle-layout">
            <div className="tp-lifecycle-sticky">
              <Kicker>{data.lifecycle.kicker}</Kicker>

              <Title id={`${data.pageKey}-lifecycle-title`}>
                {data.lifecycle.title}
              </Title>

              <Copy
                blocks={data.lifecycle.intro}
                className="mt-6"
              />

              {currentStage && (
                <div className="tp-chapter-instrument">
                  <span
                    className="tp-chapter-instrument-number"
                    aria-hidden="true"
                  >
                    {String(step + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="tp-chapter-instrument-orbit"
                    aria-hidden="true"
                  >
                    <span />
                    <CurrentStageIcon
                      size={36}
                      strokeWidth={1}
                    />
                  </div>

                  <div className="tp-instrument-footer">
                    <span>{currentStage.title}</span>
                    <span>
                      {String(step + 1).padStart(2, "0")} /{" "}
                      {String(
                        data.lifecycle.stages.length,
                      ).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              )}

              <div
                className="tp-stage-controls"
                aria-label={`${data.lifecycle.title} chapters`}
              >
                {data.lifecycle.stages.map((stage, index) => (
                  <button
                    key={stage.title}
                    aria-label={stage.title}
                    aria-pressed={step === index}
                    className={step === index ? "is-active" : ""}
                    onClick={() =>
                      jumpTo(
                        `${data.pageKey}-stage-${index}`,
                      )
                    }
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tp-lifecycle-chapters">
              {data.lifecycle.stages.map((stage, index) => {
                const Icon = iconFor(stage.icon);

                return (
                  <article
                    id={`${data.pageKey}-stage-${index}`}
                    data-stage
                    key={stage.title}
                    className={`tp-stage ${
                      step === index ? "is-active" : ""
                    }`}
                  >
                    <div className="tp-stage-top">
                      <span className="tp-stage-index">
                        {data.lifecycle.chapterLabel}{" "}
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Icon
                        size={26}
                        strokeWidth={1.2}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{stage.title}</h3>

                    <p>
                      <Rich text={stage.text} />
                    </p>

                    <div
                      className="tp-stage-line"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}

        <section
          id={sectionIds.requirements}
          data-chapter
          className="tp-section tp-requirements"
          aria-labelledby={`${data.pageKey}-requirements-title`}
        >
          <div className="tp-container tp-requirement-layout">
            <div data-lift>
              <Kicker light>{data.requirements.kicker}</Kicker>

              <Title id={`${data.pageKey}-requirements-title`}>
                {data.requirements.title}
              </Title>

              <Copy
                blocks={data.requirements.intro}
                className="mt-7"
              />

              <p className="tp-interaction-hint">
                <Plus size={15} aria-hidden="true" />
                {data.requirements.hint}
              </p>
            </div>

            <RequirementNavigator
              items={data.requirements.items}
            />
          </div>
        </section>

        {/* =====================================================
            CONNECTED SYSTEMS
        ===================================================== */}

        <section
          className="tp-section tp-connected"
          aria-labelledby={`${data.pageKey}-connected-title`}
        >
          <div className="tp-container">
            <div className="tp-section-top" data-lift>
              <div>
                <Kicker>{data.connected.kicker}</Kicker>
                <Title id={`${data.pageKey}-connected-title`}>
                  {data.connected.title}
                </Title>
              </div>

              <Copy blocks={data.connected.intro} />
            </div>

            <div data-lift>
              <ConnectedNetwork section={data.connected} />
            </div>

            <div className="tp-connected-bottom" data-lift>
              <p>{data.connected.bottomLead}</p>
              <Copy blocks={data.connected.bottomBlocks} />
            </div>
          </div>
        </section>

        {/* =====================================================
            GROWTH / CHECKLIST
        ===================================================== */}

        <section
          className="tp-section tp-growth"
          aria-labelledby={`${data.pageKey}-growth-title`}
        >
          <div className="tp-container tp-growth-layout">
            <div data-lift>
              <Kicker>{data.growth.kicker}</Kicker>

              <Title id={`${data.pageKey}-growth-title`}>
                {data.growth.title}
              </Title>

              <Copy
                blocks={data.growth.introBlocks}
                className="mt-7"
              />

              <Copy
                blocks={data.growth.closingBlocks}
                className="mt-5"
              />
            </div>

            <div className="tp-checklist tp-support-list" data-lift>
              <div className="tp-checklist-top">
                <ClipboardCheck size={29} strokeWidth={1.3} aria-hidden="true" />
                <span>{data.growth.checklistEyebrow}</span>
                <span>{String(data.growth.checklistItems.length).padStart(2, "0")}</span>
              </div>

              <h3>{data.growth.checklistTitle}</h3>

              <ul>
                {data.growth.checklistItems.map((item) => (
                  <li key={item}>
                    <span className="tp-static-tick" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="tp-checklist-footer">
                <Action href={contactUrl} secondary>
                  {data.growth.ctaLabel}
                </Action>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY / EXPERTISE
        ===================================================== */}

        <section
          className="tp-section tp-why"
          aria-labelledby={`${data.pageKey}-why-title`}
        >
          <div className="tp-container">
            <div className="tp-why-heading" data-lift>
              <div>
                <Kicker light>{data.why.kicker}</Kicker>
                <Title id={`${data.pageKey}-why-title`}>
                  {data.why.title}
                </Title>
              </div>

              <p className="tp-why-lede">{data.why.lede}</p>
            </div>

            <div className="tp-why-layout">
              <div className="tp-why-visual" data-lift>
                <div
                  data-parallax
                  className="tp-parallax-fill"
                >
                  <Photo
                    src={data.why.image.src}
                    alt={data.why.image.alt}
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                </div>

                <div
                  className="tp-why-visual-overlay"
                  aria-hidden="true"
                />

                <div className="tp-why-visual-badge">
                  <ShieldCheck
                    size={24}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <span>{data.why.badge}</span>
                </div>

                <div className="tp-why-proof-grid">
                  {data.why.proofs.map((proof, index) => (
                    <div key={proof.label}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{proof.label}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tp-why-content" data-lift>
                <div className="tp-why-principles">
                  {data.why.principles.map((principle) => {
                    const Icon = iconFor(principle.icon);

                    return (
                      <div key={principle.title}>
                        <span className="tp-why-principle-icon">
                          <Icon
                            size={20}
                            aria-hidden="true"
                          />
                        </span>

                        <div>
                          <strong>{principle.title}</strong>
                          <p>{principle.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Copy
                  blocks={data.why.detailBlocks}
                  className="tp-why-detail-copy"
                />

                <div className="tp-why-bottom">
                  <span className="tp-why-bottom-label">
                    <Layers3 size={18} aria-hidden="true" />
                    {data.why.bottomLabel}
                  </span>

                  <Action href={contactUrl} light>
                    {data.why.ctaLabel}
                  </Action>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTAINED BLUE CTA
        ===================================================== */}

        <section
          className="tp-section tp-consult-section"
          aria-labelledby={`${data.pageKey}-consult-title`}
        >
          <div className="tp-container">
            <div className="tp-consult tp-consult-refined">
              <div className="tp-consult-summary" data-lift>
                <Kicker light>{data.consult.kicker}</Kicker>
                <Title id={`${data.pageKey}-consult-title`}>
                  {data.consult.title}
                </Title>
                <p className="tp-consult-lead"><Rich text={data.consult.lead} /></p>
                <Action href={contactUrl} light>{data.consult.ctaLabel}</Action>
              </div>

              <div className="tp-consult-details">
                <div className="tp-consult-detail-card" data-lift>
                  <Copy blocks={data.consult.leftBlocks} />
                </div>
                <div className="tp-consult-detail-card" data-lift>
                  <Copy blocks={data.consult.rightBlocks} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ — NO SEARCH BAR
        ===================================================== */}

        <section
          id={sectionIds.faq}
          data-chapter
          className="tp-section tp-faq"
          aria-labelledby={`${data.pageKey}-faq-title`}
        >
          <div className="tp-container tp-faq-layout">
            <div className="tp-faq-intro" data-lift>
              <Kicker>{data.faq.kicker}</Kicker>

              <Title id={`${data.pageKey}-faq-title`}>
                {data.faq.title}
              </Title>

              <div className="tp-faq-help">
                <MessageCircle
                  size={25}
                  strokeWidth={1.3}
                  aria-hidden="true"
                />

                <p>{data.faq.helpText}</p>

                <a href={contactUrl}>
                  {data.faq.helpCta}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <FAQ items={data.faq.items} />
          </div>
        </section>

        <PremiumStyles />
      </div>
    </MotionConfig>
  );
}


function PremiumStyles() {
  return <style jsx global>{`
    .dynamic-hub {
      --tp-blue: #2d72ff; --tp-navy: #071a35; --tp-ink: #10223d;
      --tp-muted: #617086; --tp-line: #dbe4f1; --tp-paper: #f4f7fc;
      color: var(--tp-ink); background: #fff; overflow-x: clip;
      font-family: var(--font-satoshi, "Satoshi"), Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .dynamic-hub *, .dynamic-hub *::before, .dynamic-hub *::after { box-sizing: border-box; }
    .dynamic-hub h1, .dynamic-hub h2, .dynamic-hub h3, .dynamic-hub p { margin: 0; }
    .dynamic-hub button, .dynamic-hub input { font: inherit; }
    .dynamic-hub button { cursor: pointer; }
    .dynamic-hub a { text-decoration: none; }
    .dynamic-hub button, .dynamic-hub a, .dynamic-hub input { -webkit-tap-highlight-color: transparent; }
    .dynamic-hub :is(a, button, input, [tabindex]):focus-visible { outline: 2px solid #77a7ff; outline-offset: 5px; }
    .dynamic-hub [hidden] { display: none !important; }
    .dynamic-hub ::selection { background: #a7c9ff; color: #071a35; }
    .dynamic-hub .tp-container { width: min(100%, 1400px); margin-inline: auto; padding-inline: 56px; }
    .dynamic-hub .tp-section { padding-block: 112px; scroll-margin-top: calc(var(--tp-header-offset) + 90px); }
    .dynamic-hub .tp-title, .dynamic-hub .tp-hero-title, .dynamic-hub .tp-panel-heading {
      font-family: var(--font-cabinet, "Cabinet Grotesk"), var(--font-satoshi, "Satoshi"), Arial, sans-serif;
      font-weight: 550; letter-spacing: -0.055em; text-wrap: balance;
    }
    .dynamic-hub .tp-title { font-size: clamp(34px, 3.7vw, 53px); line-height: 1.08; }
    .dynamic-hub .tp-copy { color: var(--tp-muted); font-size: 15.5px; line-height: 1.85; }
    .dynamic-hub .tp-copy p + p { margin-top: 19px; }
    .dynamic-hub strong { font-weight: 650; }
    .dynamic-hub .tp-kicker { display: flex; align-items: center; gap: 10px; color: #2364de; font-size: 10px; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; margin-bottom: 22px; line-height: 1.7; }
    .dynamic-hub .tp-kicker > span { width: 22px; height: 1px; background: currentColor; flex-shrink: 0; }
    .dynamic-hub .tp-kicker.is-light { color: #97bdff; }
    .dynamic-hub .tp-action { display: inline-flex; align-items: center; justify-content: space-between; gap: 25px; min-height: 57px; padding: 8px 9px 8px 25px; border-radius: 8px; background: var(--tp-blue); color: #fff; font-size: 14px; font-weight: 650; line-height: 1.5; max-width: 100%; }
    .dynamic-hub .tp-action-icon { display: flex; justify-content: center; align-items: center; width: 39px; height: 39px; border-radius: 5px; background: #ffffff16; flex-shrink: 0; transition: transform .25s, background .25s; }
    .dynamic-hub .tp-action:hover .tp-action-icon { transform: rotate(45deg); background: #ffffff2a; }
    .dynamic-hub .tp-action.is-light { background: #fff; color: #1753be; }
    .dynamic-hub .tp-action.is-light .tp-action-icon { background: #eaf1ff; }
    .dynamic-hub .tp-action.is-secondary { background: #071a35; }
    .dynamic-hub .tp-hero { position: relative; isolation: isolate; overflow: hidden; padding: calc(var(--tp-header-offset) + 40px) 0 0; background: #071a35; color: #fff; }
    .dynamic-hub .tp-hero-atmosphere { position: absolute; inset: 0; pointer-events: none; z-index: -1; overflow: hidden; }
    .dynamic-hub .tp-hero-aura { position: absolute; inset: 0; background: radial-gradient(ellipse at 80% 35%, #1f59b257 0%, transparent 54%), radial-gradient(ellipse at 5% 4%, #18448350, transparent 38%); }
    .dynamic-hub .tp-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(#b2d2ff08 1px, transparent 1px), linear-gradient(90deg, #b2d2ff08 1px, transparent 1px); background-size: 88px 88px; mask-image: linear-gradient(90deg, transparent 10%, black); }
    .dynamic-hub .tp-breadcrumb { display: flex; align-items: center; gap: 12px; color: #90a3be; font-size: 11px; margin-bottom: 36px; }
    .dynamic-hub .tp-breadcrumb a { color: #b7c9e4; }
    .dynamic-hub .tp-breadcrumb a:hover { color: #fff; }
    .dynamic-hub .tp-hero-heading-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }
    .dynamic-hub .tp-edition { display: inline-flex; gap: 8px; align-items: center; color: #a6bcda; font-size: 11px; white-space: nowrap; }
    .dynamic-hub .tp-hero-grid-layout { display: grid; grid-template-columns: 1.15fr 1fr; gap: 45px; align-items: center; }
    .dynamic-hub .tp-hero-title { font-size: clamp(44px, 5.05vw, 72px); line-height: 1.045; max-width: 730px; color: #fff !important; }
    .dynamic-hub .tp-hero-title > span { color: #88b5ff !important; }
    .dynamic-hub .tp-hero-copy { margin-top: 30px; max-width: 650px; color: #b8c9e1; font-size: 14.5px; line-height: 1.85; }
    .dynamic-hub .tp-hero-actions { display: flex; gap: 29px; align-items: center; flex-wrap: wrap; margin-top: 32px; }
    .dynamic-hub .tp-text-action { display: inline-flex; align-items: center; gap: 12px; padding-block: 12px; background: transparent; border: 0; color: #d2e2fb; font-size: 12px; }
    .dynamic-hub .tp-text-action svg { transition: transform .25s; }
    .dynamic-hub .tp-text-action:hover svg { transform: translateY(4px); }
    .dynamic-hub .tp-hero-desk-wrap { min-width: 0; }
    .dynamic-hub .tp-desk { position: relative; width: 100%; max-width: 550px; margin-inline: auto; perspective: 1200px; }
    .dynamic-hub .tp-desk-caption { display: flex; align-items: center; justify-content: center; gap: 9px; padding: 0 20px 17px; color: #b8cdeb; font-size: 11px; }
    .dynamic-hub .tp-live-dot { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: #93bdff; box-shadow: 0 0 0 4px #83b5ff18; }
    .dynamic-hub .tp-desk-stage { position: relative; height: 470px; width: 100%; transform-style: preserve-3d; }
    .dynamic-hub .tp-orbit { position: absolute; left: 50%; top: 50%; border: 1px solid #90bfff20; border-radius: 50%; transform: translate(-50%, -50%) rotate(-28deg); pointer-events: none; }
    .dynamic-hub .tp-orbit-one { width: 88%; height: 75%; box-shadow: 0 0 90px #4279e410; }
    .dynamic-hub .tp-orbit-two { width: 78%; height: 91%; transform: translate(-50%, -50%) rotate(33deg); border-color: #90bfff12; }
    .dynamic-hub .tp-orbit-three { width: 61%; height: 65%; border-color: #90bfff35; }
    .dynamic-hub .tp-orbit-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
    .dynamic-hub .tp-orbit-svg path { animation: tp-dash 35s linear infinite; }
    .dynamic-hub .tp-document-shadow { position: absolute; width: 245px; height: 120px; left: 50%; top: 77%; transform: translateX(-50%); border-radius: 50%; background: #0007; filter: blur(27px); }
    .dynamic-hub .tp-document { position: absolute; width: 248px; height: 322px; left: 50%; top: 50%; border-radius: 12px; }
    .dynamic-hub .tp-document-back { padding: 27px; border: 1px solid #b7d5ff38; background: linear-gradient(140deg, #b6d7ff3a, #185dc12a); transform: translate(-49%, -50%) rotate(-15deg); }
    .dynamic-hub .tp-document-line { height: 6px; background: #c2dfff28; border-radius: 3px; margin-top: 20px; }
    .dynamic-hub .tp-document-front { padding: 23px; background: linear-gradient(130deg, #fff, #e7f0ff); color: #183765; transform: translate(-50%, -50%) rotate(6deg); box-shadow: 0 16px 70px #020e2488, inset 0 0 0 1px #fff; }
    .dynamic-hub .tp-document-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    .dynamic-hub .tp-document-top img { mix-blend-mode: multiply; }
    .dynamic-hub .tp-document-top > svg { color: #3379eb; }
    .dynamic-hub .tp-document-rule { height: 1px; background: #cbdcf5; margin: 17px 0; }
    .dynamic-hub .tp-document-content { min-height: 145px; }
    .dynamic-hub .tp-document-symbol { display: inline-flex; color: #286ae1; }
    .dynamic-hub .tp-document-label { font-size: 8px; font-weight: 700; letter-spacing: .13em; margin: 10px 0 7px; color: #7d94b4; }
    .dynamic-hub .tp-document-heading { font-size: 21px; font-weight: 650; letter-spacing: -.04em; line-height: 1.18; }
    .dynamic-hub .tp-document-lines { display: grid; gap: 6px; margin: 5px 0 16px; }
    .dynamic-hub .tp-document-lines i { height: 3px; border-radius: 4px; background: #c7d8ef; }
    .dynamic-hub .tp-document-lines i:nth-child(2) { width: 85%; }.dynamic-hub .tp-document-lines i:nth-child(3) { width: 61%; }
    .dynamic-hub .tp-document-foot { display: flex; justify-content: space-between; align-items: center; font-size: 8px; color: #6582aa; border-top: 1px solid #ccddf4; padding-top: 11px; }
    .dynamic-hub .tp-document-foot svg { color: #2878ee; }
    .dynamic-hub .tp-orbit-node { position: absolute; display: flex; align-items: center; gap: 9px; border: 1px solid #9dc4ff30; border-radius: 8px; padding: 12px 14px; background: #102c4ff2; color: #bfd3ee; backdrop-filter: blur(15px); box-shadow: 0 8px 30px #02112745; font-size: 11px; transition: background .25s, color .25s, border-color .25s, box-shadow .25s; white-space: nowrap; }
    .dynamic-hub .tp-orbit-node.is-active { border-color: #6ea3ff; background: #2870e7; color: white; box-shadow: 0 0 40px #438dff3a; }
    .dynamic-hub .tp-orbit-node:hover { border-color: #8ab9ff; }
    .dynamic-hub .tp-node-0 { top: 45px; left: 4%; }.dynamic-hub .tp-node-1 { top: 89px; right: 0; }.dynamic-hub .tp-node-2 { bottom: 68px; left: 0; }.dynamic-hub .tp-node-3 { bottom: 38px; right: 3%; }
    .dynamic-hub .tp-desk-bottom { display: flex; justify-content: space-between; border-top: 1px solid #93b5e222; margin-inline: 15px; padding-top: 17px; font-size: 10px; color: #87a3c9; }
    .dynamic-hub .tp-desk-counter { font-variant-numeric: tabular-nums; font-size: 14px; color: #d6e8ff; }.dynamic-hub .tp-desk-counter > span { font-size: 10px; color: #6985ab; }
    .dynamic-hub .tp-hero-location { display: flex; justify-content: center; align-items: flex-start; gap: 8px; margin: 23px auto 0; max-width: 380px; font-size: 10px; line-height: 1.7; color: #8ea8cc; text-align: center; }
    .dynamic-hub .tp-hero-location svg { margin-top: 1px; flex-shrink: 0; }
    .dynamic-hub .tp-hero-service-strip { display: flex; align-items: flex-start; gap: 32px; border-top: 1px solid #8dabd325; margin-top: 65px; padding-block: 25px 28px; }
    .dynamic-hub .tp-strip-label { font-size: 9px; font-weight: 650; text-transform: uppercase; letter-spacing: .13em; color: #88a5cb; padding-top: 3px; white-space: nowrap; }
    .dynamic-hub .tp-hero-service-strip ul { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; list-style: none; padding: 0; margin: 0; width: 100%; }
    .dynamic-hub .tp-hero-service-strip li { min-width: 0; }
    .dynamic-hub .tp-hero-service-strip li > a { display: flex; gap: 9px; align-items: flex-start; font-size: 11px; line-height: 1.6; color: #d3e2f9; transition: color .2s, transform .2s; }
    .dynamic-hub .tp-hero-service-strip li > a:hover { color: #fff; transform: translateX(3px); }
    .dynamic-hub .tp-hero-service-strip li svg { color: #7dafff; flex-shrink: 0; }
    .dynamic-hub .tp-strip-arrow { margin-left: auto; margin-top: 2px; opacity: .55; transition: opacity .2s, transform .2s; }
    .dynamic-hub .tp-hero-service-strip li > a:hover .tp-strip-arrow { opacity: 1; transform: translate(2px, -2px); }
    .dynamic-hub .tp-chapter-nav { position: sticky; top: var(--tp-header-offset); z-index: 30; border-bottom: 1px solid #dce6f2; background: #ffffffed; backdrop-filter: blur(18px); }
    .dynamic-hub .tp-chapter-nav > .tp-container { display: flex; align-items: center; min-height: 70px; gap: 25px; }
    .dynamic-hub .tp-chapter-brand { display: flex; align-items: center; gap: 10px; font-size: 10px; font-weight: 750; letter-spacing: .15em; margin-right: auto; color: #12376e; }
    .dynamic-hub .tp-chapter-brand > span { width: 5px; height: 18px; background: #2d72ff; border-radius: 2px; }
    .dynamic-hub .tp-chapter-links { display: flex; align-items: stretch; gap: 29px; min-height: 70px; }
    .dynamic-hub .tp-chapter-links a { position: relative; display: flex; align-items: center; font-size: 12px; font-weight: 550; color: #7c889a; white-space: nowrap; }
    .dynamic-hub .tp-chapter-links a::after { content: ""; position: absolute; bottom: 0; height: 2px; left: 0; right: 0; background: #2d72ff; transform: scaleX(0); transition: transform .25s; }
    .dynamic-hub .tp-chapter-links a.is-active, .dynamic-hub .tp-chapter-links a:hover { color: #2264d9; }.dynamic-hub .tp-chapter-links a.is-active::after { transform: scaleX(1); }
    .dynamic-hub .tp-nav-contact { display: flex; justify-content: center; align-items: center; width: 35px; height: 35px; border-radius: 50%; color: #296add; background: #edf3ff; margin-left: 10px; flex-shrink: 0; }
    .dynamic-hub .tp-reading-progress { height: 2px; background: #2d72ff; position: absolute; bottom: -1px; left: 0; width: 100%; transform: scaleX(0); transform-origin: left; pointer-events: none; }
    .dynamic-hub .tp-overview-heading { display: grid; grid-template-columns: 1fr .45fr; align-items: end; gap: 70px; margin-bottom: 46px; }
    .dynamic-hub .tp-overview-heading .tp-title { max-width: 780px; }
    .dynamic-hub .tp-overview-marker { display: flex; align-items: center; justify-content: flex-end; gap: 20px; padding-bottom: 6px; }
    .dynamic-hub .tp-overview-marker > span { font-size: 62px; font-weight: 500; letter-spacing: -.08em; color: #dce7f6; line-height: 1; }
    .dynamic-hub .tp-overview-marker p { font-size: 11px; line-height: 1.8; color: #718098; border-left: 1px solid #d9e4f3; padding-left: 20px; }
    .dynamic-hub .tp-overview-body { display: grid; grid-template-columns: .85fr 1.15fr; gap: 65px; align-items: center; }
    .dynamic-hub .tp-overview-photo { min-height: 470px; align-self: stretch; position: relative; overflow: hidden; border-radius: 4px 70px 4px 4px; background: #dae6f7; }
    .dynamic-hub .tp-photo-fill { position: absolute; inset: 0; background: #dce8fb; }
    .dynamic-hub .tp-photo-fallback { height: 100%; display: flex; align-items: center; justify-content: center; color: #74a4e6; background: linear-gradient(140deg, #bdd5f7, #eaf3ff); }
    .dynamic-hub .tp-parallax-fill { position: absolute; inset: -8% 0; }
    .dynamic-hub .tp-overview-photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, #071a350d 20%, #071a3599 100%); pointer-events: none; }
    .dynamic-hub .tp-photo-chip { position: absolute; z-index: 1; left: 22px; top: 22px; display: flex; align-items: center; gap: 7px; color: #dbeaff; background: #071a357c; backdrop-filter: blur(14px); border: 1px solid #ffffff27; border-radius: 30px; padding: 9px 12px; font-size: 9px; }
    .dynamic-hub .tp-photo-bottom { position: absolute; z-index: 1; left: 28px; bottom: 29px; display: flex; align-items: center; gap: 18px; color: white; }
    .dynamic-hub .tp-photo-bottom span { font-size: 23px; font-weight: 500; letter-spacing: -.035em; line-height: 1.2; }
    .dynamic-hub .tp-editorial-note { display: grid; grid-template-columns: 160px 1fr 30px; gap: 30px; margin-top: 48px; padding: 28px 0; border-top: 1px solid #dce5f1; border-bottom: 1px solid #dce5f1; align-items: center; }
    .dynamic-hub .tp-note-label { display: flex; align-items: center; gap: 9px; font-size: 9px; font-weight: 700; letter-spacing: .14em; color: #2d72ff; }
    .dynamic-hub .tp-editorial-note > p { font-size: 21px; font-weight: 500; letter-spacing: -.02em; line-height: 1.55; }.dynamic-hub .tp-editorial-note > svg { color: #2d72ff; }
    .dynamic-hub .tp-services { background: #f2f6fc; }
    .dynamic-hub .tp-section-top { display: grid; grid-template-columns: 1fr .9fr; gap: 90px; align-items: end; margin-bottom: 50px; }
    .dynamic-hub .tp-section-top .tp-copy { max-width: 550px; }
    .dynamic-hub .tp-explorer { border-radius: 16px; box-shadow: 0 30px 90px -55px #123d8180; background: white; overflow: hidden; border: 1px solid #dce6f4; }
    .dynamic-hub .tp-service-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding: 8px; background: #e9eff8; }
    .dynamic-hub .tp-service-tab { position: relative; display: flex; align-items: center; gap: 17px; padding: 22px; min-height: 78px; border: 0; border-radius: 9px; background: transparent; color: #6c7a8d; text-align: left; font-size: 16px; font-weight: 550; }
    .dynamic-hub .tp-service-tab > svg { margin-left: auto; }.dynamic-hub .tp-service-tab.is-active { color: #fff; }
    .dynamic-hub .tp-tab-bg { position: absolute; inset: 0; border-radius: 9px; background: #102f59; }
    .dynamic-hub .tp-tab-number { position: relative; font-size: 10px; opacity: .65; }
    .dynamic-hub .tp-service-panel { display: grid; grid-template-columns: .95fr 1.05fr; min-height: 580px; }
    .dynamic-hub .tp-service-editorial { position: relative; padding: 46px; display: flex; flex-direction: column; justify-content: space-between; gap: 32px; overflow: hidden; }
    .dynamic-hub .tp-outline-number { position: absolute; font-size: 180px; line-height: 1; font-weight: 650; letter-spacing: -.12em; right: 34px; top: 24px; color: #edf2fa; pointer-events: none; }
    .dynamic-hub .tp-icon-inline { color: #2d72ff; margin-bottom: 21px; }
    .dynamic-hub .tp-panel-heading { font-size: 36px; line-height: 1.12; margin-bottom: 22px; max-width: 390px; }
    .dynamic-hub .tp-service-link { position: relative; padding-top: 23px; border-top: 1px solid #dce6f3; }
    .dynamic-hub .tp-service-link > p { font-size: 10px; color: #8796ad; margin-bottom: 8px; }
    .dynamic-hub .tp-service-link > a { color: #225fcc; font-size: 13px; font-weight: 650; display: inline-flex; gap: 13px; align-items: center; }
    .dynamic-hub .tp-service-ledger { background: #f8faff; border-left: 1px solid #e6edf7; padding: 42px 36px; }
    .dynamic-hub .tp-ledger-label { display: flex; justify-content: space-between; gap: 15px; color: #5e7aa7; font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: .14em; padding-bottom: 22px; }
    .dynamic-hub .tp-service-ledger ul { list-style: none; padding: 0; margin: 0; }
    .dynamic-hub .tp-service-ledger li { border-top: 1px solid #e0e9f5; min-height: 43px; }
    .dynamic-hub .tp-service-ledger li > a { display: flex; align-items: center; gap: 15px; min-height: 43px; padding: 11px 1px; font-size: 13px; color: #3a5278; transition: color .2s, padding .2s; }
    .dynamic-hub .tp-service-ledger li > a:hover { padding-left: 7px; color: #2064dd; }
    .dynamic-hub .tp-ledger-index { font-size: 9px; color: #a8b7cc; font-variant-numeric: tabular-nums; }
    .dynamic-hub .tp-ledger-name { min-width: 0; }
    .dynamic-hub .tp-ledger-arrow { margin-left: auto; color: #5694f3; flex-shrink: 0; transition: transform .2s; }
    .dynamic-hub .tp-service-ledger li > a:hover .tp-ledger-arrow { transform: translate(2px, -2px); }
    .dynamic-hub .tp-explorer-footer { display: flex; justify-content: center; align-items: center; gap: 9px; border-top: 1px solid #e3ebf5; padding: 17px 20px; font-size: 10px; color: #8090a9; }
    .dynamic-hub .tp-explorer-footer svg { color: #2d72ff; }
    .dynamic-hub .tp-lifecycle-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 105px; align-items: start; }
    .dynamic-hub .tp-lifecycle-sticky { position: sticky; top: calc(var(--tp-header-offset) + 98px); padding-bottom: 10px; }
    .dynamic-hub .tp-lifecycle-sticky .tp-title { font-size: clamp(34px, 3.3vw, 48px); }
    .dynamic-hub .tp-chapter-instrument { position: relative; height: 250px; margin-top: 30px; border: 1px solid #e2e9f4; border-radius: 7px; background: linear-gradient(140deg, #f5f8ff, white); overflow: hidden; }
    .dynamic-hub .tp-chapter-instrument-number { position: absolute; left: 22px; top: 13px; font-size: 162px; font-weight: 500; line-height: 1; letter-spacing: -.1em; color: #dce8f9; }
    .dynamic-hub .tp-chapter-instrument-orbit { position: absolute; right: 25px; top: 20px; width: 170px; height: 170px; display: flex; justify-content: center; align-items: center; border: 1px solid #c3d9fc; border-radius: 50%; color: #286ee8; background: radial-gradient(circle, #e0ecff55, transparent 64%); box-shadow: 0 0 0 22px #2872e803, 0 0 0 43px #2872e803; }
    .dynamic-hub .tp-chapter-instrument-orbit > span { position: absolute; width: 6px; height: 6px; background: #2d72ff; border-radius: 50%; left: -3px; top: 50%; box-shadow: 0 0 0 5px #2d72ff12; }
    .dynamic-hub .tp-instrument-footer { position: absolute; left: 23px; right: 23px; bottom: 19px; display: flex; justify-content: space-between; gap: 15px; font-size: 10px; color: #607da5; line-height: 1.6; }
    .dynamic-hub .tp-instrument-footer > span:last-child { white-space: nowrap; color: #2d72ff; }
    .dynamic-hub .tp-stage-controls { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; margin-top: 20px; }
    .dynamic-hub .tp-stage-controls button { background: none; border: 0; border-top: 2px solid #dfe7f2; padding: 10px 0; color: #9cacbf; font-size: 10px; text-align: left; transition: border-color .25s, color .25s; }
    .dynamic-hub .tp-stage-controls button.is-active { border-top-color: #2d72ff; color: #2d72ff; }
    .dynamic-hub .tp-lifecycle-chapters { border-left: 1px solid #dce6f3; padding-left: 40px; }
    .dynamic-hub .tp-stage { min-height: 295px; padding: 32px 0 37px; scroll-margin-top: calc(var(--tp-header-offset) + 110px); }
    .dynamic-hub .tp-stage + .tp-stage { border-top: 1px solid #e3eaf4; }
    .dynamic-hub .tp-stage-top { display: flex; align-items: center; justify-content: space-between; gap: 20px; color: #a2b2c9; margin-bottom: 25px; transition: color .25s; }
    .dynamic-hub .tp-stage-index { font-size: 9px; font-weight: 650; letter-spacing: .15em; }
    .dynamic-hub .tp-stage h3 { font-size: 26px; font-weight: 550; line-height: 1.25; letter-spacing: -.04em; margin-bottom: 17px; }
    .dynamic-hub .tp-stage > p { font-size: 15px; line-height: 1.85; color: #66768c; }
    .dynamic-hub .tp-stage-line { height: 2px; width: 46px; background: #e0e9f6; margin-top: 28px; }
    .dynamic-hub .tp-stage-line span { height: 100%; display: block; width: 100%; background: #2d72ff; transform: scaleX(0); transform-origin: left; transition: transform .5s; }
    .dynamic-hub .tp-stage.is-active .tp-stage-top { color: #2d72ff; }.dynamic-hub .tp-stage.is-active .tp-stage-line span { transform: scaleX(1); }
    .dynamic-hub .tp-requirements { background: #091d3b; color: white; overflow: hidden; }
    .dynamic-hub .tp-requirements .tp-title { color: #fff !important; }
    .dynamic-hub .tp-requirement-layout { display: grid; grid-template-columns: .77fr 1.23fr; gap: 105px; }
    .dynamic-hub .tp-requirement-layout > div:first-child .tp-copy { color: #9fb3d0; font-size: 15px; }
    .dynamic-hub .tp-interaction-hint { display: inline-flex; align-items: center; gap: 9px; margin-top: 34px; padding-top: 20px; border-top: 1px solid #8ca8d322; color: #86a2c7; font-size: 10px; letter-spacing: .01em; }
    .dynamic-hub .tp-requirement-list { min-width: 0; }
    .dynamic-hub .tp-requirement { border-bottom: 1px solid #8ca8d322; }.dynamic-hub .tp-requirement:first-child { border-top: 1px solid #8ca8d322; }
    .dynamic-hub .tp-requirement h3 > button { display: flex; align-items: center; gap: 17px; padding: 25px 0; background: none; border: 0; width: 100%; text-align: left; color: #c1d0e6; font-size: 19px; line-height: 1.4; letter-spacing: -.025em; font-weight: 500; transition: color .2s; }
    .dynamic-hub .tp-requirement-number { font-size: 9px; color: #607da7; margin-right: 2px; font-variant-numeric: tabular-nums; }
    .dynamic-hub .tp-requirement-icon { color: #5f8ac6; flex-shrink: 0; }
    .dynamic-hub .tp-toggle-icon { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: #789aca; flex-shrink: 0; border-radius: 50%; background: #ffffff07; }
    .dynamic-hub .tp-requirement.is-active h3 > button { color: white; }.dynamic-hub .tp-requirement.is-active .tp-requirement-icon { color: #82b3ff; }.dynamic-hub .tp-requirement.is-active .tp-toggle-icon { background: #2d72ff; color: white; }
    .dynamic-hub .tp-requirement-answer { overflow: hidden; }.dynamic-hub .tp-requirement-answer > .tp-copy { padding: 0 40px 27px 69px; font-size: 14.5px; line-height: 1.85; color: #9db4d2; }
    .dynamic-hub .tp-connected { background: #fff; }
    .dynamic-hub .tp-tax-network { border: 1px solid #dce6f4; border-radius: 9px; overflow: hidden; }
    .dynamic-hub .tp-network-visual { height: 290px; position: relative; background: #f6f9fe; overflow: hidden; }
    .dynamic-hub .tp-network-dots { position: absolute; inset: 0; background-image: radial-gradient(#abc3e748 1px, transparent 1px); background-size: 16px 16px; mask-image: radial-gradient(ellipse, black 30%, transparent 78%); }
    .dynamic-hub .tp-network-links { position: absolute; left: 6%; top: 25px; width: 88%; height: 240px; }
    .dynamic-hub .tp-flow-line { animation: tp-dash 12s linear infinite; }
    .dynamic-hub .tp-network-node-row { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; padding: 42px 8% 0; }
    .dynamic-hub .tp-network-node { justify-self: center; display: flex; align-items: center; justify-content: center; gap: 11px; width: 185px; padding: 18px 20px; border: 1px solid #d6e3f6; border-radius: 7px; color: #6d85a8; background: #fff; font-size: 13px; font-weight: 550; box-shadow: 0 8px 25px #adc0db15; transition: background .25s, color .25s, border-color .25s; }
    .dynamic-hub .tp-network-node.is-active { color: #fff; background: #286fed; border-color: #286fed; box-shadow: 0 9px 28px #2c75ff22; }
    .dynamic-hub .tp-network-center { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 16px; padding: 20px 27px; border-radius: 8px; background: #102f59; color: white; white-space: nowrap; box-shadow: 0 10px 28px #123a6d17; }
    .dynamic-hub .tp-network-center > svg { color: #95bbf3; }.dynamic-hub .tp-network-center span { display: block; font-size: 8px; letter-spacing: .15em; color: #84a5d4; margin-bottom: 6px; }.dynamic-hub .tp-network-center p { font-size: 14px; font-weight: 550; }
    .dynamic-hub .tp-network-explanations { display: grid; grid-template-columns: repeat(3, 1fr); }
    .dynamic-hub .tp-network-explanations > div { padding: 29px; border-top: 2px solid #dce6f4; transition: background .25s, border-color .25s; }.dynamic-hub .tp-network-explanations > div + div { border-left: 1px solid #e4ebf5; }.dynamic-hub .tp-network-explanations > div.is-active { border-top-color: #2d72ff; background: #fbfdff; }
    .dynamic-hub .tp-network-number { color: #9aafcd; font-size: 9px; }.dynamic-hub .tp-network-explanations h3 { margin: 13px 0 12px; font-size: 21px; font-weight: 550; letter-spacing: -.03em; }.dynamic-hub .tp-network-explanations p { color: #6b7d95; font-size: 14px; line-height: 1.8; }
    .dynamic-hub .tp-connected-bottom { display: grid; grid-template-columns: .65fr 1.35fr; gap: 80px; border-top: 1px solid #dce6f4; padding-top: 35px; margin-top: 43px; }.dynamic-hub .tp-connected-bottom > p { font-size: 25px; font-weight: 500; line-height: 1.4; letter-spacing: -.035em; }
    .dynamic-hub .tp-growth { background: #f4f7fc; }
    .dynamic-hub .tp-growth-layout { display: grid; grid-template-columns: .92fr 1.08fr; gap: 90px; align-items: start; }
    .dynamic-hub .tp-checklist { background: #fff; border: 1px solid #d8e4f4; box-shadow: 0 20px 65px -45px #2253a66b; border-radius: 11px; padding: 34px; }
    .dynamic-hub .tp-checklist-top { display: flex; align-items: center; gap: 12px; color: #2d72ff; padding-bottom: 21px; border-bottom: 1px solid #e1e9f5; }.dynamic-hub .tp-checklist-top > span { font-size: 9px; font-weight: 650; letter-spacing: .12em; }.dynamic-hub .tp-checklist-top > span:last-child { margin-left: auto; color: #95a8c4; white-space: nowrap; font-variant-numeric: tabular-nums; }
    .dynamic-hub .tp-checklist > h3 { margin-top: 24px; font-size: 23px; line-height: 1.3; letter-spacing: -.03em; font-weight: 550; }.dynamic-hub .tp-checklist-hint { font-size: 11px; line-height: 1.6; color: #93a1b6; margin-top: 10px; }
    .dynamic-hub .tp-checklist ul { margin: 20px 0 0; padding: 0; list-style: none; }.dynamic-hub .tp-checklist li { border-top: 1px solid #e9eff7; }.dynamic-hub .tp-checklist label { position: relative; display: flex; align-items: flex-start; gap: 12px; padding: 15px 0; cursor: pointer; font-size: 13px; line-height: 1.65; color: #5c708c; }.dynamic-hub .tp-checklist label:hover { color: #225fcb; }
    .dynamic-hub .tp-checklist input { position: absolute; top: 18px; left: 0; width: 18px; height: 18px; margin: 0; opacity: 0; }.dynamic-hub .tp-checkbox { margin-top: 2px; height: 18px; width: 18px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid #c9d6e9; border-radius: 4px; background: #f8fbff; color: transparent; transition: background .2s, border-color .2s, color .2s; }.dynamic-hub .tp-checklist input:checked + .tp-checkbox { background: #2d72ff; border-color: #2d72ff; color: #fff; }.dynamic-hub .tp-checklist input:focus-visible + .tp-checkbox { outline: 2px solid #77a7ff; outline-offset: 4px; }
    .dynamic-hub .tp-checklist-footer { margin-top: 19px; border-top: 1px solid #e0e9f5; padding-top: 21px; }.dynamic-hub .tp-checklist-footer > p { color: #8b9cb5; font-size: 10px; margin-bottom: 16px; }.dynamic-hub .tp-checklist-footer .tp-action { width: 100%; font-size: 13px; min-height: 53px; }
    .dynamic-hub .tp-why { background: #091d3b; color: white; overflow: hidden; }
    .dynamic-hub .tp-why .tp-title { color: #fff !important; }
    .dynamic-hub .tp-why-heading { display: grid; grid-template-columns: 1.05fr .95fr; align-items: end; gap: 80px; margin-bottom: 42px; }
    .dynamic-hub .tp-why-heading .tp-title { max-width: 760px; }
    .dynamic-hub .tp-why-lede { max-width: 560px; justify-self: end; color: #a9bdd9; font-size: 15px; line-height: 1.85; }
    .dynamic-hub .tp-why-layout { display: grid; grid-template-columns: 1.06fr .94fr; gap: 44px; align-items: stretch; }
    .dynamic-hub .tp-why-visual { position: relative; min-height: 560px; overflow: hidden; border-radius: 14px 86px 14px 14px; background: #102d53; border: 1px solid #9ec1f51f; }
    .dynamic-hub .tp-why-visual .tp-photo-fill { filter: saturate(.6) contrast(.94); }
    .dynamic-hub .tp-why-visual-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, #06162d0c 15%, #071a35d9 82%, #071a35 100%), linear-gradient(90deg, #071a354d 0%, transparent 58%); }
    .dynamic-hub .tp-why-visual-badge { position: absolute; top: 28px; left: 28px; z-index: 2; display: inline-flex; align-items: center; gap: 11px; max-width: calc(100% - 56px); padding: 12px 15px; border: 1px solid #b7d5ff2c; border-radius: 9px; background: #0a2143c7; color: #e4efff; backdrop-filter: blur(12px); font-size: 11px; font-weight: 650; }
    .dynamic-hub .tp-why-visual-badge > svg { color: #80aeff; flex-shrink: 0; }
    .dynamic-hub .tp-why-proof-grid { position: absolute; z-index: 2; left: 28px; right: 28px; bottom: 26px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #d8e8ff2a; }
    .dynamic-hub .tp-why-proof-grid > div { padding: 22px 18px 4px 0; }
    .dynamic-hub .tp-why-proof-grid > div + div { padding-left: 18px; border-left: 1px solid #d8e8ff1f; }
    .dynamic-hub .tp-why-proof-grid span { display: block; color: #79aaff; font-size: 8px; letter-spacing: .14em; margin-bottom: 9px; }
    .dynamic-hub .tp-why-proof-grid strong { display: block; color: #fff; font-size: 14px; line-height: 1.4; font-weight: 550; }
    .dynamic-hub .tp-why-content { border: 1px solid #9ec1f51f; border-radius: 14px; background: linear-gradient(180deg, #0d274d, #0a203f); padding: 34px; }
    .dynamic-hub .tp-why-principles { display: grid; gap: 0; }
    .dynamic-hub .tp-why-principles > div { display: grid; grid-template-columns: auto 1fr; gap: 15px; padding: 21px 0; border-bottom: 1px solid #9ec1f51f; }
    .dynamic-hub .tp-why-principles > div:first-child { padding-top: 0; }
    .dynamic-hub .tp-why-principle-icon { display: flex; align-items: center; justify-content: center; width: 39px; height: 39px; border-radius: 50%; background: #2d72ff16; border: 1px solid #76a8ff32; color: #86b1ff; }
    .dynamic-hub .tp-why-principles strong { display: block; color: #fff; font-size: 15px; line-height: 1.45; font-weight: 600; }
    .dynamic-hub .tp-why-principles p { margin-top: 7px; color: #98afcf; font-size: 12.5px; line-height: 1.7; }
    .dynamic-hub .tp-why-detail-copy { margin-top: 25px; color: #a3b8d6; font-size: 13.5px; line-height: 1.8; }
    .dynamic-hub .tp-why-detail-copy p + p { margin-top: 14px; }
    .dynamic-hub .tp-why-bottom { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 28px; padding-top: 25px; border-top: 1px solid #a7c4ef25; }
    .dynamic-hub .tp-why-bottom-label { display: flex; gap: 10px; align-items: center; font-size: 10px; color: #88a5ce; }
    .dynamic-hub .tp-consult-section { background: #f7f9fd; }
    .dynamic-hub .tp-consult { position: relative; isolation: isolate; overflow: hidden; border-radius: 28px; background: linear-gradient(135deg, #286ff0 0%, #2468e9 56%, #1f5fd8 100%); color: white; box-shadow: 0 26px 70px -38px rgba(23, 74, 170, .48); }
    .dynamic-hub .tp-consult-inner { position: relative; z-index: 2; padding: 76px 78px 72px; }
    .dynamic-hub .tp-consult-rings { position: absolute; right: -150px; top: -245px; width: 720px; height: 720px; pointer-events: none; z-index: 1; opacity: .82; }.dynamic-hub .tp-consult-rings i { position: absolute; inset: 0; border-radius: 50%; border: 1px solid #ffffff18; }.dynamic-hub .tp-consult-rings i:nth-child(2) { inset: 78px; }.dynamic-hub .tp-consult-rings i:nth-child(3) { inset: 156px; }
    .dynamic-hub .tp-consult .tp-kicker { color: #d4e4ff; }.dynamic-hub .tp-consult .tp-title { max-width: 980px; font-size: clamp(42px, 5.1vw, 72px); line-height: 1.02; color: #fff !important; }.dynamic-hub .tp-consult-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 75px; margin-top: 43px; }.dynamic-hub .tp-consult-grid .tp-copy { color: #e0ecff; font-size: 15px; }.dynamic-hub .tp-consult-bottom { display: grid; grid-template-columns: 1fr auto; gap: 70px; align-items: center; border-top: 1px solid #bcd4ff55; margin-top: 40px; padding-top: 30px; }.dynamic-hub .tp-consult-bottom > p { max-width: 760px; font-size: 20px; font-weight: 500; letter-spacing: -.025em; line-height: 1.6; color: #fff; }.dynamic-hub .tp-consult-bottom strong { font-weight: 600; }
    .dynamic-hub .tp-faq-layout { display: grid; grid-template-columns: .73fr 1.27fr; gap: 95px; align-items: start; }.dynamic-hub .tp-faq-intro { position: sticky; top: calc(var(--tp-header-offset) + 98px); }.dynamic-hub .tp-faq-intro .tp-title { font-size: clamp(34px, 3.1vw, 45px); }.dynamic-hub .tp-faq-help { margin-top: 32px; border-top: 1px solid #dce6f3; padding-top: 23px; color: #2d72ff; }.dynamic-hub .tp-faq-help p { margin-top: 13px; font-size: 13px; line-height: 1.7; color: #7c8da7; }.dynamic-hub .tp-faq-help a { display: inline-flex; align-items: center; gap: 9px; color: #2766d5; font-size: 11px; font-weight: 650; margin-top: 14px; }
    .dynamic-hub .tp-faq-area { min-width: 0; }
    .dynamic-hub .tp-faq-item { border-top: 1px solid #dce6f3; }.dynamic-hub .tp-faq-item:last-child { border-bottom: 1px solid #dce6f3; }.dynamic-hub .tp-faq-item h3 > button { display: flex; align-items: flex-start; gap: 16px; width: 100%; padding: 24px 0; border: 0; background: none; font-size: 16px; font-weight: 550; line-height: 1.5; text-align: left; letter-spacing: -.025em; color: #233d61; }.dynamic-hub .tp-faq-number { color: #a3b3ca; font-size: 9px; margin-top: 4px; font-variant-numeric: tabular-nums; }.dynamic-hub .tp-faq-chevron { margin-top: 3px; color: #769bcf; flex-shrink: 0; transition: transform .3s; }.dynamic-hub .tp-faq-item.is-active .tp-faq-chevron { transform: rotate(180deg); color: #2d72ff; }.dynamic-hub .tp-faq-item.is-active h3 > button { color: #2464cf; }.dynamic-hub .tp-faq-answer { overflow: hidden; }.dynamic-hub .tp-faq-answer > .tp-copy { padding: 0 29px 28px; font-size: 14px; line-height: 1.85; }
    @keyframes tp-dash { to { stroke-dashoffset: -260; } }
    @media (min-width: 1441px) { .dynamic-hub .tp-hero-grid-layout { gap: 75px; } }
    @media (max-width: 1199px) {
      .dynamic-hub .tp-container { padding-inline: 38px; }.dynamic-hub .tp-section { padding-block: 95px; }.dynamic-hub .tp-hero-grid-layout { gap: 25px; grid-template-columns: 1.15fr 1fr; }.dynamic-hub .tp-hero-title { font-size: 57px; }.dynamic-hub .tp-desk-stage { height: 435px; }.dynamic-hub .tp-document { width: 220px; height: 305px; }.dynamic-hub .tp-document-front { padding: 20px; }.dynamic-hub .tp-document-heading { font-size: 19px; }.dynamic-hub .tp-node-0 { top: 24px; left: 0; }.dynamic-hub .tp-node-1 { right: 0; top: 88px; }.dynamic-hub .tp-node-2 { bottom: 65px; left: 0; }.dynamic-hub .tp-node-3 { bottom: 19px; right: 0; }.dynamic-hub .tp-orbit-node { font-size: 10px; padding: 10px 12px; }.dynamic-hub .tp-overview-body { gap: 45px; }.dynamic-hub .tp-overview-heading { gap: 30px; }.dynamic-hub .tp-overview-marker p { font-size: 10px; }.dynamic-hub .tp-section-top { gap: 55px; }.dynamic-hub .tp-service-editorial { padding: 34px; }.dynamic-hub .tp-service-ledger { padding: 34px 27px; }.dynamic-hub .tp-lifecycle-layout, .dynamic-hub .tp-requirement-layout, .dynamic-hub .tp-growth-layout, .dynamic-hub .tp-faq-layout { gap: 55px; }.dynamic-hub .tp-checklist { padding: 27px; }.dynamic-hub .tp-chapter-instrument-orbit { width: 135px; height: 135px; top: 32px; right: 23px; }.dynamic-hub .tp-chapter-instrument-number { font-size: 135px; top: 30px; }.dynamic-hub .tp-stage { min-height: 310px; }.dynamic-hub .tp-network-node { width: 160px; }.dynamic-hub .tp-why-heading { gap: 45px; } .dynamic-hub .tp-why-layout { gap: 30px; } .dynamic-hub .tp-why-content { padding: 28px; } .dynamic-hub .tp-consult-grid { gap: 50px; }
    }
    @media (max-width: 1023px) {
      .dynamic-hub .tp-hero-title { font-size: 52px; }.dynamic-hub .tp-edition { display: none; }.dynamic-hub .tp-hero-grid-layout { gap: 32px; grid-template-columns: 1fr; }.dynamic-hub .tp-hero-title { max-width: 850px; }.dynamic-hub .tp-hero-copy { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: none; font-size: 14px; }.dynamic-hub .tp-hero-copy p + p { margin-top: 0; }.dynamic-hub .tp-hero-desk-wrap { max-width: 550px; width: 100%; margin: 10px auto 0; }.dynamic-hub .tp-desk-stage { height: 455px; }.dynamic-hub .tp-document { width: 248px; height: 322px; }.dynamic-hub .tp-document-front { padding: 23px; }.dynamic-hub .tp-document-heading { font-size: 21px; }.dynamic-hub .tp-node-0 { top: 45px; left: 4%; }.dynamic-hub .tp-node-1 { top: 89px; right: 0; }.dynamic-hub .tp-node-2 { bottom: 68px; left: 0; }.dynamic-hub .tp-node-3 { bottom: 38px; right: 3%; }.dynamic-hub .tp-hero-location { margin-top: 17px; }.dynamic-hub .tp-hero-service-strip { flex-direction: column; gap: 16px; margin-top: 38px; }.dynamic-hub .tp-hero-service-strip ul { gap: 20px; }.dynamic-hub .tp-chapter-brand { display: none; }.dynamic-hub .tp-chapter-nav > .tp-container { justify-content: space-between; gap: 15px; }.dynamic-hub .tp-chapter-links { gap: 26px; }.dynamic-hub .tp-overview-heading { grid-template-columns: 1fr; }.dynamic-hub .tp-overview-marker { display: none; }.dynamic-hub .tp-overview-body { gap: 32px; grid-template-columns: .85fr 1.15fr; align-items: stretch; }.dynamic-hub .tp-overview-photo { min-height: 500px; }.dynamic-hub .tp-photo-bottom { left: 20px; gap: 12px; }.dynamic-hub .tp-photo-bottom span { font-size: 21px; }.dynamic-hub .tp-editorial-note { grid-template-columns: 130px 1fr; gap: 24px; }.dynamic-hub .tp-editorial-note > svg { display: none; }.dynamic-hub .tp-editorial-note > p { font-size: 19px; }.dynamic-hub .tp-section-top { gap: 30px; grid-template-columns: 1fr; }.dynamic-hub .tp-section-top .tp-copy { max-width: 720px; }.dynamic-hub .tp-service-tab { font-size: 14px; gap: 12px; padding: 16px; }.dynamic-hub .tp-service-editorial { padding: 30px; }.dynamic-hub .tp-panel-heading { font-size: 31px; }.dynamic-hub .tp-service-editorial .tp-copy { font-size: 14px; }.dynamic-hub .tp-service-ledger { padding: 30px 23px; }.dynamic-hub .tp-service-ledger li > a { font-size: 12px; gap: 11px; }.dynamic-hub .tp-lifecycle-layout { gap: 36px; grid-template-columns: .9fr 1.1fr; }.dynamic-hub .tp-lifecycle-sticky .tp-copy { font-size: 14px; }.dynamic-hub .tp-lifecycle-chapters { padding-left: 25px; }.dynamic-hub .tp-stage { min-height: 335px; }.dynamic-hub .tp-stage h3 { font-size: 23px; }.dynamic-hub .tp-stage > p { font-size: 14px; }.dynamic-hub .tp-chapter-instrument { height: 220px; }.dynamic-hub .tp-chapter-instrument-number { font-size: 120px; left: 13px; }.dynamic-hub .tp-chapter-instrument-orbit { width: 110px; height: 110px; right: 15px; top: 35px; }.dynamic-hub .tp-instrument-footer { left: 14px; right: 14px; font-size: 9px; }.dynamic-hub .tp-requirement-layout { gap: 35px; grid-template-columns: .75fr 1.25fr; }.dynamic-hub .tp-requirement h3 > button { font-size: 16px; gap: 12px; padding: 23px 0; }.dynamic-hub .tp-requirement-answer > .tp-copy { padding-left: 59px; padding-right: 15px; font-size: 14px; }.dynamic-hub .tp-network-node-row { padding-inline: 5%; gap: 15px; }.dynamic-hub .tp-network-node { width: 145px; padding-inline: 14px; font-size: 12px; }.dynamic-hub .tp-network-explanations > div { padding: 25px 22px; }.dynamic-hub .tp-network-explanations p { font-size: 13px; }.dynamic-hub .tp-connected-bottom { gap: 35px; }.dynamic-hub .tp-connected-bottom > p { font-size: 22px; }.dynamic-hub .tp-growth-layout { gap: 35px; grid-template-columns: .9fr 1.1fr; }.dynamic-hub .tp-growth-layout > div:first-child .tp-copy { font-size: 14px; }.dynamic-hub .tp-checklist { padding: 24px; }.dynamic-hub .tp-checklist-top { gap: 10px; }.dynamic-hub .tp-checklist-top > span { font-size: 8px; }.dynamic-hub .tp-checklist > h3 { font-size: 20px; }.dynamic-hub .tp-checklist label { font-size: 12px; }.dynamic-hub .tp-why-heading { grid-template-columns: 1fr; gap: 20px; } .dynamic-hub .tp-why-lede { justify-self: start; } .dynamic-hub .tp-why-layout { grid-template-columns: 1fr; } .dynamic-hub .tp-why-visual { min-height: 430px; }.dynamic-hub .tp-consult-inner { padding: 58px 54px 54px; }.dynamic-hub .tp-consult .tp-title { font-size: 58px; }.dynamic-hub .tp-consult-bottom { gap: 35px; }.dynamic-hub .tp-consult-bottom > p { font-size: 18px; }.dynamic-hub .tp-faq-layout { gap: 38px; }.dynamic-hub .tp-faq-intro .tp-title { font-size: 35px; }.dynamic-hub .tp-faq-item h3 > button { font-size: 14px; gap: 12px; }.dynamic-hub .tp-faq-answer > .tp-copy { font-size: 13px; padding-inline: 25px; }
    }
    @media (max-width: 767px) {
      .dynamic-hub .tp-container { padding-inline: 22px; }.dynamic-hub .tp-section { padding-block: 75px; }.dynamic-hub .tp-title { font-size: 36px; }.dynamic-hub .tp-copy { font-size: 14.5px; line-height: 1.85; }.dynamic-hub .tp-kicker { font-size: 9px; letter-spacing: .12em; margin-bottom: 18px; }.dynamic-hub .tp-hero { padding-top: calc(var(--tp-header-offset) + 26px); }.dynamic-hub .tp-breadcrumb { margin-bottom: 29px; }.dynamic-hub .tp-hero-title { font-size: clamp(39px, 7vw, 52px); }.dynamic-hub .tp-hero-copy { grid-template-columns: 1fr; gap: 19px; font-size: 14px; margin-top: 25px; }.dynamic-hub .tp-hero-actions { gap: 20px; margin-top: 27px; }.dynamic-hub .tp-action { gap: 20px; font-size: 13px; padding-left: 20px; }.dynamic-hub .tp-hero-desk-wrap { margin-top: 10px; }.dynamic-hub .tp-desk-stage { height: 410px; }.dynamic-hub .tp-desk-caption { font-size: 10px; }.dynamic-hub .tp-desk-bottom { margin-inline: 0; }.dynamic-hub .tp-document { width: 225px; height: 309px; }.dynamic-hub .tp-document-front { padding: 21px; }.dynamic-hub .tp-document-heading { font-size: 19px; }.dynamic-hub .tp-node-0 { top: 19px; left: 0; }.dynamic-hub .tp-node-1 { top: 65px; right: 0; }.dynamic-hub .tp-node-2 { bottom: 57px; left: 0; }.dynamic-hub .tp-node-3 { bottom: 12px; right: 0; }.dynamic-hub .tp-orbit-node { padding: 10px; font-size: 9px; gap: 6px; }.dynamic-hub .tp-orbit-node > svg { width: 17px; height: 17px; }.dynamic-hub .tp-hero-service-strip ul { grid-template-columns: 1fr 1fr; gap: 18px 15px; }.dynamic-hub .tp-hero-service-strip li > a { font-size: 10px; }.dynamic-hub .tp-hero-service-strip { padding-bottom: 25px; }.dynamic-hub .tp-chapter-nav > .tp-container { padding-inline: 18px; min-height: 59px; gap: 12px; }.dynamic-hub .tp-chapter-links { gap: 21px; min-height: 59px; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: none; }.dynamic-hub .tp-chapter-links::-webkit-scrollbar { display: none; }.dynamic-hub .tp-chapter-links a { font-size: 10px; flex-shrink: 0; }.dynamic-hub .tp-nav-contact { width: 29px; height: 29px; margin-left: 0; }.dynamic-hub .tp-nav-contact > svg { width: 16px; }.dynamic-hub .tp-overview-heading { margin-bottom: 29px; }.dynamic-hub .tp-overview-body { grid-template-columns: 1fr; gap: 29px; }.dynamic-hub .tp-overview-photo { min-height: 0; height: 320px; border-top-right-radius: 55px; }.dynamic-hub .tp-photo-bottom span { font-size: 22px; }.dynamic-hub .tp-editorial-note { grid-template-columns: 1fr; gap: 15px; padding-block: 23px; margin-top: 28px; }.dynamic-hub .tp-editorial-note > p { font-size: 19px; }.dynamic-hub .tp-section-top { margin-bottom: 29px; gap: 23px; }.dynamic-hub .tp-service-tabs { padding: 6px; }.dynamic-hub .tp-service-tab { font-size: 12px; padding: 13px 10px; min-height: 79px; gap: 8px; line-height: 1.45; }.dynamic-hub .tp-service-tab > svg { display: none; }.dynamic-hub .tp-tab-number { font-size: 8px; align-self: flex-start; margin-top: 2px; }.dynamic-hub .tp-service-panel { grid-template-columns: 1fr; min-height: 0; }.dynamic-hub .tp-service-editorial { padding: 29px 25px; gap: 28px; }.dynamic-hub .tp-outline-number { font-size: 150px; top: 23px; right: 23px; }.dynamic-hub .tp-panel-heading { font-size: 32px; max-width: 290px; }.dynamic-hub .tp-service-editorial .tp-copy { font-size: 14px; }.dynamic-hub .tp-service-ledger { padding: 27px 25px; border-left: 0; border-top: 1px solid #e4ebf6; }.dynamic-hub .tp-service-ledger li > a { font-size: 12.5px; min-height: 44px; }.dynamic-hub .tp-service-link > a { font-size: 12px; line-height: 1.7; }.dynamic-hub .tp-explorer-footer { justify-content: flex-start; font-size: 9px; padding: 16px 20px; line-height: 1.6; }.dynamic-hub .tp-explorer-footer > svg { flex-shrink: 0; }.dynamic-hub .tp-lifecycle-layout { grid-template-columns: 1fr; gap: 20px; }.dynamic-hub .tp-lifecycle-sticky { position: static; }.dynamic-hub .tp-lifecycle-sticky .tp-title { font-size: 36px; }.dynamic-hub .tp-lifecycle-sticky .tp-copy { font-size: 14.5px; }.dynamic-hub .tp-chapter-instrument { display: none; }.dynamic-hub .tp-stage-controls { margin-top: 25px; }.dynamic-hub .tp-lifecycle-chapters { padding-left: 22px; margin-left: 4px; }.dynamic-hub .tp-stage { min-height: 0; padding-block: 26px 31px; }.dynamic-hub .tp-stage-top { margin-bottom: 18px; }.dynamic-hub .tp-stage h3 { font-size: 25px; }.dynamic-hub .tp-stage > p { font-size: 14.5px; }.dynamic-hub .tp-requirement-layout { grid-template-columns: 1fr; gap: 30px; }.dynamic-hub .tp-interaction-hint { margin-top: 20px; }.dynamic-hub .tp-requirement h3 > button { font-size: 17px; padding-block: 23px; gap: 12px; }.dynamic-hub .tp-requirement-number { margin-right: 0; font-size: 8px; }.dynamic-hub .tp-requirement-icon { width: 19px; }.dynamic-hub .tp-requirement-answer > .tp-copy { padding-left: 54px; padding-right: 5px; font-size: 14px; }.dynamic-hub .tp-network-visual { height: 270px; }.dynamic-hub .tp-network-node-row { padding: 32px 14px 0; gap: 8px; }.dynamic-hub .tp-network-node { width: 100%; padding: 13px 5px; flex-direction: column; gap: 7px; font-size: 10px; }.dynamic-hub .tp-network-node > svg { width: 19px; }.dynamic-hub .tp-network-center { gap: 12px; padding: 18px; bottom: 22px; max-width: calc(100% - 30px); }.dynamic-hub .tp-network-center > svg { width: 22px; flex-shrink: 0; }.dynamic-hub .tp-network-center p { font-size: 12px; }.dynamic-hub .tp-network-center span { font-size: 6.5px; }.dynamic-hub .tp-network-explanations { grid-template-columns: 1fr; }.dynamic-hub .tp-network-explanations > div { padding: 24px; }.dynamic-hub .tp-network-explanations > div + div { border-left: 0; }.dynamic-hub .tp-network-explanations h3 { margin-top: 10px; font-size: 23px; }.dynamic-hub .tp-network-explanations p { font-size: 14px; }.dynamic-hub .tp-connected-bottom { grid-template-columns: 1fr; gap: 22px; padding-top: 27px; margin-top: 30px; }.dynamic-hub .tp-connected-bottom > p { font-size: 25px; }.dynamic-hub .tp-growth-layout { grid-template-columns: 1fr; gap: 33px; }.dynamic-hub .tp-growth-layout > div:first-child .tp-copy { font-size: 14.5px; }.dynamic-hub .tp-checklist { padding: 24px; }.dynamic-hub .tp-checklist-top > span { font-size: 8px; }.dynamic-hub .tp-checklist > h3 { font-size: 24px; }.dynamic-hub .tp-checklist label { font-size: 13px; }.dynamic-hub .tp-why-heading { grid-template-columns: 1fr; gap: 18px; margin-bottom: 29px; } .dynamic-hub .tp-why-lede { justify-self: start; font-size: 14px; } .dynamic-hub .tp-why-layout { grid-template-columns: 1fr; gap: 24px; } .dynamic-hub .tp-why-visual { min-height: 390px; border-top-right-radius: 55px; } .dynamic-hub .tp-why-visual-badge { top: 20px; left: 20px; max-width: calc(100% - 40px); } .dynamic-hub .tp-why-proof-grid { left: 20px; right: 20px; bottom: 20px; grid-template-columns: 1fr; border-top: 0; } .dynamic-hub .tp-why-proof-grid > div { padding: 8px 0; border-top: 1px solid #d8e8ff1f; } .dynamic-hub .tp-why-proof-grid > div + div { padding-left: 0; border-left: 0; } .dynamic-hub .tp-why-proof-grid span { display: inline; margin-right: 10px; } .dynamic-hub .tp-why-proof-grid strong { display: inline; font-size: 12px; } .dynamic-hub .tp-why-content { padding: 24px; } .dynamic-hub .tp-why-bottom { flex-direction: column; align-items: flex-start; gap: 22px; margin-top: 26px; }.dynamic-hub .tp-consult { border-radius: 20px; }.dynamic-hub .tp-consult-inner { padding: 42px 24px 36px; }.dynamic-hub .tp-consult-rings { right: -300px; top: -260px; opacity: .58; }.dynamic-hub .tp-consult .tp-title { font-size: clamp(40px, 8vw, 54px); }.dynamic-hub .tp-consult-grid { grid-template-columns: 1fr; gap: 20px; margin-top: 30px; }.dynamic-hub .tp-consult-grid .tp-copy { font-size: 14.5px; }.dynamic-hub .tp-consult-bottom { grid-template-columns: 1fr; gap: 25px; padding-top: 24px; margin-top: 29px; }.dynamic-hub .tp-consult-bottom > p { font-size: 19px; }.dynamic-hub .tp-consult-bottom .tp-action { justify-self: start; }.dynamic-hub .tp-faq-layout { grid-template-columns: 1fr; gap: 35px; }.dynamic-hub .tp-faq-intro { position: static; }.dynamic-hub .tp-faq-intro .tp-title { font-size: 36px; max-width: 530px; }.dynamic-hub .tp-faq-help { display: none; }.dynamic-hub .tp-faq-item h3 > button { font-size: 15px; padding-block: 23px; gap: 13px; }.dynamic-hub .tp-faq-answer > .tp-copy { font-size: 14px; padding: 0 24px 25px; }
    }
    @media (max-width: 359px) {
      .dynamic-hub .tp-container { padding-inline: 18px; }.dynamic-hub .tp-hero-title { font-size: 36px; }.dynamic-hub .tp-title { font-size: 32px; }.dynamic-hub .tp-desk-stage { height: 380px; }.dynamic-hub .tp-document { width: 204px; height: 294px; }.dynamic-hub .tp-document-front { padding: 17px; }.dynamic-hub .tp-document-heading { font-size: 18px; }.dynamic-hub .tp-document-content { min-height: 139px; }.dynamic-hub .tp-document-top img { width: 104px; }.dynamic-hub .tp-orbit-node { font-size: 8px; padding: 9px; gap: 5px; }.dynamic-hub .tp-node-1 { top: 53px; }.dynamic-hub .tp-node-2 { bottom: 47px; }.dynamic-hub .tp-node-3 { bottom: 8px; }.dynamic-hub .tp-chapter-links { gap: 17px; }.dynamic-hub .tp-chapter-nav > .tp-container { gap: 8px; padding-inline: 14px; }.dynamic-hub .tp-service-editorial, .dynamic-hub .tp-service-ledger { padding-inline: 21px; }.dynamic-hub .tp-network-center { padding: 16px 13px; gap: 9px; }.dynamic-hub .tp-network-center p { font-size: 11px; }.dynamic-hub .tp-checklist { padding: 20px; }.dynamic-hub .tp-checklist-top > span { font-size: 7px; }.dynamic-hub .tp-checklist-top > svg { width: 24px; }.dynamic-hub .tp-requirement h3 > button { font-size: 15px; gap: 10px; }.dynamic-hub .tp-requirement-answer > .tp-copy { padding-left: 48px; }.dynamic-hub .tp-consult .tp-title { font-size: 38px; }.dynamic-hub .tp-consult-inner { padding-inline: 20px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .dynamic-hub *, .dynamic-hub *::before, .dynamic-hub *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
    }

    /* Requested updates: hero rotation, static ticks and compact consultation. */
    .dynamic-hub .tp-document-brand { font-size: 21px; font-weight: 700; color: #2d72ff; letter-spacing: -.04em; }
    .dynamic-hub .tp-document-brand small { display: block; text-align: right; font-size: 10px; color: #18365f; letter-spacing: 0; }
    .dynamic-hub .tp-desk-progress { height: 2px; margin: 0 15px; background: #8baff31a; overflow: hidden; border-radius: 4px; }
    .dynamic-hub .tp-desk-progress > span { display: block; width: 100%; height: 100%; background: linear-gradient(90deg,#327cff,#9bc8ff); transform-origin: left; }
    .dynamic-hub .tp-support-list ul { margin-top: 20px; }
    .dynamic-hub .tp-support-list li { display: flex; align-items: flex-start; gap: 13px; padding: 15px 0; font-size: 13px; line-height: 1.7; color: #526c91; }
    .dynamic-hub .tp-static-tick { display: grid; place-items: center; width: 22px; height: 22px; flex-shrink: 0; margin-top: 1px; color: #2d72ff; border-radius: 50%; background: #edf4ff; }
    .dynamic-hub .tp-support-list .tp-checklist-footer { padding-top: 20px; margin-top: 15px; }
    .dynamic-hub .tp-consult-refined { display: grid; grid-template-columns: .95fr 1.05fr; border: 1px solid #dbe6f7; border-radius: 23px; background: #fff; box-shadow: 0 22px 55px -42px #1a4d9866; color: var(--tp-ink); }
    .dynamic-hub .tp-consult-summary { padding: 43px 38px; background: radial-gradient(ellipse at 10% 0%,#2361bd55,transparent 65%),#102e57; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
    .dynamic-hub .tp-consult-refined .tp-title { max-width: 520px; font-size: clamp(30px,3vw,42px); line-height: 1.15; color: #fff !important; letter-spacing: -.045em; }
    .dynamic-hub .tp-consult-refined .tp-kicker { color: #aecbff; margin-bottom: 18px; }
    .dynamic-hub .tp-consult-lead { color: #c5d7ef; font-size: 14px; line-height: 1.8; margin-top: 22px; }
    .dynamic-hub .tp-consult-lead strong { color: #edf5ff; font-weight: 600; }
    .dynamic-hub .tp-consult-summary .tp-action { margin-top: 25px; }
    .dynamic-hub .tp-consult-details { padding: 30px; display: grid; gap: 17px; align-content: center; background: linear-gradient(145deg,#fff,#f7faff); }
    .dynamic-hub .tp-consult-detail-card { padding: 23px 24px; border: 1px solid #e0e9f7; border-radius: 13px; background: #fff; }
    .dynamic-hub .tp-consult-detail-card .tp-copy { color: #617895; font-size: 14px; line-height: 1.85; }
    .dynamic-hub .tp-consult-detail-card .tp-copy p + p { margin-top: 15px; }
    @media(max-width:1023px) {
      .dynamic-hub .tp-consult-summary { padding: 33px 28px; }
      .dynamic-hub .tp-consult-details { padding: 23px; gap: 14px; }
      .dynamic-hub .tp-consult-detail-card { padding: 21px; }
    }
    @media(max-width:767px) {
      .dynamic-hub .tp-consult-refined { grid-template-columns: 1fr; border-radius: 19px; }
      .dynamic-hub .tp-consult-summary { padding: 31px 25px; }
      .dynamic-hub .tp-consult-refined .tp-title { font-size: 32px; line-height: 1.17; }
      .dynamic-hub .tp-consult-details { padding: 20px; gap: 14px; }
      .dynamic-hub .tp-consult-detail-card { padding: 21px; }
      .dynamic-hub .tp-support-list li { font-size: 13px; padding-block: 14px; }
    }
    @media(max-width:359px) {
      .dynamic-hub .tp-consult-summary { padding: 28px 21px; }
      .dynamic-hub .tp-consult-refined .tp-title { font-size: 29px; }
      .dynamic-hub .tp-consult-details { padding: 16px; }
      .dynamic-hub .tp-consult-detail-card { padding: 19px; }
    }
  `}</style>;
}

