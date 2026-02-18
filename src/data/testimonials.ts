// Testimonial pool for deterministic selection across service pages
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  initial: string;
}

export const testimonialPool: Testimonial[] = [
  {
    quote: "Super club! Een poosje terug contact gekregen met KlikKlaarSEO. Mooie club en maken hun woorden waar. Veel gezien in de markt maar niet voor deze prijs met deze kwaliteit.",
    name: "Ben Commandeur",
    company: "Nieuw Marketing",
    initial: "B",
  },
  {
    quote: "Binnen 3 maanden stonden we op pagina 1 voor onze belangrijkste zoekwoorden. Het team denkt echt mee en je merkt dat ze weten waar ze mee bezig zijn.",
    name: "Lisa van der Berg",
    company: "Schoonheidssalon Glow",
    initial: "L",
  },
  {
    quote: "Eindelijk een SEO-partij die het in normaal Nederlands uitlegt. Geen jargon, gewoon duidelijke rapporten en zichtbaar resultaat.",
    name: "Mark Jansen",
    company: "Jansen Installatietechniek",
    initial: "M",
  },
  {
    quote: "We waren sceptisch over SEO, maar de resultaten spreken voor zich. 40% meer organisch verkeer in het eerste kwartaal.",
    name: "Fatima El-Amrani",
    company: "Tandartspraktijk Centrum",
    initial: "F",
  },
  {
    quote: "Het fijne is dat je er echt niks aan hoeft te doen. Ze regelen alles en je ziet de resultaten gewoon in het dashboard. Aanrader voor drukke ondernemers.",
    name: "Peter de Vries",
    company: "De Vries Bouw",
    initial: "P",
  },
  {
    quote: "Ons Google Mijn Bedrijf profiel is nu top. Meer reviews, meer klikken, meer klanten. Precies wat we nodig hadden.",
    name: "Sandra Bakker",
    company: "Bakker Advocaten",
    initial: "S",
  },
  {
    quote: "Als startende ondernemer had ik geen idee van SEO. KlikKlaarSEO heeft alles opgezet en ik sta nu bovenaan in mijn regio. Fantastisch.",
    name: "Tom Hendriks",
    company: "Hendriks Fysiotherapie",
    initial: "T",
  },
  {
    quote: "De technische audit was een eye-opener. Zoveel problemen die we niet wisten. Nu alles is opgelost, laden onze pagina's 3x sneller.",
    name: "Anne-Marie Kuijpers",
    company: "Webshop Groen & Co",
    initial: "A",
  },
];

// CTA text variants for service pages
export const ctaVariants = [
  { cta: "Vraag een gratis scan aan", sub: "Ontvang binnen 48 uur een rapport met je SEO-kansen" },
  { cta: "Plan een vrijblijvend gesprek", sub: "Bespreek je situatie met een SEO-specialist" },
  { cta: "Ontvang een voorstel op maat", sub: "Binnen 3 werkdagen een concreet plan voor jouw website" },
  { cta: "Bekijk een voorbeeldrapport", sub: "Zie wat je kunt verwachten van onze aanpak" },
];

/** Select a testimonial deterministically based on slug */
export function getTestimonialForSlug(slug: string): Testimonial {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  return testimonialPool[Math.abs(hash) % testimonialPool.length];
}

/** Select CTA variant deterministically based on slug */
export function getCtaForSlug(slug: string): typeof ctaVariants[0] {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 3) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  return ctaVariants[Math.abs(hash) % ctaVariants.length];
}
