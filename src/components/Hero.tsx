
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-[90vh] pt-20 flex items-center justify-center section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center space-y-8 animate-fade-down">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent-dark text-sm font-medium">
            Local Services Marketplace
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Find Local Services, 
            <span className="block text-gradient">Instantly Connected</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Connect with trusted local service providers for all your needs. From home repairs to personal care, find the perfect match in minutes.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Find Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Become a Provider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
