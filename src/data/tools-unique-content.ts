// Unique per-tool content for SEO indexation gate
// Each tool needs: uniqueIntro, whatThisToolChecks, uniqueFaqs (min 2), commonIssuesAndFixes

interface ToolUniqueContent {
  uniqueIntro: string;
  whatThisToolChecks: string[];
  uniqueFaqs: Array<{ question: string; answer: string }>;
  commonIssuesAndFixes?: string[];
}

export const toolUniqueContent: Record<string, ToolUniqueContent> = {
  // ═══════════════════════════════════════
  // ANALYSE (resterende 6)
  // ═══════════════════════════════════════
  "seo-audit-tool": {
    uniqueIntro: "Een SEO audit gaat verder dan een snelle check: het is een diepgaande analyse van je hele website. Deze tool beoordeelt technische gezondheid, content kwaliteit, linkstructuur en gebruikerservaring in één geïntegreerd rapport. Ideaal wanneer je wilt weten waar je écht staat en welke verbeteringen de meeste impact hebben op je Google-posities.",
    whatThisToolChecks: [
      "Technische crawlbaarheid en indexeerbaarheid van alle pagina's",
      "On-page SEO: meta tags, heading structuur, content lengte per pagina",
      "Interne linkstructuur en orphan pages (pagina's zonder links)",
      "Mobiele bruikbaarheid en responsiviteit",
      "Beveiligingsstatus (HTTPS, mixed content, verouderde protocollen)"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen een SEO audit en een SEO check?", answer: "Een SEO check scant één pagina op basisfactoren. Een SEO audit analyseert je volledige website: alle pagina's, de onderlinge structuur, technische configuratie en concurrentpositie. Het is het verschil tussen een bloeddruktest en een volledig medisch onderzoek." },
      { question: "Hoe lang duurt een volledige SEO audit?", answer: "De geautomatiseerde audit duurt 2-5 minuten afhankelijk van het aantal pagina's. Een professionele audit door KlikKlaarSEO met handmatige analyse en aanbevelingen duurt 3-5 werkdagen." }
    ],
    commonIssuesAndFixes: [
      "Veel 404 pagina's gevonden: maak 301 redirects naar relevante alternatieven",
      "Trage laadtijd op meerdere pagina's: comprimeer afbeeldingen en schakel caching in",
      "Dunne content gedetecteerd: breid pagina's uit naar minimaal 300-500 woorden",
      "Ontbrekende canonical tags: voeg self-referencing canonicals toe aan elke pagina"
    ]
  },
  "mobile-friendly-test": {
    uniqueIntro: "Meer dan 60% van alle Google-zoekopdrachten in Nederland komt van mobiele apparaten. Google gebruikt mobile-first indexing, wat betekent dat de mobiele versie van je website bepaalt hoe je rankt – ook op desktop. De Mobile Friendly Test controleert of je website voldoet aan alle mobiele eisen die Google stelt.",
    whatThisToolChecks: [
      "Viewport configuratie en responsive meta tag",
      "Tapbare elementen: minimale grootte en afstand tussen knoppen",
      "Tekstleesbaarheid zonder in te zoomen",
      "Horizontaal scrollen (mag niet voorkomen op mobiel)",
      "Content die niet zichtbaar is op mobiel (Flash, verborgen elementen)"
    ],
    uniqueFaqs: [
      { question: "Wat is mobile-first indexing?", answer: "Google gebruikt sinds 2021 standaard de mobiele versie van je website om te bepalen hoe je rankt. Als je mobiele site problemen heeft, beïnvloedt dat ook je desktop-rankings." },
      { question: "Mijn site is responsive, waarom faalt de test toch?", answer: "Responsive design is een goede basis, maar er kunnen nog steeds problemen zijn: te kleine knoppen, tekst die buiten het scherm valt, of pop-ups die de hele pagina bedekken op mobiel." }
    ],
    commonIssuesAndFixes: [
      "Viewport niet ingesteld: voeg <meta name='viewport' content='width=device-width, initial-scale=1'> toe",
      "Knoppen te dicht bij elkaar: zorg voor minimaal 48x48 pixels per tapbaar element",
      "Tekst te klein: gebruik minimaal 16px als basis lettergrootte",
      "Interstitial pop-ups blokkeren content: gebruik banners in plaats van full-screen pop-ups"
    ]
  },
  "seo-benchmark": {
    uniqueIntro: "Weten hoe je scoort is pas nuttig als je weet hoe je branchegenoten scoren. De SEO Benchmark Tool vergelijkt je website met het gemiddelde in jouw sector op factoren als snelheid, technische SEO, content en autoriteit. Zo zie je niet alleen wat er beter kan, maar ook waar je al voorloopt.",
    whatThisToolChecks: [
      "Algehele SEO-score vergeleken met branchegemiddelde",
      "Technische SEO-score ten opzichte van concurrenten",
      "Content kwaliteit en dekking versus vergelijkbare websites",
      "Domeinautoriteit in vergelijking met directe concurrenten",
      "Snelheidsprestaties versus branchenorm"
    ],
    uniqueFaqs: [
      { question: "Hoe bepaalt de tool mijn branche?", answer: "Je geeft je branche op bij de analyse. De tool vergelijkt je vervolgens met een database van websites in dezelfde sector op basis van vergelijkbare zoekwoorden en categorieën." },
      { question: "Is een branchevergelijking betrouwbaarder dan een absolute score?", answer: "Ja, want wat goed genoeg is verschilt per branche. Een score van 70 kan in de ene sector top-3 zijn, terwijl je in een competitieve sector daarmee op pagina 2 staat." }
    ]
  },
  "seo-rapport-generator": {
    uniqueIntro: "De SEO Rapport Generator maakt een professioneel, deelbaar rapport van je SEO-status. Ideaal om met je team, management of webdeveloper te delen. Het rapport bevat concrete scores, visuele grafieken en prioriteitslijsten zodat iedereen begrijpt wat er moet gebeuren – zonder zelf SEO-expert te zijn.",
    whatThisToolChecks: [
      "Samenvatting van alle SEO-scores in één overzicht",
      "Top-10 prioriteiten gerangschikt op impact",
      "Technische gezondheid met statusoverzicht per onderdeel",
      "Content analyse met woordenaantallen en zoekwoord dekking",
      "Vergelijking met vorige scan (indien beschikbaar)"
    ],
    uniqueFaqs: [
      { question: "Kan ik het rapport als PDF downloaden?", answer: "Ja, het rapport kan worden gedownload als PDF of gedeeld via een unieke link. Zo kan je webdeveloper of marketingbureau direct aan de slag met de bevindingen." },
      { question: "Hoe verschilt dit van Google Search Console?", answer: "Search Console toont ruwe data over je Google-prestaties. De SEO Rapport Generator vertaalt dit naar begrijpelijke inzichten met concrete actiepunten en prioriteiten." }
    ]
  },
  "indexatie-checker": {
    uniqueIntro: "Als Google je pagina's niet indexeert, bestaan ze niet in de zoekresultaten. De Indexatie Checker controleert welke pagina's van je website daadwerkelijk zijn opgenomen in de Google-index. Je ontdekt snel of belangrijke pagina's onvindbaar zijn – en waarom.",
    whatThisToolChecks: [
      "Totaal aantal geïndexeerde pagina's versus totaal op je site",
      "Specifieke URL's: wel of niet in de Google-index",
      "Robots.txt blokkades die indexatie verhinderen",
      "Noindex meta tags die pagina's uitsluiten",
      "Canonical tags die naar andere URL's verwijzen"
    ],
    uniqueFaqs: [
      { question: "Mijn pagina staat niet in Google, wat doe ik?", answer: "Controleer eerst of er een noindex tag, robots.txt blokkade of canonical naar een andere URL is. Dien de URL daarna handmatig in via Google Search Console onder 'URL Inspection'." },
      { question: "Hoe lang duurt het voordat Google een nieuwe pagina indexeert?", answer: "Normaal gesproken 2-14 dagen, maar het kan langer duren voor nieuwe websites. Een XML sitemap indienen en interne links toevoegen versnelt het proces." }
    ],
    commonIssuesAndFixes: [
      "Pagina geblokkeerd in robots.txt: verwijder de Disallow regel voor belangrijke pagina's",
      "Noindex tag per ongeluk toegevoegd: verwijder <meta name='robots' content='noindex'>",
      "Canonical wijst naar verkeerde URL: corrigeer de canonical tag",
      "Pagina heeft geen interne links: voeg links toe vanuit je menu of gerelateerde pagina's"
    ]
  },
  "robots-txt-checker": {
    uniqueIntro: "Je robots.txt bestand vertelt Google welke pagina's het wel en niet mag bezoeken. Een fout hierin kan ervoor zorgen dat je hele website uit Google verdwijnt. De Robots.txt Checker analyseert je bestand op fouten, blokkades en best practices zodat je zeker weet dat Google alles kan zien wat je wilt laten zien.",
    whatThisToolChecks: [
      "Syntaxfouten in het robots.txt bestand",
      "Onbedoelde blokkades van belangrijke pagina's of mappen",
      "Verwijzing naar XML sitemap in robots.txt",
      "Crawl-delay instellingen en hun impact",
      "Wildcard regels die te breed of te smal zijn"
    ],
    uniqueFaqs: [
      { question: "Kan een fout in robots.txt mijn hele website de-indexeren?", answer: "Ja, als je per ongeluk 'Disallow: /' instelt, blokkeer je je hele website voor Google. Dit is een van de meest voorkomende en schadelijke SEO-fouten." },
      { question: "Moet mijn robots.txt een sitemap verwijzing bevatten?", answer: "Het is sterk aanbevolen. Door 'Sitemap: https://jouwsite.nl/sitemap.xml' toe te voegen help je Google sneller al je pagina's te vinden." }
    ]
  },

  // ═══════════════════════════════════════
  // TECHNISCH (8)
  // ═══════════════════════════════════════
  "meta-tag-checker": {
    uniqueIntro: "Meta tags zijn de eerste indruk die Google en je bezoekers krijgen van je pagina. De Meta Tag Checker analyseert je title tags, meta descriptions, canonical tags, robots directives en Open Graph tags in één scan. Zo voorkom je ontbrekende of dubbele tags die je SEO en click-through rate ondermijnen.",
    whatThisToolChecks: [
      "Title tag: aanwezigheid, lengte (max 60 tekens) en zoekwoord positie",
      "Meta description: aanwezigheid, lengte (120-160 tekens) en call-to-action",
      "Canonical tag: aanwezig en correct verwijzend",
      "Robots meta tag: geen onbedoelde noindex of nofollow",
      "Open Graph en Twitter Card tags voor social media"
    ],
    uniqueFaqs: [
      { question: "Welke meta tags zijn het belangrijkst voor SEO?", answer: "De title tag is veruit de belangrijkste: het is een directe rankingfactor. De meta description beïnvloedt je click-through rate. Canonical tags voorkomen duplicate content problemen." },
      { question: "Moet elke pagina unieke meta tags hebben?", answer: "Absoluut. Dubbele title tags en meta descriptions zijn een van de meest voorkomende on-page SEO fouten. Elke pagina verdient een unieke, relevante titel en beschrijving." }
    ],
    commonIssuesAndFixes: [
      "Ontbrekende title tag: voeg een unieke, beschrijvende titel toe met je focus zoekwoord",
      "Meta description te lang: Google kapt af bij ~160 tekens, houd het kort en krachtig",
      "Dubbele title tags: elk pagina moet een unieke titel hebben",
      "Canonical verwijst naar 404: corrigeer naar de juiste URL"
    ]
  },
  "heading-checker": {
    uniqueIntro: "Headings geven structuur aan je pagina voor zowel bezoekers als zoekmachines. De Heading Checker analyseert de H1 t/m H6 hiërarchie van je pagina en signaleert veelvoorkomende fouten zoals ontbrekende H1's, dubbele H1's of overgeslagen niveaus die je SEO-structuur verzwakken.",
    whatThisToolChecks: [
      "Aanwezigheid van precies één H1 per pagina",
      "Correcte hiërarchie: geen overgeslagen niveaus (bijv. H1 → H3)",
      "Zoekwoordgebruik in H1 en H2 headings",
      "Lengte en leesbaarheid van heading teksten",
      "Heading nesting: logische groepering van subsecties"
    ],
    uniqueFaqs: [
      { question: "Hoeveel H1 tags mag een pagina hebben?", answer: "Technisch gezien kan het, maar best practice is precies één H1 per pagina. Meerdere H1's verwarren Google over het hoofdonderwerp van je pagina." },
      { question: "Moet mijn zoekwoord in de H1 staan?", answer: "Ja, het is een sterke best practice. Je H1 is een van de belangrijkste plekken voor je focus zoekwoord. Houd het wel natuurlijk en leesbaar." }
    ]
  },
  "canonical-checker": {
    uniqueIntro: "Canonical tags vertellen Google welke versie van een pagina de 'echte' is wanneer dezelfde content via meerdere URL's bereikbaar is. Fouten in canonical tags leiden tot duplicate content problemen, verdeling van rankingsignalen en verwarrende indexatie. De Canonical Tag Checker identificeert deze problemen snel.",
    whatThisToolChecks: [
      "Aanwezigheid van canonical tags op alle pagina's",
      "Self-referencing canonicals (best practice)",
      "Canonical loops of chains",
      "Canonicals die verwijzen naar niet-bestaande pagina's (404)",
      "Conflicten tussen canonical tag en hreflang of robots directives"
    ],
    uniqueFaqs: [
      { question: "Wat is een self-referencing canonical?", answer: "Een canonical tag die naar de pagina zelf verwijst. Dit is best practice: het bevestigt aan Google dat dit de voorkeurs-URL is, zelfs als er parameters aan de URL worden toegevoegd." },
      { question: "Kan ik canonical tags gebruiken om duplicaten tussen domeinen op te lossen?", answer: "Ja, cross-domain canonicals zijn geldig. Let op: Google behandelt het als een sterke hint, niet als een directieve. Zorg dat de content daadwerkelijk identiek is." }
    ]
  },
  "redirect-checker": {
    uniqueIntro: "Redirects zijn essentieel bij het verhuizen van content of herstructureren van je website. Maar redirect chains (A → B → C), loops en verkeerde statuscodres kosten je laadtijd, crawlbudget en linkwaarde. De Redirect Checker volgt elke stap in de redirect keten en signaleert problemen.",
    whatThisToolChecks: [
      "Redirect type: 301 (permanent) vs 302 (tijdelijk) vs 307/308",
      "Redirect chains: meer dan 1 hop in de doorverwijzing",
      "Redirect loops: oneindige doorverwijzingen",
      "Tijd per redirect hop (elke hop vertraagt je pagina)",
      "Eindbestemming statuscode (moet 200 OK zijn)"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen een 301 en 302 redirect?", answer: "Een 301 is permanent en draagt ~100% van de linkwaarde over naar de nieuwe URL. Een 302 is tijdelijk en kan ertoe leiden dat Google de oude URL blijft indexeren. Gebruik bijna altijd een 301." },
      { question: "Hoeveel redirect hops zijn acceptabel?", answer: "Maximaal 1 hop is ideaal. Google volgt tot 10 hops, maar elke extra hop vertraagt je pagina en vermindert de link equity die wordt doorgegeven." }
    ]
  },
  "hreflang-checker": {
    uniqueIntro: "Hreflang tags zijn essentieel voor websites die content in meerdere talen of voor meerdere landen aanbieden. Fouten in hreflang implementatie leiden ertoe dat Google de verkeerde taalversie toont aan je bezoekers. De Hreflang Checker valideert je implementatie en vindt veelgemaakte fouten.",
    whatThisToolChecks: [
      "Correcte ISO 639-1 taalcodes en ISO 3166-1 landcodes",
      "Retour-links: elke hreflang verwijzing moet bidirectioneel zijn",
      "x-default tag aanwezigheid voor fallback versie",
      "Conflicten met canonical tags",
      "Consistentie tussen HTML tags, HTTP headers en sitemap hreflang"
    ],
    uniqueFaqs: [
      { question: "Heb ik hreflang nodig als ik alleen een Nederlandse website heb?", answer: "Nee, hreflang is alleen nodig als je dezelfde content in meerdere talen of voor meerdere landen aanbiedt. Een puur Nederlandse website heeft geen hreflang nodig." },
      { question: "Wat is de x-default tag?", answer: "De x-default hreflang tag geeft aan welke pagina Google moet tonen wanneer geen van de specifieke taal/land-versies past bij de gebruiker. Het is je fallback pagina." }
    ]
  },
  "sitemap-checker": {
    uniqueIntro: "Je XML sitemap is de routekaart die Google gebruikt om al je pagina's te ontdekken. Een sitemap met fouten, ontbrekende pagina's of incorrecte prioriteiten kan ertoe leiden dat Google belangrijke content mist. De Sitemap Checker valideert de structuur en volledigheid van je sitemap.",
    whatThisToolChecks: [
      "XML syntax en validiteit volgens het sitemap protocol",
      "Aantal URL's versus het maximum van 50.000 per sitemap",
      "Lastmod datums: aanwezig en correct",
      "URL's die verwijzen naar redirects, 404's of noindex pagina's",
      "Bestandsgrootte (max 50MB ongecomprimeerd)"
    ],
    uniqueFaqs: [
      { question: "Is een sitemap verplicht voor SEO?", answer: "Niet verplicht, maar sterk aanbevolen, vooral voor websites met meer dan 50 pagina's, nieuwe websites, of sites met pagina's die weinig interne links hebben." },
      { question: "Moeten alle pagina's in mijn sitemap staan?", answer: "Nee, alleen pagina's die je wilt laten indexeren. Sluit noindex pagina's, redirects, duplicate versies en onbelangrijke pagina's uit." }
    ]
  },
  "ssl-checker": {
    uniqueIntro: "HTTPS is sinds 2014 een Google rankingfactor en een verouderd of foutief SSL-certificaat schrikt bezoekers af met browserwaarschuwingen. De SSL Checker verifieert dat je certificaat correct is geïnstalleerd, niet verlopen is en de hele site dekt – inclusief alle subdomeinen.",
    whatThisToolChecks: [
      "Certificaat geldigheid en vervaldatum",
      "Correcte installatie op de server (chain of trust)",
      "TLS versie (TLS 1.2 of hoger vereist)",
      "Certificate Authority betrouwbaarheid",
      "Mixed content: HTTP resources op HTTPS pagina's"
    ],
    uniqueFaqs: [
      { question: "Is SSL echt een rankingfactor?", answer: "Ja, Google heeft HTTPS bevestigd als rankingsignaal. Het is een lichte factor, maar bij gelijke pagina's krijgt de HTTPS-versie voorrang." },
      { question: "Is een gratis Let's Encrypt certificaat goed genoeg voor SEO?", answer: "Ja, voor SEO maakt het type certificaat niet uit. Google onderscheidt niet tussen gratis (Let's Encrypt) en betaalde certificaten. Alle HTTPS is gelijk." }
    ]
  },
  "http-header-checker": {
    uniqueIntro: "HTTP headers beïnvloeden hoe Google je pagina's crawlt, cachet en indexeert. Van cache-control tot X-Robots-Tag – deze onzichtbare instructies kunnen je SEO maken of breken. De HTTP Header Checker toont alle response headers en signaleert SEO-relevante problemen.",
    whatThisToolChecks: [
      "X-Robots-Tag: onbedoelde noindex in headers",
      "Cache-Control en Expires headers voor browser caching",
      "Content-Type en charset configuratie",
      "Security headers (HSTS, X-Frame-Options, CSP)",
      "Server response tijd en statuscode"
    ],
    uniqueFaqs: [
      { question: "Wat is de X-Robots-Tag?", answer: "Een HTTP header die dezelfde functie heeft als de robots meta tag, maar dan op serverniveau. Handig voor PDF's en afbeeldingen die geen HTML head-sectie hebben." },
      { question: "Welke headers zijn het belangrijkst voor SEO?", answer: "De statuscode (200, 301, 404), X-Robots-Tag, canonical link header en cache-control zijn de meest SEO-relevante headers." }
    ]
  },

  // ═══════════════════════════════════════
  // CONTENT (8)
  // ═══════════════════════════════════════
  "keyword-density-checker": {
    uniqueIntro: "Zoekwoorddichtheid is het percentage dat een zoekwoord voorkomt in je tekst ten opzichte van het totaal aantal woorden. Te weinig en Google begrijpt je onderwerp niet; te veel en het wordt als keyword stuffing beschouwd. De Keyword Density Checker helpt je de balans te vinden.",
    whatThisToolChecks: [
      "Frequentie van je focus zoekwoord in de tekst",
      "Zoekwoorddichtheid als percentage van het totaal",
      "Variaties en synoniemen van je zoekwoord",
      "Keyword stuffing risico (boven 2-3%)",
      "Verdeling van het zoekwoord door de tekst"
    ],
    uniqueFaqs: [
      { question: "Wat is de ideale zoekwoorddichtheid?", answer: "Er is geen exact getal. Richt op 1-2% voor je focus zoekwoord en gebruik synoniemen en gerelateerde termen. Leesbaarheid gaat altijd voor." },
      { question: "Straft Google keyword stuffing?", answer: "Ja, overmatig zoekwoordgebruik dat de leesbaarheid schaadt kan leiden tot lagere rankings. Google noemt dit 'keyword stuffing' en het is een overtreding van hun spambeleid." }
    ]
  },
  "leesbaarheid-checker": {
    uniqueIntro: "Google wil dat zoekresultaten gebruikers helpen. Als je tekst moeilijk leesbaar is, haken bezoekers af en stijgt je bounce rate – een negatief signaal. De Leesbaarheid Checker analyseert je tekst op zinslengte, woordcomplexiteit en structuur, en geeft je een Flesch-score specifiek voor Nederlands.",
    whatThisToolChecks: [
      "Flesch-Douma leesbaarheidsscore voor Nederlandse tekst",
      "Gemiddelde zinslengte (ideaal: 15-20 woorden)",
      "Percentage passieve zinnen (max 10-15%)",
      "Moeilijke woorden en jargon",
      "Alinealengte en witregel gebruik"
    ],
    uniqueFaqs: [
      { question: "Welke Flesch-score is goed voor webpagina's?", answer: "Voor de meeste websites is een score tussen 60-70 ideaal (begrijpelijk voor 12-15 jarigen). Financiële of medische content mag iets lager scoren, blogs liefst hoger." },
      { question: "Is leesbaarheid een directe rankingfactor?", answer: "Niet direct, maar indirect wel. Slechte leesbaarheid leidt tot hogere bounce rates en kortere sessietijden, wat Google interpreteert als een slecht gebruikerssignaal." }
    ]
  },
  "woordenteller": {
    uniqueIntro: "Content lengte is geen directe rankingfactor, maar langere content rankt statistisch gezien beter omdat het meer zoekwoorden dekt en dieper op een onderwerp ingaat. De Woordenteller geeft je naast het woordaantal ook inzicht in zinnen, alinea's en leestijd – handig om je content af te stemmen op concurrenten.",
    whatThisToolChecks: [
      "Totaal aantal woorden, tekens en zinnen",
      "Aantal alinea's en gemiddelde alinealengte",
      "Geschatte leestijd (gebaseerd op 250 woorden/minuut)",
      "Vergelijking met aanbevolen content lengte per type pagina",
      "Top-10 meest gebruikte woorden en zinnen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel woorden moet een blogpost minimaal hebben?", answer: "Er is geen magisch getal, maar onderzoek toont dat de gemiddelde #1 positie in Google 1.400-1.900 woorden heeft. Kwaliteit gaat echter altijd boven kwantiteit." },
      { question: "Telt Google het aantal woorden op mijn pagina?", answer: "Niet letterlijk als rankingfactor. Google kijkt of je content het onderwerp volledig dekt. Langere content doet dit vaker, maar dunne content die wél alles dekt kan ook goed ranken." }
    ]
  },
  "plagiaatchecker": {
    uniqueIntro: "Duplicate content – of het nu opzettelijk of onbedoeld is – kan je SEO ernstig schaden. Google filtert duplicaten uit de zoekresultaten, en als jouw versie niet als origineel wordt gezien, verdwijnt je pagina. De Plagiaat Checker vergelijkt je tekst met miljoenen webpagina's om uniekheid te garanderen.",
    whatThisToolChecks: [
      "Percentage unieke vs gekopieerde content",
      "Exacte overeenkomsten met bestaande webpagina's",
      "Parafrase-detectie: herschreven maar te vergelijkbare content",
      "Bronnen van gevonden overeenkomsten (URLs)",
      "Per-alinea overzicht van originaliteitsscore"
    ],
    uniqueFaqs: [
      { question: "Hoeveel duplicate content is acceptabel?", answer: "Richt op minimaal 85-90% unieke content per pagina. Korte citaten met bronvermelding zijn prima, maar grote blokken gekopieerde tekst schaden je rankings." },
      { question: "Kan mijn eigen content als plagiaat worden gezien?", answer: "Ja, als dezelfde tekst op meerdere pagina's van je eigen website staat (interne duplicatie) of als je tekst op een andere site verschijnt die eerder geïndexeerd is." }
    ]
  },
  "meta-description-generator": {
    uniqueIntro: "Je meta description is je gratis advertentie in Google: het bepaalt of iemand op jouw resultaat klikt of op dat van je concurrent. De Meta Description Generator maakt pakkende beschrijvingen van maximaal 160 tekens die je zoekwoord bevatten, een call-to-action hebben en klikken genereren.",
    whatThisToolChecks: [
      "Lengte: binnen de 120-160 tekens limiet",
      "Zoekwoord opname in de beschrijving",
      "Aanwezigheid van een call-to-action",
      "Uniciteit: niet identiek aan andere pagina's",
      "Emotionele trigger of USP in de beschrijving"
    ],
    uniqueFaqs: [
      { question: "Is de meta description een rankingfactor?", answer: "Nee, niet direct. Google gebruikt de meta description niet als rankingsignaal. Maar een goede meta description verhoogt je CTR, wat indirect je rankings kan verbeteren." },
      { question: "Waarom toont Google soms een andere beschrijving?", answer: "Google kiest bij 60-70% van de zoekopdrachten zelf een fragment uit je pagina als dat beter past bij de zoekvraag. Een goede meta description wordt vaker overgenomen." }
    ]
  },
  "title-tag-generator": {
    uniqueIntro: "De title tag is de #1 on-page rankingfactor in SEO. Het is wat Google als blauwe link toont en wat browsertabs laten zien. De Title Tag Generator helpt je titels te maken die zoekwoord-geoptimaliseerd zijn, onder de 60 tekens blijven en klikken uitlokken met power words en emotionele triggers.",
    whatThisToolChecks: [
      "Lengte: binnen het 60-tekens maximum (580 pixels)",
      "Zoekwoord positie: liefst aan het begin van de titel",
      "Merknaam opname (optioneel, aan het einde)",
      "Power words die CTR verhogen (gratis, beste, gids, etc.)",
      "Uniciteit ten opzichte van andere pagina's op je site"
    ],
    uniqueFaqs: [
      { question: "Waar moet mijn zoekwoord in de title tag staan?", answer: "Zo vroeg mogelijk, bij voorkeur als eerste woord(en). Titels die beginnen met het zoekwoord presteren gemiddeld beter dan titels die het zoekwoord aan het einde plaatsen." },
      { question: "Moet ik mijn merknaam in elke title tag zetten?", answer: "Het is best practice om je merknaam toe te voegen met een scheidingsteken (| of -), maar alleen als er ruimte is. Het zoekwoord en paginaonderwerp gaan altijd voor." }
    ]
  },
  "content-gap-analyse": {
    uniqueIntro: "Je concurrenten schrijven over onderwerpen die jij mist – en Google beloont websites met volledige topic coverage. De Content Gap Analyse vergelijkt jouw content met die van je concurrenten en toont precies welke onderwerpen, zoekwoorden en vragen je nog niet behandelt.",
    whatThisToolChecks: [
      "Zoekwoorden waarop concurrenten ranken maar jij niet",
      "Onderwerpen die concurrenten dekken en jij mist",
      "Vragen uit 'Mensen vragen ook' die je niet beantwoordt",
      "Content types die je mist (video, infographics, tools)",
      "Subtopics waar je content te dun is vergeleken met concurrenten"
    ],
    uniqueFaqs: [
      { question: "Hoeveel concurrenten moet ik vergelijken?", answer: "3-5 directe concurrenten geeft het beste beeld. Kies websites die op je belangrijkste zoekwoorden in de top-10 staan." },
      { question: "Moet ik alle content gaps vullen?", answer: "Nee, prioriteer op basis van zoekvolume, relevantie voor je business en concurrentieniveau. Begin met de gaps die het meeste verkeer en conversies kunnen opleveren." }
    ]
  },
  "alt-tekst-checker": {
    uniqueIntro: "Alt teksten maken je afbeeldingen vindbaar in Google Afbeeldingen en verbeteren de toegankelijkheid voor slechtziende bezoekers. Toch ontbreken alt teksten op gemiddeld 40% van alle afbeeldingen op MKB-websites. De Alt Tekst Checker scant je pagina en toont precies welke afbeeldingen een alt tekst missen of een slechte hebben.",
    whatThisToolChecks: [
      "Afbeeldingen zonder alt attribuut",
      "Lege alt teksten (alt='')",
      "Te korte alt teksten (minder dan 5 woorden)",
      "Keyword-stuffed alt teksten (spam risico)",
      "Decoratieve afbeeldingen die alt='' zouden moeten hebben"
    ],
    uniqueFaqs: [
      { question: "Hoe schrijf ik een goede alt tekst?", answer: "Beschrijf wat je ziet op de afbeelding in 5-15 woorden. Gebruik je zoekwoord alleen als het relevant is. Vermijd 'afbeelding van' of 'foto van' – dat is overbodig." },
      { question: "Moet elke afbeelding een alt tekst hebben?", answer: "Functionele en informatieve afbeeldingen: ja, altijd. Puur decoratieve afbeeldingen (lijntjes, achtergronden) krijgen een lege alt (alt='') zodat screenreaders ze overslaan." }
    ]
  },

  // ═══════════════════════════════════════
  // LINKBUILDING (7)
  // ═══════════════════════════════════════
  "backlink-checker": {
    uniqueIntro: "Backlinks zijn stemmen van vertrouwen van andere websites naar de jouwe. De kwaliteit en kwantiteit van je backlinks zijn een van de top-3 rankingfactoren in Google. De Backlink Checker toont je complete linkprofiel: waar je links vandaan komen, hoe sterk ze zijn en waar je kansen liggen.",
    whatThisToolChecks: [
      "Totaal aantal backlinks en verwijzende domeinen",
      "Domeinautoriteit van linkende websites",
      "Anchor text distributie (gevarieerd vs over-geoptimaliseerd)",
      "Dofollow vs nofollow verhouding",
      "Nieuwe en verloren backlinks in de laatste 30 dagen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel backlinks heb ik nodig om te ranken?", answer: "Het gaat niet om het aantal maar om de kwaliteit. Eén link van een autoriteitssite (DA 70+) kan meer waard zijn dan 100 links van zwakke websites. Vergelijk je linkprofiel met de top-3 voor je zoekwoorden." },
      { question: "Zijn nofollow links waardeloos?", answer: "Nee, Google beschouwt nofollow tegenwoordig als 'hint' en kan ze toch meetellen. Bovendien leveren ze referral traffic en merkbekendheid op. Een natuurlijk linkprofiel bevat altijd nofollow links." }
    ]
  },
  "broken-link-checker": {
    uniqueIntro: "Kapotte links frustreren je bezoekers en verspillen crawlbudget dat Google beter aan je werkende pagina's kan besteden. Bovendien lekt linkwaarde weg via dode links. De Broken Link Checker scant al je interne en uitgaande links en meldt welke niet meer werken – inclusief de pagina waar ze staan.",
    whatThisToolChecks: [
      "Interne links die naar 404 pagina's verwijzen",
      "Uitgaande links naar niet-bestaande externe pagina's",
      "Links die resulteren in server errors (5xx)",
      "Links naar redirected URL's (inefficiënt, maar niet broken)",
      "Afbeeldingen en resources die niet meer laden"
    ],
    uniqueFaqs: [
      { question: "Hoe erg zijn broken links voor mijn SEO?", answer: "Een paar broken links is normaal. Maar als 5%+ van je links niet werkt, kan het je crawlbudget verspillen en een signaal zijn van een slecht onderhouden website. Fix ze prioritair." },
      { question: "Moet ik ook broken uitgaande links fixen?", answer: "Ja. Google ziet uitgaande broken links als een kwaliteitssignaal. Bovendien is het een slechte gebruikerservaring. Verwijder de link of vervang met een werkend alternatief." }
    ]
  },
  "domain-authority-checker": {
    uniqueIntro: "Domain Authority (DA) is een metriek die de 'sterkte' van je domein inschat op een schaal van 0-100. Hoewel het geen officiële Google-metriek is, correleert DA sterk met rankings. De Domain Authority Checker toont je huidige score en vergelijkt met concurrenten zodat je weet waar je staat.",
    whatThisToolChecks: [
      "Domain Authority score (0-100)",
      "Page Authority van specifieke URL's",
      "Vergelijking met ingevoerde concurrenten",
      "Aantal verwijzende domeinen als basis voor DA",
      "Historische DA-ontwikkeling (stijgend of dalend)"
    ],
    uniqueFaqs: [
      { question: "Wat is een goede Domain Authority?", answer: "DA is relatief aan je niche. Voor een lokale MKB-website is DA 20-30 normaal. Nationale websites mikken op 40-60. Grote merken scoren 70+. Vergelijk altijd met je directe concurrenten." },
      { question: "Hoe verhoog ik mijn Domain Authority?", answer: "Door kwalitatieve backlinks te krijgen van relevante websites met een hogere DA. Focus op waardevolle content die mensen willen delen en actief linkbuilding via gastblogs en PR." }
    ]
  },
  "anchor-text-analyse": {
    uniqueIntro: "De anchor text van je backlinks vertelt Google waar je pagina over gaat. Een onnatuurlijke anchor text distributie – zoals 90% exact-match zoekwoorden – kan een penalty triggeren. De Anchor Text Analyse toont de verdeling van je anchors en waarschuwt bij over-optimalisatie.",
    whatThisToolChecks: [
      "Verdeling van anchor text types (branded, exact, partial, generic)",
      "Percentage exact-match anchors (risico bij >5-10%)",
      "Branded anchors ratio (gezonde indicator)",
      "Naked URL anchors en 'klik hier' generieke anchors",
      "Anchor text diversiteit per landingspagina"
    ],
    uniqueFaqs: [
      { question: "Wat is een gezonde anchor text verdeling?", answer: "Richt op: 30-40% branded, 20-30% naked URL, 10-15% partial match, 5-10% exact match, en de rest generic. Een te hoog percentage exact-match anchors is het grootste risico." },
      { question: "Kan ik de anchor text van mijn backlinks beïnvloeden?", answer: "Bij actieve linkbuilding (gastblogs, PR) kun je de anchor text kiezen. Bij organische links heb je minder controle. Varieer bewust bij links die je zelf kunt bepalen." }
    ]
  },
  "link-intersect-tool": {
    uniqueIntro: "Als een website linkt naar twee van je concurrenten maar niet naar jou, is de kans groot dat ze ook naar jou willen linken – mits je waardevolle content hebt. De Link Intersect Tool vindt precies deze kansen door linkprofielen van meerdere concurrenten te vergelijken met dat van jou.",
    whatThisToolChecks: [
      "Websites die naar 2+ concurrenten linken maar niet naar jou",
      "Domeinautoriteit van de gevonden intersect-sites",
      "Type pagina's dat naar concurrenten linkt (resource pages, blogs, directories)",
      "Anchor teksten gebruikt in links naar concurrenten",
      "Aantal gemiste link opportunities per concurrent"
    ],
    uniqueFaqs: [
      { question: "Hoeveel concurrenten moet ik vergelijken?", answer: "2-4 directe concurrenten geeft de beste intersecties. Meer concurrenten verkleint de intersect maar verhoogt de relevantie van gevonden kansen." },
      { question: "Hoe benader ik gevonden link opportunities?", answer: "Stuur een persoonlijke e-mail. Verwijs naar hun bestaande links naar concurrenten, toon waarom jouw content waardevol is, en maak het makkelijk om te linken." }
    ]
  },
  "toxic-link-checker": {
    uniqueIntro: "Niet alle backlinks zijn positief. Spammy, irrelevante of gemanipuleerde links kunnen je rankings schaden, vooral na een Google Penguin update. De Toxic Link Checker analyseert elk van je backlinks op risico-indicatoren en helpt je beslissen welke links je moet disavowen via Google Search Console.",
    whatThisToolChecks: [
      "Spam score van linkende domeinen",
      "Links van niet-gerelateerde of vreemde niches",
      "Links van bekende linkfarms en PBN's",
      "Anchor text spam patronen",
      "Plotselinge pieken in link acquisitie (onnatuurlijk patroon)"
    ],
    uniqueFaqs: [
      { question: "Moet ik toxische links altijd disavowen?", answer: "Niet altijd. Google negeert de meeste slechte links automatisch. Disavow alleen als je een manuele actie hebt ontvangen of als het om grote aantallen duidelijk spammy links gaat." },
      { question: "Hoe dien ik een disavow bestand in?", answer: "Via Google Search Console onder het Disavow Links Tool. Upload een .txt bestand met de domeinen of URL's die je wilt negeren. Gebruik het format 'domain:spamsite.com'." }
    ]
  },
  "interne-link-checker": {
    uniqueIntro: "Interne links verdelen rankingkracht over je pagina's en helpen Google je sitestructuur te begrijpen. Pagina's zonder interne links (orphan pages) worden vaak slecht geïndexeerd. De Interne Link Checker analyseert je volledige linkstructuur en toont welke pagina's te weinig of te veel interne links hebben.",
    whatThisToolChecks: [
      "Orphan pages: pagina's zonder enkele interne link",
      "Link distributie: welke pagina's krijgen de meeste interne links",
      "Klik-diepte: hoeveel klikken tot elke pagina (max 3 ideaal)",
      "Anchor text gebruik in interne links",
      "Broken interne links die naar 404's verwijzen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel interne links moet een pagina hebben?", answer: "Er is geen maximum, maar zorg voor minimaal 2-3 relevante interne links per pagina. Je homepage en categoriepagina's mogen veel meer links hebben dan individuele artikelen." },
      { question: "Zijn te veel interne links schadelijk?", answer: "Google zegt dat ze 'een redelijk aantal' links aankunnen per pagina. In de praktijk is tot 100-150 links per pagina geen probleem. Focus op relevantie, niet op aantal." }
    ]
  },

  // ═══════════════════════════════════════
  // LOKAAL (7)
  // ═══════════════════════════════════════
  "google-bedrijfsprofiel-checker": {
    uniqueIntro: "Je Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) is dé sleutel tot lokale vindbaarheid. Het bepaalt of je verschijnt in het local pack – de drie bedrijven die Google toont boven de organische resultaten. De Checker analyseert of je profiel compleet, geoptimaliseerd en concurrerend is.",
    whatThisToolChecks: [
      "Volledigheid van bedrijfsinformatie (naam, adres, telefoon, website)",
      "Openingstijden correctheid en actualiteit",
      "Categorie-keuze: hoofd- en subcategorieën",
      "Foto's: aantal, kwaliteit en typen (exterieur, interieur, team)",
      "Reviews: aantal, gemiddelde score en reactiesnelheid"
    ],
    uniqueFaqs: [
      { question: "Hoe belangrijk is mijn Google Bedrijfsprofiel voor lokale SEO?", answer: "Cruciaal. Het Google Bedrijfsprofiel is de #1 rankingfactor voor het local pack (de kaartresultaten). Zonder geoptimaliseerd profiel mis je 40-60% van je potentiële lokale klanten." },
      { question: "Hoe vaak moet ik mijn profiel updaten?", answer: "Minimaal maandelijks: plaats een Google Post, voeg foto's toe en reageer op reviews. Google beloont actieve profielen met betere zichtbaarheid." }
    ]
  },
  "lokale-ranking-checker": {
    uniqueIntro: "Lokale zoekresultaten variëren per locatie: iemand die zoekt vanuit Amsterdam ziet andere resultaten dan iemand in Rotterdam. De Lokale Ranking Checker toont je exacte positie voor een zoekwoord op een specifieke locatie, zodat je weet hoe zichtbaar je bent voor klanten in jouw regio.",
    whatThisToolChecks: [
      "Organische positie voor zoekwoord + stad combinatie",
      "Local pack positie (top-3 kaartresultaten)",
      "Positie per apparaat (desktop vs mobiel)",
      "Vergelijking met landelijke ranking",
      "Positie ten opzichte van lokale concurrenten"
    ],
    uniqueFaqs: [
      { question: "Waarom verschilt mijn lokale ranking per locatie?", answer: "Google personaliseert resultaten op basis van de locatie van de zoeker. Een loodgieter in Amsterdam rankt hoger voor mensen in Amsterdam dan voor mensen in Utrecht – dat is hoe lokale SEO werkt." },
      { question: "Hoe verbeter ik mijn lokale ranking?", answer: "Optimaliseer je Google Bedrijfsprofiel, zorg voor consistente NAP-gegevens, verzamel reviews en maak content specifiek voor je stad of regio." }
    ]
  },
  "nap-checker": {
    uniqueIntro: "NAP staat voor Naam, Adres en Telefoonnummer. Consistente NAP-gegevens op alle online platforms is een essentiële lokale SEO-factor. Inconsistenties – zelfs kleine verschillen zoals 'Straat' vs 'Str.' – verwarren Google en verlagen je lokale rankings.",
    whatThisToolChecks: [
      "NAP-consistentie tussen je website en Google Bedrijfsprofiel",
      "Vermeldingen op grote directories (Yelp, Gouden Gids, Detelefoongids)",
      "Verschillen in bedrijfsnaam, adresnotatie of telefoonnummer",
      "Verouderde adressen of telefoonnummers",
      "Duplicaat vermeldingen op dezelfde platforms"
    ],
    uniqueFaqs: [
      { question: "Hoe belangrijk is NAP-consistentie echt?", answer: "Zeer belangrijk. NAP-consistentie is een van de top-5 lokale SEO-factoren. Google gebruikt citaties van meerdere bronnen om je bedrijfsgegevens te verifiëren. Inconsistenties verminderen dat vertrouwen." },
      { question: "Moet ik alle vermeldingen handmatig updaten?", answer: "De belangrijkste (Google, Facebook, branche-directories) kun je zelf doen. Voor tientallen directories tegelijk kan KlikKlaarSEO dit automatiseren als onderdeel van je lokale SEO-pakket." }
    ]
  },
  "review-checker": {
    uniqueIntro: "Online reviews beïnvloeden zowel je rankings als je conversie. Google gebruikt review-signalen als lokale rankingfactor, en 88% van de consumenten vertrouwt online reviews evenveel als persoonlijke aanbevelingen. De Review Checker analyseert je Google reviews op trends, sentiment en verbeterkansen.",
    whatThisToolChecks: [
      "Totaal aantal reviews en gemiddelde score",
      "Sentiment analyse: positieve vs negatieve thema's",
      "Review frequentie: hoe vaak krijg je nieuwe reviews",
      "Reactie ratio: hoeveel reviews heb je beantwoord",
      "Vergelijking met review profiel van concurrenten"
    ],
    uniqueFaqs: [
      { question: "Hoeveel Google reviews heb ik nodig?", answer: "Meer is beter, maar kwaliteit telt ook. Richt op minimaal 10-20 reviews om geloofwaardig te zijn. De top-3 in het local pack heeft gemiddeld 40+ reviews." },
      { question: "Moet ik reageren op negatieve reviews?", answer: "Altijd. Professioneel en constructief reageren op negatieve reviews toont potentiële klanten dat je om service geeft. Google beloont ook actieve profielen die reageren." }
    ]
  },
  "lokale-concurrentie-analyse": {
    uniqueIntro: "In lokale SEO concurreer je niet met het hele internet, maar met bedrijven in jouw stad en branche. De Lokale Concurrentie Analyse vergelijkt je profiel, reviews, citaties en lokale content direct met je buren, zodat je weet waar je moet investeren om het local pack te winnen.",
    whatThisToolChecks: [
      "Google Bedrijfsprofiel volledigheid vs concurrenten",
      "Review aantal en score vergeleken met top-3",
      "Lokale content dekking (stadspagina's, lokale blogs)",
      "Citatie aantal en consistentie vs concurrenten",
      "Lokale backlinks en partnerships"
    ],
    uniqueFaqs: [
      { question: "Wie zijn mijn lokale SEO-concurrenten?", answer: "Niet per se dezelfde als je zakelijke concurrenten. Je lokale SEO-concurrenten zijn de bedrijven die verschijnen in het local pack en organische resultaten voor je zoekwoorden in jouw stad." },
      { question: "Hoe win ik het local pack?", answer: "Focus op drie pijlers: een compleet Google Bedrijfsprofiel met recente activiteit, meer en betere reviews dan concurrenten, en consistente citaties op relevante platforms." }
    ]
  },
  "citation-checker": {
    uniqueIntro: "Citaties zijn vermeldingen van je bedrijfsnaam, adres en telefoonnummer op externe websites. Ze zijn een belangrijke lokale rankingfactor, vooral voor het local pack in Google. De Citation Checker toont op welke platforms je vermeld staat, waar je mist, en waar je gegevens inconsistent zijn.",
    whatThisToolChecks: [
      "Aantal citaties op bekende directories en platforms",
      "Ontbrekende vermeldingen op grote Nederlandse directories",
      "NAP-consistentie per citatie bron",
      "Duplicaat vermeldingen op dezelfde platforms",
      "Branche-specifieke directories waar je niet vermeld staat"
    ],
    uniqueFaqs: [
      { question: "Op welke directories moet ik minimaal staan?", answer: "In Nederland: Google Bedrijfsprofiel, Bing Places, Yelp, Detelefoongids, Gouden Gids, Facebook en je branche-specifieke directory. Dat is de minimale basis." },
      { question: "Hoeveel citaties heb ik nodig?", answer: "Kwaliteit gaat boven kwantiteit. 30-50 relevante citaties is voor de meeste lokale bedrijven voldoende. Focus op grote, betrouwbare platforms en branche-directories." }
    ]
  },
  "lokale-zoekwoord-tool": {
    uniqueIntro: "Lokale zoekwoorden combineren je dienst met een plaatsnaam: 'loodgieter Amsterdam', 'tandarts Utrecht centrum'. De Lokale Zoekwoord Tool toont welke combinaties het meest worden gezocht in jouw regio, inclusief verrassende varianten die je concurrenten over het hoofd zien.",
    whatThisToolChecks: [
      "Zoekvolume per dienst + stad combinatie",
      "Varianten: wijk, regio, postcodegebied en 'bij mij in de buurt'",
      "Seizoensgebonden lokale zoektrends",
      "Concurrentieniveau per lokaal zoekwoord",
      "Related lokale zoekopdrachten die je mist"
    ],
    uniqueFaqs: [
      { question: "Moet ik voor elke stad een aparte pagina maken?", answer: "Voor je top-5 servicesteden: ja, een unieke landingspagina per stad. Voor kleinere plaatsen kun je regionaal groeperen (bijv. 'regio Haarlem'). Voorkom dunne doorgeefpagina's zonder unieke content." },
      { question: "Hoe belangrijk zijn 'bij mij in de buurt' zoekopdrachten?", answer: "Zeer belangrijk. Zoekopdrachten met 'in de buurt' zijn de afgelopen jaren met 500% gestegen. Google koppelt deze automatisch aan de locatie van de zoeker." }
    ]
  },

  // ═══════════════════════════════════════
  // MONITORING (7)
  // ═══════════════════════════════════════
  "ranking-tracker": {
    uniqueIntro: "Rankings fluctueren dagelijks door algorithm updates, nieuwe concurrenten en seizoensinvloeden. De Ranking Tracker volgt je Google-posities voor al je belangrijke zoekwoorden over tijd, zodat je trends herkent, dalingen snel opmerkt en het effect van je SEO-inspanningen meetbaar maakt.",
    whatThisToolChecks: [
      "Dagelijkse Google-positie per zoekwoord",
      "Positieveranderingen: stijgers en dalers",
      "Gemiddelde positie over alle getrackte zoekwoorden",
      "Zichtbaarheidsscore: totale organische impressies",
      "Desktop vs mobiele rankings per zoekwoord"
    ],
    uniqueFaqs: [
      { question: "Hoe vaak fluctueren Google rankings?", answer: "Dagelijks. Kleine schommelingen van 1-3 posities zijn normaal. Grotere veranderingen (5+ posities) duiden op algorithm updates of significante wijzigingen op je website of die van concurrenten." },
      { question: "Hoeveel zoekwoorden moet ik tracken?", answer: "Begin met je 10-20 belangrijkste zoekwoorden. Breid uit naar 50-100 als je een serieuze SEO-strategie volgt. Te veel tracken leidt tot information overload." }
    ]
  },
  "uptime-monitor": {
    uniqueIntro: "Als je website offline is, kan Google je pagina's niet crawlen en verliezen je bezoekers het vertrouwen. Frequente downtime kan zelfs je rankings schaden. De Uptime Monitor controleert je website regelmatig en waarschuwt je bij problemen, zodat je snel kunt ingrijpen.",
    whatThisToolChecks: [
      "Website beschikbaarheid (online/offline status)",
      "Response tijd van je server",
      "HTTP statuscode bij elke check",
      "Uptime percentage over de laatste 30 dagen",
      "Downtime duur en frequentie"
    ],
    uniqueFaqs: [
      { question: "Hoe beïnvloedt downtime mijn SEO?", answer: "Korte downtime (minuten) is onschuldig. Maar als Googlebot je site herhaaldelijk offline aantreft, kan het je crawlfrequentie verlagen en uiteindelijk je rankings schaden." },
      { question: "Wat is een acceptabel uptime percentage?", answer: "99.9% uptime is de industriestandaard, wat neerkomt op maximaal 8,7 uur downtime per jaar. Alles onder 99.5% is een reden om je hosting te evalueren." }
    ]
  },
  "seo-verandering-tracker": {
    uniqueIntro: "Een onbedoelde wijziging aan je website – een verwijderde pagina, een gewijzigde title tag, een nieuw noindex tag – kan je rankings in één dag laten kelderen. De SEO Verandering Tracker maakt een snapshot van je SEO-elementen en waarschuwt bij veranderingen die impact kunnen hebben.",
    whatThisToolChecks: [
      "Title tag wijzigingen op alle pagina's",
      "Meta description veranderingen",
      "Robots directives: nieuwe noindex of nofollow tags",
      "Canonical tag wijzigingen",
      "Nieuwe of verwijderde pagina's"
    ],
    uniqueFaqs: [
      { question: "Wie maakt er onbedoelde SEO-wijzigingen?", answer: "Vaak webdevelopers die onbewust SEO-elementen overschrijven bij een update, CMS-plugins die meta tags wijzigen, of content editors die pagina's per ongeluk op 'draft' zetten." },
      { question: "Hoe snel kan een onbedoelde wijziging mijn rankings beïnvloeden?", answer: "Google kan veranderingen binnen uren tot dagen oppikken. Een noindex tag op je homepage kan je binnen 24 uur uit de zoekresultaten laten verdwijnen." }
    ]
  },
  "search-console-checker": {
    uniqueIntro: "Google Search Console bevat de meest waardevolle SEO-data die er is: echte impressies, klikken, posities en crawlfouten direct van Google. De Search Console Checker geeft je een overzichtelijk dashboard van je belangrijkste GSC-metrics zonder dat je in de complexe interface hoeft te navigeren.",
    whatThisToolChecks: [
      "Totale impressies en klikken per periode",
      "Gemiddelde CTR en positie voor al je zoekwoorden",
      "Top zoekwoorden waar je op rankt",
      "Pagina's met de meeste en minste klikken",
      "Crawlfouten en indexeringsproblemen gemeld door Google"
    ],
    uniqueFaqs: [
      { question: "Waarom zijn Search Console cijfers anders dan mijn analytics?", answer: "Search Console toont data uit Google Search (impressies, klikken). Analytics meet website bezoeken uit alle bronnen. De cijfers meten verschillende dingen en zullen altijd afwijken." },
      { question: "Hoe ver terug gaat Search Console data?", answer: "Google Search Console bewaart 16 maanden aan zoekprestatie data. Exporteer regelmatig als je langere historische data wilt bewaren." }
    ]
  },
  "google-update-checker": {
    uniqueIntro: "Google voert jaarlijks duizenden algorithm updates uit, waarvan enkele 'core updates' grote impact hebben op rankings. De Google Update Checker vergelijkt je traffic patronen met bekende update-data zodat je kunt zien of een daling het gevolg is van een algorithm wijziging of een ander probleem.",
    whatThisToolChecks: [
      "Correlatie tussen traffic dalingen en bekende Google updates",
      "Impact per type update (core, spam, helpful content, product reviews)",
      "Vergelijking met branchegemiddelde impact",
      "Herstel patronen na eerdere updates",
      "Pagina's en zoekwoorden die het meest geraakt zijn"
    ],
    uniqueFaqs: [
      { question: "Hoe weet ik of een Google update mij heeft geraakt?", answer: "Een plotselinge daling van 10-30% in organisch verkeer rond de datum van een bevestigde Google update is een sterk signaal. De tool vergelijkt je data automatisch met update-datums." },
      { question: "Hoe herstel ik van een Google core update?", answer: "Core updates belonen kwaliteit. Verbeter je E-E-A-T (expertise, ervaring, autoriteit, betrouwbaarheid), verwijder dunne content, update verouderde artikelen en zorg voor een betere gebruikerservaring." }
    ]
  },
  "penalty-checker": {
    uniqueIntro: "Een Google penalty kan je organisch verkeer met 50-90% laten dalen. Er zijn twee typen: manuele acties (handmatig opgelegd door Google's team) en algoritmische filters (automatisch). De Penalty Checker analyseert je website op signalen die wijzen op een actieve penalty.",
    whatThisToolChecks: [
      "Plotselinge traffic dalingen die wijzen op een algoritmische penalty",
      "Tekenen van een manuele actie (specifieke pagina-patronen)",
      "Onnatuurlijk linkprofiel (common penalty trigger)",
      "Dunne of scraped content die een Panda filter kan triggeren",
      "Cloaking of misleidende redirects"
    ],
    uniqueFaqs: [
      { question: "Hoe weet ik zeker of ik een penalty heb?", answer: "Manuele acties kun je zien in Google Search Console onder 'Beveiliging & Manuele acties'. Algoritmische penalties zijn lastiger: ze correleren met update-datums en veroorzaken significante, plotselinge dalingen." },
      { question: "Hoe lang duurt het om te herstellen van een penalty?", answer: "Een manuele actie kan worden opgeheven door een reconsideration request (1-4 weken review). Algoritmisch herstel duurt tot de volgende core update, wat maanden kan zijn." }
    ]
  },
  "crawl-budget-checker": {
    uniqueIntro: "Google wijst elke website een crawlbudget toe: het aantal pagina's dat Googlebot per dag bezoekt. Als je budget verspild wordt aan onbelangrijke of dubbele pagina's, worden je belangrijke pagina's minder vaak gecrawld. De Crawl Budget Checker analyseert hoe efficiënt jouw budget wordt gebruikt.",
    whatThisToolChecks: [
      "Geschat crawlbudget op basis van server logs en sitegrootte",
      "Pagina's die het meeste crawlbudget verbruiken",
      "URL-parameters die onnodig veel URL's genereren",
      "Redirects die crawlbudget verspillen",
      "Pagina's met lage waarde die toch veel gecrawld worden"
    ],
    uniqueFaqs: [
      { question: "Hoe groot is mijn crawlbudget?", answer: "Google deelt dit niet exact mee, maar voor de meeste MKB-websites is het geen bottleneck. Bij websites met 10.000+ pagina's wordt crawlbudget-optimalisatie belangrijk." },
      { question: "Hoe optimaliseer ik mijn crawlbudget?", answer: "Blokkeer onbelangrijke URL's in robots.txt, minimaliseer redirect chains, verwijder duplicate content en zorg voor snelle server response times." }
    ]
  },

  // ═══════════════════════════════════════
  // SNELHEID (7)
  // ═══════════════════════════════════════
  "pagespeed-test": {
    uniqueIntro: "Een trage website verliest bezoekers: 53% van mobiele gebruikers verlaat een pagina die langer dan 3 seconden laadt. Bovendien is snelheid een directe Google rankingfactor via Core Web Vitals. De PageSpeed Test meet je laadtijd en geeft concrete tips om sneller te worden.",
    whatThisToolChecks: [
      "Totale laadtijd (DOMContentLoaded en Load event)",
      "First Contentful Paint: wanneer de eerste content verschijnt",
      "Largest Contentful Paint: wanneer de hoofdcontent geladen is",
      "Time to Interactive: wanneer de pagina bruikbaar wordt",
      "Totale paginagrootte en aantal requests"
    ],
    uniqueFaqs: [
      { question: "Wat is een goede laadtijd?", answer: "Under 2.5 seconden voor Largest Contentful Paint is 'goed' volgens Google. Onder 1.5 seconden is excellent. Boven 4 seconden is 'slecht' en schaadt je rankings actief." },
      { question: "Wat beïnvloedt mijn laadtijd het meest?", answer: "De drie grootste boosdoeners zijn: ongecomprimeerde afbeeldingen, te veel JavaScript (vooral third-party scripts) en trage server response. Begin met afbeeldingen – dat levert de snelste winst." }
    ]
  },
  "core-web-vitals-test": {
    uniqueIntro: "Core Web Vitals (CWV) zijn Google's drie metrieken voor gebruikerservaring: Largest Contentful Paint (laadsnelheid), Interaction to Next Paint (interactiviteit) en Cumulative Layout Shift (visuele stabiliteit). Sinds 2021 zijn het directe rankingfactoren. Deze tool meet alle drie en geeft gerichte verbeterpunten.",
    whatThisToolChecks: [
      "LCP: Largest Contentful Paint (doel: < 2.5s)",
      "INP: Interaction to Next Paint (doel: < 200ms)",
      "CLS: Cumulative Layout Shift (doel: < 0.1)",
      "Lab data (gesimuleerde test) en field data (echte gebruikers)",
      "Per-element diagnose: welk element veroorzaakt het probleem"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen lab data en field data?", answer: "Lab data is een gesimuleerde test (wat deze tool toont). Field data zijn echte metingen van je bezoekers (via Chrome UX Report). Google gebruikt field data voor rankings; lab data is nuttig voor diagnose." },
      { question: "Welke Core Web Vital is het belangrijkst?", answer: "LCP heeft de meeste impact op rankings en gebruikerservaring. Als je maar één metric kunt verbeteren, focus dan op LCP." }
    ]
  },
  "afbeelding-optimizer": {
    uniqueIntro: "Afbeeldingen zijn verantwoordelijk voor gemiddeld 50% van de paginagrootte op MKB-websites. Ongecomprimeerde afbeeldingen zijn de #1 oorzaak van trage laadtijden. De Afbeelding Optimizer comprimeert je beelden met tot 80% zonder zichtbaar kwaliteitsverlies en converteert naar moderne formaten als WebP.",
    whatThisToolChecks: [
      "Bestandsgrootte en compressiemogelijkheden per afbeelding",
      "Formaat efficiëntie: PNG vs JPEG vs WebP vs AVIF",
      "Afmetingen: zijn afbeeldingen groter dan nodig voor weergave",
      "Lazy loading implementatie",
      "Alt tekst en SEO-optimalisatie van afbeeldingen"
    ],
    uniqueFaqs: [
      { question: "Welk afbeeldingsformaat is het beste voor SEO?", answer: "WebP biedt de beste balans tussen kwaliteit en bestandsgrootte en wordt door 95%+ van de browsers ondersteund. AVIF is nog efficiënter maar heeft beperktere browserondersteuning." },
      { question: "Verlies ik kwaliteit bij het comprimeren?", answer: "Met moderne lossy compressie (kwaliteit 80-85%) is het verschil onzichtbaar voor het menselijk oog terwijl de bestandsgrootte met 60-80% afneemt." }
    ]
  },
  "css-minifier": {
    uniqueIntro: "Onbewerkte CSS bevat witruimte, commentaar en soms ongebruikte regels die de bestandsgrootte onnodig vergroten. De CSS Minifier comprimeert je stylesheet door alles te verwijderen wat de browser niet nodig heeft, waardoor je pagina sneller laadt zonder dat de styling verandert.",
    whatThisToolChecks: [
      "Bestandsgrootte voor en na minificatie",
      "Percentage besparing door minificatie",
      "Syntax validatie: geen fouten na minificatie",
      "Suggestie voor GZIP/Brotli compressie combinatie",
      "Ongebruikte CSS regels detectie"
    ],
    uniqueFaqs: [
      { question: "Hoeveel sneller wordt mijn site door CSS minificatie?", answer: "CSS minificatie alleen bespaart typisch 10-30% bestandsgrootte. In combinatie met GZIP compressie bespaar je tot 80%. De impact is groter bij grote stylesheets (>50KB)." },
      { question: "Kan CSS minificatie mijn styling kapotmaken?", answer: "Bij standaard minificatie (witruimte en commentaar verwijderen) niet. Geavanceerde optimalisaties die selectors hernoemen of samenvoegen kunnen wel problemen veroorzaken." }
    ]
  },
  "javascript-minifier": {
    uniqueIntro: "JavaScript is vaak de grootste bottleneck voor website snelheid: het moet worden gedownload, geparsed en uitgevoerd voordat je pagina interactief wordt. De JavaScript Minifier verkleint je JS-bestanden door variabelnamen te verkorten, whitespace te verwijderen en dode code te elimineren.",
    whatThisToolChecks: [
      "Bestandsgrootte voor en na minificatie",
      "Percentage besparing",
      "Syntax validatie: werkt de code nog correct na minificatie",
      "Dode code detectie (functies die nooit worden aangeroepen)",
      "Mogelijkheden voor code splitting en tree shaking"
    ],
    uniqueFaqs: [
      { question: "Is JavaScript minificatie hetzelfde als bundling?", answer: "Nee. Minificatie verkleint individuele bestanden. Bundling combineert meerdere bestanden tot één. Beide zijn belangrijk: bundle eerst, minify daarna." },
      { question: "Welke JavaScript bespaart de meeste laadtijd als ik het verwijder?", answer: "Third-party scripts (analytics, chat widgets, social plugins) zijn vaak de grootste boosdoeners. Check welke scripts je echt nodig hebt en verwijder de rest." }
    ]
  },
  "gzip-checker": {
    uniqueIntro: "GZIP compressie verkleint HTML, CSS en JavaScript bestanden met 60-80% voordat ze naar de browser worden gestuurd. Het is een van de eenvoudigste en meest effectieve snelheidsoptimalisaties, maar wordt op veel servers niet standaard geactiveerd. De GZIP Checker controleert of jouw server compressie gebruikt.",
    whatThisToolChecks: [
      "GZIP of Brotli compressie actief voor HTML",
      "Compressie actief voor CSS en JavaScript bestanden",
      "Compressie ratio per bestandstype",
      "Content-Encoding header aanwezigheid",
      "Totale besparing door compressie"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen GZIP en Brotli?", answer: "Brotli is de nieuwere standaard en comprimeert 15-25% beter dan GZIP. Alle moderne browsers ondersteunen Brotli. Als je kunt kiezen, gebruik Brotli." },
      { question: "Hoe activeer ik GZIP op mijn server?", answer: "Bij Apache: voeg mod_deflate regels toe aan je .htaccess. Bij Nginx: zet gzip on in je config. Bij de meeste managed hosting en CDN's is het één klik in het dashboard." }
    ]
  },
  "render-blocking-checker": {
    uniqueIntro: "Render-blocking resources zijn CSS en JavaScript bestanden die de browser dwingen te wachten voordat de pagina zichtbaar wordt. Ze zijn een van de meest voorkomende oorzaken van slechte LCP scores. De Render Blocking Checker identificeert deze bestanden en toont hoe je ze asynchroon kunt laden.",
    whatThisToolChecks: [
      "CSS bestanden in de <head> zonder media query",
      "JavaScript bestanden zonder async of defer attribuut",
      "Impact per blocking resource op de laadtijd",
      "Third-party scripts die het renderen blokkeren",
      "Inline CSS mogelijkheden voor boven-de-vouw content"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen async en defer?", answer: "Async laadt het script parallel en voert het direct uit wanneer het klaar is (kan de pagina onderbreken). Defer laadt parallel maar wacht met uitvoeren tot de HTML volledig is geparsed. Defer is meestal veiliger." },
      { question: "Moet ik alle CSS inline plaatsen?", answer: "Nee, alleen de critical CSS (styling voor content boven de vouw). De rest laad je asynchroon via media='print' onload='this.media=all'. Dit geeft de snelste First Paint." }
    ]
  },

  // ═══════════════════════════════════════
  // STRUCTURED DATA (7)
  // ═══════════════════════════════════════
  "schema-validator": {
    uniqueIntro: "Structured data fouten voorkomen dat Google je rich snippets toont: sterren, prijzen, FAQ's en event data in de zoekresultaten. De Schema Validator controleert je JSON-LD, Microdata of RDFa op syntax fouten, ontbrekende verplichte velden en verouderde schema types.",
    whatThisToolChecks: [
      "JSON-LD syntax validatie",
      "Verplichte en aanbevolen velden per schema type",
      "Schema.org vocabulary conformiteit",
      "Nesting en relatie correctheid",
      "Waarschuwingen voor verouderde of experimentele types"
    ],
    uniqueFaqs: [
      { question: "Welke structured data fouten blokkeren rich snippets?", answer: "Ontbrekende verplichte velden (bijv. 'name' bij Product) blokkeren het rich snippet volledig. Waarschuwingen voor aanbevolen velden blokkeren niet maar verminderen je kans op weergave." },
      { question: "Welk formaat is het beste: JSON-LD, Microdata of RDFa?", answer: "Google raadt JSON-LD aan als voorkeursformaat. Het is makkelijker te implementeren, makkelijker te onderhouden en gescheiden van je HTML structuur." }
    ]
  },
  "rich-snippet-preview": {
    uniqueIntro: "Rich snippets trekken het oog in de zoekresultaten en verhogen je click-through rate met 20-30%. De Rich Snippet Preview toont exact hoe je pagina eruitziet in Google wanneer je structured data correct is geïmplementeerd – compleet met sterren, prijzen, FAQ dropdowns of event datums.",
    whatThisToolChecks: [
      "Visuele preview van je rich snippet in Google",
      "Welk type rich result je kunt verwachten (FAQ, Product, Review, etc.)",
      "Ontbrekende velden die je rich snippet verhinderen",
      "Vergelijking desktop vs mobiele weergave",
      "Meerdere rich snippet typen per pagina"
    ],
    uniqueFaqs: [
      { question: "Garandeert structured data dat ik een rich snippet krijg?", answer: "Nee. Google bepaalt zelf of en wanneer rich snippets worden getoond. Correcte structured data verhoogt je kans aanzienlijk, maar het is geen garantie." },
      { question: "Welke rich snippets hebben de meeste impact op CTR?", answer: "Review sterren verhogen CTR het meest (+20-35%). FAQ rich results geven extra ruimte in de SERP. Product snippets met prijs trekken koopgerichte zoekers." }
    ]
  },
  "faq-schema-generator": {
    uniqueIntro: "FAQ Schema zorgt ervoor dat je veelgestelde vragen als inklapbare antwoorden verschijnen direct in de Google zoekresultaten. Dit geeft je pagina meer ruimte op de SERP en verhoogt je CTR. De FAQ Schema Generator maakt het eenvoudig om correct geformatteerde JSON-LD code te genereren.",
    whatThisToolChecks: [
      "JSON-LD output conform het FAQPage schema type",
      "Correcte Question en Answer nesting",
      "HTML formatting in antwoorden (links, bold, etc.)",
      "Maximaal aantal vragen (Google toont er 2-4)",
      "Syntax validatie van de output"
    ],
    uniqueFaqs: [
      { question: "Hoeveel FAQ's moet ik toevoegen voor het beste resultaat?", answer: "Google toont meestal 2-4 vragen. Voeg 5-8 vragen toe zodat Google de meest relevante kan kiezen per zoekopdracht." },
      { question: "Mag ik FAQ schema op elke pagina gebruiken?", answer: "Alleen op pagina's die daadwerkelijk veelgestelde vragen beantwoorden. Google heeft in 2023 de weergave beperkt tot 'bekende autoriteiten', maar correcte implementatie kan nog steeds helpen." }
    ]
  },
  "local-business-schema-generator": {
    uniqueIntro: "LocalBusiness Schema helpt Google je bedrijfsinformatie te begrijpen en weer te geven in lokale zoekresultaten, het Knowledge Panel en Google Maps. De generator maakt een compleet JSON-LD blok met je NAP-gegevens, openingstijden, diensten en meer – klaar om op je website te plaatsen.",
    whatThisToolChecks: [
      "Verplichte velden: name, address, telephone",
      "Openingstijden in correct ISO 8601 formaat",
      "Geo-coördinaten voor kaartweergave",
      "Juiste businesstype (Restaurant, Dentist, Plumber, etc.)",
      "Optionele velden: priceRange, areaServed, serviceArea"
    ],
    uniqueFaqs: [
      { question: "Welk LocalBusiness subtype moet ik kiezen?", answer: "Kies het meest specifieke type dat past. Gebruik 'Dentist' in plaats van 'MedicalBusiness', of 'Plumber' in plaats van 'HomeAndConstructionBusiness'. Specifieker = beter voor Google." },
      { question: "Moet LocalBusiness schema overeenkomen met mijn Google Bedrijfsprofiel?", answer: "Absoluut. NAP-gegevens, categorieën en openingstijden moeten exact matchen. Inconsistenties kunnen je lokale rankings schaden." }
    ]
  },
  "product-schema-generator": {
    uniqueIntro: "Product Schema laat Google prijzen, beschikbaarheid, review sterren en meer tonen direct in de zoekresultaten. Voor webshops is dit essentieel: product rich snippets verhogen de CTR met 20-35% ten opzichte van standaard resultaten. De generator maakt een compleet Product JSON-LD blok.",
    whatThisToolChecks: [
      "Verplichte velden: name, image, offers met price en currency",
      "Beschikbaarheid status (InStock, OutOfStock, PreOrder)",
      "Review en AggregateRating nesting",
      "Merk (brand) en GTIN/SKU identificatie",
      "Prijs validiteit periode (priceValidUntil)"
    ],
    uniqueFaqs: [
      { question: "Heb ik per product een apart schema nodig?", answer: "Ja, elk product op je webshop verdient een eigen Product schema blok. Bij varianten (maten, kleuren) kun je één product met meerdere Offers gebruiken." },
      { question: "Telt Google de reviews in mijn Product schema?", answer: "Google kan de review data weergeven als rich snippet, maar verifieert of de reviews echt op je site staan. Nep-reviews in schema toevoegen is een schending van Google's richtlijnen." }
    ]
  },
  "breadcrumb-schema-generator": {
    uniqueIntro: "Breadcrumb Schema vertelt Google de paginahiërarchie van je website, en toont dit als pad in de zoekresultaten (bijv. Home > Diensten > Lokale SEO). Dit verbetert de gebruikerservaring in de SERP en helpt Google je sitestructuur te begrijpen.",
    whatThisToolChecks: [
      "Correcte BreadcrumbList en ListItem nesting",
      "Unieke positie per breadcrumb item",
      "URL's die verwijzen naar bestaande pagina's",
      "Naam lengte en leesbaarheid",
      "Consistentie met de werkelijke navigatie op de pagina"
    ],
    uniqueFaqs: [
      { question: "Moet breadcrumb schema overeenkomen met mijn visuele breadcrumbs?", answer: "Ja, Google verwacht dat schema markup overeenkomt met zichtbare content op de pagina. Afwijkingen kunnen als misleidend worden beschouwd." },
      { question: "Hoeveel niveaus diep moeten breadcrumbs zijn?", answer: "Minimaal 2 niveaus (Home > Pagina). Voor de meeste sites zijn 3-4 niveaus optimaal. Te diepe nesting (6+) duidt op een te complexe sitestructuur." }
    ]
  },
  "json-ld-validator": {
    uniqueIntro: "JSON-LD is het door Google aanbevolen formaat voor structured data, maar één verkeerd komma of ontbrekende bracket kan je hele markup ongeldig maken. De JSON-LD Validator controleert je code op syntaxfouten, toont precies waar het probleem zit en valideert tegen het Schema.org vocabulary.",
    whatThisToolChecks: [
      "JSON syntax: correcte accolades, komma's en quotes",
      "Schema.org type en property validatie",
      "Verplichte velden per schema type",
      "@context en @type correctheid",
      "Nesting en referenties tussen schema objecten"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen de JSON-LD Validator en de Schema Validator?", answer: "De JSON-LD Validator checkt specifiek de code-syntax en structuur van je JSON-LD blok. De Schema Validator gaat breder: die checkt ook Microdata, RDFa en valideert tegen Google's specifieke richtlijnen." },
      { question: "Waar plaats ik JSON-LD code op mijn pagina?", answer: "In een <script type='application/ld+json'> blok, bij voorkeur in de <head> van je pagina. Google kan het overal in de HTML vinden, maar de head is de conventie." }
    ]
  },

  // ═══════════════════════════════════════
  // KEYWORD (7)
  // ═══════════════════════════════════════
  "zoekwoord-generator": {
    uniqueIntro: "De basis van elke SEO-strategie is het vinden van de juiste zoekwoorden. De Zoekwoord Generator helpt je van één seed-woord naar tientallen relevante zoekwoord-ideeën te komen, inclusief long tail varianten, vragen en gerelateerde termen die je anders zou missen.",
    whatThisToolChecks: [
      "Seed zoekwoord uitbreiding naar gerelateerde termen",
      "Long tail varianten met lagere concurrentie",
      "Vraag-gebaseerde zoekwoorden (wie, wat, waar, hoe)",
      "Zoekvolume indicatie per suggestie",
      "Seizoensgebonden populariteit van gesuggereerde termen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel zoekwoorden heb ik nodig voor mijn website?", answer: "Een gemiddelde MKB-website heeft 20-50 focus zoekwoorden nodig, verdeeld over je pagina's. Elke pagina target 1-2 hoofdzoekwoorden plus 3-5 gerelateerde termen." },
      { question: "Moet ik kiezen voor zoekwoorden met hoog of laag volume?", answer: "Begin met long tail zoekwoorden (laag volume, lage concurrentie) voor quick wins. Werk daarna naar hogere volumes toe naarmate je autoriteit groeit." }
    ]
  },
  "long-tail-keyword-tool": {
    uniqueIntro: "Long tail zoekwoorden zijn langere, specifiekere zoekopdrachten die minder concurrentie hebben maar vaak een hogere conversie. '3-persoons bank grijs velvet' converteert beter dan 'bank'. De Long Tail Keyword Tool genereert deze specifieke varianten die je concurrenten over het hoofd zien.",
    whatThisToolChecks: [
      "3-5 woord combinaties vanuit je seed zoekwoord",
      "Zoekvolume per long tail variant",
      "Concurrentie score: hoe moeilijk is het om te ranken",
      "Koopintentie: informationeel vs transactioneel",
      "Suggesties uit Google Autocomplete en 'Mensen vragen ook'"
    ],
    uniqueFaqs: [
      { question: "Wat maakt een zoekwoord 'long tail'?", answer: "Niet de lengte maar de specificiteit en het lagere zoekvolume. 'SEO bureau Amsterdam centrum voor tandartsen' is long tail. Samen vormen long tail zoekwoorden 70% van alle zoekopdrachten." },
      { question: "Moet ik voor elk long tail zoekwoord een aparte pagina maken?", answer: "Nee, groepeer verwante long tails op één pagina. Eén goed artikel over 'keuken renoveren' kan ranken op tientallen long tail varianten als het compleet genoeg is." }
    ]
  },
  "zoekvolume-checker": {
    uniqueIntro: "Zoekvolume vertelt je hoeveel mensen per maand op een term zoeken. Zonder deze data optimaliseer je mogelijk voor zoekwoorden waar niemand naar zoekt. De Zoekvolume Checker toont het maandelijks volume voor Nederland, inclusief trends en seizoensvariaties.",
    whatThisToolChecks: [
      "Geschat maandelijks zoekvolume in Nederland",
      "Zoekvolume trend: stijgend, stabiel of dalend",
      "Seizoenspieken en -dalen per maand",
      "Vergelijking met gerelateerde zoekwoorden",
      "Desktop vs mobiel zoekvolume verdeling"
    ],
    uniqueFaqs: [
      { question: "Hoe betrouwbaar zijn zoekvolume schattingen?", answer: "Ze geven een orde van grootte, geen exacte cijfers. Google Keyword Planner geeft brede ranges; third-party tools schatten nauwkeuriger maar zijn ook approximaties. Gebruik het voor vergelijking, niet als absoluut getal." },
      { question: "Is een zoekwoord met volume 0 nutteloos?", answer: "Niet altijd. Nieuwe termen, niche-onderwerpen en zeer specifieke long tails tonen soms volume 0 maar genereren toch verkeer. Als het relevant is voor je business, kan het de moeite waard zijn." }
    ]
  },
  "zoekintentie-checker": {
    uniqueIntro: "Google matcht zoekresultaten met zoekintentie: een informatieve zoekopdracht krijgt artikelen te zien, een transactionele krijgt productpagina's. Als je content niet past bij de intentie, rank je niet – ook niet met perfecte on-page SEO. De Zoekintentie Checker classificeert de intentie achter je zoekwoorden.",
    whatThisToolChecks: [
      "Intentie classificatie: informationeel, transactioneel, navigatie of commercieel",
      "Dominante content type in de huidige top-10 (artikel, product, video, tool)",
      "SERP features bij dit zoekwoord (featured snippet, PAA, shopping)",
      "Klik-distributie: organisch vs betaald vs zero-click",
      "Aanbevolen content type voor jouw pagina"
    ],
    uniqueFaqs: [
      { question: "Waarom is zoekintentie belangrijker dan zoekvolume?", answer: "Omdat Google pagina's rankt die de intentie van de zoeker het best vervullen. Een perfect geoptimaliseerd artikel rankt niet voor een transactioneel zoekwoord als Google productpagina's verwacht." },
      { question: "Kan de intentie van een zoekwoord veranderen?", answer: "Ja, zoekintentie evolueert. 'Corona' veranderde van informatief (het bier) naar urgent informatief (de pandemie). Check periodiek of de SERP voor je zoekwoorden is veranderd." }
    ]
  },
  "keyword-groepering-tool": {
    uniqueIntro: "Een ongeorganiseerde lijst van honderden zoekwoorden is onbruikbaar. De Keyword Groepering Tool clustert je zoekwoorden automatisch in themagroepen op basis van semantische verwantschap. Elke cluster wordt één contentpagina of pillar, zodat je content strategie direct gepland is.",
    whatThisToolChecks: [
      "Automatische clustering op semantische verwantschap",
      "Cluster grootte en zoekvolume per groep",
      "Primair zoekwoord per cluster (hoogste volume)",
      "Ondersteunende zoekwoorden per cluster",
      "Content type suggestie per cluster (blog, product, FAQ)"
    ],
    uniqueFaqs: [
      { question: "Hoeveel zoekwoorden kan ik tegelijk groeperen?", answer: "De tool verwerkt lijsten van 50 tot 500 zoekwoorden. Voor de beste resultaten gebruik je zoekwoorden uit dezelfde niche of branche." },
      { question: "Hoe gebruik ik de clusters voor mijn content planning?", answer: "Elk cluster wordt één pagina of blogpost. Het primaire zoekwoord wordt je focus, de ondersteunende zoekwoorden verwerk je natuurlijk in de tekst. Plan de clusters met het hoogste volume eerst." }
    ]
  },
  "vraag-zoekwoord-tool": {
    uniqueIntro: "Mensen stellen vragen aan Google: 'hoe', 'wat', 'waarom', 'wanneer'. Deze vraag-zoekwoorden zijn goud voor SEO omdat ze perfect passen bij FAQ schema, featured snippets en informatieve content. De Vraag Zoekwoord Tool verzamelt alle vragen die mensen stellen over jouw onderwerp.",
    whatThisToolChecks: [
      "Vragen uit Google's 'Mensen vragen ook' sectie",
      "Vraag-formuleringen uit forums en Q&A sites",
      "Zoekvolume per vraag",
      "Featured snippet kans per vraag",
      "Categorisatie: wie, wat, waar, wanneer, waarom, hoe"
    ],
    uniqueFaqs: [
      { question: "Hoe gebruik ik vraag-zoekwoorden het best?", answer: "Gebruik ze als H2/H3 headings in je content en beantwoord ze direct daaronder. Dit vergroot je kans op een featured snippet en FAQ rich result." },
      { question: "Zijn vraag-zoekwoorden beter dan gewone zoekwoorden?", answer: "Niet beter, maar aanvullend. Vraag-zoekwoorden trekken bezoekers in de orientatiefase. Combineer ze met transactionele zoekwoorden voor een volledige content funnel." }
    ]
  },
  "seizoens-zoekwoord-tool": {
    uniqueIntro: "Sommige zoekwoorden pieken op specifieke momenten: 'kerstcadeau' in november-december, 'airco installeren' in juni-juli. De Seizoens Zoekwoord Tool toont wanneer je zoekwoorden het meest en minst worden gezocht, zodat je je content kunt publiceren wéken voor de piek.",
    whatThisToolChecks: [
      "Maandelijkse zoekvolume variatie per zoekwoord",
      "Piekmaand en dalmaand identificatie",
      "Jaar-over-jaar trend: groeit of krimpt de piek",
      "Optimaal publicatiemoment (4-8 weken voor de piek)",
      "Vergelijking seizoenaliteit van meerdere zoekwoorden"
    ],
    uniqueFaqs: [
      { question: "Wanneer moet ik seizoensgebonden content publiceren?", answer: "4-8 weken voor de verwachte piek. Google heeft tijd nodig om je pagina te indexeren en te ranken. In oktober publiceren voor 'kerstcadeaus' is ideaal." },
      { question: "Moet ik seizoenscontent na de piek verwijderen?", answer: "Nee, laat het staan en update het jaarlijks. Een pagina die elk jaar terugkomt bouwt autoriteit op en rankt steeds sneller in het volgende seizoen." }
    ]
  },

  // ═══════════════════════════════════════
  // CONCURRENTIE (7)
  // ═══════════════════════════════════════
  "concurrentie-analyse-tool": {
    uniqueIntro: "Weten wat je concurrenten goed en fout doen geeft je een strategisch voordeel. De Concurrentie Analyse Tool vergelijkt je website zij-aan-zij met concurrenten op alle SEO-factoren: technisch, content, links en autoriteit. Je ziet precies waar je achterblijft en waar je kansen liggen.",
    whatThisToolChecks: [
      "Technische SEO score vergelijking",
      "Content dekking en kwaliteit per onderwerp",
      "Backlink profiel sterkte en diversiteit",
      "Domain Authority vergelijking",
      "Zoekwoord overlap en unieke posities"
    ],
    uniqueFaqs: [
      { question: "Wie zijn mijn SEO-concurrenten?", answer: "Niet per se je zakelijke concurrenten. Je SEO-concurrenten zijn websites die ranken voor dezelfde zoekwoorden. Dat kunnen ook blogs, directories of aggregators zijn." },
      { question: "Hoe kies ik de juiste concurrenten om te analyseren?", answer: "Zoek op je top-5 zoekwoorden en noteer welke websites steeds terugkomen in de top-10. Dat zijn je SEO-concurrenten. Kies er 3-5 voor de meest nuttige vergelijking." }
    ]
  },
  "concurrentie-keyword-tool": {
    uniqueIntro: "Je concurrenten ranken op zoekwoorden die jij mist – en dat is potentieel omzet die je laat liggen. De Concurrentie Keyword Tool onthult de zoekwoorden van je concurrenten en filtert specifiek op termen waar zij wél en jij niet op rankt: je grootste groeikansen.",
    whatThisToolChecks: [
      "Zoekwoorden waarop concurrenten ranken en jij niet",
      "Zoekwoorden waarop jullie beiden ranken (overlap)",
      "Zoekwoorden waarop jij uniek rankt (je sterke punten)",
      "Geschat verkeer per zoekwoord voor de concurrent",
      "Moeilijkheid om de concurrent te verslaan per zoekwoord"
    ],
    uniqueFaqs: [
      { question: "Moet ik alle zoekwoorden van mijn concurrenten targeten?", answer: "Nee, focus op zoekwoorden die relevant zijn voor je business EN haalbaar zijn qua concurrentie. Een zoekwoord met hoog volume maar extreme concurrentie kost meer dan het oplevert." },
      { question: "Hoe achteraal ik de zoekwoorden van mijn concurrent?", answer: "De tool analyseert de organische posities van je concurrent via SERP data. Je ziet welke pagina's ranken, voor welke zoekwoorden en op welke positie." }
    ]
  },
  "concurrentie-backlink-tool": {
    uniqueIntro: "De backlinks van je concurrenten zijn een schat aan linkbuilding kansen voor jou. Als een website linkt naar je concurrent, is de kans groot dat ze ook openstaan voor een link naar jouw relevante content. De Concurrentie Backlink Tool toont het volledige linkprofiel van elke concurrent.",
    whatThisToolChecks: [
      "Totaal aantal backlinks en verwijzende domeinen van de concurrent",
      "Sterkste backlinks (hoogste DA)",
      "Meest gelinkte pagina's van de concurrent",
      "Anchor text distributie van de concurrent",
      "Nieuwe en verloren links in de afgelopen maanden"
    ],
    uniqueFaqs: [
      { question: "Hoe gebruik ik de backlinks van mijn concurrent?", answer: "Identificeer de bronnen, analyseer waarom ze linken (gastblog, resource page, vermelding) en benader dezelfde sites met jouw eigen waardevolle content als alternatief of aanvulling." },
      { question: "Moet ik precies dezelfde links proberen te krijgen?", answer: "Het is een goed startpunt, maar bouw ook unieke links die je concurrenten niet hebben. Een gevarieerd linkprofiel is sterker dan een kopie van je concurrent." }
    ]
  },
  "concurrentie-content-tool": {
    uniqueIntro: "Content is een van de drie pijlers van SEO, en je concurrenten investeren er waarschijnlijk al in. De Concurrentie Content Tool analyseert welke pagina's van je concurrent het beste presteren: welke onderwerpen, welke content lengtes, welke formaten. Zo weet je wat werkt in jouw markt.",
    whatThisToolChecks: [
      "Top-presterende pagina's van de concurrent (meeste verkeer)",
      "Content lengte en structuur van succesvolle pagina's",
      "Publicatie frequentie en content kalender patronen",
      "Onderwerpen die de concurrent dekt maar jij niet",
      "Social shares en engagement per pagina"
    ],
    uniqueFaqs: [
      { question: "Moet ik de content van mijn concurrent kopiëren?", answer: "Absoluut niet. Gebruik hun content als inspiratie om te begrijpen welke onderwerpen en formaten werken in je markt. Maak vervolgens iets dat uniek en beter is (de 'skyscraper' techniek)." },
      { question: "Hoe bepaal ik welke content van mijn concurrent het best presteert?", answer: "De tool schat organisch verkeer per pagina op basis van de zoekwoorden waarvoor die pagina rankt. Pagina's met het meeste geschatte verkeer presteren het best." }
    ]
  },
  "marktaandeel-checker": {
    uniqueIntro: "Organisch marktaandeel is het percentage van alle organische klikken in jouw niche dat naar jouw website gaat. Het is een krachtiger metric dan individuele rankings omdat het het totaalplaatje toont. De Marktaandeel Checker berekent je share of voice en vergelijkt met concurrenten.",
    whatThisToolChecks: [
      "Share of voice: jouw aandeel in organische zichtbaarheid",
      "Marktaandeel per zoekwoord cluster",
      "Trend: groeit of krimpt je marktaandeel",
      "Verdeling van marktaandeel over top-5 spelers",
      "Kansen om marktaandeel te winnen (zwakke concurrenten)"
    ],
    uniqueFaqs: [
      { question: "Wat is een goed organisch marktaandeel?", answer: "Dit verschilt sterk per branche. In een gefragmenteerde markt is 10-15% al dominant. In een markt met één sterke speler kan de leider 40%+ hebben. Vergelijk met je directe concurrenten." },
      { question: "Hoe verhoog ik mijn marktaandeel?", answer: "Door meer zoekwoorden te targeten (content gap vullen), bestaande posities te verbeteren naar de top-3, en nieuwe content niches te ontdekken waar concurrenten nog niet actief zijn." }
    ]
  },
  "serp-vergelijking-tool": {
    uniqueIntro: "De SERP Vergelijking Tool toont zij-aan-zij hoe jij en je concurrenten presteren in de Google zoekresultaten. Per zoekwoord zie je precies wie waar staat, welke SERP features ze pakken en waar jij ze kunt inhalen.",
    whatThisToolChecks: [
      "Positie per zoekwoord: jij vs concurrenten",
      "SERP feature dominantie (featured snippets, PAA)",
      "Title tag en meta description vergelijking",
      "Rich snippet weergave: wie heeft het wel/niet",
      "Positieveranderingen over de afgelopen weken"
    ],
    uniqueFaqs: [
      { question: "Hoe interpreteer ik de SERP vergelijking?", answer: "Focus op zoekwoorden waar je op positie 4-10 staat en concurrenten op 1-3. Daar is de kleinste inspanning nodig voor de grootste impact." },
      { question: "Hoe pak ik een featured snippet van mijn concurrent?", answer: "Analyseer het formaat van het huidige snippet (paragraaf, lijst, tabel) en maak een beter, beknopter antwoord op je eigen pagina. Structureer het exact in het verwachte format." }
    ]
  },
  "technische-vergelijking-tool": {
    uniqueIntro: "Technische SEO is de fundering: als je concurrent een snellere, beter geconfigureerde website heeft, start hij met een voorsprong. De Technische Vergelijking Tool vergelijkt snelheid, mobiel, SSL, structured data en meer direct met je concurrenten.",
    whatThisToolChecks: [
      "Laadsnelheid vergelijking (LCP, TTFB)",
      "Core Web Vitals scores naast elkaar",
      "HTTPS en security header implementatie",
      "Structured data dekking per concurrent",
      "Mobiele bruikbaarheid vergelijking"
    ],
    uniqueFaqs: [
      { question: "Hoe belangrijk is technische SEO vergeleken met content?", answer: "Technische SEO is de fundering. Zonder goede basis (snel, crawlbaar, mobiel-vriendelijk) halen content en links niet hun volledige potentieel. Zorg dat de basis goed is, dan versterken content en links het effect." },
      { question: "Kan ik mijn concurrent verslaan met alleen betere technische SEO?", answer: "In competitieve markten waarschijnlijk niet alleen daarmee, maar het is een vereiste. Combineer technische excellentie met sterke content en een goed linkprofiel voor het beste resultaat." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA ANALYSE (8)
  // ═══════════════════════════════════════
  "seo-grader": {
    uniqueIntro: "De SEO Grader beoordeelt je website met een rapportcijfer op meer dan 50 factoren. Anders dan een simpele score geeft de grader een gedetailleerde uitsplitsing per categorie: technisch, on-page, off-page en gebruikerservaring. Je weet precies welke categorie je omlaag trekt.",
    whatThisToolChecks: [
      "Rapportcijfer per SEO-categorie (technisch, content, links, UX)",
      "50+ individuele checkpunten met pass/fail status",
      "Gewogen totaalscore op basis van impact per factor",
      "Benchmarking tegen vergelijkbare websites",
      "Verbeterpotentieel per categorie in punten"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen de SEO Grader en de SEO Score Checker?", answer: "De SEO Score Checker geeft één totaalscore. De SEO Grader splitst uit per categorie met 50+ individuele checks, zodat je precies weet welke specifieke factoren je score drukken." },
      { question: "Is een 10/10 haalbaar?", answer: "In theorie ja, maar in de praktijk scoren zelfs topwebsites 8-9 omdat er altijd verbetermogelijkheden zijn. Een score van 8+ plaatst je in de top 10% van websites." }
    ]
  },
  "404-checker": {
    uniqueIntro: "Elke 404 pagina is een doodlopende weg voor je bezoekers en voor Google. De 404 Pagina Checker crawlt je website systematisch en vindt alle pagina's die een 404 status teruggeven – inclusief de pagina's die naar deze dode links verwijzen, zodat je precies weet waar je moet ingrijpen.",
    whatThisToolChecks: [
      "Alle interne pagina's die 404 teruggeven",
      "Pagina's die linken naar 404's (bron van het probleem)",
      "Externe links die naar je 404 pagina's verwijzen (verloren linkwaarde)",
      "Soft 404's: pagina's die 200 teruggeven maar leeg zijn",
      "Custom 404 pagina aanwezigheid en kwaliteit"
    ],
    uniqueFaqs: [
      { question: "Hoe erg zijn een paar 404 pagina's?", answer: "Een handvol 404's is normaal en niet schadelijk. Maar als belangrijke pagina's met backlinks 404 geven, verlies je linkwaarde. Fix die eerst. 10%+ 404's van je totale pagina's is een rood signaal." },
      { question: "Moet ik 404 pagina's altijd redirecten?", answer: "Alleen als er een logisch alternatief is. Een pagina over een uitverkocht product redirect je naar de categoriepagina. Een pagina zonder relevant alternatief mag een 404 blijven – maar met een goede custom 404 pagina." }
    ]
  },
  "duplicate-content-checker": {
    uniqueIntro: "Duplicate content verdeelt je rankingsignalen over meerdere URL's en verlaagt de kans dat een van je pagina's goed rankt. De Duplicate Content Checker vergelijkt pagina's binnen je website en identificeert (near-)duplicaten zodat je canonical tags kunt toevoegen of content kunt herschrijven.",
    whatThisToolChecks: [
      "Pagina's met identieke of bijna-identieke content",
      "URL-varianten die dezelfde content tonen (www vs non-www, HTTP vs HTTPS)",
      "Parameter-URL's die duplicaten creëren (?sort=, ?page=, etc.)",
      "Canonical tag status van gevonden duplicaten",
      "Percentage overeenkomst tussen vergelijkbare pagina's"
    ],
    uniqueFaqs: [
      { question: "Hoeveel overlap tussen pagina's is te veel?", answer: "Google definieert geen exact percentage, maar als 70%+ van de content identiek is, beschouwt Google het waarschijnlijk als duplicaat. Zorg dat elke pagina minstens 30-40% unieke, waardevolle content heeft." },
      { question: "Lost een canonical tag het duplicate content probleem op?", answer: "Grotendeels ja. Een canonical tag vertelt Google welke versie de voorkeur heeft. Maar het is een hint, geen directieve. Voor de beste resultaten: gebruik canonical tags én maak content unieker." }
    ]
  },
  "seo-spider-tool": {
    uniqueIntro: "De SEO Spider crawlt je website precies zoals Googlebot dat doet: het volgt links, leest meta tags, analyseert redirects en bouwt een complete kaart van je sitestructuur. Zo ontdek je problemen die Google tegenkomt maar die jij normaal niet ziet – van orphan pages tot redirect loops.",
    whatThisToolChecks: [
      "Alle bereikbare URL's via interne links",
      "Orphan pages: pagina's zonder interne links ernaartoe",
      "Response codes per URL (200, 301, 404, 500)",
      "Meta tags en heading structuur per pagina",
      "Klik-diepte: hoeveel klikken van de homepage tot elke pagina"
    ],
    uniqueFaqs: [
      { question: "Hoe verschilt een SEO spider van Google Search Console?", answer: "Search Console toont wat Google daadwerkelijk heeft gevonden. Een SEO spider toont wat er te vinden is. Search Console kan achterlopen; een spider geeft je de huidige status van je site." },
      { question: "Hoe vaak moet ik mijn website crawlen?", answer: "Na elke grote wijziging (redesign, migratie, content update) en anders maandelijks. Bij websites die dagelijks veranderen, wekelijks." }
    ]
  },
  "pagina-autoriteit-checker": {
    uniqueIntro: "Niet alle pagina's op je website zijn even sterk. De Pagina Autoriteit Checker meet de sterkte van individuele URL's op basis van hun backlinks en interne link equity. Zo weet je welke pagina's je kunt gebruiken als startpunt voor interne linking naar zwakkere pagina's.",
    whatThisToolChecks: [
      "Page Authority score (0-100) per URL",
      "Aantal backlinks naar de specifieke pagina",
      "Interne links die naar de pagina verwijzen",
      "Vergelijking met andere pagina's op je site",
      "Link equity distributie: hoeveel 'kracht' geeft deze pagina door"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen Domain Authority en Page Authority?", answer: "Domain Authority meet de sterkte van je hele domein. Page Authority meet de sterkte van één specifieke pagina. Een pagina op een sterk domein kan toch een lage PA hebben als die pagina weinig links heeft." },
      { question: "Hoe gebruik ik Page Authority voor interne linking?", answer: "Link vanuit pagina's met hoge PA naar pagina's die je wilt versterken. Zo verdeel je link equity strategisch naar je belangrijkste pagina's." }
    ]
  },
  "seo-health-check": {
    uniqueIntro: "Geen tijd voor een volledige audit? De SEO Health Check geeft je in 30 seconden een status update van de belangrijkste SEO-signalen. Denk aan het als een bloeddruktest: snel, pijnloos, en je weet direct of er iets mis is dat aandacht verdient.",
    whatThisToolChecks: [
      "Top-5 kritieke SEO issues (rode vlaggen)",
      "Indexatie status: is je site bereikbaar voor Google",
      "Title tag en meta description basis check",
      "SSL en mobiele basis check",
      "Snelheid: een quick performance indicatie"
    ],
    uniqueFaqs: [
      { question: "Vervangt de Health Check een volledige SEO audit?", answer: "Nee, het is een snelle temperatuurmeting. De Health Check vindt de grootste problemen in seconden. Voor een diepgaande analyse met prioriteiten en actieplan heb je een volledige audit nodig." },
      { question: "Hoe vaak moet ik een SEO health check doen?", answer: "Wekelijks als je actief aan je website werkt, maandelijks als er weinig verandert. Het duurt maar 30 seconden, dus maak er een routine van." }
    ]
  },
  "url-structuur-checker": {
    uniqueIntro: "Goede URL's zijn kort, beschrijvend en bevatten je zoekwoord. Slechte URL's zijn lang, vol parameters en onleesbaar. Google gebruikt URL-structuur als een (lichte) rankingfactor en gebruikers beoordelen de betrouwbaarheid van een link deels op de URL. De URL Structuur Checker analyseert al je URL's.",
    whatThisToolChecks: [
      "URL lengte (ideaal: onder 60 tekens)",
      "Speciale tekens, hoofdletters en underscores (vermijden)",
      "Zoekwoord aanwezigheid in de URL",
      "URL-diepte: aantal submappen (max 3 ideaal)",
      "Consistentie in URL-patronen over de hele site"
    ],
    uniqueFaqs: [
      { question: "Moet ik bestaande URL's wijzigen als ze slecht zijn?", answer: "Alleen als het echt nodig is. Elke URL-wijziging vereist een 301 redirect en je verliest tijdelijk rankings. Voor nieuwe pagina's: gebruik direct goede URL's. Bestaande URL's met veel backlinks? Laat ze." },
      { question: "Zijn hyphens of underscores beter in URL's?", answer: "Hyphens (-). Google behandelt hyphens als woordscheiders maar underscores niet. 'seo-tips' = twee woorden voor Google. 'seo_tips' = één woord." }
    ]
  },
  "wachtwoord-pagina-checker": {
    uniqueIntro: "Een onbedoeld noindex tag op een belangrijke pagina is een van de snelst schadelijke SEO-fouten: je pagina verdwijnt uit Google, vaak zonder dat je het merkt. De Noindex Checker scant je hele website en vindt pagina's die (mogelijk per ongeluk) geblokkeerd zijn voor indexatie.",
    whatThisToolChecks: [
      "Meta robots noindex tags per pagina",
      "X-Robots-Tag noindex in HTTP headers",
      "Pagina's geblokkeerd in robots.txt (niet crawlbaar)",
      "Canonical tags die naar andere URL's verwijzen (impliciet noindex)",
      "Pagina's in je sitemap die toch noindex hebben (conflict)"
    ],
    uniqueFaqs: [
      { question: "Hoe komt een noindex tag per ongeluk op mijn pagina?", answer: "Veelvoorkomende oorzaken: CMS-instelling die standaard op noindex staat voor nieuwe pagina's, een development site die live gaat zonder noindex te verwijderen, of een plugin die robots meta tags toevoegt." },
      { question: "Hoe snel verdwijnt een pagina uit Google na een noindex?", answer: "Meestal binnen 1-7 dagen nadat Googlebot de noindex heeft gezien. Hoe vaker Google je site crawlt, hoe sneller. Verwijder de noindex en vraag herindexering aan via Search Console." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA TECHNISCH (8)
  // ═══════════════════════════════════════
  "open-graph-checker": {
    uniqueIntro: "Wanneer iemand je pagina deelt op Facebook, LinkedIn of WhatsApp, bepalen Open Graph tags hoe het eruitziet: welke titel, beschrijving en afbeelding worden getoond. Ontbrekende of foutieve OG tags leiden tot lelijke previews die niemand wil klikken. De Open Graph Checker controleert dit.",
    whatThisToolChecks: [
      "og:title aanwezigheid en lengte",
      "og:description compleetheid en kwaliteit",
      "og:image aanwezigheid, afmetingen (1200x630 ideaal) en formaat",
      "og:type correctheid (website, article, product)",
      "og:url canonieke URL verwijzing"
    ],
    uniqueFaqs: [
      { question: "Welke OG image afmetingen moet ik gebruiken?", answer: "1200 x 630 pixels is de universele standaard die goed werkt op Facebook, LinkedIn, WhatsApp en Twitter. Gebruik altijd een afbeelding van minimaal 600x315 pixels." },
      { question: "Beïnvloeden Open Graph tags mijn SEO?", answer: "Niet direct. OG tags zijn voor social media, niet voor Google rankings. Maar betere social previews leiden tot meer klikken en shares, wat indirect meer verkeer en backlinks kan opleveren." }
    ]
  },
  "twitter-card-checker": {
    uniqueIntro: "Twitter (X) Cards bepalen hoe je link eruitziet op het platform: met of zonder afbeelding, met welke titel en beschrijving. De Twitter Card Checker valideert je Twitter card markup en toont een preview van hoe je link verschijnt wanneer iemand het deelt.",
    whatThisToolChecks: [
      "twitter:card type (summary, summary_large_image)",
      "twitter:title en twitter:description tags",
      "twitter:image aanwezigheid en formaat",
      "Fallback naar Open Graph tags indien Twitter tags ontbreken",
      "twitter:site en twitter:creator attributen"
    ],
    uniqueFaqs: [
      { question: "Moet ik zowel Open Graph als Twitter Card tags hebben?", answer: "Twitter valt terug op OG tags als Twitter-specifieke tags ontbreken. Maar voor optimale controle is het best practice om beide te hebben. Begin met OG tags, voeg twitter:card toe als minimum." },
      { question: "Welke twitter:card type moet ik kiezen?", answer: "summary_large_image voor pagina's met een sterke visuele hero image. summary (kleinere thumbnail) voor pagina's zonder opvallende afbeelding." }
    ]
  },
  "amp-validator": {
    uniqueIntro: "AMP (Accelerated Mobile Pages) laadt razendsnel op mobiel maar vereist strikte code-regels. Eén fout in je AMP markup kan ervoor zorgen dat Google de AMP-versie niet toont. De AMP Validator checkt je pagina tegen de volledige AMP specificatie en toont elke fout met oplossing.",
    whatThisToolChecks: [
      "Verplichte AMP boilerplate aanwezigheid",
      "Verboden HTML tags en attributen (bijv. <img> moet <amp-img> zijn)",
      "Inline CSS limiet (max 75KB)",
      "Externe stylesheet verwijzingen (niet toegestaan in AMP)",
      "AMP component correctheid (amp-img, amp-video, etc.)"
    ],
    uniqueFaqs: [
      { question: "Is AMP nog relevant in 2024/2025?", answer: "Google heeft AMP als rankingvoordeel afgeschaft. Het is niet meer vereist voor het 'Top Stories' carousel. Toch kan AMP nuttig zijn voor extreme snelheid op mobiel, maar het is geen SEO-must meer." },
      { question: "Moet ik mijn AMP pagina's behouden of verwijderen?", answer: "Als je bestaande AMP pagina's hebt die goed presteren, behoud ze. Voor nieuwe pagina's: investeer liever in reguliere pagina's die voldoen aan Core Web Vitals." }
    ]
  },
  "structured-data-tester": {
    uniqueIntro: "De Structured Data Tester combineert de functionaliteit van Google's Rich Results Test en Schema Validator in één tool. Het detecteert automatisch alle vormen van structured data op je pagina – JSON-LD, Microdata en RDFa – en valideert ze tegen zowel Schema.org als Google's specifieke richtlijnen.",
    whatThisToolChecks: [
      "Alle schema types aanwezig op de pagina",
      "Validatie tegen Google's richtlijnen (niet alleen Schema.org)",
      "Rich result eligibility: komt je markup in aanmerking voor rich snippets",
      "Fouten die rich results blokkeren",
      "Waarschuwingen voor aanbevolen maar ontbrekende velden"
    ],
    uniqueFaqs: [
      { question: "Waarom valideert Schema.org maar toont Google geen rich snippet?", answer: "Schema.org is breder dan wat Google ondersteunt. Bovendien bepaalt Google zelf of en wanneer rich results worden getoond, ongeacht correcte markup. Eligibility ≠ weergave." },
      { question: "Hoeveel structured data types kan ik per pagina gebruiken?", answer: "Meerdere types per pagina is prima en zelfs aanbevolen. Een productpagina kan Product, BreadcrumbList, Organization en FAQ schema tegelijk bevatten." }
    ]
  },
  "link-juice-calculator": {
    uniqueIntro: "Link equity (ook wel 'link juice') is de rankingkracht die via links wordt doorgegeven. Elke pagina verdeelt zijn equity over alle uitgaande links. De Link Juice Calculator analyseert hoe deze kracht door je website stroomt en welke pagina's te weinig of te veel ontvangen.",
    whatThisToolChecks: [
      "Link equity distributie per pagina",
      "Pagina's die veel equity ontvangen maar niet belangrijk zijn",
      "Belangrijke pagina's die te weinig equity krijgen",
      "Impact van nofollow links op equity flow",
      "Optimalisatie suggesties voor betere interne link verdeling"
    ],
    uniqueFaqs: [
      { question: "Wat is link equity precies?", answer: "Link equity is de 'stemwaarde' die via links wordt doorgegeven. Een pagina met veel sterke backlinks geeft via zijn interne links kracht door aan de pagina's waar hij naar linkt." },
      { question: "Kan ik link equity sturen met nofollow?", answer: "Vroeger gebruikten SEO's nofollow voor 'PageRank sculpting'. Google heeft bevestigd dat dit niet meer werkt zoals verwacht. De equity 'verdampt' bij nofollow links in plaats van herverdeeld te worden." }
    ]
  },
  "log-file-analyzer": {
    uniqueIntro: "Server log files bevatten de rauwste SEO-data: exacte records van elk bezoek van Googlebot aan je website. De Log File Analyzer toont welke pagina's Google crawlt, hoe vaak, met welke statuscode en hoeveel crawlbudget er naar onbelangrijke pagina's gaat.",
    whatThisToolChecks: [
      "Googlebot crawl frequentie per pagina",
      "Pagina's die nooit door Googlebot worden bezocht",
      "Crawl budget verspilling aan 404's, redirects en parameters",
      "Crawl timing: wanneer bezoekt Google je site",
      "Statuscode distributie van Googlebot bezoeken"
    ],
    uniqueFaqs: [
      { question: "Waar vind ik mijn server log files?", answer: "Bij je hostingprovider via cPanel (Raw Access Logs) of via FTP in de /logs map. Bij managed hosting kun je logs vaak downloaden via het dashboard." },
      { question: "Hoe groot moeten mijn log files zijn voor nuttige analyse?", answer: "Minimaal 2-4 weken aan data voor betrouwbare patronen. Grotere websites genereren meer data en hebben kortere periodes nodig. Kleine sites (< 100 pagina's) hebben 1-2 maanden nodig." }
    ]
  },
  "dns-checker": {
    uniqueIntro: "DNS configuratie beïnvloedt je SEO op meerdere manieren: van server response tijd tot domeinverificatie en e-mail authenticatie. De DNS Checker controleert je A, CNAME, MX, TXT en NS records op fouten en optimaliseert voor snelheid en betrouwbaarheid.",
    whatThisToolChecks: [
      "A en AAAA records: correct IP-adres verwijzing",
      "CNAME records: subdomain configuratie",
      "MX records: e-mail afleverbaarheid",
      "TXT records: SPF, DKIM en DMARC voor e-mail authenticatie",
      "DNS propagation status: zijn wijzigingen al live"
    ],
    uniqueFaqs: [
      { question: "Beïnvloedt DNS mijn website snelheid?", answer: "Ja. DNS lookup is de eerste stap bij het laden van je website. Een trage DNS provider voegt 50-200ms toe aan elke paginaload. Premium DNS providers (Cloudflare, Route53) zijn sneller." },
      { question: "Hoe lang duurt DNS propagation?", answer: "Typisch 1-48 uur, afhankelijk van de TTL (Time To Live) instellingen. Verlaag de TTL naar 300 seconden vóór een migratie voor snellere propagation." }
    ]
  },
  "mixed-content-checker": {
    uniqueIntro: "Mixed content ontstaat wanneer een HTTPS pagina HTTP resources (afbeeldingen, scripts, stylesheets) laadt. Browsers tonen waarschuwingen of blokkeren deze resources, wat je pagina kan breken. Bovendien ondermijnt het je HTTPS-status als rankingfactor. De Mixed Content Checker vindt alle schuldigen.",
    whatThisToolChecks: [
      "HTTP afbeeldingen op HTTPS pagina's",
      "HTTP scripts en stylesheets (active mixed content – wordt geblokkeerd)",
      "HTTP fonts, video's en andere media",
      "Third-party resources die over HTTP worden geladen",
      "Inline CSS met HTTP background-image URL's"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen active en passive mixed content?", answer: "Active mixed content (scripts, iframes) wordt door browsers geblokkeerd en kan je pagina breken. Passive mixed content (afbeeldingen, video) toont een waarschuwing maar wordt geladen. Beide moeten gefixt worden." },
      { question: "Hoe fix ik mixed content?", answer: "Vervang alle http:// URL's door https:// in je code en database. Gebruik protocol-relatieve URL's (//example.com) of volledige HTTPS URL's. Een Search & Replace tool voor je database maakt dit eenvoudig." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA CONTENT (8)
  // ═══════════════════════════════════════
  "heading-generator": {
    uniqueIntro: "Een pakkende heading bepaalt of bezoekers je content lezen of wegklikken. De Heading Generator combineert je zoekwoord met bewezen formules (how-to, lijsten, vragen, power words) om H1 en H2 suggesties te genereren die zowel SEO-geoptimaliseerd als klikbaar zijn.",
    whatThisToolChecks: [
      "Zoekwoord opname in de gegenereerde headings",
      "Lengte optimalisatie (ideaal: 6-12 woorden voor H1)",
      "Emotionele trigger woorden voor hogere CTR",
      "Heading type variatie (how-to, lijst, vraag, statement)",
      "Leesbaarheid en duidelijkheid van de suggesties"
    ],
    uniqueFaqs: [
      { question: "Hoelang moet mijn H1 zijn?", answer: "Idealiter 20-70 tekens. Kort genoeg om snel te scannen, lang genoeg om context en zoekwoord te bevatten. De beste H1's zijn specifiek, bevatten het zoekwoord en beloven een duidelijk resultaat." },
      { question: "Mag ik dezelfde heading als mijn title tag gebruiken?", answer: "Het mag, maar het is een gemiste kans. Gebruik je title tag voor Google (met zoekwoord focus) en je H1 voor bezoekers (met meer context of emotie). Lichte variatie is ideaal." }
    ]
  },
  "content-score-checker": {
    uniqueIntro: "De Content Score Checker beoordeelt je tekst op de factoren die écht uitmaken voor SEO: zoekwoord dekking, content lengte vergeleken met de top-10, structuur (headings, paragrafen), leesbaarheid en interne linking. Je krijgt een score van 0-100 met concrete verbeterpunten.",
    whatThisToolChecks: [
      "Zoekwoord en gerelateerde termen dekking",
      "Content lengte vs gemiddelde van de top-10 concurrenten",
      "Heading structuur en hiërarchie",
      "Leesbaarheid (Flesch-Douma score)",
      "Interne en externe links in de content"
    ],
    uniqueFaqs: [
      { question: "Welke content score moet ik nastreven?", answer: "80+ is goed, 90+ is excellent. De meeste ongeoptimaliseerde pagina's scoren 30-50. Focus op de specifieke verbeterpunten in plaats van alleen het getal." },
      { question: "Is content lengte belangrijker dan kwaliteit?", answer: "Nee, maar volledigheid wel. Google beloont content die het onderwerp volledig dekt. Vaak betekent dit langere content, maar opvulling met irrelevante tekst schaadt meer dan het helpt." }
    ]
  },
  "seo-schrijfassistent": {
    uniqueIntro: "De SEO Schrijfassistent geeft je real-time feedback terwijl je schrijft – zoals een spellchecker, maar dan voor SEO. Je krijgt directe suggesties over zoekwoordgebruik, heading structuur, zinslengte en leesbaarheid. Zo schrijf je content die direct geoptimaliseerd is, zonder achteraf alles te moeten herschrijven.",
    whatThisToolChecks: [
      "Zoekwoord frequentie en verdeling terwijl je typt",
      "Heading suggesties op logische plekken in de tekst",
      "Zinlengte waarschuwingen (te lang = moeilijk leesbaar)",
      "Passief taalgebruik detectie",
      "Content lengte ten opzichte van je target"
    ],
    uniqueFaqs: [
      { question: "Werkt de schrijfassistent ook voor Nederlandstalige content?", answer: "Ja, de tool is geoptimaliseerd voor Nederlands. Leesbaarheidscores gebruiken de Flesch-Douma formule die specifiek voor het Nederlands is ontwikkeld." },
      { question: "Vervangt dit een menselijke editor?", answer: "Nee, de tool focust op SEO-technische aspecten. Een menselijke editor beoordeelt toon, merkuitstraling en inhoudelijke correctheid. Combineer beide voor het beste resultaat." }
    ]
  },
  "slug-generator": {
    uniqueIntro: "Een goede URL slug is kort, beschrijvend en bevat je zoekwoord. De URL Slug Generator transformeert je paginatitel of onderwerp automatisch in een SEO-vriendelijke slug: lowercase, met hyphens, zonder stopwoorden en speciale tekens. Klaar om in je CMS te plakken.",
    whatThisToolChecks: [
      "Automatische conversie naar lowercase met hyphens",
      "Stopwoorden verwijdering (de, het, een, voor, etc.)",
      "Speciale tekens en diakritische tekens handling",
      "Lengte optimalisatie (max 3-5 woorden)",
      "Zoekwoord behoud in de slug"
    ],
    uniqueFaqs: [
      { question: "Moet ik Nederlandse of Engelse slugs gebruiken?", answer: "Gebruik Nederlandse slugs voor een Nederlandstalige website. Google begrijpt Nederlandse URL's perfect. /loodgieter-amsterdam is beter dan /plumber-amsterdam voor een Nederlandse site." },
      { question: "Moeten stopwoorden altijd uit de slug?", answer: "Meestal wel. 'tips-voor-seo' wordt '/seo-tips'. Maar soms is een stopwoord nodig voor duidelijkheid: '/wat-is-seo' is prima." }
    ]
  },
  "internal-link-suggestie": {
    uniqueIntro: "Interne links zijn een van de meest onderschatte SEO-tactieken. De Interne Link Suggestie Tool analyseert je tekst en toont waar je relevante links naar andere pagina's op je site kunt toevoegen. Zo versterk je de onderlinge connectie en help je Google je content beter te begrijpen.",
    whatThisToolChecks: [
      "Trefwoorden in je tekst die matchen met bestaande pagina's",
      "Anchor text kwaliteit: beschrijvend vs generiek",
      "Aantal interne links per pagina (te weinig of te veel)",
      "Link verdeling: zijn links gespreid door de content",
      "Orphan pages die een link verdienen maar geen hebben"
    ],
    uniqueFaqs: [
      { question: "Hoeveel interne links moet ik per artikel toevoegen?", answer: "3-5 relevante interne links per 1000 woorden is een goede richtlijn. Focus op relevantie: link alleen naar pagina's die echt waarde toevoegen voor de lezer." },
      { question: "Is anchor text voor interne links belangrijk?", answer: "Ja, maar anders dan bij externe links. Gebruik beschrijvende anchor text die het onderwerp van de bestemmingspagina beschrijft. Vermijd generiek ('klik hier') maar overdrijf niet met exact-match zoekwoorden." }
    ]
  },
  "featured-snippet-optimizer": {
    uniqueIntro: "Featured snippets zijn de 'positie 0' in Google: een uitgelicht antwoord boven alle andere resultaten. De Featured Snippet Optimizer analyseert of je content geschikt is voor een featured snippet en geeft concrete tips om je formaat, structuur en antwoord aan te passen.",
    whatThisToolChecks: [
      "Zoekwoord geschiktheid voor featured snippets",
      "Content format: past bij het verwachte snippet type (paragraaf, lijst, tabel)",
      "Antwoord beknoptheid: 40-60 woorden voor paragraaf snippets",
      "Heading + antwoord structuur (H2 vraag, direct gevolgd door antwoord)",
      "Concurrentie: wie heeft momenteel het snippet"
    ],
    uniqueFaqs: [
      { question: "Hoe groot is de kans dat ik een featured snippet krijg?", answer: "Pagina's in de top-10 komen in aanmerking. De kans is het grootst bij informationele zoekopdrachten (hoe, wat, waarom) en als je content het antwoord beknopt en gestructureerd presenteert." },
      { question: "Is een featured snippet altijd beter dan positie 1?", answer: "Meestal wel, maar niet altijd. Featured snippets kunnen 'zero-click' zoekopdrachten veroorzaken: de zoeker krijgt het antwoord in Google zonder door te klikken. Monitor je CTR." }
    ]
  },
  "faq-generator": {
    uniqueIntro: "FAQ's zijn goud voor SEO: ze targeten long-tail zoekwoorden, komen in aanmerking voor FAQ rich snippets en beantwoorden de vragen die je potentiële klanten hebben. De FAQ Generator maakt relevante vragen en antwoorden op basis van je onderwerp, klaar voor je pagina én voor FAQ Schema.",
    whatThisToolChecks: [
      "Vraag relevantie: passen de vragen bij je doelgroep",
      "Zoekwoord opname in vragen en antwoorden",
      "Antwoord lengte: informatief maar beknopt (50-100 woorden)",
      "Variatie in vraagtypes (definitie, vergelijking, prijs, hoe-werkt-het)",
      "FAQ Schema compatibiliteit van de output"
    ],
    uniqueFaqs: [
      { question: "Hoeveel FAQ's moet ik per pagina toevoegen?", answer: "5-10 vragen per pagina is optimaal. Genoeg om het onderwerp te dekken, niet zo veel dat het overweldigend wordt. Voor FAQ Schema: Google toont er maximaal 2-4 in de SERP." },
      { question: "Moet ik dezelfde FAQ's op meerdere pagina's tonen?", answer: "Nee, dat creëert duplicate content. Maak unieke FAQ's per pagina die specifiek zijn voor het onderwerp van die pagina." }
    ]
  },
  "content-brief-generator": {
    uniqueIntro: "Een content brief is je schrijfplan: het definieert het doelzoekwoord, de structuur, de content lengte, relevante subonderwerpen en interne links vóórdat je begint te schrijven. De Content Brief Generator analyseert de top-10 voor je zoekwoord en maakt een brief die je helpt content te creëren die beter is dan wat er al rankt.",
    whatThisToolChecks: [
      "Target zoekwoord en gerelateerde semantische termen",
      "Aanbevolen content lengte gebaseerd op top-10 gemiddelde",
      "Heading structuur suggesties (H2's en H3's)",
      "Onderwerpen die de top-10 concurrenten dekken",
      "Interne link mogelijkheden naar bestaande pagina's"
    ],
    uniqueFaqs: [
      { question: "Hoe gebruik ik een content brief?", answer: "Geef de brief aan je copywriter of gebruik het zelf als schrijfplan. Het zorgt ervoor dat je content het onderwerp volledig dekt, de juiste zoekwoorden bevat en de juiste structuur heeft om te ranken." },
      { question: "Is een content brief per pagina nodig?", answer: "Voor je belangrijkste pagina's en nieuwe blogposts: ja. Een brief voorkomt dat je achteraf moet herschrijven en zorgt dat elke pagina strategisch is geoptimaliseerd." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA LINKBUILDING (8)
  // ═══════════════════════════════════════
  "link-building-kansen": {
    uniqueIntro: "Linkbuilding hoeft geen cold outreach naar willekeurige websites te zijn. De Link Building Kansen Tool vindt websites in jouw niche die actief linken naar vergelijkbare content: resource pages, roundups, vergelijkingspagina's en gastblog-accepterende sites. Dit zijn warme kansen met hogere slaagkans.",
    whatThisToolChecks: [
      "Resource pages in je niche die extern linken",
      "Websites die gastblogs of bijdragen accepteren",
      "Pagina's met 'beste tools' of 'top-10' lijsten in je categorie",
      "Roundup posts en nieuwsbrieven die content cureren",
      "Domeinautoriteit en relevantie van gevonden kansen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel link kansen heb ik nodig om een verschil te maken?", answer: "Kwaliteit boven kwantiteit. 5-10 kwalitatieve backlinks per maand van relevante DA 30+ websites is effectiever dan 50 links van lage kwaliteit. Consistentie is belangrijker dan volume." },
      { question: "Hoe snel leveren nieuwe backlinks resultaat?", answer: "Nieuwe backlinks hebben 2-12 weken nodig om impact te hebben op je rankings. Sterke links van hoge autoriteit sites werken sneller dan links van onbekende sites." }
    ]
  },
  "gastblog-finder": {
    uniqueIntro: "Gastbloggen is een van de meest effectieve linkbuilding strategieën: je deelt je expertise op een gevestigd platform en krijgt een backlink in ruil. De Gastblog Finder identificeert websites in jouw branche die actief gastbijdragen publiceren, zodat je direct kunt beginnen met outreach.",
    whatThisToolChecks: [
      "Websites met 'schrijf voor ons' of 'gastblog' pagina's",
      "Domeinautoriteit van gastblog-mogelijkheden",
      "Publicatie frequentie en onderwerpsrelevantie",
      "Contact informatie en richtlijnen per website",
      "Sociale media activiteit en bereik van de website"
    ],
    uniqueFaqs: [
      { question: "Is gastbloggen nog effectief voor SEO in 2025?", answer: "Ja, mits je het goed doet. Focus op kwalitatieve, relevante websites waar je echte waarde toevoegt. Spam-gastblogs op irrelevante sites schaden meer dan ze helpen." },
      { question: "Moet ik betalen voor een gastblog plek?", answer: "Vermijd betaalde links – Google beschouwt dit als link spam. Kwalitatieve websites bieden gratis gastblog mogelijkheden in ruil voor goede content. Als een site geld vraagt, is het waarschijnlijk een linkfarm." }
    ]
  },
  "resource-pagina-finder": {
    uniqueIntro: "Resource pages zijn pagina's die nuttige links naar externe tools, gidsen en artikelen verzamelen. Ze linken al actief naar content in jouw niche – je hoeft ze alleen te overtuigen om jouw resource toe te voegen. De Resource Pagina Finder identificeert deze pagina's voor je.",
    whatThisToolChecks: [
      "Pagina's met titels als 'nuttige links', 'bronnen', 'resource guide'",
      "Domeinautoriteit van gevonden resource pages",
      "Relevantie van de bestaande links op de pagina",
      "Contactmogelijkheden van de website eigenaar",
      "Laatste update datum (recente = actief onderhouden)"
    ],
    uniqueFaqs: [
      { question: "Hoe overtuig ik iemand om mijn link toe te voegen?", answer: "Stuur een korte, persoonlijke e-mail. Benoem de resource page, leg uit wat je content toevoegt voor hun bezoekers en maak het makkelijk (geef de URL en een suggestie voor de anchor text)." },
      { question: "Welke content werkt het best voor resource page linkbuilding?", answer: "Uitgebreide gidsen, tools, templates, infographics en checklists. Content die als 'resource' bruikbaar is voor anderen linkt beter dan reguliere blogposts." }
    ]
  },
  "mention-finder": {
    uniqueIntro: "Als iemand je merk noemt zonder te linken, is dat een gemiste kans. De Brand Mention Finder zoekt vermeldingen van je bedrijfsnaam, producten of founders op het internet en filtert specifiek op vermeldingen zonder link. Eén vriendelijk mailtje converteert 10-20% van deze vermeldingen naar backlinks.",
    whatThisToolChecks: [
      "Vermeldingen van je merknaam op het internet",
      "Vermeldingen zonder link (de 'easy wins')",
      "Context van de vermelding (positief, neutraal, negatief)",
      "Domeinautoriteit van de vermeldende website",
      "Contactmogelijkheden voor link outreach"
    ],
    uniqueFaqs: [
      { question: "Hoe vaak moet ik op brand mentions checken?", answer: "Wekelijks tot maandelijks, afhankelijk van je merkbekendheid. Grotere merken krijgen dagelijks vermeldingen; MKB-bedrijven maandelijks. Stel alerts in voor continue monitoring." },
      { question: "Hoe vraag ik beleefd om een link?", answer: "Bedank voor de vermelding, leg kort uit dat een link nuttig is voor hun lezers (zodat die direct naar je kunnen navigeren) en geef de exacte URL die je gelinkt wilt zien. Kort, persoonlijk, geen druk." }
    ]
  },
  "infographic-submitter": {
    uniqueIntro: "Infographics zijn een van de meest deelbare content types en genereren gemiddeld 178% meer inbound links dan reguliere content. De Infographic Submitter vindt platforms, directories en blogs waar je je infographic kunt plaatsen voor maximale verspreiding en backlinks.",
    whatThisToolChecks: [
      "Infographic submission directories met hoge DA",
      "Niche-specifieke blogs die infographics publiceren",
      "Social media platforms voor visuele content",
      "Embed code generator voor makkelijk delen",
      "Tracking: welke sites je infographic hebben overgenomen"
    ],
    uniqueFaqs: [
      { question: "Werken infographics nog voor linkbuilding?", answer: "Ja, maar de bar is hoger dan vroeger. Een generieke infographic met open data werkt niet meer. Infographics met origineel onderzoek, unieke data of een verrassend inzicht trekken nog steeds veel links aan." },
      { question: "Moet ik een embed code bij mijn infographic plaatsen?", answer: "Absoluut. Een embed code maakt het voor andere sites eenvoudig om je infographic te plaatsen met automatische bronvermelding en backlink. Zonder embed code vergeten veel sites te linken." }
    ]
  },
  "link-reclamation-tool": {
    uniqueIntro: "Backlinks verdwijnen: websites gaan offline, pagina's worden verwijderd, URL's veranderen. De Link Reclamation Tool identificeert backlinks die je ooit had maar bent kwijtgeraakt. Dit zijn de makkelijkste links om terug te krijgen, want de website heeft al eerder naar je gelinkt.",
    whatThisToolChecks: [
      "Backlinks die in de afgelopen 3-6 maanden zijn verdwenen",
      "Reden voor verlies: 404, redirect, content wijziging",
      "Domeinautoriteit van verloren links (prioriteer hoge DA)",
      "Huidige status van de linkende pagina",
      "Vergelijking met totaal linkprofiel verlies"
    ],
    uniqueFaqs: [
      { question: "Hoe win ik een verloren backlink terug?", answer: "Zoek eerst uit waarom de link verdween. Als de pagina nog bestaat maar je link is verwijderd: neem contact op. Als je eigen pagina 404 geeft: maak een redirect naar relevante content." },
      { question: "Hoeveel verloren links is normaal?", answer: "5-10% linkverloop per jaar is normaal. Als je meer verliest dan je wint, heb je een probleem. Actieve link reclamation compenseert het natuurlijke verloop." }
    ]
  },
  "broken-link-finder": {
    uniqueIntro: "Broken link building is een elegante strategie: je vindt kapotte links op andere websites, maakt content die de dode link vervangt, en biedt de webmaster een werkend alternatief aan. Win-win: zij fixen een broken link, jij krijgt een backlink. De Broken Link Building Tool vindt deze kansen.",
    whatThisToolChecks: [
      "Kapotte uitgaande links op websites in jouw niche",
      "Domeinautoriteit van de pagina met de broken link",
      "Oorspronkelijke content van de dode link (via Wayback Machine)",
      "Contact informatie van de webmaster",
      "Aantal websites dat naar dezelfde dode URL linkt"
    ],
    uniqueFaqs: [
      { question: "Hoe effectief is broken link building?", answer: "Conversieratio's van 5-15% zijn realistisch. Het is effectiever dan cold outreach omdat je de webmaster helpt: je lost een probleem op (broken link) in ruil voor een link." },
      { question: "Moet ik de content van de dode link exact kopiëren?", answer: "Nee, maak iets beters. Gebruik de Wayback Machine om het oorspronkelijke onderwerp te begrijpen en maak een verbeterde versie die meer waarde biedt." }
    ]
  },
  "disavow-generator": {
    uniqueIntro: "Google's Disavow Tool laat je toxische backlinks negeren die je rankings schaden. Maar het disavow bestand heeft een strikt formaat nodig. De Disavow File Generator helpt je het correct op te stellen: importeer je backlink lijst, markeer de slechte links en download een kant-en-klaar .txt bestand.",
    whatThisToolChecks: [
      "Correct disavow bestandsformaat (domain: en URL regels)",
      "Syntax validatie vóór uploaden",
      "Dubbelingen detectie en verwijdering",
      "Waarschuwing bij het disavowen van potentieel goede links",
      "Commentaar regels voor documentatie"
    ],
    uniqueFaqs: [
      { question: "Is het disavow tool riskant om te gebruiken?", answer: "Ja, als je goede links disavowed verlies je linkwaarde. Gebruik het alleen als je echt toxische links hebt of een manuele actie hebt ontvangen. Bij twijfel: niet disavowen. Google negeert de meeste slechte links automatisch." },
      { question: "Hoe snel werkt een disavow?", answer: "Het kan weken tot maanden duren voordat Google je disavow bestand volledig verwerkt. De links moeten opnieuw gecrawld worden voordat ze genegeerd worden." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA LOKAAL (8)
  // ═══════════════════════════════════════
  "lokale-seo-audit": {
    uniqueIntro: "Lokale SEO omvat meer dan alleen je Google Bedrijfsprofiel. De Lokale SEO Audit analyseert alle aspecten tegelijk: je profiel, NAP-consistentie, lokale citaties, reviews, lokale content, en lokale backlinks. Je krijgt een compleet beeld van je lokale vindbaarheid met prioriteiten.",
    whatThisToolChecks: [
      "Google Bedrijfsprofiel volledigheid en optimalisatie",
      "NAP-consistentie over alle online platforms",
      "Lokale citaties: aantal en kwaliteit",
      "Review profiel: score, aantal en sentiment",
      "Lokale content aanwezigheid op je website"
    ],
    uniqueFaqs: [
      { question: "Hoe verschilt een lokale SEO audit van een reguliere SEO audit?", answer: "Een reguliere audit focust op technische en on-page factoren. Een lokale audit voegt specifieke factoren toe: Google Bedrijfsprofiel, citaties, NAP-consistentie, lokale reviews en geo-targeting." },
      { question: "Hoe snel kan ik mijn lokale SEO verbeteren?", answer: "Je Google Bedrijfsprofiel optimaliseren kan direct impact hebben (1-2 weken). Citaties opbouwen duurt 1-3 maanden. Significante verbetering in het local pack kost 3-6 maanden consistent werk." }
    ]
  },
  "google-maps-checker": {
    uniqueIntro: "Het local pack in Google Maps genereert 33% van alle klikken bij lokale zoekopdrachten. De Google Maps Checker toont je exacte positie in Maps voor specifieke zoekwoorden en locaties. Zo weet je of klanten in je servicegebied jou vinden of alleen je concurrenten.",
    whatThisToolChecks: [
      "Je positie in Google Maps per zoekwoord",
      "Zichtbaarheid vanuit verschillende locaties in je servicegebied",
      "Local pack ranking: sta je in de top-3",
      "Afstand factor: hoe ver reikt je zichtbaarheid",
      "Vergelijking met direct lokale concurrenten in Maps"
    ],
    uniqueFaqs: [
      { question: "Hoe kan ik hoger ranken in Google Maps?", answer: "De drie belangrijkste factoren zijn: relevantie (juiste categorieën en zoekwoorden), afstand (nabijheid tot de zoeker) en prominentie (reviews, citaties en website autoriteit)." },
      { question: "Waarom verschilt mijn Maps positie per locatie in de stad?", answer: "Google personaliseert Maps resultaten op basis van de exacte locatie van de zoeker. Een bakker rankt beter bij zoekers in zijn wijk dan bij zoekers aan de andere kant van de stad." }
    ]
  },
  "review-link-generator": {
    uniqueIntro: "De makkelijkste manier om meer Google reviews te krijgen is het wegnemen van frictie. De Review Link Generator maakt een directe link naar je Google review formulier. Klanten klikken, geven hun sterren en schrijven een review – zonder te hoeven zoeken. Deel de link via mail, WhatsApp of een QR code.",
    whatThisToolChecks: [
      "Correcte Google Place ID van je bedrijf",
      "Directe review link generatie (korte URL)",
      "QR code optie voor in-store gebruik",
      "Testlink om te verifiëren dat de link werkt",
      "Instructie voor delen via e-mail, SMS en social media"
    ],
    uniqueFaqs: [
      { question: "Mag ik klanten om reviews vragen?", answer: "Ja, Google staat het toe om klanten te vragen een review achter te laten. Wat niet mag: betalen voor reviews, selectief alleen tevreden klanten vragen, of review gating (eerst filteren op score)." },
      { question: "Wanneer is het beste moment om een review te vragen?", answer: "Direct na een positieve ervaring: na succesvolle levering, na een goed gesprek of na het oplossen van een probleem. Hoe korter na het positieve moment, hoe hoger de response rate." }
    ]
  },
  "opening-uren-checker": {
    uniqueIntro: "Inconsistente openingstijden frustreren klanten en verwarren Google. De Openingstijden Checker vergelijkt je uren op Google, Facebook, Yelp, je website en andere platforms. Eén verschil kan betekenen dat een klant voor een dichte deur staat – en een negatieve review achterlaat.",
    whatThisToolChecks: [
      "Openingstijden op Google Bedrijfsprofiel",
      "Openingstijden op je website",
      "Openingstijden op Facebook, Yelp en andere platforms",
      "Feestdagen en speciale uren",
      "Inconsistenties en verouderde informatie"
    ],
    uniqueFaqs: [
      { question: "Hoe belangrijk zijn correcte openingstijden voor SEO?", answer: "Directe impact. Google toont openingstijden prominent in het Knowledge Panel en Maps. Onjuiste uren leiden tot negatieve ervaringen en slechte reviews, wat je lokale ranking schaadt." },
      { question: "Moet ik feestdagen apart instellen?", answer: "Ja, Google Bedrijfsprofiel heeft een speciale optie voor feestdagen. Stel ze maanden van tevoren in. Google beloont profielen die deze details bijhouden met betere zichtbaarheid." }
    ]
  },
  "lokale-schema-checker": {
    uniqueIntro: "LocalBusiness Schema helpt Google je bedrijf te koppelen aan lokale zoekresultaten, het Knowledge Panel en Maps. De Lokale Schema Checker valideert je implementatie en controleert of alle velden correct zijn ingevuld – van openingstijden tot geo-coördinaten en service areas.",
    whatThisToolChecks: [
      "LocalBusiness schema aanwezigheid en type",
      "NAP-gegevens correctheid in het schema",
      "Openingstijden in ISO 8601 formaat",
      "Geo-coördinaten aanwezigheid en correctheid",
      "Optionele maar impactvolle velden: areaServed, serviceType, priceRange"
    ],
    uniqueFaqs: [
      { question: "Welke velden in LocalBusiness schema zijn verplicht?", answer: "Technisch zijn alleen @type en name verplicht, maar voor SEO-impact heb je minimaal name, address (PostalAddress), telephone, url en openingHours nodig." },
      { question: "Moet mijn LocalBusiness schema matchen met mijn Google Bedrijfsprofiel?", answer: "Ja, dit is cruciaal. NAP-gegevens, categorieën en openingstijden moeten identiek zijn. Inconsistenties tussen schema en profiel verminderen Google's vertrouwen in je bedrijfsgegevens." }
    ]
  },
  "bedrijvengids-checker": {
    uniqueIntro: "Bedrijvengidsen zijn een van de makkelijkste manieren om lokale citaties en backlinks op te bouwen. De Bedrijvengids Checker controleert de belangrijkste Nederlandse en internationale directories en toont waar je bedrijf wel en niet vermeld staat, zodat je snel de gaten kunt vullen.",
    whatThisToolChecks: [
      "Vermelding op grote Nederlandse directories (Gouden Gids, Detelefoongids, KvK)",
      "Vermelding op internationale platforms (Yelp, Facebook, Bing Places)",
      "Branche-specifieke directories relevant voor jouw sector",
      "NAP-correctheid per vermelding",
      "Dubbele of verouderde vermeldingen"
    ],
    uniqueFaqs: [
      { question: "Op welke bedrijvengidsen moet ik minimaal staan?", answer: "De basis voor Nederland: Google Bedrijfsprofiel, Bing Places, Facebook, Detelefoongids, Gouden Gids, Yelp en je branchespecifieke gids. Dat levert 7+ sterke citaties op." },
      { question: "Moet ik betalen voor bedrijvengids vermeldingen?", answer: "De basis vermeldingen op grote directories zijn gratis. Betaalde 'premium' vermeldingen hebben zelden SEO-waarde. Focus op gratis vermeldingen en zorg dat ze compleet en consistent zijn." }
    ]
  },
  "qr-code-generator": {
    uniqueIntro: "Een QR code in je winkel, op je visitekaartje of op je factuur die direct naar je Google review pagina leidt, verlaagt de drempel om een review te geven enorm. De Review QR Code Generator maakt een scanbare code die klanten direct naar jouw review formulier brengt.",
    whatThisToolChecks: [
      "QR code generatie met directe Google review link",
      "Scantest: werkt de QR code correct",
      "Print-kwaliteit: resolutie voor fysiek gebruik",
      "Customisatie: kleuren en logo integratie",
      "Download in meerdere formaten (PNG, SVG, PDF)"
    ],
    uniqueFaqs: [
      { question: "Waar moet ik de QR code plaatsen?", answer: "Bij de kassa, op de toonbank, op facturen, op visitekaartjes en in follow-up e-mails. Kies momenten waarop klanten positief zijn over je service." },
      { question: "Hoe groot moet de QR code geprint worden?", answer: "Minimaal 2x2 cm voor scan op 15-20 cm afstand. Voor posters of borden die van verder gescand worden: minimaal 4x4 cm. Zorg altijd voor voldoende contrast." }
    ]
  },
  "lokale-content-suggestie": {
    uniqueIntro: "Lokale content – artikelen over evenementen in je stad, samenwerkingen met lokale partners, of guides voor je buurt – versterkt je lokale SEO-signalen. De Lokale Content Suggestie Tool genereert content ideeën specifiek voor jouw stad en branche die je website meer lokale relevantie geven.",
    whatThisToolChecks: [
      "Trending lokale onderwerpen en evenementen",
      "Veelgestelde lokale vragen (bijv. 'beste [service] in [stad]')",
      "Seizoensgebonden lokale kansen",
      "Content gaps: wat lokale concurrenten wél schrijven",
      "Community-gerichte content mogelijkheden"
    ],
    uniqueFaqs: [
      { question: "Hoeveel lokale content heb ik nodig?", answer: "Begin met 1 sterke stadspagina per servicegebied en 2-3 lokale blogposts per kwartaal. Kwaliteit en relevantie zijn belangrijker dan volume." },
      { question: "Wat voor lokale content werkt het best?", answer: "Stadsgidsen gerelateerd aan je service, case studies met lokale klanten, samenwerkingen met lokale bedrijven, en antwoorden op lokale vragen ('Wat kost een [service] in [stad]?')." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA MONITORING (7)
  // ═══════════════════════════════════════
  "backlink-monitor": {
    uniqueIntro: "Je linkprofiel verandert dagelijks: nieuwe links verschijnen, bestaande verdwijnen. De Backlink Monitor houdt dit bij en waarschuwt je wanneer je belangrijke links verliest of verdachte links krijgt. Zo kun je snel reageren in plaats van maanden later de gevolgen te merken.",
    whatThisToolChecks: [
      "Nieuwe backlinks gedetecteerd in de afgelopen periode",
      "Verloren backlinks met oorspronkelijke DA",
      "Verdachte of potentieel toxische nieuwe links",
      "Netto link groei of krimp per maand",
      "Impact inschatting van verloren links op je rankings"
    ],
    uniqueFaqs: [
      { question: "Hoe vaak moet ik mijn backlinks checken?", answer: "Wekelijks is ideaal voor actief beheer. Minimaal maandelijks om grote veranderingen op te merken. Stel alerts in voor verloren links met DA 40+ zodat je direct kunt reageren." },
      { question: "Wat doe ik als ik plotseling veel spammy links krijg?", answer: "Eerst niets doen – Google negeert de meeste spam automatisch. Als het een negatieve SEO-aanval lijkt (duizenden spam links in korte tijd), documenteer het en overweeg een disavow." }
    ]
  },
  "keyword-positie-alert": {
    uniqueIntro: "Rankings veranderen snel en je wilt als eerste weten wanneer er iets mis is. De Keyword Positie Alert stuurt je een melding wanneer je posities voor belangrijke zoekwoorden significant wijzigen – zowel grote dalingen als grote stijgingen, zodat je snel kunt reageren of je successen kunt analyseren.",
    whatThisToolChecks: [
      "Dagelijkse positietracking voor je gekozen zoekwoorden",
      "Significante dalingen (drempel instelbaar: 3, 5 of 10 posities)",
      "Significante stijgingen die je wilt analyseren",
      "Correlatie met bekende Google updates",
      "Trend over de afgelopen 30 dagen per zoekwoord"
    ],
    uniqueFaqs: [
      { question: "Welke drempel moet ik instellen voor alerts?", answer: "5 posities is een goede standaard. Dag-tot-dag schommelingen van 1-3 posities zijn normaal en genereren te veel ruis. Een verandering van 5+ posities verdient aandacht." },
      { question: "Moet ik in paniek raken bij een ranking daling?", answer: "Niet meteen. Wacht 3-5 dagen: tijdelijke fluctuaties zijn normaal. Als de daling aanhoudt, analyseer de oorzaak: was er een Google update, is er content veranderd of is er een technisch probleem?" }
    ]
  },
  "site-wijziging-detector": {
    uniqueIntro: "Websites veranderen continu – soms onbedoeld. Een CMS update die meta tags overschrijft, een developer die per ongeluk een noindex toevoegt, of een plugin die je heading structuur wijzigt. De Site Wijziging Detector maakt snapshots en waarschuwt bij SEO-relevante veranderingen.",
    whatThisToolChecks: [
      "HTML content wijzigingen op je pagina's",
      "Meta tag veranderingen (title, description, robots)",
      "Heading structuur wijzigingen",
      "Nieuwe of verwijderde links",
      "Schema markup veranderingen"
    ],
    uniqueFaqs: [
      { question: "Hoe verschilt dit van de SEO Verandering Tracker?", answer: "De SEO Verandering Tracker focust op SEO-specifieke elementen (meta tags, robots). De Site Wijziging Detector monitort bredere content wijzigingen, inclusief tekst, afbeeldingen en layout veranderingen." },
      { question: "Kan ik specifieke pagina's prioriteren voor monitoring?", answer: "Ja, begin met je top-10 verkeer pagina's en je belangrijkste landingspagina's. Dit zijn de pagina's waar wijzigingen de meeste impact hebben op je totale SEO." }
    ]
  },
  "concurrentie-monitor": {
    uniqueIntro: "Terwijl jij slaapt, optimaliseren je concurrenten hun website. De Concurrentie Monitor houdt hun SEO-activiteiten bij: nieuwe content, gewijzigde meta tags, nieuwe backlinks en ranking veranderingen. Zo weet je altijd wat ze doen en kun je proactief reageren.",
    whatThisToolChecks: [
      "Nieuwe pagina's gepubliceerd door concurrenten",
      "Content wijzigingen op bestaande pagina's",
      "Nieuwe backlinks naar concurrenten",
      "Ranking veranderingen voor overlappende zoekwoorden",
      "Technische wijzigingen op concurrenten websites"
    ],
    uniqueFaqs: [
      { question: "Hoeveel concurrenten moet ik monitoren?", answer: "3-5 directe SEO-concurrenten is optimaal. Meer monitoren genereert te veel ruis. Focus op de bedrijven die consistent in de top-10 verschijnen voor je belangrijkste zoekwoorden." },
      { question: "Wat doe ik met de informatie van de concurrentie monitor?", answer: "Reageer strategisch: als een concurrent nieuwe content publiceert over een onderwerp dat jij ook behandelt, update je eigen content om beter te zijn. Als ze nieuwe links krijgen, zoek vergelijkbare kansen." }
    ]
  },
  "content-veroudering-checker": {
    uniqueIntro: "Content heeft een houdbaarheidsdatum: statistieken veranderen, informatie veroudert en concurrenten publiceren nieuwere versies. Google geeft voorrang aan actuele content. De Content Veroudering Checker identificeert pagina's op je site die aan een update toe zijn voordat ze rankings verliezen.",
    whatThisToolChecks: [
      "Publicatiedatum vs laatste update per pagina",
      "Pagina's ouder dan 12 maanden zonder update",
      "Verouderde statistieken of jaartallen in de tekst",
      "Dalende rankings die wijzen op verouderde content",
      "Vergelijking met publicatiedatum van concurrerende content"
    ],
    uniqueFaqs: [
      { question: "Hoe oud is 'te oud' voor content?", answer: "Het hangt af van het onderwerp. Nieuwsgerelateerde content veroudert in weken. Evergreen content kan 1-2 jaar mee, maar heeft dan toch een update nodig. Als je rankings dalen, is het tijd om te updaten." },
      { question: "Moet ik verouderde content verwijderen of updaten?", answer: "Update als het onderwerp nog relevant is. Verwijder (of consolideer) als het overbodig is. Nooit simpelweg de datum wijzigen zonder de content te verbeteren – Google en gebruikers merken dit." }
    ]
  },
  "indexatie-monitor": {
    uniqueIntro: "Als het aantal geïndexeerde pagina's plotseling daalt, is er iets mis: onbedoelde noindex tags, server problemen of een penalty. De Indexatie Monitor volgt hoeveel pagina's Google indexeert en waarschuwt bij significante veranderingen zodat je snel kunt ingrijpen.",
    whatThisToolChecks: [
      "Totaal aantal geïndexeerde pagina's over tijd",
      "Dagelijkse veranderingen in indexatie",
      "Pagina's die uit de index verdwijnen",
      "Nieuwe pagina's die worden opgenomen",
      "Correlatie met sitemap veranderingen"
    ],
    uniqueFaqs: [
      { question: "Hoeveel van mijn pagina's moeten geïndexeerd zijn?", answer: "In principe alle pagina's die je wilt laten ranken. Als je 100 pagina's hebt maar Google indexeert er maar 60, mist 40% van je content. Onderzoek waarom de rest niet wordt geïndexeerd." },
      { question: "Wat als mijn geïndexeerde pagina's plotseling halveren?", answer: "Dit is een noodsituatie. Check direct: (1) robots.txt voor blokkades, (2) noindex tags op belangrijke pagina's, (3) server errors in Search Console, (4) manuele acties. Reageer binnen 24 uur." }
    ]
  },
  "ssl-verloop-monitor": {
    uniqueIntro: "Een verlopen SSL-certificaat veroorzaakt browserwaarschuwingen die 95% van je bezoekers wegjaagt. Bovendien verlies je je HTTPS-status als rankingfactor. De SSL Verloop Monitor checkt de vervaldatum van je certificaat en waarschuwt je ruim van tevoren zodat je nooit verrast wordt.",
    whatThisToolChecks: [
      "Huidige vervaldatum van je SSL-certificaat",
      "Dagen tot verloop",
      "Automatische vernieuwing status (Let's Encrypt)",
      "Certificaat keten volledigheid",
      "Backup reminder instellingen"
    ],
    uniqueFaqs: [
      { question: "Hoe lang van tevoren moet ik mijn SSL vernieuwen?", answer: "Vernieuw minimaal 30 dagen voor verloop. Bij automatische vernieuwing (Let's Encrypt) gebeurt dit standaard 30 dagen vooraf, maar monitor dit – automatische vernieuwing kan falen." },
      { question: "Wat gebeurt er als mijn SSL verloopt?", answer: "Browsers tonen een fullscreen waarschuwing die bezoekers afschrikt. Google kan je HTTPS-status intrekken. En als het langer dan een paar dagen duurt, kun je rankings verliezen." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA SNELHEID (7)
  // ═══════════════════════════════════════
  "lighthouse-tester": {
    uniqueIntro: "Google Lighthouse is de gouden standaard voor website audits. De Lighthouse Tester voert een volledige audit uit op vier pijlers: Performance, Accessibility, Best Practices en SEO. Je krijgt een score van 0-100 per categorie met directe verbeterpunten – dezelfde tool die Google zelf gebruikt.",
    whatThisToolChecks: [
      "Performance score met Core Web Vitals details",
      "Accessibility score met WCAG 2.1 checks",
      "Best Practices: security headers, deprecated API's",
      "SEO score: meta tags, crawlbaarheid, structured data",
      "Opportunities en Diagnostics per categorie"
    ],
    uniqueFaqs: [
      { question: "Is de Lighthouse score een rankingfactor?", answer: "De Lighthouse score zelf niet, maar de Core Web Vitals die het meet (LCP, INP, CLS) zijn directe rankingfactoren. Een hoge Lighthouse Performance score correleert sterk met goede CWV." },
      { question: "Waarom verschilt mijn Lighthouse score elke keer?", answer: "Lighthouse wordt beïnvloed door je netwerk, server load en achtergrondprocessen. Run het minimaal 3 keer en neem het gemiddelde. Consistente trends zijn belangrijker dan individuele scores." }
    ]
  },
  "ttfb-tester": {
    uniqueIntro: "Time to First Byte (TTFB) is de tijd die je server nodig heeft om het eerste byte terug te sturen na een request. Een trage TTFB vertraagt alles wat daarna komt. De TTFB Tester meet je server response tijd en vergelijkt met benchmarks, zodat je weet of je hosting het bottleneck is.",
    whatThisToolChecks: [
      "Server response tijd in milliseconden",
      "Vergelijking met Google's TTFB benchmark (< 800ms goed)",
      "DNS lookup tijd als onderdeel van TTFB",
      "TLS/SSL handshake duur",
      "Server processing tijd"
    ],
    uniqueFaqs: [
      { question: "Wat is een goede TTFB?", answer: "Onder 200ms is excellent, onder 500ms is goed, onder 800ms is acceptabel. Boven 1 seconde is een probleem dat je andere snelheidsmetrieken ondermijnt." },
      { question: "Hoe verbeter ik mijn TTFB?", answer: "Upgrade je hosting (shared → VPS → dedicated), activeer server-side caching (Redis, Varnish), gebruik een CDN en optimaliseer database queries. Trage TTFB is bijna altijd een hosting/server probleem." }
    ]
  },
  "waterfall-analyzer": {
    uniqueIntro: "Een waterfall chart toont precies in welke volgorde je pagina laadt: elke request, de timing, de afhankelijkheden. De Waterfall Analyzer visualiseert dit en laat zien welke bestanden de bottleneck vormen – is het een enorme afbeelding, een traag third-party script of een render-blocking stylesheet?",
    whatThisToolChecks: [
      "Laadvolgorde van alle resources (HTML, CSS, JS, afbeeldingen)",
      "Timing per resource: DNS, connect, TTFB, download",
      "Afhankelijkheden: welke resources blokkeren andere",
      "Totaal aantal requests en bestandsgrootte",
      "Kritieke pad: de langste keten van opeenvolgende loads"
    ],
    uniqueFaqs: [
      { question: "Hoe lees ik een waterfall chart?", answer: "Links staat de resource, rechts de tijdlijn. Lange balken = trage loads. Balken die pas starten nadat een andere eindigt = afhankelijkheden. Focus op de langste balken en de langste ketens." },
      { question: "Wat is het 'kritieke pad'?", answer: "De langste opeenvolgende keten van resources die geladen moeten worden voordat de pagina zichtbaar is. Verkort dit pad door resources te paralleliseren, te defer'en of inline te plaatsen." }
    ]
  },
  "cdn-tester": {
    uniqueIntro: "Een CDN (Content Delivery Network) serveert je website vanuit servers dichtbij de bezoeker. De CDN Performance Tester meet je laadtijd vanuit meerdere locaties wereldwijd om te verifiëren dat je CDN correct werkt en je content overal snel beschikbaar is.",
    whatThisToolChecks: [
      "Laadtijd vanuit 10+ wereldwijde locaties",
      "TTFB verschil per locatie (CDN impact)",
      "CDN cache status: wordt content gecached",
      "Consistentie: zelfde snelheid overal of grote variatie",
      "CDN provider detectie en configuratie check"
    ],
    uniqueFaqs: [
      { question: "Heb ik een CDN nodig als mijn publiek alleen in Nederland is?", answer: "Het helpt toch. Zelfs voor een Nederlands publiek vermindert een CDN de load op je origin server en beschermt tegen DDoS. Cloudflare's gratis plan is een no-brainer voor elke website." },
      { question: "Welke CDN is het best voor SEO?", answer: "Cloudflare, Fastly en AWS CloudFront zijn de meest gebruikte. Voor Nederlandse websites is Cloudflare de populairste keuze vanwege het sterke gratis plan en de eenvoudige setup." }
    ]
  },
  "font-optimizer": {
    uniqueIntro: "Web fonts zijn een verrassend grote bron van laadvertraging: ze blokkeren het renderen van tekst totdat ze geladen zijn. De Font Optimizer analyseert je font loading strategie en geeft concrete tips om tekst direct zichtbaar te maken via font-display en font subsetting.",
    whatThisToolChecks: [
      "Aantal en totale grootte van geladen web fonts",
      "font-display property (swap, block, fallback, optional)",
      "Font formaten: WOFF2 gebruik (meest efficiënt)",
      "Preload hints voor kritieke fonts",
      "Font subsetting mogelijkheden (alleen benodigde tekens)"
    ],
    uniqueFaqs: [
      { question: "Wat is font-display: swap?", answer: "Het toont direct een systeemfont terwijl het webfont laadt, en 'swapt' naar het webfont zodra het klaar is. Dit voorkomt onzichtbare tekst (FOIT) en verbetert je LCP score aanzienlijk." },
      { question: "Hoeveel fonts mag ik laden voor optimale snelheid?", answer: "Idealiter 1-2 font families met maximaal 3-4 varianten (regular, bold, italic). Elke extra font variant voegt 20-50KB toe. Gebruik systeemfonts als fallback." }
    ]
  },
  "third-party-checker": {
    uniqueIntro: "Third-party scripts – analytics, chat widgets, social plugins, advertentie trackers – zijn verantwoordelijk voor gemiddeld 57% van de JavaScript laadtijd op websites. De Third Party Script Checker toont de impact van elk extern script op je laadtijd en INP score.",
    whatThisToolChecks: [
      "Alle third-party scripts op je pagina",
      "Laadtijd en bestandsgrootte per script",
      "Impact op Total Blocking Time en INP",
      "Scripts die render-blocking zijn",
      "Ongebruikte third-party scripts die verwijderd kunnen worden"
    ],
    uniqueFaqs: [
      { question: "Welke third-party scripts schaden mijn snelheid het meest?", answer: "Live chat widgets, social media embeds en meerdere analytics tools zijn de grootste boosdoeners. Eén chat widget kan 500ms+ toevoegen aan je laadtijd." },
      { question: "Hoe verminder ik de impact van third-party scripts?", answer: "Lazy load scripts die niet direct nodig zijn (bijv. chat widget pas na 5 seconden). Gebruik async of defer. Overweeg of je elk script echt nodig hebt – minder scripts = snellere site." }
    ]
  },
  "caching-checker": {
    uniqueIntro: "Browser caching slaat bestanden lokaal op zodat terugkerende bezoekers niet alles opnieuw hoeven te downloaden. De Cache Header Checker controleert of je server de juiste cache headers stuurt per bestandstype, zodat afbeeldingen, CSS en JavaScript efficiënt worden gecached.",
    whatThisToolChecks: [
      "Cache-Control headers per resource type",
      "Expires headers en max-age instellingen",
      "ETag implementatie voor cache validatie",
      "Statische resources zonder caching (gemiste kans)",
      "Aanbevolen cache duur per bestandstype"
    ],
    uniqueFaqs: [
      { question: "Hoe lang moet ik bestanden cachen?", answer: "Afbeeldingen en fonts: 1 jaar (ze veranderen zelden). CSS en JS: 1 maand tot 1 jaar (gebruik versie-hashes in bestandsnamen). HTML: kort of niet cachen (moet altijd actueel zijn)." },
      { question: "Wat als ik gecachte bestanden moet updaten?", answer: "Gebruik 'cache busting': voeg een versienummer of hash toe aan de bestandsnaam (style.v2.css of style.abc123.css). Zo downloadt de browser automatisch de nieuwe versie." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA STRUCTURED DATA (8)
  // ═══════════════════════════════════════
  "article-schema-generator": {
    uniqueIntro: "Article Schema vertelt Google dat je pagina een nieuwsartikel of blogpost is, wie de auteur is, wanneer het gepubliceerd werd en wanneer het voor het laatst is bijgewerkt. Dit verhoogt je kans op weergave in Google News, Discover en de Top Stories carousel.",
    whatThisToolChecks: [
      "Verplichte velden: headline, image, datePublished",
      "Auteur informatie: name en url",
      "Publisher informatie: name en logo",
      "dateModified voor content freshness signaal",
      "Article type selectie (NewsArticle, BlogPosting, etc.)"
    ],
    uniqueFaqs: [
      { question: "Welk Article type moet ik kiezen?", answer: "BlogPosting voor reguliere blogs, NewsArticle voor nieuwsartikelen, TechArticle voor technische documentatie. Kies het type dat het best past bij je content – Google kan je bestraffen voor een verkeerd type." },
      { question: "Moet ik dateModified updaten bij kleine wijzigingen?", answer: "Alleen bij substantiële updates die de inhoud veranderen. Een typo fix rechtvaardigt geen dateModified update. Misbruik hiervan (de datum updaten zonder content te verbeteren) kan je rankings schaden." }
    ]
  },
  "event-schema-generator": {
    uniqueIntro: "Event Schema laat Google je evenementen tonen met datum, locatie en ticketprijs direct in de zoekresultaten. De Event Schema Generator maakt het eenvoudig om correct JSON-LD te genereren voor je workshops, webinars, concerten of conferenties.",
    whatThisToolChecks: [
      "Verplichte velden: name, startDate, location",
      "Locatie type: PhysicalLocation of VirtualLocation",
      "Ticket informatie: offers met price en availability",
      "Evenement status: scheduled, cancelled, postponed",
      "Performer en organizer informatie"
    ],
    uniqueFaqs: [
      { question: "Werkt Event Schema ook voor online evenementen?", answer: "Ja, gebruik VirtualLocation met de URL van je webinar of stream. Google toont online events met een 'Online Event' label in de zoekresultaten." },
      { question: "Moet ik het schema verwijderen nadat het event voorbij is?", answer: "Google raadt aan het schema te laten staan en de status te wijzigen naar 'EventCompleted'. Verouderde events verdwijnen automatisch uit de rich results." }
    ]
  },
  "review-schema-generator": {
    uniqueIntro: "Review sterren in Google zoekresultaten verhogen je CTR met 20-35%. De Review Schema Generator maakt correcte Review en AggregateRating JSON-LD markup zodat Google sterren, scores en review-aantallen bij je resultaat kan tonen.",
    whatThisToolChecks: [
      "Review of AggregateRating type selectie",
      "RatingValue en bestRating/worstRating configuratie",
      "ReviewCount voor AggregateRating",
      "Author informatie bij individuele reviews",
      "ItemReviewed koppeling aan het beoordeelde item"
    ],
    uniqueFaqs: [
      { question: "Mag ik Review schema op mijn eigen website gebruiken?", answer: "Ja, maar alleen voor daadwerkelijke reviews van klanten die op je site staan. Self-serving reviews (je eigen producten beoordelen) zijn verboden. Google kan je rich snippet intrekken bij misbruik." },
      { question: "Kan ik AggregateRating gebruiken voor mijn hele bedrijf?", answer: "Alleen in combinatie met LocalBusiness schema op je homepage. Op productpagina's koppel je AggregateRating aan het specifieke product. Mix deze niet." }
    ]
  },
  "video-schema-generator": {
    uniqueIntro: "Video's met VideoObject schema verschijnen in Google's video zoekresultaten en in de video carousel – een extra kanaal voor organisch verkeer. De Video Schema Generator maakt de JSON-LD markup met alle verplichte velden zodat Google je video's kan ontdekken en tonen.",
    whatThisToolChecks: [
      "Verplichte velden: name, description, thumbnailUrl, uploadDate",
      "contentUrl of embedUrl voor video locatie",
      "duration in ISO 8601 formaat",
      "Clip markup voor key moments (timestamps)",
      "Publisher en author informatie"
    ],
    uniqueFaqs: [
      { question: "Werkt VideoObject schema ook voor embedded YouTube video's?", answer: "Ja, gebruik embedUrl met de YouTube embed URL. Google kan zowel zelf-gehoste als embedded video's tonen in video resultaten mits het schema correct is." },
      { question: "Moet ik key moments (clip markup) toevoegen?", answer: "Het is sterk aanbevolen. Key moments laten zoekers direct naar het relevante deel van je video springen vanuit de zoekresultaten, wat de gebruikerservaring en CTR verbetert." }
    ]
  },
  "howto-schema-generator": {
    uniqueIntro: "HowTo Schema toont je stap-voor-stap handleiding direct in Google, compleet met afbeeldingen, tijdsindicatie en benodigde materialen. De HowTo Schema Generator maakt de JSON-LD markup voor je tutorials, recepten en DIY-gidsen.",
    whatThisToolChecks: [
      "Correcte HowTo type en step nesting",
      "Verplichte velden per stap: name en text",
      "Optionele image per stap voor visuele rich results",
      "totalTime in ISO 8601 formaat",
      "Supply en tool lijsten voor benodigdheden"
    ],
    uniqueFaqs: [
      { question: "Toont Google nog HowTo rich results?", answer: "Google heeft in 2023 HowTo rich results voor desktop verwijderd maar toont ze nog op mobiel. De markup blijft waardevol voor Google's begrip van je content en kan in de toekomst weer verschijnen." },
      { question: "Hoeveel stappen zijn optimaal?", answer: "3-10 stappen werken het best. Te weinig stappen lijken oppervlakkig; te veel worden niet volledig getoond in de rich result. Splits complexe stappen op in substappen." }
    ]
  },
  "recipe-schema-generator": {
    uniqueIntro: "Recipe Schema is een van de rijkste structured data types: het toont afbeeldingen, bereidingstijd, calorieën, beoordeling en ingrediënten direct in Google. De Recipe Schema Generator maakt een compleet JSON-LD blok voor je recepten, klaar voor de Google recepten carousel.",
    whatThisToolChecks: [
      "Verplichte velden: name, image, recipeIngredient",
      "Bereidingstijd: prepTime, cookTime, totalTime",
      "Voedingswaarde (nutrition) informatie",
      "RecipeCategory en recipeCuisine classificatie",
      "Review sterren en AggregateRating koppeling"
    ],
    uniqueFaqs: [
      { question: "Moet ik alle voedingswaarden invullen?", answer: "Het is niet verplicht maar sterk aanbevolen. Recepten met voedingsinformatie hebben een grotere kans op weergave in de rich results en trekken gezondheid-bewuste zoekers." },
      { question: "Werkt Recipe Schema alleen voor food blogs?", answer: "Primair ja, maar Google toont recepten van alle websites die het schema correct implementeren. Zelfs een bedrijfswebsite met een receptensectie kan hiervan profiteren." }
    ]
  },
  "software-schema-generator": {
    uniqueIntro: "SoftwareApplication Schema laat Google informatie over je app of software tonen in de zoekresultaten: rating, prijs, besturingssysteem en downloads. De generator maakt een correct JSON-LD blok voor je SaaS product, mobiele app of desktop software.",
    whatThisToolChecks: [
      "Verplichte velden: name, operatingSystem, applicationCategory",
      "Offers met price en priceCurrency (of 'gratis')",
      "AggregateRating voor app reviews",
      "Screenshot URL's voor visuele weergave",
      "DownloadUrl en installUrl verwijzingen"
    ],
    uniqueFaqs: [
      { question: "Moet ik SoftwareApplication schema op mijn homepage of productpagina zetten?", answer: "Op de productpagina die het meest relevant is voor je software. Als je meerdere producten hebt, voeg per product een apart schema toe op de bijbehorende pagina." },
      { question: "Kan ik gratis en betaalde versies in één schema opnemen?", answer: "Ja, voeg meerdere Offers toe met verschillende prices. Gebruik 'Free' als type voor de gratis versie en de exacte prijs voor betaalde plannen." }
    ]
  },
  "organization-schema-generator": {
    uniqueIntro: "Organization Schema helpt Google je merk te herkennen en een Knowledge Panel te tonen met je logo, contactgegevens, social media links en meer. De generator maakt een compleet JSON-LD blok dat je op je homepage plaatst als digitaal visitekaartje voor Google.",
    whatThisToolChecks: [
      "Verplichte velden: name, url, logo",
      "ContactPoint met telefoon en e-mail",
      "SameAs verwijzingen naar social media profielen",
      "Address met PostalAddress details",
      "FoundingDate en numberOfEmployees (optioneel maar impactvol)"
    ],
    uniqueFaqs: [
      { question: "Waar moet Organization schema staan?", answer: "Op je homepage. Het hoeft maar op één pagina te staan – Google begrijpt dat het voor je hele website geldt. Voeg het toe aan de <head> in een JSON-LD script block." },
      { question: "Leidt Organization schema tot een Knowledge Panel?", answer: "Het helpt, maar garandeert het niet. Google genereert Knowledge Panels op basis van meerdere bronnen: je schema, Wikipedia, Wikidata en andere vertrouwde bronnen. Het schema is een belangrijke puzzelstuk." }
    ]
  },

  // ═══════════════════════════════════════
  // P2: EXTRA KEYWORD (8)
  // ═══════════════════════════════════════
  "related-keyword-tool": {
    uniqueIntro: "Google begrijpt onderwerpen, niet alleen individuele woorden. De Related Keyword Tool vindt semantisch gerelateerde termen die je content verrijken en Google helpen het onderwerp beter te begrijpen. Door deze termen natuurlijk in je tekst te verwerken, vergroot je je kans om te ranken op een breder scala aan zoektermen.",
    whatThisToolChecks: [
      "Semantisch gerelateerde zoekwoorden via NLP analyse",
      "TF-IDF score: hoe vaak topresultaten deze termen gebruiken",
      "Gerelateerde entiteiten en concepten",
      "Synoniemen en variaties van je zoekwoord",
      "Co-occurrence patronen in de top-10 resultaten"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen gerelateerde en long tail zoekwoorden?", answer: "Long tail zoekwoorden zijn specifiekere versies van je zoekwoord. Gerelateerde zoekwoorden zijn semantisch verwante termen die het onderwerp verbreden. Beide zijn belangrijk voor volledige topic coverage." },
      { question: "Hoeveel gerelateerde termen moet ik in mijn tekst verwerken?", answer: "Gebruik 10-20 gerelateerde termen per 1000 woorden, maar alleen als ze natuurlijk passen. Forceer geen termen – Google's NLP is geavanceerd genoeg om onnatuurlijk gebruik te detecteren." }
    ]
  },
  "keyword-moeilijkheid-tool": {
    uniqueIntro: "Niet elk zoekwoord is haalbaar. De Keyword Moeilijkheid Tool schat hoe lastig het is om in de top-10 te ranken voor een specifiek zoekwoord, gebaseerd op de autoriteit en content kwaliteit van de huidige resultaten. Zo voorkom je dat je maanden investeert in onhaalbare zoekwoorden.",
    whatThisToolChecks: [
      "Moeilijkheidsscore (0-100) gebaseerd op huidige top-10",
      "Gemiddelde Domain Authority van de top-10",
      "Gemiddelde backlinks naar de top-10 pagina's",
      "Content kwaliteit en lengte van de concurrentie",
      "Geschat verkeer als je positie 1 bereikt"
    ],
    uniqueFaqs: [
      { question: "Welke moeilijkheidsscore is haalbaar voor mijn website?", answer: "Vergelijk de gemiddelde DA van de top-10 met je eigen DA. Als de top-10 gemiddeld DA 40 heeft en jij DA 20, is het lastig maar niet onmogelijk – vooral met sterke content. Begin met zoekwoorden waar je DA gelijk of hoger is." },
      { question: "Is een moeilijk zoekwoord altijd beter dan een makkelijk zoekwoord?", answer: "Niet per se. Een makkelijk zoekwoord met hoog koop-intentie kan meer omzet opleveren dan een moeilijk informatief zoekwoord met veel volume. Denk in business waarde, niet alleen in moeilijkheid." }
    ]
  },
  "zoekwoord-combinatie-tool": {
    uniqueIntro: "De Zoekwoord Combinatie Tool neemt twee of meer woordlijsten en creëert alle mogelijke combinaties. Voer 'diensten' in lijst A en 'steden' in lijst B, en je krijgt direct alle 'dienst + stad' combinaties – ideaal voor lokale SEO keyword research op schaal.",
    whatThisToolChecks: [
      "Alle mogelijke combinaties van 2-4 woordlijsten",
      "Totaal aantal gegenereerde combinaties",
      "Export mogelijkheden (CSV, clipboard)",
      "Prefix en suffix opties per combinatie",
      "Deduplicatie van identieke combinaties"
    ],
    uniqueFaqs: [
      { question: "Waarvoor gebruik ik zoekwoord combinaties?", answer: "Lokale SEO (dienst + stad), Google Ads campagnes, content planning en zoekvolume research. Het bespaart uren handmatig combineren van lijsten." },
      { question: "Moet ik voor elke combinatie een aparte pagina maken?", answer: "Nee, niet automatisch. Check eerst het zoekvolume per combinatie. Maak pagina's voor combinaties met aantoonbaar volume en groepeer de rest in bredere content." }
    ]
  },
  "lsi-keyword-tool": {
    uniqueIntro: "LSI (Latent Semantic Indexing) zoekwoorden zijn termen die Google associeert met je onderwerp. Door LSI-termen te gebruiken help je Google je content beter te classificeren en rank je op meer varianten. De LSI Keyword Tool ontdekt deze verborgen associaties.",
    whatThisToolChecks: [
      "Semantisch geassocieerde termen via Google's eigen suggesties",
      "Gerelateerde zoekopdrachten onderaan Google's SERP",
      "Co-occurrence termen uit de top-10 resultaten",
      "Thematische clusters waar je zoekwoord bij hoort",
      "Relevantiescore per LSI-term"
    ],
    uniqueFaqs: [
      { question: "Wat is het verschil tussen LSI keywords en gewone synoniemen?", answer: "Synoniemen zijn woorden met dezelfde betekenis. LSI-termen zijn contextueel gerelateerd: voor 'appel' zijn synoniemen 'vrucht, fruit' maar LSI-termen zijn 'iPhone, Steve Jobs, Mac' of 'vitaminen, boom, herfst' – afhankelijk van de context." },
      { question: "Bestaat LSI echt in Google's algoritme?", answer: "Google gebruikt geen letterlijk 'LSI' maar wel geavanceerde NLP (BERT, MUM) die hetzelfde principe hanteert: het begrijpt context en verwacht gerelateerde termen in goede content over een onderwerp." }
    ]
  },
  "zoekwoord-positie-checker": {
    uniqueIntro: "De Zoekwoord Positie Checker toont je exacte Google-positie voor een specifiek zoekwoord, onbeïnvloed door personalisatie en locatie. Zo weet je je 'echte' ranking in plaats van de gepersonaliseerde versie die je ziet wanneer je zelf googelt.",
    whatThisToolChecks: [
      "Exacte Google positie (1-100) voor je zoekwoord",
      "De URL van je website die rankt",
      "Desktop en mobiele positie (kan verschillen)",
      "Positie per land of regio",
      "Andere pagina's van je site in de top-100 (cannibalisatie check)"
    ],
    uniqueFaqs: [
      { question: "Waarom is mijn ranking anders dan wat ik zelf in Google zie?", answer: "Google personaliseert resultaten op basis van je locatie, zoekgeschiedenis, ingelogd Google account en apparaat. Een ranking checker toont de niet-gepersonaliseerde positie." },
      { question: "Wat is keyword cannibalisatie?", answer: "Wanneer meerdere pagina's van je site ranken voor hetzelfde zoekwoord en elkaars positie ondermijnen. De tool toont dit als meerdere URL's in de top-100 verschijnen." }
    ]
  },
  "people-also-ask-tool": {
    uniqueIntro: "Het 'Mensen vragen ook' (People Also Ask) blok in Google bevat vragen die zoeker daadwerkelijk stellen. Door deze vragen te beantwoorden in je content, vergroot je je kans op weergave in dit blok – extra zichtbaarheid zonder in de top-3 te hoeven staan.",
    whatThisToolChecks: [
      "Alle PAA-vragen voor je zoekwoord",
      "Cascading vragen (vragen die verschijnen na het klikken op een PAA)",
      "Bron websites die momenteel de PAA-antwoorden leveren",
      "Overlap met Featured Snippets kansen",
      "Vraag categorieën: definitie, vergelijking, proces, lijst"
    ],
    uniqueFaqs: [
      { question: "Hoe kom ik in het 'Mensen vragen ook' blok?", answer: "Beantwoord de vraag beknopt (40-60 woorden) direct onder een H2/H3 heading die de vraag bevat. Gebruik een paragraaf, lijst of tabel format – afhankelijk van wat Google nu toont." },
      { question: "Hoeveel PAA-vragen moet ik beantwoorden per pagina?", answer: "5-8 relevante vragen verwerkt in je content is optimaal. Gebruik ze als H2 of H3 headings gevolgd door een beknopt antwoord. Dit versterkt ook je FAQ Schema." }
    ]
  },
  "autocomplete-scraper": {
    uniqueIntro: "Google Autocomplete toont wat miljoenen mensen daadwerkelijk typen. Deze suggesties zijn een goudmijn voor keyword research: ze onthullen zoekgedrag, trending onderwerpen en long tail varianten die je in geen enkele keyword tool vindt. De Autocomplete Tool verzamelt al deze suggesties systematisch.",
    whatThisToolChecks: [
      "Autocomplete suggesties voor elke letter (a-z) na je zoekwoord",
      "Suggesties met 'vragen' voorvoegsels (hoe, wat, waarom)",
      "Trending vs stabiele autocomplete suggesties",
      "Suggesties per taal en land",
      "Vergelijking van suggesties over tijd"
    ],
    uniqueFaqs: [
      { question: "Zijn autocomplete suggesties hetzelfde als populaire zoekwoorden?", answer: "Niet precies. Autocomplete is gebaseerd op trending zoekopdrachten, zoekfrequentie en relevantie. Het reflecteert wat mensen nu zoeken, wat waardevoller kan zijn dan historisch zoekvolume." },
      { question: "Kan ik autocomplete suggesties beïnvloeden?", answer: "Niet ethisch of effectief. Google's systemen zijn ontworpen om manipulatie te voorkomen. Focus op het targeten van bestaande autocomplete suggesties in plaats van ze te manipuleren." }
    ]
  },
  "zoektrend-analyzer": {
    uniqueIntro: "Zoektrends vertellen je niet alleen wat nu populair is, maar ook wat over 3 maanden populair zal zijn. De Zoektrend Analyzer toont hoe het zoekvolume van je zoekwoorden zich ontwikkelt over maanden en jaren, zodat je je content strategie kunt afstemmen op stijgende trends.",
    whatThisToolChecks: [
      "Zoekvolume trend over de afgelopen 12-24 maanden",
      "Stijgende vs dalende zoekwoorden in je niche",
      "Breakout zoekwoorden: termen met plotselinge groei",
      "Vergelijking van meerdere zoekwoorden op dezelfde grafiek",
      "Regionale interesse: waar in Nederland wordt het meest gezocht"
    ],
    uniqueFaqs: [
      { question: "Hoe gebruik ik trend data voor mijn content planning?", answer: "Investeer in content voor stijgende trends voordat ze pieken. Vermijd dalende trends tenzij je al sterke posities hebt. Seizoensgebonden trends vereisen publicatie 4-8 weken voor de piek." },
      { question: "Wat is een 'breakout' zoekwoord?", answer: "Een zoekwoord met meer dan 5000% groei in korte tijd. Dit zijn vaak nieuwe producten, trending topics of virale onderwerpen. Snel content publiceren voor breakout termen kan veel verkeer opleveren." }
    ]
  },
};
