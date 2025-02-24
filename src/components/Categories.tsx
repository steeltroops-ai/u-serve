
import { Card } from "./ui/card";
import { Home, Car, Paintbrush, Heart, Wrench, Dog } from "lucide-react";

const categories = [
  { icon: Home, name: "Home Services", count: "2,150+" },
  { icon: Car, name: "Automotive", count: "1,840+" },
  { icon: Paintbrush, name: "Home Improvement", count: "3,220+" },
  { icon: Heart, name: "Personal Care", count: "1,590+" },
  { icon: Wrench, name: "Repairs", count: "2,780+" },
  { icon: Dog, name: "Pet Services", count: "950+" },
];

export default function Categories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore Our Services
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Browse through our most popular service categories and find exactly what you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 glass-card hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{category.name}</h3>
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
