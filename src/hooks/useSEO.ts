import { useEffect } from "react";

const SITE = "https://alrazzaqenterprises.com";
const OG_IMAGE = `${SITE}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function useSEO({ title, description, path = "/", ogImage = OG_IMAGE }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("AL Razzaq") ? title : `${title} | AL Razzaq Enterprises`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    const canonical = `${SITE}${path}`;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
    setMeta('link[rel="canonical"]', "href", canonical);
  }, [title, description, path, ogImage]);
}
