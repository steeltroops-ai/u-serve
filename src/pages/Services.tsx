
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesListing from "../components/ServicesListing";
import ServiceDetails from "../components/ServiceDetails";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navigation />
      <div className="container-custom pt-20 pb-10">
        {selectedService ? (
          <div className="animate-fade-up">
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={() => setSelectedService(null)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
            <ServiceDetails service={selectedService} />
          </div>
        ) : (
          <>
            <div className="text-center mb-8 animate-fade-down">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find Local Services</h1>
              <p className="text-secondary max-w-2xl mx-auto">
                Browse through our selection of quality local services and connect with trusted providers
              </p>
            </div>
            <ServicesListing onSelectService={setSelectedService} />
          </>
        )}
      </div>
    </main>
  );
};

export default Services;
