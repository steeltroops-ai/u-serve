
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedServices from "../components/FeaturedServices";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedServices />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
