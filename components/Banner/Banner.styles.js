import { StyleSheet } from "react-native";

export default StyleSheet.create({
  banner: {
    flexBasis: "40%",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    width: "100%",
    paddingLeft: "15%",
    paddingTop: "3%",
    paddingRight: "2%",
  },
  bannerLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bannerList: {
    flexDirection: "row",
    alignItems: "center",
  },
  bannerListContent: {
    fontSize: "12",
    paddingLeft: 15,
    color: "white",
  },
  bannerTitle: {
    paddingLeft: "15%",
    paddingTop: "5%",
    fontWeight: "bold",
    paddingTop: 50,
    paddingBottom: "50",
    color: "white",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 20,
  },
});
