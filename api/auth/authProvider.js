import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Индикатор загрузки токена

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          setIsAuth(true);
        }
      } catch (error) {
        console.error("Ошибка при получении токена", error);
      } finally {
        setLoading(false); // Завершаем проверку
      }
    };
    checkAuthStatus();
  }, []);

  if (loading) {
    return null; // Можно добавить спиннер загрузки
  }

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
