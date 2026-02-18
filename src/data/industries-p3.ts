import { createIndustry } from "./industry-factory";
import { IndustryData } from "./industries";

/**
 * Industries P3: ~111 new industries across remaining categories
 */
export const industriesP3: IndustryData[] = [
  // ============================================
  // AUTO & TRANSPORT (12 new)
  // ============================================
  createIndustry({ slug: "garages", name: "Garage", namePlural: "Garages", icon: "Wrench", category: "auto", heroSnippet: "Word gevonden door autorijders die zoeken naar een autogarage." }),
  createIndustry({ slug: "autopoetsers", name: "Autopoetser", namePlural: "Autopoetsers", icon: "Sparkles", category: "auto", heroSnippet: "Bereik autobezitters die zoeken naar auto detailing." }),
  createIndustry({ slug: "bandenservices", name: "Bandenservice", namePlural: "Bandenservices", icon: "Circle", category: "auto", heroSnippet: "Word gevonden door automobilisten die zoeken naar banden wisselen." }),
  createIndustry({ slug: "apk-stations", name: "APK Station", namePlural: "APK Stations", icon: "CheckCircle", category: "auto", heroSnippet: "Bereik autorijders die zoeken naar APK-keuring in de buurt." }),
  createIndustry({ slug: "autohandelaren", name: "Autohandelaar", namePlural: "Autohandelaren", icon: "Car", category: "auto", heroSnippet: "Word gevonden door kopers die zoeken naar een occasion of nieuwe auto." }),
  createIndustry({ slug: "schadeherstellers", name: "Schadehersteller", namePlural: "Schadeherstellers", icon: "Wrench", category: "auto", heroSnippet: "Bereik autorijders die zoeken naar autoschadeherstel." }),
  createIndustry({ slug: "motorwerkplaatsen", name: "Motorwerkplaats", namePlural: "Motorwerkplaatsen", icon: "Bike", category: "auto", heroSnippet: "Word gevonden door motorrijders die zoeken naar onderhoud en reparatie." }),
  createIndustry({ slug: "autoverhuur", name: "Autoverhuurbedrijf", namePlural: "Autoverhuurbedrijven", icon: "Car", category: "auto", heroSnippet: "Bereik klanten die zoeken naar een huurauto in de buurt." }),
  createIndustry({ slug: "carwash", name: "Carwash", namePlural: "Carwashes", icon: "Droplets", category: "auto", heroSnippet: "Word gevonden door automobilisten die zoeken naar een wasstraat." }),
  createIndustry({ slug: "taxibedrijven", name: "Taxibedrijf", namePlural: "Taxibedrijven", icon: "Car", category: "auto", heroSnippet: "Bereik reizigers die zoeken naar een taxi in de regio." }),
  createIndustry({ slug: "fietsenmakers-reparatie", name: "Fietsreparateur", namePlural: "Fietsreparateurs", icon: "Bike", category: "auto", heroSnippet: "Word gevonden door fietsers die zoeken naar fietsreparatie." }),
  createIndustry({ slug: "camper-verhuur", name: "Camperverhuur", namePlural: "Camperverhuurders", icon: "Truck", category: "auto", heroSnippet: "Bereik vakantiegangers die zoeken naar een camper huren." }),

  // ============================================
  // CREATIEF & MEDIA (18 new)
  // ============================================
  createIndustry({ slug: "videografen", name: "Videograaf", namePlural: "Videografen", icon: "Video", category: "creatief", heroSnippet: "Word gevonden door bedrijven die zoeken naar videoproductie." }),
  createIndustry({ slug: "grafisch-ontwerpers", name: "Grafisch Ontwerper", namePlural: "Grafisch Ontwerpers", icon: "Palette", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar grafisch ontwerp en branding." }),
  createIndustry({ slug: "vertalers", name: "Vertaler", namePlural: "Vertalers", icon: "Languages", category: "creatief", heroSnippet: "Word gevonden door bedrijven die zoeken naar professionele vertaling." }),
  createIndustry({ slug: "copywriters", name: "Copywriter", namePlural: "Copywriters", icon: "PenTool", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar overtuigende teksten." }),
  createIndustry({ slug: "event-planners", name: "Event Planner", namePlural: "Event Planners", icon: "Calendar", category: "creatief", heroSnippet: "Word gevonden door bedrijven die een evenement willen organiseren." }),
  createIndustry({ slug: "wedding-planners", name: "Wedding Planner", namePlural: "Wedding Planners", icon: "Heart", category: "creatief", heroSnippet: "Bereik stellen die zoeken naar een bruiloft organisator." }),
  createIndustry({ slug: "architecten", name: "Architect", namePlural: "Architecten", icon: "Building2", category: "creatief", heroSnippet: "Word gevonden door opdrachtgevers die zoeken naar een architect." }),
  createIndustry({ slug: "interieur-bouwers", name: "Interieurbouwer", namePlural: "Interieurbouwers", icon: "Ruler", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar maatwerk interieurbouw." }),
  createIndustry({ slug: "illustratoren", name: "Illustrator", namePlural: "Illustratoren", icon: "Pencil", category: "creatief", heroSnippet: "Word gevonden door uitgevers en bedrijven die zoeken naar illustraties." }),
  createIndustry({ slug: "animatie-studios", name: "Animatie Studio", namePlural: "Animatie Studio's", icon: "Film", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar animatie en motion graphics." }),
  createIndustry({ slug: "social-media-bureaus", name: "Social Media Bureau", namePlural: "Social Media Bureaus", icon: "Share2", category: "creatief", heroSnippet: "Word gevonden door bedrijven die zoeken naar social media management." }),
  createIndustry({ slug: "drukkerijen", name: "Drukkerij", namePlural: "Drukkerijen", icon: "Printer", category: "creatief", heroSnippet: "Bereik klanten die zoeken naar drukwerk en printdiensten." }),
  createIndustry({ slug: "reclame-bureaus", name: "Reclamebureau", namePlural: "Reclamebureaus", icon: "Megaphone", category: "creatief", heroSnippet: "Word gevonden door bedrijven die zoeken naar reclame en marketing." }),
  createIndustry({ slug: "branding-bureaus", name: "Brandingbureau", namePlural: "Brandingbureaus", icon: "Palette", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar merkidentiteit en branding." }),
  createIndustry({ slug: "podcasters", name: "Podcast Producer", namePlural: "Podcast Producers", icon: "Mic", category: "creatief", heroSnippet: "Word gevonden door bedrijven die zoeken naar podcast productie." }),
  createIndustry({ slug: "content-creators", name: "Content Creator", namePlural: "Content Creators", icon: "PenTool", category: "creatief", heroSnippet: "Bereik bedrijven die zoeken naar content creatie." }),
  createIndustry({ slug: "muzikanten", name: "Muzikant", namePlural: "Muzikanten", icon: "Music", category: "creatief", heroSnippet: "Word gevonden voor bruiloften, feesten en evenementen." }),
  createIndustry({ slug: "djs", name: "DJ", namePlural: "DJ's", icon: "Music2", category: "creatief", heroSnippet: "Bereik feestorganisatoren die zoeken naar een DJ." }),

  // ============================================
  // ZAKELIJK & CONSULTING (18 new)
  // ============================================
  createIndustry({ slug: "consultants", name: "Consultant", namePlural: "Consultants", icon: "Briefcase", category: "zakelijk", heroSnippet: "Word gevonden door bedrijven die zoeken naar professioneel advies." }),
  createIndustry({ slug: "hr-adviseurs", name: "HR Adviseur", namePlural: "HR Adviseurs", icon: "Users", category: "zakelijk", heroSnippet: "Bereik bedrijven die zoeken naar HR-ondersteuning." }),
  createIndustry({ slug: "recruiters", name: "Recruiter", namePlural: "Recruiters", icon: "UserPlus", category: "zakelijk", heroSnippet: "Word gevonden door bedrijven die zoeken naar werving en selectie." }),
  createIndustry({ slug: "uitzendbureaus", name: "Uitzendbureau", namePlural: "Uitzendbureaus", icon: "Users", category: "zakelijk", heroSnippet: "Bereik werkgevers en werkzoekenden in jouw regio." }),
  createIndustry({ slug: "marketing-bureaus", name: "Marketingbureau", namePlural: "Marketingbureaus", icon: "TrendingUp", category: "zakelijk", heroSnippet: "Word gevonden door bedrijven die zoeken naar marketing ondersteuning." }),
  createIndustry({ slug: "pr-bureaus", name: "PR Bureau", namePlural: "PR Bureaus", icon: "Megaphone", category: "zakelijk", heroSnippet: "Bereik bedrijven die zoeken naar public relations." }),
  createIndustry({ slug: "management-consultants", name: "Management Consultant", namePlural: "Management Consultants", icon: "BarChart", category: "zakelijk", heroSnippet: "Word gevonden door bedrijven die zoeken naar strategisch advies." }),
  createIndustry({ slug: "bedrijfscoaches", name: "Bedrijfscoach", namePlural: "Bedrijfscoaches", icon: "Target", category: "zakelijk", heroSnippet: "Bereik ondernemers die zoeken naar zakelijke coaching." }),
  createIndustry({ slug: "interim-managers", name: "Interim Manager", namePlural: "Interim Managers", icon: "Briefcase", category: "zakelijk", heroSnippet: "Word gevonden door organisaties die zoeken naar tijdelijk management." }),
  createIndustry({ slug: "vastgoedadviseurs", name: "Vastgoedadviseur", namePlural: "Vastgoedadviseurs", icon: "Building", category: "zakelijk", heroSnippet: "Bereik vastgoedbeleggers die zoeken naar advies." }),
  createIndustry({ slug: "taxateurs", name: "Taxateur", namePlural: "Taxateurs", icon: "Search", category: "zakelijk", heroSnippet: "Word gevonden door eigenaren die zoeken naar een woningtaxatie." }),
  createIndustry({ slug: "subsidieadviseurs", name: "Subsidieadviseur", namePlural: "Subsidieadviseurs", icon: "Coins", category: "zakelijk", heroSnippet: "Bereik bedrijven die zoeken naar subsidiemogelijkheden." }),
  createIndustry({ slug: "franchise-adviseurs", name: "Franchise Adviseur", namePlural: "Franchise Adviseurs", icon: "Building2", category: "zakelijk", heroSnippet: "Word gevonden door ondernemers die zoeken naar franchise mogelijkheden." }),
  createIndustry({ slug: "business-coaches", name: "Business Coach", namePlural: "Business Coaches", icon: "Rocket", category: "zakelijk", heroSnippet: "Bereik ondernemers die zoeken naar professionele business coaching." }),
  createIndustry({ slug: "loopbaancoaches", name: "Loopbaancoach", namePlural: "Loopbaancoaches", icon: "Compass", category: "zakelijk", heroSnippet: "Word gevonden door professionals die zoeken naar loopbaanbegeleiding." }),
  createIndustry({ slug: "outplacement-bureaus", name: "Outplacement Bureau", namePlural: "Outplacement Bureaus", icon: "ArrowRight", category: "zakelijk", heroSnippet: "Bereik werkgevers die zoeken naar outplacement diensten." }),
  createIndustry({ slug: "reintegratiecoaches", name: "Re-integratiecoach", namePlural: "Re-integratiecoaches", icon: "RefreshCw", category: "zakelijk", heroSnippet: "Word gevonden door werkgevers en werknemers die zoeken naar re-integratie." }),
  createIndustry({ slug: "bedrijfsadviseurs", name: "Bedrijfsadviseur", namePlural: "Bedrijfsadviseurs", icon: "Lightbulb", category: "zakelijk", heroSnippet: "Bereik mkb'ers die zoeken naar zakelijk advies." }),

  // ============================================
  // ONDERWIJS & TRAINING (12 new)
  // ============================================
  createIndustry({ slug: "bijlesdiensten", name: "Bijlesdienst", namePlural: "Bijlesdiensten", icon: "GraduationCap", category: "onderwijs", heroSnippet: "Word gevonden door ouders en studenten die zoeken naar bijles." }),
  createIndustry({ slug: "taalscholen", name: "Taalschool", namePlural: "Taalscholen", icon: "Languages", category: "onderwijs", heroSnippet: "Bereik mensen die zoeken naar taallessen en cursussen." }),
  createIndustry({ slug: "muziekscholen", name: "Muziekschool", namePlural: "Muziekscholen", icon: "Music", category: "onderwijs", heroSnippet: "Word gevonden door muziekliefhebbers die zoeken naar lessen." }),
  createIndustry({ slug: "kinderopvang", name: "Kinderopvang", namePlural: "Kinderopvanglocaties", icon: "Baby", category: "onderwijs", heroSnippet: "Bereik ouders die zoeken naar kinderopvang in de buurt." }),
  createIndustry({ slug: "bso", name: "BSO", namePlural: "BSO's", icon: "Building", category: "onderwijs", heroSnippet: "Word gevonden door ouders die zoeken naar buitenschoolse opvang." }),
  createIndustry({ slug: "huiswerkbegeleiding", name: "Huiswerkbegeleider", namePlural: "Huiswerkbegeleidingen", icon: "BookOpen", category: "onderwijs", heroSnippet: "Bereik ouders die zoeken naar huiswerkbegeleiding." }),
  createIndustry({ slug: "trainers-coaches-opleiding", name: "Opleider", namePlural: "Opleiders & Trainers", icon: "GraduationCap", category: "onderwijs", heroSnippet: "Word gevonden door bedrijven die zoeken naar trainingen en workshops." }),
  createIndustry({ slug: "autorijscholen-motor", name: "Motorrijschool", namePlural: "Motorrijscholen", icon: "Bike", category: "onderwijs", heroSnippet: "Bereik aspirant-motorrijders die zoeken naar motorrijlessen." }),
  createIndustry({ slug: "vaarscholen", name: "Vaarschool", namePlural: "Vaarscholen", icon: "Ship", category: "onderwijs", heroSnippet: "Word gevonden door mensen die zoeken naar vaarbewijslessen." }),
  createIndustry({ slug: "coding-bootcamps", name: "Coding Bootcamp", namePlural: "Coding Bootcamps", icon: "Code", category: "onderwijs", heroSnippet: "Bereik carrièrewisselaars die zoeken naar programmeeropleidingen." }),
  createIndustry({ slug: "ehbo-cursussen", name: "EHBO Cursusaanbieder", namePlural: "EHBO Cursusaanbieders", icon: "Heart", category: "onderwijs", heroSnippet: "Word gevonden door bedrijven en particulieren die zoeken naar EHBO-cursussen." }),
  createIndustry({ slug: "zelfverdedigingsscholen", name: "Zelfverdedigingsschool", namePlural: "Zelfverdedigingsscholen", icon: "Shield", category: "onderwijs", heroSnippet: "Bereik mensen die zoeken naar zelfverdedigingslessen." }),

  // ============================================
  // TECH & IT (12 new)
  // ============================================
  createIndustry({ slug: "it-bedrijven", name: "IT Bedrijf", namePlural: "IT Bedrijven", icon: "Monitor", category: "tech", heroSnippet: "Word gevonden door bedrijven die zoeken naar IT-diensten." }),
  createIndustry({ slug: "webdesigners", name: "Webdesigner", namePlural: "Webdesigners", icon: "Globe", category: "tech", heroSnippet: "Bereik bedrijven die zoeken naar professioneel webdesign." }),
  createIndustry({ slug: "app-ontwikkelaars", name: "App Ontwikkelaar", namePlural: "App Ontwikkelaars", icon: "Smartphone", category: "tech", heroSnippet: "Word gevonden door bedrijven die een app willen laten bouwen." }),
  createIndustry({ slug: "software-bedrijven", name: "Software Bedrijf", namePlural: "Software Bedrijven", icon: "Code", category: "tech", heroSnippet: "Bereik bedrijven die zoeken naar maatwerk software." }),
  createIndustry({ slug: "hosting-providers", name: "Hosting Provider", namePlural: "Hosting Providers", icon: "Server", category: "tech", heroSnippet: "Word gevonden door bedrijven die zoeken naar webhosting." }),
  createIndustry({ slug: "cybersecurity-bedrijven", name: "Cybersecurity Bedrijf", namePlural: "Cybersecurity Bedrijven", icon: "Shield", category: "tech", heroSnippet: "Bereik bedrijven die zoeken naar cyberbeveiligingsoplossingen." }),
  createIndustry({ slug: "data-analyse-bureaus", name: "Data Analyse Bureau", namePlural: "Data Analyse Bureaus", icon: "BarChart", category: "tech", heroSnippet: "Word gevonden door bedrijven die zoeken naar data-analyse." }),
  createIndustry({ slug: "cloud-consultants", name: "Cloud Consultant", namePlural: "Cloud Consultants", icon: "Cloud", category: "tech", heroSnippet: "Bereik bedrijven die zoeken naar cloudmigratie en -advies." }),
  createIndustry({ slug: "erp-implementatie", name: "ERP Implementatiepartner", namePlural: "ERP Partners", icon: "Database", category: "tech", heroSnippet: "Word gevonden door bedrijven die zoeken naar ERP-systemen." }),
  createIndustry({ slug: "webshop-bouwers", name: "Webshop Bouwer", namePlural: "Webshop Bouwers", icon: "ShoppingCart", category: "tech", heroSnippet: "Bereik ondernemers die een webshop willen laten bouwen." }),
  createIndustry({ slug: "it-support", name: "IT Support Bedrijf", namePlural: "IT Support Bedrijven", icon: "Headphones", category: "tech", heroSnippet: "Word gevonden door bedrijven die zoeken naar IT-ondersteuning." }),
  createIndustry({ slug: "telecom-bedrijven", name: "Telecom Bedrijf", namePlural: "Telecom Bedrijven", icon: "Phone", category: "tech", heroSnippet: "Bereik bedrijven die zoeken naar telecom-oplossingen." }),

  // ============================================
  // OVERIG (15 new)
  // ============================================
  createIndustry({ slug: "uitvaartondernemingen", name: "Uitvaartondernemer", namePlural: "Uitvaartondernemingen", icon: "Flower2", category: "overig", heroSnippet: "Word gevonden door nabestaanden die zoeken naar een uitvaartondernemer." }),
  createIndustry({ slug: "wasserettes", name: "Wasserette", namePlural: "Wasserettes", icon: "Droplets", category: "overig", heroSnippet: "Bereik klanten die zoeken naar een wasserette in de buurt." }),
  createIndustry({ slug: "stomerijen", name: "Stomerij", namePlural: "Stomerijen", icon: "Shirt", category: "overig", heroSnippet: "Word gevonden door klanten die zoeken naar stomerij-diensten." }),
  createIndustry({ slug: "hondentrimmers", name: "Hondentrimmer", namePlural: "Hondentrimmers", icon: "Dog", category: "overig", heroSnippet: "Bereik hondenbezitters die zoeken naar een trimmer." }),
  createIndustry({ slug: "dierenpensions", name: "Dierenpension", namePlural: "Dierenpensions", icon: "Dog", category: "overig", heroSnippet: "Word gevonden door huisdierbezitters die zoeken naar opvang." }),
  createIndustry({ slug: "hondenuitlaatservices", name: "Hondenuitlaatservice", namePlural: "Hondenuitlaatservices", icon: "Dog", category: "overig", heroSnippet: "Bereik drukke hondenbezitters die zoeken naar uitlaatservice." }),
  createIndustry({ slug: "schoorsteenvegers", name: "Schoorsteenveger", namePlural: "Schoorsteenvegers", icon: "Flame", category: "overig", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar schoorsteenonderhoud." }),
  createIndustry({ slug: "ongediertebestrijders", name: "Ongediertebestrijder", namePlural: "Ongediertebestrijders", icon: "Bug", category: "overig", heroSnippet: "Bereik mensen die dringend zoeken naar ongediertebestrijding." }),
  createIndustry({ slug: "beveiligingsbedrijven", name: "Beveiligingsbedrijf", namePlural: "Beveiligingsbedrijven", icon: "Shield", category: "overig", heroSnippet: "Word gevonden door bedrijven die zoeken naar beveiliging." }),
  createIndustry({ slug: "alarminstallateurs", name: "Alarminstallateur", namePlural: "Alarminstallateurs", icon: "Bell", category: "overig", heroSnippet: "Bereik huiseigenaren die zoeken naar alarmsystemen." }),
  createIndustry({ slug: "klussenbedrijven", name: "Klussenbedrijf", namePlural: "Klussenbedrijven", icon: "Hammer", category: "overig", heroSnippet: "Word gevonden door klanten die zoeken naar een allround klusjesman." }),
  createIndustry({ slug: "dakgotenreinigers", name: "Dakgotenreiniger", namePlural: "Dakgotenreinigers", icon: "Droplets", category: "overig", heroSnippet: "Bereik huiseigenaren die zoeken naar dakgoot reiniging." }),
  createIndustry({ slug: "milieuadviesbureaus", name: "Milieuadviesbureau", namePlural: "Milieuadviesbureaus", icon: "Leaf", category: "overig", heroSnippet: "Word gevonden door bedrijven die zoeken naar milieu- en duurzaamheidsadvies." }),
  createIndustry({ slug: "veiligheidsadviseurs", name: "Veiligheidsadviseur", namePlural: "Veiligheidsadviseurs", icon: "Shield", category: "overig", heroSnippet: "Bereik bedrijven die zoeken naar veiligheidsadvies en ARBO-diensten." }),
  createIndustry({ slug: "expat-services", name: "Expat Service", namePlural: "Expat Services", icon: "Globe", category: "overig", heroSnippet: "Word gevonden door expats die zoeken naar ondersteuning in Nederland." }),

  // ============================================
  // EXTRA: NICHE INDUSTRIES (12 new)
  // ============================================
  createIndustry({ slug: "traiteurs", name: "Traiteur", namePlural: "Traiteurs", icon: "ChefHat", category: "horeca", heroSnippet: "Bereik klanten die zoeken naar een traiteur voor feesten en partijen." }),
  createIndustry({ slug: "bed-and-breakfasts", name: "Bed & Breakfast", namePlural: "Bed & Breakfasts", icon: "Bed", category: "horeca", heroSnippet: "Word gevonden door toeristen die zoeken naar een B&B." }),
  createIndustry({ slug: "vakantiehuizen", name: "Vakantiehuis Verhuurder", namePlural: "Vakantiehuis Verhuurders", icon: "Home", category: "horeca", heroSnippet: "Bereik vakantiegangers die zoeken naar een vakantiehuis." }),
  createIndustry({ slug: "personal-shoppers", name: "Personal Shopper", namePlural: "Personal Shoppers", icon: "ShoppingBag", category: "creatief", heroSnippet: "Word gevonden door klanten die zoeken naar persoonlijk stijladvies." }),
  createIndustry({ slug: "stylisten", name: "Stylist", namePlural: "Stylisten", icon: "Sparkles", category: "creatief", heroSnippet: "Bereik klanten die zoeken naar een professionele stylist." }),
  createIndustry({ slug: "life-coaches", name: "Life Coach", namePlural: "Life Coaches", icon: "Heart", category: "zakelijk", heroSnippet: "Word gevonden door mensen die zoeken naar persoonlijke groei." }),
  createIndustry({ slug: "relatietherapeuten", name: "Relatietherapeut", namePlural: "Relatietherapeuten", icon: "Heart", category: "zorg", heroSnippet: "Bereik stellen die zoeken naar relatietherapie." }),
  createIndustry({ slug: "acupuncturisten", name: "Acupuncturist", namePlural: "Acupuncturisten", icon: "Activity", category: "zorg", heroSnippet: "Word gevonden door mensen die zoeken naar acupunctuur." }),
  createIndustry({ slug: "homeopaten", name: "Homeopaat", namePlural: "Homeopaten", icon: "Leaf", category: "zorg", heroSnippet: "Bereik cliënten die zoeken naar homeopathische behandelingen." }),
  createIndustry({ slug: "kunstgalerijen", name: "Kunstgalerij", namePlural: "Kunstgalerijen", icon: "Frame", category: "creatief", heroSnippet: "Word gevonden door kunstliefhebbers en verzamelaars." }),
  createIndustry({ slug: "antiekwinkels", name: "Antiekwinkel", namePlural: "Antiekwinkels", icon: "Clock", category: "retail", heroSnippet: "Bereik verzamelaars die zoeken naar antiek en curiosa." }),
  createIndustry({ slug: "cadeauwinkels", name: "Cadeauwinkel", namePlural: "Cadeauwinkels", icon: "Gift", category: "retail", heroSnippet: "Word gevonden door mensen die zoeken naar unieke cadeaus." }),
];
