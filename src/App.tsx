import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Deliverables from "./pages/Deliverables";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import UseCases from "./pages/UseCases";
import Contact from "./pages/Contact";
import AdLandingA from "./pages/AdLandingA";
import AdLandingB from "./pages/AdLandingB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wat-je-krijgt" element={<Deliverables />} />
          <Route path="/prijzen" element={<Pricing />} />
          <Route path="/hoe-het-werkt" element={<HowItWorks />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/voorbeelden" element={<UseCases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ad" element={<AdLandingA />} />
          <Route path="/ad-b" element={<AdLandingB />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
