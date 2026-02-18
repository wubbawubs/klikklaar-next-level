

# Plan: SEO Blueprint Implementatie — Dienst-pagina's

## Status
- **P1 ✅** — 10 pagina's: 5× uitbesteden + 5× abonnement (Automatische SEO, Lokale SEO, Technische SEO, SEO Audit, SEO Strategie)
- **P2 ✅** — 10 pagina's: 5× bureau + 5× scan (zelfde 5 diensten)
- **Totaal dienst-pagina's**: 20 live + 2 pillar hubs = 22 URLs

## Architectuur
- Data: `service-variants.ts` (P1), `service-variants-p2.ts` (P2)
- Templates: `DienstUitbestedenPage`, `DienstAbonnementPage`, `DienstBureauPage`, `DienstScanPage`
- Hub pages: `/diensten/seo-uitbesteden` en `/diensten/seo-abonnement` linken naar alle 20 varianten
- Sitemap: alle 20 URLs opgenomen met priority 0.80-0.85

## Volgende stappen
- P3: Platform/Tool-specifieke dienst-pagina's (WordPress SEO, Shopify SEO, etc.)
- Breder: Resources, vergelijkingspagina's volgens het 900-pagina blueprint

