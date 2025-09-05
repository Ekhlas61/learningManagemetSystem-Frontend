"use client";
import { useState, useRef, useEffect } from "react";
import NotificationItem from "./NotificationItem";

interface Notification {
  id: number;
  profileImage: string;
  notificationText: string;
  senderName: string;
}

const notificationsData: Notification[] = [
  { id: 1, profileImage: "/oxford1.jpg", notificationText: "Liked your post", senderName: "John Doe" },
  { id: 2, profileImage: "/oxford2.jpg", notificationText: "Commented: Nice work!", senderName: "Jane Smith" },
  { id: 3, profileImage: "/oxford3.jpg", notificationText: "Started following you", senderName: "Mike Lee" },
];

export default function NotificationDropdown() {
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

  return (
    <div className="relative">
      {/* Bell Icon */}
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
            <NotificationItem
              key={notif.id}
              profileImage={notif.profileImage}
              notificationText={notif.notificationText}
              senderName={notif.senderName}
            />
          ))}
        </div>
      )}
    </div>
  );
}