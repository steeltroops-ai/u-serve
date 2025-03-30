import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  ChevronDown,
  MapPin,
  Settings,
  MessageSquare,
  LogOut,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navigation() {
  // Mock authentication state - in a real app, this would come from your auth context/provider
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("Kampala");
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
      } border-b border-border/10 backdrop-blur-sm`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 py-2">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-accent flex items-center group"
            >
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                LocalServe
              </span>
              <span className="ml-1 text-xs text-foreground/60 font-normal mt-1">
                beta
              </span>
            </Link>

            {/* Location Selector */}
            <div className="hidden md:flex items-center text-sm text-foreground/80">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{currentLocation}</span>
            </div>

            {/* Expandable Search */}
            <div className="relative">
              {showSearch ? (
                <form
                  onSubmit={handleSearch}
                  className="relative transition-all duration-300 ease-in-out"
                >
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services..."
                    className="netflix-search w-[200px] md:w-[350px] h-10 text-sm animate-expand-width"
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                  />
                  <button
                    type="submit"
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                  >
                    <Search className="h-4 w-4" />
                  </button>
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
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Main Navigation - Desktop Only - Hidden when search is open */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation moved to right side */}
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links - Desktop Only - Hidden when search is open */}
            {!showSearch && (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/services"
                  className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors relative group"
                >
                  Find Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors relative group"
                >
                  How It Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors p-0 h-auto relative group"
                    >
                      For Providers <ChevronDown className="ml-1 h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 p-2 animate-scale-up"
                  >
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Provider Options</p>
                        <p className="text-xs text-muted-foreground">
                          Manage your service business
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => navigate("/provider/signup")}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Become a Provider
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/provider/dashboard")}
                      className="cursor-pointer"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Provider Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => navigate("/provider/resources")}
                      className="cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Provider Resources
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* Notifications - Desktop Only */}
            <div className="hidden md:flex items-center">
              <button className="relative p-2 rounded-full hover:bg-accent/10 transition-all duration-200">
                <Bell className="h-5 w-5 text-foreground/80 hover:text-foreground transition-colors" />
                <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              </button>
            </div>

            {/* User Profile Dropdown - Desktop Only */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-1 rounded-full hover:bg-accent/10 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Avatar className="h-8 w-8 border border-border/30 hover:border-accent/50 transition-all">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-primary-light to-primary text-white text-xs">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 text-foreground/70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 p-2 animate-scale-up"
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Account</p>
                      <p className="text-xs text-muted-foreground">
                        Manage your account
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => navigate("/account/settings")}
                      className="cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/account/services")}
                      className="cursor-pointer"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>My Services</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/account/favorites")}
                      className="cursor-pointer"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Saved Services</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate("/account/messages")}
                      className="cursor-pointer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigate("/signin")}
                    className="cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Sign In</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigate("/signup")}
                    className="cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Sign Up</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
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
          <div className="md:hidden bg-card/95 backdrop-blur-sm shadow-lg rounded-b-md animate-fade-down border border-border/20">
            <div className="flex flex-col space-y-4 p-6">
              <div className="flex items-center text-sm text-foreground/80 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{currentLocation}</span>
              </div>
              <Link
                to="/services"
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Services
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="py-2">
                <h3 className="text-sm font-medium mb-2">For Providers</h3>
                <div className="ml-2 flex flex-col space-y-2">
                  <Link
                    to="/provider/signup"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Become a Provider
                  </Link>
                  <Link
                    to="/provider/dashboard"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Provider Dashboard
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <h3 className="text-sm font-medium mb-2">Account</h3>
                <div className="ml-2 flex flex-col space-y-2">
                  <Link
                    to="/account/settings"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Link>
                  <Link
                    to="/account/services"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    My Services
                  </Link>
                  <Link
                    to="/account/favorites"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Saved Services
                  </Link>
                  <Link
                    to="/account/messages"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Messages
                  </Link>
                </div>
              </div>
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  className="justify-center text-sm font-medium text-foreground/90 hover:text-foreground w-full flex items-center"
                  onClick={() => {
                    navigate("/signin");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  className="netflix-button-primary justify-center w-full text-sm flex items-center"
                  onClick={() => {
                    navigate("/signup");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  className="justify-center text-sm font-medium text-destructive hover:text-destructive w-full flex items-center mt-2"
                  onClick={() => {
                    // Handle logout
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
