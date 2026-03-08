import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieBanner } from "@/components/CookieBanner";
import SEOPopup from "@/components/SEOPopup";

// Lazy-loaded page components (route-based code splitting)
const Index = lazy(() => import("./pages/Index"));
const Deliverables = lazy(() => import("./pages/Deliverables"));
const Pricing = lazy(() => import("./pages/Pricing"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const About = lazy(() => import("./pages/About"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Contact = lazy(() => import("./pages/Contact"));
const AdLandingA = lazy(() => import("./pages/AdLandingA"));
const AdLandingB = lazy(() => import("./pages/AdLandingB"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Kennisbank = lazy(() => import("./pages/Kennisbank"));
const SeoAbonnement = lazy(() => import("./pages/SeoAbonnement"));
const SeoUitbesteden = lazy(() => import("./pages/SeoUitbesteden"));
const Branches = lazy(() => import("./pages/Branches"));
const Steden = lazy(() => import("./pages/Steden"));
const Diensten = lazy(() => import("./pages/Diensten"));
const Platforms = lazy(() => import("./pages/Platforms"));
const Tools = lazy(() => import("./pages/Tools"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));
const SalesExecutive = lazy(() => import("./pages/SalesExecutive"));
const StudentsLanding = lazy(() => import("./pages/StudentsLanding"));
const SeniorsLanding = lazy(() => import("./pages/SeniorsLanding"));
const KennisbankPillar = lazy(() => import("./pages/templates/KennisbankPillar"));
const KennisbankArticle = lazy(() => import("./pages/templates/KennisbankArticle"));

// Lazy-loaded template components
const IndustryLandingPage = lazy(() => import("./pages/templates/IndustryLandingPage").then(m => ({ default: m.IndustryLandingPage })));
const LocationLandingPage = lazy(() => import("./pages/templates/LocationLandingPage").then(m => ({ default: m.LocationLandingPage })));
const ServiceLandingPage = lazy(() => import("./pages/templates/ServiceLandingPage").then(m => ({ default: m.ServiceLandingPage })));
const ComboLandingPage = lazy(() => import("./pages/templates/ComboLandingPage").then(m => ({ default: m.ComboLandingPage })));
const DienstUitbestedenPage = lazy(() => import("./pages/templates/DienstUitbestedenPage").then(m => ({ default: m.DienstUitbestedenPage })));
const DienstAbonnementPage = lazy(() => import("./pages/templates/DienstAbonnementPage").then(m => ({ default: m.DienstAbonnementPage })));
const DienstBureauPage = lazy(() => import("./pages/templates/DienstBureauPage").then(m => ({ default: m.DienstBureauPage })));
const DienstScanPage = lazy(() => import("./pages/templates/DienstScanPage").then(m => ({ default: m.DienstScanPage })));
const PlatformLandingPage = lazy(() => import("./pages/templates/PlatformLandingPage").then(m => ({ default: m.PlatformLandingPage })));
const ToolLandingPage = lazy(() => import("./pages/templates/ToolLandingPage").then(m => ({ default: m.ToolLandingPage })));

// Data imports (needed eagerly for route generation)
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

// Lightweight loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstUitbestedenPage data={data} />} />
            ))}
            {serviceVariantsAbonnement.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstAbonnementPage data={data} />} />
            ))}
            {serviceVariantsBureau.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstBureauPage data={data} />} />
            ))}
            {serviceVariantsScan.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstScanPage data={data} />} />
            ))}
            {/* P3 routes */}
            {serviceVariantsUitbestedenP3.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstUitbestedenPage data={data} />} />
            ))}
            {serviceVariantsAbonnementP3.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstAbonnementPage data={data} />} />
            ))}
            {/* P4 routes */}
            {serviceVariantsBureauP4.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstBureauPage data={data} />} />
            ))}
            {serviceVariantsScanP4.map((data) => (
              <Route key={data.slug} path={`/diensten/${data.slug}`} element={<DienstScanPage data={data} />} />
            ))}
            <Route path="/diensten/seo-uitbesteden" element={<SeoUitbesteden />} />
            
            {/* Kennisbank routes */}
            <Route path="/kennisbank" element={<Kennisbank />} />
            <Route path="/kennisbank/:pillarSlug" element={<KennisbankPillar />} />
            <Route path="/kennisbank/:pillarSlug/:articleSlug" element={<KennisbankArticle />} />
            
            {/* Hub pages */}
            <Route path="/branches" element={<Branches />} />
            <Route path="/steden" element={<Steden />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/tools" element={<Tools />} />
            
            {/* Dynamic tool landing pages */}
            {tools.map((tool) => (
              <Route key={tool.slug} path={`/tools/${tool.slug}`} element={<ToolLandingPage tool={tool} />} />
            ))}
            
            {/* Dynamic platform landing pages */}
            {platforms.map((platform) => (
              <Route key={platform.slug} path={`/seo-${platform.slug}`} element={<PlatformLandingPage platform={platform} />} />
            ))}
            {/* Dynamic industry landing pages */}
            {allIndustries.map((industry) => (
              <Route key={industry.slug} path={`/seo-${industry.slug}`} element={<IndustryLandingPage industry={industry} />} />
            ))}
            
            {/* Dynamic location landing pages */}
            {locations.map((location) => (
              <Route key={location.slug} path={`/seo-${location.slug}`} element={<LocationLandingPage location={location} />} />
            ))}
            
            {/* Dynamic service landing pages */}
            {services.map((service) => (
              <Route key={service.slug} path={`/${service.slug}`} element={<ServiceLandingPage service={service} />} />
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
            
            {/* Sales landing pages */}
            <Route path="/salesexecutive" element={<SalesExecutive />} />
            <Route path="/STUDENTSwhoMAKEtheirOWNliving" element={<StudentsLanding />} />
            <Route path="/SENIORSwhoMAKEtheirOWNliving" element={<SeniorsLanding />} />

            {/* Admin */}
            <Route path="/admin/leads" element={<AdminLeads />} />
            
            {/* Payment routes */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/betaling-geslaagd" element={<PaymentSuccess />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
        <SEOPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
