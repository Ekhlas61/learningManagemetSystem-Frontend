"use client";
import { useState, useRef, useEffect } from "react";
import NotificationItem from "@/component/NotificationItem";

interface Notification {
  id: number;
  profileImage: string;
  notificationText: string;
  senderName: string;
}

const notificationsData: Notification[] = [
  { id: 1, profileImage: "/oxford1.jpg", notificationText: "posted a new assignment: React Project", senderName: "Instructor Alice" },
  { id: 2, profileImage: "/oxford2.jpg", notificationText: "graded your quiz: Mobile Computing", senderName: "Instructor Bob" },
  { id: 3, profileImage: "/oxford3.jpg", notificationText: "commented on your forum post", senderName: "Student Charlie" },
];

export default function NotificationPage() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when a notification is clicked
  const handleNotificationClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full min-h-screen p-4 bg-gray-50">
      {/* Bell icon container */}
      <div className="relative flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          🔔
        </button>

        {/* Dropdown */}
        {open && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-80 bg-orange-100 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {notificationsData.map((notif) => (
              <div key={notif.id} onClick={handleNotificationClick}>
                <NotificationItem
                  profileImage={notif.profileImage}
                  notificationText={notif.notificationText}
                  senderName={notif.senderName}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Page content */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Notifications Page</h1>
        <p>This page uses the notification icon with TikTok-style notifications.</p>
      </div>
    </div>
  );
}