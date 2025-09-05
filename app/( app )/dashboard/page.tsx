import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo.jpg" // put your logo in public/logo.png
          alt="Dashboard Logo"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">
        Welcome to the Dashboard
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Here you can manage your courses, assignments, timetable, and more. 
        Everything you need is just a click away from the sidebar!
      </p>

    </div>
  );
}