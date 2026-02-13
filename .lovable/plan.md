
# Plan: SEO Quick Wins + SPA Rendering Uitleg

## Wat gaan we fixen (code-aanpassingen)

### 1. Structured Data: "lokale ondernemers" verbreden
- **`src/components/StructuredData.tsx`**: Beide schema descriptions updaten:
  - `klikklaarBusinessSchema`: "voor lokale ondernemers" wordt "voor ondernemers"
  - `klikklaarOrganizationSchema`: "voor lokale ondernemers in heel Nederland" wordt "voor ondernemers in heel Nederland"

### 2. og:site_name consistent maken
- **`index.html`**: `og:site_name` van "KlikKlaar" naar "KlikKlaarSEO"

### 3. Homepage meta title optimaliseren
- **`src/pages/Index.tsx`**: Title updaten naar rapport-format: "Meer Klanten via Google & AI | Automatische SEO | €99/mnd | KlikKlaarSEO" (al bijna goed, alleen "KlikKlaar" wordt "KlikKlaarSEO")

### 4. "Lokale ondernemers" teksten verbreden op key pages
- **`src/components/home/FAQSection.tsx`**: "alle lokale ondernemers" wordt "alle ondernemers"
- **`src/pages/About.tsx`**: "lokale ondernemers" verwijzingen verbreden naar "ondernemers", structured data description updaten
- **`src/pages/UseCases.tsx`**: "lokale ondernemers" verbreden naar "ondernemers"

*Let op: Kennisbank artikelen over "Lokale SEO" en Location landing pages behouden bewust hun lokale focus, dat is hun onderwerp.*

---

## SPA Indexatie Probleem: Uitleg en Oplossing

Dit is het grootste technische SEO-risico. De site is een React Single Page Application (SPA), wat betekent dat Google en AI-crawlers alleen een lege `<div id="root"></div>` zien totdat JavaScript draait. Niet alle crawlers voeren JavaScript uit.

### Oplossing: Pre-rendering via Cloudflare Pages of Vercel

**Optie A: Vercel (aanbevolen, makkelijkste)**
1. Push je code naar GitHub (Lovable doet dit automatisch als je GitHub hebt gekoppeld)
2. Ga naar vercel.com, maak een account, importeer je GitHub repo
3. Vercel detecteert automatisch dat het een Vite/React project is
4. Installeer de `vite-plugin-prerender` plugin zodat Vercel statische HTML genereert voor elke route
5. Koppel je domein `klikklaar.nl` aan Vercel

**Optie B: Cloudflare Pages**
1. Zelfde GitHub-koppeling
2. Cloudflare Pages bouwt de site en je kunt een prerender-plugin gebruiken
3. Koppel domein aan Cloudflare

**Optie C: Prerender.io als tussenoplossing**
1. Blijf hosten op Lovable
2. Zet Prerender.io ervoor (via Cloudflare DNS als proxy)
3. Prerender.io cached een gerenderde HTML-versie voor crawlers

### Wat je nodig hebt (alle opties)
- GitHub repository gekoppeld aan Lovable (via Project Settings > GitHub)
- Een hosting platform (Vercel/Cloudflare) account
- DNS-toegang tot je domein klikklaar.nl

De code-fixes kan ik nu direct doorvoeren. De SPA-hosting moet je zelf instellen buiten Lovable.
