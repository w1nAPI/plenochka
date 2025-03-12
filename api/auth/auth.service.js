import { AUTH_ENDPOINTS } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const parseJSON = async (response) => {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Ошибка разбора JSON:", text);
    throw new Error("Сервер вернул неверный ответ");
  }
};

export const login = async (email, password, setIsAuth, setOverlay) => {
  try {
    const response = await fetch(AUTH_ENDPOINTS.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("Ответ сервера:", response);
    const data = await parseJSON(response);

    if (response.ok) {
      await AsyncStorage.setItem("token", data.token); // Сохраняем токен
      setIsAuth(true);
      setOverlay(false);
    } else {
      throw new Error(data.message || "Неверные данные");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Проблема с сетью, попробуйте позже.");
  }
};

export const register = async (email, password, loginCallback) => {
  try {
    const response = await fetch(AUTH_ENDPOINTS.register, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("Ответ сервера:", response);
    const data = await parseJSON(response);

    if (response.ok) {
      alert("Вы зарегистрированы!");
      await loginCallback();
    } else {
      throw new Error(data.message || "Не удалось зарегистрироваться");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Проблема с сетью, попробуйте позже.");
  }
};

export const logout = async (setIsAuth, setEmail, setPassword) => {
  await AsyncStorage.removeItem("token"); // Удаляем токен при выходе
  setIsAuth(false);
  setEmail("");
  setPassword("");
};
