import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Overlay from "../Overlay/Overlay";
import styles from "./AuthOverlay.styles";
export default function AuthOverlay({ overlay, setOverlay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Регистрация:", { email, password });
    setOverlay(false);
  };

  const handleLogin = () => {
    console.log("Вход:", { email, password });
    setOverlay(false);
  };

  return (
    <Overlay visible={overlay} onClose={() => setOverlay(false)}>
      <View style={styles.container}>
        <Text style={styles.title}>Добро пожаловать!</Text>
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Регистрация</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Вход</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
}
