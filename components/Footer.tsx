import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[Footer] py-8 text-center font-sans px-4 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <Image
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/GcSAVqax8JVAKDL4VpBK/media/686e6879933498e4e5b51ef5.webp"
          alt="Integrity Tax Software"
          width={90}
          height={90}
        />
        <p className="mt-2 text-sm sm:text-md font-inter">
          ©{new Date().getFullYear()} Integrity Tax Software. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;