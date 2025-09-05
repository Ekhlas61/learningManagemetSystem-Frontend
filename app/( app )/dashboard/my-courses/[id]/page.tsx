"use client";

import { useParams } from "next/navigation";

const courseData: Record<
  string,
  { title: string; description: string; videoUrl: string }
> = {
  MTH101: {
    title: "Mathematics I",
    description: "Learn the fundamentals of calculus and algebra with clear explanations and problem-solving techniques.",
    videoUrl: "https://www.youtube.com/embed/1YQmI7F9dJ0", // Math playlist
  },
  CSC101: {
    title: "Introduction to Computing",
    description: "Introduction to computing basics including history, hardware, and software concepts.",
    videoUrl: "https://www.youtube.com/embed/8mAITcNt710", // Computer Science crash course
  },
  HIS101: {
    title: "World History",
    description: "Explore key events and civilizations that shaped the world.",
    videoUrl: "https://www.youtube.com/embed/IJ4tZDuQ4T4", // World History
  },
  PRG101: {
    title: "Programming Fundamentals",
    description: "Learn basic programming concepts with examples in Python.",
    videoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8", // Python basics
  },
  ALG201: {
    title: "Algorithms",
    description: "Understand fundamental algorithms and problem-solving strategies.",
    videoUrl: "https://www.youtube.com/embed/8hly31xKli0", // Algorithms
  },
  DS201: {
    title: "Data Structures",
    description: "Learn about arrays, linked lists, stacks, queues, and trees.",
    videoUrl: "https://www.youtube.com/embed/zg9ih6SVACc", // Data Structures
  },
  PHY201: {
    title: "Physics I",
    description: "Basics of classical mechanics including motion, force, and energy.",
    videoUrl: "https://www.youtube.com/embed/kKKM8Y-u7ds", // Physics
  },
  WEB201: {
    title: "Web Development I",
    description: "Build modern websites using HTML, CSS, and JavaScript.",
    videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU", // HTML CSS JS tutorial
  },
  DB301: {
    title: "Database Systems",
    description: "Learn about relational databases, SQL, and data modeling.",
    videoUrl: "https://www.youtube.com/embed/ztHopE5Wnpc", // SQL tutorial
  },
  OS301: {
    title: "Operating Systems",
    description: "Operating system fundamentals: processes, memory, and file systems.",
    videoUrl: "https://www.youtube.com/embed/26QPDBe-NB8", // OS
  },
  AI301: {
    title: "Artificial Intelligence",
    description: "Introduction to AI concepts and applications in modern systems.",
    videoUrl: "https://www.youtube.com/embed/JMUxmLyrhSk", // AI basics
  },
  SE301: {
    title: "Software Engineering",
    description: "Principles of software development lifecycle and methodologies.",
    videoUrl: "https://www.youtube.com/embed/8eJkFukQk2Y", // Software Engineering
  },
  ML401: {
    title: "Machine Learning",
    description: "Introduction to supervised and unsupervised learning techniques.",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ", // ML basics
  },
  CYB401: {
    title: "Cybersecurity",
    description: "Cybersecurity basics, threats, and defense mechanisms.",
    videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA", // Cybersecurity
  },
  PM401: {
    title: "Project Management",
    description: "Learn project management frameworks and tools.",
    videoUrl: "https://www.youtube.com/embed/7Pj5kAhVBlE", // Project Management
  },
  CAP401: {
    title: "Final Year Capstone",
    description: "Capstone project guidelines and presentation tips.",
    videoUrl: "https://www.youtube.com/embed/9iD1xkQy4YQ", // Capstone guide
  },
};

export default function CoursePage() {
  const params = useParams();
  const id = params?.id as string;

  const course = courseData[id];

  if (!course) {
    return <p className="p-6">Course not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-6 text-gray-700">{course.description}</p>
      {/* Responsive video container */}
      <div className="relative w-full pb-[56.25%] h-0">
        <iframe
          src={course.videoUrl}
          title={course.title}
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}