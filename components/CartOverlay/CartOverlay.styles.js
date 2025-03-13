import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
  cartItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemDetails: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    marginHorizontal: 5,
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: "#FF6347",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  orderAllButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#28A745",
    borderRadius: 8,
    alignItems: "center",
  },
  orderAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeAllButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#FF6347",
    borderRadius: 8,
    alignItems: "center",
  },
  removeAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollContainer: {
    maxHeight: "70vh",
    overflowY: "auto",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
