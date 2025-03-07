
import { CheckCircle2, Search, ThumbsUp, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Services",
    description: "Browse through our extensive list of verified service providers in your area"
  },
  {
    icon: ThumbsUp,
    title: "Compare & Choose",
    description: "Read reviews, compare prices, and select the perfect provider for your needs"
  },
  {
    icon: Calendar,
    title: "Book Instantly",
    description: "Schedule your service with just a few clicks and get instant confirmation"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Getting started is easy. Find and book local services in just three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-accent/10 rounded-full blur-md"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-card border border-accent/20">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="absolute -right-3 -top-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mt-4">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
