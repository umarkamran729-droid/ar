import { useState } from "react";
import { Download, Loader2, FileText } from "lucide-react";
import { toast } from "sonner";
import { generateCatalogue, type CatalogueOptions } from "@/lib/catalogue";

type Variant = "primary" | "outline" | "compact" | "ghost";

interface DownloadCatalogueButtonProps {
  variant?: Variant;
  label?: string;
  options?: CatalogueOptions;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold tracking-wide uppercase text-sm transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-wait",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-zinc-950 text-zinc-950 px-8 py-4 font-bold tracking-wide uppercase text-sm transition-all hover:bg-zinc-950 hover:text-primary disabled:opacity-70 disabled:cursor-wait",
  compact:
    "inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 text-zinc-950 px-5 py-2.5 font-bold tracking-wide uppercase text-xs transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-70 disabled:cursor-wait",
  ghost:
    "inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-primary transition-colors disabled:opacity-70 disabled:cursor-wait",
};

export function DownloadCatalogueButton({
  variant = "primary",
  label = "Download Full Catalogue",
  options,
  className = "",
}: DownloadCatalogueButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    const toastId = toast.loading("Preparing your catalogue...");
    try {
      await generateCatalogue(options);
      toast.success("Catalogue downloaded", {
        id: toastId,
        description: "Check your downloads folder for the PDF.",
      });
    } catch (err) {
      console.error("Catalogue generation failed", err);
      toast.error("Download failed", {
        id: toastId,
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const Icon = variant === "ghost" ? FileText : Download;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`${styles[variant]} ${className}`}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Icon className="w-4 h-4" />}
      {loading ? "Preparing..." : label}
    </button>
  );
}
