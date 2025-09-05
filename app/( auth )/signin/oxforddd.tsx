"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Sign In
        </h1>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

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