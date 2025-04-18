import { View, Text, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import styles from "./Banner.styles";
import { useNavigation } from "@react-navigation/native";

export default function Banner() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/bannerBack.jpg")}
      style={styles.banner}
    >
      <View style={styles.bannerContent}>
        <Image
          source={require("../../assets/logoPlenka.png")}
          style={styles.bannerLogo}
        />
        <View style={styles.bannerList}>
          <TouchableOpacity>
            <Text style={styles.bannerListContent}>Магазин</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.bannerListContent}
              onPress={() => navigation.navigate("Hits")}
            >
              Хиты
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.bannerListContent}
              onPress={() => navigation.navigate("New")}
            >
              Новики
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.bannerTitle}>
        Привет, это Plenochka📸.
        {"\n"}
        Мы проявляем, сканируем и продаём фотоплёнку, печатаем фотографии
      </Text>
    </ImageBackground>
  );
}
