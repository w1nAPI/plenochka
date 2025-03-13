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


export const getCart = async () => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (!userData) throw new Error("User data not found");

    const { userId } = JSON.parse(userData); 
    const response = await fetch(`${CART_ENDPOINTS.getCart(userId)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Failed to fetch cart");

    const cartData = await response.json();
    return cartData.items.map((item) => ({
      id: item.filmId, 
      title: item.filmId.title, 
      img: item.filmId.img,  
      quantity: item.quantity,  
      price: item.filmId.price,  
    }));
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const removeFilmFromCart = async (filmId) => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (!userData) throw new Error("User data not found");

    const { userId } = JSON.parse(userData);
    const url = `${CART_ENDPOINTS.removeFilmFromCart(userId, filmId)}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to remove from cart");

    return data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};
