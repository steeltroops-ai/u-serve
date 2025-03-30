import { useState, useEffect } from "react";
import { Service } from "../pages/Services";
import { Card, CardContent } from "./ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

// Mock data for services
const mockServices: Service[] = [
  {
    id: "1",
    title: "Home Cleaning Service",
    category: "Home Services",
    price: 75,
    rating: 4.8,
    provider: "CleanHome Pro",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Professional home cleaning service with eco-friendly products for homes in Johannesburg and Pretoria. Our team will leave your home spotless with attention to detail in every corner. Payment via SnapScan or EFT.",
  },
  {
    id: "2",
    title: "Home Security Installation",
    category: "Security Services",
    price: 249,
    rating: 4.9,
    provider: "SecureHome SA",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Comprehensive home security solutions for South African homes in high-risk areas. We install alarm systems, CCTV cameras, electric fencing, and security gates with load-shedding protection. VodaPay and EFT accepted.",
  },
  {
    id: "3",
    title: "Boda Boda Transport",
    category: "Boda Boda Services",
    price: 15,
    rating: 4.8,
    provider: "Swift Riders Uganda",
    image:
      "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Fast and reliable motorcycle transport services in Kampala and Entebbe. We provide quick passenger transport, package delivery, and food delivery within the city. Pay easily with MTN Mobile Money.",
  },
  {
    id: "4",
    title: "Solar Panel Installation",
    category: "Solar Power",
    price: 350,
    rating: 4.7,
    provider: "SunPower Uganda",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Professional solar power installation for homes and businesses in areas with unreliable electricity across Uganda. We provide consultation, installation, and maintenance of solar panels, inverters, and batteries.",
  },
  {
    id: "5",
    title: "Pool Maintenance",
    category: "Garden & Pool",
    price: 130,
    rating: 4.9,
    provider: "Blue Waters",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Complete pool maintenance services for residential and commercial properties in Cape Town and Durban. We offer cleaning, chemical balancing, equipment repair, and regular maintenance to keep your pool crystal clear year-round.",
  },
  {
    id: "6",
    title: "Mobile Money Services",
    category: "Financial Services",
    price: 20,
    rating: 4.8,
    provider: "MTN Mobile Money",
    image:
      "https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Convenient mobile money services for deposits, withdrawals, and transfers in Kampala, Jinja, and Mbarara. Our agents provide MTN Mobile Money and Airtel Money services with competitive rates throughout Uganda.",
  },
  {
    id: "7",
    title: "Farm Equipment Repair",
    category: "Agricultural Services",
    price: 185,
    rating: 4.6,
    provider: "AgriTech Solutions",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Specialized repair and maintenance services for agricultural equipment in rural Uganda. We service tractors, irrigation systems, pumps, and other farm machinery. Our technicians provide on-site repairs to minimize downtime.",
  },
  {
    id: "8",
    title: "Domestic Worker Services",
    category: "Home Services",
    price: 95,
    rating: 4.8,
    provider: "HomeCare SA",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Reliable and professional domestic worker services in Johannesburg, Pretoria, and Cape Town. Our staff are thoroughly vetted, trained, and experienced in all aspects of home care. All workers are properly registered and insured.",
  },
];

interface ServicesListingProps {
  onSelectService: (service: Service) => void;
}

const ServicesListing = ({ onSelectService }: ServicesListingProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(mockServices);

  useEffect(() => {
    const results = mockServices.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(results);
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <div className="relative max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border-[#40E0D0] focus:ring-[#40E0D0] focus:border-[#40E0D0]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto p-2">
        {filteredServices.map((service, index) => (
          <Card
            key={service.id}
            className="hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-[#333333] line-clamp-1">
                  {service.title}
                </h3>
                <span className="text-sm font-medium bg-[#40E0D0]/10 text-[#40E0D0] px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                <span className="text-sm ml-1">{service.rating}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">
                  {service.provider}
                </span>
              </div>
              <p className="text-[#333333] line-clamp-2 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#333333]">
                  ${service.price}
                </span>
                <Button
                  className="bg-[#0047AB] hover:bg-[#003380] text-white"
                  onClick={() => onSelectService(service)}
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesListing;
