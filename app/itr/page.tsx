import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  FileCheck,
  FileText,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Income Tax Return Filing Services in Chennai | Tax India Firm",
  },
  description:
    "Explore income tax return filing services for salaried individuals, freelancers and business owners. Get help with ITR preparation and filing in Chennai.",
  alternates: {
    canonical: "https://taxindiafirm.com/itr",
  },
};

const services = [
  {
    number: "01",
    label: "ITR PREPARATION & FILING",
    title: "Income Tax Return Filing",
    description:
      "Get help organising your income records, preparing your return and understanding what to do after filing.",
    details: [
      "Salary, freelance and business income",
      "Document review and return preparation",
      "Filing and e-verification guidance",
    ],
    href: "/itr/income-tax-return-filing",
    icon: FileText,
  },
  {
    number: "02",
    label: "CHENNAI FILING SUPPORT",
    title: "Income Tax Filing in Chennai",
    description:
      "Speak with our Chennai team about your return, the records you already have and what you still need to gather.",
    details: [
      "Support for individuals and business owners",
      "Guidance based on your income sources",
      "A clear starting point for your tax enquiry",
    ],
    href: "/itr/income-tax-filing-in-chennai",
    icon: MapPin,
  },
] as const;

const steps = [
  {
    title: "List your income sources",
    text: "Start with the sources you need to discuss, such as salary, freelance work, business income, rent or investments.",
  },
  {
    title: "Gather the records you have",
    text: "Keep relevant documents handy, such as Form 16, income statements or transaction records. The exact documents depend on your situation.",
  },
  {
    title: "Review, file and verify",
    text: "Review the details before submission, save your acknowledgement and ask the team if you need help with e-verification.",
  },
] as const;

const faqs = [
  {
    question: "Which income tax filing service should I choose?",
    answer:
      "Choose Income Tax Return Filing to explore help preparing and submitting your ITR. Choose Income Tax Filing in Chennai to learn about support from our Chennai team.",
  },
  {
    question: "Can I get help if I have salary and freelance income?",
    answer:
      "Yes. Mention both sources when you enquire. If you also have rental or investment income, tell the team so they can guide you on the relevant records.",
  },
  {
    question: "What should I keep ready before my first enquiry?",
    answer:
      "Start with a list of your income sources and the documents you already have. You can make the initial enquiry without sending sensitive records.",
  },
  {
    question: "Can I speak to someone before choosing a service?",
    answer:
      "Yes. Use the Contact Us page to tell our team what you need help with, even if you are unsure which service fits your situation.",
  },
] as const;

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500";

export default function ItrHubPage() {
  return (
    <main className="min-w-0 bg-white text-slate-950">
      <section
        aria-labelledby="itr-title"
        className="relative isolate overflow-hidden bg-[#071c3d] pt-24 !text-white sm:pt-28 lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#1e4785,transparent_65%)]"
        />

        <div className={`${container} pb-12 pt-6 sm:pb-16 lg:pb-20`}>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-blue-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className={`hover:text-white ${focus}`}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Income Tax Returns
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div className="itr-reveal">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-100">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-sky-300"
                />
                Tax India Firm · Chennai
              </p>

              <h1
                id="itr-title"
                className="mt-4 max-w-2xl text-balance !text-white text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Income Tax Return{" "}
                <span className="text-sky-300">Filing Services</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
                Get help preparing and filing your income tax return. Explore
                ITR support for salaried individuals, freelancers and business
                owners, or speak directly with our Chennai team.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#itr-services"
                  className={`inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold !text-blue-950 transition-colors hover:bg-blue-100 ${focus}`}
                >
                  Explore filing services
                  <ArrowDown aria-hidden="true" className="h-4 w-4" />
                </a>
                <Link
                  href="/contact-us"
                  className={`inline-flex min-h-12 items-center gap-2 rounded-xl border border-blue-300/40 px-4 py-3 text-sm font-semibold !text-white transition-colors hover:bg-white/10 ${focus}`}
                >
                  Talk to a tax expert
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              className="itr-reveal itr-reveal-late rounded-3xl border border-blue-300/25 bg-white/5 p-3 shadow-2xl shadow-slate-950/30 sm:p-4"
            >
              <div className="rounded-2xl bg-white p-5 text-slate-950 sm:p-7">
                <Image
                  src="/images/services/itr/hero.webp"
                  alt="Personal income folder and calculator illustration"
                  width={1536}
                  height={1024}
                  priority
                  className="mb-5 aspect-[3/2] w-full rounded-xl object-contain"
                />
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-blue-700">
                      INCOME TAX HUB
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight">
                      Choose your filing service
                    </h2>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-800">
                    <FileCheck aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-4 grid gap-2">
                  {services.map(({ href, title, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`group flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 hover:border-blue-300 hover:bg-blue-50 sm:px-4 ${focus}`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-700" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold tracking-wider text-slate-600">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm font-semibold sm:text-base">
                          {title}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-blue-700 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="itr-services"
        aria-labelledby="itr-services-title"
        className="scroll-mt-28 bg-[#f3f7ff] py-12 sm:py-16"
      >
        <div className={container}>
          <p className="text-xs font-bold tracking-widest text-blue-700">
            OUR FILING SERVICES
          </p>
          <h2
            id="itr-services-title"
            className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl"
          >
            Find the right income tax filing support
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {services.map(({ number, title, description, details, href, icon: Icon }) => (
              <article
                key={href}
                className="itr-reveal flex flex-col rounded-3xl border border-blue-100 bg-white p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-100 text-blue-800">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span aria-hidden="true" className="text-sm font-bold tracking-widest text-blue-700">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold !text-blue-800 hover:underline ${focus}`}
                  >
                    Explore {title}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="itr-process-title" className={`${container} py-12 sm:py-16`}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-700">
              GETTING STARTED
            </p>
            <h2 id="itr-process-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
              How to prepare for ITR filing
            </h2>
            <p className="mt-3 max-w-md leading-7 text-slate-600">
              Start with what you earned and the records you have. That gives
              our team a clearer picture of the support you need.
            </p>
            <Image
              src="/images/services/itr/deduction-documents.webp"
              alt="Organized deduction and investment documents illustration"
              width={1536}
              height={1024}
              className="mt-6 aspect-[3/2] w-full rounded-2xl object-contain"
            />
          </div>

          <ol className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 px-5 sm:px-7">
            {steps.map(({ title, text }, index) => (
              <li key={title} className="itr-reveal flex gap-4 py-5">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-800"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="itr-faq"
        aria-labelledby="itr-faq-title"
        className="scroll-mt-28 border-y border-blue-100 bg-[#f3f7ff] py-12 sm:py-16"
      >
        <div className={`${container} grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14`}>
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-700">
              COMMON QUESTIONS
            </p>
            <h2 id="itr-faq-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
              Income tax filing FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-blue-100 bg-white open:border-blue-300"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-4 text-sm font-semibold sm:px-5 sm:text-base [&::-webkit-details-marker]:hidden ${focus}`}
                >
                  {question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-blue-700 group-open:rotate-180 motion-safe:transition-transform"
                  />
                </summary>
                <p className="px-4 pb-4 text-sm leading-6 text-slate-600 sm:px-5">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="itr-contact-title" className={`${container} py-10 sm:py-14`}>
        <div
          className="itr-reveal flex flex-col gap-5 rounded-3xl bg-[#071c3d] px-5 py-7 !text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="max-w-xl">
            <h2 id="itr-contact-title" className="!text-white text-2xl font-semibold tracking-tight sm:text-3xl">
              Unsure where to start with your ITR?
            </h2>
            <p className="mt-2 leading-7 text-blue-100">
              Tell our Chennai team about your income sources and the help you
              need. We’ll point you to the right filing service.
            </p>
          </div>

          <Link
            href="/contact-us"
            className={`inline-flex min-h-12 w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold !text-blue-950 transition-colors hover:bg-blue-100 ${focus}`}
          >
            Talk to a tax expert
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <style>{`
        @keyframes itr-rise {
          from { opacity: .8; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .itr-reveal {
          animation: itr-rise .65s cubic-bezier(.2,.7,.2,1) both;
        }
        .itr-reveal-late { animation-delay: .12s; }
        @media (prefers-reduced-motion: reduce) {
          .itr-reveal { animation: none; }
        }
      `}</style>
    </main>
  );
}
