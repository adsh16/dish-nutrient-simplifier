import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Akshat, Kanishk, Aditya</h2>
              <p className="text-lg text-blue-600 hover:text-blue-800">
                <a href="https://www.iiitd.ac.in/" target="_blank" rel="noopener noreferrer">
                  Student at IIITD
                </a>
              </p>
              <div className="mt-4 space-y-2">
                <p>Indraprastha Institute of Information Technology Delhi (IIIT Delhi),</p>
                <p>Hostel H2,</p>
                <p>Okhla Phase III, Near Govindpuri Metro Station,</p>
                <p>New Delhi, India 110020.</p>
                <p className="mt-4">
                  <span className="font-semibold">Email: </span>
                  <a href="mailto:akshat22054@iiitd.ac.in" className="text-blue-600 hover:text-blue-800">
                  akshat22054@iiitd.ac.in
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Tel: </span>
                  <span>+91 7011172878 (Personal)</span>
                </p>
              </div>
            </div>
            
            <div className="h-[400px] md:h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8331650642347!2d77.27048531507841!3d28.544333982452396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564111b3b%3A0x2337f9ae595ad58a!2sIIIT-Delhi!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;