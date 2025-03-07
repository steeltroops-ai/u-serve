
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesListing from "../components/ServicesListing";
import ServiceDetails from "../components/ServiceDetails";
import { Button } from "../components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "../components/ui/input";

export interface Service {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  provider: string;
  image: string;
  description: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navigation />
      <div className="container-custom pt-24 pb-12">
        {selectedService ? (
          <div className="animate-fade-up">
            <Button 
              variant="outline" 
              className="mb-6 flex items-center gap-2 bg-white hover:bg-accent/5 border-border/50 shadow-sm"
              onClick={() => setSelectedService(null)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
            <ServiceDetails service={selectedService} />
          </div>
        ) : (
          <>
            <div className="text-center mb-12 animate-fade-down">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Services</span>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Find Local Services</h1>
              <p className="text-secondary max-w-2xl mx-auto">
                Browse through our selection of quality local services and connect with trusted providers
              </p>
              <div className="max-w-md mx-auto mt-6 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                  <Search className="h-5 w-5" />
                </div>
                <Input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 py-6 border-border/50 bg-white shadow-sm rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <ServicesListing onSelectService={setSelectedService} />
          </>
        )}
      </div>
    </main>
  );
};

export default Services;
