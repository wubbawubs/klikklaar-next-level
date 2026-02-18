import { createIndustry } from "./industry-factory";
import { IndustryData } from "./industries";

/**
 * Industries P2: ~110 new industries across all categories
 */
export const industriesP2: IndustryData[] = [
  // ============================================
  // ZORG (20 new)
  // ============================================
  createIndustry({ slug: "huisartsen", name: "Huisarts", namePlural: "Huisartsen", icon: "Stethoscope", category: "zorg", heroSnippet: "Word gevonden door patiënten die zoeken naar een huisarts in de buurt." }),
  createIndustry({ slug: "psychologen", name: "Psycholoog", namePlural: "Psychologen", icon: "Brain", category: "zorg", heroSnippet: "Bereik cliënten die zoeken naar psychologische hulp in jouw regio." }),
  createIndustry({ slug: "logopedisten", name: "Logopedist", namePlural: "Logopedisten", icon: "MessageCircle", category: "zorg", heroSnippet: "Word gevonden door ouders en volwassenen die zoeken naar logopedie." }),
  createIndustry({ slug: "ergotherapeuten", name: "Ergotherapeut", namePlural: "Ergotherapeuten", icon: "Hand", category: "zorg", heroSnippet: "Bereik patiënten die zoeken naar ergotherapie in de buurt." }),
  createIndustry({ slug: "osteopaten", name: "Osteopaat", namePlural: "Osteopaten", icon: "Activity", category: "zorg", heroSnippet: "Word gevonden door mensen die zoeken naar osteopathie." }),
  createIndustry({ slug: "chiropractoren", name: "Chiropractor", namePlural: "Chiropractoren", icon: "Activity", category: "zorg", heroSnippet: "Bereik patiënten die zoeken naar chiropractische zorg." }),
  createIndustry({ slug: "podologen", name: "Podoloog", namePlural: "Podologen", icon: "Footprints", category: "zorg", heroSnippet: "Word gevonden door patiënten met voetklachten in jouw regio." }),
  createIndustry({ slug: "dietisten", name: "Diëtist", namePlural: "Diëtisten", icon: "Apple", category: "zorg", heroSnippet: "Bereik cliënten die zoeken naar voedingsadvies en dieetbegeleiding." }),
  createIndustry({ slug: "verloskundigen", name: "Verloskundige", namePlural: "Verloskundigen", icon: "Baby", category: "zorg", heroSnippet: "Word gevonden door aanstaande ouders die zoeken naar verloskundige zorg." }),
  createIndustry({ slug: "huidtherapeuten", name: "Huidtherapeut", namePlural: "Huidtherapeuten", icon: "Sparkles", category: "zorg", heroSnippet: "Bereik cliënten die zoeken naar professionele huidverzorging." }),
  createIndustry({ slug: "orthodontisten", name: "Orthodontist", namePlural: "Orthodontisten", icon: "Smile", category: "zorg", heroSnippet: "Word gevonden door patiënten die zoeken naar beugels en orthodontie." }),
  createIndustry({ slug: "mondhygienisten", name: "Mondhygiënist", namePlural: "Mondhygiënisten", icon: "Stethoscope", category: "zorg", heroSnippet: "Bereik patiënten die zoeken naar mondhygiëne in de buurt." }),
  createIndustry({ slug: "audiciens", name: "Audicien", namePlural: "Audiciens", icon: "Ear", category: "zorg", heroSnippet: "Word gevonden door mensen die zoeken naar gehoorapparaten en gehoortest." }),
  createIndustry({ slug: "kaakchirurgen", name: "Kaakchirurg", namePlural: "Kaakchirurgen", icon: "Stethoscope", category: "zorg", heroSnippet: "Bereik patiënten die zoeken naar kaakchirurgische behandelingen." }),
  createIndustry({ slug: "dermatologen", name: "Dermatoloog", namePlural: "Dermatologen", icon: "Sparkles", category: "zorg", heroSnippet: "Word gevonden door patiënten die zoeken naar een huidarts." }),
  createIndustry({ slug: "thuiszorgorganisaties", name: "Thuiszorgorganisatie", namePlural: "Thuiszorgorganisaties", icon: "Home", category: "zorg", heroSnippet: "Bereik families die zoeken naar thuiszorg in de regio." }),
  createIndustry({ slug: "kraamzorg", name: "Kraamzorgverlener", namePlural: "Kraamzorg", icon: "Baby", category: "zorg", heroSnippet: "Word gevonden door aanstaande ouders die zoeken naar kraamzorg." }),
  createIndustry({ slug: "tandprothetici", name: "Tandprotheticus", namePlural: "Tandprothetici", icon: "Stethoscope", category: "zorg", heroSnippet: "Bereik patiënten die zoeken naar kunstgebitten en protheses." }),
  createIndustry({ slug: "oogartsen", name: "Oogarts", namePlural: "Oogartsen", icon: "Eye", category: "zorg", heroSnippet: "Word gevonden door patiënten die zoeken naar oogzorg." }),
  createIndustry({ slug: "kinderartsen", name: "Kinderarts", namePlural: "Kinderartsen", icon: "Baby", category: "zorg", heroSnippet: "Bereik ouders die zoeken naar een kinderarts in de buurt." }),

  // ============================================
  // JURIDISCH & FINANCIEEL (15 new)
  // ============================================
  createIndustry({ slug: "belastingadviseurs", name: "Belastingadviseur", namePlural: "Belastingadviseurs", icon: "Calculator", category: "juridisch", heroSnippet: "Word gevonden door ondernemers die zoeken naar belastingadvies." }),
  createIndustry({ slug: "financieel-adviseurs", name: "Financieel Adviseur", namePlural: "Financieel Adviseurs", icon: "PiggyBank", category: "juridisch", heroSnippet: "Bereik particulieren en bedrijven die zoeken naar financieel advies." }),
  createIndustry({ slug: "hypotheekadviseurs", name: "Hypotheekadviseur", namePlural: "Hypotheekadviseurs", icon: "Home", category: "juridisch", heroSnippet: "Word gevonden door huizenkopers die zoeken naar hypotheekadvies." }),
  createIndustry({ slug: "verzekeringskantoren", name: "Verzekeringskantoor", namePlural: "Verzekeringskantoren", icon: "Shield", category: "juridisch", heroSnippet: "Bereik klanten die zoeken naar verzekeringsadvies in de regio." }),
  createIndustry({ slug: "incassobureaus", name: "Incassobureau", namePlural: "Incassobureaus", icon: "Receipt", category: "juridisch", heroSnippet: "Word gevonden door bedrijven die zoeken naar incassodiensten." }),
  createIndustry({ slug: "administratiekantoren", name: "Administratiekantoor", namePlural: "Administratiekantoren", icon: "FileText", category: "juridisch", heroSnippet: "Bereik ondernemers die zoeken naar boekhoudkundige diensten." }),
  createIndustry({ slug: "mediators", name: "Mediator", namePlural: "Mediators", icon: "Scale", category: "juridisch", heroSnippet: "Word gevonden door partijen die zoeken naar bemiddeling en mediation." }),
  createIndustry({ slug: "gerechtsdeurwaarders", name: "Gerechtsdeurwaarder", namePlural: "Gerechtsdeurwaarders", icon: "Gavel", category: "juridisch", heroSnippet: "Bereik bedrijven en particulieren die een deurwaarder zoeken." }),
  createIndustry({ slug: "pensioenadviseurs", name: "Pensioenadviseur", namePlural: "Pensioenadviseurs", icon: "Clock", category: "juridisch", heroSnippet: "Word gevonden door mensen die zoeken naar pensioenadvies." }),
  createIndustry({ slug: "bedrijfsjuristen", name: "Bedrijfsjurist", namePlural: "Bedrijfsjuristen", icon: "Briefcase", category: "juridisch", heroSnippet: "Bereik bedrijven die zoeken naar juridische ondersteuning." }),
  createIndustry({ slug: "estate-planners", name: "Estate Planner", namePlural: "Estate Planners", icon: "FileText", category: "juridisch", heroSnippet: "Word gevonden door vermogende particulieren die zoeken naar vermogensplanning." }),
  createIndustry({ slug: "octrooigemachtigden", name: "Octrooigemachtigde", namePlural: "Octrooigemachtigden", icon: "Shield", category: "juridisch", heroSnippet: "Bereik uitvinders en bedrijven die zoeken naar octrooibescherming." }),
  createIndustry({ slug: "loonbureaus", name: "Loonbureau", namePlural: "Loonbureaus", icon: "Calculator", category: "juridisch", heroSnippet: "Word gevonden door werkgevers die zoeken naar salarisadministratie." }),
  createIndustry({ slug: "boekhouders", name: "Boekhouder", namePlural: "Boekhouders", icon: "Calculator", category: "juridisch", heroSnippet: "Bereik zzp'ers en mkb'ers die zoeken naar een betrouwbare boekhouder." }),
  createIndustry({ slug: "fiscalisten", name: "Fiscalist", namePlural: "Fiscalisten", icon: "FileText", category: "juridisch", heroSnippet: "Word gevonden door bedrijven die zoeken naar fiscaal advies." }),

  // ============================================
  // BEAUTY & WELLNESS (15 new)
  // ============================================
  createIndustry({ slug: "nagelstudios", name: "Nagelstudio", namePlural: "Nagelstudio's", icon: "Sparkles", category: "beauty", heroSnippet: "Word gevonden door klanten die zoeken naar nagelbehandelingen." }),
  createIndustry({ slug: "tattoo-shops", name: "Tattoo Shop", namePlural: "Tattoo Shops", icon: "PenTool", category: "beauty", heroSnippet: "Bereik klanten die zoeken naar een tattoo artist in de buurt." }),
  createIndustry({ slug: "barbershops", name: "Barbershop", namePlural: "Barbershops", icon: "Scissors", category: "beauty", heroSnippet: "Word gevonden door mannen die zoeken naar een barbershop." }),
  createIndustry({ slug: "visagisten", name: "Visagist", namePlural: "Visagisten", icon: "Palette", category: "beauty", heroSnippet: "Bereik bruiden en eventbezoekers die zoeken naar een visagist." }),
  createIndustry({ slug: "haarwerkers", name: "Haarwerker", namePlural: "Haarwerkers", icon: "Scissors", category: "beauty", heroSnippet: "Word gevonden door klanten die zoeken naar haarwerken en pruiken." }),
  createIndustry({ slug: "schoonheidsspecialisten", name: "Schoonheidsspecialist", namePlural: "Schoonheidsspecialisten", icon: "Sparkles", category: "beauty", heroSnippet: "Bereik klanten die zoeken naar professionele gezichtsbehandelingen." }),
  createIndustry({ slug: "pedicures", name: "Pedicure", namePlural: "Pedicures", icon: "Footprints", category: "beauty", heroSnippet: "Word gevonden door klanten die zoeken naar pedicure in de buurt." }),
  createIndustry({ slug: "waxsalons", name: "Waxsalon", namePlural: "Waxsalons", icon: "Sparkles", category: "beauty", heroSnippet: "Bereik klanten die zoeken naar waxbehandelingen." }),
  createIndustry({ slug: "laserstudios", name: "Laserstudio", namePlural: "Laserstudio's", icon: "Zap", category: "beauty", heroSnippet: "Word gevonden door klanten die zoeken naar laserhaarontharing." }),
  createIndustry({ slug: "massage-therapeuten", name: "Massagetherapeut", namePlural: "Massagetherapeuten", icon: "Hand", category: "beauty", heroSnippet: "Bereik klanten die zoeken naar massage en ontspanning." }),
  createIndustry({ slug: "wellness-centra", name: "Wellness Centrum", namePlural: "Wellness Centra", icon: "Droplets", category: "beauty", heroSnippet: "Word gevonden door mensen die zoeken naar wellness en spa." }),
  createIndustry({ slug: "permanente-makeup", name: "Permanent Makeup Artist", namePlural: "Permanent Makeup Studios", icon: "PenTool", category: "beauty", heroSnippet: "Bereik klanten die zoeken naar permanente makeup." }),
  createIndustry({ slug: "wimperextensions", name: "Wimperextension Stylist", namePlural: "Wimperextension Studios", icon: "Eye", category: "beauty", heroSnippet: "Word gevonden door klanten die zoeken naar wimperextensions." }),
  createIndustry({ slug: "bruidskappers", name: "Bruidskapper", namePlural: "Bruidskappers", icon: "Heart", category: "beauty", heroSnippet: "Bereik bruiden die zoeken naar een bruidskapper voor hun grote dag." }),
  createIndustry({ slug: "saunas", name: "Sauna", namePlural: "Sauna's", icon: "Flame", category: "beauty", heroSnippet: "Word gevonden door mensen die zoeken naar een sauna in de buurt." }),

  // ============================================
  // FITNESS & SPORT (12 new)
  // ============================================
  createIndustry({ slug: "sportscholen", name: "Sportschool", namePlural: "Sportscholen", icon: "Dumbbell", category: "fitness", heroSnippet: "Word gevonden door sporters die zoeken naar een sportschool in de buurt." }),
  createIndustry({ slug: "yoga-studios", name: "Yoga Studio", namePlural: "Yoga Studio's", icon: "Heart", category: "fitness", heroSnippet: "Bereik mensen die zoeken naar yogalessen en mindfulness." }),
  createIndustry({ slug: "pilates-studios", name: "Pilates Studio", namePlural: "Pilates Studio's", icon: "Activity", category: "fitness", heroSnippet: "Word gevonden door klanten die zoeken naar pilates in de buurt." }),
  createIndustry({ slug: "crossfit-boxen", name: "CrossFit Box", namePlural: "CrossFit Boxen", icon: "Dumbbell", category: "fitness", heroSnippet: "Bereik sporters die zoeken naar CrossFit training." }),
  createIndustry({ slug: "zwemscholen", name: "Zwemschool", namePlural: "Zwemscholen", icon: "Waves", category: "fitness", heroSnippet: "Word gevonden door ouders die zoeken naar zwemles." }),
  createIndustry({ slug: "kickboxscholen", name: "Kickboxschool", namePlural: "Kickboxscholen", icon: "Swords", category: "fitness", heroSnippet: "Bereik sporters die zoeken naar kickboksen en vechtsport." }),
  createIndustry({ slug: "tennisscholen", name: "Tennisschool", namePlural: "Tennisscholen", icon: "Activity", category: "fitness", heroSnippet: "Word gevonden door tennissers die zoeken naar tennislessen." }),
  createIndustry({ slug: "golfclubs", name: "Golfclub", namePlural: "Golfclubs", icon: "Flag", category: "fitness", heroSnippet: "Bereik golfers die zoeken naar een golfclub of golflessen." }),
  createIndustry({ slug: "bootcamp-trainers", name: "Bootcamp Trainer", namePlural: "Bootcamp Trainers", icon: "Dumbbell", category: "fitness", heroSnippet: "Word gevonden door sporters die zoeken naar bootcamp training." }),
  createIndustry({ slug: "dansstudios", name: "Dansstudio", namePlural: "Dansstudio's", icon: "Music", category: "fitness", heroSnippet: "Bereik dansliefhebbers die zoeken naar danslessen." }),
  createIndustry({ slug: "sport-coaches", name: "Sportcoach", namePlural: "Sportcoaches", icon: "Trophy", category: "fitness", heroSnippet: "Word gevonden door sporters die zoeken naar professionele coaching." }),
  createIndustry({ slug: "klimhallen", name: "Klimhal", namePlural: "Klimhallen", icon: "Mountain", category: "fitness", heroSnippet: "Bereik klimliefhebbers die zoeken naar een klimhal." }),

  // ============================================
  // HORECA (15 new)
  // ============================================
  createIndustry({ slug: "cafes", name: "Café", namePlural: "Cafés", icon: "Coffee", category: "horeca", heroSnippet: "Word gevonden door gasten die zoeken naar een gezellig café." }),
  createIndustry({ slug: "cateraars", name: "Cateraar", namePlural: "Cateraars", icon: "UtensilsCrossed", category: "horeca", heroSnippet: "Bereik bedrijven en particulieren die zoeken naar catering." }),
  createIndustry({ slug: "food-trucks", name: "Food Truck", namePlural: "Food Trucks", icon: "Truck", category: "horeca", heroSnippet: "Word gevonden door mensen die zoeken naar food trucks en streetfood." }),
  createIndustry({ slug: "lunchrooms", name: "Lunchroom", namePlural: "Lunchrooms", icon: "Sandwich", category: "horeca", heroSnippet: "Bereik gasten die zoeken naar een lunchroom in de buurt." }),
  createIndustry({ slug: "ijssalons", name: "IJssalon", namePlural: "IJssalons", icon: "IceCream", category: "horeca", heroSnippet: "Word gevonden door ijsliefhebbers die zoeken naar ambachtelijk ijs." }),
  createIndustry({ slug: "pizzerias", name: "Pizzeria", namePlural: "Pizzeria's", icon: "Pizza", category: "horeca", heroSnippet: "Bereik pizzaliefhebbers die zoeken naar een pizzeria in de buurt." }),
  createIndustry({ slug: "sushi-restaurants", name: "Sushi Restaurant", namePlural: "Sushi Restaurants", icon: "Fish", category: "horeca", heroSnippet: "Word gevonden door sushiliefhebbers in jouw regio." }),
  createIndustry({ slug: "wijnbars", name: "Wijnbar", namePlural: "Wijnbars", icon: "Wine", category: "horeca", heroSnippet: "Bereik wijnliefhebbers die zoeken naar een wijnbar." }),
  createIndustry({ slug: "brouwerijen", name: "Brouwerij", namePlural: "Brouwerijen", icon: "Beer", category: "horeca", heroSnippet: "Word gevonden door bierliefhebbers die zoeken naar lokale brouwerijen." }),
  createIndustry({ slug: "koffiezaken", name: "Koffiezaak", namePlural: "Koffiezaken", icon: "Coffee", category: "horeca", heroSnippet: "Bereik koffieliefhebbers die zoeken naar specialty coffee." }),
  createIndustry({ slug: "wokrestaurants", name: "Wok Restaurant", namePlural: "Wok Restaurants", icon: "UtensilsCrossed", category: "horeca", heroSnippet: "Word gevonden door gasten die zoeken naar een wok restaurant." }),
  createIndustry({ slug: "bezorgrestaurants", name: "Bezorgrestaurant", namePlural: "Bezorgrestaurants", icon: "Bike", category: "horeca", heroSnippet: "Bereik hongerige klanten die zoeken naar bezorging in de buurt." }),
  createIndustry({ slug: "trouwlocaties", name: "Trouwlocatie", namePlural: "Trouwlocaties", icon: "Heart", category: "horeca", heroSnippet: "Word gevonden door stellen die zoeken naar de perfecte trouwlocatie." }),
  createIndustry({ slug: "partycentra", name: "Partycentrum", namePlural: "Partycentra", icon: "PartyPopper", category: "horeca", heroSnippet: "Bereik feestgangers die zoeken naar een locatie voor hun feest." }),
  createIndustry({ slug: "hotels", name: "Hotel", namePlural: "Hotels", icon: "Building", category: "horeca", heroSnippet: "Word gevonden door reizigers die zoeken naar een hotel in jouw stad." }),

  // ============================================
  // RETAIL (15 new)
  // ============================================
  createIndustry({ slug: "kledingwinkels", name: "Kledingwinkel", namePlural: "Kledingwinkels", icon: "Shirt", category: "retail", heroSnippet: "Word gevonden door shoppers die zoeken naar kleding in de buurt." }),
  createIndustry({ slug: "schoenenwinkels", name: "Schoenenwinkel", namePlural: "Schoenenwinkels", icon: "Footprints", category: "retail", heroSnippet: "Bereik klanten die zoeken naar schoenen in jouw stad." }),
  createIndustry({ slug: "fietsenmakers", name: "Fietsenmaker", namePlural: "Fietsenmakers", icon: "Bike", category: "retail", heroSnippet: "Word gevonden door fietsers die zoeken naar reparatie en nieuwe fietsen." }),
  createIndustry({ slug: "boekhandels", name: "Boekhandel", namePlural: "Boekhandels", icon: "BookOpen", category: "retail", heroSnippet: "Bereik lezers die zoeken naar een boekhandel in de buurt." }),
  createIndustry({ slug: "speelgoedwinkels", name: "Speelgoedwinkel", namePlural: "Speelgoedwinkels", icon: "Gamepad2", category: "retail", heroSnippet: "Word gevonden door ouders die zoeken naar speelgoed." }),
  createIndustry({ slug: "drogisterijen", name: "Drogisterij", namePlural: "Drogisterijen", icon: "Pill", category: "retail", heroSnippet: "Bereik klanten die zoeken naar drogisterijproducten in de buurt." }),
  createIndustry({ slug: "elektronicawinkels", name: "Elektronicawinkel", namePlural: "Elektronicawinkels", icon: "Smartphone", category: "retail", heroSnippet: "Word gevonden door klanten die zoeken naar elektronica." }),
  createIndustry({ slug: "dierenwinkels", name: "Dierenwinkel", namePlural: "Dierenwinkels", icon: "Dog", category: "retail", heroSnippet: "Bereik dierenliefhebbers die zoeken naar dierenbenodigdheden." }),
  createIndustry({ slug: "tuincentra", name: "Tuincentrum", namePlural: "Tuincentra", icon: "Flower2", category: "retail", heroSnippet: "Word gevonden door tuinliefhebbers die zoeken naar planten en tuinartikelen." }),
  createIndustry({ slug: "meubelwinkels", name: "Meubelwinkel", namePlural: "Meubelwinkels", icon: "Sofa", category: "retail", heroSnippet: "Bereik klanten die zoeken naar meubels en interieur." }),
  createIndustry({ slug: "keukenspecialisten", name: "Keukenspecialist", namePlural: "Keukenspecialisten", icon: "ChefHat", category: "retail", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar een nieuwe keuken." }),
  createIndustry({ slug: "beddenwinkels", name: "Beddenwinkel", namePlural: "Beddenwinkels", icon: "Bed", category: "retail", heroSnippet: "Bereik klanten die zoeken naar bedden en matrassen." }),
  createIndustry({ slug: "slijterijen", name: "Slijterij", namePlural: "Slijterijen", icon: "Wine", category: "retail", heroSnippet: "Word gevonden door klanten die zoeken naar drank en wijn." }),
  createIndustry({ slug: "bouwmarkten", name: "Bouwmarkt", namePlural: "Bouwmarkten", icon: "Wrench", category: "retail", heroSnippet: "Bereik doe-het-zelvers die zoeken naar bouwmaterialen." }),
  createIndustry({ slug: "sportswinkels", name: "Sportwinkel", namePlural: "Sportwinkels", icon: "ShoppingBag", category: "retail", heroSnippet: "Word gevonden door sporters die zoeken naar sportartikelen." }),

  // ============================================
  // BOUW & INSTALLATIE (18 new)
  // ============================================
  createIndustry({ slug: "timmermannen", name: "Timmerman", namePlural: "Timmermannen", icon: "Hammer", category: "bouw", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar een timmerman." }),
  createIndustry({ slug: "stukadoors", name: "Stukadoor", namePlural: "Stukadoors", icon: "PaintBucket", category: "bouw", heroSnippet: "Bereik klanten die zoeken naar stukadoorswerk." }),
  createIndustry({ slug: "tegelzetters", name: "Tegelzetter", namePlural: "Tegelzetters", icon: "Grid3x3", category: "bouw", heroSnippet: "Word gevonden door klanten die zoeken naar een tegelzetter." }),
  createIndustry({ slug: "glazenwassers", name: "Glazenwasser", namePlural: "Glazenwassers", icon: "Droplets", category: "bouw", heroSnippet: "Bereik huishoudens en bedrijven die zoeken naar glazenwassers." }),
  createIndustry({ slug: "verhuisbedrijven", name: "Verhuisbedrijf", namePlural: "Verhuisbedrijven", icon: "Truck", category: "bouw", heroSnippet: "Word gevonden door mensen die zoeken naar een verhuisbedrijf." }),
  createIndustry({ slug: "schoonmaakbedrijven", name: "Schoonmaakbedrijf", namePlural: "Schoonmaakbedrijven", icon: "Sparkles", category: "bouw", heroSnippet: "Bereik bedrijven en particulieren die zoeken naar schoonmaakdiensten." }),
  createIndustry({ slug: "installateurs", name: "Installateur", namePlural: "Installateurs", icon: "Wrench", category: "bouw", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar een installateur." }),
  createIndustry({ slug: "isolatiebedrijven", name: "Isolatiebedrijf", namePlural: "Isolatiebedrijven", icon: "Thermometer", category: "bouw", heroSnippet: "Bereik huiseigenaren die zoeken naar woningisolatie." }),
  createIndustry({ slug: "kozijnenbedrijven", name: "Kozijnenbedrijf", namePlural: "Kozijnenbedrijven", icon: "Square", category: "bouw", heroSnippet: "Word gevonden door klanten die zoeken naar nieuwe kozijnen." }),
  createIndustry({ slug: "betonbedrijven", name: "Betonbedrijf", namePlural: "Betonbedrijven", icon: "Building", category: "bouw", heroSnippet: "Bereik bouwers die zoeken naar betonwerk en -leveranciers." }),
  createIndustry({ slug: "keukenmonteurs", name: "Keukenmonteur", namePlural: "Keukenmonteurs", icon: "Wrench", category: "bouw", heroSnippet: "Word gevonden door klanten die zoeken naar keukenmontage." }),
  createIndustry({ slug: "badkamer-specialisten", name: "Badkamerspecialist", namePlural: "Badkamerspecialisten", icon: "Bath", category: "bouw", heroSnippet: "Bereik huiseigenaren die zoeken naar badkamerrenovatie." }),
  createIndustry({ slug: "zonwering-bedrijven", name: "Zonweringbedrijf", namePlural: "Zonweringbedrijven", icon: "Sun", category: "bouw", heroSnippet: "Word gevonden door klanten die zoeken naar zonwering en screens." }),
  createIndustry({ slug: "slotenmakers", name: "Slotenmaker", namePlural: "Slotenmakers", icon: "Key", category: "bouw", heroSnippet: "Bereik mensen die dringend zoeken naar een slotenmaker." }),
  createIndustry({ slug: "cv-monteurs", name: "CV Monteur", namePlural: "CV Monteurs", icon: "Flame", category: "bouw", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar CV-ketel onderhoud." }),
  createIndustry({ slug: "airco-installateurs", name: "Airco Installateur", namePlural: "Airco Installateurs", icon: "Wind", category: "bouw", heroSnippet: "Bereik klanten die zoeken naar airconditioning installatie." }),
  createIndustry({ slug: "zonnepanelen-installateurs", name: "Zonnepanelen Installateur", namePlural: "Zonnepanelen Installateurs", icon: "Sun", category: "bouw", heroSnippet: "Word gevonden door huiseigenaren die zoeken naar zonnepanelen." }),
  createIndustry({ slug: "tuinontwerpers", name: "Tuinontwerper", namePlural: "Tuinontwerpers", icon: "TreeDeciduous", category: "bouw", heroSnippet: "Bereik klanten die zoeken naar professioneel tuinontwerp." }),
];
