import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: 'http://localhost:8080', // Base URL of your API
    // You can add other Axios configuration options here if needed
  });

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      toast.error('Session expired. Please log in again.');
      window.location.href = '/loginAuth'; 
    }
    return Promise.reject(error);
  }
);
  
  export default api;