import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Catalog from "../components/Catalog/Catalog";
import { getFilmsByCategory } from "../api/filmsApi";

export default function Hits() {
  const [films, setFilms] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilmsByCategory("hits");
        setFilms(data);
      } catch (err) {
        console.error("Ошибка загрузки фильмов:", err);
      }
    };
    fetchFilms();
  }, []);
  return (
    <ScrollView>
      <Catalog data={films} navigation={navigation} />
    </ScrollView>
  );
}
