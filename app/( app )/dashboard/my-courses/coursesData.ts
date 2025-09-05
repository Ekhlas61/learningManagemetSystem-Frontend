// app/(app)/dashboard/my-courses/coursesData.ts
export interface CourseDetail {
  id: string;
  name: string;
  description: string;
  youtubeUrl: string;
}

export const coursesData: CourseDetail[] = [
  {
    id: "MTH101",
    name: "Mathematics I",
    description: "Introduction to fundamental mathematics concepts including algebra, calculus, and trigonometry.",
    youtubeUrl: "https://www.youtube.com/embed/2Rr2tW9q7Xo",
  },
  {
    id: "CSC101",
    name: "Introduction to Computing",
    description: "Covers the basics of computer systems, hardware, software, and problem solving techniques.",
    youtubeUrl: "https://www.youtube.com/embed/ub3T9kV3qQc",
  },
  {
    id: "HIS101",
    name: "World History",
    description: "A journey through world history focusing on major civilizations and historical events.",
    youtubeUrl: "https://www.youtube.com/embed/d4O8B4btX6o",
  },
  {
    id: "PRG101",
    name: "Programming Fundamentals",
    description: "Learn the basics of programming with hands-on examples in Python and JavaScript.",
    youtubeUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
  },
  {
    id: "ALG201",
    name: "Algorithms",
    description: "Study common algorithms, their complexities, and applications in real-world problem solving.",
    youtubeUrl: "https://www.youtube.com/embed/8hly31xKli0",
  },
  {
    id: "DS201",
    name: "Data Structures",
    description: "Explore data structures such as arrays, linked lists, stacks, queues, and trees.",
    youtubeUrl: "https://www.youtube.com/embed/sVxBVvlnJsM",
  },
  {
    id: "PHY201",
    name: "Physics I",
    description: "Introduction to mechanics, motion, forces, energy, and fundamental physical concepts.",
    youtubeUrl: "https://www.youtube.com/embed/KYrlzEHVvw8",
  },
  {
    id: "WEB201",
    name: "Web Development I",
    description: "Learn HTML, CSS, and JavaScript to build interactive and modern web applications.",
    youtubeUrl: "https://www.youtube.com/embed/HD13eq_Pmp8",
  },
  {
    id: "DB301",
    name: "Database Systems",
    description: "Understand relational databases, SQL queries, and database design principles.",
    youtubeUrl: "https://www.youtube.com/embed/9Pzj7Aj25lw",
  },
  {
    id: "OS301",
    name: "Operating Systems",
    description: "Covers OS concepts such as processes, threads, memory management, and file systems.",
    youtubeUrl: "https://www.youtube.com/embed/26QPDBe-NB8",
  },
  {
    id: "AI301",
    name: "Artificial Intelligence",
    description: "Introduction to AI concepts such as search algorithms, machine learning, and neural networks.",
    youtubeUrl: "https://www.youtube.com/embed/JMUxmLyrhSk",
  },
  {
    id: "SE301",
    name: "Software Engineering",
    description: "Learn software development life cycle, methodologies, and project management practices.",
    youtubeUrl: "https://www.youtube.com/embed/vqS1nVQdL1Q",
  },
  {
    id: "ML401",
    name: "Machine Learning",
    description: "Covers supervised and unsupervised learning, model evaluation, and practical ML tools.",
    youtubeUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
  },
  {
    id: "CYB401",
    name: "Cybersecurity",
    description: "Introduction to cybersecurity fundamentals, threats, encryption, and ethical hacking.",
    youtubeUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
  },
  {
    id: "PM401",
    name: "Project Management",
    description: "Learn project planning, scheduling, and management techniques using modern tools.",
    youtubeUrl: "https://www.youtube.com/embed/Jk-JwtScIlw",
  },
  {
    id: "CAP401",
    name: "Final Year Capstone",
    description: "A capstone project integrating knowledge and skills learned throughout the program.",
    youtubeUrl: "https://www.youtube.com/embed/XYi2-LPrwm4",
  },
];