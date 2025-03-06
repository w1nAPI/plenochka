import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Overlay from "../Overlay/Overlay";

import styles from "./CarrOverlay.styles";
export default function CartOverlay({ overlay, setOverlay }) {
  const [cartItems, setCartItems] = React.useState([]);

  const handleOrderAll = () => {
    alert("Все товары заказаны!");
    setCartItems([]);
    setOverlay(false);
  };

  const handleOrderOne = (item) => {
    alert(`Заказана плёнка: ${item.title}`);
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleRemove = (item) => {
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
    alert(`Удалена плёнка: ${item.title}`);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
    alert("Все товары удалены!");
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
                <Image source={item.img} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.title}>{item.title}</Text>
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
                  <Text style={styles.orderAllText}>Заказать всё</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeAllButton}
                  onPress={handleRemoveAll}
                >
                  <Text style={styles.removeAllText}>Удалить всё</Text>
                </TouchableOpacity>
              </>
            }
          />
        </View>
      )}
    </Overlay>
  );
}
