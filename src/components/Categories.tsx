
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { Code, Paintbrush, Video, Music, BookText, HeartHandshake, Home, Car, Wrench, Heart, Dog, Star } from "lucide-react";

const categories = [
  { 
    icon: Code, 
    name: "Programming & Tech", 
    count: "2,150+",
    description: "Web, mobile and software development",
    popular: true
  },
  { 
    icon: Paintbrush, 
    name: "Graphics & Design", 
    count: "3,220+", 
    description: "Logos, websites, and visual arts",
    popular: true
  },
  { 
    icon: Video, 
    name: "Video & Animation", 
    count: "1,840+",
    description: "Explainer videos, editing and more",
    popular: false 
  },
  { 
    icon: BookText, 
    name: "Writing & Translation", 
    count: "1,590+",
    description: "Articles, blog posts and creative content",
    popular: false 
  },
  { 
    icon: Music, 
    name: "Music & Audio", 
    count: "950+",
    description: "Voice overs, mixing and sound effects",
    popular: false 
  },
  { 
    icon: HeartHandshake, 
    name: "Business", 
    count: "2,780+",
    description: "Virtual assistance, market research",
    popular: true 
  },
  { 
    icon: Home, 
    name: "Home Services", 
    count: "2,030+",
    description: "Cleaning, maintenance and repair",
    popular: true 
  },
  { 
    icon: Car, 
    name: "Automotive", 
    count: "1,720+",
    description: "Car repair, detailing and maintenance",
    popular: false 
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore Marketplace
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Get inspired by these professional services for your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                to={`/services?category=${encodeURIComponent(category.name)}`} 
                key={index}
                className="block"
              >
                <Card
                  className="material-card hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="material-header">
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-white" />
                      {category.popular && (
                        <div className="flex items-center text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-primary">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    <p className="text-sm text-accent font-medium mt-3">{category.count} services</p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
