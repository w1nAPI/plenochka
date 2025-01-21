import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Info.styles";

export default function Info() {
  return (
    <View style={styles.info}>
      <View style={styles.infoText}>
        <Text style={styles.infoTitle}>Любовь к плёнке, люди и опыт</Text>
        <View style={styles.infoSubtitle}>
          <Text style={styles.infoSubtitleIndent}>
            В нашей команде нет случайных людей, потому что я работаю здесь
            один. Поэтому каждый сотрудник поможет собрать заказ и ответит на
            вопросы без снобизма.
          </Text>
        </View>
      </View>
      <Image
        source={require("../../assets/info.jpg")} 
        style={styles.infoPhoto}
      />
    </View>
  );
}
