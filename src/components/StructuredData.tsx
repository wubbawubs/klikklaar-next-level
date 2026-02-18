import { useEffect } from "react";
import { SITE_URL } from "@/lib/site-config";

interface LocalBusinessSchema {
  type: "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface ServiceSchema {
  type: "Service";
  name: string;
  description: string;
  provider: string;
  areaServed?: string | string[];
  serviceType?: string;
}

interface OrganizationSchema {
  type: "Organization";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

interface FAQSchema {
  type: "FAQPage";
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface WebPageSchema {
  type: "WebPage";
  name: string;
  description: string;
  url: string;
}

interface BreadcrumbSchema {
  type: "BreadcrumbList";
  items: Array<{
    name: string;
    url: string;
  }>;
}

interface HowToSchema {
  type: "HowTo";
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
}

interface ArticleSchema {
  type: "Article";
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  image?: string;
}

interface SpeakableSchema {
  type: "Speakable";
  name: string;
  url: string;
  cssSelectors: string[];
}

type SchemaType = LocalBusinessSchema | ServiceSchema | FAQSchema | WebPageSchema | BreadcrumbSchema | OrganizationSchema | HowToSchema | ArticleSchema | SpeakableSchema;

interface StructuredDataProps {
  schema: SchemaType | SchemaType[];
}

function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: data.address ? {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    } : undefined,
    priceRange: data.priceRange,
    aggregateRating: data.aggregateRating ? {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: data.aggregateRating.reviewCount,
    } : undefined,
  };
}

function generateServiceSchema(data: ServiceSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    areaServed: data.areaServed,
  };
}

function generateFAQSchema(data: FAQSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function generateWebPageSchema(data: WebPageSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    description: data.description,
    url: data.url,
  };
}

function generateBreadcrumbSchema(data: BreadcrumbSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: data.address ? {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    } : undefined,
    sameAs: data.sameAs,
  };
}

function generateHowToSchema(data: HowToSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    step: data.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

function generateArticleSchema(data: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: data.author ? {
      "@type": "Organization",
      name: data.author,
    } : undefined,
    publisher: data.publisher ? {
      "@type": "Organization",
      name: data.publisher,
    } : undefined,
    image: data.image,
    inLanguage: "nl",
  };
}

function generateSpeakableSchema(data: SpeakableSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    url: data.url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: data.cssSelectors,
    },
  };
}

function generateSchema(schema: SchemaType) {
  switch (schema.type) {
    case "LocalBusiness":
      return generateLocalBusinessSchema(schema);
    case "Service":
      return generateServiceSchema(schema);
    case "FAQPage":
      return generateFAQSchema(schema);
    case "WebPage":
      return generateWebPageSchema(schema);
    case "BreadcrumbList":
      return generateBreadcrumbSchema(schema);
    case "Organization":
      return generateOrganizationSchema(schema);
    case "HowTo":
      return generateHowToSchema(schema);
    case "Article":
      return generateArticleSchema(schema);
    case "Speakable":
      return generateSpeakableSchema(schema);
    default:
      return null;
  }
}

export function StructuredData({ schema }: StructuredDataProps) {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    const scriptIds: string[] = [];

    schemas.forEach((s, index) => {
      const scriptId = `structured-data-${s.type}-${index}`;
      scriptIds.push(scriptId);

      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(generateSchema(s));
      document.head.appendChild(script);
    });

    return () => {
      scriptIds.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [schema]);

  return null;
}

// Pre-configured schema for KlikKlaarSEO - ONLY use on pages with real physical presence
export const klikklaarBusinessSchema: LocalBusinessSchema = {
  type: "LocalBusiness",
  name: "KlikKlaarSEO",
  description: "Automatische SEO en website optimalisatie voor ondernemers. Meer klanten, zonder gedoe.",
  url: SITE_URL,
  telephone: "+31628354333",
  email: "Info@klikklaarseo.nl",
  address: {
    streetAddress: "Olieslagerspoort 1",
    addressLocality: "Enkhuizen",
    postalCode: "1601AW",
    addressCountry: "NL",
  },
  priceRange: "€€",
  aggregateRating: {
    ratingValue: 4.2,
    reviewCount: 150,
  },
};

// Organization schema for use on service/location pages (NOT LocalBusiness)
export const klikklaarOrganizationSchema: OrganizationSchema = {
  type: "Organization",
  name: "KlikKlaarSEO",
  description: "Automatische SEO voor ondernemers in heel Nederland. Meer klanten, zonder gedoe.",
  url: SITE_URL,
  telephone: "+31628354333",
  email: "Info@klikklaarseo.nl",
  address: {
    streetAddress: "Olieslagerspoort 1",
    addressLocality: "Enkhuizen",
    postalCode: "1601AW",
    addressCountry: "NL",
  },
  sameAs: [
    "https://www.trustpilot.com/review/klikklaarseo.nl"
  ]
};
