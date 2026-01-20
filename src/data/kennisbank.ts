// Kennisbank: Pillar + Cluster content structure for topical authority

export interface KennisbankArticle {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  content: string; // Markdown-like content
  metaTitle: string;
  metaDescription: string;
}

export interface KennisbankPillar {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: "orange" | "violet" | "blue";
  metaTitle: string;
  metaDescription: string;
  intro: string;
  articles: KennisbankArticle[];
}

export const pillars: KennisbankPillar[] = [
  {
    slug: "lokale-seo",
    title: "Lokale SEO",
    description: "Alles over lokale vindbaarheid en Google Mijn Bedrijf optimalisatie",
    icon: "MapPin",
    color: "orange",
    metaTitle: "Lokale SEO Gids | Word Gevonden in Jouw Regio | KlikKlaarSEO",
    metaDescription: "Complete gids over lokale SEO. Leer hoe je bovenaan komt in Google voor lokale zoekopdrachten en meer klanten uit jouw regio aantrekt.",
    intro: "Lokale SEO is het optimaliseren van je online aanwezigheid zodat je beter vindbaar wordt voor mensen die zoeken naar bedrijven in hun buurt. Voor lokale ondernemers is dit essentieel: 46% van alle Google-zoekopdrachten heeft een lokale intentie.",
    articles: [
      {
        slug: "wat-is-lokale-seo",
        title: "Wat is lokale SEO?",
        description: "Een complete introductie tot lokale zoekmachine optimalisatie en waarom het belangrijk is voor lokale ondernemers.",
        readTime: "5 min",
        metaTitle: "Wat is Lokale SEO? Complete Uitleg voor Beginners | KlikKlaarSEO",
        metaDescription: "Ontdek wat lokale SEO is, hoe het werkt, en waarom het essentieel is voor lokale ondernemers. Inclusief praktische tips om direct te starten.",
        content: `
## Wat is lokale SEO?

Lokale SEO (Search Engine Optimization) is het proces van het optimaliseren van je online aanwezigheid om meer verkeer, leads en merkbekendheid te genereren via lokale zoekopdrachten. Deze zoekopdrachten vinden plaats op Google en andere zoekmachines.

### Waarom is lokale SEO belangrijk?

**46% van alle Google-zoekopdrachten** heeft een lokale intentie. Mensen zoeken naar "kapper in de buurt", "beste tandarts Amsterdam", of "loodgieter spoed Rotterdam". Als jouw bedrijf niet goed scoort voor deze zoekopdrachten, mis je potentiële klanten.

### Hoe werkt lokale SEO?

Lokale SEO focust op drie hoofdgebieden:

1. **Google Mijn Bedrijf** - Je gratis bedrijfsprofiel op Google
2. **Lokale zoekwoorden** - Termen met locatie-intentie
3. **NAP-consistentie** - Naam, Adres, Telefoonnummer overal gelijk

### Lokale SEO vs. Traditionele SEO

| Aspect | Lokale SEO | Traditionele SEO |
|--------|-----------|------------------|
| Focus | Geografisch gebied | Landelijk/internationaal |
| Zoekwoorden | "dienst + stad" | Algemene termen |
| Google Mijn Bedrijf | Essentieel | Minder belangrijk |
| Reviews | Zeer belangrijk | Belangrijk |

### Direct aan de slag

De eerste stap is het claimen en optimaliseren van je Google Mijn Bedrijf profiel. Dit is gratis en kan binnen een week tot betere lokale vindbaarheid leiden.
        `
      },
      {
        slug: "google-mijn-bedrijf-optimaliseren",
        title: "Google Mijn Bedrijf optimaliseren",
        description: "Stap-voor-stap handleiding om je Google Mijn Bedrijf profiel te optimaliseren voor maximale zichtbaarheid.",
        readTime: "8 min",
        metaTitle: "Google Mijn Bedrijf Optimaliseren | Complete Handleiding 2024",
        metaDescription: "Leer hoe je je Google Mijn Bedrijf profiel optimaliseert voor meer zichtbaarheid in Google Maps en lokale zoekresultaten.",
        content: `
## Google Mijn Bedrijf optimaliseren

Je Google Mijn Bedrijf (GMB) profiel is vaak het eerste wat potentiële klanten zien. Een geoptimaliseerd profiel kan leiden tot 70% meer bezoeken.

### Stap 1: Claim je profiel

Ga naar business.google.com en claim je bedrijf. Google stuurt een verificatiecode per post of telefoon.

### Stap 2: Vul alle informatie in

- **Bedrijfsnaam** - Exact zoals op je gevel
- **Categorie** - Kies de meest specifieke
- **Adres** - Volledig en correct
- **Telefoonnummer** - Lokaal nummer
- **Website** - Je hoofddomein
- **Openingstijden** - Altijd up-to-date

### Stap 3: Voeg foto's toe

Bedrijven met foto's krijgen 42% meer routeverzoeken. Voeg toe:
- Logo en omslagfoto
- Foto's van binnen en buiten
- Foto's van je team
- Foto's van je producten/diensten

### Stap 4: Verzamel reviews

Reviews zijn een van de belangrijkste rankingfactoren. Vraag tevreden klanten actief om een review.

### Stap 5: Plaats regelmatig updates

Google Posts houden je profiel actief. Deel nieuws, aanbiedingen of tips minstens 1x per week.
        `
      },
      {
        slug: "lokale-zoekwoorden-onderzoek",
        title: "Lokale zoekwoorden onderzoek",
        description: "Hoe vind je de beste lokale zoekwoorden voor jouw bedrijf en regio?",
        readTime: "6 min",
        metaTitle: "Lokale Zoekwoorden Onderzoek | Vind de Beste Keywords",
        metaDescription: "Leer hoe je lokale zoekwoorden vindt waar jouw potentiële klanten op zoeken. Praktische tips en gratis tools.",
        content: `
## Lokale zoekwoorden onderzoek

Het vinden van de juiste lokale zoekwoorden is de basis van elke succesvolle lokale SEO strategie.

### Wat zijn lokale zoekwoorden?

Lokale zoekwoorden bevatten een geografische component:
- "tandarts Amsterdam"
- "kapper in de buurt"
- "beste restaurant Utrecht centrum"

### Zoekwoord formules

Gebruik deze formules om lokale zoekwoorden te vinden:

1. **[dienst] + [stad]** - "loodgieter Rotterdam"
2. **[dienst] + [wijk]** - "kapper Amsterdam Zuid"
3. **[dienst] + in de buurt** - "garage in de buurt"
4. **beste + [dienst] + [stad]** - "beste tandarts Den Haag"

### Gratis tools

- **Google Autocomplete** - Typ je dienst en zie suggesties
- **Google Trends** - Vergelijk populariteit van termen
- **Google Keyword Planner** - Zoekvolumes (gratis met Ads account)

### Long-tail zoekwoorden

Langere, specifiekere zoekwoorden hebben vaak minder concurrentie:
- "spoedloodgieter weekend Amsterdam" vs "loodgieter Amsterdam"
- "kindvriendelijke tandarts Eindhoven" vs "tandarts Eindhoven"
        `
      },
      {
        slug: "reviews-verzamelen",
        title: "Reviews verzamelen en beheren",
        description: "Strategieën om meer Google reviews te krijgen en hoe je ermee omgaat.",
        readTime: "5 min",
        metaTitle: "Meer Google Reviews Krijgen | Bewezen Strategieën",
        metaDescription: "Ontdek hoe je meer positieve Google reviews krijgt en hoe je professioneel reageert op negatieve beoordelingen.",
        content: `
## Reviews verzamelen en beheren

Reviews zijn cruciaal voor lokale SEO. Bedrijven met meer en betere reviews ranken hoger en krijgen meer klanten.

### Waarom reviews belangrijk zijn

- **Ranking factor** - Google gebruikt reviews als signaal
- **Vertrouwen** - 88% vertrouwt online reviews als persoonlijke aanbevelingen
- **Conversie** - Meer reviews = meer klanten

### Hoe vraag je om reviews?

1. **Timing** - Vraag direct na een positieve ervaring
2. **Maak het makkelijk** - Stuur een directe link
3. **Persoonlijk** - "Het zou veel betekenen als..."
4. **Follow-up** - Herinner vriendelijk na een week

### Reageren op reviews

**Positieve reviews:**
- Bedank persoonlijk
- Noem specifieke details
- Nodig uit om terug te komen

**Negatieve reviews:**
- Reageer snel en professioneel
- Erken het probleem
- Bied een oplossing
- Neem het gesprek offline
        `
      },
      {
        slug: "nap-consistentie",
        title: "NAP-consistentie uitgelegd",
        description: "Waarom je bedrijfsgegevens overal exact hetzelfde moeten zijn.",
        readTime: "4 min",
        metaTitle: "NAP-Consistentie | Waarom Je Gegevens Overal Gelijk Moeten Zijn",
        metaDescription: "Leer wat NAP-consistentie is en waarom het cruciaal is voor je lokale SEO. Inclusief checklist om je gegevens te controleren.",
        content: `
## NAP-consistentie uitgelegd

NAP staat voor Name, Address, Phone - de basisgegevens van je bedrijf. Consistentie hierin is een belangrijke lokale SEO factor.

### Wat is NAP-consistentie?

Je bedrijfsgegevens moeten **exact hetzelfde** zijn op:
- Je website
- Google Mijn Bedrijf
- Social media
- Bedrijvengidsen
- Review sites

### Waarom is het belangrijk?

Google gebruikt NAP-gegevens om te verifiëren dat je bedrijf echt en betrouwbaar is. Inconsistenties creëren verwarring en schaden je rankings.

### Veelgemaakte fouten

❌ "Hoofdstraat 1" vs "Hoofdstr. 1"
❌ "020-1234567" vs "+31 20 123 4567"
❌ "Jan's Kapsalon" vs "Jans Kapsalon"

### NAP-audit checklist

1. Maak een spreadsheet met je officiële NAP
2. Controleer Google Mijn Bedrijf
3. Controleer Facebook, Instagram, LinkedIn
4. Controleer Yelp, TripAdvisor, etc.
5. Controleer branchegidsen
6. Corrigeer alle afwijkingen
        `
      }
    ]
  },
  {
    slug: "technische-seo",
    title: "Technische SEO",
    description: "Website snelheid, structuur en technische optimalisaties voor betere rankings",
    icon: "Settings",
    color: "violet",
    metaTitle: "Technische SEO Gids | Website Optimalisatie | KlikKlaarSEO",
    metaDescription: "Complete gids over technische SEO. Van website snelheid tot structured data - alles wat je moet weten voor een technisch gezonde website.",
    intro: "Technische SEO zorgt ervoor dat zoekmachines je website kunnen vinden, crawlen en indexeren. Zonder een solide technische basis kunnen zelfs de beste content en backlinks je niet helpen.",
    articles: [
      {
        slug: "website-snelheid-verbeteren",
        title: "Website snelheid verbeteren",
        description: "Praktische tips om je website sneller te maken en beter te scoren in Google.",
        readTime: "7 min",
        metaTitle: "Website Snelheid Verbeteren | Core Web Vitals Optimaliseren",
        metaDescription: "Leer hoe je je website sneller maakt. Praktische tips voor betere Core Web Vitals en hogere Google rankings.",
        content: `
## Website snelheid verbeteren

Website snelheid is een directe rankingfactor. Trage websites verliezen bezoekers én posities in Google.

### Waarom snelheid belangrijk is

- **Ranking factor** - Google beloont snelle websites
- **Conversie** - 1 seconde vertraging = 7% minder conversies
- **Bounce rate** - 53% verlaat mobiele sites die >3 sec laden

### Core Web Vitals

Google meet drie belangrijke metrics:

1. **LCP (Largest Contentful Paint)** - Laadtijd grootste element
   - Goed: < 2.5 seconden
   
2. **FID (First Input Delay)** - Reactietijd op eerste interactie
   - Goed: < 100 milliseconden
   
3. **CLS (Cumulative Layout Shift)** - Visuele stabiliteit
   - Goed: < 0.1

### Snelle verbeteringen

1. **Optimaliseer afbeeldingen** - Comprimeer en gebruik moderne formaten (WebP)
2. **Gebruik caching** - Browser en server caching
3. **Minimaliseer code** - CSS, JavaScript, HTML
4. **Gebruik een CDN** - Content dichter bij bezoekers
5. **Upgrade hosting** - Snellere server = snellere site

### Tools om snelheid te meten

- Google PageSpeed Insights
- GTmetrix
- WebPageTest
        `
      },
      {
        slug: "mobiel-vriendelijke-website",
        title: "Mobiel-vriendelijke website",
        description: "Waarom mobile-first essentieel is en hoe je je site optimaliseert voor mobiel.",
        readTime: "5 min",
        metaTitle: "Mobiel-Vriendelijke Website | Mobile-First SEO",
        metaDescription: "Ontdek waarom een mobiel-vriendelijke website essentieel is voor SEO en hoe je je site optimaliseert voor smartphones.",
        content: `
## Mobiel-vriendelijke website

Google gebruikt mobile-first indexering. Dit betekent dat de mobiele versie van je site bepaalt hoe je rankt.

### Mobile-first indexering

Sinds 2021 kijkt Google primair naar de mobiele versie van websites:
- Content moet volledig zichtbaar zijn op mobiel
- Afbeeldingen moeten responsive zijn
- Navigatie moet werkbaar zijn met touch

### Hoe test je mobiele vriendelijkheid?

1. **Google's Mobile-Friendly Test** - search.google.com/test/mobile-friendly
2. **Google Search Console** - Mobiele bruikbaarheid rapport
3. **Echte telefoons** - Test op verschillende apparaten

### Veelvoorkomende problemen

❌ Tekst te klein om te lezen
❌ Links te dicht bij elkaar
❌ Content breder dan scherm
❌ Blokkerende pop-ups
❌ Flash of niet-ondersteunde plugins

### Best practices

✅ Responsive design (past aan schermgrootte)
✅ Touch-vriendelijke buttons (min. 48x48 pixels)
✅ Leesbare lettergrootte (min. 16px)
✅ Geen horizontaal scrollen nodig
✅ Snelle laadtijd op 4G
        `
      },
      {
        slug: "structured-data-schema",
        title: "Structured data & Schema markup",
        description: "Hoe je structured data gebruikt voor rich snippets in Google.",
        readTime: "8 min",
        metaTitle: "Structured Data & Schema Markup | Rich Snippets Gids",
        metaDescription: "Leer hoe je structured data toevoegt aan je website voor betere zichtbaarheid in Google met rich snippets.",
        content: `
## Structured data & Schema markup

Structured data helpt zoekmachines je content beter te begrijpen. Het resultaat: opvallende rich snippets in de zoekresultaten.

### Wat is structured data?

Structured data is code die je toevoegt aan je pagina's om zoekmachines extra context te geven. Het volgt het schema.org vocabulaire.

### Voordelen van structured data

- **Rich snippets** - Sterren, prijzen, voorraad in zoekresultaten
- **Betere CTR** - Opvallendere resultaten = meer klikken
- **Voice search** - Betere kansen in gesproken zoekopdrachten
- **Knowledge panels** - Meer informatie direct in Google

### Belangrijkste schema types voor lokale bedrijven

1. **LocalBusiness** - Basisinformatie over je bedrijf
2. **Service** - Je diensten met prijzen
3. **Review/AggregateRating** - Klantbeoordelingen
4. **FAQPage** - Veelgestelde vragen
5. **BreadcrumbList** - Navigatiepad

### Hoe implementeer je het?

JSON-LD is de aanbevolen methode:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jouw Bedrijf",
  "address": {...},
  "telephone": "..."
}
\`\`\`

### Testen

Gebruik Google's Rich Results Test om je structured data te valideren.
        `
      },
      {
        slug: "xml-sitemap-robots",
        title: "XML sitemap & robots.txt",
        description: "Essentiële technische bestanden die zoekmachines helpen je site te crawlen.",
        readTime: "5 min",
        metaTitle: "XML Sitemap & Robots.txt | Technische SEO Basis",
        metaDescription: "Leer hoe XML sitemaps en robots.txt werken en waarom ze essentieel zijn voor je technische SEO.",
        content: `
## XML sitemap & robots.txt

Deze twee bestanden zijn essentieel voor hoe zoekmachines je website verkennen en indexeren.

### XML Sitemap

Een sitemap is een bestand dat alle belangrijke pagina's van je website opsomt.

**Waarom belangrijk?**
- Helpt Google nieuwe pagina's te ontdekken
- Geeft prioriteit aan voor Google
- Toont laatst gewijzigde datum

**Best practices:**
- Maximaal 50.000 URLs per sitemap
- Alleen indexeerbare pagina's
- Houd hem up-to-date
- Dien in via Search Console

### Robots.txt

Het robots.txt bestand vertelt zoekmachines welke delen van je site ze mogen crawlen.

**Locatie:** altijd op yourdomain.com/robots.txt

**Voorbeeld:**
\`\`\`
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://yourdomain.com/sitemap.xml
\`\`\`

**Let op:**
- Disallow blokkeert crawlen, niet indexeren
- Blokkeer nooit CSS/JS bestanden
- Test in Search Console
        `
      },
      {
        slug: "https-ssl-beveiliging",
        title: "HTTPS en SSL beveiliging",
        description: "Waarom een beveiligde website essentieel is voor SEO en vertrouwen.",
        readTime: "4 min",
        metaTitle: "HTTPS & SSL voor SEO | Website Beveiliging",
        metaDescription: "Ontdek waarom HTTPS essentieel is voor SEO en hoe je een SSL-certificaat installeert op je website.",
        content: `
## HTTPS en SSL beveiliging

HTTPS is sinds 2014 een Google rankingfactor. Een onbeveiligde website schaadt je SEO én het vertrouwen van bezoekers.

### HTTP vs HTTPS

- **HTTP** - Onbeveiligde verbinding, data kan onderschept worden
- **HTTPS** - Versleutelde verbinding, data is beschermd

Browsers markeren HTTP-sites als "Niet veilig" - een grote afschrikker voor bezoekers.

### SEO voordelen van HTTPS

1. **Ranking boost** - Google geeft voorkeur aan HTTPS
2. **Vertrouwen** - Bezoekers zien het groene slotje
3. **Referral data** - Je behoudt referral informatie
4. **HTTP/2** - Snellere protocollen vereisen HTTPS

### Hoe implementeer je HTTPS?

1. **Koop SSL-certificaat** - Of gebruik gratis Let's Encrypt
2. **Installeer op server** - Via je hosting control panel
3. **Redirect HTTP→HTTPS** - 301 redirects voor alle URLs
4. **Update interne links** - Naar HTTPS versies
5. **Update Search Console** - Voeg HTTPS property toe

### Veelgemaakte fouten

❌ Mixed content (HTTP resources op HTTPS pagina)
❌ Vergeten redirects
❌ Verlopen certificaten
❌ Interne links nog op HTTP
        `
      }
    ]
  },
  {
    slug: "content-optimalisatie",
    title: "Content Optimalisatie",
    description: "Schrijf content die rankt én converteert",
    icon: "FileText",
    color: "blue",
    metaTitle: "Content Optimalisatie Gids | SEO Copywriting | KlikKlaarSEO",
    metaDescription: "Complete gids over content optimalisatie. Leer hoe je content schrijft die hoog scoort in Google én bezoekers overtuigt.",
    intro: "Content is de ruggengraat van SEO. Zonder waardevolle content voor je doelgroep, zijn alle technische optimalisaties tevergeefs. Goede content trekt bezoekers aan, houdt ze vast, en zet ze om in klanten.",
    articles: [
      {
        slug: "seo-teksten-schrijven",
        title: "SEO-teksten schrijven",
        description: "Hoe schrijf je teksten die goed scoren in Google én prettig lezen?",
        readTime: "7 min",
        metaTitle: "SEO Teksten Schrijven | Complete Handleiding",
        metaDescription: "Leer hoe je SEO-vriendelijke teksten schrijft die hoog ranken in Google én je bezoekers overtuigen.",
        content: `
## SEO-teksten schrijven

SEO-teksten balanceren tussen wat Google wil zien en wat je bezoekers nodig hebben. Het doel: content die rankt én converteert.

### De basis van goede SEO-teksten

1. **Zoekintentie begrijpen** - Wat wil de zoeker echt weten?
2. **Waarde bieden** - Beantwoord de vraag volledig
3. **Leesbaarheid** - Makkelijk te scannen en begrijpen
4. **Optimalisatie** - Zoekwoorden strategisch plaatsen

### Structuur van een SEO-tekst

- **H1 (titel)** - Bevat hoofdzoekwoord, max 60 tekens
- **Intro** - Hook + samenvatting + zoekwoord
- **H2s** - Secties met gerelateerde zoekwoorden
- **Paragraphs** - Kort (max 3-4 zinnen)
- **Conclusie** - Samenvatting + call-to-action

### Zoekwoord plaatsing

Plaats je hoofdzoekwoord in:
✅ Titel (H1)
✅ Eerste 100 woorden
✅ Minimaal één H2
✅ Meta description
✅ URL

### Schrijf voor mensen, optimaliseer voor Google

Het belangrijkste: schrijf eerst nuttige content voor je doelgroep. Optimaliseer daarna. Geforceerde zoekwoorden schaden leesbaarheid én rankings.
        `
      },
      {
        slug: "title-tags-meta-descriptions",
        title: "Title tags & meta descriptions",
        description: "Optimaliseer je snippets voor meer klikken vanuit Google.",
        readTime: "5 min",
        metaTitle: "Title Tags & Meta Descriptions | CTR Optimalisatie",
        metaDescription: "Leer hoe je title tags en meta descriptions schrijft die meer klikken genereren vanuit de Google zoekresultaten.",
        content: `
## Title tags & meta descriptions

Je title tag en meta description zijn je advertentie in Google. Ze bepalen of iemand klikt of doorscrolt.

### Title tag

De title tag is de blauwe, klikbare link in zoekresultaten.

**Best practices:**
- Lengte: 50-60 tekens
- Hoofdzoekwoord vooraan
- Uniek per pagina
- Aantrekkelijk en relevant

**Formules die werken:**
- [Hoofd zoekwoord]: [Belofte] | [Merk]
- Hoe [probleem oplossen] in [tijdsbestek]
- [Nummer] [Type content] voor [Doelgroep]

### Meta description

De beschrijvende tekst onder de title in zoekresultaten.

**Best practices:**
- Lengte: 150-160 tekens
- Bevat call-to-action
- Zoekwoord (wordt bold weergegeven)
- Unieke waardepropositie

**Voorbeeld:**
Title: "Lokale SEO voor Kappers | Meer Klanten uit Jouw Buurt"
Meta: "Ontdek hoe lokale SEO jouw kapsalon kan laten groeien. ✓ Google Maps ✓ Reviews ✓ Lokale vindbaarheid. Start vandaag →"

### Impact op rankings

Title tags zijn een directe rankingfactor. Meta descriptions niet, maar ze beïnvloeden CTR (Click-Through Rate), wat indirect rankings beïnvloedt.
        `
      },
      {
        slug: "heading-structuur",
        title: "Heading structuur (H1, H2, H3)",
        description: "Hoe je headings gebruikt voor betere SEO en leesbaarheid.",
        readTime: "4 min",
        metaTitle: "Heading Structuur | H1, H2, H3 voor SEO",
        metaDescription: "Leer hoe je headings (H1, H2, H3) correct gebruikt voor betere SEO en een overzichtelijke pagina structuur.",
        content: `
## Heading structuur

Headings geven structuur aan je content. Ze helpen bezoekers scannen en zoekmachines je content begrijpen.

### De hiërarchie

- **H1** - Hoofdtitel (1x per pagina)
- **H2** - Hoofdsecties
- **H3** - Subsecties onder H2
- **H4-H6** - Verdere onderverdeling (zelden nodig)

### H1: De hoofdtitel

✅ Eén H1 per pagina
✅ Bevat hoofdzoekwoord
✅ Beschrijft waar de pagina over gaat
✅ Uniek per pagina

### H2: Secties

H2s verdelen je content in logische delen. Elk H2 kan gerelateerde zoekwoorden bevatten.

### H3: Subsecties

H3s vallen onder H2s. Gebruik ze voor lijsten of verdere uitleg binnen een sectie.

### SEO voordelen

- **Structuur signalen** - Google begrijpt je content beter
- **Featured snippets** - H2/H3 + antwoord = snippet kans
- **Zoekwoord contexten** - Meerdere plekken voor keywords
- **Gebruikerservaring** - Makkelijk scanbaar

### Voorbeeld structuur

\`\`\`
H1: Lokale SEO voor Kappers
  H2: Wat is lokale SEO?
  H2: Waarom is het belangrijk voor kappers?
    H3: Google Mijn Bedrijf
    H3: Lokale zoekwoorden
  H2: Hoe begin je?
\`\`\`
        `
      },
      {
        slug: "afbeeldingen-optimaliseren",
        title: "Afbeeldingen optimaliseren",
        description: "Hoe optimaliseer je afbeeldingen voor snelheid en SEO?",
        readTime: "5 min",
        metaTitle: "Afbeeldingen Optimaliseren voor SEO | Alt Tags & Compressie",
        metaDescription: "Leer hoe je afbeeldingen optimaliseert voor betere SEO. Van alt tags tot compressie - alles wat je moet weten.",
        content: `
## Afbeeldingen optimaliseren

Afbeeldingen kunnen je SEO helpen of schaden. Geoptimaliseerde afbeeldingen laden snel en ranken in Google Images.

### Bestandsnaam

❌ IMG_1234.jpg
✅ tandarts-amsterdam-praktijk.jpg

Beschrijvend, met relevante zoekwoorden, gescheiden door streepjes.

### Alt tekst

De alt tekst beschrijft de afbeelding voor:
- Blinde gebruikers (screenreaders)
- Google (kan afbeeldingen niet "zien")
- Als afbeelding niet laadt

**Best practices:**
- Beschrijf wat je ziet
- Natuurlijk, niet keyword-stuffed
- Kort maar compleet (125 tekens max)

**Voorbeeld:**
❌ alt="tandarts"
✅ alt="Tandarts onderzoekt patiënt in moderne praktijk in Amsterdam"

### Compressie

Grote afbeeldingen vertragen je site. Comprimeer zonder zichtbaar kwaliteitsverlies.

**Tools:**
- TinyPNG / TinyJPG
- Squoosh (Google)
- ImageOptim (Mac)

### Moderne formaten

- **WebP** - 30% kleiner dan JPEG/PNG
- **AVIF** - Nog kleiner, minder browser support

### Lazy loading

Laad afbeeldingen pas als ze in beeld komen:
\`loading="lazy"\`
        `
      },
      {
        slug: "interne-links",
        title: "Interne links strategie",
        description: "Hoe gebruik je interne links om je SEO te versterken?",
        readTime: "6 min",
        metaTitle: "Interne Links Strategie | SEO Link Building",
        metaDescription: "Ontdek hoe interne links je SEO versterken en hoe je een effectieve interne linkstructuur opzet.",
        content: `
## Interne links strategie

Interne links verbinden je pagina's en verdelen "link equity" door je site. Een slimme strategie verbetert rankings én gebruikerservaring.

### Waarom interne links belangrijk zijn

1. **Crawlability** - Helpt Google je pagina's te vinden
2. **Hiërarchie** - Toont welke pagina's belangrijk zijn
3. **Context** - Anchor text geeft signalen over inhoud
4. **Gebruikerservaring** - Houdt bezoekers langer op je site

### Pillar-cluster model

Organiseer content rondom pillar pages:

**Pillar page** - Uitgebreide gids over hoofdonderwerp
↓ ↑ (links in beide richtingen)
**Cluster pages** - Specifieke subtopics

Dit bouwt topical authority op een onderwerp.

### Best practices

✅ Link vanuit context (niet "klik hier")
✅ Gebruik beschrijvende anchor text
✅ Link naar relevante pagina's
✅ Belangrijke pagina's krijgen meer links
✅ Fix broken internal links

### Anchor text tips

De klikbare tekst van een link geeft Google context.

❌ "Klik hier voor meer informatie"
✅ "Lees onze complete gids over lokale SEO"

### Hoeveel links per pagina?

Er is geen exact maximum, maar:
- Elke link "verdunt" de waarde
- Focus op relevantie boven kwantiteit
- Gemiddeld 3-5 interne links per 1000 woorden
        `
      }
    ]
  }
];

export function getPillarBySlug(slug: string): KennisbankPillar | undefined {
  return pillars.find(p => p.slug === slug);
}

export function getArticleBySlug(pillarSlug: string, articleSlug: string): KennisbankArticle | undefined {
  const pillar = getPillarBySlug(pillarSlug);
  return pillar?.articles.find(a => a.slug === articleSlug);
}

export function getAllArticles(): Array<{ pillar: KennisbankPillar; article: KennisbankArticle }> {
  return pillars.flatMap(pillar => 
    pillar.articles.map(article => ({ pillar, article }))
  );
}
