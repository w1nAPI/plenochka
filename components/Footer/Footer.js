import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Footer.styles";

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <Image
        source={require("../../assets/logoPlenka.png")}
        style={styles.footerLogo}
      />

      <View style={styles.menuList}>
        <Text
          style={styles.menuContent}
          onPress={() => navigation.navigate("New")}
        >
          Новинки
        </Text>
        <Text
          style={styles.menuContent}
          onPress={() => navigation.navigate("Hits")}
        >
          Хиты
        </Text>
        <Text style={styles.menuContent}>Корзина</Text>
        <Text style={styles.menuContent}>Акаунт</Text>
      </View>
    </View>
  );
}
