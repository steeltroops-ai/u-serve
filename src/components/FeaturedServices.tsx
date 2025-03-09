
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-[#f1fdf7]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_pro.9a47d32.svg" alt="UServe Pro" className="h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              The <span className="text-accent">premium</span> freelance solution for businesses
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 bg-accent/10 p-1 rounded-full">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Verified professionals</h3>
                  <p className="text-gray-600 text-sm">Access a pool of vetted professionals with proven expertise</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 bg-accent/10 p-1 rounded-full">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dedicated account managers</h3>
                  <p className="text-gray-600 text-sm">Work with a dedicated manager to help with your projects</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 bg-accent/10 p-1 rounded-full">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quality work, guaranteed</h3>
                  <p className="text-gray-600 text-sm">We stand behind all work with a satisfaction guarantee</p>
                </div>
              </li>
            </ul>
            <Button className="bg-accent hover:bg-accent-dark text-white rounded-md px-6">
              <Link to="/services">Explore UServe Pro</Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop"
              alt="Business collaboration" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
