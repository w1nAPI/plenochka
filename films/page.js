import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardList from "../components/CardList/CardList";
import styles from "./styles";
import { fetchFilms } from "../api/films/films.controller";
import { handleAddToCart } from "../api/cart/cart.controller";

export default function Films({ route, navigation }) {
  const { card } = route.params || {};
  const [films, setFilms] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        const { userId } = JSON.parse(userData);
        setUserId(userId);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchAndSetFilms = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchAndSetFilms();
  }, []);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = async () => {
    if (!userId) {
      console.error("User ID not found");
      return;
    }

    if (!card?.filmId) {
      console.error("Film ID is missing", card);
      return;
    }

    await handleAddToCart(card.filmId, quantity);
  };


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

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={addToCart}>
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
