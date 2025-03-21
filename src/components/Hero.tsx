
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const backgroundImages = [
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049984/bg-hero-1-1792-x2.png",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x2.png",
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x2.png",
  ];

  const heroContent = [
    {
      title: "Find the perfect freelance services for your business",
      person: "Andrea, Designer",
    },
    {
      title: "Build your brand and grow your business",
      person: "Moon, Developer",
    },
    {
      title: "Engage your audience with professional content",
      person: "Ritika, Marketing Expert",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Carousel Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
        ))}
      </div>
      
      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="max-w-xl text-left animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
              {heroContent[currentSlide].title}
            </h1>
            <p className="text-sm text-slate-600 mb-6">
              <span className="text-slate-700 font-medium">
                {heroContent[currentSlide].person}
              </span>
            </p>
            
            {/* Search Bar - Fiverr Style */}
            <form onSubmit={handleSearch} className="flex w-full">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services..."
                  className="pl-4 pr-10 py-6 rounded-l-md border-r-0 shadow-md w-full text-base focus-visible:ring-slate-400"
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="rounded-r-md bg-slate-800 hover:bg-slate-700 text-white h-auto py-6 px-6"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
            
            {/* Popular Searches */}
            <div className="text-xs text-slate-700 pt-4">
              <span className="font-medium mr-2">Popular:</span>
              {["Website Design", "Logo Design", "Content Writing", "Video Editing"].map((term, i) => (
                <span 
                  key={i} 
                  className="inline-block m-1 px-2 py-1 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 transition-colors"
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
      
      {/* Improved Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white scale-110 w-8" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
