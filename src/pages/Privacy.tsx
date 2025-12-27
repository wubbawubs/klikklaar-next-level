import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacybeleid | KlikKlaar"
        description="Lees ons privacybeleid. KlikKlaar respecteert je privacy en beschermt je persoonsgegevens. Transparant over hoe we met je data omgaan."
        canonical="https://klikklaar.nl/privacy"
      />
      <Header />
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container px-4 sm:px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-6 lg:mb-8">
            Privacybeleid
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. Inleiding</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                KlikKlaar ("wij", "ons", "onze") respecteert de privacy van alle gebruikers van onze website 
                en diensten. Dit privacybeleid beschrijft hoe wij persoonsgegevens verzamelen, gebruiken, 
                delen en beschermen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Wij verzamelen de volgende categorieën persoonsgegevens:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground text-sm sm:text-base space-y-2 mb-4">
                <li>Contactgegevens: naam, e-mailadres, telefoonnummer</li>
                <li>Bedrijfsgegevens: bedrijfsnaam, website-URL, branche</li>
                <li>Gebruiksgegevens: hoe u onze website en diensten gebruikt</li>
                <li>Technische gegevens: IP-adres, browsertype, apparaatinformatie</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Wij gebruiken uw persoonsgegevens voor:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground text-sm sm:text-base space-y-2 mb-4">
                <li>Het leveren van onze diensten en optimaliseren van uw website</li>
                <li>Communicatie over uw account, diensten en updates</li>
                <li>Het verbeteren van onze website en diensten</li>
                <li>Het naleven van wettelijke verplichtingen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">4. Delen van gegevens</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Wij delen uw persoonsgegevens alleen met derden wanneer dit noodzakelijk is voor de 
                uitvoering van onze diensten, wanneer wij hiertoe wettelijk verplicht zijn, of met uw 
                uitdrukkelijke toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">5. Beveiliging</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
                te beschermen tegen ongeoorloofde toegang, verlies of diefstal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">6. Uw rechten</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                U heeft het recht om:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground text-sm sm:text-base space-y-2 mb-4">
                <li>Inzage te vragen in uw persoonsgegevens</li>
                <li>Uw gegevens te laten corrigeren of verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
                <li>Uw gegevens over te laten dragen naar een andere partij</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Onze website maakt gebruik van cookies om uw ervaring te verbeteren en om inzicht te 
                krijgen in het gebruik van onze website. U kunt uw cookievoorkeuren aanpassen via uw 
                browserinstellingen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Voor vragen over dit privacybeleid of over hoe wij met uw gegevens omgaan, kunt u 
                contact met ons opnemen via{" "}
                <a href="mailto:info@klikklaar.nl" className="text-kk-orange hover:underline">
                  info@klikklaar.nl
                </a>
              </p>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">KlikKlaar</strong> is een handelsnaam van LP Impact B.V.<br />
                  KvK-nummer: 94601186<br />
                  Vestigingsadres: Olieslagerspoort 1, 1601AW Enkhuizen<br />
                  E-mail: <a href="mailto:info@klikklaar.nl" className="text-kk-orange hover:underline">info@klikklaar.nl</a><br />
                  Telefoon: <a href="tel:+31628354333" className="text-kk-orange hover:underline">06 28 35 43 33</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
