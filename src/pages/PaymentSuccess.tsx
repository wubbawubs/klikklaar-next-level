import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Betaling geslaagd | KlikKlaarSEO"
        description="Je betaling is succesvol verwerkt. Welkom bij KlikKlaarSEO!"
        canonical="https://klikklaar-next-level.lovable.app/betaling-geslaagd"
      />
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-4 sm:px-6 max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Betaling geslaagd! 🎉
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Welkom bij KlikKlaarSEO. We gaan direct voor je aan de slag. 
            Je ontvangt binnen 24 uur een e-mail met de volgende stappen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <ArrowRight className="w-4 h-4" />
                Neem contact op
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/">Terug naar home</Link>
            </GradientButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
