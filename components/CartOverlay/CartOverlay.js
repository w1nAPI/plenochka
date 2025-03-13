import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { getCart, removeFilmFromCart, removeAllFromCart } from "../../api/cart/cart.controller"; // Assuming there's an API function to remove all items
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

  const handleRemoveAll = async () => {
    await removeAllFromCart(); // Assuming this function exists in your API to remove all items
    setCartItems([]); // Clear the cart in the UI
  };

  const handleOrderAll = () => {
    alert("Все товары заказаны!");
    setOverlay(false);
  };

  const handleOrderOne = (item) => {
    alert(`Заказан фильм: ${item.title}`);
    setOverlay(false);
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
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
                      onPress={() => decreaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item.id)}
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
