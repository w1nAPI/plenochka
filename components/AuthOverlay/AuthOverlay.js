import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Overlay from "../Overlay/Overlay";
import { useAuth } from "../../hooks/useAuth";
import styles from "./AuthOverlay.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthController } from "../../api/auth/auth.controller";

export default function AuthOverlay({ overlay, setOverlay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useAuth();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) setIsAuth(true);
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
      }
    };

    loadUserData();
  }, []);

  const handleLogin = async () => {
    try {
      await AuthController.login(email, password, setIsAuth, setOverlay);
    } catch (error) {
      Alert.alert("Ошибка", error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await AuthController.register(email, password, handleLogin);
    } catch (error) {
      Alert.alert("Ошибка", error.message);
    }
  };

  const handleLogout = () => {
    AuthController.logout(setIsAuth, setEmail, setPassword);
  };

  return (
    <Overlay visible={overlay} onClose={() => setOverlay(false)}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {isAuth ? "Вы авторизованы!" : "Добро пожаловать!"}
        </Text>
        {!isAuth && (
          <>
            <Text style={styles.subtitle}>
              Пожалуйста, зарегистрируйтесь или войдите в аккаунт.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Введите email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Введите пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </>
        )}
        <View style={styles.buttonContainer}>
          {!isAuth ? (
            <>
              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Регистрация</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Вход</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.logoutButton]}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Выход</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Overlay>
  );
}
