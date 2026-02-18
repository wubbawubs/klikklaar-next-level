import { ServiceVariantData } from "./service-variants";

// ============================================
// P4: BUREAU + SCAN for 10 new services
// ============================================

// --- 1. Content Optimalisatie ---
const contentOptimalisatieBureau: ServiceVariantData = {
  slug: "content-optimalisatie-bureau",
  serviceName: "Content Optimalisatie",
  variant: "uitbesteden",
  headline: "Content Optimalisatie Bureau Nodig?",
  subheadline: "Bureaukwaliteit content optimalisatie zonder de bureaukosten",
  subtitlePoints: ["Data-gedreven", "Continue verbetering", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een content optimalisatie bureau?",
  whatIsText: [
    "Je wilt je bestaande content laten verbeteren door professionals. Een bureau biedt expertise, maar ook hoge kosten en lange contracten.",
    "KlikKlaarSEO levert dezelfde kwaliteit content optimalisatie, maar dan data-gedreven en betaalbaar. Elke pagina wordt geanalyseerd op zoekintentie, concurrentie en verbeterpotentieel."
  ],
  benefits: [
    { icon: "FileText", title: "Content expertise", description: "Dezelfde kwaliteit als een top-bureau" },
    { icon: "BarChart", title: "Data-gedreven", description: "Optimalisatie gebaseerd op zoekdata, niet op gevoel" },
    { icon: "Wallet", title: "70% goedkoper", description: "Bureau-resultaten voor een fractie van de prijs" },
    { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Per pagina zien hoe de rankings stijgen" },
    { icon: "Bot", title: "AI-ready", description: "Content ook geoptimaliseerd voor AI-zoekmachines" }
  ],
  processSteps: [
    { step: 1, title: "Content audit", description: "We analyseren al je bestaande content op SEO-potentieel" },
    { step: 2, title: "Prioritering", description: "De pagina's met het meeste groeipotentieel worden eerst aangepakt" },
    { step: 3, title: "Optimalisatie", description: "Content wordt verbeterd op basis van data en best practices" },
    { step: 4, title: "Rapportage", description: "Wekelijks inzicht in verbeterde pagina's en hun prestaties" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €800", klikklaar: "€99 - €249" },
    { feature: "Snelheid", bureau: "Weken per cyclus", freelancer: "Wisselend", klikklaar: "Continue optimalisatie" },
    { feature: "Data-analyse", bureau: "Handmatig", freelancer: "Beperkt", klikklaar: "Geautomatiseerd" },
    { feature: "AI-optimalisatie", bureau: "Zelden", freelancer: "Nee", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "FileText", title: "Bureaukwaliteit", description: "Professionele content optimalisatie." },
    { icon: "TrendingUp", title: "Meetbaar", description: "Per pagina resultaat zichtbaar." }
  ],
  faqs: [
    { question: "Is KlikKlaarSEO een content bureau?", answer: "We leveren bureau-kwaliteit content optimalisatie, maar werken slimmer: data-gedreven en geautomatiseerd. Het resultaat is hetzelfde of beter, maar sneller en betaalbaarder." },
    { question: "Schrijven jullie ook nieuwe content?", answer: "Bij het Pro+ pakket is contentcreatie inbegrepen. De focus ligt op het optimaliseren van bestaande content — dat levert vaak sneller resultaat." },
    { question: "Hoe verschilt dit van een copywriter?", answer: "Een copywriter schrijft teksten. Wij optimaliseren bestaande content op basis van zoekdata: structuur, zoekwoorden, interne links, meta data en AI-gereedheid." },
    { question: "Hoeveel kost een content bureau normaal?", answer: "€500-€2.000/mnd bij een bureau. Bij KlikKlaarSEO vanaf €99/mnd met continue optimalisatie." },
    { question: "Hoe snel zie ik resultaten?", answer: "Geoptimaliseerde pagina's stijgen doorgaans binnen 4-8 weken in rankings." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "Content Optimalisatie Bureau | Data-Gedreven | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een content optimalisatie bureau? KlikKlaarSEO biedt data-gedreven content verbetering. Vanaf €99/mnd, altijd opzegbaar."
};

const contentOptimalisatieScan: ServiceVariantData = {
  slug: "content-optimalisatie-scan",
  serviceName: "Content Optimalisatie",
  variant: "uitbesteden",
  headline: "Content Optimalisatie Scan",
  subheadline: "Ontdek welke pagina's het meeste SEO-potentieel hebben",
  subtitlePoints: ["Content audit", "Prioriteitenlijst", "Direct inzicht"],
  whatIsTitle: "Wat is een content optimalisatie scan?",
  whatIsText: [
    "Een content optimalisatie scan analyseert al je bestaande content op SEO-potentieel. Welke pagina's scoren al goed maar kunnen beter? Welke pagina's liggen net onder de eerste pagina? Waar zitten de quick wins?",
    "Het resultaat is een geprioriteerde lijst met concrete verbeterpunten per pagina. Bij KlikKlaarSEO pakken we die verbeteringen ook daadwerkelijk op."
  ],
  benefits: [
    { icon: "FileText", title: "Volledige content audit", description: "Elke pagina beoordeeld op SEO-waarde" },
    { icon: "TrendingUp", title: "Groeikansen", description: "Pagina's met het meeste verbeterpotentieel" },
    { icon: "Search", title: "Zoekintentie analyse", description: "Matcht je content met wat zoekers willen?" },
    { icon: "Bot", title: "AI-gereedheid", description: "Hoe goed scoort je content in AI-zoekmachines?" },
    { icon: "ClipboardCheck", title: "Actiepunten per pagina", description: "Concrete verbeteringen per pagina" }
  ],
  processSteps: [
    { step: 1, title: "Website opgeven", description: "We inventariseren al je bestaande content" },
    { step: 2, title: "Content analyse", description: "Elke pagina wordt beoordeeld op SEO-factoren" },
    { step: 3, title: "Prioriteitenrapport", description: "Je ontvangt een geprioriteerde lijst met verbeterpunten" },
    { step: 4, title: "Actie ondernemen", description: "Start een abonnement en de verbeteringen worden automatisch doorgevoerd" }
  ],
  faqs: [
    { question: "Wat controleert de content scan?", answer: "Zoekintentie match, keyword density, heading structuur, content lengte, interne links, meta tags, content freshness, duplicate content en AI-gereedheid." },
    { question: "Is de content scan gratis?", answer: "We bieden een gratis adviesgesprek met de belangrijkste inzichten. De volledige content scan is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De scan draait binnen uren. Een volledig rapport met geprioriteerde verbeterpunten per pagina is binnen 1-2 werkdagen klaar." },
    { question: "Hoeveel pagina's worden gescand?", answer: "Alle indexeerbare pagina's op je website. Van productpagina's tot blogposts — alles wordt meegenomen." },
    { question: "Wat kan ik met de resultaten?", answer: "Het rapport bevat concrete verbeterpunten per pagina die je zelf kunt doorvoeren. Of start een abonnement en wij pakken alles op." },
    { question: "Checkt de scan ook AI-vindbaarheid?", answer: "Ja, we analyseren hoe goed je content opgepikt wordt door ChatGPT, Perplexity en Google AI Overview." }
  ],
  metaTitle: "Content Optimalisatie Scan | Content Audit | Direct Inzicht",
  metaDescription: "Content optimalisatie scan: ontdek welke pagina's het meeste SEO-potentieel hebben. Geprioriteerde verbeterpunten per pagina. Direct inzicht."
};

// --- 2. SEO Teksten ---
const seoTekstenBureau: ServiceVariantData = {
  slug: "seo-teksten-bureau",
  serviceName: "SEO Teksten",
  variant: "uitbesteden",
  headline: "SEO Teksten Bureau Nodig?",
  subheadline: "Professionele SEO-teksten zonder de kosten van een contentbureau",
  subtitlePoints: ["Keyword-geoptimaliseerd", "Conversiegericht", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO teksten bureau?",
  whatIsText: [
    "Je wilt professionele SEO-teksten die scoren in Google en bezoekers omzetten in klanten. Een contentbureau kan dat, maar rekent €200-€800 per tekst.",
    "KlikKlaarSEO biedt dezelfde kwaliteit SEO-teksten, maar dan structureel en betaalbaar. Data-gedreven keyword research, overtuigende copy en AI-optimalisatie — alles inbegrepen."
  ],
  benefits: [
    { icon: "PenTool", title: "Professionele kwaliteit", description: "SEO-teksten op bureau-niveau" },
    { icon: "BarChart", title: "Data-gedreven", description: "Keyword research bepaalt elk onderwerp" },
    { icon: "Target", title: "Conversiegericht", description: "Teksten die niet alleen ranken maar ook converteren" },
    { icon: "Wallet", title: "Betaalbaar", description: "Geen €200-€800 per tekst maar inbegrepen bij abonnement" },
    { icon: "Bot", title: "AI-optimalisatie", description: "Teksten geoptimaliseerd voor AI-zoekmachines" }
  ],
  processSteps: [
    { step: 1, title: "Keyword research", description: "Data-gedreven onderzoek naar kansrijke zoekwoorden" },
    { step: 2, title: "Content planning", description: "Redactioneel plan met onderwerpen en prioriteiten" },
    { step: 3, title: "Professionele teksten", description: "SEO-geoptimaliseerde teksten worden geschreven" },
    { step: 4, title: "Publicatie & monitoring", description: "Teksten worden geplaatst en rankings gevolgd" }
  ],
  comparisonData: [
    { feature: "Kosten per tekst", bureau: "€200 - €800", freelancer: "€100 - €400", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Keyword research", bureau: "Extra dienst", freelancer: "Beperkt", klikklaar: "Standaard inbegrepen" },
    { feature: "Content strategie", bureau: "Extra kosten", freelancer: "Zelden", klikklaar: "Inbegrepen" },
    { feature: "AI-optimalisatie", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard" },
    { feature: "Contractduur", bureau: "Projectmatig", freelancer: "Per tekst", klikklaar: "Maandelijks opzegbaar" },
    { feature: "SEO-expertise", bureau: "Wisselend", freelancer: "Basis", klikklaar: "Gespecialiseerd" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "PenTool", title: "Bureau-kwaliteit", description: "Professionele SEO-teksten." },
    { icon: "TrendingUp", title: "Meetbaar", description: "Volg de rankings per tekst." }
  ],
  faqs: [
    { question: "Is KlikKlaarSEO een contentbureau?", answer: "We bieden bureau-kwaliteit SEO-teksten als onderdeel van onze dienst. Het verschil: data-gedreven, structureel en betaalbaar." },
    { question: "Hoeveel kost een SEO tekst bij een bureau?", answer: "€200-€800 per tekst bij een bureau. Bij ons zitten teksten inbegrepen in het abonnement vanaf €99/mnd." },
    { question: "Hoe lang zijn de teksten?", answer: "Afhankelijk van concurrentie en zoekintentie: gemiddeld 800-2.000 woorden, maar altijd precies zo lang als nodig." },
    { question: "Krijg ik ook een content strategie?", answer: "Ja, bij het Pro+ pakket. We bepalen welke onderwerpen het meeste SEO-potentieel hebben voor jouw branche." },
    { question: "Kan ik teksten laten aanpassen?", answer: "Ja, revisierondjes zijn inbegrepen. De teksten zijn van jou." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO Teksten Bureau | Professioneel & Betaalbaar | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO teksten bureau? KlikKlaarSEO biedt professionele SEO-teksten, data-gedreven en betaalbaar. Vanaf €99/mnd."
};

const seoTekstenScan: ServiceVariantData = {
  slug: "seo-teksten-scan",
  serviceName: "SEO Teksten",
  variant: "uitbesteden",
  headline: "SEO Teksten Scan",
  subheadline: "Ontdek waar je content tekortschiet en wat de kansen zijn",
  subtitlePoints: ["Content gap analyse", "Keyword kansen", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO teksten scan?",
  whatIsText: [
    "Een SEO teksten scan analyseert je bestaande websiteteksten en identificeert kansen voor nieuwe content. Welke zoekwoorden mis je? Waar scoort je content onder de maat? Waar liggen de quick wins?",
    "Het resultaat is een helder overzicht van content gaps en verbeterpunten, met een geprioriteerd actieplan voor maximale SEO-impact."
  ],
  benefits: [
    { icon: "Search", title: "Content gap analyse", description: "Ontdek welke zoekwoorden je mist" },
    { icon: "FileText", title: "Kwaliteitscheck", description: "Bestaande teksten beoordeeld op SEO-kwaliteit" },
    { icon: "TrendingUp", title: "Groeikansen", description: "Waar liggen de grootste content-kansen?" },
    { icon: "Target", title: "Zoekintentie match", description: "Matcht je content met wat zoekers willen?" },
    { icon: "ClipboardCheck", title: "Actieplan", description: "Geprioriteerde lijst met verbeteringen" }
  ],
  processSteps: [
    { step: 1, title: "Website opgeven", description: "Geef je website URL en branche op" },
    { step: 2, title: "Content analyse", description: "We analyseren al je teksten op SEO-kwaliteit" },
    { step: 3, title: "Gap analyse", description: "We identificeren ontbrekende content en keyword kansen" },
    { step: 4, title: "Actieplan", description: "Je ontvangt een geprioriteerd plan voor content verbetering" }
  ],
  faqs: [
    { question: "Wat controleert een SEO teksten scan?", answer: "Keyword coverage, content kwaliteit, zoekintentie match, heading structuur, interne linking, meta tags en content gaps ten opzichte van concurrenten." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan met actieplan is onderdeel van ons abonnement." },
    { question: "Wat is een content gap?", answer: "Een content gap is een zoekwoord of onderwerp waar je concurrenten wel voor ranken maar jij niet. Dit zijn kansen voor nieuwe content." },
    { question: "Hoeveel pagina's worden gescand?", answer: "Alle pagina's op je website worden geanalyseerd en vergeleken met de top-concurrenten in jouw branche." },
    { question: "Hoe snel krijg ik resultaten?", answer: "Eerste inzichten binnen uren, volledig rapport met actieplan binnen 1-2 werkdagen." },
    { question: "Wat doe ik met de resultaten?", answer: "Het rapport bevat concrete acties. Of start een abonnement en wij pakken alles op — van optimalisatie tot nieuwe content." }
  ],
  metaTitle: "SEO Teksten Scan | Content Gap Analyse | Direct Inzicht",
  metaDescription: "SEO teksten scan: ontdek content gaps en verbeterkansen. Geprioriteerd actieplan voor maximale SEO-impact. Direct inzicht."
};

// --- 3. Linkbuilding ---
const linkbuildingBureau: ServiceVariantData = {
  slug: "linkbuilding-bureau",
  serviceName: "Linkbuilding",
  variant: "uitbesteden",
  headline: "Linkbuilding Bureau Nodig?",
  subheadline: "Kwalitatieve backlinks zonder de kosten en risico's van een traditioneel bureau",
  subtitlePoints: ["Veilige strategie", "Transparante rapportage", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een linkbuilding bureau?",
  whatIsText: [
    "Je wilt je autoriteit versterken met kwalitatieve backlinks en zoekt een bureau dat dit professioneel aanpakt. Terecht — linkbuilding is een van de belangrijkste en riskantste SEO-onderdelen.",
    "Het probleem met veel linkbuilding bureaus: ze zijn duur (€100-€500 per link), binden je aan lange contracten en de kwaliteit is niet altijd transparant. KlikKlaarSEO biedt een transparant en veilig alternatief."
  ],
  benefits: [
    { icon: "Link", title: "Kwalitatieve links", description: "Alleen relevante links van betrouwbare websites" },
    { icon: "Shield", title: "Nul risico", description: "Witte-hoed strategie, geen spam of linkfarms" },
    { icon: "Eye", title: "Volledig transparant", description: "Zie precies welke links opgebouwd worden" },
    { icon: "Wallet", title: "Betaalbaar", description: "Geen €100-€500 per link maar inbegrepen bij abonnement" },
    { icon: "TrendingUp", title: "Groeiende autoriteit", description: "Domain Authority stijgt structureel" }
  ],
  processSteps: [
    { step: 1, title: "Link audit", description: "We analyseren je huidige linkprofiel en dat van concurrenten" },
    { step: 2, title: "Strategie", description: "De beste linkbuilding methoden voor jouw situatie" },
    { step: 3, title: "Uitvoering", description: "Links worden systematisch en veilig opgebouwd" },
    { step: 4, title: "Transparant rapport", description: "Elke maand zie je precies welke links erbij zijn gekomen" }
  ],
  comparisonData: [
    { feature: "Kosten per link", bureau: "€100 - €500+", freelancer: "€50 - €200", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Kwaliteitsgarantie", bureau: "Wisselend", freelancer: "Geen", klikklaar: "Alleen kwalitatief" },
    { feature: "Transparantie", bureau: "Maandelijks overzicht", freelancer: "Beperkt", klikklaar: "Volledig transparant" },
    { feature: "Risico", bureau: "Laag-gemiddeld", freelancer: "Gemiddeld-hoog", klikklaar: "Minimaal" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Monitoring", bureau: "Beperkt", freelancer: "Nee", klikklaar: "Continue monitoring" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen risico", description: "Witte-hoed linkbuilding, nul spam." },
    { icon: "Eye", title: "Transparant", description: "Elk rapport toont precies welke links erbij zijn." },
    { icon: "Link", title: "Kwalitatief", description: "Elke link beoordeeld op relevantie." }
  ],
  faqs: [
    { question: "Is KlikKlaarSEO een linkbuilding bureau?", answer: "We bieden bureau-kwaliteit linkbuilding als onderdeel van onze dienst. Transparanter, veiliger en betaalbaarder dan een traditioneel linkbuilding bureau." },
    { question: "Hoe garanderen jullie de kwaliteit?", answer: "Elke link wordt beoordeeld op Domain Authority, relevantie, verkeer en spam-score. Alleen links die aan onze kwaliteitseisen voldoen worden geaccepteerd." },
    { question: "Wat als een link wegvalt?", answer: "We monitoren je linkprofiel continu. Weggevallen links worden gesignaleerd en waar mogelijk vervangen." },
    { question: "Hoeveel kost linkbuilding bij een bureau?", answer: "€100-€500 per link bij een bureau. Bij KlikKlaarSEO zit linkbuilding inbegrepen in het Pro en Pro+ abonnement." },
    { question: "Gebruiken jullie PBN's of linkfarms?", answer: "Absoluut niet. Wij werken uitsluitend met witte-hoed methoden: digital PR, gastbloggen, resource pages en relevante directories." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar. De opgebouwde links blijven staan." }
  ],
  metaTitle: "Linkbuilding Bureau | Veilig & Transparant | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een linkbuilding bureau? KlikKlaarSEO biedt veilige, transparante linkbuilding. Alleen kwalitatieve backlinks. Vanaf €99/mnd."
};

const linkbuildingScan: ServiceVariantData = {
  slug: "linkbuilding-scan",
  serviceName: "Linkbuilding",
  variant: "uitbesteden",
  headline: "Linkbuilding Scan",
  subheadline: "Analyseer je linkprofiel en ontdek kansen voor meer autoriteit",
  subtitlePoints: ["Linkprofiel analyse", "Toxische link check", "Direct inzicht"],
  whatIsTitle: "Wat is een linkbuilding scan?",
  whatIsText: [
    "Een linkbuilding scan analyseert je volledige backlink profiel: hoeveel links heb je, van welke kwaliteit, en hoe vergelijk je met concurrenten? Daarnaast worden toxische links geïdentificeerd die je rankings kunnen schaden.",
    "Het resultaat is een helder overzicht van je linkprofiel met concrete kansen voor verbetering en waarschuwingen voor risico's."
  ],
  benefits: [
    { icon: "Link", title: "Linkprofiel overzicht", description: "Compleet overzicht van al je backlinks" },
    { icon: "Shield", title: "Toxische link detectie", description: "Schadelijke links die je rankings bedreigen" },
    { icon: "Users", title: "Concurrentie vergelijking", description: "Hoe staat je linkprofiel t.o.v. concurrenten?" },
    { icon: "TrendingUp", title: "Link kansen", description: "Waar kun je het makkelijkst links opbouwen?" },
    { icon: "ClipboardCheck", title: "Actieplan", description: "Concrete stappen voor een sterker linkprofiel" }
  ],
  processSteps: [
    { step: 1, title: "URL opgeven", description: "Geef je website URL op voor de linkbuilding scan" },
    { step: 2, title: "Linkprofiel analyse", description: "Al je backlinks worden geanalyseerd op kwaliteit" },
    { step: 3, title: "Concurrentie vergelijking", description: "Je profiel wordt vergeleken met top-concurrenten" },
    { step: 4, title: "Actieplan", description: "Concrete kansen en waarschuwingen in een helder rapport" }
  ],
  faqs: [
    { question: "Wat controleert een linkbuilding scan?", answer: "Aantal backlinks, verwijzende domeinen, Domain Authority, toxische links, anchor text verdeling, link groei en vergelijking met concurrenten." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Wat zijn toxische links?", answer: "Links van spam-websites, linkfarms of irrelevante bronnen die je rankings negatief kunnen beïnvloeden. Deze moeten gedisavowed worden." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De scan draait binnen enkele uren. Een volledig rapport is binnen 1-2 werkdagen klaar." },
    { question: "Kan ik zelf iets doen met de resultaten?", answer: "Ja, het rapport bevat concrete actiepunten. Of start een abonnement en wij bouwen je linkprofiel structureel op." },
    { question: "Vergelijken jullie ook met concurrenten?", answer: "Ja, we analyseren de linkprofielen van je top-concurrenten en identificeren kansen om ze in te halen." }
  ],
  metaTitle: "Linkbuilding Scan | Backlink Profiel Analyse | Direct Inzicht",
  metaDescription: "Linkbuilding scan: analyseer je backlink profiel, detecteer toxische links en ontdek kansen. Concurrentie vergelijking inbegrepen."
};

// --- 4. Google Bedrijfsprofiel ---
const googleBedrijfsprofielBureau: ServiceVariantData = {
  slug: "google-bedrijfsprofiel-bureau",
  serviceName: "Google Bedrijfsprofiel",
  variant: "uitbesteden",
  headline: "Google Bedrijfsprofiel Bureau Nodig?",
  subheadline: "Professioneel GMB-beheer zonder de kosten van een traditioneel bureau",
  subtitlePoints: ["Google Maps expertise", "Review management", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een Google Bedrijfsprofiel bureau?",
  whatIsText: [
    "Je wilt dat je Google Bedrijfsprofiel professioneel beheerd wordt: geoptimaliseerd, regelmatig bijgewerkt en je reviews actief gemanaged. Een bureau kan dat, maar kost €300-€1.000/mnd.",
    "KlikKlaarSEO biedt hetzelfde professionele beheer, maar geautomatiseerd en betaalbaar. Posts, foto's, reviews en Q&A worden continu beheerd voor maximale lokale zichtbaarheid."
  ],
  benefits: [
    { icon: "MapPin", title: "Maps expertise", description: "Gespecialiseerd in Google Maps optimalisatie" },
    { icon: "Star", title: "Review strategie", description: "Meer positieve reviews, professioneel beheerd" },
    { icon: "Image", title: "Content beheer", description: "Regelmatige posts en foto's op je profiel" },
    { icon: "Wallet", title: "70% goedkoper", description: "Bureau-kwaliteit beheer voor een fractie van de prijs" },
    { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Meer klantacties vanuit Google Maps" }
  ],
  processSteps: [
    { step: 1, title: "Profiel audit", description: "We beoordelen je huidige profiel en concurrenten" },
    { step: 2, title: "Optimalisatie", description: "Alle 50+ profielonderdelen worden geoptimaliseerd" },
    { step: 3, title: "Doorlopend beheer", description: "Posts, reviews en updates worden continu beheerd" },
    { step: 4, title: "Resultaten rapporteren", description: "Wekelijks inzicht in Maps-positie en klantacties" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€300 - €1.000+", freelancer: "€150 - €500", klikklaar: "€99 - €249" },
    { feature: "Beheer frequentie", bureau: "Wekelijks", freelancer: "Wisselend", klikklaar: "Dagelijks gemonitord" },
    { feature: "Review management", bureau: "Extra dienst", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "Posts & updates", bureau: "Extra kosten", freelancer: "Wisselend", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Multi-locatie", bureau: "Per locatie betalen", freelancer: "Beperkt", klikklaar: "Pro+ pakket" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "MapPin", title: "Maps specialist", description: "Gespecialiseerd in Google Maps." },
    { icon: "Star", title: "Review expertise", description: "Professioneel review management." }
  ],
  faqs: [
    { question: "Is dit hetzelfde als een lokale SEO bureau?", answer: "Het focust specifiek op je Google Bedrijfsprofiel. Lokale SEO is breder (website, NAP, lokale content). Google Bedrijfsprofiel beheer is een cruciaal onderdeel daarvan." },
    { question: "Hoeveel kost GMB-beheer bij een bureau?", answer: "€300-€1.000/mnd bij een bureau. Bij KlikKlaarSEO vanaf €99/mnd inclusief review management." },
    { question: "Beheren jullie ook Google reviews?", answer: "Ja, we monitoren reviews, helpen met een review strategie en signaleren negatieve reviews zodat je snel kunt reageren." },
    { question: "Hoe vaak worden er posts geplaatst?", answer: "Minimaal wekelijks. Bij Pro+ vaker, inclusief seizoensgebonden en actie-posts." },
    { question: "Kan ik meerdere locaties laten beheren?", answer: "Ja, met het Pro+ pakket of een aangepast plan." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "Google Bedrijfsprofiel Bureau | Professioneel Beheer | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een Google Bedrijfsprofiel bureau? KlikKlaarSEO biedt professioneel GMB-beheer met review management. Vanaf €99/mnd."
};

const googleBedrijfsprofielScan: ServiceVariantData = {
  slug: "google-bedrijfsprofiel-scan",
  serviceName: "Google Bedrijfsprofiel",
  variant: "uitbesteden",
  headline: "Google Bedrijfsprofiel Scan",
  subheadline: "Check hoe goed je Google Bedrijfsprofiel is geoptimaliseerd",
  subtitlePoints: ["Profiel completeness", "Review analyse", "Direct inzicht"],
  whatIsTitle: "Wat is een Google Bedrijfsprofiel scan?",
  whatIsText: [
    "Een Google Bedrijfsprofiel scan analyseert hoe compleet en geoptimaliseerd je Google-vermelding is. Van profielinformatie en foto's tot reviews en posts — we checken alle 50+ onderdelen die je Maps-positie beïnvloeden.",
    "De meeste Google Bedrijfsprofielen zijn onvolledig of niet geoptimaliseerd. Kleine verbeteringen kunnen al een groot verschil maken in je lokale zichtbaarheid."
  ],
  benefits: [
    { icon: "MapPin", title: "Profiel completeness", description: "Zijn alle 50+ onderdelen ingevuld en geoptimaliseerd?" },
    { icon: "Star", title: "Review analyse", description: "Hoe sta je ervoor met reviews vs. concurrenten?" },
    { icon: "Image", title: "Foto & post check", description: "Zijn er voldoende foto's en recente posts?" },
    { icon: "Globe", title: "NAP-consistentie", description: "Zijn je bedrijfsgegevens overal consistent?" },
    { icon: "Users", title: "Concurrentie check", description: "Hoe scoor je t.o.v. lokale concurrenten?" }
  ],
  processSteps: [
    { step: 1, title: "Bedrijfsnaam opgeven", description: "We zoeken je Google Bedrijfsprofiel op" },
    { step: 2, title: "Profiel analyse", description: "50+ onderdelen worden gecontroleerd" },
    { step: 3, title: "Review & concurrentie check", description: "Reviews en concurrenten worden geanalyseerd" },
    { step: 4, title: "Verbeterrapport", description: "Concrete verbeterpunten voor een beter profiel" }
  ],
  faqs: [
    { question: "Wat controleert de scan?", answer: "Profielcompleteness, categorie-keuze, beschrijving, openingstijden, foto's, posts, reviews, Q&A, attributen, NAP-consistentie en vergelijking met concurrenten." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Ik heb nog geen Google Bedrijfsprofiel. Kan dat?", answer: "Dan helpen we je er een aan te maken en volledig te optimaliseren. Een profiel aanmaken is gratis bij Google." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De scan is binnen uren klaar. Je ontvangt een rapport met een score en concrete verbeterpunten." },
    { question: "Wat kan ik zelf verbeteren?", answer: "Het rapport bevat stap-voor-stap instructies. Of start een abonnement en wij optimaliseren en beheren je profiel." },
    { question: "Checken jullie ook mijn reviews?", answer: "Ja, we analyseren aantal, score, recency en vergelijken met concurrenten in jouw branche en regio." }
  ],
  metaTitle: "Google Bedrijfsprofiel Scan | GMB Check | Direct Inzicht",
  metaDescription: "Google Bedrijfsprofiel scan: check hoe compleet en geoptimaliseerd je profiel is. 50+ checkpunten, review analyse. Direct inzicht."
};

// --- 5-10: Remaining bureau + scan variants ---
// Using a more concise format for the remaining services

const seoMonitoringBureau: ServiceVariantData = {
  slug: "seo-monitoring-bureau", serviceName: "SEO Monitoring", variant: "uitbesteden",
  headline: "SEO Monitoring Bureau Nodig?", subheadline: "24/7 monitoring met bureau-expertise zonder bureaukosten",
  subtitlePoints: ["Real-time tracking", "Proactieve actie", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO monitoring bureau?",
  whatIsText: ["Je wilt continu inzicht in je SEO-prestaties en een expert die meekijkt. Een bureau biedt dat, maar rekent €300-€1.000/mnd voor maandelijkse rapportages.", "KlikKlaarSEO biedt 24/7 monitoring met wekelijkse rapportages én proactieve actie bij problemen. Sneller, uitgebreider en betaalbaarder dan een traditioneel bureau."],
  benefits: [
    { icon: "Eye", title: "24/7 monitoring", description: "Rankings, verkeer en techniek continu gevolgd" },
    { icon: "Bell", title: "Proactieve alerts", description: "Direct gewaarschuwd bij problemen" },
    { icon: "Users", title: "Concurrentie tracking", description: "Volg wat je concurrenten doen" },
    { icon: "Wallet", title: "Betaalbaar", description: "Bureau-monitoring voor een fractie van de prijs" },
    { icon: "BarChart", title: "Helder rapport", description: "Wekelijks in normaal Nederlands" }
  ],
  processSteps: [
    { step: 1, title: "Setup", description: "Monitoring configureren voor je zoekwoorden en concurrenten" },
    { step: 2, title: "Baseline", description: "Huidige prestaties vastleggen als startpunt" },
    { step: 3, title: "24/7 monitoring", description: "Continue tracking van alle SEO-factoren" },
    { step: 4, title: "Rapportage & actie", description: "Wekelijkse updates en directe actie bij problemen" }
  ],
  comparisonData: [
    { feature: "Kosten", bureau: "€300 - €1.000+/mnd", freelancer: "€150 - €500", klikklaar: "€99 - €249" },
    { feature: "Frequentie", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "24/7 continu" },
    { feature: "Actie bij problemen", bureau: "Na rapportage", freelancer: "Zelden", klikklaar: "Proactief" },
    { feature: "Concurrentie", bureau: "Extra dienst", freelancer: "Nee", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks PDF", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "Eye", title: "24/7 inzicht", description: "Altijd weten hoe je presteert." },
    { icon: "Bell", title: "Proactief", description: "Problemen opgelost voordat ze impact hebben." }
  ],
  faqs: [
    { question: "Is dit meer dan alleen ranking tracking?", answer: "Ja, we monitoren rankings, verkeer, technische gezondheid, Core Web Vitals, concurrenten en backlinks. Plus: we ondernemen actie bij problemen." },
    { question: "Hoeveel kost SEO monitoring bij een bureau?", answer: "€300-€1.000/mnd. Bij KlikKlaarSEO vanaf €99/mnd met uitgebreidere monitoring en wekelijkse rapportage." },
    { question: "Krijg ik ook een dashboard?", answer: "Bij Pro+ heb je toegang tot een real-time dashboard. Bij andere pakketten ontvang je wekelijkse rapporten." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." },
    { question: "Monitoren jullie ook AI-zoekmachines?", answer: "Ja, we volgen ook je zichtbaarheid in ChatGPT, Perplexity en Google AI Overview." },
    { question: "Wat gebeurt er bij een ranking daling?", answer: "We analyseren de oorzaak en nemen direct actie. Je wordt onmiddellijk geïnformeerd over de situatie en onze aanpak." }
  ],
  metaTitle: "SEO Monitoring Bureau | 24/7 Tracking & Actie | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO monitoring bureau? KlikKlaarSEO biedt 24/7 monitoring, wekelijkse rapporten en proactieve actie. Vanaf €99/mnd."
};

const seoMonitoringScan: ServiceVariantData = {
  slug: "seo-monitoring-scan", serviceName: "SEO Monitoring", variant: "uitbesteden",
  headline: "SEO Monitoring Scan", subheadline: "Eenmalig inzicht in je huidige SEO-prestaties en positie",
  subtitlePoints: ["Ranking overzicht", "Concurrentie vergelijking", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO monitoring scan?",
  whatIsText: ["Een SEO monitoring scan geeft je een momentopname van je huidige SEO-prestaties: rankings, verkeer, technische gezondheid en hoe je scoort ten opzichte van concurrenten.", "Het is de eerste stap naar beter inzicht in je online vindbaarheid. Na de scan weet je precies waar je staat en wat er verbeterd kan worden."],
  benefits: [
    { icon: "Eye", title: "Ranking overzicht", description: "Waar sta je voor je belangrijkste zoekwoorden?" },
    { icon: "Users", title: "Concurrentie check", description: "Hoe scoor je t.o.v. je concurrenten?" },
    { icon: "BarChart", title: "Verkeer analyse", description: "Hoeveel organisch verkeer krijg je?" },
    { icon: "Zap", title: "Technische status", description: "Zijn er technische problemen?" },
    { icon: "ClipboardCheck", title: "Verbeterkansen", description: "Waar liggen de grootste kansen?" }
  ],
  processSteps: [
    { step: 1, title: "URL opgeven", description: "Geef je website en branche op" },
    { step: 2, title: "Prestatie-analyse", description: "Rankings, verkeer en techniek worden gescand" },
    { step: 3, title: "Concurrentie check", description: "Vergelijking met je top-concurrenten" },
    { step: 4, title: "Inzichtenrapport", description: "Helder overzicht met scores en verbeterpunten" }
  ],
  faqs: [
    { question: "Wat controleert een SEO monitoring scan?", answer: "Je huidige rankings voor relevante zoekwoorden, geschat organisch verkeer, technische gezondheid en vergelijking met concurrenten." },
    { question: "Is dit gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De eerste inzichten zijn binnen uren beschikbaar." },
    { question: "Hoe verschilt dit van Google Search Console?", answer: "We combineren meerdere databronnen en voegen concurrentie-analyse en verbeteradviezen toe die Search Console niet biedt." },
    { question: "Wat doe ik met de resultaten?", answer: "Het rapport toont waar je staat en waar kansen liggen. Start een monitoring abonnement voor continu inzicht." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, het abonnement is maandelijks opzegbaar." }
  ],
  metaTitle: "SEO Monitoring Scan | Ranking & Prestatie Check | Direct",
  metaDescription: "SEO monitoring scan: ontdek je huidige rankings, verkeer en concurrentiepositie. Direct inzicht in je SEO-prestaties."
};

const seoRapportagesBureau: ServiceVariantData = {
  slug: "seo-rapportages-bureau", serviceName: "SEO Rapportages", variant: "uitbesteden",
  headline: "SEO Rapportages Bureau Nodig?", subheadline: "Heldere SEO-rapporten zonder bureau-jargon en bureaukosten",
  subtitlePoints: ["Wekelijks rapport", "Normaal Nederlands", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO rapportages bureau?",
  whatIsText: ["Je wilt professionele SEO-rapportages maar vindt bureau-rapporten te technisch, te duur of te zeldzaam. Een typisch bureau levert maandelijks een dik PDF met technisch jargon.", "KlikKlaarSEO levert wekelijks beknopte rapporten in normaal Nederlands. Concrete inzichten, actiepunten en resultaten — zonder het jargon en zonder de bureaukosten."],
  benefits: [
    { icon: "FileText", title: "Wekelijks rapport", description: "Vaker dan elk bureau biedt" },
    { icon: "BarChart", title: "Normaal Nederlands", description: "Geen vakjargon, direct begrijpelijk" },
    { icon: "Target", title: "Actiepunten", description: "Concrete aanbevelingen bij elke rapportage" },
    { icon: "Wallet", title: "Betaalbaar", description: "Rapportage inbegrepen, geen extra kosten" },
    { icon: "Bot", title: "AI-inzichten", description: "Inzicht in AI-vindbaarheid" }
  ],
  processSteps: [
    { step: 1, title: "Data setup", description: "We koppelen alle relevante databronnen" },
    { step: 2, title: "Eerste rapport", description: "Baseline rapport met je huidige status" },
    { step: 3, title: "Wekelijkse updates", description: "Elke week een beknopt, helder rapport" },
    { step: 4, title: "Kwartaaloverzicht", description: "Elk kwartaal een diepgaand trendoverzicht" }
  ],
  comparisonData: [
    { feature: "Frequentie", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" },
    { feature: "Taalgebruik", bureau: "Technisch jargon", freelancer: "Wisselend", klikklaar: "Normaal Nederlands" },
    { feature: "Actiepunten", bureau: "Soms", freelancer: "Beperkt", klikklaar: "Altijd concreet" },
    { feature: "Kosten", bureau: "€200-€500/rapport", freelancer: "€100-€300", klikklaar: "Inbegrepen" },
    { feature: "AI-inzichten", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard" },
    { feature: "Contractduur", bureau: "Onderdeel contract", freelancer: "Per rapport", klikklaar: "Maandelijks opzegbaar" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "FileText", title: "Helder taalgebruik", description: "Geen jargon." },
    { icon: "Clock", title: "Wekelijks vers", description: "Elke week actueel." }
  ],
  faqs: [
    { question: "Hoe verschilt dit van bureau-rapportages?", answer: "Wij leveren wekelijks in normaal Nederlands. Bureaus leveren maandelijks in technisch jargon. Onze rapporten bevatten altijd concrete actiepunten." },
    { question: "Hoeveel kost rapportage bij een bureau?", answer: "€200-€500 per rapport. Bij KlikKlaarSEO zit rapportage inbegrepen in je abonnement." },
    { question: "Kan mijn team ook het rapport ontvangen?", answer: "Ja, je kunt meerdere e-mailadressen instellen." },
    { question: "Krijg ik ook een dashboard?", answer: "Bij Pro+ heb je toegang tot een real-time dashboard." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." },
    { question: "Rapporteren jullie ook over AI-vindbaarheid?", answer: "Ja, we monitoren hoe je website presteert in ChatGPT, Perplexity en Google AI Overview." }
  ],
  metaTitle: "SEO Rapportages Bureau | Wekelijks & Helder | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO rapportages bureau? KlikKlaarSEO biedt wekelijkse rapporten in normaal Nederlands. Inbegrepen bij abonnement."
};

const seoRapportagesScan: ServiceVariantData = {
  slug: "seo-rapportages-scan", serviceName: "SEO Rapportages", variant: "uitbesteden",
  headline: "SEO Rapportages Scan", subheadline: "Eenmalig helder rapport van je complete SEO-status",
  subtitlePoints: ["Complete status check", "Helder rapport", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO rapportages scan?",
  whatIsText: ["Een SEO rapportages scan levert je een eenmalig, uitgebreid rapport van je complete SEO-status. Rankings, verkeer, techniek, content en concurrentie — alles in één helder overzicht.", "Ideaal als startpunt om te begrijpen waar je website staat en welke stappen het meeste impact hebben."],
  benefits: [
    { icon: "FileText", title: "Compleet overzicht", description: "Alles in één rapport: rankings, techniek, content" },
    { icon: "BarChart", title: "Scores & benchmarks", description: "Zie hoe je scoort op elk onderdeel" },
    { icon: "Users", title: "Concurrentie check", description: "Vergelijking met je top-concurrenten" },
    { icon: "Target", title: "Geprioriteerd actieplan", description: "Welke stappen hebben het meeste impact?" },
    { icon: "Bot", title: "AI-gereedheid", description: "Check je vindbaarheid in AI-zoekmachines" }
  ],
  processSteps: [
    { step: 1, title: "URL opgeven", description: "Geef je website en belangrijkste doelen op" },
    { step: 2, title: "Complete analyse", description: "Alle SEO-factoren worden gescand en beoordeeld" },
    { step: 3, title: "Helder rapport", description: "Je ontvangt een overzichtelijk rapport met scores" },
    { step: 4, title: "Actieplan", description: "Geprioriteerde stappen voor maximale groei" }
  ],
  faqs: [
    { question: "Wat staat er in het rapport?", answer: "Rankings, organisch verkeer, technische gezondheid, content kwaliteit, linkprofiel, concurrentiepositie en AI-vindbaarheid. Alles met scores en concrete actiepunten." },
    { question: "Is dit gratis?", answer: "We bieden een gratis adviesgesprek. Het volledige rapport is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik het rapport?", answer: "Binnen 1-2 werkdagen een compleet rapport." },
    { question: "In welk formaat is het rapport?", answer: "Een overzichtelijk rapport per e-mail. Bij Pro+ ook via een online dashboard." },
    { question: "Kan ik het rapport delen met mijn team?", answer: "Ja, het rapport is eenvoudig te delen." },
    { question: "Wat doe ik met het rapport?", answer: "Het actieplan toont exact welke stappen het meeste opleveren. Start een abonnement en wij voeren ze uit." }
  ],
  metaTitle: "SEO Rapportages Scan | Complete Status Check | Direct Inzicht",
  metaDescription: "SEO rapportages scan: eenmalig compleet rapport van je SEO-status. Rankings, techniek, content en concurrentie. Direct inzicht."
};

const seoWebshopsBureau: ServiceVariantData = {
  slug: "seo-webshops-bureau", serviceName: "SEO voor Webshops", variant: "uitbesteden",
  headline: "SEO voor Webshops Bureau Nodig?", subheadline: "E-commerce SEO expertise zonder bureaukosten",
  subtitlePoints: ["Webshop specialist", "Product SEO", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO voor webshops bureau?",
  whatIsText: ["Webshop SEO is complex: duizenden productpagina's, filtered navigation, duplicate content en product schema. Je zoekt een bureau met e-commerce expertise.", "KlikKlaarSEO biedt gespecialiseerde webshop SEO, maar dan geautomatiseerd en betaalbaar. Dezelfde expertise als een e-commerce bureau, zonder de kosten."],
  benefits: [
    { icon: "ShoppingCart", title: "E-commerce expert", description: "Gespecialiseerd in webshop SEO" },
    { icon: "Code", title: "Product schema", description: "Rich snippets met prijs en reviews" },
    { icon: "FolderTree", title: "Categorie SEO", description: "Logische structuur voor Google en klanten" },
    { icon: "Wallet", title: "Betaalbaar", description: "Bureau-expertise voor een fractie van de prijs" },
    { icon: "TrendingUp", title: "Meer omzet", description: "Meer organisch verkeer dat converteert" }
  ],
  processSteps: [
    { step: 1, title: "Webshop audit", description: "Diepgaande analyse van je e-commerce SEO" },
    { step: 2, title: "Keyword mapping", description: "Zoekwoorden gekoppeld aan producten en categorieën" },
    { step: 3, title: "Optimalisatie", description: "Producten, categorieën en techniek geoptimaliseerd" },
    { step: 4, title: "Omzet meten", description: "Organisch verkeer en omzet continu gemonitord" }
  ],
  comparisonData: [
    { feature: "Kosten", bureau: "€800 - €3.000+/mnd", freelancer: "€400 - €1.200", klikklaar: "€99 - €249" },
    { feature: "E-commerce kennis", bureau: "Specialist nodig", freelancer: "Beperkt", klikklaar: "Gespecialiseerd" },
    { feature: "Product schema", bureau: "Extra dienst", freelancer: "Wisselend", klikklaar: "Inbegrepen" },
    { feature: "Schaalbaar", bureau: "Per product betalen", freelancer: "Beperkt", klikklaar: "Automatisch" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "ShoppingCart", title: "E-commerce specialist", description: "Kennis van alle webshop platformen." },
    { icon: "TrendingUp", title: "Omzetgroei", description: "Meetbare groei in organische omzet." }
  ],
  faqs: [
    { question: "Welke platformen ondersteunen jullie?", answer: "Shopify, WooCommerce, Magento, Lightspeed, BigCommerce en meer." },
    { question: "Hoeveel kost een e-commerce SEO bureau?", answer: "€800-€3.000/mnd. Bij KlikKlaarSEO vanaf €99/mnd." },
    { question: "Optimaliseren jullie ook productpagina's?", answer: "Ja, productpagina's, categoriepagina's en filternavigatie worden allemaal geoptimaliseerd." },
    { question: "Krijg ik rich snippets?", answer: "Ja, we implementeren Product schema markup voor prijs, reviews en voorraadstatus." },
    { question: "Hoe snel groeit mijn omzet?", answer: "Eerste resultaten na 4-8 weken, significante groei na 2-4 maanden." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO voor Webshops Bureau | E-Commerce Expert | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO voor webshops bureau? KlikKlaarSEO biedt e-commerce SEO expertise: product SEO, schema en meer. Vanaf €99/mnd."
};

const seoWebshopsScan: ServiceVariantData = {
  slug: "seo-webshops-scan", serviceName: "SEO voor Webshops", variant: "uitbesteden",
  headline: "SEO voor Webshops Scan", subheadline: "Ontdek waar je webshop SEO-kansen mist",
  subtitlePoints: ["E-commerce audit", "Product SEO check", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO voor webshops scan?",
  whatIsText: ["Een SEO voor webshops scan analyseert je webshop op specifieke e-commerce SEO-factoren: productpagina's, categorie structuur, filtered navigation, schema markup, duplicate content en meer.", "Het resultaat is een geprioriteerd actieplan specifiek voor je webshop, met concrete verbeterpunten die de meeste impact hebben op je organische omzet."],
  benefits: [
    { icon: "ShoppingCart", title: "E-commerce specifiek", description: "Scan specifiek voor webshop-uitdagingen" },
    { icon: "Code", title: "Schema check", description: "Product structured data correct?" },
    { icon: "FolderTree", title: "Structuur analyse", description: "Is je categorie-structuur SEO-vriendelijk?" },
    { icon: "Search", title: "Duplicate content", description: "Problemen met filtered navigation?" },
    { icon: "TrendingUp", title: "Omzetkansen", description: "Welke producten hebben het meeste SEO-potentieel?" }
  ],
  processSteps: [
    { step: 1, title: "Webshop URL opgeven", description: "Geef je webshop URL en platform op" },
    { step: 2, title: "E-commerce scan", description: "Specifieke e-commerce SEO-factoren worden geanalyseerd" },
    { step: 3, title: "Product analyse", description: "Productpagina's beoordeeld op SEO-potentieel" },
    { step: 4, title: "Actieplan", description: "Geprioriteerde verbeterpunten voor meer organische omzet" }
  ],
  faqs: [
    { question: "Wat controleert de webshop scan?", answer: "Product schema, categorie structuur, filtered navigation, duplicate content, canonical tags, product descriptions, interne linking en technische e-commerce factoren." },
    { question: "Welke platformen worden ondersteund?", answer: "Shopify, WooCommerce, Magento, Lightspeed, BigCommerce en meer." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De scan draait binnen uren. Volledig rapport binnen 1-2 werkdagen." },
    { question: "Is dit gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Hoeveel producten worden gescand?", answer: "We analyseren je complete catalogus en identificeren de producten met het meeste SEO-potentieel." },
    { question: "Wat doe ik met de resultaten?", answer: "Het rapport bevat concrete actiepunten. Start een abonnement en wij voeren alles uit." }
  ],
  metaTitle: "SEO voor Webshops Scan | E-Commerce Audit | Direct Inzicht",
  metaDescription: "SEO voor webshops scan: analyseer je webshop op e-commerce SEO-factoren. Product schema, structuur en duplicate content check."
};

const seoDienstverlenersBureau: ServiceVariantData = {
  slug: "seo-dienstverleners-bureau", serviceName: "SEO voor Dienstverleners", variant: "uitbesteden",
  headline: "SEO voor Dienstverleners Bureau Nodig?", subheadline: "Bureau-expertise voor dienstverleners zonder bureaukosten",
  subtitlePoints: ["Branche-specifiek", "Lead generatie", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO bureau voor dienstverleners?",
  whatIsText: ["Als dienstverlener wil je gevonden worden door klanten die zoeken naar jouw expertise. Een SEO bureau begrijpt misschien niet de specifieke dynamiek van dienstverlening.", "KlikKlaarSEO heeft ervaring met SEO voor dienstverleners: van advocaten en accountants tot coaches en schilders. We begrijpen dat vertrouwen, expertise en lokale vindbaarheid cruciaal zijn."],
  benefits: [
    { icon: "Briefcase", title: "Branche-expertise", description: "Ervaring met dienstverleners in diverse branches" },
    { icon: "Users", title: "Lead generatie", description: "Meer kwalitatieve aanvragen via Google" },
    { icon: "Award", title: "E-E-A-T focus", description: "Je expertise en betrouwbaarheid versterken" },
    { icon: "MapPin", title: "Lokaal dominant", description: "Gevonden worden in je werkgebied" },
    { icon: "Wallet", title: "Betaalbaar", description: "Bureau-kwaliteit voor een fractie van de prijs" }
  ],
  processSteps: [
    { step: 1, title: "Branche-analyse", description: "We begrijpen je diensten en doelgroep" },
    { step: 2, title: "Keyword strategie", description: "Zoekwoorden voor jouw type dienstverlening" },
    { step: 3, title: "Optimalisatie", description: "Website, content en lokale SEO verbeterd" },
    { step: 4, title: "Lead tracking", description: "Leads uit organisch verkeer gemeten" }
  ],
  comparisonData: [
    { feature: "Kosten", bureau: "€500 - €2.000+/mnd", freelancer: "€300 - €800", klikklaar: "€99 - €249" },
    { feature: "Branche-kennis", bureau: "Wisselend", freelancer: "Beperkt", klikklaar: "Data-gedreven" },
    { feature: "E-E-A-T", bureau: "Soms", freelancer: "Zelden", klikklaar: "Standaard" },
    { feature: "Lead tracking", bureau: "Extra kosten", freelancer: "Nee", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "Briefcase", title: "Dienstverlener specialist", description: "We kennen jouw branche." },
    { icon: "Users", title: "Lead focus", description: "Gericht op kwalitatieve leads." }
  ],
  faqs: [
    { question: "Voor welke dienstverleners?", answer: "Advocaten, accountants, coaches, consultants, therapeuten, schilders, loodgieters, trainers en meer." },
    { question: "Begrijpen jullie mijn branche?", answer: "Onze data-gedreven aanpak past zich aan op elke branche. We analyseren je concurrenten en zoekgedrag voor jouw specifieke dienstverlening." },
    { question: "Hoeveel kost dit bij een bureau?", answer: "€500-€2.000/mnd. Bij KlikKlaarSEO vanaf €99/mnd." },
    { question: "Meten jullie leads?", answer: "Ja, we tracken contactformulieren, belverzoeken en offertes die via SEO binnenkomen." },
    { question: "Hoe snel krijg ik meer klanten?", answer: "Eerste rankings na 4-8 weken, structurele lead-groei na 2-4 maanden." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, altijd." }
  ],
  metaTitle: "SEO voor Dienstverleners Bureau | Meer Klanten | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO bureau voor dienstverleners? KlikKlaarSEO biedt branche-specifieke SEO met lead tracking. Vanaf €99/mnd."
};

const seoDienstverlenersScan: ServiceVariantData = {
  slug: "seo-dienstverleners-scan", serviceName: "SEO voor Dienstverleners", variant: "uitbesteden",
  headline: "SEO voor Dienstverleners Scan", subheadline: "Check hoe goed je als dienstverlener gevonden wordt in Google",
  subtitlePoints: ["Branche-specifiek", "Concurrentie check", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO voor dienstverleners scan?",
  whatIsText: ["Een SEO voor dienstverleners scan analyseert je online vindbaarheid vanuit het perspectief van een dienstverlener. Hoe goed word je gevonden voor je specifieke diensten? Hoe scoor je lokaal? Hoe sta je ervoor met vertrouwenssignalen?", "Het resultaat is een helder rapport met concrete verbeterpunten, specifiek voor dienstverleners."],
  benefits: [
    { icon: "Briefcase", title: "Branche-specifiek", description: "Analyse vanuit dienstverlener-perspectief" },
    { icon: "MapPin", title: "Lokale check", description: "Hoe goed word je lokaal gevonden?" },
    { icon: "Award", title: "E-E-A-T check", description: "Straalt je website expertise uit?" },
    { icon: "Users", title: "Concurrentie", description: "Hoe scoor je t.o.v. collega-dienstverleners?" },
    { icon: "ClipboardCheck", title: "Actieplan", description: "Concrete stappen voor meer klanten" }
  ],
  processSteps: [
    { step: 1, title: "Diensten opgeven", description: "Beschrijf je diensten en werkgebied" },
    { step: 2, title: "Branche-analyse", description: "We analyseren je vindbaarheid voor relevante zoektermen" },
    { step: 3, title: "Concurrentie check", description: "Vergelijking met andere dienstverleners in je regio" },
    { step: 4, title: "Verbeterrapport", description: "Concrete actiepunten voor meer klanten via Google" }
  ],
  faqs: [
    { question: "Voor welke dienstverleners is deze scan?", answer: "Alle soorten: juridisch, financieel, technisch, creatief, zorg, coaching, bouw en meer." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Wat wordt er gecontroleerd?", answer: "Vindbaarheid voor dienst-specifieke zoektermen, lokale SEO, Google Bedrijfsprofiel, E-E-A-T signalen, reviews en concurrentiepositie." },
    { question: "Hoe snel krijg ik resultaten?", answer: "Eerste inzichten binnen uren, volledig rapport binnen 1-2 werkdagen." },
    { question: "Wat doe ik met de resultaten?", answer: "Het rapport bevat concrete stappen. Start een abonnement en wij voeren alles uit." },
    { question: "Checken jullie ook mijn reviews?", answer: "Ja, we analyseren je reviews en vergelijken met concurrenten in jouw branche." }
  ],
  metaTitle: "SEO voor Dienstverleners Scan | Vindbaarheid Check | Direct",
  metaDescription: "SEO voor dienstverleners scan: check hoe goed je gevonden wordt voor je diensten. Branche-specifieke analyse met concurrentie check."
};

const seoMigratieBureau: ServiceVariantData = {
  slug: "seo-migratie-bureau", serviceName: "SEO Migratie", variant: "uitbesteden",
  headline: "SEO Migratie Bureau Nodig?", subheadline: "Professionele migratie begeleiding zonder bureaukosten",
  subtitlePoints: ["Geen ranking verlies", "Pre- & post-launch", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO migratie bureau?",
  whatIsText: ["Je plant een website-migratie en wilt zeker weten dat je rankings behouden blijven. Een migratie-bureau biedt expertise maar kost €2.000-€10.000 per project.", "KlikKlaarSEO biedt dezelfde migratie-expertise als onderdeel van je abonnement. Van redirect mapping tot post-launch monitoring — alles inbegrepen, zonder projectkosten."],
  benefits: [
    { icon: "ArrowRightLeft", title: "Migratie-expertise", description: "Ervaring met complexe website-migraties" },
    { icon: "Route", title: "Redirect mapping", description: "Alle URL's correct doorgestuurd" },
    { icon: "ClipboardCheck", title: "200+ checks", description: "Pre- en post-launch controles" },
    { icon: "RefreshCw", title: "Post-launch support", description: "Maanden monitoring na de migratie" },
    { icon: "Wallet", title: "Betaalbaar", description: "Geen projectfactuur van duizenden euro's" }
  ],
  processSteps: [
    { step: 1, title: "Migratie-plan", description: "Risico's in kaart en gedetailleerd plan" },
    { step: 2, title: "Pre-launch audit", description: "Nieuwe website gecontroleerd op SEO-readiness" },
    { step: 3, title: "Go-live begeleiding", description: "Ondersteuning tijdens de migratie" },
    { step: 4, title: "Post-launch monitoring", description: "Rankings en indexering intensief gemonitord" }
  ],
  comparisonData: [
    { feature: "Kosten", bureau: "€2.000 - €10.000", freelancer: "€1.000 - €3.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Pre-launch checks", bureau: "Basis", freelancer: "Beperkt", klikklaar: "200+ controles" },
    { feature: "Post-launch monitoring", bureau: "1-2 weken", freelancer: "Beperkt", klikklaar: "3 maanden" },
    { feature: "Redirect mapping", bureau: "Handmatig", freelancer: "Beperkt", klikklaar: "Automatisch + handmatig" },
    { feature: "Contractduur", bureau: "Projectmatig", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Garantie", bureau: "Geen", freelancer: "Geen", klikklaar: "Monitoring tot stabiel" }
  ],
  guarantees: [
    { icon: "Shield", title: "Ranking bescherming", description: "Minimaal verlies door voorbereiding." },
    { icon: "ClipboardCheck", title: "200+ controles", description: "Uitgebreide pre- en post-launch checks." },
    { icon: "RefreshCw", title: "Lange monitoring", description: "3 maanden intensieve post-launch monitoring." }
  ],
  faqs: [
    { question: "Hoeveel kost migratie bij een bureau?", answer: "€2.000-€10.000 per project. Bij KlikKlaarSEO inbegrepen in je abonnement." },
    { question: "Welke migraties ondersteunen jullie?", answer: "Platform wissel, domeinwijziging, redesign, HTTPS-migratie, URL-wijziging en fusie van websites." },
    { question: "Hoe lang duurt de begeleiding?", answer: "1-4 weken voorbereiding + 3 maanden post-launch monitoring." },
    { question: "Kan ik rankings verliezen?", answer: "Een kleine tijdelijke dip (5-10%) is normaal. Zonder begeleiding is het verlies 20-40%." },
    { question: "Werkt dit met elk platform?", answer: "Ja, alle gangbare platformen worden ondersteund." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, we raden minimaal 3 maanden aan maar je kunt altijd opzeggen." }
  ],
  metaTitle: "SEO Migratie Bureau | Veilige Website Migratie | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO migratie bureau? KlikKlaarSEO biedt migratie-begeleiding met 200+ checks. Inbegrepen bij abonnement."
};

const seoMigratieScan: ServiceVariantData = {
  slug: "seo-migratie-scan", serviceName: "SEO Migratie", variant: "uitbesteden",
  headline: "SEO Migratie Scan", subheadline: "Check je website op migratie-gereedheid en risico's",
  subtitlePoints: ["Risico-analyse", "Redirect check", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO migratie scan?",
  whatIsText: ["Een SEO migratie scan analyseert je huidige website en identificeert alle risico's voor een aanstaande migratie. Welke URL's zijn het belangrijkst? Waar moeten redirects komen? Welke content mag niet verloren gaan?", "De scan is essentieel als voorbereiding op een migratie. Zonder deze analyse is het risico op ranking verlies aanzienlijk groter."],
  benefits: [
    { icon: "ArrowRightLeft", title: "Migratie-readiness", description: "Is je website klaar voor een migratie?" },
    { icon: "Route", title: "URL inventarisatie", description: "Alle belangrijke URL's in kaart" },
    { icon: "Shield", title: "Risico-analyse", description: "Welke risico's brengt de migratie met zich mee?" },
    { icon: "ClipboardCheck", title: "Redirect plan", description: "Welke redirects zijn nodig?" },
    { icon: "FileText", title: "Actieplan", description: "Stap-voor-stap migratie-checklist" }
  ],
  processSteps: [
    { step: 1, title: "Situatie opgeven", description: "Beschrijf je geplande migratie" },
    { step: 2, title: "Website analyse", description: "Huidige website wordt volledig in kaart gebracht" },
    { step: 3, title: "Risico assessment", description: "Alle migratie-risico's worden geïdentificeerd" },
    { step: 4, title: "Migratie-plan", description: "Gedetailleerd plan met redirects en checklist" }
  ],
  faqs: [
    { question: "Wanneer heb ik een migratie scan nodig?", answer: "Vóór elke website-migratie: platform wissel, domeinwijziging, redesign of URL-structuur wijziging." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik resultaten?", answer: "Binnen 1-2 werkdagen een volledig migratie-plan." },
    { question: "Wat als ik de migratie al gepland heb?", answer: "Hoe eerder we erbij betrokken worden, hoe beter. Maar ook kort voor de migratie kunnen we nog waardevolle checks doen." },
    { question: "Krijg ik ook een redirect mapping?", answer: "Ja, een volledige redirect mapping van oude naar nieuwe URL's is onderdeel van het plan." },
    { question: "Wat als er problemen zijn na de migratie?", answer: "Met een abonnement monitoren we je website na de migratie en pakken problemen direct op." }
  ],
  metaTitle: "SEO Migratie Scan | Risico-Analyse | Direct Inzicht",
  metaDescription: "SEO migratie scan: check je website op migratie-gereedheid. Risico-analyse, URL inventarisatie en redirect plan. Direct inzicht."
};

const conversieOptimalisatieBureau: ServiceVariantData = {
  slug: "conversie-optimalisatie-bureau", serviceName: "Conversie Optimalisatie", variant: "uitbesteden",
  headline: "Conversie Optimalisatie Bureau Nodig?", subheadline: "Meer leads en omzet zonder bureaukosten — data-gedreven CRO",
  subtitlePoints: ["A/B testing", "UX optimalisatie", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een conversie optimalisatie bureau?",
  whatIsText: ["Je wilt meer leads of verkopen uit je bestaande verkeer. Een CRO bureau kan dat, maar rekent €1.000-€5.000/mnd met lange contracten.", "KlikKlaarSEO combineert SEO met conversie optimalisatie. Meer verkeer én betere conversie — geïntegreerd in één betaalbaar abonnement."],
  benefits: [
    { icon: "Target", title: "Hogere conversie", description: "Meer leads uit je bestaande verkeer" },
    { icon: "FlaskConical", title: "A/B testing", description: "Data-gedreven testen en verbeteren" },
    { icon: "MousePointerClick", title: "UX verbetering", description: "Gebruikservaring die converteert" },
    { icon: "Wallet", title: "Betaalbaar", description: "CRO-expertise zonder bureaukosten" },
    { icon: "TrendingUp", title: "Meetbare ROI", description: "Exact weten wat het oplevert" }
  ],
  processSteps: [
    { step: 1, title: "Conversie audit", description: "Analyse van je huidige conversie en bottlenecks" },
    { step: 2, title: "Hypotheses", description: "Data-gedreven verbetervoorstellen" },
    { step: 3, title: "A/B testing", description: "Testen welke verbeteringen werken" },
    { step: 4, title: "Implementatie", description: "Winnende varianten doorvoeren" }
  ],
  comparisonData: [
    { feature: "Kosten", bureau: "€1.000 - €5.000+/mnd", freelancer: "€500 - €1.500", klikklaar: "€99 - €249" },
    { feature: "A/B testing", bureau: "Inbegrepen", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "SEO + CRO", bureau: "Aparte diensten", freelancer: "Zelden", klikklaar: "Geïntegreerd" },
    { feature: "Implementatie", bureau: "Extra kosten", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "3-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar." },
    { icon: "FlaskConical", title: "Data-gedreven", description: "Alleen bewezen verbeteringen." },
    { icon: "TrendingUp", title: "Meetbaar", description: "Exact inzicht in de ROI." }
  ],
  faqs: [
    { question: "Hoeveel kost een CRO bureau?", answer: "€1.000-€5.000/mnd. Bij KlikKlaarSEO zit CRO geïntegreerd in je abonnement vanaf €99/mnd." },
    { question: "Is CRO hetzelfde als SEO?", answer: "Nee. SEO brengt meer bezoekers, CRO zorgt dat meer bezoekers converteren. De combinatie is het krachtigst." },
    { question: "Hoe snel zie ik resultaat?", answer: "Eerste test resultaten na 2-4 weken. Significante verbetering na 1-3 maanden." },
    { question: "Heb ik genoeg verkeer voor A/B testing?", answer: "Voor betrouwbare tests is een minimum nodig. Bij lager verkeer gebruiken we andere methoden." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." },
    { question: "Werkt dit voor mijn branche?", answer: "Ja, elke website met bezoekers profiteert van conversie optimalisatie." }
  ],
  metaTitle: "Conversie Optimalisatie Bureau | Meer Leads & ROI | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een conversie optimalisatie bureau? KlikKlaarSEO biedt data-gedreven CRO met A/B testing. Vanaf €99/mnd."
};

const conversieOptimalisatieScan: ServiceVariantData = {
  slug: "conversie-optimalisatie-scan", serviceName: "Conversie Optimalisatie", variant: "uitbesteden",
  headline: "Conversie Optimalisatie Scan", subheadline: "Ontdek waarom bezoekers je website verlaten zonder actie te ondernemen",
  subtitlePoints: ["Conversie audit", "Bottleneck analyse", "Direct inzicht"],
  whatIsTitle: "Wat is een conversie optimalisatie scan?",
  whatIsText: ["Een conversie optimalisatie scan analyseert waarom bezoekers je website verlaten zonder klant te worden. We identificeren de bottlenecks in je funnel: van landing tot conversie.", "Het resultaat is een helder overzicht van verbeterpunten die direct impact hebben op je leads en omzet."],
  benefits: [
    { icon: "Target", title: "Bottleneck analyse", description: "Waar haken bezoekers af?" },
    { icon: "MousePointerClick", title: "UX check", description: "Is je website gebruiksvriendelijk genoeg?" },
    { icon: "FileText", title: "CTA analyse", description: "Zijn je call-to-actions effectief?" },
    { icon: "Smartphone", title: "Mobiele check", description: "Converteert je website op mobiel?" },
    { icon: "ClipboardCheck", title: "Actieplan", description: "Concrete verbeterpunten met impact-score" }
  ],
  processSteps: [
    { step: 1, title: "URL opgeven", description: "Geef je website en belangrijkste conversiedoel op" },
    { step: 2, title: "Funnel analyse", description: "We analyseren het pad van bezoeker naar klant" },
    { step: 3, title: "UX & CTA check", description: "Gebruikservaring en conversie-elementen worden beoordeeld" },
    { step: 4, title: "Verbeterrapport", description: "Geprioriteerde actiepunten voor hogere conversie" }
  ],
  faqs: [
    { question: "Wat controleert een conversie scan?", answer: "Landing pages, formulieren, CTA's, navigatie, laadsnelheid, mobiele UX, vertrouwenssignalen en het volledige conversiepad van bezoeker naar klant." },
    { question: "Is de scan gratis?", answer: "We bieden een gratis adviesgesprek. De volledige scan is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De scan is binnen 1-2 werkdagen klaar met een geprioriteerd actieplan." },
    { question: "Heb ik genoeg verkeer voor deze scan?", answer: "De scan werkt voor elke website, ongeacht verkeersniveau. A/B testing vereist meer verkeer, maar de scan identificeert verbeterpunten ongeacht je bezoekersaantal." },
    { question: "Wat doe ik met de resultaten?", answer: "Het rapport bevat concrete actiepunten. Start een abonnement en wij voeren de verbeteringen door en testen ze." },
    { question: "Wordt ook mobiel gecontroleerd?", answer: "Ja, de mobiele conversie-ervaring is een belangrijk onderdeel van de scan." }
  ],
  metaTitle: "Conversie Optimalisatie Scan | Meer Leads | Direct Inzicht",
  metaDescription: "Conversie optimalisatie scan: ontdek waarom bezoekers je website verlaten. Bottleneck analyse en UX check. Direct inzicht."
};

// ============================================
// EXPORTS
// ============================================

export const serviceVariantsBureauP4: ServiceVariantData[] = [
  contentOptimalisatieBureau,
  seoTekstenBureau,
  linkbuildingBureau,
  googleBedrijfsprofielBureau,
  seoMonitoringBureau,
  seoRapportagesBureau,
  seoWebshopsBureau,
  seoDienstverlenersBureau,
  seoMigratieBureau,
  conversieOptimalisatieBureau,
];

export const serviceVariantsScanP4: ServiceVariantData[] = [
  contentOptimalisatieScan,
  seoTekstenScan,
  linkbuildingScan,
  googleBedrijfsprofielScan,
  seoMonitoringScan,
  seoRapportagesScan,
  seoWebshopsScan,
  seoDienstverlenersScan,
  seoMigratieScan,
  conversieOptimalisatieScan,
];
