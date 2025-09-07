"use client";

import { useRouter } from "next/navigation";

export default function BookDemo() {
  const router = useRouter();

  // Function to open the form in a new tab so onSubmit redirect works
  const handleGetAccessNow = () => {
    window.location.href =
      "https://api.taxnitro.com/widget/form/J76xx1qIettzVEewiapI?notrack=true";
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Request A Free Demo!</h1>
      <p className="mb-6 text-center max-w-xl">
        Get powerful tax software, expert support, and business growth tools—all in
        one place.
      </p>

      {/* Get Access Now button */}
      <button
        onClick={handleGetAccessNow}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Get Access Now
      </button>

      <p className="mt-4 text-xs max-w-md text-center text-gray-500">
        By completing the form, you agree to Integrity Tax Software's terms of
        use and privacy policy.
      </p>
    </div>
  );
}
