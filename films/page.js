import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CardList from "../components/CardList/CardList";
import { cardData } from "../data/cardData";
import styles from "./styles";

export default function Films({ route, navigation }) {
  const { card } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.product}>
        <Image source={card.img} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            {card.title}
            {"\n"}
            {card.code}
          </Text>
          <Text style={styles.productSubtitle}>{card.firm}</Text>
          <Text style={styles.productPrice}>{card.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Добавить</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Описание</Text>
          <Text style={styles.productDescription}>{card.description}</Text>
          <Text style={styles.sectionTitle}>Параметр</Text>
          <Text style={styles.productDescription}>{card.subtitle}</Text>
        </View>
      </View>

      <View style={styles.catalog}>
        <Text style={styles.catalogTitle}>Похожие</Text>
        <CardList data={cardData} navigation={navigation} />
      </View>
    </ScrollView>
  );
}