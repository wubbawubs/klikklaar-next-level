
# Plan: SEO Blueprint — KlikKlaarSEO 900 pagina's

## Voortgang: ~461 / 900 pagina's (51%)

## Template-overzicht

| # | Template | Code | Doel | Gebouwd | Resterend | Priority mix |
|---|----------|------|------|---------|-----------|-------------|
| 1 | Diensten | SRV | 60 | 60 ✅ | 0 | Compleet |
| 2 | Branches/Industries | IND | 250 | ~250 ✅ | ~0 | Compleet |
| 3 | Platforms | PLAT | 100 | 51 ✅ | 49 | Hub + 50 landing pages |
| 4 | Locaties | LOC | 120 | ~120 ✅ | 0 | Compleet (noindex Tier 3) |
| 5 | Tools | TOOL | 150 | 0 | 150 | P2+P3 (75/75) |
| 6 | Kennisbank/Resources | RES | 220 | ~20 | ~200 | P2 grotendeels |
| 3 | Platforms | PLAT | 100 | 0 | 100 | P2+P3 (50/50) |
| 4 | Locaties | LOC | 120 | ~80 | ~40 | P2+P3 |
| 5 | Tools | TOOL | 150 | 0 | 150 | P2+P3 (75/75) |
| 6 | Kennisbank/Resources | RES | 220 | ~20 | ~200 | P2 grotendeels |

## Fase 1 — Fundament (nu → week 2)
- [x] P1 dienst-pagina's (uitbesteden + abonnement)
- [x] P2 dienst-pagina's (bureau + scan)
- [x] Diensten hub-pagina
- [x] Branches hub-pagina
- [x] Steden hub-pagina
- [ ] **SRV uitbreiden**: 38 nieuwe dienst-varianten (content-optimalisatie, linkbuilding, SEO teksten, Google Bedrijfsprofiel, SEO voor dienstverleners, SEO migratie, conversie optimalisatie, SEO strategie)
- [ ] **URL-structuur migreren**: blueprint gebruikt `/nl/diensten/[dienst]/[variant]` i.p.v. huidige flat `/diensten/[dienst]-[variant]`

## Fase 2 — Branches uitbreiden (week 3-4)
- [ ] **IND template upgraden**: toevoegen "lokale SEO voor [branche]" variant (125 extra pagina's)
- [ ] **IND data uitbreiden**: van 29 naar 125 branches (accountant, advocaat, tandarts, restaurant, sportschool, etc.)
- [ ] Hub-pagina `/branches` updaten met categorieën

## Fase 3 — Platforms (week 4-5)
- [ ] **PLAT template bouwen**: "SEO voor [platform]" + "[platform] SEO handleiding"
- [ ] **PLAT data**: 50 platforms (WordPress, Shopify, Wix, Webflow, Magento, etc.)
- [ ] Hub-pagina `/platforms` bouwen

## Fase 4 — Locaties uitbreiden (week 5-6)
- [ ] **LOC uitbreiden**: van 80 naar 120 steden
- [ ] Noindex-gating voor Tier 3 steden

## Fase 5 — Tools (week 6-8)
- [ ] **TOOL template bouwen**: tool-pagina + handleiding variant
- [ ] **TOOL data**: 75 tools (meta tag checker, keyword density, schema validator, etc.)
- [ ] Hub-pagina `/tools` bouwen

## Fase 6 — Kennisbank/Resources (week 8-12)
- [ ] **RES template upgraden**: gids/checklist/voorbeelden/best-practices/FAQ clusters
- [ ] **RES data**: 44 topics × 5 formaten = 220 pagina's
- [ ] Hub-pagina `/kennis` uitbreiden

## Architectuur-beslissingen nodig
1. **URL-prefix `/nl/`**: blueprint gebruikt `/nl/` prefix → moeten we migreren of houden we huidige structuur?
2. **Noindex-gating**: automatisch noindex tot "Required unique modules" gevuld → hoe implementeren?
3. **Data-opslag**: alle 900 entries in statische TS bestanden of naar database (Lovable Cloud)?

## Technische templates nog te bouwen
- `PlatformLandingPage` (PLAT) — SEO voor [platform]
- `PlatformHandleidingPage` (PLAT) — [platform] SEO handleiding
- `ToolLandingPage` (TOOL) — gratis SEO tool
- `ToolHandleidingPage` (TOOL) — tool handleiding
- `BranchLokaleSeoPage` (IND variant) — lokale SEO voor [branche]
- `ResourceClusterPage` (RES) — gids/checklist/voorbeelden/best-practices/FAQ

## Bronbestand
Volledige blueprint: `seo_page_blueprint_nl_v3_2700-2.xlsx` (Page 3 = KlikKlaarSEO)
