"use client";
import { useRouter } from "next/navigation";

export default function VerifyOtp() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-96 text-center">
        <h2 className="text-lg font-semibold mb-4">Enter OTP to Verify</h2>

        {/* OTP input fields */}
        <div className="flex justify-between mb-3">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 border rounded-md text-center"
            />
          ))}
        </div>

        <p className="text-sm text-blue-600 cursor-pointer mb-3">Resend OTP</p>

        <button
          onClick={() => router.push("/signin")}
          className="w-full bg-blue-900 text-white py-2 rounded-md"
        >
          Submit
        </button>

        <p
          onClick={() => router.push("/signin")}
          className="text-sm mt-3 text-blue-600 cursor-pointer"
        >
          Back to Login Page
        </p>
      </div>
    </div>
  );
}