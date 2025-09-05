"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 fake validation (replace with real API later)
    if (username && email && password) {
      router.push("/otp"); // after signup, go to OTP
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>

      {/* Signup form container */}
      <div className="relative z-10 bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.jpg" // place your logo in public/logo.png
            alt="Oxford LMS Logo"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm mt-3">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/signin")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}