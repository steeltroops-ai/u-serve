
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
    <div className="relative bg-primary py-16 md:py-28">
      <div className="container-custom relative z-10 flex items-center">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Scale your professional workforce with freelancers
          </h1>
          
          {/* Search Bar - Fiverr Style */}
          <form onSubmit={handleSearch} className="relative flex max-w-xl mx-auto mt-8 rounded-md overflow-hidden bg-white shadow-lg">
            <div className="relative flex-grow">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services..."
                className="pl-4 pr-10 py-7 border-0 w-full text-base focus-visible:ring-0"
              />
            </div>
            <Button 
              type="submit"
              className="rounded-none bg-accent hover:bg-accent-dark text-white h-auto py-7 px-8"
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
