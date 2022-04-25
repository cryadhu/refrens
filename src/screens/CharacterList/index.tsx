import React from "react";
import { useNavigation } from "@react-navigation/native";

import CharacterListContainer from "../../containers/CharacterListContainer";
import StatusBar from "../../components/StatusBar";
import { NAVIGATION } from "../../navigation/helper";
import { Characters } from "../../types/response/characters";

const CharacterList = () => {
  const navigation = useNavigation();

  const openDetail = (item?: Characters) => {
    navigation.navigate(
      NAVIGATION.CharacterView as never,
      {
        item,
      } as never
    );
  };

  return (
    <>
      <StatusBar />
      <CharacterListContainer openDetail={openDetail} />
    </>
  );
};

export default CharacterList;
