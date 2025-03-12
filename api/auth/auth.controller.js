import { login, register, logout } from "./auth.service";

export const AuthController = {
  login: async (email, password, setIsAuth, setOverlay) => {
    try {
      await login(email, password, setIsAuth, setOverlay);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  register: async (email, password, handleLogin) => {
    try {
      await register(email, password, handleLogin);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: async (setIsAuth, setEmail, setPassword) => {
    await logout(setIsAuth, setEmail, setPassword);
  },
};
