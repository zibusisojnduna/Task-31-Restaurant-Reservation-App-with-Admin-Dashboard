import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change this to your backend URL if hosted

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization token to requests if user is logged in
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token"); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
