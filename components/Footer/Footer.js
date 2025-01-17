import { View, Text, Image } from "react-native";
import styles from "./Footer.styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image
        source={require("../../assets/logoPlenka.png")}
        style={styles.footerLogo}
      />

      <View style={styles.menuList}>
        <Text style={styles.menuContent}>Магазин</Text>
        <Text style={styles.menuContent}>Хиты</Text>
        <Text style={styles.menuContent}>Корзина</Text>
        <Text style={styles.menuContent}>Акаунт</Text>
      </View>
    </View>
  );
}
