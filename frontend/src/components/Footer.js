import React from 'react';
import iiitd_logo from './iiitd.png';

const Footer = () => {
  return (
    <div className="bg-teal-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <img src={iiitd_logo} alt="IIITD Logo" className="h-12 mr-4" />
          <p className="text-white">
            Not Copyright © 2024 No rights reserved.
          </p>
        </div>
        <div className="mt-4 text-center text-white">
          <p>
            This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
          </p>
          <p>
            All material on this website is a product of an project and is provided for your information only and may not be construed as medical advice or instruction. No action or inaction should be taken based solely on the contents of this information; instead, readers should consult appropriate health professionals on any matter relating to their health & well-being.
          </p>
          <p>
            Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) | Akshat, Kanishk and Aditya
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;