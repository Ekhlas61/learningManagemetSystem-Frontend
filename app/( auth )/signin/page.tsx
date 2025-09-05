"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 fake login logic (replace later with real API)
    if (email && password) {
      // redirect to dashboard
      router.push("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6 relative z-10"
        aria-labelledby="signin-title"
      >
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
        <h1 id="signin-title" className="text-2xl font-bold text-center text-gray-700 mb-4">
          Sign In
        </h1>

        {/* Inputs */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. student@oxford.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            autoComplete="email"
            aria-describedby="email-help"
            required
          />
          <p id="email-help" className="text-xs text-gray-500">Use your registered university email.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-12 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              autoComplete="current-password"
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
          <p className="text-xs text-gray-500">Minimum 8 characters recommended.</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Sign In
        </button>
      </form>

      {/* Optional background shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
    </div>
  );
}