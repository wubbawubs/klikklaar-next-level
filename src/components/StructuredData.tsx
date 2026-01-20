import { useEffect } from "react";

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

type SchemaType = LocalBusinessSchema | ServiceSchema | FAQSchema | WebPageSchema | BreadcrumbSchema | OrganizationSchema;

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

      // Remove existing script if present
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(generateSchema(s));
      document.head.appendChild(script);
    });

    // Cleanup on unmount
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

// Pre-configured schema for KlikKlaar - ONLY use on pages with real physical presence
export const klikklaarBusinessSchema: LocalBusinessSchema = {
  type: "LocalBusiness",
  name: "KlikKlaarSEO",
  description: "Automatische SEO en website optimalisatie voor lokale ondernemers. Meer klanten, zonder gedoe.",
  url: "https://klikklaar.nl",
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
  description: "Automatische SEO voor lokale ondernemers in heel Nederland. Meer klanten, zonder gedoe.",
  url: "https://klikklaar.nl",
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
