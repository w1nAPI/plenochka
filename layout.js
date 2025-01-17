import React from "react";
import { SafeAreaView, ScrollView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./page";
import Films from "./films/page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { isMobile } from "react-device-detect";
import styles from "./globals";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Home navigation={navigation} />
    </ScrollView>
  );
}

const isWeb = Platform.OS === "web";
const isDesktopBrowser = isWeb && !isMobile;

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {isDesktopBrowser && <Header />}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Films"
          component={Films}
          options={{ title: "Фильмы" }}
        />
      </Stack.Navigator>
      <Footer />
    </SafeAreaView>
  );
}
