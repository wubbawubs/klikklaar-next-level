import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieBanner } from "@/components/CookieBanner";
import SEOPopup from "@/components/SEOPopup";

// Page imports
import Index from "./pages/Index";
import Deliverables from "./pages/Deliverables";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import UseCases from "./pages/UseCases";
import Contact from "./pages/Contact";
import AdLandingA from "./pages/AdLandingA";
import AdLandingB from "./pages/AdLandingB";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Kennisbank from "./pages/Kennisbank";
import KennisbankPillar from "./pages/templates/KennisbankPillar";
import KennisbankArticle from "./pages/templates/KennisbankArticle";

// Template imports
import { IndustryLandingPage } from "./pages/templates/IndustryLandingPage";
import { LocationLandingPage } from "./pages/templates/LocationLandingPage";
import { ServiceLandingPage } from "./pages/templates/ServiceLandingPage";
import { ComboLandingPage } from "./pages/templates/ComboLandingPage";

// Data imports
import { industries, getIndustryBySlug } from "./data/industries";
import { locations, getLocationBySlug } from "./data/locations";
import { services } from "./data/services";
import { combos } from "./data/combos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<Index />} />
          <Route path="/wat-je-krijgt" element={<Deliverables />} />
          <Route path="/prijzen" element={<Pricing />} />
          <Route path="/hoe-het-werkt" element={<HowItWorks />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/voorbeelden" element={<UseCases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ad" element={<AdLandingA />} />
          <Route path="/ad-b" element={<AdLandingB />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/voorwaarden" element={<Terms />} />
          
          {/* Kennisbank routes */}
          <Route path="/kennisbank" element={<Kennisbank />} />
          <Route path="/kennisbank/:pillarSlug" element={<KennisbankPillar />} />
          <Route path="/kennisbank/:pillarSlug/:articleSlug" element={<KennisbankArticle />} />
          
          {/* Dynamic industry landing pages */}
          {industries.map((industry) => (
            <Route
              key={industry.slug}
              path={`/seo-${industry.slug}`}
              element={<IndustryLandingPage industry={industry} />}
            />
          ))}
          
          {/* Dynamic location landing pages */}
          {locations.map((location) => (
            <Route
              key={location.slug}
              path={`/seo-${location.slug}`}
              element={<LocationLandingPage location={location} />}
            />
          ))}
          
          {/* Dynamic service landing pages */}
          {services.map((service) => (
            <Route
              key={service.slug}
              path={`/${service.slug}`}
              element={<ServiceLandingPage service={service} />}
            />
          ))}
          
          {/* Dynamic combo landing pages (industry + location) */}
          {combos.map((combo) => {
            const industry = getIndustryBySlug(combo.industrySlug);
            const location = getLocationBySlug(combo.locationSlug);
            if (!industry || !location) return null;
            return (
              <Route
                key={`${combo.industrySlug}-${combo.locationSlug}`}
                path={`/seo-${combo.industrySlug}-${combo.locationSlug}`}
                element={<ComboLandingPage industry={industry} location={location} />}
              />
            );
          })}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
        <SEOPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
