import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Catalog from "../components/Catalog/Catalog";
import { cardDataSort } from "../data/cardDataSorting";

export default function Hits() {
  const navigation = useNavigation();
  const cardDataHits = cardDataSort("hits");
  return (
    <ScrollView>
      <Catalog data={cardDataHits} navigation={navigation} />
    </ScrollView>
  );
}
