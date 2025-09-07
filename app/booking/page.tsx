"use client";

import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    // Load TaxNitro booking widget
    const script = document.createElement("script");
    script.src = "https://api.taxnitro.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Book Your Slot</h1>

      <iframe
        src="https://api.taxnitro.com/widget/booking/DsyaKc8XGHIzvFSHhsQy"
        style={{ width: "100%", minHeight: "600px", border: "none" }}
        scrolling="no"
        title="Slot Booking"
      />
    </div>
  );
}
