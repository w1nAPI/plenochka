import { CART_ENDPOINTS } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getUserId = async () => {
  const userData = await AsyncStorage.getItem("userData");
  if (!userData) throw new Error("Данные пользователя не найдены");
  const { userId } = JSON.parse(userData);
  return userId;
};


export const addFilmToCart = async ({ filmId, quantity }) => {
  try {
    const userId = await getUserId();
    const response = await fetch(CART_ENDPOINTS.addFilmToCart(userId), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filmId, quantity }),
    });

    if (!response.ok) throw new Error("Не удалось добавить фильм в корзину");
    return await response.json();
  } catch (error) {
    console.error("Ошибка при добавлении фильма в корзину:", error);
    throw error;
  }
};


export const getCart = async () => {
  try {
    const userId = await getUserId();
    const response = await fetch(CART_ENDPOINTS.getCart(userId), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Не удалось получить корзину");
    const cartData = await response.json();
    return cartData.items.map((item) => ({
      id: item.filmId,
      title: item.filmId.title,
      img: item.filmId.img,
      quantity: item.quantity,
      price: item.filmId.price,
    }));
  } catch (error) {
    console.error("Ошибка при получении корзины:", error);
    throw error;
  }
};

export const removeFilmFromCart = async (filmId) => {
  try {
    const userId = await getUserId();
    const url = CART_ENDPOINTS.removeFilmFromCart(userId, filmId);
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Не удалось удалить из корзины");

    return data;
  } catch (error) {
    console.error("Ошибка при удалении из корзины:", error);
    throw error;
  }
};

export const removeAllFromCart = async () => {
  try {
    const userId = await getUserId();
    const url = CART_ENDPOINTS.removeAllFromCar(userId);
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok)
      throw new Error("Не удалось удалить все товары из корзины");
    return await response.json();
  } catch (error) {
    console.error("Ошибка при удалении всех товаров из корзины:", error);
    throw error;
  }
};
