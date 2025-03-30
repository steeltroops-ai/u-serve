import { Button } from "./ui/button";
import { Play, Info, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

export default function Hero() {
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
      setCurrentSlide((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Search functionality moved to Navigation component

  // Categories for the top bar
  const categories = [
    "Graphics & Design",
    "Digital Marketing",
    "Programming",
    "Video & Animation",
    "Writing",
  ];

  // Arrays of valid Unsplash image URLs for each category
  const trendingImages = [
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  ];

  const programmingImages = [
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
  ];

  const designImages = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    "https://images.unsplash.com/photo-1613979727371-5f59b8d55563",
    "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
    "https://images.unsplash.com/photo-1561070791-32d8b5eb2984",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
  ];

  return (
    <div className="relative bg-background min-h-screen overflow-hidden pt-0">
      {/* Featured Banner - Netflix Style */}
      <div className="netflix-featured w-full h-[70vh] relative">
        {/* Featured Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
            alt="Featured Service"
            className="w-full h-full object-cover"
          />
          <div className="netflix-featured-overlay"></div>
        </div>

        {/* Featured Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-2/3 z-10">
          <div className="space-y-4">
            {/* Service Title */}
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Professional Web Development
            </h1>

            {/* Service Stats */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-accent font-medium">4.9 Rating</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">2023</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">Full Stack</span>
            </div>

            {/* Service Description */}
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Get your business online with professional web development
              services. Our experts create responsive, modern websites that
              drive results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="netflix-button-primary gap-2">
                <Play className="h-4 w-4 fill-current" /> View Service
              </Button>
              <Button className="netflix-button-secondary gap-2">
                <Info className="h-4 w-4" /> More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="container-custom">
        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="netflix-category-pill"
              onClick={() =>
                navigate(`/services?category=${encodeURIComponent(category)}`)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Trending Services Row */}
        <div className="netflix-row">
          <h2 className="netflix-row-title">Trending Services</h2>
          <div className="netflix-content-slider">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="netflix-card min-w-[250px] md:min-w-[280px]"
              >
                <div className="aspect-video relative">
                  <img
                    src={`${
                      trendingImages[index % trendingImages.length]
                    }?w=500&auto=format&fit=crop&q=80`}
                    alt={`Trending service ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-accent/90 rounded-full">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-foreground font-medium text-sm">
                    Professional Service {index + 1}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-accent text-xs font-medium">
                      4.{8 + (index % 2)} Rating
                    </span>
                    <span className="mx-1 text-foreground/40">•</span>
                    <span className="text-foreground/70 text-xs">2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular in Programming Row */}
        <div className="netflix-row">
          <h2 className="netflix-row-title">Popular in Programming & Tech</h2>
          <div className="netflix-content-slider">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="netflix-card min-w-[250px] md:min-w-[280px]"
              >
                <div className="aspect-video relative">
                  <img
                    src={`${
                      programmingImages[index % programmingImages.length]
                    }?w=500&auto=format&fit=crop&q=80`}
                    alt={`Programming service ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-accent/90 rounded-full">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-foreground font-medium text-sm">
                    Web Development {index + 1}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-accent text-xs font-medium">
                      4.{7 + (index % 3)} Rating
                    </span>
                    <span className="mx-1 text-foreground/40">•</span>
                    <span className="text-foreground/70 text-xs">2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Services Row */}
        <div className="netflix-row">
          <h2 className="netflix-row-title">Design Services</h2>
          <div className="netflix-content-slider">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="netflix-card min-w-[250px] md:min-w-[280px]"
              >
                <div className="aspect-video relative">
                  <img
                    src={`${
                      designImages[index % designImages.length]
                    }?w=500&auto=format&fit=crop&q=80`}
                    alt={`Design service ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-accent/90 rounded-full">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-foreground font-medium text-sm">
                    UI/UX Design {index + 1}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-accent text-xs font-medium">
                      4.{9 - (index % 2)} Rating
                    </span>
                    <span className="mx-1 text-foreground/40">•</span>
                    <span className="text-foreground/70 text-xs">2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
