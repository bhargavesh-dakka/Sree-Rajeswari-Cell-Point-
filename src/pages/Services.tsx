
import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h1>
          <ServicesGrid />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
