
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Messages from "./pages/Messages";
import CalendarPage from "./pages/CalendarPage";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Company from "./pages/Company";
import Legal from "./pages/Legal";
import Tutorials from "./pages/Tutorials";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Activity from "./pages/Activity";
import Achievements from "./pages/Achievements";
import Matches from "./pages/Matches";
import Community from "./pages/Community";
import AddCourse from "./pages/AddCourse";
import ImportContent from "./pages/ImportContent";
import PaymentPage from "./pages/PaymentPage";
import SchemaMarkup from "./components/SEO/SchemaMarkup";

const queryClient = new QueryClient();

// Helper function to check if the current path is the homepage
const isHomePage = (pathname: string) => {
  return pathname === "/" || 
         pathname === "/features" || 
         pathname === "/pricing" || 
         pathname === "/company" || 
         pathname === "/legal" ||
         pathname === "/community" ||
         pathname === "/payment";
};

// Create a layout component to use the React Router hooks
const AppLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which schema to use based on current path
  const getSchemaType = () => {
    if (currentPath === "/") return "website";
    if (currentPath === "/company") return "organization";
    if (currentPath.includes("/marketplace")) return "course";
    if (currentPath.includes("/tutorials")) return "article";
    return "website";
  };
  
  return (
    <div className="flex min-h-screen">
      {/* Add Schema Markup for SEO */}
      <SchemaMarkup type={getSchemaType()} />
      
      {!isHomePage(currentPath) && <Sidebar />}
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company" element={<Company />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/community" element={<Community />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/import-content" element={<ImportContent />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
