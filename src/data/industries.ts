export interface IndustryData {
  slug: string;
  name: string;
  namePlural: string;
  icon: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: Array<{ icon: string; text: string }>;
  solutions: Array<{ title: string; description: string }>;
  stats: Array<{ value: string; label: string }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  keywords: {
    primary: string;
    secondary: string[];
  };
  metaTitle: string;
  metaDescription: string;
}

export const industries: IndustryData[] = [
  {
    slug: "interieur-design",
    name: "Interieur Designer",
    namePlural: "Interieur Designers",
    icon: "Palette",
    headline: "SEO voor Interieur Designers",
    subheadline: "Word gevonden door klanten die zoeken naar stijlvol interieurontwerp",
    heroDescription: "Jouw portfolio verdient meer dan alleen mooie foto's. Met automatische SEO word je gevonden door klanten die actief zoeken naar een interieur designer in hun regio.",
    painPoints: [
      { icon: "Eye", text: "Prachtige portfolio maar nauwelijks bezoekers" },
      { icon: "TrendingDown", text: "Concurrenten ranken hoger in Google" },
      { icon: "Users", text: "Te afhankelijk van mond-tot-mondreclame" },
      { icon: "Clock", text: "Geen tijd om zelf aan marketing te werken" }
    ],
    solutions: [
      { title: "Lokale vindbaarheid", description: "Rank voor 'interieur designer [jouw stad]' en vergelijkbare zoektermen" },
      { title: "Portfolio optimalisatie", description: "Je projectpagina's worden geoptimaliseerd voor zoekmachines" },
      { title: "Google Mijn Bedrijf", description: "Professioneel GMB profiel met reviews en projectfoto's" }
    ],
    stats: [
      { value: "+134%", label: "Meer portfolio views" },
      { value: "Top 5", label: "Voor lokale zoektermen" }
    ],
    testimonial: {
      quote: "Sinds KlikKlaar krijg ik wekelijks aanvragen van nieuwe klanten die me via Google hebben gevonden. Precies waar ik naar zocht.",
      author: "Lisa van der Berg",
      role: "Interieur Designer",
      company: "Studio LB Interiors"
    },
    faqs: [
      { question: "Werkt SEO voor visuele diensten zoals interieur design?", answer: "Absoluut. Veel mensen beginnen hun zoektocht naar een interieur designer online. Door goed vindbaar te zijn voor zoektermen als 'interieur designer Amsterdam' of 'interieur advies Rotterdam' trek je precies de juiste klanten aan." },
      { question: "Hoe lang duurt het voordat ik resultaten zie?", answer: "De eerste verbeteringen zie je vaak binnen 4-6 weken. Binnen 3 maanden kun je significant meer organisch verkeer verwachten naar je portfolio en website." },
      { question: "Moet ik zelf content schrijven?", answer: "Nee, wij doen alles. Van technische optimalisatie tot content verbeteringen. Jij focust op je projecten, wij zorgen dat je gevonden wordt." },
      { question: "Kan ik mijn portfolio projecten laten optimaliseren?", answer: "Ja, wij optimaliseren je bestaande portfolio pagina's zodat elk project beter vindbaar wordt in Google. Inclusief alt-teksten voor je foto's en beschrijvingen." }
    ],
    keywords: {
      primary: "SEO interieur designer",
      secondary: ["interieur ontwerper marketing", "interieur advies online vindbaarheid", "interieur designer website"]
    },
    metaTitle: "SEO voor Interieur Designers | Meer Klanten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor interieur designers. Word gevonden door klanten die zoeken naar stijlvol interieurontwerp. Vanaf €99/mnd."
  },
  {
    slug: "interieur-advies",
    name: "Interieur Adviseur",
    namePlural: "Interieur Adviseurs",
    icon: "Lightbulb",
    headline: "SEO voor Interieur Adviseurs",
    subheadline: "Laat klanten jou vinden wanneer ze zoeken naar interieuradvies",
    heroDescription: "Als interieur adviseur help je mensen hun droominterieur te realiseren. Maar eerst moeten ze je kunnen vinden. Met automatische SEO word je zichtbaar voor iedereen die zoekt naar professioneel interieuradvies.",
    painPoints: [
      { icon: "Search", text: "Klanten vinden je concurrenten eerder dan jou" },
      { icon: "MessageCircle", text: "Afhankelijk van doorverwijzingen" },
      { icon: "Smartphone", text: "Geen tijd voor social media marketing" },
      { icon: "Target", text: "Moeilijk om de juiste doelgroep te bereiken" }
    ],
    solutions: [
      { title: "Zoekmachine vindbaarheid", description: "Gevonden worden voor 'interieur advies' + jouw regio" },
      { title: "Expertise tonen", description: "Jouw kennis en stijl komen naar voren in zoekresultaten" },
      { title: "Automatische updates", description: "Wekelijks verbeteringen zonder dat jij iets hoeft te doen" }
    ],
    stats: [
      { value: "+89%", label: "Meer website bezoekers" },
      { value: "3x", label: "Meer adviesgesprekken" }
    ],
    faqs: [
      { question: "Wat is het verschil met een marketing bureau?", answer: "Wij focussen 100% op automatische SEO. Geen dure campagnes of advertenties, maar duurzame vindbaarheid die maand na maand werkt." },
      { question: "Hoe weten jullie wat werkt voor interieur adviseurs?", answer: "We analyseren zoekgedrag en optimaliseren specifiek voor de termen die jouw potentiële klanten gebruiken. Van 'interieur advies' tot 'styling hulp woonkamer'." },
      { question: "Kan ik zien wat jullie veranderen?", answer: "Ja, je ontvangt wekelijks een helder rapport in normaal Nederlands. Geen jargon, gewoon duidelijke resultaten." },
      { question: "Is er een contract voor lange termijn?", answer: "Nee, je kunt maandelijks opzeggen. We geloven dat resultaten voor zich spreken." }
    ],
    keywords: {
      primary: "SEO interieur adviseur",
      secondary: ["interieur advies marketing", "styling advies vindbaarheid", "interieur consultant SEO"]
    },
    metaTitle: "SEO voor Interieur Adviseurs | Meer Adviesgesprekken | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor interieur adviseurs. Laat klanten jou vinden wanneer ze zoeken naar professioneel interieuradvies. Vanaf €99/mnd."
  },
  {
    slug: "personal-trainers",
    name: "Personal Trainer",
    namePlural: "Personal Trainers",
    icon: "Dumbbell",
    headline: "SEO voor Personal Trainers",
    subheadline: "Word de go-to PT in jouw regio",
    heroDescription: "Als personal trainer draait alles om resultaten. Voor je klanten én voor jezelf. Met automatische SEO word je gevonden door mensen die actief zoeken naar een personal trainer in hun buurt.",
    painPoints: [
      { icon: "Users", text: "Concurrentie van grote sportscholen" },
      { icon: "Instagram", text: "Eindeloos posten op social media zonder resultaat" },
      { icon: "MapPin", text: "Klanten uit verkeerde regio's" },
      { icon: "Clock", text: "Tijd kwijt aan marketing in plaats van trainen" }
    ],
    solutions: [
      { title: "Lokale dominantie", description: "Rank #1 voor 'personal trainer [jouw stad]'" },
      { title: "Google Maps zichtbaarheid", description: "Bovenaan in de lokale zoekresultaten" },
      { title: "Review optimalisatie", description: "Meer en betere reviews die nieuwe klanten aantrekken" }
    ],
    stats: [
      { value: "+178%", label: "Meer intake aanvragen" },
      { value: "Top 3", label: "Google Maps ranking" }
    ],
    testimonial: {
      quote: "In 3 maanden van pagina 3 naar de top 3 in Google. Mijn agenda zit nu vol met klanten uit mijn eigen buurt.",
      author: "Mike Jansen",
      role: "Personal Trainer",
      company: "MJ Fitness"
    },
    faqs: [
      { question: "Ik heb al een Instagram met veel volgers, waarom SEO?", answer: "Social media is geweldig voor branding, maar SEO bereikt mensen die actief zoeken naar een PT. Dit zijn vaak de meest gemotiveerde potentiële klanten." },
      { question: "Werkt dit ook voor online coaching?", answer: "Ja, we optimaliseren voor zowel lokale zoektermen als bredere termen voor online personal training." },
      { question: "Hoe snel kan ik nieuwe klanten verwachten?", answer: "De eerste verbetering in rankings zie je vaak binnen 4-6 weken. Nieuwe klanten volgen meestal binnen 2-3 maanden." },
      { question: "Moet ik mijn tarieven op de website zetten?", answer: "Dat is aan jou. Wij adviseren wel om duidelijke informatie te geven, dit verbetert je conversie." }
    ],
    keywords: {
      primary: "SEO personal trainer",
      secondary: ["PT marketing", "personal trainer vindbaarheid", "fitness trainer SEO"]
    },
    metaTitle: "SEO voor Personal Trainers | Meer Klanten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor personal trainers. Word de go-to PT in jouw regio. Meer intake aanvragen vanaf €99/mnd."
  },
  {
    slug: "coaches",
    name: "Coach",
    namePlural: "Coaches",
    icon: "Heart",
    headline: "SEO voor Coaches",
    subheadline: "Help meer mensen door gevonden te worden",
    heroDescription: "Als coach maak je echt verschil in het leven van mensen. Maar ze moeten je wel eerst kunnen vinden. Met automatische SEO bereik je precies de mensen die jouw hulp nodig hebben.",
    painPoints: [
      { icon: "Search", text: "Potentiële cliënten vinden je niet online" },
      { icon: "DollarSign", text: "Dure advertenties met weinig resultaat" },
      { icon: "Users", text: "Te afhankelijk van doorverwijzingen" },
      { icon: "Target", text: "Moeilijk om je niche te bereiken" }
    ],
    solutions: [
      { title: "Niche zichtbaarheid", description: "Gevonden worden voor jouw specifieke coaching expertise" },
      { title: "Vertrouwen opbouwen", description: "Sterke online aanwezigheid die geloofwaardigheid uitstraalt" },
      { title: "Lokaal én landelijk", description: "Bereik cliënten in je regio of heel Nederland" }
    ],
    stats: [
      { value: "+156%", label: "Meer kennismakingsgesprekken" },
      { value: "2x", label: "Meer website bezoekers" }
    ],
    testimonial: {
      quote: "Eindelijk word ik gevonden door mensen die echt op zoek zijn naar een loopbaancoach. De kwaliteit van mijn leads is enorm verbeterd.",
      author: "Sandra de Vries",
      role: "Loopbaancoach"
    },
    faqs: [
      { question: "Werkt SEO voor elke type coach?", answer: "Ja, of je nu life coach, business coach, loopbaancoach of relatiecoach bent - er zijn altijd mensen die zoeken naar jouw expertise." },
      { question: "Ik werk online, helpt lokale SEO dan nog?", answer: "Veel mensen zoeken nog steeds lokaal, zelfs voor online diensten. Daarnaast optimaliseren we ook voor landelijke zoektermen." },
      { question: "Hoe onderscheid ik me van andere coaches?", answer: "Door je specifieke niche en aanpak te benadrukken in je SEO. We zorgen dat je gevonden wordt voor precies die zoektermen waar jouw ideale cliënt naar zoekt." },
      { question: "Kan ik mijn eigen blogs laten optimaliseren?", answer: "Absoluut, bestaande content optimaliseren is een belangrijk onderdeel van onze service." }
    ],
    keywords: {
      primary: "SEO coach",
      secondary: ["coach marketing", "life coach vindbaarheid", "business coach SEO"]
    },
    metaTitle: "SEO voor Coaches | Meer Cliënten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor coaches. Help meer mensen door gevonden te worden. Meer kennismakingsgesprekken vanaf €99/mnd."
  },
  {
    slug: "kappers",
    name: "Kapper",
    namePlural: "Kappers",
    icon: "Scissors",
    headline: "SEO voor Kappers & Salons",
    subheadline: "Vol boekingen dankzij betere vindbaarheid",
    heroDescription: "Een volle agenda begint met gevonden worden. Als kapper of salon eigenaar weet je hoe belangrijk nieuwe klanten zijn. Met automatische SEO word je de eerste keuze in jouw buurt.",
    painPoints: [
      { icon: "Calendar", text: "Lege stoelen door te weinig nieuwe klanten" },
      { icon: "MapPin", text: "Concurrenten scoren hoger op Google Maps" },
      { icon: "Star", text: "Goede reviews maar toch niet zichtbaar" },
      { icon: "Clock", text: "Geen tijd om aan marketing te besteden" }
    ],
    solutions: [
      { title: "Google Maps dominantie", description: "Bovenaan verschijnen wanneer mensen zoeken naar 'kapper bij mij in de buurt'" },
      { title: "Review management", description: "Meer positieve reviews die nieuwe klanten overtuigen" },
      { title: "Lokale zoekwoorden", description: "Gevonden worden voor '[jouw stad] kapper' en meer" }
    ],
    stats: [
      { value: "+92%", label: "Meer boekingen via Google" },
      { value: "#1", label: "In Google Maps voor 'kapper [stad]'" }
    ],
    faqs: [
      { question: "Ik heb al veel vaste klanten, waarom SEO?", answer: "Vaste klanten zijn geweldig, maar nieuwe klanten zorgen voor groei. En vergeet niet: vaste klanten verhuizen soms of stoppen. SEO zorgt voor continue aanwas." },
      { question: "Mijn concurrent adverteert veel, kan ik daar tegenop?", answer: "SEO is duurzamer dan adverteren. Terwijl advertenties stoppen zodra je stopt met betalen, blijft SEO doorwerken. Op lange termijn win je." },
      { question: "Werkt dit ook voor barbershops?", answer: "Absoluut, we optimaliseren voor alle zoektermen relevant voor jouw salon, of het nu een kapsalon, barbershop of hairstudio is." },
      { question: "Kan ik mijn specialisaties laten uitlichten?", answer: "Ja, of je nu specialist bent in balayage, haarextensions of herenknippen - we zorgen dat je gevonden wordt voor die specifieke diensten." }
    ],
    keywords: {
      primary: "SEO kapper",
      secondary: ["kapsalon marketing", "barbershop vindbaarheid", "haarsalon SEO"]
    },
    metaTitle: "SEO voor Kappers & Salons | Vol Agenda | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor kappers en salons. Vol boekingen dankzij betere vindbaarheid in Google. Vanaf €99/mnd."
  },
  {
    slug: "tandartsen",
    name: "Tandarts",
    namePlural: "Tandartsen",
    icon: "Stethoscope",
    headline: "SEO voor Tandartsen",
    subheadline: "Een volle praktijk met patiënten uit jouw regio",
    heroDescription: "Patiënten kiezen steeds vaker online hun tandarts. Met automatische SEO zorg je dat jouw praktijk gevonden wordt wanneer mensen zoeken naar een tandarts in de buurt.",
    painPoints: [
      { icon: "Users", text: "Te weinig nieuwe patiënten" },
      { icon: "Building", text: "Grote ketens domineren de zoekresultaten" },
      { icon: "Star", text: "Goede reputatie maar online onzichtbaar" },
      { icon: "Target", text: "Geen bereik in nieuwe wijken of steden" }
    ],
    solutions: [
      { title: "Lokale zichtbaarheid", description: "Gevonden worden voor 'tandarts [jouw stad/wijk]'" },
      { title: "Specialisatie uitlichten", description: "Rank voor specifieke behandelingen zoals implantaten of orthodontie" },
      { title: "Vertrouwen online", description: "Professionele online aanwezigheid die patiënten geruststelt" }
    ],
    stats: [
      { value: "+67%", label: "Meer nieuwe patiënten" },
      { value: "Top 3", label: "Voor lokale zoektermen" }
    ],
    faqs: [
      { question: "Mogen tandartsen aan SEO doen?", answer: "Ja, SEO is informatieve marketing en volledig toegestaan. We zorgen dat alle content professioneel en accuraat is." },
      { question: "Hoe onderscheiden we ons van tandartspraktijkketens?", answer: "Door de persoonlijke aanpak en specifieke diensten te benadrukken. Veel patiënten zoeken juist een persoonlijke tandarts, geen keten." },
      { question: "Kan ik specifieke behandelingen promoten?", answer: "Ja, we optimaliseren voor behandelingen waar u op wilt focussen, zoals implantaten, kronen, of cosmetische tandheelkunde." },
      { question: "Werkt dit ook voor mondhygiënisten?", answer: "Absoluut, de aanpak werkt voor de hele tandheelkundige sector." }
    ],
    keywords: {
      primary: "SEO tandarts",
      secondary: ["tandartspraktijk marketing", "tandarts vindbaarheid", "mondhygiënist SEO"]
    },
    metaTitle: "SEO voor Tandartsen | Meer Patiënten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor tandartsen. Een volle praktijk met patiënten uit jouw regio. Vanaf €99/mnd."
  },
  {
    slug: "fysiotherapeuten",
    name: "Fysiotherapeut",
    namePlural: "Fysiotherapeuten",
    icon: "Activity",
    headline: "SEO voor Fysiotherapeuten",
    subheadline: "Patiënten vinden die jouw expertise nodig hebben",
    heroDescription: "Steeds meer mensen zoeken online naar een fysiotherapeut. Met automatische SEO word je gevonden door patiënten die zoeken naar hulp bij hun specifieke klachten.",
    painPoints: [
      { icon: "Search", text: "Patiënten kiezen concurrenten die hoger ranken" },
      { icon: "Briefcase", text: "Afhankelijk van doorverwijzingen van huisartsen" },
      { icon: "Target", text: "Moeilijk om je specialisatie te promoten" },
      { icon: "TrendingDown", text: "Minder zichtbaar dan grote praktijken" }
    ],
    solutions: [
      { title: "Klachtgerichte SEO", description: "Gevonden worden voor 'fysiotherapie [klacht]' zoals rugpijn of knieproblemen" },
      { title: "Lokale dominantie", description: "De eerste keuze in jouw regio" },
      { title: "Specialisatie marketing", description: "Toon je expertise in sportfysiotherapie, manuele therapie, etc." }
    ],
    stats: [
      { value: "+123%", label: "Meer directe aanmeldingen" },
      { value: "Top 5", label: "Voor behandel-specifieke zoektermen" }
    ],
    faqs: [
      { question: "Mag ik als fysiotherapeut aan marketing doen?", answer: "Ja, binnen de beroepscode is informatieve marketing toegestaan. SEO valt hier volledig onder." },
      { question: "Hoe bereik ik patiënten met specifieke klachten?", answer: "We optimaliseren voor klachtgerichte zoektermen zoals 'fysiotherapie schouderklachten' of 'bekkenbodem fysiotherapie'. Zo bereik je precies de patiënten die jouw expertise nodig hebben." },
      { question: "Werkt dit ook als ik net een praktijk start?", answer: "Juist dan is SEO belangrijk. Het duurt even om te bouwen, maar je legt een stevige basis voor de toekomst." },
      { question: "Kan ik ook gevonden worden voor sporters?", answer: "Absoluut, sportfysiotherapie is een populaire zoekterm. We helpen je om precies de juiste doelgroep te bereiken." }
    ],
    keywords: {
      primary: "SEO fysiotherapeut",
      secondary: ["fysiotherapie marketing", "fysio vindbaarheid", "sportfysiotherapie SEO"]
    },
    metaTitle: "SEO voor Fysiotherapeuten | Meer Patiënten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor fysiotherapeuten. Patiënten vinden die jouw expertise nodig hebben. Vanaf €99/mnd."
  },
  {
    slug: "advocaten",
    name: "Advocaat",
    namePlural: "Advocaten",
    icon: "Scale",
    headline: "SEO voor Advocaten",
    subheadline: "Gevonden worden door cliënten die juridische hulp zoeken",
    heroDescription: "Wanneer mensen juridische hulp nodig hebben, beginnen ze online. Met automatische SEO zorg je dat jouw kantoor gevonden wordt door potentiële cliënten in jouw rechtsgebied.",
    painPoints: [
      { icon: "Search", text: "Grote kantoren domineren zoekresultaten" },
      { icon: "Target", text: "Moeilijk om je specialisatie te bereiken" },
      { icon: "DollarSign", text: "Hoge kosten voor online adverteren" },
      { icon: "Clock", text: "Geen tijd voor marketing naast de praktijk" }
    ],
    solutions: [
      { title: "Rechtsgebied focus", description: "Gevonden worden voor 'advocaat [specialisatie] [stad]'" },
      { title: "Thought leadership", description: "Expertise tonen door geoptimaliseerde content" },
      { title: "Vertrouwen opbouwen", description: "Professionele online aanwezigheid" }
    ],
    stats: [
      { value: "+89%", label: "Meer gekwalificeerde leads" },
      { value: "Top 5", label: "Voor rechtsgebied-specifieke zoektermen" }
    ],
    faqs: [
      { question: "Mag een advocatenkantoor aan SEO doen?", answer: "Ja, binnen de gedragsregels is informatieve online marketing toegestaan. SEO focust op vindbaarheid, niet op aanprijzing." },
      { question: "Hoe concurreren we met grote kantoren?", answer: "Door te focussen op specifieke rechtsgebieden en lokale zoektermen. Een specialist in arbeidsrecht in Haarlem kan prima ranken boven grote Amsterdamse kantoren." },
      { question: "Kunnen we voor meerdere rechtsgebieden ranken?", answer: "Ja, we optimaliseren voor al uw praktijkgebieden. Van strafrecht tot arbeidsrecht en familierecht." },
      { question: "Is dit geschikt voor een startend kantoor?", answer: "Juist voor startende kantoren is online zichtbaarheid cruciaal. SEO bouwt een duurzame stroom van potentiële cliënten." }
    ],
    keywords: {
      primary: "SEO advocaat",
      secondary: ["advocatenkantoor marketing", "juridische diensten SEO", "advocaat vindbaarheid"]
    },
    metaTitle: "SEO voor Advocaten | Meer Cliënten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor advocaten. Gevonden worden door cliënten die juridische hulp zoeken. Vanaf €99/mnd."
  },
  {
    slug: "accountants",
    name: "Accountant",
    namePlural: "Accountants",
    icon: "Calculator",
    headline: "SEO voor Accountants",
    subheadline: "Ondernemers vinden die jouw expertise nodig hebben",
    heroDescription: "Ondernemers zoeken online naar een betrouwbare accountant. Met automatische SEO word je gevonden door precies de klanten die bij jouw kantoor passen.",
    painPoints: [
      { icon: "Building", text: "Grote kantoren domineren de markt" },
      { icon: "Users", text: "Afhankelijk van netwerk en doorverwijzingen" },
      { icon: "Target", text: "Moeilijk om je niche te bereiken" },
      { icon: "TrendingDown", text: "Online onzichtbaar voor nieuwe klanten" }
    ],
    solutions: [
      { title: "Niche focus", description: "Gevonden worden door ondernemers in jouw specialisatie (ZZP, MKB, specifieke branches)" },
      { title: "Lokale vindbaarheid", description: "De go-to accountant in jouw regio" },
      { title: "Service-specifiek", description: "Rank voor specifieke diensten zoals jaarrekening of belastingadvies" }
    ],
    stats: [
      { value: "+134%", label: "Meer gekwalificeerde aanvragen" },
      { value: "Top 3", label: "Voor lokale zoektermen" }
    ],
    faqs: [
      { question: "Hoe onderscheiden we ons van grote accountantskantoren?", answer: "Door te focussen op persoonlijke service en specifieke niches. Veel ondernemers zoeken bewust een kleinschalig kantoor met persoonlijk contact." },
      { question: "Kunnen we gevonden worden voor specifieke diensten?", answer: "Ja, we optimaliseren voor diensten zoals 'jaarrekening laten maken', 'belastingaangifte ondernemer', of 'financieel advies ZZP'." },
      { question: "Werkt dit voor boekhouders ook?", answer: "Absoluut, de strategie werkt voor alle financiële dienstverleners." },
      { question: "Hoe lang duurt het voordat we resultaten zien?", answer: "Eerste verbeteringen zien we vaak binnen 6-8 weken. Significante resultaten volgen binnen 3-4 maanden." }
    ],
    keywords: {
      primary: "SEO accountant",
      secondary: ["accountantskantoor marketing", "boekhouder vindbaarheid", "financieel adviseur SEO"]
    },
    metaTitle: "SEO voor Accountants | Meer Klanten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor accountants. Ondernemers vinden die jouw expertise nodig hebben. Vanaf €99/mnd."
  },
  {
    slug: "makelaars",
    name: "Makelaar",
    namePlural: "Makelaars",
    icon: "Home",
    headline: "SEO voor Makelaars",
    subheadline: "Meer opdrachten door betere online vindbaarheid",
    heroDescription: "In een competitieve markt is online zichtbaarheid cruciaal. Met automatische SEO word je de eerste keuze voor verkopers en kopers in jouw regio.",
    painPoints: [
      { icon: "Building", text: "Grote makelaarsketens domineren online" },
      { icon: "TrendingDown", text: "Funda alleen is niet genoeg" },
      { icon: "Target", text: "Moeilijk om nieuwe wijken te penetreren" },
      { icon: "DollarSign", text: "Hoge kosten voor leads" }
    ],
    solutions: [
      { title: "Regionale dominantie", description: "De #1 makelaar in jouw werkgebied" },
      { title: "Wijk-specifiek", description: "Gevonden worden voor '[wijk] makelaar'" },
      { title: "Dienst-focus", description: "Rank voor 'verkoop makelaar', 'aankoop makelaar', 'taxateur'" }
    ],
    stats: [
      { value: "+112%", label: "Meer verkoop opdrachten" },
      { value: "Top 3", label: "In werkgebied" }
    ],
    faqs: [
      { question: "Ik sta al op Funda, waarom ook SEO?", answer: "Funda is belangrijk voor woningaanbod, maar SEO zorgt dat verkopers jou vinden als ze een makelaar zoeken. Dat is waar de opdrachten vandaan komen." },
      { question: "Kan ik per wijk of dorp ranken?", answer: "Ja, we optimaliseren voor specifieke wijken, dorpen of steden. Zo bouw je per gebied aan je positie." },
      { question: "Werkt dit voor aankoop en verkoop?", answer: "Absoluut, we optimaliseren voor beide diensten. Of u zich nu richt op kopers, verkopers of beide." },
      { question: "Hoe snel zie ik meer opdrachten?", answer: "SEO bouwt op over tijd. De eerste verbeteringen zie je binnen 4-6 weken, meer opdrachten volgen meestal binnen 2-3 maanden." }
    ],
    keywords: {
      primary: "SEO makelaar",
      secondary: ["makelaar marketing", "vastgoed SEO", "makelaarskantoor vindbaarheid"]
    },
    metaTitle: "SEO voor Makelaars | Meer Opdrachten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor makelaars. Meer verkoop- en aankoopopdrachten door betere online vindbaarheid. Vanaf €99/mnd."
  },
  {
    slug: "fotografen",
    name: "Fotograaf",
    namePlural: "Fotografen",
    icon: "Camera",
    headline: "SEO voor Fotografen",
    subheadline: "Boekingen via Google in plaats van alleen netwerk",
    heroDescription: "Je foto's spreken voor zich, maar mensen moeten je wel kunnen vinden. Met automatische SEO word je ontdekt door klanten die zoeken naar een fotograaf voor hun speciale moment.",
    painPoints: [
      { icon: "Instagram", text: "Social media kost veel tijd met weinig resultaat" },
      { icon: "Users", text: "Te afhankelijk van mond-tot-mondreclame" },
      { icon: "Target", text: "Moeilijk om je specialisatie te bereiken" },
      { icon: "Calendar", text: "Seizoensgebonden pieken en dalen" }
    ],
    solutions: [
      { title: "Specialisatie focus", description: "Rank voor 'bruiloft fotograaf', 'portret fotograaf', 'product fotograaf'" },
      { title: "Lokale vindbaarheid", description: "Gevonden worden in jouw werkgebied" },
      { title: "Portfolio zichtbaarheid", description: "Je werk komt naar voren in zoekresultaten" }
    ],
    stats: [
      { value: "+145%", label: "Meer boekingsaanvragen" },
      { value: "Top 5", label: "Voor specialisatie + stad" }
    ],
    faqs: [
      { question: "Ik heb al veel Instagram volgers, waarom SEO?", answer: "Instagram is geweldig voor branding, maar SEO bereikt mensen die actief een fotograaf zoeken. Dit zijn vaak de beste leads." },
      { question: "Kan ik voor meerdere stijlen ranken?", answer: "Ja, we optimaliseren voor al uw diensten. Van bruiloftsfotografie tot bedrijfsfotografie en portretfotografie." },
      { question: "Helpt dit ook in rustige seizoenen?", answer: "Absoluut, door bredere vindbaarheid trek je ook klanten aan voor minder seizoensgebonden diensten." },
      { question: "Worden mijn foto's geoptimaliseerd?", answer: "Ja, we zorgen voor goede alt-teksten en optimalisatie van uw portfoliopagina's." }
    ],
    keywords: {
      primary: "SEO fotograaf",
      secondary: ["bruiloft fotograaf marketing", "portret fotograaf vindbaarheid", "product fotografie SEO"]
    },
    metaTitle: "SEO voor Fotografen | Meer Boekingen | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor fotografen. Meer boekingen via Google in plaats van alleen netwerk. Vanaf €99/mnd."
  },
  {
    slug: "restaurants",
    name: "Restaurant",
    namePlural: "Restaurants",
    icon: "UtensilsCrossed",
    headline: "SEO voor Restaurants",
    subheadline: "Volle tafels door betere online vindbaarheid",
    heroDescription: "Gasten kiezen steeds vaker online waar ze gaan eten. Met automatische SEO zorg je dat jouw restaurant gevonden wordt wanneer mensen zoeken naar een restaurant in de buurt.",
    painPoints: [
      { icon: "Search", text: "Concurrenten staan hoger in Google" },
      { icon: "MapPin", text: "Onzichtbaar in Google Maps" },
      { icon: "Star", text: "Goede reviews maar weinig nieuwe gasten" },
      { icon: "DollarSign", text: "Hoge kosten voor bezorgplatforms" }
    ],
    solutions: [
      { title: "Google Maps dominantie", description: "Bovenaan verschijnen bij 'restaurant bij mij in de buurt'" },
      { title: "Keuken-specifiek", description: "Rank voor '[keuken type] restaurant [stad]'" },
      { title: "Review optimalisatie", description: "Meer en betere reviews aantrekken" }
    ],
    stats: [
      { value: "+78%", label: "Meer reserveringen" },
      { value: "#1", label: "In Google Maps voor keuken + stad" }
    ],
    faqs: [
      { question: "Ik sta al op TheFork/Iens, waarom ook SEO?", answer: "Platforms zijn nuttig, maar SEO zorgt voor directe boekingen zonder commissie. Op lange termijn bespaart dit significant." },
      { question: "Kan ik voor specifieke gelegenheden ranken?", answer: "Ja, we optimaliseren voor termen als 'zakelijk dineren', 'romantisch restaurant', of 'kinderfeestje restaurant'." },
      { question: "Helpt dit ook voor takeaway/bezorging?", answer: "Absoluut, we optimaliseren ook voor 'afhalen' en 'bezorgen' zoektermen." },
      { question: "Hoe snel zie ik meer reserveringen?", answer: "De eerste verbeteringen in rankings zien we binnen 4-6 weken. Meer reserveringen volgen meestal snel daarna." }
    ],
    keywords: {
      primary: "SEO restaurant",
      secondary: ["restaurant marketing", "horeca SEO", "eetgelegenheid vindbaarheid"]
    },
    metaTitle: "SEO voor Restaurants | Volle Tafels | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor restaurants. Volle tafels door betere online vindbaarheid in Google. Vanaf €99/mnd."
  },
  {
    slug: "aannemers",
    name: "Aannemer",
    namePlural: "Aannemers",
    icon: "Hammer",
    headline: "SEO voor Aannemers",
    subheadline: "Meer bouwopdrachten door online vindbaarheid",
    heroDescription: "Wanneer mensen een verbouwing plannen, zoeken ze online naar een betrouwbare aannemer. Met automatische SEO word je gevonden door huiseigenaren in jouw werkgebied.",
    painPoints: [
      { icon: "Search", text: "Klanten kiezen concurrenten die beter vindbaar zijn" },
      { icon: "Users", text: "Te afhankelijk van mond-tot-mondreclame" },
      { icon: "Target", text: "Moeilijk om in nieuwe gebieden te komen" },
      { icon: "DollarSign", text: "Dure leads via vergelijkingswebsites" }
    ],
    solutions: [
      { title: "Regionale focus", description: "De go-to aannemer in jouw werkgebied" },
      { title: "Dienst-specifiek", description: "Rank voor 'aanbouw', 'dakkapel', 'badkamer renovatie'" },
      { title: "Vertrouwen opbouwen", description: "Professionele online aanwezigheid met reviews" }
    ],
    stats: [
      { value: "+167%", label: "Meer offerteaanvragen" },
      { value: "Top 3", label: "Voor bouw-gerelateerde zoektermen" }
    ],
    faqs: [
      { question: "Kan ik voor specifieke bouwprojecten ranken?", answer: "Ja, we optimaliseren voor specifieke diensten zoals 'uitbouw plaatsen', 'dakkapel bouwen', of 'complete renovatie'. Zo bereik je klanten met precies die vraag." },
      { question: "Werkt dit ook voor kleine klusjes?", answer: "Dat is aan u. We kunnen focussen op grote projecten, kleine klussen, of beide - afhankelijk van wat u wilt aantrekken." },
      { question: "Hoe concurreer ik met grote bouwbedrijven?", answer: "Door te focussen op persoonlijke service en specifieke regio's. Veel particulieren zoeken bewust een lokale, persoonlijke aannemer." },
      { question: "Is een portfolio pagina belangrijk?", answer: "Absoluut, we helpen uw projecten zo te presenteren dat ze ook in Google gevonden worden." }
    ],
    keywords: {
      primary: "SEO aannemer",
      secondary: ["bouwbedrijf marketing", "aannemer vindbaarheid", "renovatie SEO"]
    },
    metaTitle: "SEO voor Aannemers | Meer Opdrachten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor aannemers. Meer bouwopdrachten door online vindbaarheid. Vanaf €99/mnd."
  },
  {
    slug: "schoonheidssalons",
    name: "Schoonheidssalon",
    namePlural: "Schoonheidssalons",
    icon: "Sparkles",
    headline: "SEO voor Schoonheidssalons",
    subheadline: "Een volle agenda met klanten die jou zoeken",
    heroDescription: "Klanten zoeken online naar de beste schoonheidsbehandelingen in hun buurt. Met automatische SEO word je gevonden wanneer mensen zoeken naar jouw specialisaties.",
    painPoints: [
      { icon: "Calendar", text: "Te veel lege plekken in de agenda" },
      { icon: "Instagram", text: "Social media kost te veel tijd" },
      { icon: "Star", text: "Goede reviews maar toch onzichtbaar" },
      { icon: "Target", text: "Concurrenten krijgen de klanten" }
    ],
    solutions: [
      { title: "Behandeling focus", description: "Gevonden worden voor specifieke behandelingen" },
      { title: "Lokale dominantie", description: "De eerste keuze in jouw buurt" },
      { title: "Google Mijn Bedrijf", description: "Optimaal profiel met foto's en reviews" }
    ],
    stats: [
      { value: "+134%", label: "Meer boekingen" },
      { value: "Top 3", label: "Voor behandeling + stad" }
    ],
    faqs: [
      { question: "Kan ik voor specifieke behandelingen ranken?", answer: "Ja, we optimaliseren voor al uw behandelingen zoals 'gezichtsbehandeling', 'waxen', 'microblading', of 'nagelsalon'." },
      { question: "Ik gebruik Treatwell/Salonized, is SEO nog nodig?", answer: "Ja, SEO zorgt voor directe boekingen zonder commissie. U bouwt aan uw eigen klantenkring." },
      { question: "Hoe toon ik mijn expertise online?", answer: "Door geoptimaliseerde content over uw behandelingen en technieken. Zo bouwt u autoriteit op." },
      { question: "Werkt dit ook voor thuissalons?", answer: "Absoluut, juist voor kleinere salons is lokale SEO heel effectief." }
    ],
    keywords: {
      primary: "SEO schoonheidssalon",
      secondary: ["beautysalon marketing", "schoonheidsspecialiste vindbaarheid", "nagelsalon SEO"]
    },
    metaTitle: "SEO voor Schoonheidssalons | Volle Agenda | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor schoonheidssalons. Een volle agenda met klanten die jou zoeken. Vanaf €99/mnd."
  },
  {
    slug: "autobedrijven",
    name: "Autobedrijf",
    namePlural: "Autobedrijven",
    icon: "Car",
    headline: "SEO voor Autobedrijven",
    subheadline: "Meer klanten via Google, minder via AutoTrack",
    heroDescription: "Klanten zoeken steeds vaker eerst op Google voordat ze een autobedrijf bezoeken. Met automatische SEO word je gevonden door kopers en onderhoudklanten in jouw regio.",
    painPoints: [
      { icon: "DollarSign", text: "Hoge kosten voor autoportals" },
      { icon: "Search", text: "Onzichtbaar in lokale zoekresultaten" },
      { icon: "Target", text: "Moeilijk om je te onderscheiden" },
      { icon: "Users", text: "Te afhankelijk van bestaande klanten" }
    ],
    solutions: [
      { title: "Lokale dominantie", description: "Gevonden worden voor 'autobedrijf [stad]' en 'garage [regio]'" },
      { title: "Dienst-focus", description: "Rank voor 'APK keuring', 'auto onderhoud', 'occasions'" },
      { title: "Merk expertise", description: "Bekend staan als specialist in bepaalde merken" }
    ],
    stats: [
      { value: "+98%", label: "Meer service afspraken" },
      { value: "Top 3", label: "Voor 'autobedrijf + stad'" }
    ],
    faqs: [
      { question: "Ik sta al op AutoTrack/Marktplaats, waarom SEO?", answer: "Portals zijn duur en concurrentie is hoog. SEO zorgt voor directe bezoekers aan uw website zonder doorlopende kosten per lead." },
      { question: "Kan ik voor merk-specifieke termen ranken?", answer: "Ja, als u specialist bent in bepaalde merken optimaliseren we daar specifiek voor." },
      { question: "Werkt dit voor zowel verkoop als onderhoud?", answer: "Absoluut, we optimaliseren voor beide. Van occasionverkoop tot APK en onderhoud." },
      { question: "Hoe snel zie ik resultaat?", answer: "De eerste verbeteringen zien we binnen 4-6 weken. Meer klanten volgen meestal binnen 2-3 maanden." }
    ],
    keywords: {
      primary: "SEO autobedrijf",
      secondary: ["garage marketing", "autoverkoop SEO", "autogarage vindbaarheid"]
    },
    metaTitle: "SEO voor Autobedrijven | Meer Klanten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor autobedrijven. Meer klanten via Google, minder via dure portals. Vanaf €99/mnd."
  },
  {
    slug: "consultants",
    name: "Consultant",
    namePlural: "Consultants",
    icon: "Briefcase",
    headline: "SEO voor Consultants",
    subheadline: "Gevonden worden door bedrijven die jouw expertise zoeken",
    heroDescription: "Als consultant verkoop je kennis en ervaring. Maar potentiële klanten moeten je wel kunnen vinden. Met automatische SEO word je ontdekt door bedrijven die zoeken naar jouw specifieke expertise.",
    painPoints: [
      { icon: "Search", text: "Grote bureaus domineren zoekresultaten" },
      { icon: "Users", text: "Te afhankelijk van netwerk en referenties" },
      { icon: "Target", text: "Moeilijk om je niche te bereiken" },
      { icon: "Clock", text: "Geen tijd voor marketing naast opdrachten" }
    ],
    solutions: [
      { title: "Expertise zichtbaarheid", description: "Rank voor jouw specifieke vakgebied + regio" },
      { title: "Thought leadership", description: "Bouw autoriteit op in je vakgebied" },
      { title: "Lead generatie", description: "Warme leads die jou vinden via Google" }
    ],
    stats: [
      { value: "+145%", label: "Meer gekwalificeerde leads" },
      { value: "Top 5", label: "Voor expertise-specifieke zoektermen" }
    ],
    faqs: [
      { question: "Werkt SEO voor B2B consultancy?", answer: "Absoluut, steeds meer bedrijven zoeken online naar consultants en adviseurs. SEO zorgt dat jij gevonden wordt." },
      { question: "Ik heb een hele specifieke niche, helpt dat?", answer: "Juist specialistische niches werken goed voor SEO. Minder concurrentie en zeer gerichte leads." },
      { question: "Kan ik voor meerdere expertisegebieden ranken?", answer: "Ja, we optimaliseren voor al uw diensten en expertisegebieden." },
      { question: "Helpt dit ook voor interim opdrachten?", answer: "Absoluut, 'interim [functie] [stad]' is een veelgebruikte zoekterm die we kunnen targeten." }
    ],
    keywords: {
      primary: "SEO consultant",
      secondary: ["consultancy marketing", "adviseur vindbaarheid", "B2B consultant SEO"]
    },
    metaTitle: "SEO voor Consultants | Meer Opdrachten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor consultants. Gevonden worden door bedrijven die jouw expertise zoeken. Vanaf €99/mnd."
  },
  {
    slug: "therapeuten",
    name: "Therapeut",
    namePlural: "Therapeuten",
    icon: "HeartHandshake",
    headline: "SEO voor Therapeuten",
    subheadline: "Cliënten vinden die jouw hulp nodig hebben",
    heroDescription: "Mensen zoeken online naar hulp voor hun uitdagingen. Als therapeut kun je met automatische SEO gevonden worden door precies die cliënten die baat hebben bij jouw aanpak.",
    painPoints: [
      { icon: "Search", text: "Potentiële cliënten vinden je niet" },
      { icon: "Target", text: "Moeilijk om je specialisatie te bereiken" },
      { icon: "Users", text: "Afhankelijk van doorverwijzingen" },
      { icon: "DollarSign", text: "Adverteren voelt niet passend" }
    ],
    solutions: [
      { title: "Specialisatie focus", description: "Gevonden worden voor jouw specifieke therapievorm" },
      { title: "Lokale zichtbaarheid", description: "De eerste keuze in jouw praktijkregio" },
      { title: "Vertrouwen online", description: "Professionele aanwezigheid die cliënten geruststelt" }
    ],
    stats: [
      { value: "+123%", label: "Meer intakegesprekken" },
      { value: "Top 5", label: "Voor therapie-specifieke zoektermen" }
    ],
    faqs: [
      { question: "Werkt SEO voor psychotherapie ook?", answer: "Ja, we werken met diverse therapeuten - van psychologen tot massagetherapeuten en alles daartussen." },
      { question: "Mag ik als therapeut aan SEO doen?", answer: "Ja, informatieve online marketing is toegestaan. SEO focust op gevonden worden, niet op aanprijzing." },
      { question: "Hoe bereik ik cliënten met specifieke klachten?", answer: "We optimaliseren voor klachtgerichte zoektermen, zodat u gevonden wordt door mensen met precies die uitdagingen." },
      { question: "Kan ik ook online therapie promoten?", answer: "Absoluut, we optimaliseren ook voor 'online therapie' en verwante zoektermen." }
    ],
    keywords: {
      primary: "SEO therapeut",
      secondary: ["psycholoog marketing", "therapeut vindbaarheid", "praktijk SEO"]
    },
    metaTitle: "SEO voor Therapeuten | Meer Cliënten | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor therapeuten. Cliënten vinden die jouw hulp nodig hebben. Vanaf €99/mnd."
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find(i => i.slug === slug);
}
