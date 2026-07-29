import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="bg-white rounded-xl px-2 py-1">
                <img src={logo} alt="AL Razzaq Enterprises" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-[0.15em] uppercase leading-none text-white">AL RAZZAQ</span>
                <span className="text-[0.6rem] text-primary font-bold tracking-[0.3em] uppercase mt-1">Enterprises</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 pr-8">{t.footer.description}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">{t.footer.companyCol}</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-zinc-400 hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/services" className="text-sm text-zinc-400 hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">{t.footer.equipmentCol}</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-primary transition-colors">Beverage Filling Lines</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-primary transition-colors">PET Blowing Machines</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-primary transition-colors">Industrial Automation</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-primary transition-colors">Mining Equipment</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-primary transition-colors">Spare Parts Supply</Link></li>
              <li><Link href="/products" className="text-sm text-primary hover:text-white transition-colors font-medium">{t.footer.viewAll}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">{t.footer.officesCol}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">{t.footer.europe}</span>
                  <span className="text-sm text-zinc-400 leading-relaxed">Emmen, The Netherlands</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">{t.footer.asia}</span>
                  <span className="text-sm text-zinc-400 leading-relaxed">Lahore, Pakistan</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">info@alrazzaqenterprises.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">+31 631 379 689</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
