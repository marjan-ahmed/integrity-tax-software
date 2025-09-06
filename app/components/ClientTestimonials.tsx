'use client'

import React from 'react';

const ClientTestimonials = () => {
  return (
    <section className="py-16 px-6 md:px-12">


     <div className="flex justify-center">
  <div className="w-full  overflow-hidden rounded-2xl shadow-lg">
    <iframe
      id="msgsndr_reviews"
      src="https://backend.leadconnectorhq.com/appengine/reviews/get_widget/GcSAVqax8JVAKDL4VpBK"
      frameBorder="0"

      style={{ width: '100%', height: '600px' }} // Adjust height as needed
      className="rounded-2xl"
    ></iframe>
  </div>
</div>


    </section>
  );
};

export default ClientTestimonials;
