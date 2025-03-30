import { useState, useEffect } from "react";
import { Service } from "../pages/Services";
import { Card, CardContent } from "./ui/card";
import { Star, ArrowRight, ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";

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
      "Professional home cleaning service with eco-friendly products for homes in Johannesburg and Pretoria. Our team will leave your home spotless with attention to detail in every corner. Services include dusting, vacuuming, mopping, and bathroom/kitchen deep cleaning. Payment via SnapScan or EFT.",
  },
  {
    id: "2",
    title: "Plumbing Repair",
    category: "Home Services",
    price: 120,
    rating: 4.7,
    provider: "Quick Fix Plumbers",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Expert plumbing repair services for homes in Kampala and surrounding areas. We handle leaky faucets, clogged drains, toilet repairs, pipe replacements, and emergency plumbing issues with guaranteed satisfaction. We accept MTN Mobile Money and Airtel Money for convenient payment.",
  },
  {
    id: "3",
    title: "Pool Maintenance",
    category: "Garden & Pool",
    price: 200,
    rating: 4.9,
    provider: "Blue Waters",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Complete pool maintenance services for residential and commercial properties in Cape Town and Durban. We offer cleaning, chemical balancing, equipment repair, and regular maintenance to keep your pool crystal clear year-round. Services continue during load shedding with our backup systems.",
  },
  {
    id: "4",
    title: "Boda Boda Transport",
    category: "Boda Boda Services",
    price: 15,
    rating: 4.6,
    provider: "Swift Riders Uganda",
    image:
      "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Fast and reliable motorcycle transport services in Kampala and Entebbe. We provide quick passenger transport, package delivery, and food delivery within the city. Our riders are experienced, licensed, and know the best routes to avoid traffic. Pay easily with MTN Mobile Money.",
  },
  {
    id: "5",
    title: "Solar Panel Installation",
    category: "Solar Power",
    price: 350,
    rating: 4.7,
    provider: "SunPower Uganda",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Professional solar power installation for homes and businesses in areas with unreliable electricity across Uganda. We provide consultation, installation, and maintenance of solar panels, inverters, and batteries for sustainable energy solutions. Financing options available through Stanbic Bank.",
  },
  {
    id: "6",
    title: "Home Security Installation",
    category: "Security Services",
    price: 245,
    rating: 4.8,
    provider: "SecureHome SA",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Comprehensive home security solutions for South African homes in high-risk areas. We install alarm systems, CCTV cameras, electric fencing, and security gates with load-shedding protection. Our team provides 24/7 monitoring services and rapid response to security alerts. VodaPay and EFT accepted.",
  },
  {
    id: "7",
    title: "Mobile Money Services",
    category: "Financial Services",
    price: 20,
    rating: 4.9,
    provider: "MTN Mobile Money",
    image:
      "https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Convenient mobile money services for deposits, withdrawals, and transfers in Kampala, Jinja, and Mbarara. Our agents provide MTN Mobile Money and Airtel Money services with competitive rates and reliable service throughout Uganda. We also offer cross-border money transfers to neighboring countries.",
  },
  {
    id: "8",
    title: "Farm Equipment Repair",
    category: "Agricultural Services",
    price: 185,
    rating: 4.6,
    provider: "AgriTech Solutions",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Specialized repair and maintenance services for agricultural equipment in rural Uganda. We service tractors, irrigation systems, pumps, and other farm machinery. Our technicians provide on-site repairs to minimize downtime for your farming operations. We accept mobile money payments for convenience.",
  },
  {
    id: "9",
    title: "Garden Landscaping",
    category: "Garden & Pool",
    price: 160,
    rating: 4.7,
    provider: "Green Thumb SA",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Professional garden design and maintenance services for South African homes. We specialize in drought-resistant indigenous plants, irrigation systems, and sustainable garden designs. Our team provides regular maintenance to keep your garden beautiful year-round. SnapScan and Zapper accepted.",
  },
  {
    id: "10",
    title: "Domestic Worker Services",
    category: "Home Services",
    price: 95,
    rating: 4.8,
    provider: "HomeCare SA",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Reliable and professional domestic worker services in Johannesburg, Pretoria, and Cape Town. Our staff are thoroughly vetted, trained, and experienced in all aspects of home care. We offer daily, weekly, or monthly service plans to suit your needs. All workers are properly registered and insured.",
  },
  {
    id: "11",
    title: "Motorcycle Repair",
    category: "Boda Boda Services",
    price: 75,
    rating: 4.5,
    provider: "Boda Mechanics Uganda",
    image:
      "https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Expert motorcycle repair services specializing in boda bodas throughout Kampala. Our mechanics provide tune-ups, engine repairs, tire replacements, and regular maintenance to keep your motorcycle running safely and efficiently. We offer mobile repair services that come to your location.",
  },
  {
    id: "12",
    title: "Solar Water Heating",
    category: "Solar Power",
    price: 275,
    rating: 4.8,
    provider: "EcoSun Solutions",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Efficient solar water heating systems for homes and businesses in South Africa. Our systems provide hot water even during load shedding, saving you money on electricity bills. We offer consultation, installation, and maintenance services with financing options available through major banks.",
  },
];

interface ServicesCategoriesProps {
  onSelectService: (service: Service) => void;
  searchQuery: string;
  selectedCategory: string | null;
}

const ServicesCategories = ({
  onSelectService,
  searchQuery,
  selectedCategory,
}: ServicesCategoriesProps) => {
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(mockServices);

  useEffect(() => {
    // Filter services based on search query and category
    let results = mockServices;

    if (searchQuery) {
      results = results.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter(
        (service) => service.category === selectedCategory
      );
    }

    setFilteredServices(results);
  }, [searchQuery, selectedCategory]);

  if (filteredServices.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          No services found
        </h3>
        <p className="text-gray-500">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  // Create a map of services grouped by category
  const servicesByCategory: Record<string, Service[]> = {};

  filteredServices.forEach((service) => {
    if (!servicesByCategory[service.category]) {
      servicesByCategory[service.category] = [];
    }
    servicesByCategory[service.category].push(service);
  });

  // If we're showing a specific category or have search results, display in grid view
  if (selectedCategory || searchQuery) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onSelectService={onSelectService}
          />
        ))}
      </div>
    );
  }

  // Otherwise, display in Amazon-like category sections
  return (
    <div className="space-y-10">
      {Object.entries(servicesByCategory).map(([category, services]) => (
        <div key={category} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-xl font-bold text-primary">{category}</h2>
            <Button variant="link" className="text-accent">
              See all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onSelectService={onSelectService}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Service Card component - Amazon style
interface ServiceCardProps {
  service: Service;
  index: number;
  onSelectService: (service: Service) => void;
}

const ServiceCard = ({ service, index, onSelectService }: ServiceCardProps) => {
  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 border border-gray-200 animate-fade-up h-full flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-44 overflow-hidden relative group">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4 text-gray-500 hover:text-red-500" />
        </button>
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <span className="text-xs text-gray-500">{service.provider}</span>
        <h3 className="font-medium text-base text-primary line-clamp-2 h-12 mb-1">
          {service.title}
        </h3>
        <div className="flex items-center mb-1 mt-auto">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                {i < Math.floor(service.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-xs ml-1 text-gray-500">({service.rating})</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="font-bold text-lg">${service.price}</div>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="rounded-full h-8 w-8 p-0 bg-accent hover:bg-accent-dark"
              onClick={() => onSelectService(service)}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 border-accent text-accent hover:bg-accent/10"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Book
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesCategories;
