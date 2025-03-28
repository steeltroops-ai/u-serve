
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Bell, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { state: sidebarState, toggleSidebar } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-md" : "bg-slate-900"
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {/* Sidebar trigger for desktop */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white md:flex hidden transition-all duration-200 hover:bg-slate-800"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 bg-slate-800 border-slate-700">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-slate-700">
                    <Link to="/" className="text-xl font-bold text-white">
                      UServe
                    </Link>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="space-y-1">
                      <Link 
                        to="/services" 
                        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Services
                      </Link>
                      <a 
                        href="#how-it-works" 
                        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded-md transition-colors"
                      >
                        How It Works
                      </a>
                      <a 
                        href="#about" 
                        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-700 rounded-md transition-colors"
                      >
                        About
                      </a>
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-700">
                    <div className="flex gap-2">
                      <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" onClick={() => navigate("/signin")}>
                        Sign In
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white" onClick={() => navigate("/signup")}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link to="/" className="text-xl font-bold text-white">
              UServe
            </Link>
          </div>

          {/* Center search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            </div>
          </div>

          {/* Right side icons and buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hidden md:flex hover:bg-slate-800 transition-all duration-200"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hidden md:flex hover:bg-slate-800 transition-all duration-200"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-500 text-white hidden md:flex transition-all duration-200" 
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
