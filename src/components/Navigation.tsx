import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Bell, User, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  return (
    <header
      className={`netflix-nav ${
        isScrolled ? "netflix-nav-scrolled" : "netflix-nav-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 py-2">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-accent">
              UServe
            </Link>

            {/* Search - Moved near logo */}
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services..."
                  className="netflix-search w-[200px] md:w-[250px] h-9 text-sm"
                  autoFocus
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                className="p-2 text-foreground/90 hover:text-foreground focus:outline-none"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Main Navigation - Desktop Only - Moved to dropdown */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation links moved to dropdown */}
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Navigation Menu Dropdown - Desktop Only */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2" aria-label="Menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/services")}>
                    Services
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/")}>
                    Categories
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/how-it-works")}>
                    How It Works
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Notifications - Desktop Only */}
            <button className="hidden md:block p-2 text-foreground/90 hover:text-foreground focus:outline-none">
              <Bell className="h-5 w-5" />
            </button>

            {/* User Profile Dropdown - Desktop Only */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <User className="h-5 w-5 mr-1" />
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/signin")}>
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/signup")}>
                    Sign Up
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground focus:outline-none"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card shadow-lg rounded-b-md animate-fade-down">
            <div className="flex flex-col space-y-4 p-6">
              <Link
                to="/services"
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
              >
                Services
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
              >
                Categories
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
              >
                How It Works
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  className="justify-center text-sm font-medium text-foreground/90 hover:text-foreground w-full"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </Button>
                <Button
                  className="netflix-button-primary justify-center w-full text-sm"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
