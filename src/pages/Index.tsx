
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedServices from "../components/FeaturedServices";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, Search, Heart, Clock, Tag, MessageSquare, Settings } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only show sidebar after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex flex-col bg-slate-900 text-white w-full">
        <Navigation />
        
        <div className="flex mt-16 flex-1 relative">
          {/* Desktop Sidebar - Only render after mount */}
          {mounted && (
            <Sidebar 
              variant="inset" 
              collapsible="icon" 
              className="hidden md:flex transition-all duration-300 ease-in-out z-30"
            >
              <SidebarContent className="animate-fade-in">
                <SidebarGroup>
                  <SidebarGroupLabel>Browse</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Home">
                          <Home className="h-5 w-5" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Search">
                          <Search className="h-5 w-5" />
                          <span>Search</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Favorites">
                          <Heart className="h-5 w-5" />
                          <span>Favorites</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup>
                  <SidebarGroupLabel>Your Services</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Recent">
                          <Clock className="h-5 w-5" />
                          <span>Recent</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Offers">
                          <Tag className="h-5 w-5" />
                          <span>Offers</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Messages">
                          <MessageSquare className="h-5 w-5" />
                          <span>Messages</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup>
                  <SidebarGroupLabel>Settings</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Settings">
                          <Settings className="h-5 w-5" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
          )}
          
          <main className="flex-grow transition-all duration-300">
            <Hero />
            <Categories />
            <FeaturedServices />
            <HowItWorks />
            <Testimonials />
          </main>
        </div>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
