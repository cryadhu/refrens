import React from "react";
import { StyleSheet } from "react-native";

import RootNavigation from "./src/navigation/RootNavigation";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const resourcesLoaded = useCachedResources();

  if (!resourcesLoaded) {
    return null;
  }

  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
