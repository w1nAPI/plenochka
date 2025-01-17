import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 10,
    height: 70,
  },
  footerLogo: {
    flexBasis: 80,
    resizeMode: "contain",
  },
  menuList: {
    flexDirection: "row",
    marginBottom: 15,
  },
  menuContent: {
    padding: 10,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontFamily: "Impact",
    fontSize: 20,
  },
});
