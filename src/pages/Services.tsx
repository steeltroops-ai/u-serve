
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesCategories from "../components/ServicesCategories";
import ServiceDetails from "../components/ServiceDetails";
import { Button } from "../components/ui/button";
import { ArrowLeft, Search, Filter } from "lucide-react";
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
            <div className="bg-primary text-white py-4">
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
                  <Button className="bg-accent hover:bg-accent-dark text-white">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            <div className="container-custom mt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left sidebar for categories - Amazon style */}
                <div className="w-full md:w-64 shrink-0 bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="font-bold text-lg mb-4 text-primary">Categories</h2>
                  <div className="space-y-2">
                    {["All Services", "Home Services", "Repairs", "Home Improvement", "Pet Services", "Automotive", "Personal Care"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category !== "All Services" ? category : null)}
                        className={`text-left w-full px-3 py-2 rounded-md transition-colors ${
                          (category === "All Services" && selectedCategory === null) || 
                          selectedCategory === category
                            ? "bg-accent/10 text-accent font-medium"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-md mb-3 text-primary">Price Range</h3>
                    <div className="space-y-2 pl-3">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-1" className="mr-2" />
                        <label htmlFor="price-1" className="text-gray-700">Under $50</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-2" className="mr-2" />
                        <label htmlFor="price-2" className="text-gray-700">$50 to $100</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-3" className="mr-2" />
                        <label htmlFor="price-3" className="text-gray-700">$100 to $200</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-4" className="mr-2" />
                        <label htmlFor="price-4" className="text-gray-700">$200 & Above</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <h3 className="font-bold text-md mb-3 text-primary">Avg. Customer Review</h3>
                    <div className="space-y-2 pl-3">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <div className="flex text-yellow-400 mr-2">
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
                </div>

                {/* Main content - Services grid with Amazon-like layout */}
                <div className="flex-1">
                  <div className="flex justify-between items-center bg-gray-100 p-3 mb-4 rounded-md">
                    <div>
                      <span className="font-medium">
                        {selectedCategory || "All Services"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">Sort by:</span>
                      <select className="bg-white border rounded-md px-2 py-1 text-sm">
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Avg. Customer Review</option>
                        <option>Newest Arrivals</option>
                      </select>
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
