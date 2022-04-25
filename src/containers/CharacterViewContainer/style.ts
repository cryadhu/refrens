import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    height: 250,
    justifyContent: "flex-end",
  },
  infoContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: "InterBold",
    color: colors.white,
  },
  episodeName: {
    color: colors.black,
    marginLeft: 10,
    fontSize: 20,
  },
  scroll: {
    paddingVertical: 10,
    flexGrow: 1,
  },
  episodeTitle: {
    marginBottom: 10,
  },
});

export default styles;
