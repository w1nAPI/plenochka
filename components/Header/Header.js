import React from "react";
import { SafeAreaView, View, Text, Linking } from "react-native";
import styles from "./Header.styles";

export default function Header() {
  const urlData = {
    youtube: "https://youtu.be/-v8mzH0fTc4?si=JMS4jJFqtj41FYWi",
    telegram:
      "https://www.youtube.com/watch?v=EJeVbwDEjCQ&t=4012s&ab_channel=OZON671GAMES3",
    vk: "https://youtu.be/-v8mzH0fTc4?si=JMS4jJFqtj41FYWi",
  };

  const openUrl = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Cannot open URL:", url);
    }
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.menuList}>
        <Text
          style={styles.menuContent}
          onPress={() => openUrl(urlData.youtube)}
        >
          Ютуб
        </Text>
        <Text
          style={styles.menuContent}
          onPress={() => openUrl(urlData.telegram)}
        >
          Телеграм
        </Text>
        <Text style={styles.menuContent} onPress={() => openUrl(urlData.vk)}>
          ВК
        </Text>
        <Text style={styles.menuContent}>Работаем с 10:00 до 22:00</Text>
        <Text style={styles.menuContent}>+7 999 999-99-99</Text>
      </View>
    </SafeAreaView>
  );
}
