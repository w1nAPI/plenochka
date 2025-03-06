import { useContext } from "react";
import { AuthContext } from "../api/auth/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
