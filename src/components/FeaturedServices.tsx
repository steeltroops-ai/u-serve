
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const featuredServices = [
  {
    id: "s1",
    title: "Professional Logo Design",
    category: "Graphics & Design",
    price: 49.99,
    rating: 4.9,
    reviews: 243,
    provider: "DesignMaster",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&auto=format&fit=crop",
  },
  {
    id: "s2",
    title: "Responsive Website Development",
    category: "Programming & Tech",
    price: 199.99,
    rating: 4.8,
    reviews: 187,
    provider: "CodeGenius",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop",
  },
  {
    id: "s3",
    title: "Social Media Marketing",
    category: "Digital Marketing",
    price: 89.99,
    rating: 4.7,
    reviews: 156,
    provider: "MarketPro",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&auto=format&fit=crop",
  },
  {
    id: "s4",
    title: "Professional Video Editing",
    category: "Video & Animation",
    price: 129.99,
    rating: 4.9,
    reviews: 211,
    provider: "VideoWizard",
    image: "https://images.unsplash.com/photo-1574717024453-354056cbd9b3?w=600&auto=format&fit=crop",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Services
            </h2>
            <p className="text-secondary">
              Discover our most popular services that deliver exceptional results
            </p>
          </div>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <Card 
              key={index} 
              className="material-card overflow-hidden group animate-fade-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-40">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-accent" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-5">
                <Link to={`/services/${service.id}`}>
                  <h3 className="font-semibold text-primary line-clamp-2 hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </Link>
                
                <div className="flex items-center mt-2 text-sm">
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-current h-4 w-4" />
                    <span className="ml-1 text-gray-800 font-medium">{service.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">{service.reviews} reviews</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    By <span className="font-medium text-primary">{service.provider}</span>
                  </div>
                  <div className="font-bold text-primary">
                    ${service.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
