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

function createTool(input: ToolInput): ToolData {
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
    faqs: categoryFaqs[input.category](input.name),
  };
}

const toolInputs: ToolInput[] = [
  // Analyse (10)
  { slug: "seo-checker", name: "SEO Checker", icon: "Search", category: "analyse", short: "Analyseer je website op de belangrijkste SEO-factoren.", what: "De SEO Checker scant je website op meta tags, headings, content kwaliteit, interne links en meer. Je krijgt een duidelijk rapport met verbeterpunten.", steps: ["Vul je URL in", "De tool scant je pagina", "Bekijk je SEO-score en verbeterpunten", "Pas de suggesties toe"] },
  { slug: "website-analyse", name: "Website Analyse Tool", icon: "BarChart", category: "analyse", short: "Complete analyse van je website prestaties.", what: "Analyseer je website op SEO, snelheid, mobiel-vriendelijkheid en meer. Krijg een compleet overzicht van je online prestaties.", steps: ["Voer je website URL in", "Wacht op de analyse", "Bekijk je scores per categorie", "Volg de aanbevelingen op"] },
  { slug: "seo-score-checker", name: "SEO Score Checker", icon: "Award", category: "analyse", short: "Bereken je SEO-score van 0 tot 100.", what: "De SEO Score Checker geeft je website een score van 0 tot 100 op basis van technische SEO, content en autoriteit.", steps: ["Vul je URL in", "De tool berekent je score", "Bekijk je score per categorie", "Werk aan de laagste scores"] },
  { slug: "serp-checker", name: "SERP Checker", icon: "Eye", category: "analyse", short: "Bekijk hoe je website verschijnt in Google.", what: "De SERP Checker toont hoe je pagina eruitziet in de zoekresultaten van Google, inclusief titel en beschrijving.", steps: ["Vul je URL in", "Bekijk je SERP-weergave", "Optimaliseer titel en beschrijving", "Check opnieuw"] },
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
];

export const tools: ToolData[] = toolInputs.map(createTool);

export function getToolBySlug(slug: string): ToolData | undefined {
  return tools.find(t => t.slug === slug);
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
