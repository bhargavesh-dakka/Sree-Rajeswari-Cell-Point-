
const AddressSection = () => {
  return (
    <section id="address" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Our Store
          </h2>
          <p className="text-lg text-gray-600">
            Find us at our convenient location in NP Kunta
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📌</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Sree Rajeswari Cell Point
                </h3>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">Address:</span>
                  <div>
                    <p>Near Police Station,</p>
                    <p>Opposite to new muszid,</p>
                    <p>Rayachoty road,</p>
                    <p>NP Kunta,</p>
                    <p>Sri Sathya Sai District,</p>
                    <p>Andhra Pradesh - 515521</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t">
                  <span className="font-medium text-gray-800 mr-2">Contact:</span>
                  <a 
                    href="tel:+918978591926" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    +91 8978591926
                  </a>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium text-gray-800 mr-2">Owner:</span>
                  <span>Ramanjineyulu D</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+918978591926"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/918978591926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Sree Rajeswari Cell Point Location"
                src="https://www.google.com/maps?q=Sree+Rajeswari+Cell+Point,+near+Police+Station,+Anantapur,+Nambula+Pulakunta,+Andhra+Pradesh+515521&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex justify-center py-4 bg-white">
                <a
                  href="https://www.google.com/maps/place/Sree+Rajeswari+Cell+Point/@14.0703786,78.3988875,13z/data=!4m6!3m5!1s0x3bb3b3f4b69a93b3:0x3c755f24c7c521b0!8m2!3d14.0554882!4d78.4143592!16s%2Fg%2F11vzpd087n?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors shadow-md"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
