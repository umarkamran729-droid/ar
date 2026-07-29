import { Link } from "wouter";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Products() {
  const { t } = useLanguage();
  useSEO({
    title: "Industrial Equipment Catalogue | 25+ Machinery Categories",
    description: "Browse 25+ categories of industrial machinery: beverage filling lines, PET blowing machines, food processing equipment, mining machinery, water treatment plants, electrical switchgear, automation systems, and spare parts. Sourced from European and global OEM manufacturers. Shipped worldwide.",
    path: "/products",
  });
  return (
    <main className="flex-1 w-full bg-zinc-50 pt-28 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">{t.products.tag}</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-3">
              {t.products.h1}
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
              {t.products.subtitle}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-7 py-3.5 font-bold tracking-wide uppercase text-sm transition-all hover:bg-primary/90 shrink-0 group"
          >
            {t.products.requestQuote}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-primary/30 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={t.products.items[index]?.name ?? product.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900 text-sm mb-2 leading-snug">{t.products.items[index]?.name}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">{t.products.items[index]?.description}</p>
                <Link
                  href={`/contact?product=${product.id}`}
                  className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-primary uppercase tracking-wider hover:gap-2 transition-all"
                >
                  {t.products.enquire} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-zinc-950 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.products.notFoundTitle}
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
            {t.products.notFoundBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-9 py-4 font-bold tracking-wide uppercase text-sm transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 group"
          >
            {t.products.notFoundBtn}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
