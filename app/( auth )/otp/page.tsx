"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OTPPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [resent, setResent] = useState(false);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = otp.join("");
    const stored = typeof window !== "undefined" ? localStorage.getItem("mock-otp") : null;
    if (stored && entered === stored) {
      try {
        localStorage.removeItem("mock-otp");
      } catch {}
      window.location.href = "/dashboard";
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  useEffect(() => {
    try {
      const savedEmail = localStorage.getItem("mock-email");
      if (savedEmail) setEmail(savedEmail);
    } catch {}
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6f2f5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w[400px] text-center">
        {/* Logo */}
        <Image src="/logo.jpg" alt="Logo" width={96} height={96} className="mx-auto mb-4 object-contain" />

        <h2 className="text-lg font-semibold mb-1">Verify your email</h2>
        <p className="text-sm text-gray-600 mb-4">We sent a 6-digit code to {email || "your email"}.</p>

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
            onClick={() => {
              const generatedOtp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("");
              try {
                localStorage.setItem("mock-otp", generatedOtp);
                setResent(true);
              } catch {}
            }}
            className="text-sm text-blue-600 hover:underline mb-5"
          >
            {resent ? "OTP resent!" : "Resend OTP"}
          </button>

          <button
            type="submit"
            className="w-full py-3 bg-[#001f54] text-white font-semibold rounded-lg hover:bg-[#002a70] transition"
          >
            Submit
          </button>
        </form>

        <Link href="/signin" className="block mt-4 text-sm text-gray-600 hover:underline">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}