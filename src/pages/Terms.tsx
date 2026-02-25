import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site-config";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Algemene Voorwaarden | KlikKlaarSEO"
        description="Lees onze algemene voorwaarden. Transparante afspraken over onze SEO-diensten, prijzen en opzegtermijnen. Maandelijks opzegbaar."
        canonical={`${SITE_URL}/voorwaarden`}
      />
      <StructuredData 
        schema={{
          type: "WebPage",
          name: "Algemene Voorwaarden - KlikKlaarSEO",
          description: "Lees onze algemene voorwaarden voor SEO-diensten.",
          url: `${SITE_URL}/voorwaarden`,
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
              Laatst bijgewerkt: 25 februari 2026
            </p>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. Definities</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground text-sm sm:text-base space-y-2 mb-4">
                <li><strong className="text-foreground">KlikKlaarSEO:</strong> een handelsnaam van LP Impact B.V., gevestigd te Olieslagerspoort 1, 1601AW Enkhuizen, ingeschreven bij de KvK onder nummer 94601186.</li>
                <li><strong className="text-foreground">Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met KlikKlaarSEO voor het afnemen van Diensten.</li>
                <li><strong className="text-foreground">Diensten:</strong> de door KlikKlaarSEO aangeboden SEO-optimalisatiediensten, waaronder maar niet beperkt tot website-analyse, content optimalisatie, technische SEO, AI-vindbaarheid en rapportage.</li>
                <li><strong className="text-foreground">Overeenkomst:</strong> iedere afspraak of overeenkomst tussen KlikKlaarSEO en de Klant, waarvan deze algemene voorwaarden integraal onderdeel uitmaken.</li>
                <li><strong className="text-foreground">Abonnement:</strong> de door de Klant gekozen dienstvorm (Basis, Pro of Pro+) met bijbehorende maandelijkse vergoeding.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">2. Toepasselijkheid</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten en leveringen van KlikKlaarSEO.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                2.2 Door het afronden van een betaling via onze website gaat de Klant akkoord met deze algemene voorwaarden.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                2.3 Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien deze schriftelijk of per e-mail zijn overeengekomen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">3. Abonnementen en dienstverlening</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                3.1 KlikKlaarSEO biedt drie abonnementsvormen aan: <strong className="text-foreground">Basis</strong> (€99/mnd excl. btw), <strong className="text-foreground">Pro</strong> (€149/mnd excl. btw) en <strong className="text-foreground">Pro+</strong> (€249/mnd excl. btw).
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                3.2 De specifieke werkzaamheden en leveringsfrequentie per abonnementsvorm staan beschreven op de website en kunnen door KlikKlaarSEO worden aangepast, mits de Klant hiervan minimaal 30 dagen vooraf op de hoogte wordt gesteld.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                3.3 KlikKlaarSEO spant zich naar beste vermogen in om de vindbaarheid van de website van de Klant te verbeteren. Er worden geen garanties gegeven over specifieke posities in zoekresultaten van Google, AI-zoekmachines of andere platforms.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                3.4 De Klant is verantwoordelijk voor het tijdig verlenen van toegang tot benodigde systemen en het aanleveren van gevraagde informatie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">4. Prijzen, opstartkosten en betaling</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.1 Alle genoemde prijzen zijn in euro's en <strong className="text-foreground">exclusief 21% btw</strong>.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.2 Bij aanvang van elk abonnement wordt een <strong className="text-foreground">eenmalige opstartbijdrage van €300 (excl. btw)</strong> in rekening gebracht. Deze dekt de initiële website-analyse, technische audit en het opzetten van de optimalisatiestrategie.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.3 De opstartbijdrage is niet restitueerbaar, ook niet bij vroegtijdige opzegging van het abonnement.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.4 Bij keuze voor een langere looptijd (3 of 6 maanden) wordt het volledige bedrag bij aanvang in rekening gebracht. Hierbij geldt een korting van respectievelijk 10% (3 maanden) of 15% (6 maanden) op het maandtarief.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.5 Betaling geschiedt via de beveiligde betaalomgeving van Stripe. KlikKlaarSEO accepteert iDEAL, creditcard en andere door Stripe ondersteunde betaalmethoden.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.6 Bij niet-tijdige betaling is KlikKlaarSEO gerechtigd de dienstverlening met onmiddellijke ingang op te schorten totdat de betaling is voldaan.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4.7 KlikKlaarSEO behoudt zich het recht voor om prijzen jaarlijks te indexeren. Prijswijzigingen worden minimaal 30 dagen vooraf aangekondigd per e-mail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">5. Looptijd en opzegging</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                5.1 Maandabonnementen worden aangegaan voor onbepaalde tijd en zijn <strong className="text-foreground">maandelijks opzegbaar</strong>.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                5.2 Opzegging kan op elk moment plaatsvinden via e-mail naar Info@klikklaarseo.nl of telefonisch. Het abonnement eindigt aan het einde van de lopende betaalperiode.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                5.3 Bij abonnementen met een langere looptijd (3 of 6 maanden) is tussentijdse opzegging mogelijk, maar vindt geen restitutie plaats van het reeds betaalde bedrag.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                5.4 Na opzegging worden alle lopende werkzaamheden afgerond tot het einde van de betaalperiode. Toegang tot rapporten en analyses blijft beschikbaar tot het einde van de betaalperiode.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                5.5 Er worden geen opzegkosten in rekening gebracht.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">6. Aansprakelijkheid</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                6.1 KlikKlaarSEO is uitsluitend aansprakelijk voor directe schade die aantoonbaar het gevolg is van een toerekenbare tekortkoming in de nakoming van de overeenkomst.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                6.2 De totale aansprakelijkheid van KlikKlaarSEO is beperkt tot het bedrag dat de Klant in de drie (3) maanden voorafgaand aan de schadeveroorzakende gebeurtenis aan KlikKlaarSEO heeft betaald.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                6.3 KlikKlaarSEO is niet aansprakelijk voor indirecte schade, waaronder gederfde winst, gemiste besparingen, reputatieschade of schade door bedrijfsstagnatie.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                6.4 KlikKlaarSEO is niet aansprakelijk voor wijzigingen in algoritmes van zoekmachines of AI-platforms die een negatief effect hebben op de vindbaarheid van de website van de Klant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">7. Intellectueel eigendom</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                7.1 Alle door KlikKlaarSEO ontwikkelde materialen, analyses, rapporten, strategieën en tools blijven eigendom van KlikKlaarSEO, tenzij schriftelijk anders overeengekomen.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                7.2 De Klant verkrijgt een niet-exclusief, niet-overdraagbaar gebruiksrecht op de geleverde rapporten en adviezen voor de duur van het abonnement.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                7.3 Content die door KlikKlaarSEO wordt gecreëerd of aangepast op de website van de Klant, wordt eigendom van de Klant na publicatie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">8. Vertrouwelijkheid en privacy</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                8.1 Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar ontvangen.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                8.2 KlikKlaarSEO verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG). Zie ons{" "}
                <a href="/privacy" className="text-kk-orange hover:underline">privacybeleid</a> voor meer informatie.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                8.3 KlikKlaarSEO zal geen toegang verkrijgen tot systemen van de Klant zonder uitdrukkelijke toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">9. Overmacht</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                9.1 In geval van overmacht is KlikKlaarSEO niet gehouden tot nakoming van enige verplichting. Onder overmacht wordt onder meer verstaan: storingen in het internet, stroomuitval, storingen bij hostingproviders, wijzigingen in wet- of regelgeving, en andere omstandigheden buiten de invloedssfeer van KlikKlaarSEO.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">10. Wijzigingen voorwaarden</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                10.1 KlikKlaarSEO behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen voor inwerkingtreding aangekondigd via e-mail.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                10.2 Indien de Klant niet akkoord gaat met de gewijzigde voorwaarden, heeft de Klant het recht het abonnement op te zeggen tegen de datum waarop de nieuwe voorwaarden in werking treden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">11. Toepasselijk recht en geschillen</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                11.1 Op deze algemene voorwaarden en alle overeenkomsten tussen KlikKlaarSEO en de Klant is Nederlands recht van toepassing.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                11.2 Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dit niet mogelijk blijkt, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement Noord-Holland.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">12. Contact</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Voor vragen over deze voorwaarden kunt u contact opnemen via{" "}
                <a href="mailto:Info@klikklaarseo.nl" className="text-kk-orange hover:underline">
                  Info@klikklaarseo.nl
                </a>{" "}
                of telefonisch via{" "}
                <a href="tel:+31628354333" className="text-kk-orange hover:underline">
                  06 28 35 43 33
                </a>.
              </p>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">KlikKlaarSEO</strong> is een handelsnaam van LP Impact B.V.<br />
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