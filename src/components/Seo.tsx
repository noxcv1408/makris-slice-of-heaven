import { useEffect } from "react";
import { createStructuredData, siteData } from "@/data/siteData";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  includeStructuredData?: boolean;
};

export default function Seo({
  title,
  description,
  path = "/",
  includeStructuredData = false,
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = new URL(path, siteData.siteUrl).href;
    const pageImage = new URL("/makris-logo.jpg", siteData.siteUrl).href;

    const setMeta = (selector: string, attr: "content" | "href", value: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr, value);
      }
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", pageImage);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", pageImage);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('link[rel="icon"]', "href", pageImage);

    const script = document.getElementById("restaurant-schema");
    if (script) {
      script.textContent = includeStructuredData ? JSON.stringify(createStructuredData()) : "";
    }
  }, [description, includeStructuredData, path, title]);

  return null;
}
