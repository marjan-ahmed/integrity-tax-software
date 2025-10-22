import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E19] py-8 text-center font-sans px-4 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="mt-2 text-sm sm:text-md font-inter">
          ©{new Date().getFullYear()} Syed Subhan Ali. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;