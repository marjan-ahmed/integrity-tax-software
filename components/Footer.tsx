import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 text-center font-sans px-4 shadow-inner">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms & Conditions
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-gray-600">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          ©2025 Educate.io. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;