"use client";

import { useState } from "react";
import Link from "next/link";

interface Assignment {
  unit: string;
  subject: string;
  issued: string;
  deadline: string;
  status: "Submitted" | "Pending" | "Late Submission";
}

export default function AssignmentPage() {
  const [semester, setSemester] = useState(1);

  const assignmentsBySemester: Record<number, Assignment[]> = {
    1: [
      { unit: "01", subject: "Mathematics", issued: "01/02/2023", deadline: "01/15/2023", status: "Pending" },
      { unit: "02", subject: "Database", issued: "01/05/2023", deadline: "01/20/2023", status: "Submitted" },
      { unit: "03", subject: "Programming", issued: "01/10/2023", deadline: "01/25/2023", status: "Late Submission" },
      { unit: "04", subject: "English", issued: "01/12/2023", deadline: "01/28/2023", status: "Pending" },
    ],
    2: [
      { unit: "05", subject: "Networking", issued: "02/01/2023", deadline: "02/15/2023", status: "Submitted" },
      { unit: "06", subject: "Security", issued: "02/03/2023", deadline: "02/18/2023", status: "Pending" },
      { unit: "07", subject: "MobileComputing", issued: "02/05/2023", deadline: "02/20/2023", status: "Pending" },
      { unit: "08", subject: "Algorithms", issued: "02/10/2023", deadline: "02/25/2023", status: "Late Submission" },
    ],
    3: [
      { unit: "09", subject: "SoftwareEngineering", issued: "03/01/2023", deadline: "03/15/2023", status: "Pending" },
      { unit: "10", subject: "WebDevelopment", issued: "03/03/2023", deadline: "03/18/2023", status: "Submitted" },
      { unit: "11", subject: "OperatingSystems", issued: "03/05/2023", deadline: "03/20/2023", status: "Pending" },
      { unit: "12", subject: "AIBasics", issued: "03/10/2023", deadline: "03/25/2023", status: "Late Submission" },
    ],
    4: [
      { unit: "13", subject: "MachineLearning", issued: "04/01/2023", deadline: "04/15/2023", status: "Submitted" },
      { unit: "14", subject: "CloudComputing", issued: "04/03/2023", deadline: "04/18/2023", status: "Pending" },
      { unit: "15", subject: "BigData", issued: "04/05/2023", deadline: "04/20/2023", status: "Pending" },
      { unit: "16", subject: "CyberSecurity", issued: "04/10/2023", deadline: "04/25/2023", status: "Late Submission" },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Assignment</h1>

      {/* Semester Tabs */}
      <div className="bg-blue-900 rounded-xl mb-6 p-2 flex gap-2 shadow-md">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setSemester(num)}
            className={`flex-1 py-2 font-medium rounded-xl transition duration-300 ease-in-out
              ${semester === num
                ? "bg-white text-blue-900 shadow-lg transform scale-105"
                : "text-white hover:bg-blue-800 hover:scale-105"}`
            }
          >
            Semester 0{num}
          </button>
        ))}
      </div>

      {/* Assignments Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Unit</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Issued Date</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignmentsBySemester[semester].map((a, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{a.unit}</td>
                <td className="p-3">
                  <Link
                    href={`/dashboard/Assignment/${encodeURIComponent(a.subject.trim())}`}
                    className="text-blue-600 hover:underline"
                  >
                    {a.subject.trim()}
                  </Link>
                </td>
                <td className="p-3">{a.issued}</td>
                <td className="p-3">{a.deadline}</td>
                <td className="p-3">
                  {a.status === "Submitted" && <span className="text-green-600 font-semibold">Submitted</span>}
                  {a.status === "Pending" && <span className="text-yellow-600 font-semibold">Pending</span>}
                  {a.status === "Late Submission" && <span className="text-red-600 font-semibold">Late Submission</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}