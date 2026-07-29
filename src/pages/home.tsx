import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Wrench, ShieldCheck, ChevronRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import heroImg from "@/assets/images/hero.jpg";
import plantNightImg from "@/assets/images/plant-night.jpg";
import logisticsImg from "@/assets/images/logistics.jpg";
import automationImg from "@/assets/images/automation.png";
import cargoImg from "@/assets/images/cargo.jpg";

const FEATURED = products.slice(0, 8);

export default function Home() {
  const { t } = useLanguage();
  useSEO({
    title: "AL Razaaq Enterprises | Industrial Machinery Supplier from Netherlands",
    description: "International industrial machinery supplier and exporter. Beverage filling lines, PET blowing machines, mining equipment, food processing, water treatment, and automation systems sourced from European and global OEM manufacturers. Serving Africa, the Middle East, and Asia.",
    path: "/",
  });
  return (
    <main className="flex-1 w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Dark panel */}
        <div className="bg-zinc-950 flex flex-col justify-center pt-28 pb-16 px-8 md:px-14 lg:px-20 relative z-10 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase">{t.home.tag}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
              {t.home.h1a}<br />{t.home.h1b}<br />
              <span className="text-primary">{t.home.h1c}</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed mb-10 max-w-md text-base">
              {t.home.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center rounded-full bg-primary text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/30 group">
                {t.home.btnProducts}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-all hover:bg-white/10">
                {t.home.btnQuote}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-14 pt-10 border-t border-zinc-800">
              {[
                { n: "20+", label: t.home.stat1 },
                { n: "25+", label: t.home.stat2 },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-primary mb-0.5">{n}</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Image panel */}
        <div className="relative order-1 md:order-2 min-h-[55vw] md:min-h-0">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}
            src={heroImg}
            alt="Industrial production"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-zinc-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent md:hidden" />
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase mb-3 block">{t.home.whyTag}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight">{t.home.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe,       img: logisticsImg,  title: t.home.features[0].title, body: t.home.features[0].body },
              { icon: ShieldCheck, img: automationImg, title: t.home.features[1].title, body: t.home.features[1].body },
              { icon: Wrench,      img: cargoImg,      title: t.home.features[2].title, body: t.home.features[2].body },
            ].map(({ icon: Icon, img, title, body }) => (
              <div key={title} className="group rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-zinc-950 mb-2 text-sm">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{body}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-primary uppercase tracking-wider">
                    {t.home.learnMore} <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP STRIP ────────────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src={plantNightImg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-zinc-950/85" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase mb-4 block">{t.home.advantageTag}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
              {t.home.advantageTitle}
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm max-w-2xl mx-auto">
              {t.home.advantageBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED EQUIPMENT ───────────────────────────────── */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase mb-2 block">{t.home.equipmentTag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight">{t.home.equipmentTitle}</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-primary transition-colors uppercase tracking-wider">
              {t.home.viewAll} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED.map((p) => (
              <Link
                key={p.id}
                href={`/contact?product=${p.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-primary/30 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300"
              >
                <div className="h-36 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-zinc-900 text-xs leading-snug mb-1">{p.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {t.home.enquire} <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* More products note */}
          <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-zinc-900 text-sm">{t.home.dontSeeTitle}</p>
              <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{t.home.dontSeeBody}</p>
            </div>
            <Link href="/contact" className="inline-flex items-center shrink-0 rounded-full bg-zinc-950 text-white px-6 py-2.5 font-bold text-xs tracking-wide uppercase transition-all hover:bg-primary group">
              {t.home.dontSeeBtn} <ArrowRight className="ml-1.5 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-3xl px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">{t.home.ctaTitle}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                {t.home.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10 shrink-0">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-primary text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 group">
                {t.home.ctaContact}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-full border border-white/20 text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-all hover:bg-white/10">
                {t.home.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
