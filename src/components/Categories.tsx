
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { 
  Code, Paintbrush, Video, Music, BookText, 
  HeartHandshake, Home, Car, Globe, Layout 
} from "lucide-react";

const categories = [
  { 
    icon: Paintbrush, 
    name: "Graphics & Design", 
    count: "3,220+", 
    description: "Logos, websites, and visual arts",
    color: "bg-emerald-600",
    popular: true
  },
  { 
    icon: Layout, 
    name: "Web Design", 
    count: "1,840+",
    description: "Website design and development",
    color: "bg-orange-500",
    popular: false 
  },
  { 
    icon: Code, 
    name: "Programming & Tech", 
    count: "2,150+",
    description: "Web and software development",
    color: "bg-blue-500",
    popular: true
  },
  { 
    icon: BookText, 
    name: "Writing & Translation", 
    count: "1,590+",
    description: "Articles and content creation",
    color: "bg-purple-600",
    popular: false 
  },
  { 
    icon: Video, 
    name: "Video & Animation", 
    count: "1,840+",
    description: "Explainer videos and editing",
    color: "bg-red-600",
    popular: false 
  },
  { 
    icon: Globe, 
    name: "Digital Marketing", 
    count: "1,720+",
    description: "SEO and social media marketing",
    color: "bg-yellow-600",
    popular: true 
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Popular services
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                to={`/services?category=${encodeURIComponent(category.name)}`} 
                key={index}
                className="block"
              >
                <Card
                  className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-40 relative"
                >
                  <div className={`absolute inset-0 ${category.color} p-4 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-sm text-white mt-auto">
                      {category.name}
                    </h3>
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
