import { Globe, Truck, Wrench, ClipboardList, Package, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";

const SERVICE_META = [
  { n: "01", icon: Globe,          accent: "from-blue-500 to-cyan-400",    bg: "bg-blue-50 border-blue-100",       iconBg: "bg-blue-600" },
  { n: "02", icon: Truck,          accent: "from-amber-500 to-orange-400", bg: "bg-amber-50 border-amber-100",     iconBg: "bg-amber-500" },
  { n: "03", icon: Wrench,         accent: "from-emerald-500 to-teal-400", bg: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-600" },
  { n: "04", icon: ClipboardList,  accent: "from-violet-500 to-purple-400",bg: "bg-violet-50 border-violet-100",   iconBg: "bg-violet-600" },
  { n: "05", icon: Package,        accent: "from-rose-500 to-pink-400",    bg: "bg-rose-50 border-rose-100",       iconBg: "bg-rose-500" },
  { n: "06", icon: HeadphonesIcon, accent: "from-sky-500 to-indigo-400",   bg: "bg-sky-50 border-sky-100",         iconBg: "bg-sky-600" },
];

type ServiceEntry = typeof SERVICE_META[0] & { title: string; sub: string; points: string[] };

function FlowCard({ s, delay }: { s: ServiceEntry; delay: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative bg-white rounded-2xl border shadow-md shadow-zinc-200/60 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-200 ${s.bg}`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${s.accent}`} />
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
              <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <div className={`text-[10px] font-black tracking-[0.2em] bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}>{s.n}</div>
              <h3 className="text-zinc-900 font-bold text-sm leading-tight">{s.title}</h3>
            </div>
          </div>
        </div>
        <p className={`text-xs font-semibold bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}>{s.sub}</p>
        <ul className="space-y-1.5 flex-1">
          {s.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2 text-[11px] text-zinc-500 leading-snug">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.accent} mt-1 shrink-0`} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  useSEO({
    title: "Our Services | Global Sourcing, Logistics, Installation and Support",
    description: "AL Razaaq Enterprises provides end-to-end industrial equipment services: global OEM sourcing, CE certification, export logistics, customs clearance, on-site installation, commissioning, operator training, and after-sales spare parts support for factories in Africa, the Middle East, and Asia.",
    path: "/services",
  });

  const SERVICES: ServiceEntry[] = SERVICE_META.map((meta, i) => ({
    ...meta,
    title: t.services.items[i].title,
    sub: t.services.items[i].sub,
    points: t.services.items[i].points,
  }));

  const STEPS = t.services.steps;

  return (
    <main className="flex-1 w-full">

      {/* HERO */}
      <section className="bg-zinc-950 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-900/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4 block">{t.services.tag}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            {t.services.h1}
          </h1>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">{t.services.subtitle}</p>
        </div>
      </section>

      {/* FLOWCHART */}
      <section className="bg-[hsl(35,30%,97%)] py-12 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* Desktop serpentine */}
          <div className="hidden md:block space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-[1fr_32px_1fr_32px_1fr] items-center gap-0">
              <FlowCard s={SERVICES[0]} delay={0} />
              <div className="flex items-center justify-center">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path d="M0 8 H24" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M20 4 L28 8 L20 12" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <FlowCard s={SERVICES[1]} delay={0.08} />
              <div className="flex items-center justify-center">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path d="M0 8 H24" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M20 4 L28 8 L20 12" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <FlowCard s={SERVICES[2]} delay={0.16} />
            </div>

            {/* Arrow ↓ */}
            <div className="flex">
              <div className="flex-1" />
              <div className="flex-1" />
              <div className="flex-1 flex items-center justify-center py-1">
                <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                  <path d="M8 0 V20" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M4 16 L8 24 L12 16" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Row 2 — reversed */}
            <div className="grid grid-cols-[1fr_32px_1fr_32px_1fr] items-center gap-0">
              <FlowCard s={SERVICES[5]} delay={0.40} />
              <div className="flex items-center justify-center">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path d="M32 8 H8" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M12 4 L4 8 L12 12" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <FlowCard s={SERVICES[4]} delay={0.32} />
              <div className="flex items-center justify-center">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path d="M32 8 H8" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M12 4 L4 8 L12 12" stroke="hsl(32,88%,48%)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <FlowCard s={SERVICES[3]} delay={0.24} />
            </div>
          </div>

          {/* Mobile — vertical */}
          <div className="md:hidden flex flex-col gap-3 relative pl-5">
            <div className="absolute left-1.5 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />
            {SERVICES.map((s, i) => (
              <div key={s.n} className="relative">
                <div className={`absolute -left-[15px] top-5 w-3 h-3 rounded-full bg-gradient-to-br ${s.accent} z-10`} />
                <FlowCard s={s} delay={i * 0.06} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-950 py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-2 block">{t.services.howTag}</span>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{t.services.howTitle}</h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute top-7 left-[7%] right-[7%] h-px border-t-2 border-dashed border-zinc-700" />
            <div className="grid grid-cols-5">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.09 }}
                  className="flex flex-col items-center text-center px-3"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center mb-4 z-10 relative shadow-lg shadow-primary/30">
                    <span className="text-white font-black text-sm">{step.n}</span>
                  </div>
                  <p className="text-white font-bold text-xs mb-1">{step.t}</p>
                  <p className="text-zinc-500 text-[11px] leading-snug">{step.b}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-2">
            {STEPS.map((step) => (
              <div key={step.n} className="flex items-center gap-3 bg-zinc-900/80 rounded-xl px-4 py-3 border border-zinc-800">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-[11px]">{step.n}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-xs">{step.t}</p>
                  <p className="text-zinc-500 text-[11px]">{step.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 px-4 border-t border-zinc-100">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-zinc-950 mb-1">{t.services.ctaTitle}</h2>
            <p className="text-zinc-500 text-sm">{t.services.ctaBody}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all group">
              {t.services.ctaBtn} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="inline-flex items-center rounded-full border border-zinc-200 text-zinc-700 px-6 py-3 font-bold text-sm uppercase tracking-wide hover:border-zinc-400 transition-all">
              {t.nav.products}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
