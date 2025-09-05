import { Bell, Lock, Shield, Users, KeyRound, Globe, HelpCircle, LogOut } from "lucide-react";

export default function SettingsPage() {
  const settingsOptions = [
    { id: 1, name: "Notifications", icon: <Bell size={18} /> },
    { id: 2, name: "Change Password", icon: <Lock size={18} /> },
    { id: 3, name: "Security", icon: <Shield size={18} /> },
    { id: 4, name: "Friends", icon: <Users size={18} /> },
    { id: 5, name: "Enable Two Step Verification", icon: <KeyRound size={18} /> },
    { id: 6, name: "Display and languages", icon: <Globe size={18} /> },
    { id: 7, name: "Help", icon: <HelpCircle size={18} /> },
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
              <span className="font-medium">{option.name}</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 text-gray-700 hover:text-red-600">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}