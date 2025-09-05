"use client";
import { ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NotificationItem from "@/component/NotificationItem";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotifications = () => setShowNotifications((prev) => !prev);
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  const sampleNotifications = [
    {
      id: 1,
      profileImage: "/oxford1.jpg",
      senderName: "Student John",
      notificationText: "Commented on your forum post.",
    },
    {
      id: 2,
      profileImage: "/oxford2.jpg",
      senderName: "Instructor Alice",
      notificationText: "graded your quiz.",
    },
    {
      id: 3,
      profileImage: "/oxford3.jpg",
      senderName: "Instructor Lee",
      notificationText: "posted a new assignment.",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when clicking a notification
  const handleNotificationClick = () => {
    setShowNotifications(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-blue-900 text-white p-6 flex flex-col transition-all duration-300`}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="LMS" width={50} height={50} />
            {!collapsed && <span className="text-xl font-bold">LMS</span>}
          </div>
          <button onClick={toggleSidebar} className="text-2xl">
            ☰
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center mb-6">
          <Image
            src="/oxford1.jpg"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          {!collapsed && (
            <div className="ml-3">
              <p className="font-semibold">Hi, John</p>
              <p className="text-sm text-gray-300">ID: 2025A12</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
          >
            <span>🏠</span>
            {!collapsed && <span>Home</span>}
          </Link>
          <Link
            href="/dashboard/my-courses"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
          >
            <span>📘</span>
            {!collapsed && <span>My Courses</span>}
          </Link>
          <Link
            href="/dashboard/Assignment"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
          >
            <span>📝</span>
            {!collapsed && <span>Assignments</span>}
          </Link>
          <Link
            href="/dashboard/timetable"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
            >
            <span>📅</span>
            {!collapsed && <span>Time Table</span>}
          </Link>
          <Link
            href="/dashboard/forum"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
          >
            <span>💬</span>
            {!collapsed && <span>Forum</span>}
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
          >
            <span>⚙️</span>
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Top bar */}
        <header className="flex justify-end items-center p-4 bg-white shadow relative">
          {/* Notification Icon */}
          <button
            onClick={toggleNotifications}
            className="mr-4 text-xl hover:text-purple-600"
          >
            🔔
          </button>

          {/* Notification dropdown */}
          {showNotifications && (
            <div
              ref={dropdownRef}
              className="absolute top-12 right-0 w-64 bg-orange-100 shadow-lg p-4 rounded-lg z-10"
            >
              {sampleNotifications.map((notification) => (
                <div key={notification.id} onClick={handleNotificationClick}>
                  <NotificationItem
                    profileImage={notification.profileImage}
                    notificationText={notification.notificationText}
                    senderName={notification.senderName}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Message Icon */}
          <Link href="/dashboard/messages" className="text-xl hover:text-purple-600">
            💬
          </Link>
        </header>

        {/* Page content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}