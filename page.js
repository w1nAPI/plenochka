import Banner from "./components/Banner/Banner";
import Info from "./components/Info/Info";
import Catalog from "./components/Catalog/Catalog";
import { cardData } from "./data/cardData";
import { View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Banner navigation={navigation} />
      <Info />
      <Catalog data={cardData} navigation={navigation} />
    </View>
  );
}
