import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Platform,
} from "react-native";
import { styles } from "./CardList.styles";

export default function CardList({ data, navigation }) {
  const [scaleValues, setScaleValues] = useState(
    data.map(() => new Animated.Value(1))
  );

  const handleMouseEnter = (index) => {
    Animated.spring(scaleValues[index], {
      toValue: 1.1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleMouseLeave = (index) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.cardList}>
      {data.map((card, index) => (
        <TouchableOpacity
          key={card.id || index} // Уникальный ключ (card.id предпочтительнее)
          onPress={() => navigation.navigate("Films", { card })}
          {...(Platform.OS === "web" && {
            onMouseEnter: () => handleMouseEnter(index),
            onMouseLeave: () => handleMouseLeave(index),
          })}
        >
          <Animated.View
            style={[
              styles.card,
              { transform: [{ scale: scaleValues[index] }] },
            ]}
          >
            <Image source={card.img} style={styles.cardPhoto} />
            <View>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              <Text style={styles.cardPrice}>
                Цена: <Text style={styles.price}>{card.price}</Text>
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
