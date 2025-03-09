
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Small Business Owner",
    content: "I found an exceptional graphic designer who created the perfect logo for my new business. The process was smooth and the results exceeded my expectations!",
    rating: 5
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Marketing Director",
    content: "We hired a content writer through this platform and the quality of work was outstanding. Our blog traffic has increased by 45% since implementing their articles.",
    rating: 5
  },
  {
    name: "Jessica Martinez",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    role: "Startup Founder",
    content: "The web developer I found here delivered a stunning website that perfectly captured my vision. Professional, responsive, and highly skilled.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            See what clients are saying about their experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                
                <blockquote className="flex-1 mb-6 italic text-secondary">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
