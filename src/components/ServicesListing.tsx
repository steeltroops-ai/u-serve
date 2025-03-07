
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

interface ServicesListingProps {
  onSelectService: (service: Service) => void;
}

const ServicesListing = ({ onSelectService }: ServicesListingProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState<Service[]>(mockServices);
  
  useEffect(() => {
    const results = mockServices.filter(service => 
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
                <h3 className="font-semibold text-lg text-[#333333] line-clamp-1">{service.title}</h3>
                <span className="text-sm font-medium bg-[#40E0D0]/10 text-[#40E0D0] px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                <span className="text-sm ml-1">{service.rating}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{service.provider}</span>
              </div>
              <p className="text-[#333333] line-clamp-2 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#333333]">${service.price}</span>
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
