import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Platform Pages
import PlatformOverview from "./pages/platform/PlatformOverview";
import IdentityGraph from "./pages/platform/IdentityGraph";

// Other Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";

// Industry Pages
import RetailIndustry from "./pages/industries/Retail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Platform Pages */}
          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/platform/identitygraph" element={<IdentityGraph />} />
          <Route path="/platform/consentgraph" element={<PlatformOverview />} />
          <Route path="/platform/analytics-sdk" element={<PlatformOverview />} />
          <Route path="/platform/intent-engine" element={<PlatformOverview />} />
          <Route path="/platform/datascore" element={<PlatformOverview />} />
          <Route path="/platform/architecture" element={<PlatformOverview />} />
          
          {/* Solutions Pages */}
          <Route path="/solutions/fraud-prevention" element={<PlatformOverview />} />
          <Route path="/solutions/consent-automation" element={<PlatformOverview />} />
          <Route path="/solutions/identity-resolution" element={<IdentityGraph />} />
          <Route path="/solutions/predictive-audiences" element={<PlatformOverview />} />
          <Route path="/solutions/location-intelligence" element={<PlatformOverview />} />
          <Route path="/solutions/performance-marketing" element={<PlatformOverview />} />
          
          {/* Industry Pages */}
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/marketplaces" element={<RetailIndustry />} />
          <Route path="/industries/tourism" element={<RetailIndustry />} />
          <Route path="/industries/government" element={<RetailIndustry />} />
          <Route path="/industries/fintech" element={<RetailIndustry />} />
          <Route path="/industries/telecom" element={<RetailIndustry />} />
          <Route path="/industries/data-platforms" element={<RetailIndustry />} />
          <Route path="/industries/apps" element={<RetailIndustry />} />
          <Route path="/industries/events" element={<RetailIndustry />} />
          
          {/* Other Routes */}
          <Route path="/partners" element={<About />} />
          <Route path="/resources" element={<Blog />} />
          <Route path="/leadership" element={<About />} />
          <Route path="/careers" element={<About />} />
          <Route path="/privacy" element={<About />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
