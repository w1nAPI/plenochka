import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { styles } from "./CardList.styles";

export default function CardList({ data, navigation }) {
  const [scaleValues, setScaleValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setScaleValues(data.map(() => new Animated.Value(1)));
      setLoading(false);
    }
  }, [data]);

  const handleMouseEnter = (index) => {
    Animated.spring(scaleValues[index], {
      toValue: 1.1,
      friction: 3,
      tension: 100,
      useNativeDriver: true, // Всегда используйте useNativeDriver для лучшей производительности
    }).start();
  };

  const handleMouseLeave = (index) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true, // Всегда используйте useNativeDriver для лучшей производительности
    }).start();
  };

  return (
    <View style={styles.cardList}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data.map((card, index) => (
          <TouchableOpacity
            key={card.id || index}
            onPress={() => navigation.navigate("Films", { card })}
            {...(Platform.OS === "web" && {
              onMouseEnter: () => handleMouseEnter(index),
              onMouseLeave: () => handleMouseLeave(index),
            })}
          >
            <Animated.View
              style={[
                Platform.OS === "web" ? styles.cardWeb : styles.cardMobile,
                { transform: [{ scale: scaleValues[index] }] },
              ]}
            >
              <Image
                source={{ uri: card.img }} // Используем { uri: card.img }
                style={
                  Platform.OS === "web"
                    ? styles.cardPhoto
                    : styles.cardPhotoMobile
                }
                onError={() =>
                  console.error("Ошибка загрузки изображения:", card.img)
                } // Обработчик ошибок
              />
              <View>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                <Text style={styles.cardPrice}>
                  Цена: <Text style={styles.price}>{card.price}</Text>
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}
