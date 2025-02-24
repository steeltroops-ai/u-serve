
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Search Services",
    description: "Browse through our extensive list of verified service providers in your area"
  },
  {
    title: "Compare & Choose",
    description: "Read reviews, compare prices, and select the perfect provider for your needs"
  },
  {
    title: "Book Instantly",
    description: "Schedule your service with just a few clicks and get instant confirmation"
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Getting started is easy. Find and book local services in just three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
