import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isMobile = width < 768;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  product: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  productImageMobile: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productImage: {
    flex: 1,
    height: 300,
    resizeMode: "contain",
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    paddingLeft: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  productSubtitle: {
    color: "#555",
    fontSize: 16,
  },
  productPrice: {
    fontSize: 20,
    color: "green",
    marginVertical: 10,
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: "bold",
    color: "#333",
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  catalogTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 24,
    paddingLeft: 10,
    marginBottom: 10,
    fontWeight: "bold",
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
