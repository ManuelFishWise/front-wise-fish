import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config: any) => {
      if (!config.headers) {
        config.headers = {};
      }
  
      const token = localStorage.getItem('accessToken');
  
      // If a token exists, set the authorization header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );