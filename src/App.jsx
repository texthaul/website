import React from "react";

const ticketFields = [
  ["Ticket No.", "76891"],
  ["Customer", "Pine Valley Materials"],
  ["Deliver To", "Horizon Construction"],
  ["Job / PO #", "HC-240514-02"],
  ["Material", "3/4\" Limestone"],
  ["Quantity", "22.18 tons"],
  ["Total", "$399.24"],
];

const featureCards = [
  {
    icon: "camera",
    title: "1. Send your ticket",
    text: "Upload a photo, screenshot, scanned PDF, or text message attachment from the field.",
  },
  {
    icon: "file",
    title: "2. We extract the details",
    text: "We pull out customers, PO numbers, Bills of Lading, materials, weights, dates, and charges.",
  },
  {
    icon: "check",
    title: "3. Review and export",
    text: "Confirm the details, correct anything unusual, then export for billing or your QuickBooks workflow.",
  },
];

const trustPoints = [
  {
    icon: "clock",
    title: "Reduce admin time",
    text: "Spend less time retyping and more time billing completed work.",
  },
  {
    icon: "shield",
    title: "Human review built in",
    text: "We structure the invoice data while your team keeps full control before anything goes out.",
  },
  {
    icon: "truck",
    title: "Trucking-specific fields",
    text: "PO numbers, Bills of Lading, shippers, consignees, equipment descriptions, rates, weights, and signatures.",
  },
];

const workflowSteps = [
  ["camera", "Send ticket", "Photo, PDF, screenshot, or text"],
  ["file", "Extract data", "Fields are structured for review"],
  ["check", "Confirm", "You approve the invoice details"],
];

const sampleTicketSrc = "/sample-invoice.png";

export default function TruckingInvoiceSite() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <WorkflowSection />
      <IntegrationSection />
      <SampleSection />
      <TrustSection />
      <PilotSection />
      <SiteFooter />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/30">
              <Icon name="truck" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Texthaul</span>
          </div>

          <a
            href="#demo"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-100 sm:inline-flex"
          >
            Get early access
          </a>
        </nav>

        <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
          <div className="animate-[fadeInUp_0.55s_ease-out_both]">
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              Photos of tickets → clean invoice data
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Take a picture. Get an invoice.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Texthaul reads text messages, photos, screenshots, and PDFs of trucking tickets, extracts the invoice data, and prepares it for review, export, or QuickBooks entry.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400"
              >
                Join the pilot <Icon name="arrow" className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Early pilot for small trucking, hauling, equipment rental, and field-service operations.
            </p>
          </div>

          <HeroWorkflow />
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-wide text-blue-600">How it works</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Simple workflow. Cleaner billing.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featureCards.map((feature) => (
            <Feature key={feature.title} iconName={feature.icon} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section className="bg-white py-10 text-slate-950">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold text-slate-500">
          Works with QuickBooks and your existing billing process
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold">
            QuickBooks
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold">
            Other billing providers
          </span>
        </div>

        <p className="mt-3 text-xs text-slate-500">Structured data you can drop straight into your system</p>
      </div>
    </section>
  );
}

function SampleSection() {
  return (
    <section className="bg-slate-100 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-wide text-blue-600">Sample input</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">A realistic sample ticket.</h2>
            <p className="mt-3 text-slate-600">Fake company names and addresses, realistic format.</p>

            <div className="mt-6">
              <img
                src={sampleTicketSrc}
                alt="Sample handwritten trucking ticket"
                className="w-full max-w-md rotate-[-1deg] rounded-xl shadow-xl"
              />
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl shadow-blue-500/25">
              <Icon name="arrow" className="h-7 w-7" />
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-wide text-blue-600">Sample output</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Generated invoice draft.</h2>
            <p className="mt-3 text-slate-600">Structured fields ready for review and export.</p>

            <div className="mt-6">
              <InvoicePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-bold uppercase tracking-wide text-blue-600">Built for messy field paperwork</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Because real tickets are not clean spreadsheets.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Drivers send photos from phones. Dispatch gets screenshots. Office staff receives PDFs. Texthaul is designed around the real workflow: imperfect images, handwritten notes, odd line items, and invoice data that still has to be correct.
          </p>
        </div>

        <div className="grid gap-4">
          {trustPoints.map((point) => (
            <TrustPoint key={point.title} iconName={point.icon} title={point.title} text={point.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PilotSection() {
  return (
    <section id="demo" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <p className="font-bold uppercase tracking-wide text-blue-300">Pilot program (limited access)</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Test it on your own ticket format.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Join the pilot and share a redacted or sample ticket. We’ll show you what the system can extract and how it could fit your billing workflow.
          </p>

          <div className="mt-8 grid gap-3 text-slate-300">
            <ChecklistItem>No long setup call required</ChecklistItem>
            <ChecklistItem>Works with photos, screenshots, and PDFs</ChecklistItem>
            <ChecklistItem>Works with QuickBooks and other workflows</ChecklistItem>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <Icon name="mail" className="mb-4 h-8 w-8 text-blue-300" />
          <h3 className="text-2xl font-black">Get in touch</h3>
          <p className="mt-2 text-slate-300">Email us to join the pilot or ask questions.</p>
          <a
            href="mailto:sales@texthaul.com"
            className="mt-5 inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400"
          >
            sales@texthaul.com
          </a>
          <p className="mt-3 text-xs text-slate-400">Pilot is limited.</p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© 2026 Texthaul. All rights reserved.</p>
        <a href="mailto:sales@texthaul.com" className="inline-flex items-center gap-2 font-semibold text-white hover:text-blue-300">
          <Icon name="mail" className="h-4 w-4" /> sales@texthaul.com
        </a>
      </div>
    </footer>
  );
}

function HeroWorkflow() {
  return (
    <div className="animate-[fadeInScale_0.55s_ease-out_0.12s_both] rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
      <div className="rounded-[1.5rem] bg-slate-900 p-5">
        <div className="mb-5 rounded-2xl bg-white/[0.06] p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">How it works</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {workflowSteps.map(([icon, title, text], index) => (
              <div key={title} className="relative rounded-2xl border border-white/10 bg-slate-950 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Icon name={icon} className="h-5 w-5" />
                </div>
                <p className="font-bold">
                  {index + 1}. {title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <img
            src={sampleTicketSrc}
            alt="Sample handwritten trucking ticket"
            className="max-h-[260px] rounded-xl object-contain shadow-xl"
          />
          <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white lg:flex">
            <Icon name="arrow" className="h-5 w-5" />
          </div>
          <InvoiceCard />
        </div>
      </div>
    </div>
  );
}

function InvoiceCard() {
  return (
    <div className="rounded-2xl bg-white p-5 text-slate-950 shadow-xl">
      <div className="mb-4 flex items-start justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-lg font-black">Texthaul</p>
          <p className="text-xs text-slate-500">Invoice Draft</p>
        </div>
        <p className="text-lg font-black">INVOICE</p>
      </div>

      <div className="grid gap-3 text-xs">
        {ticketFields.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-slate-100 pb-2">
            <span className="font-semibold text-slate-500">{label}</span>
            <span className="text-right font-bold text-slate-950">{value}</span>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full rounded-xl bg-blue-500 py-3 text-sm font-bold text-white transition hover:bg-blue-400">
        Export invoice data
      </button>
    </div>
  );
}

function InvoicePreview() {
  return (
    <div className="rounded-[1.5rem] bg-white p-7 text-slate-950 shadow-xl ring-1 ring-slate-200">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-black">Texthaul</h3>
          <p className="mt-1 text-sm text-slate-500">Invoice Draft</p>
        </div>
        <h3 className="text-2xl font-black">INVOICE</h3>
      </div>

      <div className="grid gap-5 border-y border-slate-200 py-5 text-sm sm:grid-cols-2">
        <div>
          <p className="font-bold text-slate-500">Invoice No.</p>
          <p className="mt-1 font-semibold">INV-76891</p>
          <p className="mt-4 font-bold text-slate-500">Invoice Date</p>
          <p className="mt-1 font-semibold">05/14/2024</p>
        </div>
        <div>
          <p className="font-bold text-slate-500">Due Date</p>
          <p className="mt-1 font-semibold">05/28/2024</p>
          <p className="mt-4 font-bold text-slate-500">Job / PO #</p>
          <p className="mt-1 font-semibold">HC-240514-02</p>
        </div>
      </div>

      <div className="grid gap-6 border-b border-slate-200 py-5 text-sm sm:grid-cols-2">
        <div>
          <p className="font-bold text-slate-500">Bill From</p>
          <p className="mt-2 font-semibold">Main Street Hauling</p>
          <p>Load ticket #76891</p>
          <p>Truck #27 · Driver M. Johnson</p>
        </div>
        <div>
          <p className="font-bold text-slate-500">Bill To</p>
          <p className="mt-2 font-semibold">Pine Valley Materials</p>
          <p>1250 Meadow Creek Dr.</p>
          <p>Riverview, TX 77401</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 text-sm">
        <div className="grid grid-cols-[1fr_0.55fr_0.45fr_0.55fr_0.7fr] bg-slate-100 p-3 text-xs font-black uppercase text-slate-600">
          <span>Description</span>
          <span>Qty</span>
          <span>Unit</span>
          <span>Rate</span>
          <span className="text-right">Amount</span>
        </div>
        <div className="grid grid-cols-[1fr_0.55fr_0.45fr_0.55fr_0.7fr] p-3">
          <span>3/4&quot; Limestone</span>
          <span>22.18</span>
          <span>TON</span>
          <span>$18.00</span>
          <span className="text-right font-bold">$399.24</span>
        </div>
      </div>

      <div className="mt-6 ml-auto max-w-xs space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$399.24</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-3 text-xl font-black">
          <span>Total</span>
          <span>$399.24</span>
        </div>
      </div>
    </div>
  );
}

function Feature({ iconName, title, text }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon name={iconName} className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function TrustPoint({ iconName, title, text }) {
  return (
    <div className="rounded-[2rem] bg-slate-100 p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon name={iconName} className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-black">{title}</h3>
          <p className="mt-2 leading-7 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ children }) {
  return (
    <p className="flex gap-3">
      <Icon name="check" className="h-6 w-6 shrink-0 text-emerald-300" /> {children}
    </p>
  );
}

function Icon({ name, className = "h-5 w-5" }) {
  const sizeMap = {
    "h-4": 16,
    "w-4": 16,
    "h-5": 20,
    "w-5": 20,
    "h-6": 24,
    "w-6": 24,
    "h-7": 28,
    "w-7": 28,
    "h-8": 32,
    "w-8": 32,
  };

  const getSize = (axis) => {
    if (className.includes(`${axis}-4`)) return 16;
    if (className.includes(`${axis}-5`)) return 20;
    if (className.includes(`${axis}-6`)) return 24;
    if (className.includes(`${axis}-7`)) return 28;
    if (className.includes(`${axis}-8`)) return 32;
    return 20;
  };

  const commonProps = {
    className,
    width: getSize("w"),
    height: getSize("h"),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: { display: "inline-block", flexShrink: 0 },
  };

  const icons = {
    arrow: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    camera: (
      <svg {...commonProps}>
        <path d="M14.5 4h-5L8 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-1.5-2Z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    clock: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    file: (
      <svg {...commonProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    truck: (
      <svg {...commonProps}>
        <path d="M10 17h4V5H2v12h3" />
        <path d="M14 17h1" />
        <path d="M19 17h3v-6l-3-4h-5" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

