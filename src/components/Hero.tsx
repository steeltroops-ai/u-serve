
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
    <div className="relative overflow-hidden bg-primary">
      {/* Background with people images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow-lg translate-x-1/4 -translate-y-1/3">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/4 right-0 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white shadow-lg translate-x-1/3">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white shadow-lg -translate-y-1/4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow-lg translate-y-1/4">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-24 flex items-center min-h-[70vh]">
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
