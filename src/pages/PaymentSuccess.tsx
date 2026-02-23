import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight, Loader2, Calendar, Mail, CreditCard } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface SessionDetails {
  customerEmail: string | null;
  amountTotal: number | null;
  currency: string | null;
  productName: string;
  status: string;
}

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [details, setDetails] = useState<SessionDetails | null>(null);
  const [loading, setLoading] = useState(!!sessionId);

  useEffect(() => {
    if (!sessionId) return;
    const fetch = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("get-checkout-session", {
          body: { sessionId },
        });
        if (!error && data) setDetails(data);
      } catch {
        // silently fail — page still works without details
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [sessionId]);

  const formatAmount = (amount: number | null, currency: string | null) => {
    if (!amount || !currency) return null;
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Betaling geslaagd | KlikKlaarSEO"
        description="Je betaling is succesvol verwerkt. Welkom bij KlikKlaarSEO!"
        canonical="https://klikklaar-next-level.lovable.app/betaling-geslaagd"
      />
      <Header />

      <main className="pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="container px-4 sm:px-6 max-w-3xl">
          {/* Success icon */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Betaling geslaagd! 🎉
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Welkom bij KlikKlaarSEO. We gaan direct voor je aan de slag.
            </p>
          </div>

          {/* Order details */}
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : details ? (
            <div className="bg-card rounded-2xl border border-border shadow-premium-sm p-6 lg:p-8 mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">Bestellingsoverzicht</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Pakket:</span>
                  <span className="text-sm font-medium text-foreground ml-auto">{details.productName}</span>
                </div>
                {details.amountTotal && (
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Bedrag:</span>
                    <span className="text-sm font-medium text-foreground ml-auto">
                      {formatAmount(details.amountTotal, details.currency)}
                    </span>
                  </div>
                )}
                {details.customerEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">E-mail:</span>
                    <span className="text-sm font-medium text-foreground ml-auto">{details.customerEmail}</span>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {/* Onboarding CTA — Calendly placeholder */}
          <div className="bg-card rounded-2xl border-2 border-kk-orange/20 shadow-premium-sm p-6 lg:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-kk-orange" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  Plan je onboarding gesprek
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Boek direct een kort gesprek zodat we je account kunnen inrichten en meteen van start gaan.
                </p>
                <GradientButton size="lg" asChild>
                  <Link to="/contact">
                    <Calendar className="w-4 h-4" />
                    Plan een gesprek
                  </Link>
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Secondary actions */}
          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Je ontvangt binnen 24 uur een e-mail met de volgende stappen.
            </p>
            <GradientButton variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowRight className="w-4 h-4" />
                Terug naar home
              </Link>
            </GradientButton>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
