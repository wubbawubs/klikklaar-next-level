import { useEffect } from "react";
import { SITE_URL, SITE_NAME, SITE_LOCALE, DEFAULT_OG_IMAGE } from "@/lib/site-config";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: "index,follow" | "noindex,follow" | "noindex,nofollow";
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  ogSiteName?: string;
  ogLocale?: string;
  twitterCard?: "summary" | "summary_large_image";
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  robots = "index,follow",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  ogSiteName = SITE_NAME,
  ogLocale = SITE_LOCALE,
  twitterCard = "summary_large_image"
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (selector: string, content: string, isProperty = false) => {
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        if (isProperty) {
          tag.setAttribute("property", selector.replace('meta[property="', '').replace('"]', ''));
        } else {
          tag.setAttribute("name", selector.replace('meta[name="', '').replace('"]', ''));
        }
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[name="robots"]', robots);

    setMetaTag('meta[property="og:title"]', title, true);
    setMetaTag('meta[property="og:description"]', description, true);
    setMetaTag('meta[property="og:type"]', ogType, true);
    setMetaTag('meta[property="og:image"]', ogImage, true);
    setMetaTag('meta[property="og:site_name"]', ogSiteName, true);
    setMetaTag('meta[property="og:locale"]', ogLocale, true);
    
    if (canonical) {
      setMetaTag('meta[property="og:url"]', canonical, true);
    }

    setMetaTag('meta[name="twitter:card"]', twitterCard);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', ogImage);
    if (canonical) {
      setMetaTag('meta[name="twitter:url"]', canonical);
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonical);
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        canonicalLink.setAttribute("href", canonical);
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, canonical, robots, ogImage, ogType, ogSiteName, ogLocale, twitterCard]);

  return null;
}
