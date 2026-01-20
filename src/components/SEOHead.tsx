import { useEffect } from "react";

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

const DEFAULT_OG_IMAGE = "https://klikklaar.nl/og-image.png";
const DEFAULT_SITE_NAME = "KlikKlaarSEO";
const DEFAULT_LOCALE = "nl_NL";

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  robots = "index,follow",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  ogSiteName = DEFAULT_SITE_NAME,
  ogLocale = DEFAULT_LOCALE,
  twitterCard = "summary_large_image"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
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

    // Standard meta tags
    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[name="robots"]', robots);

    // Open Graph meta tags (required: og:title, og:type, og:image, og:url)
    setMetaTag('meta[property="og:title"]', title, true);
    setMetaTag('meta[property="og:description"]', description, true);
    setMetaTag('meta[property="og:type"]', ogType, true);
    setMetaTag('meta[property="og:image"]', ogImage, true);
    setMetaTag('meta[property="og:site_name"]', ogSiteName, true);
    setMetaTag('meta[property="og:locale"]', ogLocale, true);
    
    if (canonical) {
      setMetaTag('meta[property="og:url"]', canonical, true);
    }

    // Twitter Card meta tags
    setMetaTag('meta[name="twitter:card"]', twitterCard);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', ogImage);
    if (canonical) {
      setMetaTag('meta[name="twitter:url"]', canonical);
    }

    // Update or create canonical link
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
