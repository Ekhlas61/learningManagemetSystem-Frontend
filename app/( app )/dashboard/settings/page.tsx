"use client";
import { LuBell, LuLock, LuShield, LuUsers, LuKeyRound, LuGlobe, LuCircleAlert, LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const settingsOptions = [
    { id: 1, name: "Notifications", icon: <LuBell size={18} /> },
    { id: 2, name: "Change Password", icon: <LuLock size={18} /> },
    { id: 3, name: "Security", icon: <LuShield size={18} /> },
    { id: 4, name: "Friends", icon: <LuUsers size={18} /> },
    { id: 5, name: "Enable Two Step Verification", icon: <LuKeyRound size={18} /> },
    { id: 6, name: "Display and languages", icon: <LuGlobe size={18} /> },
    { id: 7, name: "Help", icon: <LuCircleAlert size={18} /> },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow divide-y">
        {settingsOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {option.icon}
              <span className="font-medium text-gray-800">{option.name}</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            try {
              localStorage.clear();
            } catch {}
            router.push("/signin");
          }}
          className="flex items-center gap-2 text-gray-700 hover:text-red-600"
        >
          <LuLogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}