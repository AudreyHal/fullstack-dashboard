import axios from "axios";
import { getToken } from "../utilities/Auth";

// Configure axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    ContentType: "application/json",
  },
});

// Adds a request interceptor to dynamically set the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
