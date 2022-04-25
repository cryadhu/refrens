import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Characters } from "../types/response/characters";
import { ButtonProps } from "../types/components/button";

import colors from "../utils/color";
import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 5,
    width: "100%",
  },
  image: {
    flex: 1,
    height: 200,
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
});

const CharacterItem = (
  props: {
    data: Characters;
  } & ButtonProps
) => {
  const { data, onPress } = props;
  const { name, image, species, status } = data;

  const onItemClick = () => {
    if (typeof onPress === "function") {
      onPress(data);
    }
  };

  return (
    <TouchableOpacity onPress={onItemClick} containerStyle={styles.root}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.infoContainer}>
          <TextView numberOfLines={1} style={styles.name}>
            {name}
          </TextView>
          <TextView>{`${status}-${species}`}</TextView>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharacterItem;
