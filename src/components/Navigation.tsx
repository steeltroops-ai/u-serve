
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-sm" : "bg-primary"
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              UServe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-accent transition-colors`}>
              Explore
            </Link>
            <a href="#how-it-works" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-accent transition-colors`}>
              How It Works
            </a>
            <div className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-accent transition-colors flex items-center cursor-pointer`}>
              <Globe className="h-4 w-4 mr-1" />
              English
            </div>
            <Button variant="ghost" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => navigate("/signin")}>
              Sign In
            </Button>
            <Button className={`${isScrolled ? 'bg-accent' : 'bg-white text-primary'} hover:bg-accent hover:text-white transition-colors`} onClick={() => navigate("/signup")}>
              Join
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'} focus:outline-none`} 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-xl animate-fade-down">
            <div className="flex flex-col space-y-4 p-6">
              <Link to="/services" className="font-medium text-gray-800 hover:text-accent transition-colors py-2">
                Explore
              </Link>
              <a href="#how-it-works" className="font-medium text-gray-800 hover:text-accent transition-colors py-2">
                How It Works
              </a>
              <div className="font-medium text-gray-800 hover:text-accent transition-colors py-2 flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                English
              </div>
              <Button variant="ghost" className="justify-start font-medium" onClick={() => navigate("/signin")}>
                Sign In
              </Button>
              <Button className="bg-accent hover:bg-accent-dark text-white w-full" onClick={() => navigate("/signup")}>
                Join
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
