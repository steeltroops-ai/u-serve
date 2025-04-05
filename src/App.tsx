
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import { ThemeProvider } from "./components/ThemeProvider";
import ProviderLayout from "./components/provider/ProviderLayout";
import Dashboard from "./pages/provider/Dashboard";
import ProviderServices from "./pages/provider/Services";
import Bookings from "./pages/provider/Bookings";
import Profile from "./pages/provider/Profile";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Provider messages placeholder
const Messages = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
      <p className="text-muted-foreground">
        Chat with your customers
      </p>
    </div>
    <div className="bg-card p-8 rounded-lg border border-border/30 text-center">
      <p>Messaging functionality coming soon!</p>
    </div>
  </div>
);

// Provider earnings placeholder
const Earnings = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
      <p className="text-muted-foreground">
        Track your income and payments
      </p>
    </div>
    <div className="bg-card p-8 rounded-lg border border-border/30 text-center">
      <p>Earnings tracking functionality coming soon!</p>
    </div>
  </div>
);

// Provider settings placeholder
const Settings = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">
        Manage your account settings
      </p>
    </div>
    <div className="bg-card p-8 rounded-lg border border-border/30 text-center">
      <p>Account settings functionality coming soon!</p>
    </div>
  </div>
);

const App = () => (
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="localserve-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Provider routes with layout */}
              <Route path="/provider" element={<ProviderLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="services" element={<ProviderServices />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="messages" element={<Messages />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              
              {/* Legacy route for backward compatibility */}
              <Route path="/provider/signup" element={<SignUp />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
