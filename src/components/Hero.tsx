
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-[90vh] pt-20 flex items-center justify-center section-padding bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-down">
          <span className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Premium Local Services Marketplace
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Local Services, 
            <span className="block text-accent">Instantly Connected</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Connect with trusted local service providers for all your needs. From home repairs to personal care, find the perfect match in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="hero-button bg-accent hover:bg-accent-dark text-white w-full sm:w-auto">
              <Link to="/services" className="flex items-center">
                Find Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="hero-button border-accent text-accent hover:bg-accent/5 w-full sm:w-auto">
              Become a Provider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
