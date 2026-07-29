import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, ShieldCheck, Linkedin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";
import gearsImg from "@/assets/images/gears.jpg";
import automationImg from "@/assets/images/automation.png";
import kamranImg from "@/assets/kamran-hafeez.png";
import kamranAwardImg from "@/assets/kamran-award.png";

export default function About() {
  const { t } = useLanguage();
  useSEO({
    title: "About Us | Industrial Equipment Experts with 20+ Years Experience",
    description: "AL Razaaq Enterprises is led by Kamran Hafeez, an Electrical Engineer with 20+ years of industrial experience including a Pepsi International Platinum Award. We source certified industrial machinery from European and global manufacturers for buyers across Africa, the Middle East, and Asia.",
    path: "/about",
  });
  return (
    <main className="flex-1 w-full bg-white">

      {/* HERO — full-bleed dramatic */}
      <section className="relative bg-zinc-950 overflow-hidden lg:h-screen lg:min-h-[600px] lg:max-h-[900px] lg:flex lg:items-end">
        {/* Image: natural aspect ratio on mobile (no gaps), full-bleed cover on desktop */}
        <img
          src={kamranAwardImg}
          alt="Kamran Hafeez receiving Pepsi International Platinum Award on stage"
          className="relative block w-full h-auto mt-24 lg:mt-0 lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="relative z-10 w-full pb-10 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4 block">{t.about.tag}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                {t.about.h1a}<br />{t.about.h1b}<br />{t.about.h1c}
              </h1>
              <div className="flex flex-wrap gap-10 mt-8">
                {[
                  { n: "20+", label: t.about.stat1 },
                  { n: "25+", label: t.about.stat2 },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-primary">{n}</div>
                    <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — tight 2-col */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4 block">{t.about.whoTag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight mb-5 leading-snug">
                {t.about.whoTitle}
              </h2>
              <p className="text-zinc-500 leading-relaxed text-sm mb-5">
                {t.about.whoBody1}
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm mb-8">
                {t.about.whoBody2}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: "🇳🇱", text: "Emmen, Netherlands: Sourcing and Procurement" },
                  { flag: "🇵🇰", text: "Lahore, Pakistan: Installation and Support" },
                ].map((o) => (
                  <div key={o.text} className="flex items-start gap-2.5 bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                    <span className="text-xl shrink-0">{o.flag}</span>
                    <span className="text-xs text-zinc-600 leading-snug font-medium">{o.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl shadow-zinc-200/50 relative w-full"
              style={{ aspectRatio: "4/3" }}
            >
              <img src={automationImg} alt="Industrial automation" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 DIFFERENTIATORS — compact strip */}
      <section className="py-10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Factory tested in Europe", body: "Every machine passes FAT before shipment. You receive video proof." },
              { title: "One contract, full lifecycle", body: "Sourcing, shipping, installation, and support under one agreement." },
              { title: "Fast delivery", body: "Our European and global partnerships let us move faster than independent buyers." },
              { title: "Lifetime support", body: "Spare parts, maintenance, and technical help for the life of the equipment." },
            ].map(({ title, body }) => (
              <div key={title} className="border-l border-zinc-800 pl-5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mb-3" />
                <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-2 block">{t.about.leaderTag}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight">{t.about.leaderTitle}</h2>
          </div>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative min-h-[420px] md:min-h-[520px] bg-zinc-900 overflow-hidden">
                  <img src={kamranImg} alt="Kamran Hafeez" className="absolute inset-0 w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1.5 bg-primary/25 border border-primary/50 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Multiple International Awards</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center gap-0">
                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight">{t.about.leaderName}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1 mb-1">{t.about.leaderRole}, AL Razaaq Enterprises</p>
                  <p className="text-zinc-400 text-xs mb-5">Electrical Engineer, General Manager at Pepsi Pakistan</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {t.about.leaderBio}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {[
                      "Qualified Electrical Engineer",
                      "Currently GM at Pepsi Pakistan",
                      "Senior roles at Pepsi and Coca-Cola",
                      "20+ years in industrial manufacturing",
                      "Pepsi International Platinum Award",
                      "Multiple international recognitions",
                    ].map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-zinc-600">
                        <ShieldCheck className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kamran-hafeez-14516b41/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-md shadow-[#0A66C2]/30 w-fit"
                  >
                    <Linkedin className="w-4 h-4" />
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">{t.about.ctaTitle}</h2>
            <p className="text-zinc-400 text-sm">{t.about.ctaBody}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-primary text-white px-7 py-3 font-bold text-sm tracking-wide uppercase transition-all hover:bg-primary/90 group">
              {t.about.ctaBtn} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="inline-flex items-center rounded-full border border-white/20 text-white px-7 py-3 font-bold text-sm tracking-wide uppercase transition-all hover:bg-white/10">
              {t.about.ctaLink}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
