import Image from "next/image";

export default function TimetablePage() {
  const timetable = [
    { day: "Mon", time: "09:00 - 10:30", course: "CSC101 - Intro to CS", room: "A1" },
    { day: "Mon", time: "11:00 - 12:30", course: "MTH101 - Calculus I", room: "B2" },
    { day: "Wed", time: "10:00 - 11:30", course: "HIS101 - World History", room: "C3" },
    { day: "Fri", time: "13:00 - 14:30", course: "PHY101 - Mechanics", room: "D4" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.jpg" alt="LMS" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold text-blue-900">Time Table</h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {timetable.map((slot, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-lg border bg-white">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                  {slot.day}
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{slot.course}</p>
                  <p className="text-sm text-gray-500">{slot.time}</p>
                </div>
              </div>
              <div className="text-gray-600">Room {slot.room}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


