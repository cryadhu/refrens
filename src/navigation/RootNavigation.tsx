import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CharacterList from "../screens/CharacterList";
import { NAVIGATION } from "./helper";
import CharacterView from "../screens/CharacterView";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION.CharacterList} component={CharacterList} />
        <Stack.Screen name={NAVIGATION.CharacterView} component={CharacterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
