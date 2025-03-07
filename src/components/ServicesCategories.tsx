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
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Professional home cleaning service with eco-friendly products. Our team will leave your home spotless with attention to detail in every corner. Services include dusting, vacuuming, mopping, and bathroom/kitchen deep cleaning."
  },
  {
    id: "2",
    title: "Plumbing Repair",
    category: "Repairs",
    price: 120,
    rating: 4.7,
    provider: "Quick Fix Plumbers",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Expert plumbing repair services for all your needs. We handle leaky faucets, clogged drains, toilet repairs, pipe replacements, and emergency plumbing issues with guaranteed satisfaction."
  },
  {
    id: "3",
    title: "Professional Landscaping",
    category: "Home Improvement",
    price: 200,
    rating: 4.9,
    provider: "Green Gardens",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Transform your outdoor space with our professional landscaping services. We offer garden design, lawn care, tree trimming, flower bed installation, and ongoing maintenance to keep your yard beautiful year-round."
  },
  {
    id: "4",
    title: "Dog Walking & Pet Care",
    category: "Pet Services",
    price: 30,
    rating: 4.6,
    provider: "Happy Tails",
    image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Reliable dog walking and pet care services. We provide daily walks, feeding, medication administration, and playtime for your furry friends. Our pet specialists are trained and passionate about animal care."
  },
  {
    id: "5",
    title: "Electrical Installation",
    category: "Home Services",
    price: 150,
    rating: 4.7,
    provider: "PowerUp Electric",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Professional electrical installation and repair services. Our licensed electricians can install new fixtures, repair faulty wiring, upgrade electrical panels, and provide safety inspections for your home or business."
  },
  {
    id: "6",
    title: "Mobile Car Wash",
    category: "Automotive",
    price: 45,
    rating: 4.5,
    provider: "Sparkle Auto",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Convenient mobile car wash that comes to your location. Services include exterior wash, waxing, interior vacuuming, dashboard cleaning, and tire shine. Eco-friendly products and professional results guaranteed."
  },
  {
    id: "7",
    title: "Yoga Instructor",
    category: "Personal Care",
    price: 60,
    rating: 4.9,
    provider: "Peaceful Mind Yoga",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Private yoga sessions tailored to your needs and skill level. Our certified instructors specialize in vinyasa, hatha, and restorative yoga. Sessions focus on flexibility, strength building, and mindfulness techniques."
  },
  {
    id: "8",
    title: "Computer Repair",
    category: "Repairs",
    price: 85,
    rating: 4.6,
    provider: "Tech Wizards",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fast and reliable computer repair services. We diagnose and fix hardware issues, remove viruses, recover data, upgrade components, and optimize performance for laptops and desktop computers."
  },
];

interface ServicesCategoriesProps {
  onSelectService: (service: Service) => void;
  searchQuery: string;
  selectedCategory: string | null;
}

const ServicesCategories = ({ onSelectService, searchQuery, selectedCategory }: ServicesCategoriesProps) => {
  const [filteredServices, setFilteredServices] = useState<Service[]>(mockServices);
  
  useEffect(() => {
    // Filter services based on search query and category
    let results = mockServices;
    
    if (searchQuery) {
      results = results.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      results = results.filter(service => service.category === selectedCategory);
    }
    
    setFilteredServices(results);
  }, [searchQuery, selectedCategory]);

  if (filteredServices.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No services found</h3>
        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    );
  }

  // Create a map of services grouped by category
  const servicesByCategory: Record<string, Service[]> = {};
  
  filteredServices.forEach(service => {
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
