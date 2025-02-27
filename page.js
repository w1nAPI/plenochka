import Banner from "./components/Banner/Banner";
import Info from "./components/Info/Info";
import Catalog from "./components/Catalog/Catalog";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { getFilms } from "./api/filmsApi";

export default function Home({ navigation }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (err) {
        console.error("Ошибка загрузки фильмов:", err);
      }
    };
    fetchFilms();
  }, []);

  return (
    <View>
      <Banner navigation={navigation} />
      <Info />
      <Catalog data={films} navigation={navigation} />
    </View>
  );
}
