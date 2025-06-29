
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Chat from "./pages/Chat";
import Marketplace from "./pages/Marketplace";
import Shop from "./pages/Shop";
import Transport from "./pages/Transport";
import Control from "./pages/Control";
import Ratings from "./pages/Ratings";
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/control" element={<Control />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
