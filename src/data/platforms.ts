export interface PlatformData {
  slug: string;
  name: string;
  icon: string;
  category: "cms" | "ecommerce" | "website-builder" | "custom" | "marketing";
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: Array<{ icon: string; text: string }>;
  solutions: Array<{ title: string; description: string }>;
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

type PlatformCategory = PlatformData["category"];

interface PlatformInput {
  slug: string;
  name: string;
  icon: string;
  category: PlatformCategory;
  snippet: string;
  statValue?: string;
  statLabel?: string;
}

const categoryPains: Record<PlatformCategory, (name: string) => Array<{ icon: string; text: string }>> = {
  cms: (n) => [
    { icon: "Search", text: `Je ${n}-website wordt niet goed geïndexeerd door Google` },
    { icon: "Gauge", text: `${n} laadt traag zonder de juiste optimalisatie` },
    { icon: "Code", text: `Technische SEO-fouten die je zelf niet ziet in ${n}` },
    { icon: "TrendingDown", text: `Concurrenten met ${n} scoren hoger dan jij` },
  ],
  ecommerce: (n) => [
    { icon: "ShoppingCart", text: `Je ${n}-producten verschijnen niet in Google Shopping` },
    { icon: "Search", text: `Categorieën en producten worden slecht geïndexeerd` },
    { icon: "TrendingDown", text: `Concurrenten op ${n} scoren beter` },
    { icon: "Clock", text: `Geen tijd om ${n} SEO-technisch te optimaliseren` },
  ],
  "website-builder": (n) => [
    { icon: "Code", text: `Beperkte SEO-instellingen in ${n}` },
    { icon: "Gauge", text: `${n}-templates zijn vaak niet SEO-geoptimaliseerd` },
    { icon: "Search", text: `Google begrijpt je ${n}-site structuur niet goed` },
    { icon: "TrendingDown", text: `Je ${n}-website wordt niet gevonden` },
  ],
  custom: (n) => [
    { icon: "Code", text: `Technische SEO-problemen in je ${n}-website` },
    { icon: "Gauge", text: `Performance en snelheid van je ${n}-site` },
    { icon: "Search", text: `Slechte indexatie door Google` },
    { icon: "Clock", text: `Dure ontwikkelaar nodig voor SEO-aanpassingen` },
  ],
  marketing: (n) => [
    { icon: "Target", text: `${n} en SEO zijn niet goed op elkaar afgestemd` },
    { icon: "BarChart", text: `Geen inzicht in organisch verkeer via ${n}` },
    { icon: "Search", text: `Content in ${n} wordt niet gevonden in Google` },
    { icon: "Clock", text: `Geen tijd om SEO en ${n} samen te optimaliseren` },
  ],
};

const categorySolutions: Record<PlatformCategory, (name: string) => Array<{ title: string; description: string }>> = {
  cms: (n) => [
    { title: `${n} technische SEO`, description: `We optimaliseren snelheid, indexatie en structuur van je ${n}-site` },
    { title: "Content optimalisatie", description: `Pagina's en blogs in ${n} worden geoptimaliseerd voor zoekwoorden` },
    { title: "Automatische monitoring", description: `We monitoren je ${n}-site continu op SEO-fouten` },
  ],
  ecommerce: (n) => [
    { title: "Product SEO", description: `Producttitels, beschrijvingen en afbeeldingen optimaliseren in ${n}` },
    { title: "Categorie structuur", description: `Logische URL-structuur en interne links voor ${n}` },
    { title: "Schema markup", description: `Product rich snippets voor betere CTR in Google` },
  ],
  "website-builder": (n) => [
    { title: `${n} SEO-instellingen`, description: `Maximaal halen uit de beschikbare SEO-opties in ${n}` },
    { title: "Content optimalisatie", description: "Teksten en afbeeldingen optimaliseren voor zoekmachines" },
    { title: "Technische verbeteringen", description: `Snelheid en indexatie verbeteren binnen ${n}-beperkingen` },
  ],
  custom: (n) => [
    { title: "Technische SEO audit", description: `Diepgaande analyse van je ${n}-website` },
    { title: "Performance optimalisatie", description: "Core Web Vitals en laadsnelheid verbeteren" },
    { title: "Structuur verbetering", description: "Interne links, sitemaps en crawlbaarheid optimaliseren" },
  ],
  marketing: (n) => [
    { title: `${n} + SEO integratie`, description: `SEO en ${n} perfect op elkaar afstemmen` },
    { title: "Content strategie", description: "Content die zowel via SEO als via je platform presteert" },
    { title: "Data & rapportage", description: "Helder inzicht in wat SEO oplevert naast je andere kanalen" },
  ],
};

const categoryFaqs: Record<PlatformCategory, (name: string) => Array<{ question: string; answer: string }>> = {
  cms: (n) => [
    { question: `Is ${n} goed voor SEO?`, answer: `${n} biedt een solide basis, maar zonder de juiste optimalisatie mis je veel kansen. Wij halen het maximale uit ${n} voor jouw SEO.` },
    { question: `Moet ik plugins installeren voor SEO op ${n}?`, answer: `Dat hangt af van je setup. Wij adviseren en configureren de juiste tools zodat alles optimaal werkt.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `De eerste verbeteringen in rankings zie je vaak binnen 4-6 weken. Meer verkeer en klanten binnen 2-3 maanden.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, alle pakketten zijn maandelijks opzegbaar. Geen verborgen kosten.` },
  ],
  ecommerce: (n) => [
    { question: `Hoe verbeter ik de SEO van mijn ${n}-webshop?`, answer: `We optimaliseren producttitels, beschrijvingen, categoriestructuur, snelheid en schema markup. Zo scoren je producten hoger.` },
    { question: `Werkt dit ook voor grote productcatalogi?`, answer: `Ja, juist bij veel producten is goede SEO-structuur cruciaal. We automatiseren waar mogelijk.` },
    { question: `Hoe snel zie ik meer verkeer?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer organisch verkeer en omzet binnen 2-3 maanden.` },
    { question: `Moet ik mijn webshop aanpassen?`, answer: `Meestal niet ingrijpend. Wij doen de optimalisaties binnen ${n} zonder je design te veranderen.` },
  ],
  "website-builder": (n) => [
    { question: `Kan ik goede SEO doen met ${n}?`, answer: `${n} heeft beperkingen, maar er is meer mogelijk dan je denkt. Wij halen het maximale eruit.` },
    { question: `Moet ik overstappen naar WordPress?`, answer: `Niet per se. We optimaliseren eerst binnen ${n}. Alleen als het echt niet kan, adviseren we een overstap.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Meer bezoekers binnen 2-3 maanden.` },
    { question: `Is er een contract?`, answer: `Nee, maandelijks opzegbaar.` },
  ],
  custom: (n) => [
    { question: `Hoe optimaliseer ik mijn ${n}-website voor SEO?`, answer: `We doen een technische audit en voeren verbeteringen door in samenwerking met je developer of zelf.` },
    { question: `Is mijn custom website geschikt voor SEO?`, answer: `Vrijwel altijd. De basis is technisch goed krijgen, daarna content en linkbuilding.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Significante groei binnen 2-3 maanden.` },
    { question: `Kan ik maandelijks opzeggen?`, answer: `Ja, zonder verborgen kosten.` },
  ],
  marketing: (n) => [
    { question: `Hoe combineer ik ${n} met SEO?`, answer: `We zorgen dat je SEO-strategie en ${n} elkaar versterken in plaats van kannibaliseren.` },
    { question: `Vervangt SEO mijn ${n}-strategie?`, answer: `Nee, SEO is aanvullend. Samen bereik je meer klanten via meerdere kanalen.` },
    { question: `Hoe snel zie ik resultaten?`, answer: `Eerste verbeteringen binnen 4-6 weken. Structureel meer organisch verkeer binnen 2-3 maanden.` },
    { question: `Is er een contract?`, answer: `Nee, maandelijks opzegbaar.` },
  ],
};

const defaultStats: Record<PlatformCategory, Array<{ value: string; label: string }>> = {
  cms: [
    { value: "+127%", label: "Meer organisch verkeer" },
    { value: "Top 5", label: "Google positie" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" },
  ],
  ecommerce: [
    { value: "+156%", label: "Meer organisch verkeer" },
    { value: "+89%", label: "Meer productweergaven" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" },
  ],
  "website-builder": [
    { value: "+98%", label: "Meer bezoekers" },
    { value: "Top 10", label: "Google positie" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" },
  ],
  custom: [
    { value: "+134%", label: "Meer organisch verkeer" },
    { value: "Top 5", label: "Google positie" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" },
  ],
  marketing: [
    { value: "+112%", label: "Meer organisch verkeer" },
    { value: "+67%", label: "Meer leads" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" },
  ],
};

function createPlatform(input: PlatformInput): PlatformData {
  const { slug, name, icon, category, snippet, statValue, statLabel } = input;
  const stats = [...defaultStats[category]];
  if (statValue && statLabel) {
    stats[0] = { value: statValue, label: statLabel };
  }
  return {
    slug,
    name,
    icon,
    category,
    headline: `SEO voor ${name} |`,
    subheadline: snippet,
    heroDescription: `${name} SEO laten doen? Wij optimaliseren je ${name}-website zodat je hoger scoort in Google. ${snippet}`,
    painPoints: categoryPains[category](name),
    solutions: categorySolutions[category](name),
    stats,
    faqs: categoryFaqs[category](name),
  };
}

// ─── 50 Platforms ────────────────────────────────────────────────
const platformInputs: PlatformInput[] = [
  // CMS (12)
  { slug: "wordpress", name: "WordPress", icon: "Globe", category: "cms", snippet: "De populairste CMS ter wereld, maar zonder SEO-optimalisatie mis je kansen.", statValue: "+145%", statLabel: "Meer organisch verkeer" },
  { slug: "joomla", name: "Joomla", icon: "Globe", category: "cms", snippet: "Krachtige CMS met SEO-potentieel dat vaak onbenut blijft." },
  { slug: "drupal", name: "Drupal", icon: "Globe", category: "cms", snippet: "Enterprise CMS met sterke SEO-mogelijkheden wanneer goed geconfigureerd." },
  { slug: "typo3", name: "TYPO3", icon: "Globe", category: "cms", snippet: "Professioneel CMS populair in de Benelux, met specifieke SEO-vereisten." },
  { slug: "craft-cms", name: "Craft CMS", icon: "Globe", category: "cms", snippet: "Modern CMS met flexibele SEO-opties voor developers." },
  { slug: "contentful", name: "Contentful", icon: "Globe", category: "cms", snippet: "Headless CMS dat extra SEO-aandacht vereist voor optimale indexatie." },
  { slug: "strapi", name: "Strapi", icon: "Globe", category: "cms", snippet: "Open-source headless CMS, SEO vereist frontend-optimalisatie." },
  { slug: "ghost", name: "Ghost", icon: "Globe", category: "cms", snippet: "Publishing-platform met ingebouwde SEO, maar extra optimalisatie loont." },
  { slug: "sanity", name: "Sanity", icon: "Globe", category: "cms", snippet: "Headless CMS voor ontwikkelaars, SEO-strategie is essentieel." },
  { slug: "hubspot-cms", name: "HubSpot CMS", icon: "Globe", category: "cms", snippet: "All-in-one platform met SEO-tools die vaak onbenut blijven." },
  { slug: "storyblok", name: "Storyblok", icon: "Globe", category: "cms", snippet: "Visual headless CMS met goede SEO-mogelijkheden." },
  { slug: "prismic", name: "Prismic", icon: "Globe", category: "cms", snippet: "Headless CMS dat aandacht vereist voor technische SEO." },

  // E-commerce (12)
  { slug: "shopify", name: "Shopify", icon: "ShoppingCart", category: "ecommerce", snippet: "Populairste e-commerce platform. Met de juiste SEO meer organische verkopen.", statValue: "+178%", statLabel: "Meer productweergaven" },
  { slug: "woocommerce", name: "WooCommerce", icon: "ShoppingCart", category: "ecommerce", snippet: "WordPress-webshop met enorm SEO-potentieel.", statValue: "+156%", statLabel: "Meer organische omzet" },
  { slug: "magento", name: "Magento", icon: "ShoppingCart", category: "ecommerce", snippet: "Enterprise e-commerce met krachtige SEO wanneer goed ingericht." },
  { slug: "prestashop", name: "PrestaShop", icon: "ShoppingCart", category: "ecommerce", snippet: "Open-source webshop met SEO-mogelijkheden die aandacht vereisen." },
  { slug: "bigcommerce", name: "BigCommerce", icon: "ShoppingCart", category: "ecommerce", snippet: "Schaalbaar e-commerce platform met ingebouwde SEO-features." },
  { slug: "lightspeed", name: "Lightspeed", icon: "ShoppingCart", category: "ecommerce", snippet: "Nederlandse e-commerce oplossing, SEO-optimalisatie maakt het verschil." },
  { slug: "shopware", name: "Shopware", icon: "ShoppingCart", category: "ecommerce", snippet: "Duits e-commerce platform populair in de Benelux." },
  { slug: "ecwid", name: "Ecwid", icon: "ShoppingCart", category: "ecommerce", snippet: "Eenvoudige webshop-oplossing met beperkte maar optimaliseerbare SEO." },
  { slug: "saleor", name: "Saleor", icon: "ShoppingCart", category: "ecommerce", snippet: "Headless e-commerce, SEO vereist frontend-aandacht." },
  { slug: "mijnwebwinkel", name: "Mijnwebwinkel", icon: "ShoppingCart", category: "ecommerce", snippet: "Nederlands webshop-platform met specifieke SEO-uitdagingen." },
  { slug: "ccvshop", name: "CCV Shop", icon: "ShoppingCart", category: "ecommerce", snippet: "Nederlandse webshop-oplossing met SEO-verbeterpotentieel." },
  { slug: "etsy", name: "Etsy", icon: "ShoppingCart", category: "ecommerce", snippet: "Marketplace SEO: opvallen tussen miljoenen andere verkopers." },

  // Website Builders (12)
  { slug: "wix", name: "Wix", icon: "Layout", category: "website-builder", snippet: "Populaire website-builder met verbeterde maar beperkte SEO-opties.", statValue: "+112%", statLabel: "Meer bezoekers" },
  { slug: "squarespace", name: "Squarespace", icon: "Layout", category: "website-builder", snippet: "Mooie templates, maar SEO vereist extra aandacht." },
  { slug: "webflow", name: "Webflow", icon: "Layout", category: "website-builder", snippet: "Design-first platform met uitstekende SEO-mogelijkheden." },
  { slug: "weebly", name: "Weebly", icon: "Layout", category: "website-builder", snippet: "Eenvoudige builder met basale SEO-functies die geoptimaliseerd kunnen worden." },
  { slug: "jimdo", name: "Jimdo", icon: "Layout", category: "website-builder", snippet: "Duitse website-builder populair bij kleine ondernemers." },
  { slug: "one-com", name: "One.com", icon: "Layout", category: "website-builder", snippet: "Hosting + builder combo met SEO-verbeterpotentieel." },
  { slug: "strikingly", name: "Strikingly", icon: "Layout", category: "website-builder", snippet: "Single-page builder, SEO vereist een andere aanpak." },
  { slug: "carrd", name: "Carrd", icon: "Layout", category: "website-builder", snippet: "Minimalistische one-page builder met beperkte SEO." },
  { slug: "duda", name: "Duda", icon: "Layout", category: "website-builder", snippet: "Website-builder voor agencies met goede SEO-features." },
  { slug: "google-sites", name: "Google Sites", icon: "Layout", category: "website-builder", snippet: "Gratis Google tool met minimale maar aanwezige SEO-opties." },
  { slug: "notion-sites", name: "Notion Sites", icon: "Layout", category: "website-builder", snippet: "Notion als website, SEO is beperkt maar optimaliseerbaar." },
  { slug: "framer", name: "Framer", icon: "Layout", category: "website-builder", snippet: "Design-tool met publishing, sterke SEO-mogelijkheden." },

  // Custom / Frameworks (8)
  { slug: "nextjs", name: "Next.js", icon: "Code", category: "custom", snippet: "React framework met SSR, ideaal voor SEO mits goed geconfigureerd." },
  { slug: "nuxtjs", name: "Nuxt.js", icon: "Code", category: "custom", snippet: "Vue framework met SSR en goede SEO-basis." },
  { slug: "gatsby", name: "Gatsby", icon: "Code", category: "custom", snippet: "Static site generator met snelle laadtijden en SEO-voordelen." },
  { slug: "laravel", name: "Laravel", icon: "Code", category: "custom", snippet: "PHP framework, SEO vereist specifieke configuratie." },
  { slug: "angular", name: "Angular", icon: "Code", category: "custom", snippet: "Enterprise framework, server-side rendering is essentieel voor SEO." },
  { slug: "react", name: "React", icon: "Code", category: "custom", snippet: "Populairste frontend library, zonder SSR is SEO een uitdaging." },
  { slug: "html-css", name: "HTML/CSS", icon: "Code", category: "custom", snippet: "Statische website — maximale controle over SEO." },
  { slug: "asp-net", name: "ASP.NET", icon: "Code", category: "custom", snippet: "Microsoft framework, SEO vereist specifieke aanpak." },

  // Marketing Platforms (6)
  { slug: "mailchimp", name: "Mailchimp", icon: "Mail", category: "marketing", snippet: "E-mail marketing platform met landing pages die SEO nodig hebben." },
  { slug: "google-ads", name: "Google Ads", icon: "Target", category: "marketing", snippet: "Betaald verkeer + SEO: de combinatie die het beste werkt." },
  { slug: "meta-ads", name: "Meta Ads", icon: "Target", category: "marketing", snippet: "Social advertising + SEO: bereik klanten op elk moment." },
  { slug: "linkedin", name: "LinkedIn", icon: "Users", category: "marketing", snippet: "B2B marketing + SEO: word gevonden door zakelijke klanten." },
  { slug: "google-my-business", name: "Google Bedrijfsprofiel", icon: "MapPin", category: "marketing", snippet: "Lokale SEO begint bij je Google Bedrijfsprofiel." },
  { slug: "trustpilot", name: "Trustpilot", icon: "Star", category: "marketing", snippet: "Reviews + SEO: sociale bewijskracht die je ranking verbetert." },
];

export const platforms: PlatformData[] = platformInputs.map(createPlatform);

export function getPlatformBySlug(slug: string): PlatformData | undefined {
  return platforms.find(p => p.slug === slug);
}

export const platformCategories: Record<PlatformCategory, string> = {
  cms: "Content Management Systemen",
  ecommerce: "E-commerce Platforms",
  "website-builder": "Website Builders",
  custom: "Frameworks & Custom",
  marketing: "Marketing Platforms",
};
