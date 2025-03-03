import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import CardList from "../components/CardList/CardList";
import styles from "./styles";
import { getFilms } from "../api/filmsApi";

export default function Films({ route, navigation }) {
  const { card } = route.params || {};
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
    <ScrollView style={styles.container}>
      <View style={styles.product}>
        {card?.img ? (
          <Image source={{ uri: card.img }} style={styles.productImage} />
        ) : (
          <Text style={styles.errorText}>Изображение не найдено</Text>
        )}
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            {card?.title} {"\n"} {card?.code}
          </Text>
          <Text style={styles.productSubtitle}>{card?.firm}</Text>
          <Text style={styles.productPrice}>{card?.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Добавить</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Описание</Text>
          <Text style={styles.productDescription}>{card?.description}</Text>
          <Text style={styles.sectionTitle}>Параметр</Text>
          <Text style={styles.productDescription}>{card?.subtitle}</Text>
        </View>
      </View>

      <View style={styles.catalog}>
        <Text style={styles.catalogTitle}>Похожие</Text>
        <CardList data={films} navigation={navigation} />
      </View>
    </ScrollView>
  );
}
