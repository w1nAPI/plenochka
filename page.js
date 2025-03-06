import Banner from "./components/Banner/Banner";
import Info from "./components/Info/Info";
import Catalog from "./components/Catalog/Catalog";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { fetchFilms } from "./api/films/films.controller";

export default function Home({ navigation }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms().then(setFilms);
  }, []);

  return (
    <View>
      <Banner navigation={navigation} />
      <Info />
      <Catalog data={films} navigation={navigation} />
    </View>
  );
}
