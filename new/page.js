import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Catalog from "../components/Catalog/Catalog";
import { fetchFilmsByCategory } from "../api/films/films.controller";

export default function New() {
  const [films, setFilms] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    fetchFilmsByCategory("new").then(setFilms);
  }, []);

  return (
    <ScrollView>
      <Catalog data={films} navigation={navigation} />
    </ScrollView>
  );
}
