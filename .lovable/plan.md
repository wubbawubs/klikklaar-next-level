

## Plan: Admin Dashboard voor Tool Leads

### Wat we bouwen
Een beveiligde admin-pagina op `/admin/leads` waar tool_leads data bekeken kan worden: e-mails, tools, URLs en timestamps. Beveiligd met een simpel wachtwoord (geen volledige auth nodig voor 1 admin-pagina).

### Aanpak

**1. Database: SELECT policy toevoegen**
- Nieuwe RLS policy op `tool_leads` die SELECT toestaat voor authenticated users, OF:
- Aangezien er geen auth-systeem is: een edge function maken die de leads ophaalt met de service role key, beveiligd met een admin-wachtwoord via query parameter of header.

**2. Edge Function `admin-leads`**
- Accepteert een `password` header
- Valideert tegen een `ADMIN_PASSWORD` secret
- Queryt `tool_leads` met service role key
- Retourneert alle leads gesorteerd op `created_at DESC`
- Ondersteunt optionele filters: `tool_slug`, datum-range

**3. Admin Dashboard pagina (`src/pages/AdminLeads.tsx`)**
- Wachtwoord-invoer scherm (sessie-based, localStorage)
- Na authenticatie: tabel met kolommen: Email, Tool, URL, Datum
- Zoekbalk om te filteren op e-mail of tool
- Statistieken bovenaan: totaal leads, leads vandaag, populairste tool
- Export-knop (CSV download)
- Geen Header/Footer (clean admin layout)

**4. Route toevoegen**
- `/admin/leads` in App.tsx — geen link vanuit navigatie (verborgen)

### Beveiliging
- Admin wachtwoord als Supabase secret (`ADMIN_PASSWORD`)
- Edge function valideert wachtwoord server-side
- Geen data lekt naar client zonder correct wachtwoord
- Route bestaat maar is niet vindbaar via navigatie/sitemap

