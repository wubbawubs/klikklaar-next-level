

# Plan: "Wekelijkse consulting call" aanpassen + Alle lokale referenties verbreden

## Overzicht
Twee taken: (1) "Wekelijkse consulting call" wordt "Maandelijkse consulting call" op alle plekken, en (2) alle pagina's doorlopen om "lokale ondernemers" / "lokale onderneming" teksten te verbreden zodat ze ook nationale/enterprise klanten aanspreken.

**Uitgezonderd**: Location landing pages, Combo landing pages, Kennisbank artikelen over "Lokale SEO", en de Steden-hub behouden bewust hun lokale focus (dat is hun onderwerp).

---

## Wijzigingen per bestand

### 1. src/pages/SeoAbonnement.tsx
- Regel 70: "Wekelijkse consulting call" wordt "Maandelijkse consulting call"

### 2. src/pages/Pricing.tsx
- Regel 74: "Wekelijkse consulting call" wordt "Maandelijkse consulting call"

### 3. src/pages/UseCases.tsx
- Regel 132-133: "Of je nu kapper, tandarts, coach of aannemer bent, wij helpen ondernemers zoals jij beter gevonden te worden." wordt "Of je nu coach, consultant, IT-bedrijf of e-commerce ondernemer bent, wij helpen ondernemers zoals jij beter gevonden te worden."
- Regel 50: "Geen lokale vindbaarheid" wordt "Geen online vindbaarheid"

### 4. src/pages/Branches.tsx
- Regel 128-129: "Van kappers tot accountants, van makelaars tot tandartsen. Wij optimaliseren voor elke lokale onderneming." wordt "Van kappers tot accountants, van consultants tot IT-bedrijven. Wij optimaliseren voor elke onderneming."

### 5. src/pages/AdLandingB.tsx
- Regel 106: "We werken met kappers, tandartsen, coaches, aannemers, en nog veel meer lokale ondernemers." wordt "We werken met coaches, consultants, IT-bedrijven, kappers, aannemers, en nog veel meer ondernemers."

### 6. src/components/home/FAQSection.tsx
- Regel 12: "lokale vindbaarheid" wordt "online vindbaarheid"
- Regel 28: Tekst al bijgewerkt naar "alle ondernemers", geen actie nodig

### 7. src/pages/HowItWorks.tsx
- Regel 51: "lokale vindbaarheid" wordt "online vindbaarheid"

### 8. src/pages/AdLandingA.tsx
- Regel 27: "lokaal of online" is acceptabel (noemt beide), geen actie
- Regel 105: "lokaal of online" is acceptabel, geen actie

### 9. src/components/ProofBlock.tsx
- Regel 47: "meer lokale vindbaarheid" wordt "meer online vindbaarheid"
- Regel 340: "lokale vindbaarheid en E-E-A-T" wordt "vindbaarheid en E-E-A-T"

### 10. src/components/LocationProofBlock.tsx
- Regel 49: "meer lokale leads" wordt "meer leads" (deze component wordt op location pages gebruikt, maar de tekst is generiek genoeg om breed te houden)

### 11. src/pages/Kennisbank.tsx
- Regel 73: "Van lokale vindbaarheid tot technische optimalisatie" wordt "Van online vindbaarheid tot technische optimalisatie"

---

## Niet aanpassen (bewust lokaal)
- **src/pages/templates/LocationLandingPage.tsx** - Lokale SEO is het onderwerp van deze pagina's
- **src/pages/templates/ComboLandingPage.tsx** - Lokale combinaties zijn het onderwerp
- **src/pages/Steden.tsx** - Stedenhub, lokaal is correct
- **src/data/kennisbank.ts** - Artikelen over lokale SEO behouden hun focus
- **src/data/locations.ts** - Lokale data, correct
- **src/data/industries.ts** - FAQ over lokale SEO per branche, bewust lokaal
- **src/components/layout/Footer.tsx** - "Lokale SEO" als dienstnaam/kennisbank-link is correct (het is een dienst die we aanbieden)
- **src/pages/templates/IndustryLandingPage.tsx** - KennisbankLinks met context "lokale-seo" verwijst naar het kennisbank-artikel, correct

---

## Samenvatting
- **12 tekstwijzigingen** in **10 bestanden**
- Focus op hoofdpagina's en marketing-pagina's
- Lokale landing pages en kennisbank-content over lokale SEO blijven ongewijzigd

