
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-[85vh] relative overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find the perfect <span className="text-accent">service</span> for your needs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Connect with skilled service providers from around the world. Get your project done quickly and efficiently.
          </p>
          
          {/* Search Bar - Fiverr Style */}
          <form onSubmit={handleSearch} className="relative flex max-w-2xl mx-auto mt-8">
            <div className="relative flex-grow">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services..."
                className="pl-4 pr-10 py-7 rounded-l-full border-0 shadow-lg w-full text-lg focus-visible:ring-accent"
              />
            </div>
            <Button 
              type="submit"
              size="lg" 
              className="rounded-r-full bg-accent hover:bg-accent-dark text-white h-auto py-7 px-8"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
          
          {/* Popular Searches */}
          <div className="text-sm text-white/90 pt-4">
            <span className="font-medium mr-2">Popular:</span>
            {["Website Design", "Logo Design", "Content Writing", "Video Editing", "Home Repair"].map((term, i) => (
              <span 
                key={i} 
                className="inline-block m-1 px-3 py-1 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => {
                  setSearchQuery(term);
                  navigate(`/services?search=${encodeURIComponent(term)}`);
                }}
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
