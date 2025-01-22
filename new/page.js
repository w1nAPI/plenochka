import React from "react";
import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Catalog from "../components/Catalog/Catalog";
import { cardDataSort } from '../data/cardDataSorting';

export default function New() {
  const navigation = useNavigation();
  const cardDataNew =cardDataSort("new")
  return (
    <ScrollView>
      <Catalog data={cardDataNew} navigation={navigation} />
    </ScrollView>
  );
}
