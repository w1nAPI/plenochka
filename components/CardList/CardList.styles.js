import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  cardList: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWeb: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 10,
    alignItems: "center",
  },
  cardMobile: {
    borderRadius: 8,
    alignItems: "center",
  },
  cardPhoto: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: "contain",
  },
  cardPhotoMobile: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
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
