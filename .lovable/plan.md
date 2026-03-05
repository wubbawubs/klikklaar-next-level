

## Plan: Functionele SEO Tools met Lead Funnel

### Huidige situatie
De ~150 tool-pagina's zijn puur statisch/informatief. Er is geen werkende input, geen analyse, geen resultaat. Bezoekers komen, lezen, en vertrekken.

### Doel
Tools functioneel maken zodat bezoekers:
1. Een URL invoeren en echte resultaten zien
2. Na het zien van resultaten gefunneld worden naar een gesprek of lead-capture

### Strategie: "Freemium Gated Results"

```text
┌─────────────────────────────────────┐
│  1. URL Input (boven de fold)       │
│     [voer je website URL in]  [Check]│
├─────────────────────────────────────┤
│  2. Scan draait (loading + animatie)│
├─────────────────────────────────────┤
│  3. Resultaten – GEDEELTELIJK      │
│     ✓ Score (bijv. 62/100)          │
│     ✓ 3 van 8 checks zichtbaar     │
│     ✗ 5 checks geblurred/locked    │
├─────────────────────────────────────┤
│  4. Lead Gate                       │
│     "Wil je het volledige rapport?" │
│     → Optie A: E-mail invullen     │
│     → Optie B: Plan een gesprek    │
│       (primaire CTA, link /contact) │
└─────────────────────────────────────┘
```

### Welke tools functioneel maken (fase 1 — hoogste waarde)

Starten met 3-5 tools die we client-side of via een edge function kunnen draaien:

| Tool | Aanpak | Complexiteit |
|------|--------|-------------|
| **SEO Score Checker** | Edge function: fetch URL, parse HTML, scoor meta/headings/alt/links | Medium |
| **Meta Tag Checker** | Edge function: fetch URL, extract & valideer title/description/OG tags | Laag |
| **Heading Checker** | Edge function: fetch URL, parse H1-H6 hiërarchie | Laag |
| **SSL Checker** | Client-side: check https + certificaat info | Laag |
| **Robots.txt Checker** | Edge function: fetch /robots.txt, parse & rapporteer | Laag |

### Technische aanpak

1. **Edge function `analyze-url`**
   - Accepteert `{ url, checks: ["meta", "headings", "images", ...] }`
   - Fetcht de pagina server-side (CORS-vrij)
   - Parseert HTML en retourneert gestructureerde resultaten per check
   - Rate limiting: max 5 scans per IP per uur

2. **Herbruikbaar `<ToolScanner />` component**
   - URL input + submit button
   - Loading state met animatie
   - Resultaten-kaarten met score per check
   - Geblurrde sectie na 3 resultaten

3. **Lead Gate component `<ResultsGate />`**
   - Toont na de gratis resultaten
   - Twee opties:
     - E-mail invoeren → opslaan in `tool_leads` tabel → volledig rapport tonen
     - "Laat een expert kijken" → link naar /contact
   - E-mail opslag in database: `tool_leads(id, email, tool_slug, url_checked, created_at)`

4. **Database tabel**
   - `tool_leads`: vangt e-mailadressen op met context (welke tool, welke URL)
   - RLS: insert voor iedereen, select alleen voor admins

5. **Integratie in ToolLandingPage**
   - Scanner direct onder de hero (boven "Wat doet deze tool?")
   - Resultaten vervangen de statische "Hoe werkt het?" stappen
   - CTA-secties blijven, maar worden contextueler ("Je scoort 62/100 — wij maken er 90+ van")

### Lead funnel flow

- **Zonder e-mail**: bezoeker ziet score + 3 checks → nieuwsgierig maar gelimiteerd
- **Met e-mail**: volledig rapport → follow-up e-mail mogelijk (handmatig of via n8n)
- **Via gesprek**: directe conversie naar Calendly booking

### Fasering

**Fase 1** — Edge function + SEO Score Checker functioneel (1 tool als proof of concept)
**Fase 2** — Hergebruik voor 4 andere laag-complexe tools
**Fase 3** — Lead tabel + e-mail gate activeren
**Fase 4** — Dynamische CTA's op basis van scan-resultaten ("Je mist structured data — wij regelen dit")

