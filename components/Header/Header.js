import { SafeAreaView, View, Text } from "react-native";
import styles from "./Header.styles";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.menuList}>
        <Text style={styles.menuContent}>Ютуб</Text>
        <Text style={styles.menuContent}>Телеграм</Text>
        <Text style={styles.menuContent}>ВК</Text>
        <Text style={styles.menuContent}>Работаем с 10:00 до 22:00</Text>
        <Text style={styles.menuContent}>+7 999 999-99-99</Text>
      </View>
    </SafeAreaView>
  );
}
