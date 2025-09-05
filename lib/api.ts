import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include JWT token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response?: { status?: number } };
      if (axiosError.response?.status === 401) {
        // Token expired or invalid, redirect to login
        Cookies.remove('token');
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (username: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data;
  },
  
  logout: () => {
    Cookies.remove('token');
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};

// Courses API functions
export const coursesAPI = {
  getCourses: async () => {
    const response = await api.get('/courses');
    return response.data;
  },
  
  getCourse: async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },
  
  enroll: async (courseId: string) => {
    const response = await api.post('/enrollments', { courseId });
    return response.data;
  },
  
  getEnrollments: async () => {
    const response = await api.get('/enrollments');
    return response.data;
  }
};

// Assignments API functions
export const assignmentsAPI = {
  getAssignments: async () => {
    const response = await api.get('/assignments');
    return response.data;
  },
  
  getAssignment: async (id: string) => {
    const response = await api.get(`/assignments/${id}`);
    return response.data;
  },
  
  submitAssignment: async (assignmentId: string, answers: Record<string, unknown>) => {
    const response = await api.post(`/assignments/${assignmentId}/submit`, { answers });
    return response.data;
  }
};

export default api;
