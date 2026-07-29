import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { useLanguage } from "@/contexts/LanguageContext";
import type { T } from "@/lib/translations";

const WHATSAPP = "31631379689";

interface Msg {
  role: "bot" | "user";
  text: string;
  ts: number;
}

type ReplyKey = keyof T["chat"]["replies"];

type Rule = { pattern: RegExp; key: ReplyKey };

const RULES: Rule[] = [
  { pattern: /\b(hi|hello|hey|salam|salaam|good morning|good afternoon|good evening|bonjour|hallo|goedemorgen|goedemiddag|welkom)\b/i, key: "hello" },
  { pattern: /\b(quot|price|cost|how much|budget|i need a quotation|get a quote|pricing|rates|devis|prix|tarif|offerte|prijs|kosten)\b/i, key: "quote" },
  { pattern: /\b(order|how (do|can|to)|process|steps|get started|procedure|buying|purchase|how does ordering|commande|bestell|hoe werkt)\b/i, key: "order" },
  { pattern: /\b(what (do|can)|machinery|supply|products|categories|equipment|range|offer|machines|apparatuur|produits|équipement)\b/i, key: "machinery" },
  { pattern: /\b(beverage|filling machine|bottling|water plant|juice|carbonated|csd|still water|soda|drinks|bph|boisson|drank|fles)\b/i, key: "beverage" },
  { pattern: /\b(pet|blow molding|blowing machine|preform|bottle making|stretch blow|soufflage|blaasmaschine)\b/i, key: "pet" },
  { pattern: /\b(spare part|spares|parts|component|wear part|bearing|seal|replacement|oem|consumable|breakdown|pièces|reserveonderdelen|onderdelen)\b/i, key: "spareParts" },
  { pattern: /\b(install|commission|setup|on.?site|fitting|engineer|startup|handover|installation|mise en service|installatie|inbedrijf)\b/i, key: "install" },
  { pattern: /\b(train|training|operator|staff|maintenance|how to use|manual|formation|opleiding|personeel)\b/i, key: "training" },
  { pattern: /\b(shipping|delivery|lead.?time|how long|when|arrival|transit|freight|timeline|livraison|délai|levering|verzending)\b/i, key: "shipping" },
  { pattern: /\b(contact|phone|email|whatsapp|reach|call|number|get in touch|coordonnées|bereiken)\b/i, key: "contactInfo" },
  { pattern: /\b(location|where|based|office|address|netherlands|pakistan|lahore|emmen|headquarters|bureau|kantoor)\b/i, key: "location" },
  { pattern: /\b(about|company|who (are|is)|background|history|founded|story|kamran|hafeez|ceo|director|pepsi|coca.?cola|entreprise|bedrijf)\b/i, key: "about" },
  { pattern: /\b(partner|supplier|manufacturer|oem|network|european|german|italian|global|quality|certif|fabricant|fabrikant)\b/i, key: "manufacturer" },
  { pattern: /\b(mining|crush|quarry|aggregate|coal|mineral|screen|heavy equipment|mine|carrière|mijnbouw)\b/i, key: "mining" },
  { pattern: /\b(food|dairy|sauce|oil|jam|edible|processing plant|pasteuriz|alimentaire|voeding|zuivel)\b/i, key: "food" },
  { pattern: /\b(water treatment|ro|reverse osmosis|purif|deminerali|softener|traitement|waterzuivering)\b/i, key: "water" },
  { pattern: /\b(automation|plc|scada|hmi|robot|robotic|industry 4|smart factory|remote monitor|automatisation|automatisering)\b/i, key: "automation" },
  { pattern: /\b(packaging|carton|shrink|pallet|wrap|seal|case|secondary packaging|emballage|verpakking)\b/i, key: "packaging" },
  { pattern: /\b(thank|thanks|thank you|appreciate|great|perfect|good|helpful|excellent|merci|bedankt|dank)\b/i, key: "thanks" },
];

function botReply(input: string, replies: T["chat"]["replies"], fallback: string): string {
  for (const rule of RULES) {
    if (rule.pattern.test(input)) {
      return replies[rule.key];
    }
  }
  return fallback;
}

export function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showPing, setShowPing] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset chat when greeting changes (language switch)
  useEffect(() => {
    setMsgs([{ role: "bot", text: t.chat.greeting, ts: Date.now() }]);
    setShowChips(true);
  }, [t.chat.greeting]);

  useEffect(() => {
    const timer = setTimeout(() => setShowPing(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setShowChips(false);
    setInput("");
    const userMsg: Msg = { role: "user", text: trimmed, ts: Date.now() };
    setMsgs((prev) => [...prev, userMsg]);
    setTyping(true);
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const reply = botReply(trimmed, t.chat.replies, t.chat.fallback);
      setMsgs((prev) => [...prev, { role: "bot", text: reply, ts: Date.now() }]);
      setTyping(false);
    }, delay);
  };

  const renderText = (text: string) =>
    text.split("\n").map((line, i, arr) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
      );
      return (
        <span key={i}>
          {rendered}
          {i < arr.length - 1 && <br />}
        </span>
      );
    });

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[370px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl shadow-black/20 border border-zinc-200 flex flex-col overflow-hidden origin-bottom-right"
            style={{ height: "min(580px, calc(100vh - 100px))" }}
          >
            {/* HEADER */}
            <div className="bg-zinc-950 px-4 py-3 flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                <img src={logo} alt="AR" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm leading-tight">AL Razaaq Enterprises</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-zinc-400">{t.chat.typicallyReplies}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-zinc-50">
              {msgs.map((m) => (
                <div key={m.ts} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
                  {m.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 overflow-hidden p-0.5 mb-0.5">
                      <img src={logo} alt="" className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white border border-zinc-100 text-zinc-800 rounded-bl-sm shadow-sm"
                  }`}>
                    {m.role === "bot" ? renderText(m.text) : m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-white border border-zinc-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {showChips && msgs.length === 1 && !typing && (
                <div className="pt-1">
                  <p className="text-[11px] text-zinc-400 font-medium px-1 mb-2">{t.chat.quickOptions}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.chat.chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => send(chip)}
                        className="text-[11px] px-3 py-1.5 rounded-full border border-zinc-200 bg-white hover:border-primary hover:bg-primary/5 hover:text-primary text-zinc-600 transition-all font-medium"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* WHATSAPP */}
            <div className="px-4 py-2 border-t border-zinc-100 bg-white shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello, I would like to enquire about machinery from AL Razaaq Enterprises.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2 rounded-xl transition-all text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t.chat.waBtn}
              </a>
            </div>

            {/* INPUT */}
            <div className="px-3 py-3 border-t border-zinc-100 bg-white shrink-0">
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chat.placeholder}
                  className="flex-1 bg-zinc-100 rounded-xl px-4 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  disabled={typing}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 disabled:opacity-40 hover:bg-primary/90 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setOpen((v) => !v); setShowPing(false); }}
        className="relative w-14 h-14 rounded-full bg-primary text-white shadow-2xl shadow-primary/30 flex items-center justify-center"
      >
        {showPing && !open && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white z-10" />
          </>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
              <X className="w-6 h-6" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
              <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
