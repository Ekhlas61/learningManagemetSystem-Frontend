import { coursesAPI } from './api';

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  enrolledAt: string;
  course: Course;
}

export const coursesService = {
  // Get all courses
  getCourses: async (): Promise<Course[]> => {
    try {
      const response = await coursesAPI.getCourses();
      return response.courses || response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch courses');
    }
  },

  // Get single course
  getCourse: async (id: string): Promise<Course> => {
    try {
      const response = await coursesAPI.getCourse(id);
      return response.course || response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch course');
    }
  },

  // Enroll in course
  enroll: async (courseId: string): Promise<Enrollment> => {
    try {
      const response = await coursesAPI.enroll(courseId);
      return response.enrollment || response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to enroll in course');
    }
  },

  // Get user enrollments
  getEnrollments: async (): Promise<Enrollment[]> => {
    try {
      const response = await coursesAPI.getEnrollments();
      return response.enrollments || response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch enrollments');
    }
  }
};
