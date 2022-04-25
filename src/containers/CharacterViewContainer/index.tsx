import React from "react";
import { ImageBackground, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ENDPOINT } from "../../api";
import useService from "../../hooks/useService";
import CharacterViewNavigation from "../../types/containers/characterView";
import TextView from "../../components/TextView";
import styles from "./style";
import { EpisodeResponse } from "../../types/response/episodes";
import { ScrollView } from "react-native-gesture-handler";

const CharacterViewContainer = () => {
  const route = useRoute<RouteProp<CharacterViewNavigation, "CharacterView">>();
  const { image, name, species, status, location, episode } =
    route.params.item || {};

  const episodeIds: Array<string> = [];
  episode?.forEach((it) => {
    episodeIds.push(it.split("episode/")[1]);
  });
  const characterResponse = useService<EpisodeResponse | { name: string }>(
    `${ENDPOINT.EPISODES}/${episodeIds.join()}`
  );

  const { response, loading } = characterResponse;
  if (loading) {
    return null;
  }
  const episodes: EpisodeResponse = [];
  // response can be either array of episodes, or a single episode
  if (!Array.isArray(response)) {
    episodes.push({
      name: response?.name || "",
    });
  } else {
    episodes.push(...response);
  }

  return (
    <View style={styles.root}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.infoContainer}>
          <TextView numberOfLines={1} style={styles.name}>
            {name}
          </TextView>
          <TextView>{`${status}-${species}`}</TextView>
          <TextView numberOfLines={1} style={styles.name}>
            Last known location
          </TextView>
          <TextView>{`${location?.name}`}</TextView>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TextView
          numberOfLines={1}
          style={[styles.name, styles.episodeName, styles.episodeTitle]}
        >
          Episodes
        </TextView>
        {episodes?.map((it) => (
          <TextView
            style={styles.episodeName}
            numberOfLines={1}
            key={`${it.name}`}
          >{`${it.name}`}</TextView>
        ))}
      </ScrollView>
    </View>
  );
  return null;
};

export default CharacterViewContainer;
