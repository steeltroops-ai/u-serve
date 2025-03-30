import { Button } from "./ui/button";
import { Star, Heart, Play, Info, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const featuredServices = [
  {
    id: "s1",
    title: "Home Security Installation",
    category: "Security Services",
    price: 249.99,
    rating: 4.9,
    reviews: 243,
    provider: "SecureHome SA",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s2",
    title: "Boda Boda Transport",
    category: "Boda Boda Services",
    price: 15.99,
    rating: 4.8,
    reviews: 187,
    provider: "Swift Riders Uganda",
    image:
      "https://images.unsplash.com/photo-1597423498219-04418210827d?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s3",
    title: "Solar Panel Installation",
    category: "Solar Power",
    price: 349.99,
    rating: 4.7,
    reviews: 156,
    provider: "SunPower Uganda",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s4",
    title: "Pool Maintenance",
    category: "Garden & Pool",
    price: 129.99,
    rating: 4.9,
    reviews: 211,
    provider: "Blue Waters",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s5",
    title: "Mobile Money Services",
    category: "Financial Services",
    price: 19.99,
    rating: 4.8,
    reviews: 178,
    provider: "MTN Mobile Money",
    image:
      "https://images.unsplash.com/photo-1580508174046-170816f65662?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s6",
    title: "Farm Equipment Repair",
    category: "Agricultural Services",
    price: 189.99,
    rating: 4.9,
    reviews: 203,
    provider: "AgriTech Solutions",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s7",
    title: "Domestic Worker Services",
    category: "Home Services",
    price: 95.99,
    rating: 4.8,
    reviews: 176,
    provider: "HomeCare SA",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop",
    year: 2023,
  },
  {
    id: "s8",
    title: "Motorcycle Repair",
    category: "Boda Boda Services",
    price: 75.99,
    rating: 4.5,
    reviews: 142,
    provider: "Boda Mechanics Uganda",
    image:
      "https://images.unsplash.com/photo-1596638787647-904d822d751e?w=600&auto=format&fit=crop",
    year: 2023,
  },
];

const topPicks = [
  {
    id: "tp1",
    title: "Premium UI/UX Design",
    category: "Graphics & Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    description: "Create stunning user interfaces with our expert designers",
  },
  {
    id: "tp2",
    title: "Full-Stack Development",
    category: "Programming & Tech",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    description:
      "End-to-end web application development with modern technologies",
  },
  {
    id: "tp3",
    title: "SEO Optimization",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop",
    description:
      "Boost your website's visibility and drive more organic traffic",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        {/* Top Picks - Large Featured Cards */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-foreground">
              Top Picks For You
            </h2>
            <Link
              to="/services"
              className="flex items-center text-sm text-accent hover:underline"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPicks.map((pick, index) => (
              <div
                key={index}
                className="netflix-featured rounded-md overflow-hidden h-[200px] md:h-[240px] relative group"
              >
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <span className="text-xs font-medium text-white bg-accent/80 px-2 py-1 rounded-full mb-2 inline-block">
                    {pick.category}
                  </span>
                  <h3 className="text-white font-medium text-lg mb-1">
                    {pick.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {pick.description}
                  </p>

                  <div className="flex space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="netflix-button-primary h-8 px-3 py-1 text-xs gap-1">
                      <Play className="h-3 w-3 fill-current" /> View
                    </Button>
                    <Button className="netflix-button-secondary h-8 px-3 py-1 text-xs gap-1">
                      <Plus className="h-3 w-3" /> Save
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services - Netflix Style Row */}
        <div className="netflix-row">
          <div className="flex items-center justify-between mb-4">
            <h2 className="netflix-row-title">Featured Services</h2>
            <Link
              to="/services"
              className="flex items-center text-sm text-accent hover:underline"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="netflix-content-slider">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="netflix-card min-w-[250px] md:min-w-[280px] animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute top-2 right-2 p-1.5 bg-accent/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="h-4 w-4 text-white" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-3">
                    <span className="text-xs font-medium text-white bg-accent/80 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <Link to={`/services/${service.id}`}>
                    <h3 className="font-medium text-foreground line-clamp-2 hover:text-accent transition-colors text-sm">
                      {service.title}
                    </h3>
                  </Link>

                  <div className="flex items-center mt-1 text-xs">
                    <div className="flex items-center text-accent">
                      <Star className="fill-current h-3 w-3" />
                      <span className="ml-1 font-medium">{service.rating}</span>
                    </div>
                    <span className="mx-1 text-foreground/40">•</span>
                    <span className="text-foreground/70">
                      {service.reviews} reviews
                    </span>
                    <span className="mx-1 text-foreground/40">•</span>
                    <span className="text-foreground/70">{service.year}</span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs text-foreground/70">
                      By{" "}
                      <span className="font-medium text-foreground/90">
                        {service.provider}
                      </span>
                    </div>
                    <div className="font-bold text-accent text-sm">
                      ${service.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
