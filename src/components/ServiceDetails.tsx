import { useState } from "react";
import { Service } from "../pages/Services";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  Check,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Confirmed!",
        description: `Your ${service.title} has been booked successfully. The provider will contact you shortly.`,
        duration: 5000,
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333333]">
              {service.title}
            </h1>
            <span className="text-sm font-medium bg-[#40E0D0]/10 text-[#40E0D0] px-3 py-1.5 rounded-full mt-2 md:mt-0">
              {service.category}
            </span>
          </div>

          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 text-[#FFD700] fill-[#FFD700]" />
            <span className="ml-1 font-medium">{service.rating}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-700">{service.provider}</span>
          </div>

          <p className="text-[#333333] mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="bg-[#F8F8F8] p-5 rounded-lg border border-gray-200 mb-6">
            <h3 className="font-semibold text-lg mb-4 text-[#333333]">
              Service Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>Avg. 2-3 hours</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>Service at your location</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>Available 7 days a week</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>Experienced professionals</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F8F8] p-5 rounded-lg border border-gray-200 mb-6">
            <h3 className="font-semibold text-lg mb-4 text-[#333333]">
              Payment Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>MTN Mobile Money (Uganda)</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>Airtel Money (Uganda)</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>SnapScan (South Africa)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#40E0D0] mr-3" />
                <span>EFT Payment (South Africa)</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Payment is held in escrow until service completion for your
              security.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[#333333]">
              What's Included
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#0047AB] mr-2 mt-0.5" />
                <span>Professional service providers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#0047AB] mr-2 mt-0.5" />
                <span>All necessary equipment and supplies</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#0047AB] mr-2 mt-0.5" />
                <span>100% satisfaction guarantee</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#0047AB] mr-2 mt-0.5" />
                <span>Flexible scheduling options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Book This Service
              </h3>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <span className="text-gray-700">Service Price</span>
                <span className="text-xl font-bold text-[#333333]">
                  ${service.price}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Service location"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Instructions
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or instructions"
                  className="w-full min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0047AB] hover:bg-[#003380] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Processing..."
                  : `Book Now - $${service.price}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
