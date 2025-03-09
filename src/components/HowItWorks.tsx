
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Make it all happen with freelancers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-800 font-semibold">
              1
            </div>
            <h3 className="font-semibold text-gray-800">Post a job</h3>
            <p className="text-gray-600 text-sm">Describe your project and get matched with the perfect freelancer</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-800 font-semibold">
              2
            </div>
            <h3 className="font-semibold text-gray-800">Choose your talent</h3>
            <p className="text-gray-600 text-sm">Compare profiles, ratings, and portfolios to find the right fit</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-800 font-semibold">
              3
            </div>
            <h3 className="font-semibold text-gray-800">Pay securely</h3>
            <p className="text-gray-600 text-sm">Release payments only when you're completely satisfied with the work</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-800 font-semibold">
              4
            </div>
            <h3 className="font-semibold text-gray-800">Leave a review</h3>
            <p className="text-gray-600 text-sm">Share your experience and help maintain our quality community</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
