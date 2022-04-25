import React from "react";
import { useNavigation } from "@react-navigation/native";

import CharacterViewContainer from "../../containers/CharacterViewContainer";
import StatusBar from "../../components/StatusBar";
import styles from "./style";

const CharacterView = () => {
  return (
    <>
      <StatusBar />
      <CharacterViewContainer />
    </>
  );
};

export default CharacterView;
