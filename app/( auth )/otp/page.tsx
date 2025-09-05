"use client";

import { useState } from "react";
import Link from "next/link";

export default function OTPPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6f2f5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px] text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-24 h-24 object-contain"
        />

        <h2 className="text-lg font-semibold mb-4">
          Sent OTP on Your Email
        </h2>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-10 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          <button
            type="button"
            className="text-sm text-blue-600 hover:underline mb-5"
          >
            Resend OTP
          </button>

          <button
            type="submit"
            className="w-full py-3 bg-[#001f54] text-white font-semibold rounded-lg hover:bg-[#002a70] transition"
          >
            Submit
          </button>
        </form>

        <Link href="/login" className="block mt-4 text-sm text-gray-600 hover:underline">
          Back to Login Page
        </Link>
      </div>
    </div>
  );
}