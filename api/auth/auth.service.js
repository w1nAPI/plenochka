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

    const data = await parseJSON(response);

    if (response.ok) {
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ email, userId: data.userId })
      );

      console.log("User ID сохранен:", data.userId);

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

    const data = await parseJSON(response);

    if (response.ok) {
      console.log("User ID после регистрации:", data.userId);
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ email, userId: data.userId })
      );

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
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userData");

    console.log("User ID удален");

    setIsAuth(false);
    setEmail("");
    setPassword("");
  } catch (error) {
    console.error("Ошибка при выходе", error);
  }
};
