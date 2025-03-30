import { Link } from "react-router-dom";
import {
  Code,
  Paintbrush,
  Video,
  Music,
  BookText,
  HeartHandshake,
  Home,
  Car,
  ChevronRight,
  Star,
} from "lucide-react";

// Background images for categories
const categoryBackgrounds = {
  "Home Services":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Automotive":
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Security Services":
    "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Garden & Pool":
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Technical Support":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Boda Boda Services":
    "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Agricultural Services":
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Solar Power":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
};

const categories = [
  {
    icon: Home,
    name: "Home Services",
    count: "2,030+",
    description: "Cleaning, maintenance and repair",
    popular: true,
  },
  {
    icon: Car,
    name: "Automotive",
    count: "1,720+",
    description: "Car repair, detailing and maintenance",
    popular: true,
  },
  {
    icon: HeartHandshake,
    name: "Security Services",
    count: "1,450+",
    description: "Home security installation and monitoring",
    popular: true,
  },
  {
    icon: Paintbrush,
    name: "Garden & Pool",
    count: "1,320+",
    description: "Landscaping, pool maintenance and garden services",
    popular: true,
  },
  {
    icon: Code,
    name: "Technical Support",
    count: "1,150+",
    description: "Computer and electronics repair",
    popular: false,
  },
  {
    icon: Video,
    name: "Boda Boda Services",
    count: "1,840+",
    description: "Transport and delivery via motorcycle",
    popular: true,
  },
  {
    icon: BookText,
    name: "Agricultural Services",
    count: "1,590+",
    description: "Farm equipment repair, produce delivery",
    popular: false,
  },
  {
    icon: Music,
    name: "Solar Power",
    count: "950+",
    description: "Installation and maintenance of solar systems",
    popular: true,
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-foreground">
            Explore Categories
          </h2>
          <Link
            to="/services"
            className="flex items-center text-sm text-accent hover:underline"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* Netflix-style horizontal scrolling categories */}
        <div className="netflix-content-slider pb-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const bgImage =
              categoryBackgrounds[category.name] ||
              categoryBackgrounds["Programming & Tech"];

            return (
              <Link
                to={`/services?category=${encodeURIComponent(category.name)}`}
                key={index}
                className="min-w-[280px] md:min-w-[320px]"
              >
                <div
                  className="netflix-card h-[180px] relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={bgImage}
                      alt={category.name}
                      className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="bg-accent/90 p-2 rounded-md">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {category.popular && (
                        <div className="flex items-center text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 mr-1 fill-current text-accent" />
                          Popular
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-white/80 mt-1 line-clamp-2">
                        {category.description}
                      </p>
                      <p className="text-xs text-accent font-medium mt-2">
                        {category.count} services
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
