
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

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
  
  // Categories for the top bar
  const categories = ["Graphics & Design", "Digital Marketing", "Programming", "Video & Animation", "Writing"];

  return (
    <div className="bg-slate-900 min-h-[600px] relative overflow-hidden">
      {/* Dark overlay for the entire section */}
      <div className="absolute inset-0 bg-slate-900/90 z-0"></div>
      
      {/* Top categories bar similar to Steam */}
      <div className="relative z-10 border-b border-slate-700">
        <div className="container-custom py-2">
          <div className="flex items-center space-x-6 overflow-x-auto scrollbar-none py-2">
            {categories.map((category, index) => (
              <button 
                key={index}
                className="text-slate-300 whitespace-nowrap hover:text-white transition-colors text-sm font-medium"
                onClick={() => navigate(`/services?category=${encodeURIComponent(category)}`)}
              >
                {category}
              </button>
            ))}
            <button className="text-slate-300 hover:text-white transition-colors">
              <span className="flex items-center justify-center w-6 h-6 bg-slate-700 rounded-full">+</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main hero content */}
      <div className="container-custom relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left side - Main featured service */}
          <div className="lg:col-span-2 overflow-hidden rounded-xl relative">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-video relative transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                
                {/* Slide content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full md:w-2/3">
                  <h1 className="text-white text-xl md:text-3xl font-bold mb-2">
                    {heroContent[currentSlide].title}
                  </h1>
                  <p className="text-slate-300 text-sm mb-4">
                    {heroContent[currentSlide].person}
                  </p>
                  
                  {/* Improved Search Bar */}
                  <form onSubmit={handleSearch} className="flex w-full">
                    <div className="relative flex-grow">
                      <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for services..."
                        className="h-10 bg-slate-800/80 border-slate-700 text-white pl-4 pr-10 rounded-l-md w-full text-sm focus-visible:ring-slate-500 focus-visible:border-slate-500"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="h-10 rounded-r-md bg-slate-700 hover:bg-slate-600 text-white px-3"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                  
                  {/* Popular searches */}
                  <div className="hidden md:flex flex-wrap gap-2 mt-4">
                    {["Website Design", "Logo Design", "Content Writing", "Video Editing"].map((term, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs bg-slate-800/80 text-slate-300 rounded-full cursor-pointer hover:bg-slate-700/80 transition-colors"
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
            ))}
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-white w-6 h-1.5" 
                      : "bg-white/40 hover:bg-white/60 w-1.5 h-1.5"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Featured services cards */}
          <div className="hidden lg:block">
            <Card className="bg-slate-800 border-slate-700 overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={backgroundImages[currentSlide === 0 ? 2 : currentSlide - 1]} 
                    alt="Featured service" 
                    className="w-full aspect-[4/3] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-lg font-semibold">Premium Service</h3>
                    <p className="text-slate-300 text-sm">Starting at $49.99</p>
                    <Button className="mt-3 w-full bg-slate-700 hover:bg-slate-600 text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[1, 2].map((item) => (
                <Card key={item} className="bg-slate-800 border-slate-700 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-3">
                      <h4 className="text-white text-sm font-medium truncate">Featured Freelancer</h4>
                      <p className="text-slate-400 text-xs">Top-rated talent</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
