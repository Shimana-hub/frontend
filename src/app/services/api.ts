import axios from "axios";
import { refresh, logout } from "./auth";

// Create axios instance
const api = axios.create({
  baseURL: "/api/v1", 
  headers: { "Content-Type": "application/json" },
});

// Request interceptor → attach access token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor → handle expired tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if 401 error and we haven’t retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newTokens = await refresh(); // calls /auth/refresh/
        if (newTokens?.access) {
          // update header with new token
          originalRequest.headers.Authorization = `Bearer ${newTokens.access}`;
          return api(originalRequest); // retry request
        }
      } catch (err) {
        logout(); // clear tokens
        window.location.href = "/auth/login"; // redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default api;
