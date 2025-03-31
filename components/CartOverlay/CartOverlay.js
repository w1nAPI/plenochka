import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import {
  getCart,
  removeFilmFromCart,
  removeAllFromCart,
  updateFilmQuantityInCart,
} from "../../api/cart/cart.controller";
import Overlay from "../Overlay/Overlay";
import styles from "./CartOverlay.styles";
import { getFilmById } from "../../api/films/films.service";

export default function CartOverlay({ overlay, setOverlay }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (overlay) {
      loadCart();
    }
  }, [overlay]);

  const loadCart = async () => {
    try {
      const items = await getCart();
      const films = await Promise.all(
        items.map(async (item) => {
          const filmDetails = await getFilmById(item.id);
          return { ...item, ...filmDetails };
        })
      );
      setCartItems(films);
    } catch (error) {
      console.error("Не удалось загрузить корзину", error);
    }
  };

  const handleRemove = async (item) => {
    await removeFilmFromCart(item.id);
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleRemoveAll = async () => {
    await removeAllFromCart();
    setCartItems([]);
  };

  const handleOrderAll = () => {
    alert("Все товары заказаны!");
    setOverlay(false);
  };

  const handleOrderOne = (item) => {
    alert(`Заказан фильм: ${item.title}`);
    setOverlay(false);
  };

  const updateQuantity = async (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    const updatedItem = cartItems.find((item) => item.id === id);
    if (updatedItem) {
      await updateFilmQuantityInCart({
        filmId: id,
        quantity: Math.max(1, updatedItem.quantity + delta),
      });
    }
  };

  return (
    <Overlay visible={overlay} onClose={() => setOverlay(false)}>
      <Text style={styles.header}>Корзина</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Корзина пуста</Text>
      ) : (
        <View style={styles.scrollContainer}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, -1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, 1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.price}>Цена: {item.price}</Text>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOrderOne(item)}
                  >
                    <Text style={styles.buttonText}>Заказать</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.removeButton]}
                    onPress={() => handleRemove(item)}
                  >
                    <Text style={styles.buttonText}>Удалить</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ListFooterComponent={
              <View>
                <TouchableOpacity
                  style={styles.orderAllButton}
                  onPress={handleOrderAll}
                >
                  <Text style={styles.orderAllText}>Заказать все</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeAllButton}
                  onPress={handleRemoveAll}
                >
                  <Text style={styles.removeAllText}>Удалить все</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      )}
    </Overlay>
  );
}
