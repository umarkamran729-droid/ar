import { useSearch } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { Mail, MessageCircle, Globe, ArrowRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/contexts/LanguageContext";

const WA = "31631379689";
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  country: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  interest: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useSEO({
    title: "Contact Us | Request a Quote for Industrial Machinery",
    description: "Contact AL Razzaq Enterprises to request a quotation for industrial machinery, spare parts, or turnkey factory solutions. Offices in Emmen, Netherlands and Lahore, Pakistan. WhatsApp: +31 631 379 689.",
    path: "/contact",
  });

  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const productInterest = searchParams.get("product") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", country: "", email: "", phone: "", interest: productInterest, message: "" },
  });

  useEffect(() => {
    if (productInterest) form.setValue("interest", productInterest);
  }, [productInterest, form]);

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setSubmitError("");
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            name: data.name,
            company: data.company,
            country: data.country,
            _replyto: data.email,
            phone: data.phone,
            interest: data.interest || "General",
            message: data.message,
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError("Something went wrong. Please email us directly at info@alrazzaqenterprises.com");
    } finally {
      setSubmitting(false);
    }
  };

  const OFFICES = [
    {
      flag: "🇳🇱", country: "Netherlands", city: "Emmen",
      role: t.footer.europe,
      detail: t.contact.officeNLDetail,
    },
    {
      flag: "🇵🇰", country: "Pakistan", city: "Lahore",
      role: t.footer.asia,
      detail: t.contact.officePKDetail,
    },
  ];

  return (
    <main className="flex-1 w-full bg-white">
      {/* HERO */}
      <section className="bg-zinc-950 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4 block">{t.contact.tag}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            {t.contact.h1}
          </h1>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">{t.contact.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-2 space-y-6">
            {/* OFFICES */}
            <div>
              <h3 className="text-xs font-black tracking-[0.2em] text-primary uppercase mb-4">{t.contact.officesTag}</h3>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <motion.div
                    key={o.city}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{o.flag}</span>
                      <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">{o.role}</p>
                        <h4 className="font-bold text-zinc-950 text-sm">{o.city}, {o.country}</h4>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">{o.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5 space-y-4">
              <h3 className="text-xs font-black tracking-[0.2em] text-primary uppercase">{t.contact.directTag}</h3>
              <a href="mailto:info@alrazzaqenterprises.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-zinc-200 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t.contact.emailLabel}</p>
                  <p className="text-xs text-zinc-700 font-semibold">info@alrazzaqenterprises.com</p>
                </div>
              </a>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t.contact.waLabel}</p>
                  <p className="text-xs text-zinc-700 font-semibold">+31 631 379 689</p>
                </div>
              </a>
              <a href="https://alrazzaqenterprises.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-zinc-200 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                  <Globe className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t.contact.webLabel}</p>
                  <p className="text-xs text-zinc-700 font-semibold">alrazzaqenterprises.com</p>
                </div>
              </a>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello, I would like to enquire about industrial machinery from AL Razzaq Enterprises.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl p-5 transition-all group"
            >
              <div>
                <p className="font-bold text-sm">{t.contact.waCta}</p>
                <p className="text-white/80 text-xs mt-0.5">{t.contact.waCtaSub}</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* ENQUIRY FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-100/60 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-5"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h2 className="text-2xl font-bold text-zinc-950">Enquiry Sent!</h2>
                  <p className="text-zinc-500 text-sm max-w-xs">
                    Thank you for reaching out. We will review your enquiry and get back to you shortly at your email address.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-primary text-sm font-semibold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <>
              <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-1">{t.contact.formTitle}</h2>
              <p className="text-zinc-400 text-xs mb-7">{t.contact.formSub}</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.nameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.namePlaceholder} className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.companyLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.companyPlaceholder} className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.emailFieldLabel}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t.contact.emailPlaceholder} className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.phoneLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.phonePlaceholder} className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="country" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.countryLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.countryPlaceholder} className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="interest" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.categoryLabel}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-zinc-50 border-zinc-200 h-11 px-4 rounded-xl focus-visible:ring-primary text-sm">
                              <SelectValue placeholder={t.contact.categoryPlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">{t.contact.generalEnquiry}</SelectItem>
                            {products.map(p => (
                              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-700 text-xs font-bold uppercase tracking-wider">{t.contact.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact.messagePlaceholder}
                          className="bg-zinc-50 border-zinc-200 min-h-[120px] p-4 rounded-xl focus-visible:ring-primary resize-none text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {submitError && (
                    <p className="text-sm text-red-500 text-center">{submitError}</p>
                  )}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-sm py-6 transition-all"
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4 mr-2" /> Send Enquiry</>
                      )}
                    </Button>
                  </div>
                  <p className="text-[11px] text-zinc-400 text-center">Your message will be sent to info@alrazzaqenterprises.com</p>
                </form>
              </Form>
              </>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
