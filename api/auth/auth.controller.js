import { login, register, logout } from "./auth.service";

export const AuthController = {
  login: async (email, password, setIsAuth, setOverlay) => {
    try {
      await login(email, password, setIsAuth, setOverlay); // Передаем setIsAuth
    } catch (error) {
      console.error("Ошибка входа:", error.message);
      throw new Error(error.message);
    }
  },

  register: async (email, password, handleLogin) => {
    try {
      await register(email, password, handleLogin);
    } catch (error) {
      console.error("Ошибка регистрации:", error.message);
      throw new Error(error.message);
    }
  },

  logout: (setIsAuth, setEmail, setPassword) => {
    logout(setIsAuth, setEmail, setPassword);
  },
};
