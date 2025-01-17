import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  cardList: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWeb: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardMobile: {
    width: "33%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardPhoto: {
    width: "100%", // Изображение по ширине карточки
    height: 150, // Высота изображения    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "contain", // Изображение не искажено
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e53935",
  },
});
