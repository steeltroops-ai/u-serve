
import { Card } from "./ui/card";
import { Home, Car, Paintbrush, Heart, Wrench, Dog, Star } from "lucide-react";

const categories = [
  { icon: Home, name: "Home Services", count: "2,150+", popular: true },
  { icon: Car, name: "Automotive", count: "1,840+" },
  { icon: Paintbrush, name: "Home Improvement", count: "3,220+", popular: true },
  { icon: Heart, name: "Personal Care", count: "1,590+" },
  { icon: Wrench, name: "Repairs", count: "2,780+", popular: true },
  { icon: Dog, name: "Pet Services", count: "950+" },
];

export default function Categories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Explore</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Browse Our Services
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Find exactly what you need from our most popular service categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="premium-card hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary">{category.name}</h3>
                      {category.popular && (
                        <div className="flex items-center text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-secondary">{category.count} providers</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
