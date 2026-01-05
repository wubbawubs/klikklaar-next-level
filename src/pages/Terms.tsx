import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Algemene Voorwaarden | KlikKlaar"
        description="Lees onze algemene voorwaarden. Transparante afspraken over onze SEO-diensten, prijzen en opzegtermijnen. Maandelijks opzegbaar."
        canonical="https://klikklaar.nl/voorwaarden"
      />
      <StructuredData 
        schema={{
          type: "WebPage",
          name: "Algemene Voorwaarden - KlikKlaar",
          description: "Lees onze algemene voorwaarden voor SEO-diensten.",
          url: "https://klikklaar.nl/voorwaarden",
        }}
      />
      <Header />
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-6 lg:mb-8">
            Algemene Voorwaarden
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. Definities</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground text-sm sm:text-base space-y-2 mb-4">
                <li><strong>KlikKlaar:</strong> de aanbieder van de SEO-optimalisatiediensten</li>
                <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met KlikKlaar</li>
                <li><strong>Diensten:</strong> de door KlikKlaar aangeboden website-optimalisatiediensten</li>
                <li><strong>Overeenkomst:</strong> de afspraken tussen KlikKlaar en de Klant</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">2. Toepasselijkheid</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en 
                overeenkomsten tussen KlikKlaar en de Klant. Afwijkingen zijn alleen geldig indien 
                schriftelijk overeengekomen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">3. Dienstverlening</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                KlikKlaar levert automatische website-optimalisatiediensten gericht op het verbeteren 
                van de vindbaarheid van de website van de Klant. De specifieke diensten en voorwaarden 
                worden vastgelegd in de gekozen abonnementsvorm.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">4. Prijzen en betaling</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Alle prijzen zijn in euro's en exclusief btw, tenzij anders vermeld. Betaling geschiedt 
                maandelijks vooraf via automatische incasso of factuur. Bij niet-tijdige betaling is 
                KlikKlaar gerechtigd de dienstverlening op te schorten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">5. Looptijd en opzegging</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                De overeenkomst wordt aangegaan voor onbepaalde tijd op maandbasis. Opzegging kan 
                op elk moment plaatsvinden met inachtneming van een opzegtermijn van één maand. 
                Er zijn geen opzegkosten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">6. Aansprakelijkheid</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                KlikKlaar spant zich in om de beste resultaten te behalen, maar garandeert geen 
                specifieke posities in zoekmachines. De aansprakelijkheid van KlikKlaar is beperkt 
                tot het bedrag dat de Klant in de drie maanden voorafgaand aan de schade heeft betaald.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">7. Intellectueel eigendom</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Alle intellectuele eigendomsrechten op de door KlikKlaar ontwikkelde materialen, 
                analyses en rapporten blijven eigendom van KlikKlaar, tenzij schriftelijk anders 
                overeengekomen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">8. Vertrouwelijkheid</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie 
                die zij in het kader van de overeenkomst van elkaar ontvangen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">9. Wijzigingen</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                KlikKlaar behoudt zich het recht voor deze algemene voorwaarden te wijzigen. 
                Wijzigingen worden minimaal 30 dagen voor inwerkingtreding aangekondigd via e-mail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">10. Toepasselijk recht</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Op deze algemene voorwaarden en alle overeenkomsten is Nederlands recht van toepassing. 
                Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">11. Contact</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              Voor vragen over deze voorwaarden kunt u contact opnemen via{" "}
                <a href="mailto:Info@klikklaarseo.nl" className="text-kk-orange hover:underline">
                  Info@klikklaarseo.nl
                </a>
              </p>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">KlikKlaar</strong> is een handelsnaam van LP Impact B.V.<br />
                  KvK-nummer: 94601186<br />
                  Vestigingsadres: Olieslagerspoort 1, 1601AW Enkhuizen<br />
                  E-mail: <a href="mailto:Info@klikklaarseo.nl" className="text-kk-orange hover:underline">Info@klikklaarseo.nl</a><br />
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

export default Terms;
