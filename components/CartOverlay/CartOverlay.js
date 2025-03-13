import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { getCart, removeFilmFromCart } from "../../api/cart/cart.controller";
import Overlay from "../Overlay/Overlay";
import styles from "./CartOverlay.styles";

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
      setCartItems(items);
    } catch (error) {
      console.error("Не удалось загрузить корзину", error);
    }
  };

  const handleRemove = async (item) => {
    await removeFilmFromCart(item.id);
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleOrderAll = () => {
    alert("Все товары заказаны!");
    setOverlay(false);
  };

  const handleOrderOne = (item) => {
    alert(`Заказан фильм: ${item.title}`);
    setOverlay(false);
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
                  <Text style={styles.quantity}>
                    Количество: {item.quantity}
                  </Text>
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
              <>
                <TouchableOpacity
                  style={styles.orderAllButton}
                  onPress={handleOrderAll}
                >
                  <Text style={styles.orderAllText}>Заказать все</Text>
                </TouchableOpacity>
              </>
            }
          />
        </View>
      )}
    </Overlay>
  );
}
