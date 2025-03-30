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
  "Programming & Tech":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Graphics & Design":
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Video & Animation":
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Writing & Translation":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Music & Audio":
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  Business:
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "Home Services":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  Automotive:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
};

const categories = [
  {
    icon: Code,
    name: "Programming & Tech",
    count: "2,150+",
    description: "Web, mobile and software development",
    popular: true,
  },
  {
    icon: Paintbrush,
    name: "Graphics & Design",
    count: "3,220+",
    description: "Logos, websites, and visual arts",
    popular: true,
  },
  {
    icon: Video,
    name: "Video & Animation",
    count: "1,840+",
    description: "Explainer videos, editing and more",
    popular: false,
  },
  {
    icon: BookText,
    name: "Writing & Translation",
    count: "1,590+",
    description: "Articles, blog posts and creative content",
    popular: false,
  },
  {
    icon: Music,
    name: "Music & Audio",
    count: "950+",
    description: "Voice overs, mixing and sound effects",
    popular: false,
  },
  {
    icon: HeartHandshake,
    name: "Business",
    count: "2,780+",
    description: "Virtual assistance, market research",
    popular: true,
  },
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
    popular: false,
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
