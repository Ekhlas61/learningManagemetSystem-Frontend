"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 fake validation (replace with real API later)
    if (username && email && password) {
      // Generate and store mock OTP for demo
      const generatedOtp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("");
      try {
        localStorage.setItem("mock-otp", generatedOtp);
        localStorage.setItem("mock-email", email);
      } catch {}
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
        <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="signup-title">
          <div className="space-y-2 text-left">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="e.g. John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. student@oxford.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              autoComplete="email"
              required
            />
          </div>
          <div className="space-y-2 text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pr-12 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-3 my-auto h-8 px-2 text-sm text-blue-700 hover:text-blue-900"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-xs text-gray-500">Use at least 8 characters.</p>
          </div>
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