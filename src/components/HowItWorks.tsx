import {
  CheckCircle2,
  Search,
  Heart,
  Calendar,
  Shield,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const clientSteps = [
  {
    icon: Search,
    title: "Find Local Services",
    description:
      "Browse through verified local service providers in your area based on your specific needs",
  },
  {
    icon: Heart,
    title: "Choose a Provider",
    description:
      "Compare service packages, read reviews, and select the perfect local professional for your job",
  },
  {
    icon: Calendar,
    title: "Book & Pay Securely",
    description:
      "Schedule appointments and pay securely using MTN Mobile Money or Airtel Money in Uganda, or SnapScan and EFT in South Africa",
  },
  {
    icon: CheckCircle2,
    title: "Rate Your Experience",
    description:
      "After service completion, rate your provider to help others find quality service in your community",
  },
];

const providerSteps = [
  {
    icon: Shield,
    title: "Create a Profile",
    description:
      "Set up your professional profile, verify your identity, and showcase your skills and services",
  },
  {
    icon: Calendar,
    title: "Receive Bookings",
    description:
      "Get notified when clients in your area book your services and manage your schedule",
  },
  {
    icon: Wallet,
    title: "Complete Services",
    description:
      "Provide quality service to your clients and receive secure payments through local payment methods",
  },
  {
    icon: CheckCircle2,
    title: "Grow Your Business",
    description:
      "Build your reputation through positive reviews and grow your customer base in your community",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container-custom">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How UServe Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting local service providers with clients in Uganda and South
            Africa
          </p>
        </div>

        <Tabs defaultValue="clients" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="clients">For Clients</TabsTrigger>
            <TabsTrigger value="providers">For Service Providers</TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientSteps.map((step, index) => {
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
                    <h3 className="text-xl font-semibold text-foreground mt-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-center animate-fade-up">
              <Link to="/services">
                <Button className="netflix-button-primary">
                  Find Services <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="providers" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {providerSteps.map((step, index) => {
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
                    <h3 className="text-xl font-semibold text-foreground mt-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-center animate-fade-up">
              <Link to="/provider/signup">
                <Button className="netflix-button-primary">
                  Become a Provider <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 glass-card p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Supported Payment Methods
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 text-foreground">Uganda</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>MTN Mobile Money</li>
                <li>Airtel Money</li>
                <li>Stanbic Bank</li>
                <li>Equity Bank</li>
                <li>Flutterwave</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-foreground">South Africa</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>SnapScan</li>
                <li>Zapper</li>
                <li>EFT Payments</li>
                <li>VodaPay</li>
                <li>MTN MoMo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
