"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaHome,
  FaBook,
  FaClipboard,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaBars,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Load sidebar state from localStorage
  useEffect(() => {
    const storedState = localStorage.getItem("sidebar-open");
    if (storedState) {
      setIsOpen(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-open", JSON.stringify(isOpen));
  }, [isOpen]);

  const user = {
    name: "Eyerusalem ",
    id: "IS-2025-001",
    profileImage: "/oxford1.jpg",
  };

  const menuItems = [
    { href: "/dashboard", label: "Home", icon: <FaHome /> },
    { href: "/dashboard/my-courses", label: "My Courses", icon: <FaBook /> },
    { href: "/dashboard/Assignment", label: "Assignments", icon: <FaClipboard /> },
    { href: "/dashboard/timetable", label: "Time Table", icon: <FaCalendarAlt /> },
    { href: "/dashboard/forum", label: "Forum", icon: <FaComments /> },
    { href: "/dashboard/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <aside
      className={`bg-blue-900 text-white h-screen p-4 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Top: Logo + Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="LMS Logo" className="w-8 h-8 rounded" />
          {isOpen && <span className="text-xl font-bold">MyLMS</span>}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Profile Section (now under logo) */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        {isOpen && (
          <div>
            <p className="font-semibold">Hi, {user.name}</p>
            <p className="text-sm text-gray-300">{user.id}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors 
              ${isOpen ? "justify-start" : "justify-center"} 
              hover:bg-blue-600`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="text-base">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}