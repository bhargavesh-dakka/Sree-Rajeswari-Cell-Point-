
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import AddressSection from "@/components/AddressSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <AboutSection />
      <Contact />
      <AddressSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
