
import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Assured",
      description: "We provide only genuine products with warranty"
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Skilled technicians with years of experience"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast repair and delivery services available"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Reliable service you can count on"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Sree Rajeswari Cell Point?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in NP Kunta, we have been serving the community with quality mobile phones, 
            accessories, and repair services. Our commitment to excellence and customer satisfaction 
            sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Visit Our Store Today!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Experience our wide range of products and professional services. 
            We're here to help with all your mobile needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918978591926"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Call Now: +91 8978591926
            </a>
            <a 
              href="#address"
              className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
