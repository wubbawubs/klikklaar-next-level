export interface LocationData {
  slug: string;
  name: string;
  province: string;
  tier: 1 | 2 | 3;
  population: string;
  description: string;
  localFacts: string[];
  nearbyAreas: string[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: LocationData[] = [
  // Tier 1: Grote steden (15)
  {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "Noord-Holland",
    tier: 1,
    population: "872.000+",
    description: "Als ondernemer in Amsterdam weet je hoe competitief de markt is. Met onze automatische SEO val je op tussen de duizenden bedrijven en word je gevonden door klanten in de hoofdstad.",
    localFacts: [
      "Meer dan 100.000 bedrijven gevestigd in Amsterdam",
      "Hoogste online zoekvolume van Nederland",
      "Veel internationale klanten zoeken lokale diensten"
    ],
    nearbyAreas: ["Amstelveen", "Diemen", "Zaandam", "Haarlem", "Hoofddorp"],
    metaTitle: "SEO Bureau Amsterdam | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Amsterdam. Word gevonden door klanten in de hoofdstad. Vanaf €99/mnd."
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "Zuid-Holland",
    tier: 1,
    population: "655.000+",
    description: "Rotterdam is de stad van doeners. Als ondernemer in de Maasstad wil je niet achterblijven online. Met automatische SEO bereik je meer klanten in Rotterdam en omgeving.",
    localFacts: [
      "Tweede stad van Nederland qua inwoners",
      "Sterke groei in ondernemerschap",
      "Veel zoekverkeer voor lokale diensten"
    ],
    nearbyAreas: ["Schiedam", "Capelle aan den IJssel", "Barendrecht", "Vlaardingen", "Spijkenisse"],
    metaTitle: "SEO Bureau Rotterdam | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Rotterdam. Meer klanten uit de Maasstad. Vanaf €99/mnd."
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    province: "Zuid-Holland",
    tier: 1,
    population: "548.000+",
    description: "In Den Haag draait het om zowel zakelijke als particuliere klanten. Met automatische SEO word je gevonden door zowel de bewoners als de vele bedrijven in de residentie.",
    localFacts: [
      "Regeringszetel met veel zakelijke dienstverlening",
      "Internationale organisaties brengen diverse zoekvolumes",
      "Sterke vraag naar lokale diensten"
    ],
    nearbyAreas: ["Rijswijk", "Voorburg", "Leidschendam", "Wassenaar", "Zoetermeer"],
    metaTitle: "SEO Bureau Den Haag | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Den Haag. Word gevonden in de residentie. Vanaf €99/mnd."
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    province: "Utrecht",
    tier: 1,
    population: "361.000+",
    description: "Utrecht groeit harder dan ooit. Als ondernemer in de Domstad wil je meegroeien. Met automatische SEO bereik je de vele nieuwe en bestaande inwoners die zoeken naar lokale diensten.",
    localFacts: [
      "Snelst groeiende grote stad van Nederland",
      "Centraal gelegen met hoog zoekvolume",
      "Jonge, digitaal actieve bevolking"
    ],
    nearbyAreas: ["Nieuwegein", "IJsselstein", "Zeist", "De Bilt", "Houten"],
    metaTitle: "SEO Bureau Utrecht | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Utrecht. Groei mee met de Domstad. Vanaf €99/mnd."
  },
  {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "Noord-Brabant",
    tier: 1,
    population: "238.000+",
    description: "Eindhoven is de technologiehoofdstad van Nederland. Als ondernemer in de Brainport regio wil je online net zo innovatief zijn. Met automatische SEO sta je vooraan.",
    localFacts: [
      "Tech-savvy bevolking met hoog internetgebruik",
      "Veel internationale expats zoeken lokale diensten",
      "Sterke economische groei"
    ],
    nearbyAreas: ["Veldhoven", "Best", "Nuenen", "Geldrop", "Helmond"],
    metaTitle: "SEO Bureau Eindhoven | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Eindhoven. Innovatief online in Brainport. Vanaf €99/mnd."
  },
  {
    slug: "tilburg",
    name: "Tilburg",
    province: "Noord-Brabant",
    tier: 1,
    population: "222.000+",
    description: "Tilburg is een stad met een sterke ondernemersmentaliteit. Met automatische SEO val je op in de zesde stad van Nederland en bereik je klanten in heel Midden-Brabant.",
    localFacts: [
      "Grote studentenpopulatie zorgt voor veel online zoekverkeer",
      "Sterke lokale economie",
      "Groeiende zakelijke dienstverlening"
    ],
    nearbyAreas: ["Breda", "Waalwijk", "Goirle", "Oisterwijk", "Kaatsheuvel"],
    metaTitle: "SEO Bureau Tilburg | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Tilburg. Bereik meer klanten in Midden-Brabant. Vanaf €99/mnd."
  },
  {
    slug: "groningen",
    name: "Groningen",
    province: "Groningen",
    tier: 1,
    population: "233.000+",
    description: "Groningen is de hoofdstad van het noorden. Als ondernemer in deze levendige studentenstad bereik je met automatische SEO zowel de jonge als gevestigde bevolking.",
    localFacts: [
      "Grootste stad van Noord-Nederland",
      "Zeer jonge bevolking door universiteit en hogescholen",
      "Centrale functie voor hele regio"
    ],
    nearbyAreas: ["Haren", "Hoogezand", "Leek", "Assen", "Delfzijl"],
    metaTitle: "SEO Bureau Groningen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Groningen. Bereik het hele noorden. Vanaf €99/mnd."
  },
  {
    slug: "almere",
    name: "Almere",
    province: "Flevoland",
    tier: 1,
    population: "218.000+",
    description: "Almere is de jongste grote stad van Nederland en groeit nog steeds. Als ondernemer in Almere bereik je met automatische SEO de vele nieuwe bewoners die zoeken naar lokale diensten.",
    localFacts: [
      "Snelst groeiende stad van Nederland",
      "Veel jonge gezinnen die lokaal zoeken",
      "Goede bereikbaarheid naar Amsterdam"
    ],
    nearbyAreas: ["Lelystad", "Huizen", "Blaricum", "Bussum", "Naarden"],
    metaTitle: "SEO Bureau Almere | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Almere. Groei mee met de stad. Vanaf €99/mnd."
  },
  {
    slug: "breda",
    name: "Breda",
    province: "Noord-Brabant",
    tier: 1,
    population: "185.000+",
    description: "Breda combineert Bourgondische gezelligheid met ondernemerschap. Met automatische SEO word je gevonden door klanten in deze bruisende Brabantse stad.",
    localFacts: [
      "Sterke retail en horeca sector",
      "Veel evenementen trekken bezoekers",
      "Groeiende zakelijke dienstverlening"
    ],
    nearbyAreas: ["Oosterhout", "Etten-Leur", "Roosendaal", "Bergen op Zoom", "Tilburg"],
    metaTitle: "SEO Bureau Breda | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Breda. Bourgondisch ondernemen, digitaal groeien. Vanaf €99/mnd."
  },
  {
    slug: "nijmegen",
    name: "Nijmegen",
    province: "Gelderland",
    tier: 1,
    population: "177.000+",
    description: "Nijmegen is de oudste stad van Nederland met een jonge, dynamische bevolking. Met automatische SEO bereik je studenten, gezinnen en bedrijven in de regio.",
    localFacts: [
      "Oudste stad van Nederland met moderne uitstraling",
      "Grote universiteit zorgt voor jong publiek",
      "Sterke gezondheidszorg sector"
    ],
    nearbyAreas: ["Arnhem", "Wijchen", "Berg en Dal", "Bemmel", "Malden"],
    metaTitle: "SEO Bureau Nijmegen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Nijmegen. Oudste stad, nieuwste marketing. Vanaf €99/mnd."
  },
  {
    slug: "arnhem",
    name: "Arnhem",
    province: "Gelderland",
    tier: 1,
    population: "162.000+",
    description: "Arnhem is een groene stad met een sterke retail sector. Met automatische SEO word je gevonden door klanten in de Veluwe regio en daarbuiten.",
    localFacts: [
      "Modehoofdstad van Nederland",
      "Veel natuur trekt bezoekers",
      "Sterke zakelijke dienstverlening"
    ],
    nearbyAreas: ["Velp", "Oosterbeek", "Ede", "Wageningen", "Nijmegen"],
    metaTitle: "SEO Bureau Arnhem | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Arnhem. Bereik de Veluwe regio. Vanaf €99/mnd."
  },
  {
    slug: "haarlem",
    name: "Haarlem",
    province: "Noord-Holland",
    tier: 1,
    population: "162.000+",
    description: "Haarlem is een stad met karakter en koopkracht. Met automatische SEO bereik je de welgestelde bewoners en bezoekers van deze monumentale stad.",
    localFacts: [
      "Hoge koopkracht per inwoner",
      "Veel toeristen door nabijheid Amsterdam",
      "Sterke lokale winkelcultuur"
    ],
    nearbyAreas: ["Heemstede", "Bloemendaal", "Zandvoort", "Hoofddorp", "Amsterdam"],
    metaTitle: "SEO Bureau Haarlem | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Haarlem. Bereik een koopkrachtig publiek. Vanaf €99/mnd."
  },
  {
    slug: "enschede",
    name: "Enschede",
    province: "Overijssel",
    tier: 1,
    population: "160.000+",
    description: "Enschede is de grootste stad van Twente en een centrum voor innovatie. Met automatische SEO bereik je klanten in heel Oost-Nederland.",
    localFacts: [
      "Technische universiteit zorgt voor innovatie",
      "Grensligging biedt kansen",
      "Sterke maakindustrie"
    ],
    nearbyAreas: ["Hengelo", "Oldenzaal", "Losser", "Haaksbergen", "Almelo"],
    metaTitle: "SEO Bureau Enschede | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Enschede. Bereik heel Twente. Vanaf €99/mnd."
  },
  {
    slug: "apeldoorn",
    name: "Apeldoorn",
    province: "Gelderland",
    tier: 1,
    population: "165.000+",
    description: "Apeldoorn is een groene stad aan de Veluwe met veel zakelijke bedrijvigheid. Met automatische SEO bereik je zowel inwoners als de vele toeristen.",
    localFacts: [
      "Veel verzekeraars en financiële dienstverleners",
      "Paleis Het Loo trekt toeristen",
      "Uitgestrekt grondgebied met veel wijken"
    ],
    nearbyAreas: ["Deventer", "Zutphen", "Epe", "Vaassen", "Beekbergen"],
    metaTitle: "SEO Bureau Apeldoorn | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Apeldoorn. Bereik de Veluwe. Vanaf €99/mnd."
  },
  {
    slug: "amersfoort",
    name: "Amersfoort",
    province: "Utrecht",
    tier: 1,
    population: "158.000+",
    description: "Amersfoort is centraal gelegen en groeit snel. Met automatische SEO bereik je de vele nieuwe bewoners en gevestigde ondernemers in deze historische stad.",
    localFacts: [
      "Centrale ligging met goede bereikbaarheid",
      "Snelgroeiende stad met jonge gezinnen",
      "Historische binnenstad trekt bezoekers"
    ],
    nearbyAreas: ["Soest", "Baarn", "Leusden", "Hoevelaken", "Nijkerk"],
    metaTitle: "SEO Bureau Amersfoort | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Amersfoort. Centraal gelegen, digitaal gevonden. Vanaf €99/mnd."
  },

  // Tier 2: Middelgrote steden (30+)
  {
    slug: "zaandam",
    name: "Zaandam",
    province: "Noord-Holland",
    tier: 2,
    population: "77.000+",
    description: "Zaandam en de Zaanstreek vormen een dynamische regio nabij Amsterdam. Met automatische SEO bereik je klanten in heel de Zaanstreek.",
    localFacts: ["Nabij Amsterdam met eigen karakter", "Veel lokale ondernemers", "Groeiende woonstad"],
    nearbyAreas: ["Zaandijk", "Wormerveer", "Krommenie", "Amsterdam", "Purmerend"],
    metaTitle: "SEO Bureau Zaandam | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Zaandam en de Zaanstreek. Vanaf €99/mnd."
  },
  {
    slug: "den-bosch",
    name: "'s-Hertogenbosch",
    province: "Noord-Brabant",
    tier: 2,
    population: "156.000+",
    description: "Den Bosch is de hoofdstad van Brabant met een rijke historie. Met automatische SEO bereik je klanten in deze Bourgondische stad en omgeving.",
    localFacts: ["Provinciehoofdstad met veel voorzieningen", "Sterke horeca sector", "Veel cultuurtoerisme"],
    nearbyAreas: ["Vught", "Rosmalen", "Oss", "Veghel", "Uden"],
    metaTitle: "SEO Bureau Den Bosch | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in 's-Hertogenbosch. Vanaf €99/mnd."
  },
  {
    slug: "zwolle",
    name: "Zwolle",
    province: "Overijssel",
    tier: 2,
    population: "131.000+",
    description: "Zwolle is de hoofdstad van Overijssel en een centrum voor de hele regio. Met automatische SEO bereik je klanten in heel IJssel-Vechtstreek.",
    localFacts: ["Provinciehoofdstad", "Sterke retail sector", "Groeiende stad"],
    nearbyAreas: ["Kampen", "Deventer", "Meppel", "Hardenberg", "Raalte"],
    metaTitle: "SEO Bureau Zwolle | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Zwolle. Bereik heel Overijssel. Vanaf €99/mnd."
  },
  {
    slug: "zoetermeer",
    name: "Zoetermeer",
    province: "Zuid-Holland",
    tier: 2,
    population: "125.000+",
    description: "Zoetermeer is een moderne stad in de Randstad. Met automatische SEO bereik je de vele bewoners en bedrijven in deze dynamische stad.",
    localFacts: ["Moderne infrastructuur", "Veel zakelijke dienstverlening", "Goede bereikbaarheid"],
    nearbyAreas: ["Den Haag", "Delft", "Leiden", "Gouda", "Waddinxveen"],
    metaTitle: "SEO Bureau Zoetermeer | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Zoetermeer. Vanaf €99/mnd."
  },
  {
    slug: "leiden",
    name: "Leiden",
    province: "Zuid-Holland",
    tier: 2,
    population: "124.000+",
    description: "Leiden is de universiteitsstad bij uitstek. Met automatische SEO bereik je studenten, onderzoekers en de vele bewoners van deze historische stad.",
    localFacts: ["Oudste universiteit van Nederland", "Rijk cultureel erfgoed", "Veel toerisme"],
    nearbyAreas: ["Oegstgeest", "Leiderdorp", "Katwijk", "Voorschoten", "Den Haag"],
    metaTitle: "SEO Bureau Leiden | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Leiden. Vanaf €99/mnd."
  },
  {
    slug: "maastricht",
    name: "Maastricht",
    province: "Limburg",
    tier: 2,
    population: "121.000+",
    description: "Maastricht is de Bourgondische hoofdstad van het zuiden. Met automatische SEO bereik je zowel lokale klanten als de vele toeristen uit binnen- en buitenland.",
    localFacts: ["Internationale sfeer door grensligging", "Veel toerisme", "Sterke horeca sector"],
    nearbyAreas: ["Heerlen", "Sittard", "Geleen", "Valkenburg", "Meerssen"],
    metaTitle: "SEO Bureau Maastricht | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Maastricht. Bereik het zuiden. Vanaf €99/mnd."
  },
  {
    slug: "dordrecht",
    name: "Dordrecht",
    province: "Zuid-Holland",
    tier: 2,
    population: "119.000+",
    description: "Dordrecht is de oudste stad van Holland met een rijke handelsgeschiedenis. Met automatische SEO bereik je klanten in de Drechtsteden regio.",
    localFacts: ["Oudste stad van Holland", "Centrum van de Drechtsteden", "Veel water en natuur"],
    nearbyAreas: ["Papendrecht", "Sliedrecht", "Zwijndrecht", "Alblasserdam", "Gorinchem"],
    metaTitle: "SEO Bureau Dordrecht | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Dordrecht. Bereik de Drechtsteden. Vanaf €99/mnd."
  },
  {
    slug: "ede",
    name: "Ede",
    province: "Gelderland",
    tier: 2,
    population: "119.000+",
    description: "Ede is de grootste gemeente op de Veluwe. Met automatische SEO bereik je klanten in deze groene gemeente en omstreken.",
    localFacts: ["Grootste Veluwe gemeente", "Veel natuur en recreatie", "Sterke voedingsindustrie"],
    nearbyAreas: ["Wageningen", "Veenendaal", "Barneveld", "Lunteren", "Bennekom"],
    metaTitle: "SEO Bureau Ede | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Ede. Bereik de Veluwe. Vanaf €99/mnd."
  },
  {
    slug: "alphen-aan-den-rijn",
    name: "Alphen aan den Rijn",
    province: "Zuid-Holland",
    tier: 2,
    population: "113.000+",
    description: "Alphen aan den Rijn ligt centraal in het Groene Hart. Met automatische SEO bereik je klanten in deze groeiende gemeente.",
    localFacts: ["Centraal in het Groene Hart", "Goede bereikbaarheid", "Veel recreatie"],
    nearbyAreas: ["Gouda", "Leiden", "Woerden", "Boskoop", "Bodegraven"],
    metaTitle: "SEO Bureau Alphen aan den Rijn | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Alphen aan den Rijn. Vanaf €99/mnd."
  },
  {
    slug: "alkmaar",
    name: "Alkmaar",
    province: "Noord-Holland",
    tier: 2,
    population: "110.000+",
    description: "Alkmaar is bekend om de kaasmarkt maar heeft veel meer te bieden. Met automatische SEO bereik je klanten in heel Noord-Holland boven het IJ.",
    localFacts: ["Beroemde kaasmarkt trekt toeristen", "Regionaal centrum", "Sterke retail sector"],
    nearbyAreas: ["Heerhugowaard", "Bergen", "Egmond", "Heiloo", "Castricum"],
    metaTitle: "SEO Bureau Alkmaar | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Alkmaar. Bereik Noord-Holland Noord. Vanaf €99/mnd."
  },
  {
    slug: "hilversum",
    name: "Hilversum",
    province: "Noord-Holland",
    tier: 2,
    population: "92.000+",
    description: "Hilversum is de mediastad van Nederland. Met automatische SEO bereik je de creatieve professionals en bewoners van het Gooi.",
    localFacts: ["Mediastad van Nederland", "Hoge koopkracht", "Veel creatieve industrie"],
    nearbyAreas: ["Bussum", "Laren", "Blaricum", "Huizen", "Naarden"],
    metaTitle: "SEO Bureau Hilversum | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Hilversum en het Gooi. Vanaf €99/mnd."
  },
  {
    slug: "deventer",
    name: "Deventer",
    province: "Overijssel",
    tier: 2,
    population: "101.000+",
    description: "Deventer is een Hanzestad met een rijke historie. Met automatische SEO bereik je klanten in deze karaktervolle stad aan de IJssel.",
    localFacts: ["Historische Hanzestad", "Bekend om Dickens Festijn", "Sterke maakindustrie"],
    nearbyAreas: ["Zutphen", "Apeldoorn", "Zwolle", "Lochem", "Raalte"],
    metaTitle: "SEO Bureau Deventer | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Deventer. Vanaf €99/mnd."
  },
  {
    slug: "amstelveen",
    name: "Amstelveen",
    province: "Noord-Holland",
    tier: 2,
    population: "91.000+",
    description: "Amstelveen grenst aan Amsterdam en heeft een internationale sfeer. Met automatische SEO bereik je de welgestelde bewoners en expats.",
    localFacts: ["Veel internationale bewoners", "Hoge koopkracht", "Nabij Schiphol"],
    nearbyAreas: ["Amsterdam", "Aalsmeer", "Uithoorn", "Ouderkerk aan de Amstel", "Hoofddorp"],
    metaTitle: "SEO Bureau Amstelveen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Amstelveen. Vanaf €99/mnd."
  },
  {
    slug: "delft",
    name: "Delft",
    province: "Zuid-Holland",
    tier: 2,
    population: "104.000+",
    description: "Delft is een historische stad met een jonge, technische bevolking. Met automatische SEO bereik je studenten, onderzoekers en toeristen.",
    localFacts: ["Technische universiteit", "Delfts Blauw toerisme", "Veel innovatie"],
    nearbyAreas: ["Den Haag", "Rotterdam", "Zoetermeer", "Schiedam", "Rijswijk"],
    metaTitle: "SEO Bureau Delft | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Delft. Vanaf €99/mnd."
  },
  {
    slug: "venlo",
    name: "Venlo",
    province: "Limburg",
    tier: 2,
    population: "102.000+",
    description: "Venlo is een logistiek knooppunt aan de Duitse grens. Met automatische SEO bereik je klanten in Noord-Limburg en over de grens.",
    localFacts: ["Logistiek centrum", "Grensligging biedt kansen", "Sterke retail"],
    nearbyAreas: ["Roermond", "Tegelen", "Blerick", "Horst", "Weert"],
    metaTitle: "SEO Bureau Venlo | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Venlo. Bereik Noord-Limburg. Vanaf €99/mnd."
  },
  {
    slug: "leeuwarden",
    name: "Leeuwarden",
    province: "Friesland",
    tier: 2,
    population: "124.000+",
    description: "Leeuwarden is de hoofdstad van Friesland en culturele hotspot. Met automatische SEO bereik je klanten in heel Friesland.",
    localFacts: ["Culturele hoofdstad van Europa 2018", "Provinciehoofdstad", "Sterke regionale functie"],
    nearbyAreas: ["Drachten", "Heerenveen", "Sneek", "Harlingen", "Franeker"],
    metaTitle: "SEO Bureau Leeuwarden | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Leeuwarden. Bereik heel Friesland. Vanaf €99/mnd."
  },
  {
    slug: "heerlen",
    name: "Heerlen",
    province: "Limburg",
    tier: 2,
    population: "87.000+",
    description: "Heerlen is de grootste stad van Zuid-Limburg na Maastricht. Met automatische SEO bereik je klanten in de Parkstad regio.",
    localFacts: ["Centrum van Parkstad", "Veel grensverkeer", "Sterke retail"],
    nearbyAreas: ["Kerkrade", "Landgraaf", "Brunssum", "Maastricht", "Sittard"],
    metaTitle: "SEO Bureau Heerlen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Heerlen en Parkstad. Vanaf €99/mnd."
  },
  {
    slug: "oss",
    name: "Oss",
    province: "Noord-Brabant",
    tier: 2,
    population: "93.000+",
    description: "Oss is een industriestad met een sterke lokale economie. Met automatische SEO bereik je klanten in de regio Land van Maas en Waal.",
    localFacts: ["Farmaceutische industrie", "Sterke lokale economie", "Goede bereikbaarheid"],
    nearbyAreas: ["Den Bosch", "Uden", "Veghel", "Grave", "Cuijk"],
    metaTitle: "SEO Bureau Oss | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Oss. Vanaf €99/mnd."
  },
  {
    slug: "roosendaal",
    name: "Roosendaal",
    province: "Noord-Brabant",
    tier: 2,
    population: "77.000+",
    description: "Roosendaal is een spoorwegknooppunt in West-Brabant. Met automatische SEO bereik je klanten in de regio en over de Belgische grens.",
    localFacts: ["Belangrijk spoorwegknooppunt", "Grensligging", "Sterke retail"],
    nearbyAreas: ["Breda", "Bergen op Zoom", "Etten-Leur", "Moerdijk", "Rucphen"],
    metaTitle: "SEO Bureau Roosendaal | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Roosendaal. Vanaf €99/mnd."
  },
  {
    slug: "gouda",
    name: "Gouda",
    province: "Zuid-Holland",
    tier: 2,
    population: "74.000+",
    description: "Gouda is wereldberoemd om kaas, kaarsen en stroopwafels. Met automatische SEO bereik je toeristen en de lokale bevolking.",
    localFacts: ["Beroemd om kaas en stroopwafels", "Veel toerisme", "Historische binnenstad"],
    nearbyAreas: ["Alphen aan den Rijn", "Waddinxveen", "Woerden", "Bodegraven", "Rotterdam"],
    metaTitle: "SEO Bureau Gouda | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Gouda. Vanaf €99/mnd."
  },
  {
    slug: "purmerend",
    name: "Purmerend",
    province: "Noord-Holland",
    tier: 2,
    population: "81.000+",
    description: "Purmerend is het centrum van de Zaanstreek-Waterland regio. Met automatische SEO bereik je klanten in deze groeiende gemeente.",
    localFacts: ["Snelgroeiende gemeente", "Regionale functie", "Goede bereikbaarheid naar Amsterdam"],
    nearbyAreas: ["Zaandam", "Volendam", "Edam", "Monnickendam", "Amsterdam"],
    metaTitle: "SEO Bureau Purmerend | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Purmerend. Vanaf €99/mnd."
  },
  {
    slug: "hoorn",
    name: "Hoorn",
    province: "Noord-Holland",
    tier: 2,
    population: "73.000+",
    description: "Hoorn is een historische havenstad in West-Friesland. Met automatische SEO bereik je klanten in de hele West-Friese regio.",
    localFacts: ["Historische VOC-stad", "Regionale functie", "Waterrecreatie"],
    nearbyAreas: ["Enkhuizen", "Medemblik", "Koggenland", "Opmeer", "Alkmaar"],
    metaTitle: "SEO Bureau Hoorn | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Hoorn. Bereik West-Friesland. Vanaf €99/mnd."
  },
  {
    slug: "lelystad",
    name: "Lelystad",
    province: "Flevoland",
    tier: 2,
    population: "82.000+",
    description: "Lelystad is de hoofdstad van Flevoland met veel ruimte voor ondernemen. Met automatische SEO bereik je klanten in heel Flevoland.",
    localFacts: ["Provinciehoofdstad", "Veel ruimte en natuur", "Outlet shopping trekt bezoekers"],
    nearbyAreas: ["Almere", "Dronten", "Zeewolde", "Harderwijk", "Emmeloord"],
    metaTitle: "SEO Bureau Lelystad | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Lelystad. Bereik heel Flevoland. Vanaf €99/mnd."
  },
  {
    slug: "sittard",
    name: "Sittard-Geleen",
    province: "Limburg",
    tier: 2,
    population: "92.000+",
    description: "Sittard-Geleen is een fusiegemeente in Midden-Limburg. Met automatische SEO bereik je klanten in de Westelijke Mijnstreek.",
    localFacts: ["Chemische industrie", "Sterke lokale economie", "Goede bereikbaarheid"],
    nearbyAreas: ["Maastricht", "Heerlen", "Roermond", "Beek", "Stein"],
    metaTitle: "SEO Bureau Sittard-Geleen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Sittard-Geleen. Vanaf €99/mnd."
  },
  {
    slug: "veenendaal",
    name: "Veenendaal",
    province: "Utrecht",
    tier: 2,
    population: "68.000+",
    description: "Veenendaal is een ondernmersgemeente op de grens van Utrecht en Gelderland. Met automatische SEO bereik je klanten in de Gelderse Vallei.",
    localFacts: ["Sterke ondernemersmentaliteit", "Veel detailhandel", "Goede bereikbaarheid"],
    nearbyAreas: ["Ede", "Wageningen", "Rhenen", "Barneveld", "Amersfoort"],
    metaTitle: "SEO Bureau Veenendaal | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Veenendaal. Vanaf €99/mnd."
  },
  {
    slug: "helmond",
    name: "Helmond",
    province: "Noord-Brabant",
    tier: 2,
    population: "93.000+",
    description: "Helmond is een innovatieve stad in de Brainport regio. Met automatische SEO bereik je klanten in Oost-Brabant.",
    localFacts: ["Deel van Brainport regio", "Automotive hub", "Innovatieve maakindustrie"],
    nearbyAreas: ["Eindhoven", "Deurne", "Someren", "Asten", "Gemert-Bakel"],
    metaTitle: "SEO Bureau Helmond | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Helmond. Vanaf €99/mnd."
  },
  {
    slug: "vlaardingen",
    name: "Vlaardingen",
    province: "Zuid-Holland",
    tier: 2,
    population: "73.000+",
    description: "Vlaardingen is een havenstad in de Rijnmond regio. Met automatische SEO bereik je klanten in de regio Rotterdam-Rijnmond.",
    localFacts: ["Havenstad met maritieme historie", "Deel van Rijnmond", "Goede bereikbaarheid"],
    nearbyAreas: ["Rotterdam", "Schiedam", "Maassluis", "Delft", "Den Haag"],
    metaTitle: "SEO Bureau Vlaardingen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Vlaardingen. Vanaf €99/mnd."
  },

  // Tier 3: Kleinere steden/dorpen (selectie - kan uitgebreid worden)
  {
    slug: "zeist",
    name: "Zeist",
    province: "Utrecht",
    tier: 3,
    population: "65.000+",
    description: "Zeist is een groene gemeente met veel voorzieningen. Met automatische SEO bereik je de welgestelde bewoners van deze gemeente.",
    localFacts: ["Veel groen en landgoederen", "Hoge koopkracht", "Goede bereikbaarheid"],
    nearbyAreas: ["Utrecht", "Driebergen", "Bunnik", "De Bilt", "Amersfoort"],
    metaTitle: "SEO Bureau Zeist | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Zeist. Vanaf €99/mnd."
  },
  {
    slug: "harderwijk",
    name: "Harderwijk",
    province: "Gelderland",
    tier: 3,
    population: "48.000+",
    description: "Harderwijk is een historische Hanzestad aan het Veluwemeer. Met automatische SEO bereik je toeristen en lokale klanten.",
    localFacts: ["Dolfinarium trekt bezoekers", "Historische binnenstad", "Waterrecreatie"],
    nearbyAreas: ["Ermelo", "Putten", "Nunspeet", "Zeewolde", "Elburg"],
    metaTitle: "SEO Bureau Harderwijk | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Harderwijk. Vanaf €99/mnd."
  },
  {
    slug: "woerden",
    name: "Woerden",
    province: "Utrecht",
    tier: 3,
    population: "53.000+",
    description: "Woerden ligt centraal in het Groene Hart. Met automatische SEO bereik je klanten in deze karaktervolle gemeente.",
    localFacts: ["Kaasmarkt", "Centraal in Groene Hart", "Historische binnenstad"],
    nearbyAreas: ["Utrecht", "Gouda", "Alphen aan den Rijn", "Nieuwegein", "Montfoort"],
    metaTitle: "SEO Bureau Woerden | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Woerden. Vanaf €99/mnd."
  },
  {
    slug: "katwijk",
    name: "Katwijk",
    province: "Zuid-Holland",
    tier: 3,
    population: "66.000+",
    description: "Katwijk is een kustplaats met een sterke lokale identiteit. Met automatische SEO bereik je inwoners en strandbezoekers.",
    localFacts: ["Kustplaats met strand", "Sterke lokale gemeenschap", "Toerisme in zomer"],
    nearbyAreas: ["Leiden", "Noordwijk", "Oegstgeest", "Rijnsburg", "Valkenburg"],
    metaTitle: "SEO Bureau Katwijk | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Katwijk. Vanaf €99/mnd."
  },
  {
    slug: "zutphen",
    name: "Zutphen",
    province: "Gelderland",
    tier: 3,
    population: "48.000+",
    description: "Zutphen is een Hanzestad aan de IJssel met veel monumenten. Met automatische SEO bereik je bezoekers en lokale klanten.",
    localFacts: ["Historische Hanzestad", "Boekenstad met veel antiquariaten", "Monumentale binnenstad"],
    nearbyAreas: ["Deventer", "Apeldoorn", "Lochem", "Doetinchem", "Warnsveld"],
    metaTitle: "SEO Bureau Zutphen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Zutphen. Vanaf €99/mnd."
  },
  {
    slug: "doetinchem",
    name: "Doetinchem",
    province: "Gelderland",
    tier: 3,
    population: "58.000+",
    description: "Doetinchem is het centrum van de Achterhoek. Met automatische SEO bereik je klanten in heel Oost-Gelderland.",
    localFacts: ["Centrum van de Achterhoek", "Regionale voorzieningen", "Veel natuur in omgeving"],
    nearbyAreas: ["Zutphen", "Winterswijk", "Varsseveld", "Zelhem", "Silvolde"],
    metaTitle: "SEO Bureau Doetinchem | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Doetinchem. Bereik de Achterhoek. Vanaf €99/mnd."
  },
  {
    slug: "middelburg",
    name: "Middelburg",
    province: "Zeeland",
    tier: 3,
    population: "48.000+",
    description: "Middelburg is de hoofdstad van Zeeland met veel historie. Met automatische SEO bereik je klanten in heel Zeeland.",
    localFacts: ["Provinciehoofdstad", "Monumentale binnenstad", "Veel toerisme"],
    nearbyAreas: ["Vlissingen", "Goes", "Veere", "Arnemuiden", "Domburg"],
    metaTitle: "SEO Bureau Middelburg | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Middelburg. Bereik heel Zeeland. Vanaf €99/mnd."
  },
  {
    slug: "assen",
    name: "Assen",
    province: "Drenthe",
    tier: 3,
    population: "69.000+",
    description: "Assen is de hoofdstad van Drenthe en bekend van de TT. Met automatische SEO bereik je klanten in heel Drenthe.",
    localFacts: ["Provinciehoofdstad", "TT Circuit trekt bezoekers", "Veel recreatie"],
    nearbyAreas: ["Groningen", "Meppel", "Emmen", "Hoogeveen", "Roden"],
    metaTitle: "SEO Bureau Assen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Assen. Bereik heel Drenthe. Vanaf €99/mnd."
  },
  {
    slug: "emmen",
    name: "Emmen",
    province: "Drenthe",
    tier: 3,
    population: "108.000+",
    description: "Emmen is de grootste gemeente van Drenthe. Met automatische SEO bereik je klanten in Zuidoost-Drenthe.",
    localFacts: ["Dierenpark Emmen", "Grootste gemeente van Drenthe", "Veel natuur"],
    nearbyAreas: ["Hoogeveen", "Coevorden", "Klazienaveen", "Nieuw-Amsterdam", "Assen"],
    metaTitle: "SEO Bureau Emmen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Emmen. Vanaf €99/mnd."
  },
  {
    slug: "barneveld",
    name: "Barneveld",
    province: "Gelderland",
    tier: 3,
    population: "60.000+",
    description: "Barneveld is een ondernemende gemeente op de Veluwe. Met automatische SEO bereik je klanten in de Gelderse Vallei.",
    localFacts: ["Sterke pluimveesector", "Veel ondernemers", "Goede bereikbaarheid"],
    nearbyAreas: ["Amersfoort", "Ede", "Veenendaal", "Nijkerk", "Voorthuizen"],
    metaTitle: "SEO Bureau Barneveld | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Barneveld. Vanaf €99/mnd."
  },
  {
    slug: "den-helder",
    name: "Den Helder",
    province: "Noord-Holland",
    tier: 3,
    population: "55.000+",
    description: "Den Helder is de noordelijkste stad van Noord-Holland. Met automatische SEO bereik je klanten in de Kop van Noord-Holland.",
    localFacts: ["Marinehaven", "Vertrekpunt naar Texel", "Veel visserij"],
    nearbyAreas: ["Texel", "Schagen", "Anna Paulowna", "Julianadorp", "Alkmaar"],
    metaTitle: "SEO Bureau Den Helder | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Den Helder. Vanaf €99/mnd."
  },
  {
    slug: "kampen",
    name: "Kampen",
    province: "Overijssel",
    tier: 3,
    population: "54.000+",
    description: "Kampen is een historische Hanzestad aan de IJssel. Met automatische SEO bereik je klanten in de regio.",
    localFacts: ["Historische Hanzestad", "Monumentale binnenstad", "Veel scheepvaart historie"],
    nearbyAreas: ["Zwolle", "IJsselmuiden", "Elburg", "Dronten", "Genemuiden"],
    metaTitle: "SEO Bureau Kampen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Kampen. Vanaf €99/mnd."
  },
  {
    slug: "schiedam",
    name: "Schiedam",
    province: "Zuid-Holland",
    tier: 3,
    population: "79.000+",
    description: "Schiedam is de jeneverstad met de hoogste molens ter wereld. Met automatische SEO bereik je klanten in de Rijnmond regio.",
    localFacts: ["Jeneverstad", "Hoogste molens ter wereld", "Deel van Rijnmond"],
    nearbyAreas: ["Rotterdam", "Vlaardingen", "Delft", "Den Haag", "Maassluis"],
    metaTitle: "SEO Bureau Schiedam | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Schiedam. Vanaf €99/mnd."
  },
  {
    slug: "wageningen",
    name: "Wageningen",
    province: "Gelderland",
    tier: 3,
    population: "39.000+",
    description: "Wageningen is de wereldberoemde universiteitsstad voor landbouw en voeding. Met automatische SEO bereik je studenten en lokale klanten.",
    localFacts: ["Wageningen University", "Veel internationale studenten", "Innovatie in food sector"],
    nearbyAreas: ["Ede", "Arnhem", "Veenendaal", "Rhenen", "Bennekom"],
    metaTitle: "SEO Bureau Wageningen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Wageningen. Vanaf €99/mnd."
  },
  {
    slug: "meppel",
    name: "Meppel",
    province: "Drenthe",
    tier: 3,
    population: "34.000+",
    description: "Meppel is een gezellige stad op de grens van Drenthe en Overijssel. Met automatische SEO bereik je klanten in de regio.",
    localFacts: ["Donderdag Meppeldag", "Sluizencomplex", "Centraal in de Kop van Overijssel"],
    nearbyAreas: ["Zwolle", "Steenwijk", "Hoogeveen", "Staphorst", "Vollenhove"],
    metaTitle: "SEO Bureau Meppel | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Meppel. Vanaf €99/mnd."
  },
  {
    slug: "gorinchem",
    name: "Gorinchem",
    province: "Zuid-Holland",
    tier: 3,
    population: "37.000+",
    description: "Gorinchem is een vestingstad aan de Merwede. Met automatische SEO bereik je klanten in de regio Alblasserwaard-Vijfheerenlanden.",
    localFacts: ["Vestingstad", "Strategische ligging aan rivieren", "Historische binnenstad"],
    nearbyAreas: ["Dordrecht", "Leerdam", "Sliedrecht", "Hardinxveld-Giessendam", "Woudrichem"],
    metaTitle: "SEO Bureau Gorinchem | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Gorinchem. Vanaf €99/mnd."
  },
  {
    slug: "sneek",
    name: "Sneek",
    province: "Friesland",
    tier: 3,
    population: "34.000+",
    description: "Sneek is het watersportcentrum van Friesland. Met automatische SEO bereik je watersporters en lokale klanten.",
    localFacts: ["Sneekweek", "Watersportcentrum", "Historische waterpoort"],
    nearbyAreas: ["Leeuwarden", "Heerenveen", "Bolsward", "IJlst", "Joure"],
    metaTitle: "SEO Bureau Sneek | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Sneek. Vanaf €99/mnd."
  },
  {
    slug: "almelo",
    name: "Almelo",
    province: "Overijssel",
    tier: 3,
    population: "73.000+",
    description: "Almelo is een industriestad in Twente. Met automatische SEO bereik je klanten in de regio.",
    localFacts: ["Textielindustrie geschiedenis", "Centrale ligging in Twente", "Veel maakindustrie"],
    nearbyAreas: ["Enschede", "Hengelo", "Wierden", "Vriezenveen", "Tubbergen"],
    metaTitle: "SEO Bureau Almelo | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Almelo. Vanaf €99/mnd."
  },
  {
    slug: "hengelo",
    name: "Hengelo",
    province: "Overijssel",
    tier: 3,
    population: "81.000+",
    description: "Hengelo is een industriestad in Twente met sterke technische sector. Met automatische SEO bereik je klanten in Twente.",
    localFacts: ["Stork geschiedenis", "Technische industrie", "Centrale ligging in Twente"],
    nearbyAreas: ["Enschede", "Almelo", "Oldenzaal", "Borne", "Delden"],
    metaTitle: "SEO Bureau Hengelo | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Hengelo. Vanaf €99/mnd."
  },
  {
    slug: "roermond",
    name: "Roermond",
    province: "Limburg",
    tier: 3,
    population: "59.000+",
    description: "Roermond is een bisschopsstad met outlet shopping. Met automatische SEO bereik je shoppers en lokale klanten.",
    localFacts: ["Designer Outlet", "Historische binnenstad", "Maasmeren recreatie"],
    nearbyAreas: ["Venlo", "Weert", "Sittard", "Echt-Susteren", "Maasbracht"],
    metaTitle: "SEO Bureau Roermond | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Roermond. Vanaf €99/mnd."
  },
  {
    slug: "vlissingen",
    name: "Vlissingen",
    province: "Zeeland",
    tier: 3,
    population: "45.000+",
    description: "Vlissingen is een havenstad aan de Westerschelde. Met automatische SEO bereik je toeristen en lokale klanten.",
    localFacts: ["Haven en scheepswerf", "Boulevard aan zee", "Veel toerisme"],
    nearbyAreas: ["Middelburg", "Goes", "Terneuzen", "Veere", "Souburg"],
    metaTitle: "SEO Bureau Vlissingen | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Vlissingen. Vanaf €99/mnd."
  },
  {
    slug: "bergen-op-zoom",
    name: "Bergen op Zoom",
    province: "Noord-Brabant",
    tier: 3,
    population: "67.000+",
    description: "Bergen op Zoom is een vestingstad met beroemd carnaval. Met automatische SEO bereik je klanten in West-Brabant.",
    localFacts: ["Vestingstad", "Beroemd carnaval (Krabbegat)", "Historische binnenstad"],
    nearbyAreas: ["Roosendaal", "Breda", "Goes", "Tholen", "Woensdrecht"],
    metaTitle: "SEO Bureau Bergen op Zoom | Lokale Vindbaarheid | KlikKlaarSEO",
    metaDescription: "Automatische SEO voor ondernemers in Bergen op Zoom. Vanaf €99/mnd."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}

export function getLocationsByTier(tier: 1 | 2 | 3): LocationData[] {
  return locations.filter(l => l.tier === tier);
}
