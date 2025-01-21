import React from "react";
import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Catalog from "../components/Catalog/Catalog";
import { cardData } from "../data/cardData";

export default function New() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Catalog data={cardData} navigation={navigation} />
    </ScrollView>
  );
}
