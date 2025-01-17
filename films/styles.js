import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isMobile = width < 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  product: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  productImageMobile: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productImage: {
    width: "40%",
    resizeMode: "contain",
  },
  productInfo: {
    flex: 1,
    paddingLeft: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productSubtitle: {
    color: "#555",
  },
  productPrice: {
    fontSize: 18,
    color: "green",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 15,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
  },
  catalogTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 24,
    paddingLeft: 10,
    marginBottom: 10,
  },
  cardList: {
    margin: 0,
    padding: 5,
  },
  catalog: {
    marginTop: 20,
    marginHorizontal: isMobile ? 10 : 20,
  },
  card: {
    flexBasis: isMobile ? "45%" : "30%",
    margin: isMobile ? 5 : 15,
    padding: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default styles;
