
import { CheckCircle2, Search, Heart, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Services",
    description: "Browse through thousands of services in various categories that match your needs"
  },
  {
    icon: Heart,
    title: "Choose a Service",
    description: "Compare service packages, read reviews, and select the perfect provider for your project"
  },
  {
    icon: Calendar,
    title: "Get It Done",
    description: "Communicate, collaborate, and quickly get your project completed by professionals"
  },
  {
    icon: CheckCircle2,
    title: "Leave a Review",
    description: "Share your experience to help the community and support great service providers"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Get your project done in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
