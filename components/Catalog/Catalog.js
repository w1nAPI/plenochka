import { View, Text } from "react-native";
import styles from "./Catalog.styles";
import CardList from "../CardList/CardList";

export default function Catalog({ data, navigation }) {
  return (
    <View style={styles.catalog}>
      <Text style={styles.catalogTitle}>Каталог</Text>
      <CardList data={data} navigation={navigation} />
    </View>
  );
}
