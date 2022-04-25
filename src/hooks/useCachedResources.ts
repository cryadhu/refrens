import { useFonts } from "expo-font";

const useCachedResources = () => {
  const [loaded] = useFonts({
    InterRegular: require("../../assets/fonts/interRegular.ttf"),
    InterBold: require("../../assets/fonts/interBold.ttf"),
  });

  return loaded;
};

export default useCachedResources;
