import { authAPI } from './api';
import Cookies from 'js-cookie';

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  // Login user
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await authAPI.login(email, password);
      
      // Store token in cookie
      Cookies.set('token', response.token, { expires: 7 }); // 7 days
      
      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Register user
  register: async (username: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await authAPI.register(username, email, password);
      
      // Store token in cookie
      Cookies.set('token', response.token, { expires: 7 }); // 7 days
      
      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Logout user
  logout: () => {
    authAPI.logout();
    // Clear any other user data from localStorage
    localStorage.clear();
  },

  // Get current user
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const token = Cookies.get('token');
      if (!token) return null;
      
      const response = await authAPI.getCurrentUser();
      return response.user;
    } catch (error) {
      // Token might be invalid, clear it
      authAPI.logout();
      return null;
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!Cookies.get('token');
  },

  // Get token
  getToken: (): string | null => {
    return Cookies.get('token') || null;
  }
};
