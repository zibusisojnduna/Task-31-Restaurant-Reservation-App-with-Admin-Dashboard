import api from "./api";

export const createReservation = async (restaurantId, date, time) => {
  try {
    const response = await api.post("/reservations", { restaurantId, date, time });
    return response.data;
  } catch (error) {
    console.error("Failed to create reservation:", error.response?.data);
    throw error;
  }
};
