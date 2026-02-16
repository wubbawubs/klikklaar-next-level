import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hoe werkt KlikKlaar precies?",
    answer: "Na een kort kennismakingsgesprek analyseren we je website. Vervolgens voeren we wekelijks automatische verbeteringen door: betere teksten, technische optimalisaties en online vindbaarheid. Jij hoeft niets te doen, wij regelen alles.",
  },
  {
    question: "Moet ik technische kennis hebben?",
    answer: "Absoluut niet. KlikKlaar is gemaakt voor ondernemers, niet voor marketeers. We doen alles voor je en rapporteren in begrijpelijk Nederlands zonder vakjargon.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer: "De meeste klanten zien binnen 4-6 weken de eerste verbeteringen in hun vindbaarheid. Binnen 3 maanden is de groei meestal duidelijk meetbaar in meer websitebezoekers en klantaanvragen.",
  },
  {
    question: "Wat kost het en kan ik opzeggen?",
    answer: "We hebben pakketten vanaf €99 per maand. Geen langlopende contracten, je kunt maandelijks opzeggen. Geen gedoe, geen verborgen kosten.",
  },
  {
    question: "Werkt dit voor mijn branche?",
    answer: "KlikKlaar werkt voor alle ondernemers: kappers, tandartsen, coaches, aannemers, fysiotherapeuten, en meer. Als je klanten wilt aantrekken, kunnen we je helpen.",
  },
  {
    question: "Wat als ik al een website heb?",
    answer: "Perfect! We optimaliseren je bestaande website. Je hoeft geen nieuwe site te laten bouwen, we verbeteren wat je al hebt en zorgen dat je beter gevonden wordt.",
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div
          ref={ref}
          className="text-center mb-10 lg:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4">
            Veelgestelde vragen
          </span>
          <h2 className="text-display-sm lg:text-display font-bold text-foreground mb-4">
            Nog vragen? <span className="gradient-text">Wij hebben antwoorden</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier vind je antwoorden op de meest gestelde vragen over KlikKlaar.
          </p>
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s',
          }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className="text-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s',
          }}
        >
          <p className="text-muted-foreground">
            Staat je vraag er niet tussen?{" "}
            <a href="/contact" className="text-kk-orange hover:underline font-medium">
              Neem contact op
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
