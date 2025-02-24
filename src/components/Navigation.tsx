
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-primary/90 backdrop-blur-md"
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              UServe
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-accent transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-white hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-white hover:text-accent transition-colors">
              About
            </a>
            <Button variant="ghost" className="text-white hover:text-accent">
              Sign In
            </Button>
            <Button className="bg-primary-dark hover:bg-primary-dark/90 text-white">
              Get Started
            </Button>
          </div>

          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
