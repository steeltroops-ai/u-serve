
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
    <div className="relative bg-slate-900 min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-20" : "opacity-0"
            }`}
          >
            <img 
              src={image} 
              alt={`Background ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
      </div>
      
      {/* Top categories bar */}
      <div className="relative z-10 border-b border-slate-700/60">
        <div className="container-custom">
          <div className="flex items-center space-x-6 overflow-x-auto scrollbar-none py-3">
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
              <span className="flex items-center justify-center w-6 h-6 bg-slate-700/80 rounded-full">+</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main hero content */}
      <div className="container-custom relative z-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Left side - Main featured content */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
              <div className="aspect-video relative">
                {backgroundImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                  </div>
                ))}
                
                {/* Slide content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full md:w-2/3">
                  <h1 className="text-white text-xl md:text-3xl font-bold mb-2">
                    {heroContent[currentSlide].title}
                  </h1>
                  <p className="text-slate-300 text-sm mb-4">
                    {heroContent[currentSlide].person}
                  </p>
                  
                  {/* Search Bar */}
                  <form onSubmit={handleSearch} className="flex w-full">
                    <Input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for services..."
                      className="h-10 bg-slate-800/80 border-slate-700 text-white pr-0 rounded-r-none rounded-l-md w-full text-sm focus-visible:ring-slate-500 focus-visible:border-slate-500"
                    />
                    <Button 
                      type="submit"
                      className="h-10 rounded-l-none rounded-r-md bg-slate-700 hover:bg-slate-600 text-white px-3"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                  
                  {/* Popular searches */}
                  <div className="flex flex-wrap gap-2 mt-4">
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
              
              {/* Slide indicators */}
              <div className="flex justify-center space-x-1.5 py-3 bg-slate-800/50">
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
          </div>
          
          {/* Right side - Featured cards */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            {/* Top card */}
            <Card className="bg-slate-800 border-slate-700 overflow-hidden shadow-xl flex-1">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={backgroundImages[currentSlide === 0 ? 2 : currentSlide - 1]} 
                    alt="Featured service" 
                    className="w-full h-40 object-cover" 
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
            
            {/* Bottom smaller cards */}
            <div className="grid grid-cols-2 gap-4">
              {["Popular", "New Services"].map((title, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden shadow-md">
                  <CardContent className="p-4">
                    <h4 className="text-white text-sm font-medium">{title}</h4>
                    <p className="text-slate-400 text-xs mt-1">Explore now</p>
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
