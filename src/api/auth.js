import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";

// Register user
export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data);
    throw error;
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    await AsyncStorage.setItem("token", response.data.token); // Save token for future requests
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  await AsyncStorage.removeItem("token");
};
