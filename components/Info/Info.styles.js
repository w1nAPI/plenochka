import { StyleSheet, Dimensions } from "react-native";
 
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  infoText: {
    flexBasis: width * 0.6,
    marginLeft: width * 0.05,
    marginTop: width * 0.05,
  },
  infoTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  infoSubtitle: {
    paddingTop: height * 0.02,
  },
  infoSubtitleIndent: {
    textIndent: width * 0.05,
    lineHeight: height * 0.06,
  },
  infoPhoto: {
    flexBasis: width * 0.35,
    height: height * 0.25,
    margin: width * 0.05,
    resizeMode: "contain",
  },
});
