

## Plan: Sales Recruitment Landing Pages + Lead Funnel

### Wat we bouwen

Drie landing pages met een 3-stappen kwalificatie-funnel en telefoonnnummer capture:

1. `/salesexecutive/` — algemene sales executive pagina
2. `/STUDENTSwhoMAKEtheirOWNliving/` — gericht op studenten
3. `/SENIORSwhoMAKEtheirOWNliving/` — gericht op 50+

Elke pagina bevat dezelfde funnel maar met doelgroep-specifieke copy en beelden.

### Wat valt BUITEN scope (niet bouwbaar in Lovable)

- **Social media posts/visuals voor Publer**: Lovable is een webapplicatie-builder. We kunnen geen social media campagne-assets (Instagram posts, LinkedIn visuals, etc.) genereren. Dit moet in een design tool (Canva, Figma) of met een AI image tool.
- **Publer integratie**: Geen API-koppeling mogelijk.

**Aanbeveling**: Ik kan wél een briefing/contentkalender pagina bouwen als referentie, maar de daadwerkelijke social posts en visuals moeten extern worden gemaakt.

### Technische aanpak

**1. Database: `sales_leads` tabel**
- Kolommen: `id`, `created_at`, `name`, `phone`, `landing_page` (welke variant), `q1_rekeningnummer` (bool), `q2_doelgroep` (bool), `q3_hoofdinkomen` (bool)
- RLS: INSERT voor iedereen, SELECT via admin edge function

**2. Shared component: `SalesQualificationFunnel.tsx`**
- Stap 1-3: Drie ja/nee vragen als grote knoppen
- Stap 4: Naam + telefoonnummer formulier
- Stap 5: Bedankpagina met "We bellen je binnen 24 uur"
- Slaat lead op in `sales_leads` tabel
- Props: `variant` (executive/student/senior) voor tracking

**3. Landing page template: `SalesLandingPage.tsx`**
- Hero met campagne-boodschap (KlikKlaar × IDEA)
- Commissiestructuur (€100 + 25% recurring)
- Verwachtingen & onboarding info
- Team foto's (bestaande assets: Huub, Luuk)
- CTA naar de kwalificatie-funnel
- Geen Header/Footer (standalone landing page, zoals AdLandingA)
- Per variant andere hero-tekst en beeldkeuze

**4. Drie pagina's met variant-specifieke content**

| Route | Doelgroep | Specifieke copy |
|-------|-----------|----------------|
| `/salesexecutive/` | Algemeen | "High Performance Sales Opportunity" |
| `/STUDENTSwhoMAKEtheirOWNliving/` | Studenten | "Verdien meer dan je bijbaan. Op jouw tempo." |
| `/SENIORSwhoMAKEtheirOWNliving/` | 50+ | "Ervaring is je grootste asset. Zet het in." |

**5. Routes in App.tsx**
- Drie nieuwe routes, geen navigatie-links (verborgen pagina's)

**6. Admin dashboard uitbreiding**
- `sales_leads` toevoegen aan bestaande admin-leads edge function en dashboard

### Bestanden

- `supabase migration` — `sales_leads` tabel + RLS
- `src/components/sales/SalesQualificationFunnel.tsx` — funnel component
- `src/pages/SalesExecutive.tsx` — variant 1
- `src/pages/StudentsLanding.tsx` — variant 2
- `src/pages/SeniorsLanding.tsx` — variant 3
- `src/App.tsx` — routes toevoegen

