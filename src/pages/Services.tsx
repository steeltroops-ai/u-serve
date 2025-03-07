
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesCategories from "../components/ServicesCategories";
import ServiceDetails from "../components/ServiceDetails";
import { Button } from "../components/ui/button";
import { ArrowLeft, Search, Filter, ShoppingBag } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  const handlePriceFilterChange = (value: string) => {
    if (priceFilters.includes(value)) {
      setPriceFilters(priceFilters.filter(filter => filter !== value));
    } else {
      setPriceFilters([...priceFilters, value]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        {selectedService ? (
          <div className="container-custom animate-fade-up">
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
            {/* Amazon-like header with search */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-5">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <Search className="h-5 w-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search for services..."
                      className="pl-10 py-6 w-full text-black rounded-md border-0 focus-visible:ring-accent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button className="bg-accent hover:bg-accent-dark text-white py-6">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            <div className="container-custom mt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left sidebar for categories - Amazon style */}
                <div className="w-full md:w-64 shrink-0 material-card p-5">
                  <h2 className="font-bold text-lg mb-4 text-primary">Browse Services</h2>
                  <div className="space-y-1">
                    {["All Services", "Home Services", "Repairs", "Home Improvement", "Pet Services", "Automotive", "Personal Care"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category !== "All Services" ? category : null)}
                        className={`text-left w-full px-3 py-2.5 rounded-md transition-colors ${
                          (category === "All Services" && selectedCategory === null) || 
                          selectedCategory === category
                            ? "bg-primary text-white font-medium"
                            : "hover:bg-gray-100 text-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-md mb-3 text-primary flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Price Range
                    </h3>
                    <div className="space-y-2 pl-3">
                      {[
                        { id: "price-1", label: "Under $50", value: "under-50" },
                        { id: "price-2", label: "$50 to $100", value: "50-100" },
                        { id: "price-3", label: "$100 to $200", value: "100-200" },
                        { id: "price-4", label: "$200 & Above", value: "over-200" }
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={option.id} 
                            className="mr-2 accent-accent w-4 h-4"
                            checked={priceFilters.includes(option.value)}
                            onChange={() => handlePriceFilterChange(option.value)} 
                          />
                          <label htmlFor={option.id} className="text-gray-700 cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-md mb-3 text-primary">Avg. Customer Review</h3>
                    <div className="space-y-2 pl-3">
                      {[4, 3, 2, 1].map((rating) => (
                        <div 
                          key={rating} 
                          className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
                          onClick={() => setRatingFilter(rating === ratingFilter ? null : rating)}
                        >
                          <div className={`flex text-yellow-400 mr-2 ${rating === ratingFilter ? "font-bold" : ""}`}>
                            {Array(5).fill(0).map((_, i) => (
                              <span key={i} className="text-lg">
                                {i < rating ? "★" : "☆"}
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-700">& Up</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-md mb-3 text-primary">Service Type</h3>
                    <div className="space-y-2 pl-3">
                      <div className="flex items-center">
                        <input type="checkbox" id="in-person" className="mr-2 accent-accent w-4 h-4" />
                        <label htmlFor="in-person" className="text-gray-700 cursor-pointer">In-person</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="virtual" className="mr-2 accent-accent w-4 h-4" />
                        <label htmlFor="virtual" className="text-gray-700 cursor-pointer">Virtual</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Apply Filters
                    </Button>
                  </div>
                </div>

                {/* Main content - Services grid with Amazon-like layout */}
                <div className="flex-1">
                  <div className="flex justify-between items-center bg-secondary/5 p-3 mb-4 rounded-md">
                    <div>
                      <span className="font-medium text-primary">
                        {selectedCategory || "All Services"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-sm hidden md:inline">Sort by:</span>
                      <select className="bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-accent">
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Avg. Customer Review</option>
                        <option>Newest Arrivals</option>
                      </select>
                      <Button variant="outline" size="sm" className="md:hidden">
                        <Filter className="h-4 w-4 mr-1" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-4 mb-4 rounded-md border border-gray-100 shadow-sm">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 text-accent mr-2" />
                      <span className="text-sm text-gray-600">
                        Top-rated service providers in your area, ready to help with your needs
                      </span>
                    </div>
                  </div>

                  <ServicesCategories 
                    onSelectService={setSelectedService} 
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Services;
