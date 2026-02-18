export type PillarSlug = "lokale-seo" | "technische-seo" | "content-optimalisatie" | "linkbuilding" | "keyword-research" | "analytics-en-data" | "seo-strategie" | "mobile-seo" | "internationale-seo" | "ai-en-seo" | "e-commerce-seo" | "video-en-visual-seo" | "seo-voor-starters" | "concurrentie-analyse";
export type ServiceSlug = "lokale-seo" | "google-mijn-bedrijf-optimalisatie" | "technische-seo" | "ai-seo" | "geo-seo" | "seo-content-optimalisatie" | "seo-voor-mkb" | "automatische-seo";

export interface ToolData {
  slug: string;
  name: string;
  icon: string;
  category: ToolCategory;
  shortDescription: string;
  headline: string;
  subheadline: string;
  whatItDoes: string;
  benefits: Array<{ title: string; description: string }>;
  howToUse: string[];
  faqs: Array<{ question: string; answer: string }>;
  // Unique per-tool content (SEO quality gate)
  uniqueIntro?: string;
  whatThisToolChecks?: string[];
  howToInterpret?: string[];
  commonIssuesAndFixes?: string[];
  uniqueFaqs?: Array<{ question: string; answer: string }>;
  // Direct cross-link relations (prevents mapping drift)
  relatedPillars?: PillarSlug[];
  relatedServices?: ServiceSlug[];
}

export type ToolCategory =
  | "analyse"
  | "technisch"
  | "content"
  | "linkbuilding"
  | "lokaal"
  | "monitoring"
  | "snelheid"
  | "structured-data"
  | "keyword"
  | "concurrentie";

interface ToolInput {
  slug: string;
  name: string;
  icon: string;
  category: ToolCategory;
  short: string;
  what: string;
  steps: string[];
  // Optional unique content
  uniqueIntro?: string;
  whatThisToolChecks?: string[];
  howToInterpret?: string[];
  commonIssuesAndFixes?: string[];
  uniqueFaqs?: Array<{ question: string; answer: string }>;
  relatedPillars?: PillarSlug[];
  relatedServices?: ServiceSlug[];
}

const categoryBenefits: Record<ToolCategory, (name: string) => Array<{ title: string; description: string }>> = {
  analyse: (n) => [
    { title: "Direct inzicht", description: `Zie in seconden hoe je website scoort met de ${n}` },
    { title: "Concrete verbeterpunten", description: "Krijg een lijst met actiepunten die je direct kunt toepassen" },
    { title: "Gratis en zonder registratie", description: "Geen account nodig, resultaten direct beschikbaar" },
  ],
  technisch: (n) => [
    { title: "Technische fouten opsporen", description: `De ${n} vindt problemen die je zelf niet ziet` },
    { title: "Google-proof", description: "Zorg dat je website voldoet aan technische SEO-eisen" },
    { title: "Gratis te gebruiken", description: "Geen kosten, geen account vereist" },
  ],
  content: (n) => [
    { title: "Content verbeteren", description: `Optimaliseer je teksten met de ${n}` },
    { title: "Hoger ranken", description: "Betere content betekent hogere Google posities" },
    { title: "Gratis beschikbaar", description: "Direct gebruiken zonder kosten" },
  ],
  linkbuilding: (n) => [
    { title: "Linkprofiel analyseren", description: `Bekijk je backlinks met de ${n}` },
    { title: "Kansen ontdekken", description: "Vind nieuwe mogelijkheden voor linkbuilding" },
    { title: "Gratis te gebruiken", description: "Geen kosten, direct resultaat" },
  ],
  lokaal: (n) => [
    { title: "Lokale zichtbaarheid", description: `Verbeter je lokale SEO met de ${n}` },
    { title: "Google Maps optimalisatie", description: "Scoor hoger in lokale zoekresultaten" },
    { title: "Gratis en snel", description: "Direct inzicht zonder kosten" },
  ],
  monitoring: (n) => [
    { title: "Prestaties volgen", description: `Monitor je SEO-resultaten met de ${n}` },
    { title: "Trends herkennen", description: "Zie hoe je rankings zich ontwikkelen" },
    { title: "Gratis beschikbaar", description: "Geen abonnement nodig" },
  ],
  snelheid: (n) => [
    { title: "Snelheid meten", description: `Test je website snelheid met de ${n}` },
    { title: "Core Web Vitals", description: "Controleer of je voldoet aan Google's snelheidseisen" },
    { title: "Gratis te gebruiken", description: "Direct resultaat zonder kosten" },
  ],
  "structured-data": (n) => [
    { title: "Rich snippets", description: `Valideer je structured data met de ${n}` },
    { title: "Betere CTR", description: "Rich snippets zorgen voor meer klikken in Google" },
    { title: "Gratis en snel", description: "Direct feedback op je markup" },
  ],
  keyword: (n) => [
    { title: "Zoekwoorden vinden", description: `Ontdek relevante zoekwoorden met de ${n}` },
    { title: "Zoekvolume inzicht", description: "Weet hoeveel mensen zoeken op jouw termen" },
    { title: "Gratis te gebruiken", description: "Geen account of betaling nodig" },
  ],
  concurrentie: (n) => [
    { title: "Concurrenten analyseren", description: `Bekijk wat je concurrenten doen met de ${n}` },
    { title: "Strategisch voordeel", description: "Leer van de sterke punten van je concurrenten" },
    { title: "Gratis beschikbaar", description: "Direct inzicht zonder kosten" },
  ],
};

const categoryFaqs: Record<ToolCategory, (name: string) => Array<{ question: string; answer: string }>> = {
  analyse: (n) => [
    { question: `Is de ${n} echt gratis?`, answer: `Ja, de ${n} is volledig gratis te gebruiken. Geen account, geen verborgen kosten.` },
    { question: `Hoe betrouwbaar zijn de resultaten?`, answer: `De tool analyseert je website op basis van dezelfde criteria die Google gebruikt. De resultaten geven een betrouwbaar beeld van je SEO-status.` },
    { question: `Hoe vaak moet ik mijn website checken?`, answer: `We raden aan om maandelijks een check te doen, of na elke grote wijziging aan je website.` },
    { question: `Kan KlikKlaarSEO de gevonden problemen oplossen?`, answer: `Ja, wij lossen alle SEO-problemen voor je op. Vanaf €99/mnd, altijd opzegbaar.` },
  ],
  technisch: (n) => [
    { question: `Wat controleert de ${n}?`, answer: `De tool controleert technische SEO-aspecten zoals indexatie, crawlbaarheid, meta tags, en meer.` },
    { question: `Is technische kennis nodig?`, answer: `Nee, de resultaten worden in begrijpelijke taal uitgelegd met concrete actiepunten.` },
    { question: `Hoe snel krijg ik resultaten?`, answer: `De meeste checks zijn binnen enkele seconden klaar.` },
    { question: `Kan ik de problemen zelf oplossen?`, answer: `Sommige wel, maar voor complexere issues kun je KlikKlaarSEO inschakelen. Vanaf €99/mnd.` },
  ],
  content: (n) => [
    { question: `Hoe werkt de ${n}?`, answer: `De tool analyseert je content op SEO-criteria zoals zoekwoordgebruik, leesbaarheid en structuur.` },
    { question: `Voor welk type content werkt dit?`, answer: `Voor alle soorten: blogposts, productpagina's, landingspagina's en meer.` },
    { question: `Hoe vaak moet ik mijn content checken?`, answer: `Check bij elke nieuwe publicatie en optimaliseer bestaande content elk kwartaal.` },
    { question: `Helpt KlikKlaarSEO met content optimalisatie?`, answer: `Ja, content optimalisatie is onderdeel van ons SEO-pakket. Vanaf €99/mnd.` },
  ],
  linkbuilding: (n) => [
    { question: `Wat laat de ${n} zien?`, answer: `De tool toont je backlinks, hun kwaliteit en mogelijkheden voor nieuwe links.` },
    { question: `Zijn backlinks nog belangrijk?`, answer: `Ja, backlinks zijn nog steeds een van de belangrijkste rankingfactoren in Google.` },
    { question: `Hoe krijg ik meer backlinks?`, answer: `Door waardevolle content te maken en actief te werken aan linkbuilding. KlikKlaarSEO helpt hierbij.` },
    { question: `Is de tool gratis?`, answer: `Ja, volledig gratis te gebruiken.` },
  ],
  lokaal: (n) => [
    { question: `Werkt de ${n} voor elke locatie?`, answer: `Ja, de tool werkt voor alle steden en regio's in Nederland.` },
    { question: `Hoe verbeter ik mijn lokale SEO?`, answer: `Door je Google Bedrijfsprofiel te optimaliseren, lokale content te maken en reviews te verzamelen.` },
    { question: `Is lokale SEO belangrijk?`, answer: `Absoluut. 46% van alle Google zoekopdrachten heeft een lokale intentie.` },
    { question: `Kan KlikKlaarSEO mijn lokale SEO verbeteren?`, answer: `Ja, lokale SEO is een kernonderdeel van onze service. Vanaf €99/mnd.` },
  ],
  monitoring: (n) => [
    { question: `Hoe vaak wordt de data bijgewerkt?`, answer: `De tool geeft realtime inzichten op het moment dat je je website checkt.` },
    { question: `Kan ik meerdere websites monitoren?`, answer: `Ja, je kunt elke website checken, zo vaak als je wilt.` },
    { question: `Wat moet ik doen als mijn scores dalen?`, answer: `Analyseer de oorzaak en neem actie. KlikKlaarSEO kan dit automatisch voor je doen.` },
    { question: `Is de tool gratis?`, answer: `Ja, volledig gratis zonder account.` },
  ],
  snelheid: (n) => [
    { question: `Waarom is website snelheid belangrijk?`, answer: `Google gebruikt snelheid als rankingfactor. Langzame sites ranken lager en verliezen bezoekers.` },
    { question: `Wat zijn Core Web Vitals?`, answer: `Dit zijn Google's metrieken voor gebruikerservaring: laadtijd (LCP), interactiviteit (INP) en visuele stabiliteit (CLS).` },
    { question: `Hoe verbeter ik mijn snelheid?`, answer: `Door afbeeldingen te optimaliseren, caching in te stellen en onnodige scripts te verwijderen.` },
    { question: `Helpt KlikKlaarSEO met snelheidsoptimalisatie?`, answer: `Ja, technische optimalisatie inclusief snelheid is onderdeel van ons pakket.` },
  ],
  "structured-data": (n) => [
    { question: `Wat is structured data?`, answer: `Structured data is code die zoekmachines helpt je content beter te begrijpen. Het kan leiden tot rich snippets in Google.` },
    { question: `Welke types structured data zijn belangrijk?`, answer: `LocalBusiness, FAQ, Product, Review en BreadcrumbList zijn de meest impactvolle types.` },
    { question: `Is structured data moeilijk te implementeren?`, answer: `Het vereist technische kennis, maar KlikKlaarSEO regelt dit automatisch voor je.` },
    { question: `Is de validator gratis?`, answer: `Ja, volledig gratis te gebruiken.` },
  ],
  keyword: (n) => [
    { question: `Hoe vind ik de juiste zoekwoorden?`, answer: `De ${n} helpt je zoekwoorden te vinden op basis van volume, concurrentie en relevantie.` },
    { question: `Hoeveel zoekwoorden heb ik nodig?`, answer: `Focus op 3-5 hoofdzoekwoorden per pagina en gebruik gerelateerde termen in je content.` },
    { question: `Hoe weet ik of een zoekwoord kansrijk is?`, answer: `Kijk naar het zoekvolume en de concurrentie. Hoog volume + lage concurrentie = kansrijk.` },
    { question: `Helpt KlikKlaarSEO met keyword research?`, answer: `Ja, zoekwoordonderzoek is standaard onderdeel van onze service.` },
  ],
  concurrentie: (n) => [
    { question: `Wat kan ik leren van mijn concurrenten?`, answer: `Welke zoekwoorden zij targeten, welke content werkt en waar hun backlinks vandaan komen.` },
    { question: `Is het legaal om concurrenten te analyseren?`, answer: `Ja, alle informatie die de tool toont is openbaar beschikbaar.` },
    { question: `Hoe vaak moet ik concurrenten checken?`, answer: `Maandelijks is een goed ritme om bij te blijven met je concurrenten.` },
    { question: `Kan KlikKlaarSEO mijn concurrenten monitoren?`, answer: `Ja, concurrentie-analyse is onderdeel van onze SEO-aanpak.` },
  ],
};

// Default pillar/service mappings per category (fallback when not specified per-tool)
const defaultRelatedPillars: Record<ToolCategory, PillarSlug[]> = {
  analyse: ["technische-seo", "seo-strategie"],
  technisch: ["technische-seo"],
  content: ["content-optimalisatie"],
  linkbuilding: ["linkbuilding"],
  lokaal: ["lokale-seo"],
  monitoring: ["analytics-en-data"],
  snelheid: ["technische-seo", "mobile-seo"],
  "structured-data": ["technische-seo"],
  keyword: ["keyword-research", "content-optimalisatie"],
  concurrentie: ["concurrentie-analyse", "seo-strategie"],
};

const defaultRelatedServices: Record<ToolCategory, ServiceSlug[]> = {
  analyse: ["technische-seo", "automatische-seo"],
  technisch: ["technische-seo"],
  content: ["seo-content-optimalisatie"],
  linkbuilding: ["automatische-seo"],
  lokaal: ["lokale-seo", "google-mijn-bedrijf-optimalisatie"],
  monitoring: ["automatische-seo"],
  snelheid: ["technische-seo"],
  "structured-data": ["technische-seo"],
  keyword: ["seo-content-optimalisatie"],
  concurrentie: ["seo-voor-mkb", "automatische-seo"],
};

function createTool(input: ToolInput): ToolData {
  // Merge unique FAQs with 1 category FAQ (to reduce duplication)
  const catFaqs = categoryFaqs[input.category](input.name);
  const faqs = input.uniqueFaqs
    ? [...input.uniqueFaqs, catFaqs[catFaqs.length - 1]] // only 1 shared FAQ
    : catFaqs;

  return {
    slug: input.slug,
    name: input.name,
    icon: input.icon,
    category: input.category,
    shortDescription: input.short,
    headline: `Gratis ${input.name}`,
    subheadline: input.short,
    whatItDoes: input.what,
    benefits: categoryBenefits[input.category](input.name),
    howToUse: input.steps,
    faqs,
    uniqueIntro: input.uniqueIntro,
    whatThisToolChecks: input.whatThisToolChecks,
    howToInterpret: input.howToInterpret,
    commonIssuesAndFixes: input.commonIssuesAndFixes,
    uniqueFaqs: input.uniqueFaqs,
    relatedPillars: input.relatedPillars || defaultRelatedPillars[input.category],
    relatedServices: input.relatedServices || defaultRelatedServices[input.category],
  };
}

const toolInputs: ToolInput[] = [
  // Analyse (10)
  { slug: "seo-checker", name: "SEO Checker", icon: "Search", category: "analyse", short: "Analyseer je website op de belangrijkste SEO-factoren.", what: "De SEO Checker scant je website op meta tags, headings, content kwaliteit, interne links en meer. Je krijgt een duidelijk rapport met verbeterpunten.",
    steps: ["Vul je URL in", "De tool scant je pagina", "Bekijk je SEO-score en verbeterpunten", "Pas de suggesties toe"],
    uniqueIntro: "De SEO Checker is je eerste stap naar betere vindbaarheid. In tegenstelling tot generieke website scanners focust deze tool specifiek op de factoren die Google gebruikt om je positie te bepalen. Van title tags tot heading structuur, van interne links tot afbeeldingen - je krijgt een concreet overzicht van wat je direct kunt verbeteren.",
    whatThisToolChecks: ["Title tag aanwezigheid, lengte en zoekwoord-gebruik", "Meta description kwaliteit en CTR-potentieel", "Heading hiërarchie (H1 t/m H6)", "Afbeeldingen zonder alt-tekst", "Interne en externe links kwaliteit"],
    howToInterpret: ["Groen = goed geoptimaliseerd, geen actie nodig", "Oranje = verbeterbaar, pak deze punten als tweede aan", "Rood = kritiek probleem, dit schaadt je rankings actief"],
    commonIssuesAndFixes: ["Ontbrekende H1: voeg één duidelijke H1 toe per pagina", "Title tag te lang: houd het onder 60 tekens", "Geen meta description: schrijf een unieke beschrijving van 120-160 tekens", "Afbeeldingen zonder alt: voeg beschrijvende alt-teksten toe", "Geen interne links: link naar minimaal 2-3 relevante pagina's"],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen de SEO Checker en een volledige SEO audit?", answer: "De SEO Checker geeft een snelle scan van één pagina op de belangrijkste on-page factoren. Een volledige SEO audit analyseert je hele website, inclusief technische aspecten, backlinks en concurrentie." },
      { question: "Hoe vaak moet ik de SEO Checker gebruiken?", answer: "Check elke pagina na het publiceren of updaten. Voor je belangrijkste landingspagina's raden we een maandelijkse check aan." }
    ],
    relatedPillars: ["technische-seo", "content-optimalisatie"],
    relatedServices: ["technische-seo", "seo-content-optimalisatie"]
  },
  { slug: "website-analyse", name: "Website Analyse Tool", icon: "BarChart", category: "analyse", short: "Complete analyse van je website prestaties.", what: "Analyseer je website op SEO, snelheid, mobiel-vriendelijkheid en meer. Krijg een compleet overzicht van je online prestaties.",
    steps: ["Voer je website URL in", "Wacht op de analyse", "Bekijk je scores per categorie", "Volg de aanbevelingen op"],
    uniqueIntro: "De Website Analyse Tool geeft je een helikopterview van je complete online prestaties. Anders dan tools die zich op één aspect richten, combineert deze tool SEO, snelheid, mobiele gebruiksvriendelijkheid en beveiliging in één overzichtelijk dashboard.",
    whatThisToolChecks: ["Algehele SEO-gezondheid en on-page factoren", "Laadsnelheid en Core Web Vitals", "Mobiele responsiviteit en touch-vriendelijkheid", "SSL/HTTPS beveiliging", "Toegankelijkheid (accessibility) basis"],
    commonIssuesAndFixes: ["Lage snelheidsscore: comprimeer afbeeldingen en activeer caching", "Niet mobiel-vriendelijk: gebruik responsive design of pas viewport aan", "Geen HTTPS: installeer een SSL-certificaat (Let's Encrypt is gratis)", "Slechte accessibility: voeg alt-teksten en ARIA labels toe"],
    uniqueFaqs: [
      { question: "Verschilt de Website Analyse van Google PageSpeed Insights?", answer: "Ja. PageSpeed focust alleen op snelheid. Deze tool combineert snelheid met SEO, beveiliging en mobiele analyse in één rapport." },
      { question: "Kan ik de resultaten exporteren of delen?", answer: "Je kunt de URL van de resultaten delen met je webdeveloper of het rapport kopiëren voor intern gebruik." }
    ]
  },
  { slug: "seo-score-checker", name: "SEO Score Checker", icon: "Award", category: "analyse", short: "Bereken je SEO-score van 0 tot 100.", what: "De SEO Score Checker geeft je website een score van 0 tot 100 op basis van technische SEO, content en autoriteit.",
    steps: ["Vul je URL in", "De tool berekent je score", "Bekijk je score per categorie", "Werk aan de laagste scores"],
    uniqueIntro: "Je SEO-score is een indicatie van hoe goed je website presteert in de ogen van Google. De SEO Score Checker weegt meer dan 40 factoren en geeft je een helder cijfer van 0 tot 100 zodat je weet waar je staat en waar je naartoe moet werken.",
    whatThisToolChecks: ["Technische SEO factoren (indexeerbaarheid, snelheid, mobiel)", "On-page SEO (meta tags, headings, content lengte)", "Content kwaliteit (leesbaarheid, zoekwoord gebruik)", "Autoriteit signalen (backlink indicatie)", "Gebruikerservaring (CLS, interactiviteit)"],
    uniqueFaqs: [
      { question: "Wat is een goede SEO-score?", answer: "Boven de 80 is goed, boven de 90 is excellent. De meeste MKB-websites scoren tussen de 40 en 70, dus er is bijna altijd ruimte voor verbetering." },
      { question: "Telt Google mijn SEO-score als rankingfactor?", answer: "Nee, een 'SEO-score' is geen officiële Google metric. Het is een samenvatting van factoren die wél meetellen. Focus op de individuele verbeterpunten." }
    ]
  },
  { slug: "serp-checker", name: "SERP Checker", icon: "Eye", category: "analyse", short: "Bekijk hoe je website verschijnt in Google.", what: "De SERP Checker toont hoe je pagina eruitziet in de zoekresultaten van Google, inclusief titel en beschrijving.",
    steps: ["Vul je URL in", "Bekijk je SERP-weergave", "Optimaliseer titel en beschrijving", "Check opnieuw"],
    uniqueIntro: "Hoe je pagina eruitziet in Google bepaalt of iemand klikt. De SERP Checker toont een pixel-perfecte preview van je zoekresultaat, inclusief hoe Google je title tag en meta description afkapt. Zo kun je optimaliseren voor maximale click-through rate.",
    whatThisToolChecks: ["Title tag weergave en afkaplengte in Google", "Meta description preview en pixel-breedte", "URL/breadcrumb weergave in de SERP", "Rich snippet elementen (sterren, FAQ, sitelinks)", "Desktop vs mobiele SERP weergave"],
    uniqueFaqs: [
      { question: "Waarom toont Google een andere beschrijving dan mijn meta description?", answer: "Google kiest soms een eigen snippet uit je pagina-content als dat beter past bij de zoekopdracht. Dit gebeurt bij 60-70% van de zoekopdrachten." },
      { question: "Hoe lang mag mijn title tag zijn?", answer: "Maximaal 60 tekens (of 580 pixels breed). Langere titels worden afgekapt met '...' wat je CTR verlaagt." }
    ]
  },
  { slug: "seo-audit-tool", name: "SEO Audit Tool", icon: "ClipboardCheck", category: "analyse", short: "Uitgebreide SEO-audit van je website.", what: "Een diepgaande analyse van alle SEO-aspecten: technisch, content, links en gebruikerservaring.", steps: ["Voer je domein in", "De tool voert een complete audit uit", "Bekijk het rapport", "Prioriteer de verbeterpunten"] },
  { slug: "mobile-friendly-test", name: "Mobile Friendly Test", icon: "Smartphone", category: "analyse", short: "Test of je website goed werkt op mobiel.", what: "Controleer of je website voldoet aan Google's mobiele eisen. Mobiel-vriendelijkheid is een belangrijke rankingfactor.", steps: ["Vul je URL in", "De tool test je mobiele weergave", "Bekijk de resultaten", "Los eventuele problemen op"] },
  { slug: "seo-benchmark", name: "SEO Benchmark Tool", icon: "TrendingUp", category: "analyse", short: "Vergelijk je SEO-prestaties met je branche.", what: "Zie hoe je website scoort ten opzichte van vergelijkbare websites in jouw branche.", steps: ["Vul je URL en branche in", "De tool vergelijkt je scores", "Bekijk waar je achterblijft", "Verbeter je zwakke punten"] },
  { slug: "seo-rapport-generator", name: "SEO Rapport Generator", icon: "FileText", category: "analyse", short: "Genereer een professioneel SEO-rapport.", what: "Maak een overzichtelijk SEO-rapport van je website dat je kunt delen met collega's of je webdeveloper.", steps: ["Vul je URL in", "Kies de onderdelen voor je rapport", "Genereer het rapport", "Download of deel het"] },
  { slug: "indexatie-checker", name: "Indexatie Checker", icon: "Database", category: "analyse", short: "Controleer of je pagina's geïndexeerd zijn.", what: "Check welke pagina's van je website zijn opgenomen in de Google index.", steps: ["Vul je domein in", "De tool checkt de indexatie", "Bekijk welke pagina's missen", "Dien ontbrekende pagina's in"] },
  { slug: "robots-txt-checker", name: "Robots.txt Checker", icon: "FileCode", category: "analyse", short: "Controleer je robots.txt bestand.", what: "Analyseer je robots.txt om er zeker van te zijn dat Google je belangrijkste pagina's kan crawlen.", steps: ["Vul je domein in", "De tool leest je robots.txt", "Bekijk eventuele blokkades", "Pas je robots.txt aan"] },

  // Technisch (8)
  { slug: "meta-tag-checker", name: "Meta Tag Checker", icon: "Tag", category: "technisch", short: "Controleer de meta tags van je pagina's.", what: "Analyseer title tags, meta descriptions, canonical tags en andere meta-informatie van je pagina's.", steps: ["Vul je URL in", "De tool leest alle meta tags", "Bekijk ontbrekende of foutieve tags", "Optimaliseer je meta tags"] },
  { slug: "heading-checker", name: "Heading Checker", icon: "Type", category: "technisch", short: "Analyseer de heading structuur van je pagina.", what: "Controleer of je H1 t/m H6 tags correct zijn ingezet voor optimale SEO.", steps: ["Vul je URL in", "Bekijk de heading hiërarchie", "Los structuurproblemen op", "Check opnieuw"] },
  { slug: "canonical-checker", name: "Canonical Tag Checker", icon: "Link", category: "technisch", short: "Controleer canonical tags op duplicaat content.", what: "Vind en los canonical tag problemen op die duplicate content issues kunnen veroorzaken.", steps: ["Vul je URL in", "De tool checkt canonical tags", "Bekijk eventuele conflicten", "Corrigeer foutieve canonicals"] },
  { slug: "redirect-checker", name: "Redirect Checker", icon: "ArrowRight", category: "technisch", short: "Controleer redirects en redirect chains.", what: "Analyseer 301/302 redirects, vind redirect chains en broken redirects.", steps: ["Vul je URL in", "De tool volgt alle redirects", "Bekijk de redirect chain", "Los problemen op"] },
  { slug: "hreflang-checker", name: "Hreflang Checker", icon: "Globe", category: "technisch", short: "Controleer hreflang tags voor meertalige sites.", what: "Valideer je hreflang implementatie voor correcte taal- en regio-targeting.", steps: ["Vul je URL in", "De tool checkt hreflang tags", "Bekijk fouten en waarschuwingen", "Corrigeer de implementatie"] },
  { slug: "sitemap-checker", name: "Sitemap Checker", icon: "Map", category: "technisch", short: "Valideer je XML sitemap.", what: "Controleer of je sitemap correct is opgebouwd en alle belangrijke pagina's bevat.", steps: ["Vul je sitemap URL in", "De tool valideert de structuur", "Bekijk ontbrekende pagina's", "Update je sitemap"] },
  { slug: "ssl-checker", name: "SSL Checker", icon: "Shield", category: "technisch", short: "Controleer je SSL certificaat.", what: "Verifieer dat je SSL certificaat correct is geïnstalleerd en niet verlopen is.", steps: ["Vul je domein in", "De tool checkt je SSL", "Bekijk de certificaat details", "Los eventuele problemen op"] },
  { slug: "http-header-checker", name: "HTTP Header Checker", icon: "Server", category: "technisch", short: "Analyseer HTTP response headers.", what: "Bekijk de HTTP headers van je website om technische SEO-problemen te identificeren.", steps: ["Vul je URL in", "De tool leest de headers", "Bekijk security en cache headers", "Optimaliseer waar nodig"] },

  // Content (8)
  { slug: "keyword-density-checker", name: "Keyword Density Checker", icon: "Percent", category: "content", short: "Analyseer zoekwoorddichtheid in je teksten.", what: "Meet hoe vaak zoekwoorden voorkomen in je content en of de dichtheid optimaal is.", steps: ["Plak je tekst of vul een URL in", "Kies je focus zoekwoord", "Bekijk de dichtheid", "Pas je content aan"] },
  { slug: "leesbaarheid-checker", name: "Leesbaarheid Checker", icon: "BookOpen", category: "content", short: "Test de leesbaarheid van je teksten.", what: "Analyseer je content op leesbaarheid met Flesch-scores en zinscomplexiteit.", steps: ["Plak je tekst in", "De tool analyseert de leesbaarheid", "Bekijk je score", "Vereenvoudig waar nodig"] },
  { slug: "woordenteller", name: "Woordenteller", icon: "Hash", category: "content", short: "Tel woorden, zinnen en alinea's.", what: "Een eenvoudige tool om woorden, tekens, zinnen en alinea's te tellen voor je SEO-content.", steps: ["Plak je tekst in", "Bekijk de statistieken", "Vergelijk met concurrenten", "Pas je content aan"] },
  { slug: "plagiaatchecker", name: "Plagiaat Checker", icon: "Copy", category: "content", short: "Controleer of je content uniek is.", what: "Check of je teksten niet te veel lijken op bestaande content op het internet.", steps: ["Plak je tekst in", "De tool vergelijkt met het web", "Bekijk overeenkomsten", "Herschrijf waar nodig"] },
  { slug: "meta-description-generator", name: "Meta Description Generator", icon: "PenTool", category: "content", short: "Genereer SEO-geoptimaliseerde meta descriptions.", what: "Maak pakkende meta descriptions die klikken genereren in de zoekresultaten.", steps: ["Vul je pagina-onderwerp in", "Kies je focus zoekwoord", "De tool genereert opties", "Kies en pas aan"] },
  { slug: "title-tag-generator", name: "Title Tag Generator", icon: "Type", category: "content", short: "Genereer effectieve title tags voor SEO.", what: "Maak title tags die ranken en klikken genereren, met de juiste lengte en zoekwoorden.", steps: ["Vul je onderwerp in", "Kies je zoekwoord", "Bekijk gegenereerde opties", "Kies de beste optie"] },
  { slug: "content-gap-analyse", name: "Content Gap Analyse", icon: "Layers", category: "content", short: "Vind ontbrekende content op je website.", what: "Ontdek welke onderwerpen je concurrenten wel behandelen maar jij niet.", steps: ["Vul je URL en concurrenten in", "De tool vergelijkt de content", "Bekijk de gaps", "Maak de ontbrekende content"] },
  { slug: "alt-tekst-checker", name: "Alt Tekst Checker", icon: "Image", category: "content", short: "Controleer alt teksten van je afbeeldingen.", what: "Vind afbeeldingen zonder alt tekst of met slechte alt teksten die je SEO schaden.", steps: ["Vul je URL in", "De tool scant alle afbeeldingen", "Bekijk ontbrekende alt teksten", "Voeg beschrijvende alt teksten toe"] },

  // Linkbuilding (7)
  { slug: "backlink-checker", name: "Backlink Checker", icon: "ExternalLink", category: "linkbuilding", short: "Analyseer het linkprofiel van je website.", what: "Bekijk alle backlinks naar je website, inclusief hun kwaliteit en herkomst.", steps: ["Vul je domein in", "De tool verzamelt backlink data", "Bekijk je linkprofiel", "Identificeer kansen"] },
  { slug: "broken-link-checker", name: "Broken Link Checker", icon: "LinkOff", category: "linkbuilding", short: "Vind kapotte links op je website.", what: "Scan je website op broken links die je SEO en gebruikerservaring schaden.", steps: ["Vul je URL in", "De tool scant alle links", "Bekijk de broken links", "Repareer of verwijder ze"] },
  { slug: "domain-authority-checker", name: "Domain Authority Checker", icon: "Award", category: "linkbuilding", short: "Check de autoriteit van je domein.", what: "Meet de domeinautoriteit van je website en vergelijk met concurrenten.", steps: ["Vul je domein in", "Bekijk je DA-score", "Vergelijk met concurrenten", "Werk aan je autoriteit"] },
  { slug: "anchor-text-analyse", name: "Anchor Text Analyse", icon: "Link2", category: "linkbuilding", short: "Analyseer de anchor teksten van je backlinks.", what: "Bekijk welke anchor teksten worden gebruikt in links naar je website.", steps: ["Vul je domein in", "De tool analyseert anchor teksten", "Bekijk de verdeling", "Diversifieer waar nodig"] },
  { slug: "link-intersect-tool", name: "Link Intersect Tool", icon: "GitMerge", category: "linkbuilding", short: "Vind websites die naar concurrenten linken maar niet naar jou.", what: "Ontdek linkbuilding kansen door te zien welke sites wel naar je concurrenten linken.", steps: ["Vul je URL en concurrenten in", "De tool vergelijkt linkprofielen", "Bekijk de intersecties", "Benader deze websites"] },
  { slug: "toxic-link-checker", name: "Toxic Link Checker", icon: "AlertTriangle", category: "linkbuilding", short: "Vind schadelijke backlinks naar je website.", what: "Identificeer backlinks die je SEO kunnen schaden en die je moet disavowen.", steps: ["Vul je domein in", "De tool analyseert link kwaliteit", "Bekijk toxische links", "Disavow via Google"] },
  { slug: "interne-link-checker", name: "Interne Link Checker", icon: "Repeat", category: "linkbuilding", short: "Analyseer je interne linkstructuur.", what: "Bekijk hoe je pagina's onderling gelinkt zijn en vind verbetermogelijkheden.", steps: ["Vul je domein in", "De tool crawlt je interne links", "Bekijk de structuur", "Verbeter de interne linking"] },

  // Lokaal (7)
  { slug: "google-bedrijfsprofiel-checker", name: "Google Bedrijfsprofiel Checker", icon: "MapPin", category: "lokaal", short: "Check de volledigheid van je Google profiel.", what: "Analyseer of je Google Bedrijfsprofiel volledig en geoptimaliseerd is.", steps: ["Zoek je bedrijf op", "De tool checkt je profiel", "Bekijk ontbrekende informatie", "Vul je profiel aan"] },
  { slug: "lokale-ranking-checker", name: "Lokale Ranking Checker", icon: "Navigation", category: "lokaal", short: "Check je lokale Google posities.", what: "Zie waar je website staat in lokale zoekresultaten voor je stad.", steps: ["Vul je zoekwoord en stad in", "De tool checkt je positie", "Bekijk je lokale ranking", "Optimaliseer voor lokale SEO"] },
  { slug: "nap-checker", name: "NAP Consistentie Checker", icon: "CheckCircle", category: "lokaal", short: "Controleer je NAP-gegevens online.", what: "Check of je Naam, Adres en Telefoonnummer consistent zijn op alle platforms.", steps: ["Vul je bedrijfsgegevens in", "De tool zoekt je vermeldingen", "Bekijk inconsistenties", "Corrigeer afwijkingen"] },
  { slug: "review-checker", name: "Review Checker", icon: "Star", category: "lokaal", short: "Analyseer je online reviews.", what: "Bekijk en analyseer al je Google reviews op sentiment en trends.", steps: ["Zoek je bedrijf op", "De tool verzamelt reviews", "Bekijk sentiment analyse", "Reageer op reviews"] },
  { slug: "lokale-concurrentie-analyse", name: "Lokale Concurrentie Analyse", icon: "Users", category: "lokaal", short: "Vergelijk je lokale SEO met concurrenten.", what: "Zie hoe je scoort ten opzichte van lokale concurrenten in Google.", steps: ["Vul je bedrijf en stad in", "De tool vindt concurrenten", "Vergelijk de scores", "Verbeter je zwakke punten"] },
  { slug: "citation-checker", name: "Citation Checker", icon: "Building", category: "lokaal", short: "Vind en controleer je lokale citaties.", what: "Check op hoeveel directories en platforms je bedrijf vermeld staat.", steps: ["Vul je bedrijfsnaam in", "De tool zoekt citaties", "Bekijk je vermeldingen", "Voeg ontbrekende citaties toe"] },
  { slug: "lokale-zoekwoord-tool", name: "Lokale Zoekwoord Tool", icon: "Compass", category: "lokaal", short: "Vind lokale zoekwoorden voor jouw stad.", what: "Ontdek welke lokale zoektermen mensen gebruiken in jouw regio.", steps: ["Vul je dienst en stad in", "De tool toont zoekwoorden", "Bekijk volumes per zoekwoord", "Gebruik ze in je content"] },

  // Monitoring (7)
  { slug: "ranking-tracker", name: "Ranking Tracker", icon: "BarChart2", category: "monitoring", short: "Volg je Google posities over tijd.", what: "Monitor dagelijks waar je website staat in Google voor je belangrijkste zoekwoorden.", steps: ["Vul je zoekwoorden in", "De tool checkt je posities", "Bekijk de ontwikkeling", "Reageer op veranderingen"] },
  { slug: "uptime-monitor", name: "Uptime Monitor", icon: "Activity", category: "monitoring", short: "Controleer of je website online is.", what: "Monitor de beschikbaarheid van je website en krijg een melding bij downtime.", steps: ["Vul je URL in", "De tool checkt je website", "Bekijk de uptime historie", "Los downtime snel op"] },
  { slug: "seo-verandering-tracker", name: "SEO Verandering Tracker", icon: "GitBranch", category: "monitoring", short: "Track wijzigingen op je website.", what: "Monitor je website op SEO-relevante wijzigingen die je rankings kunnen beïnvloeden.", steps: ["Vul je URL in", "De tool maakt een baseline", "Bekijk veranderingen", "Evalueer de impact"] },
  { slug: "search-console-checker", name: "Search Console Checker", icon: "Monitor", category: "monitoring", short: "Analyseer je Search Console data.", what: "Krijg inzicht in je Google Search Console prestaties zonder in te loggen.", steps: ["Verbind je Search Console", "Bekijk je data overzicht", "Analyseer trends", "Neem actie op problemen"] },
  { slug: "google-update-checker", name: "Google Update Checker", icon: "Bell", category: "monitoring", short: "Check of een Google update je heeft geraakt.", what: "Vergelijk je traffic patronen met bekende Google algorithm updates.", steps: ["Vul je URL in", "De tool analyseert je traffic", "Vergelijk met update data", "Pas je strategie aan"] },
  { slug: "penalty-checker", name: "Penalty Checker", icon: "AlertOctagon", category: "monitoring", short: "Check of je website een Google penalty heeft.", what: "Analyseer of je website mogelijk getroffen is door een manuele of algoritmische penalty.", steps: ["Vul je domein in", "De tool checkt penalty signalen", "Bekijk de resultaten", "Neem herstelmaatregelen"] },
  { slug: "crawl-budget-checker", name: "Crawl Budget Checker", icon: "Cpu", category: "monitoring", short: "Analyseer hoe Google je website crawlt.", what: "Bekijk hoe efficiënt Google je website crawlt en waar het crawlbudget naartoe gaat.", steps: ["Vul je domein in", "De tool analyseert crawl patronen", "Bekijk de verdeling", "Optimaliseer je crawl budget"] },

  // Snelheid (7)
  { slug: "pagespeed-test", name: "PageSpeed Test", icon: "Zap", category: "snelheid", short: "Test de laadsnelheid van je website.", what: "Meet de laadtijd van je website en krijg concrete tips om sneller te laden.", steps: ["Vul je URL in", "De tool meet de snelheid", "Bekijk je scores", "Pas de optimalisaties toe"] },
  { slug: "core-web-vitals-test", name: "Core Web Vitals Test", icon: "Heart", category: "snelheid", short: "Test je Core Web Vitals scores.", what: "Controleer LCP, INP en CLS, de drie belangrijkste Google snelheidsmetrieken.", steps: ["Vul je URL in", "De tool meet CWV", "Bekijk per metriek", "Verbeter rode scores"] },
  { slug: "afbeelding-optimizer", name: "Afbeelding Optimizer", icon: "Image", category: "snelheid", short: "Optimaliseer je afbeeldingen voor snelheid.", what: "Comprimeer en optimaliseer afbeeldingen zonder kwaliteitsverlies.", steps: ["Upload je afbeeldingen", "De tool comprimeert ze", "Download de geoptimaliseerde versies", "Vervang op je website"] },
  { slug: "css-minifier", name: "CSS Minifier", icon: "Code", category: "snelheid", short: "Minify je CSS voor snellere laadtijden.", what: "Verklein je CSS bestanden door onnodige witruimte en commentaar te verwijderen.", steps: ["Plak je CSS code in", "De tool minifieert het", "Kopieer de output", "Vervang je CSS bestand"] },
  { slug: "javascript-minifier", name: "JavaScript Minifier", icon: "Code2", category: "snelheid", short: "Minify je JavaScript voor betere prestaties.", what: "Verklein je JavaScript bestanden voor snellere laadtijden.", steps: ["Plak je JS code in", "De tool minifieert het", "Kopieer de output", "Vervang je JS bestand"] },
  { slug: "gzip-checker", name: "GZIP Checker", icon: "Package", category: "snelheid", short: "Check of GZIP compressie actief is.", what: "Controleer of je webserver GZIP compressie gebruikt om bestanden sneller te laden.", steps: ["Vul je URL in", "De tool checkt compressie", "Bekijk het resultaat", "Activeer GZIP indien nodig"] },
  { slug: "render-blocking-checker", name: "Render Blocking Checker", icon: "Pause", category: "snelheid", short: "Vind render-blocking resources.", what: "Identificeer CSS en JavaScript bestanden die het laden van je pagina vertragen.", steps: ["Vul je URL in", "De tool analyseert resources", "Bekijk blocking resources", "Defer of async laden"] },

  // Structured Data (7)
  { slug: "schema-validator", name: "Schema Validator", icon: "CheckSquare", category: "structured-data", short: "Valideer je Schema.org markup.", what: "Controleer of je structured data correct is geïmplementeerd volgens Schema.org standaarden.", steps: ["Vul je URL in", "De tool leest je schema markup", "Bekijk fouten en waarschuwingen", "Corrigeer de issues"] },
  { slug: "rich-snippet-preview", name: "Rich Snippet Preview", icon: "Eye", category: "structured-data", short: "Preview hoe je rich snippet eruitziet.", what: "Bekijk hoe je pagina eruitziet in Google met rich snippets, sterren en extra info.", steps: ["Vul je URL in", "De tool genereert een preview", "Bekijk de weergave", "Optimaliseer je markup"] },
  { slug: "faq-schema-generator", name: "FAQ Schema Generator", icon: "HelpCircle", category: "structured-data", short: "Genereer FAQ Schema markup.", what: "Maak eenvoudig FAQ structured data voor je veelgestelde vragen pagina's.", steps: ["Vul je vragen en antwoorden in", "De tool genereert JSON-LD", "Kopieer de code", "Plak in je website"] },
  { slug: "local-business-schema-generator", name: "LocalBusiness Schema Generator", icon: "Store", category: "structured-data", short: "Genereer LocalBusiness Schema markup.", what: "Maak LocalBusiness structured data voor betere lokale zichtbaarheid.", steps: ["Vul je bedrijfsgegevens in", "De tool genereert JSON-LD", "Kopieer de code", "Implementeer op je website"] },
  { slug: "product-schema-generator", name: "Product Schema Generator", icon: "ShoppingBag", category: "structured-data", short: "Genereer Product Schema markup.", what: "Maak Product structured data voor je webshop producten.", steps: ["Vul je productgegevens in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan productpagina's"] },
  { slug: "breadcrumb-schema-generator", name: "Breadcrumb Schema Generator", icon: "ChevronRight", category: "structured-data", short: "Genereer Breadcrumb Schema markup.", what: "Maak BreadcrumbList structured data voor betere navigatie in zoekresultaten.", steps: ["Vul je pagina-structuur in", "De tool genereert JSON-LD", "Kopieer de code", "Implementeer op je website"] },
  { slug: "json-ld-validator", name: "JSON-LD Validator", icon: "FileJson", category: "structured-data", short: "Valideer je JSON-LD code.", what: "Controleer of je JSON-LD structured data syntactisch correct is.", steps: ["Plak je JSON-LD in", "De tool valideert de syntax", "Bekijk fouten", "Corrigeer en test opnieuw"] },

  // Keyword (7)
  { slug: "zoekwoord-generator", name: "Zoekwoord Generator", icon: "Sparkles", category: "keyword", short: "Genereer zoekwoord ideeën voor je website.", what: "Ontdek nieuwe zoekwoorden gerelateerd aan je onderwerp of branche.", steps: ["Vul je onderwerp in", "De tool genereert suggesties", "Filter op relevantie", "Gebruik in je content"] },
  { slug: "long-tail-keyword-tool", name: "Long Tail Keyword Tool", icon: "ArrowDownRight", category: "keyword", short: "Vind long tail zoekwoorden met minder concurrentie.", what: "Ontdek langere, specifiekere zoekwoorden die makkelijker te ranken zijn.", steps: ["Vul je hoofd zoekwoord in", "De tool toont long tail varianten", "Bekijk zoekvolumes", "Kies de beste opties"] },
  { slug: "zoekvolume-checker", name: "Zoekvolume Checker", icon: "BarChart", category: "keyword", short: "Check het maandelijks zoekvolume.", what: "Bekijk hoeveel mensen per maand zoeken op een bepaald zoekwoord in Nederland.", steps: ["Vul je zoekwoord in", "De tool toont het volume", "Vergelijk meerdere termen", "Kies de beste zoekwoorden"] },
  { slug: "zoekintentie-checker", name: "Zoekintentie Checker", icon: "Target", category: "keyword", short: "Bepaal de zoekintentie achter zoekwoorden.", what: "Begrijp of een zoekwoord informatief, transactioneel, navigatie of commercieel is.", steps: ["Vul je zoekwoord in", "De tool analyseert de intentie", "Bekijk het type intentie", "Stem je content af"] },
  { slug: "keyword-groepering-tool", name: "Keyword Groepering Tool", icon: "FolderTree", category: "keyword", short: "Groepeer zoekwoorden in thema's.", what: "Organiseer je zoekwoorden in logische groepen voor je content strategie.", steps: ["Upload je zoekwoordenlijst", "De tool groepeert automatisch", "Bekijk de clusters", "Plan je content per cluster"] },
  { slug: "vraag-zoekwoord-tool", name: "Vraag Zoekwoord Tool", icon: "MessageCircle", category: "keyword", short: "Vind vragen die mensen stellen over je onderwerp.", what: "Ontdek welke vragen mensen stellen in Google over jouw onderwerp.", steps: ["Vul je onderwerp in", "De tool vindt vragen", "Filter op relevantie", "Gebruik als FAQ of content"] },
  { slug: "seizoens-zoekwoord-tool", name: "Seizoens Zoekwoord Tool", icon: "Calendar", category: "keyword", short: "Ontdek seizoensgebonden zoektrends.", what: "Zie wanneer zoekwoorden het meest gezocht worden gedurende het jaar.", steps: ["Vul je zoekwoord in", "De tool toont trends per maand", "Plan je content vooruit", "Publiceer op het juiste moment"] },

  // Concurrentie (7)
  { slug: "concurrentie-analyse-tool", name: "Concurrentie Analyse Tool", icon: "Crosshair", category: "concurrentie", short: "Analyseer de SEO van je concurrenten.", what: "Vergelijk je website met concurrenten op alle belangrijke SEO-factoren.", steps: ["Vul je URL en concurrenten in", "De tool vergelijkt alle factoren", "Bekijk waar je achterblijft", "Verbeter je strategie"] },
  { slug: "concurrentie-keyword-tool", name: "Concurrentie Keyword Tool", icon: "Key", category: "concurrentie", short: "Ontdek de zoekwoorden van je concurrenten.", what: "Zie op welke zoekwoorden je concurrenten ranken en jij niet.", steps: ["Vul je URL en concurrent in", "De tool vergelijkt zoekwoorden", "Bekijk gemiste kansen", "Target deze zoekwoorden"] },
  { slug: "concurrentie-backlink-tool", name: "Concurrentie Backlink Tool", icon: "Share2", category: "concurrentie", short: "Analyseer de backlinks van je concurrenten.", what: "Bekijk waar je concurrenten hun backlinks vandaan halen.", steps: ["Vul de URL van je concurrent in", "De tool toont hun backlinks", "Bekijk kwaliteit en herkomst", "Benader dezelfde bronnen"] },
  { slug: "concurrentie-content-tool", name: "Concurrentie Content Tool", icon: "FileSearch", category: "concurrentie", short: "Analyseer de content strategie van concurrenten.", what: "Bekijk welke content je concurrenten publiceren en hoe deze presteert.", steps: ["Vul de URL van je concurrent in", "De tool analyseert hun content", "Bekijk top-presterende pagina's", "Maak betere content"] },
  { slug: "marktaandeel-checker", name: "Marktaandeel Checker", icon: "PieChart", category: "concurrentie", short: "Bekijk je organische marktaandeel.", what: "Zie welk percentage van de organische klikken naar jouw website gaat vs concurrenten.", steps: ["Vul je branche zoekwoorden in", "De tool berekent marktaandeel", "Bekijk je positie", "Werk aan meer zichtbaarheid"] },
  { slug: "serp-vergelijking-tool", name: "SERP Vergelijking Tool", icon: "Columns", category: "concurrentie", short: "Vergelijk SERP posities met concurrenten.", what: "Zie zij aan zij hoe jij en je concurrenten presteren in Google.", steps: ["Vul zoekwoorden en URLs in", "De tool vergelijkt posities", "Bekijk de verschillen", "Focus op kansen"] },
  { slug: "technische-vergelijking-tool", name: "Technische Vergelijking Tool", icon: "Settings", category: "concurrentie", short: "Vergelijk technische SEO met concurrenten.", what: "Vergelijk snelheid, mobiel, SSL en andere technische factoren met concurrenten.", steps: ["Vul URLs in", "De tool vergelijkt technisch", "Bekijk de resultaten", "Verbeter je zwakke punten"] },

  // ─── P2: Extra Analyse (8) ─────────────────────────────────────
  { slug: "seo-grader", name: "SEO Grader", icon: "Award", category: "analyse", short: "Beoordeel je website met een SEO-cijfer.", what: "Krijg een rapportcijfer voor je website op basis van 50+ SEO-factoren.", steps: ["Vul je URL in", "De tool analyseert 50+ factoren", "Bekijk je cijfer per categorie", "Verbeter de laagste scores"] },
  { slug: "404-checker", name: "404 Pagina Checker", icon: "AlertTriangle", category: "analyse", short: "Vind alle 404 pagina's op je website.", what: "Scan je website op kapotte pagina's die bezoekers en Google frustreren.", steps: ["Vul je domein in", "De tool crawlt je site", "Bekijk alle 404's", "Maak redirects of herstel pagina's"] },
  { slug: "duplicate-content-checker", name: "Duplicate Content Checker", icon: "Copy", category: "analyse", short: "Vind dubbele content op je website.", what: "Identificeer pagina's met (bijna) identieke content die je SEO kunnen schaden.", steps: ["Vul je domein in", "De tool vergelijkt pagina's", "Bekijk duplicaten", "Voeg canonical tags toe of herschrijf"] },
  { slug: "seo-spider-tool", name: "SEO Spider Tool", icon: "Bug", category: "analyse", short: "Crawl je website zoals Google dat doet.", what: "Simuleer hoe Google je website ziet en vind technische problemen.", steps: ["Vul je domein in", "De tool crawlt je site", "Bekijk het crawl rapport", "Los gevonden issues op"] },
  { slug: "pagina-autoriteit-checker", name: "Pagina Autoriteit Checker", icon: "Shield", category: "analyse", short: "Check de autoriteit van individuele pagina's.", what: "Meet de autoriteit van specifieke pagina's op je website.", steps: ["Vul een URL in", "De tool berekent de autoriteit", "Vergelijk pagina's onderling", "Versterk zwakke pagina's"] },
  { slug: "seo-health-check", name: "SEO Health Check", icon: "Heart", category: "analyse", short: "Snelle gezondheidscheck van je SEO.", what: "Een snelle scan die de belangrijkste SEO-problemen in kaart brengt.", steps: ["Vul je URL in", "De tool doet een quick scan", "Bekijk de gezondheid status", "Pak rode vlaggen aan"] },
  { slug: "url-structuur-checker", name: "URL Structuur Checker", icon: "Link", category: "analyse", short: "Analyseer de URL structuur van je website.", what: "Controleer of je URL's SEO-vriendelijk zijn qua lengte, structuur en leesbaarheid.", steps: ["Vul je domein in", "De tool analyseert URL's", "Bekijk problematische URL's", "Optimaliseer de structuur"] },
  { slug: "wachtwoord-pagina-checker", name: "Noindex Checker", icon: "EyeOff", category: "analyse", short: "Controleer onbedoelde noindex tags.", what: "Vind pagina's die per ongeluk geblokkeerd zijn voor Google indexatie.", steps: ["Vul je domein in", "De tool scant alle pagina's", "Bekijk noindex tags", "Verwijder onbedoelde blokkades"] },

  // ─── P2: Extra Technisch (8) ───────────────────────────────────
  { slug: "open-graph-checker", name: "Open Graph Checker", icon: "Share", category: "technisch", short: "Controleer je Open Graph meta tags.", what: "Analyseer hoe je pagina's verschijnen wanneer ze worden gedeeld op social media.", steps: ["Vul je URL in", "De tool leest OG tags", "Bekijk de social preview", "Optimaliseer titel, beschrijving en afbeelding"] },
  { slug: "twitter-card-checker", name: "Twitter Card Checker", icon: "MessageCircle", category: "technisch", short: "Controleer je Twitter Card markup.", what: "Bekijk hoe je pagina eruitziet wanneer deze wordt gedeeld op X/Twitter.", steps: ["Vul je URL in", "De tool checkt Twitter cards", "Bekijk de preview", "Optimaliseer de markup"] },
  { slug: "amp-validator", name: "AMP Validator", icon: "Zap", category: "technisch", short: "Valideer je AMP pagina's.", what: "Controleer of je Accelerated Mobile Pages correct zijn geïmplementeerd.", steps: ["Vul je AMP URL in", "De tool valideert de code", "Bekijk fouten", "Corrigeer de AMP markup"] },
  { slug: "structured-data-tester", name: "Structured Data Tester", icon: "Database", category: "technisch", short: "Test je structured data implementatie.", what: "Valideer alle vormen van structured data op je pagina in één keer.", steps: ["Vul je URL in", "De tool leest alle markup", "Bekijk fouten per type", "Corrigeer en hertest"] },
  { slug: "link-juice-calculator", name: "Link Juice Calculator", icon: "Droplet", category: "technisch", short: "Bereken de link juice distributie.", what: "Analyseer hoe link equity wordt verdeeld over je interne pagina's.", steps: ["Vul je domein in", "De tool berekent de distributie", "Bekijk welke pagina's te weinig krijgen", "Optimaliseer interne links"] },
  { slug: "log-file-analyzer", name: "Log File Analyzer", icon: "FileText", category: "technisch", short: "Analyseer server log files voor SEO.", what: "Bekijk hoe Googlebot je website crawlt via server logs.", steps: ["Upload je log bestanden", "De tool parseert de data", "Bekijk crawl patronen", "Optimaliseer crawl efficiëntie"] },
  { slug: "dns-checker", name: "DNS Checker", icon: "Globe", category: "technisch", short: "Controleer je DNS configuratie.", what: "Verifieer dat je DNS correct is ingesteld voor optimale SEO en snelheid.", steps: ["Vul je domein in", "De tool checkt DNS records", "Bekijk de configuratie", "Optimaliseer waar nodig"] },
  { slug: "mixed-content-checker", name: "Mixed Content Checker", icon: "ShieldAlert", category: "technisch", short: "Vind mixed content op HTTPS pagina's.", what: "Identificeer HTTP resources op HTTPS pagina's die beveiligingswaarschuwingen veroorzaken.", steps: ["Vul je HTTPS URL in", "De tool scant alle resources", "Bekijk HTTP resources", "Update naar HTTPS"] },

  // ─── P2: Extra Content (8) ─────────────────────────────────────
  { slug: "heading-generator", name: "Heading Generator", icon: "Type", category: "content", short: "Genereer SEO-geoptimaliseerde headings.", what: "Maak aantrekkelijke H1 en H2 koppen die zoekwoorden bevatten en klikken genereren.", steps: ["Vul je onderwerp en zoekwoord in", "De tool genereert opties", "Kies de beste heading", "Pas aan en gebruik"] },
  { slug: "content-score-checker", name: "Content Score Checker", icon: "BarChart", category: "content", short: "Beoordeel je content op SEO-kwaliteit.", what: "Krijg een score voor je content op basis van lengte, zoekwoorden, structuur en leesbaarheid.", steps: ["Plak je tekst of URL in", "De tool analyseert de content", "Bekijk je score", "Verbeter tot 80+"] },
  { slug: "seo-schrijfassistent", name: "SEO Schrijfassistent", icon: "PenTool", category: "content", short: "Real-time SEO feedback bij het schrijven.", what: "Krijg directe suggesties over zoekwoordgebruik, leesbaarheid en structuur tijdens het schrijven.", steps: ["Start met schrijven", "De tool geeft real-time feedback", "Pas je tekst aan", "Publiceer geoptimaliseerde content"] },
  { slug: "slug-generator", name: "URL Slug Generator", icon: "Link", category: "content", short: "Genereer SEO-vriendelijke URL slugs.", what: "Maak korte, beschrijvende URL's die goed scoren in Google.", steps: ["Vul je paginatitel in", "De tool genereert een slug", "Pas indien nodig aan", "Gebruik in je CMS"] },
  { slug: "internal-link-suggestie", name: "Interne Link Suggestie Tool", icon: "GitBranch", category: "content", short: "Krijg suggesties voor interne links.", what: "De tool analyseert je content en suggereert relevante interne links naar andere pagina's.", steps: ["Plak je tekst in", "De tool scant op link kansen", "Bekijk suggesties", "Voeg de beste links toe"] },
  { slug: "featured-snippet-optimizer", name: "Featured Snippet Optimizer", icon: "Award", category: "content", short: "Optimaliseer je content voor featured snippets.", what: "Analyseer of je content geschikt is voor Google's featured snippet positie.", steps: ["Vul je URL en zoekwoord in", "De tool analyseert snippet kansen", "Bekijk optimalisatie tips", "Pas je content aan"] },
  { slug: "faq-generator", name: "FAQ Generator", icon: "HelpCircle", category: "content", short: "Genereer veelgestelde vragen voor je pagina.", what: "Maak relevante FAQ's op basis van je onderwerp die je SEO en conversie verbeteren.", steps: ["Vul je onderwerp in", "De tool genereert vragen", "Selecteer de beste vragen", "Voeg toe aan je pagina"] },
  { slug: "content-brief-generator", name: "Content Brief Generator", icon: "FileText", category: "content", short: "Maak een SEO content brief.", what: "Genereer een compleet schrijfplan voor je volgende blogpost of pagina.", steps: ["Vul je target zoekwoord in", "De tool maakt een brief", "Bekijk structuur en zoekwoorden", "Schrijf op basis van de brief"] },

  // ─── P2: Extra Linkbuilding (8) ────────────────────────────────
  { slug: "link-building-kansen", name: "Link Building Kansen Tool", icon: "Target", category: "linkbuilding", short: "Vind nieuwe linkbuilding mogelijkheden.", what: "Ontdek websites en pagina's waar je mogelijk een backlink kunt krijgen.", steps: ["Vul je niche en zoekwoorden in", "De tool vindt kansen", "Sorteer op relevantie", "Start je outreach"] },
  { slug: "gastblog-finder", name: "Gastblog Finder", icon: "PenTool", category: "linkbuilding", short: "Vind websites die gastblogs accepteren.", what: "Ontdek relevante websites waar je gastartikelen kunt plaatsen voor backlinks.", steps: ["Vul je niche in", "De tool vindt gastblog sites", "Filter op autoriteit", "Pitch je artikel idee"] },
  { slug: "resource-pagina-finder", name: "Resource Pagina Finder", icon: "Bookmark", category: "linkbuilding", short: "Vind resource pagina's voor link plaatsing.", what: "Ontdek pagina's die links naar nuttige resources verzamelen, ideaal voor linkbuilding.", steps: ["Vul je onderwerp in", "De tool vindt resource pagina's", "Filter op relevantie", "Pitch je resource"] },
  { slug: "mention-finder", name: "Brand Mention Finder", icon: "AtSign", category: "linkbuilding", short: "Vind vermeldingen van je merk zonder link.", what: "Ontdek waar je merk wordt genoemd maar geen link heeft, en vraag er alsnog een.", steps: ["Vul je merknaam in", "De tool zoekt vermeldingen", "Filter op vermeldingen zonder link", "Vraag een link aan"] },
  { slug: "infographic-submitter", name: "Infographic Submitter", icon: "Image", category: "linkbuilding", short: "Verspreid je infographics voor backlinks.", what: "Vind platforms en directories waar je infographics kunt delen voor backlinks.", steps: ["Upload je infographic", "De tool vindt submissie sites", "Dien in op relevante platforms", "Monitor verkregen links"] },
  { slug: "link-reclamation-tool", name: "Link Reclamation Tool", icon: "RefreshCw", category: "linkbuilding", short: "Win verloren backlinks terug.", what: "Vind backlinks die je ooit had maar bent kwijtgeraakt en probeer ze terug te krijgen.", steps: ["Vul je domein in", "De tool vindt verloren links", "Analyseer de oorzaken", "Neem contact op voor herstel"] },
  { slug: "broken-link-finder", name: "Broken Link Building Tool", icon: "Unlink", category: "linkbuilding", short: "Vind kapotte links op andere websites.", what: "Ontdek broken links op relevante websites en bied je eigen content als vervanging aan.", steps: ["Vul een niche URL in", "De tool vindt broken links", "Maak vervangende content", "Mail de webmaster"] },
  { slug: "disavow-generator", name: "Disavow File Generator", icon: "FileX", category: "linkbuilding", short: "Genereer een Google Disavow bestand.", what: "Maak een correct geformateerd disavow bestand om toxische backlinks te neutraliseren.", steps: ["Upload je backlink lijst", "Markeer toxische links", "De tool genereert het bestand", "Upload naar Search Console"] },

  // ─── P2: Extra Lokaal (8) ──────────────────────────────────────
  { slug: "lokale-seo-audit", name: "Lokale SEO Audit Tool", icon: "ClipboardCheck", category: "lokaal", short: "Complete audit van je lokale SEO.", what: "Analyseer alle aspecten van je lokale vindbaarheid in één overzicht.", steps: ["Vul je bedrijfsgegevens in", "De tool voert een audit uit", "Bekijk het rapport", "Volg de aanbevelingen op"] },
  { slug: "google-maps-checker", name: "Google Maps Checker", icon: "Map", category: "lokaal", short: "Check je positie in Google Maps.", what: "Zie waar je bedrijf verschijnt in Google Maps voor relevante zoekwoorden.", steps: ["Vul je bedrijf en zoekwoord in", "De tool checkt Google Maps", "Bekijk je positie", "Optimaliseer je listing"] },
  { slug: "review-link-generator", name: "Review Link Generator", icon: "Link2", category: "lokaal", short: "Genereer een directe Google review link.", what: "Maak een link die klanten direct naar je Google review formulier stuurt.", steps: ["Zoek je bedrijf op", "De tool genereert de link", "Kopieer de link", "Deel met klanten"] },
  { slug: "opening-uren-checker", name: "Openingstijden Checker", icon: "Clock", category: "lokaal", short: "Controleer je openingstijden overal.", what: "Check of je openingstijden consistent zijn op Google, Facebook en andere platforms.", steps: ["Vul je bedrijf in", "De tool checkt alle platforms", "Bekijk inconsistenties", "Update waar nodig"] },
  { slug: "lokale-schema-checker", name: "Lokale Schema Checker", icon: "Code", category: "lokaal", short: "Valideer je LocalBusiness schema.", what: "Controleer of je LocalBusiness structured data correct en volledig is.", steps: ["Vul je URL in", "De tool checkt je schema", "Bekijk ontbrekende velden", "Voeg toe wat mist"] },
  { slug: "bedrijvengids-checker", name: "Bedrijvengids Checker", icon: "BookOpen", category: "lokaal", short: "Check je vermelding in bedrijvengidsen.", what: "Controleer op welke bedrijvengidsen je wel en niet vermeld staat.", steps: ["Vul je bedrijfsnaam in", "De tool checkt gidsen", "Bekijk ontbrekende vermeldingen", "Meld je aan"] },
  { slug: "qr-code-generator", name: "Review QR Code Generator", icon: "QrCode", category: "lokaal", short: "Maak een QR code voor Google reviews.", what: "Genereer een QR code die klanten direct naar je Google review pagina brengt.", steps: ["Zoek je bedrijf op", "De tool maakt een QR code", "Download de QR code", "Print en toon in je zaak"] },
  { slug: "lokale-content-suggestie", name: "Lokale Content Suggestie Tool", icon: "Lightbulb", category: "lokaal", short: "Krijg content ideeën voor lokale SEO.", what: "Ontdek welke lokale onderwerpen je kunt schrijven om beter gevonden te worden.", steps: ["Vul je stad en branche in", "De tool genereert ideeën", "Kies de beste onderwerpen", "Schrijf en publiceer"] },

  // ─── P2: Extra Monitoring (7) ──────────────────────────────────
  { slug: "backlink-monitor", name: "Backlink Monitor", icon: "Link", category: "monitoring", short: "Monitor nieuwe en verloren backlinks.", what: "Krijg notificaties wanneer je nieuwe backlinks krijgt of bestaande verliest.", steps: ["Vul je domein in", "De tool monitort je links", "Bekijk veranderingen", "Reageer op verloren links"] },
  { slug: "keyword-positie-alert", name: "Keyword Positie Alert", icon: "Bell", category: "monitoring", short: "Krijg alerts bij ranking veranderingen.", what: "Ontvang een melding wanneer je zoekwoordposities significant veranderen.", steps: ["Stel je zoekwoorden in", "Kies je alert drempels", "De tool monitort dagelijks", "Ontvang meldingen"] },
  { slug: "site-wijziging-detector", name: "Site Wijziging Detector", icon: "Eye", category: "monitoring", short: "Detecteer onverwachte wijzigingen op je site.", what: "Monitor je website op onverwachte veranderingen die je SEO kunnen beïnvloeden.", steps: ["Vul je URL in", "De tool maakt snapshots", "Bekijk veranderingen", "Onderneem actie"] },
  { slug: "concurrentie-monitor", name: "Concurrentie Monitor", icon: "Users", category: "monitoring", short: "Monitor SEO activiteiten van concurrenten.", what: "Volg wat je concurrenten doen op SEO-gebied en reageer proactief.", steps: ["Voeg concurrenten toe", "De tool monitort hun activiteit", "Bekijk updates", "Pas je strategie aan"] },
  { slug: "content-veroudering-checker", name: "Content Veroudering Checker", icon: "Clock", category: "monitoring", short: "Vind content die aan update toe is.", what: "Identificeer pagina's met verouderde informatie die je rankings kunnen verliezen.", steps: ["Vul je domein in", "De tool analyseert content leeftijd", "Bekijk verouderde pagina's", "Update prioritair"] },
  { slug: "indexatie-monitor", name: "Indexatie Monitor", icon: "Database", category: "monitoring", short: "Monitor hoeveel pagina's Google indexeert.", what: "Volg het aantal geïndexeerde pagina's en krijg een alert bij plotselinge dalingen.", steps: ["Vul je domein in", "De tool checkt dagelijks", "Bekijk indexatie trends", "Reageer op dalingen"] },
  { slug: "ssl-verloop-monitor", name: "SSL Verloop Monitor", icon: "Shield", category: "monitoring", short: "Monitor de vervaldatum van je SSL.", what: "Krijg een melding voordat je SSL certificaat verloopt, zodat je nooit een ranking verliest.", steps: ["Vul je domein in", "De tool checkt de vervaldatum", "Stel alerts in", "Vernieuw op tijd"] },

  // ─── P2: Extra Snelheid (7) ────────────────────────────────────
  { slug: "lighthouse-tester", name: "Lighthouse Tester", icon: "Zap", category: "snelheid", short: "Voer een Lighthouse audit uit.", what: "Krijg een complete Google Lighthouse audit met scores voor performance, SEO en accessibility.", steps: ["Vul je URL in", "De tool voert Lighthouse uit", "Bekijk scores per categorie", "Verbeter rode punten"] },
  { slug: "ttfb-tester", name: "TTFB Tester", icon: "Clock", category: "snelheid", short: "Meet je Time to First Byte.", what: "Test hoe snel je server reageert, de eerste stap in een snelle website.", steps: ["Vul je URL in", "De tool meet TTFB", "Vergelijk met benchmarks", "Optimaliseer server response"] },
  { slug: "waterfall-analyzer", name: "Waterfall Analyzer", icon: "BarChart2", category: "snelheid", short: "Analyseer de laadvolgorde van je pagina.", what: "Bekijk precies welke bestanden wanneer laden en waar de bottlenecks zitten.", steps: ["Vul je URL in", "De tool genereert een waterfall", "Identificeer bottlenecks", "Optimaliseer de laadvolgorde"] },
  { slug: "cdn-tester", name: "CDN Performance Tester", icon: "Globe", category: "snelheid", short: "Test je CDN prestaties.", what: "Meet hoe snel je website laadt vanuit verschillende locaties wereldwijd.", steps: ["Vul je URL in", "De tool test vanuit meerdere locaties", "Bekijk laadtijden per regio", "Optimaliseer je CDN configuratie"] },
  { slug: "font-optimizer", name: "Font Optimizer", icon: "Type", category: "snelheid", short: "Optimaliseer je webfonts voor snelheid.", what: "Analyseer en optimaliseer het laden van fonts op je website.", steps: ["Vul je URL in", "De tool analyseert font loading", "Bekijk optimalisatie kansen", "Implementeer font-display swap"] },
  { slug: "third-party-checker", name: "Third Party Script Checker", icon: "ExternalLink", category: "snelheid", short: "Analyseer third-party scripts impact.", what: "Bekijk hoeveel externe scripts je laadtijd vertragen.", steps: ["Vul je URL in", "De tool identificeert scripts", "Bekijk de impact per script", "Verwijder of defer onnodige scripts"] },
  { slug: "caching-checker", name: "Cache Header Checker", icon: "HardDrive", category: "snelheid", short: "Controleer je cache headers.", what: "Verifieer dat je website correct gebruik maakt van browser caching.", steps: ["Vul je URL in", "De tool checkt cache headers", "Bekijk per resource", "Configureer optimale caching"] },

  // ─── P2: Extra Structured Data (8) ─────────────────────────────
  { slug: "article-schema-generator", name: "Article Schema Generator", icon: "FileText", category: "structured-data", short: "Genereer Article Schema voor blogposts.", what: "Maak Article structured data voor je blogposts en nieuwsartikelen.", steps: ["Vul je artikel gegevens in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan je pagina"] },
  { slug: "event-schema-generator", name: "Event Schema Generator", icon: "Calendar", category: "structured-data", short: "Genereer Event Schema markup.", what: "Maak Event structured data voor je evenementen en workshops.", steps: ["Vul evenement details in", "De tool genereert JSON-LD", "Kopieer de code", "Implementeer op je site"] },
  { slug: "review-schema-generator", name: "Review Schema Generator", icon: "Star", category: "structured-data", short: "Genereer Review Schema markup.", what: "Maak Review en AggregateRating structured data voor sterren in Google.", steps: ["Vul review gegevens in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan je pagina"] },
  { slug: "video-schema-generator", name: "Video Schema Generator", icon: "Video", category: "structured-data", short: "Genereer VideoObject Schema markup.", what: "Maak Video structured data zodat je video's verschijnen in Google video resultaten.", steps: ["Vul video details in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan je pagina"] },
  { slug: "howto-schema-generator", name: "HowTo Schema Generator", icon: "List", category: "structured-data", short: "Genereer HowTo Schema markup.", what: "Maak HowTo structured data voor je stap-voor-stap handleidingen.", steps: ["Vul je stappen in", "De tool genereert JSON-LD", "Kopieer de code", "Implementeer op je site"] },
  { slug: "recipe-schema-generator", name: "Recipe Schema Generator", icon: "ChefHat", category: "structured-data", short: "Genereer Recipe Schema markup.", what: "Maak Recipe structured data voor je recepten pagina's.", steps: ["Vul recept details in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan je recept"] },
  { slug: "software-schema-generator", name: "SoftwareApp Schema Generator", icon: "Smartphone", category: "structured-data", short: "Genereer SoftwareApplication Schema.", what: "Maak Software structured data voor je apps en software producten.", steps: ["Vul app details in", "De tool genereert JSON-LD", "Kopieer de code", "Implementeer op je pagina"] },
  { slug: "organization-schema-generator", name: "Organization Schema Generator", icon: "Building", category: "structured-data", short: "Genereer Organization Schema markup.", what: "Maak Organization structured data voor betere merkherkenning in Google.", steps: ["Vul bedrijfsgegevens in", "De tool genereert JSON-LD", "Kopieer de code", "Voeg toe aan je homepage"] },

  // ─── P2: Extra Keyword (8) ─────────────────────────────────────
  { slug: "related-keyword-tool", name: "Related Keyword Tool", icon: "GitBranch", category: "keyword", short: "Vind gerelateerde zoekwoorden.", what: "Ontdek semantisch gerelateerde zoekwoorden om je content te verrijken.", steps: ["Vul je hoofd zoekwoord in", "De tool vindt gerelateerde termen", "Selecteer relevante woorden", "Verwerk in je content"] },
  { slug: "keyword-moeilijkheid-tool", name: "Keyword Moeilijkheid Tool", icon: "BarChart", category: "keyword", short: "Bepaal hoe moeilijk een zoekwoord is.", what: "Schat in hoe moeilijk het is om te ranken voor een specifiek zoekwoord.", steps: ["Vul je zoekwoord in", "De tool berekent de moeilijkheid", "Bekijk de score", "Kies haalbare zoekwoorden"] },
  { slug: "zoekwoord-combinatie-tool", name: "Zoekwoord Combinatie Tool", icon: "Shuffle", category: "keyword", short: "Combineer zoekwoorden tot nieuwe varianten.", what: "Maak alle mogelijke combinaties van zoekwoord lijsten voor uitgebreid onderzoek.", steps: ["Vul twee of meer woordlijsten in", "De tool combineert ze", "Bekijk alle varianten", "Filter op relevantie"] },
  { slug: "lsi-keyword-tool", name: "LSI Keyword Tool", icon: "Brain", category: "keyword", short: "Vind LSI (latent semantic) zoekwoorden.", what: "Ontdek zoekwoorden die Google associeert met je hoofdonderwerp.", steps: ["Vul je onderwerp in", "De tool vindt LSI termen", "Selecteer de beste", "Gebruik in je content"] },
  { slug: "zoekwoord-positie-checker", name: "Zoekwoord Positie Checker", icon: "Navigation", category: "keyword", short: "Check je positie voor een zoekwoord.", what: "Zie exact waar je website staat in Google voor een specifiek zoekwoord.", steps: ["Vul zoekwoord en URL in", "De tool checkt Google", "Bekijk je positie", "Optimaliseer indien nodig"] },
  { slug: "people-also-ask-tool", name: "People Also Ask Tool", icon: "HelpCircle", category: "keyword", short: "Vind 'Mensen vragen ook' vragen.", what: "Ontdek welke vragen Google toont in het 'Mensen vragen ook' blok.", steps: ["Vul je zoekwoord in", "De tool verzamelt PAA vragen", "Selecteer relevante vragen", "Beantwoord in je content"] },
  { slug: "autocomplete-scraper", name: "Google Autocomplete Tool", icon: "Search", category: "keyword", short: "Ontdek Google Autocomplete suggesties.", what: "Verzamel alle Google Autocomplete suggesties voor je zoekwoord.", steps: ["Vul je zoekwoord in", "De tool haalt suggesties op", "Filter op relevantie", "Gebruik als content ideeën"] },
  { slug: "zoektrend-analyzer", name: "Zoektrend Analyzer", icon: "TrendingUp", category: "keyword", short: "Analyseer zoektrends over tijd.", what: "Bekijk hoe het zoekvolume van je zoekwoorden zich ontwikkelt over maanden en jaren.", steps: ["Vul je zoekwoorden in", "De tool toont trends", "Vergelijk meerdere termen", "Plan je content strategie"] },
];

export const tools: ToolData[] = toolInputs.map(createTool);

export function getToolBySlug(slug: string): ToolData | undefined {
  return tools.find(t => t.slug === slug);
}

/** Returns true if tool has enough unique content for Google indexation */
export function isToolContentComplete(tool: ToolData): boolean {
  return !!(tool.uniqueIntro && tool.whatThisToolChecks && tool.uniqueFaqs && tool.uniqueFaqs.length >= 2);
}

export const toolCategories: Record<ToolCategory, string> = {
  analyse: "SEO Analyse",
  technisch: "Technische SEO",
  content: "Content Optimalisatie",
  linkbuilding: "Linkbuilding",
  lokaal: "Lokale SEO",
  monitoring: "SEO Monitoring",
  snelheid: "Website Snelheid",
  "structured-data": "Structured Data",
  keyword: "Zoekwoorden",
  concurrentie: "Concurrentie Analyse",
};
