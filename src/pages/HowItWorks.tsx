import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  CheckCircle2,
  Search,
  Heart,
  Calendar,
  ArrowRight,
  Users,
  Shield,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Find Services",
    description:
      "Browse through thousands of services in various categories that match your needs",
    details: [
      "Filter by category, price range, and ratings",
      "Compare different service providers side by side",
      "Read detailed service descriptions and requirements",
    ],
  },
  {
    icon: Heart,
    title: "Choose a Service",
    description:
      "Compare service packages, read reviews, and select the perfect provider for your project",
    details: [
      "View provider profiles and portfolios",
      "Check availability and response times",
      "Read verified customer reviews and ratings",
    ],
  },
  {
    icon: Calendar,
    title: "Get It Done",
    description:
      "Communicate, collaborate, and quickly get your project completed by professionals",
    details: [
      "Schedule appointments and track progress",
      "Communicate directly with your service provider",
      "Receive updates and notifications throughout the process",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Leave a Review",
    description:
      "Share your experience to help the community and support great service providers",
    details: [
      "Rate your experience and provide detailed feedback",
      "Upload photos of completed work (optional)",
      "Help others find quality service providers",
    ],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Your payment is held securely until you approve the completed work",
  },
  {
    icon: Users,
    title: "Verified Providers",
    description:
      "All service providers undergo a thorough verification process",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Find, book, and manage services all in one place",
  },
  {
    icon: Zap,
    title: "Quality Guarantee",
    description: "If you're not satisfied, we'll help resolve any issues",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                How UServe Works
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Your guide to finding and booking the perfect services for your
                needs
              </p>
              <Button
                className="netflix-button-primary text-lg px-8 py-6 h-auto"
                onClick={() => (window.location.href = "/services")}
              >
                Browse Services <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Four Simple Steps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting your project done has never been easier
              </p>
            </div>

            {/* Desktop Steps */}
            <div className="hidden lg:block">
              <div className="flex justify-between mb-16 relative">
                {/* Progress Bar */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted/50 -translate-y-1/2 z-0">
                  <div
                    className="h-full bg-accent transition-all duration-500"
                    style={{
                      width: `${(activeStep / (steps.length - 1)) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Step Indicators */}
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                      index <= activeStep ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        index <= activeStep
                          ? "bg-accent text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="animate-fade-up">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {steps[activeStep].description}
                  </p>

                  <ul className="space-y-4">
                    {steps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                    >
                      Previous
                    </Button>
                    <Button
                      className="netflix-button-primary"
                      onClick={() =>
                        setActiveStep(
                          Math.min(steps.length - 1, activeStep + 1)
                        )
                      }
                      disabled={activeStep === steps.length - 1}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-xl"></div>
                  <div className="relative glass-card p-8 animate-scale-up">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                      {React.createElement(steps[activeStep].icon, {
                        className: "h-10 w-10 text-accent",
                      })}
                    </div>
                    <h4 className="text-xl font-semibold text-center mb-4">
                      {steps[activeStep].title}
                    </h4>
                    <p className="text-center text-muted-foreground">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Steps */}
            <div className="lg:hidden space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col space-y-6 animate-fade-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <div className="absolute -inset-3 bg-accent/10 rounded-full blur-md"></div>
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-card shadow-card border border-accent/20">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <div className="absolute -right-3 -top-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <div className="ml-20">
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose UServe
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We make finding and booking services simple, secure, and
                satisfying
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="premium-card flex flex-col items-center text-center p-8 animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Button
                className="netflix-button-primary text-lg px-8 py-6 h-auto"
                onClick={() => (window.location.href = "/signup")}
              >
                Get Started Today <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/10">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about using UServe
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I pay for services?",
                  answer:
                    "UServe offers secure payment processing through our platform. You can pay using credit/debit cards, PayPal, or other supported payment methods. Your payment is held securely until you approve the completed work.",
                },
                {
                  question: "What if I'm not satisfied with the service?",
                  answer:
                    "If you're not satisfied with the service provided, you can contact the provider directly to resolve the issue. If that doesn't work, our customer support team is available to help mediate and find a solution, including refunds when appropriate.",
                },
                {
                  question: "How are service providers verified?",
                  answer:
                    "All service providers undergo a verification process that includes identity verification, professional credentials check, and review of past work experience. We also monitor ratings and reviews to ensure ongoing quality.",
                },
                {
                  question: "Can I become a service provider?",
                  answer:
                    "Yes! If you have skills to offer, you can sign up as a service provider. You'll need to complete our verification process, create a compelling profile, and set up your service offerings with clear pricing and descriptions.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="glass-card p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
