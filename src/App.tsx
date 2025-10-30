import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Visit from "./pages/Visit";
import Contact from "./pages/Contact";
import JagaranGondal from "./pages/JagaranGondal";
import Abhishek from "./pages/Abhishek";
import Gallery from "./pages/Gallery";
import Utsav from "./pages/Utsav";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/jagaran-gondal" element={<JagaranGondal />} />
              <Route path="/abhishek" element={<Abhishek />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/utsav" element={<Utsav />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
