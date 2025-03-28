
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
      isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              UServe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="font-medium text-slate-300 hover:text-white transition-colors">
              Services
            </Link>
            <a href="#how-it-works" className="font-medium text-slate-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#about" className="font-medium text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <Button variant="ghost" className="font-medium text-slate-300 hover:text-white" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
            <Button className="bg-slate-700 hover:bg-slate-600 text-white rounded-md px-6" onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none" 
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
          <div className="md:hidden bg-slate-800 shadow-lg rounded-b-xl animate-fade-down">
            <div className="flex flex-col space-y-4 p-6">
              <Link to="/services" className="font-medium text-slate-300 hover:text-white transition-colors py-2">
                Services
              </Link>
              <a href="#how-it-works" className="font-medium text-slate-300 hover:text-white transition-colors py-2">
                How It Works
              </a>
              <a href="#about" className="font-medium text-slate-300 hover:text-white transition-colors py-2">
                About
              </a>
              <Button variant="ghost" className="justify-start font-medium text-slate-300" onClick={() => navigate("/signin")}>
                Sign In
              </Button>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white w-full rounded-md" onClick={() => navigate("/signup")}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
