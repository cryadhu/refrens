import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { ENDPOINT } from "../../api";
import CharacterItem from "../../components/CharacterItem";
import useService from "../../hooks/useService";
import { CharacterListProps } from "../../types/containers/characterList";
import { CharacterResponse, Characters } from "../../types/response/characters";

const CharacterListContainer = (props: CharacterListProps) => {
  const { openDetail } = props;
  const [endpoint, setEndpoint] = useState(ENDPOINT.CHARACTERS);
  const [data, setData] = useState<Array<Characters>>([]);
  const characterResponse = useService<CharacterResponse>(endpoint);
  const [pages, setPages] = useState(0);
  const { loading, response, error } = characterResponse;

  useEffect(() => {
    if (response?.info && !pages) {
      setPages(response.info.pages);
    }
    setData([...data, ...(response?.results || [])]);
  }, [response]);

  const onEndReached = () => {
    if (response) {
      setEndpoint(response.info.next);
    }
  };

  const renderItem = ({ item }: { item: Characters }) => (
    <CharacterItem data={item} onPress={openDetail} />
  );

  if (response) {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={onEndReached}
      />
    );
  }
  return <Text>No Data</Text>;
};

export default CharacterListContainer;
