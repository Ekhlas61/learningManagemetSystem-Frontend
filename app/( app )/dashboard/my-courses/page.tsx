"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { coursesService, Course, Enrollment } from "@/lib/courses";

interface CourseWithStatus extends Course {
  status: "Completed" | "Ongoing" | "Not Started";
}

export default function MyCourses() {
  const [courses, setCourses] = useState<CourseWithStatus[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Display error if any
  if (error) {
    console.warn('Courses API Error:', error);
  }

  // Fetch courses and enrollments on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [coursesData, enrollmentsData] = await Promise.all([
          coursesService.getCourses(),
          coursesService.getEnrollments()
        ]);
        
        // Map courses with status based on enrollments
        const coursesWithStatus: CourseWithStatus[] = coursesData.map(course => ({
          ...course,
          status: (enrollmentsData.find(e => e.courseId === course.id) ? "Ongoing" : "Not Started") as "Completed" | "Ongoing" | "Not Started"
        }));
        
        setCourses(coursesWithStatus);
        setEnrollments(enrollmentsData);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Fallback to static data if API fails
        setCourses([
          { id: "1", title: "Mathematics I", description: "Basic mathematics", instructor: "Dr. Smith", duration: "3 months", level: "Beginner", createdAt: "", updatedAt: "", status: "Ongoing" },
          { id: "2", title: "Introduction to Computing", description: "Computer science basics", instructor: "Dr. Johnson", duration: "4 months", level: "Beginner", createdAt: "", updatedAt: "", status: "Completed" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const semesters = [
    {
      name: "Semester 1",
      courses: [
        { module: "MTH101", name: "Mathematics I", unit: 3, status: "Completed" },
        { module: "CSC101", name: "Introduction to Computing", unit: 4, status: "Ongoing" },
        { module: "HIS101", name: "World History", unit: 3, status: "Ongoing" },
        { module: "PRG101", name: "Programming Fundamentals", unit: 4, status: "Not Started" },
      ],
    },
    {
      name: "Semester 2",
      courses: [
        { module: "ALG201", name: "Algorithms", unit: 3, status: "Ongoing" },
        { module: "DS201", name: "Data Structures", unit: 4, status: "Completed" },
        { module: "PHY201", name: "Physics I", unit: 3, status: "Ongoing" },
        { module: "WEB201", name: "Web Development I", unit: 4, status: "Not Started" },
      ],
    },
    {
      name: "Semester 3",
      courses: [
        { module: "DB301", name: "Database Systems", unit: 4, status: "Ongoing" },
        { module: "OS301", name: "Operating Systems", unit: 3, status: "Completed" },
        { module: "AI301", name: "Artificial Intelligence", unit: 3, status: "Not Started" },
        { module: "SE301", name: "Software Engineering", unit: 4, status: "Completed" },
      ],
    },
    {
      name: "Semester 4",
      courses: [
        { module: "ML401", name: "Machine Learning", unit: 4, status: "Ongoing" },
        { module: "CYB401", name: "Cybersecurity", unit: 3, status: "Completed" },
        { module: "PM401", name: "Project Management", unit: 3, status: "Not Started" },
        { module: "CAP401", name: "Final Year Capstone", unit: 5, status: "Ongoing" },
      ],
    },
  ];

  const [activeSemester, setActiveSemester] = useState(0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      {/* Semesters Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        <div className="flex bg-blue-900 rounded-xl p-2 shadow-md w-full max-w-5xl">
          {semesters.map((sem, index) => (
            <button
              key={index}
              onClick={() => setActiveSemester(index)}
              className={`flex-1 py-3 font-semibold rounded-xl transition duration-300 ease-in-out
                ${
                  activeSemester === index
                    ? "bg-white text-blue-900 shadow-lg scale-105"
                    : "text-white hover:bg-blue-800 hover:scale-105"
                }`}
            >
              {sem.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden w-full max-w-5xl mx-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Module</th>
              <th className="p-3">Course Name</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {semesters[activeSemester].courses.map((course, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{course.module}</td>
                <td className="p-3">
                  {/* Clickable course name with proper link */}
                  <Link
                    href={`/dashboard/my-courses/${course.module}`}
                    className="text-blue-600 hover:underline"
                  >
                    {course.name}
                  </Link>
                  </td>
                <td className="p-3">{course.unit}</td>
                <td
                  className={`p-3 font-semibold ${
                    course.status === "Completed"
                      ? "text-green-600"
                      : course.status === "Ongoing"
                      ? "text-yellow-600"
                      : "text-gray-500"
                  }`}
                >
                  {course.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}