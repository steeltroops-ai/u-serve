
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedServices from "../components/FeaturedServices";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import { Button } from "../components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedServices />
      <Testimonials />
      <HowItWorks />
      
      {/* Footer Banner - Fiverr Style */}
      <section className="bg-primary py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
              Freelance services at your <span className="text-accent">fingertips</span>
            </h2>
            <Button className="bg-white text-primary hover:bg-white/90 px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
