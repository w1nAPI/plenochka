import { login, register, logout } from "./auth.service";

export const AuthController = {
  login: async (email, password, setIsAuth, setOverlay) => {
    try {
      await login(email, password);
      setIsAuth(true);
      setOverlay(false);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  register: async (email, password, handleLogin) => {
    try {
      await register(email, password);
      await handleLogin(); // Автоматический вход после регистрации
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: (setIsAuth, setEmail, setPassword) => {
    logout();
    setIsAuth(false);
    setEmail("");
    setPassword("");
  },
};
