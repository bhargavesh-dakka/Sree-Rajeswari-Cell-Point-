
import { Phone, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesGrid = () => {
  const allServices = [
    {
      title: "New Mobiles (All Brands)",
      description: "Latest smartphones from Samsung, Apple, Xiaomi, Realme, Vivo, OPPO and more",
      icon: Phone,
      features: ["Latest Models", "Warranty Included", "Best Prices", "EMI Available"]
    },
    {
      title: "Keypad Mobiles",
      description: "Traditional and reliable keypad phones for all age groups",
      icon: Phone,
      features: ["Long Battery Life", "Durable Build", "Easy to Use", "Affordable"]
    },
    {
      title: "Smart Phones Repair",
      description: "Professional repair services for all smartphone brands and models",
      icon: Phone,
      features: ["Screen Replacement", "Battery Change", "Water Damage", "Software Issues"]
    },
    {
      title: "Keypad Mobiles Repair",
      description: "Expert repair services for traditional keypad mobile phones",
      icon: Phone,
      features: ["Button Repair", "Display Fix", "Speaker Issues", "Charging Problems"]
    },
    {
      title: "Mobile Accessories",
      description: "Complete range of mobile accessories and spare parts",
      icon: Phone,
      features: ["Cases & Covers", "Tempered Glass", "Memory Cards", "SIM Tools"]
    },
    {
      title: "Headsets",
      description: "Quality wired and wireless headsets for music and calls",
      icon: Headphones,
      features: ["Noise Cancellation", "Crystal Clear Audio", "Comfortable Fit", "Multiple Brands"]
    },
    {
      title: "Fast Chargers / Chargers",
      description: "Original and compatible fast chargers for all mobile brands",
      icon: Phone,
      features: ["Fast Charging", "Type-C & Micro USB", "Original Quality", "Safety Certified"]
    },
    {
      title: "TWS (True Wireless Headsets)",
      description: "Latest true wireless stereo earbuds and headphones",
      icon: Headphones,
      features: ["Bluetooth 5.0+", "Long Battery Life", "Touch Controls", "Premium Sound"]
    },
    {
      title: "Displays",
      description: "High-quality replacement displays for all mobile models",
      icon: Phone,
      features: ["Original Quality", "Touch Responsive", "Perfect Fit", "Color Accuracy"]
    },
    {
      title: "Batteries",
      description: "Genuine and compatible batteries for extended mobile life",
      icon: Phone,
      features: ["Long Lasting", "Quick Charging", "Safety Tested", "Warranty Included"]
    },
    {
      title: "Bluetooth Speakers",
      description: "Portable and powerful Bluetooth speakers for music lovers",
      icon: Headphones,
      features: ["Wireless Connectivity", "High Bass", "Water Resistant", "Long Playtime"]
    },
    {
      title: "Screen Guards",
      description: "Tempered glass and film screen protectors for mobile safety",
      icon: Phone,
      features: ["9H Hardness", "Bubble Free", "Crystal Clear", "Easy Installation"]
    },
    {
      title: "Smart Watches",
      description: "Latest smartwatches with health monitoring and smart features",
      icon: Phone,
      features: ["Health Tracking", "Notifications", "Long Battery", "Water Resistant"]
    },
    {
      title: "Pouches / FLIP Covers",
      description: "Stylish and protective pouches and flip covers for all mobile models",
      icon: Phone,
      features: ["Premium Materials", "Perfect Fit", "Card Slots", "Magnetic Closure"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allServices.map((service, index) => (
        <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <ul className="space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
