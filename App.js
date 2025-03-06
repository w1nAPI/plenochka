import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootLayout from "./layout";
import { AuthProvider } from "./api/auth/authProvider";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootLayout />
      </NavigationContainer>
    </AuthProvider>
  );
}
