import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden p-6">

      {/* Floating background shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>

      {/* Main content card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full max-w-md space-y-6">
        
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.jpg"
            alt="Oxford LMS Logo"
            width={120}
            height={120}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-blue-900">
          Welcome to Oxford LMS
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg">
          Manage your courses, assignments, and progress all in one place.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}