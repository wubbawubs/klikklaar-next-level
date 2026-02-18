export interface ServiceVariantData {
  slug: string;
  serviceName: string;
  variant: "uitbesteden" | "abonnement";
  headline: string;
  subheadline: string;
  subtitlePoints: string[];
  whatIsTitle: string;
  whatIsText: string[];
  benefits: Array<{ icon: string; title: string; description: string }>;
  processSteps: Array<{ step: number; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  metaTitle: string;
  metaDescription: string;
  // Uitbesteden-specific
  comparisonData?: Array<{ feature: string; bureau: string; freelancer: string; klikklaar: string }>;
  guarantees?: Array<{ icon: string; title: string; description: string }>;
  // Abonnement-specific  
  pricingNote?: string;
}

// ============================================
// UITBESTEDEN VARIANTS (5 services)
// ============================================

const automatischeSeoUitbesteden: ServiceVariantData = {
  slug: "automatische-seo-uitbesteden",
  serviceName: "Automatische SEO",
  variant: "uitbesteden",
  headline: "Automatische SEO Uitbesteden?",
  subheadline: "Laat AI en automatisering het zware werk doen — jij focust op je bedrijf",
  subtitlePoints: ["Geen handmatig werk", "Continue optimalisatie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is automatische SEO uitbesteden?",
  whatIsText: [
    "Automatische SEO uitbesteden betekent dat je de vindbaarheid van je website overlaat aan een systeem dat continu analyseert, optimaliseert en rapporteert — zonder dat jij er iets voor hoeft te doen. Geen eindeloze meetings, geen ingewikkelde rapporten, gewoon resultaat.",
    "Bij KlikKlaarSEO combineren we slimme automatisering met menselijke expertise. Ons systeem draait 24/7 en pakt technische fouten, content kansen en AI-vindbaarheid automatisch op. Jij krijgt wekelijks een helder rapport in normaal Nederlands."
  ],
  benefits: [
    { icon: "Cpu", title: "24/7 optimalisatie", description: "Het systeem werkt dag en nacht, ook als jij slaapt" },
    { icon: "Clock", title: "Nul uur eigen werk", description: "Geen content schrijven, geen dashboards leren, geen meetings" },
    { icon: "TrendingUp", title: "Continue verbetering", description: "Niet eenmalig maar doorlopend — je website wordt elke week beter" },
    { icon: "Bot", title: "AI-vindbaarheid inbegrepen", description: "Optimalisatie voor ChatGPT, Perplexity en Google AI Overview" },
    { icon: "BarChart", title: "Wekelijkse rapportage", description: "Heldere updates in normaal Nederlands, geen vakjargon" }
  ],
  processSteps: [
    { step: 1, title: "Vrijblijvend gesprek", description: "We bespreken je doelen en huidige situatie in 15 minuten" },
    { step: 2, title: "Website scan", description: "Ons systeem analyseert je website op 200+ technische en content factoren" },
    { step: 3, title: "Automatische optimalisatie", description: "Het systeem begint direct met verbeteren: techniek, content, snelheid" },
    { step: 4, title: "Wekelijkse rapportages", description: "Je ontvangt wekelijks een rapport met concrete resultaten en groei" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €1.000", klikklaar: "€99 - €249" },
    { feature: "Jouw tijdsinvestering", bureau: "2-4 uur/maand meetings", freelancer: "1-2 uur/maand", klikklaar: "0 uur — volledig automatisch" },
    { feature: "Snelheid van optimalisatie", bureau: "Weken per cyclus", freelancer: "Wisselend", klikklaar: "Continue, 24/7" },
    { feature: "AI-vindbaarheid", bureau: "Soms, tegen meerprijs", freelancer: "Zelden", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Variabel", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Wisselend", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten. Opzeggen kan elke maand." },
    { icon: "Clock", title: "Resultaat binnen weken", description: "Eerste verbeteringen zichtbaar in 4-6 weken." },
    { icon: "TrendingUp", title: "Transparante rapportage", description: "Wekelijks een rapport in normaal Nederlands." }
  ],
  faqs: [
    { question: "Wat maakt automatische SEO anders dan een bureau?", answer: "Een bureau werkt met mensen die handmatig optimaliseren — dat kost tijd en geld. Automatische SEO gebruikt slimme systemen die 24/7 draaien, sneller reageren op veranderingen en structureel goedkoper zijn." },
    { question: "Is automatische SEO net zo goed als handmatige SEO?", answer: "Voor 90% van de MKB-bedrijven is automatische SEO effectiever. Het systeem mist geen deadlines, werkt continu en pakt zowel technische als content optimalisaties op. Voor complexe enterprise-situaties kan een hybride aanpak beter zijn." },
    { question: "Hoeveel kost automatische SEO uitbesteden?", answer: "Bij KlikKlaarSEO start automatische SEO vanaf €99 per maand. Vergelijk dat met een bureau (€500-€2.000/mnd) of freelancer (€300-€1.000/mnd)." },
    { question: "Hoe snel zie ik resultaten?", answer: "Technische verbeteringen zijn direct zichtbaar. Rankings verbeteren binnen 4-6 weken, meetbare groei in verkeer en leads volgt binnen 2-3 maanden." },
    { question: "Werkt dit voor elke website?", answer: "Ja, onze automatische SEO werkt voor WordPress, Shopify, Wix, custom websites en meer. We passen ons aan op je platform." },
    { question: "Kan ik tussentijds opzeggen?", answer: "Ja, altijd. Maandelijks opzegbaar zonder opgaaf van reden. Geen kleine lettertjes." },
    { question: "Wordt mijn website ook geoptimaliseerd voor AI-zoekmachines?", answer: "Ja, AI-vindbaarheid zit standaard inbegrepen. We optimaliseren voor Google, maar ook voor ChatGPT, Perplexity en Google AI Overview." }
  ],
  metaTitle: "Automatische SEO Uitbesteden | 24/7 Optimalisatie | €99/mnd",
  metaDescription: "Automatische SEO uitbesteden aan KlikKlaarSEO. Continue optimalisatie zonder eigen werk. AI-vindbaarheid inbegrepen. Vanaf €99/mnd, altijd opzegbaar."
};

const lokaleSeoUitbesteden: ServiceVariantData = {
  slug: "lokale-seo-uitbesteden",
  serviceName: "Lokale SEO",
  variant: "uitbesteden",
  headline: "Lokale SEO Uitbesteden?",
  subheadline: "Gevonden worden door klanten in jouw regio — zonder er zelf aan te werken",
  subtitlePoints: ["Google Maps dominantie", "Meer lokale klanten", "Altijd opzegbaar"],
  whatIsTitle: "Wat is lokale SEO uitbesteden?",
  whatIsText: [
    "Lokale SEO uitbesteden betekent dat je de lokale vindbaarheid van je bedrijf overlaat aan specialisten. Van Google Maps en Google Mijn Bedrijf tot lokale zoektermen en reviews — alles wordt geoptimaliseerd zodat klanten in jouw regio jou vinden.",
    "Bij KlikKlaarSEO doen we dit automatisch. Ons systeem optimaliseert je lokale aanwezigheid continu, zodat je bovenaan staat wanneer iemand in jouw buurt zoekt naar jouw diensten."
  ],
  benefits: [
    { icon: "MapPin", title: "Google Maps top-3", description: "Verschijn bovenaan in het lokale 3-pack van Google" },
    { icon: "Users", title: "Meer lokale klanten", description: "Bereik precies de mensen die in jouw werkgebied zoeken" },
    { icon: "Star", title: "Review management", description: "Meer en betere reviews die nieuwe klanten overtuigen" },
    { icon: "Building2", title: "GMB optimalisatie", description: "Je Google Mijn Bedrijf profiel wordt volledig geoptimaliseerd" },
    { icon: "TrendingUp", title: "Lokale rankings", description: "Stijg voor zoektermen als 'dienst + stad' en 'bij mij in de buurt'" }
  ],
  processSteps: [
    { step: 1, title: "Lokale analyse", description: "We analyseren je huidige lokale vindbaarheid en concurrentie in de regio" },
    { step: 2, title: "GMB & vermeldingen", description: "We optimaliseren je Google Mijn Bedrijf en zorgen voor consistente NAP-gegevens" },
    { step: 3, title: "Lokale optimalisatie", description: "Website, content en techniek worden geoptimaliseerd voor lokale zoektermen" },
    { step: 4, title: "Monitoring & groei", description: "We volgen je lokale rankings en passen continu aan voor betere resultaten" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€400 - €1.500+", freelancer: "€250 - €800", klikklaar: "€99 - €249" },
    { feature: "Google Mijn Bedrijf", bureau: "Handmatig", freelancer: "Beperkt", klikklaar: "Volledig automatisch" },
    { feature: "Review strategie", bureau: "Extra dienst", freelancer: "Soms", klikklaar: "Inbegrepen" },
    { feature: "Lokale content", bureau: "Extra kosten", freelancer: "Wisselend", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Variabel", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Wisselend", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten. Flexibel stoppen wanneer je wilt." },
    { icon: "MapPin", title: "Lokale focus", description: "Specifiek gericht op jouw stad, regio en werkgebied." },
    { icon: "TrendingUp", title: "Meetbare groei", description: "Wekelijks zie je precies hoe je lokale rankings verbeteren." }
  ],
  faqs: [
    { question: "Wat is het verschil tussen lokale SEO en gewone SEO?", answer: "Lokale SEO focust specifiek op vindbaarheid in een bepaald gebied. Denk aan zoektermen als 'loodgieter Amsterdam' of 'restaurant bij mij in de buurt'. Gewone SEO richt zich op landelijke of brede zoektermen." },
    { question: "Heb ik een fysieke locatie nodig voor lokale SEO?", answer: "Niet per se. Ook dienstverleners die op locatie werken (zoals schilders, loodgieters, of coaches) profiteren enorm van lokale SEO. Je werkgebied wordt geoptimaliseerd." },
    { question: "Hoeveel kost lokale SEO uitbesteden?", answer: "Bij KlikKlaarSEO start lokale SEO vanaf €99 per maand. Een gespecialiseerd bureau rekent vaak €400-€1.500 per maand voor vergelijkbare diensten." },
    { question: "Hoe lang duurt het voordat ik lokaal beter gevonden word?", answer: "Google Mijn Bedrijf verbeteringen zijn vaak binnen 2-4 weken zichtbaar. Organische lokale rankings verbeteren binnen 6-12 weken." },
    { question: "Optimaliseren jullie ook mijn Google reviews?", answer: "Ja, we helpen met een review strategie zodat je meer positieve reviews krijgt. Dit is een belangrijk signaal voor lokale SEO." },
    { question: "Kan ik ook in meerdere steden gevonden worden?", answer: "Ja, we kunnen je lokale SEO uitbreiden naar meerdere steden of regio's. Dit bespreken we in het kennismakingsgesprek." }
  ],
  metaTitle: "Lokale SEO Uitbesteden | Gevonden Worden in Jouw Regio | €99/mnd",
  metaDescription: "Lokale SEO uitbesteden? Word gevonden in Google Maps en lokale zoekresultaten. Automatisch, zonder gedoe. Vanaf €99/mnd bij KlikKlaarSEO."
};

const technischeSeoUitbesteden: ServiceVariantData = {
  slug: "technische-seo-uitbesteden",
  serviceName: "Technische SEO",
  variant: "uitbesteden",
  headline: "Technische SEO Uitbesteden?",
  subheadline: "Een snelle, foutloze website die Google waardeert — zonder zelf te sleutelen",
  subtitlePoints: ["Snellere website", "Betere indexering", "Altijd opzegbaar"],
  whatIsTitle: "Wat is technische SEO uitbesteden?",
  whatIsText: [
    "Technische SEO uitbesteden betekent dat experts de technische basis van je website op orde brengen en houden. Van laadsnelheid en mobiele vriendelijkheid tot indexering en structured data — alles wat zoekmachines nodig hebben om je website goed te begrijpen.",
    "Bij KlikKlaarSEO wordt dit automatisch gemonitord en verbeterd. Ons systeem scant je website continu op technische problemen en lost ze direct op, zodat je website altijd optimaal presteert."
  ],
  benefits: [
    { icon: "Zap", title: "Snellere laadtijden", description: "Core Web Vitals optimalisatie voor betere rankings en gebruikerservaring" },
    { icon: "Smartphone", title: "Mobiel perfect", description: "Je website werkt vlekkeloos op elk apparaat en schermformaat" },
    { icon: "Search", title: "Betere indexering", description: "Google kan al je pagina's vinden, begrijpen en tonen in zoekresultaten" },
    { icon: "Code", title: "Structured data", description: "Rich snippets en schema markup voor opvallende zoekresultaten" },
    { icon: "Shield", title: "Foutloze basis", description: "Geen broken links, redirect loops of crawl-fouten" }
  ],
  processSteps: [
    { step: 1, title: "Technische audit", description: "We scannen je website op 200+ technische factoren en prioriteren de issues" },
    { step: 2, title: "Quick wins", description: "Kritieke problemen worden direct opgelost: snelheid, fouten, indexering" },
    { step: 3, title: "Structurele verbeteringen", description: "Schema markup, sitemap, robots.txt en architectuur worden geoptimaliseerd" },
    { step: 4, title: "Continue monitoring", description: "Ons systeem bewaakt je website 24/7 en pakt nieuwe problemen direct op" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €1.000", klikklaar: "€99 - €249" },
    { feature: "Audit frequentie", bureau: "Maandelijks/kwartaal", freelancer: "Eenmalig", klikklaar: "Continue monitoring" },
    { feature: "Implementatie", bureau: "Advies (zelf doen)", freelancer: "Wisselend", klikklaar: "Automatisch" },
    { feature: "Core Web Vitals", bureau: "Analyse + advies", freelancer: "Beperkt", klikklaar: "Monitoring + fixes" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Na oplevering", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten of verborgen kosten." },
    { icon: "Zap", title: "Snelle resultaten", description: "Technische fixes zijn direct meetbaar in snelheid en indexering." },
    { icon: "Search", title: "Volledige dekking", description: "200+ technische factoren worden continu gemonitord." }
  ],
  faqs: [
    { question: "Wat valt er allemaal onder technische SEO?", answer: "Technische SEO omvat: laadsnelheid (Core Web Vitals), mobiele vriendelijkheid, indexeerbaarheid, structured data (schema markup), HTTPS, canonicals, redirects, XML sitemaps, robots.txt, duplicate content en meer." },
    { question: "Moet mijn webdeveloper meewerken?", answer: "Bij de meeste verbeteringen niet. Ons systeem lost problemen automatisch op. Alleen voor diepgaande code-aanpassingen kan het handig zijn als je developer beschikbaar is." },
    { question: "Hoeveel kost technische SEO uitbesteden?", answer: "Bij KlikKlaarSEO start technische SEO vanaf €99 per maand (continue monitoring + fixes). Een technische SEO audit bij een bureau kost vaak €1.000-€3.000 eenmalig, zonder doorlopende monitoring." },
    { question: "Hoe weet ik of mijn website technische problemen heeft?", answer: "Bijna elke website heeft technische verbeterpunten. Wij starten met een gratis scan waarin we de belangrijkste issues identificeren. Vraag een vrijblijvend gesprek aan." },
    { question: "Helpt technische SEO ook met rankings?", answer: "Absoluut. Google beloont snelle, foutloze websites. Technische SEO is de basis waarop content en linkbuilding verder bouwen." },
    { question: "Is mijn website te oud voor technische SEO?", answer: "Nee, ook oudere websites kunnen technisch geoptimaliseerd worden. In sommige gevallen adviseren we wel een platform-update voor optimale resultaten." }
  ],
  metaTitle: "Technische SEO Uitbesteden | Snelle & Foutloze Website | €99/mnd",
  metaDescription: "Technische SEO uitbesteden? Continue monitoring en fixes voor laadsnelheid, indexering en Core Web Vitals. Vanaf €99/mnd bij KlikKlaarSEO."
};

const seoAuditUitbesteden: ServiceVariantData = {
  slug: "seo-audit-uitbesteden",
  serviceName: "SEO Audit",
  variant: "uitbesteden",
  headline: "SEO Audit Uitbesteden?",
  subheadline: "Weet exact wat je website tegenhoudt — en hoe je het oplost",
  subtitlePoints: ["200+ checkpunten", "Concreet actieplan", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO audit uitbesteden?",
  whatIsText: [
    "Een SEO audit uitbesteden betekent dat experts je website doorlichten op alle factoren die je vindbaarheid beïnvloeden: techniek, content, links, snelheid, mobiel, AI-gereedheid en meer. Je krijgt een helder rapport met concrete verbeterpunten.",
    "Bij KlikKlaarSEO gaan we verder dan alleen een audit. Na de analyse pakken we de verbeteringen ook daadwerkelijk op — automatisch. Zo blijft het niet bij een rapport in een la, maar zie je echte resultaten."
  ],
  benefits: [
    { icon: "ClipboardCheck", title: "200+ checkpunten", description: "Uitgebreide analyse van techniek, content, links en AI-gereedheid" },
    { icon: "FileText", title: "Helder actieplan", description: "Concrete aanbevelingen geprioriteerd op impact" },
    { icon: "Wrench", title: "Direct oplossen", description: "Wij voeren de verbeteringen ook daadwerkelijk door" },
    { icon: "TrendingUp", title: "Meetbare impact", description: "Zie precies wat elke verbetering oplevert in rankings" },
    { icon: "RefreshCw", title: "Doorlopende controle", description: "Niet eenmalig maar continue monitoring na de audit" }
  ],
  processSteps: [
    { step: 1, title: "Intake & doelen", description: "We bespreken je website, concurrenten en ambities in een kort gesprek" },
    { step: 2, title: "Diepgaande scan", description: "Ons systeem analyseert 200+ factoren: techniek, content, snelheid, mobiel, links" },
    { step: 3, title: "Rapport & actieplan", description: "Je ontvangt een helder rapport met geprioriteerde verbeterpunten" },
    { step: 4, title: "Implementatie", description: "Wij voeren de verbeteringen door en monitoren de resultaten" }
  ],
  comparisonData: [
    { feature: "Kosten SEO audit", bureau: "€1.000 - €5.000 eenmalig", freelancer: "€500 - €2.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Implementatie", bureau: "Extra kosten", freelancer: "Beperkt", klikklaar: "Automatisch inbegrepen" },
    { feature: "Herhaalde audits", bureau: "Elk betaald", freelancer: "Elk betaald", klikklaar: "Continue monitoring" },
    { feature: "AI-gereedheid check", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Rapportage stijl", bureau: "Technisch PDF", freelancer: "Wisselend", klikklaar: "Helder, normaal Nederlands" },
    { feature: "Opvolging", bureau: "Aparte offerte", freelancer: "Beperkt", klikklaar: "Doorlopend inbegrepen" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen eenmalige grote factuur. Audit zit in je abonnement." },
    { icon: "ClipboardCheck", title: "Volledig & onafhankelijk", description: "200+ checkpunten, objectief en zonder verborgen agenda." },
    { icon: "Wrench", title: "Implementatie inbegrepen", description: "Geen rapport dat in een la verdwijnt — wij lossen het op." }
  ],
  faqs: [
    { question: "Wat is het verschil tussen een SEO audit en een SEO scan?", answer: "Een SEO scan is een snelle check op de belangrijkste punten. Een SEO audit is een diepgaande analyse van alle factoren: techniek, content, links, snelheid, mobiel, structured data en AI-gereedheid. Bij ons krijg je beide." },
    { question: "Hoeveel kost een SEO audit?", answer: "Een eenmalige SEO audit bij een bureau kost €1.000-€5.000. Bij KlikKlaarSEO zit de audit inbegrepen in je abonnement (vanaf €99/mnd), inclusief implementatie en doorlopende monitoring." },
    { question: "Hoe lang duurt een SEO audit?", answer: "De automatische scan duurt enkele uren. Het volledige rapport met prioriteiten en actieplan is binnen 1-2 werkdagen klaar." },
    { question: "Wat doe ik met de resultaten van de audit?", answer: "Bij de meeste bureaus moet je de verbeteringen zelf (laten) uitvoeren. Bij KlikKlaarSEO pakken wij de implementatie automatisch op. Geen extra kosten, geen gedoe." },
    { question: "Hoe vaak moet een SEO audit herhaald worden?", answer: "Idealiter continu. Google verandert constant zijn algoritme en je website verandert ook. Bij ons draait de monitoring 24/7, dus je hebt altijd een up-to-date beeld." },
    { question: "Controleert de audit ook AI-vindbaarheid?", answer: "Ja, wij checken ook hoe goed je website vindbaar is voor AI-systemen als ChatGPT, Perplexity en Google AI Overview. Dit is een uniek onderdeel dat de meeste bureaus niet bieden." }
  ],
  metaTitle: "SEO Audit Uitbesteden | 200+ Checkpunten + Implementatie | €99/mnd",
  metaDescription: "SEO audit uitbesteden? Diepgaande website analyse met 200+ checkpunten. Inclusief implementatie en doorlopende monitoring. Vanaf €99/mnd."
};

const seoStrategieUitbesteden: ServiceVariantData = {
  slug: "seo-strategie-uitbesteden",
  serviceName: "SEO Strategie",
  variant: "uitbesteden",
  headline: "SEO Strategie Uitbesteden?",
  subheadline: "Een helder plan voor structurele groei — uitgevoerd door experts",
  subtitlePoints: ["Strategie op maat", "Data-gedreven", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO strategie uitbesteden?",
  whatIsText: [
    "SEO strategie uitbesteden betekent dat experts een groeiplan voor je vindbaarheid ontwikkelen én uitvoeren. Geen generiek advies, maar een aanpak op maat die past bij jouw branche, concurrentie en doelen.",
    "Bij KlikKlaarSEO maken we een data-gedreven strategie die niet in een la verdwijnt. We voeren het plan uit, meten de resultaten en passen continu aan. Zo groei je structureel in plaats van ad hoc."
  ],
  benefits: [
    { icon: "Target", title: "Strategie op maat", description: "Geen one-size-fits-all maar een plan voor jouw specifieke situatie" },
    { icon: "BarChart", title: "Data-gedreven", description: "Keuzes gebaseerd op data, niet op onderbuikgevoel" },
    { icon: "Route", title: "Roadmap", description: "Een helder stappenplan met prioriteiten en tijdslijnen" },
    { icon: "Users", title: "Concurrentie-analyse", description: "Weet precies wat je concurrenten doen en hoe je ze inhaalt" },
    { icon: "RefreshCw", title: "Continue bijsturing", description: "De strategie evolueert mee met resultaten en marktveranderingen" }
  ],
  processSteps: [
    { step: 1, title: "Diepte-interview", description: "We leren je bedrijf, doelgroep en concurrenten grondig kennen" },
    { step: 2, title: "Markt- en keyword analyse", description: "We onderzoeken zoekvolumes, concurrentie en kansen in jouw markt" },
    { step: 3, title: "Strategisch plan", description: "Je ontvangt een roadmap met quick wins en lange-termijn acties" },
    { step: 4, title: "Uitvoering & bijsturing", description: "We voeren de strategie uit en sturen bij op basis van resultaten" }
  ],
  comparisonData: [
    { feature: "Kosten strategietraject", bureau: "€2.000 - €10.000", freelancer: "€1.000 - €3.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Uitvoering", bureau: "Extra kosten", freelancer: "Beperkt", klikklaar: "Volledig inbegrepen" },
    { feature: "Bijsturing", bureau: "Kwartaal-reviews", freelancer: "Ad hoc", klikklaar: "Continue optimalisatie" },
    { feature: "Concurrentie-analyse", bureau: "Eenmalig", freelancer: "Beperkt", klikklaar: "Doorlopend" },
    { feature: "AI-strategie", bureau: "Soms, tegen meerprijs", freelancer: "Zelden", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "Projectmatig", freelancer: "Per opdracht", klikklaar: "Maandelijks opzegbaar" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen projectfacturen van duizenden euro's. Flexibel en betaalbaar." },
    { icon: "Target", title: "Op maat gemaakt", description: "Strategie specifiek voor jouw branche, concurrentie en doelen." },
    { icon: "TrendingUp", title: "Uitvoering inbegrepen", description: "We maken niet alleen een plan — we voeren het ook uit." }
  ],
  faqs: [
    { question: "Waarom heb ik een SEO strategie nodig?", answer: "Zonder strategie optimaliseer je ad hoc en mis je kansen. Een goede SEO strategie zorgt dat je de juiste zoektermen target, prioriteiten stelt en structureel groeit in plaats van willekeurig." },
    { question: "Hoeveel kost een SEO strategie bij een bureau?", answer: "Een strategietraject bij een bureau kost vaak €2.000-€10.000. Bij KlikKlaarSEO zit strategie inbegrepen in je abonnement vanaf €99/mnd — inclusief uitvoering." },
    { question: "Hoe lang is een SEO strategie geldig?", answer: "Een goede SEO strategie wordt continu bijgestuurd op basis van resultaten en marktveranderingen. Bij ons is dat inbegrepen — je strategie evolueert mee." },
    { question: "Krijg ik ook een concurrentie-analyse?", answer: "Ja, we analyseren je belangrijkste concurrenten: hun zoektermen, content strategie en technische aanpak. Zo weten we precies waar kansen liggen." },
    { question: "Voeren jullie de strategie ook uit?", answer: "Ja, dat is het grote verschil met een bureau. Bij de meeste bureaus krijg je een rapport en moet je het zelf (laten) uitvoeren. Wij doen het hele traject: strategie, implementatie én monitoring." },
    { question: "Past de strategie bij mijn branche?", answer: "Absoluut. We maken geen generieke plannen maar een aanpak op maat die past bij jouw specifieke markt, doelgroep en concurrenten." }
  ],
  metaTitle: "SEO Strategie Uitbesteden | Plan + Uitvoering | €99/mnd",
  metaDescription: "SEO strategie uitbesteden? Data-gedreven plan op maat, inclusief uitvoering en doorlopende bijsturing. Vanaf €99/mnd bij KlikKlaarSEO."
};

// ============================================
// ABONNEMENT VARIANTS (5 services)
// ============================================

const automatischeSeoAbonnement: ServiceVariantData = {
  slug: "automatische-seo-abonnement",
  serviceName: "Automatische SEO",
  variant: "abonnement",
  headline: "Automatische SEO Abonnement",
  subheadline: "Continue optimalisatie op de automatische piloot — vanaf €99 per maand",
  subtitlePoints: ["Geen langlopende contracten", "Wekelijkse rapportages", "AI-vindbaarheid inbegrepen"],
  whatIsTitle: "Wat is een automatische SEO abonnement?",
  whatIsText: [
    "Een automatische SEO abonnement is een maandelijkse service waarbij je website continu en automatisch wordt geoptimaliseerd. Geen handmatig werk, geen meetings — ons systeem draait 24/7 en rapporteert wekelijks de resultaten.",
    "Het verschil met een gewoon SEO abonnement? Bij automatische SEO werkt technologie voor je in plaats van mensen. Dat maakt het sneller, consistenter en betaalbaar. Je betaalt geen consultants maar een systeem dat nooit stopt met optimaliseren."
  ],
  benefits: [
    { icon: "Cpu", title: "Volledig geautomatiseerd", description: "Nul handmatig werk — het systeem optimaliseert zichzelf" },
    { icon: "Clock", title: "24/7 actief", description: "Geen kantoortijden, geen vakanties, altijd aan het werk" },
    { icon: "Wallet", title: "Betaalbaar", description: "Vanaf €99/mnd — een fractie van een bureau" },
    { icon: "Bot", title: "AI-ready", description: "Optimalisatie voor Google, ChatGPT en AI Overviews" },
    { icon: "BarChart", title: "Wekelijks rapport", description: "Elke week een update in normaal Nederlands" }
  ],
  processSteps: [
    { step: 1, title: "Aanmelden", description: "Kies je pakket en start binnen 1 week — geen lange opstarttijd" },
    { step: 2, title: "Automatische scan", description: "Ons systeem analyseert je website op 200+ factoren" },
    { step: 3, title: "Continue optimalisatie", description: "Techniek, content en AI-vindbaarheid worden automatisch verbeterd" },
    { step: 4, title: "Groei volgen", description: "Wekelijkse rapporten tonen je rankings, verkeer en verbeteringen" }
  ],
  pricingNote: "Automatische SEO abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+). Alle pakketten zijn maandelijks opzegbaar.",
  faqs: [
    { question: "Wat kost een automatische SEO abonnement?", answer: "Het Basis pakket kost €99/mnd, Pro €149/mnd en Pro+ €249/mnd met persoonlijke begeleiding. Alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." },
    { question: "Wat is het verschil tussen Basis, Pro en Pro+?", answer: "Basis biedt wekelijkse optimalisatie en maandelijkse rapportage. Pro heeft 2-wekelijkse cycli, concurrentie-analyse en wekelijkse rapportage. Pro+ voegt persoonlijke begeleiding, blog posting en custom strategie toe." },
    { question: "Hoe verschilt dit van een gewoon SEO abonnement?", answer: "Bij een gewoon SEO abonnement werken mensen handmatig aan je website. Bij automatische SEO doet technologie het werk: sneller, consistenter en goedkoper. De resultaten zijn vergelijkbaar of beter." },
    { question: "Kan ik upgraden of downgraden?", answer: "Ja, je kunt op elk moment wisselen van pakket. Upgraden gaat per direct, downgraden per de volgende maand." },
    { question: "Wat als ik meer wil dan het abonnement biedt?", answer: "Met het Pro+ pakket krijg je persoonlijke begeleiding en maatwerk. Voor specifieke wensen bespreken we de mogelijkheden in een gesprek." },
    { question: "Is het echt volledig automatisch?", answer: "Ja, de optimalisatie draait volledig automatisch. Bij het Pro+ pakket heb je daarnaast ook contact met een persoonlijke accountmanager voor strategie en advies." },
    { question: "Hoe snel start de optimalisatie na aanmelding?", answer: "Binnen 1 week na aanmelding draait de eerste scan en starten de eerste optimalisaties. Resultaten in rankings volgen binnen 4-6 weken." }
  ],
  metaTitle: "Automatische SEO Abonnement | Vanaf €99/mnd | KlikKlaarSEO",
  metaDescription: "Automatische SEO abonnement: continue optimalisatie zonder eigen werk. Wekelijkse rapportages, AI-vindbaarheid inbegrepen. Vanaf €99/mnd, altijd opzegbaar."
};

const lokaleSeoAbonnement: ServiceVariantData = {
  slug: "lokale-seo-abonnement",
  serviceName: "Lokale SEO",
  variant: "abonnement",
  headline: "Lokale SEO Abonnement",
  subheadline: "Elke maand beter gevonden worden door klanten in jouw regio",
  subtitlePoints: ["Google Maps optimalisatie", "Lokale rankings", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een lokale SEO abonnement?",
  whatIsText: [
    "Een lokale SEO abonnement is een maandelijkse service die je lokale vindbaarheid structureel verbetert. Google Maps, Google Mijn Bedrijf, lokale zoektermen en reviews — alles wordt continu geoptimaliseerd zodat klanten in jouw buurt jou vinden.",
    "Waarom een abonnement? Omdat lokale SEO geen eenmalige actie is. Concurrenten optimaliseren ook, Google verandert regelmatig en reviews moeten onderhouden worden. Met een abonnement blijf je structureel bovenaan staan."
  ],
  benefits: [
    { icon: "MapPin", title: "Google Maps dominantie", description: "Verschijn in het lokale 3-pack voor jouw diensten en regio" },
    { icon: "Building2", title: "GMB onderhoud", description: "Je Google Mijn Bedrijf profiel wordt continu up-to-date gehouden" },
    { icon: "Star", title: "Review strategie", description: "Systematisch meer en betere reviews verzamelen" },
    { icon: "Globe", title: "Lokale content", description: "Content geoptimaliseerd voor zoektermen in jouw regio" },
    { icon: "BarChart", title: "Wekelijks rapport", description: "Zie precies hoe je lokale posities verbeteren" }
  ],
  processSteps: [
    { step: 1, title: "Regio bepalen", description: "We bepalen je primaire werkgebied en target steden" },
    { step: 2, title: "GMB optimalisatie", description: "Je Google Mijn Bedrijf wordt volledig geoptimaliseerd" },
    { step: 3, title: "Lokale optimalisatie", description: "Website en content worden afgestemd op lokale zoektermen" },
    { step: 4, title: "Maandelijkse groei", description: "Rankings, reviews en zichtbaarheid verbeteren structureel" }
  ],
  pricingNote: "Lokale SEO abonnementen starten vanaf €99/mnd (Basis met lokale optimalisatie), €149/mnd (Pro met uitgebreide GMB) of €249/mnd (Pro+ met multi-locatie).",
  faqs: [
    { question: "Wat kost een lokale SEO abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket met lokale optimalisatie. Pro (€149/mnd) voegt uitgebreide GMB-optimalisatie toe, Pro+ (€249/mnd) is geschikt voor meerdere locaties." },
    { question: "Zit Google Mijn Bedrijf optimalisatie erin?", answer: "Ja, bij alle pakketten. We optimaliseren je profiel, plaatsen updates en helpen met review management." },
    { question: "Kan ik meerdere locaties laten optimaliseren?", answer: "Ja, met het Pro+ pakket of een aangepast plan. We bespreken de mogelijkheden voor jouw situatie." },
    { question: "Werkt dit ook als ik geen fysieke winkel heb?", answer: "Ja, ook dienstverleners die op locatie werken profiteren van lokale SEO. We optimaliseren je werkgebied." },
    { question: "Hoe lang duurt het voordat ik lokaal beter scoor?", answer: "GMB-verbeteringen zijn binnen 2-4 weken zichtbaar. Organische lokale rankings verbeteren binnen 6-12 weken." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, altijd. Geen langlopende contracten, geen opzegboetes." }
  ],
  metaTitle: "Lokale SEO Abonnement | Google Maps & Lokaal Gevonden | €99/mnd",
  metaDescription: "Lokale SEO abonnement: structureel beter gevonden worden in jouw regio. Google Maps, GMB en lokale rankings. Vanaf €99/mnd, altijd opzegbaar."
};

const technischeSeoAbonnement: ServiceVariantData = {
  slug: "technische-seo-abonnement",
  serviceName: "Technische SEO",
  variant: "abonnement",
  headline: "Technische SEO Abonnement",
  subheadline: "Je website technisch perfect — elke maand opnieuw gecontroleerd en verbeterd",
  subtitlePoints: ["Continue monitoring", "Automatische fixes", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een technische SEO abonnement?",
  whatIsText: [
    "Een technische SEO abonnement is een maandelijkse service die de technische gezondheid van je website bewaakt en verbetert. Laadsnelheid, Core Web Vitals, indexering, mobiele vriendelijkheid, structured data — alles wordt continu gemonitord.",
    "Waarom een abonnement? Omdat technische problemen continu ontstaan. Een plugin update kan je snelheid breken, een pagina-aanpassing kan indexering verstoren. Met continue monitoring worden problemen direct opgelost."
  ],
  benefits: [
    { icon: "Zap", title: "Snelle website", description: "Core Web Vitals continu geoptimaliseerd" },
    { icon: "Search", title: "Perfecte indexering", description: "Alle pagina's correct geïndexeerd in Google" },
    { icon: "Shield", title: "Foutdetectie", description: "Problemen worden automatisch gesignaleerd en opgelost" },
    { icon: "Code", title: "Schema markup", description: "Structured data voor rich snippets in zoekresultaten" },
    { icon: "Smartphone", title: "Mobiel perfect", description: "Optimale weergave en snelheid op elk apparaat" }
  ],
  processSteps: [
    { step: 1, title: "Initiële audit", description: "Diepgaande technische scan met prioritering van alle issues" },
    { step: 2, title: "Kritieke fixes", description: "De belangrijkste technische problemen worden direct opgelost" },
    { step: 3, title: "Continue monitoring", description: "24/7 bewaking van 200+ technische factoren" },
    { step: 4, title: "Proactieve optimalisatie", description: "Nieuwe kansen en problemen worden automatisch opgepakt" }
  ],
  pricingNote: "Technische SEO abonnementen starten vanaf €99/mnd (Basis met monitoring + fixes), €149/mnd (Pro met proactieve optimalisatie) of €249/mnd (Pro+ met developer ondersteuning).",
  faqs: [
    { question: "Wat kost een technische SEO abonnement?", answer: "Vanaf €99/mnd voor continue monitoring en automatische fixes. Pro (€149/mnd) voegt proactieve optimalisatie toe, Pro+ (€249/mnd) biedt developer ondersteuning." },
    { question: "Wat als er grote technische problemen zijn?", answer: "Kritieke problemen worden direct opgepakt. Bij het Pro+ pakket werken we samen met je developer voor diepgaande aanpassingen." },
    { question: "Hoe verschilt dit van een eenmalige technische audit?", answer: "Een eenmalige audit is een momentopname. Technische problemen ontstaan continu (updates, nieuwe content, server issues). Een abonnement zorgt voor continue bewaking en snelle fixes." },
    { question: "Monitoren jullie ook Core Web Vitals?", answer: "Ja, Core Web Vitals (LCP, FID/INP, CLS) worden continu gemonitord en geoptimaliseerd. Dit is cruciaal voor zowel rankings als gebruikerservaring." },
    { question: "Werkt dit met elke website-platform?", answer: "Ja, onze technische monitoring werkt met WordPress, Shopify, Wix, custom websites en meer." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar. Geen contracten, geen verborgen kosten." }
  ],
  metaTitle: "Technische SEO Abonnement | Continue Monitoring & Fixes | €99/mnd",
  metaDescription: "Technische SEO abonnement: continue monitoring van 200+ factoren. Automatische fixes, Core Web Vitals en indexering. Vanaf €99/mnd."
};

const seoAuditAbonnement: ServiceVariantData = {
  slug: "seo-audit-abonnement",
  serviceName: "SEO Audit",
  variant: "abonnement",
  headline: "SEO Audit Abonnement",
  subheadline: "Doorlopende website-analyse met automatische verbeteringen — niet eenmalig maar continu",
  subtitlePoints: ["Continue monitoring", "Automatische fixes", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO audit abonnement?",
  whatIsText: [
    "Een SEO audit abonnement is een doorlopende service die je website continu analyseert op 200+ factoren en verbeteringen automatisch doorvoert. In plaats van een eenmalige audit die snel veroudert, krijg je een levend dashboard met altijd actuele inzichten.",
    "Het voordeel? Je website wordt niet één keer gecontroleerd, maar continu. Nieuwe problemen worden direct gesignaleerd, veranderingen in Google's algoritme worden automatisch opgevangen en kansen worden niet gemist."
  ],
  benefits: [
    { icon: "RefreshCw", title: "Altijd actueel", description: "Geen verouderde audit — continue monitoring en analyse" },
    { icon: "ClipboardCheck", title: "200+ checkpunten", description: "Diepgaande controle op techniek, content, links en AI-gereedheid" },
    { icon: "Wrench", title: "Automatische fixes", description: "Problemen worden niet alleen gesignaleerd maar ook opgelost" },
    { icon: "Bot", title: "AI-gereedheid", description: "Check ook je vindbaarheid in ChatGPT en AI-zoekresultaten" },
    { icon: "BarChart", title: "Wekelijks rapport", description: "Inzicht in verbeteringen, scores en groei" }
  ],
  processSteps: [
    { step: 1, title: "Eerste deep-scan", description: "Uitgebreide analyse van alle 200+ factoren als baseline" },
    { step: 2, title: "Quick wins implementeren", description: "Kritieke verbeterpunten worden direct opgepakt" },
    { step: 3, title: "Continue monitoring", description: "Het systeem bewaakt je website 24/7 op veranderingen en issues" },
    { step: 4, title: "Proactieve verbetering", description: "Nieuwe kansen en algoritme-updates worden automatisch opgevangen" }
  ],
  pricingNote: "SEO audit abonnementen starten vanaf €99/mnd (Basis met maandelijkse scan), €149/mnd (Pro met wekelijkse scan) of €249/mnd (Pro+ met dagelijkse monitoring).",
  faqs: [
    { question: "Wat kost een SEO audit abonnement?", answer: "Vanaf €99/mnd voor maandelijkse scans en automatische fixes. Pro (€149/mnd) biedt wekelijkse scans, Pro+ (€249/mnd) dagelijkse monitoring met persoonlijke begeleiding." },
    { question: "Is dit beter dan een eenmalige SEO audit?", answer: "Ja, een eenmalige audit is een momentopname die na enkele weken verouderd is. Een abonnement zorgt dat je website altijd up-to-date is en nieuwe problemen direct worden opgepakt." },
    { question: "Wat wordt er precies gecontroleerd?", answer: "200+ factoren: laadsnelheid, mobiel, indexering, structured data, content kwaliteit, interne links, AI-gereedheid, duplicate content, broken links en meer." },
    { question: "Lossen jullie de gevonden problemen ook op?", answer: "Ja, dat is het verschil. Bij de meeste bureaus krijg je een rapport met aanbevelingen. Wij voeren de verbeteringen ook daadwerkelijk door." },
    { question: "Hoe vaak wordt mijn website gescand?", answer: "Afhankelijk van je pakket: maandelijks (Basis), wekelijks (Pro) of dagelijks (Pro+). Kritieke issues worden altijd direct gesignaleerd." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." }
  ],
  metaTitle: "SEO Audit Abonnement | Doorlopende Analyse + Fixes | €99/mnd",
  metaDescription: "SEO audit abonnement: doorlopende website-analyse met automatische verbeteringen. 200+ checkpunten, continu gemonitord. Vanaf €99/mnd."
};

const seoStrategieAbonnement: ServiceVariantData = {
  slug: "seo-strategie-abonnement",
  serviceName: "SEO Strategie",
  variant: "abonnement",
  headline: "SEO Strategie Abonnement",
  subheadline: "Een evoluerend groeiplan dat meebeweegt met je bedrijf en de markt",
  subtitlePoints: ["Strategie op maat", "Continue bijsturing", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO strategie abonnement?",
  whatIsText: [
    "Een SEO strategie abonnement combineert een strategisch groeiplan met doorlopende uitvoering en bijsturing. Je krijgt niet alleen een plan, maar ook de implementatie en continue optimalisatie op basis van resultaten.",
    "Het verschil met een eenmalig strategietraject? Je strategie evolueert mee met marktveranderingen, concurrentie en seizoenspatronen. Elke maand wordt het plan aangescherpt op basis van data en resultaten."
  ],
  benefits: [
    { icon: "Target", title: "Strategie op maat", description: "Aangepast aan jouw branche, doelgroep en concurrentie" },
    { icon: "BarChart", title: "Data-gedreven", description: "Keuzes gebaseerd op zoekdata, rankings en concurrentie-analyse" },
    { icon: "RefreshCw", title: "Evoluerend plan", description: "De strategie past zich maandelijks aan op basis van resultaten" },
    { icon: "Users", title: "Concurrentie-tracking", description: "We volgen continu wat je concurrenten doen" },
    { icon: "Route", title: "Roadmap", description: "Helder overzicht van quick wins en lange-termijn doelen" }
  ],
  processSteps: [
    { step: 1, title: "Strategisch intake", description: "Diepgaand gesprek over je bedrijf, doelen en markt" },
    { step: 2, title: "Analyse & roadmap", description: "Keyword research, concurrentie-analyse en strategisch plan" },
    { step: 3, title: "Uitvoering", description: "We implementeren de strategie: techniek, content en autoriteit" },
    { step: 4, title: "Maandelijkse review", description: "Resultaten evalueren, strategie bijsturen, nieuwe kansen pakken" }
  ],
  pricingNote: "SEO strategie abonnementen starten vanaf €99/mnd (Basis met standaard strategie), €149/mnd (Pro met uitgebreide concurrentie-analyse) of €249/mnd (Pro+ met persoonlijke strategist).",
  faqs: [
    { question: "Wat kost een SEO strategie abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket met standaard strategie. Pro (€149/mnd) biedt uitgebreide concurrentie-analyse. Pro+ (€249/mnd) inclusief een persoonlijke strategist en maandelijkse consulting call." },
    { question: "Hoe verschilt dit van een eenmalig strategietraject?", answer: "Een eenmalig traject levert een plan op een bepaald moment. Met een abonnement evolueert je strategie mee met resultaten, marktveranderingen en nieuwe kansen. Plus: wij voeren het ook uit." },
    { question: "Krijg ik een persoonlijke strategist?", answer: "Bij het Pro+ pakket heb je een vaste strategist met maandelijkse consulting calls. Bij Basis en Pro is de strategie data-gedreven en automatisch." },
    { question: "Hoe vaak wordt de strategie bijgestuurd?", answer: "Maandelijks op basis van ranking data, verkeerscijfers en concurrentie-analyse. Bij grote marktveranderingen reageren we direct." },
    { question: "Voeren jullie de strategie ook uit?", answer: "Ja, bij alle pakketten. Je hoeft niet zelf te implementeren of een developer in te schakelen." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, geen langlopende contracten. Maandelijks opzegbaar bij alle pakketten." }
  ],
  metaTitle: "SEO Strategie Abonnement | Plan + Uitvoering | €99/mnd",
  metaDescription: "SEO strategie abonnement: evoluerend groeiplan met uitvoering en bijsturing. Data-gedreven, op maat gemaakt. Vanaf €99/mnd bij KlikKlaarSEO."
};

// ============================================
// EXPORTS
// ============================================

export const serviceVariantsUitbesteden: ServiceVariantData[] = [
  automatischeSeoUitbesteden,
  lokaleSeoUitbesteden,
  technischeSeoUitbesteden,
  seoAuditUitbesteden,
  seoStrategieUitbesteden,
];

export const serviceVariantsAbonnement: ServiceVariantData[] = [
  automatischeSeoAbonnement,
  lokaleSeoAbonnement,
  technischeSeoAbonnement,
  seoAuditAbonnement,
  seoStrategieAbonnement,
];

export const allServiceVariants: ServiceVariantData[] = [
  ...serviceVariantsUitbesteden,
  ...serviceVariantsAbonnement,
];

export function getServiceVariantBySlug(slug: string): ServiceVariantData | undefined {
  return allServiceVariants.find(v => v.slug === slug);
}
