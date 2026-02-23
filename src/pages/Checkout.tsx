import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { SEOHead } from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { 
  Check, 
  Shield, 
  Clock, 
  ArrowLeft, 
  Loader2, 
  Zap, 
  Star, 
  Crown,
  ChevronRight
} from "lucide-react";
import { stripePrices, intervalLabels, type BillingInterval } from "@/data/stripe-prices";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const tierInfo: Record<string, { name: string; icon: typeof Zap; features: string[] }> = {
  basis: {
    name: "Basis",
    icon: Zap,
    features: [
      "Wekelijkse website-analyse",
      "Automatische content optimalisatie",
      "Vindbaarheid verbeteren (Google & AI)",
      "Technische SEO fixes",
      "AI-vindbaarheid optimalisatie",
      "Maandelijks rapport",
      "E-mail support",
    ],
  },
  pro: {
    name: "Pro",
    icon: Star,
    features: [
      "Alles van Basis, plus:",
      "2-wekelijkse optimalisatie cyclus",
      "Uitgebreide concurrentie-analyse",
      "AI-citatie monitoring",
      "Prioriteit bij verbeteringen",
      "Wekelijks rapport",
      "Telefonische support",
    ],
  },
  proplus: {
    name: "Pro+",
    icon: Crown,
    features: [
      "Alles van Pro, plus:",
      "Persoonlijke accountmanager",
      "Maandelijkse consulting call",
      "Blog posting engine",
      "AI-zoekstrategie op maat",
      "Content creatie ondersteuning",
      "Custom rapportages",
    ],
  },
};

const trustPoints = [
  { icon: Shield, text: "Veilig betalen via Stripe" },
  { icon: Clock, text: "Maandelijks opzegbaar, geen kleine lettertjes" },
  { icon: Check, text: "Direct aan de slag na betaling" },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const tierId = searchParams.get("pakket") || "basis";
  const interval = (searchParams.get("interval") || "1") as BillingInterval;

  const tier = tierInfo[tierId];
  const priceConfig = stripePrices[tierId]?.[interval];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!tier || !priceConfig) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Pakket niet gevonden.</p>
          <GradientButton asChild>
            <Link to="/prijzen">Bekijk pakketten</Link>
          </GradientButton>
        </div>
      </div>
    );
  }

  const Icon = tier.icon;
  const basePrice = tierId === "basis" ? 99 : tierId === "pro" ? 149 : 249;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId: priceConfig.priceId, mode: priceConfig.mode },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Checkout ${tier.name} | KlikKlaarSEO`}
        description={`Rond je bestelling af voor het ${tier.name} pakket bij KlikKlaarSEO.`}
        canonical="https://klikklaar-next-level.lovable.app/checkout"
      />
      <Header />

      <main className="pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="container px-4 sm:px-6 max-w-5xl">
          {/* Back link */}
          <button
            onClick={() => navigate("/prijzen")}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar pakketten
          </button>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Order summary */}
            <div
              className="lg:col-span-3 space-y-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
              }}
            >
              {/* Branded header */}
              <div className="flex items-center gap-3 mb-2">
                <img src={klikklaarLogo} alt="KlikKlaarSEO" className="h-7" />
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Checkout</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Bevestig je keuze
              </h1>

              {/* Package card */}
              <div className="bg-card rounded-2xl border border-border shadow-premium-sm p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground">
                      {tier.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {intervalLabels[interval]}
                      {priceConfig.discount > 0 && (
                        <span className="ml-2 text-kk-orange font-semibold">
                          {priceConfig.discount}% korting
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                        ${i === 0 && tierId !== 'basis' ? 'bg-transparent' : 'bg-green-100'}`}>
                        {i === 0 && tierId !== 'basis' ? null : (
                          <Check className="w-3 h-3 text-green-600" />
                        )}
                      </div>
                      <span className={`text-sm ${i === 0 && tierId !== 'basis' ? 'font-semibold text-foreground' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-border pt-5">
                  {/* Price breakdown */}
                  <div className="space-y-2">
                    {interval !== "1" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Originele prijs</span>
                        <span className="text-muted-foreground line-through">
                          €{(basePrice * parseInt(interval)).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    )}
                    {priceConfig.discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-kk-orange font-medium">Korting ({priceConfig.discount}%)</span>
                        <span className="text-kk-orange font-medium">
                          -€{((basePrice * parseInt(interval)) - priceConfig.totalPrice).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-2 border-t border-dashed border-border">
                      <span className="font-semibold text-foreground">
                        {interval === "1" ? "Per maand" : `Totaal (${interval} maanden)`}
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">
                          €{priceConfig.totalPrice.toFixed(2).replace('.', ',')}
                        </span>
                        {interval !== "1" && (
                          <p className="text-xs text-muted-foreground">
                            = €{priceConfig.monthlyPrice.toFixed(2).replace('.', ',')} per maand
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Change selection */}
              <p className="text-xs text-muted-foreground text-center lg:text-left">
                Niet het juiste pakket?{" "}
                <Link to="/prijzen" className="text-kk-orange hover:underline font-medium">
                  Wijzig je keuze
                </Link>
              </p>
            </div>

            {/* Right: CTA + Trust */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
              }}
            >
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* CTA Card */}
                <div className="bg-card rounded-2xl border border-border shadow-premium p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Klaar om te starten?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Na betaling gaan we direct voor je aan de slag. Je ontvangt binnen 24 uur de volgende stappen.
                  </p>

                  <GradientButton
                    className="w-full"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : null}
                    {isLoading ? "Doorsturen naar betaling..." : "Afrekenen"}
                  </GradientButton>

                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    Je wordt doorgestuurd naar een beveiligde betaalpagina
                  </p>
                </div>

                {/* Trust elements */}
                <div className="space-y-3">
                  {trustPoints.map((point, i) => {
                    const TrustIcon = point.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                          <TrustIcon className="w-4 h-4 text-kk-orange" />
                        </div>
                        <span className="text-sm text-foreground">{point.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Social proof */}
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">100+</span> ondernemers gingen je voor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
