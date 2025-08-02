import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import IdeaDetail from "./pages/IdeaDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

console.log('🚀 App.tsx: Initializing App component');

const queryClient = new QueryClient();
console.log('✅ App.tsx: QueryClient created');

const App = () => {
  console.log('🎯 App.tsx: App component rendering');
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/category/:categoryName" element={<Category />} />
              <Route path="/idea/:ideaTitle" element={<IdeaDetail />} />
              <Route path="/about" element={<About />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error('❌ App.tsx: Error rendering App component:', error);
    return (
      <div style={{ 
        color: 'red', 
        fontSize: '18px', 
        padding: '20px', 
        backgroundColor: '#ffe6e6',
        border: '2px solid red',
        margin: '20px'
      }}>
        <h2>APP COMPONENT ERROR</h2>
        <p>Error: {error.message}</p>
        <p>Stack: {error.stack}</p>
      </div>
    );
  }
};

export default App;
