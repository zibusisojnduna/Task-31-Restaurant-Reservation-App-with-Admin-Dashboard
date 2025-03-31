import api from "./api";

export const fetchRestaurants = async () => {
  try {
    const response = await api.get("/restaurants");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch restaurants:", error.response?.data);
    throw error;
  }
};
