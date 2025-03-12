import { CART_ENDPOINTS } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addFilmToCart = async ({ filmId, quantity }) => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (!userData) throw new Error("User data not found");

    const { userId } = JSON.parse(userData);
    const response = await fetch(`${CART_ENDPOINTS.addFilmToCart(userId)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filmId, quantity }),
    });

    if (!response.ok) throw new Error("Failed to add film to cart");

    return await response.json();
  } catch (error) {
    console.error("Error adding film to cart:", error);
    throw error;
  }
};
