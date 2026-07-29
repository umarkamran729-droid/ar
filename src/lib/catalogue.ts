import { jsPDF } from "jspdf";
import { products } from "@/data/products";
import logoUrl from "@/assets/logo-mark.png";

const NAVY: [number, number, number] = [16, 31, 64];
const BRASS: [number, number, number] = [196, 130, 24];
const CREAM: [number, number, number] = [248, 243, 233];
const TEXT: [number, number, number] = [40, 50, 70];
const MUTED: [number, number, number] = [120, 130, 150];

async function imageToDataUrl(url: string): Promise<{ data: string; w: number; h: number }> {
  const res = await fetch(url);
  const blob = await res.blob();
  const dataUrl: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
  const dims = await new Promise<{ w: number; h: number }>((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 1, h: 1 });
    img.src = dataUrl;
  });
  return { data: dataUrl, w: dims.w, h: dims.h };
}

function drawHeaderFooter(doc: jsPDF, pageW: number, pageH: number, pageNum: number, totalPages: number) {
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.4);
  doc.line(15, 15, pageW - 15, 15);
  doc.setFontSize(8);
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.text("AL RAZZAQ ENTERPRISES", 15, 12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...MUTED);
  doc.text("Industrial Machinery Catalogue 2026", pageW - 15, 12, { align: "right" });

  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.4);
  doc.line(15, pageH - 15, pageW - 15, pageH - 15);
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text("info@alrazzaqenterprises.com  ·  +92 300 0000000  ·  Emmen, NL  ·  Lahore, PK", 15, pageH - 10);
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.text(`${pageNum} / ${totalPages}`, pageW - 15, pageH - 10, { align: "right" });
}

function drawCover(doc: jsPDF, pageW: number, pageH: number, logo: { data: string; w: number; h: number }, subtitle: string) {
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageW, pageH, "F");

  doc.setFillColor(...BRASS);
  doc.rect(0, pageH - 60, pageW, 4, "F");

  const logoH = 55;
  const logoW = (logo.w / logo.h) * logoH;
  doc.setFillColor(255, 255, 255);
  const padding = 10;
  doc.roundedRect(pageW / 2 - logoW / 2 - padding, 50 - padding, logoW + padding * 2, logoH + padding * 2, 4, 4, "F");
  doc.addImage(logo.data, "PNG", pageW / 2 - logoW / 2, 50, logoW, logoH);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("AL RAZZAQ ENTERPRISES", pageW / 2, 145, { align: "center" });

  doc.setDrawColor(...BRASS);
  doc.setLineWidth(0.6);
  doc.line(pageW / 2 - 15, 150, pageW / 2 + 15, 150);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(38);
  doc.text("Industrial", pageW / 2, 175, { align: "center" });
  doc.text("Machinery", pageW / 2, 192, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(...BRASS);
  doc.text(subtitle, pageW / 2, 215, { align: "center" });

  doc.setTextColor(220, 225, 235);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Premium machinery supply & exports for global industry.", pageW / 2, 235, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(180, 190, 210);
  doc.text("EDITION 2026", pageW / 2, pageH - 30, { align: "center" });
}

function drawProductCard(
  doc: jsPDF,
  pageW: number,
  x: number,
  y: number,
  product: { name: string; description: string; id: string },
  index: number,
  productImage: { data: string; w: number; h: number } | null,
) {
  const cardW = pageW - 30;
  const cardH = 95;

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(220, 225, 235);
  doc.setLineWidth(0.3);
  doc.roundedRect(x, y, cardW, cardH, 3, 3, "FD");

  const imgW = 80;
  const imgH = cardH;
  if (productImage) {
    try {
      doc.addImage(productImage.data, "JPEG", x, y, imgW, imgH, undefined, "FAST");
    } catch {
      doc.setFillColor(...CREAM);
      doc.rect(x, y, imgW, imgH, "F");
    }
  } else {
    doc.setFillColor(...CREAM);
    doc.rect(x, y, imgW, imgH, "F");
  }

  doc.setFillColor(...NAVY);
  doc.rect(x + imgW, y, 1, cardH, "F");

  const textX = x + imgW + 8;
  const textW = cardW - imgW - 16;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...BRASS);
  doc.text(`CATEGORY ${String(index + 1).padStart(2, "0")}`, textX, y + 12);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...NAVY);
  doc.text(product.name, textX, y + 24);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...TEXT);
  const descLines = doc.splitTextToSize(product.description, textW);
  doc.text(descLines, textX, y + 36);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...NAVY);
  doc.text("PRODUCT REF:", textX, y + cardH - 14);
  doc.setFont("courier", "normal");
  doc.setTextColor(...TEXT);
  doc.text(product.id.toUpperCase().replace(/-/g, " · "), textX + 26, y + cardH - 14);

  doc.setFillColor(...BRASS);
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  const ctaText = "REQUEST QUOTE  →";
  const ctaW = doc.getTextWidth(ctaText) + 8;
  doc.roundedRect(textX, y + cardH - 8, ctaW, 6, 2, 2, "F");
  doc.text(ctaText, textX + 4, y + cardH - 4);
}

function drawIntroSection(doc: jsPDF, pageW: number, pageH: number) {
  doc.setFillColor(...CREAM);
  doc.rect(0, 0, pageW, pageH, "F");

  doc.setFontSize(8);
  doc.setTextColor(...BRASS);
  doc.setFont("helvetica", "bold");
  doc.text("ABOUT US", 20, 35);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...NAVY);
  doc.text("Built on Industrial", 20, 55);
  doc.text("Expertise.", 20, 70);

  doc.setDrawColor(...BRASS);
  doc.setLineWidth(1.5);
  doc.line(20, 76, 60, 76);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...TEXT);
  const intro =
    "AL Razzaq Enterprises is a dual-base industrial machinery supplier and exporter, headquartered in Rotterdam, Netherlands and Karachi, Pakistan. From our European office we source, audit, and certify equipment from leading OEMs. From our regional operations base we handle shipping, installation, training, and spare-parts support — giving you European engineering quality with one accountable partner end-to-end.";
  const introLines = doc.splitTextToSize(intro, pageW - 40);
  doc.text(introLines, 20, 90);

  const stats = [
    { label: "Years of Industrial Experience", value: "20+" },
    { label: "Machinery Categories", value: "10+" },
    { label: "Customer Support", value: "24/7" },
  ];
  let sx = 20;
  const sw = (pageW - 40) / 4;
  stats.forEach((s) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(...BRASS);
    doc.text(s.value, sx, 130);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...NAVY);
    const lblLines = doc.splitTextToSize(s.label.toUpperCase(), sw - 5);
    doc.text(lblLines, sx, 138);
    sx += sw;
  });

  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.4);
  doc.line(20, 160, pageW - 20, 160);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...NAVY);
  doc.text("In This Catalogue", 20, 175);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...TEXT);
  let ty = 188;
  products.forEach((p, i) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...BRASS);
    doc.text(String(i + 1).padStart(2, "0"), 20, ty);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...NAVY);
    doc.text(p.name, 30, ty);
    doc.setTextColor(...MUTED);
    doc.text(`p. ${i + 4}`, pageW - 20, ty, { align: "right" });
    ty += 7;
  });
}

export type CatalogueOptions = {
  subtitle?: string;
  filter?: (productId: string) => boolean;
  filename?: string;
};

export async function generateCatalogue(options: CatalogueOptions = {}) {
  const subtitle = options.subtitle ?? "Full Product Catalogue";
  const filename = options.filename ?? "AL-Razzaq-Catalogue-2026.pdf";

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  const items = products.filter((p) => (options.filter ? options.filter(p.id) : true));

  const logo = await imageToDataUrl(logoUrl);
  const productImages = await Promise.all(items.map((p) => imageToDataUrl(p.image).catch(() => null)));

  drawCover(doc, pageW, pageH, logo, subtitle);

  if (!options.filter) {
    doc.addPage();
    drawIntroSection(doc, pageW, pageH);
  }

  let y = 25;
  items.forEach((product, idx) => {
    if (y > pageH - 110) {
      doc.addPage();
      y = 25;
    }
    drawProductCard(doc, pageW, 15, y, product, idx, productImages[idx]);
    y += 105;
  });

  const totalPages = doc.getNumberOfPages();
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i);
    drawHeaderFooter(doc, pageW, pageH, i, totalPages);
  }

  doc.save(filename);
}
