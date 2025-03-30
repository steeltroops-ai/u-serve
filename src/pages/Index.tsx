import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedServices from "../components/FeaturedServices";
// Removed HowItWorks import
// Removed Testimonials import
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow pt-16">
        <Hero />
        <Categories />
        <FeaturedServices />
        {/* Removed HowItWorks component */}
        {/* Removed Testimonials component */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
