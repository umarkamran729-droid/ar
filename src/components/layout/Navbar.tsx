import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo-mark.png";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const LANG_OPTIONS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
];

function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANG_OPTIONS.find((o) => o.code === lang) ?? LANG_OPTIONS[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        className="flex items-center gap-1.5 bg-zinc-800/70 hover:bg-zinc-700/70 border border-zinc-700/60 rounded-full px-3 py-1.5 text-white text-sm font-semibold transition-all"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-xs tracking-wider">{current.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-28 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl overflow-hidden z-50">
          {LANG_OPTIONS.map((o) => (
            <button
              key={o.code}
              onClick={() => { setLang(o.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-800 ${
                lang === o.code ? "text-primary bg-zinc-800/60" : "text-zinc-300"
              }`}
            >
              <span className="text-base">{o.flag}</span>
              <span className="text-xs tracking-wider">{o.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  const isHome = location === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" : isHome ? "bg-transparent border-transparent" : "bg-zinc-950 border-b border-zinc-800"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-xl px-2 py-1 shadow-sm">
                <img src={logo} alt="AL Razzaq Enterprises" className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-[0.15em] uppercase leading-none text-white">AL RAZZAQ</span>
                <span className="text-[0.6rem] text-primary font-bold tracking-[0.3em] uppercase mt-1">Enterprises</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-10">
            <div className="flex items-center space-x-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-zinc-300"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="https://wa.me/31631379689" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <Link href="/contact" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-primary/20">
              {t.nav.requestQuote}
            </Link>
            <LangSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangSwitcher />
            <button className="p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 absolute top-24 left-0 w-full shadow-2xl">
          <div className="space-y-1 px-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-4 text-base font-bold uppercase tracking-wider border-b border-zinc-900 ${location === link.href ? "text-primary" : "text-zinc-300"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-4 px-3">
              <a href="https://wa.me/31631379689" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                {t.nav.whatsapp}
              </a>
              <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="text-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider">
                {t.nav.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
