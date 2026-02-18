import { ServiceVariantData } from "./service-variants";

// ============================================
// P2: BUREAU VARIANTS (5 services)
// "SEO bureau voor [dienst]" — targeting agency seekers
// ============================================

const automatischeSeoBureau: ServiceVariantData = {
  slug: "automatische-seo-bureau",
  serviceName: "Automatische SEO",
  variant: "uitbesteden",
  headline: "Automatische SEO Bureau Nodig?",
  subheadline: "Waarom een traditioneel bureau kiezen als het ook slim en automatisch kan?",
  subtitlePoints: ["Bureaukwaliteit", "Automatische snelheid", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een automatische SEO bureau?",
  whatIsText: [
    "Je zoekt een SEO bureau voor automatische optimalisatie. Logisch — je wilt professionals die het werk uit handen nemen. Maar de meeste bureaus werken handmatig: traag, duur en afhankelijk van individuele medewerkers.",
    "KlikKlaarSEO biedt bureaukwaliteit met de snelheid van automatisering. Ons systeem draait 24/7, reageert direct op veranderingen en kost een fractie van een traditioneel bureau. Geen menselijke fouten, geen vergeten deadlines."
  ],
  benefits: [
    { icon: "Building2", title: "Bureaukwaliteit", description: "Dezelfde expertise als een top-bureau, aangedreven door technologie" },
    { icon: "Cpu", title: "Automatisch & snel", description: "Geen wachttijden, geen menselijke bottlenecks" },
    { icon: "Wallet", title: "70% goedkoper", description: "Bureau-resultaten voor een fractie van de prijs" },
    { icon: "Clock", title: "24/7 actief", description: "Geen kantoortijden — het systeem stopt nooit" },
    { icon: "BarChart", title: "Transparant", description: "Wekelijkse rapporten in normaal Nederlands, geen vakjargon" }
  ],
  processSteps: [
    { step: 1, title: "Kennismakingsgesprek", description: "We bespreken je doelen en huidige situatie — net als bij een bureau" },
    { step: 2, title: "Diepgaande analyse", description: "Ons systeem scant je website op 200+ factoren" },
    { step: 3, title: "Automatische uitvoering", description: "Optimalisaties worden direct doorgevoerd — geen weken wachten" },
    { step: 4, title: "Wekelijkse rapportage", description: "Helder rapport met resultaten, geen dik PDF-rapport vol jargon" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€1.000 - €3.000+", freelancer: "€300 - €1.000", klikklaar: "€99 - €249" },
    { feature: "Snelheid van levering", bureau: "2-4 weken per cyclus", freelancer: "1-2 weken", klikklaar: "Direct, 24/7" },
    { feature: "Accountmanager", bureau: "Ja, beperkt bereikbaar", freelancer: "Nee", klikklaar: "Pro+ pakket" },
    { feature: "Transparantie", bureau: "Maandelijks rapport", freelancer: "Wisselend", klikklaar: "Wekelijks, real-time" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Variabel", klikklaar: "Maandelijks opzegbaar" },
    { feature: "AI-vindbaarheid", bureau: "Extra dienst", freelancer: "Zelden", klikklaar: "Standaard inbegrepen" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar, geen kleine lettertjes" },
    { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Wekelijks inzicht in rankings, verkeer en verbeteringen" },
    { icon: "Cpu", title: "Bureau + automatisering", description: "Het beste van twee werelden: expertise én snelheid" }
  ],
  faqs: [
    { question: "Is KlikKlaarSEO een SEO bureau?", answer: "We leveren bureau-kwaliteit, maar werken anders. In plaats van een team consultants dat handmatig werkt, gebruiken we slimme automatisering aangevuld met menselijke expertise. Het resultaat is hetzelfde (of beter), maar sneller en goedkoper." },
    { question: "Waarom zou ik geen traditioneel SEO bureau kiezen?", answer: "Traditionele bureaus zijn duur (€1.000-€3.000/mnd), traag (weken per cyclus) en binden je aan lange contracten. Automatische SEO levert dezelfde resultaten: sneller, goedkoper en flexibeler." },
    { question: "Krijg ik persoonlijk contact?", answer: "Ja, bij het Pro+ pakket heb je een vaste accountmanager met maandelijkse consulting calls. Bij alle pakketten kun je ons bereiken via e-mail en telefoon." },
    { question: "Wat als mijn situatie te complex is voor automatisering?", answer: "Ons Pro+ pakket combineert automatisering met persoonlijke begeleiding. Voor 95% van de bedrijven is dat meer dan voldoende. Bij zeer complexe enterprise-situaties bespreken we de mogelijkheden." },
    { question: "Hoe vergelijkt jullie kwaliteit met een bureau?", answer: "Ons systeem controleert 200+ factoren en optimaliseert 24/7. Een bureau-medewerker kan 10-20 klanten tegelijk bedienen en werkt in cycli. Automatisering mist geen deadlines en werkt consistent." },
    { question: "Kan ik eerst een proefperiode krijgen?", answer: "Je kunt direct starten met een maandelijks opzegbaar abonnement. Niet tevreden? Dan stop je na de eerste maand. Zo eenvoudig is het." }
  ],
  metaTitle: "Automatische SEO Bureau | Bureaukwaliteit, Slimmer & Betaalbaar",
  metaDescription: "Op zoek naar een automatische SEO bureau? KlikKlaarSEO biedt bureaukwaliteit met automatisering: sneller, goedkoper en transparanter. Vanaf €99/mnd."
};

const lokaleSeoBureau: ServiceVariantData = {
  slug: "lokale-seo-bureau",
  serviceName: "Lokale SEO",
  variant: "uitbesteden",
  headline: "Lokale SEO Bureau Nodig?",
  subheadline: "Gevonden worden in jouw regio zonder de kosten van een traditioneel bureau",
  subtitlePoints: ["Google Maps expertise", "Betaalbare bureaukwaliteit", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een lokale SEO bureau?",
  whatIsText: [
    "Je wilt gevonden worden door klanten in jouw regio en zoekt een bureau om dit professioneel aan te pakken. Terecht — lokale SEO vereist specialistische kennis van Google Maps, Google Mijn Bedrijf en lokale zoekalgoritmes.",
    "Maar moet dat per se via een duur bureau? KlikKlaarSEO biedt dezelfde lokale SEO expertise, aangedreven door automatisering. Je Google Mijn Bedrijf profiel, lokale rankings en review strategie worden continu geoptimaliseerd — zonder de bureaukosten."
  ],
  benefits: [
    { icon: "MapPin", title: "Lokale expertise", description: "Specialistische kennis van Google Maps en lokaal zoekgedrag" },
    { icon: "Building2", title: "GMB-beheer", description: "Volledig beheer van je Google Mijn Bedrijf profiel" },
    { icon: "Star", title: "Review strategie", description: "Meer positieve reviews die nieuwe klanten overtuigen" },
    { icon: "Users", title: "Lokale concurrentie", description: "Inzicht in wat lokale concurrenten doen en hoe je ze verslaat" },
    { icon: "TrendingUp", title: "Meetbare groei", description: "Wekelijks zien hoe je lokale posities verbeteren" }
  ],
  processSteps: [
    { step: 1, title: "Regio-analyse", description: "We analyseren je werkgebied, concurrenten en zoekgedrag in de regio" },
    { step: 2, title: "GMB optimalisatie", description: "Je Google Mijn Bedrijf wordt volledig geoptimaliseerd met fotos, posts en info" },
    { step: 3, title: "Lokale SEO uitvoering", description: "Website, NAP-consistentie en lokale content worden geoptimaliseerd" },
    { step: 4, title: "Doorlopende groei", description: "Rankings, reviews en zichtbaarheid verbeteren structureel elke maand" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€250 - €800", klikklaar: "€99 - €249" },
    { feature: "GMB-beheer", bureau: "Handmatig, beperkt", freelancer: "Basis", klikklaar: "Volledig, automatisch" },
    { feature: "Review strategie", bureau: "Extra dienst", freelancer: "Zelden", klikklaar: "Inbegrepen" },
    { feature: "Lokale rapportage", bureau: "Maandelijks", freelancer: "Na oplevering", klikklaar: "Wekelijks" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Variabel", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Multi-locatie", bureau: "Per locatie betalen", freelancer: "Beperkt", klikklaar: "Pro+ pakket" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen lange contracten zoals bij traditionele bureaus" },
    { icon: "MapPin", title: "Lokale focus", description: "Gespecialiseerd in jouw stad en werkgebied" },
    { icon: "TrendingUp", title: "Transparant resultaat", description: "Wekelijks inzicht in je lokale rankings" }
  ],
  faqs: [
    { question: "Is KlikKlaarSEO een lokale SEO bureau?", answer: "We bieden bureau-niveau lokale SEO, maar dan sneller en betaalbaarder. Ons systeem optimaliseert je lokale aanwezigheid 24/7 — Google Mijn Bedrijf, lokale rankings, reviews en meer." },
    { question: "Waarom geen lokaal SEO bureau in mijn stad?", answer: "Een lokaal bureau kost €500-€2.000/mnd en bindt je aan lange contracten. Onze automatisering levert dezelfde (of betere) resultaten voor een fractie van de prijs, ongeacht waar je zit." },
    { question: "Begrijpen jullie mijn lokale markt?", answer: "Ja, we analyseren het specifieke zoekgedrag en de concurrentie in jouw regio. Of je nu in Amsterdam, Rotterdam of een kleinere stad zit — onze data-gedreven aanpak past zich aan op jouw lokale markt." },
    { question: "Beheren jullie mijn Google Mijn Bedrijf?", answer: "Ja, bij alle pakketten. We optimaliseren je profiel, plaatsen updates, beheren reviews en zorgen dat je NAP-gegevens consistent zijn." },
    { question: "Kan ik ook in meerdere steden gevonden worden?", answer: "Ja, met het Pro+ pakket of een aangepast plan. We bespreken je multi-locatie wensen in het kennismakingsgesprek." },
    { question: "Hoe snel zie ik resultaten in mijn regio?", answer: "Google Mijn Bedrijf verbeteringen zijn binnen 2-4 weken zichtbaar. Lokale organische rankings verbeteren binnen 6-12 weken." }
  ],
  metaTitle: "Lokale SEO Bureau | Gevonden in Jouw Regio | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een lokale SEO bureau? KlikKlaarSEO biedt bureaukwaliteit voor Google Maps en lokale rankings. Vanaf €99/mnd, altijd opzegbaar."
};

const technischeSeoBureau: ServiceVariantData = {
  slug: "technische-seo-bureau",
  serviceName: "Technische SEO",
  variant: "uitbesteden",
  headline: "Technische SEO Bureau Nodig?",
  subheadline: "Bureaukwaliteit voor Core Web Vitals, indexering en snelheid — zonder bureaukosten",
  subtitlePoints: ["200+ technische checks", "Continue monitoring", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een technische SEO bureau?",
  whatIsText: [
    "Je website heeft technische problemen die je rankings beïnvloeden en je zoekt een bureau met de expertise om dit op te lossen. Laadsnelheid, Core Web Vitals, indexering, structured data — dit vereist specialistische kennis.",
    "Een traditioneel bureau rekent €500-€2.000/mnd en werkt in maandelijkse cycli. KlikKlaarSEO monitort je website 24/7 en lost technische problemen direct op. Sneller, goedkoper en consistenter dan elk bureau."
  ],
  benefits: [
    { icon: "Zap", title: "Snelheidsoptimalisatie", description: "Core Web Vitals continu gemonitord en verbeterd" },
    { icon: "Search", title: "Indexering beheer", description: "Alle pagina's correct geïndexeerd en crawlbaar" },
    { icon: "Code", title: "Schema markup", description: "Structured data voor rich snippets in zoekresultaten" },
    { icon: "Shield", title: "Proactieve fixes", description: "Problemen worden opgelost vóórdat ze rankings beïnvloeden" },
    { icon: "Smartphone", title: "Mobile-first", description: "Perfecte score op alle apparaten en schermformaten" }
  ],
  processSteps: [
    { step: 1, title: "Technische intake", description: "We bespreken je website, platform en bekende problemen" },
    { step: 2, title: "200+ punten audit", description: "Diepgaande scan van alle technische SEO-factoren" },
    { step: 3, title: "Directe implementatie", description: "Kritieke issues worden opgepakt — geen weken wachten op een rapport" },
    { step: 4, title: "24/7 monitoring", description: "Continue bewaking voorkomt dat nieuwe problemen ontstaan" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €1.000", klikklaar: "€99 - €249" },
    { feature: "Monitoring frequentie", bureau: "Maandelijks/kwartaal", freelancer: "Eenmalig", klikklaar: "24/7 continu" },
    { feature: "Responstijd bij issues", bureau: "Dagen tot weken", freelancer: "Variabel", klikklaar: "Automatisch, direct" },
    { feature: "Core Web Vitals", bureau: "Rapport + advies", freelancer: "Beperkt", klikklaar: "Monitoring + fixes" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Structured data", bureau: "Extra dienst", freelancer: "Soms", klikklaar: "Inbegrepen" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen lock-in", description: "Maandelijks opzegbaar, geen projectfacturen" },
    { icon: "Zap", title: "Directe fixes", description: "Geen weken wachten — problemen worden direct opgelost" },
    { icon: "Search", title: "200+ controles", description: "Uitgebreider dan de meeste bureaus controleren" }
  ],
  faqs: [
    { question: "Hebben jullie dezelfde expertise als een technisch SEO bureau?", answer: "Ja, onze systemen zijn gebouwd door technische SEO-specialisten. Het verschil is dat automatisering 24/7 controleert terwijl een bureau-medewerker maandelijks een check doet." },
    { question: "Mijn website is gebouwd op een specifiek platform. Werkt dat?", answer: "Ja, we ondersteunen WordPress, Shopify, Wix, Squarespace, custom websites en meer. De technische monitoring past zich aan op je platform." },
    { question: "Wat als er een groot technisch probleem is dat handwerk vereist?", answer: "Bij het Pro+ pakket bieden we developer-ondersteuning voor complexe issues. Voor de meeste technische problemen is automatische oplossing voldoende." },
    { question: "Hoeveel kost een technisch SEO bureau normaal?", answer: "Een technisch SEO bureau rekent €500-€2.000/mnd of €1.000-€5.000 per eenmalige audit. KlikKlaarSEO biedt continue monitoring + fixes vanaf €99/mnd." },
    { question: "Hoe snel worden technische problemen opgelost?", answer: "Kritieke issues worden dezelfde dag gesignaleerd. De meeste fixes zijn automatisch en direct. Complexere problemen worden binnen 1-2 werkdagen opgepakt." },
    { question: "Rapporteren jullie ook over Core Web Vitals?", answer: "Ja, LCP, INP en CLS worden continu gemonitord. Je ziet de scores en verbeteringen in je wekelijks rapport." }
  ],
  metaTitle: "Technische SEO Bureau | 24/7 Monitoring & Fixes | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een technische SEO bureau? KlikKlaarSEO biedt 24/7 monitoring, Core Web Vitals optimalisatie en automatische fixes. Vanaf €99/mnd."
};

const seoAuditBureau: ServiceVariantData = {
  slug: "seo-audit-bureau",
  serviceName: "SEO Audit",
  variant: "uitbesteden",
  headline: "SEO Audit Bureau Nodig?",
  subheadline: "Een diepgaande audit die niet in een la verdwijnt — inclusief implementatie",
  subtitlePoints: ["200+ checkpunten", "Inclusief implementatie", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO audit bureau?",
  whatIsText: [
    "Je wilt weten waar je website staat en wat er verbeterd kan worden. Een SEO audit bureau levert een rapport met aanbevelingen — maar dan moet je het nog wel zelf (laten) uitvoeren. Dat is waar het vaak fout gaat.",
    "Bij KlikKlaarSEO krijg je niet alleen een uitgebreide audit van 200+ factoren, maar voeren we de verbeteringen ook daadwerkelijk door. Geen dik rapport dat in een la verdwijnt, maar echte actie en meetbaar resultaat."
  ],
  benefits: [
    { icon: "ClipboardCheck", title: "200+ checkpunten", description: "Uitgebreider dan de meeste bureaus analyseren" },
    { icon: "Wrench", title: "Implementatie inbegrepen", description: "We voeren verbeteringen uit — geen rapport zonder actie" },
    { icon: "Bot", title: "AI-gereedheid", description: "Check ook vindbaarheid in ChatGPT, Perplexity en AI Overview" },
    { icon: "RefreshCw", title: "Continue monitoring", description: "Niet eenmalig maar doorlopend — altijd actuele inzichten" },
    { icon: "BarChart", title: "Helder rapport", description: "Normaal Nederlands, geen technisch jargon" }
  ],
  processSteps: [
    { step: 1, title: "Intake gesprek", description: "We bespreken je doelen, concurrenten en specifieke zorgen" },
    { step: 2, title: "Diepgaande audit", description: "200+ factoren worden geanalyseerd: techniek, content, links, AI, snelheid" },
    { step: 3, title: "Helder rapport", description: "Je ontvangt een rapport in normaal Nederlands met geprioriteerde acties" },
    { step: 4, title: "Uitvoering & monitoring", description: "We voeren de verbeteringen door en monitoren de resultaten" }
  ],
  comparisonData: [
    { feature: "Kosten audit", bureau: "€1.000 - €5.000 eenmalig", freelancer: "€500 - €2.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Implementatie", bureau: "Extra offerte (€€€)", freelancer: "Beperkt", klikklaar: "Automatisch inbegrepen" },
    { feature: "Follow-up audits", bureau: "Elk apart betaald", freelancer: "Elk apart betaald", klikklaar: "Continue monitoring" },
    { feature: "AI-gereedheid check", bureau: "Zeer zelden", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Rapport stijl", bureau: "50+ pagina PDF", freelancer: "Wisselend", klikklaar: "Helder dashboard + rapport" },
    { feature: "Doorlooptijd", bureau: "2-4 weken", freelancer: "1-2 weken", klikklaar: "Binnen 48 uur" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen eenmalige factuur", description: "De audit zit in je maandelijks abonnement" },
    { icon: "Wrench", title: "Implementatie inbegrepen", description: "Geen extra kosten voor het uitvoeren van verbeteringen" },
    { icon: "Clock", title: "Snel resultaat", description: "Eerste audit binnen 48 uur, niet na weken wachten" }
  ],
  faqs: [
    { question: "Hoe verschilt jullie audit van die van een bureau?", answer: "Ons systeem controleert 200+ factoren automatisch — uitgebreider dan de meeste bureaus. Plus: we voeren de verbeteringen direct door. Bij een bureau krijg je een rapport en moet je zelf implementeren (of extra betalen)." },
    { question: "Hoeveel kost een SEO audit bij een bureau?", answer: "Een eenmalige audit kost €1.000-€5.000 bij een bureau, exclusief implementatie. Bij KlikKlaarSEO zit de audit inbegrepen in je abonnement vanaf €99/mnd, inclusief doorvoering." },
    { question: "Hoe snel krijg ik het audit rapport?", answer: "De automatische scan draait binnen enkele uren. Een volledig rapport met prioriteiten is binnen 48 uur beschikbaar — veel sneller dan de 2-4 weken die een bureau nodig heeft." },
    { question: "Checken jullie ook AI-vindbaarheid?", answer: "Ja, we analyseren hoe goed je website vindbaar is voor AI-systemen als ChatGPT en Google AI Overview. Dit bieden de meeste bureaus niet aan." },
    { question: "Wat als er grote problemen gevonden worden?", answer: "Kritieke problemen worden direct aangepakt. Je ziet in het rapport precies wat gevonden is en wat er al opgelost is." },
    { question: "Is een eenmalige audit ook mogelijk?", answer: "We raden een doorlopend abonnement aan omdat SEO continu verandert. Maar omdat je maandelijks kunt opzeggen, kun je ook na de eerste audit stoppen als je wilt." }
  ],
  metaTitle: "SEO Audit Bureau | 200+ Checks + Implementatie | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO audit bureau? KlikKlaarSEO biedt een diepgaande audit met 200+ checks inclusief implementatie. Vanaf €99/mnd, altijd opzegbaar."
};

const seoStrategieBureau: ServiceVariantData = {
  slug: "seo-strategie-bureau",
  serviceName: "SEO Strategie",
  variant: "uitbesteden",
  headline: "SEO Strategie Bureau Nodig?",
  subheadline: "Een strategisch groeiplan dat daadwerkelijk wordt uitgevoerd — niet alleen advies",
  subtitlePoints: ["Data-gedreven plan", "Inclusief uitvoering", "Altijd opzegbaar"],
  whatIsTitle: "Waarom zoek je een SEO strategie bureau?",
  whatIsText: [
    "Je wilt structureel groeien in Google en zoekt een bureau dat een strategisch plan maakt. Het probleem met de meeste bureaus? Ze leveren een mooi strategiedocument, maar de uitvoering is jouw probleem (of kost extra).",
    "Bij KlikKlaarSEO maken we niet alleen een data-gedreven strategie op maat, we voeren het plan ook uit. Keyword research, concurrentie-analyse, content strategie, technische roadmap — alles wordt geïmplementeerd en maandelijks bijgestuurd."
  ],
  benefits: [
    { icon: "Target", title: "Strategie op maat", description: "Geen one-size-fits-all maar een plan voor jouw situatie" },
    { icon: "BarChart", title: "Data-gedreven", description: "Gebaseerd op echte zoekdata en concurrentie-analyse" },
    { icon: "Wrench", title: "Uitvoering inbegrepen", description: "We maken niet alleen het plan, we voeren het ook uit" },
    { icon: "RefreshCw", title: "Maandelijkse bijsturing", description: "De strategie evolueert mee op basis van resultaten" },
    { icon: "Users", title: "Concurrentie-tracking", description: "Continu inzicht in wat je concurrenten doen" }
  ],
  processSteps: [
    { step: 1, title: "Strategisch gesprek", description: "Diepgaande intake over je bedrijf, doelen en marktpositie" },
    { step: 2, title: "Research & analyse", description: "Keyword research, concurrentie-analyse en marktonderzoek" },
    { step: 3, title: "Strategisch plan", description: "Roadmap met quick wins, middellange en lange termijn acties" },
    { step: 4, title: "Uitvoering & bijsturing", description: "We implementeren het plan en sturen maandelijks bij" }
  ],
  comparisonData: [
    { feature: "Kosten strategietraject", bureau: "€2.000 - €10.000", freelancer: "€1.000 - €3.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Uitvoering", bureau: "Aparte offerte", freelancer: "Beperkt", klikklaar: "Volledig inbegrepen" },
    { feature: "Bijsturing", bureau: "Kwartaal-reviews (extra)", freelancer: "Ad hoc", klikklaar: "Maandelijks, inbegrepen" },
    { feature: "Concurrentie-analyse", bureau: "Eenmalig", freelancer: "Oppervlakkig", klikklaar: "Doorlopend" },
    { feature: "AI-strategie", bureau: "Extra dienst", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "3-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen grote vooruitbetaling", description: "Strategie zit in je maandelijks abonnement" },
    { icon: "Target", title: "Op maat gemaakt", description: "Specifiek voor jouw branche en concurrenten" },
    { icon: "Wrench", title: "Uitvoering inbegrepen", description: "Geen extra kosten voor implementatie" }
  ],
  faqs: [
    { question: "Waarom niet een gespecialiseerd strategiebureau?", answer: "Een strategiebureau rekent €2.000-€10.000 voor een plan, en de uitvoering kost extra. Bij KlikKlaarSEO zit strategie, uitvoering én bijsturing inbegrepen in je abonnement vanaf €99/mnd." },
    { question: "Hoe maken jullie een strategie op maat?", answer: "We analyseren je branche, concurrenten, zoekvolumes en huidige posities. Op basis van data maken we een roadmap met quick wins en lange-termijn doelen, specifiek voor jouw situatie." },
    { question: "Voeren jullie de strategie ook uit?", answer: "Ja, dat is het grote verschil. We maken niet alleen een plan maar implementeren het ook: content, techniek, links en AI-vindbaarheid worden allemaal opgepakt." },
    { question: "Hoe vaak wordt de strategie bijgestuurd?", answer: "Maandelijks op basis van ranking data en resultaten. Bij grote marktveranderingen of algoritme-updates reageren we direct." },
    { question: "Krijg ik ook een concurrentie-analyse?", answer: "Ja, doorlopend. We volgen continu wat je belangrijkste concurrenten doen: hun zoektermen, content strategie en technische aanpak." },
    { question: "Is dit geschikt voor mijn branche?", answer: "Ja, onze data-gedreven aanpak werkt voor elke branche. We passen de strategie aan op jouw specifieke markt, doelgroep en concurrentie." }
  ],
  metaTitle: "SEO Strategie Bureau | Plan + Uitvoering | Vanaf €99/mnd",
  metaDescription: "Op zoek naar een SEO strategie bureau? KlikKlaarSEO biedt een data-gedreven strategieplan inclusief uitvoering. Vanaf €99/mnd, altijd opzegbaar."
};

// ============================================
// P2: SCAN VARIANTS (5 services)
// "SEO [dienst] scan/check" — targeting DIY/research intent
// ============================================

const automatischeSeoScan: ServiceVariantData = {
  slug: "automatische-seo-scan",
  serviceName: "Automatische SEO",
  variant: "uitbesteden",
  headline: "Automatische SEO Scan",
  subheadline: "Ontdek in één scan wat er automatisch verbeterd kan worden aan je website",
  subtitlePoints: ["200+ checkpunten", "Gratis adviesgesprek", "Direct inzicht"],
  whatIsTitle: "Wat is een automatische SEO scan?",
  whatIsText: [
    "Een automatische SEO scan analyseert je website op alle factoren die je vindbaarheid beïnvloeden — automatisch en objectief. Van technische fouten en laadsnelheid tot content kwaliteit en AI-gereedheid. In plaats van weken wachten op een bureau krijg je direct inzicht.",
    "Bij KlikKlaarSEO gaan we verder dan alleen scannen. Na de analyse pakken we de gevonden verbeterpunten ook daadwerkelijk op. Automatisch, zonder dat jij er iets voor hoeft te doen."
  ],
  benefits: [
    { icon: "Cpu", title: "Volledig automatisch", description: "Geen handwerk, geen wachttijden — direct resultaten" },
    { icon: "ClipboardCheck", title: "200+ factoren", description: "Techniek, content, snelheid, mobiel en AI-gereedheid" },
    { icon: "Zap", title: "Snel resultaat", description: "Eerste inzichten binnen uren, niet weken" },
    { icon: "Bot", title: "AI-ready check", description: "Check ook je vindbaarheid in ChatGPT en AI-zoekmachines" },
    { icon: "Wrench", title: "Automatische fixes", description: "Gevonden problemen worden direct aangepakt" }
  ],
  processSteps: [
    { step: 1, title: "URL invoeren", description: "Geef je website URL op en wij starten de scan" },
    { step: 2, title: "Automatische analyse", description: "Ons systeem scant 200+ factoren in je website" },
    { step: 3, title: "Helder rapport", description: "Je ontvangt een overzicht met scores en verbeterpunten" },
    { step: 4, title: "Automatisch oplossen", description: "Start een abonnement en de fixes worden direct doorgevoerd" }
  ],
  faqs: [
    { question: "Is de SEO scan gratis?", answer: "We bieden een gratis adviesgesprek waarin we de belangrijkste bevindingen bespreken. De volledige scan met 200+ checkpunten en automatische fixes is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik de resultaten?", answer: "De automatische scan draait binnen enkele uren. Je krijgt direct inzicht in de belangrijkste verbeterpunten van je website." },
    { question: "Wat wordt er allemaal gescand?", answer: "200+ factoren: laadsnelheid, Core Web Vitals, mobiele weergave, indexering, structured data, content kwaliteit, interne links, AI-vindbaarheid, duplicate content, broken links en meer." },
    { question: "Is dit beter dan een gratis online SEO tool?", answer: "Ja, gratis tools controleren 10-20 basisfactoren. Onze scan analyseert 200+ factoren en biedt ook AI-gereedheid checks. Plus: we lossen de gevonden problemen daadwerkelijk op." },
    { question: "Moet ik iets installeren of toegang geven?", answer: "Nee, we scannen je website extern. Voor diepgaandere analyses kan toegang tot Google Search Console handig zijn, maar het is niet verplicht." },
    { question: "Wat gebeurt er na de scan?", answer: "Je ontvangt een helder rapport met geprioriteerde verbeterpunten. Met een abonnement worden deze automatisch opgepakt. Zonder abonnement kun je het rapport als handleiding gebruiken." }
  ],
  metaTitle: "Automatische SEO Scan | 200+ Checks | Direct Inzicht",
  metaDescription: "Automatische SEO scan: laat je website analyseren op 200+ factoren. Direct inzicht in verbeterpunten. Inclusief AI-gereedheid check. Vraag een gratis adviesgesprek aan."
};

const lokaleSeoScan: ServiceVariantData = {
  slug: "lokale-seo-scan",
  serviceName: "Lokale SEO",
  variant: "uitbesteden",
  headline: "Lokale SEO Scan",
  subheadline: "Check hoe goed je lokaal gevonden wordt — en wat er beter kan",
  subtitlePoints: ["Google Maps check", "GMB analyse", "Direct inzicht"],
  whatIsTitle: "Wat is een lokale SEO scan?",
  whatIsText: [
    "Een lokale SEO scan analyseert hoe goed je bedrijf gevonden wordt door lokale zoekers. We controleren je Google Mijn Bedrijf profiel, lokale rankings, NAP-consistentie, reviews en lokale concurrentie.",
    "Het resultaat is een helder overzicht van je lokale online aanwezigheid met concrete verbeterpunten. Bij KlikKlaarSEO pakken we die verbeteringen ook daadwerkelijk op — automatisch."
  ],
  benefits: [
    { icon: "MapPin", title: "Google Maps check", description: "Hoe scoor je in het lokale 3-pack?" },
    { icon: "Building2", title: "GMB analyse", description: "Is je Google Mijn Bedrijf profiel geoptimaliseerd?" },
    { icon: "Star", title: "Review check", description: "Hoe sta je ervoor met reviews vs. concurrenten?" },
    { icon: "Globe", title: "NAP-consistentie", description: "Zijn je bedrijfsgegevens overal hetzelfde?" },
    { icon: "Users", title: "Concurrentie check", description: "Hoe scoor je ten opzichte van lokale concurrenten?" }
  ],
  processSteps: [
    { step: 1, title: "Locatie opgeven", description: "Geef je bedrijfsnaam en locatie op" },
    { step: 2, title: "Lokale scan", description: "We analyseren je Google Maps, GMB, reviews en lokale rankings" },
    { step: 3, title: "Inzichtenrapport", description: "Je ontvangt een overzicht met scores en concrete verbeterpunten" },
    { step: 4, title: "Actie ondernemen", description: "Start een abonnement en de verbeteringen worden automatisch doorgevoerd" }
  ],
  faqs: [
    { question: "Wat controleert een lokale SEO scan?", answer: "We checken je Google Maps positie, Google Mijn Bedrijf profiel, lokale rankings, NAP-consistentie, reviews, lokale backlinks en hoe je scoort ten opzichte van concurrenten in jouw regio." },
    { question: "Is de lokale SEO scan gratis?", answer: "We bieden een gratis adviesgesprek met de belangrijkste lokale inzichten. De volledige scan met automatische optimalisatie is onderdeel van ons abonnement." },
    { question: "Hoe snel krijg ik resultaten?", answer: "De eerste lokale inzichten zijn binnen uren beschikbaar. Een volledig rapport met concurrentie-vergelijking volgt binnen 1-2 werkdagen." },
    { question: "Ik heb geen fysieke winkel. Is een lokale scan relevant?", answer: "Ja, ook dienstverleners die op locatie werken profiteren van lokale vindbaarheid. We analyseren dan je werkgebied in plaats van een vast adres." },
    { question: "Checken jullie ook mijn Google reviews?", answer: "Ja, we analyseren je reviews: aantal, gemiddelde score, vergelijking met concurrenten en of je profiel reviews effectief benut." },
    { question: "Wat kan ik zelf doen met de resultaten?", answer: "Het rapport bevat concrete verbeterpunten die je zelf kunt doorvoeren. Of start een abonnement en wij pakken alles automatisch op." }
  ],
  metaTitle: "Lokale SEO Scan | Google Maps & GMB Check | Direct Inzicht",
  metaDescription: "Lokale SEO scan: check je Google Maps positie, GMB profiel en lokale rankings. Ontdek hoe je beter gevonden wordt in jouw regio."
};

const technischeSeoScan: ServiceVariantData = {
  slug: "technische-seo-scan",
  serviceName: "Technische SEO",
  variant: "uitbesteden",
  headline: "Technische SEO Scan",
  subheadline: "Ontdek alle technische problemen die je website tegenhouden in Google",
  subtitlePoints: ["Core Web Vitals", "Snelheidscheck", "Direct inzicht"],
  whatIsTitle: "Wat is een technische SEO scan?",
  whatIsText: [
    "Een technische SEO scan doorlicht de technische basis van je website: laadsnelheid, Core Web Vitals, mobiele weergave, indexering, structured data, HTTPS, canonicals en meer. Het resultaat is een helder overzicht van alle technische verbeterpunten.",
    "Veel websitebeheerders weten niet dat technische problemen hun rankings remmen. Een trage website, verkeerde redirects of ontbrekende schema markup kosten je dagelijks klanten. Onze scan brengt alles aan het licht."
  ],
  benefits: [
    { icon: "Zap", title: "Snelheidsanalyse", description: "Laadtijden en Core Web Vitals gedetailleerd in kaart" },
    { icon: "Smartphone", title: "Mobiele check", description: "Hoe presteert je website op mobiel?" },
    { icon: "Search", title: "Indexering check", description: "Worden al je pagina's gevonden en geïndexeerd?" },
    { icon: "Code", title: "Structured data", description: "Is je schema markup correct en volledig?" },
    { icon: "Shield", title: "Security check", description: "HTTPS, mixed content en beveiligingsproblemen" }
  ],
  processSteps: [
    { step: 1, title: "URL invoeren", description: "Geef je website URL op voor de technische scan" },
    { step: 2, title: "Diepgaande analyse", description: "200+ technische factoren worden gecontroleerd" },
    { step: 3, title: "Prioriteitenrapport", description: "Je ontvangt een overzicht met kritieke, belangrijke en nice-to-have fixes" },
    { step: 4, title: "Fixes doorvoeren", description: "Start een abonnement en de technische problemen worden automatisch opgelost" }
  ],
  faqs: [
    { question: "Wat controleert een technische SEO scan?", answer: "Laadsnelheid (Core Web Vitals: LCP, INP, CLS), mobiele vriendelijkheid, indexeerbaarheid, XML sitemap, robots.txt, HTTPS, canonicals, redirects, structured data, broken links, duplicate content en meer." },
    { question: "Is de technische scan gratis?", answer: "We bieden een gratis adviesgesprek met de belangrijkste technische bevindingen. De volledige scan met 200+ checks en automatische fixes is onderdeel van ons abonnement." },
    { question: "Hoe verschilt dit van PageSpeed Insights?", answer: "PageSpeed Insights controleert alleen snelheid op één pagina. Onze scan analyseert je hele website op 200+ factoren: indexering, schema markup, redirects, crawlbaarheid en meer." },
    { question: "Hoe snel krijg ik de resultaten?", answer: "De scan draait binnen enkele uren. Je ontvangt direct een rapport met geprioriteerde verbeterpunten." },
    { question: "Kan ik de problemen zelf oplossen?", answer: "Het rapport bevat concrete instructies die je (of je developer) kunt uitvoeren. Of start een abonnement en wij lossen alles automatisch op." },
    { question: "Werkt de scan met elk website-platform?", answer: "Ja, onze technische scan werkt met WordPress, Shopify, Wix, Squarespace, custom websites en meer." }
  ],
  metaTitle: "Technische SEO Scan | Core Web Vitals & 200+ Checks | Direct",
  metaDescription: "Technische SEO scan: check laadsnelheid, Core Web Vitals, indexering en 200+ factoren. Ontdek wat je website technisch tegenhoudt. Direct inzicht."
};

const seoAuditScan: ServiceVariantData = {
  slug: "seo-audit-scan",
  serviceName: "SEO Audit",
  variant: "uitbesteden",
  headline: "SEO Audit Scan",
  subheadline: "Een complete doorlichting van je website — snel, grondig en actionable",
  subtitlePoints: ["200+ checkpunten", "Helder rapport", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO audit scan?",
  whatIsText: [
    "Een SEO audit scan is een uitgebreide doorlichting van je website op alle factoren die je vindbaarheid beïnvloeden. Techniek, content, links, snelheid, mobiel, AI-gereedheid — alles wordt geanalyseerd en je krijgt een geprioriteerd actieplan.",
    "Het verschil met een bureau-audit? Snelheid en implementatie. Waar een bureau 2-4 weken nodig heeft, levert onze scan binnen 48 uur resultaten. En de verbeteringen worden direct doorgevoerd."
  ],
  benefits: [
    { icon: "ClipboardCheck", title: "Alles-in-één", description: "Techniek, content, links, snelheid en AI-gereedheid in één scan" },
    { icon: "Zap", title: "Snel resultaat", description: "Binnen 48 uur een volledig rapport, niet na weken" },
    { icon: "FileText", title: "Helder actieplan", description: "Geprioriteerde verbeterpunten in normaal Nederlands" },
    { icon: "Bot", title: "AI-gereedheid", description: "Check vindbaarheid in ChatGPT en AI-zoekresultaten" },
    { icon: "Wrench", title: "Direct actie", description: "Verbeteringen worden automatisch doorgevoerd" }
  ],
  processSteps: [
    { step: 1, title: "Website opgeven", description: "Geef je URL op en vertel ons je belangrijkste doelen" },
    { step: 2, title: "Complete scan", description: "200+ factoren worden geanalyseerd: techniek, content, links en AI" },
    { step: 3, title: "Geprioriteerd rapport", description: "Je ontvangt een helder overzicht met de belangrijkste actiepunten" },
    { step: 4, title: "Implementatie", description: "Start een abonnement en de verbeteringen worden automatisch doorgevoerd" }
  ],
  faqs: [
    { question: "Wat is het verschil tussen een SEO scan en een SEO audit?", answer: "In de praktijk worden de termen door elkaar gebruikt. Een 'scan' klinkt sneller en lichter, een 'audit' grondiger. Bij KlikKlaarSEO krijg je altijd de volledige analyse: 200+ factoren, grondig én snel." },
    { question: "Hoeveel kost een SEO audit scan?", answer: "We bieden een gratis adviesgesprek met de belangrijkste bevindingen. De volledige audit scan met 200+ checks en implementatie zit in ons abonnement vanaf €99/mnd." },
    { question: "Hoe grondig is de scan?", answer: "Zeer grondig: 200+ factoren worden gecontroleerd, inclusief techniek, content, interne links, backlinks, snelheid, mobiel, structured data en AI-vindbaarheid. Uitgebreider dan de meeste bureaus." },
    { question: "Krijg ik ook concrete verbeterpunten?", answer: "Ja, het rapport bevat geprioriteerde actiepunten in normaal Nederlands. Geen vaag advies maar specifieke stappen die impact maken." },
    { question: "Is een eenmalige scan voldoende?", answer: "Een scan is een goed startpunt, maar SEO verandert continu. Met een abonnement wordt je website doorlopend gemonitord en verbeterd." },
    { question: "Hoe snel na de scan zie ik verbetering?", answer: "Technische fixes zijn direct meetbaar. Rankings verbeteren binnen 4-6 weken, meetbare groei in verkeer binnen 2-3 maanden." }
  ],
  metaTitle: "SEO Audit Scan | 200+ Checks in 48 Uur | KlikKlaarSEO",
  metaDescription: "SEO audit scan: complete doorlichting van je website op 200+ factoren. Binnen 48 uur resultaat, inclusief actieplan. Vraag een gratis adviesgesprek aan."
};

const seoStrategieScan: ServiceVariantData = {
  slug: "seo-strategie-scan",
  serviceName: "SEO Strategie",
  variant: "uitbesteden",
  headline: "SEO Strategie Scan",
  subheadline: "Ontdek welke SEO strategie het meeste oplevert voor jouw bedrijf",
  subtitlePoints: ["Keyword kansen", "Concurrentie-inzicht", "Direct inzicht"],
  whatIsTitle: "Wat is een SEO strategie scan?",
  whatIsText: [
    "Een SEO strategie scan analyseert je huidige positie in Google en identificeert de grootste groeikansen. Welke zoektermen zijn haalbaar? Waar laat je kansen liggen? Wat doen je concurrenten beter? Je krijgt een helder beeld van je groeipotentieel.",
    "Dit is de eerste stap naar een effectieve SEO strategie. In plaats van blind te optimaliseren, weet je precies waar de meeste impact te behalen is. Bij KlikKlaarSEO vertalen we deze inzichten direct naar actie."
  ],
  benefits: [
    { icon: "Target", title: "Kansen identificeren", description: "Ontdek welke zoektermen het meeste potentieel hebben" },
    { icon: "Users", title: "Concurrentie-inzicht", description: "Weet precies wat je concurrenten doen en hoe je ze verslaat" },
    { icon: "BarChart", title: "Groeipotentieel", description: "Hoeveel verkeer en leads kun je realistisch verwachten?" },
    { icon: "Route", title: "Prioriteiten", description: "Welke acties leveren de meeste impact op korte termijn?" },
    { icon: "TrendingUp", title: "Quick wins", description: "Direct haalbare verbeteringen die snel resultaat opleveren" }
  ],
  processSteps: [
    { step: 1, title: "Bedrijf & doelen", description: "Vertel ons over je bedrijf, doelgroep en ambities" },
    { step: 2, title: "Marktanalyse", description: "We analyseren zoekvolumes, concurrentie en kansen in je markt" },
    { step: 3, title: "Strategisch inzicht", description: "Je ontvangt een overzicht met kansen, prioriteiten en quick wins" },
    { step: 4, title: "Strategie uitvoeren", description: "Start een abonnement en wij voeren de strategie uit" }
  ],
  faqs: [
    { question: "Wat leer ik van een SEO strategie scan?", answer: "Je ontdekt welke zoektermen haalbaar zijn, waar je concurrenten op scoren, hoeveel groeipotentieel je hebt en welke acties de meeste impact maken. Concreet en actionable." },
    { question: "Is de strategie scan gratis?", answer: "We bieden een gratis adviesgesprek met de belangrijkste strategische inzichten. De volledige analyse met keyword research en concurrentie-data zit in ons abonnement." },
    { question: "Hoe verschilt dit van keyword research?", answer: "Keyword research is onderdeel van een strategie scan, maar we gaan verder: concurrentie-analyse, haalbaarheidscheck, content gap analyse en een roadmap met prioriteiten." },
    { question: "Krijg ik ook een uitvoeringsplan?", answer: "Ja, je ontvangt een geprioriteerde roadmap met quick wins en lange-termijn acties. Met een abonnement voeren wij het plan ook daadwerkelijk uit." },
    { question: "Hoe weet ik of SEO überhaupt werkt voor mijn branche?", answer: "Dat vertelt de strategie scan precies. We analyseren zoekvolumes in jouw markt en laten zien hoeveel potentieel er is. Sommige branches hebben enorm veel zoekverkeer, andere minder." },
    { question: "Kan ik de strategie zelf uitvoeren?", answer: "Het rapport bevat concrete actiepunten die je zelf (of met een developer) kunt uitvoeren. Of start een abonnement en wij doen het voor je." }
  ],
  metaTitle: "SEO Strategie Scan | Kansen & Concurrentie | Direct Inzicht",
  metaDescription: "SEO strategie scan: ontdek je groeikansen in Google. Keyword analyse, concurrentie-inzicht en een geprioriteerd actieplan. Vraag een gratis adviesgesprek aan."
};

// ============================================
// EXPORTS
// ============================================

export const serviceVariantsBureau: ServiceVariantData[] = [
  automatischeSeoBureau,
  lokaleSeoBureau,
  technischeSeoBureau,
  seoAuditBureau,
  seoStrategieBureau,
];

export const serviceVariantsScan: ServiceVariantData[] = [
  automatischeSeoScan,
  lokaleSeoScan,
  technischeSeoScan,
  seoAuditScan,
  seoStrategieScan,
];

export const allP2ServiceVariants: ServiceVariantData[] = [
  ...serviceVariantsBureau,
  ...serviceVariantsScan,
];
