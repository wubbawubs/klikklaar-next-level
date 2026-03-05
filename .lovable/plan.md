

## Plan: Overtuigendere Sales Landing Pages + Uitgebreidere Funnel

### Probleem nu
De pagina's zijn te dun qua inhoud. Er staat niet genoeg over wat KlikKlaarSEO doet, waarom het product waardevol is, en waarom iemand er tijd in zou willen investeren. De funnel is te kort (3 vragen) om commitment op te bouwen.

### Aanpassingen

**1. Landing pages: nieuwe secties toevoegen (alle 3 de pagina's)**

| Sectie | Inhoud |
|--------|--------|
| **Wat is KlikKlaarSEO?** | Korte uitleg: automatische vindbaarheid in Google en AI voor MKB. Bedrijven betalen €99-249/mnd, wij doen alles. Product verkoopt zichzelf als je het uitlegt. |
| **Waarom dit werkt als sales** | Social proof/resultaat: "Klanten zien gemiddeld X% meer verkeer", product lost een echt probleem op, recurring model = recurring commissie |
| **Wat je verkoopt (concreter)** | Niet alleen "websites" maar: automatische SEO, AI-vindbaarheid, wekelijkse rapportages, persoonlijke consultant. Maak het tastbaar. |
| **Rekenvoorbeeld** | Concreet uitrekenen: "5 klanten per maand = €500 opstartfee + €X recurring. Na 6 maanden draai je €Y/mnd" |
| **Trainingsdag locatie-update** | "Nijmegen of Enkhuizen" i.p.v. alleen Nijmegen |

**2. Funnel: van 3 naar 5-6 stappen**

Huidige vragen zijn te abstract. Nieuwe flow:

| Stap | Vraag | Type | Doel |
|------|-------|------|------|
| 1 | Heb je een rekeningnummer? | Ja/Nee | Kwalificatie |
| 2 | Wat beschrijft jou het beste? | MC: Student, 50+, Anders | Segmentatie |
| 3 | Hoeveel uur per week wil je beschikbaar zijn? | MC: 2-5 uur, 5-10 uur, 10+ uur | Commitment peilen |
| 4 | Heb je ervaring met sales of klantcontact? | MC: Ja veel, Een beetje, Nee maar ik wil leren | Fit check + laat zien dat geen ervaring ook ok is |
| 5 | Wil je hiervan je hoofdinkomen maken? | Ja/Nee | Ambitieniveau |
| 6 | Contact form | Naam + telefoon | Capture |

Dit bouwt meer betrokkenheid op en filtert beter.

**3. Database: 2 nieuwe kolommen toevoegen**
- `q4_uren_per_week` (text) 
- `q5_sales_ervaring` (text)

**4. Bestanden die wijzigen**

- `src/pages/StudentsLanding.tsx` — nieuwe secties + locatie-update
- `src/pages/SalesExecutive.tsx` — nieuwe secties + locatie-update  
- `src/pages/SeniorsLanding.tsx` — nieuwe secties + locatie-update
- `src/components/sales/SalesQualificationFunnel.tsx` — 5 stappen i.p.v. 3
- Database migration — 2 nieuwe kolommen

