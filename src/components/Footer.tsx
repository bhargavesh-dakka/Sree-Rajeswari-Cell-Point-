
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white rounded-lg p-2">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sree Rajeswari Cell Point</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all mobile needs in NP Kunta. 
              Quality products and professional services since years.
            </p>
            <p className="text-gray-400">
              <strong>Owner:</strong> Ramanjineyulu D
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Phone:</strong> 
                <a href="tel:+918978591926" className="text-blue-400 hover:text-blue-300 ml-1">
                  +91 8978591926
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> 
                <a href="https://wa.me/918978591926" className="text-green-400 hover:text-green-300 ml-1">
                  +91 8978591926
                </a>
              </p>
              <div className="pt-2">
                <p className="text-sm">
                  Near Police Station,<br />
                  Opposite to new muszid,<br />
                  Rayachoty road, NP Kunta,<br />
                  Sri Sathya Sai District,<br />
                  Andhra Pradesh - 515521
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• New Mobiles (All Brands)</li>
              <li>• Mobile Repair Services</li>
              <li>• Mobile Accessories</li>
              <li>• Headsets & Audio</li>
              <li>• Chargers & Cables</li>
              <li>• Screen Guards & Covers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sree Rajeswari Cell Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
