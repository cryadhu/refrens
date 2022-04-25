import { StyleSheet, Text, TextProps } from "react-native";
import colors from "../utils/color";

const styles = StyleSheet.create({
  root: {
    fontFamily: "InterRegular",
    color: colors.white,
  },
});

const TextView = (props: TextProps) => {
  return <Text style={styles.root} {...props} />;
};

export default TextView;
