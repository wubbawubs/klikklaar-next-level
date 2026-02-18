import { IndustryData } from "./industries";

/**
 * Category-based defaults for industry generation.
 * Each category provides typical painPoints, solutions, and FAQ templates.
 */
type IndustryCategory =
  | "zorg"
  | "juridisch"
  | "beauty"
  | "fitness"
  | "horeca"
  | "retail"
  | "bouw"
  | "auto"
  | "creatief"
  | "zakelijk"
  | "onderwijs"
  | "tech"
  | "overig";

interface IndustryInput {
  slug: string;
  name: string;
  namePlural: string;
  icon: string;
  category: IndustryCategory;
  /** One-liner about why SEO matters for this industry */
  heroSnippet: string;
  /** Primary stat, e.g. "+145%" */
  statValue?: string;
  statLabel?: string;
  /** Optional custom pain points (overrides category defaults) */
  painPoints?: Array<{ icon: string; text: string }>;
  /** Optional custom solutions */
  solutions?: Array<{ title: string; description: string }>;
  /** Optional custom FAQs */
  faqs?: Array<{ question: string; answer: string }>;
  /** Optional testimonial */
  testimonial?: IndustryData["testimonial"];
}

const categoryPainPoints: Record<IndustryCategory, Array<{ icon: string; text: string }>> = {
  zorg: [
    { icon: "Search", text: "Patiënten vinden je concurrenten eerder dan jou" },
    { icon: "Building", text: "Grote ketens domineren de zoekresultaten" },
    { icon: "Star", text: "Goede reputatie maar online onzichtbaar" },
    { icon: "Clock", text: "Geen tijd om aan marketing te besteden" },
  ],
  juridisch: [
    { icon: "Search", text: "Potentiële cliënten vinden je niet via Google" },
    { icon: "TrendingDown", text: "Concurrenten ranken hoger in zoekresultaten" },
    { icon: "Users", text: "Te afhankelijk van doorverwijzingen" },
    { icon: "Target", text: "Moeilijk om je specialisatie online zichtbaar te maken" },
  ],
  beauty: [
    { icon: "Calendar", text: "Te weinig nieuwe klanten via online" },
    { icon: "MapPin", text: "Concurrenten scoren hoger op Google Maps" },
    { icon: "Star", text: "Goede reviews maar toch niet zichtbaar" },
    { icon: "Clock", text: "Geen tijd om aan marketing te besteden" },
  ],
  fitness: [
    { icon: "Users", text: "Concurrentie van grote ketens en franchises" },
    { icon: "Instagram", text: "Eindeloos posten op social media zonder resultaat" },
    { icon: "MapPin", text: "Klanten uit verkeerde regio's" },
    { icon: "Clock", text: "Tijd kwijt aan marketing in plaats van je vak" },
  ],
  horeca: [
    { icon: "Calendar", text: "Te weinig reserveringen via online kanalen" },
    { icon: "MapPin", text: "Concurrenten scoren hoger op Google Maps" },
    { icon: "Star", text: "Goede reviews maar onzichtbaar in Google" },
    { icon: "TrendingDown", text: "Bezorgplatforms domineren de zoekresultaten" },
  ],
  retail: [
    { icon: "ShoppingBag", text: "Online webshops winnen van lokale winkels" },
    { icon: "MapPin", text: "Klanten lopen je zaak voorbij" },
    { icon: "TrendingDown", text: "Minder bezoekers door online concurrentie" },
    { icon: "Clock", text: "Geen tijd voor marketing naast de winkel" },
  ],
  bouw: [
    { icon: "Search", text: "Klanten vinden je concurrenten eerder" },
    { icon: "Globe", text: "Vergelijkingswebsites domineren zoekresultaten" },
    { icon: "DollarSign", text: "Advertenties zijn duur en leveren weinig op" },
    { icon: "Users", text: "Afhankelijk van mond-tot-mondreclame" },
  ],
  auto: [
    { icon: "Search", text: "Klanten kiezen de garage die ze eerst vinden" },
    { icon: "Globe", text: "Platforms zoals Werkspot domineren" },
    { icon: "MapPin", text: "Niet zichtbaar voor klanten in de buurt" },
    { icon: "Clock", text: "Geen tijd voor online marketing" },
  ],
  creatief: [
    { icon: "Eye", text: "Prachtig portfolio maar nauwelijks bezoekers" },
    { icon: "TrendingDown", text: "Concurrenten ranken hoger in Google" },
    { icon: "Users", text: "Te afhankelijk van mond-tot-mondreclame" },
    { icon: "Clock", text: "Geen tijd om zelf aan marketing te werken" },
  ],
  zakelijk: [
    { icon: "Search", text: "Potentiële klanten vinden je niet online" },
    { icon: "DollarSign", text: "Dure advertenties met weinig resultaat" },
    { icon: "Users", text: "Te afhankelijk van netwerk en doorverwijzingen" },
    { icon: "Target", text: "Moeilijk om je niche online te bereiken" },
  ],
  onderwijs: [
    { icon: "TrendingDown", text: "Veel concurrentie van grote aanbieders" },
    { icon: "Search", text: "Online vergelijkingsplatforms domineren" },
    { icon: "DollarSign", text: "Adverteren is duur en levert weinig op" },
    { icon: "Users", text: "Afhankelijk van mond-tot-mondreclame" },
  ],
  tech: [
    { icon: "Search", text: "Potentiële klanten zoeken je niet op naam" },
    { icon: "Globe", text: "Grote platforms domineren de zoekresultaten" },
    { icon: "TrendingDown", text: "Je concurrenten hebben sterkere online aanwezigheid" },
    { icon: "Target", text: "Moeilijk om de juiste doelgroep te bereiken" },
  ],
  overig: [
    { icon: "Search", text: "Klanten vinden je concurrenten eerder" },
    { icon: "TrendingDown", text: "Onzichtbaar in Google zoekresultaten" },
    { icon: "Users", text: "Te afhankelijk van bestaande klanten" },
    { icon: "Clock", text: "Geen tijd of kennis voor online marketing" },
  ],
};

const categorySolutions: Record<IndustryCategory, Array<{ title: string; description: string }>> = {
  zorg: [
    { title: "Lokale zichtbaarheid", description: "Gevonden worden wanneer patiënten zoeken in jouw regio" },
    { title: "Specialisatie uitlichten", description: "Rank voor specifieke behandelingen en expertise" },
    { title: "Online vertrouwen", description: "Professionele online aanwezigheid die vertrouwen wekt" },
  ],
  juridisch: [
    { title: "Expertise tonen", description: "Gevonden worden voor jouw rechtsgebied of specialisatie" },
    { title: "Lokale vindbaarheid", description: "De eerste keuze in jouw regio" },
    { title: "Autoriteit opbouwen", description: "Sterke online positie die vertrouwen uitstraalt" },
  ],
  beauty: [
    { title: "Google Maps dominantie", description: "Bovenaan verschijnen in lokale zoekresultaten" },
    { title: "Review management", description: "Meer positieve reviews die klanten overtuigen" },
    { title: "Behandelingen promoten", description: "Gevonden worden voor specifieke behandelingen" },
  ],
  fitness: [
    { title: "Lokale dominantie", description: "De nummer 1 keuze in jouw regio" },
    { title: "Google Maps zichtbaarheid", description: "Bovenaan in de lokale zoekresultaten" },
    { title: "Aanbod uitlichten", description: "Meer aanmeldingen voor specifieke programma's" },
  ],
  horeca: [
    { title: "Google Maps dominantie", description: "Bovenaan verschijnen wanneer mensen zoeken naar eetgelegenheden" },
    { title: "Review optimalisatie", description: "Meer en betere reviews die gasten overtuigen" },
    { title: "Menu zichtbaarheid", description: "Je specialiteiten vindbaar maken in Google" },
  ],
  retail: [
    { title: "Lokale vindbaarheid", description: "Gevonden worden door klanten in jouw buurt" },
    { title: "Google Maps zichtbaarheid", description: "Bovenaan verschijnen in lokale zoekresultaten" },
    { title: "Online productvindbaarheid", description: "Je assortiment vindbaar maken in Google" },
  ],
  bouw: [
    { title: "Lokale vindbaarheid", description: "Gevonden worden voor '[vak] [jouw stad]'" },
    { title: "Reviews benutten", description: "Positieve ervaringen van klanten zichtbaar maken" },
    { title: "Projecten tonen", description: "Je gerealiseerde projecten vindbaar en zichtbaar maken" },
  ],
  auto: [
    { title: "Lokale vindbaarheid", description: "Gevonden worden door autorijders in de buurt" },
    { title: "Diensten uitlichten", description: "Rank voor specifieke diensten en merken" },
    { title: "Google Maps optimalisatie", description: "Bovenaan in de lokale zoekresultaten" },
  ],
  creatief: [
    { title: "Portfolio vindbaarheid", description: "Je werk wordt gevonden door de juiste opdrachtgevers" },
    { title: "Niche zichtbaarheid", description: "Gevonden worden voor jouw specifieke expertise" },
    { title: "Lokaal én landelijk", description: "Bereik klanten in je regio of heel Nederland" },
  ],
  zakelijk: [
    { title: "Online zichtbaarheid", description: "Gevonden worden door potentiële klanten" },
    { title: "Expertise positionering", description: "Jouw kennis en ervaring zichtbaar in zoekresultaten" },
    { title: "Lead generatie", description: "Meer kwalitatieve aanvragen via je website" },
  ],
  onderwijs: [
    { title: "Lokale vindbaarheid", description: "Gevonden worden door leerlingen in jouw regio" },
    { title: "Cursusaanbod promoten", description: "Specifieke cursussen en lessen vindbaar maken" },
    { title: "Reviews benutten", description: "Positieve ervaringen van studenten zichtbaar maken" },
  ],
  tech: [
    { title: "Online autoriteit", description: "Gevonden worden als expert in jouw vakgebied" },
    { title: "Service zichtbaarheid", description: "Je diensten vindbaar maken voor de juiste doelgroep" },
    { title: "Lead generatie", description: "Kwalitatieve aanvragen via organisch zoekverkeer" },
  ],
  overig: [
    { title: "Lokale vindbaarheid", description: "Gevonden worden door klanten in jouw omgeving" },
    { title: "Google Maps optimalisatie", description: "Zichtbaar worden in lokale zoekresultaten" },
    { title: "Online reputatie", description: "Vertrouwen opbouwen met een sterke online aanwezigheid" },
  ],
};

const categoryFaqTemplates: Record<IndustryCategory, (name: string, namePlural: string) => Array<{ question: string; answer: string }>> = {
  zorg: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Absoluut. Steeds meer patiënten zoeken online naar een ${name.toLowerCase()}. Met goede SEO word je gevonden wanneer ze zoeken in jouw regio.` },
    { question: `Hoe lang duurt het voordat ik resultaten zie?`, answer: `De eerste verbeteringen zie je vaak binnen 4-6 weken. Binnen 3 maanden kun je significant meer organisch verkeer verwachten.` },
    { question: `Moet ik zelf content schrijven?`, answer: `Nee, wij doen alles. Van technische optimalisatie tot content verbeteringen. Jij focust op je patiënten, wij zorgen dat je gevonden wordt.` },
    { question: `Is er een langlopend contract?`, answer: `Nee, je kunt maandelijks opzeggen. We geloven dat resultaten voor zich spreken.` },
  ],
  juridisch: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, veel mensen zoeken online naar een ${name.toLowerCase()}. Met goede SEO word je gevonden voor jouw rechtsgebied en regio.` },
    { question: `Hoe lang duurt het voordat ik resultaten zie?`, answer: `De eerste verbeteringen in rankings zie je vaak binnen 4-6 weken. Nieuwe cliënten volgen meestal binnen 2-3 maanden.` },
    { question: `Moet ik zelf content schrijven?`, answer: `Nee, wij zorgen voor alles. Van technische SEO tot content optimalisatie. Jij focust op je cliënten.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten.` },
  ],
  beauty: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Absoluut. Veel mensen zoeken online naar een ${name.toLowerCase()} in hun buurt. Met SEO word je de eerste keuze.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `De eerste verbeteringen in rankings zie je vaak binnen 4-6 weken. Meer boekingen volgen meestal binnen 2-3 maanden.` },
    { question: `Kan ik specifieke behandelingen promoten?`, answer: `Ja, we optimaliseren voor de behandelingen waar je op wilt focussen. Zo trek je precies de juiste klanten aan.` },
    { question: `Is er een langlopend contract?`, answer: `Nee, maandelijks opzegbaar. Resultaten spreken voor zich.` },
  ],
  fitness: (name, namePlural) => [
    { question: `Ik heb al social media, waarom SEO?`, answer: `Social media is branding, SEO bereikt mensen die actief zoeken naar een ${name.toLowerCase()}. Dit zijn de meest gemotiveerde potentiële klanten.` },
    { question: `Hoe snel kan ik nieuwe leden verwachten?`, answer: `De eerste verbetering in rankings zie je vaak binnen 4-6 weken. Nieuwe aanmeldingen volgen meestal binnen 2-3 maanden.` },
    { question: `Werkt dit ook voor online diensten?`, answer: `Ja, we optimaliseren voor zowel lokale als landelijke zoektermen.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar.` },
  ],
  horeca: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, veel gasten kiezen hun ${name.toLowerCase()} via Google. Met SEO word je bovenaan gevonden.` },
    { question: `Hoe snel zie ik meer reserveringen?`, answer: `Eerste verbeteringen in Google binnen 4-6 weken. Meer gasten binnen 2-3 maanden.` },
    { question: `Werkt dit naast mijn vermelding op platforms?`, answer: `Ja, SEO maakt je onafhankelijker van platforms. Je krijgt directe reserveringen via je eigen website.` },
    { question: `Is er een contract?`, answer: `Nee, maandelijks opzegbaar. Geen verborgen kosten.` },
  ],
  retail: (name, namePlural) => [
    { question: `Werkt SEO voor lokale ${namePlural.toLowerCase()}?`, answer: `Absoluut. Veel klanten zoeken online voordat ze naar een winkel gaan. Met lokale SEO word je gevonden.` },
    { question: `Hoe concurreer ik met grote webshops?`, answer: `Door lokaal te domineren. Mensen zoeken naar '${name.toLowerCase()} bij mij in de buurt' en dan wil je bovenaan staan.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Merkbaar meer klanten binnen 2-3 maanden.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar.` },
  ],
  bouw: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, de meeste huiseigenaren zoeken online naar een ${name.toLowerCase()}. Met goede SEO word je de eerste keuze.` },
    { question: `Hoe concurreer ik met platforms als Werkspot?`, answer: `SEO geeft je directe klanten zonder commissie. Mensen zoeken ook direct naar '${name.toLowerCase()} [stad]'.` },
    { question: `Hoe snel krijg ik meer offerteaanvragen?`, answer: `Eerste rankings verbeteren binnen 4-6 weken. Meer aanvragen binnen 2-3 maanden.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, maandelijks opzegbaar zonder verborgen kosten.` },
  ],
  auto: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, de meeste autorijders zoeken online naar een ${name.toLowerCase()} in de buurt. Met SEO word je gevonden.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen in rankings binnen 4-6 weken. Meer klanten binnen 2-3 maanden.` },
    { question: `Kan ik specifieke diensten promoten?`, answer: `Ja, we optimaliseren voor de diensten waar je op wilt focussen.` },
    { question: `Is er een contract?`, answer: `Nee, maandelijks opzegbaar.` },
  ],
  creatief: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Absoluut. Veel opdrachtgevers zoeken online. Met SEO word je gevonden door de juiste klanten.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer opdrachten binnen 2-3 maanden.` },
    { question: `Kan ik mijn portfolio laten optimaliseren?`, answer: `Ja, we optimaliseren je portfolio zodat het beter vindbaar wordt in Google.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar.` },
  ],
  zakelijk: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, veel bedrijven zoeken online naar een ${name.toLowerCase()}. Met SEO word je gevonden door de juiste klanten.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer aanvragen binnen 2-3 maanden.` },
    { question: `Werkt dit voor B2B?`, answer: `Ja, B2B-klanten zoeken ook via Google. We optimaliseren voor de zoektermen die jouw doelgroep gebruikt.` },
    { question: `Is er een langlopend contract?`, answer: `Nee, maandelijks opzegbaar. Geen verborgen kosten.` },
  ],
  onderwijs: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, de meeste mensen zoeken online naar een ${name.toLowerCase()}. Met SEO word je de eerste keuze.` },
    { question: `Hoe concurreer ik met grote aanbieders?`, answer: `Door lokaal te domineren en je unieke aanbod uit te lichten. Veel leerlingen zoeken juist persoonlijk onderwijs.` },
    { question: `Hoe snel zie ik meer aanmeldingen?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer aanmeldingen binnen 2-3 maanden.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar.` },
  ],
  tech: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, potentiële klanten zoeken online naar ${namePlural.toLowerCase()}. Met SEO word je gevonden als expert.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer leads binnen 2-3 maanden.` },
    { question: `Werkt dit voor B2B?`, answer: `Absoluut, B2B-beslissers beginnen hun zoektocht ook in Google. We optimaliseren voor de juiste zoektermen.` },
    { question: `Is er een contract?`, answer: `Nee, maandelijks opzegbaar.` },
  ],
  overig: (name, namePlural) => [
    { question: `Werkt SEO voor ${namePlural.toLowerCase()}?`, answer: `Ja, steeds meer klanten zoeken online naar een ${name.toLowerCase()}. Met goede SEO word je gevonden.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen in rankings binnen 4-6 weken. Meer klanten binnen 2-3 maanden.` },
    { question: `Moet ik zelf iets doen?`, answer: `Nee, wij regelen alles. Van technische optimalisatie tot content verbeteringen.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten.` },
  ],
};

const defaultStatPairs: Record<IndustryCategory, [string, string]> = {
  zorg: ["+89%", "Meer patiënten via Google"],
  juridisch: ["+112%", "Meer website bezoekers"],
  beauty: ["+134%", "Meer boekingen via Google"],
  fitness: ["+156%", "Meer aanmeldingen"],
  horeca: ["+92%", "Meer reserveringen via Google"],
  retail: ["+78%", "Meer winkelbezoek via Google"],
  bouw: ["+145%", "Meer offerteaanvragen"],
  auto: ["+98%", "Meer klanten via Google"],
  creatief: ["+118%", "Meer opdrachten via Google"],
  zakelijk: ["+123%", "Meer kwalitatieve leads"],
  onderwijs: ["+105%", "Meer aanmeldingen"],
  tech: ["+134%", "Meer leads via Google"],
  overig: ["+89%", "Meer klanten via Google"],
};

export function createIndustry(input: IndustryInput): IndustryData {
  const cat = input.category;
  const defaultStat = defaultStatPairs[cat];

  return {
    slug: input.slug,
    name: input.name,
    namePlural: input.namePlural,
    icon: input.icon,
    headline: `SEO voor ${input.namePlural}`,
    subheadline: input.heroSnippet,
    heroDescription: `Als ${input.name.toLowerCase()} is online zichtbaarheid essentieel. ${input.heroSnippet} Met automatische SEO van KlikKlaarSEO word je gevonden door klanten die actief zoeken.`,
    painPoints: input.painPoints || categoryPainPoints[cat],
    solutions: input.solutions || categorySolutions[cat],
    stats: [
      { value: input.statValue || defaultStat[0], label: input.statLabel || defaultStat[1] },
      { value: "Top 5", label: "Google ranking" },
    ],
    testimonial: input.testimonial,
    faqs: input.faqs || categoryFaqTemplates[cat](input.name, input.namePlural),
    keywords: {
      primary: `SEO ${input.name.toLowerCase()}`,
      secondary: [
        `${input.name.toLowerCase()} marketing`,
        `${input.name.toLowerCase()} vindbaarheid`,
        `${input.namePlural.toLowerCase()} SEO`,
      ],
    },
    metaTitle: `SEO voor ${input.namePlural} | Meer Klanten | KlikKlaarSEO`,
    metaDescription: `Automatische SEO voor ${input.namePlural.toLowerCase()}. ${input.heroSnippet} Vanaf €99/mnd, altijd opzegbaar.`,
  };
}

export type { IndustryInput, IndustryCategory };
