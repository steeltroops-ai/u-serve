import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesCategories from "../components/ServicesCategories";
import ServiceDetails from "../components/ServiceDetails";
import { Button } from "../components/ui/button";
import { ArrowLeft, Search, Filter, ShoppingBag, Star } from "lucide-react";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

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
      setPriceFilters(priceFilters.filter((filter) => filter !== value));
    } else {
      setPriceFilters([...priceFilters, value]);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
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
            {/* Header with search and categories dropdown */}
            <div className="bg-gradient-to-b from-background to-card/30 text-foreground py-5">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Search className="h-5 w-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search for services..."
                      className="pl-10 py-6 w-full bg-card/50 text-foreground rounded-md border-border/50 focus-visible:ring-accent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="bg-card text-foreground border-border/50 hover:bg-card/80 py-6"
                        >
                          <Filter className="mr-2 h-4 w-4" />
                          Categories
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setSelectedCategory(null)}
                          className={
                            selectedCategory === null
                              ? "bg-primary/10 font-medium"
                              : ""
                          }
                        >
                          All Services
                        </DropdownMenuItem>
                        {[
                          "Home Services",
                          "Automotive",
                          "Security Services",
                          "Garden & Pool",
                          "Technical Support",
                          "Boda Boda Services",
                          "Agricultural Services",
                          "Solar Power",
                          "Financial Services",
                        ].map((category) => (
                          <DropdownMenuItem
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={
                              selectedCategory === category
                                ? "bg-primary/10 font-medium"
                                : ""
                            }
                          >
                            {category}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="netflix-button-primary py-6">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-custom mt-6">
              <div className="flex flex-col gap-6">
                {/* Filters in a horizontal bar */}
                <div className="bg-card/80 rounded-lg shadow-md border border-border/20 p-4 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center">
                    <span className="font-medium text-foreground mr-2">
                      Filters:
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 border-dashed border-border/50 bg-card/50 text-foreground flex items-center gap-1"
                        >
                          <Filter className="h-3.5 w-3.5" />
                          <span>Price</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-3" align="start">
                        <div className="space-y-2">
                          {[
                            {
                              id: "price-1",
                              label: "Under $50",
                              value: "under-50",
                            },
                            {
                              id: "price-2",
                              label: "$50 to $100",
                              value: "50-100",
                            },
                            {
                              id: "price-3",
                              label: "$100 to $200",
                              value: "100-200",
                            },
                            {
                              id: "price-4",
                              label: "$200 & Above",
                              value: "over-200",
                            },
                          ].map((option) => (
                            <div key={option.id} className="flex items-center">
                              <input
                                type="checkbox"
                                id={option.id}
                                className="mr-2 accent-accent w-4 h-4"
                                checked={priceFilters.includes(option.value)}
                                onChange={() =>
                                  handlePriceFilterChange(option.value)
                                }
                              />
                              <label
                                htmlFor={option.id}
                                className="text-foreground cursor-pointer"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 border-dashed border-border/50 bg-card/50 text-foreground flex items-center gap-1"
                        >
                          <Star className="h-3.5 w-3.5" />
                          <span>Rating</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-3" align="start">
                        <div className="space-y-2">
                          {[4, 3, 2, 1].map((rating) => (
                            <div
                              key={rating}
                              className="flex items-center cursor-pointer hover:bg-card/50 p-1 rounded"
                              onClick={() =>
                                setRatingFilter(
                                  rating === ratingFilter ? null : rating
                                )
                              }
                            >
                              <div
                                className={`flex text-yellow-400 mr-2 ${
                                  rating === ratingFilter ? "font-bold" : ""
                                }`}
                              >
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <span key={i} className="text-lg">
                                      {i < rating ? "★" : "☆"}
                                    </span>
                                  ))}
                              </div>
                              <span className="text-foreground">& Up</span>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 border-dashed border-border/50 bg-card/50 text-foreground flex items-center gap-1"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          <span>Service Type</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-3" align="start">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="in-person"
                              className="mr-2 accent-accent w-4 h-4"
                            />
                            <label
                              htmlFor="in-person"
                              className="text-gray-700 cursor-pointer"
                            >
                              In-person
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="virtual"
                              className="mr-2 accent-accent w-4 h-4"
                            />
                            <label
                              htmlFor="virtual"
                              className="text-gray-700 cursor-pointer"
                            >
                              Virtual
                            </label>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary-dark text-white"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>

                {/* Main content - Services grid with clean layout */}
                <div className="w-full">
                  <div className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-sm">
                    <div>
                      <span className="font-medium text-primary">
                        {selectedCategory || "All Services"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-sm hidden md:inline">
                        Sort by:
                      </span>
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
                        Top-rated service providers in your area, ready to help
                        with your needs
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
