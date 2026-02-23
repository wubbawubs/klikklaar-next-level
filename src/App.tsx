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
import PaymentSuccess from "./pages/PaymentSuccess";
import Kennisbank from "./pages/Kennisbank";
import SeoAbonnement from "./pages/SeoAbonnement";
import SeoUitbesteden from "./pages/SeoUitbesteden";
import Branches from "./pages/Branches";
import Steden from "./pages/Steden";
import Diensten from "./pages/Diensten";
import Platforms from "./pages/Platforms";
import Tools from "./pages/Tools";
import KennisbankPillar from "./pages/templates/KennisbankPillar";
import KennisbankArticle from "./pages/templates/KennisbankArticle";

// Template imports
import { IndustryLandingPage } from "./pages/templates/IndustryLandingPage";
import { LocationLandingPage } from "./pages/templates/LocationLandingPage";
import { ServiceLandingPage } from "./pages/templates/ServiceLandingPage";
import { ComboLandingPage } from "./pages/templates/ComboLandingPage";
import { DienstUitbestedenPage } from "./pages/templates/DienstUitbestedenPage";
import { DienstAbonnementPage } from "./pages/templates/DienstAbonnementPage";
import { DienstBureauPage } from "./pages/templates/DienstBureauPage";
import { DienstScanPage } from "./pages/templates/DienstScanPage";
import { PlatformLandingPage } from "./pages/templates/PlatformLandingPage";
import { ToolLandingPage } from "./pages/templates/ToolLandingPage";

// Data imports
import { allIndustries, getIndustryBySlug } from "./data/industries";
import { locations, getLocationBySlug } from "./data/locations";
import { services } from "./data/services";
import { combos } from "./data/combos";
import { serviceVariantsUitbesteden, serviceVariantsAbonnement } from "./data/service-variants";
import { serviceVariantsBureau, serviceVariantsScan } from "./data/service-variants-p2";
import { serviceVariantsUitbestedenP3, serviceVariantsAbonnementP3 } from "./data/service-variants-p3";
import { serviceVariantsBureauP4, serviceVariantsScanP4 } from "./data/service-variants-p4";
import { platforms } from "./data/platforms";
import { tools } from "./data/tools";

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
          
          {/* Diensten hub + pillar pages */}
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/diensten/seo-abonnement" element={<SeoAbonnement />} />
          
          {/* Dynamic dienst-variant pages (P1) */}
          {serviceVariantsUitbesteden.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstUitbestedenPage data={data} />}
            />
          ))}
          {serviceVariantsAbonnement.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstAbonnementPage data={data} />}
            />
          ))}
          {serviceVariantsBureau.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstBureauPage data={data} />}
            />
          ))}
          {serviceVariantsScan.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
          element={<DienstScanPage data={data} />}
            />
          ))}
          {/* P3 routes */}
          {serviceVariantsUitbestedenP3.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstUitbestedenPage data={data} />}
            />
          ))}
          {serviceVariantsAbonnementP3.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstAbonnementPage data={data} />}
            />
          ))}
          {/* P4 routes */}
          {serviceVariantsBureauP4.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstBureauPage data={data} />}
            />
          ))}
          {serviceVariantsScanP4.map((data) => (
            <Route
              key={data.slug}
              path={`/diensten/${data.slug}`}
              element={<DienstScanPage data={data} />}
            />
          ))}
          <Route path="/diensten/seo-uitbesteden" element={<SeoUitbesteden />} />
          
          {/* Kennisbank routes */}
          <Route path="/kennisbank" element={<Kennisbank />} />
          <Route path="/kennisbank/:pillarSlug" element={<KennisbankPillar />} />
          <Route path="/kennisbank/:pillarSlug/:articleSlug" element={<KennisbankArticle />} />
          
          {/* Hub pages for improved crawl depth */}
          <Route path="/branches" element={<Branches />} />
          <Route path="/steden" element={<Steden />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/tools" element={<Tools />} />
          
          {/* Dynamic tool landing pages */}
          {tools.map((tool) => (
            <Route
              key={tool.slug}
              path={`/tools/${tool.slug}`}
              element={<ToolLandingPage tool={tool} />}
            />
          ))}
          
          {/* Dynamic platform landing pages */}
          {platforms.map((platform) => (
            <Route
              key={platform.slug}
              path={`/seo-${platform.slug}`}
              element={<PlatformLandingPage platform={platform} />}
            />
          ))}
          {/* Dynamic industry landing pages */}
          {allIndustries.map((industry) => (
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
          
          {/* Payment routes */}
          <Route path="/betaling-geslaagd" element={<PaymentSuccess />} />
          
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
