import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import Programs from "./pages/Programs";
import ProgramsLanding from "./pages/ProgramsLanding";
import CountryDetail from "./pages/CountryDetail";
import Work from "./pages/Work";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ConsultantDetail from "./pages/ConsultantDetail";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/programs" element={<ProgramsLanding />} />
          <Route path="/zeme/:slug" element={<CountryDetail />} />
          <Route path="/kratke-programy" element={<Programs />} />
          <Route path="/semestralni-programy" element={<Programs />} />
          <Route path="/rocni-programy" element={<Programs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/konzultant/:slug" element={<ConsultantDetail />} />
          <Route path="/zasady-ochrany-osobnich-udaju" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
