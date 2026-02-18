import { ServiceVariantData } from "./service-variants";

// ============================================
// P3: UITBESTEDEN + ABONNEMENT for 10 new services
// ============================================

// --- 1. Content Optimalisatie ---
const contentOptimalisatieUitbesteden: ServiceVariantData = {
  slug: "content-optimalisatie-uitbesteden",
  serviceName: "Content Optimalisatie",
  variant: "uitbesteden",
  headline: "Content Optimalisatie Uitbesteden?",
  subheadline: "Laat je bestaande content beter scoren in Google — zonder zelf te schrijven",
  subtitlePoints: ["Bestaande content verbeteren", "Hogere rankings", "Altijd opzegbaar"],
  whatIsTitle: "Wat is content optimalisatie uitbesteden?",
  whatIsText: [
    "Content optimalisatie uitbesteden betekent dat experts je bestaande websiteteksten analyseren en verbeteren zodat ze beter scoren in Google. Geen nieuwe content schrijven, maar je huidige pagina's naar een hoger niveau tillen.",
    "Bij KlikKlaarSEO doen we dit data-gedreven. We analyseren zoekintentie, concurrentie en zoekvolume om precies te bepalen welke aanpassingen de meeste impact hebben op je rankings."
  ],
  benefits: [
    { icon: "FileText", title: "Content audit", description: "Elke pagina wordt beoordeeld op SEO-waarde en verbeterpotentieel" },
    { icon: "TrendingUp", title: "Hogere rankings", description: "Bestaande content gaat beter scoren zonder nieuwe pagina's" },
    { icon: "Search", title: "Zoekintentie match", description: "Content wordt afgestemd op wat zoekers écht willen vinden" },
    { icon: "Bot", title: "AI-optimalisatie", description: "Content wordt ook geoptimaliseerd voor AI-zoekmachines" },
    { icon: "BarChart", title: "Meetbaar resultaat", description: "Zie per pagina hoe rankings en verkeer verbeteren" }
  ],
  processSteps: [
    { step: 1, title: "Content audit", description: "We analyseren al je bestaande pagina's op SEO-potentieel" },
    { step: 2, title: "Prioritering", description: "De pagina's met het meeste groeipotentieel worden eerst aangepakt" },
    { step: 3, title: "Optimalisatie", description: "Teksten, headings, meta tags en structuur worden verbeterd" },
    { step: 4, title: "Monitoring", description: "We volgen de rankings en passen verder aan waar nodig" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €800", klikklaar: "€99 - €249" },
    { feature: "Pagina's per maand", bureau: "5-10 pagina's", freelancer: "3-5 pagina's", klikklaar: "Continue optimalisatie" },
    { feature: "Zoekintentie analyse", bureau: "Handmatig", freelancer: "Beperkt", klikklaar: "Data-gedreven" },
    { feature: "AI-optimalisatie", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Na oplevering", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "TrendingUp", title: "Meetbare groei", description: "Zie per pagina hoe de rankings stijgen." },
    { icon: "FileText", title: "Bestaande content benutten", description: "Maximaal resultaat uit wat je al hebt." }
  ],
  faqs: [
    { question: "Wat is het verschil tussen content optimalisatie en nieuwe content schrijven?", answer: "Content optimalisatie verbetert je bestaande pagina's zodat ze beter scoren. Nieuwe content schrijven voegt extra pagina's toe. Optimalisatie is vaak sneller en goedkoper dan steeds nieuwe content produceren." },
    { question: "Hoeveel kost content optimalisatie uitbesteden?", answer: "Bij KlikKlaarSEO vanaf €99/mnd met continue optimalisatie. Een bureau rekent €500-€2.000/mnd voor vergelijkbaar werk." },
    { question: "Hoe snel zie ik resultaten?", answer: "Geoptimaliseerde pagina's stijgen doorgaans binnen 4-8 weken in de rankings. Quick wins zoals meta tags en headings hebben sneller effect." },
    { question: "Moeten mijn teksten helemaal herschreven worden?", answer: "Meestal niet. We passen strategische onderdelen aan: headings, structuur, zoekwoorden, interne links en meta data. De kern van je tekst blijft behouden." },
    { question: "Optimaliseren jullie ook voor AI-zoekmachines?", answer: "Ja, we zorgen dat je content goed opgepikt wordt door ChatGPT, Perplexity en Google AI Overview." },
    { question: "Welke pagina's worden als eerste aangepakt?", answer: "Pagina's met het meeste groeipotentieel: hoog zoekvolume, lage huidige positie en goede relevantie. Data bepaalt de prioriteit." }
  ],
  metaTitle: "Content Optimalisatie Uitbesteden | Hogere Rankings | €99/mnd",
  metaDescription: "Content optimalisatie uitbesteden? Laat je bestaande content beter scoren in Google. Data-gedreven, AI-ready. Vanaf €99/mnd bij KlikKlaarSEO."
};

const contentOptimalisatieAbonnement: ServiceVariantData = {
  slug: "content-optimalisatie-abonnement",
  serviceName: "Content Optimalisatie",
  variant: "abonnement",
  headline: "Content Optimalisatie Abonnement",
  subheadline: "Elke maand betere content, hogere rankings — op de automatische piloot",
  subtitlePoints: ["Continue verbetering", "Data-gedreven", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een content optimalisatie abonnement?",
  whatIsText: [
    "Een content optimalisatie abonnement zorgt dat je websiteteksten continu verbeterd worden voor betere rankings. Elke maand worden pagina's geanalyseerd, geoptimaliseerd en gemonitord op resultaat.",
    "Content veroudert snel. Concurrenten publiceren nieuwe content, zoekintentie verandert en Google past algoritmes aan. Met een abonnement blijf je structureel relevant en vindbaar."
  ],
  benefits: [
    { icon: "FileText", title: "Maandelijkse optimalisatie", description: "Elke maand worden pagina's verbeterd" },
    { icon: "TrendingUp", title: "Structurele groei", description: "Rankings stijgen consistent maand na maand" },
    { icon: "Search", title: "Content freshness", description: "Verouderde content wordt geüpdatet en relevant gehouden" },
    { icon: "Bot", title: "AI-ready content", description: "Geoptimaliseerd voor zowel Google als AI-zoekmachines" },
    { icon: "BarChart", title: "Wekelijks rapport", description: "Zie welke pagina's verbeterd zijn en wat het oplevert" }
  ],
  processSteps: [
    { step: 1, title: "Content inventarisatie", description: "We brengen al je bestaande content in kaart" },
    { step: 2, title: "Prioriteitenplan", description: "Data bepaalt welke pagina's als eerst worden geoptimaliseerd" },
    { step: 3, title: "Maandelijkse optimalisatie", description: "Elke maand worden pagina's verbeterd op basis van het plan" },
    { step: 4, title: "Monitoring & bijsturing", description: "Rankings worden gevolgd en de strategie wordt bijgestuurd" }
  ],
  pricingNote: "Content optimalisatie abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+ met content strategie).",
  faqs: [
    { question: "Wat kost een content optimalisatie abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) biedt uitgebreidere optimalisatie, Pro+ (€249/mnd) voegt content strategie en nieuwe content toe." },
    { question: "Hoeveel pagina's worden er per maand geoptimaliseerd?", answer: "Dit hangt af van het pakket. Bij Basis worden de belangrijkste pagina's aangepakt, bij Pro en Pro+ wordt het volledige content spectrum geoptimaliseerd." },
    { question: "Schrijven jullie ook nieuwe content?", answer: "Bij het Pro+ pakket is beperkte contentcreatie inbegrepen. De focus ligt op het optimaliseren van bestaande content — dat levert vaak sneller resultaat." },
    { question: "Hoe weet ik welke pagina's verbeterd zijn?", answer: "Je ontvangt wekelijks een rapport met welke pagina's geoptimaliseerd zijn, welke aanpassingen gedaan zijn en hoe de rankings ontwikkelen." },
    { question: "Werkt dit voor elke branche?", answer: "Ja, onze data-gedreven aanpak werkt voor elke branche. De optimalisatie wordt afgestemd op jouw specifieke zoektermen en doelgroep." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." }
  ],
  metaTitle: "Content Optimalisatie Abonnement | Betere Rankings | €99/mnd",
  metaDescription: "Content optimalisatie abonnement: elke maand betere content en hogere rankings. Data-gedreven, AI-ready. Vanaf €99/mnd, altijd opzegbaar."
};

// --- 2. SEO Teksten ---
const seoTekstenUitbesteden: ServiceVariantData = {
  slug: "seo-teksten-uitbesteden",
  serviceName: "SEO Teksten",
  variant: "uitbesteden",
  headline: "SEO Teksten Uitbesteden?",
  subheadline: "Professionele SEO-teksten die scoren in Google — zonder zelf te schrijven",
  subtitlePoints: ["Zoekwoord-geoptimaliseerd", "Conversiegericht", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO teksten uitbesteden?",
  whatIsText: [
    "SEO teksten uitbesteden betekent dat specialisten teksten schrijven die zowel lezers als zoekmachines overtuigen. Van landingspagina's en blogposts tot productbeschrijvingen — allemaal geoptimaliseerd voor de juiste zoekwoorden.",
    "Bij KlikKlaarSEO combineren we data-gedreven keyword research met overtuigende copy. Het resultaat: teksten die ranken in Google én bezoekers omzetten in klanten."
  ],
  benefits: [
    { icon: "PenTool", title: "SEO-geoptimaliseerd", description: "Teksten geschreven rond de juiste zoekwoorden en zoekintentie" },
    { icon: "Target", title: "Conversiegericht", description: "Niet alleen verkeer maar ook leads en klanten genereren" },
    { icon: "BarChart", title: "Data-gedreven", description: "Keyword research bepaalt de content strategie" },
    { icon: "Bot", title: "AI-citeerbaar", description: "Teksten die ook door AI-zoekmachines opgepikt worden" },
    { icon: "Clock", title: "Regelmatig nieuwe content", description: "Structureel nieuwe SEO-teksten zonder eigen werk" }
  ],
  processSteps: [
    { step: 1, title: "Keyword research", description: "We onderzoeken welke zoektermen het meeste potentieel hebben" },
    { step: 2, title: "Content planning", description: "Een redactioneel plan met onderwerpen en prioriteiten" },
    { step: 3, title: "Teksten schrijven", description: "Professionele SEO-teksten worden geschreven en geplaatst" },
    { step: 4, title: "Monitoren & bijsturen", description: "Rankings worden gevolgd en teksten worden bijgestuurd" }
  ],
  comparisonData: [
    { feature: "Kosten per tekst", bureau: "€200 - €800", freelancer: "€100 - €400", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Keyword research", bureau: "Extra dienst", freelancer: "Beperkt", klikklaar: "Standaard inbegrepen" },
    { feature: "SEO-optimalisatie", bureau: "Wisselend", freelancer: "Basis", klikklaar: "Data-gedreven" },
    { feature: "AI-optimalisatie", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "Projectmatig", freelancer: "Per tekst", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Content strategie", bureau: "Extra kosten", freelancer: "Beperkt", klikklaar: "Inbegrepen" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende content contracten." },
    { icon: "PenTool", title: "Professionele kwaliteit", description: "SEO-teksten die scoren én overtuigen." },
    { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Volg per tekst hoe de rankings stijgen." }
  ],
  faqs: [
    { question: "Wat kosten SEO teksten bij een bureau?", answer: "Een bureau rekent €200-€800 per tekst, exclusief keyword research. Bij KlikKlaarSEO zitten SEO teksten inbegrepen in je abonnement vanaf €99/mnd." },
    { question: "Hoe lang zijn de SEO teksten?", answer: "De lengte hangt af van het onderwerp en de concurrentie. Gemiddeld 800-2.000 woorden, maar altijd zo lang als nodig en zo kort als mogelijk." },
    { question: "Schrijven jullie ook blogposts?", answer: "Ja, blogposts, landingspagina's, productbeschrijvingen en meer. Het type content hangt af van je content strategie en doelen." },
    { question: "Hoe snel ranken SEO teksten?", answer: "Nieuwe SEO-teksten beginnen doorgaans binnen 4-8 weken te ranken. Afhankelijk van de concurrentie kan het 2-4 maanden duren voor top-posities." },
    { question: "Worden de teksten ook op mijn website geplaatst?", answer: "Ja, bij het Pro+ pakket plaatsen wij de teksten direct op je website. Bij andere pakketten leveren we de teksten publish-ready aan." },
    { question: "Kan ik de teksten zelf aanpassen?", answer: "Ja, de teksten zijn van jou. Je kunt ze aanpassen, maar we raden aan om de SEO-elementen intact te laten voor optimaal resultaat." }
  ],
  metaTitle: "SEO Teksten Uitbesteden | Professioneel & Data-Gedreven | €99/mnd",
  metaDescription: "SEO teksten uitbesteden? Professionele teksten die scoren in Google en bezoekers omzetten in klanten. Vanaf €99/mnd bij KlikKlaarSEO."
};

const seoTekstenAbonnement: ServiceVariantData = {
  slug: "seo-teksten-abonnement",
  serviceName: "SEO Teksten",
  variant: "abonnement",
  headline: "SEO Teksten Abonnement",
  subheadline: "Elke maand nieuwe SEO-teksten die je vindbaarheid structureel vergroten",
  subtitlePoints: ["Regelmatig nieuwe content", "Keyword-gedreven", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO teksten abonnement?",
  whatIsText: [
    "Een SEO teksten abonnement levert je maandelijks nieuwe, geoptimaliseerde content. Blogposts, landingspagina's of productbeschrijvingen — allemaal geschreven rond de juiste zoekwoorden voor jouw branche.",
    "Structureel publiceren is essentieel voor SEO-groei. Google beloont websites die regelmatig relevante content toevoegen. Met een abonnement bouw je consistent aan je online autoriteit."
  ],
  benefits: [
    { icon: "PenTool", title: "Maandelijks nieuwe content", description: "Regelmatig publiceren zonder eigen werk" },
    { icon: "Search", title: "Keyword-geoptimaliseerd", description: "Elke tekst is geschreven rond zoekwoorden met potentieel" },
    { icon: "TrendingUp", title: "Structurele groei", description: "Je website groeit consistent in rankings en verkeer" },
    { icon: "Bot", title: "AI-ready", description: "Content geoptimaliseerd voor Google én AI-zoekmachines" },
    { icon: "BarChart", title: "Resultaat per tekst", description: "Volg de prestaties van elke gepubliceerde tekst" }
  ],
  processSteps: [
    { step: 1, title: "Content strategie", description: "We bepalen welke onderwerpen en zoekwoorden het meeste opleveren" },
    { step: 2, title: "Redactieplan", description: "Een maandelijks plan met onderwerpen en publicatiedatums" },
    { step: 3, title: "Teksten schrijven", description: "Professionele SEO-teksten worden geschreven volgens het plan" },
    { step: 4, title: "Publicatie & monitoring", description: "Teksten worden geplaatst en rankings worden gevolgd" }
  ],
  pricingNote: "SEO teksten abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro met meer teksten) of €249/mnd (Pro+ met content strategie).",
  faqs: [
    { question: "Hoeveel teksten krijg ik per maand?", answer: "Dit hangt af van het pakket. Basis biedt 1-2 teksten, Pro 2-4 teksten en Pro+ 4+ teksten per maand, inclusief content strategie." },
    { question: "Wat voor soort teksten schrijven jullie?", answer: "Blogposts, landingspagina's, productbeschrijvingen, FAQ-pagina's en meer. Het type hangt af van wat het meeste SEO-potentieel heeft voor jouw situatie." },
    { question: "Kan ik onderwerpen aandragen?", answer: "Ja, we combineren jouw ideeën met onze keyword research. Bij Pro+ heb je een vaste contentmanager voor nauw overleg." },
    { question: "Worden de teksten op mijn website geplaatst?", answer: "Bij Pro+ plaatsen wij de teksten direct. Bij andere pakketten leveren we ze publish-ready aan." },
    { question: "Hoe weet ik of de teksten werken?", answer: "Je ontvangt wekelijks een rapport met rankings en verkeer per gepubliceerde tekst. Zo zie je precies wat het oplevert." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar. De teksten die geschreven zijn blijven van jou." }
  ],
  metaTitle: "SEO Teksten Abonnement | Maandelijks Nieuwe Content | €99/mnd",
  metaDescription: "SEO teksten abonnement: elke maand nieuwe, geoptimaliseerde content. Structurele groei in Google. Vanaf €99/mnd, altijd opzegbaar."
};

// --- 3. Linkbuilding ---
const linkbuildingUitbesteden: ServiceVariantData = {
  slug: "linkbuilding-uitbesteden",
  serviceName: "Linkbuilding",
  variant: "uitbesteden",
  headline: "Linkbuilding Uitbesteden?",
  subheadline: "Kwalitatieve backlinks die je autoriteit versterken — veilig en duurzaam",
  subtitlePoints: ["Kwalitatieve links", "Witte-hoed strategie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is linkbuilding uitbesteden?",
  whatIsText: [
    "Linkbuilding uitbesteden betekent dat experts kwalitatieve backlinks voor je website regelen. Backlinks zijn links van andere websites naar jouw site — ze zijn een van de belangrijkste rankingfactoren van Google.",
    "Bij KlikKlaarSEO doen we aan duurzame linkbuilding. Geen spammy links of linkfarms, maar relevante, kwalitatieve links die je autoriteit structureel versterken. Veilig, transparant en meetbaar."
  ],
  benefits: [
    { icon: "Link", title: "Kwalitatieve backlinks", description: "Relevante links van betrouwbare websites" },
    { icon: "Shield", title: "Veilige strategie", description: "Witte-hoed linkbuilding zonder risico op Google penalty" },
    { icon: "TrendingUp", title: "Meer autoriteit", description: "Je Domain Authority groeit structureel" },
    { icon: "Globe", title: "Relevante bronnen", description: "Links vanuit websites in jouw branche of regio" },
    { icon: "BarChart", title: "Transparant rapport", description: "Zie precies welke links opgebouwd zijn" }
  ],
  processSteps: [
    { step: 1, title: "Link audit", description: "We analyseren je huidige linkprofiel en dat van concurrenten" },
    { step: 2, title: "Strategie bepalen", description: "We kiezen de beste linkbuilding methoden voor jouw situatie" },
    { step: 3, title: "Links opbouwen", description: "Kwalitatieve backlinks worden systematisch opgebouwd" },
    { step: 4, title: "Monitoring", description: "Je linkprofiel wordt continu gemonitord en beschermd" }
  ],
  comparisonData: [
    { feature: "Kosten per link", bureau: "€100 - €500+", freelancer: "€50 - €200", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Kwaliteit links", bureau: "Wisselend", freelancer: "Wisselend", klikklaar: "Alleen kwalitatief" },
    { feature: "Risico op penalty", bureau: "Laag-gemiddeld", freelancer: "Gemiddeld-hoog", klikklaar: "Minimaal (witte-hoed)" },
    { feature: "Transparantie", bureau: "Maandelijks overzicht", freelancer: "Beperkt", klikklaar: "Volledig transparant" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Concurrent analyse", bureau: "Eenmalig", freelancer: "Zelden", klikklaar: "Doorlopend" }
  ],
  guarantees: [
    { icon: "Shield", title: "Geen risico", description: "Alleen witte-hoed linkbuilding, geen spam." },
    { icon: "TrendingUp", title: "Meetbare groei", description: "Zie je Domain Authority stijgen." },
    { icon: "Link", title: "Kwalitatief", description: "Elke link wordt beoordeeld op relevantie en kwaliteit." }
  ],
  faqs: [
    { question: "Wat kost linkbuilding uitbesteden?", answer: "Bij een bureau betaal je €100-€500 per link. Bij KlikKlaarSEO zit linkbuilding inbegrepen in het Pro en Pro+ abonnement." },
    { question: "Is linkbuilding niet riskant?", answer: "Slechte linkbuilding wel. Wij doen aan witte-hoed linkbuilding: relevante, kwalitatieve links die Google waardeert. Geen linkfarms of spam." },
    { question: "Hoeveel links worden er per maand opgebouwd?", answer: "Het aantal hangt af van het pakket en de strategie. Kwaliteit gaat altijd boven kwantiteit — 5 goede links zijn meer waard dan 50 slechte." },
    { question: "Hoe lang duurt het voor ik resultaat zie?", answer: "Linkbuilding is een lange-termijn strategie. Eerste effecten zijn na 2-3 maanden zichtbaar, significante groei na 4-6 maanden." },
    { question: "Kan ik zien welke links er opgebouwd zijn?", answer: "Ja, volledige transparantie. Je ziet in je rapport precies welke links opgebouwd zijn, van welke websites en met welke kwaliteitsscore." },
    { question: "Wat als een link wegvalt?", answer: "We monitoren je linkprofiel continu. Als een belangrijke link wegvalt, wordt dit gesignaleerd en proberen we een vervanging te regelen." }
  ],
  metaTitle: "Linkbuilding Uitbesteden | Kwalitatieve Backlinks | €99/mnd",
  metaDescription: "Linkbuilding uitbesteden? Kwalitatieve backlinks die je autoriteit versterken. Veilige witte-hoed strategie. Vanaf €99/mnd bij KlikKlaarSEO."
};

const linkbuildingAbonnement: ServiceVariantData = {
  slug: "linkbuilding-abonnement",
  serviceName: "Linkbuilding",
  variant: "abonnement",
  headline: "Linkbuilding Abonnement",
  subheadline: "Elke maand kwalitatieve backlinks die je website sterker maken",
  subtitlePoints: ["Structurele linkgroei", "Witte-hoed strategie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een linkbuilding abonnement?",
  whatIsText: [
    "Een linkbuilding abonnement zorgt dat er maandelijks kwalitatieve backlinks naar je website opgebouwd worden. Backlinks zijn een van de belangrijkste rankingfactoren — meer en betere links betekent hogere posities in Google.",
    "Consistente linkbuilding is essentieel. Een eenmalige link-campagne verliest snel effect. Met een abonnement groeit je linkprofiel structureel en bouw je een duurzaam concurrentievoordeel op."
  ],
  benefits: [
    { icon: "Link", title: "Maandelijkse linkgroei", description: "Consistente opbouw van kwalitatieve backlinks" },
    { icon: "Shield", title: "Veilige aanpak", description: "Witte-hoed strategie, geen risico op Google penalty" },
    { icon: "TrendingUp", title: "Groeiende autoriteit", description: "Je Domain Authority stijgt maand na maand" },
    { icon: "Globe", title: "Relevante links", description: "Links vanuit websites die relevant zijn voor jouw branche" },
    { icon: "BarChart", title: "Transparant rapport", description: "Elke maand een overzicht van opgebouwde links" }
  ],
  processSteps: [
    { step: 1, title: "Linkprofiel analyse", description: "We analyseren je huidige backlinks en concurrentie" },
    { step: 2, title: "Strategie bepalen", description: "Welke linkbuilding methoden passen bij jouw branche?" },
    { step: 3, title: "Maandelijkse opbouw", description: "Kwalitatieve links worden structureel opgebouwd" },
    { step: 4, title: "Monitoring & bescherming", description: "Je linkprofiel wordt bewaakt en toxische links gesignaleerd" }
  ],
  pricingNote: "Linkbuilding abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro met meer links) of €249/mnd (Pro+ met outreach strategie).",
  faqs: [
    { question: "Wat kost een linkbuilding abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) biedt meer links per maand, Pro+ (€249/mnd) voegt outreach strategie en premium plaatsingen toe." },
    { question: "Hoeveel links per maand?", answer: "Dit varieert per pakket en branche. Focus ligt op kwaliteit: liever 3-5 sterke links dan 20 zwakke. Het exacte aantal bespreken we in het kennismakingsgesprek." },
    { question: "Welke methoden gebruiken jullie?", answer: "Digital PR, gastbloggen, broken link building, resource pages en niche-relevante directories. Alles witte-hoed en Google-veilig." },
    { question: "Is linkbuilding niet achterhaald?", answer: "Absoluut niet. Backlinks zijn nog steeds een van de top 3 rankingfactoren van Google. De methoden zijn veranderd — kwaliteit boven kwantiteit — maar het belang is onveranderd." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar. De opgebouwde links blijven uiteraard staan." },
    { question: "Monitoren jullie ook toxische links?", answer: "Ja, we bewaken je volledige linkprofiel. Toxische of spam-links worden gesignaleerd en waar nodig gedisavowed." }
  ],
  metaTitle: "Linkbuilding Abonnement | Maandelijks Kwalitatieve Links | €99/mnd",
  metaDescription: "Linkbuilding abonnement: elke maand kwalitatieve backlinks. Veilige witte-hoed strategie, transparant rapport. Vanaf €99/mnd, altijd opzegbaar."
};

// --- 4. Google Bedrijfsprofiel ---
const googleBedrijfsprofielUitbesteden: ServiceVariantData = {
  slug: "google-bedrijfsprofiel-uitbesteden",
  serviceName: "Google Bedrijfsprofiel",
  variant: "uitbesteden",
  headline: "Google Bedrijfsprofiel Uitbesteden?",
  subheadline: "Professioneel beheer van je Google Bedrijfsprofiel — meer klanten uit Google Maps",
  subtitlePoints: ["Google Maps top-3", "Review management", "Altijd opzegbaar"],
  whatIsTitle: "Wat is Google Bedrijfsprofiel uitbesteden?",
  whatIsText: [
    "Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) uitbesteden betekent dat professionals je profiel optimaliseren en onderhouden. Je bedrijfsinformatie, foto's, posts, reviews en Q&A worden professioneel beheerd.",
    "Een geoptimaliseerd Google Bedrijfsprofiel is cruciaal voor lokale vindbaarheid. Het is vaak het eerste wat potentiële klanten zien — en een goed profiel kan het verschil maken tussen jou en je concurrent."
  ],
  benefits: [
    { icon: "MapPin", title: "Google Maps top-3", description: "Verschijn in het lokale 3-pack voor jouw diensten" },
    { icon: "Star", title: "Review strategie", description: "Meer en betere reviews die nieuwe klanten overtuigen" },
    { icon: "Image", title: "Professionele content", description: "Regelmatig foto's, posts en updates op je profiel" },
    { icon: "MessageSquare", title: "Q&A beheer", description: "Vragen worden snel en professioneel beantwoord" },
    { icon: "TrendingUp", title: "Inzichtenanalyse", description: "Begrijp hoe klanten je vinden en wat ze doen" }
  ],
  processSteps: [
    { step: 1, title: "Profiel audit", description: "We analyseren je huidige profiel en dat van concurrenten" },
    { step: 2, title: "Volledige optimalisatie", description: "Alle profielonderdelen worden geoptimaliseerd" },
    { step: 3, title: "Doorlopend beheer", description: "Posts, foto's, reviews en Q&A worden continu beheerd" },
    { step: 4, title: "Groei meten", description: "We volgen je Maps-positie en klantacties" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€300 - €1.000+", freelancer: "€150 - €500", klikklaar: "€99 - €249" },
    { feature: "Profiel optimalisatie", bureau: "Eenmalig", freelancer: "Basis", klikklaar: "Continue optimalisatie" },
    { feature: "Review management", bureau: "Extra dienst", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "Posts & updates", bureau: "Extra kosten", freelancer: "Wisselend", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Na oplevering", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "MapPin", title: "Lokaal dominant", description: "Verschijn bovenaan in Google Maps." },
    { icon: "Star", title: "Betere reviews", description: "Strategie voor meer en betere reviews." }
  ],
  faqs: [
    { question: "Wat is Google Bedrijfsprofiel precies?", answer: "Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) is je gratis bedrijfsvermelding in Google. Het verschijnt in Google Maps en lokale zoekresultaten. Het is cruciaal voor lokale vindbaarheid." },
    { question: "Wat kost Google Bedrijfsprofiel beheer?", answer: "Bij een bureau €300-€1.000/mnd. Bij KlikKlaarSEO vanaf €99/mnd, inclusief review management en posts." },
    { question: "Ik heb al een profiel. Is dat voldoende?", answer: "Waarschijnlijk niet. De meeste profielen zijn onvolledig of niet geoptimaliseerd. Wij optimaliseren alle 50+ profielonderdelen voor maximale vindbaarheid." },
    { question: "Beheren jullie ook mijn reviews?", answer: "Ja, we helpen met een review strategie, reageren op reviews en signaleren negatieve reviews zodat je snel kunt reageren." },
    { question: "Werkt dit ook voor meerdere locaties?", answer: "Ja, met het Pro+ pakket beheren we meerdere locaties. Multi-locatie management bespreken we in het kennismakingsgesprek." },
    { question: "Hoe snel zie ik resultaten?", answer: "Profielverbeteringen zijn binnen 1-2 weken zichtbaar in Google Maps. Structurele verbetering in het lokale 3-pack volgt binnen 4-8 weken." }
  ],
  metaTitle: "Google Bedrijfsprofiel Uitbesteden | Maps Top-3 | €99/mnd",
  metaDescription: "Google Bedrijfsprofiel uitbesteden? Professioneel beheer, review management en Google Maps optimalisatie. Vanaf €99/mnd bij KlikKlaarSEO."
};

const googleBedrijfsprofielAbonnement: ServiceVariantData = {
  slug: "google-bedrijfsprofiel-abonnement",
  serviceName: "Google Bedrijfsprofiel",
  variant: "abonnement",
  headline: "Google Bedrijfsprofiel Abonnement",
  subheadline: "Professioneel beheer van je Google profiel — elke maand meer lokale klanten",
  subtitlePoints: ["Continue optimalisatie", "Review strategie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een Google Bedrijfsprofiel abonnement?",
  whatIsText: [
    "Een Google Bedrijfsprofiel abonnement zorgt dat je Google-vermelding continu geoptimaliseerd en onderhouden wordt. Posts, foto's, reviews, Q&A en bedrijfsinformatie worden professioneel beheerd.",
    "Een eenmalige optimalisatie is niet genoeg. Google beloont actieve profielen met betere posities. Met een abonnement blijf je zichtbaar en relevant in Google Maps."
  ],
  benefits: [
    { icon: "MapPin", title: "Betere Maps-positie", description: "Actief beheer zorgt voor hogere posities in Google Maps" },
    { icon: "Star", title: "Review management", description: "Structureel meer en betere reviews" },
    { icon: "Image", title: "Regelmatige posts", description: "Wekelijks nieuwe content op je Google profiel" },
    { icon: "MessageSquare", title: "Q&A monitoring", description: "Vragen worden snel beantwoord" },
    { icon: "BarChart", title: "Inzichtenrapport", description: "Begrijp hoe klanten je vinden via Google" }
  ],
  processSteps: [
    { step: 1, title: "Profieloptimalisatie", description: "Alle onderdelen worden volledig geoptimaliseerd" },
    { step: 2, title: "Content planning", description: "Een plan voor posts, foto's en updates" },
    { step: 3, title: "Doorlopend beheer", description: "Wekelijks wordt je profiel bijgewerkt met nieuwe content" },
    { step: 4, title: "Resultaten volgen", description: "We monitoren je Maps-positie en klantinteracties" }
  ],
  pricingNote: "Google Bedrijfsprofiel abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+ met multi-locatie).",
  faqs: [
    { question: "Wat kost een Google Bedrijfsprofiel abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket met volledige optimalisatie en beheer. Pro (€149/mnd) voegt uitgebreid review management toe, Pro+ (€249/mnd) is geschikt voor meerdere locaties." },
    { question: "Hoe vaak wordt mijn profiel bijgewerkt?", answer: "Minimaal wekelijks met nieuwe posts en content. Reviews worden dagelijks gemonitord." },
    { question: "Moet ik zelf nog iets doen?", answer: "Nee, wij beheren alles. Alleen voor reviews kan het waardevol zijn als je zelf ook reageert — we begeleiden je daarin." },
    { question: "Werkt dit voor elke branche?", answer: "Ja, Google Bedrijfsprofiel is essentieel voor elke lokale onderneming: van horeca tot dienstverleners, van retail tot zorg." },
    { question: "Kan ik meerdere locaties laten beheren?", answer: "Ja, met het Pro+ pakket of een aangepast plan. We bespreken de mogelijkheden voor jouw situatie." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." }
  ],
  metaTitle: "Google Bedrijfsprofiel Abonnement | Professioneel Beheer | €99/mnd",
  metaDescription: "Google Bedrijfsprofiel abonnement: professioneel beheer, review management en wekelijkse posts. Vanaf €99/mnd, altijd opzegbaar."
};

// --- 5. SEO Monitoring ---
const seoMonitoringUitbesteden: ServiceVariantData = {
  slug: "seo-monitoring-uitbesteden",
  serviceName: "SEO Monitoring",
  variant: "uitbesteden",
  headline: "SEO Monitoring Uitbesteden?",
  subheadline: "24/7 inzicht in je rankings, verkeer en concurrentie — zonder zelf te checken",
  subtitlePoints: ["24/7 monitoring", "Directe alerts", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO monitoring uitbesteden?",
  whatIsText: [
    "SEO monitoring uitbesteden betekent dat professionals je rankings, verkeer en technische gezondheid continu in de gaten houden. Je wordt direct gewaarschuwd bij dalingen, problemen of kansen.",
    "Bij KlikKlaarSEO monitoren we niet alleen — we handelen ook. Wanneer rankings dalen of een technisch probleem optreedt, wordt het automatisch opgepakt. Zo verlies je nooit ongemerkt posities."
  ],
  benefits: [
    { icon: "Eye", title: "24/7 ranking tracking", description: "Je posities worden continu gevolgd voor al je zoekwoorden" },
    { icon: "Bell", title: "Directe alerts", description: "Onmiddellijk gewaarschuwd bij significante veranderingen" },
    { icon: "Users", title: "Concurrentie monitoring", description: "Volg wat je concurrenten doen en hoe ze presteren" },
    { icon: "Zap", title: "Proactief handelen", description: "Problemen worden opgelost voordat ze impact hebben" },
    { icon: "BarChart", title: "Helder dashboard", description: "Alle data overzichtelijk in één dashboard" }
  ],
  processSteps: [
    { step: 1, title: "Setup", description: "We configureren monitoring voor je zoekwoorden, concurrenten en website" },
    { step: 2, title: "Baseline meting", description: "Je huidige posities en prestaties worden vastgelegd" },
    { step: 3, title: "Continue monitoring", description: "Rankings, verkeer en techniek worden 24/7 gevolgd" },
    { step: 4, title: "Rapportage & actie", description: "Wekelijkse rapporten en directe actie bij problemen" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€300 - €1.000+", freelancer: "€150 - €500", klikklaar: "€99 - €249" },
    { feature: "Monitoring frequentie", bureau: "Wekelijks/maandelijks", freelancer: "Handmatig", klikklaar: "24/7 automatisch" },
    { feature: "Concurrentie tracking", bureau: "Extra dienst", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "Automatische actie", bureau: "Nee", freelancer: "Nee", klikklaar: "Ja, bij problemen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks PDF", freelancer: "Ad hoc", klikklaar: "Wekelijks + real-time" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "Eye", title: "24/7 inzicht", description: "Altijd weten hoe je website presteert." },
    { icon: "Bell", title: "Direct gewaarschuwd", description: "Nooit meer ongemerkt rankings verliezen." }
  ],
  faqs: [
    { question: "Wat wordt er allemaal gemonitord?", answer: "Rankings voor al je zoekwoorden, organisch verkeer, technische gezondheid, Core Web Vitals, concurrentieposities en backlink profiel." },
    { question: "Hoeveel kost SEO monitoring uitbesteden?", answer: "Bij KlikKlaarSEO vanaf €99/mnd inclusief monitoring én actie. Een bureau rekent €300-€1.000/mnd voor alleen monitoring." },
    { question: "Krijg ik ook meldingen bij problemen?", answer: "Ja, je wordt direct gewaarschuwd bij significante rankingdalingen, technische problemen of opvallende concurrentiebewegingen." },
    { question: "Kan ik zelf ook de data inzien?", answer: "Ja, bij het Pro+ pakket heb je toegang tot een real-time dashboard. Bij andere pakketten ontvang je wekelijkse rapporten." },
    { question: "Monitoren jullie ook mijn concurrenten?", answer: "Ja, we volgen de rankings en activiteiten van je belangrijkste concurrenten. Zo weet je altijd waar je staat." },
    { question: "Wat gebeurt er als mijn rankings dalen?", answer: "We analyseren de oorzaak en nemen direct actie. Of het nu een algoritme-update, technisch probleem of concurrentie is — we reageren proactief." }
  ],
  metaTitle: "SEO Monitoring Uitbesteden | 24/7 Rankings & Alerts | €99/mnd",
  metaDescription: "SEO monitoring uitbesteden? 24/7 ranking tracking, concurrentie monitoring en directe alerts. Inclusief proactieve actie. Vanaf €99/mnd."
};

const seoMonitoringAbonnement: ServiceVariantData = {
  slug: "seo-monitoring-abonnement",
  serviceName: "SEO Monitoring",
  variant: "abonnement",
  headline: "SEO Monitoring Abonnement",
  subheadline: "Altijd weten hoe je website presteert in Google — met wekelijkse updates",
  subtitlePoints: ["Continue ranking tracking", "Wekelijkse rapporten", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO monitoring abonnement?",
  whatIsText: [
    "Een SEO monitoring abonnement geeft je continu inzicht in je online prestaties. Rankings, verkeer, technische gezondheid en concurrentie worden automatisch gevolgd en gerapporteerd.",
    "Zonder monitoring vlieg je blind. Je weet niet of je stijgt of daalt, wat werkt en wat niet. Met een monitoring abonnement heb je altijd een vinger aan de pols van je online vindbaarheid."
  ],
  benefits: [
    { icon: "Eye", title: "Continue tracking", description: "Rankings en verkeer worden dagelijks gevolgd" },
    { icon: "BarChart", title: "Wekelijks rapport", description: "Overzichtelijke updates over je prestaties" },
    { icon: "Users", title: "Concurrentie inzicht", description: "Weet hoe je scoort ten opzichte van concurrenten" },
    { icon: "Bell", title: "Alerts bij wijzigingen", description: "Direct bericht bij significante veranderingen" },
    { icon: "TrendingUp", title: "Trendanalyse", description: "Begrijp trends en patronen in je rankings" }
  ],
  processSteps: [
    { step: 1, title: "Configuratie", description: "We stellen monitoring in voor jouw zoekwoorden en concurrenten" },
    { step: 2, title: "Baseline vastleggen", description: "Je huidige prestaties worden als startpunt vastgelegd" },
    { step: 3, title: "Dagelijkse tracking", description: "Rankings en techniek worden continu gemonitord" },
    { step: 4, title: "Wekelijkse rapportage", description: "Elke week een helder rapport met de belangrijkste ontwikkelingen" }
  ],
  pricingNote: "SEO monitoring abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro met concurrentie tracking) of €249/mnd (Pro+ met real-time dashboard).",
  faqs: [
    { question: "Wat kost een SEO monitoring abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) voegt concurrentie tracking toe, Pro+ (€249/mnd) biedt een real-time dashboard en proactieve actie." },
    { question: "Voor hoeveel zoekwoorden wordt gemonitord?", answer: "Dit hangt af van het pakket. Basis monitort je top-zoekwoorden, Pro en Pro+ bieden uitgebreidere tracking met honderden zoekwoorden." },
    { question: "Krijg ik een dashboard?", answer: "Bij het Pro+ pakket heb je toegang tot een real-time dashboard. Bij andere pakketten ontvang je wekelijkse rapporten per e-mail." },
    { question: "Wordt er ook actie ondernomen bij problemen?", answer: "Bij het Pro+ pakket wel: problemen worden automatisch opgepakt. Bij Basis en Pro ontvang je alerts en aanbevelingen." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." },
    { question: "Monitoren jullie ook Google Search Console?", answer: "Ja, we integreren data uit Google Search Console voor diepgaandere inzichten in impressies, klikken en indexering." }
  ],
  metaTitle: "SEO Monitoring Abonnement | Rankings & Rapportage | €99/mnd",
  metaDescription: "SEO monitoring abonnement: continue ranking tracking, wekelijkse rapporten en concurrentie inzicht. Vanaf €99/mnd, altijd opzegbaar."
};

// --- 6. SEO Rapportages ---
const seoRapportagesUitbesteden: ServiceVariantData = {
  slug: "seo-rapportages-uitbesteden",
  serviceName: "SEO Rapportages",
  variant: "uitbesteden",
  headline: "SEO Rapportages Uitbesteden?",
  subheadline: "Heldere rapportages in normaal Nederlands — zonder zelf data te analyseren",
  subtitlePoints: ["Wekelijkse updates", "Normaal Nederlands", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO rapportages uitbesteden?",
  whatIsText: [
    "SEO rapportages uitbesteden betekent dat je regelmatig heldere overzichten ontvangt van je online prestaties. Rankings, verkeer, conversies en technische gezondheid — alles vertaald naar begrijpelijke inzichten en actiepunten.",
    "De meeste SEO-rapporten zijn technisch, onduidelijk en veel te lang. Bij KlikKlaarSEO krijg je beknopte rapporten in normaal Nederlands met concrete conclusies: wat gaat goed, wat kan beter en wat doen we eraan."
  ],
  benefits: [
    { icon: "FileText", title: "Helder & beknopt", description: "Rapporten in normaal Nederlands, geen technisch jargon" },
    { icon: "BarChart", title: "Wekelijkse updates", description: "Elke week een verse update, niet eens per maand" },
    { icon: "Target", title: "Actiepunten", description: "Concrete aanbevelingen bij elke rapportage" },
    { icon: "TrendingUp", title: "Trendoverzicht", description: "Begrijp de grote lijnen en langetermijn ontwikkeling" },
    { icon: "Bot", title: "AI-inzichten", description: "Inzichten over je vindbaarheid in AI-zoekmachines" }
  ],
  processSteps: [
    { step: 1, title: "Data configuratie", description: "We koppelen alle relevante databronnen" },
    { step: 2, title: "Baseline rapport", description: "Een eerste rapport met je huidige stand van zaken" },
    { step: 3, title: "Wekelijkse rapportage", description: "Elke week een helder rapport per e-mail" },
    { step: 4, title: "Kwartaaloverzicht", description: "Elk kwartaal een uitgebreid overzicht met trends en advies" }
  ],
  comparisonData: [
    { feature: "Rapportage frequentie", bureau: "Maandelijks", freelancer: "Na afronding", klikklaar: "Wekelijks" },
    { feature: "Taal & begrijpelijkheid", bureau: "Technisch/vakjargon", freelancer: "Wisselend", klikklaar: "Normaal Nederlands" },
    { feature: "Actiepunten", bureau: "Soms", freelancer: "Beperkt", klikklaar: "Altijd concreet" },
    { feature: "AI-inzichten", bureau: "Zelden", freelancer: "Nee", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "Onderdeel van contract", freelancer: "Per rapport", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Kosten", bureau: "€200-€500/rapport", freelancer: "€100-€300", klikklaar: "Inbegrepen bij abonnement" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "FileText", title: "Normaal Nederlands", description: "Geen jargon, geen onduidelijke grafieken." },
    { icon: "Clock", title: "Wekelijks vers", description: "Elke week een actueel rapport." }
  ],
  faqs: [
    { question: "Hoe vaak krijg ik een rapport?", answer: "Wekelijks een beknopt rapport en elk kwartaal een uitgebreid overzicht. Dat is vaker dan de meeste bureaus bieden (maandelijks)." },
    { question: "In welk formaat zijn de rapporten?", answer: "Je ontvangt het rapport per e-mail in een overzichtelijk format. Bij Pro+ heb je ook toegang tot een real-time dashboard." },
    { question: "Wat staat er in het rapport?", answer: "Rankings, organisch verkeer, belangrijkste verbeteringen, technische gezondheid, concurrentiepositie en concrete actiepunten. Alles in normaal Nederlands." },
    { question: "Kunnen anderen in mijn team ook het rapport ontvangen?", answer: "Ja, je kunt meerdere e-mailadressen instellen. Handig als je het rapport ook met je manager of marketingteam wilt delen." },
    { question: "Zit rapportage standaard in het abonnement?", answer: "Ja, wekelijkse rapportage zit inbegrepen bij alle pakketten. Je betaalt er niet extra voor." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO Rapportages Uitbesteden | Wekelijks & Helder | €99/mnd",
  metaDescription: "SEO rapportages uitbesteden? Wekelijkse updates in normaal Nederlands met concrete actiepunten. Inbegrepen bij abonnement. Vanaf €99/mnd."
};

const seoRapportagesAbonnement: ServiceVariantData = {
  slug: "seo-rapportages-abonnement",
  serviceName: "SEO Rapportages",
  variant: "abonnement",
  headline: "SEO Rapportages Abonnement",
  subheadline: "Wekelijks helder inzicht in je SEO-prestaties — zonder zelf te analyseren",
  subtitlePoints: ["Wekelijkse updates", "Begrijpelijk taalgebruik", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO rapportages abonnement?",
  whatIsText: [
    "Een SEO rapportages abonnement levert je wekelijks heldere overzichten van je rankings, verkeer en SEO-prestaties. Geen technische dumps maar begrijpelijke inzichten met concrete conclusies.",
    "De meeste ondernemers hebben geen tijd om zelf in Google Analytics of Search Console te duiken. Met dit abonnement krijg je de belangrijkste inzichten kant-en-klaar in je inbox."
  ],
  benefits: [
    { icon: "FileText", title: "Wekelijks rapport", description: "Elke week een actueel overzicht van je prestaties" },
    { icon: "BarChart", title: "Begrijpelijke data", description: "Vertaald naar normaal Nederlands met actiepunten" },
    { icon: "TrendingUp", title: "Trendanalyse", description: "Begrijp langetermijn trends en patronen" },
    { icon: "Users", title: "Concurrentie vergelijking", description: "Hoe scoor je ten opzichte van concurrenten" },
    { icon: "Bot", title: "AI-vindbaarheid", description: "Inzicht in je zichtbaarheid in AI-zoekmachines" }
  ],
  processSteps: [
    { step: 1, title: "Setup", description: "We koppelen je databronnen en configureren de rapportage" },
    { step: 2, title: "Baseline", description: "Een eerste rapport met je huidige startpositie" },
    { step: 3, title: "Wekelijks rapport", description: "Elke week een helder rapport in je inbox" },
    { step: 4, title: "Kwartaaloverzicht", description: "Elk kwartaal een diepgaand overzicht met aanbevelingen" }
  ],
  pricingNote: "SEO rapportages abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro met concurrentie) of €249/mnd (Pro+ met dashboard).",
  faqs: [
    { question: "Wat kost een SEO rapportages abonnement?", answer: "Vanaf €99/mnd voor wekelijkse rapportages. Pro (€149/mnd) voegt concurrentie-vergelijking toe, Pro+ (€249/mnd) biedt een real-time dashboard." },
    { question: "Hoe vaak krijg ik een rapport?", answer: "Wekelijks een beknopt rapport en elk kwartaal een uitgebreid overzicht met trends en aanbevelingen." },
    { question: "Is dit los af te nemen of zit het in het SEO abonnement?", answer: "Rapportage zit standaard inbegrepen bij alle KlikKlaarSEO abonnementen. Dit abonnement is voor wie alleen rapportage wil zonder de volledige SEO-dienst." },
    { question: "Kan ik het rapport aanpassen?", answer: "Bij het Pro+ pakket kun je de rapportage aanpassen aan je specifieke KPI's en wensen." },
    { question: "Wie kan het rapport ontvangen?", answer: "Je kunt meerdere e-mailadressen instellen. Handig voor teams of directie." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO Rapportages Abonnement | Wekelijks Helder Rapport | €99/mnd",
  metaDescription: "SEO rapportages abonnement: wekelijks helder inzicht in je rankings en verkeer. Normaal Nederlands, concrete actiepunten. Vanaf €99/mnd."
};

// --- 7. SEO voor Webshops ---
const seoWebshopsUitbesteden: ServiceVariantData = {
  slug: "seo-webshops-uitbesteden",
  serviceName: "SEO voor Webshops",
  variant: "uitbesteden",
  headline: "SEO voor Webshops Uitbesteden?",
  subheadline: "Meer organisch verkeer en omzet voor je webshop — zonder zelf te optimaliseren",
  subtitlePoints: ["Product SEO", "Categorie optimalisatie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO voor webshops uitbesteden?",
  whatIsText: [
    "SEO voor webshops uitbesteden betekent dat experts je webshop optimaliseren voor zoekmachines. Van productpagina's en categorie-structuur tot technische SEO en content — alles wordt afgestemd op e-commerce zoekgedrag.",
    "Webshop SEO is anders dan gewone SEO. Je hebt te maken met duizenden productpagina's, filtered navigation, duplicate content en structured data voor producten. Wij kennen deze uitdagingen en lossen ze op."
  ],
  benefits: [
    { icon: "ShoppingCart", title: "Product SEO", description: "Productpagina's geoptimaliseerd voor koopintentie zoektermen" },
    { icon: "FolderTree", title: "Categorie structuur", description: "Logische structuur die zoekmachines en klanten helpt" },
    { icon: "Code", title: "Product schema", description: "Rich snippets met prijs, reviews en voorraad in Google" },
    { icon: "TrendingUp", title: "Meer organisch verkeer", description: "Bezoekers die actief zoeken naar jouw producten" },
    { icon: "Wallet", title: "Hogere omzet", description: "SEO verkeer converteert beter dan betaald verkeer" }
  ],
  processSteps: [
    { step: 1, title: "Webshop audit", description: "We analyseren je webshop op technische en content SEO-kansen" },
    { step: 2, title: "Keyword mapping", description: "Zoekwoorden worden gekoppeld aan producten en categorieën" },
    { step: 3, title: "Optimalisatie", description: "Productpagina's, categorieën en techniek worden geoptimaliseerd" },
    { step: 4, title: "Groei meten", description: "Organisch verkeer en omzet worden continu gemonitord" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€800 - €3.000+", freelancer: "€400 - €1.200", klikklaar: "€99 - €249" },
    { feature: "Productpagina SEO", bureau: "Handmatig, beperkt", freelancer: "Beperkt", klikklaar: "Automatisch, schaalbaar" },
    { feature: "Product schema", bureau: "Extra dienst", freelancer: "Wisselend", klikklaar: "Inbegrepen" },
    { feature: "Technische e-commerce SEO", bureau: "Specialist nodig", freelancer: "Beperkt", klikklaar: "Automatisch" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Ad hoc", klikklaar: "Wekelijks" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende e-commerce contracten." },
    { icon: "ShoppingCart", title: "E-commerce specialist", description: "Gespecialiseerd in webshop SEO." },
    { icon: "TrendingUp", title: "Meetbare omzetgroei", description: "Volg hoe organisch verkeer je omzet verhoogt." }
  ],
  faqs: [
    { question: "Werkt dit met mijn webshop platform?", answer: "Ja, we ondersteunen Shopify, WooCommerce, Magento, Lightspeed, BigCommerce en meer. De optimalisatie past zich aan op je platform." },
    { question: "Hoeveel kost SEO voor webshops?", answer: "Bij een gespecialiseerd bureau €800-€3.000/mnd. Bij KlikKlaarSEO vanaf €99/mnd met automatische optimalisatie." },
    { question: "Optimaliseren jullie ook productpagina's?", answer: "Ja, productpagina's, categoriepagina's, filternavigatie, interne zoek en meer. We pakken de specifieke e-commerce uitdagingen aan." },
    { question: "Hoe gaan jullie om met duizenden producten?", answer: "Onze automatisering kan schaalbaar werken. We prioriteren de producten met het meeste zoekvolume en marge, en werken systematisch door je catalogus." },
    { question: "Krijg ik ook rich snippets in Google?", answer: "Ja, we implementeren Product schema markup zodat je producten met prijs, reviews en voorraadstatus in Google verschijnen." },
    { question: "Hoe snel groeit mijn organisch verkeer?", answer: "Eerste verbeteringen zijn na 4-8 weken zichtbaar. Significante verkeersgroei volgt na 2-4 maanden, afhankelijk van de concurrentie." }
  ],
  metaTitle: "SEO voor Webshops Uitbesteden | Meer Organische Omzet | €99/mnd",
  metaDescription: "SEO voor webshops uitbesteden? Product SEO, categorie optimalisatie en technische e-commerce SEO. Vanaf €99/mnd bij KlikKlaarSEO."
};

const seoWebshopsAbonnement: ServiceVariantData = {
  slug: "seo-webshops-abonnement",
  serviceName: "SEO voor Webshops",
  variant: "abonnement",
  headline: "SEO voor Webshops Abonnement",
  subheadline: "Continue SEO-optimalisatie voor je webshop — meer verkeer, meer omzet",
  subtitlePoints: ["E-commerce specialist", "Product & categorie SEO", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO voor webshops abonnement?",
  whatIsText: [
    "Een SEO voor webshops abonnement zorgt dat je webshop continu geoptimaliseerd wordt voor zoekmachines. Productpagina's, categorieën, techniek en content worden maandelijks verbeterd voor meer organisch verkeer en omzet.",
    "E-commerce SEO vereist continue aandacht. Producten veranderen, seizoenen wisselen en concurrenten slapen niet. Met een abonnement blijf je structureel zichtbaar voor kopers."
  ],
  benefits: [
    { icon: "ShoppingCart", title: "Product optimalisatie", description: "Productpagina's continu geoptimaliseerd voor koopintentie" },
    { icon: "FolderTree", title: "Categorie SEO", description: "Categoriepagina's scoren beter voor brede zoektermen" },
    { icon: "Code", title: "Rich snippets", description: "Producten met prijs en reviews in Google zoekresultaten" },
    { icon: "TrendingUp", title: "Omzetgroei", description: "Meer organisch verkeer dat converteert naar verkoop" },
    { icon: "BarChart", title: "E-commerce rapportage", description: "Wekelijks inzicht in verkeer, rankings en omzet" }
  ],
  processSteps: [
    { step: 1, title: "Webshop scan", description: "Diepgaande analyse van je webshop SEO-status" },
    { step: 2, title: "Prioriteitenplan", description: "We bepalen welke producten en categorieën als eerst worden aangepakt" },
    { step: 3, title: "Maandelijkse optimalisatie", description: "Systematische verbetering van producten, categorieën en techniek" },
    { step: 4, title: "Groei monitoren", description: "Organisch verkeer en omzet worden wekelijks gerapporteerd" }
  ],
  pricingNote: "SEO voor webshops abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+ met product feed optimalisatie).",
  faqs: [
    { question: "Wat kost een SEO voor webshops abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) biedt uitgebreidere product SEO, Pro+ (€249/mnd) voegt feed optimalisatie en conversion tracking toe." },
    { question: "Werkt dit met Shopify/WooCommerce?", answer: "Ja, we ondersteunen alle grote e-commerce platforms: Shopify, WooCommerce, Magento, Lightspeed en meer." },
    { question: "Hoeveel producten kunnen geoptimaliseerd worden?", answer: "Onze aanpak is schaalbaar. We beginnen met de producten met het meeste potentieel en werken systematisch door je catalogus." },
    { question: "Optimaliseren jullie ook voor Google Shopping?", answer: "Bij het Pro+ pakket helpen we met product feed optimalisatie voor Google Shopping. Bij Basis en Pro focussen we op organische resultaten." },
    { question: "Hoe snel zie ik meer omzet?", answer: "Eerste verkeersgroei na 4-8 weken. Significante omzetgroei na 2-4 maanden, afhankelijk van je branche en concurrentie." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO voor Webshops Abonnement | Meer Organische Omzet | €99/mnd",
  metaDescription: "SEO voor webshops abonnement: continue optimalisatie van producten en categorieën. Meer organisch verkeer en omzet. Vanaf €99/mnd."
};

// --- 8. SEO voor Dienstverleners ---
const seoDienstverleners_Uitbesteden: ServiceVariantData = {
  slug: "seo-dienstverleners-uitbesteden",
  serviceName: "SEO voor Dienstverleners",
  variant: "uitbesteden",
  headline: "SEO voor Dienstverleners Uitbesteden?",
  subheadline: "Meer klanten via Google voor je dienstverlenend bedrijf — zonder zelf te optimaliseren",
  subtitlePoints: ["Dienstverlener-specifiek", "Lokaal & landelijk", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO voor dienstverleners uitbesteden?",
  whatIsText: [
    "SEO voor dienstverleners uitbesteden betekent dat experts je vindbaarheid optimaliseren voor jouw specifieke diensten. Of je nu advocaat, accountant, coach, schilder of consultant bent — je wordt gevonden door mensen die actief zoeken naar jouw expertise.",
    "Dienstverleners hebben specifieke SEO-behoeften: lokale vindbaarheid, vertrouwen opbouwen, expertise tonen. Bij KlikKlaarSEO begrijpen we deze dynamiek en passen we de optimalisatie daarop aan."
  ],
  benefits: [
    { icon: "Briefcase", title: "Dienst-specifiek", description: "SEO afgestemd op jouw type dienstverlening" },
    { icon: "MapPin", title: "Lokaal vindbaar", description: "Gevonden worden in je werkgebied" },
    { icon: "Award", title: "Expertise tonen", description: "Je expertise en ervaring komen naar voren in Google" },
    { icon: "Users", title: "Meer leads", description: "Kwalitatieve leads van mensen die zoeken naar jouw diensten" },
    { icon: "Star", title: "Vertrouwen opbouwen", description: "Reviews en E-E-A-T signalen die potentiële klanten overtuigen" }
  ],
  processSteps: [
    { step: 1, title: "Dienstanalyse", description: "We begrijpen je diensten, doelgroep en werkgebied" },
    { step: 2, title: "Keyword strategie", description: "Zoekwoorden gericht op jouw specifieke dienstverlening" },
    { step: 3, title: "Optimalisatie", description: "Website, content en lokale SEO worden geoptimaliseerd" },
    { step: 4, title: "Lead tracking", description: "We meten hoeveel leads en aanvragen via SEO binnenkomen" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €800", klikklaar: "€99 - €249" },
    { feature: "Branche-kennis", bureau: "Wisselend", freelancer: "Beperkt", klikklaar: "Data-gedreven" },
    { feature: "Lokale SEO", bureau: "Extra dienst", freelancer: "Basis", klikklaar: "Inbegrepen" },
    { feature: "E-E-A-T optimalisatie", bureau: "Soms", freelancer: "Zelden", klikklaar: "Standaard inbegrepen" },
    { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Lead tracking", bureau: "Extra kosten", freelancer: "Nee", klikklaar: "Inbegrepen" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "Briefcase", title: "Dienstverlener-specialist", description: "We begrijpen jouw type business." },
    { icon: "TrendingUp", title: "Meetbare leads", description: "Volg hoeveel klanten via Google binnenkomen." }
  ],
  faqs: [
    { question: "Voor welke dienstverleners werkt dit?", answer: "Voor alle soorten: advocaten, accountants, coaches, consultants, schilders, loodgieters, fysiotherapeuten, trainers en meer. De aanpak wordt afgestemd op jouw branche." },
    { question: "Hoeveel kost SEO voor dienstverleners?", answer: "Bij KlikKlaarSEO vanaf €99/mnd. Een gespecialiseerd bureau rekent €500-€2.000/mnd voor vergelijkbare diensten." },
    { question: "Wordt mijn expertise ook zichtbaar in Google?", answer: "Ja, we optimaliseren voor E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Je expertise, ervaring en betrouwbaarheid worden versterkt in zoekresultaten." },
    { question: "Kan ik ook in meerdere regio's gevonden worden?", answer: "Ja, we kunnen je lokale SEO uitbreiden naar meerdere steden of regio's. Dit bespreken we in het kennismakingsgesprek." },
    { question: "Hoe snel krijg ik meer leads?", answer: "Eerste rankings stijgen na 4-8 weken. Meer leads en aanvragen volgen na 2-4 maanden, afhankelijk van je branche en regio." },
    { question: "Meten jullie ook het aantal leads?", answer: "Ja, we tracken hoeveel contactaanvragen, belafspraken en offerteaanvragen via organisch zoekverkeer binnenkomen." }
  ],
  metaTitle: "SEO voor Dienstverleners Uitbesteden | Meer Klanten | €99/mnd",
  metaDescription: "SEO voor dienstverleners uitbesteden? Word gevonden door klanten die zoeken naar jouw expertise. Vanaf €99/mnd bij KlikKlaarSEO."
};

const seoDienstverleners_Abonnement: ServiceVariantData = {
  slug: "seo-dienstverleners-abonnement",
  serviceName: "SEO voor Dienstverleners",
  variant: "abonnement",
  headline: "SEO voor Dienstverleners Abonnement",
  subheadline: "Structureel meer klanten via Google voor jouw dienstverlenend bedrijf",
  subtitlePoints: ["Branche-specifiek", "Lead generatie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO voor dienstverleners abonnement?",
  whatIsText: [
    "Een SEO voor dienstverleners abonnement zorgt dat je dienstverlenend bedrijf structureel beter gevonden wordt in Google. Je website, lokale aanwezigheid en online reputatie worden continu geoptimaliseerd.",
    "Als dienstverlener is vertrouwen essentieel. Potentiële klanten zoeken online naar betrouwbare experts. Met dit abonnement zorg je dat jij gevonden wordt en direct vertrouwen wekt."
  ],
  benefits: [
    { icon: "Briefcase", title: "Branche-optimalisatie", description: "SEO specifiek afgestemd op jouw type dienstverlening" },
    { icon: "Users", title: "Lead generatie", description: "Structureel meer kwalitatieve leads via Google" },
    { icon: "MapPin", title: "Lokale dominantie", description: "Gevonden worden in je werkgebied" },
    { icon: "Award", title: "E-E-A-T versterking", description: "Je expertise en betrouwbaarheid worden versterkt" },
    { icon: "BarChart", title: "Lead rapportage", description: "Wekelijks inzicht in leads en conversies uit SEO" }
  ],
  processSteps: [
    { step: 1, title: "Branche-analyse", description: "We analyseren je diensten, doelgroep en concurrentie" },
    { step: 2, title: "SEO-plan op maat", description: "Een strategie specifiek voor jouw type dienstverlening" },
    { step: 3, title: "Maandelijkse optimalisatie", description: "Website, content en lokale SEO worden structureel verbeterd" },
    { step: 4, title: "Lead monitoring", description: "We meten en rapporteren over leads uit organisch verkeer" }
  ],
  pricingNote: "SEO voor dienstverleners abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+ met persoonlijke begeleiding).",
  faqs: [
    { question: "Wat kost een SEO voor dienstverleners abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) biedt uitgebreidere optimalisatie, Pro+ (€249/mnd) voegt persoonlijke begeleiding toe." },
    { question: "Is dit anders dan gewone SEO?", answer: "Ja, we focussen specifiek op de behoeften van dienstverleners: lokale vindbaarheid, expertise tonen (E-E-A-T), lead generatie en vertrouwen opbouwen." },
    { question: "Voor welke branches werkt dit?", answer: "Alle dienstverlenende branches: juridisch, financieel, technisch, creatief, zorg, coaching, bouw en meer." },
    { question: "Meten jullie hoeveel klanten ik krijg via SEO?", answer: "Ja, we tracken contactformulieren, belverzoeken en offerteaanvragen die via organisch zoekverkeer binnenkomen." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten." },
    { question: "Hoe snel zie ik resultaten?", answer: "Eerste rankingverbeteringen na 4-8 weken. Structurele lead-groei na 2-4 maanden." }
  ],
  metaTitle: "SEO voor Dienstverleners Abonnement | Meer Klanten | €99/mnd",
  metaDescription: "SEO voor dienstverleners abonnement: structureel meer klanten via Google. Branche-specifiek, lead tracking inbegrepen. Vanaf €99/mnd."
};

// --- 9. SEO Migratie ---
const seoMigratieUitbesteden: ServiceVariantData = {
  slug: "seo-migratie-uitbesteden",
  serviceName: "SEO Migratie",
  variant: "uitbesteden",
  headline: "SEO Migratie Uitbesteden?",
  subheadline: "Website migratie zonder rankings te verliezen — begeleid door SEO-experts",
  subtitlePoints: ["Geen ranking verlies", "Professionele begeleiding", "Altijd opzegbaar"],
  whatIsTitle: "Wat is SEO migratie uitbesteden?",
  whatIsText: [
    "SEO migratie uitbesteden betekent dat experts je website-migratie begeleiden zodat je geen rankings en verkeer verliest. Of je nu van platform wisselt, een nieuw domein neemt of je website redesignt — elke verandering brengt SEO-risico's met zich mee.",
    "Zonder begeleiding verliezen bedrijven gemiddeld 20-40% van hun organisch verkeer bij een migratie. Bij KlikKlaarSEO zorgen we voor een naadloze overgang met behoud van je harde SEO-werk."
  ],
  benefits: [
    { icon: "ArrowRightLeft", title: "Naadloze overgang", description: "Migratie zonder verlies van rankings en verkeer" },
    { icon: "Route", title: "Redirect mapping", description: "Alle URL's correct doorgestuurd naar nieuwe locaties" },
    { icon: "ClipboardCheck", title: "Pre-launch checklist", description: "200+ controles voor en na de migratie" },
    { icon: "Shield", title: "Risico minimalisatie", description: "Potentiële problemen worden vooraf geïdentificeerd" },
    { icon: "RefreshCw", title: "Post-launch monitoring", description: "Na de migratie wordt alles gemonitord en bijgestuurd" }
  ],
  processSteps: [
    { step: 1, title: "Migratie-plan", description: "We brengen alle risico's in kaart en maken een gedetailleerd plan" },
    { step: 2, title: "Pre-launch audit", description: "De nieuwe website wordt gecontroleerd op SEO-readiness" },
    { step: 3, title: "Redirect implementatie", description: "Alle URL-redirects worden opgezet en getest" },
    { step: 4, title: "Post-launch monitoring", description: "Na go-live monitoren we rankings, verkeer en indexering" }
  ],
  comparisonData: [
    { feature: "Kosten migratie", bureau: "€2.000 - €10.000", freelancer: "€1.000 - €3.000", klikklaar: "Inbegrepen bij abonnement" },
    { feature: "Redirect mapping", bureau: "Handmatig", freelancer: "Beperkt", klikklaar: "Automatisch + handmatig" },
    { feature: "Pre-launch checks", bureau: "Basis checklist", freelancer: "Wisselend", klikklaar: "200+ controles" },
    { feature: "Post-launch monitoring", bureau: "1-2 weken", freelancer: "Beperkt", klikklaar: "3 maanden intensief" },
    { feature: "Contractduur", bureau: "Projectmatig", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "Garantie", bureau: "Geen", freelancer: "Geen", klikklaar: "Monitoring tot stabiel" }
  ],
  guarantees: [
    { icon: "Shield", title: "Ranking bescherming", description: "Minimaal ranking verlies door grondige voorbereiding." },
    { icon: "ClipboardCheck", title: "200+ controles", description: "Uitgebreide pre- en post-launch checklist." },
    { icon: "RefreshCw", title: "3 maanden monitoring", description: "Intensieve monitoring na de migratie." }
  ],
  faqs: [
    { question: "Wat is een SEO migratie precies?", answer: "Een SEO migratie is het proces van het overzetten van je website naar een nieuw platform, domein of structuur, met behoud van je zoekmachiine posities. Zonder begeleiding verlies je gemiddeld 20-40% van je verkeer." },
    { question: "Wanneer heb ik SEO migratie begeleiding nodig?", answer: "Bij platform wissel (bijv. WordPress naar Shopify), domeinwijziging, website redesign, HTTPS-migratie, URL-structuur wijziging of fusie van meerdere websites." },
    { question: "Hoeveel kost SEO migratie begeleiding?", answer: "Bij een bureau €2.000-€10.000 per project. Bij KlikKlaarSEO zit migratie begeleiding inbegrepen in je abonnement vanaf €99/mnd." },
    { question: "Hoe lang duurt de begeleiding?", answer: "De voorbereiding duurt 1-4 weken afhankelijk van de complexiteit. Na go-live monitoren we minimaal 3 maanden intensief." },
    { question: "Kan ik rankings verliezen ondanks begeleiding?", answer: "Een tijdelijke dip van 5-10% is normaal en herstelt zich binnen 2-4 weken. Zonder begeleiding is het verlies 20-40% en kan het maanden duren om te herstellen." },
    { question: "Welke platformen ondersteunen jullie?", answer: "Alle gangbare platformen: WordPress, Shopify, Wix, Squarespace, Magento, custom en meer. De aanpak past zich aan op je specifieke migratie." }
  ],
  metaTitle: "SEO Migratie Uitbesteden | Geen Ranking Verlies | €99/mnd",
  metaDescription: "SEO migratie uitbesteden? Website migratie zonder rankings te verliezen. 200+ pre- en post-launch checks. Vanaf €99/mnd bij KlikKlaarSEO."
};

const seoMigratieAbonnement: ServiceVariantData = {
  slug: "seo-migratie-abonnement",
  serviceName: "SEO Migratie",
  variant: "abonnement",
  headline: "SEO Migratie Abonnement",
  subheadline: "Professionele migratie begeleiding en monitoring — geen rankings kwijtraken",
  subtitlePoints: ["Pre- en post-launch", "Continue monitoring", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een SEO migratie abonnement?",
  whatIsText: [
    "Een SEO migratie abonnement biedt professionele begeleiding voor en na je website-migratie. Van planning en redirect mapping tot post-launch monitoring — je rankings worden beschermd.",
    "Met een abonnement ben je ook na de migratie gedekt. Post-launch problemen worden direct opgepakt en je rankings worden maanden gemonitord tot alles stabiel is."
  ],
  benefits: [
    { icon: "ArrowRightLeft", title: "Volledige begeleiding", description: "Van planning tot post-launch monitoring" },
    { icon: "Route", title: "Redirect management", description: "Alle URL's correct doorgestuurd" },
    { icon: "Shield", title: "Ranking bescherming", description: "Minimaal verlies door grondige voorbereiding" },
    { icon: "RefreshCw", title: "Post-launch support", description: "Maanden monitoring na de migratie" },
    { icon: "BarChart", title: "Herstel tracking", description: "Volg precies hoe je rankings zich herstellen" }
  ],
  processSteps: [
    { step: 1, title: "Migratie assessment", description: "We beoordelen de complexiteit en risico's van je migratie" },
    { step: 2, title: "Planning & voorbereiding", description: "Gedetailleerd plan met redirect mapping en pre-launch checks" },
    { step: 3, title: "Go-live begeleiding", description: "Ondersteuning tijdens de daadwerkelijke migratie" },
    { step: 4, title: "Post-launch monitoring", description: "Intensieve monitoring en snelle fixes na go-live" }
  ],
  pricingNote: "SEO migratie abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro met uitgebreide begeleiding) of €249/mnd (Pro+ met developer ondersteuning).",
  faqs: [
    { question: "Wat kost een SEO migratie abonnement?", answer: "Vanaf €99/mnd. Pro (€149/mnd) biedt uitgebreidere begeleiding, Pro+ (€249/mnd) voegt developer ondersteuning toe. Vergelijk met €2.000-€10.000 bij een bureau." },
    { question: "Hoe lang moet ik het abonnement aanhouden?", answer: "We raden minimaal 3 maanden aan: 1 maand voorbereiding en 2 maanden post-launch monitoring. Maar je kunt maandelijks opzeggen." },
    { question: "Kan ik na de migratie overstappen naar een ander abonnement?", answer: "Ja, na de migratie kun je overstappen naar een regulier SEO abonnement voor doorlopende optimalisatie." },
    { question: "Wat als er iets fout gaat na de migratie?", answer: "Ons monitoring systeem signaleert problemen direct. We hebben een noodplan klaar en kunnen snel ingrijpen als rankings onverwacht dalen." },
    { question: "Ondersteunen jullie ook developer werkzaamheden?", answer: "Bij het Pro+ pakket bieden we developer ondersteuning. Bij andere pakketten geven we gedetailleerde instructies voor je eigen developer." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "SEO Migratie Abonnement | Veilige Website Migratie | €99/mnd",
  metaDescription: "SEO migratie abonnement: professionele begeleiding en monitoring bij website migraties. Geen ranking verlies. Vanaf €99/mnd."
};

// --- 10. Conversie Optimalisatie ---
const conversieOptimalisatieUitbesteden: ServiceVariantData = {
  slug: "conversie-optimalisatie-uitbesteden",
  serviceName: "Conversie Optimalisatie",
  variant: "uitbesteden",
  headline: "Conversie Optimalisatie Uitbesteden?",
  subheadline: "Meer leads en klanten uit je bestaande verkeer — zonder meer te betalen voor ads",
  subtitlePoints: ["Hogere conversie", "A/B testing", "Altijd opzegbaar"],
  whatIsTitle: "Wat is conversie optimalisatie uitbesteden?",
  whatIsText: [
    "Conversie optimalisatie (CRO) uitbesteden betekent dat experts je website verbeteren zodat meer bezoekers klant worden. Je betaalt niet voor meer verkeer, maar haalt meer uit het verkeer dat je al hebt.",
    "Bij KlikKlaarSEO combineren we SEO met conversie optimalisatie. Niet alleen meer bezoekers, maar ook betere bezoekers die daadwerkelijk converteren. Zo maximaliseer je de ROI van je online aanwezigheid."
  ],
  benefits: [
    { icon: "Target", title: "Hogere conversie", description: "Meer leads en verkopen uit je bestaande verkeer" },
    { icon: "FlaskConical", title: "A/B testing", description: "Data-gedreven testen van verbeteringen" },
    { icon: "MousePointerClick", title: "UX optimalisatie", description: "Gebruiksvriendelijkheid die converteert" },
    { icon: "TrendingUp", title: "Hogere ROI", description: "Meer resultaat zonder meer uit te geven aan ads" },
    { icon: "BarChart", title: "Conversie tracking", description: "Exact weten wat werkt en wat niet" }
  ],
  processSteps: [
    { step: 1, title: "Conversie audit", description: "We analyseren je huidige conversie en identificeren bottlenecks" },
    { step: 2, title: "Hypotheses", description: "Op basis van data stellen we verbetervoorstellen op" },
    { step: 3, title: "Testing", description: "A/B tests worden opgezet om verbeteringen te valideren" },
    { step: 4, title: "Implementatie", description: "Winnende varianten worden doorgevoerd en gemonitord" }
  ],
  comparisonData: [
    { feature: "Maandelijkse kosten", bureau: "€1.000 - €5.000+", freelancer: "€500 - €1.500", klikklaar: "€99 - €249" },
    { feature: "A/B testing", bureau: "Inbegrepen", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "UX analyse", bureau: "Handmatig", freelancer: "Basis", klikklaar: "Data-gedreven" },
    { feature: "Implementatie", bureau: "Extra kosten", freelancer: "Beperkt", klikklaar: "Inbegrepen" },
    { feature: "Contractduur", bureau: "3-12 maanden", freelancer: "Per project", klikklaar: "Maandelijks opzegbaar" },
    { feature: "SEO + CRO gecombineerd", bureau: "Aparte diensten", freelancer: "Zelden", klikklaar: "Geïntegreerd" }
  ],
  guarantees: [
    { icon: "Shield", title: "Maandelijks opzegbaar", description: "Geen langlopende contracten." },
    { icon: "Target", title: "Data-gedreven", description: "Alleen veranderingen die bewezen beter werken." },
    { icon: "TrendingUp", title: "Meetbaar resultaat", description: "Exacte impact op leads en omzet." }
  ],
  faqs: [
    { question: "Wat is conversie optimalisatie?", answer: "Conversie optimalisatie (CRO) is het verbeteren van je website zodat meer bezoekers de gewenste actie ondernemen: contact opnemen, een offerte aanvragen of een aankoop doen." },
    { question: "Hoeveel kost conversie optimalisatie uitbesteden?", answer: "Een CRO bureau rekent €1.000-€5.000/mnd. Bij KlikKlaarSEO zit conversie optimalisatie geïntegreerd in je abonnement vanaf €99/mnd." },
    { question: "Hoe snel zie ik resultaat?", answer: "Eerste A/B test resultaten zijn na 2-4 weken beschikbaar. Significante conversie-verbetering volgt na 1-3 maanden van systematisch testen." },
    { question: "Is dit hetzelfde als SEO?", answer: "Nee, SEO brengt meer bezoekers. CRO zorgt dat meer bezoekers klant worden. De combinatie is het krachtigst — en bij ons geïntegreerd." },
    { question: "Hebben jullie genoeg verkeer nodig voor A/B testing?", answer: "Voor betrouwbare A/B tests is een minimum verkeersniveau nodig. Bij lager verkeer gebruiken we andere methoden zoals heuristische analyse en gebruikerstests." },
    { question: "Werkt dit voor elke website?", answer: "Ja, elke website met bezoekers kan profiteren van conversie optimalisatie. Of je nu leads, verkopen of aanmeldingen wilt verhogen." }
  ],
  metaTitle: "Conversie Optimalisatie Uitbesteden | Meer Leads | €99/mnd",
  metaDescription: "Conversie optimalisatie uitbesteden? Meer leads en klanten uit je bestaande verkeer. Data-gedreven A/B testing. Vanaf €99/mnd bij KlikKlaarSEO."
};

const conversieOptimalisatieAbonnement: ServiceVariantData = {
  slug: "conversie-optimalisatie-abonnement",
  serviceName: "Conversie Optimalisatie",
  variant: "abonnement",
  headline: "Conversie Optimalisatie Abonnement",
  subheadline: "Structureel meer leads en omzet uit je bestaande verkeer",
  subtitlePoints: ["Data-gedreven testen", "Hogere conversie", "Altijd opzegbaar"],
  whatIsTitle: "Wat is een conversie optimalisatie abonnement?",
  whatIsText: [
    "Een conversie optimalisatie abonnement zorgt dat je website structureel verbeterd wordt voor meer conversies. Elke maand worden hypotheses getest, winnende varianten doorgevoerd en resultaten gemeten.",
    "CRO is geen eenmalige actie. Gebruikersgedrag verandert, concurrenten passen hun website aan en nieuwe best practices ontstaan. Met een abonnement blijf je continu optimaliseren."
  ],
  benefits: [
    { icon: "Target", title: "Maandelijks testen", description: "Elke maand nieuwe verbeteringen testen en doorvoeren" },
    { icon: "FlaskConical", title: "A/B testing", description: "Wetenschappelijke aanpak met data als bewijs" },
    { icon: "TrendingUp", title: "Groeiende conversie", description: "Elke maand een beetje beter — dat telt snel op" },
    { icon: "MousePointerClick", title: "UX verbetering", description: "Gebruikservaring die bezoekers overtuigt" },
    { icon: "BarChart", title: "ROI rapportage", description: "Exact inzicht in de impact op leads en omzet" }
  ],
  processSteps: [
    { step: 1, title: "Conversie baseline", description: "We meten je huidige conversieratio's als startpunt" },
    { step: 2, title: "Verbeterplan", description: "We identificeren de grootste kansen voor verbetering" },
    { step: 3, title: "Test & leer", description: "Maandelijks A/B tests met duidelijke hypotheses" },
    { step: 4, title: "Implementeer & groei", description: "Winnende varianten worden doorgevoerd en resultaat wordt gemeten" }
  ],
  pricingNote: "Conversie optimalisatie abonnementen starten vanaf €99/mnd (Basis), €149/mnd (Pro) of €249/mnd (Pro+ met uitgebreide UX analyse).",
  faqs: [
    { question: "Wat kost een conversie optimalisatie abonnement?", answer: "Vanaf €99/mnd voor het Basis pakket. Pro (€149/mnd) biedt meer tests per maand, Pro+ (€249/mnd) voegt uitgebreide UX analyse en heatmaps toe." },
    { question: "Hoeveel tests worden er per maand gedaan?", answer: "Dit hangt af van het pakket en je verkeersniveau. Gemiddeld 1-2 tests bij Basis, 2-4 bij Pro en 4+ bij Pro+." },
    { question: "Moet ik veel verkeer hebben?", answer: "Voor A/B testing is een minimum verkeersniveau nuttig. Bij lager verkeer gebruiken we heuristische analyse, gebruikerstests en best practices." },
    { question: "Werkt dit ook samen met SEO?", answer: "Ja, SEO + CRO is de ideale combinatie. SEO brengt meer bezoekers, CRO zorgt dat meer bezoekers converteren. Bij ons is dit geïntegreerd." },
    { question: "Hoe meet ik de ROI?", answer: "We rapporteren exact hoeveel extra leads of omzet de conversieverbeteringen opleveren. Zo weet je precies wat het abonnement oplevert." },
    { question: "Kan ik maandelijks opzeggen?", answer: "Ja, alle pakketten zijn maandelijks opzegbaar." }
  ],
  metaTitle: "Conversie Optimalisatie Abonnement | Meer Leads & Omzet | €99/mnd",
  metaDescription: "Conversie optimalisatie abonnement: structureel meer conversies door A/B testing en UX verbetering. Vanaf €99/mnd, altijd opzegbaar."
};

// ============================================
// EXPORTS
// ============================================

export const serviceVariantsUitbestedenP3: ServiceVariantData[] = [
  contentOptimalisatieUitbesteden,
  seoTekstenUitbesteden,
  linkbuildingUitbesteden,
  googleBedrijfsprofielUitbesteden,
  seoMonitoringUitbesteden,
  seoRapportagesUitbesteden,
  seoWebshopsUitbesteden,
  seoDienstverleners_Uitbesteden,
  seoMigratieUitbesteden,
  conversieOptimalisatieUitbesteden,
];

export const serviceVariantsAbonnementP3: ServiceVariantData[] = [
  contentOptimalisatieAbonnement,
  seoTekstenAbonnement,
  linkbuildingAbonnement,
  googleBedrijfsprofielAbonnement,
  seoMonitoringAbonnement,
  seoRapportagesAbonnement,
  seoWebshopsAbonnement,
  seoDienstverleners_Abonnement,
  seoMigratieAbonnement,
  conversieOptimalisatieAbonnement,
];
