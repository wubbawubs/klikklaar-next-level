export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  benefits: Array<{ icon: string; title: string; description: string }>;
  howItWorks: Array<{ step: number; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  keywords: {
    primary: string;
    secondary: string[];
  };
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "lokale-seo",
    name: "Lokale SEO",
    icon: "MapPin",
    headline: "Lokale SEO - Gevonden Worden in Jouw Regio",
    subheadline: "Meer klanten uit jouw buurt, automatisch",
    heroDescription: "Als lokale ondernemer wil je gevonden worden door klanten in de buurt. Met onze automatische lokale SEO optimaliseren we je vindbaarheid voor zoektermen met een lokale intentie, zodat je bovenaan staat wanneer mensen zoeken naar jouw diensten in de regio.",
    benefits: [
      { icon: "MapPin", title: "Google Maps dominantie", description: "Verschijn bovenaan in de lokale zoekresultaten en Google Maps" },
      { icon: "Users", title: "Klanten uit je buurt", description: "Trek precies de klanten aan die in jouw werkgebied zoeken" },
      { icon: "Star", title: "Review optimalisatie", description: "Meer en betere reviews die nieuwe klanten overtuigen" },
      { icon: "TrendingUp", title: "Meetbare resultaten", description: "Zie exact hoeveel klanten je via lokale zoekopdrachten bereikt" }
    ],
    howItWorks: [
      { step: 1, title: "Analyse", description: "We analyseren je huidige lokale vindbaarheid en identificeren kansen" },
      { step: 2, title: "Optimalisatie", description: "We optimaliseren je website, Google Mijn Bedrijf profiel en lokale vermeldingen" },
      { step: 3, title: "Monitoring", description: "We monitoren je rankings en passen continue aan voor beste resultaten" }
    ],
    faqs: [
      { question: "Wat is lokale SEO precies?", answer: "Lokale SEO focust op vindbaarheid voor zoektermen met een geografische component, zoals 'tandarts Amsterdam' of 'kapper bij mij in de buurt'. Het doel is om bovenaan te staan wanneer mensen in jouw regio zoeken naar jouw diensten." },
      { question: "Hoe snel zie ik resultaten?", answer: "De eerste verbeteringen zijn vaak binnen 4-6 weken zichtbaar. Significante resultaten, zoals hogere rankings en meer klanten, volgen meestal binnen 2-3 maanden." },
      { question: "Heb ik een Google Mijn Bedrijf profiel nodig?", answer: "Ja, Google Mijn Bedrijf is essentieel voor lokale SEO. Als je er nog geen hebt, helpen we je er een aan te maken. Heb je er al een, dan optimaliseren we het." },
      { question: "Werkt dit ook voor online diensten?", answer: "Lokale SEO is vooral effectief voor bedrijven met een fysieke locatie of werkgebied. Voor puur online diensten focussen we op andere SEO-strategieën." }
    ],
    keywords: {
      primary: "lokale SEO",
      secondary: ["lokale vindbaarheid", "lokaal gevonden worden", "SEO voor lokale bedrijven"]
    },
    metaTitle: "Lokale SEO | Gevonden Worden in Jouw Regio | KlikKlaarSEO",
    metaDescription: "Automatische lokale SEO voor ondernemers. Word gevonden door klanten in jouw buurt. Google Maps & lokale zoekresultaten. Vanaf €99/mnd."
  },
  {
    slug: "google-mijn-bedrijf-optimalisatie",
    name: "Google Mijn Bedrijf Optimalisatie",
    icon: "Building2",
    headline: "Google Mijn Bedrijf Optimalisatie",
    subheadline: "Maximaal uit je GMB profiel halen",
    heroDescription: "Je Google Mijn Bedrijf profiel is vaak het eerste wat potentiële klanten zien. Met onze optimalisatie zorgen we dat je profiel compleet, aantrekkelijk en geoptimaliseerd is voor maximale zichtbaarheid in Google Maps en lokale zoekresultaten.",
    benefits: [
      { icon: "Eye", title: "Meer zichtbaarheid", description: "Een geoptimaliseerd profiel scoort hoger in Google Maps" },
      { icon: "Image", title: "Aantrekkelijke presentatie", description: "Professionele foto's en complete informatie" },
      { icon: "Star", title: "Review strategie", description: "Meer positieve reviews die vertrouwen wekken" },
      { icon: "MessageSquare", title: "Actief profiel", description: "Regelmatige updates en posts die engagement verhogen" }
    ],
    howItWorks: [
      { step: 1, title: "Audit", description: "We analyseren je huidige GMB profiel en identificeren verbeterpunten" },
      { step: 2, title: "Optimalisatie", description: "We optimaliseren alle aspecten: info, categorieën, foto's, attributen" },
      { step: 3, title: "Onderhoud", description: "We houden je profiel actueel met posts en reageren op reviews" }
    ],
    faqs: [
      { question: "Wat als ik nog geen Google Mijn Bedrijf heb?", answer: "Dan helpen we je er een aan te maken en te verifiëren. Het proces duurt meestal 1-2 weken." },
      { question: "Kan ik zelf mijn profiel blijven beheren?", answer: "Ja, je houdt volledige toegang. Wij optimaliseren en onderhouden, maar jij blijft eigenaar." },
      { question: "Hoe krijg ik meer reviews?", answer: "We helpen je met een review strategie, inclusief het makkelijker maken voor klanten om reviews achter te laten." },
      { question: "Werkt dit ook voor meerdere vestigingen?", answer: "Ja, we kunnen meerdere locaties optimaliseren met een consistente aanpak." }
    ],
    keywords: {
      primary: "Google Mijn Bedrijf optimalisatie",
      secondary: ["GMB optimalisatie", "Google Maps marketing", "Google bedrijfsprofiel"]
    },
    metaTitle: "Google Mijn Bedrijf Optimalisatie | GMB Expert | KlikKlaarSEO",
    metaDescription: "Professionele Google Mijn Bedrijf optimalisatie. Meer zichtbaarheid in Google Maps en lokale zoekresultaten. Vanaf €99/mnd."
  },
  {
    slug: "technische-seo",
    name: "Technische SEO",
    icon: "Settings",
    headline: "Technische SEO - De Basis op Orde",
    subheadline: "Een snelle, foutloze website die Google waardeert",
    heroDescription: "Technische SEO zorgt ervoor dat je website goed gevonden en geïndexeerd kan worden door zoekmachines. Van laadsnelheid tot mobiele vriendelijkheid en van structured data tot een schone code - wij zorgen dat de technische basis perfect is.",
    benefits: [
      { icon: "Zap", title: "Snellere website", description: "Optimale laadtijden voor betere rankings en gebruikerservaring" },
      { icon: "Smartphone", title: "Mobiel perfect", description: "Volledig geoptimaliseerd voor alle apparaten" },
      { icon: "Search", title: "Betere indexering", description: "Google kan je website makkelijker vinden en begrijpen" },
      { icon: "Shield", title: "Veilig en betrouwbaar", description: "HTTPS, geen fouten, professionele technische basis" }
    ],
    howItWorks: [
      { step: 1, title: "Technische audit", description: "We scannen je website op alle technische SEO aspecten" },
      { step: 2, title: "Prioriteren", description: "We identificeren de belangrijkste verbeterpunten" },
      { step: 3, title: "Implementeren", description: "We voeren de verbeteringen door of adviseren je ontwikkelaar" }
    ],
    faqs: [
      { question: "Wat valt onder technische SEO?", answer: "Laadsnelheid, mobiele vriendelijkheid, indexeerbaarheid, structured data, HTTPS, canonicals, redirects, XML sitemaps en meer." },
      { question: "Moet ik mijn website aanpassen?", answer: "Dat hangt af van de bevindingen. Soms kunnen we zaken zelf oplossen, soms adviseren we je webdeveloper." },
      { question: "Hoe meet je technische SEO?", answer: "We gebruiken tools als Google Search Console, PageSpeed Insights en technische crawlers om alles te monitoren." },
      { question: "Is mijn website te oud voor technische SEO?", answer: "Nee, ook oudere websites kunnen technisch geoptimaliseerd worden. In sommige gevallen adviseren we wel een website update." }
    ],
    keywords: {
      primary: "technische SEO",
      secondary: ["website snelheid", "SEO audit", "technische website optimalisatie"]
    },
    metaTitle: "Technische SEO | Website Optimalisatie | KlikKlaarSEO",
    metaDescription: "Professionele technische SEO voor een snelle, foutloze website. Laadsnelheid, mobiel, indexering. Vanaf €99/mnd."
  },
  {
    slug: "ai-seo",
    name: "AI SEO",
    icon: "Bot",
    headline: "AI SEO - De Toekomst van Vindbaarheid",
    subheadline: "Gevonden worden in AI-gestuurde zoekresultaten",
    heroDescription: "Met de opkomst van AI-assistenten zoals ChatGPT en Google's AI Overview verandert SEO. Onze AI SEO strategie zorgt ervoor dat je ook in deze nieuwe zoeklandschap gevonden wordt, niet alleen in traditionele zoekresultaten.",
    benefits: [
      { icon: "Bot", title: "AI-ready content", description: "Content die goed begrepen wordt door AI-systemen" },
      { icon: "FileText", title: "Structured data", description: "Gestructureerde informatie die AI kan interpreteren" },
      { icon: "Lightbulb", title: "Antwoord-geoptimaliseerd", description: "Content die direct antwoord geeft op vragen" },
      { icon: "TrendingUp", title: "Toekomstbestendig", description: "Voorbereid op de evolutie van zoeken" }
    ],
    howItWorks: [
      { step: 1, title: "Analyse", description: "We onderzoeken hoe AI-systemen je huidige content interpreteren" },
      { step: 2, title: "Optimalisatie", description: "We optimaliseren content en techniek voor AI-leesbaarheid" },
      { step: 3, title: "Monitoring", description: "We volgen je zichtbaarheid in AI-gestuurde zoekresultaten" }
    ],
    faqs: [
      { question: "Wat is AI SEO precies?", answer: "AI SEO focust op zichtbaarheid in AI-gestuurde zoeksystemen zoals ChatGPT, Perplexity en Google's AI Overview. Dit vereist andere optimalisaties dan traditionele SEO." },
      { question: "Vervangt dit traditionele SEO?", answer: "Nee, AI SEO is een aanvulling. Traditionele SEO blijft belangrijk, maar AI SEO bereidt je voor op de toekomst." },
      { question: "Hoe meet je succes in AI SEO?", answer: "Door te monitoren of en hoe je genoemd wordt in AI-antwoorden, en door branded search volume te volgen." },
      { question: "Is mijn bedrijf groot genoeg voor AI SEO?", answer: "AI-systemen gebruiken diverse bronnen. Ook kleinere bedrijven kunnen profiteren van betere AI-vindbaarheid." }
    ],
    keywords: {
      primary: "AI SEO",
      secondary: ["ChatGPT SEO", "AI vindbaarheid", "toekomst van SEO"]
    },
    metaTitle: "AI SEO | Vindbaar in AI Zoekresultaten | KlikKlaarSEO",
    metaDescription: "AI SEO voor de toekomst. Gevonden worden in ChatGPT, Google AI en meer. Toekomstbestendige SEO. Vanaf €99/mnd."
  },
  {
    slug: "geo-seo",
    name: "GEO SEO",
    icon: "Globe",
    headline: "GEO SEO - Generative Engine Optimization",
    subheadline: "Optimalisatie voor AI-gegenereerde antwoorden",
    heroDescription: "GEO (Generative Engine Optimization) is de volgende stap in SEO. Nu zoekmachines steeds vaker AI-gegenereerde antwoorden tonen, moet je content geoptimaliseerd zijn om in deze antwoorden genoemd te worden.",
    benefits: [
      { icon: "MessageCircle", title: "Citeerbaar", description: "Content die AI-systemen willen citeren als bron" },
      { icon: "Award", title: "Autoriteit", description: "Opbouwen van expertise die AI-systemen herkennen" },
      { icon: "FileText", title: "Feitelijk", description: "Feitelijke, verifieerbare informatie die AI vertrouwt" },
      { icon: "Target", title: "Intentie-gericht", description: "Direct antwoord op wat gebruikers zoeken" }
    ],
    howItWorks: [
      { step: 1, title: "Content analyse", description: "We analyseren hoe citeerbaar en AI-vriendelijk je content is" },
      { step: 2, title: "GEO optimalisatie", description: "We optimaliseren voor AI-citeerbaarheid en autoriteit" },
      { step: 3, title: "Monitoring", description: "We volgen je vermeldingen in AI-gegenereerde antwoorden" }
    ],
    faqs: [
      { question: "Wat is het verschil tussen AI SEO en GEO?", answer: "AI SEO is breder en focust op alle AI-zoeksystemen. GEO focust specifiek op geoptimaliseerd worden voor generatieve (AI-gegenereerde) zoekresultaten." },
      { question: "Hoe word ik geciteerd door AI?", answer: "Door autoritieve, feitelijke content te creëren die direct antwoord geeft op vragen. Structured data en bronvermeldingen helpen ook." },
      { question: "Is GEO relevant voor mijn branche?", answer: "Als mensen online zoeken naar informatie over jouw diensten, dan is GEO relevant. Hoe informatiever je branche, hoe belangrijker." },
      { question: "Kan ik GEO zelf doen?", answer: "GEO vereist specialistische kennis van hoe AI-systemen content evalueren en selecteren. Wij hebben die expertise." }
    ],
    keywords: {
      primary: "GEO SEO",
      secondary: ["generative engine optimization", "AI antwoorden SEO", "GEO optimalisatie"]
    },
    metaTitle: "GEO SEO | Generative Engine Optimization | KlikKlaarSEO",
    metaDescription: "GEO SEO specialist. Optimalisatie voor AI-gegenereerde zoekresultaten. Geciteerd worden door AI. Vanaf €99/mnd."
  },
  {
    slug: "seo-content-optimalisatie",
    name: "SEO Content Optimalisatie",
    icon: "FileText",
    headline: "SEO Content Optimalisatie",
    subheadline: "Content die rankt én converteert",
    heroDescription: "Goede content is de basis van SEO. Wij optimaliseren je bestaande content en helpen bij het creëren van nieuwe content die zowel goed scoort in Google als je bezoekers overtuigt om klant te worden.",
    benefits: [
      { icon: "Search", title: "Keyword optimalisatie", description: "De juiste zoekwoorden op de juiste plekken" },
      { icon: "FileText", title: "Leesbaarheid", description: "Content die prettig leest en overtuigt" },
      { icon: "Link", title: "Interne linking", description: "Slimme verbindingen tussen je pagina's" },
      { icon: "TrendingUp", title: "Rankings verbeteren", description: "Stijgen in Google voor relevante zoektermen" }
    ],
    howItWorks: [
      { step: 1, title: "Content audit", description: "We analyseren je bestaande content op SEO en kwaliteit" },
      { step: 2, title: "Optimalisatie", description: "We verbeteren titels, meta's, structuur en inhoud" },
      { step: 3, title: "Monitoring", description: "We volgen rankings en passen aan waar nodig" }
    ],
    faqs: [
      { question: "Moeten jullie mijn teksten herschrijven?", answer: "Niet altijd. Soms zijn kleine aanpassingen genoeg, soms adviseren we grotere wijzigingen. Het hangt af van de huidige kwaliteit." },
      { question: "Schrijven jullie ook nieuwe content?", answer: "Primair optimaliseren we bestaande content. Voor nieuwe content kunnen we adviseren of doorverwijzen naar content schrijvers." },
      { question: "Hoe lang moet content zijn?", answer: "Dat hangt af van het onderwerp en de concurrentie. We analyseren wat werkt voor jouw zoektermen." },
      { question: "Hoe vaak moet content geüpdatet worden?", answer: "We adviseren om belangrijke pagina's minimaal jaarlijks te reviewen, actualiteiten-gevoelige content vaker." }
    ],
    keywords: {
      primary: "SEO content optimalisatie",
      secondary: ["content SEO", "website teksten optimaliseren", "SEO copywriting"]
    },
    metaTitle: "SEO Content Optimalisatie | Teksten die Ranken | KlikKlaarSEO",
    metaDescription: "Professionele SEO content optimalisatie. Content die rankt in Google én converteert. Vanaf €99/mnd."
  },
  {
    slug: "seo-voor-mkb",
    name: "SEO voor MKB",
    icon: "Building",
    headline: "SEO voor MKB",
    subheadline: "Betaalbare SEO voor het midden- en kleinbedrijf",
    heroDescription: "Als MKB'er heb je niet het budget van grote bedrijven, maar wil je wel online gevonden worden. Onze SEO-aanpak is speciaal ontwikkeld voor het MKB: effectief, betaalbaar en zonder gedoe.",
    benefits: [
      { icon: "Wallet", title: "Betaalbaar", description: "Vaste, transparante prijzen zonder verrassingen" },
      { icon: "Clock", title: "Geen gedoe", description: "Wij doen alles, jij focust op je bedrijf" },
      { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Duidelijke rapporten in normaal Nederlands" },
      { icon: "Users", title: "Persoonlijk contact", description: "Geen callcenter maar een vast aanspreekpunt" }
    ],
    howItWorks: [
      { step: 1, title: "Kennismaken", description: "We leren je bedrijf en doelen kennen in een vrijblijvend gesprek" },
      { step: 2, title: "Plan op maat", description: "We maken een SEO-plan dat past bij je bedrijf en budget" },
      { step: 3, title: "Aan de slag", description: "We starten met optimaliseren en rapporteren wekelijks de resultaten" }
    ],
    faqs: [
      { question: "Is SEO niet te duur voor MKB?", answer: "Niet bij ons. Vanaf €99 per maand krijg je professionele SEO, betaalbaar voor elk MKB-bedrijf." },
      { question: "Heb ik technische kennis nodig?", answer: "Nee, wij doen alles. Van techniek tot content, jij hoeft niets te kunnen of te doen." },
      { question: "Hoe lang duurt het voordat ik resultaat zie?", answer: "De eerste verbeteringen zie je vaak binnen 4-6 weken. Significante resultaten volgen binnen 2-3 maanden." },
      { question: "Kan ik maandelijks opzeggen?", answer: "Ja, geen langlopende contracten. Je kunt elke maand opzeggen." }
    ],
    keywords: {
      primary: "SEO voor MKB",
      secondary: ["MKB SEO", "SEO klein bedrijf", "betaalbare SEO"]
    },
    metaTitle: "SEO voor MKB | Betaalbaar & Effectief | KlikKlaarSEO",
    metaDescription: "Betaalbare SEO voor MKB. Effectief, geen gedoe, maandelijks opzegbaar. Vanaf €99/mnd. Speciaal voor het midden- en kleinbedrijf."
  },
  {
    slug: "automatische-seo",
    name: "Automatische SEO",
    icon: "Cpu",
    headline: "Automatische SEO - Zonder Omkijken",
    subheadline: "Je website verbetert zichzelf, jij houdt tijd over",
    heroDescription: "Onze automatische SEO-service doet het werk voor je. Geen uren aan marketing besteden, geen ingewikkelde dashboards leren. Wij analyseren, optimaliseren en rapporteren - volledig automatisch.",
    benefits: [
      { icon: "Cpu", title: "Volledig automatisch", description: "Geen handmatig werk, alles gaat vanzelf" },
      { icon: "Clock", title: "Tijd besparen", description: "Focus op je vak, wij doen de marketing" },
      { icon: "Zap", title: "Altijd actueel", description: "Continue verbeteringen, niet eenmalig" },
      { icon: "BarChart", title: "Helder inzicht", description: "Wekelijkse rapporten in normaal Nederlands" }
    ],
    howItWorks: [
      { step: 1, title: "Aansluiten", description: "We verbinden met je website en analyseren de huidige staat" },
      { step: 2, title: "Automatiseren", description: "We starten de automatische optimalisaties" },
      { step: 3, title: "Groeien", description: "Je website wordt continu beter, jij ziet de resultaten" }
    ],
    faqs: [
      { question: "Wat bedoelen jullie met automatisch?", answer: "Onze systemen analyseren je website continu en voeren verbeteringen door. Jij hoeft niets te doen, wij regelen alles." },
      { question: "Verlies ik controle over mijn website?", answer: "Nee, jij blijft eigenaar en in controle. We informeren je over alle wijzigingen in je wekelijkse rapport." },
      { question: "Hoe weet ik dat het werkt?", answer: "Je ontvangt wekelijks een helder rapport met alle verbeteringen en resultaten, in normaal Nederlands." },
      { question: "Wat als ik toch iets wil aanpassen?", answer: "Je hebt altijd contact met ons team. Specifieke wensen verwerken we in de automatische aanpak." }
    ],
    keywords: {
      primary: "automatische SEO",
      secondary: ["SEO automatisering", "hands-off SEO", "SEO zonder gedoe"]
    },
    metaTitle: "Automatische SEO | Website Verbetert Zichzelf | KlikKlaarSEO",
    metaDescription: "Automatische SEO die voor je werkt. Je website verbetert zichzelf, jij houdt tijd over. Vanaf €99/mnd."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
