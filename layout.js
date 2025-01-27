import React, { useState } from "react";
import { SafeAreaView, ScrollView, Platform, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./page";
import Films from "./films/page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { isMobile } from "react-device-detect";
import styles from "./globals";
import Hits from "./hits/page";
import New from "./new/page";
import Overlay from "./components/Overlay/Overlay";
import AuthOverlay from "./components/AuthOverlay/AuthOverlay";
import CartOverlay from "./components/CartOverlay/CartOverlay";

const Stack = createStackNavigator();
const isWeb = Platform.OS === "web";
const isDesktopBrowser = isWeb && !isMobile;

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Home navigation={navigation} />
    </ScrollView>
  );
}

export default function RootLayout() {
  const [overlayAuthVisible, setOverlayAuthVisible] = useState(false);
  const [overlayCartVisible, setOverlayCartVisible] = useState(false);

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
        <Stack.Screen
          name="Hits"
          component={Hits}
          options={{ title: "Хиты" }}
        />
        <Stack.Screen
          name="New"
          component={New}
          options={{ title: "Новинки" }}
        />
      </Stack.Navigator>

      <AuthOverlay
        overlay={overlayAuthVisible}
        setOverlay={setOverlayAuthVisible}
      />

      <CartOverlay
        overlay={overlayCartVisible}
        setOverlay={setOverlayCartVisible}
      />
      <Footer
        onAccountPress={() => setOverlayAuthVisible(true)}
        onCartPress={() => setOverlayCartVisible(true)}
      />
    </SafeAreaView>
  );
}
